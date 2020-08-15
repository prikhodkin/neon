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


function textAreaAdjust(element) {
  element.style.height = `1px`;
  element.style.height = (25 + element.scrollHeight) + `px`;
}


$(`a[href^='#']`).click(function () {
  let _href = $(this).attr(`href`);
  $(`html, body`).animate({scrollTop: $(_href).offset().top + `px`});
  return false;
});
$(`.slider__list`).slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: `.slider__sub-list`
});

$(`.slider__sub-list`).slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: `.slider__list`,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  infinite: true,
  prevArrow: `.slider__button--prev`,
  nextArrow: `.slider__button--next`
});

$(`.products__button`).on(`click`, function (evt) {
  evt.preventDefault();
  $(`.overlay`).fadeIn();
  $(`.modal--order`).fadeIn();
  $(`.modal--order`).css(`top`, pageYOffset + 50 + `px`);
  $(`.slider__list`).slick(`reinit`);
  $(`.slider__sub-list`).slick(`reinit`);

});

$(`.modal__close`).on(`click`, function () {
  $(`.overlay`).fadeOut();
  $(`.modal`).fadeOut();
});

$(`.delivery__button`).on(`click`, function (evt) {
  evt.preventDefault();
  $(`.overlay`).fadeIn();
  $(`.modal--callback`).fadeIn();
  $(`.modal--callback`).css(`top`, pageYOffset + 300 + `px`);
});

$(`.features__link`).on(`click`, function (evt) {
  evt.preventDefault();
  $(`.overlay`).fadeIn();
  $(`.modal--callback`).fadeIn();
  $(`.modal--callback`).css(`top`, pageYOffset + 300 + `px`);
});
