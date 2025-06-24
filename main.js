const cssfiles = [
  'slider.css',
  // slider1 breakpointed styles:
  'slider1/slider1-base.css',
  'slider1/slider1-480.css',
  'slider1/slider1-768.css',
  'slider1/slider1-1024.css',
  'slider1/slider1-1440.css',
  'slider1/slider1-1920.css',
  // slider2 base + breakpoints:
  'slider2.css',
  'slider2-480.css',
  'slider2-768.css',
  'slider2-1024.css',
  'slider2-1440.css',
  'slider2-1920.css',
  // the rest of your sliders
  'slider3.css',
  'slider4.css',
  'slider5.css',
  'slider6.css',
  'slider7.css',
  'slider8.css',
  'wordpress.css'
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
