<?php
/**
 * Titan Trucking School WordPress Theme Functions
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function titan_trucking_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Set content width
    $GLOBALS['content_width'] = 1200;
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'titan-trucking'),
        'footer' => __('Footer Menu', 'titan-trucking'),
    ));
    
    // Add image sizes
    add_image_size('hero-large', 1200, 600, true);
    add_image_size('program-thumb', 400, 250, true);
    add_image_size('testimonial-thumb', 150, 150, true);
}
add_action('after_setup_theme', 'titan_trucking_setup');

/**
 * Enqueue Scripts and Styles
 */
function titan_trucking_scripts() {
    // Main stylesheet
    wp_enqueue_style('titan-trucking-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Custom JavaScript
    wp_enqueue_script('titan-trucking-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('titan-trucking-main', 'titan_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('titan_nonce'),
    ));
    
    // Font Awesome for icons
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', array(), '6.0.0');
}
add_action('wp_enqueue_scripts', 'titan_trucking_scripts');

/**
 * Widget Areas
 */
function titan_trucking_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'titan-trucking'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here to appear in your sidebar.', 'titan-trucking'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Area 1', 'titan-trucking'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in footer column 1.', 'titan-trucking'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Area 2', 'titan-trucking'),
        'id'            => 'footer-2',
        'description'   => __('Add widgets here to appear in footer column 2.', 'titan-trucking'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Area 3', 'titan-trucking'),
        'id'            => 'footer-3',
        'description'   => __('Add widgets here to appear in footer column 3.', 'titan-trucking'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'titan_trucking_widgets_init');

/**
 * Custom Post Types
 */
function titan_trucking_custom_post_types() {
    // Programs Post Type
    register_post_type('programs', array(
        'labels' => array(
            'name' => __('CDL Programs', 'titan-trucking'),
            'singular_name' => __('CDL Program', 'titan-trucking'),
            'add_new' => __('Add New Program', 'titan-trucking'),
            'add_new_item' => __('Add New CDL Program', 'titan-trucking'),
            'edit_item' => __('Edit CDL Program', 'titan-trucking'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-tools',
        'rewrite' => array('slug' => 'programs'),
    ));
    
    // Testimonials Post Type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => __('Student Success Stories', 'titan-trucking'),
            'singular_name' => __('Success Story', 'titan-trucking'),
            'add_new' => __('Add New Story', 'titan-trucking'),
            'add_new_item' => __('Add New Success Story', 'titan-trucking'),
            'edit_item' => __('Edit Success Story', 'titan-trucking'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-star-filled',
        'rewrite' => array('slug' => 'success-stories'),
    ));
    
    // Instructors Post Type
    register_post_type('instructors', array(
        'labels' => array(
            'name' => __('Instructors', 'titan-trucking'),
            'singular_name' => __('Instructor', 'titan-trucking'),
            'add_new' => __('Add New Instructor', 'titan-trucking'),
            'add_new_item' => __('Add New Instructor', 'titan-trucking'),
            'edit_item' => __('Edit Instructor', 'titan-trucking'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-admin-users',
        'rewrite' => array('slug' => 'instructors'),
    ));
}
add_action('init', 'titan_trucking_custom_post_types');

/**
 * Custom Fields for Programs
 */
function titan_trucking_program_meta_boxes() {
    add_meta_box(
        'program_details',
        __('Program Details', 'titan-trucking'),
        'titan_trucking_program_meta_callback',
        'programs',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'titan_trucking_program_meta_boxes');

function titan_trucking_program_meta_callback($post) {
    wp_nonce_field('titan_trucking_program_meta', 'titan_trucking_program_nonce');
    
    $duration = get_post_meta($post->ID, '_program_duration', true);
    $price = get_post_meta($post->ID, '_program_price', true);
    $salary = get_post_meta($post->ID, '_program_salary', true);
    $features = get_post_meta($post->ID, '_program_features', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="program_duration"><?php _e('Duration', 'titan-trucking'); ?></label></th>
            <td><input type="text" id="program_duration" name="program_duration" value="<?php echo esc_attr($duration); ?>" /></td>
        </tr>
        <tr>
            <th><label for="program_price"><?php _e('Price', 'titan-trucking'); ?></label></th>
            <td><input type="text" id="program_price" name="program_price" value="<?php echo esc_attr($price); ?>" /></td>
        </tr>
        <tr>
            <th><label for="program_salary"><?php _e('Starting Salary', 'titan-trucking'); ?></label></th>
            <td><input type="text" id="program_salary" name="program_salary" value="<?php echo esc_attr($salary); ?>" /></td>
        </tr>
        <tr>
            <th><label for="program_features"><?php _e('Key Features (one per line)', 'titan-trucking'); ?></label></th>
            <td><textarea id="program_features" name="program_features" rows="5" cols="50"><?php echo esc_textarea($features); ?></textarea></td>
        </tr>
    </table>
    <?php
}

function titan_trucking_save_program_meta($post_id) {
    if (!isset($_POST['titan_trucking_program_nonce']) || !wp_verify_nonce($_POST['titan_trucking_program_nonce'], 'titan_trucking_program_meta')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['program_duration'])) {
        update_post_meta($post_id, '_program_duration', sanitize_text_field($_POST['program_duration']));
    }
    
    if (isset($_POST['program_price'])) {
        update_post_meta($post_id, '_program_price', sanitize_text_field($_POST['program_price']));
    }
    
    if (isset($_POST['program_salary'])) {
        update_post_meta($post_id, '_program_salary', sanitize_text_field($_POST['program_salary']));
    }
    
    if (isset($_POST['program_features'])) {
        update_post_meta($post_id, '_program_features', sanitize_textarea_field($_POST['program_features']));
    }
}
add_action('save_post', 'titan_trucking_save_program_meta');

/**
 * Contact Form Handler
 */
function titan_trucking_contact_form_handler() {
    if (!isset($_POST['titan_contact_nonce']) || !wp_verify_nonce($_POST['titan_contact_nonce'], 'titan_contact_form')) {
        wp_die(__('Security check failed.', 'titan-trucking'));
    }
    
    $name = sanitize_text_field($_POST['contact_name']);
    $email = sanitize_email($_POST['contact_email']);
    $phone = sanitize_text_field($_POST['contact_phone']);
    $message = sanitize_textarea_field($_POST['contact_message']);
    $program = sanitize_text_field($_POST['program_interest']);
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($phone)) {
        wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
        exit;
    }
    
    // Send email
    $to = get_option('admin_email');
    $subject = __('New Contact Form Submission - Titan Trucking School', 'titan-trucking');
    $email_message = sprintf(
        __("New contact form submission:\n\nName: %s\nEmail: %s\nPhone: %s\nProgram Interest: %s\n\nMessage:\n%s", 'titan-trucking'),
        $name,
        $email,
        $phone,
        $program,
        $message
    );
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
        'Reply-To: ' . $name . ' <' . $email . '>'
    );
    
    if (wp_mail($to, $subject, $email_message, $headers)) {
        wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
    }
    exit;
}
add_action('wp', function() {
    if (isset($_POST['action']) && $_POST['action'] === 'titan_contact_form') {
        titan_trucking_contact_form_handler();
    }
});

/**
 * Customizer Settings
 */
function titan_trucking_customize_register($wp_customize) {
    // Contact Information Section
    $wp_customize->add_section('titan_contact_info', array(
        'title' => __('Contact Information', 'titan-trucking'),
        'priority' => 120,
    ));
    
    // Phone Number
    $wp_customize->add_setting('titan_phone', array(
        'default' => '(612) 699-1403',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('titan_phone', array(
        'label' => __('Phone Number', 'titan-trucking'),
        'section' => 'titan_contact_info',
        'type' => 'text',
    ));
    
    // Address
    $wp_customize->add_setting('titan_address', array(
        'default' => '1234 Training Drive, St. Paul, MN 55101',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('titan_address', array(
        'label' => __('Address', 'titan-trucking'),
        'section' => 'titan_contact_info',
        'type' => 'textarea',
    ));
    
    // Business Hours
    $wp_customize->add_setting('titan_hours', array(
        'default' => 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('titan_hours', array(
        'label' => __('Business Hours', 'titan-trucking'),
        'section' => 'titan_contact_info',
        'type' => 'text',
    ));
}
add_action('customize_register', 'titan_trucking_customize_register');

/**
 * Helper Functions
 */
function titan_get_programs($limit = -1) {
    return get_posts(array(
        'post_type' => 'programs',
        'posts_per_page' => $limit,
        'post_status' => 'publish'
    ));
}

function titan_get_testimonials($limit = 3) {
    return get_posts(array(
        'post_type' => 'testimonials',
        'posts_per_page' => $limit,
        'post_status' => 'publish'
    ));
}

function titan_get_instructors($limit = -1) {
    return get_posts(array(
        'post_type' => 'instructors',
        'posts_per_page' => $limit,
        'post_status' => 'publish'
    ));
}

/**
 * SEO Meta Tags
 */
function titan_trucking_seo_meta() {
    if (is_front_page()) {
        echo '<meta name="description" content="Transform your life with professional CDL training at Minnesota\'s premier trucking school. 98% pass rate, job placement guarantee, $62K average starting salary.">' . "\n";
        echo '<meta name="keywords" content="CDL training Minnesota, truck driving school St Paul, commercial drivers license training, CDL school near me, trucking career Minnesota">' . "\n";
    }
    
    echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
    echo '<meta property="og:type" content="website">' . "\n";
    echo '<meta property="og:site_name" content="' . get_bloginfo('name') . '">' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
}
add_action('wp_head', 'titan_trucking_seo_meta');