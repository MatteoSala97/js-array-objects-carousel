// Array 1 - Monkey D. Luffy
const array1 = {
    image: "./assets/img/luffy.jpg",
    crew: "Straw Hat",
    role: "Captain",
    devilFruit: "Gomu Gomu no Mi"
}

// Array 2 - Roronoa Zoro
const array2 = {
    image: "./assets/img/zoro.jpg",
    crew: "Straw Hat",
    role: "Swordsman",
    devilFruit: ""
}

// Array 3 - Nami
const array3 = {
    image: "./assets/img/nami.jpg",
    crew: "Straw Hat",
    role: "Navigator",
    devilFruit: ""
}

// Array 4 - Usopp
const array4 = {
    image: "./assets/img/usopp.jpg",
    crew: "Straw Hat",
    role: "Sniper",
    devilFruit: ""
}

// Array 5 - Sanji
const array5 = {
    image: "./assets/img/sanji.jpg",
    crew: "Straw Hat",
    role: "Chef",
    devilFruit: ""
}

// Array 6 - Tony Tony Chopper
const array6 = {
    image: "./assets/img/chopper.jpg",
    crew: "Straw Hat",
    role: "Doctor",
    devilFruit: "Hito Hito no Mi, Model: Human"
}

// Array 7 - Nico Robin
const array7 = {
    image: "./assets/img/robin.jpg",
    crew: "Straw Hat",
    role: "Archaeologist",
    devilFruit: "Hana Hana no Mi"
}

// Array 8 - Franky
const array8 = {
            image: "./assets/img/franky.jpg",
            crew: "Straw Hat",
            role: "Shipwright",
            devilFruit: ""
}

// Array 9 - Brook
const array9 = {
        image: "./assets/img/brook.jpg",
        crew: "Straw Hat",
        role: "Musician",
        devilFruit: "Yomi Yomi no Mi"
}

// Array 10 - Jinbei
const array10 = {
    image: "./assets/img/jinbe.jpg",
    crew: "Straw Hat",
    role: "Helmsman",
    devilFruit: ""
}

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