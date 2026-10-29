import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    open: false,
    host: true,
    headers: SECURITY_HEADERS,
  },
  preview: {
    port: 5174,
    headers: SECURITY_HEADERS,
  },
});
