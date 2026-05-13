import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites live at https://USER.github.io/REPO/ — set VITE_BASE in CI.
// Local dev: omit VITE_BASE (defaults to '/').
const envBase = process.env.VITE_BASE
const base =
  !envBase || envBase === '/'
    ? '/'
    : envBase.endsWith('/')
      ? envBase
      : `${envBase}/`

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
