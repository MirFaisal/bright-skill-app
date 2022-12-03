$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".slider-nav").slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
});
