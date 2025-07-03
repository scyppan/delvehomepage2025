// sliderbehavior.js

let currentIndex = 0;
let autoScrollTimer = null;
const AUTO_SCROLL_INTERVAL = 5000;

// core carousel logic, always re-fetch containers by ID
function showSlide() {
  const slidesContainer = document.getElementById('slidesContainer');
  const dotsContainer   = document.getElementById('dotsContainer');
  if (!slidesContainer || !dotsContainer) return;

  const slides = slidesContainer.querySelectorAll('.slide');
  const total  = slides.length;
  if (!total) return;

  // wrap index
  if (currentIndex < 0)       currentIndex = total - 1;
  if (currentIndex >= total)  currentIndex = 0;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  slides.forEach((slide, i) => {
    slide.classList.remove('last','current','next');
    if      (i === prevIndex)    slide.classList.add('last');
    else if (i === currentIndex) slide.classList.add('current');
    else if (i === nextIndex)    slide.classList.add('next');
  });

  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot,i) => dot.classList.toggle('active', i === currentIndex));
}

function nextSlide() {
  const slidesContainer = document.getElementById('slidesContainer');
  const total = slidesContainer.querySelectorAll('.slide').length;
  currentIndex = (currentIndex + 1) % total;
  showSlide();
}

function prevSlide() {
  const slidesContainer = document.getElementById('slidesContainer');
  const total = slidesContainer.querySelectorAll('.slide').length;
  currentIndex = (currentIndex - 1 + total) % total;
  showSlide();
}

function stopAutoScroll() {
  if (autoScrollTimer) {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  }
}

// this must be called only once the slider HTML & dots exist
function initSliderBehavior() {
  // 1) initial paint
  showSlide();

  // 2) start auto-scroll
  autoScrollTimer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);

  // 3) grab references now that markup is in place
  const slidesContainer = document.getElementById('slidesContainer');
  const dotsContainer   = document.getElementById('dotsContainer');
  const prevBtn         = document.querySelector('.nav.prev');
  const nextBtn         = document.querySelector('.nav.next');

  // 4) pause on hover
  slidesContainer.addEventListener('mouseenter', stopAutoScroll);
  slidesContainer.addEventListener('mouseleave', () => {
    if (!autoScrollTimer) autoScrollTimer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);
  });

  // 5) stop scrolling if user clicks nav
  prevBtn.addEventListener('click', () => { stopAutoScroll(); prevSlide(); });
  nextBtn.addEventListener('click', () => { stopAutoScroll(); nextSlide(); });

  // 6) stop scrolling if user clicks a dot
  dotsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dot')) {
      stopAutoScroll();
      const allDots = Array.from(dotsContainer.querySelectorAll('.dot'));
      currentIndex = allDots.indexOf(e.target);
      showSlide();
    }
  });
}
