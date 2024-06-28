const colorMap = {
    1: '#0b0746',
    2: '#0ee24e',
    3: '#ff5733',
    4: '#ffc300',
    5: '#9b59b6',
    6: '#3498db'
};

function updateSlide(target) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    document.querySelectorAll('.content-' + target).forEach(content => {
        content.classList.add('active');
    });

    let leftColorClass = 'color-' + target;
    let leftElement = document.querySelector('.content-left');
    let rightElement = document.querySelector('.content-right');

    leftElement.className = 'content-left ' + leftColorClass;
    rightElement.className = 'content-right ' + leftColorClass;

    document.body.style.backgroundColor = colorMap[target];

    anime({
        targets: '.content-left .content.active, .content-right .content.active img',
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
    });
}

document.querySelectorAll('.path-slider__item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        let target = this.getAttribute('data-target');
        updateSlide(target);
    });
});

let touchstartX = 0;
let touchendX = 0;

function handleGesture() {
    if (touchendX < touchstartX) {
        navigateSlide('next');
    }
    if (touchendX > touchstartX) {
        navigateSlide('prev');
    }
}

document.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
}, false);

function navigateSlide(direction) {
    let activeSlide = document.querySelector('.path-slider__item .active');
    let activeIndex = activeSlide ? parseInt(activeSlide.getAttribute('data-target')) : 1;
    let newIndex;

    if (direction === 'next') {
        newIndex = (activeIndex % 6) + 1;
    } else if (direction === 'prev') {
        newIndex = activeIndex - 1 === 0 ? 6 : activeIndex - 1;
    }

    document.querySelector(`.path-slider__item--${newIndex}`).click();
}
