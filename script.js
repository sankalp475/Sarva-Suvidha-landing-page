

let winWidth = window.innerWidth;
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('header.header');
    // const .
    menuBtn.addEventListener('click', function () {

        if (header.dataset.mobileNavOpen === 'false') {
            header.dataset.mobileNavOpen = true;
            menuBtn.children[0].setAttribute(
                "name",
                "close-outline"
            );
        } else {
            header.dataset.mobileNavOpen = false;
            menuBtn.children[0].setAttribute(
                "name",
                "menu-outline"
            );
        }
    });

    document.addEventListener('scroll', function () {
        if (window.scrollY >= 96) {
            header.dataset.onScroll = true;
        } else {
            header.dataset.onScroll = false;
        }
    });

});

var splide1 = new Splide('.splide1', {
    type: 'loop',
    perPage: (winWidth < 900 && winWidth > 600) ? 2 : (winWidth < 600) ? 1 : 3,
    autoplay: true,
    interval: 9000,
    pauseOnHover: true,
    pauseOnFocus: true,
});

splide1.on('autoplay:playing', function () {
    //   console.log('playing');
});

splide1.on('autoplay:paused', function () {
    //   console.log('paused');
});


var splide2 = new Splide('.splide2', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 9000,
    pauseOnHover: true,
    pauseOnFocus: true,
});

splide1.mount();
splide2.mount();