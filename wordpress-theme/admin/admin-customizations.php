<?php
/**
 * WordPress Admin Customizations for Titan Trucking School
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
 * ADMIN DASHBOARD CUSTOMIZATIONS
 * ===================================================================
 */

/**
 * Customize Admin Dashboard
 */
function titan_customize_admin_dashboard() {
    // Remove default WordPress widgets
    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
    remove_meta_box('dashboard_primary', 'dashboard', 'side');
    remove_meta_box('dashboard_secondary', 'dashboard', 'normal');
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
    remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');
    
    // Add custom dashboard widgets
    add_meta_box('titan_welcome', 'Welcome to Titan Trucking School', 'titan_dashboard_welcome_widget', 'dashboard', 'normal', 'high');
    add_meta_box('titan_quick_stats', 'Quick Statistics', 'titan_dashboard_stats_widget', 'dashboard', 'side', 'high');
    add_meta_box('titan_contact_submissions', 'Recent Contact Submissions', 'titan_dashboard_contacts_widget', 'dashboard', 'normal', 'core');
}
add_action('wp_dashboard_setup', 'titan_customize_admin_dashboard');

/**
 * Welcome Dashboard Widget
 */
function titan_dashboard_welcome_widget() {
    ?>
    <div class="titan-welcome-widget" style="padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 20px;">
            <div style="width: 60px; height: 60px; background: linear-gradient(45deg, #1e40af, #fbbf24); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 20px;">
                <i class="fas fa-truck" style="color: white; font-size: 24px;"></i>
            </div>
            <div>
                <h2 style="margin: 0; color: #1e40af;">Welcome to Titan Trucking School</h2>
                <p style="margin: 5px 0 0 0; color: #666;">Manage your CDL training school website</p>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
            <a href="<?php echo admin_url('edit.php?post_type=page'); ?>" class="titan-dashboard-card">
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; text-decoration: none; color: #1e40af; border: 1px solid #e0f2fe;">
                    <h4 style="margin: 0 0 5px 0;"><i class="fas fa-file-alt"></i> Pages</h4>
                    <p style="margin: 0; font-size: 13px;">Manage website pages</p>
                </div>
            </a>
            
            <a href="<?php echo admin_url('themes.php?page=titan-settings'); ?>" class="titan-dashboard-card">
                <div style="background: #fff7ed; padding: 15px; border-radius: 8px; text-decoration: none; color: #ea580c; border: 1px solid #fed7aa;">
                    <h4 style="margin: 0 0 5px 0;"><i class="fas fa-cog"></i> Settings</h4>
                    <p style="margin: 0; font-size: 13px;">School information & contact details</p>
                </div>
            </a>
            
            <a href="<?php echo admin_url('edit.php?post_type=titan_program'); ?>" class="titan-dashboard-card">
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; text-decoration: none; color: #166534; border: 1px solid #bbf7d0;">
                    <h4 style="margin: 0 0 5px 0;"><i class="fas fa-graduation-cap"></i> Programs</h4>
                    <p style="margin: 0; font-size: 13px;">Manage CDL training programs</p>
                </div>
            </a>
            
            <a href="<?php echo admin_url('edit.php?post_type=titan_testimonial'); ?>" class="titan-dashboard-card">
                <div style="background: #fdf4ff; padding: 15px; border-radius: 8px; text-decoration: none; color: #7c2d12; border: 1px solid #e9d5ff;">
                    <h4 style="margin: 0 0 5px 0;"><i class="fas fa-star"></i> Testimonials</h4>
                    <p style="margin: 0; font-size: 13px;">Success stories & reviews</p>
                </div>
            </a>
        </div>
        
        <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #1e40af;">
            <h4 style="margin: 0 0 10px 0; color: #1e40af;">Quick Tips</h4>
            <ul style="margin: 0; padding-left: 20px; color: #4b5563;">
                <li>Update contact forms regularly to capture leads effectively</li>
                <li>Keep program information current with latest pricing and schedules</li>
                <li>Add new success stories to build trust with prospects</li>
                <li>Check SEO settings to improve search engine visibility</li>
            </ul>
        </div>
    </div>
    <?php
}

/**
 * Quick Stats Dashboard Widget
 */
function titan_dashboard_stats_widget() {
    // Get some basic stats
    $pages_count = wp_count_posts('page')->publish;
    $programs_count = wp_count_posts('titan_program')->publish ?? 0;
    $testimonials_count = wp_count_posts('titan_testimonial')->publish ?? 0;
    
    ?>
    <div style="padding: 15px;">
        <div style="text-align: center; margin-bottom: 20px;">
            <div style="background: linear-gradient(45deg, #1e40af, #fbbf24); color: white; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0; font-size: 2em;">98%</h3>
                <p style="margin: 5px 0 0 0;">Pass Rate Guarantee</p>
            </div>
        </div>
        
        <div style="space-y: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="color: #4b5563;">Published Pages</span>
                <strong style="color: #1e40af;"><?php echo $pages_count; ?></strong>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="color: #4b5563;">CDL Programs</span>
                <strong style="color: #059669;"><?php echo $programs_count; ?></strong>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                <span style="color: #4b5563;">Testimonials</span>
                <strong style="color: #dc2626;"><?php echo $testimonials_count; ?></strong>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0;">
                <span style="color: #4b5563;">Last Updated</span>
                <strong style="color: #4b5563; font-size: 12px;"><?php echo date('M j, Y'); ?></strong>
            </div>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
            <a href="<?php echo home_url(); ?>" target="_blank" class="button button-primary" style="width: 100%;">
                <i class="fas fa-external-link-alt"></i> View Website
            </a>
        </div>
    </div>
    <?php
}

/**
 * Contact Submissions Widget
 */
function titan_dashboard_contacts_widget() {
    ?>
    <div style="padding: 15px;">
        <p style="color: #4b5563; font-style: italic; text-align: center;">
            Contact form submissions will appear here once the contact form is used.
        </p>
        
        <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin-top: 15px;">
            <h4 style="margin: 0 0 10px 0; color: #0ea5e9;">
                <i class="fas fa-info-circle"></i> Pro Tip
            </h4>
            <p style="margin: 0; color: #4b5563; font-size: 13px;">
                Install a contact form plugin like Contact Form 7 or WPForms to track leads and inquiries from prospective students.
            </p>
        </div>
    </div>
    <?php
}

/**
 * ===================================================================
 * CUSTOM POST TYPES
 * ===================================================================
 */

/**
 * Register CDL Programs Custom Post Type
 */
function titan_register_programs_post_type() {
    register_post_type('titan_program', array(
        'labels' => array(
            'name' => 'CDL Programs',
            'singular_name' => 'CDL Program',
            'menu_name' => 'CDL Programs',
            'add_new' => 'Add New Program',
            'add_new_item' => 'Add New CDL Program',
            'edit_item' => 'Edit CDL Program',
            'new_item' => 'New CDL Program',
            'view_item' => 'View CDL Program',
            'search_items' => 'Search Programs',
            'not_found' => 'No programs found',
            'not_found_in_trash' => 'No programs found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-car',
        'menu_position' => 20,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'programs'),
        'show_in_rest' => true
    ));
}

/**
 * Register Testimonials Custom Post Type
 */
function titan_register_testimonials_post_type() {
    register_post_type('titan_testimonial', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial',
            'menu_name' => 'Success Stories',
            'add_new' => 'Add New Testimonial',
            'add_new_item' => 'Add New Success Story',
            'edit_item' => 'Edit Success Story',
            'new_item' => 'New Success Story',
            'view_item' => 'View Success Story',
            'search_items' => 'Search Success Stories',
            'not_found' => 'No success stories found',
            'not_found_in_trash' => 'No success stories found in trash'
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-star-filled',
        'menu_position' => 21,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'rewrite' => array('slug' => 'success-stories'),
        'show_in_rest' => true
    ));
}

add_action('init', 'titan_register_programs_post_type');
add_action('init', 'titan_register_testimonials_post_type');

/**
 * ===================================================================
 * META BOXES
 * ===================================================================
 */

/**
 * Add Meta Boxes for CDL Programs
 */
function titan_add_program_meta_boxes() {
    add_meta_box(
        'titan_program_details',
        'Program Details',
        'titan_program_details_callback',
        'titan_program',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'titan_add_program_meta_boxes');

/**
 * Program Details Meta Box Callback
 */
function titan_program_details_callback($post) {
    wp_nonce_field('titan_program_details_nonce', 'titan_program_details_nonce');
    
    $duration = get_post_meta($post->ID, '_program_duration', true);
    $price = get_post_meta($post->ID, '_program_price', true);
    $salary_range = get_post_meta($post->ID, '_program_salary_range', true);
    $features = get_post_meta($post->ID, '_program_features', true);
    $prerequisites = get_post_meta($post->ID, '_program_prerequisites', true);
    ?>
    
    <table class="form-table">
        <tr>
            <th><label for="program_duration">Duration</label></th>
            <td><input type="text" id="program_duration" name="program_duration" value="<?php echo esc_attr($duration); ?>" placeholder="e.g., 3-4 weeks" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="program_price">Price</label></th>
            <td><input type="text" id="program_price" name="program_price" value="<?php echo esc_attr($price); ?>" placeholder="e.g., $4,995" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="program_salary_range">Expected Salary Range</label></th>
            <td><input type="text" id="program_salary_range" name="program_salary_range" value="<?php echo esc_attr($salary_range); ?>" placeholder="e.g., $50,000-$70,000/year" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="program_features">Key Features</label></th>
            <td>
                <textarea id="program_features" name="program_features" rows="5" cols="50" class="large-text"><?php echo esc_textarea($features); ?></textarea>
                <p class="description">Enter one feature per line</p>
            </td>
        </tr>
        <tr>
            <th><label for="program_prerequisites">Prerequisites</label></th>
            <td>
                <textarea id="program_prerequisites" name="program_prerequisites" rows="3" cols="50" class="large-text"><?php echo esc_textarea($prerequisites); ?></textarea>
                <p class="description">Requirements for enrollment</p>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Save Program Meta Data
 */
function titan_save_program_meta_data($post_id) {
    if (!isset($_POST['titan_program_details_nonce']) || !wp_verify_nonce($_POST['titan_program_details_nonce'], 'titan_program_details_nonce')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    $fields = array(
        'program_duration' => '_program_duration',
        'program_price' => '_program_price',
        'program_salary_range' => '_program_salary_range',
        'program_features' => '_program_features',
        'program_prerequisites' => '_program_prerequisites'
    );
    
    foreach ($fields as $field => $meta_key) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, $meta_key, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'titan_save_program_meta_data');

/**
 * Add Meta Boxes for Testimonials
 */
function titan_add_testimonial_meta_boxes() {
    add_meta_box(
        'titan_testimonial_details',
        'Success Story Details',
        'titan_testimonial_details_callback',
        'titan_testimonial',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'titan_add_testimonial_meta_boxes');

/**
 * Testimonial Details Meta Box Callback
 */
function titan_testimonial_details_callback($post) {
    wp_nonce_field('titan_testimonial_details_nonce', 'titan_testimonial_details_nonce');
    
    $student_name = get_post_meta($post->ID, '_student_name', true);
    $current_job = get_post_meta($post->ID, '_current_job', true);
    $company = get_post_meta($post->ID, '_company', true);
    $salary = get_post_meta($post->ID, '_salary', true);
    $graduation_year = get_post_meta($post->ID, '_graduation_year', true);
    $rating = get_post_meta($post->ID, '_rating', true);
    ?>
    
    <table class="form-table">
        <tr>
            <th><label for="student_name">Student Name</label></th>
            <td><input type="text" id="student_name" name="student_name" value="<?php echo esc_attr($student_name); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="current_job">Current Job Title</label></th>
            <td><input type="text" id="current_job" name="current_job" value="<?php echo esc_attr($current_job); ?>" placeholder="e.g., CDL-A Driver" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="company">Company</label></th>
            <td><input type="text" id="company" name="company" value="<?php echo esc_attr($company); ?>" placeholder="e.g., Swift Transportation" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="salary">Current Salary</label></th>
            <td><input type="text" id="salary" name="salary" value="<?php echo esc_attr($salary); ?>" placeholder="e.g., $65,000/year" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="graduation_year">Graduation Year</label></th>
            <td><input type="number" id="graduation_year" name="graduation_year" value="<?php echo esc_attr($graduation_year); ?>" min="2015" max="<?php echo date('Y'); ?>" class="small-text" /></td>
        </tr>
        <tr>
            <th><label for="rating">Rating (1-5 stars)</label></th>
            <td>
                <select id="rating" name="rating">
                    <option value="">Select Rating</option>
                    <?php for ($i = 1; $i <= 5; $i++): ?>
                        <option value="<?php echo $i; ?>" <?php selected($rating, $i); ?>><?php echo $i; ?> Star<?php echo $i > 1 ? 's' : ''; ?></option>
                    <?php endfor; ?>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Save Testimonial Meta Data
 */
function titan_save_testimonial_meta_data($post_id) {
    if (!isset($_POST['titan_testimonial_details_nonce']) || !wp_verify_nonce($_POST['titan_testimonial_details_nonce'], 'titan_testimonial_details_nonce')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    $fields = array(
        'student_name' => '_student_name',
        'current_job' => '_current_job',
        'company' => '_company',
        'salary' => '_salary',
        'graduation_year' => '_graduation_year',
        'rating' => '_rating'
    );
    
    foreach ($fields as $field => $meta_key) {
        if (isset($_POST[$field])) {
            update_post_meta($post_id, $meta_key, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'titan_save_testimonial_meta_data');

/**
 * ===================================================================
 * ADMIN SETTINGS PAGE
 * ===================================================================
 */

/**
 * Add Theme Settings Page
 */
function titan_add_admin_menu() {
    add_theme_page(
        'Titan School Settings',
        'School Settings',
        'manage_options',
        'titan-settings',
        'titan_settings_page'
    );
}
add_action('admin_menu', 'titan_add_admin_menu');

/**
 * Settings Page Content
 */
function titan_settings_page() {
    if (isset($_POST['submit'])) {
        $settings = array(
            'school_phone' => sanitize_text_field($_POST['school_phone']),
            'school_email' => sanitize_email($_POST['school_email']),
            'school_address' => sanitize_textarea_field($_POST['school_address']),
            'facebook_url' => esc_url_raw($_POST['facebook_url']),
            'linkedin_url' => esc_url_raw($_POST['linkedin_url']),
            'youtube_url' => esc_url_raw($_POST['youtube_url']),
            'google_analytics' => sanitize_text_field($_POST['google_analytics']),
            'pass_rate' => sanitize_text_field($_POST['pass_rate']),
            'graduates_count' => sanitize_text_field($_POST['graduates_count'])
        );
        
        foreach ($settings as $key => $value) {
            update_option('titan_' . $key, $value);
        }
        
        echo '<div class="notice notice-success"><p>Settings saved successfully!</p></div>';
    }
    
    ?>
    <div class="wrap">
        <h1><i class="fas fa-truck"></i> Titan Trucking School Settings</h1>
        <p>Configure your school information and website settings.</p>
        
        <form method="post" action="">
            <?php wp_nonce_field('titan_settings_nonce'); ?>
            
            <div class="titan-admin-tabs">
                <nav class="nav-tab-wrapper">
                    <a href="#contact-info" class="nav-tab nav-tab-active">Contact Information</a>
                    <a href="#social-media" class="nav-tab">Social Media</a>
                    <a href="#analytics" class="nav-tab">Analytics & SEO</a>
                    <a href="#statistics" class="nav-tab">School Statistics</a>
                </nav>
                
                <div id="contact-info" class="tab-content active">
                    <h2>Contact Information</h2>
                    <table class="form-table">
                        <tr>
                            <th><label for="school_phone">School Phone</label></th>
                            <td><input type="tel" id="school_phone" name="school_phone" value="<?php echo esc_attr(get_option('titan_school_phone', '(555) TITAN-CDL')); ?>" class="regular-text" /></td>
                        </tr>
                        <tr>
                            <th><label for="school_email">School Email</label></th>
                            <td><input type="email" id="school_email" name="school_email" value="<?php echo esc_attr(get_option('titan_school_email', 'info@titantruck.school')); ?>" class="regular-text" /></td>
                        </tr>
                        <tr>
                            <th><label for="school_address">School Address</label></th>
                            <td>
                                <textarea id="school_address" name="school_address" rows="3" class="large-text"><?php echo esc_textarea(get_option('titan_school_address', '123 Trucking Way, Minneapolis, MN 55401')); ?></textarea>
                            </td>
                        </tr>
                    </table>
                </div>
                
                <div id="social-media" class="tab-content">
                    <h2>Social Media Links</h2>
                    <table class="form-table">
                        <tr>
                            <th><label for="facebook_url">Facebook URL</label></th>
                            <td><input type="url" id="facebook_url" name="facebook_url" value="<?php echo esc_url(get_option('titan_facebook_url')); ?>" class="regular-text" /></td>
                        </tr>
                        <tr>
                            <th><label for="linkedin_url">LinkedIn URL</label></th>
                            <td><input type="url" id="linkedin_url" name="linkedin_url" value="<?php echo esc_url(get_option('titan_linkedin_url')); ?>" class="regular-text" /></td>
                        </tr>
                        <tr>
                            <th><label for="youtube_url">YouTube URL</label></th>
                            <td><input type="url" id="youtube_url" name="youtube_url" value="<?php echo esc_url(get_option('titan_youtube_url')); ?>" class="regular-text" /></td>
                        </tr>
                    </table>
                </div>
                
                <div id="analytics" class="tab-content">
                    <h2>Analytics & SEO</h2>
                    <table class="form-table">
                        <tr>
                            <th><label for="google_analytics">Google Analytics ID</label></th>
                            <td>
                                <input type="text" id="google_analytics" name="google_analytics" value="<?php echo esc_attr(get_option('titan_google_analytics')); ?>" placeholder="G-XXXXXXXXXX" class="regular-text" />
                                <p class="description">Enter your Google Analytics 4 Measurement ID</p>
                            </td>
                        </tr>
                    </table>
                </div>
                
                <div id="statistics" class="tab-content">
                    <h2>School Statistics</h2>
                    <table class="form-table">
                        <tr>
                            <th><label for="pass_rate">Pass Rate (%)</label></th>
                            <td><input type="number" id="pass_rate" name="pass_rate" value="<?php echo esc_attr(get_option('titan_pass_rate', '98')); ?>" min="0" max="100" class="small-text" />%</td>
                        </tr>
                        <tr>
                            <th><label for="graduates_count">Total Graduates</label></th>
                            <td><input type="number" id="graduates_count" name="graduates_count" value="<?php echo esc_attr(get_option('titan_graduates_count', '5000')); ?>" class="regular-text" /></td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <?php submit_button('Save Settings'); ?>
        </form>
    </div>
    
    <style>
    .titan-admin-tabs .nav-tab-wrapper {
        margin-bottom: 20px;
    }
    
    .tab-content {
        display: none;
        background: white;
        padding: 20px;
        border: 1px solid #ccd0d4;
        border-top: none;
    }
    
    .tab-content.active {
        display: block;
    }
    </style>
    
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const tabs = document.querySelectorAll('.nav-tab');
        const contents = document.querySelectorAll('.tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active from all tabs and contents
                tabs.forEach(t => t.classList.remove('nav-tab-active'));
                contents.forEach(c => c.classList.remove('active'));
                
                // Add active to clicked tab
                this.classList.add('nav-tab-active');
                
                // Show corresponding content
                const target = this.getAttribute('href').substring(1);
                document.getElementById(target).classList.add('active');
            });
        });
    });
    </script>
    <?php
}

/**
 * ===================================================================
 * ADMIN STYLES & SCRIPTS
 * ===================================================== ============
 */

/**
 * Enqueue Admin Styles and Scripts
 */
function titan_admin_enqueue_scripts($hook) {
    // Only load on our admin pages
    if (strpos($hook, 'titan') !== false || get_post_type() === 'titan_program' || get_post_type() === 'titan_testimonial') {
        wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
        wp_enqueue_style('titan-admin-styles', get_template_directory_uri() . '/admin/admin-styles.css');
    }
}
add_action('admin_enqueue_scripts', 'titan_admin_enqueue_scripts');

/**
 * ===================================================================
 * ADMIN FOOTER TEXT
 * ===================================================================
 */

/**
 * Custom Admin Footer Text
 */
function titan_admin_footer_text() {
    return '<span id="footer-thankyou">Thank you for choosing <a href="https://titantruck.school" target="_blank">Titan Trucking School</a> WordPress Theme.</span>';
}
add_filter('admin_footer_text', 'titan_admin_footer_text');
?>