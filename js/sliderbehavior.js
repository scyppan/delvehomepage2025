// sliderbehavior.js
let currentIndex = 0;

function showSlide() {
  const total = images.length;
  if (currentIndex < 0) currentIndex = total - 1;
  if (currentIndex >= total) currentIndex = 0;

  // remove old index class
  slidesContainer.classList.forEach(cls => {
    if (cls.startsWith('show-')) slidesContainer.classList.remove(cls);
  });
  // add new index class
  slidesContainer.classList.add(`show-${currentIndex}`);

  dotsContainer.querySelectorAll('.dot').forEach((dot, i) =>
    dot.classList.toggle('active', i === currentIndex)
  );
}

function nextSlide() {
  currentIndex++;
  showSlide();
}

function prevSlide() {
  currentIndex--;
  showSlide();
}
