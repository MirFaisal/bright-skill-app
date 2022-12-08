$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },
    },
  ],
});
$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: ".slider-nav",
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
      },
    },
  ],
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
  autoplaySpeed: 3500,
});
//
