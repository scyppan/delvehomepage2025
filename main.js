const cssfiles = [
  // code slider base + breakpoints
  'slider/slider-base.css',
  'slider/slider-480.css',
  'slider/slider-768.css',
  'slider/slider-1024.css',
  'slider/slider-1440.css',
  'slider/slider-1920.css',

  // slider1 base + breakpoints
  'slider1/slider1-base.css',
  'slider1/slider1-480.css',
  'slider1/slider1-768.css',
  'slider1/slider1-1024.css',
  'slider1/slider1-1440.css',
  'slider1/slider1-1920.css',

  // slider2 base + breakpoints
  'slider2/slider2-base.css',
  'slider2/slider2-480.css',
  'slider2/slider2-768.css',
  'slider2/slider2-1024.css',
  'slider2/slider2-1440.css',
  'slider2/slider2-1920.css',

  // slider3 base + breakpoints
  'slider3/slider3-base.css',
  'slider3/slider3-480.css',
  'slider3/slider3-768.css',
  'slider3/slider3-1024.css',
  'slider3/slider3-1440.css',
  'slider3/slider3-1920.css',

  // slider4 base + breakpoints
  'slider4/slider4-base.css',
  'slider4/slider4-480.css',
  'slider4/slider4-768.css',
  'slider4/slider4-1024.css',
  'slider4/slider4-1440.css',
  'slider4/slider4-1920.css',

  // slider5 base + breakpoints
  'slider5/slider5-base.css',
  'slider5/slider5-480.css',
  'slider5/slider5-768.css',
  'slider5/slider5-1024.css',
  'slider5/slider5-1440.css',
  'slider5/slider5-1920.css',

  // slider6 base + breakpoints
  'slider6/slider6-base.css',
  'slider6/slider6-480.css',
  'slider6/slider6-768.css',
  'slider6/slider6-1024.css',
  'slider6/slider6-1440.css',
  'slider6/slider6-1920.css',

  // slider7 base + breakpoints
  'slider7/slider7-base.css',
  'slider7/slider7-480.css',
  'slider7/slider7-768.css',
  'slider7/slider7-1024.css',
  'slider7/slider7-1440.css',
  'slider7/slider7-1920.css',

  // slider8 base + (add breakpoints when ready)
  'slider8/slider8-base.css',
  'slider8/slider8-480.css',
  'slider8/slider8-768.css',
  'slider8/slider8-1024.css',
  'slider8/slider8-1440.css',
  'slider8/slider8-1920.css'
];


const jsfiles = [
    'wordpress.js',
    'buildslider.js',
    'indvsliders.js',
    'sliderbehavior.js'
];

function loadAssets(baseUrl, version) {
    return new Promise((resolve, reject) => {
        const head = document.head;
        const prefix = `${baseUrl}@${version}/`;
        const total = cssfiles.length + jsfiles.length;
        let loaded = 0;

        if (!total) {
            resolve();
            return;
        }

        function checkDone() {
            if (++loaded === total) resolve();
        }

        cssfiles.forEach(file => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${prefix}css/${file}`;
            link.onload = checkDone;
            link.onerror = reject;
            head.appendChild(link);
        });

        jsfiles.forEach(file => {
            const script = document.createElement('script');
            script.src = `${prefix}js/${file}`;
            script.defer = true;
            script.onload = checkDone;
            script.onerror = reject;
            head.appendChild(script);
        });
    });
}

async function initapp(baseUrl, version) {
    await loadAssets(baseUrl, version);
    console.log('all assets loaded');
    buildsection();
    buildslidersection();
    buildSlides();
    slider1();
    showSlide();
}

window.initapp = initapp;
