// Scrollspy - Update active link on scroll
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Tooltip functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerText = link.getAttribute('data-tooltip');
        link.appendChild(tooltip);
    });
    link.addEventListener('mouseleave', () => {
        link.querySelector('.tooltip').remove();
    });
});

// Scroll to About Section on CTA click
function scrollToAbout() {
    document.querySelector("#about").scrollIntoView({ behavior: 'smooth' });
}


// modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Optional: Close the modal when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        // Close modal if click happens outside of the modal content
        if (event.target.classList.contains('modal')) {
            modal.style.display = "none";
        }
    });
};





// Function to toggle navigation visibility
function toggleNav() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('navbar-visible');
}
// JavaScript for toggling nav in small screens
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
// Close nav when clicking outside
document.addEventListener('click', (e) => {
    if (document.body.classList.contains('nav-open') && !nav.contains(e.target) && !navToggle.contains(e.target)) {
        document.body.classList.remove('nav-open');
    }
});