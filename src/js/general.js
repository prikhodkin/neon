// eslint-disable-next-line spaced-comment
//= "../blocks/tab/tab.js"

$(`.reviews__ins .reviews__list`).slick({
  dots: false,
  nextArrow: `.reviews__ins .reviews__button--next`,
  prevArrow: `.reviews__ins .reviews__button--prev`
});


$(`.reviews__vk .reviews__list`).slick({
  dots: false,
  nextArrow: `.reviews__vk .reviews__button--next`,
  prevArrow: `.reviews__vk .reviews__button--prev`
});

$(`.faq__control`).on(`click`, function () {
  $(this).parent().toggleClass(`faq__item--active`);
});

