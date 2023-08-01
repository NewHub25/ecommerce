import "./styles/index.css";
import "./js/toggle-menu.js";
import { maskImg } from "./js/mask-img.js";
import { sendEmail } from "./js/form.js";
import { addClassUserIn, logOut, renameSpan } from "./js/userIn";
import { buttonAdd } from "./js/buttonAdd";

setInterval(maskImg, 5000);
window.addEventListener("load", () => {
  sendEmail();
  addClassUserIn();
  renameSpan();
  document.getElementById("buttonAdd").addEventListener("click", (e) => {
    buttonAdd(e.currentTarget, "./pages/addProduct.html", "./pages/login.html");
  });
});
