let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    document.body.classList.toggle('menu-open');
})


var bar = new ProgressBar.Line(html, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#414141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' % HTML');
    }
});

bar.animate(0.7);



var bar = new ProgressBar.Line(css, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#414141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' % CSS');
    }
});

bar.animate(0.6);



var bar = new ProgressBar.Line(js, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#414141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' % JavaScript');
    }
});

bar.animate(0.2);



var bar = new ProgressBar.Line(git, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#414141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' % Git');
    }
});

bar.animate(0.6);

var bar = new ProgressBar.Line(python, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#414141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' % Python');
    }
});

bar.animate(0.3);


var bar = new ProgressBar.Line(x1, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#414141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' % React');
    }
});

bar.animate(0.2);



var bar = new ProgressBar.Line(x2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#414141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' % Django');
    }
});

bar.animate(0.1);



var bar = new ProgressBar.Line(x3, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 2400,
    color: '#414141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' % PS');
    }
});

bar.animate(0.8);


