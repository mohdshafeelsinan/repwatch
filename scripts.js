document.addEventListener('DOMContentLoaded', () => {
    const shopNowBtn = document.getElementById('shopNowBtn');
    const navLinks = document.querySelectorAll('nav ul li a');
    const slides = document.querySelectorAll('.slide');

    shopNowBtn.addEventListener('click', () => {
        alert('Redirecting to the shop page...');
        // You can add the redirection logic here
        // window.location.href = 'shop.html';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Example slide functionality (if needed)
    let currentSlide = 0;
    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    };

    showSlide(currentSlide);

    // Add more slide functionality as needed
});