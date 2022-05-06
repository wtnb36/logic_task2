$(function () {
  $('.main_visual_slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1500,
    slidesToShow: 1,
    dots: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });
});