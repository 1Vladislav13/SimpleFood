$(function () {

  $('.header__menu-btn').on('click', function () {
    $('.mobile-menu').toggleClass('mobile-menu--active');
    $('.header').toggleClass('shadow');
    $('body').toggleClass('hidden');
  });

  $('.close').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.header').removeClass('shadow');
    $('body').removeClass('hidden');
    $('.filter').removeClass('filter--active');
  });

  $('.catalog__filter-btn').on('click', function () {
    $('.filter').toggleClass('filter--active');
    $('.header').toggleClass('shadow');
    $('body').toggleClass('hidden');
  });

  $('.tab__link').on('click', function (e) {
    e.preventDefault();
    $('.tab__link').removeClass('current');
    $(this).toggleClass('current');
    $('.tab__content').removeClass('tab__content--active');
    $($(this).attr('href')).toggleClass('tab__content--active');
  });


  



  const mediaQuery = window.matchMedia('(max-width: 769px)')

  if (mediaQuery.matches) {
    $('.restaurant__list').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  } else { }

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

  $('.product__list').slick({
    dots: false,
    prevArrow: '<button type="button" class="slick-prev"><svg class="pagination__icon" width="31" height="31"><use href="./images/symbol-defs.svg#icon-paginationleft"></use></svg><span class="sr-only">смотреть предыдущий отзыв</span></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="pagination__icon" width="31" height="31"><use href="./images/symbol-defs.svg#icon-paginationright"></use></svg><span class="sr-only">смотреть следующий отзыв</span></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: false,
        }

      }
    ],
  });


  $('.interest__list').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow__icon" width="18px" height="18px"><use href="./images/symbol-defs.svg#icon-prev-arrowLeft"></use></svg><span class="sr-only">смотреть предыдущий отзыв</span></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow__icon" width="18px" height="18px"><use href="./images/symbol-defs.svg#icon-prev-arrowRight"></use></svg><span class="sr-only">смотреть следующий отзыв</span></button>',
    appendArrows: $('.interest__arrows'),
    appendDots: $('.interest__dots'),
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });




  let $range = $(".filter-price__input-progress");
  let $inputFrom = $(".filter-price__input-from");
  let $inputTo = $(".filter-price__input-to");
  let instance;
  let min = 0;
  let max = 1100;
  let from = 0;
  let to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs,
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });

  $('.filter-price__input').on('input', function () {
    $(this).val((i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

  $('.product__input').on('input', function () {
    $(this).val((i, v) => Math.max(this.min, Math.min(this.max, v)));
  });

  $('.filter-price__input').styler({
    selectSmartPositioning: false
  });

  $('.catalog__select').styler({
    selectSmartPositioning: false
  });

  $('.product__input').styler({
  });

  $(".star").rateYo({
    rating: 4,
    readOnly: true,
    ratedFill: "#FFB800",
    normalFill: "rgba(193, 193, 193, 0.3)",
    spacing: "6px",
    starWidth: "16px",
    "starSvg": '<svg width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229654 6.16426C0.0780897 5.99454 0.224746 5.87085 0.401307 5.84523L5.36138 5.12445L7.57965 0.629872C7.65859 0.469872 7.82156 0.368591 7.99996 0.368591C8.1784 0.368591 8.34134 0.469872 8.42031 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4364 15.5775L8 13.2451L3.56373 15.5775C3.40576 15.6605 3.21442 15.6467 3.07008 15.5418C2.92574 15.4369 2.85339 15.2592 2.88355 15.0833L3.73095 10.1433L0.141559 6.64472C0.0138092 6.52022 -0.0322227 6.33394 0.0229654 6.16426Z"/></svg>'
  });

  $(".form__star").rateYo({
    fullStar: true,
    ratedFill: "#FFB800",
    normalFill: "rgba(193, 193, 193, 0.3)",
    spacing: "6px",
    starWidth: "16px",
    "starSvg": '<svg width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229654 6.16426C0.0780897 5.99454 0.224746 5.87085 0.401307 5.84523L5.36138 5.12445L7.57965 0.629872C7.65859 0.469872 7.82156 0.368591 7.99996 0.368591C8.1784 0.368591 8.34134 0.469872 8.42031 0.629872L10.6387 5.12445L15.5987 5.84523C15.7752 5.87085 15.9219 5.99454 15.977 6.16422C16.0322 6.33394 15.9862 6.52022 15.8584 6.64475L12.2694 10.1433L13.1165 15.0834C13.1467 15.2593 13.0744 15.4369 12.9301 15.5418C12.8484 15.6012 12.7517 15.6313 12.6545 15.6313C12.5799 15.6313 12.505 15.6136 12.4364 15.5775L8 13.2451L3.56373 15.5775C3.40576 15.6605 3.21442 15.6467 3.07008 15.5418C2.92574 15.4369 2.85339 15.2592 2.88355 15.0833L3.73095 10.1433L0.141559 6.64472C0.0138092 6.52022 -0.0322227 6.33394 0.0229654 6.16426Z"/></svg>'
  });


});

const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
  preload: 2,
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,

  closeButton: "top",

  Carousel: {
    Dots: true,
  },
});

var mixer = mixitup('.category__products');