export function showMessage(
  h2 = "ALGO EXTRAÑO OCURRIÓ",
  imgUrl,
  name,
  price,
  description
) {
  const categories = ["electro", "jewelry", "her", "him"];
  // Para que no aparezcan las palabras en inglés de las categorías
  let contentHTML = `
  <button onclick="this.parentElement.close()">X</button>
  <h2>${categories.includes(h2) ? "" : h2}</h2>
  `;
  if (imgUrl && name && price && description) {
    contentHTML += `
<img src="${imgUrl}" alt="${name}" />
<h3>${name} <span>${price}$</span></h3>
<p>${description}</p>
    `;
  }
  document.querySelector("dialog").innerHTML = contentHTML;
  document.querySelector("dialog").showModal();
}
