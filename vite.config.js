import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        SOBREMI: resolve(__dirname, 'SOBREMI.html'),
        HABILIDADES: resolve(__dirname, 'HABILIDADES.html'),
        HOJA4: resolve(__dirname, 'HOJA4.html'),
        HOJA5: resolve(__dirname, 'HOJA5.html'),
        HOJA6: resolve(__dirname, 'HOJA6.html'),



      },
    },
  },
});

