import type { APIRoute } from 'astro';
import { solutions } from '../data/solutions';
import { sectors } from '../data/sectors';
import { cases } from '../data/cases';
import { site, offices, VERIFIED_AT } from '../data/site';
import { getPosts } from '../lib/blog';

/** Resumen para modelos de lenguaje (https://llmstxt.org). Se genera desde los mismos datos del sitio. */
export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const u = (p: string) => `${site.url}${p}`;
  const lines = [
    '# Urbetrack',
    '',
    `> Urbetrack (${site.legalName}, Argentina, 2007) integra software SaaS, dispositivos IoT, inteligencia artificial y consultoría para gestionar y certificar servicios urbanos (recolección de residuos, barrido, higiene urbana) y flotas de empresas (logística, oil & gas, minería, construcción). Su núcleo es la certificación por telemetría: cada levantamiento queda vinculado a contenedor, unidad, hora y lugar mediante GPS, sensores de trabajo y RFID.`,
    '',
    `Datos verificados el ${VERIFIED_AT}. Cada cifra del sitio lleva una etiqueta: Comprobado (fuente pública o independiente), Declarado (lo afirma Urbetrack) o A validar. Metodología: ${u('/fuentes/')}`,
    '',
    `Oficinas: ${offices.map((o) => `${o.city} (${o.country})`).join(', ')}. Contacto: ${site.email}, ${site.phone}. Certificación ISO 9001:2015 de TÜV Rheinland (Argentina y España).`,
    '',
    '## Soluciones',
    ...solutions.map((s) => `- [${s.name}](${u(`/soluciones/${s.slug}/`)}): ${s.seo.description}`),
    '',
    '## Sectores',
    ...sectors.map((s) => `- [${s.name}](${u(`/sectores/${s.slug}/`)}): ${s.short}`),
    '',
    '## Casos con fuente',
    ...cases.map((c) => `- [${c.client}](${u(`/casos/${c.slug}/`)}) (${c.place}, ${c.period}; evidencia: ${c.evidence.level}): ${c.summary}`),
    '',
    '## Plataforma y empresa',
    `- [Plataforma](${u('/plataforma/')}): cuatro capas (software, dispositivos, datos e IA, consultoría), módulos Monitor Online, Monitor Histórico, Monitor de Calidad y Simulador 3D.`,
    `- [Empresa](${u('/empresa/')}): historia, presencia, equipo y certificaciones.`,
    `- [Contacto y demo](${u('/contacto/')})`,
    '',
    '## Blog',
    ...posts.map((p) => `- [${p.data.title}](${u(`/recursos/blog/${p.id}/`)}): ${p.data.description}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
