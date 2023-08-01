export async function fillByCategory() {
  const ALL_PRODUCTS = await getAllProducts();
  document.querySelectorAll(".category__section").forEach((section) => {
    const { category, limit } = section.dataset;
    const FILTERED_PRODUCTS = ALL_PRODUCTS.filter(
      (all) => all.category === category
    );
    let productsHTML = "";
    for (
      let i = 0;
      i < limit === "infinite" ? FILTERED_PRODUCTS.length : limit;
      i++
    ) {
      productsHTML += `
<li class="category_product">
    <span class="category_btn btn2">Agregar<a class="car"></a></span>
    <div class="border-moving">
        <img loading="lazy" src="${FILTERED_PRODUCTS[i].imageUrl}" alt="${FILTERED_PRODUCTS[i].name}">
    </div>
    <p>${FILTERED_PRODUCTS[i].name}</p>
    <span>${FILTERED_PRODUCTS[i].price}</span>
    <a
        onclick="productView(this)"
        data-category="${FILTERED_PRODUCTS[i].category}"
        data-url="${FILTERED_PRODUCTS[i].imageUrl}"
        data-name="${FILTERED_PRODUCTS[i].name}"
        data-price="${FILTERED_PRODUCTS[i].price}"
        data-description="${FILTERED_PRODUCTS[i].description}"
        data-user="${FILTERED_PRODUCTS[i].byUser}"
    >ver producto &rarr;</a>
</li>
      `;
    }
    section.querySelector(".category__ul").innerHTML = productsHTML.length
      ? productsHTML
      : "No hay aún productos en esta categoría";
  });
}

async function getAllProducts() {
  try {
    const data = await fetch(import.meta.env.VITE_API_PRODUCTS);
    const json = await data.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}
