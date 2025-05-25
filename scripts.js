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