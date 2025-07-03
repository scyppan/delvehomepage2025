// sliderbehavior.js

let currentIndex = 0;
const slidesContainer = document.getElementById('slidesContainer');
const dotsContainer   = document.getElementById('dotsContainer');
const prevButton      = document.querySelector('.nav.prev');
const nextButton      = document.querySelector('.nav.next');
const AUTO_SCROLL_INTERVAL = 5000; // milliseconds
let autoScrollTimer = null;

function showSlide() {
  const slides = slidesContainer.querySelectorAll('.slide');
  const total  = slides.length;
  if (!total) return;

  if (currentIndex < 0)       currentIndex = total - 1;
  if (currentIndex >= total)  currentIndex = 0;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  slides.forEach((slide, i) => {
    slide.classList.remove('last', 'current', 'next');
    if      (i === prevIndex)    slide.classList.add('last');
    else if (i === currentIndex) slide.classList.add('current');
    else if (i === nextIndex)    slide.classList.add('next');
  });

  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slidesContainer.querySelectorAll('.slide').length;
  showSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slidesContainer.querySelectorAll('.slide').length) % slidesContainer.querySelectorAll('.slide').length;
  showSlide();
}

function stopAutoScroll() {
  if (autoScrollTimer !== null) {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // initial display
  showSlide();

  // start autoscroll
  autoScrollTimer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);

  // pause/resume on hover
  slidesContainer.addEventListener('mouseenter', () => {
    stopAutoScroll();
  });
  slidesContainer.addEventListener('mouseleave', () => {
    if (autoScrollTimer === null) {
      autoScrollTimer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);
    }
  });

  // stop autoscroll when user interacts via nav buttons
  prevButton.addEventListener('click', () => {
    stopAutoScroll();
    prevSlide();
  });
  nextButton.addEventListener('click', () => {
    stopAutoScroll();
    nextSlide();
  });

  // stop autoscroll when user clicks a dot
  dotsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dot')) {
      stopAutoScroll();
      const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
      currentIndex = dots.indexOf(e.target);
      showSlide();
    }
  });
});
