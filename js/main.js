// IMAGE SLIDER

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentSlide = 0;

  // initializing showSlide function
  function showSlide(n) {
    slides.forEach((slide) => (slide.style.display = "none"));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";

    if (currentSlide === 0) {
      prevBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
    }

    if (currentSlide === slides.length - 1) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }

  // initializing nextSlide function
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

   // initializing prevSlide function
  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  showSlide(currentSlide);
});