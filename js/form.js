// forms.js - Form handling functionality

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Hide previous messages
        hideMessages();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Send form data to Formspree
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success
                showSuccess();
                contactForm.reset();
            } else {
                // Error from Formspree
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            // Network error or other issues
            console.error('Form submission error:', error);
            showError();
        })
        .finally(() => {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
    }
    
    function showSuccess() {
        successMessage.style.display = 'block';
        setTimeout(hideMessages, 5000); // Hide after 5 seconds
    }
    
    function showError() {
        errorMessage.style.display = 'block';
        setTimeout(hideMessages, 5000); // Hide after 5 seconds
    }
    
    function hideMessages() {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    }
});
