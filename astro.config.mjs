// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },

  //Deploy normal project
  // base: '/project-245/',
  // site: 'https://dominicnikolai.github.io/project-245/'

  //Deploy 20 Projects
  base: '/landing-20-exercises-with-jest/',
  site: 'https://20essentials.github.io/landing-20-exercises-with-jest/',

  //Localhost
  // site: 'http://localhost:4321/',

  integrations: [react()]
});