let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide(index) {
  if (!slides.length) return;
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

setInterval(() => {
  nextSlide();
}, 5000);