// sliderbehavior.js

let currentIndex    = 0;
let autoScrollTimer = null;
const AUTO_SCROLL_INTERVAL = 6000;  // ← changed to 7.5s
let seenSlides      = [];

function showSlide() {
  const slidesContainer = document.getElementById('slidesContainer');
  const dotsContainer   = document.getElementById('dotsContainer');
  if (!slidesContainer || !dotsContainer) return;

  const slides = slidesContainer.querySelectorAll('.slide');
  const total  = slides.length;
  if (!total) return;

  // clamp currentIndex
  if (currentIndex < 0)       currentIndex = total - 1;
  if (currentIndex >= total)  currentIndex = 0;

  // update classes
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  slides.forEach((slide,i) => {
    slide.classList.remove('last','current','next');
    if      (i===prevIndex)    slide.classList.add('last');
    else if (i===currentIndex) slide.classList.add('current');
    else if (i===nextIndex)    slide.classList.add('next');
  });

  // update dots
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot,i) => dot.classList.toggle('active', i===currentIndex));
}

// pick a random unseen index, resetting when exhausted
function getRandomIndex(total) {
  // once we've shown all slides, reset leaving currentIndex as the only seen
  if (seenSlides.length >= total) {
    seenSlides = [ currentIndex ];
  }
  // build list of unseen
  const remaining = Array.from({length: total},(_,i)=>i)
                         .filter(i => !seenSlides.includes(i));
  // pick one at random
  const pick = remaining[ Math.floor(Math.random()*remaining.length) ];
  seenSlides.push(pick);
  return pick;
}

function nextSlide() {
  const slidesContainer = document.getElementById('slidesContainer');
  const total = slidesContainer.querySelectorAll('.slide').length;
  currentIndex = getRandomIndex(total);
  showSlide();
}

function prevSlide() {
  // leave prevSlide in order (optional)
  const slidesContainer = document.getElementById('slidesContainer');
  const total = slidesContainer.querySelectorAll('.slide').length;
  currentIndex = (currentIndex - 1 + total) % total;
  showSlide();
}

function stopAutoScroll() {
  if (autoScrollTimer !== null) {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  }
}

function initSliderBehavior() {
  // seed first slide
  const slidesContainer = document.getElementById('slidesContainer');
  const total = slidesContainer.querySelectorAll('.slide').length;
  seenSlides = [ currentIndex ];
  showSlide();

  // start auto-scroll
  autoScrollTimer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);

  // grab controls
  const dotsContainer = document.getElementById('dotsContainer');
  const prevBtn       = document.querySelector('.nav.prev');
  const nextBtn       = document.querySelector('.nav.next');

  // pause on hover
  slidesContainer.addEventListener('mouseenter', stopAutoScroll);
  slidesContainer.addEventListener('mouseleave', () => {
    if (autoScrollTimer === null) {
      autoScrollTimer = setInterval(nextSlide, AUTO_SCROLL_INTERVAL);
    }
  });

  // manual nav stops auto
  prevBtn.addEventListener('click', () => {
    stopAutoScroll();
    prevSlide();
  });
  nextBtn.addEventListener('click', () => {
    stopAutoScroll();
    nextSlide();
  });

  // dot clicks stop auto and jump
  dotsContainer.addEventListener('click', e => {
    if (!e.target.classList.contains('dot')) return;
    stopAutoScroll();
    const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
    currentIndex = dots.indexOf(e.target);
    showSlide();
  });
}