const bar = document.querySelector('#bar');
const nav = document.querySelector('#navbar');

bar.onclick = () => {
    bar.classList.toggle('fa-times');
    nav.classList.toggle('active')
}
var swiper = new Swiper(".container", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});