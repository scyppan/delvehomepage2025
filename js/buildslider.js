// buildslider.js
const images = Array.from({ length: 8 }, (_, i) => `img${i + 1}.jpg`);
let slidesContainer;
let dotsContainer;

function buildslidersection() {
  const slider = document.getElementById('slider')

  slidesContainer = document.createElement('div')
  slidesContainer.id = 'slidesContainer'
  slidesContainer.className = 'slides'
  slider.appendChild(slidesContainer)

  const prevBtn = document.createElement('button')
  prevBtn.className = 'nav prev'
  prevBtn.innerHTML = '&#10094;'
  const nextBtn = document.createElement('button')
  nextBtn.className = 'nav next'
  nextBtn.innerHTML = '&#10095;'
  slider.append(prevBtn, nextBtn)

  prevBtn.addEventListener('click', prevSlide)
  nextBtn.addEventListener('click', nextSlide)

  dotsContainer = document.createElement('div')
  dotsContainer.id = 'dotsContainer'
  dotsContainer.className = 'dots'
  // move dots *outside* the slider
  slider.after(dotsContainer)
}

