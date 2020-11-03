//= "../../../products.js"

const CATEGORY = {
    backpack: 'backpack',
    bags: 'bags',
    purse: 'purse',
    all: true,
};

// Создаем копию массива каталога и вырезаем первые 9 элементов (9 элементов прописаны напрямую в HTML)
const newPr = products.slice();
const upProducts = newPr.splice(9)

const dataBackPack = upProducts.filter(it => it.category === CATEGORY.backpack);
const dataBags = upProducts.filter(it => it.category === CATEGORY.bags);
const dataPurse = upProducts.filter(it => it.category === CATEGORY.purse);

const dataCard = (prod) => {

    return `
        ${prod.map((it) => {
            return `
                <li class="catalog__item products"  itemscope="" itemtype="http://schema.org/Product" data-id=${it.id}>
                    ${it.flag ?
                      `<span class='products__flag ${it.sale ? `products__flag--sale` : ``}'>${it.flag}</span>`
                      : ""}
                    <a href=""  class="products__img">
                        <img itemprop="image" src="${it.img}" alt="${it.name}">
                    </a>
                     <meta itemprop="name" content="${it.name}">
                    <div itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                      <h3 class="products__name">${it.name}</h3>
                      <p class="products__info"><span>Размер:</span> ${it.size}</p>
                      <p itemprop="description" class="products__info"><span>Материал:</span> ${it.material}</p>
                      <div class="products__prices">
                          <meta itemprop="price" content="${it.newprice}">
                          <meta itemprop="priceCurrency" content="RUB">
                          <span class="products__old-price">${it.oldprice} ₽ </span>
                          <span class="products__price">${it.newprice} ₽ </span>
                      </div>
                    </div>
                    <a href="" class="products__button button">
                        <div class="button__bg">Оформить заказ<br> со скидкой</div>
                    </a>
                </li>`
        }).join('')}
            `
};


document.querySelector(`[data-list="1"]`).insertAdjacentHTML('beforeend', dataCard(dataBackPack));
document.querySelector(`[data-list="2"]`).insertAdjacentHTML('beforeend', dataCard(dataBags));
document.querySelector(`[data-list="3"]`).insertAdjacentHTML('beforeend', dataCard(dataPurse));
// document.querySelector(`[data-content="4"]`).insertAdjacentHTML('afterbegin', dataCard(products));
