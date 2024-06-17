let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  updateSlide();
}

function updateSlide() {
  const slideWidth = slides[currentSlide].offsetWidth;
  document.querySelector('.slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(nextSlide, 3000); // Alterna para o próximo slide a cada 3 segundos
