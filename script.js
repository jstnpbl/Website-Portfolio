document.addEventListener('DOMContentLoaded', function() {
    const featuredWork = document.querySelector('.featured-work');

    featuredWork.addEventListener('mouseover', function(event) {
        if (!event.target.closest('.project-card')) {
            featuredWork.style.transform = 'scale(1)';
            const projectImages = featuredWork.querySelectorAll('.project-image');
            projectImages.forEach(image => {
                image.style.transform = 'scale(1.1)';
            });
        }
    });

    featuredWork.addEventListener('mouseout', function(event) {
        featuredWork.style.transform = 'scale(1)';
        const projectImages = featuredWork.querySelectorAll('.project-image');
        projectImages.forEach(image => {
            image.style.transform = 'scale(1.1)';
        });
    });
});