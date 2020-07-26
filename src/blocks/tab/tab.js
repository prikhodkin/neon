/* eslint-disable no-undef */
const tabs = document.querySelectorAll(`[data-tab]`);
const tabsContent = document.querySelectorAll(`[data-content]`);
const tabsReviews = document.querySelectorAll(`[data-tab-reviews]`);
const tabsContentReviews = document.querySelectorAll(`[data-content-reviews]`);

const showTab = function (arrTab, arrContent, dataTab, dataContent) {
  arrTab.forEach(function (item) {
    item.addEventListener(`click`, function () {
      for (let index = 0; index < arrTab.length; index++) {
        arrTab[index].classList.remove(`tab__item--active`);
      }
      item.classList.add(`tab__item--active`);
      const tabID = item.getAttribute(dataTab);
      for (let o = 0; o < arrContent.length; o++) {
        arrContent[o].classList.remove(`catalog__content--show`);
        const contentID = arrContent[o].getAttribute(dataContent);
        if (tabID === contentID) {
          arrContent[o].classList.add(`catalog__content--show`);
          $(`.reviews__list`).slick(`reinit`);
        }
      }
    });
  });
};

const showCard = function () {
  tabsContent.forEach(function (item) {
    const list = item.querySelector(`.catalog__list`);
    const more = item.querySelector(`.more`);

    more.addEventListener(`click`, function (evt) {
      evt.preventDefault();
      list.classList.remove(`catalog__list--hide`);
    });
  });
};

showCard();
showTab(tabs, tabsContent, `data-tab`, `data-content`);
showTab(tabsReviews, tabsContentReviews, `data-tab-reviews`, `data-content-reviews`);
