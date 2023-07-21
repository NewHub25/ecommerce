import "./../src/styles/index.css";
import "../src/js/toggle-menu.js";
import { sendEmail } from "../src/js/form.js";

window.addEventListener("load", () => {
  sendEmail();
});
