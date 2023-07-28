import "./styles/index.css";
import "./js/toggle-menu.js";
import { maskImg } from "./js/mask-img.js";
import { sendEmail } from "./js/form.js";
import { addClassUserIn, logOut, renameSpan } from "./js/userIn";

setInterval(maskImg, 5000);
window.addEventListener("load", () => {
  sendEmail();
  addClassUserIn();
  renameSpan();
});
