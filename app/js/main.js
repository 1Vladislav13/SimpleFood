$(function () {

  $('.reviews__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-arrow__icon" width="18px" height="18px"><use href="./images/symbol-defs.svg#icon-prev-arrowLeft"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-arrow__icon" width="18px" height="18px"><use href="./images/symbol-defs.svg#icon-prev-arrowRight"></use></svg></button>'
  });

});

var mixer = mixitup('.category__products');