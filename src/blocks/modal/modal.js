//= "./fillModal.js"


const openModal = function (target, modal, callback = () => {}) {
  $(target).on(`click`, function (evt) {
    evt.preventDefault();

    const modalI = evt.target.closest("a").dataset.id;
    document.querySelector(".order").insertAdjacentHTML('afterbegin', fillModal(modalI));

    $(`.slider__list`).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
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
  deleteModalInfo();

});
