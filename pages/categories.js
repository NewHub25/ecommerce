import "./../src/styles/index.css";
import "../src/js/toggle-menu.js";
import { sendEmail } from "../src/js/form.js";
import { addClassUserIn, renameSpan } from "../src/js/userIn";
import { fillByCategory } from "../src/js/fillProducts";
import { editNumberCarHTML } from "../src/js/modifyOwnCar";

window.addEventListener("load", () => {
  sendEmail();
  addClassUserIn();
  renameSpan();
  fillByCategory();
  editNumberCarHTML();
});
