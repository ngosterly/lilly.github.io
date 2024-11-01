window.onload = function() {
    const words = document.querySelectorAll('.fade-in');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = 1; 
            word.style.transform = 'translateY(0)'; 
        }, index * 750);
    });
};
