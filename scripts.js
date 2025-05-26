
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