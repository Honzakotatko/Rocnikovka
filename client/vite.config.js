import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fortawesome/free-brands-svg-icons': '@fortawesome/free-brands-svg-icons'
    },
  },
});