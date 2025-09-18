<?php
/**
 * Front Page Template
 * 
 * @package TitanTrucking
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Success Banner -->
    <section class="success-banner" style="background: hsl(var(--accent)); color: hsl(var(--accent-foreground)); padding: 1rem 0; text-align: center;">
        <div class="container">
            <p style="margin: 0; font-weight: 600;">
                <i class="fas fa-star" style="margin-right: 0.5rem; color: #FFD700;"></i>
                <?php _e('JOIN 4,200+ SUCCESSFUL GRADUATES | 98% PASS RATE | JOB PLACEMENT GUARANTEE', 'titan-trucking'); ?>
            </p>
        </div>
    </section>
    
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2" style="gap: 3rem; align-items: center;">
                
                <!-- Hero Content -->
                <div>
                    <div class="badge" style="margin-bottom: 1.5rem; background: #FFD700; color: #000; font-size: 1rem; padding: 0.75rem 1.5rem;">
                        <i class="fas fa-star" style="margin-right: 0.5rem;"></i>
                        <?php _e('Minnesota\'s #1 CDL School', 'titan-trucking'); ?>
                    </div>
                    
                    <h1 style="font-size: 3rem; font-weight: 900; margin-bottom: 1.5rem; line-height: 1.1;">
                        <?php _e('Stop Dreaming.', 'titan-trucking'); ?>
                        <span style="display: block; color: #FFD700; margin-top: 0.5rem;">
                            <?php _e('Start Driving.', 'titan-trucking'); ?>
                        </span>
                    </h1>
                    
                    <p style="font-size: 1.25rem; margin-bottom: 2rem; color: rgba(255,255,255,0.9); line-height: 1.6;">
                        <strong><?php _e('98% pass rate.', 'titan-trucking'); ?></strong> 
                        <strong><?php _e('Job placement guarantee.', 'titan-trucking'); ?></strong> 
                        <strong><?php _e('$62K average starting salary.', 'titan-trucking'); ?></strong>
                        <br>
                        <?php _e('Join 4,200+ successful graduates who transformed their lives in just 30 days.', 'titan-trucking'); ?>
                    </p>
                    
                    <!-- Mobile Stats -->
                    <div class="grid grid-cols-2" style="gap: 1rem; margin-bottom: 2rem; display: none;">
                        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem; text-align: center;">
                            <div style="font-size: 1.5rem; font-weight: bold; color: #FFD700;">4,200+</div>
                            <div style="font-size: 0.875rem; color: rgba(255,255,255,0.8);"><?php _e('Graduates Placed', 'titan-trucking'); ?></div>
                        </div>
                        <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem; text-align: center;">
                            <div style="font-size: 1.5rem; font-weight: bold; color: #FFD700;">98%</div>
                            <div style="font-size: 0.875rem; color: rgba(255,255,255,0.8);"><?php _e('Pass Rate', 'titan-trucking'); ?></div>
                        </div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                        <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn" style="background: #FFD700; color: #000; padding: 1rem 2rem; font-size: 1.25rem; font-weight: bold; text-decoration: none; border-radius: 0.5rem; display: inline-flex; align-items: center;">
                            <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>
                            <?php _e('Call', 'titan-trucking'); ?> <?php echo esc_html(get_theme_mod('titan_phone', '(612) 699-1403')); ?>
                        </a>
                    </div>
                    
                    <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 1.5rem; font-size: 0.875rem; color: rgba(255,255,255,0.8);">
                        <div style="display: flex; align-items: center;">
                            <i class="fas fa-check-circle" style="margin-right: 0.5rem; color: #4ADE80;"></i>
                            <?php _e('98% Pass Rate', 'titan-trucking'); ?>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <i class="fas fa-check-circle" style="margin-right: 0.5rem; color: #4ADE80;"></i>
                            <?php _e('Job Placement Assistance', 'titan-trucking'); ?>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <i class="fas fa-check-circle" style="margin-right: 0.5rem; color: #4ADE80;"></i>
                            <?php _e('Flexible Payment Plans', 'titan-trucking'); ?>
                        </div>
                    </div>
                </div>
                
                <!-- Hero Image -->
                <div style="position: relative;">
                    <div style="position: relative; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-strong); border: 4px solid rgba(255,255,255,0.2);">
                        <?php
                        $hero_image = get_theme_mod('titan_hero_image');
                        if ($hero_image) {
                            echo '<img src="' . esc_url($hero_image) . '" alt="' . __('Professional CDL training at Titan Trucking School', 'titan-trucking') . '" style="width: 100%; height: 24rem; object-fit: cover;">';
                        } else {
                            echo '<div style="width: 100%; height: 24rem; background: linear-gradient(135deg, #1e40af, #1e3a8a); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.125rem;">';
                            echo __('Hero Image Placeholder', 'titan-trucking');
                            echo '</div>';
                        }
                        ?>
                        <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; color: white;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                                <div style="display: flex; gap: 0.25rem;">
                                    <?php for ($i = 0; $i < 5; $i++) : ?>
                                        <i class="fas fa-star" style="color: #FFD700; font-size: 0.875rem;"></i>
                                    <?php endfor; ?>
                                </div>
                                <span style="font-size: 0.875rem; font-weight: 600;"><?php _e('4.9/5 Rating', 'titan-trucking'); ?></span>
                            </div>
                            <p style="font-size: 1.125rem; font-weight: 600; margin: 0;">
                                <?php _e('"Best CDL school in Minnesota! Got hired making $65K within a week of graduation."', 'titan-trucking'); ?>
                            </p>
                            <p style="font-size: 0.875rem; opacity: 0.9; margin: 0;">
                                <?php _e('- Marcus J., UPS Driver', 'titan-trucking'); ?>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    
    <!-- Quick Stats Section -->
    <section class="py-16" style="background: hsl(var(--background));">
        <div class="container">
            <div class="text-center mb-12">
                <h2 class="text-4xl" style="margin-bottom: 1rem;"><?php _e('Why Minnesota Trusts Titan', 'titan-trucking'); ?></h2>
                <p class="text-xl" style="color: hsl(var(--muted-foreground));">
                    <?php _e('Industry-leading results that speak for themselves', 'titan-trucking'); ?>
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <?php
                $stats = array(
                    array('value' => '4,200+', 'label' => __('Graduates Placed', 'titan-trucking'), 'icon' => 'fas fa-users'),
                    array('value' => '98%', 'label' => __('Pass Rate', 'titan-trucking'), 'icon' => 'fas fa-award'),
                    array('value' => '$62K', 'label' => __('Avg Starting Salary', 'titan-trucking'), 'icon' => 'fas fa-chart-line'),
                    array('value' => '14', 'label' => __('Days to Get Hired', 'titan-trucking'), 'icon' => 'fas fa-clock')
                );
                
                foreach ($stats as $stat) :
                ?>
                    <div class="card text-center" style="padding: 2rem; border: 1px solid hsl(var(--border));">
                        <div style="color: hsl(var(--primary)); margin-bottom: 1rem;">
                            <i class="<?php echo esc_attr($stat['icon']); ?>" style="font-size: 2rem;"></i>
                        </div>
                        <div style="font-size: 2rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                            <?php echo esc_html($stat['value']); ?>
                        </div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">
                            <?php echo esc_html($stat['label']); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    
    <!-- Programs Section -->
    <section class="py-16" style="background: var(--gradient-subtle);">
        <div class="container">
            <div class="text-center mb-16">
                <div class="badge" style="margin-bottom: 1rem;">
                    <i class="fas fa-graduation-cap" style="margin-right: 0.5rem;"></i>
                    <?php _e('Professional CDL Programs', 'titan-trucking'); ?>
                </div>
                <h2 class="text-4xl mb-8"><?php _e('Choose Your Path to Success', 'titan-trucking'); ?></h2>
                <p class="text-xl" style="max-width: 32rem; margin: 0 auto; color: hsl(var(--muted-foreground));">
                    <?php _e('Industry-leading training programs designed to get you hired fast at top-paying companies.', 'titan-trucking'); ?>
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <?php
                $programs = array(
                    array(
                        'title' => __('Class A CDL Training', 'titan-trucking'),
                        'description' => __('Tractor-trailer operation for high-paying OTR careers', 'titan-trucking'),
                        'duration' => __('3-4 Weeks', 'titan-trucking'),
                        'price' => '$4,995',
                        'salary' => __('$65K+ starting', 'titan-trucking'),
                        'features' => array(__('98% Pass Rate', 'titan-trucking'), __('Job Placement', 'titan-trucking'), __('Financing Available', 'titan-trucking'))
                    ),
                    array(
                        'title' => __('Class B CDL Training', 'titan-trucking'),
                        'description' => __('Local delivery and straight truck opportunities', 'titan-trucking'),
                        'duration' => __('2-3 Weeks', 'titan-trucking'),
                        'price' => '$3,995',
                        'salary' => __('$55K+ starting', 'titan-trucking'),
                        'features' => array(__('Local Routes', 'titan-trucking'), __('Home Daily', 'titan-trucking'), __('Great Benefits', 'titan-trucking'))
                    ),
                    array(
                        'title' => __('CDL Refresher Course', 'titan-trucking'),
                        'description' => __('Get back on the road with updated skills', 'titan-trucking'),
                        'duration' => __('1-2 Weeks', 'titan-trucking'),
                        'price' => '$1,995',
                        'salary' => __('$60K+ returning', 'titan-trucking'),
                        'features' => array(__('Customized Training', 'titan-trucking'), __('Quick Return', 'titan-trucking'), __('Skill Updates', 'titan-trucking'))
                    )
                );
                
                foreach ($programs as $program) :
                ?>
                    <div class="card" style="overflow: hidden; box-shadow: var(--shadow-soft); transition: var(--transition-smooth); border: none;">
                        <div style="height: 12rem; background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark))); position: relative; display: flex; align-items: center; justify-content: center; color: white;">
                            <i class="fas fa-truck" style="font-size: 3rem; opacity: 0.7;"></i>
                            <div style="position: absolute; top: 1rem; left: 1rem; right: 1rem; display: flex; justify-content: space-between; align-items: start;">
                                <div class="badge" style="background: rgba(0,0,0,0.7); color: white;">
                                    <?php echo esc_html($program['duration']); ?>
                                </div>
                                <div style="background: #10B981; color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem; font-weight: 600;">
                                    <?php echo esc_html($program['salary']); ?>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card-content">
                            <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; color: hsl(var(--foreground));">
                                <?php echo esc_html($program['title']); ?>
                            </h3>
                            <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                                <?php echo esc_html($program['description']); ?>
                            </p>
                            
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <div style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--foreground));">
                                    <?php echo esc_html($program['price']); ?>
                                </div>
                                <div class="badge" style="background: transparent; color: #10B981; border: 1px solid #10B981; font-size: 0.75rem;">
                                    <?php _e('Financing Available', 'titan-trucking'); ?>
                                </div>
                            </div>
                            
                            <ul style="margin-bottom: 1.5rem; padding: 0; list-style: none;">
                                <?php foreach ($program['features'] as $feature) : ?>
                                    <li style="display: flex; align-items: center; margin-bottom: 0.5rem; font-size: 0.875rem;">
                                        <i class="fas fa-check-circle" style="color: #10B981; margin-right: 0.5rem;"></i>
                                        <?php echo esc_html($feature); ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                            
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                <a href="<?php echo esc_url(home_url('/programs')); ?>" class="btn btn-primary" style="text-decoration: none; text-align: center;">
                                    <i class="fas fa-graduation-cap" style="margin-right: 0.5rem;"></i>
                                    <?php _e('Learn More', 'titan-trucking'); ?>
                                </a>
                                <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn btn-outline" style="text-decoration: none; text-align: center;">
                                    <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>
                                    <?php _e('Call for Info', 'titan-trucking'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    
    <!-- Final CTA Section -->
    <section style="background: var(--gradient-primary); color: hsl(var(--primary-foreground)); padding: 4rem 0; position: relative; overflow: hidden;">
        <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.2);"></div>
        <div class="container" style="position: relative; text-align: center;">
            <i class="fas fa-bolt" style="font-size: 5rem; margin-bottom: 2rem; color: #FFD700;"></i>
            <h2 class="text-4xl mb-8"><?php _e('Your $60K+ Career Starts With One Call', 'titan-trucking'); ?></h2>
            <p class="text-xl mb-12" style="max-width: 48rem; margin-left: auto; margin-right: auto; color: rgba(255,255,255,0.9);">
                <?php _e('Don\'t let another day pass wondering "what if." Thousands of Minnesotans have already transformed their lives. Classes start weekly — your seat is waiting.', 'titan-trucking'); ?>
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 1.5rem; align-items: center; margin-bottom: 2rem;">
                <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn" style="background: #FFD700; color: #000; padding: 1.5rem 3rem; font-size: 1.25rem; font-weight: bold; text-decoration: none; border-radius: 0.5rem; box-shadow: var(--shadow-glow);">
                    <i class="fas fa-phone" style="margin-right: 0.75rem;"></i>
                    <?php _e('Call', 'titan-trucking'); ?> <?php echo esc_html(get_theme_mod('titan_phone', '(612) 699-1403')); ?> <?php _e('Now', 'titan-trucking'); ?>
                </a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-outline" style="border: 2px solid white; color: white; padding: 1.5rem 3rem; font-size: 1.25rem; font-weight: 600; text-decoration: none; border-radius: 0.5rem;">
                    <i class="fas fa-calendar" style="margin-right: 0.75rem;"></i>
                    <?php _e('Schedule Campus Visit', 'titan-trucking'); ?>
                </a>
            </div>
            
            <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; font-size: 0.875rem; color: rgba(255,255,255,0.8);">
                <div style="display: flex; align-items: center;">
                    <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
                    <?php _e('No Obligation Consultation', 'titan-trucking'); ?>
                </div>
                <div style="display: flex; align-items: center;">
                    <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
                    <?php _e('Same Day Enrollment Available', 'titan-trucking'); ?>
                </div>
                <div style="display: flex; align-items: center;">
                    <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
                    <?php _e('Financial Aid Counseling', 'titan-trucking'); ?>
                </div>
            </div>
        </div>
    </section>
    
</main>

<?php get_footer(); ?>