// buildslider.js

const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);

// Containers will be initialized in buildslidersection
let slidesContainer;
let dotsContainer;

// Builds slider DOM structure and wires nav buttons
function buildslidersection() {
  const slider = document.querySelector('.slider');

  slidesContainer = document.createElement('div');
  slidesContainer.className = 'slides';
  slider.appendChild(slidesContainer);

  const prevBtn = document.createElement('button');
  prevBtn.className = 'nav prev';
  prevBtn.innerHTML = '&#10094;';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'nav next';
  nextBtn.innerHTML = '&#10095;';

  slider.append(prevBtn, nextBtn);

  dotsContainer = document.createElement('div');
  dotsContainer.className = 'dots';
  slider.appendChild(dotsContainer);

  // wire up nav controls
  prevBtn.addEventListener('click', () =>
    prevSlide(slidesContainer, dotsContainer, images.length)
  );
  nextBtn.addEventListener('click', () =>
    nextSlide(slidesContainer, dotsContainer, images.length)
  );
}
