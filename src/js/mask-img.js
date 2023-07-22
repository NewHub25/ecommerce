const time = 5000;
//Se añade la clase "mask" a todas las imágenes

export function maskImg() {
  const banner = document.querySelector(".mask-container");
  const imgs_of_banner = banner.querySelectorAll("img");
  const lastImg = imgs_of_banner[imgs_of_banner.length - 1];
  lastImg.classList.add("mask");
  setTimeout(() => {
    banner.removeChild(lastImg);
    banner.insertBefore(lastImg, banner.firstElementChild);
    lastImg.classList.remove("mask");
    // La variable lastImg desaparece y sigue el ciclo
  }, time);
}
