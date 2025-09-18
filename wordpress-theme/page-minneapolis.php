<?php
/**
 * Template for Minneapolis Location Page
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

get_header(); 

$location = titan_get_locations()['minneapolis'];
?>

<main class="location-page minneapolis-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Titan Trucking School <span class="text-yellow-400">Minneapolis</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-blue-100">
                    Premier CDL training in the heart of Minneapolis. Start your trucking career today.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" class="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                        Schedule a Tour
                    </a>
                    <a href="tel:+1-555-123-TITAN" class="btn btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                        Call Minneapolis
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Location Information -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">Visit Our Minneapolis Campus</h2>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-map-marker-alt text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Address</h3>
                                    <p class="text-gray-600">
                                        <?php echo esc_html($location['address']); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-phone text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                    <p class="text-gray-600">
                                        <a href="tel:<?php echo esc_attr($location['phone']); ?>" class="text-blue-600 hover:text-blue-700">
                                            <?php echo esc_html($location['phone']); ?>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-clock text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                                    <div class="text-gray-600 space-y-1">
                                        <?php foreach ($location['hours'] as $day => $hours): ?>
                                        <div class="flex justify-between">
                                            <span class="capitalize font-medium"><?php echo esc_html($day); ?>:</span>
                                            <span><?php echo esc_html($hours); ?></span>
                                        </div>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-300">
                                <i class="fas fa-calendar-alt mr-2"></i>
                                Schedule Your Visit
                            </a>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center h-96">
                        <div class="text-center text-gray-500">
                            <i class="fas fa-map text-6xl mb-4"></i>
                            <p class="text-xl font-semibold">Minneapolis Campus Map</p>
                            <p>Interactive map showing location and parking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Campus Features -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Minneapolis Campus Features</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    State-of-the-art facilities designed for comprehensive CDL training
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <?php foreach ($location['features'] as $index => $feature): ?>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <?php
                        $icons = array(
                            'fas fa-truck',
                            'fas fa-road',
                            'fas fa-chalkboard-teacher',
                            'fas fa-parking',
                            'fas fa-wheelchair'
                        );
                        ?>
                        <i class="<?php echo esc_attr($icons[$index % count($icons)]); ?> text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3"><?php echo esc_html($feature); ?></h3>
                    <p class="text-gray-600">
                        <?php
                        $descriptions = array(
                            'Late-model trucks with current safety technology and modern features',
                            'Comprehensive 40-acre driving range for safe, controlled practice',
                            'Interactive learning environment with modern AV equipment',
                            'Convenient on-site parking available for all students and visitors',
                            'Full accessibility compliance ensuring equal access for all students'
                        );
                        echo esc_html($descriptions[$index % count($descriptions)]);
                        ?>
                    </p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Minneapolis Advantages -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Train in Minneapolis?</h2>
                    <p class="text-xl text-gray-600">
                        Strategic location with excellent opportunities for new drivers
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-city text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Major Transportation Hub</h3>
                                    <p class="text-gray-600">Minneapolis is a central logistics hub with numerous trucking companies and freight opportunities.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-handshake text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Strong Industry Partnerships</h3>
                                    <p class="text-gray-600">Direct connections with local and regional carriers for immediate job placement.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-route text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Diverse Route Options</h3>
                                    <p class="text-gray-600">Access to local, regional, and OTR opportunities from the Minneapolis location.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-users text-yellow-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Supportive Community</h3>
                                    <p class="text-gray-600">Join a network of Minneapolis-area drivers and transportation professionals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                        <h3 class="text-2xl font-bold mb-6">Minneapolis Job Market</h3>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span>Local Carriers:</span>
                                <span class="font-bold">25+</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Average Starting Salary:</span>
                                <span class="font-bold">$55,000</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Job Placement Rate:</span>
                                <span class="font-bold">98%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Time to Employment:</span>
                                <span class="font-bold">Within 30 days</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-6 border-t border-blue-400">
                            <p class="text-blue-100 text-sm">
                                *Based on 2023 graduate placement data for Minneapolis campus
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs Available -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Programs Available in Minneapolis</h2>
                <p class="text-xl text-gray-600">
                    Full range of CDL training programs offered at our Minneapolis location
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <?php 
                $programs = titan_get_cdl_programs();
                foreach ($programs as $program): 
                ?>
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                            <i class="<?php echo esc_attr($program['icon']); ?> text-white"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-900"><?php echo esc_html($program['title']); ?></h3>
                            <p class="text-blue-600 font-medium"><?php echo esc_html($program['duration']); ?></p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4"><?php echo esc_html($program['description']); ?></p>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-green-600"><?php echo esc_html($program['price']); ?></span>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition-colors">
                            Enroll Now
                        </a>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Success Stories from Minneapolis -->
    <section class="py-16 bg-blue-900 text-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Minneapolis Graduate Success Stories</h2>
                <p class="text-xl text-blue-100">
                    Hear from successful drivers who started at our Minneapolis campus
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                            <span class="text-blue-900 font-bold text-xl">JS</span>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Jennifer Smith</h3>
                            <p class="text-blue-200">Local Delivery Driver</p>
                        </div>
                    </div>
                    <p class="text-blue-100 italic mb-4">
                        "Training at the Minneapolis campus was convenient and thorough. The instructors really cared about our success, and I got hired within two weeks of graduation!"
                    </p>
                    <div class="text-sm text-blue-200">
                        <strong>Starting Salary:</strong> $58,000/year<br>
                        <strong>Company:</strong> Metro Logistics
                    </div>
                </div>

                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                            <span class="text-blue-900 font-bold text-xl">MJ</span>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Mike Johnson</h3>
                            <p class="text-blue-200">OTR Driver</p>
                        </div>
                    </div>
                    <p class="text-blue-100 italic mb-4">
                        "The Minneapolis location had everything I needed - great equipment, experienced instructors, and strong job placement support. Now I'm earning more than ever!"
                    </p>
                    <div class="text-sm text-blue-200">
                        <strong>Starting Salary:</strong> $62,000/year<br>
                        <strong>Company:</strong> National Transport
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <a href="<?php echo esc_url(home_url('/#success-stories')); ?>" class="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Read All Success Stories
                </a>
            </div>
        </div>
    </section>

    <!-- Contact CTA -->
    <section id="contact" class="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-blue-900">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-4">Ready to Visit Our Minneapolis Campus?</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
                Schedule a tour, speak with our admissions team, or start your application today.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Schedule Campus Tour
                </a>
                <a href="tel:+1-555-123-TITAN" class="btn btn-secondary border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 hover:text-white transition-all duration-300">
                    Call Minneapolis: <?php echo esc_html($location['phone']); ?>
                </a>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>