import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ecommerce/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "pages/login.html"),
        electro: resolve(__dirname, "pages/electro.html"),
        jewelry: resolve(__dirname, "pages/jewelry.html"),
        her: resolve(__dirname, "pages/her.html"),
        him: resolve(__dirname, "pages/him.html"),
        brands: resolve(__dirname, "pages/brands.html"),
        offers: resolve(__dirname, "pages/offers.html"),
      },
    },
  },
});
