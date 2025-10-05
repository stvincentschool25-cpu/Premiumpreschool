// Main JavaScript file - Initializes the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize all components
    initProgramCards();
    initBlogPosts();
    initGallery();
    initTestimonials();
    initForms();
    
    console.log('The Learning Curve website initialized successfully');
});

// Mobile Menu functionality
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Update icon
            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('data-lucide', 'menu');
                } else {
                    icon.setAttribute('data-lucide', 'x');
                }
                lucide.createIcons();
            }
        });
    }
}

// Program Cards functionality
function initProgramCards() {
    const programData = [
        {
            id: 'playgroup',
            title: 'Playgroup',
            age: 'Ages 1.5 - 2.5 Years',
            description: 'A gentle introduction to school, focusing on sensory exploration and social interaction.',
            color: 'red'
        },
        {
            id: 'nursery',
            title: 'Nursery',
            age: 'Ages 2.5 - 3.5 Years',
            description: 'Building foundational literacy and numeracy skills through fun, thematic activities.',
            color: 'blue'
        },
        {
            id: 'lkg_ukg',
            title: 'LKG & UKG',
            age: 'Ages 3.5 - 5.5 Years',
            description: 'Preparing for formal schooling with a focus on writing, reading, and problem-solving.',
            color: 'yellow'
        },
        {
            id: 'daycare',
            title: 'Full Day Care',
            age: 'Ages 1.5 - 8 Years',
            description: 'A safe, engaging, and structured environment for children of working parents.',
            color: 'green'
        }
    ];

    const container = document.querySelector('#programs .grid');
    if (!container) return;

    container.innerHTML = programData.map(program => `
        <div class="program-card bg-${program.color}-50 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform cursor-pointer" data-program="${program.id}">
            <div class="p-8 text-center">
                <h3 class="font-bold text-2xl text-${program.color}-500">${program.title}</h3>
                <p class="font-medium text-gray-700">${program.age}</p>
                <p class="text-gray-600 mt-3">${program.description}</p>
                <span class="mt-4 inline-block font-semibold text-${program.color}-600">View Details & Pricing</span>
            </div>
        </div>
    `).join('');

    // Add event listeners to program cards
    document.querySelectorAll('.program-card').forEach(card => {
        card.addEventListener('click', () => {
            const programId = card.dataset.program;
            if (typeof createProgramModal === 'function') {
                createProgramModal(programId);
            }
        });
    });
}

// Blog Posts functionality
function initBlogPosts() {
    const blogData = [
        {
            id: 'blog1',
            title: "6 Tips for Choosing the Right Preschool",
            image: "https://placehold.co/600x400/ef4444/ffffff?text=Choosing+a+Preschool",
            description: "Choosing your child's first school is a big decision. We break down the key factors to consider, from curriculum to campus safety.",
            color: 'red'
        },
        {
            id: 'blog2',
            title: "The Magic of Play-Based Learning",
            image: "https://placehold.co/600x400/3b82f6/ffffff?text=Play-Based+Learning",
            description: "Discover why playing with blocks and dressing up as superheroes is serious learning for your child's development.",
            color: 'blue'
        },
        {
            id: 'blog3',
            title: "A Guide to Easing Separation Anxiety",
            image: "https://placehold.co/600x400/f59e0b/ffffff?text=Separation+Anxiety",
            description: "Tearful goodbyes? Here are proven strategies to make drop-offs a positive and confident experience for you and your child.",
            color: 'yellow'
        }
    ];

    const container = document.getElementById('blog-container');
    if (!container) return;

    container.innerHTML = blogData.map(blog => `
        <article class="bg-white p-6 rounded-xl shadow-lg flex flex-col hover-lift">
            <img src="${blog.image}" alt="${blog.title}" class="rounded-lg mb-4 h-48 object-cover">
            <h3 class="text-xl font-bold text-gray-800">${blog.title}</h3>
            <p class="text-gray-600 mt-2 flex-grow">${blog.description}</p>
            <button class="read-more-btn mt-4 font-semibold text-${blog.color}-500 self-start" data-blog="${blog.id}">
                Read More →
            </button>
        </article>
    `).join('');

    // Add event listeners to blog buttons
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const blogId = btn.dataset.blog;
            if (typeof createBlogModal === 'function') {
                createBlogModal(blogId);
            }
        });
    });
}

// Gallery functionality
function initGallery() {
    const galleryImages = [
        "https://lh3.googleusercontent.com/p/AF1QipM5x2p1Y_T1W6yP-k2cZ2e6a_O7aC8-P1eG8sA=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipN30uJ_y33X81oXg8qG_uQ3F9Uq6sWqK4a7WbA=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipPzWq14o8WzK_1R2jT6H6gY7bB5_p6T1sN3M0A=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipONm2mSj24J-V9d-w_D3-s8-uY6gV3kI1H-A-A=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipO9wU2S-V-0V8aQ5N-w9v5_i-b4l-eQ9F-eK-s=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipM0v_v0k4-p2a3m3_f6X8S0o8f7_j6R-I-eY9w=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipP_O7K-gX1Y6jR4j-c8z_X4J6-r7_l8eY6uU_I=s1360-w1360-h1020",
        "https://lh3.googleusercontent.com/p/AF1QipO3-s6Q-j_d-k-C-s_H-n7_p1_x-w_k4j_s7A=s1360-w1360-h1020"
    ];

    const container = document.querySelector('.py-16.md\\:py-24.bg-red-50 .grid');
    if (!container) return;

    // Create gallery grid
    let galleryHTML = '';
    for (let i = 0; i < galleryImages.length; i += 2) {
        galleryHTML += `
            <div class="grid gap-4">
                ${galleryImages.slice(i, i + 2).map(img => `
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md hover:scale-105 transition-transform object-cover w-full h-48" src="${img}" alt="The Learning Curve">
                    </div>
                `).join('')}
            </div>
        `;
    }
    container.innerHTML = galleryHTML;
}
