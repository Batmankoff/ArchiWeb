$(function () {
  
  $('.menu__btn,.menu a').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body, html").animate({
      scrollTop: top
    }, 1000);
  });

  $(".top-slider__items").slick({
    prevArrow: '<button type="button" class="slick-prev"> <img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"> <img src="images/arrow-right.svg" alt="arrow-right"></button>',
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".testimonial__items").slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
    breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       }
    }]
  });
  var mixer = mixitup(".projects__content ");
});