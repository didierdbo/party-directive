/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// Kai's notes:
//  - Alias `@/` → `src/` keeps imports stable when you move files.
//  - Vitest config lives here so you only have one build config to reason about.
//  - `jsdom` is the default test environment for RTL.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
})
