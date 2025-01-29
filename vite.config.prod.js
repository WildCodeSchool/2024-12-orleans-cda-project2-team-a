import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '2024-12-orleans-cda-project1-team-a', // TODO: use the right repo name
  plugins: [react()],
});
