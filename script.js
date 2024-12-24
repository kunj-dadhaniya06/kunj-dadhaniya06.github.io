document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDarkTheme = body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDarkTheme);
        themeToggle.textContent = isDarkTheme ? 'Light Mode' : 'Dark Mode';
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const animateSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(animateSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Animate skill items
    const skillItems = document.querySelectorAll('.skills-list li');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 100}ms`;
    });

    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 200}ms`;
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Typing effect for the header
    const headerTitle = document.querySelector('header h1');
    const originalText = headerTitle.textContent;
    headerTitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < originalText.length) {
            headerTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Parallax effect for background
    const backgroundGif = document.querySelector('.background-gif');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        backgroundGif.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
});