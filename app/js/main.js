$(function () {


  $('.header__menu-btn').on('click', function () {
    $('.mobile-menu').toggleClass('mobile-menu--active');
  });

  $('.mobile-menu__btn').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
  });

  const mediaQuery = window.matchMedia('(max-width: 769px)')

  if (mediaQuery.matches) {
    $('.restaurant__list').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  } else {
    
  }


  // $('.restaurant__list').slick({

  //   responsive: [
  //     {
  //       breakpoint: 2048,
  //       settings:
  //         "unslick"
  //     },
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         arrows: false,
  //         dots: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     }
  //   ],

  // });



  $('.reviews__wrapper').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow__icon" width="18px" height="18px"><use href="./images/symbol-defs.svg#icon-prev-arrowLeft"></use></svg><span class="sr-only">смотреть предыдущий отзыв</span></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow__icon" width="18px" height="18px"><use href="./images/symbol-defs.svg#icon-prev-arrowRight"></use></svg><span class="sr-only">смотреть следующий отзыв</span></button>',

    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: true,
          dots: false,
        }
      }
    ],
  });

});

var mixer = mixitup('.category__products');