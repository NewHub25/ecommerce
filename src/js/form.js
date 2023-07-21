emailjs.init("12ohxHgCGHSKdVDaH");
const serviceID = "default_service";
const templateID = "template_8th903l";

/**
 * Es necesario estos selectores
 * .form
 * .form_nav input
 * .form [type="submit"]
 * Y que sea la UNICA clase FORM
 * CHANGE next time, the IDs of document.html
 */
const btnSend = document.querySelector('.form [type="submit"]');

export function sendEmail() {
  document.querySelector(".form").addEventListener("submit", function (event) {
    event.preventDefault();
    btnSend.value = "Enviando...";

    const btnStyles = {
      color: "#eee",
      borderRadius: ".7rem",
      boxShadow: "1px 0px 3px 0px #0a0c80",
      backgroundImage: "linear-gradient(to bottom, #4d23e8 5%, #8d31e8 100%)",
      backgroundColor: "#5c32cf2c",
      display: "inline-block",
      cursor: "pointer",
      padding: "11px 37px",
      textDecoration: "none",
      textAlign: "center",
    };
    for (const prop in btnStyles) {
      if (Object.hasOwnProperty.call(btnStyles, prop)) {
        btnSend.style[prop] = btnStyles[prop];
      }
    }

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btnSend.value = "Enviar";
        alert("Enviado!");
        document
          .querySelectorAll(".form_nav input")
          .forEach((each) => (each.value = ""));
        document.querySelector("textarea").textContent = "";
      },
      (err) => {
        btnSend.value = "Enviar";
        alert(JSON.stringify(err));
      }
    );
  });
}
