// main.js - Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('The Learning Curve website initialized successfully');
    
    // Initialize all functionality
    initializeNavigation();
    initializeAnimations();
    initializeApp();
});

function initializeNavigation() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        });
    });
}

function initializeAnimations() {
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .course-card, .testimonial-card').forEach(card => {
        observer.observe(card);
    });
}

function initializeApp() {
    // Add any additional initialization code here
    console.log('App initialized');
    
    // Add loaded class to body for transition effects
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}
