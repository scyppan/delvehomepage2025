// sliderbehavior.js
// Contains slide transition logic
let currentIndex = 0;

function showSlide(slidesContainer, dotsContainer, total) {
  if (currentIndex < 0) currentIndex = total - 1;
  if (currentIndex >= total) currentIndex = 0;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function nextSlide(slidesContainer, dotsContainer, total) {
  currentIndex++;
  showSlide(slidesContainer, dotsContainer, total);
}

function prevSlide(slidesContainer, dotsContainer, total) {
  currentIndex--;
  showSlide(slidesContainer, dotsContainer, total);
}