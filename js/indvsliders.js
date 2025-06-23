function slider1() {
  const slider = document.querySelector('.slider');
  slider.classList.add('slider1');

  if (!slidesContainer || !dotsContainer) buildSliderSection();

  const src = images[0];
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.style.backgroundImage = `url('${src}')`;

  // 1. Title (upper left)
  const title = document.createElement('h1');
  title.className = 'slider1-title';
  title.textContent = 'We take a deeper approach to therapy';
  slide.append(title);

  // 2. Schedule CTA (over left shoulder)
  const schedule = document.createElement('a');
  schedule.href = '#contact';
  schedule.className = 'slider1-schedule btn-primary';
  schedule.textContent = 'Schedule Today';
  slide.append(schedule);

  // 3. Learn CTA (over right shoulder)
  const learn = document.createElement('a');
  learn.href = '#philosophy';
  learn.className = 'slider1-learn btn-secondary';
  learn.textContent = 'Learn Our Philosophy';
  slide.append(learn);

  slidesContainer.append(slide);

  const dot = document.createElement('span');
  dot.className = 'dot';
  dotsContainer.append(dot);
}
