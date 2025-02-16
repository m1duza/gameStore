import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Разрешает доступ с локальной сети
    port: 5173, // Оставляем стандартный порт Vite
    cors: true, // Включает CORS, если вдруг есть проблемы с VK API
  },
});
