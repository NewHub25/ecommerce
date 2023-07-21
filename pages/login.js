import "./../src/styles/index.css";
import "./login.sass";
import { sendEmail } from "../src/js/form.js";

window.addEventListener("load", () => {
  sendEmail();
});
