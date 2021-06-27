const navShowBtn = document.getElementById('open-btn');
const sideNav = document.getElementById('side-nav');
const navCloseBtn = document.getElementById('close-btn');

navShowBtn.addEventListener('click', () => {
  sideNav.style = "width: 350px; z-index: 9995";
})

navCloseBtn.addEventListener('click', () => {
  sideNav.style = "width:0px";
})



$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-angle-double-left"></i></button>`,
  nextArrow: `<button type="button" class="slick-next"><i class="fas fa-angle-double-right"></i></button>`
});

$('.banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<button type="button" class="slick-prev"><i class="fas fa-angle-double-left"></i></button>`,
  nextArrow: `<button type="button" class="slick-next"><i class="fas fa-angle-double-right"></i></button>`
});