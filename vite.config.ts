import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Allow specifying a base path for GitHub Pages deployments.
  // Set BASE_PATH in CI (e.g., "/<repo>") or leave default "/".
  base: '/tangyongchen/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
