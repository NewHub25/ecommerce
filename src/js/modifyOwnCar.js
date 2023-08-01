//Las funciones deben estar necesariamente dentro del elemento: ".category__ul"

import { showMessage } from "./backdrop";
import { isUserIn } from "./userIn";

export function clicksInProduct() {
  document.querySelectorAll(".category__ul").forEach((lista) => {
    if (!lista.children.length) return;
    lista.addEventListener("click", (e) => {
      if (e.target.classList.contains("buttonInCar")) {
        if (!isUserIn()) {
          location = import.meta.env.BASE_URL + "pages/login.html";
        } else {
          alert("Agregaste un producto con ID: " + e.target.dataset.id);
        }
      }
      if (e.target.classList.contains("buttonView")) {
        const { category, url, name, price, description } = e.target.dataset;
        showMessage(category, url, name, price, description);
      }
    });
  });
}
