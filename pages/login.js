import "./../src/styles/index.css";
import "./login.sass";
import { sendEmail } from "../src/js/form.js";
import { beforeSendForm } from "../src/js/register.js";

window.addEventListener("load", () => {
  beforeSendForm(document.querySelector?.(".session"));
  sendEmail();
});
