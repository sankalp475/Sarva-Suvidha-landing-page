

let winWidth = window.innerWidth;
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const header = document.querySelector('header.header');
    // const .
    menuBtn.addEventListener('click', function () {

        {/*<ion-icon name=""></ion-icon>*/ }
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


});
var splide = new Splide('.splide', {
    type: 'loop',
    autoplay: 'pause',
    perPage: (winWidth < 900 && winWidth > 600) ? 2 : (winWidth < 600) ? 1 : 3,
});


splide.on('autoplay:playing', function (rate) {
    console.log(rate); // 0-1
});
splide.mount();