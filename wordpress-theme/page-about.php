<?php
/**
 * Template for About Page
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

get_header(); ?>

<main class="about-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    About <span class="text-yellow-400">Titan Trucking School</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-blue-100">
                    Transforming lives through professional CDL training since 2015. Your success is our mission.
                </p>
                <div class="grid md:grid-cols-3 gap-8 mt-12">
                    <div class="text-center">
                        <div class="text-4xl font-bold text-yellow-400">5,000+</div>
                        <div class="text-blue-100">Graduates</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-yellow-400">98%</div>
                        <div class="text-blue-100">Pass Rate</div>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl font-bold text-yellow-400">8</div>
                        <div class="text-blue-100">Years of Excellence</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p class="text-xl text-gray-600 mb-6 leading-relaxed">
                            At Titan Trucking School, we're committed to providing the highest quality CDL training 
                            that empowers individuals to build successful careers in the transportation industry.
                        </p>
                        <p class="text-lg text-gray-600 mb-8">
                            We believe that everyone deserves the opportunity to achieve financial independence 
                            and career satisfaction. Through comprehensive training, personalized support, and 
                            lifetime career assistance, we help our students not just get their CDL, but build 
                            lasting, profitable careers.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-graduation-cap text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">Excellence in Training</h3>
                                    <p class="text-gray-600">Industry-leading curriculum and experienced instructors</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-handshake text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">Lifetime Support</h3>
                                    <p class="text-gray-600">Career assistance and guidance throughout your journey</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-star text-yellow-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">Guaranteed Success</h3>
                                    <p class="text-gray-600">98% pass rate with our comprehensive training program</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <div class="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                            <h3 class="text-2xl font-bold mb-6">Why We Started</h3>
                            <p class="text-blue-100 mb-6">
                                Founded by former truck drivers who understood the challenges of breaking 
                                into the industry, Titan Trucking School was created to provide the 
                                support and training we wished we had when starting our careers.
                            </p>
                            <p class="text-blue-100">
                                Today, we're proud to have helped thousands of students achieve their 
                                goals and build successful careers in trucking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Leadership Team Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Experienced professionals dedicated to your success
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <?php 
                $leadership = array(
                    array(
                        'name' => 'Mike Johnson',
                        'title' => 'Founder & CEO',
                        'image' => get_template_directory_uri() . '/assets/images/team/mike-johnson.jpg',
                        'bio' => '25+ years in trucking industry. Former owner-operator turned educator.',
                        'credentials' => array('CDL-A Licensed', '20+ Years Teaching', 'Safety Award Winner')
                    ),
                    array(
                        'name' => 'Sarah Davis',
                        'title' => 'Head Instructor',
                        'image' => get_template_directory_uri() . '/assets/images/team/sarah-davis.jpg',
                        'bio' => 'Certified CDL instructor with expertise in defensive driving and safety protocols.',
                        'credentials' => array('Certified Instructor', '15+ Years Experience', 'DOT Compliance Expert')
                    ),
                    array(
                        'name' => 'Carlos Rodriguez',
                        'title' => 'Career Services Director',
                        'image' => get_template_directory_uri() . '/assets/images/team/carlos-rodriguez.jpg',
                        'bio' => 'Connects graduates with top trucking companies. 95% job placement success rate.',
                        'credentials' => array('HR Professional', 'Industry Connections', 'Career Counselor')
                    )
                );
                
                foreach ($leadership as $member): 
                ?>
                <div class="bg-white rounded-xl shadow-lg overflow-hidden text-center hover:shadow-2xl transition-all duration-300">
                    <div class="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <div class="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                            <i class="fas fa-user text-4xl text-white"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 mb-2"><?php echo esc_html($member['name']); ?></h3>
                        <p class="text-blue-600 font-semibold mb-4"><?php echo esc_html($member['title']); ?></p>
                        <p class="text-gray-600 mb-4"><?php echo esc_html($member['bio']); ?></p>
                        <div class="space-y-2">
                            <?php foreach ($member['credentials'] as $credential): ?>
                            <span class="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2">
                                <?php echo esc_html($credential); ?>
                            </span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Facilities Section -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Training Facilities</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Modern equipment and comprehensive facilities designed for optimal learning
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
                <?php 
                $facilities = array(
                    array(
                        'icon' => 'fas fa-truck',
                        'title' => 'Modern Fleet',
                        'description' => 'Late-model trucks with current safety technology'
                    ),
                    array(
                        'icon' => 'fas fa-road',
                        'title' => 'Private Range',
                        'description' => '40-acre private driving range for safe practice'
                    ),
                    array(
                        'icon' => 'fas fa-chalkboard-teacher',
                        'title' => 'Smart Classrooms',
                        'description' => 'Interactive learning with modern AV equipment'
                    ),
                    array(
                        'icon' => 'fas fa-tools',
                        'title' => 'Maintenance Bay',
                        'description' => 'Hands-on vehicle inspection training facility'
                    )
                );
                
                foreach ($facilities as $facility): 
                ?>
                <div class="text-center">
                    <div class="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="<?php echo esc_attr($facility['icon']); ?> text-3xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3"><?php echo esc_html($facility['title']); ?></h3>
                    <p class="text-gray-600"><?php echo esc_html($facility['description']); ?></p>
                </div>
                <?php endforeach; ?>
            </div>

            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
                <div class="text-center">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Want to See Our Facilities?</h3>
                    <p class="text-gray-600 mb-6">
                        Schedule a tour of our training facilities and meet our instructors. 
                        See firsthand why Titan Trucking School is the right choice for your CDL training.
                    </p>
                    <a href="#contact" class="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                        Schedule a Tour
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Accreditation & Partnerships Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Accreditation & Industry Partnerships</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Recognized by industry leaders and committed to the highest standards
                </p>
            </div>

            <div class="max-w-6xl mx-auto">
                <div class="grid md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Accreditation & Certifications</h3>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-certificate text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">DOT Approved Training</h4>
                                    <p class="text-gray-600">Fully certified by Department of Transportation</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-shield-alt text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">PTDI Certified</h4>
                                    <p class="text-gray-600">Professional Truck Driver Institute standards</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-award text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">State Licensed</h4>
                                    <p class="text-gray-600">Licensed by Minnesota Department of Education</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Industry Partnerships</h3>
                        <div class="space-y-4">
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-handshake text-yellow-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">Major Carrier Partners</h4>
                                    <p class="text-gray-600">Direct hiring relationships with 50+ companies</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-users text-red-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">Nonprofit Partnerships</h4>
                                    <p class="text-gray-600">Working with local organizations for community outreach</p>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                                    <i class="fas fa-graduation-cap text-indigo-600 text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900">Continuing Education</h4>
                                    <p class="text-gray-600">Ongoing training and development programs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Partner Logos Section -->
                <div class="bg-white rounded-xl p-8">
                    <h3 class="text-xl font-bold text-gray-900 text-center mb-8">Trusted by Industry Leaders</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
                        <div class="text-center">
                            <div class="h-16 bg-gray-200 rounded flex items-center justify-center mb-2">
                                <span class="text-gray-500 font-bold">SCHNEIDER</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="h-16 bg-gray-200 rounded flex items-center justify-center mb-2">
                                <span class="text-gray-500 font-bold">SWIFT</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="h-16 bg-gray-200 rounded flex items-center justify-center mb-2">
                                <span class="text-gray-500 font-bold">PRIME</span>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="h-16 bg-gray-200 rounded flex items-center justify-center mb-2">
                                <span class="text-gray-500 font-bold">J.B. HUNT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-4xl font-bold mb-4">Ready to Join the Titan Family?</h2>
            <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Become part of our community of successful professional drivers. Your new career starts here.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" class="btn btn-primary bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Start Your Journey
                </a>
                <a href="<?php echo esc_url(home_url('/programs')); ?>" class="btn btn-secondary border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                    View Programs
                </a>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>