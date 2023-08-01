import "./../src/styles/index.css";
import "./login.sass";
import { sendEmail } from "../src/js/form.js";
import { beforeSendNewProduct } from "../src/js/signIn.js";

window.addEventListener("load", () => {
  sendEmail();
  beforeSendNewProduct(document.querySelector(".register"));
});
