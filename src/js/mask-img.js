const time = 500;
//Se añade la clase "mask" a todas las imágenes

export function maskImg() {
  const banner = document.querySelector(".mask-container");
  banner.lastElementChild.classList.add("mask");
  setTimeout(() => {
    const temp = banner.removeChild(banner.lastElementChild);
    banner.insertBefore(temp, banner.firstElementChild);
    temp.classList.remove("mask");
  }, time);
}
