import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Projet/', // TODO: use the right repo name
  plugins: [react()],
});
