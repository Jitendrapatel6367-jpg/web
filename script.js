// Variable to track if welcome popup has triggered
let welcomeTriggered = false;

// Trigger Welcome Automation Widget during scroll progression
window.addEventListener('scroll', () => {
    if (!welcomeTriggered && window.scrollY > 400) {
        const welcomeWidget = document.getElementById('welcomeWidget');
        if (welcomeWidget) {
            welcomeWidget.classList.add('show');
            welcomeTriggered = true;
        }
    }
});

// Logic to Close Welcome Widget
const closeWidgetBtn = document.getElementById('closeWidgetBtn');
if (closeWidgetBtn) {
    closeWidgetBtn.addEventListener('click', () => {
        const welcomeWidget = document.getElementById('welcomeWidget');
        if (welcomeWidget) {
            welcomeWidget.classList.remove('show');
        }
    });
}

// Highlight Current Link active state while traversing
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});
