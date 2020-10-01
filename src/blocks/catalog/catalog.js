//= "../../../products.js"

const CATEGORY = {
    backpack: 'backpack',
    bags: 'bags',
    purse: 'purse',
    all: true,
};

const dataBackPack = products.filter(it => it.category === CATEGORY.backpack);
const dataBags = products.filter(it => it.category === CATEGORY.bags);
const dataPurse = products.filter(it => it.category === CATEGORY.purse);

const dataCard = (prod) => {

    return `<ul class="catalog__list catalog__list--hide">
        ${prod.map((it) => {
            return `
                <li class="catalog__item products" data-id=${it.id}>
                    ${it.flag ?
                      `<span class='products__flag ${it.sale ? `products__flag--sale` : ``}'>${it.flag}</span>`
                      : ""}
                    <a href="" class="products__img">
                        <img src="${it.img}" alt="${it.name}">
                    </a>
                    <a href="" class="products__name">${it.name}</a>
                    <p class="products__info"><span>Размер:</span> ${it.size}</p>
                    <p class="products__info"><span>Материал:</span> ${it.material}</p>
                    <div class="products__prices">
                        <span class="products__old-price">${it.oldprice} ₽ </span>
                        <span class="products__price">${it.newprice} ₽ </span>
                    </div>
                    <a href="" class="products__button button">
                        <div class="button__bg">Оформить заказ<br> со скидкой</div>
                    </a>
                </li>`
        }).join('')}
            </ul>
            <a href="" class="catalog__button more">Смотреть еще</a>`
};


document.querySelector(`[data-content="1"]`).insertAdjacentHTML('afterbegin', dataCard(dataBackPack));
document.querySelector(`[data-content="2"]`).insertAdjacentHTML('afterbegin', dataCard(dataBags));
document.querySelector(`[data-content="3"]`).insertAdjacentHTML('afterbegin', dataCard(dataPurse));
// document.querySelector(`[data-content="4"]`).insertAdjacentHTML('afterbegin', dataCard(products));
