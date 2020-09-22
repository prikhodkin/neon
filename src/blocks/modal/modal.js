//= "./fillModal.js"


const openModal = function (target, modal, callback = () => {}) {
  $(target).on(`click`, function (evt) {
    evt.preventDefault();

    const catalogItem = evt.target.closest(".catalog__item");

    if (catalogItem) {
      const modalI = evt.target.closest(".catalog__item").dataset.id;
      fillModal(modalI);
      $("img.lazy").Lazy();
      $(`.slider__list`).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: true,
        infinite: true,
        fade: true,
        asNavFor: `.slider__sub-list`,
        prevArrow: `.slider__button--prev`,
        nextArrow: `.slider__button--next`
      });

      $(`.slider__sub-list`).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: `.slider__list`,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true
      });

      var slides = $(".slider__list .slick-track > .slick-slide").length;

      if (slides === 4) {
        $('.slider__list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
          $('.slider__sub-list .slick-list .slick-track').css({"transform" : "translate3d(0,0,0)"})
        });
      }
    }




    $(`.overlay`).fadeIn();
    $(modal).fadeIn();
    callback();
  });
};

openModal(`.catalog__item`, `.modal--order`, function () {
  if ($(window).width() < 767) {
    // $(`.page`).addClass(`page--lock`);
  } else {
    $(`.modal--order`).css(`top`, pageYOffset + 100 + `px`);
  }
  $(`.slider__list`).slick(`reinit`);
  $(`.slider__sub-list`).slick(`reinit`);
});

openModal(`.delivery__button, .features__link`, `.modal--callback`, function () {
  // if ($(window).width() < 767) {
  //   $(`.page`).addClass(`page--lock`);
  //   // $(`.modal--callback`).css(`top`, pageYOffset + 0 + `px`);
  // }
});

$(`.modal__close`).on(`click`, function () {
  $(`.overlay`).fadeOut();
  $(`.modal`).fadeOut();
  $(`.page`).removeClass(`page--lock`);
  deleteModalInfo();

});
