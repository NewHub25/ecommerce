import "./../src/styles/index.css";
import "../src/js/toggle-menu.js";
import { sendEmail } from "../src/js/form.js";
import { addClassUserIn, renameSpan } from "../src/js/userIn";
import { fillByCategory } from "../src/js/fillProducts";

window.addEventListener("load", () => {
  sendEmail();
  addClassUserIn()
  renameSpan()
  fillByCategory()
});
