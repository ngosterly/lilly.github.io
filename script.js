// fade in for the introductory page
window.onload = function() {
    const words = document.querySelectorAll('.fade-in');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = 1; 
            word.style.transform = 'translateY(0)'; 
        }, index * 750);
    });
};

// fade in for about me and contact me 
function fadeInSection() {
    const sections = document.querySelectorAll('.fade-in-section');
    const options = {
        root: null,
        threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, options);

    sections.forEach((section, index) => {
   
        section.style.transitionDelay = `${index * 250}ms`; 
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', fadeInSection);
