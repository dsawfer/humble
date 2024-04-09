import { resolve } from 'path'
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'humble',
      fileName: 'humble',
    }
  }
});
