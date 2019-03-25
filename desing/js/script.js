$('.main-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  // infinite: true,
  nextArrow: '<div class="arrow arrow_right"></div>',
  prevArrow: '<div class="arrow arrow_left"></div>',
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // infinite: true,
        // dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
$(document).ready(function () {
  var link = $('.menu-link');
  var link_active = $('.header-menu__text');
  var menu = $('.header');

  link.click(function () {
    link.toggleClass('header-menu__text');
    menu.toggleClass('menu_active');
  });
  link_active.click(function () {
    link.removeClass('header-menu__text');
  });
});    
// $(document).ready(function () {
//   $(".phone").mask("+380 (999) 99-99-999");
// }); 

