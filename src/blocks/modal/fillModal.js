
const fillModal = (ii) => {
    const pursesArray = products.filter(it => it.category === "purse" && it.id != ii);
    const randomPurse = pursesArray[Math.floor(Math.random()*pursesArray.length)];
    
    for (let item of products) {
        if (item.id == ii) {
          const descriptionsArray = item.description.split(`.`);
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
                     return `<li class="slider__item"><img src="${it}" alt=""></li>`
                }).join('')
                }
              </ul>
              <ul class="slider__sub-list">
                ${item.pictures.map(it => {
                    return `<li class="slider__item"><img src="${it}" alt=""></li>`
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
              <img src="${randomPurse.img}" alt="" class="order__img">
              <div class="order__right">
                <p class="order__sub-name">${randomPurse.name}</p>
                <p class="order__price">${randomPurse.newprice} ₽ </p>
              </div>
            </div>
            <div class="order__check">
              <input type="checkbox" class="order__input" name="check" id="check" checked>
              <span class="order__mark"></span>
              <label for="check" class="order__label">Добавить аксессуар к заказу</label>
            </div>
          </div>`
        }
    }
}

const deleteModalInfo = () => {
    document.querySelector(".order__top").remove();
}
