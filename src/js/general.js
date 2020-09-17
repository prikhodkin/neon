// eslint-disable-next-line spaced-comment
//= "../blocks/catalog/catalog.js"
//= "../blocks/tab/tab.js"
//= "../blocks/modal/modal.js"
//= "../blocks/form/form.js"

$(`.reviews__ins .reviews__list`).slick({
  slidesToShow: 3,
  infinite: true,
  dots: false,
  nextArrow: `.reviews__ins .reviews__button--next`,
  prevArrow: `.reviews__ins .reviews__button--prev`,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$(`.reviews__vk .reviews__list`).slick({
  dots: false,
  nextArrow: `.reviews__vk .reviews__button--next`,
  prevArrow: `.reviews__vk .reviews__button--prev`
});

$(`.faq__control`).on(`click`, function () {
  $(this).parent().toggleClass(`faq__item--active`);
});


function textAreaAdjust(element) {
  element.style.height = `1px`;
  element.style.height = (25 + element.scrollHeight) + `px`;
}


$(`a[href^='#']`).click(function () {
  let _href = $(this).attr(`href`);
  $(`html, body`).animate({scrollTop: $(_href).offset().top + `px`});
  return false;
});
// $(`.slider__list`).slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   infinite: true,
//   fade: true,
//   asNavFor: `.slider__sub-list`
// });

// $(`.slider__sub-list`).slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   asNavFor: `.slider__list`,
//   dots: false,
//   centerMode: false,
//   focusOnSelect: true,
//   infinite: true,
//   prevArrow: `.slider__button--prev`,
//   nextArrow: `.slider__button--next`
// });
