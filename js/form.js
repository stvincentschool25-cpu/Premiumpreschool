// form.js - Form handling functionality with Formspree

document.addEventListener('DOMContentLoaded', function() {
    initializeTourForm();
    initializeContactForms();
});

function initializeTourForm() {
    const tourForm = document.getElementById('tour-form');
    const successMessage = document.getElementById('form-success-message');
    
    if (tourForm) {
        // Add Formspree action URL
        tourForm.action = 'https://formspree.io/f/mqayldea';
        tourForm.method = 'POST';
        
        tourForm.addEventListener('submit', handleFormSubmit);
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        
        const submitBtn = tourForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Hide previous messages
        if (successMessage) {
            successMessage.classList.add('hidden');
        }
        
        // Get form data
        const formData = new FormData(tourForm);
        
        // Add hidden fields for better Formspree tracking
        formData.append('_subject', 'New Tour Booking Request - The Learning Curve');
        formData.append('_replyto', formData.get('email') || '');
        
        // Send form data to Formspree
        fetch(tourForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success
                if (successMessage) {
                    successMessage.classList.remove('hidden');
                    successMessage.textContent = 'Thank you! We will get in touch with you shortly to schedule your tour.';
                }
                tourForm.reset();
            } else {
                return response.json().then(err => {
                    throw new Error(err.error || 'Form submission failed');
                });
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            if (successMessage) {
                successMessage.textContent = 'Sorry, there was an error sending your message. Please try again or call us directly.';
                successMessage.classList.remove('hidden');
                successMessage.classList.add('error-message');
            }
        })
        .finally(() => {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    }
}

function initializeContactForms() {
    // Initialize any additional contact forms
    const contactForms = document.querySelectorAll('form[data-formspree]');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            const successMessage = this.querySelector('.success-message') || document.getElementById('form-success-message');
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            const formData = new FormData(this);
            
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    if (successMessage) {
                        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                        successMessage.classList.remove('hidden');
                    }
                    this.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Form submission error:', error);
                if (successMessage) {
                    successMessage.textContent = 'Sorry, there was an error. Please try again or contact us directly.';
                    successMessage.classList.remove('hidden');
                    successMessage.classList.add('error-message');
                }
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            });
        });
    });
}
