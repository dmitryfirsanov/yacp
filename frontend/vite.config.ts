import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      sсss: {
        additionalData: `@import "@/assets/base.scss;"`, 
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api*': {
        target: 'http://backend/api',
        changeOrigin: true,
      },
    },
  },
});
