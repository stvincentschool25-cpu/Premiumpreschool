// Program Modal Data
const programData = {
    playgroup: {
        title: "Playgroup Program",
        hook: "Where Curiosity Takes Flight!",
        value: "Our Playgroup is a wonderland of sensory experiences designed to nurture your toddler's budding curiosity and social skills in a safe, warm environment.",
        curriculum: ["Sensory Play (Sand, Water, Clay)", "Gross Motor Skills Development", "Music & Movement Sessions", "Early Language Exposure", "Introduction to Sharing & Group Play"],
        schedule: { 
            "9:00 AM": "Welcome & Free Play", 
            "9:30 AM": "Circle Time (Songs & Rhymes)", 
            "10:00 AM": "Sensory Activity", 
            "10:45 AM": "Snack Time", 
            "11:15 AM": "Outdoor Play", 
            "12:00 PM": "Story Time & Dismissal" 
        },
        pricing: "₹6,500 / month",
        color: "red"
    },
    nursery: {
        title: "Nursery Program",
        hook: "Building Blocks for a Bright Future!",
        value: "In Nursery, we build upon natural curiosity by introducing foundational concepts in literacy and numeracy through engaging thematic units and creative expression.",
        curriculum: ["Phonological Awareness", "Pre-writing & Fine Motor Skills", "Number Recognition (1-10)", "Concept of Colors & Shapes", "Art, Craft, & Storytelling"],
        schedule: { 
            "9:00 AM": "Arrival & Phonics Fun", 
            "9:45 AM": "Thematic Learning Activity", 
            "10:30 AM": "Snack Time", 
            "11:00 AM": "Outdoor/Gross Motor Play", 
            "11:45 AM": "Creative Arts", 
            "12:30 PM": "Dismissal" 
        },
        pricing: "₹7,000 / month",
        color: "blue"
    },
    lkg_ukg: {
        title: "LKG & UKG Program",
        hook: "Getting Ready for the Big School!",
        value: "Our Kindergarten program is structured to ensure a smooth transition to formal schooling, focusing on reading, writing, and critical thinking skills.",
        curriculum: ["Reading & Writing CVC Words", "Advanced Numeracy (Addition/Subtraction)", "Environmental Science (EVS) Concepts", "Logical Reasoning & Problem Solving", "Public Speaking & Show-and-Tell"],
        schedule: { 
            "9:00 AM": "Language & Literacy Block", 
            "10:00 AM": "Math & Logic Activities", 
            "10:45 AM": "Snack Break", 
            "11:15 AM": "EVS/Project Work", 
            "12:00 PM": "Outdoor Play", 
            "12:45 PM": "Dismissal" 
        },
        pricing: "₹7,500 / month",
        color: "yellow"
    },
    daycare: {
        title: "Full Day Care",
        hook: "Your Child's Safe & Happy Second Home!",
        value: "We provide a secure, nurturing, and structured environment for children of working parents, blending care with engaging activities for holistic development.",
        curriculum: ["Homework Assistance", "Age-appropriate Hobby Classes", "Structured Play & Activities", "Nutritious Meals & Snacks", "Dedicated Nap/Rest Time"],
        schedule: { 
            "1:00 PM": "Arrival & Lunch", 
            "2:00 PM": "Quiet/Nap Time", 
            "3:30 PM": "Snack & Homework Help", 
            "4:30 PM": "Hobby Class (Art/Dance)", 
            "5:30 PM": "Free Play & Group Games", 
            "6:30 PM": "Departure" 
        },
        pricing: "Starting from ₹9,000 / month",
        color: "green"
    }
};

// Blog Modal Data
const blogData = {
    blog1: {
        title: "6 Essential Tips for Choosing the Right Preschool in Hyderabad",
        content: `
            <p>Choosing the first school for your child is a significant decision. In a bustling area like Chanda Nagar, the options can feel overwhelming. How do you find a place that's not just a school, but a second home? Here are six key factors to consider to ensure you make the best choice for your family.</p>
            <h3>1. Philosophy and Curriculum: What's Their Approach?</h3>
            <p>Does the school follow a play-based philosophy, a structured academic one like Montessori, or a mix? At The Learning Curve, we champion a play-based curriculum because we believe children learn best through exploration and fun. Look for a curriculum that sparks curiosity and builds foundational skills in literacy, numeracy, and social interaction without pressure.</p>
            <h3>2. Campus Safety and Hygiene</h3>
            <p>A parent's primary concern is always safety. During your visit, check for secure entry/exit points, CCTV surveillance, child-proofed furniture, and clean, hygienic spaces. A well-maintained environment shows a school's commitment to the well-being of its students. Don't hesitate to ask about their specific safety protocols and staff training.</p>
            <h3>3. Teacher-Student Interaction and Ratio</h3>
            <p>Observe the classrooms. Are the teachers warm, engaging, and patient? A low student-teacher ratio is crucial for toddlers and preschoolers as it ensures personalized attention. This allows teachers to understand each child's unique personality, strengths, and needs, fostering a stronger bond and a more effective learning experience.</p>
            <h3>4. Location and Convenience</h3>
            <p>Consider the daily commute. A preschool close to your home in areas like Chanda Nagar, Miyapur, or Lingampally can make mornings significantly less stressful for both you and your child. Less travel time means more energy for learning and playing.</p>
            <h3>5. Parent Communication</h3>
            <p>How does the school keep parents informed? Look for schools that offer regular updates, parent-teacher meetings, and an open-door policy. Strong communication builds a partnership between the school and parents, which is vital for a child's success.</p>
            <h3>6. Trust Your Gut Feeling</h3>
            <p>Finally, after all the research, trust your intuition. During your school tour, pay attention to the atmosphere. Does it feel happy, vibrant, and welcoming? Can you picture your child thriving there? Often, the right place just *feels* right.</p>`
    },
    blog2: {
        title: "The Magic of Play-Based Learning: More Than Just Fun and Games",
        content: `
            <p>When you peek into a play-based preschool classroom, you'll see children building towers, dressing up as superheroes, or digging in a sensory bin. It might look like simple fun, but it's actually a powerful and intentional approach to education. Here's why play-based learning is so beneficial for your child's development.</p>
            <h3>Developing Social and Emotional Skills</h3>
            <p>Play is the first language of children. Through group activities, they learn to negotiate roles ("I'll be the doctor, you be the patient!"), share toys, take turns, and resolve conflicts. These interactions are crucial for developing empathy, cooperation, and emotional self-regulation—skills that are foundational for success in school and life.</p>
            <h3>Fostering Creativity and Imagination</h3>
            <p>A simple cardboard box can become a rocket ship, a castle, or a car. Play-based environments provide open-ended materials that encourage children to think creatively and solve problems. This ability to imagine and innovate is a critical skill for the 21st century.</p>
            <h3>Building Language and Communication</h3>
            <p>From storytelling during pretend play to describing their block tower, children are constantly using and expanding their vocabulary in a playful setting. They learn to express their ideas, listen to others, and build the communication skills necessary for strong literacy development.</p>
            <h3>Making Academic Concepts Concrete</h3>
            <p>Play is a child's research. When they sort colorful blocks, they're learning about patterns and classification (early math). When they pour water in the water table, they're exploring concepts of volume and physics. Play makes abstract academic ideas tangible, meaningful, and fun, creating a positive foundation for future learning.</p>`
    },
    blog3: {
        title: "A Guide to Easing Separation Anxiety: Happy Goodbyes at the Preschool Door",
        content: `
            <p>The first few weeks of preschool can be tough—for both children and parents. Tears at drop-off are a normal part of development as your child learns to navigate a new environment. The good news is that with patience and consistency, you can make goodbyes a positive experience. Here are some strategies that work.</p>
            <h3>1. Talk Positively About School</h3>
            <p>In the days leading up to school, talk about all the fun things your child will do, the new friends they will make, and the exciting toys they will play with. Your positive attitude is contagious and can help build their excitement and confidence.</p>
            <h3>2. Establish a Consistent Goodbye Routine</h3>
            <p>Children thrive on routine. Create a simple, predictable goodbye ritual. This could be two hugs, a high-five, and a cheerful "See you later, alligator!" A consistent routine provides comfort and signals to your child that it's time for you to leave, but also that you will be back.</p>
            <h3>3. Keep Goodbyes Short and Sweet</h3>
            <p>Lingering can often make separation anxiety worse. Once you've completed your routine, give your child a confident smile, hand them over to their teacher, and leave. A prolonged, emotional goodbye can increase a child's distress. Trust that our caring teachers are experts at comforting and engaging children once you've departed.</p>
            <h3>4. Always Say Goodbye</h3>
            <p>It can be tempting to sneak away when your child is distracted, but this can lead to mistrust. Always let your child know you are leaving and that you will return. This builds their sense of security and trust in you.</p>
            <h3>5. Partner with the Teacher</h3>
            <p>Communicate with your child's teacher. We are your partners in this journey. We can share insights into how long it takes your child to settle in after you leave (it's often much quicker than you think!) and work with you on strategies to make the transition smoother.</p>`
    }
};

// Create Program Modal
function createProgramModal(programId) {
    const data = programData[programId];
    if (!data) return;

    const scheduleHtml = Object.entries(data.schedule).map(([time, activity]) => `
        <div class="flex justify-between border-b border-gray-200 py-2 text-sm">
            <span class="font-medium text-gray-600">${time}</span>
            <span class="text-gray-800">${activity}</span>
        </div>
    `).join('');

    const modalHTML = `
        <div class="modal-overlay fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
            <div class="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform">
                <div class="p-6 md:p-8">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h2 class="text-3xl font-bold text-gray-800">${data.title}</h2>
                            <p class="text-lg text-${data.color}-600 font-semibold mt-1">${data.hook}</p>
                        </div>
                        <button class="close-modal-btn p-1">
                            <i data-lucide="x" class="w-6 h-6 text-gray-500"></i>
                        </button>
                    </div>
                    <p class="text-gray-600 mb-6 font-family-lora">${data.value}</p>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="font-bold text-xl mb-3 text-gray-700">Curriculum Highlights</h3>
                            <ul class="space-y-2">
                                ${data.curriculum.map(item => `
                                    <li class="flex items-start">
                                        <i data-lucide="check-circle-2" class="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                                        <span class="text-gray-600">${item}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-xl mb-3 text-gray-700">A Day in ${data.title}</h3>
                            <div class="space-y-1">${scheduleHtml}</div>
                        </div>
                    </div>

                    <div class="mt-8 bg-gray-100 p-6 rounded-lg flex flex-col sm:flex-row justify-between items-center">
                        <div>
                            <p class="text-gray-600 font-medium">Program Fee</p>
                            <p class="text-3xl font-bold text-gray-800">${data.pricing}</p>
                        </div>
                        <a href="#book-tour" class="close-modal-btn w-full sm:w-auto mt-4 sm:mt-0 bg-${data.color}-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-${data.color}-600 transition-colors shadow-lg">
                            Book a Campus Tour
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

    const container = document.getElementById('modal-container');
    container.innerHTML = modalHTML;
    
    const overlay = container.querySelector('.modal-overlay');
    overlay.style.display = 'flex';
    
    // Animate in
    setTimeout(() => {
        overlay.classList.add('opacity-0');
        overlay.querySelector('.modal-content').classList.add('scale-95');
    }, 10);
    
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
        overlay.querySelector('.modal-content').classList.remove('scale-95');
    }, 50);

    // Initialize icons
    lucide.createIcons();

    // Close modal events
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.closest('.close-modal-btn')) {
            closeModal(overlay);
        }
    });
}

// Create Blog Modal
function createBlogModal(blogId) {
    const data = blogData[blogId];
    if (!data) return;

    const modalHTML = `
        <div class="modal-overlay fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
            <div class="modal-content bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform">
                <div class="p-6 md:p-10">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl md:text-3xl font-bold text-gray-800">${data.title}</h2>
                        <button class="close-modal-btn p-1">
                            <i data-lucide="x" class="w-7 h-7 text-gray-500"></i>
                        </button>
                    </div>
                    <div class="blog-content">${data.content}</div>
                </div>
            </div>
        </div>`;

    const container = document.getElementById('blog-modal-container');
    container.innerHTML = modalHTML;
    
    const overlay = container.querySelector('.modal-overlay');
    overlay.style.display = 'flex';
    
    // Animate in
    setTimeout(() => {
        overlay.classList.add('opacity-0');
        overlay.querySelector('.modal-content').classList.add('scale-95');
    }, 10);
    
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
        overlay.querySelector('.modal-content').classList.remove('scale-95');
    }, 50);

    // Close modal events
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target.closest('.close-modal-btn')) {
            closeModal(overlay);
        }
    });
}

// Close Modal Function
function closeModal(overlay) {
    if (!overlay) return;
    
    overlay.classList.add('opacity-0');
    overlay.querySelector('.modal-content').classList.add('scale-95');
    
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.remove();
    }, 300);
}
