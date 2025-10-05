// Form submission handler
class FormHandler {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupFormSubmission();
    }
    
    setupFormSubmission() {
        document.addEventListener('submit', (e) => {
            if (e.target.id === 'contact-form') {
                e.preventDefault();
                this.handleContactForm(e.target);
            }
        });
    }
    
    async handleContactForm(form) {
        const submitText = form.querySelector('#submit-text');
        const submitSpinner = form.querySelector('#submit-spinner');
        const successMessage = form.querySelector('#contact-form-success-message');
        const errorMessage = form.querySelector('#contact-form-error-message');
        
        // Show loading state
        submitText.classList.add('hidden');
        submitSpinner.classList.remove('hidden');
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');
        
        // Collect form data
        const formData = {
            parentName: form.querySelector('#parentName').value,
            phone: form.querySelector('#phone').value,
            childAge: form.querySelector('#childAge').value,
            program: form.querySelector('#program').value,
            message: form.querySelector('#message').value,
            timestamp: new Date().toISOString(),
            source: 'Website Form'
        };
        
        try {
            await this.submitToGoogleSheets(formData);
            
            // Show success message
            successMessage.classList.remove('hidden');
            form.reset();
            
            // Reset button state
            submitText.classList.remove('hidden');
            submitSpinner.classList.add('hidden');
            
            // Close modal and show review modal after delay
            setTimeout(() => {
                const overlay = form.closest('.modal-overlay');
                if (overlay && window.modalManager) {
                    window.modalManager.closeModal(overlay);
                }
                
                // Show review modal (you can implement this)
                // this.showReviewModal();
            }, 2000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            errorMessage.classList.remove('hidden');
            
            // Reset button state
            submitText.classList.remove('hidden');
            submitSpinner.classList.add('hidden');
        }
    }
    
    async submitToGoogleSheets(formData) {
        const response = await fetch(window.appConfig.GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return await response.json();
    }
}

// Initialize form handler when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FormHandler();
});
