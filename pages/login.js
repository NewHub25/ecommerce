import "./../src/styles/index.css";
import "./login.sass";
import { sendEmail } from "../src/js/form.js";
import { beforeSend_signIn, beforeSend_register } from "../src/js/signIn.js";
import { addClassUserIn, renameSpan } from "../src/js/userIn";

if (document.title === "Registro") {
  // REGISTER page
  window.addEventListener("load", () => {
    beforeSend_register(document.querySelector(".register"));
    sendEmail();
  });
} else {
  //LOGIN page
  window.addEventListener("load", () => {
    beforeSend_signIn(document.querySelector(".session"));
    sendEmail();
    addClassUserIn();
    renameSpan();
  });
}
