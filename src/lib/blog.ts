import { getCollection, type CollectionEntry } from 'astro:content';
import { blogCategories } from '../data/nav';

/** En el prototipo se muestran los borradores (con aviso). Para producción: PUBLIC_SHOW_DRAFTS=false. */
export const SHOW_DRAFTS = (import.meta.env.PUBLIC_SHOW_DRAFTS ?? 'true') !== 'false';

export type Post = CollectionEntry<'blog'>;

export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('blog', (p) => SHOW_DRAFTS || !p.data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const catLabel = (slug: string) => blogCategories.find((c) => c.slug === slug)?.label ?? slug;

export function readingMinutes(body: string | undefined) {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export const fmtDate = (d: Date) => d.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
