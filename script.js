document.addEventListener('DOMContentLoaded', function() {
    // Gallery modal functionality
    const modal = document.getElementById('gallery-modal');
    const viewAllButton = document.querySelector('.view-all-works');
    const closeButton = document.querySelector('.close-modal');

    viewAllButton.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when clicking outside of content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
});
