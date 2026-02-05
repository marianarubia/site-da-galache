// ===== MENU MOBILE =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SWIPER HERO =====
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  autoplay: { delay: 5000 },
  
  // Navegação
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Paginação
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  // Mobile
  touchRatio: 1,
  grabCursor: true,
});

// ===== HERO ANIMAÇÃO =====
function animateSlideText() {
  const slides = document.querySelectorAll('.swiper-slide .main-slider__content');
  slides.forEach(slide => slide.classList.remove('animate'));
  slides[swiper.activeIndex].classList.add('animate');
}

// Inicializa animação no load
animateSlideText();

// Atualiza animação a cada slide
swiper.on('slideChange', animateSlideText);
