// sliders.js - Slider functionality

const testimonials = [
    { 
        name: "Shravani K.", 
        text: "The best preschool in our area. The teachers are very caring and the curriculum is excellent. My son enjoys going to school every day." 
    },
    { 
        name: "Praveen G.", 
        text: "A perfect school for early learning. They have a good play area and the management is very responsive. Highly recommend it." 
    }
    // Add more testimonials...
];

let currentTestimonialIndex = 0;

function initializeTestimonialSlider() {
    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!slider) return;
    
    function renderTestimonials() {
        slider.innerHTML = testimonials.map((testimonial, index) => `
            <div class="testimonial-slide ${index === currentTestimonialIndex ? 'active' : ''}">
                <div class="testimonial-content">
                    <div class="stars">
                        ${'<i data-lucide="star" class="fill-current"></i>'.repeat(5)}
                    </div>
                    <p>"${testimonial.text}"</p>
                    <p class="author">- ${testimonial.name}</p>
                </div>
            </div>
        `).join('');
        lucide.createIcons();
    }
    
    function showSlide(index) {
        currentTestimonialIndex = index;
        renderTestimonials();
    }
    
    function nextSlide() {
        showSlide((currentTestimonialIndex + 1) % testimonials.length);
    }
    
    function prevSlide() {
        showSlide((currentTestimonialIndex - 1 + testimonials.length) % testimonials.length);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play
    let autoPlay = setInterval(nextSlide, 5000);
    
    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
    slider.addEventListener('mouseleave', () => {
        autoPlay = setInterval(nextSlide, 5000);
    });
    
    // Initial render
    renderTestimonials();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initializeTestimonialSlider);
