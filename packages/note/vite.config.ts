import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mock.apifox.cn',
        changeOrigin: true,
        secure: false,
        rewrite(path: string) {
          console.log('path', path);
          return path.replace(/^\/api/, '');
          // (path) => 
        },
        // /m1/2978193-0-default/
      },
    },
  },
});
