const menuToggle = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    if(navMenu.classList.contains('show')) {
         menuToggle.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})


document.addEventListener('documentloaded', () => {
    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');  
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
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
});

 // Why Me Images Slider
    const whyMeImagesContainer = document.querySelector('.why-me-images');
    let whyMeImages = document.querySelectorAll('.why-me-images img');
    let imageIndex = 0;
    showImages();
    function showImages(){
        for (image = 0; image < whyMeImages.length; image++) {
        whyMeImages[image].style.display = "none";
    }
    imageIndex++;
    if (imageIndex > whyMeImages.length) {imageIndex = 1}
    whyMeImages[imageIndex-1].style.display = "block";
    setTimeout(showImages, 4000);
    }