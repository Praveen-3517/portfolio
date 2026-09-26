// Toggle Mobile Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Scroll Sections Active Link & Sticky Navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

window.onscroll = () => {
    const scrollPos = window.scrollY;

    sections.forEach(sec => {
        const top = sec.offsetTop - 180;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            const activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    // Sticky Header
    if (header) {
        header.classList.toggle('sticky', scrollPos > 80);
    }

    // Close mobile navbar on scroll
    if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// Typed.js Dynamic Typing Animation for Role Subtitles
if (typeof Typed !== 'undefined') {
    new Typed('.multiple-text', {
        strings: [
            'Full-Stack Developer',
            'AI / ML Enthusiast',
            'Prompt Engineer',
            'Data Analyst',
            'FastAPI & Next.js Architect'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

// ScrollReveal Animations
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 1200,
        delay: 150,
        reset: false // Keep elements visible after scrolling down
    });

    sr.reveal('.badge-pill, .home-content h3, .home-content h1, .section-title', { origin: 'top' });
    sr.reveal('.hero-desc, .social-media, .btn-group, .hero-stats', { origin: 'bottom', interval: 100 });
    sr.reveal('.home-img', { origin: 'right', delay: 250 });
    sr.reveal('.about-card, .expertise-card', { origin: 'bottom', interval: 120 });
    sr.reveal('.skills-box', { origin: 'bottom', interval: 100 });
    sr.reveal('.project-card', { origin: 'bottom', interval: 150 });
    sr.reveal('.timeline-column', { origin: 'bottom', interval: 200 });
    sr.reveal('.contact-info-panel, .contact-form', { origin: 'bottom', interval: 150 });
}
