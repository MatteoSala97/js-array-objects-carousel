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

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName("box")
  let dots = document.getElementsByClassName("current")
  let captionText = document.getElementById("caption")

  if (n > slides.length) {currentIndex = 1}
  if (n < 1) {currentIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[currentIndex-1].style.display = "block"
  dots[currentIndex-1].className += " active"
  captionText.innerHTML = dots[currentIndex-1].alt
}