
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.src = "placeholder.jpg"; 
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    const exploreButton = document.querySelector('.hero button'); 
    exploreButton.addEventListener('click', () => {
        window.location.href = "menu.html"; 
    }); 
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => { 
            const href = link.getAttribute('href');
            console.log(`Navigating to: ${href}`);
        });
    });
});