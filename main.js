const cssfiles = [
    'slider.css',
    'slider1.css',
    'slider2.css',
    'slider3.css',
    'slider4.css',
    'slider5.css',
    'slider6.css',
    'slider7.css',
    'slider8.css',
    'wordpress.css'
];

const jsfiles = [
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
    buildslidersection();
    buildSlides();
    slider1();
    showSlide();
}

window.initapp = initapp;
