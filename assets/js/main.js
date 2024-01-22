//declaring current index 1 to start with first image
let currentIndex = 1
showSlides(currentIndex)

// next/previous controls
function next(n) {
    showSlides(currentIndex += n)
}

// thumbnail image controls
function currentSlide(n) {
    showSlides(currentIndex = n)
}

// function to start the slideshow
function startSlideshow() {
    slideInterval = setInterval(() => {
      next(1)
    }, 1500)
}

// function to stop the slideshow
function stopSlideshow() {
    clearInterval(slideInterval)
}

  // Function to initialize the slideshow
function initializeSlideshow() {
    showSlides(currentIndex) 
    startSlideshow() 
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName("box")
    let currentImgHtml = document.getElementsByClassName("current")
    let captionText = document.getElementById("caption")

    if (n > slides.length) {currentIndex = 1}
    if (n < 1) {currentIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < currentImgHtml.length; i++) {
        currentImgHtml[i].className = currentImgHtml[i].className.replace(" active", "")
    }
    slides[currentIndex-1].style.display = "block"
    currentImgHtml[currentIndex-1].className += " active"
    
    //this changes the html "alt" tag according to the index
    captionText.innerHTML = currentImgHtml[currentIndex-1].alt
}

document.getElementById("startBtn").addEventListener("click", startSlideshow) 
document.getElementById("stopBtn").addEventListener("click", stopSlideshow) 

initializeSlideshow() 