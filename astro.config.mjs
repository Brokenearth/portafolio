import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://johanhernandez.dpdns.org',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
