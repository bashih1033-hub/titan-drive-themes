<?php
/**
 * Template for Programs Page
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

get_header(); ?>

<main class="programs-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Professional CDL Training <span class="text-yellow-400">Programs</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-blue-100">
                    Choose from our comprehensive CDL training programs designed to get you career-ready fast
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#programs" class="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                        View Programs
                    </a>
                    <a href="#contact" class="btn btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                        Get Started Today
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs Grid Section -->
    <section id="programs" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Our CDL Training Programs</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    All programs include job placement assistance, lifetime support, and our 98% pass rate guarantee
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <?php 
                $programs = titan_get_cdl_programs();
                foreach ($programs as $program): 
                ?>
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div class="p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                                <i class="<?php echo esc_attr($program['icon']); ?> text-2xl text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-2xl font-bold text-gray-900"><?php echo esc_html($program['title']); ?></h3>
                                <p class="text-blue-600 font-semibold"><?php echo esc_html($program['subtitle']); ?></p>
                            </div>
                        </div>

                        <p class="text-gray-600 mb-6 leading-relaxed"><?php echo esc_html($program['description']); ?></p>

                        <div class="grid grid-cols-2 gap-4 mb-6">
                            <div class="text-center p-3 bg-blue-50 rounded-lg">
                                <div class="text-2xl font-bold text-blue-900"><?php echo esc_html($program['duration']); ?></div>
                                <div class="text-sm text-blue-600">Duration</div>
                            </div>
                            <div class="text-center p-3 bg-green-50 rounded-lg">
                                <div class="text-2xl font-bold text-green-900"><?php echo esc_html($program['price']); ?></div>
                                <div class="text-sm text-green-600">Investment</div>
                            </div>
                        </div>

                        <?php if (!empty($program['features'])): ?>
                        <div class="mb-6">
                            <h4 class="font-semibold text-gray-900 mb-3">What's Included:</h4>
                            <ul class="space-y-2">
                                <?php foreach ($program['features'] as $feature): ?>
                                <li class="flex items-center text-gray-600">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <?php echo esc_html($feature); ?>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <?php endif; ?>

                        <div class="flex flex-col gap-3">
                            <a href="#contact" class="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300">
                                Enroll Now
                            </a>
                            <a href="#" class="btn btn-secondary text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300" 
                               onclick="openProgramDetails('<?php echo esc_js($program['slug']); ?>')">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Why Choose Our Programs Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose Titan Trucking School?</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    We're committed to your success with industry-leading training and support
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <?php 
                $differentiators = titan_get_differentiators();
                foreach ($differentiators as $diff): 
                ?>
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="<?php echo esc_attr($diff['icon']); ?> text-3xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3"><?php echo esc_html($diff['title']); ?></h3>
                    <p class="text-gray-600 mb-2"><?php echo esc_html($diff['description']); ?></p>
                    <?php if (!empty($diff['highlight'])): ?>
                    <p class="text-sm font-semibold <?php echo esc_attr($diff['color']); ?>"><?php echo esc_html($diff['highlight']); ?></p>
                    <?php endif; ?>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Financing Options Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Flexible Financing Options</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Multiple ways to fund your CDL training and start your new career
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <?php 
                $financing_options = titan_get_financing_options();
                foreach ($financing_options as $option): 
                ?>
                <div class="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="<?php echo esc_attr($option['icon']); ?> text-2xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4"><?php echo esc_html($option['title']); ?></h3>
                    <p class="text-gray-600 mb-6"><?php echo esc_html($option['description']); ?></p>
                    <?php if (!empty($option['features'])): ?>
                    <ul class="text-left space-y-2 mb-6">
                        <?php foreach ($option['features'] as $feature): ?>
                        <li class="flex items-center text-gray-600">
                            <i class="fas fa-check text-green-500 mr-2"></i>
                            <?php echo esc_html($feature); ?>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                    <?php endif; ?>
                    <a href="#contact" class="btn btn-primary bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-all duration-300">
                        Learn More
                    </a>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Success Stories Preview Section -->
    <section class="py-16 bg-blue-900 text-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Graduate Success Stories</h2>
                <p class="text-xl text-blue-100 max-w-3xl mx-auto">
                    Join thousands of successful drivers who started their careers with Titan Trucking School
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <?php 
                $success_stories = array_slice(titan_get_success_stories(), 0, 3);
                foreach ($success_stories as $story): 
                ?>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div class="w-20 h-20 rounded-full bg-yellow-500 mx-auto mb-4 overflow-hidden">
                        <img src="<?php echo esc_url($story['image']); ?>" alt="<?php echo esc_attr($story['name']); ?>" class="w-full h-full object-cover">
                    </div>
                    <h3 class="text-xl font-bold mb-2"><?php echo esc_html($story['name']); ?></h3>
                    <p class="text-blue-200 mb-4"><?php echo esc_html($story['role']); ?></p>
                    <p class="text-blue-100 italic">"<?php echo esc_html($story['quote']); ?>"</p>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="text-center mt-12">
                <a href="<?php echo esc_url(home_url('/#success-stories')); ?>" class="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Read All Success Stories
                </a>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-blue-900">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-4">Ready to Start Your CDL Career?</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
                Join thousands of successful drivers. Get your CDL in just 3-4 weeks with our proven training program.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="btn btn-primary bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Start Application
                </a>
                <a href="tel:+1-555-TITAN-CDL" class="btn btn-secondary border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 hover:text-white transition-all duration-300">
                    Call Now: (555) TITAN-CDL
                </a>
            </div>
        </div>
    </section>
</main>

<script>
function openProgramDetails(slug) {
    // This would open a modal or navigate to detailed program page
    console.log('Opening details for program:', slug);
    // For now, scroll to contact section
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}
</script>

<?php get_footer(); ?>