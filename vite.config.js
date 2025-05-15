import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    headers: {
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline';
        style-src 'self' 'unsafe-inline';
        img-src 'self' data:;
        connect-src 'self' ws://localhost:* *.googleapis.com *.firebaseio.com;
        font-src 'self' data:;
      `.replace(/\n/g, ' '),
    },
  },
})