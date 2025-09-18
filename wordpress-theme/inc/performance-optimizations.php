<?php
/**
 * Performance Optimizations for Titan Trucking School
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * ===================================================================
 * PERFORMANCE OPTIMIZATIONS
 * ===================================================================
 */

/**
 * Remove jQuery Migrate
 */
function titan_remove_jquery_migrate($scripts) {
    if (!is_admin() && isset($scripts->registered['jquery'])) {
        $script = $scripts->registered['jquery'];
        if ($script->deps) {
            $script->deps = array_diff($script->deps, array('jquery-migrate'));
        }
    }
}
add_action('wp_default_scripts', 'titan_remove_jquery_migrate');

/**
 * Defer JavaScript Loading
 */
function titan_defer_javascript($tag, $handle, $src) {
    // Skip deferring for admin pages and login
    if (is_admin() || is_login()) {
        return $tag;
    }
    
    // Scripts to defer (excluding critical ones)
    $defer_scripts = array(
        'titan-enhanced-js',
        'contact-reply',
        'wp-embed'
    );
    
    if (in_array($handle, $defer_scripts)) {
        return str_replace('<script ', '<script defer ', $tag);
    }
    
    return $tag;
}
add_filter('script_loader_tag', 'titan_defer_javascript', 10, 3);

/**
 * Preload Critical Resources
 */
function titan_preload_critical_resources() {
    // Preload critical CSS
    echo '<link rel="preload" href="' . get_stylesheet_uri() . '" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">' . "\n";
    
    // Preload critical fonts
    echo '<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">' . "\n";
    
    // DNS prefetch for external resources
    echo '<link rel="dns-prefetch" href="//fonts.googleapis.com">' . "\n";
    echo '<link rel="dns-prefetch" href="//cdnjs.cloudflare.com">' . "\n";
    echo '<link rel="dns-prefetch" href="//www.google-analytics.com">' . "\n";
    
    // Preconnect to critical origins
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' . "\n";
}
add_action('wp_head', 'titan_preload_critical_resources', 1);

/**
 * Optimize Database Queries
 */
function titan_optimize_database_queries() {
    // Remove unnecessary queries
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
}
add_action('init', 'titan_optimize_database_queries');

/**
 * Optimize Images
 */
function titan_optimize_images() {
    // Add WebP support
    function titan_webp_support($mime_types) {
        $mime_types['webp'] = 'image/webp';
        return $mime_types;
    }
    add_filter('upload_mimes', 'titan_webp_support');
    
    // Add responsive images support
    add_theme_support('post-thumbnails');
    add_image_size('hero-large', 1920, 1080, true);
    add_image_size('hero-medium', 1366, 768, true);
    add_image_size('hero-small', 768, 432, true);
    add_image_size('card-image', 400, 250, true);
    add_image_size('thumbnail-large', 300, 300, true);
}
add_action('after_setup_theme', 'titan_optimize_images');

/**
 * Implement Lazy Loading for Images
 */
function titan_add_lazy_loading($content) {
    if (is_admin() || is_feed() || (defined('DOING_AJAX') && DOING_AJAX)) {
        return $content;
    }
    
    // Add loading="lazy" to images
    $content = preg_replace('/<img([^>]+?)>/i', '<img$1 loading="lazy">', $content);
    
    return $content;
}
add_filter('the_content', 'titan_add_lazy_loading');
add_filter('post_thumbnail_html', 'titan_add_lazy_loading');

/**
 * Minify HTML Output
 */
function titan_minify_html($html) {
    if (is_admin() || wp_doing_ajax() || (defined('WP_DEBUG') && WP_DEBUG)) {
        return $html;
    }
    
    // Remove unnecessary whitespace and comments
    $html = preg_replace('/<!--(?!<!)[^\[>].*?-->/s', '', $html);
    $html = preg_replace('/\s+/', ' ', $html);
    $html = preg_replace('/>\s+</', '><', $html);
    
    return trim($html);
}
add_action('get_header', function() {
    if (!is_admin()) {
        ob_start('titan_minify_html');
    }
});

/**
 * Cache Buster for Static Assets
 */
function titan_cache_buster($src) {
    if (strpos($src, get_template_directory_uri()) !== false) {
        $theme_version = wp_get_theme()->get('Version');
        $src = add_query_arg('ver', $theme_version, $src);
    }
    return $src;
}
add_filter('style_loader_src', 'titan_cache_buster');
add_filter('script_loader_src', 'titan_cache_buster');

/**
 * Implement Browser Caching Headers
 */
function titan_add_caching_headers() {
    if (!is_admin()) {
        // Set cache headers for static assets
        header('Cache-Control: public, max-age=31536000'); // 1 year for static assets
        
        // Add ETag for better caching
        $etag = md5(get_template_directory() . filemtime(get_template_directory() . '/style.css'));
        header('ETag: "' . $etag . '"');
        
        // Add Vary header
        header('Vary: Accept-Encoding');
    }
}
add_action('wp_loaded', 'titan_add_caching_headers');

/**
 * Optimize WordPress Queries
 */
function titan_optimize_wp_queries($query) {
    if (!is_admin() && $query->is_main_query()) {
        // Limit posts per page for better performance
        if (is_home() || is_archive()) {
            $query->set('posts_per_page', 12);
        }
        
        // Optimize search queries
        if (is_search()) {
            $query->set('posts_per_page', 10);
            $query->set('post_type', array('post', 'page', 'titan_program', 'titan_testimonial'));
        }
    }
}
add_action('pre_get_posts', 'titan_optimize_wp_queries');

/**
 * Remove Unused WordPress Features
 */
function titan_remove_unused_features() {
    // Remove XML-RPC
    add_filter('xmlrpc_enabled', '__return_false');
    
    // Remove Windows Live Writer support
    remove_action('wp_head', 'wlwmanifest_link');
    
    // Remove RSD link
    remove_action('wp_head', 'rsd_link');
    
    // Remove WordPress version from head
    remove_action('wp_head', 'wp_generator');
    
    // Remove feed links if not needed
    if (!get_theme_mod('show_rss_feeds', false)) {
        remove_action('wp_head', 'feed_links', 2);
        remove_action('wp_head', 'feed_links_extra', 3);
    }
}
add_action('init', 'titan_remove_unused_features');

/**
 * Implement Critical CSS Inlining
 */
function titan_inline_critical_css() {
    $critical_css = get_template_directory() . '/assets/css/critical.css';
    
    if (file_exists($critical_css)) {
        echo '<style id="critical-css">' . file_get_contents($critical_css) . '</style>';
    }
}
add_action('wp_head', 'titan_inline_critical_css', 2);

/**
 * Optimize Contact Form Performance
 */
function titan_optimize_contact_form() {
    // Only load contact form scripts on contact page
    if (!is_page('contact')) {
        // Remove contact form related scripts if not on contact page
        wp_dequeue_script('contact-form-7');
        wp_dequeue_style('contact-form-7');
    }
}
add_action('wp_enqueue_scripts', 'titan_optimize_contact_form', 20);

/**
 * Database Cleanup Functions
 */
function titan_database_cleanup() {
    global $wpdb;
    
    // Clean up spam comments
    $wpdb->query("DELETE FROM {$wpdb->comments} WHERE comment_approved = 'spam' AND comment_date < DATE_SUB(NOW(), INTERVAL 30 DAY)");
    
    // Clean up trashed posts older than 30 days
    $wpdb->query("DELETE FROM {$wpdb->posts} WHERE post_status = 'trash' AND post_modified < DATE_SUB(NOW(), INTERVAL 30 DAY)");
    
    // Clean up expired transients
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_%' AND option_value < UNIX_TIMESTAMP()");
}

// Schedule database cleanup (weekly)
if (!wp_next_scheduled('titan_database_cleanup')) {
    wp_schedule_event(time(), 'weekly', 'titan_database_cleanup');
}
add_action('titan_database_cleanup', 'titan_database_cleanup');

/**
 * Implement Object Caching for Theme Data
 */
function titan_cache_theme_data($key, $data, $expiration = 3600) {
    if (function_exists('wp_cache_set')) {
        wp_cache_set($key, $data, 'titan_theme', $expiration);
    } else {
        set_transient('titan_' . $key, $data, $expiration);
    }
}

function titan_get_cached_data($key) {
    if (function_exists('wp_cache_get')) {
        return wp_cache_get($key, 'titan_theme');
    } else {
        return get_transient('titan_' . $key);
    }
}

/**
 * Cache CDL Programs Data
 */
function titan_get_cached_programs() {
    $cached_programs = titan_get_cached_data('cdl_programs');
    
    if ($cached_programs === false) {
        $cached_programs = titan_get_cdl_programs();
        titan_cache_theme_data('cdl_programs', $cached_programs, 3600); // Cache for 1 hour
    }
    
    return $cached_programs;
}

/**
 * Cache FAQ Data
 */
function titan_get_cached_faq() {
    $cached_faq = titan_get_cached_data('faq_categories');
    
    if ($cached_faq === false) {
        $cached_faq = titan_get_faq_categories();
        titan_cache_theme_data('faq_categories', $cached_faq, 7200); // Cache for 2 hours
    }
    
    return $cached_faq;
}

/**
 * Cache Success Stories Data
 */
function titan_get_cached_success_stories() {
    $cached_stories = titan_get_cached_data('success_stories');
    
    if ($cached_stories === false) {
        $cached_stories = titan_get_success_stories();
        titan_cache_theme_data('success_stories', $cached_stories, 3600); // Cache for 1 hour
    }
    
    return $cached_stories;
}

/**
 * Clear Theme Cache on Theme Activation/Update
 */
function titan_clear_theme_cache() {
    // Clear all theme-related transients
    $transients = array(
        'titan_cdl_programs',
        'titan_faq_categories',
        'titan_success_stories',
        'titan_locations'
    );
    
    foreach ($transients as $transient) {
        delete_transient($transient);
    }
    
    // Clear object cache if available
    if (function_exists('wp_cache_flush_group')) {
        wp_cache_flush_group('titan_theme');
    }
}
add_action('after_switch_theme', 'titan_clear_theme_cache');
add_action('wp_ajax_titan_clear_cache', 'titan_clear_theme_cache');

/**
 * Add Performance Monitoring
 */
function titan_performance_monitor() {
    if (defined('WP_DEBUG') && WP_DEBUG) {
        $queries = get_num_queries();
        $timer_stop = timer_stop();
        $memory = size_format(memory_get_peak_usage());
        
        echo "<!-- Performance Stats: {$queries} queries in {$timer_stop} seconds, using {$memory} memory -->";
    }
}
add_action('wp_footer', 'titan_performance_monitor');

/**
 * Service Worker for Progressive Web App (PWA) Features
 */
function titan_add_service_worker() {
    if (!is_admin()) {
        ?>
        <script>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('<?php echo home_url('/sw.js'); ?>')
                    .then(function(registration) {
                        console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
        </script>
        <?php
    }
}
add_action('wp_footer', 'titan_add_service_worker');

/**
 * Optimize Admin Performance
 */
function titan_optimize_admin_performance() {
    if (is_admin()) {
        // Remove unnecessary admin features
        remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
        remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
        remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
        
        // Limit admin queries
        add_filter('heartbeat_settings', function($settings) {
            $settings['interval'] = 60; // Slow down heartbeat
            return $settings;
        });
    }
}
add_action('admin_init', 'titan_optimize_admin_performance');

/**
 * Resource Hints for Better Performance
 */
function titan_add_resource_hints() {
    // Prefetch next likely pages
    if (is_front_page()) {
        echo '<link rel="prefetch" href="' . home_url('/programs') . '">';
        echo '<link rel="prefetch" href="' . home_url('/contact') . '">';
    }
    
    // Preload key resources
    echo '<link rel="preload" href="' . get_template_directory_uri() . '/assets/js/titan-enhanced.js" as="script">';
}
add_action('wp_head', 'titan_add_resource_hints', 5);

?>