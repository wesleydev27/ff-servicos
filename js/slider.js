let currentIndex = 0;
const slides = document.querySelectorAll("#slider > div");
const totalSlides = slides.length;
const slider = document.getElementById("slider");

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSliderPosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
}