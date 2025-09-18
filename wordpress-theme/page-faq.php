<?php
/**
 * Template for FAQ Page - Enhanced with Categories and Search
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

get_header(); ?>

<main class="faq-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    Frequently Asked <span class="text-yellow-400">Questions</span>
                </h1>
                <p class="text-xl md:text-2xl mb-8 text-purple-100">
                    Get answers to the most common questions about CDL training and trucking careers
                </p>
                
                <!-- FAQ Search -->
                <div class="max-w-2xl mx-auto">
                    <div class="relative">
                        <input type="text" id="faq-search" 
                               class="w-full px-6 py-4 rounded-lg text-gray-900 text-lg border-2 border-transparent focus:border-yellow-400 focus:outline-none"
                               placeholder="Search FAQs... (e.g., cost, duration, requirements)">
                        <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <i class="fas fa-search text-gray-400 text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Categories Navigation -->
    <section class="py-8 bg-white border-b">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="flex flex-wrap justify-center gap-4">
                    <button class="faq-category-btn active" data-category="all">
                        <i class="fas fa-th-large mr-2"></i>All Questions
                    </button>
                    <button class="faq-category-btn" data-category="Programs & Training">
                        <i class="fas fa-graduation-cap mr-2"></i>Programs & Training
                    </button>
                    <button class="faq-category-btn" data-category="Requirements & Eligibility">
                        <i class="fas fa-clipboard-check mr-2"></i>Requirements
                    </button>
                    <button class="faq-category-btn" data-category="Cost & Financing">
                        <i class="fas fa-dollar-sign mr-2"></i>Cost & Financing
                    </button>
                    <button class="faq-category-btn" data-category="Job Placement & Career Opportunities">
                        <i class="fas fa-users mr-2"></i>Jobs & Career
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Content -->
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto">
                
                <!-- No Results Message -->
                <div id="no-results" class="text-center py-12 hidden">
                    <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
                    <h3 class="text-2xl font-bold text-gray-600 mb-2">No FAQs Found</h3>
                    <p class="text-gray-500 mb-6">Try adjusting your search or browse by category</p>
                    <button onclick="clearSearch()" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Clear Search
                    </button>
                </div>

                <!-- FAQ Categories -->
                <?php 
                $faq_categories = titan_get_faq_categories();
                foreach ($faq_categories as $category_data): 
                ?>
                <div class="faq-category mb-12" data-category="<?php echo esc_attr($category_data['category']); ?>">
                    <div class="flex items-center mb-8">
                        <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-4">
                            <i class="<?php echo esc_attr($category_data['icon']); ?> text-white text-xl"></i>
                        </div>
                        <h2 class="text-3xl font-bold text-gray-900"><?php echo esc_html($category_data['category']); ?></h2>
                    </div>

                    <div class="space-y-4">
                        <?php foreach ($category_data['faqs'] as $index => $faq): ?>
                        <div class="faq-item bg-white rounded-xl shadow-lg overflow-hidden" 
                             data-keywords="<?php echo esc_attr($faq['keywords']); ?>">
                            <button class="faq-question w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                                    onclick="toggleFAQ(this)">
                                <span class="text-lg font-semibold text-gray-900 pr-4"><?php echo esc_html($faq['question']); ?></span>
                                <div class="faq-icon flex-shrink-0">
                                    <i class="fas fa-plus text-purple-600 text-xl"></i>
                                </div>
                            </button>
                            <div class="faq-answer hidden px-6 pb-6">
                                <div class="border-t border-gray-200 pt-6">
                                    <p class="text-gray-700 leading-relaxed text-base"><?php echo esc_html($faq['answer']); ?></p>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php endforeach; ?>

                <!-- Contact CTA -->
                <div class="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white text-center">
                    <h3 class="text-2xl font-bold mb-4">Still Have Questions?</h3>
                    <p class="text-purple-100 mb-6 text-lg">
                        Our admissions team is here to help! Get personalized answers to your questions.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+1-555-TITAN-CDL" class="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center">
                            <i class="fas fa-phone mr-2"></i>
                            Call (555) TITAN-CDL
                        </a>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-800 transition-all duration-300 inline-flex items-center justify-center">
                            <i class="fas fa-envelope mr-2"></i>
                            Start Application
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Resources -->
    <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">Quick Resources</h2>
                    <p class="text-xl text-gray-600">
                        Find additional information and helpful resources
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-book text-2xl text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">CDL Manual</h3>
                        <p class="text-gray-600 mb-4">Download the official Minnesota CDL manual to start studying</p>
                        <a href="#" class="text-blue-600 hover:text-blue-700 font-semibold">
                            Download PDF <i class="fas fa-download ml-1"></i>
                        </a>
                    </div>

                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-calculator text-2xl text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Cost Calculator</h3>
                        <p class="text-gray-600 mb-4">Estimate your total training costs and financing options</p>
                        <a href="#" class="text-green-600 hover:text-green-700 font-semibold">
                            Calculate Costs <i class="fas fa-arrow-right ml-1"></i>
                        </a>
                    </div>

                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                        <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-calendar text-2xl text-white"></i>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">Class Schedule</h3>
                        <p class="text-gray-600 mb-4">View upcoming class start dates and availability</p>
                        <a href="#" class="text-purple-600 hover:text-purple-700 font-semibold">
                            View Schedule <i class="fas fa-calendar-alt ml-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
.faq-category-btn {
    padding: 12px 24px;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    background: white;
    color: #6b7280;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
}

.faq-category-btn:hover {
    border-color: #8b5cf6;
    color: #8b5cf6;
    background: #f3f4f6;
}

.faq-category-btn.active {
    border-color: #8b5cf6;
    background: #8b5cf6;
    color: white;
}

.faq-item.hidden {
    display: none;
}

.faq-answer.show {
    display: block;
}

.faq-icon i.fa-plus {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
}

.faq-icon i.fa-minus {
    transform: rotate(180deg);
}

.search-highlight {
    background-color: #fef3c7;
    padding: 2px 4px;
    border-radius: 4px;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('faq-search');
    const categoryBtns = document.querySelectorAll('.faq-category-btn');
    const faqCategories = document.querySelectorAll('.faq-category');
    const noResults = document.getElementById('no-results');
    let currentCategory = 'all';

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        filterFAQs(searchTerm, currentCategory);
    });

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update current category
            currentCategory = this.dataset.category;
            
            // Filter FAQs
            const searchTerm = searchInput.value.toLowerCase().trim();
            filterFAQs(searchTerm, currentCategory);
        });
    });

    function filterFAQs(searchTerm, category) {
        let hasResults = false;

        faqCategories.forEach(categoryDiv => {
            const categoryName = categoryDiv.dataset.category;
            const faqItems = categoryDiv.querySelectorAll('.faq-item');
            let categoryHasResults = false;

            // Show/hide category based on filter
            if (category === 'all' || category === categoryName) {
                faqItems.forEach(item => {
                    const keywords = item.dataset.keywords.toLowerCase();
                    const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                    const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
                    
                    const matchesSearch = searchTerm === '' || 
                                        keywords.includes(searchTerm) || 
                                        question.includes(searchTerm) || 
                                        answer.includes(searchTerm);

                    if (matchesSearch) {
                        item.style.display = 'block';
                        categoryHasResults = true;
                        hasResults = true;
                        
                        // Highlight search terms
                        if (searchTerm) {
                            highlightSearchTerm(item, searchTerm);
                        } else {
                            removeHighlight(item);
                        }
                    } else {
                        item.style.display = 'none';
                    }
                });

                categoryDiv.style.display = categoryHasResults ? 'block' : 'none';
            } else {
                categoryDiv.style.display = 'none';
            }
        });

        // Show/hide no results message
        noResults.style.display = hasResults ? 'none' : 'block';
    }

    function highlightSearchTerm(item, searchTerm) {
        const questionSpan = item.querySelector('.faq-question span');
        const answerP = item.querySelector('.faq-answer p');
        
        [questionSpan, answerP].forEach(element => {
            const originalText = element.dataset.original || element.textContent;
            element.dataset.original = originalText;
            
            const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, 'gi');
            element.innerHTML = originalText.replace(regex, '<span class="search-highlight">$1</span>');
        });
    }

    function removeHighlight(item) {
        const questionSpan = item.querySelector('.faq-question span');
        const answerP = item.querySelector('.faq-answer p');
        
        [questionSpan, answerP].forEach(element => {
            if (element.dataset.original) {
                element.textContent = element.dataset.original;
            }
        });
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
});

function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const icon = button.querySelector('.faq-icon i');
    
    // Close other open FAQs in the same category (optional - remove to allow multiple open)
    const category = faqItem.closest('.faq-category');
    category.querySelectorAll('.faq-answer.show').forEach(openAnswer => {
        if (openAnswer !== answer) {
            openAnswer.classList.remove('show');
            const otherIcon = openAnswer.closest('.faq-item').querySelector('.faq-icon i');
            otherIcon.className = 'fas fa-plus text-purple-600 text-xl';
        }
    });
    
    // Toggle current FAQ
    answer.classList.toggle('show');
    
    if (answer.classList.contains('show')) {
        icon.className = 'fas fa-minus text-purple-600 text-xl';
    } else {
        icon.className = 'fas fa-plus text-purple-600 text-xl';
    }
}

function clearSearch() {
    document.getElementById('faq-search').value = '';
    document.querySelector('.faq-category-btn[data-category="all"]').click();
}
</script>

<?php get_footer(); ?>