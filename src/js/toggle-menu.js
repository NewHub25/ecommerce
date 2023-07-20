document.querySelector(".menu__ul").addEventListener("click", function (e) {
  if (
    e.target.classList.contains("menu__li_show") ||
    e.target.classList.contains("menu__li_hide") ||
    e.target.parentElement.classList.contains("menu__li_show") ||
    e.target.parentElement.classList.contains("menu__li_hide")
  ) {
    this.classList.toggle("active");
  }
});
