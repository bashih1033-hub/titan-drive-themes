<?php
/**
 * Enhanced Front Page Template - Updated with React Components
 * 
 * @package TitanTrucking
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Success Banner -->
    <section class="success-stories-banner" style="background: hsl(var(--accent)); color: hsl(var(--accent-foreground)); padding: 1rem 0; text-align: center;">
        <div class="container">
            <p style="margin: 0; font-weight: 600;">
                <i class="fas fa-star" style="margin-right: 0.5rem; color: #FFD700;"></i>
                <?php _e('JOIN 4,200+ SUCCESSFUL GRADUATES | 98% PASS RATE | JOB PLACEMENT ASSISTANCE', 'titan-trucking'); ?>
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
                        <strong><?php _e('Job placement assistance.', 'titan-trucking'); ?></strong> 
                        <strong><?php _e('$62K average starting salary.', 'titan-trucking'); ?></strong>
                        <br>
                        <?php _e('Join 4,200+ successful graduates who transformed their lives in just 30 days.', 'titan-trucking'); ?>
                    </p>

                    <!-- Mobile Stats -->
                    <div class="grid grid-cols-2 lg:hidden" style="gap: 1rem; margin-bottom: 2rem;">
                        <?php $trust_factors = array_slice(titan_get_trust_factors(), 0, 2); ?>
                        <?php foreach ($trust_factors as $factor) : ?>
                            <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem; text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: bold; color: #FFD700;"><?php echo esc_html($factor['value']); ?></div>
                                <div style="font-size: 0.875rem; color: rgba(255,255,255,0.8);"><?php echo esc_html($factor['label']); ?></div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; justify-content: center;">
                        <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn" style="background: #FFD700; color: #000; padding: 1.5rem 2rem; font-size: 1.25rem; font-weight: bold; text-decoration: none; border-radius: 0.5rem; display: inline-flex; align-items: center; box-shadow: 0 10px 25px rgba(0,0,0,0.3); width: 100%; max-width: 400px; justify-content: center;">
                            <i class="fas fa-phone" style="margin-right: 0.75rem; font-size: 1rem;"></i>
                            <?php _e('Call', 'titan-trucking'); ?> <?php echo esc_html(get_theme_mod('titan_phone', '(612) 699-1403')); ?>
                        </a>
                    </div>
                    
                    <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; font-size: 0.875rem; color: rgba(255,255,255,0.8);">
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

                    <!-- Desktop Stats Overlay -->
                    <div class="hidden lg:grid grid-cols-2 gap-4" style="position: absolute; bottom: -2rem; left: -2rem; right: -2rem;">
                        <?php $trust_factors = titan_get_trust_factors(); ?>
                        <?php foreach ($trust_factors as $factor) : ?>
                            <div class="card" style="padding: 1rem; text-center; box-shadow: var(--shadow-strong); background: white;">
                                <div style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">
                                    <i class="<?php echo esc_attr($factor['icon']); ?>" style="font-size: 2rem;"></i>
                                </div>
                                <div style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--foreground));"><?php echo esc_html($factor['value']); ?></div>
                                <div style="font-size: 0.75rem; color: hsl(var(--muted-foreground));"><?php echo esc_html($factor['label']); ?></div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    
    <!-- WhyTitan Component -->
    <section class="py-16 lg:py-24" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(255, 255, 255, 1), rgba(139, 92, 246, 0.05)); position: relative; overflow: hidden;">
        
        <!-- Background Pattern -->
        <div style="position: absolute; inset: 0; opacity: 0.05;">
            <div style="position: absolute; top: 5rem; left: 2.5rem; width: 8rem; height: 8rem; border: 2px solid rgba(59, 130, 246, 0.2); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: 5rem; right: 2.5rem; width: 6rem; height: 6rem; border: 2px solid rgba(139, 92, 246, 0.2); border-radius: 50%;"></div>
            <div style="position: absolute; top: 50%; left: 25%; width: 4rem; height: 4rem; background: rgba(34, 197, 94, 0.2); border-radius: 50%;"></div>
        </div>

        <div class="container" style="position: relative;">
            
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="badge" style="margin-bottom: 1rem; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 0.5rem 1.5rem; font-size: 1rem;">
                    <i class="fas fa-star" style="margin-right: 0.5rem;"></i>
                    <?php _e('Why Choose Titan Trucking School?', 'titan-trucking'); ?>
                </div>
                <h2 style="font-size: 2.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1.5rem;">
                    <?php _e('Don\'t Just Get Your CDL —', 'titan-trucking'); ?>
                    <span style="display: block; color: hsl(var(--primary)); margin-top: 0.5rem;">
                        <?php _e('Get The Competitive Edge', 'titan-trucking'); ?>
                    </span>
                </h2>
                <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); max-width: 48rem; margin: 0 auto; line-height: 1.6;">
                    <?php _e('While other schools just teach you to pass the test, we prepare you to dominate the industry. Our graduates don\'t just get jobs — they get the', 'titan-trucking'); ?>
                    <strong><?php _e(' best jobs', 'titan-trucking'); ?></strong>
                    <?php _e(' with the', 'titan-trucking'); ?>
                    <strong><?php _e(' highest pay', 'titan-trucking'); ?></strong>.
                </p>
            </div>

            <!-- Trust Stats -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                <?php $trust_factors = titan_get_trust_factors(); ?>
                <?php foreach ($trust_factors as $factor) : ?>
                    <div class="card text-center" style="padding: 1.5rem; border: 1px solid rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer;" 
                         onmouseover="this.style.boxShadow='var(--shadow-strong)'; this.style.borderColor='hsl(var(--primary))'" 
                         onmouseout="this.style.boxShadow=''; this.style.borderColor='rgba(0,0,0,0.1)'">
                        <div style="background: rgba(59, 130, 246, 0.1); padding: 0.75rem; border-radius: 50%; width: fit-content; margin: 0 auto 1rem auto;">
                            <i class="<?php echo esc_attr($factor['icon']); ?>" style="color: hsl(var(--primary)); font-size: 1.5rem;"></i>
                        </div>
                        <div style="font-size: 2rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                            <?php echo esc_html($factor['value']); ?>
                        </div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground)); font-weight: 500;">
                            <?php echo esc_html($factor['label']); ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Differentiators -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <?php $differentiators = titan_get_differentiators(); ?>
                <?php foreach ($differentiators as $item) : ?>
                    <div class="card" style="padding: 2rem; border: 1px solid rgba(0,0,0,0.1); transition: all 0.3s ease; cursor: pointer; group;" 
                         onmouseover="this.style.boxShadow='var(--shadow-strong)'; this.style.borderColor='hsl(var(--primary))'" 
                         onmouseout="this.style.boxShadow=''; this.style.borderColor='rgba(0,0,0,0.1)'">
                        <div style="display: flex; align-items: flex-start; gap: 1.5rem;">
                            <div style="background: linear-gradient(135deg, white, #f8fafc); padding: 0.75rem; border-radius: 0.5rem; transition: transform 0.3s ease; color: <?php echo esc_attr($item['color']); ?>;" 
                                 onmouseover="this.style.transform='scale(1.1)'" 
                                 onmouseout="this.style.transform='scale(1)'">
                                <i class="<?php echo esc_attr($item['icon']); ?>" style="font-size: 2rem;"></i>
                            </div>
                            <div style="flex: 1;">
                                <h3 style="font-size: 1.25rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 0.5rem; transition: color 0.3s ease;" 
                                    onmouseover="this.style.color='hsl(var(--primary))'" 
                                    onmouseout="this.style.color='hsl(var(--foreground))'">
                                    <?php echo esc_html($item['title']); ?>
                                </h3>
                                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 0.75rem; line-height: 1.6;">
                                    <?php echo esc_html($item['description']); ?>
                                </p>
                                <div class="badge" style="background: transparent; color: <?php echo esc_attr($item['color']); ?>; border: 1px solid currentColor; font-size: 0.75rem;">
                                    <i class="fas fa-check-circle" style="margin-right: 0.25rem;"></i>
                                    <?php echo esc_html($item['highlight']); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <!-- Bold CTA Section -->
            <div class="text-center" style="background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary))); padding: 3rem; border-radius: 1rem; color: white; position: relative; overflow: hidden;">
                <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.1);"></div>
                <div style="position: relative; z-index: 10;">
                    <i class="fas fa-bullseye" style="font-size: 4rem; margin-bottom: 1.5rem; opacity: 0.9;"></i>
                    <h3 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">
                        <?php _e('Stop Settling For Average Training', 'titan-trucking'); ?>
                    </h3>
                    <p style="font-size: 1.25rem; margin-bottom: 2rem; color: rgba(255,255,255,0.9); max-width: 32rem; margin-left: auto; margin-right: auto;">
                        <?php _e('Join the elite 4,200+ drivers who chose Titan and now earn $8,000+ more per year. Your career deserves premium training.', 'titan-trucking'); ?>
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; margin-bottom: 2rem;">
                        <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn" style="background: white; color: hsl(var(--primary)); padding: 1rem 2rem; font-size: 1.125rem; font-weight: 600; text-decoration: none; border-radius: 0.5rem; display: inline-flex; align-items: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2); width: 100%; max-width: 320px; justify-content: center;">
                            <i class="fas fa-phone" style="margin-right: 0.75rem;"></i>
                            <?php _e('Get Premium Training - Call Now', 'titan-trucking'); ?>
                        </a>
                        <a href="<?php echo esc_url(home_url('/programs')); ?>" class="btn btn-outline" style="border: 2px solid white; color: white; padding: 1rem 2rem; font-size: 1.125rem; font-weight: 600; text-decoration: none; border-radius: 0.5rem; display: inline-flex; align-items: center; width: 100%; max-width: 320px; justify-content: center; background: rgba(255,255,255,0.1); backdrop-filter: blur(4px);">
                            <i class="fas fa-bolt" style="margin-right: 0.75rem;"></i>
                            <?php _e('View Elite Programs', 'titan-trucking'); ?>
                        </a>
                    </div>
                    
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; font-size: 0.875rem; color: rgba(255,255,255,0.8);">
                        <div style="display: flex; align-items: center;">
                            <i class="fas fa-check-circle" style="margin-right: 0.25rem;"></i>
                            <?php _e('98% Pass Rate', 'titan-trucking'); ?>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <i class="fas fa-check-circle" style="margin-right: 0.25rem;"></i>
                            <?php _e('Job Placement Assistance', 'titan-trucking'); ?>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <i class="fas fa-check-circle" style="margin-right: 0.25rem;"></i>
                            <?php _e('Flexible Payment Plans', 'titan-trucking'); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs Section - Mobile Optimized -->
    <section class="py-16 lg:py-24" style="background: var(--gradient-subtle);">
        <div class="container">
            <div class="text-center mb-16">
                <div class="badge" style="margin-bottom: 1rem; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 0.5rem 1.5rem; font-size: 1rem;">
                    <i class="fas fa-graduation-cap" style="margin-right: 0.5rem;"></i>
                    <?php _e('Professional CDL Programs', 'titan-trucking'); ?>
                </div>
                <h2 style="font-size: 2.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1.5rem;">
                    <?php _e('Choose Your Path to Success', 'titan-trucking'); ?>
                </h2>
                <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); max-width: 32rem; margin: 0 auto;">
                    <?php _e('Industry-leading training programs designed to get you hired fast at top-paying companies.', 'titan-trucking'); ?>
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $programs = array(
                    array(
                        'title' => __('Class A CDL Training', 'titan-trucking'),
                        'description' => __('Tractor-trailer operation for high-paying OTR careers', 'titan-trucking'),
                        'duration' => __('3-4 Weeks', 'titan-trucking'),
                        'price' => '$4,995',
                        'salary' => __('$65K+ starting', 'titan-trucking'),
                        'features' => array(__('98% Pass Rate', 'titan-trucking'), __('Job Placement Assistance', 'titan-trucking'), __('Financing Available', 'titan-trucking'))
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
                    <div class="card" style="overflow: hidden; box-shadow: var(--shadow-soft); transition: all 0.3s ease; border: none; cursor: pointer;" 
                         onmouseover="this.style.boxShadow='var(--shadow-strong)'" 
                         onmouseout="this.style.boxShadow='var(--shadow-soft)'">
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
                        
                        <div class="card-content" style="padding: 2rem;">
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
                                <a href="<?php echo esc_url(home_url('/programs')); ?>" class="btn btn-primary" style="text-decoration: none; text-align: center; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 0.75rem 1rem; border-radius: 0.375rem; font-weight: 500;">
                                    <i class="fas fa-graduation-cap" style="margin-right: 0.5rem;"></i>
                                    <?php _e('Learn More', 'titan-trucking'); ?>
                                </a>
                                <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn btn-outline" style="text-decoration: none; text-align: center; border: 1px solid hsl(var(--primary)); color: hsl(var(--primary)); padding: 0.75rem 1rem; border-radius: 0.375rem; font-weight: 500; background: rgba(59, 130, 246, 0.05);">
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
    
    <!-- Success Stories Component -->
    <section class="py-16 lg:py-24" style="background: hsl(var(--background));">
        <div class="container">
            <div class="text-center mb-16">
                <div class="badge" style="margin-bottom: 1rem; background: hsl(var(--accent)); color: hsl(var(--accent-foreground)); padding: 0.5rem 1.5rem; font-size: 1rem;">
                    <i class="fas fa-star" style="margin-right: 0.5rem;"></i>
                    <?php _e('Student Success Stories', 'titan-trucking'); ?>
                </div>
                <h2 style="font-size: 2.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1.5rem;">
                    <?php _e('Real Graduates, Real Results', 'titan-trucking'); ?>
                </h2>
                <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); max-width: 48rem; margin: 0 auto;">
                    <?php _e('See how our graduates transformed their careers and increased their earning potential through professional CDL training at Titan.', 'titan-trucking'); ?>
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <?php $success_stories = titan_get_success_stories(); ?>
                <?php foreach ($success_stories as $story) : ?>
                    <div class="card" style="padding: 2rem; border: 1px solid rgba(0,0,0,0.1); transition: all 0.3s ease;" 
                         onmouseover="this.style.boxShadow='var(--shadow-strong)'; this.style.transform='translateY(-5px)'" 
                         onmouseout="this.style.boxShadow=''; this.style.transform='translateY(0)'">
                        
                        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                            <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary))); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.25rem;">
                                <?php echo esc_html(substr($story['name'], 0, 1)); ?>
                            </div>
                            <div style="margin-left: 1rem;">
                                <h3 style="font-weight: 600; color: hsl(var(--foreground)); margin: 0; font-size: 1.125rem;">
                                    <?php echo esc_html($story['name']); ?>
                                </h3>
                                <p style="color: hsl(var(--muted-foreground)); margin: 0; font-size: 0.875rem;">
                                    <?php echo esc_html($story['location']); ?>
                                </p>
                            </div>
                        </div>

                        <div style="background: rgba(34, 197, 94, 0.1); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                            <div style="display: flex; justify-content: space-between; font-size: 0.875rem; font-weight: 600;">
                                <span style="color: #059669;"><?php echo esc_html($story['salaryIncrease']); ?></span>
                                <span style="color: hsl(var(--muted-foreground));"><?php echo esc_html($story['timeToHire']); ?></span>
                            </div>
                        </div>

                        <blockquote style="font-style: italic; color: hsl(var(--muted-foreground)); margin-bottom: 1rem; line-height: 1.5; font-size: 0.9rem;">
                            "<?php echo esc_html($story['testimonial']); ?>"
                        </blockquote>

                        <div style="font-size: 0.75rem; color: hsl(var(--muted-foreground)); border-top: 1px solid rgba(0,0,0,0.1); padding-top: 0.75rem;">
                            <div><?php echo esc_html($story['previousJob']); ?> → <strong><?php echo esc_html($story['currentJob']); ?></strong></div>
                            <div>Graduate <?php echo esc_html($story['graduationYear']); ?></div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center">
                <a href="<?php echo esc_url(home_url('/success-stories')); ?>" class="btn btn-primary" style="text-decoration: none; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 1rem 2rem; border-radius: 0.5rem; font-weight: 600;">
                    <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                    <?php _e('View More Success Stories', 'titan-trucking'); ?>
                </a>
            </div>
        </div>
    </section>

    <!-- Enrollment Journey Component -->
    <section class="py-16 lg:py-24" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(255, 255, 255, 1), rgba(139, 92, 246, 0.05));">
        <div class="container">
            
            <!-- Header -->
            <div class="text-center mb-16">
                <div class="badge" style="margin-bottom: 1rem; background: #3B82F6; color: white; padding: 0.5rem 1.5rem; font-size: 1rem;">
                    <i class="fas fa-bullseye" style="margin-right: 0.5rem;"></i>
                    <?php _e('Your Success Roadmap', 'titan-trucking'); ?>
                </div>
                <h2 style="font-size: 2.5rem; font-weight: bold; color: hsl(var(--foreground)); margin-bottom: 1.5rem;">
                    <?php _e('From Application to', 'titan-trucking'); ?>
                    <span style="display: block; color: #3B82F6; margin-top: 0.5rem;">
                        <?php _e('$60K Career in 30 Days', 'titan-trucking'); ?>
                    </span>
                </h2>
                <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); max-width: 48rem; margin: 0 auto;">
                    <?php _e('No confusion, no surprises. Our proven 5-step process has helped 4,200+ students launch successful trucking careers. Here\'s exactly what happens next.', 'titan-trucking'); ?>
                </p>
            </div>

            <!-- Journey Steps -->
            <div style="position: relative;">
                
                <!-- Progress Line -->
                <div class="hidden md:block" style="position: absolute; top: 5rem; left: 50%; transform: translateX(-50%); width: 1px; background: linear-gradient(to bottom, #BFDBFE, #3B82F6, #1D4ED8); height: 100%; z-index: 0;"></div>
                
                <div style="display: flex; flex-direction: column; gap: 3rem;">
                    <?php $enrollment_steps = titan_get_enrollment_steps(); ?>
                    <?php foreach ($enrollment_steps as $index => $step) : ?>
                        <div style="display: grid; grid-template-columns: 1fr; <?php echo ($index % 2 === 0) ? '' : 'md:grid-template-columns: 1fr 1fr; md:grid-auto-flow: dense;'; ?> gap: 2rem; align-items: center;">
                            
                            <!-- Step Content -->
                            <div class="card" style="padding: 2rem; box-shadow: var(--shadow-strong); border-left: 4px solid #3B82F6; transition: all 0.3s ease; <?php echo ($index % 2 === 0) ? '' : 'md:order-2'; ?>" 
                                 onmouseover="this.style.boxShadow='0 20px 40px rgba(0,0,0,0.15)'" 
                                 onmouseout="this.style.boxShadow='var(--shadow-strong)'">
                                
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                                    <div style="width: 3rem; height: 3rem; background: #3B82F6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.125rem;">
                                        <?php echo esc_html($step['id']); ?>
                                    </div>
                                    <div>
                                        <h3 style="font-size: 1.25rem; color: hsl(var(--foreground)); margin: 0; font-weight: 600;">
                                            <?php echo esc_html($step['title']); ?>
                                        </h3>
                                        <div style="display: flex; align-items: center; color: hsl(var(--muted-foreground)); font-size: 0.875rem;">
                                            <i class="fas fa-clock" style="margin-right: 0.25rem;"></i>
                                            <?php echo esc_html($step['duration']); ?>
                                        </div>
                                    </div>
                                </div>
                                
                                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                                    <?php echo esc_html($step['description']); ?>
                                </p>

                                <ul style="margin-bottom: 1.5rem; padding: 0; list-style: none;">
                                    <?php foreach ($step['details'] as $detail) : ?>
                                        <li style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.5rem; font-size: 0.875rem;">
                                            <i class="fas fa-check-circle" style="color: #10B981; margin-top: 0.25rem; flex-shrink: 0;"></i>
                                            <?php echo esc_html($detail); ?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>

                                <div style="background: rgba(59, 130, 246, 0.05); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                                    <p style="font-size: 0.875rem; font-weight: 500; color: #1D4ED8; margin-bottom: 0.75rem;">
                                        <strong><?php _e('Next Action:', 'titan-trucking'); ?></strong> <?php echo esc_html($step['nextAction']); ?>
                                    </p>
                                    
                                    <?php if (isset($step['ctaPhone']) && $step['ctaPhone']) : ?>
                                        <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn" style="width: 100%; background: #3B82F6; color: white; padding: 0.75rem 1rem; text-decoration: none; border-radius: 0.375rem; font-weight: 500; display: flex; align-items: center; justify-content: center;">
                                            <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>
                                            <?php echo esc_html($step['ctaText']); ?>
                                        </a>
                                    <?php else : ?>
                                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn" style="width: 100%; background: #3B82F6; color: white; padding: 0.75rem 1rem; text-decoration: none; border-radius: 0.375rem; font-weight: 500; display: flex; align-items: center; justify-content: center;">
                                            <?php echo esc_html($step['ctaText']); ?>
                                            <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>

                            <!-- Step Visual -->
                            <div class="text-center <?php echo ($index % 2 === 0) ? '' : 'md:order-1'; ?>">
                                <div style="width: 8rem; height: 8rem; margin: 0 auto 1rem; background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1)); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 4px solid white; box-shadow: var(--shadow-strong);">
                                    <i class="<?php echo esc_attr($step['icon']); ?>" style="color: #3B82F6; font-size: 2rem;"></i>
                                </div>
                                <div class="badge" style="background: rgba(59, 130, 246, 0.1); color: #1D4ED8; padding: 0.5rem 1rem;">
                                    <?php _e('Step', 'titan-trucking'); ?> <?php echo esc_html($step['id']); ?>: <?php echo esc_html($step['duration']); ?>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Success Guarantee -->
            <div class="text-center mt-16" style="background: linear-gradient(135deg, #059669, #3B82F6); color: white; padding: 3rem; border-radius: 1rem;">
                <i class="fas fa-star" style="font-size: 4rem; margin-bottom: 1.5rem; opacity: 0.9;"></i>
                <h3 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">
                    <?php _e('Our Success Guarantee', 'titan-trucking'); ?>
                </h3>
                <p style="font-size: 1.25rem; margin-bottom: 1.5rem; opacity: 0.9; max-width: 32rem; margin-left: auto; margin-right: auto;">
                    <?php _e('If you don\'t get hired within 60 days of graduation, we\'ll continue providing job placement assistance at no additional cost. That\'s how confident we are in our process.', 'titan-trucking'); ?>
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem; backdrop-filter: blur(10px);">
                        <div style="font-size: 1.5rem; font-weight: bold;">98%</div>
                        <div style="font-size: 0.875rem; opacity: 0.9;"><?php _e('Pass Rate', 'titan-trucking'); ?></div>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem; backdrop-filter: blur(10px);">
                        <div style="font-size: 1.5rem; font-weight: bold;">14 <?php _e('Days', 'titan-trucking'); ?></div>
                        <div style="font-size: 0.875rem; opacity: 0.9;"><?php _e('Average Time to Hire', 'titan-trucking'); ?></div>
                    </div>
                    <div style="background: rgba(255,255,255,0.1); padding: 1rem; border-radius: 0.5rem; backdrop-filter: blur(10px);">
                        <div style="font-size: 1.5rem; font-weight: bold;">$62K</div>
                        <div style="font-size: 0.875rem; opacity: 0.9;"><?php _e('Average Graduate Salary', 'titan-trucking'); ?></div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                    <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn" style="background: white; color: #059669; padding: 1rem 2rem; font-size: 1.125rem; text-decoration: none; border-radius: 0.5rem; font-weight: 600; display: inline-flex; align-items: center;">
                        <i class="fas fa-phone" style="margin-right: 0.75rem;"></i>
                        <?php _e('Start Your Journey - Call Now', 'titan-trucking'); ?>
                    </a>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-outline" style="border: 2px solid white; color: white; padding: 1rem 2rem; font-size: 1.125rem; text-decoration: none; border-radius: 0.5rem; font-weight: 600; display: inline-flex; align-items: center; background: rgba(255,255,255,0.1);">
                        <i class="fas fa-play-circle" style="margin-right: 0.75rem;"></i>
                        <?php _e('Schedule Campus Visit', 'titan-trucking'); ?>
                    </a>
                </div>
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
                <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9]/', '', get_theme_mod('titan_phone', '6126991403'))); ?>" class="btn" style="background: #FFD700; color: #000; padding: 1.5rem 3rem; font-size: 1.25rem; font-weight: bold; text-decoration: none; border-radius: 0.5rem; box-shadow: var(--shadow-glow); display: inline-flex; align-items: center;">
                    <i class="fas fa-phone" style="margin-right: 0.75rem;"></i>
                    <?php _e('Call', 'titan-trucking'); ?> <?php echo esc_html(get_theme_mod('titan_phone', '(612) 699-1403')); ?> <?php _e('Now', 'titan-trucking'); ?>
                </a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-outline" style="border: 2px solid white; color: white; padding: 1.5rem 3rem; font-size: 1.25rem; font-weight: 600; text-decoration: none; border-radius: 0.5rem; display: inline-flex; align-items: center;">
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
                    <?php _e('Flexible Payment Plans', 'titan-trucking'); ?>
                </div>
            </div>
        </div>
    </section>
    
</main>

<?php get_footer(); ?>