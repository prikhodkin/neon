
const fillModal = (ii) => {
    const pursesArray = products.filter(it => it.category === "purse" && it.id != ii);
    const randomPurse = pursesArray[Math.floor(Math.random()*pursesArray.length)];
    console.log(products)

    for (let item of products) {
        if (item.id == ii) {
          document.querySelector(".order").insertAdjacentHTML('afterbegin', fillModalTop(item, randomPurse));
          document.querySelector(".order__form").insertAdjacentHTML('afterbegin', fillHiddenInputs(item, randomPurse));
        }
      }
}

const fillModalTop = (item, randomPurse) => {
  return `
            <div class="order__top">
            <div class="order__preview">
              <p class="order__name">${item.name}</p>
              <div class="order__prices">
                <span class="order__old-price">${item.oldprice} ₽ </span>
                <span class="order__price">${item.newprice} ₽ </span>
              </div>
              <div class="order__slider slider">
                <ul class="slider__list">
                  ${item.pictures.map(it => {
                      return `<li class="slider__item"><img class="lazy" data-src="${it}" alt=""></li>`
                  }).join('')
                  }
                </ul>
                <ul class="slider__sub-list">
                  ${item.pictures.map(it => {
                      return `<li class="slider__item"><img class="" src="${it}" alt=""></li>`
                  }).join('')
                  }
                </ul>
                <div class="slider__control">
                  <button class="slider__button slider__button--prev">
                    <svg class="svg">
                      <use xlink:href="img/sprites/sprite.svg#icon__prev"></use>
                    </svg>
                  </button>
                  <button class="slider__button slider__button--next">
                    <svg class="svg">
                      <use xlink:href="img/sprites/sprite.svg#icon__next"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="order__content">
              <div class="header__info">
                <p class="header__text">Доставка голографических аксессуаров по России</p>
                <p class="header__text">В наличии на складе в Екатеринбурге</p>
              </div>
              <div class="order__info">
                <p class="order__text"><span>Размер:</span> ${item.size}</p>
                    <p class="order__text">${item.description}</p>
                <p class="order__text">Материал: ${item.material}</p>
              </div>
              <div class="order__sub-title">дополни свой заказ:</div>
              <p class="order__text">аксессуаром по супер цене</p>
              <div class="order__additional">
                <img data-src="${randomPurse.img}" alt="" class="order__img lazy">
                <div class="order__right">
                  <p class="order__sub-name">${randomPurse.name}</p>
                  <p class="order__price">${randomPurse.newprice} ₽ </p>
                </div>
              </div>
              <div class="order__check">
                <label for="check" class="order__label">
                  <input type="checkbox" class="order__input" name="check" id="check">
                  <span class="order__mark"></span>
                  <p>Добавить аксессуар к заказу</p>
                </label>
              </div>
          </div>

          `
}

const fillHiddenInputs = (item, randomPurse) => {
      return `
        <div id="hidden-inputs">
          <input type="hidden" name="Название товара" value="${item.name}">
          <input type="hidden" name="Цена продукта" value="${item.newprice}">
          <input type="hidden" id="form-purse-name" name="Название кошелька(доп. товар)" value="${randomPurse.name}">
          <input type="hidden" id="form-purse-price" name="Цена кошелька(доп. товар)" value="${randomPurse.newprice}">
        </div>
      `
}

const deleteModalInfo = () => {
    const orderTop = document.querySelector(".order__top");
    const hidden = document.querySelector("#hidden-inputs");

    if (!orderTop) {
      return;
    }

    orderTop.remove();
    hidden.remove();
}
