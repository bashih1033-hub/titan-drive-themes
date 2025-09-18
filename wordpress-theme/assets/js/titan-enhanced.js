/**
 * Titan Trucking School - Enhanced JavaScript Interactions
 * 
 * @package TitanTrucking
 * @since 1.0.0
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // =====================================================
    // SMOOTH SCROLLING & NAVIGATION
    // =====================================================
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =====================================================
    // MOBILE MENU TOGGLE
    // =====================================================
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }

    // =====================================================
    // SUCCESS STORIES CAROUSEL
    // =====================================================
    
    function initSuccessStoriesCarousel() {
        const carousel = document.querySelector('.success-stories-carousel');
        if (!carousel) return;
        
        const slides = carousel.querySelectorAll('.story-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        const indicators = carousel.querySelector('.carousel-indicators');
        
        let currentSlide = 0;
        const totalSlides = slides.length;
        
        // Create indicators if they don't exist
        if (indicators && indicators.children.length === 0) {
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement('button');
                indicator.classList.add('carousel-indicator');
                if (i === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToSlide(i));
                indicators.appendChild(indicator);
            }
        }
        
        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.style.display = index === currentSlide ? 'block' : 'none';
            });
            
            // Update indicators
            const indicatorBtns = indicators?.querySelectorAll('.carousel-indicator');
            if (indicatorBtns) {
                indicatorBtns.forEach((btn, index) => {
                    btn.classList.toggle('active', index === currentSlide);
                });
            }
        }
        
        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        
        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        // Auto-play
        setInterval(nextSlide, 8000);
        
        // Initialize
        updateCarousel();
    }

    // =====================================================
    // ENROLLMENT JOURNEY INTERACTIONS
    // =====================================================
    
    function initEnrollmentJourney() {
        const steps = document.querySelectorAll('.enrollment-step');
        
        steps.forEach((step, index) => {
            step.addEventListener('click', function() {
                // Remove active from all steps
                steps.forEach(s => s.classList.remove('active', 'completed'));
                
                // Add completed to previous steps
                for (let i = 0; i < index; i++) {
                    steps[i].classList.add('completed');
                }
                
                // Add active to current step
                this.classList.add('active');
                
                // Show step details
                const stepDetails = document.querySelector(`.step-details[data-step="${index + 1}"]`);
                if (stepDetails) {
                    document.querySelectorAll('.step-details').forEach(detail => {
                        detail.style.display = 'none';
                    });
                    stepDetails.style.display = 'block';
                    stepDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
    }

    // =====================================================
    // PROGRAM FILTERS & SEARCH
    // =====================================================
    
    function initProgramFilters() {
        const filterBtns = document.querySelectorAll('.program-filter-btn');
        const programs = document.querySelectorAll('.program-card');
        const searchInput = document.querySelector('#program-search');
        
        // Filter functionality
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Filter programs
                programs.forEach(program => {
                    const category = program.dataset.category || 'all';
                    const show = filter === 'all' || category === filter;
                    program.style.display = show ? 'block' : 'none';
                });
            });
        });
        
        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                programs.forEach(program => {
                    const title = program.querySelector('.program-title')?.textContent.toLowerCase() || '';
                    const description = program.querySelector('.program-description')?.textContent.toLowerCase() || '';
                    const matches = title.includes(searchTerm) || description.includes(searchTerm);
                    
                    program.style.display = matches ? 'block' : 'none';
                });
            });
        }
    }

    // =====================================================
    // SCROLL ANIMATIONS
    // =====================================================
    
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements with animation classes
        document.querySelectorAll('.fade-in, .slide-up, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
    }

    // =====================================================
    // COUNTERS ANIMATION
    // =====================================================
    
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    animateCounter(entry.target);
                    entry.target.dataset.counted = 'true';
                }
            });
        }, observerOptions);
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
        
        function animateCounter(element) {
            const target = parseInt(element.dataset.count || element.textContent);
            const duration = 2000;
            const start = performance.now();
            
            function updateCounter(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                
                const current = Math.floor(easedProgress * target);
                element.textContent = current.toLocaleString();
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString();
                }
            }
            
            requestAnimationFrame(updateCounter);
        }
    }

    // =====================================================
    // PARALLAX EFFECTS
    // =====================================================
    
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        if (parallaxElements.length === 0) return;
        
        function updateParallax() {
            const scrollTop = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrollTop * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        }
        
        // Throttled scroll listener
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // =====================================================
    // MODAL FUNCTIONALITY
    // =====================================================
    
    function initModals() {
        const modalTriggers = document.querySelectorAll('[data-modal]');
        const modals = document.querySelectorAll('.modal');
        const closeButtons = document.querySelectorAll('.modal-close');
        
        // Open modal
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = this.dataset.modal;
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.classList.add('modal-open');
                }
            });
        });
        
        // Close modal
        closeButtons.forEach(btn => {
            btn.addEventListener('click', closeModal);
        });
        
        // Close on backdrop click
        modals.forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });
        });
        
        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
        
        function closeModal() {
            modals.forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.classList.remove('modal-open');
        }
    }

    // =====================================================
    // FORM ENHANCEMENTS
    // =====================================================
    
    function initFormEnhancements() {
        // Auto-format phone numbers
        const phoneInputs = document.querySelectorAll('input[type="tel"]');
        phoneInputs.forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                let formattedValue = '';
                
                if (value.length >= 1) formattedValue += '(' + value.substr(0, 3);
                if (value.length >= 4) formattedValue += ') ' + value.substr(3, 3);
                if (value.length >= 7) formattedValue += '-' + value.substr(6, 4);
                
                e.target.value = formattedValue;
            });
        });
        
        // Real-time validation
        const requiredInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
        requiredInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
        
        function validateField(field) {
            const isValid = field.checkValidity();
            field.classList.toggle('error', !isValid);
            
            // Show/hide error message
            let errorMsg = field.nextElementSibling;
            if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message text-red-500 text-sm mt-1';
                field.parentNode.appendChild(errorMsg);
            }
            
            if (!isValid) {
                errorMsg.textContent = field.validationMessage;
                errorMsg.style.display = 'block';
            } else {
                errorMsg.style.display = 'none';
            }
        }
    }

    // =====================================================
    // LAZY LOADING FOR IMAGES
    // =====================================================
    
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }

    // =====================================================
    // INITIALIZE ALL FEATURES
    // =====================================================
    
    // Initialize features
    initSuccessStoriesCarousel();
    initEnrollmentJourney();
    initProgramFilters();
    initScrollAnimations();
    initCounters();
    initParallax();
    initModals();
    initFormEnhancements();
    initLazyLoading();

    // =====================================================
    // UTILITY FUNCTIONS
    // =====================================================
    
    // Throttle function for performance
    window.throttle = function(func, delay) {
        let timeoutId;
        let lastExecTime = 0;
        return function(...args) {
            const currentTime = Date.now();
            
            if (currentTime - lastExecTime > delay) {
                func.apply(this, args);
                lastExecTime = currentTime;
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func.apply(this, args);
                    lastExecTime = Date.now();
                }, delay - (currentTime - lastExecTime));
            }
        };
    };

    // Debounce function for performance
    window.debounce = function(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    // Show success/error notifications
    window.showNotification = function(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type} fixed top-4 right-4 bg-${type === 'success' ? 'green' : 'red'}-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 transform translate-x-full opacity-0 transition-all duration-300`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'} mr-3"></i>
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full', 'opacity-0');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.add('translate-x-full', 'opacity-0');
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    };

    console.log('🚛 Titan Trucking School - Enhanced features loaded successfully!');
});

// =====================================================
// SERVICE WORKER FOR OFFLINE FUNCTIONALITY (PWA-ready)
// =====================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}