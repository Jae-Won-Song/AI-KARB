import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // 루트 경로로 설정
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
