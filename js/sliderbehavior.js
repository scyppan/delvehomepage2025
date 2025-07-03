// sliderbehavior.js
let currentIndex = 0;
const AUTO_SCROLL_INTERVAL = 5000;
let autoScrollTimer = null;

// grab these once (rename so you don’t collide)
const _slides = document.getElementById('slidesContainer');
const _dots   = document.getElementById('dotsContainer');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

function showSlide() {
  const slides = _slides.querySelectorAll('.slide');
  // …same as before…
}
window.showSlide = showSlide;

function nextSlide() {
  currentIndex = (currentIndex + 1) % _slides.querySelectorAll('.slide').length;
  showSlide();
}
window.nextSlide = nextSlide;

function prevSlide() {
  const total = _slides.querySelectorAll('.slide').length;
  currentIndex = (currentIndex - 1 + total) % total;
  showSlide();
}
window.prevSlide = prevSlide;

function stopAutoScroll() {
  if (autoScrollTimer) {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide();
  autoScrollTimer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);

  _slides.addEventListener('mouseenter',  stopAutoScroll);
  _slides.addEventListener('mouseleave', () => {
    if (!autoScrollTimer) autoScrollTimer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);
  });

  prevBtn.addEventListener('click', () => { stopAutoScroll(); prevSlide(); });
  nextBtn.addEventListener('click', () => { stopAutoScroll(); nextSlide(); });

  _dots.addEventListener('click', e => {
    if (e.target.classList.contains('dot')) {
      stopAutoScroll();
      currentIndex = Array.from(_dots.querySelectorAll('.dot')).indexOf(e.target);
      showSlide();
    }
  });
});
