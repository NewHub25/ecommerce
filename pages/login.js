import "./../src/styles/index.css";
import "./login.sass";
import { sendEmail } from "../src/js/form.js";
import { beforeSendSignIn, beforeSendRegister } from "../src/js/signIn.js";

if (document.title === "Registro") {
  // REGISTER page
  window.addEventListener("load", () => {
    beforeSendRegister(document.querySelector(".register"));
    sendEmail();
  });
} else {
  //LOGIN page
  window.addEventListener("load", () => {
    beforeSendSignIn(document.querySelector(".session"));
    sendEmail();
  });
}
