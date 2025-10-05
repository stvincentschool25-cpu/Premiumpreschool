// form.js - Form handling functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeTourForm();
});

function initializeTourForm() {
    const tourForm = document.getElementById('tour-form');
    const successMessage = document.getElementById('form-success-message');
    
    if (tourForm) {
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
                }
                tourForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            alert('Sorry, there was an error sending your message. Please try again.');
        })
        .finally(() => {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    }
}
