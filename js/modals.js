// modals.js - Modal functionality

const programData = {
    playgroup: {
        title: "Playgroup Program",
        hook: "Where Curiosity Takes Flight!",
        value: "Our Playgroup is a wonderland of sensory experiences...",
        curriculum: ["Sensory Play", "Gross Motor Skills", "Music & Movement"],
        schedule: {"9:00 AM": "Welcome & Free Play", "9:30 AM": "Circle Time"},
        pricing: "₹6,500 / month",
        color: "red"
    },
    nursery: {
        title: "Nursery Program",
        hook: "Building Blocks for a Bright Future!",
        value: "In Nursery, we build upon natural curiosity...",
        curriculum: ["Phonological Awareness", "Pre-writing Skills"],
        schedule: {"9:00 AM": "Arrival & Phonics Fun", "9:45 AM": "Thematic Learning"},
        pricing: "₹7,000 / month",
        color: "blue"
    }
    // Add other programs...
};

const blogData = {
    blog1: {
        title: "6 Essential Tips for Choosing the Right Preschool",
        content: "<p>Choosing the first school for your child...</p>"
    }
    // Add other blogs...
};

function createProgramModal(programId) {
    const data = programData[programId];
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h2 class="text-3xl font-bold">${data.title}</h2>
                        <p class="text-lg text-${data.color}-600 font-semibold">${data.hook}</p>
                    </div>
                    <button class="close-modal" onclick="closeModal()">
                        <i data-lucide="x"></i>
                    </button>
                </div>
                <p>${data.value}</p>
                <div class="mt-6">
                    <h3 class="font-bold text-xl">Curriculum</h3>
                    <ul>
                        ${data.curriculum.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="mt-6 bg-gray-100 p-4 rounded">
                    <p class="text-2xl font-bold">${data.pricing}</p>
                    <a href="#book-tour" class="btn btn-primary mt-2">Book a Tour</a>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modal-container').innerHTML = modalHTML;
    document.querySelector('.modal-overlay').classList.add('active');
    lucide.createIcons();
}

function createBlogModal(blogId) {
    const data = blogData[blogId];
    const modalHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-bold">${data.title}</h2>
                    <button class="close-modal" onclick="closeModal()">
                        <i data-lucide="x"></i>
                    </button>
                </div>
                <div class="blog-content">
                    ${data.content}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('blog-modal-container').innerHTML = modalHTML;
    document.querySelector('.modal-overlay').classList.add('active');
    lucide.createIcons();
}

function closeModal() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
}

// Event listeners for program cards
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.program-card').forEach(card => {
        card.addEventListener('click', function() {
            const programId = this.dataset.program;
            createProgramModal(programId);
        });
    });
    
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const blogId = this.dataset.blog;
            createBlogModal(blogId);
        });
    });
    
    // Close modal when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
});
