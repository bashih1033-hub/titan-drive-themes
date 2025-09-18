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
 * WhyTitan Component Data
 */
function titan_get_differentiators() {
    return array(
        array(
            'icon' => 'fas fa-award',
            'title' => '98% Pass Rate Guarantee',
            'description' => 'Industry-leading success rate with money-back guarantee if you don\'t pass on first attempt',
            'highlight' => 'vs 75% industry average',
            'color' => 'text-green-600'
        ),
        array(
            'icon' => 'fas fa-users',
            'title' => '4:1 Student-to-Instructor Ratio',
            'description' => 'Personal attention you won\'t get at large CDL mills. Every student gets individualized training',
            'highlight' => 'vs 12:1 at competitors',
            'color' => 'text-blue-600'
        ),
        array(
            'icon' => 'fas fa-clock',
            'title' => 'Job Placement in 2 Weeks',
            'description' => 'Our industry connections get you hired fast. Average placement time just 14 days after graduation',
            'highlight' => 'vs 6-8 weeks elsewhere',
            'color' => 'text-orange-600'
        ),
        array(
            'icon' => 'fas fa-chart-line',
            'title' => '$8,000+ Higher Starting Salary',
            'description' => 'Our graduates earn more because we train you for premium positions at top-paying companies',
            'highlight' => 'vs generic CDL schools',
            'color' => 'text-purple-600'
        )
    );
}

function titan_get_trust_factors() {
    return array(
        array('label' => 'Years Training Drivers', 'value' => '15+', 'icon' => 'fas fa-shield-alt'),
        array('label' => 'Graduates Placed', 'value' => '4,200+', 'icon' => 'fas fa-users'),
        array('label' => 'Partner Companies', 'value' => '85+', 'icon' => 'fas fa-award'),
        array('label' => 'Average Graduate Salary', 'value' => '$62K', 'icon' => 'fas fa-chart-line')
    );
}

/**
 * Success Stories Component Data
 */
function titan_get_success_stories() {
    return array(
        array(
            'name' => 'Marcus Johnson',
            'age' => 34,
            'location' => 'Minneapolis, MN',
            'salaryIncrease' => '+$18,000/year',
            'timeToHire' => '8 days after graduation',
            'testimonial' => 'Titan didn\'t just teach me to drive a truck - they transformed my entire career trajectory. I went from working dead-end retail jobs to earning $65,000 driving for UPS. The instructors actually cared about my success.',
            'previousJob' => 'Retail Associate',
            'currentJob' => 'UPS Driver',
            'graduationYear' => '2024'
        ),
        array(
            'name' => 'Sarah Martinez',
            'age' => 28,
            'location' => 'St. Paul, MN',
            'salaryIncrease' => '+$22,000/year',
            'timeToHire' => '12 days after graduation',
            'testimonial' => 'As a single mom, I needed a career that could support my family. Titan\'s job placement team connected me with a local delivery company where I\'m home every night making great money.',
            'previousJob' => 'Restaurant Server',
            'currentJob' => 'FedEx Driver',
            'graduationYear' => '2024'
        ),
        array(
            'name' => 'David Chen',
            'age' => 42,
            'location' => 'Bloomington, MN',
            'salaryIncrease' => '+$15,000/year',
            'timeToHire' => '5 days after graduation',
            'testimonial' => 'After 20 years in manufacturing, I thought it was too late for a career change. Titan proved me wrong. I\'m now earning more than ever and love being on the road.',
            'previousJob' => 'Factory Worker',
            'currentJob' => 'Long-Haul Driver',
            'graduationYear' => '2024'
        )
    );
}

/**
 * Enrollment Journey Steps
 */
function titan_get_enrollment_steps() {
    return array(
        array(
            'id' => 1,
            'title' => 'Free Consultation Call',
            'description' => 'Discover if CDL training is right for you with our career counselors',
            'duration' => '15 minutes',
            'icon' => 'fas fa-phone',
            'details' => array(
                'Discuss your career goals and current situation',
                'Learn about different CDL programs and which fits you best',
                'Get transparent information about costs and financing',
                'Ask questions about job placement and earning potential',
                'Schedule your campus visit or start application process'
            ),
            'nextAction' => 'Call our admissions team for your free consultation',
            'ctaText' => 'Get Free Consultation - (612) 699-1403',
            'ctaPhone' => true
        ),
        array(
            'id' => 2,
            'title' => 'Campus Visit & Application',
            'description' => 'Tour our facilities, meet instructors, and complete your application',
            'duration' => '1 hour',
            'icon' => 'fas fa-map-marker-alt',
            'details' => array(
                'See our modern training equipment and driving range',
                'Meet certified instructors with real trucking experience',
                'Complete application and document submission',
                'Discuss financing options and payment plans',
                'Get conditional acceptance pending medical clearance'
            ),
            'nextAction' => 'Schedule your campus visit to see why Titan is different',
            'ctaText' => 'Schedule Campus Visit'
        ),
        array(
            'id' => 3,
            'title' => 'DOT Medical, Permits & ELDT Theory',
            'description' => 'Complete medical certification, obtain permits, and pass ELDT theory requirements',
            'duration' => '1-2 weeks',
            'icon' => 'fas fa-file-text',
            'details' => array(
                'Complete DOT medical examination with certified medical examiner',
                'Study for and pass CDL written knowledge tests at DMV',
                'Obtain your CDL learner\'s permit (CLP) for hands-on training',
                'Complete ELDT (Entry-Level Driver Training) theory requirements',
                'Submit all required documentation and confirm training start date'
            ),
            'nextAction' => 'We guide you through the DOT medical, permit, and ELDT theory process step-by-step'
        ),
        array(
            'id' => 4,
            'title' => 'Professional CDL Training',
            'description' => 'Hands-on training with personalized instruction and real-world experience',
            'duration' => '3-4 weeks',
            'icon' => 'fas fa-graduation-cap',
            'details' => array(
                'Learn pre-trip inspection, backing, and road driving',
                'Practice with modern trucks and professional instructors',
                '4:1 student-to-instructor ratio for personalized attention',
                'Prepare for CDL skills test with confidence',
                'Graduate with job-ready skills and industry connections'
            ),
            'nextAction' => 'Experience the Titan training difference'
        ),
        array(
            'id' => 5,
            'title' => 'Job Placement & Career Launch',
            'description' => 'Get hired fast with our industry connections and career support',
            'duration' => '1-2 weeks',
            'icon' => 'fas fa-briefcase',
            'details' => array(
                'Access exclusive job opportunities with our partner companies',
                'Get resume and interview preparation support',
                'Leverage our relationships with top Minnesota employers',
                'Start earning $50,000+ with benefits and growth opportunities',
                'Receive ongoing career support throughout your first year'
            ),
            'nextAction' => 'Join 4,200+ successful Titan graduates earning great money'
        )
    );
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

/**
 * FAQ Data with Updated Content
 */
function titan_get_faq_categories() {
    return array(
        array(
            'category' => 'Training & Requirements',
            'icon' => 'fas fa-graduation-cap',
            'faqs' => array(
                array(
                    'question' => 'How long does CDL training take at Titan Trucking School?',
                    'answer' => 'CDL training duration varies by program: Class A CDL training takes 3-4 weeks (160 hours), Class B CDL training takes 2-3 weeks (120 hours), and CDL refresher courses take 1-2 weeks (40-80 hours). We offer flexible scheduling including full-time (Monday-Friday) and part-time (evening/weekend) options to fit your schedule.',
                    'keywords' => 'how long CDL training, CDL school duration, Class A CDL weeks, Class B CDL time'
                ),
                array(
                    'question' => 'What are the requirements to start CDL training at Titan Trucking School?',
                    'answer' => 'To start CDL training, you must: be at least 18 years old (21 for interstate driving), have a valid driver\'s license for 1+ years, maintain a clean driving record (3+ years preferred), pass a DOT medical examination, complete a drug screening, and have basic English reading/writing skills. We help guide you through each requirement step-by-step.',
                    'keywords' => 'CDL training requirements Minnesota, CDL school prerequisites, truck driving school requirements'
                )
            )
        ),
        array(
            'category' => 'Costs & Financing',
            'icon' => 'fas fa-dollar-sign',
            'faqs' => array(
                array(
                    'question' => 'How much does CDL training cost at Titan Trucking School?',
                    'answer' => 'CDL training costs vary by program: Class A CDL training is $4,995, Class B CDL training is $3,995, and CDL refresher courses start at $1,995. We offer multiple financing options including flexible in-house payment plans, employer sponsorship programs, and VA benefits for qualified veterans.',
                    'keywords' => 'CDL training cost Minnesota, CDL school tuition, Class A CDL price, Class B CDL cost'
                ),
                array(
                    'question' => 'Does financial aid cover CDL training?',
                    'answer' => 'Yes, CDL training at Titan Trucking School offers multiple financing options. We have flexible in-house payment plans to make training affordable. We also work with Minnesota nonprofits like Avivo and CareerForce that can cover CDL tuition for qualified individuals. These nonprofit partnerships provide additional funding opportunities to help students achieve their career goals.',
                    'keywords' => 'CDL training financing, payment plans CDL school, nonprofit CDL funding Minnesota'
                ),
                array(
                    'question' => 'Can veterans use VA benefits for CDL training?',
                    'answer' => 'Yes, veterans can use VA education benefits including the GI Bill for CDL training at Titan Trucking School. VA benefits can cover tuition and fees for qualified veterans seeking professional CDL training.',
                    'keywords' => 'VA benefits CDL training, GI Bill trucking school, veterans CDL training Minnesota'
                )
            )
        ),
        array(
            'category' => 'Job Placement & Career Opportunities',
            'icon' => 'fas fa-users',
            'faqs' => array(
                array(
                    'question' => 'How much money can I make as a truck driver in Minnesota?',
                    'answer' => 'Truck driver salaries in Minnesota vary by experience and route type. Entry-level Class A CDL drivers earn $50,000-$65,000 annually, experienced drivers earn $65,000-$85,000+, and specialized hauling (hazmat, oversized loads) can exceed $90,000. Local Class B drivers typically earn $40,000-$55,000, while owner-operators can earn $100,000-$150,000+ annually.',
                    'keywords' => 'truck driver salary Minnesota, CDL driver pay Minnesota, trucking wages Minneapolis St Paul'
                ),
                array(
                    'question' => 'Do you help graduates find truck driving jobs?',
                    'answer' => 'Yes, Titan Trucking School provides comprehensive job placement assistance to all graduates. We maintain partnerships with over 85 trucking companies in Minnesota and surrounding states. Our career services include resume writing, interview preparation, job matching based on your preferences, and ongoing support during your first year of employment.',
                    'keywords' => 'CDL job placement Minnesota, truck driving jobs after training, trucking companies hiring Minnesota'
                )
            )
        )
    );
}

/**
 * Updated Financing Options (Federal Aid Removed)
 */
function titan_get_financing_options() {
    return array(
        array(
            'title' => 'Payment Plans',
            'description' => 'Flexible payment options to spread costs over training period',
            'icon' => 'fas fa-calendar'
        ),
        array(
            'title' => 'Employer Sponsorship',
            'description' => 'Many trucking companies will pay for your training in exchange for employment commitment',
            'icon' => 'fas fa-users'
        ),
        array(
            'title' => 'VA Benefits',
            'description' => 'Veterans can use VA education benefits for CDL training',
            'icon' => 'fas fa-shield-alt'
        )
    );
}

/**
 * Enhanced Contact Form with Multi-step Support
 */
function titan_enhanced_contact_form_handler() {
    if (!isset($_POST['titan_contact_nonce']) || !wp_verify_nonce($_POST['titan_contact_nonce'], 'titan_contact_form')) {
        wp_die(__('Security check failed.', 'titan-trucking'));
    }
    
    $form_data = array(
        'name' => sanitize_text_field($_POST['contact_name']),
        'email' => sanitize_email($_POST['contact_email']),
        'phone' => sanitize_text_field($_POST['contact_phone']),
        'message' => sanitize_textarea_field($_POST['contact_message']),
        'program' => sanitize_text_field($_POST['program_interest']),
        'experience' => sanitize_text_field($_POST['driving_experience']),
        'timeline' => sanitize_text_field($_POST['start_timeline']),
        'age' => sanitize_text_field($_POST['age_range']),
        'employment_status' => sanitize_text_field($_POST['employment_status'])
    );
    
    // Validate required fields
    if (empty($form_data['name']) || empty($form_data['email']) || empty($form_data['phone'])) {
        wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
        exit;
    }
    
    // Enhanced email with all form data
    $to = get_option('admin_email');
    $subject = __('Enhanced Contact Form Submission - Titan Trucking School', 'titan-trucking');
    $email_message = sprintf(
        __("New enhanced contact form submission:\n\nPersonal Information:\nName: %s\nEmail: %s\nPhone: %s\n\nProgram Details:\nProgram Interest: %s\nDriving Experience: %s\nStart Timeline: %s\nAge Range: %s\nEmployment Status: %s\n\nMessage:\n%s\n\nSubmitted: %s", 'titan-trucking'),
        $form_data['name'],
        $form_data['email'],
        $form_data['phone'],
        $form_data['program'],
        $form_data['experience'],
        $form_data['timeline'],
        $form_data['age'],
        $form_data['employment_status'],
        $form_data['message'],
        current_time('mysql')
    );
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
        'Reply-To: ' . $form_data['name'] . ' <' . $form_data['email'] . '>'
    );
    
    if (wp_mail($to, $subject, $email_message, $headers)) {
        wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
    }
    exit;
}

/**
 * Multi-Step Contact Form Handler
 */
function titan_contact_form_submit() {
    if (!isset($_POST['titan_contact_nonce']) || !wp_verify_nonce($_POST['titan_contact_nonce'], 'titan_contact_form')) {
        wp_die(__('Security check failed.', 'titan-trucking'));
    }
    
    $form_data = array(
        'first_name' => sanitize_text_field($_POST['first_name']),
        'last_name' => sanitize_text_field($_POST['last_name']),
        'email' => sanitize_email($_POST['email']),
        'phone' => sanitize_text_field($_POST['phone']),
        'zip_code' => sanitize_text_field($_POST['zip_code']),
        'has_license' => sanitize_text_field($_POST['has_license']),
        'experience_level' => sanitize_text_field($_POST['experience_level']),
        'violations' => sanitize_text_field($_POST['violations']),
        'program_interest' => sanitize_text_field($_POST['program_interest']),
        'start_date' => sanitize_text_field($_POST['start_date']),
        'referral_source' => sanitize_text_field($_POST['referral_source']),
        'goals' => sanitize_textarea_field($_POST['goals'])
    );
    
    // Validate required fields
    $required_fields = array('first_name', 'last_name', 'email', 'phone', 'zip_code');
    foreach ($required_fields as $field) {
        if (empty($form_data[$field])) {
            wp_redirect(add_query_arg('form_status', 'error', wp_get_referer()));
            exit;
        }
    }
    
    // Enhanced email with multi-step form data
    $to = get_option('admin_email');
    $subject = __('New Multi-Step Application - Titan Trucking School', 'titan-trucking');
    $email_message = sprintf(
        __("New multi-step application received:\n\n=== PERSONAL INFORMATION ===\nName: %s %s\nEmail: %s\nPhone: %s\nZIP Code: %s\n\n=== DRIVING EXPERIENCE ===\nHas License: %s\nExperience Level: %s\nViolations: %s\n\n=== PREFERENCES & GOALS ===\nProgram Interest: %s\nPreferred Start: %s\nReferral Source: %s\n\nCareer Goals:\n%s\n\n=== SUBMISSION INFO ===\nSubmitted: %s\nIP Address: %s\nUser Agent: %s", 'titan-trucking'),
        $form_data['first_name'],
        $form_data['last_name'],
        $form_data['email'],
        $form_data['phone'],
        $form_data['zip_code'],
        $form_data['has_license'],
        $form_data['experience_level'],
        $form_data['violations'],
        $form_data['program_interest'],
        $form_data['start_date'],
        $form_data['referral_source'],
        $form_data['goals'],
        current_time('mysql'),
        $_SERVER['REMOTE_ADDR'],
        $_SERVER['HTTP_USER_AGENT']
    );
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
        'Reply-To: ' . $form_data['first_name'] . ' ' . $form_data['last_name'] . ' <' . $form_data['email'] . '>'
    );
    
    // Send notification email
    if (wp_mail($to, $subject, $email_message, $headers)) {
        // Send confirmation email to applicant
        $confirmation_subject = __('Application Received - Titan Trucking School', 'titan-trucking');
        $confirmation_message = sprintf(
            __("Dear %s,\n\nThank you for your interest in Titan Trucking School! We've received your application and will review it within 24 hours.\n\nOur admissions team will contact you at %s to discuss your training options and answer any questions you may have.\n\nIn the meantime, feel free to call us at (555) TITAN-CDL if you have any immediate questions.\n\nBest regards,\nTitan Trucking School Admissions Team\n\nP.S. Follow us on social media for tips and updates from our training programs!", 'titan-trucking'),
            $form_data['first_name'],
            $form_data['phone']
        );
        
        wp_mail($form_data['email'], $confirmation_subject, $confirmation_message, $headers);
        
        wp_redirect(add_query_arg('form_status', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('form_status', 'error', wp_get_referer()));
    }
    exit;
}
add_action('admin_post_titan_contact_form_submit', 'titan_contact_form_submit');
add_action('admin_post_nopriv_titan_contact_form_submit', 'titan_contact_form_submit');

/**
 * Location Data for Minneapolis and St. Paul
 */
function titan_get_locations() {
    return array(
        'minneapolis' => array(
            'name' => 'Minneapolis Campus',
            'address' => '123 Trucking Way, Minneapolis, MN 55401',
            'phone' => '(555) 123-TITAN',
            'hours' => array(
                'monday' => '8:00 AM - 6:00 PM',
                'tuesday' => '8:00 AM - 6:00 PM',
                'wednesday' => '8:00 AM - 6:00 PM',
                'thursday' => '8:00 AM - 6:00 PM',
                'friday' => '8:00 AM - 6:00 PM',
                'saturday' => '9:00 AM - 4:00 PM',
                'sunday' => 'Closed'
            ),
            'features' => array(
                'Modern training fleet',
                'Private driving range',
                'Smart classrooms',
                'Free parking',
                'Wheelchair accessible'
            ),
            'coordinates' => array(
                'lat' => 44.9778,
                'lng' => -93.2650
            )
        ),
        'stpaul' => array(
            'name' => 'St. Paul Training Center',
            'address' => '456 Highway Drive, St. Paul, MN 55101',
            'phone' => '(555) 456-TITAN',
            'hours' => array(
                'monday' => '8:00 AM - 6:00 PM',
                'tuesday' => '8:00 AM - 6:00 PM',
                'wednesday' => '8:00 AM - 6:00 PM',
                'thursday' => '8:00 AM - 6:00 PM',
                'friday' => '8:00 AM - 6:00 PM',
                'saturday' => '9:00 AM - 4:00 PM',
                'sunday' => 'Closed'
            ),
            'features' => array(
                'State-of-the-art simulators',
                'Large vehicle maintenance bay',
                'Interactive learning labs',
                'Public transportation access',
                'Student lounge area'
            ),
            'coordinates' => array(
                'lat' => 44.9537,
                'lng' => -93.0900
            )
        )
    );
}

/**
 * Add Location Pages Support
 */
function titan_add_location_rewrite_rules() {
    add_rewrite_rule(
        '^minneapolis/?$',
        'index.php?pagename=minneapolis-cdl-training',
        'top'
    );
    add_rewrite_rule(
        '^st-paul/?$', 
        'index.php?pagename=st-paul-cdl-training',
        'top'
    );
}
add_action('init', 'titan_add_location_rewrite_rules');

/**
 * Enhanced Schema Markup
 */
function titan_output_schema_markup() {
    if (is_front_page()) {
        $schema = array(
            '@context' => 'https://schema.org',
            '@type' => 'EducationalOrganization',
            'name' => 'Titan Trucking School',
            'url' => home_url(),
            'logo' => get_site_icon_url(),
            'description' => 'Minnesota\'s premier CDL training school with 98% pass rate and job placement assistance',
            'address' => array(
                '@type' => 'PostalAddress',
                'streetAddress' => '1821 University Ave W ste 464-1',
                'addressLocality' => 'St. Paul',
                'addressRegion' => 'MN',
                'postalCode' => '55104',
                'addressCountry' => 'US'
            ),
            'telephone' => '(612) 699-1403',
            'priceRange' => '$1,995 - $4,995',
            'aggregateRating' => array(
                '@type' => 'AggregateRating',
                'ratingValue' => '4.8',
                'reviewCount' => '127'
            )
        );
        
        echo '<script type="application/ld+json">' . json_encode($schema) . '</script>';
    }
}
add_action('wp_head', 'titan_output_schema_markup');