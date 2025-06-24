// indvsliders.js

// build both slides once
function buildallsliders() {
  
  slider1();
  slider2();

  // dots
  dotsContainer.innerHTML = '';
  sliderFunctions.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide();
    });
    dotsContainer.append(dot);
  });
}

function slider1() {
  const slide = document.createElement('div');
  slide.className = 'slide slide--first';

  const title = document.createElement('h1');
  title.className = 'slider1-title';
  title.textContent = 'We take a deeper approach to therapy';
  slide.append(title);

  const schedule = document.createElement('a');
  schedule.href = 'https://delvepsych.com/start-your-journey/';
  schedule.target = '_blank';
  schedule.rel = 'noopener noreferrer';
  schedule.className = 'slider1-schedule btn-primary';
  schedule.textContent = 'Schedule Today';
  slide.append(schedule);

  const learn = document.createElement('a');
  learn.href = 'https://delvepsych.substack.com/p/what-is-depth-therapy-anyway';
  learn.target = '_blank';
  learn.rel = 'noopener noreferrer';
  learn.className = 'slider1-learn btn-secondary';
  learn.textContent = 'Our Philosophy';
  slide.append(learn);

  slidesContainer.append(slide);
}

function slider2() {
  const slide = document.createElement('div');
  slide.className = 'slide slide--second';

  const title = document.createElement('h1');
  title.className = 'slider2-title';
  title.textContent = 'meet our team';
  slide.append(title);

  const schedule = document.createElement('a');
  schedule.href = 'https://delvepsych.com/start-your-journey/';
  schedule.target = '_blank';
  schedule.rel = 'noopener noreferrer';
  schedule.className = 'slider2-schedule btn-primary';
  schedule.textContent = 'Schedule Today';
  slide.append(schedule);

  slidesContainer.append(slide);
}

// order matters
const sliderFunctions = [ slider1, slider2 ];
