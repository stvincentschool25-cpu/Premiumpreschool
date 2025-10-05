// Form submission handler using Formspree
document.addEventListener('DOMContentLoaded', function() {
    initForms();
});

function initForms() {
    const forms = document.querySelectorAll('form[data-form-type="contact"]');
    
    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const submitText = form.querySelector('#submit-text');
            const submitSpinner = form.querySelector('#submit-spinner');
            const successMessage = form.querySelector('#form-success-message');
            const errorMessage = form.querySelector('#form-error-message');
            
            const originalText = submitText ? submitText.textContent : 'Submit';
            
            // Validate form
            if (!validateForm(form)) {
                showFormMessage(form, 'Please fill all required fields correctly.', 'error');
                return;
            }
            
            // Show loading state
            if (submitText) submitText.textContent = 'Sending...';
            if (submitSpinner) submitSpinner.classList.remove('hidden');
            if (successMessage) successMessage.classList.add('hidden');
            if (errorMessage) errorMessage.classList.add('hidden');
            
            submitBtn.disabled = true;
            
            try {
                // Send to Formspree (Replace with your actual Formspree form ID)
                const response = await fetch('https://formspree.io/f/mqayldea', {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Success
                    form.reset();
                    showFormMessage(form, 'Thank you! Your message has been sent successfully. We will get in touch with you shortly.', 'success');
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage(form, 'There was an error submitting your form. Please try again or call us directly.', 'error');
            } finally {
                // Reset button state
                if (submitText) submitText.textContent = originalText;
                if (submitSpinner) submitSpinner.classList.add('hidden');
                submitBtn.disabled = false;
            }
        });
    });
}

function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error-border');
        } else {
            field.classList.remove('error-border');
        }
        
        // Special validation for phone
        if (field.type === 'tel' && field.value.trim()) {
            const phoneRegex = /^[0-9]{10}$/;
            if (!phoneRegex.test(field.value.trim())) {
                isValid = false;
                field.classList.add('error-border');
            }
        }
        
        // Special validation for email
        if (field.type === 'email' && field.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value.trim())) {
                isValid = false;
                field.classList.add('error-border');
            }
        }
    });
    
    return isValid;
}

function showFormMessage(form, message, type) {
    // Remove any existing messages
    const existingMessages = form.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}-message mt-4 p-4 rounded-lg text-center font-semibold`;
    messageDiv.textContent = message;
    
    // Insert after the form or before submit button
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
        form.insertBefore(messageDiv, submitBtn.nextSibling);
    } else {
        form.appendChild(messageDiv);
    }
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}
