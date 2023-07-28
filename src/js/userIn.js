export function addClassUserIn() {
  if (isUserIn()) {
    document.body.classList.add("userIn");
  }
}
export function isUserIn() {
  return Boolean(localStorage.getItem(import.meta.env.VITE_KEY_STORAGE));
}
export function logOut() {
  localStorage.clear();
}
export function renameSpan() {
  if (document.body.classList.contains("userIn")) {
    document.querySelector(".userIn_show span").innerHTML = JSON.parse(
      localStorage.getItem(import.meta.env.VITE_KEY_STORAGE)
    ).name;
  }
}
