// EmailJS Configuration
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_14zrdg6',
    TEMPLATE_ID: 'template_snxhxlk',  
    PUBLIC_KEY: '5SyxCT8kGY0_H51dC'
};

// Initialize EmailJS
(function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('EmailJS initialized with key:', EMAILJS_CONFIG.PUBLIC_KEY);
})();

lucide.createIcons();

// Mobile Menu
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Testimonial Slider with Improved Text Formatting
const testimonials = [
    { 
        name: "Shravani K.", 
        text: "The best preschool in our area! The teachers are incredibly caring and the curriculum is excellent. My son looks forward to school every day and has developed amazing confidence since joining St. Vincent's." 
    }, 
    { 
        name: "Praveen G.", 
        text: "A perfect environment for early learning. They have excellent play areas and the management is very responsive. My daughter's communication skills have improved dramatically in just a few months of joining." 
    }, 
    { 
        name: "Divya S.", 
        text: "Outstanding school with professional staff and clean, hygienic environment. The communication with parents is excellent and they truly care about each child's individual development." 
    },
    { 
        name: "Rajesh M.", 
        text: "My daughter has been attending for the past year and we've seen remarkable improvement in her social skills and overall confidence. The teachers are wonderful and truly dedicated!" 
    },
    { 
        name: "Priya N.", 
        text: "Excellent facilities with very caring staff. My son actually looks forward to going to school every single day. Highly recommended for any parent in the Chanda Nagar area!" 
    }
];

const slider = document.getElementById('testimonial-slider');
let currentIndex = 0;

function renderTestimonials() {
    if (!slider) return;
    slider.innerHTML = testimonials.map(t => `
        <div class="testimonial-slide p-4 flex-shrink-0 w-full">
            <div class="bg-yellow-100 p-8 rounded-xl crayon-border h-full flex flex-col justify-between">
                <div class="flex-grow">
                    <p class="font-body text-gray-600 testimonial-text leading-relaxed text-justify">"${t.text}"</p>
                </div>
                <p class="font-bold text-gray-800 mt-6 text-2xl text-right">- ${t.name}</p>
            </div>
        </div>
    `).join('');
}

function updateSlider() { 
    if (slider) {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`; 
    }
}

function showNext() { 
    currentIndex = (currentIndex + 1) % testimonials.length; 
    updateSlider(); 
}

if (slider) {
    document.getElementById('nextBtn').addEventListener('click', showNext);
    document.getElementById('prevBtn').addEventListener('click', () => { 
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; 
        updateSlider(); 
    });
    
    // Auto-slide every 5 seconds
    setInterval(showNext, 5000);
    renderTestimonials();
    
    // Set fixed height for testimonial slides
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    testimonialSlides.forEach(slide => {
        slide.style.minHeight = '300px';
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const wasOpen = parent.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(openItem => openItem.classList.remove('open'));
        if (!wasOpen) {
            parent.classList.add('open');
        }
    });
});

// FAQ CTA Modal Triggers
document.querySelectorAll('.open-contact-modal-faq').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const faqType = e.target.getAttribute('data-faq');
        createContactModal();
        
        // Pre-fill the form based on FAQ type
        setTimeout(() => {
            const programSelect = document.getElementById('program');
            const messageTextarea = document.getElementById('message');
            
            if (programSelect && messageTextarea) {
                let programValue = '';
                let additionalMessage = '';
                
                switch(faqType) {
                    case 'ideal-age':
                        programValue = 'playgroup';
                        additionalMessage = 'I have questions about the ideal age to start preschool and would like an age assessment.';
                        break;
                    case 'preparation':
                        programValue = '';
                        additionalMessage = 'I need guidance on preparing my child for preschool and would like to book an orientation session.';
                        break;
                    case 'quality-standards':
                        programValue = '';
                        additionalMessage = 'I would like to learn more about your quality standards and schedule a tour.';
                        break;
                    case 'separation-anxiety':
                        programValue = '';
                        additionalMessage = 'I need help with separation anxiety and would like support for my child.';
                        break;
                    case 'play-learning':
                        programValue = '';
                        additionalMessage = 'I am interested in experiencing your play-based learning approach through a trial session.';
                        break;
                }
                
                if (programValue && programSelect.querySelector(`option[value="${programValue}"]`)) {
                    programSelect.value = programValue;
                }
                
                if (additionalMessage) {
                    messageTextarea.value = additionalMessage;
                }
            }
        }, 100);
    });
});

// Enhanced Canvas Logic
const canvas = document.getElementById('drawing-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let currentTool = 'brush';
    let currentColor = 'black';
    let brushSize = 5;
    
    // Set up canvas
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
        ctx.scale(dpr, dpr);
        ctx.lineCap = 'round'; 
        ctx.lineJoin = 'round'; 
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = currentColor;
        ctx.fillStyle = currentColor;
        
        // Draw a subtle grid background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid lines
        ctx.strokeStyle = 'rgba(0,0,0,0.05)';
        ctx.lineWidth = 1;
        const gridSize = 20;
        
        for (let x = 0; x <= canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        
        for (let y = 0; y <= canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        
        // Reset drawing settings
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = currentColor;
        ctx.fillStyle = currentColor;
    }
    
    function getPos(e) {
        const rect = canvas.getBoundingClientRect();
        const evt = e.touches ? e.touches[0] : e;
        return { 
            x: evt.clientX - rect.left, 
            y: evt.clientY - rect.top 
        };
    }
    
    function startDrawing(e) { 
        isDrawing = true; 
        const {x,y} = getPos(e); 
        
        if (currentTool === 'brush') {
            ctx.beginPath(); 
            ctx.moveTo(x,y); 
        } else if (currentTool === 'fill') {
            // Simple flood fill implementation
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const targetColor = getPixelColor(imageData, x, y);
            floodFill(imageData, x, y, targetColor, hexToRgb(currentColor));
            ctx.putImageData(imageData, 0, 0);
        }
    }
    
    function draw(e) { 
        if (!isDrawing || currentTool !== 'brush') return; 
        e.preventDefault(); 
        const {x,y} = getPos(e); 
        ctx.lineTo(x,y); 
        ctx.stroke(); 
    }
    
    function stopDrawing() { 
        isDrawing = false; 
        if (currentTool === 'brush') {
            ctx.closePath(); 
        }
    }
    
    // Flood fill algorithm
    function getPixelColor(imageData, x, y) {
        const index = (y * imageData.width + x) * 4;
        return {
            r: imageData.data[index],
            g: imageData.data[index + 1],
            b: imageData.data[index + 2],
            a: imageData.data[index + 3]
        };
    }
    
    function setPixelColor(imageData, x, y, color) {
        const index = (y * imageData.width + x) * 4;
        imageData.data[index] = color.r;
        imageData.data[index + 1] = color.g;
        imageData.data[index + 2] = color.b;
        imageData.data[index + 3] = color.a || 255;
    }
    
    function colorsMatch(a, b, tolerance = 1) {
        return Math.abs(a.r - b.r) <= tolerance &&
               Math.abs(a.g - b.g) <= tolerance &&
               Math.abs(a.b - b.b) <= tolerance &&
               Math.abs(a.a - (b.a || 255)) <= tolerance;
    }
    
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {r: 0, g: 0, b: 0};
    }
    
    function floodFill(imageData, x, y, targetColor, replacementColor) {
        const stack = [[x, y]];
        const width = imageData.width;
        const height = imageData.height;
        
        while (stack.length > 0) {
            const [currentX, currentY] = stack.pop();
            
            if (currentX < 0 || currentX >= width || currentY < 0 || currentY >= height) {
                continue;
            }
            
            const currentColor = getPixelColor(imageData, currentX, currentY);
            
            if (!colorsMatch(currentColor, targetColor)) {
                continue;
            }
            
            setPixelColor(imageData, currentX, currentY, replacementColor);
            
            stack.push([currentX + 1, currentY]);
            stack.push([currentX - 1, currentY]);
            stack.push([currentX, currentY + 1]);
            stack.push([currentX, currentY - 1]);
        }
    }
    
    // Event listeners for drawing
    ['mousedown', 'touchstart'].forEach(e => canvas.addEventListener(e, startDrawing));
    ['mousemove', 'touchmove'].forEach(e => canvas.addEventListener(e, draw));
    ['mouseup', 'mouseleave', 'touchend'].forEach(e => canvas.addEventListener(e, stopDrawing));
    
    // Color selection
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentColor = e.target.dataset.color;
            document.querySelector('.color-btn.active').classList.remove('active');
            e.target.classList.add('active');
            ctx.strokeStyle = currentColor;
            ctx.fillStyle = currentColor;
            
            // Update brush preview
            document.getElementById('brush-preview').style.backgroundColor = currentColor;
        });
    });
    
    // Tool selection
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentTool = e.currentTarget.dataset.tool;
            document.querySelector('.tool-btn.active').classList.remove('active');
            e.currentTarget.classList.add('active');
            
            if (currentTool === 'eraser') {
                ctx.strokeStyle = 'white';
                ctx.fillStyle = 'white';
            } else {
                ctx.strokeStyle = currentColor;
                ctx.fillStyle = currentColor;
            }
        });
    });
    
    // Brush size control
    const brushSizeControl = document.getElementById('brush-size');
    const brushPreview = document.getElementById('brush-preview');
    
    brushSizeControl.addEventListener('input', (e) => {
        brushSize = parseInt(e.target.value);
        ctx.lineWidth = brushSize;
        
        // Update brush preview size
        const size = Math.max(5, brushSize / 2);
        brushPreview.style.width = `${size}px`;
        brushPreview.style.height = `${size}px`;
    });
    
    // Clear canvas
    document.getElementById('clear-canvas-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the canvas?')) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            resizeCanvas(); // Redraw grid
        }
    });
    
    // Save canvas
    document.getElementById('save-canvas-btn').addEventListener('click', () => {
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'st-vincents-drawing.png';
        link.href = dataURL;
        link.click();
    });
    
    // Random color
    document.getElementById('random-color-btn').addEventListener('click', () => {
        const colors = ['#ef4444', '#3b82f6', '#22c55e', '#facc15', '#a855f7', '#ec4899', '#f97316', '#14b8a6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        currentColor = randomColor;
        
        // Update active color button
        document.querySelector('.color-btn.active').classList.remove('active');
        const colorBtn = document.querySelector(`.color-btn[data-color="${randomColor}"]`);
        if (colorBtn) {
            colorBtn.classList.add('active');
        }
        
        ctx.strokeStyle = currentColor;
        ctx.fillStyle = currentColor;
        
        // Update brush preview
        document.getElementById('brush-preview').style.backgroundColor = currentColor;
    });
    
    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Set initial brush preview
    document.getElementById('brush-preview').style.width = `${brushSize/2}px`;
    document.getElementById('brush-preview').style.height = `${brushSize/2}px`;
}

// Image Slider
const imageSlider = document.getElementById('image-slider');
const sliderDots = document.querySelectorAll('.slider-dot');
let slideIndex = 0;

function updateImageSlider() {
    if (imageSlider) {
        imageSlider.style.transform = `translateX(-${slideIndex * 100}%)`;
        
        // Update active dot
        sliderDots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % sliderDots.length;
    updateImageSlider();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + sliderDots.length) % sliderDots.length;
    updateImageSlider();
}

// Initialize image slider
if (imageSlider) {
    document.getElementById('slider-next').addEventListener('click', nextSlide);
    document.getElementById('slider-prev').addEventListener('click', prevSlide);
    
    // Add click events to dots
    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideIndex = index;
            updateImageSlider();
        });
    });
    
    // Auto-advance slides
    setInterval(nextSlide, 4000);
}

// Modal Logic
const programData = {
    playgroup: { 
        title: "Playgroup", 
        hook: "Where Curiosity Takes Flight!", 
        value: "Our Playgroup is a wonderland of sensory experiences designed to nurture your toddler's budding curiosity.", 
        curriculum: ["Sensory Play", "Gross Motor Skills", "Fine Motor Development", "Music & Movement", "Early Language", "Group Play"], 
        color: "red" 
    },
    nursery: { 
        title: "Nursery", 
        hook: "Building Blocks for a Bright Future!", 
        value: "In Nursery, we build upon natural curiosity by introducing foundational concepts in literacy and numeracy.", 
        curriculum: ["Phonics", "Pre-writing Skills", "Number Recognition", "Physical Development Activities", "Colors & Shapes", "Storytelling"], 
        color: "blue" 
    },
    lkg: { 
        title: "LKG", 
        hook: "Getting Ready for Big School!", 
        value: "Our LKG program focuses on developing foundational academic skills and preparing children for formal schooling.", 
        curriculum: ["Reading & Writing", "Basic Numeracy", "Physical Coordination", "EVS Concepts", "Logical Reasoning", "Creative Expression"], 
        color: "yellow" 
    },
    ukg: { 
        title: "UKG", 
        hook: "Advanced Preparation for Primary School!", 
        value: "Our UKG program ensures children are fully prepared for primary school with comprehensive skill development.", 
        curriculum: ["Advanced Reading & Writing", "Mathematical Concepts", "Physical Development", "Science Exploration", "Problem Solving", "Public Speaking"], 
        color: "green" 
    },
    daycare: { 
        title: "Day Care", 
        hook: "Your Child's Safe Second Home!", 
        value: "We provide a secure, nurturing, and structured environment for children of working parents.", 
        curriculum: ["Homework Assistance", "Hobby Classes", "Structured Play", "Nap Time", "Indoor Activities"], 
        color: "purple" 
    }
};

const blogData = {
    science: {
        title: "The Science of Early Learning",
        subtitle: "How Preschool Shapes Brain Development",
        image: "images/blog/science-learning.jpg",
        content: `
            <p class="mb-4">Early childhood is a critical period for brain development. Research shows that 90% of a child's brain develops by age 5, making the preschool years crucial for establishing the foundation for all future learning.</p>
            <p class="mb-4">At St. Vincent's, we leverage this understanding through:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Stimulating environments that promote neural connections</li>
                <li>Play-based activities that develop executive function</li>
                <li>Social interactions that build emotional intelligence</li>
                <li>Language-rich experiences that boost cognitive development</li>
            </ul>
            <p class="mb-6">Our curriculum is designed to capitalize on these critical developmental windows, ensuring your child builds the cognitive, social, and emotional skills needed for lifelong success.</p>
            <div class="bg-blue-50 p-4 crayon-border text-center">
                <h4 class="font-bold text-xl mb-2">Ready to see the difference?</h4>
                <p class="mb-3">Schedule a visit to experience our science-backed approach to early learning.</p>
                <button class="open-contact-modal-from-blog crayon-button bg-blue-500 text-white font-bold px-6 py-3 text-lg">Call +91 91009 99312</button>
            </div>
        `
    },
    social: {
        title: "Social Skills Development",
        subtitle: "Building Foundations for Healthy Relationships",
        image: "images/blog/social-skills.jpg",
        content: `
            <p class="mb-4">Preschool provides the first structured environment where children learn to navigate social relationships outside their family. These early experiences are fundamental to developing essential life skills.</p>
            <p class="mb-4">Through guided play, group activities, and daily interactions, our teachers help children learn:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Empathy and emotional regulation</li>
                <li>Cooperation and sharing skills</li>
                <li>Conflict resolution abilities</li>
                <li>Communication and active listening</li>
                <li>Building positive friendships</li>
            </ul>
            <p class="mb-6">These social competencies form the foundation for healthy relationships throughout life and are crucial for academic and career success later on.</p>
            <div class="bg-green-50 p-4 crayon-border text-center">
                <h4 class="font-bold text-xl mb-2">See our social learning in action!</h4>
                <p class="mb-3">Visit our campus and observe how we nurture social development.</p>
                <button class="open-contact-modal-from-blog crayon-button bg-green-500 text-white font-bold px-6 py-3 text-lg">Call +91 91009 99312</button>
            </div>
        `
    },
    primary: {
        title: "Preparing for Primary School",
        subtitle: "A Smooth Transition to Formal Education",
        image: "images/blog/primary-preparation.jpg",
        content: `
            <p class="mb-4">The transition from preschool to primary school is a significant milestone that requires careful preparation. Our UKG program specifically focuses on ensuring children are academically, socially, and emotionally ready for this important step.</p>
            <p class="mb-4">Key preparation areas include:</p>
            <ul class="list-disc pl-5 mb-4 space-y-2">
                <li>Developing independence and self-help skills</li>
                <li>Building attention span and following multi-step instructions</li>
                <li>Establishing foundational literacy and numeracy</li>
                <li>Promoting problem-solving and critical thinking</li>
                <li>Building confidence and resilience</li>
            </ul>
            <p class="mb-6">We work closely with parents to ensure each child develops the confidence and skills needed to thrive in primary school, making this important transition as smooth and positive as possible.</p>
            <div class="bg-purple-50 p-4 crayon-border text-center">
                <h4 class="font-bold text-xl mb-2">Ensure a smooth transition!</h4>
                <p class="mb-3">Learn how our UKG program prepares children for primary school success.</p>
                <button class="open-contact-modal-from-blog crayon-button bg-purple-500 text-white font-bold px-6 py-3 text-lg">Call +91 91009 99312</button>
            </div>
        `
    }
};

function createModal(data, container) {
    let modalHTML = '';
    if (container === document.getElementById('modal-container')) {
         modalHTML = `
         <div class="modal-overlay fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 opacity-0" style="display: none;">
            <div class="modal-content bg-paper crayon-border w-full max-w-2xl max-h-[90vh] overflow-y-auto transform scale-95">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h2 class="text-5xl font-bold text-gray-800">${data.title}</h2>
                            <p class="text-2xl text-${data.color}-600 font-semibold mt-1">${data.hook}</p>
                        </div>
                        <button class="close-modal-btn p-1">
                            <i data-lucide="x" class="w-8 h-8 text-gray-500"></i>
                        </button>
                    </div>
                    <p class="font-body text-gray-600 mb-6 text-lg">${data.value}</p>
                    <h3 class="font-bold text-3xl mb-3 text-gray-700">Curriculum Highlights</h3>
                    <ul class="space-y-2 mb-8">
                        ${data.curriculum.map(item => `
                            <li class="flex items-center text-xl">
                                <i data-lucide="check-circle-2" class="w-6 h-6 text-green-500 mr-2"></i>${item}
                            </li>
                        `).join('')}
                    </ul>
                    <div class="bg-${data.color}-100 crayon-border p-6 flex justify-between items-center">
                        <div>
                            <p class="text-gray-600 font-medium text-xl">To know more</p>
                            <p class="text-4xl font-bold text-gray-800">Contact Us</p>
                        </div>
                        <button class="open-contact-modal-from-program crayon-button bg-${data.color}-500 text-white font-bold px-6 py-3 text-xl">Book a Tour</button>
                    </div>
                </div>
            </div>
         </div>`;
    } else if (container === document.getElementById('contact-modal-container')) {
         modalHTML = `
         <div class="modal-overlay fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 opacity-0" style="display: none;">
            <div class="modal-content bg-paper crayon-border w-full max-w-2xl max-h-[90vh] overflow-y-auto transform scale-95">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="text-5xl font-bold text-gray-800">Schedule a Visit</h2>
                            <p class="text-xl text-gray-600 mt-2">We'd love to show you around our campus!</p>
                        </div>
                        <button class="close-modal-btn p-1">
                            <i data-lucide="x" class="w-8 h-8 text-gray-500"></i>
                        </button>
                    </div>
                    <form id="contact-form" class="space-y-4">
                        <div class="text-2xl">
                            <label for="parentName" class="font-medium text-gray-700">Parent's Name</label>
                            <input type="text" id="parentName" name="parentName" class="w-full mt-1 p-3 crayon-border text-xl" required>
                        </div>
                        <div class="text-2xl">
                            <label for="phone" class="font-medium text-gray-700">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="w-full mt-1 p-3 crayon-border text-xl" required>
                        </div>
                        <div class="text-2xl">
                            <label for="childAge" class="font-medium text-gray-700">Child's Age</label>
                            <input type="number" id="childAge" name="childAge" min="1" max="8" class="w-full mt-1 p-3 crayon-border text-xl" required>
                        </div>
                        <div class="text-2xl">
                            <label for="program" class="font-medium text-gray-700">Program Interested In</label>
                            <select id="program" name="program" class="w-full mt-1 p-3 crayon-border text-xl" required>
                                <option value="">Select a program</option>
                                <option value="playgroup">Playgroup</option>
                                <option value="nursery">Nursery</option>
                                <option value="lkg">LKG</option>
                                <option value="ukg">UKG</option>
                                <option value="daycare">Day Care</option>
                            </select>
                        </div>
                        <div class="text-2xl">
                            <label for="message" class="font-medium text-gray-700">Additional Message (Optional)</label>
                            <textarea id="message" name="message" class="w-full mt-1 p-3 crayon-border text-xl" rows="3"></textarea>
                        </div>
                        <button type="submit" class="w-full crayon-button bg-red-400 text-white font-bold text-2xl p-4 flex items-center justify-center gap-2">
                            <span id="submit-text">Submit Inquiry</span>
                            <div id="submit-spinner" class="spinner hidden" style="width: 20px; height: 20px;"></div>
                        </button>
                        <p id="contact-form-success-message" class="text-green-600 text-center font-semibold hidden text-xl">Thank you! We'll call you soon!</p>
                        <p id="contact-form-error-message" class="text-red-600 text-center font-semibold hidden text-xl">There was an error submitting your form. Please try again or call us directly.</p>
                    </form>
                </div>
            </div>
         </div>`;
    } else if (container === document.getElementById('blog-modal-container')) {
         modalHTML = `
         <div class="modal-overlay fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 opacity-0" style="display: none;">
            <div class="modal-content bg-paper crayon-border w-full max-w-4xl max-h-[90vh] overflow-y-auto transform scale-95 blog-modal-content">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h2 class="text-5xl font-bold text-gray-800">${data.title}</h2>
                            <p class="text-xl text-${data.color}-600 font-semibold mt-1">${data.subtitle}</p>
                        </div>
                        <button class="close-modal-btn p-1">
                            <i data-lucide="x" class="w-8 h-8 text-gray-500"></i>
                        </button>
                    </div>
                    <div class="flex flex-col md:flex-row gap-8 mb-8">
                        <div class="md:w-2/5">
                            <img src="${data.image}" alt="${data.title}" class="w-full h-64 object-cover crayon-border">
                        </div>
                        <div class="md:w-3/5">
                            <div class="prose max-w-none font-body text-gray-700 text-lg">
                                ${data.content}
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-8">
                        <button class="close-blog-modal crayon-button bg-red-400 text-white font-bold px-8 py-4 text-xl">Close</button>
                    </div>
                </div>
            </div>
         </div>`;
    }

    container.innerHTML = modalHTML;
    const overlay = container.querySelector('.modal-overlay');
    overlay.style.display = 'flex';
    setTimeout(() => { 
        overlay.classList.remove('opacity-0'); 
        overlay.querySelector('.modal-content').classList.remove('scale-95'); 
    }, 10);
    
    lucide.createIcons();
    
    // Handle form submission for contact modal with EmailJS
    const contactForm = container.querySelector('#contact-form');
    if (contactForm) {
        const successMessage = container.querySelector('#contact-form-success-message');
        const errorMessage = container.querySelector('#contact-form-error-message');
        const submitText = container.querySelector('#submit-text');
        const submitSpinner = container.querySelector('#submit-spinner');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            submitText.classList.add('hidden');
            submitSpinner.classList.remove('hidden');
            successMessage.classList.add('hidden');
            errorMessage.classList.add('hidden');
            
            // Collect form data
            const formData = {
                parentName: document.getElementById('parentName').value,
                phone: document.getElementById('phone').value,
                childAge: document.getElementById('childAge').value,
                program: document.getElementById('program').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toLocaleString(),
                source: 'Website Contact Form'
            };
            
            console.log('Sending form data:', formData);
            
            // Send email using EmailJS
            emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // On success
                    successMessage.classList.remove('hidden');
                    contactForm.reset();
                    
                    // Reset button state
                    submitText.classList.remove('hidden');
                    submitSpinner.classList.add('hidden');
                    
                    setTimeout(() => { 
                        successMessage.classList.add('hidden'); 
                        closeModal(overlay);
                    }, 3000);
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // On error
                    errorMessage.classList.remove('hidden');
                    
                    // Reset button state
                    submitText.classList.remove('hidden');
                    submitSpinner.classList.add('hidden');
                });
        });
    }
    
    // Close modal when clicking overlay or close button
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.closest('.close-modal-btn') || e.target.closest('.close-blog-modal')) {
            closeModal(overlay);
        }
    });
    
    // Open contact modal from program modal
    const openContactModalBtns = container.querySelectorAll('.open-contact-modal-from-program, .open-contact-modal-from-blog');
    openContactModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(overlay);
            setTimeout(() => {
                createContactModal();
            }, 300);
        });
    });
}

function closeModal(overlay) {
    overlay.classList.add('opacity-0');
    overlay.querySelector('.modal-content').classList.add('scale-95');
    setTimeout(() => { 
        overlay.remove(); 
    }, 300);
}

function createContactModal() {
    createModal({}, document.getElementById('contact-modal-container'));
}

function createBlogModal(blogId) {
    const blogDataWithColor = {
        ...blogData[blogId],
        color: blogId === 'science' ? 'blue' : blogId === 'social' ? 'green' : 'purple'
    };
    createModal(blogDataWithColor, document.getElementById('blog-modal-container'));
}

// Program modals
document.querySelectorAll('.program-card').forEach(c => { 
    c.addEventListener('click', () => createModal(programData[c.dataset.program], document.getElementById('modal-container'))); 
});

// Blog modals - FIXED: Added proper event listeners
document.querySelectorAll('.open-blog-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const blogId = btn.getAttribute('data-blog');
        if (blogId && blogData[blogId]) {
            createBlogModal(blogId);
        }
    });
});

// Contact modal triggers
document.getElementById('open-contact-modal').addEventListener('click', createContactModal);
document.getElementById('open-contact-modal-mobile').addEventListener('click', createContactModal);
document.getElementById('open-contact-modal-hero').addEventListener('click', createContactModal);
document.getElementById('open-contact-modal-bottom').addEventListener('click', createContactModal);

// Fix for the premium contact modal button
const openContactModalPremium = document.querySelector('.open-contact-modal-premium');
if (openContactModalPremium) {
    openContactModalPremium.addEventListener('click', createContactModal);
}

// WhatsApp button functionality
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp-chat-button');
    
    // Remove notification badge after first interaction
    whatsappButton.addEventListener('click', function() {
        const badge = this.querySelector('.notification-badge');
        if (badge) {
            badge.style.display = 'none';
        }
    });
    
    // Auto-show tooltip on page load
    setTimeout(() => {
        const tooltip = whatsappButton.querySelector('.whatsapp-chat-tooltip');
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
        }, 5000);
    }, 2000);
});

// Test EmailJS connection on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('EmailJS configuration:', EMAILJS_CONFIG);
});
