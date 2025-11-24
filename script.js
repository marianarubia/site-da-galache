// Slider automático
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000); // troca a cada 5s

// Ativa animação do overlay
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
