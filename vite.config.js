import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // сохраняет относительные пути
  server: {
    open: true // Дополнительно: автоматически открывает браузер
  }
})
