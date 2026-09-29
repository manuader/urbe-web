import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, catLabel } from '../../../lib/blog';
export async function GET(ctx: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Blog de Urbetrack',
    description: 'Gestión de residuos, higiene urbana, flotas y tecnología, con evidencia.',
    site: ctx.site!,
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: `/recursos/blog/${p.id}/`, categories: [catLabel(p.data.category)] })),
    customData: '<language>es-ar</language>',
  });
}
