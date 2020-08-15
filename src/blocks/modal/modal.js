const openModal = function (target, modal, callback = () => {}) {
  $(target).on(`click`, function (evt) {
    evt.preventDefault();
    $(`.overlay`).fadeIn();
    $(modal).fadeIn();
    callback();
  });
};

openModal(`.products__button`, `.modal--order`, function () {
  if ($(window).width() < 767) {
    $(`.page`).addClass(`page--lock`);
  } else {
    $(`.modal--order`).css(`top`, pageYOffset + 100 + `px`);
  }
  $(`.slider__list`).slick(`reinit`);
  $(`.slider__sub-list`).slick(`reinit`);
});

openModal(`.delivery__button, .features__link`, `.modal--callback`, function () {
  if ($(window).width() < 767) {
    $(`.page`).addClass(`page--lock`);
    // $(`.modal--callback`).css(`top`, pageYOffset + 0 + `px`);
  }
});

$(`.modal__close`).on(`click`, function () {
  $(`.overlay`).fadeOut();
  $(`.modal`).fadeOut();
  $(`.page`).removeClass(`page--lock`);

});
