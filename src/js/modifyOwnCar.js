//Las funciones deben estar necesariamente dentro del elemento: ".category__ul"

import { showMessage } from "./backdrop";
import { getAllProducts } from "./fillProducts";
import { isUserIn } from "./userIn";

export function clicksInProduct() {
  document.querySelectorAll(".category__ul").forEach((lista) => {
    if (!lista.children.length) return;
    lista.addEventListener("click", (e) => {
      if (e.target.classList.contains("buttonInCar")) {
        if (!isUserIn()) {
          location = import.meta.env.BASE_URL + "pages/login.html";
        } else {
          addShopping(e.target.dataset.id);
        }
      }
      if (e.target.classList.contains("buttonView")) {
        const { category, url, name, price, description } = e.target.dataset;
        showMessage(category, url, name, price, description);
      }
      if (e.target.classList.contains("deleteItem")) {
        const id_LI_HTML = e.target.parentElement.dataset.id;
        deleteItemUserApi(id_LI_HTML);
      }
    });
  });
}
async function addShopping(ID_PRODUCT) {
  const { name, id, shopping } = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_KEY_STORAGE)
  );
  shopping.push(parseInt(ID_PRODUCT));
  try {
    const data = await fetch(import.meta.env.VITE_ID_SESSIONS + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, id, shopping }),
    });
    const json = data.json();
    localStorage.setItem(
      import.meta.env.VITE_KEY_STORAGE,
      JSON.stringify({ name, id, shopping })
    );
    editNumberCarHTML();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export function editNumberCarHTML() {
  const user = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_KEY_STORAGE)
  );
  if (user) {
    document.querySelector(".menu .menu__span").innerHTML =
      user.shopping.length + (user.shopping.length === 1 ? " item" : " items");
  } else {
    document.querySelector(".menu .menu__span").innerHTML = "Agrega al carrito";
  }
}

export async function fillCarSection() {
  const user = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_KEY_STORAGE)
  );
  let contentHTML = "";
  let length_USER_ITEMS = 0;
  if (user) {
    const order_USER_PRODUCTS = user.shopping.reduce((acc, id_product) => {
      acc[id_product] ? acc[id_product]++ : (acc[id_product] = 1);
      return acc;
    }, {});
    length_USER_ITEMS += user.shopping.length;
    const ALL_PRODUCTS = await getAllProducts();
    for (const k in order_USER_PRODUCTS) {
      if (Object.hasOwnProperty.call(order_USER_PRODUCTS, k)) {
        const actualProduct = ALL_PRODUCTS.find((f) => f.id === k);
        contentHTML += `
<li class="category_product" data-id="${actualProduct.id}">
  <span class="category_btn btn2 deleteItem">Borrar artículo</span>
  <div class="border-moving">
    <img loading="lazy" src="${
      actualProduct.imageUrl
    }" alt="Licuadora Macovo 34FD" />
  </div>
  <span class="category_btn header__a">Cantidad: ${
    order_USER_PRODUCTS[k]
  }</span>
  <p>${actualProduct.name}</p>
  <span>${actualProduct.price} $ c/u</span>
  <span>Total: ${Number(actualProduct.price) * order_USER_PRODUCTS[k]} $</span>
  <a
    class="buttonView"
    data-category="${actualProduct.category}"
    data-url="${actualProduct.imageUrl}"
    data-name="${actualProduct.name}"
    data-price="${actualProduct.price}"
    data-description="${actualProduct.description}"
    data-user="${actualProduct.byUser}"
    >ver producto &rarr;</a>
</li>
        `;
      }
    }
    if (contentHTML === "")
      contentHTML =
        "No tienes artículos, ve a la categoría que más te guste y selecciona.";
  } else {
    contentHTML = "Debes iniciar sesión para tener artículos";
  }
  document.querySelector(
    ".category__section .category__header span"
  ).innerHTML = `${length_USER_ITEMS} producto${
    length_USER_ITEMS !== 1 ? "s" : ""
  }`;
  document.querySelector(".category__ul").innerHTML = contentHTML;
  clicksInProduct();
}

async function deleteItemUserApi(ID_PRODUCT) {
  const USER = JSON.parse(
    localStorage.getItem(import.meta.env.VITE_KEY_STORAGE)
  );
  const newListShopping = USER.shopping.filter((i) => i !== Number(ID_PRODUCT));
  try {
    const data = await fetch(import.meta.env.VITE_ID_SESSIONS + USER.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: USER.name,
        id: USER.id,
        shopping: newListShopping,
      }),
    });
    const { name, id, shopping } = await data.json();
    localStorage.setItem(
      import.meta.env.VITE_KEY_STORAGE,
      JSON.stringify({ name, id, shopping })
    );
    fillCarSection();
  } catch (error) {
    console.log(error);
  }
}
