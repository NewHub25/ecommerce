import "./../src/styles/index.css";
import "../src/js/toggle-menu.js";
import { sendEmail } from "../src/js/form.js";
import { addClassUserIn, renameSpan } from "../src/js/userIn";
import {getAllProducts } from "../src/js/fillProducts";
import { clicksInProduct } from "../src/js/modifyOwnCar";

window.addEventListener("load", () => {
  sendEmail();
  addClassUserIn();
  renameSpan();

  putRandomProducts(document.querySelector(".category__ul"));
});

async function putRandomProducts(node) {
  const ALL_PRODUCTS = await getAllProducts();
  const RANDOM_LIMIT = 3;

  const radomIndexes = Array.from(
    { length: ALL_PRODUCTS.length },
    (_, i) => i
  ).sort(() => {
    return (-1) ** Math.floor(Math.random() * 2);
  });
  const cont =
    ALL_PRODUCTS.length > RANDOM_LIMIT ? RANDOM_LIMIT : ALL_PRODUCTS.length;
  let productsHTML = "";
  for (let j = 0; j < cont; j++) {
    productsHTML += `
<li class="category_product">
    <span class="category_btn btn2 buttonInCar" data-id="${
      ALL_PRODUCTS[radomIndexes[j]].id
    }">Agregar<a class="car"></a></span>
    <div class="border-moving">
        <img loading="lazy" src="${
          ALL_PRODUCTS[radomIndexes[j]].imageUrl
        }" alt="${ALL_PRODUCTS[radomIndexes[j]].name}">
    </div>
    <p>${ALL_PRODUCTS[radomIndexes[j]].name}</p>
    <span>${ALL_PRODUCTS[radomIndexes[j]].price} $</span>
    <a
        class="buttonView"
        data-category="${ALL_PRODUCTS[radomIndexes[j]].category}"
        data-url="${ALL_PRODUCTS[radomIndexes[j]].imageUrl}"
        data-name="${ALL_PRODUCTS[radomIndexes[j]].name}"
        data-price="${ALL_PRODUCTS[radomIndexes[j]].price}"
        data-description="${ALL_PRODUCTS[radomIndexes[j]].description}"
        data-user="${ALL_PRODUCTS[radomIndexes[j]].byUser}"
    >ver producto &rarr;</a>
</li>
      `;
  }
  node.innerHTML = productsHTML.length ? productsHTML : "Aún no hay ofertas.";
  clicksInProduct()
}
