import { defineConfig } from 'vite'

export default defineConfig({
  // Aquí va tu configuración
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        // Si borraste HOJA4, HOJA5 y HOJA6, asegúrate de que NO estén aquí
      }
    }
  }
})