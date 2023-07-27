export function showMessage(msg = 'ALGO EXTRAÑO OCURRIÓ') {
  document.querySelector("dialog h2").innerHTML = msg;
  document.querySelector("dialog").showModal();
}
