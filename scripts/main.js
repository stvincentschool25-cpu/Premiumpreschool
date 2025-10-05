// Main initialization and shared functionality
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Toggle
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Close mobile menu when clicking on links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Smooth scrolling for anchor links
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

// Export shared data and functions
window.appConfig = {
    GOOGLE_SHEETS_API_URL,
    testimonials: [
        { 
            name: "Shravani K.", 
            text: "The best preschool in our area. The teachers are very caring and the curriculum is excellent. My son enjoys going to school every day and has developed so much confidence since joining." 
        },
        // ... other testimonials
    ],
    programData: {
        playgroup: { 
            title: "Playgroup", 
            hook: "Where Curiosity Takes Flight!", 
            value: "Our Playgroup is a wonderland of sensory experiences designed to nurture your toddler's budding curiosity.", 
            curriculum: ["Sensory Play", "Gross Motor Skills", "Fine Motor Development", "Music & Movement", "Early Language", "Group Play"], 
            color: "red" 
        },
        // ... other program data
    },
    blogData: {
        science: {
            title: "The Science of Early Learning",
            subtitle: "How Preschool Shapes Brain Development",
            image: "https://images.unsplash.com/photo-1519452575416-64e83f8b89cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            content: `...`
        },
        // ... other blog data
    }
};
