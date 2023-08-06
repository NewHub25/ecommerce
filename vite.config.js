import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ecommerce/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        jewelry: resolve(__dirname, "pages/jewelry.html"),
        her: resolve(__dirname, "pages/her.html"),
        him: resolve(__dirname, "pages/him.html"),
        electro: resolve(__dirname, "pages/electro.html"),
        offers: resolve(__dirname, "pages/offers.html"),
        brands: resolve(__dirname, "pages/brands.html"),
        addProduct: resolve(__dirname, "pages/addProduct.html"),
        car: resolve(__dirname, "pages/car.html"),
        login: resolve(__dirname, "pages/login.html"),
        register: resolve(__dirname, "pages/register.html"),
        support: resolve(__dirname, "pages/support.html"),
      },
    },
  },
});
