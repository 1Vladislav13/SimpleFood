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

  $('.filter-price__input').styler({
    selectSmartPositioning: false
  });
  $('.catalog__select').styler({
    selectSmartPositioning: false
  });

});

var mixer = mixitup('.category__products');