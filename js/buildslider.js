const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);

// Containers will be initialized in buildSliderSection
let slidesContainer;
let dotsContainer;

// Builds slider DOM structure (no behavior)
function buildSliderSection() {
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
}
