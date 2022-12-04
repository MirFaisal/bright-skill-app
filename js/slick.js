$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
  autoplay: true,
  autoplaySpeed: 2000,
});
$(".slider-nav").slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});
