import { showMessage } from "./backdrop.js";
import { validAllInputsOf } from "./valid_input.js";

const keyStorage = "KEY_STORE_USER";

export async function beforeSendForm(form) {
  validAllInputsOf(form);
//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const user = await searchUser(form.user.value);
//     if (!user) {
//       showMessage("Parece que el usuario o la contraseña es incorrecto.");
//       return;
//     }
//     const data = await fetch(import.meta.env.VITE_ID_SESSIONS + user.id);
//     const { password } = await data.json();
//     if (password !== form.password.value) {
//       showMessage("Parece que el usuario o la contraseña es incorrecto.");
//       form.reset.click();
//       return;
//     }
//     document.body.classList.add("user-inside");
//     localStorage.setItem(keyStorage, `sessionID=${user.id}`);
//     form.reset.click();
//   });
}
export async function searchUser(userName) {
  try {
    const data = await fetch(import.meta.env.VITE_ID_SESSIONS);
    const jsonArray = await data.json();
    const user = jsonArray.find((f) => f.name === userName);
    if (!user) return user;
    const { name, id, shopping } = user;
    return { name, id, shopping };
  } catch (error) {
    console.log(error);
  }
}
export async function createNewUser({ name, password, email, date }) {
  const body = {
    name,
    password,
    email,
    date,
    created: new Date().toString().match(/[\w\s:]+(?= GMT)/g)[0],
  };
  try {
    const data = await fetch(import.meta.env.VITE_ID_SESSIONS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
}
