import { showMessage } from "./backdrop.js";
import { validAllInputsOf } from "./valid_input.js";

export async function beforeSend_signIn(form) {
  validAllInputsOf(form);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (localStorage.getItem(import.meta.env.VITE_KEY_STORAGE)) {
      showMessage("Hay un inicio de seción");
      return;
    }
    const user = await searchUser(form.name.value);
    if (!user) {
      showMessage("Parece que el usuario o la contraseña es incorrecto.");
      return;
    }
    const data = await fetch(import.meta.env.VITE_ID_SESSIONS + user.id);
    const { password } = await data.json();
    if (password !== form.password.value) {
      showMessage("Parece que el usuario o la contraseña es incorrecto.");
      form.reset.click();
      return;
    }
    localStorage.setItem(
      import.meta.env.VITE_KEY_STORAGE,
      JSON.stringify(user)
      );
      form.reset.click();
      showMessage("¡Bienvenido!");
  });
}
export async function beforeSend_register(form) {
  validAllInputsOf(form);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (localStorage.getItem(import.meta.env.VITE_KEY_STORAGE)) {
      showMessage("Hay un inicio de sesión");
      return;
    }
    const user = await searchUser(form.name.value);
    if (!user) {
      const response = await createNewUser({
        name: form.name.value,
        password: form.password.value,
        email: form.email.value,
        date: form.date.value,
        namePerson: form.namePerson.value,
      });
      if (response) {
        localStorage.setItem(
          import.meta.env.VITE_KEY_STORAGE,
          JSON.stringify(response)
        );
        showMessage("Registro exitoso");
      }
    } else {
      showMessage("Ya existe este usuario");
    }
    form.reset.click();
  });
}
async function searchUser(userName) {
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
async function createNewUser({ name, password, email, date, namePerson }) {
  const body = {
    name,
    password,
    email,
    date,
    created: new Date().toString().match(/[\w\s:]+(?= GMT)/g)[0],
    namePerson,
  };
  console.log(body);
  try {
    const data = await fetch(import.meta.env.VITE_ID_SESSIONS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const json = data.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
