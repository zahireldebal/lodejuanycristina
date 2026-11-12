// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config/site-url.mjs';
import { fileURLToPath } from 'node:url';

// Windows: si el proyecto se abre como 'c:...' (minúscula, típico de VS Code),
// Vite pierde el vínculo página↔CSS. Normalizamos la letra de unidad a mayúscula.
const here = fileURLToPath(new URL('.', import.meta.url));
const root = here.replace(/^[a-z]:/, (d) => d.toUpperCase());
if (process.platform === 'win32') process.chdir(root);

export default defineConfig({
  root,
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-UY', en: 'en' } },
    }),
  ],
  image: { responsiveStyles: true },
  vite: { plugins: [tailwindcss()] },
});
