<?php
/**
 * Template for Contact Page - Mobile Optimized Multi-Step Form
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

get_header(); ?>

<main class="contact-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Get Started <span class="text-yellow-400">Today</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-blue-100">
                    Take the first step towards your new career. We're here to help you succeed.
                </p>
                <div class="grid md:grid-cols-3 gap-8 mt-12">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-phone text-2xl text-blue-900"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Call Us</h3>
                        <p class="text-blue-200">(555) TITAN-CDL</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-envelope text-2xl text-blue-900"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Email Us</h3>
                        <p class="text-blue-200">info@titantruck.school</p>
                    </div>
                    <div class="text-center">
                        <div class="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-map-marker-alt text-2xl text-blue-900"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-2">Visit Us</h3>
                        <p class="text-blue-200">Minneapolis, MN</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Multi-Step Contact Form Section -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Start Your Application</h2>
                    <p class="text-xl text-gray-600">
                        Complete our quick application to get personalized program recommendations
                    </p>
                </div>

                <!-- Progress Indicator -->
                <div class="mb-8">
                    <div class="flex items-center justify-center space-x-4">
                        <div class="flex items-center">
                            <div class="step-indicator w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" data-step="1">1</div>
                            <span class="ml-2 text-sm font-medium text-gray-700 hidden md:inline">Personal Info</span>
                        </div>
                        <div class="w-12 h-1 bg-gray-300 step-connector" data-connector="1"></div>
                        <div class="flex items-center">
                            <div class="step-indicator w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold" data-step="2">2</div>
                            <span class="ml-2 text-sm font-medium text-gray-500 hidden md:inline">Experience</span>
                        </div>
                        <div class="w-12 h-1 bg-gray-300 step-connector" data-connector="2"></div>
                        <div class="flex items-center">
                            <div class="step-indicator w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold" data-step="3">3</div>
                            <span class="ml-2 text-sm font-medium text-gray-500 hidden md:inline">Preferences</span>
                        </div>
                        <div class="w-12 h-1 bg-gray-300 step-connector" data-connector="3"></div>
                        <div class="flex items-center">
                            <div class="step-indicator w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold" data-step="4">4</div>
                            <span class="ml-2 text-sm font-medium text-gray-500 hidden md:inline">Review</span>
                        </div>
                    </div>
                </div>

                <!-- Multi-Step Form -->
                <form id="multi-step-form" class="bg-white rounded-2xl shadow-xl p-8" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                    <?php wp_nonce_field('titan_contact_form', 'titan_contact_nonce'); ?>
                    <input type="hidden" name="action" value="titan_contact_form_submit">

                    <!-- Step 1: Personal Information -->
                    <div class="form-step active" data-step="1">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="first_name" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                <input type="text" id="first_name" name="first_name" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label for="last_name" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                <input type="text" id="last_name" name="last_name" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input type="email" id="email" name="email" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                       placeholder="(555) 123-4567">
                            </div>
                            <div class="md:col-span-2">
                                <label for="zip_code" class="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                                <input type="text" id="zip_code" name="zip_code" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                       placeholder="55101">
                            </div>
                        </div>
                        <div class="flex justify-end mt-8">
                            <button type="button" class="btn-next bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                                Next Step <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Step 2: Driving Experience -->
                    <div class="form-step" data-step="2">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Driving Experience</h3>
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-4">Do you currently have a regular driver's license? *</label>
                                <div class="space-y-3">
                                    <label class="flex items-center">
                                        <input type="radio" name="has_license" value="yes" class="mr-3">
                                        <span>Yes, I have a valid driver's license</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="has_license" value="no" class="mr-3">
                                        <span>No, I need to get my license first</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-4">Driving experience level *</label>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <label class="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 cursor-pointer">
                                        <input type="radio" name="experience_level" value="beginner" class="mr-3">
                                        <div>
                                            <div class="font-medium">New Driver</div>
                                            <div class="text-sm text-gray-600">Less than 2 years</div>
                                        </div>
                                    </label>
                                    <label class="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 cursor-pointer">
                                        <input type="radio" name="experience_level" value="experienced" class="mr-3">
                                        <div>
                                            <div class="font-medium">Experienced Driver</div>
                                            <div class="text-sm text-gray-600">2+ years of driving</div>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-4">Any driving violations in the past 3 years?</label>
                                <div class="space-y-3">
                                    <label class="flex items-center">
                                        <input type="radio" name="violations" value="none" class="mr-3">
                                        <span>No violations</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="violations" value="minor" class="mr-3">
                                        <span>Minor violations (speeding tickets, etc.)</span>
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="violations" value="major" class="mr-3">
                                        <span>Major violations (DUI, reckless driving, etc.)</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-between mt-8">
                            <button type="button" class="btn-prev bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                                <i class="fas fa-arrow-left mr-2"></i> Previous
                            </button>
                            <button type="button" class="btn-next bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                                Next Step <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Step 3: Preferences & Goals -->
                    <div class="form-step" data-step="3">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Preferences & Goals</h3>
                        <div class="space-y-6">
                            <div>
                                <label for="program_interest" class="block text-sm font-medium text-gray-700 mb-4">Which program interests you most? *</label>
                                <select id="program_interest" name="program_interest" required 
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="">Select a program...</option>
                                    <option value="cdl-a-standard">CDL-A Standard (3 weeks)</option>
                                    <option value="cdl-a-accelerated">CDL-A Accelerated (2 weeks)</option>
                                    <option value="cdl-b-commercial">CDL-B Commercial (2 weeks)</option>
                                    <option value="passenger-endorsement">Passenger Endorsement</option>
                                    <option value="hazmat-endorsement">HazMat Endorsement</option>
                                    <option value="refresher">Refresher Course</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-4">Preferred start date *</label>
                                <div class="grid md:grid-cols-3 gap-4">
                                    <label class="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 cursor-pointer">
                                        <input type="radio" name="start_date" value="asap" class="mr-3">
                                        <span>As soon as possible</span>
                                    </label>
                                    <label class="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 cursor-pointer">
                                        <input type="radio" name="start_date" value="1-month" class="mr-3">
                                        <span>Within 1 month</span>
                                    </label>
                                    <label class="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 cursor-pointer">
                                        <input type="radio" name="start_date" value="2-3months" class="mr-3">
                                        <span>2-3 months</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-4">How did you hear about us?</label>
                                <select name="referral_source" 
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="">Select an option...</option>
                                    <option value="google">Google search</option>
                                    <option value="facebook">Facebook</option>
                                    <option value="referral">Friend/Family referral</option>
                                    <option value="company">Trucking company recommendation</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label for="goals" class="block text-sm font-medium text-gray-700 mb-2">What are your career goals? (Optional)</label>
                                <textarea id="goals" name="goals" rows="4" 
                                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                          placeholder="Tell us about your trucking career aspirations..."></textarea>
                            </div>
                        </div>

                        <div class="flex justify-between mt-8">
                            <button type="button" class="btn-prev bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                                <i class="fas fa-arrow-left mr-2"></i> Previous
                            </button>
                            <button type="button" class="btn-next bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                                Review <i class="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Step 4: Review & Submit -->
                    <div class="form-step" data-step="4">
                        <h3 class="text-2xl font-bold text-gray-900 mb-6">Review Your Information</h3>
                        
                        <div id="review-content" class="space-y-6">
                            <!-- Review content will be populated by JavaScript -->
                        </div>

                        <div class="bg-blue-50 rounded-lg p-6 mt-8">
                            <h4 class="text-lg font-bold text-blue-900 mb-3">What Happens Next?</h4>
                            <div class="space-y-2 text-blue-800">
                                <div class="flex items-center">
                                    <i class="fas fa-check text-green-600 mr-3"></i>
                                    <span>We'll review your application within 24 hours</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-phone text-green-600 mr-3"></i>
                                    <span>Our admissions team will call to discuss your options</span>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-calendar text-green-600 mr-3"></i>
                                    <span>Schedule a tour or get started with enrollment</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-between mt-8">
                            <button type="button" class="btn-prev bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                                <i class="fas fa-arrow-left mr-2"></i> Previous
                            </button>
                            <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center">
                                <i class="fas fa-paper-plane mr-2"></i>
                                Submit Application
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Alternative Contact Methods -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Other Ways to Connect</h2>
                <p class="text-xl text-gray-600">
                    Prefer to speak with someone directly? We're here to help.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div class="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-phone text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Call Us Today</h3>
                    <p class="text-gray-600 mb-4">Speak directly with our admissions team</p>
                    <a href="tel:+1-555-TITAN-CDL" class="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                        (555) TITAN-CDL
                    </a>
                    <p class="text-sm text-gray-500 mt-2">Mon-Fri 8AM-6PM</p>
                </div>

                <div class="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-calendar-alt text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Schedule a Tour</h3>
                    <p class="text-gray-600 mb-4">Visit our facilities and meet our instructors</p>
                    <a href="#" class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-all duration-300">
                        Book Tour
                    </a>
                    <p class="text-sm text-gray-500 mt-2">Available Mon-Sat</p>
                </div>

                <div class="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-comments text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
                    <p class="text-gray-600 mb-4">Get instant answers to your questions</p>
                    <button class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold inline-block transition-all duration-300" onclick="openChat()">
                        Start Chat
                    </button>
                    <p class="text-sm text-gray-500 mt-2">Available 24/7</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Location Information -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 class="text-4xl font-bold text-gray-900 mb-6">Visit Our Campus</h2>
                        <div class="space-y-6">
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-map-marker-alt text-blue-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Main Campus</h3>
                                    <p class="text-gray-600">
                                        123 Trucking Way<br>
                                        Minneapolis, MN 55401<br>
                                        United States
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-clock text-green-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                                    <p class="text-gray-600">
                                        Monday - Friday: 8:00 AM - 6:00 PM<br>
                                        Saturday: 9:00 AM - 4:00 PM<br>
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                                    <i class="fas fa-parking text-purple-600 text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-900 mb-2">Parking & Access</h3>
                                    <p class="text-gray-600">
                                        Free parking available on-site<br>
                                        Wheelchair accessible facility<br>
                                        Public transportation nearby
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center h-96">
                        <div class="text-center text-gray-500">
                            <i class="fas fa-map text-6xl mb-4"></i>
                            <p class="text-xl font-semibold">Interactive Map</p>
                            <p>Google Maps integration would go here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
.form-step {
    display: none;
}
.form-step.active {
    display: block;
}
.step-indicator.active {
    background-color: #2563eb;
    color: white;
}
.step-indicator.completed {
    background-color: #10b981;
    color: white;
}
.step-connector.completed {
    background-color: #10b981;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('multi-step-form');
    const steps = form.querySelectorAll('.form-step');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const stepConnectors = document.querySelectorAll('.step-connector');
    let currentStep = 1;

    // Navigation functions
    function showStep(step) {
        steps.forEach(s => s.classList.remove('active'));
        document.querySelector(`[data-step="${step}"]`).classList.add('active');
        
        // Update progress indicators
        stepIndicators.forEach((indicator, index) => {
            indicator.classList.remove('active', 'completed');
            if (index + 1 < step) {
                indicator.classList.add('completed');
            } else if (index + 1 === step) {
                indicator.classList.add('active');
            }
        });

        // Update connectors
        stepConnectors.forEach((connector, index) => {
            connector.classList.remove('completed');
            if (index + 1 < step) {
                connector.classList.add('completed');
            }
        });
    }

    function validateStep(step) {
        const currentStepEl = document.querySelector(`[data-step="${step}"]`);
        const requiredFields = currentStepEl.querySelectorAll('[required]');
        
        for (let field of requiredFields) {
            if (!field.value.trim()) {
                field.focus();
                field.classList.add('border-red-500');
                return false;
            }
            field.classList.remove('border-red-500');
        }

        // Check radio buttons for step 2 and 3
        if (step === 2) {
            const hasLicense = document.querySelector('input[name="has_license"]:checked');
            const experienceLevel = document.querySelector('input[name="experience_level"]:checked');
            if (!hasLicense || !experienceLevel) {
                alert('Please answer all required questions.');
                return false;
            }
        }

        if (step === 3) {
            const programInterest = document.getElementById('program_interest').value;
            const startDate = document.querySelector('input[name="start_date"]:checked');
            if (!programInterest || !startDate) {
                alert('Please complete all required fields.');
                return false;
            }
        }

        return true;
    }

    function populateReview() {
        const formData = new FormData(form);
        const reviewContent = document.getElementById('review-content');
        
        reviewContent.innerHTML = `
            <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-bold text-gray-900 mb-4">Personal Information</h4>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                    <div><span class="font-medium">Name:</span> ${formData.get('first_name')} ${formData.get('last_name')}</div>
                    <div><span class="font-medium">Email:</span> ${formData.get('email')}</div>
                    <div><span class="font-medium">Phone:</span> ${formData.get('phone')}</div>
                    <div><span class="font-medium">ZIP Code:</span> ${formData.get('zip_code')}</div>
                </div>
            </div>
            <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-bold text-gray-900 mb-4">Experience & Preferences</h4>
                <div class="space-y-2 text-sm">
                    <div><span class="font-medium">Driver's License:</span> ${formData.get('has_license') === 'yes' ? 'Yes' : 'No'}</div>
                    <div><span class="font-medium">Experience Level:</span> ${formData.get('experience_level')}</div>
                    <div><span class="font-medium">Program Interest:</span> ${document.getElementById('program_interest').selectedOptions[0]?.text || 'Not selected'}</div>
                    <div><span class="font-medium">Preferred Start:</span> ${document.querySelector('input[name="start_date"]:checked')?.parentElement.textContent.trim() || 'Not selected'}</div>
                </div>
            </div>
        `;
    }

    // Event listeners
    form.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-next')) {
            if (validateStep(currentStep)) {
                currentStep++;
                showStep(currentStep);
                if (currentStep === 4) {
                    populateReview();
                }
            }
        } else if (e.target.classList.contains('btn-prev')) {
            currentStep--;
            showStep(currentStep);
        }
    });

    // Phone number formatting
    document.getElementById('phone').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        let formattedValue = '';
        
        if (value.length >= 1) formattedValue += '(' + value.substr(0, 3);
        if (value.length >= 4) formattedValue += ') ' + value.substr(3, 3);
        if (value.length >= 7) formattedValue += '-' + value.substr(6, 4);
        
        e.target.value = formattedValue;
    });
});

function openChat() {
    alert('Live chat functionality would be integrated here');
}
</script>

<?php get_footer(); ?>