import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(80),
    description: z.string().min(80).max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string(),
    authorRole: z.string().optional(),
    category: z.enum(['gestion-de-residuos', 'seguridad-y-flotas', 'tecnologia-e-ia', 'casos', 'normativa-y-contratos']),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    /** Borrador editorial: se muestra con aviso y noindex hasta que Urbetrack lo valide */
    draft: z.boolean().default(false),
    sources: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),
    relatedSolutions: z.array(z.string()).default([]),
    relatedCases: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
