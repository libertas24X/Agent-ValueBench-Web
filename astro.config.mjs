// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/Agent-ValueBench-Web',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
