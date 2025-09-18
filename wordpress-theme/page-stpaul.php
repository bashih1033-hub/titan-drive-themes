<?php
/**
 * Template for St. Paul Location Page
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

get_header(); 

$location = titan_get_locations()['stpaul'];
?>

<main class="location-page stpaul-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Titan Trucking School <span class="text-yellow-400">St. Paul</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-green-100">
                    Advanced CDL training facility in St. Paul. Experience the future of truck driver education.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" class="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                        Schedule a Tour
                    </a>
                    <a href="tel:+1-555-456-TITAN" class="btn btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-all duration-300">
                        Call St. Paul
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
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">Visit Our St. Paul Training Center</h2>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-map-marker-alt text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Address</h3>
                                    <p class="text-gray-600">
                                        <?php echo esc_html($location['address']); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-phone text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                    <p class="text-gray-600">
                                        <a href="tel:<?php echo esc_attr($location['phone']); ?>" class="text-green-600 hover:text-green-700">
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
                            <a href="#contact" class="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center transition-all duration-300">
                                <i class="fas fa-calendar-alt mr-2"></i>
                                Schedule Your Visit
                            </a>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center h-96">
                        <div class="text-center text-gray-500">
                            <i class="fas fa-map text-6xl mb-4"></i>
                            <p class="text-xl font-semibold">St. Paul Training Center Map</p>
                            <p>Interactive map with public transit routes</p>
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
                <h2 class="text-4xl font-bold text-gray-900 mb-4">St. Paul Training Center Features</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Cutting-edge technology and modern facilities for advanced CDL training
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <?php foreach ($location['features'] as $index => $feature): ?>
                <div class="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <?php
                        $icons = array(
                            'fas fa-desktop',
                            'fas fa-tools',
                            'fas fa-microscope',
                            'fas fa-bus',
                            'fas fa-couch'
                        );
                        ?>
                        <i class="<?php echo esc_attr($icons[$index % count($icons)]); ?> text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3"><?php echo esc_html($feature); ?></h3>
                    <p class="text-gray-600">
                        <?php
                        $descriptions = array(
                            'Advanced driving simulators for risk-free practice and skill development',
                            'Complete vehicle maintenance training bay with professional equipment',
                            'Interactive learning laboratories with hands-on training modules',
                            'Convenient access via Metro Transit and multiple bus routes',
                            'Comfortable student areas for breaks, studying, and networking'
                        );
                        echo esc_html($descriptions[$index % count($descriptions)]);
                        ?>
                    </p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- St. Paul Advantages -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Train in St. Paul?</h2>
                    <p class="text-xl text-gray-600">
                        Strategic location with unique advantages for truck driver training
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-graduation-cap text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Advanced Technology</h3>
                                    <p class="text-gray-600">Our newest facility features the latest in driving simulation and training technology.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-subway text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Public Transportation Hub</h3>
                                    <p class="text-gray-600">Easily accessible via Metro Transit with multiple bus routes and light rail connections.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-industry text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Industrial Corridor Access</h3>
                                    <p class="text-gray-600">Located near major industrial areas and freight distribution centers.</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-handshake text-yellow-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Diverse Job Market</h3>
                                    <p class="text-gray-600">Access to varied employment opportunities from local delivery to long-haul routes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
                        <h3 class="text-2xl font-bold mb-6">St. Paul Training Advantages</h3>
                        <div class="space-y-4">
                            <div class="flex justify-between items-center">
                                <span>Simulator Training Hours:</span>
                                <span class="font-bold">40+ Hours</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Tech-Enhanced Learning:</span>
                                <span class="font-bold">100%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Job Placement Rate:</span>
                                <span class="font-bold">97%</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span>Public Transit Access:</span>
                                <span class="font bold">Excellent</span>
                            </div>
                        </div>
                        <div class="mt-6 pt-6 border-t border-green-400">
                            <p class="text-green-100 text-sm">
                                *St. Paul facility opened in 2022 with state-of-the-art equipment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Simulator Training Highlight -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Advanced Simulator Training</h2>
                    <p class="text-xl text-gray-600">
                        Experience real-world driving scenarios in a safe, controlled environment
                    </p>
                </div>

                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div class="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-96 flex items-center justify-center">
                        <div class="text-center text-gray-600">
                            <i class="fas fa-desktop text-8xl mb-4"></i>
                            <p class="text-2xl font-bold">Driving Simulator</p>
                            <p>High-fidelity training system</p>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-3xl font-bold text-gray-900 mb-6">Next-Generation Training Technology</h3>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 mb-1">Weather Condition Training</h4>
                                    <p class="text-gray-600">Practice driving in rain, snow, ice, and fog conditions safely</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 mb-1">Emergency Scenarios</h4>
                                    <p class="text-gray-600">Learn to handle brake failures, tire blowouts, and hazardous situations</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 mb-1">City & Highway Practice</h4>
                                    <p class="text-gray-600">Master urban navigation and highway driving techniques</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-check text-white text-sm"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 mb-1">Backing & Maneuvering</h4>
                                    <p class="text-gray-600">Perfect your backing skills with unlimited practice attempts</p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <a href="#contact" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors">
                                <i class="fas fa-play mr-2"></i>
                                Experience Our Simulators
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Programs Available -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Programs Available in St. Paul</h2>
                <p class="text-xl text-gray-600">
                    Comprehensive CDL training programs with enhanced technology integration
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <?php 
                $programs = titan_get_cdl_programs();
                foreach ($programs as $program): 
                ?>
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-500">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mr-4">
                            <i class="<?php echo esc_attr($program['icon']); ?> text-white"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-gray-900"><?php echo esc_html($program['title']); ?></h3>
                            <p class="text-green-600 font-medium"><?php echo esc_html($program['duration']); ?></p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4"><?php echo esc_html($program['description']); ?></p>
                    <div class="bg-green-50 rounded-lg p-3 mb-4">
                        <div class="flex items-center text-green-800 text-sm">
                            <i class="fas fa-desktop mr-2"></i>
                            <span class="font-medium">Enhanced with simulator training</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-2xl font-bold text-green-600"><?php echo esc_html($program['price']); ?></span>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition-colors">
                            Enroll Now
                        </a>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Success Stories from St. Paul -->
    <section class="py-16 bg-green-900 text-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">St. Paul Graduate Success Stories</h2>
                <p class="text-xl text-green-100">
                    Meet successful drivers trained at our advanced St. Paul facility
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                            <span class="text-green-900 font-bold text-xl">AL</span>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">Amy Liu</h3>
                            <p class="text-green-200">Regional Driver</p>
                        </div>
                    </div>
                    <p class="text-green-100 italic mb-4">
                        "The simulator training at St. Paul prepared me for everything! I felt confident handling my first winter driving thanks to the weather simulation practice."
                    </p>
                    <div class="text-sm text-green-200">
                        <strong>Starting Salary:</strong> $60,000/year<br>
                        <strong>Company:</strong> Midwest Freight Lines
                    </div>
                </div>

                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div class="flex items-center mb-4">
                        <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                            <span class="text-green-900 font-bold text-xl">DR</span>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold">David Rodriguez</h3>
                            <p class="text-green-200">Owner-Operator</p>
                        </div>
                    </div>
                    <p class="text-green-100 italic mb-4">
                        "The technology at St. Paul is incredible. Being able to practice backing and city driving over and over in the simulator made the real test easy!"
                    </p>
                    <div class="text-sm text-green-200">
                        <strong>Annual Income:</strong> $95,000/year<br>
                        <strong>Specialty:</strong> Regional Hauling
                    </div>
                </div>
            </div>

            <div class="text-center mt-12">
                <a href="<?php echo esc_url(home_url('/#success-stories')); ?>" class="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Read All Success Stories
                </a>
            </div>
        </div>
    </section>

    <!-- Contact CTA -->
    <section id="contact" class="py-16 bg-gradient-to-br from-yellow-400 to-yellow-500 text-green-900">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-4">Ready to Experience Our St. Paul Training Center?</h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
                See our advanced simulators in action and discover the future of CDL training.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Schedule Simulator Demo
                </a>
                <a href="tel:+1-555-456-TITAN" class="btn btn-secondary border-2 border-green-900 text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900 hover:text-white transition-all duration-300">
                    Call St. Paul: <?php echo esc_html($location['phone']); ?>
                </a>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>