import "./styles/index.css";
import "./js/toggle-menu.js";
import { maskImg } from "./js/mask-img.js";
import { sendEmail } from "./js/form.js";
import { addClassUserIn, logOut, renameSpan } from "./js/userIn";
import { buttonAdd } from "./js/buttonAdd";
import { fillByCategory } from "./js/fillProducts";
import { editNumberCarHTML } from "./js/modifyOwnCar";

window.addEventListener("load", () => {
  setInterval(maskImg, 5000);
  sendEmail();

  // When user is in
  addClassUserIn();
  renameSpan();

  // Si va a agregar algo debe iniciar sesión
  document.getElementById("buttonAdd").addEventListener("click", (e) => {
    buttonAdd(e.currentTarget, "./pages/addProduct.html", "./pages/login.html");
  });
  
  fillByCategory();
  editNumberCarHTML()
});
