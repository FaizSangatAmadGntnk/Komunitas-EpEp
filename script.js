const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll navbar transparent
window.addEventListener('scroll', function () {
    const navbar = this.document.querySelector('.navbar');
    if (this.window.scrollY > 10) {
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
})