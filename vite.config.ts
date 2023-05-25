/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weather",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "/src/__tests__/setup.ts"
  },
  resolve: {
    alias: {
      "@assets": "/src/assets"
    }
  },
})
