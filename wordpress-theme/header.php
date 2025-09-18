<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <a class="skip-link sr-only" href="#main"><?php _e('Skip to content', 'titan-trucking'); ?></a>
    
    <header id="masthead" class="site-header">
        
        <!-- Contact Bar -->
        <div class="header-contact">
            <div class="container">
                <div class="contact-info" style="display: flex; justify-content: space-between; align-items: center; font-size: 0.875rem;">
                    <div class="contact-left" style="display: flex; gap: 2rem;">
                        <span>
                            <i class="fas fa-map-marker-alt" style="margin-right: 0.5rem;"></i>
                            <?php echo esc_html(get_theme_mod('titan_address', '1234 Training Drive, St. Paul, MN 55101')); ?>
                        </span>
                        <span>
                            <i class="far fa-clock" style="margin-right: 0.5rem;"></i>
                            <?php echo esc_html(get_theme_mod('titan_hours', 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM')); ?>
                        </span>
                    </div>
                    <div class="contact-right">
                        <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" style="color: inherit; text-decoration: none; font-weight: 600;">
                            <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>
                            <?php echo esc_html(get_theme_mod('titan_phone', '(612) 699-1403')); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Main Navigation -->
        <div class="main-nav">
            <div class="container">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    
                    <div class="site-branding">
                        <?php
                        if (has_custom_logo()) :
                            the_custom_logo();
                        else :
                        ?>
                            <h1 class="site-title">
                                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                                    <?php bloginfo('name'); ?>
                                </a>
                            </h1>
                            <?php
                            $description = get_bloginfo('description', 'display');
                            if ($description || is_customize_preview()) :
                            ?>
                                <p class="site-description"><?php echo $description; ?></p>
                            <?php endif;
                        endif;
                        ?>
                    </div>
                    
                    <nav id="site-navigation" class="main-navigation">
                        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" style="display: none;">
                            <span class="sr-only"><?php _e('Primary Menu', 'titan-trucking'); ?></span>
                            <i class="fas fa-bars"></i>
                        </button>
                        
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_id' => 'primary-menu',
                            'menu_class' => 'nav-menu',
                            'container' => false,
                            'fallback_cb' => 'titan_trucking_fallback_menu',
                        ));
                        ?>
                        
                        <div class="header-cta" style="margin-left: 2rem;">
                            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn btn-secondary">
                                <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>
                                <?php _e('Enroll Today', 'titan-trucking'); ?>
                            </a>
                        </div>
                    </nav>
                    
                </div>
            </div>
        </div>
        
    </header>

    <?php
    // Breadcrumb navigation
    if (!is_front_page()) :
    ?>
        <nav class="breadcrumb" style="background: hsl(var(--muted)); padding: 0.75rem 0; font-size: 0.875rem;">
            <div class="container">
                <a href="<?php echo esc_url(home_url('/')); ?>"><?php _e('Home', 'titan-trucking'); ?></a>
                <?php
                if (is_single()) {
                    echo ' / <span>' . get_the_title() . '</span>';
                } elseif (is_page()) {
                    echo ' / <span>' . get_the_title() . '</span>';
                } elseif (is_category()) {
                    echo ' / <span>' . single_cat_title('', false) . '</span>';
                } elseif (is_archive()) {
                    echo ' / <span>' . get_the_archive_title() . '</span>';
                } elseif (is_search()) {
                    echo ' / <span>' . __('Search Results', 'titan-trucking') . '</span>';
                }
                ?>
            </div>
        </nav>
    <?php endif; ?>

<?php
// Fallback menu function
function titan_trucking_fallback_menu() {
    echo '<ul class="nav-menu">';
    echo '<li><a href="' . esc_url(home_url('/')) . '">' . __('Home', 'titan-trucking') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/about')) . '">' . __('About', 'titan-trucking') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/programs')) . '">' . __('Programs', 'titan-trucking') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/blog')) . '">' . __('Blog', 'titan-trucking') . '</a></li>';
    echo '<li><a href="' . esc_url(home_url('/contact')) . '">' . __('Contact', 'titan-trucking') . '</a></li>';
    echo '</ul>';
}
?>