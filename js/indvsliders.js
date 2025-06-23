// indvsliders.js
function slider1() {
  const slider = document.querySelector('.slider');
  slider.classList.add('slider1');

  if (!slidesContainer || !dotsContainer) buildslidersection();

  const slide = document.createElement('div');
  slide.className = 'slide slide--first';

  const title = document.createElement('h1');
  title.className = 'slider1-title';
  title.textContent = 'We take a deeper approach to therapy';
  slide.append(title);

  const schedule = document.createElement('a');
  schedule.href = '#contact';
  schedule.className = 'slider1-schedule btn-primary';
  schedule.textContent = 'Schedule Today';
  slide.append(schedule);

  const learn = document.createElement('a');
  learn.href = '#philosophy';
  learn.className = 'slider1-learn btn-secondary';
  learn.textContent = 'Learn Our Philosophy';
  slide.append(learn);

  slidesContainer.append(slide);

  const dot = document.createElement('span');
  dot.className = 'dot';
  dotsContainer.append(dot);

  showSlide();
}
