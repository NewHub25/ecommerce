import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/ecommerce/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        page1: resolve(__dirname, "pages/login.html"),
        page2: resolve(__dirname, "pages/electro.html"),
      },
    },
  },
});
