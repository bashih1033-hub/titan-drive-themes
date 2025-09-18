    <footer id="colophon" class="site-footer">
        <div class="footer-content">
            <div class="container">
                <div class="footer-content grid grid-cols-1 md:grid-cols-3">
                    
                    <!-- Company Info -->
                    <div class="footer-widget">
                        <h4 class="footer-widget-title"><?php bloginfo('name'); ?></h4>
                        <p style="margin-bottom: 1rem;">
                            <?php _e('Minnesota\'s premier CDL training school with 98% pass rate and job placement guarantee. Transform your career with professional truck driving training.', 'titan-trucking'); ?>
                        </p>
                        
                        <div class="social-links" style="display: flex; gap: 1rem; margin-top: 1rem;">
                            <a href="#" aria-label="<?php _e('Facebook', 'titan-trucking'); ?>" style="color: hsl(var(--muted-foreground)); font-size: 1.25rem;">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="#" aria-label="<?php _e('Twitter', 'titan-trucking'); ?>" style="color: hsl(var(--muted-foreground)); font-size: 1.25rem;">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" aria-label="<?php _e('Instagram', 'titan-trucking'); ?>" style="color: hsl(var(--muted-foreground)); font-size: 1.25rem;">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" aria-label="<?php _e('LinkedIn', 'titan-trucking'); ?>" style="color: hsl(var(--muted-foreground)); font-size: 1.25rem;">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Contact Information -->
                    <div class="footer-widget">
                        <h4 class="footer-widget-title"><?php _e('Contact Information', 'titan-trucking'); ?></h4>
                        
                        <div style="margin-bottom: 1rem;">
                            <strong><?php _e('Address:', 'titan-trucking'); ?></strong><br>
                            <?php echo esc_html(get_theme_mod('titan_address', '1234 Training Drive, St. Paul, MN 55101')); ?>
                        </div>
                        
                        <div style="margin-bottom: 1rem;">
                            <strong><?php _e('Phone:', 'titan-trucking'); ?></strong><br>
                            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" style="color: hsl(var(--primary)); text-decoration: none; font-weight: 600;">
                                <?php echo esc_html(get_theme_mod('titan_phone', '(612) 699-1403')); ?>
                            </a>
                        </div>
                        
                        <div style="margin-bottom: 1rem;">
                            <strong><?php _e('Hours:', 'titan-trucking'); ?></strong><br>
                            <?php echo esc_html(get_theme_mod('titan_hours', 'Mon-Fri: 8AM-6PM, Sat: 9AM-3PM')); ?>
                        </div>
                        
                        <div>
                            <strong><?php _e('Email:', 'titan-trucking'); ?></strong><br>
                            <a href="mailto:<?php echo esc_attr(get_option('admin_email')); ?>" style="color: hsl(var(--primary)); text-decoration: none;">
                                <?php echo esc_html(get_option('admin_email')); ?>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Quick Links -->
                    <div class="footer-widget">
                        <h4 class="footer-widget-title"><?php _e('Quick Links', 'titan-trucking'); ?></h4>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                            <div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="margin-bottom: 0.5rem;">
                                        <a href="<?php echo esc_url(home_url('/about')); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                            <?php _e('About Us', 'titan-trucking'); ?>
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 0.5rem;">
                                        <a href="<?php echo esc_url(home_url('/programs')); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                            <?php _e('CDL Programs', 'titan-trucking'); ?>
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 0.5rem;">
                                        <a href="<?php echo esc_url(home_url('/success-stories')); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                            <?php _e('Success Stories', 'titan-trucking'); ?>
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 0.5rem;">
                                        <a href="<?php echo esc_url(home_url('/blog')); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                            <?php _e('Blog', 'titan-trucking'); ?>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="margin-bottom: 0.5rem;">
                                        <a href="<?php echo esc_url(home_url('/faq')); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                            <?php _e('FAQ', 'titan-trucking'); ?>
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 0.5rem;">
                                        <a href="<?php echo esc_url(home_url('/contact')); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                            <?php _e('Contact', 'titan-trucking'); ?>
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 0.5rem;">
                                        <a href="<?php echo esc_url(home_url('/minneapolis')); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                            <?php _e('Minneapolis Training', 'titan-trucking'); ?>
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 0.5rem;">
                                        <a href="<?php echo esc_url(home_url('/st-paul')); ?>" style="color: hsl(var(--muted-foreground)); text-decoration: none;">
                                            <?php _e('St. Paul Training', 'titan-trucking'); ?>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <!-- Copyright Bar -->
        <div style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 1rem 0; text-align: center; font-size: 0.875rem;">
            <div class="container">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                    <div>
                        <?php
                        printf(
                            __('© %d %s. All rights reserved.', 'titan-trucking'),
                            date('Y'),
                            get_bloginfo('name')
                        );
                        ?>
                    </div>
                    <div style="display: flex; gap: 2rem;">
                        <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>" style="color: inherit; text-decoration: none;">
                            <?php _e('Privacy Policy', 'titan-trucking'); ?>
                        </a>
                        <a href="<?php echo esc_url(home_url('/terms-of-service')); ?>" style="color: inherit; text-decoration: none;">
                            <?php _e('Terms of Service', 'titan-trucking'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>

</div><!-- #page -->

<?php wp_footer(); ?>

<!-- Mobile Menu Toggle Script -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('show');
        });
    }
    
    // Handle responsive menu visibility
    function handleResize() {
        if (window.innerWidth >= 768) {
            menuToggle.style.display = 'none';
            navMenu.classList.remove('show');
        } else {
            menuToggle.style.display = 'block';
        }
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
});
</script>

<style>
/* Mobile Menu Styles */
@media (max-width: 767px) {
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: var(--shadow-strong);
        flex-direction: column;
        padding: 1rem;
        z-index: 1000;
    }
    
    .nav-menu.show {
        display: flex;
    }
    
    .nav-menu li {
        margin: 0.5rem 0;
    }
    
    .header-cta {
        margin-left: 0 !important;
        margin-top: 1rem;
    }
    
    .main-navigation {
        position: relative;
    }
}

.menu-toggle {
    background: none;
    border: none;
    color: hsl(var(--foreground));
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.5rem;
}
</style>

</body>
</html>