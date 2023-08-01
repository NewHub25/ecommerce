//Las funciones deben estar necesariamente dentro del elemento: ".category__ul"

export function clicksInProduct() {
  document.querySelectorAll(".category__ul").forEach((lista) => {
    if (!lista.children.length) return;
    lista.addEventListener("click", (e) => {
      if (e.target.classList.contains("buttonInCar")) {
        alert("Agregaste un producto con ID: " + e.target.dataset.id);
      }
      if (e.target.classList.contains("buttonView")) {
        alert(`Estás viendo: ${e.target.dataset.name}`);
      }
    });
  });
  // location=(import.meta.env.BASE_URL);
}

