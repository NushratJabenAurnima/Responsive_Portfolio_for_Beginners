// Typing Animation for Home Section
document.addEventListener("DOMContentLoaded", function () {
    // Creates a typing animation using Typed.js for the .typing-text span element
    var typed = new Typed(".typing-text span", {
        strings: [
            "Web Developer",
            "Software Developer",
            "Web Designer",
            "Photographer",
            "Youtuber"
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        showCursor: true,
        cursorChar: "|"
    });
});


// ---------------------------
// Mobile Menu Toggle (Navbar)
// ---------------------------

// Get the menu icon and navbar elements from the HTML
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// When menu icon is clicked, toggle the 'active' class for animation/show/hide
menuIcon.addEventListener('click', function () {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('active');
});


// Navbar Highlight on Scroll
// Get all navigation links and sections with IDs
const navLinks = document.querySelectorAll('.navbar a');
const sections = Array.from(document.querySelectorAll('section[id]'));

// When the page is scrolled...
window.addEventListener('scroll', () => {
    let current = sections[0].id; // Default to first section
    // Find the section currently visible (near the top of the page)
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.id;
        }
    });
    // Highlight the corresponding navbar link
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// Navbar Highlight on Click
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add 'active' to the clicked link
        this.classList.add('active');
    });
});
