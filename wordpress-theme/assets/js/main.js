/**
 * Main JavaScript for Titan Trucking School Theme
 */

jQuery(document).ready(function($) {
    
    // Smooth scrolling for anchor links
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });
    
    // Contact form handling
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        var form = $(this);
        var submitBtn = form.find('button[type="submit"]');
        var originalText = submitBtn.text();
        
        // Disable submit button
        submitBtn.prop('disabled', true).text('Sending...');
        
        // Collect form data
        var formData = {
            action: 'titan_contact_form',
            titan_contact_nonce: $('#titan_contact_nonce').val(),
            contact_name: $('#contact_name').val(),
            contact_email: $('#contact_email').val(),
            contact_phone: $('#contact_phone').val(),
            contact_message: $('#contact_message').val(),
            program_interest: $('#program_interest').val()
        };
        
        // Send AJAX request
        $.post(titan_ajax.ajax_url, formData, function(response) {
            if (response.success) {
                // Show success message
                form.html('<div class="contact-success" style="padding: 2rem; background: hsl(var(--accent)); color: hsl(var(--accent-foreground)); border-radius: 0.5rem; text-align: center;"><h3>Thank You!</h3><p>Your message has been sent successfully. We\'ll contact you within 24 hours to discuss your CDL training options.</p></div>');
                
                // Track conversion (if Google Analytics is loaded)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'contact_form_submission', {
                        'event_category': 'Lead Generation',
                        'event_label': formData.program_interest || 'General Inquiry'
                    });
                }
            } else {
                // Show error message
                form.prepend('<div class="contact-error" style="padding: 1rem; background: hsl(var(--destructive)); color: hsl(var(--destructive-foreground)); border-radius: 0.5rem; margin-bottom: 1rem;">There was an error sending your message. Please try again or call us directly.</div>');
                
                // Re-enable submit button
                submitBtn.prop('disabled', false).text(originalText);
            }
        }).fail(function() {
            // Show error message
            form.prepend('<div class="contact-error" style="padding: 1rem; background: hsl(var(--destructive)); color: hsl(var(--destructive-foreground)); border-radius: 0.5rem; margin-bottom: 1rem;">There was an error sending your message. Please try again or call us directly.</div>');
            
            // Re-enable submit button
            submitBtn.prop('disabled', false).text(originalText);
        });
    });
    
    // Phone number formatting
    $('#contact_phone').on('input', function() {
        var value = this.value.replace(/\D/g, '');
        var formattedValue = '';
        
        if (value.length >= 6) {
            formattedValue = '(' + value.substr(0, 3) + ') ' + value.substr(3, 3) + '-' + value.substr(6, 4);
        } else if (value.length >= 3) {
            formattedValue = '(' + value.substr(0, 3) + ') ' + value.substr(3);
        } else {
            formattedValue = value;
        }
        
        this.value = formattedValue;
    });
    
    // Testimonial carousel (if exists)
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            fade: true
        });
    }
    
    // Program cards hover effects
    $('.program-card').hover(
        function() {
            $(this).css('transform', 'translateY(-5px)');
        },
        function() {
            $(this).css('transform', 'translateY(0)');
        }
    );
    
    // Scroll animations (if Intersection Observer is supported)
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements with animation class
        document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
            observer.observe(el);
        });
    }
    
    // Call tracking for analytics
    $('a[href^="tel:"]').on('click', function() {
        var phoneNumber = $(this).attr('href').replace('tel:', '');
        
        // Track phone calls (if Google Analytics is loaded)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'phone_call', {
                'event_category': 'Lead Generation',
                'event_label': phoneNumber
            });
        }
    });
    
    // Form focus improvements
    $('.form-group input, .form-group textarea, .form-group select').focus(function() {
        $(this).closest('.form-group').addClass('focused');
    }).blur(function() {
        $(this).closest('.form-group').removeClass('focused');
    });
    
});

// Window load events
window.addEventListener('load', function() {
    // Remove loading states
    document.body.classList.add('loaded');
    
    // Initialize any lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
});

// Utility functions
window.TitanTrucking = {
    
    // Show notification
    showNotification: function(message, type) {
        type = type || 'info';
        
        var notification = $('<div class="notification notification-' + type + '" style="position: fixed; top: 20px; right: 20px; padding: 1rem 1.5rem; border-radius: 0.5rem; color: white; z-index: 9999; max-width: 300px;">' + message + '</div>');
        
        // Set background color based on type
        var bgColor = type === 'success' ? 'hsl(var(--accent))' : 
                     type === 'error' ? 'hsl(var(--destructive))' : 
                     'hsl(var(--primary))';
        
        notification.css('background-color', bgColor);
        
        $('body').append(notification);
        
        // Auto remove after 5 seconds
        setTimeout(function() {
            notification.fadeOut(function() {
                notification.remove();
            });
        }, 5000);
        
        // Click to dismiss
        notification.click(function() {
            $(this).fadeOut(function() {
                $(this).remove();
            });
        });
    },
    
    // Format phone number
    formatPhone: function(phoneNumber) {
        var cleaned = phoneNumber.replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phoneNumber;
    }
    
};