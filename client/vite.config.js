import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgx from "@svgx/vite-plugin-react";
export default defineConfig(async () => {
  return {
    plugins: [
      svgx(),
      react()
    ],
  };
});