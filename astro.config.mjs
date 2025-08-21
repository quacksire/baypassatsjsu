// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
          '4321.outbound.quacksire.dev',
          'localhost'
      ]
    }
  },

  adapter: cloudflare({
    imageService: 'cloudflare'
  })
});
