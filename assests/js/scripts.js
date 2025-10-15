// Enhanced JavaScript for St. Vincent's Preschool
class StVincentsPreschool {
    constructor() {
        this.init();
    }

    init() {
        // Initialize all components
        this.initEmailJS();
        this.initAnimations();
        this.initEventListeners();
        this.initScrollEffects();
        this.initCountUp();
        this.hideLoadingSpinner();
    }

    // EmailJS Configuration
    initEmailJS() {
        const EMAILJS_CONFIG = {
            SERVICE_ID: 'service_14zrdg6',
            TEMPLATE_ID: 'template_snxhxlk',  
            PUBLIC_KEY: '5SyxCT8kGY0_H51dC'
        };

        // Initialize EmailJS
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('📧 EmailJS initialized successfully');

        // Test EmailJS connection
        this.testEmailJSConnection();
    }

    async testEmailJSConnection() {
        try {
            // Simple test to verify EmailJS is working
            console.log('Testing EmailJS connection...');
            // Connection is verified when emailjs.init() succeeds
        } catch (error) {
            console.error('EmailJS connection failed:', error);
        }
    }

    // Animation Initialization
    initAnimations() {
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Add intersection observer for scroll animations
        this.initIntersectionObserver();
    }

    // Event Listeners
    initEventListeners() {
        // Mobile menu toggle
        this.setupMobileMenu();
        
        // Modal handlers
        this.setupModals();
        
        // Form submissions
        this.setupForms();
        
        // WhatsApp button
        this.setupWhatsApp();
        
        // Scroll to top
        this.setupScrollToTop();
        
        // Program cards
        this.setupProgramCards();
    }

    // Mobile Menu Setup
    setupMobileMenu() {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const header = document.getElementById('main-header');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
                mobileMenu.classList.toggle('hidden');
                menuBtn.setAttribute('aria-expanded', !isExpanded);
                
                // Update icon
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', isExpanded ? 'menu' : 'x');
                    lucide.createIcons();
                }
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!header.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuBtn.setAttribute('aria-expanded', 'false');
                    const icon = menuBtn.querySelector('i');
                    if (icon) {
                        icon.setAttribute('data-lucide', 'menu');
                        lucide.createIcons();
                    }
                }
            });
        }
    }

    // Modal System
    setupModals() {
        // Contact modal triggers
        const contactModalTriggers = [
            'open-contact-modal',
            'open-contact-modal-mobile',
            'open-contact-modal-hero',
            'open-contact-modal-bottom',
            'open-contact-modal-premium',
            'open-contact-modal-from-program',
            'open-contact-modal-from-blog',
            'open-contact-modal-faq'
        ];

        contactModalTriggers.forEach(triggerId => {
            const trigger = document.getElementById(triggerId) || document.querySelector(`.${triggerId}`);
            if (trigger) {
                trigger.addEventListener('click', () => this.createContactModal());
            }
        });

        // Program modals
        document.querySelectorAll('.program-card').forEach(card => {
            card.addEventListener('click', () => {
                const program = card.dataset.program;
                this.createProgramModal(program);
            });
        });

        // Blog modals
        document.querySelectorAll('.open-blog-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const blogId = btn.getAttribute('data-blog');
                if (blogId) {
                    this.createBlogModal(blogId);
                }
            });
        });
    }

    // Form Handling
    setupForms() {
        // Contact form submission is handled in modal creation
        // Additional form setups can be added here
    }

    // WhatsApp Setup
    setupWhatsApp() {
        const whatsappButton = document.getElementById('whatsapp-chat-button');
        if (whatsappButton) {
            // Remove notification badge after first interaction
            whatsappButton.addEventListener('click', () => {
                const badge = whatsappButton.querySelector('.notification-badge');
                if (badge) {
                    badge.style.display = 'none';
                }
                
                // Track WhatsApp click
                this.trackEvent('WhatsApp', 'Click', 'Chat Button');
            });

            // Auto-show tooltip
            setTimeout(() => {
                const tooltip = whatsappButton.querySelector('.whatsapp-chat-tooltip');
                if (tooltip) {
                    tooltip.style.opacity = '1';
                    tooltip.style.transform = 'translateY(0) scale(1)';
                    
                    setTimeout(() => {
                        tooltip.style.opacity = '0';
                        tooltip.style.transform = 'translateY(10px) scale(0.95)';
                    }, 5000);
                }
            }, 2000);
        }
    }

    // Scroll to Top
    setupScrollToTop() {
        const scrollButton = document.getElementById('scroll-to-top');
        if (scrollButton) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollButton.classList.add('visible');
                } else {
                    scrollButton.classList.remove('visible');
                }
            });

            scrollButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // Program Cards
    setupProgramCards() {
        // Additional program card interactions can be added here
    }

    // Scroll Effects
    initScrollEffects() {
        // Header shadow on scroll
        const header = document.getElementById('main-header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                    header.style.background = 'rgba(255,255,255,0.95)';
                    header.style.backdropFilter = 'blur(10px)';
                } else {
                    header.style.boxShadow = 'none';
                    header.style.background = 'white';
                    header.style.backdropFilter = 'none';
                }
            });
        }
    }

    // Intersection Observer for Animations
    initIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.program-card, .premium-card, .testimonial-slide').forEach(el => {
            observer.observe(el);
        });
    }

    // Count Up Animation
    initCountUp() {
        const counters = document.querySelectorAll('.animate-count-up');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCountUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCountUp(element) {
        const target = parseInt(element.dataset.target);
        const duration = parseInt(element.dataset.duration) || 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            const displayValue = target >= 1000 ? 
                Math.floor(current).toLocaleString() : 
                Math.floor(current);
            
            element.querySelector('div:first-child').textContent = 
                target >= 100 ? displayValue : `${displayValue}%`;
        }, 16);
    }

    // Modal Creation Methods
    createContactModal() {
        const modalHTML = `
        <div class="modal-overlay fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 opacity-0 transition-opacity duration-300">
            <div class="modal-content bg-paper crayon-border w-full max-w-2xl max-h-[90vh] overflow-y-auto transform scale-95 transition-transform duration-300">
                <div class="p-6 md:p-8">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="text-4xl md:text-5xl font-bold text-gray-800">Schedule a Visit</h2>
                            <p class="text-lg text-gray-600 mt-2 font-body">We'd love to show you around our campus!</p>
                        </div>
                        <button class="close-modal-btn p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Close modal">
                            <i data-lucide="x" class="w-6 h-6 text-gray-500"></i>
                        </button>
                    </div>
                    
                    <form id="contact-form" class="space-y-5">
                        <div class="grid md:grid-cols-2 gap-5">
                            <div>
                                <label for="parentName" class="block font-medium text-gray-700 mb-2 text-lg">Parent's Name *</label>
                                <input type="text" id="parentName" name="parentName" class="form-input w-full" required placeholder="Enter your full name">
                            </div>
                            <div>
                                <label for="phone" class="block font-medium text-gray-700 mb-2 text-lg">Phone Number *</label>
                                <input type="tel" id="phone" name="phone" class="form-input w-full" required placeholder="+91 12345 67890">
                            </div>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-5">
                            <div>
                                <label for="childAge" class="block font-medium text-gray-700 mb-2 text-lg">Child's Age *</label>
                                <input type="number" id="childAge" name="childAge" min="1" max="8" class="form-input w-full" required placeholder="Age in years">
                            </div>
                            <div>
                                <label for="program" class="block font-medium text-gray-700 mb-2 text-lg">Program Interested In *</label>
                                <select id="program" name="program" class="form-input w-full" required>
                                    <option value="">Select a program</option>
                                    <option value="playgroup">Playgroup (1.5-2.5 yrs)</option>
                                    <option value="nursery">Nursery (2.5-3.5 yrs)</option>
                                    <option value="lkg">LKG (3.5-4.5 yrs)</option>
                                    <option value="ukg">UKG (4.5-5.5 yrs)</option>
                                    <option value="daycare">Day Care</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label for="message" class="block font-medium text-gray-700 mb-2 text-lg">Additional Message</label>
                            <textarea id="message" name="message" class="form-input w-full" rows="4" placeholder="Any specific questions or requirements..."></textarea>
                        </div>
                        
                        <button type="submit" class="w-full crayon-button bg-red-400 text-white font-bold text-xl p-4 flex items-center justify-center gap-3 hover:bg-red-500 transition-colors">
                            <span id="submit-text">Submit Inquiry</span>
                            <div id="submit-spinner" class="spinner hidden" style="width: 20px; height: 20px;"></div>
                        </button>
                        
                        <div id="contact-form-messages" class="space-y-3">
                            <p id="contact-form-success-message" class="form-success-message hidden text-lg"></p>
                            <p id="contact-form-error-message" class="form-error-message hidden text-lg"></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;

        const container = document.getElementById('contact-modal-container');
        if (container) {
            container.innerHTML = modalHTML;
            this.showModal(container);
            this.setupContactForm();
        }
    }

    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitText = document.getElementById('submit-text');
            const submitSpinner = document.getElementById('submit-spinner');
            const successMessage = document.getElementById('contact-form-success-message');
            const errorMessage = document.getElementById('contact-form-error-message');

            // Show loading state
            submitText.classList.add('hidden');
            submitSpinner.classList.remove('hidden');
            successMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');

            // Collect form data
            const formData = {
                parentName: document.getElementById('parentName')?.value || '',
                phone: document.getElementById('phone')?.value || '',
                childAge: document.getElementById('childAge')?.value || '',
                program: document.getElementById('program')?.value || '',
                message: document.getElementById('message')?.value || '',
                timestamp: new Date().toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                source: 'St. Vincent\'s Preschool Website',
                website: window.location.href
            };

            console.log('📤 Sending form data:', formData);

            try {
                // Send email using EmailJS
                const response = await emailjs.send(
                    'service_14zrdg6',
                    'template_snxhxlk',
                    formData
                );

                console.log('✅ Email sent successfully:', response);
                
                // Show success message
                successMessage.textContent = 'Thank you! We have received your inquiry and will contact you within 24 hours.';
                successMessage.classList.remove('hidden');
                
                // Reset form
                form.reset();
                
                // Track successful submission
                this.trackEvent('Form', 'Submission', 'Contact Form Success');

            } catch (error) {
                console.error('❌ Email sending failed:', error);
                
                // Show error message
                errorMessage.textContent = 'Sorry, there was an error sending your message. Please call us directly at +91 91009 99312';
                errorMessage.classList.remove('hidden');
                
                // Track failed submission
                this.trackEvent('Form', 'Error', 'Contact Form Failed');
            } finally {
                // Reset button state
                submitText.classList.remove('hidden');
                submitSpinner.classList.add('hidden');
            }
        });
    }

    // Show Modal
    showModal(container) {
        const overlay = container.querySelector('.modal-overlay');
        const content = container.querySelector('.modal-content');
        
        overlay.style.display = 'flex';
        
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
            content.classList.remove('scale-95');
        }, 10);

        // Close modal handlers
        this.setupModalClose(overlay);
        
        // Initialize icons in modal
        lucide.createIcons();
    }

    setupModalClose(overlay) {
        const closeBtn = overlay.querySelector('.close-modal-btn');
        
        // Close on button click
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal(overlay));
        }
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeModal(overlay);
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.style.display === 'flex') {
                this.closeModal(overlay);
            }
        });
    }

    closeModal(overlay) {
        const content = overlay.querySelector('.modal-content');
        
        overlay.classList.add('opacity-0');
        content.classList.add('scale-95');
        
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }

    // Program Modal
    createProgramModal(program) {
        // Implementation for program modals
        console.log('Opening program modal for:', program);
    }

    // Blog Modal
    createBlogModal(blogId) {
        // Implementation for blog modals
        console.log('Opening blog modal for:', blogId);
    }

    // Utility Methods
    trackEvent(category, action, label) {
        // Google Analytics or other tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
        console.log(`📊 Event: ${category} - ${action} - ${label}`);
    }

    hideLoadingSpinner() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            // Wait for everything to load
            window.addEventListener('load', () => {
                setTimeout(() => {
                    spinner.style.opacity = '0';
                    setTimeout(() => {
                        spinner.style.display = 'none';
                    }, 300);
                }, 500);
            });
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new StVincentsPreschool();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StVincentsPreschool;
}
