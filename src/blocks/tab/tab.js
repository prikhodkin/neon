/* eslint-disable no-undef */
const DATA_TAB = `data-tab`;
const DATA_CONTENT = `data-content`;
const DATA_TAB_REVIEWS = `data-tab-reviews`;
const DATA_CONTENT_REVIEWS = `data-content-reviews`;
const TAB_ACTIVE_CLASS = `tab__item--active`;
const CONTENT_ACTIVE_CLASS = `catalog__content--show`;

const tabs = document.querySelectorAll(`[${DATA_TAB}]`);
const tabsContent = document.querySelectorAll(`[${DATA_CONTENT}]`);

const tabsReviews = document.querySelectorAll(`[${DATA_TAB_REVIEWS}]`);
const tabsContentReviews = document.querySelectorAll(`[${DATA_CONTENT_REVIEWS}]`);

const showTab = (arrTabs, arrContents, dataTab, dataContent, callback = () => {}) => {
  arrTabs.forEach((item) => {
    item.addEventListener(`click`, () => {
      const id = item.getAttribute(dataTab);
      const content = document.querySelector(`[${dataContent}="${id}"]`);
      const activeTab = document.querySelector(`.${TAB_ACTIVE_CLASS}[${dataTab}]`);
      const activeContent = document.querySelector(`.${CONTENT_ACTIVE_CLASS}[${dataContent}]`);

      activeTab.classList.remove(TAB_ACTIVE_CLASS);
      item.classList.add(TAB_ACTIVE_CLASS);

      activeContent.classList.remove(CONTENT_ACTIVE_CLASS);
      content.classList.add(CONTENT_ACTIVE_CLASS);
      callback();
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
showTab(tabs, tabsContent, DATA_TAB, DATA_CONTENT);
showTab(tabsReviews, tabsContentReviews, DATA_TAB_REVIEWS, DATA_CONTENT_REVIEWS, () => $(`.reviews__list`).slick(`reinit`));


