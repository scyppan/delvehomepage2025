function buildSlides() {
  slidesContainer.innerHTML = ''
  dotsContainer.innerHTML = ''

  images.forEach((_, i) => {
    const slide = document.createElement('div')
    slide.className = 'slide'
    slide.id = `slide-${i + 1}`
    slidesContainer.append(slide)

    const dot = document.createElement('span')
    dot.className = 'dot'
    dot.addEventListener('click', () => {
      currentIndex = i
      showSlide()
    })
    dotsContainer.append(dot)
  })

  slider1();
  slider2();
  slider3();
  slider4();
  slider5();
  slider6();
  slider7();
  slider8();
}

function slider1() {
  const slide = document.getElementById('slide-1');
  if (!slide) return;

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
}

function slider2() {
  const slide = document.getElementById('slide-2')
  if (!slide) return

  // Book a consultation button (blue)
  const bookBtn = document.createElement('a')
  bookBtn.href = 'https://delvepsych.com/start-your-journey/'
  bookBtn.target = '_blank'
  bookBtn.rel = 'noopener noreferrer'
  bookBtn.className = 'slider2-book btn-primary'
  bookBtn.textContent = 'Book a consultation'
  slide.append(bookBtn)

  // Meet our team button (blue)
  const teamBtn = document.createElement('a')
  teamBtn.href = 'https://delvepsych.com/team/'
  teamBtn.target = '_blank'
  teamBtn.rel = 'noopener noreferrer'
  teamBtn.className = 'slider2-team btn-primary'
  teamBtn.textContent = 'Meet our team'
  slide.append(teamBtn)
}

function slider3() {
  const slide = document.getElementById('slide-3')
  if (!slide) return

  slide.innerHTML = ''

  // header lines
  const header1 = document.createElement('h1')
  header1.className = 'slider3-header'
  header1.textContent = 'We will work with you to make therapy affordable'
  slide.append(header1)

  const header2 = document.createElement('h1')
  header2.className = 'slider3-subheader'
  header2.textContent = 'We do not want cost to be the barrier to high quality care'
  slide.append(header2)

  // bullet list
  const listContainer = document.createElement('div')
  listContainer.className = 'slider3-list-container'
  const ul = document.createElement('ul')
  ul.className = 'slider3-list'
  const items = [
    'Flexible billing options',
    'Low fee services',
    'In network with most BCBS, Aetna, United and Cigna PPO plans'
  ]
  items.forEach(text => {
    const li = document.createElement('li')
    li.textContent = text
    ul.append(li)
  })
  listContainer.append(ul)
  slide.append(listContainer)

  // book now button
  const bookBtn = document.createElement('a')
  bookBtn.href = 'https://delvepsych.com/start-your-journey/'
  bookBtn.target = '_blank'
  bookBtn.rel = 'noopener noreferrer'
  bookBtn.className = 'slider3-book btn-primary'
  bookBtn.textContent = 'Book now'
  slide.append(bookBtn)
}

function slider4() {
  const slide = document.getElementById('slide-4')
  if (!slide) return

  const podcast = document.createElement('a')
  podcast.href = 'https://open.spotify.com/show/4hlpFCh39SW86sfsL9GOdU'
  podcast.target = '_blank'
  podcast.rel = 'noopener noreferrer'
  podcast.className = 'slider4-btn slider4-podcast'
  podcast.textContent = 'We have a podcast!'
  slide.append(podcast)

  const blog = document.createElement('a')
  blog.href = 'https://delvepsych.substack.com/'
  blog.target = '_blank'
  blog.rel = 'noopener noreferrer'
  blog.className = 'slider4-btn slider4-blog'
  blog.textContent = 'We have a blog!'
  slide.append(blog)

  const journey = document.createElement('a')
  journey.href = 'https://delvepsych.com/start-your-journey/'
  journey.target = '_blank'
  journey.rel = 'noopener noreferrer'
  journey.className = 'slider4-btn slider4-journey'
  journey.textContent = 'Start your journey with us'
  slide.append(journey)
}

function slider5() {
  const slide = document.getElementById('slide-5')
  if (!slide) return
  slide.innerHTML = ''

  const ulBtn = document.createElement('a')
  ulBtn.href = 'https://delvepsych.com/couples-therapy/'
  ulBtn.target = '_blank'
  ulBtn.rel = 'noopener noreferrer'
  ulBtn.className = 'slider5-upper-btn slider5-upper-left'
  ulBtn.textContent = 'Couples Therapy Options'
  slide.append(ulBtn)

  const urBtn = document.createElement('a')
  urBtn.href = 'https://delvepsych.com/relationships-group/'
  urBtn.target = '_blank'
  urBtn.rel = 'noopener noreferrer'
  urBtn.className = 'slider5-upper-btn slider5-upper-right'
  urBtn.textContent = 'Dating & Relationship Group'
  slide.append(urBtn)

  const breakupLink = document.createElement('a')
  breakupLink.href = 'https://delvepsych.com/support-after-breakup/'
  breakupLink.target = '_blank'
  breakupLink.rel = 'noopener noreferrer'
  breakupLink.className = 'slider5-link slider5-lower-left'
  breakupLink.textContent = 'Learn about healing after a breakup'
  slide.append(breakupLink)

  const couplesLink = document.createElement('a')
  couplesLink.href = 'https://delvepsych.com/couples-therapy/'
  couplesLink.target = '_blank'
  couplesLink.rel = 'noopener noreferrer'
  couplesLink.className = 'slider5-link slider5-lower-right'
  couplesLink.textContent = 'Learn about our couples therapy options'
  slide.append(couplesLink)

  const title = document.createElement('h1')
  title.className = 'slider5-header'
  title.textContent = 'Your love life is our specialty!'
  slide.append(title)
}

// in indvsliders.js
function slider6() {
  const slide = document.getElementById('slide-6')
  if (!slide) return
  slide.innerHTML = ''

  // Immediate availability button
  const availBtn = document.createElement('a')
  availBtn.href = 'https://delvepsych.com/start-your-journey/'
  availBtn.target = '_blank'
  availBtn.rel = 'noopener noreferrer'
  availBtn.className = 'slider6-availability'
  availBtn.textContent = 'Immediate availability'
  slide.append(availBtn)

  // Title like before
  const title = document.createElement('h1')
  title.className = 'slider6-title'
  title.textContent = 'Our team of passionate and experienced clinicians is eager to support you'
  slide.append(title)
}

// indvsliders.js
function slider7() {
  const slide = document.getElementById('slide-7')
  if (!slide) return
  slide.innerHTML = ''

  // Centered main text
  const title1 = document.createElement('h1')
  title1.className = 'slider7-main-1'
  title1.textContent = 'We love love in all its configurations'
  slide.append(title1)

  const title2 = document.createElement('h1')
  title2.className = 'slider7-main-2'
  title2.textContent = 'We love people however they identify'
  slide.append(title2)

  // Lower-left panel
  const left = document.createElement('div')
  left.className = 'slider7-lower-left'
  left.textContent = 'All of our staff are allies of the LGBTQIA+ community'
  slide.append(left)

  // Lower-right panel
  const right = document.createElement('div')
  right.className = 'slider7-lower-right'
  right.innerHTML = 'We have queer-identified staff<br>We can support you in gender transitions'
  slide.append(right)

  // Schedule now button
  const btn = document.createElement('a')
  btn.href = 'https://delvepsych.com/start-your-journey/'
  btn.target = '_blank'
  btn.rel = 'noopener noreferrer'
  btn.className = 'slider7-schedule'
  btn.textContent = 'Schedule now'
  slide.append(btn)
}

// in indvsliders.js
function slider8() {
  const slide = document.getElementById('slide-8')
  if (!slide) return
  slide.innerHTML = ''

  // Title at top center
  const header = document.createElement('h1')
  header.className = 'slider8-header'
  header.textContent = "We're passionate about the value of group therapy"
  slide.append(header)

  // Consult button lower left
  const consult = document.createElement('a')
  consult.href = 'https://delvepsych.com/start-your-journey/'
  consult.target = '_blank'
  consult.rel = 'noopener noreferrer'
  consult.className = 'slider8-consult btn-primary'
  consult.textContent = 'Consult with us!'
  slide.append(consult)

  // List of groups lower right
  const listContainer = document.createElement('div')
  listContainer.className = 'slider8-list-container'
  const ul = document.createElement('ul')
  ul.className = 'slider8-list'
  ;[
    "Men's Group",
    'Dating Group',
    "Mom's Group",
    "Actors Group"
  ].forEach(text => {
    const li = document.createElement('li')
    li.textContent = text
    ul.append(li)
  })
  listContainer.append(ul)
  slide.append(listContainer)
}

