// Description: This script handles the functionality of a responsive navigation menu and a scroll-to-top button.
// Universal JavaScript for Responsive Navigation and Scroll to Top Button

// Responsive Navigation Menu
const menuToggle = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('nav');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if(navMenu.classList.contains('show')) {
         menuToggle.innerHTML = '<i class="fa-solid fa-x"></i>';
         header.style.borderBottomRightRadius = "0";
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
         header.style.borderBottomRightRadius = "8px";
    }

})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    })
});

window.addEventListener('click', (e) => {
  if (e.target === navMenu) {
        navMenu.classList.toggle('show');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

// Scroll to Top Button
const scrollToTopBtn = document.querySelector('.scroll-to-top');        
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

//smooth scrolling for all links
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

