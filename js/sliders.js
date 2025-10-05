// Testimonials Slider Functionality
function initTestimonials() {
    const testimonials = [
        { 
            name: "Shravani K.", 
            text: "The best preschool in our area. The teachers are very caring and the curriculum is excellent. My son enjoys going to school every day." 
        },
        { 
            name: "Praveen G.", 
            text: "A perfect school for early learning. They have a good play area and the management is very responsive. Highly recommend it." 
        },
        { 
            name: "Divya S.", 
            text: "Amazing school. The staff is professional and the environment is very clean and hygienic which was very important for me." 
        },
        { 
            name: "Anusha Reddy", 
            text: "Great daycare facilities. They take good care of the kids with structured activities even after school hours. It's a huge relief for working parents." 
        },
        { 
            name: "Vikram Singh", 
            text: "The play-based learning approach is fantastic. My child has learned so much without even realizing it's 'study'. The progress has been phenomenal." 
        }
    ];

    const slider = document.getElementById('testimonial-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!slider || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    let autoPlayInterval;

    function renderTestimonials() {
        slider.innerHTML = testimonials.map((testimonial, index) => `
            <div class="testimonial-slide p-4 sm:p-8 flex-shrink-0 ${index === currentIndex ? 'active' : ''}">
                <div class="bg-gray-100 p-6 sm:p-8 rounded-xl shadow-sm text-center">
                    <div class="flex text-yellow-400 mb-4 justify-center">
                        ${Array(5).fill('<i data-lucide="star" class="w-5 h-5 fill-current"></i>').join('')}
                    </div>
                    <p class="text-gray-600 italic testimonial-text">"${testimonial.text}"</p>
                    <p class="font-bold text-gray-800 mt-4">- ${testimonial.name}</p>
                </div>
            </div>
        `).join('');
        
        // Update slider position
        updateSlider();
        
        // Recreate icons
        lucide.createIcons();
    }

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active states
        document.querySelectorAll('.testimonial-slide').forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(showNext, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        stopAutoPlay();
        showNext();
        startAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoPlay();
        showPrev();
        startAutoPlay();
    });

    // Pause autoplay on hover
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);

    // Initialize
    renderTestimonials();
    startAutoPlay();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTestimonials();
});
