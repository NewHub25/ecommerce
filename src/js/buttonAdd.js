export function buttonAdd(button, pageUrl, pageLogin) {
  if (localStorage.getItem(import.meta.env.VITE_KEY_STORAGE)) {
    button.href = pageUrl;
  } else {
    button.href = pageLogin;
  }
}
