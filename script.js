
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade');

    fadeElements.forEach(el => {
        el.classList.add('visible');
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});
