// main.js - Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('The Learning Curve website initialized successfully');
    
    // Initialize any additional functionality here
    initializeApp();
});

function initializeApp() {
    // Add any additional initialization code here
    console.log('App initialized');
    
    // Example: Add smooth scrolling for anchor links
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
}
