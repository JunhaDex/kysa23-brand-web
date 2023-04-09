import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': fileURLToPath(new URL('node_modules/bootstrap', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/assets/sass/variables";
        @import "./src/assets/sass/mixins";
        @import "./src/assets/sass/themes";
        @import "./src/assets/sass/transitions";
        `,
      },
    },
  },
  server: {
    port: 8080,
    strictPort: true,
  },
});
