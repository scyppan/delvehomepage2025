// sliderbehavior.js
let currentIndex = 0

function showSlide() {
  const slides = slidesContainer.querySelectorAll('.slide')
  const total = slides.length
  if (total === 0) return

  if (currentIndex < 0) currentIndex = total - 1
  if (currentIndex >= total) currentIndex = 0

  const prevIndex = (currentIndex - 1 + total) % total
  const nextIndex = (currentIndex + 1) % total

  slides.forEach((slide, i) => {
    slide.classList.remove('last', 'current', 'next')
    if (i === prevIndex) slide.classList.add('last')
    if (i === currentIndex) slide.classList.add('current')
    if (i === nextIndex) slide.classList.add('next')
  })

  const dots = dotsContainer.querySelectorAll('.dot')
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex)
  })
}

function nextSlide() {
  const total = slidesContainer.querySelectorAll('.slide').length
  currentIndex = (currentIndex + 1) % total
  showSlide()
}

function prevSlide() {
  const total = slidesContainer.querySelectorAll('.slide').length
  currentIndex = (currentIndex - 1 + total) % total
  showSlide()
}
