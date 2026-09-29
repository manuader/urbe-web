// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeEvidence from './src/lib/rehype-evidence.mjs';

export default defineConfig({
  site: 'https://urbetrack.com',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  redirects: {
    '/recursos': '/recursos/blog',
    // Rutas del sitio actual en HubSpot (ver docs/SEO-GEO.md)
    '/aseo-smart-city': '/sectores/gobiernos',
    '/fleet-management': '/soluciones/gestion-de-flotas',
    '/oil-y-gas': '/sectores/oil-gas',
    '/construccion': '/sectores/construccion',
    '/blog': '/recursos/blog',
    '/trabaja-en-urbetrack': '/empresa#trabaja',
  },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/gracias') && !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-AR' } },
    }),
  ],
  markdown: { rehypePlugins: [rehypeEvidence], smartypants: true },
  vite: { build: { assetsInlineLimit: 2048 } },
});
