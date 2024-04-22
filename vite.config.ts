import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'prizma',
      fileName: `prizma`,
      formats: ['es', 'umd'],
    },
  },
  plugins: [dts({ outDir: 'dist/modules' })],
});
