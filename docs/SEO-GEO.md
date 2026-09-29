# SEO y GEO (buscadores y asistentes de IA)

## Estructura técnica

- **Sitio estático** (Astro): HTML completo en cada URL, sin depender de JavaScript para el contenido. Lo que ve un buscador o un asistente es lo mismo que ve una persona.
- **HTML semántico:** un `h1` por página, jerarquía `h2 → h3` sin saltos, `nav` con `aria-label`, `main`, `article` en blog y casos, `figure`/`figcaption`, listas reales, tablas reales.
- **URLs claras en español**, con barra final: `/soluciones/recoleccion-certificada/`, `/sectores/gobiernos/`, `/casos/gcba/`, `/recursos/blog/<slug>/`.
- **Metadatos por página:** `title` (≤ 60 caracteres + "| Urbetrack"), `description` (140–160), `canonical`, Open Graph, Twitter Card, `og:locale es_AR`, `theme-color`.
- **Borradores del blog** con `noindex` hasta que Urbetrack los valide.
- **Sitemap** automático (`/sitemap-index.xml`), **RSS** del blog (`/recursos/blog/rss.xml`), **robots.txt** que habilita buscadores y asistentes de IA.
- **`/llms.txt`**: resumen para modelos de lenguaje generado desde los mismos datos del sitio (soluciones, sectores, casos, artículos), con la regla de evidencia explicada.
- **Rendimiento:** fuente variable local con `preload` y fallback métrico, imágenes WebP con `loading="lazy"` y dimensiones, JS solo donde hay interacción (GSAP solo en la home).

## Datos estructurados (JSON-LD)

| Tipo | Dónde | Contenido |
|---|---|---|
| `Organization` | Todas las páginas | Nombre, razón social, CUIT, dirección, contacto, año de fundación, redes |
| `WebSite` | Home | Nombre, idioma, editor |
| `BreadcrumbList` | Páginas internas | Migas |
| `Service` | Cada solución | Nombre, tipo, descripción, proveedor, audiencia, países |
| `FAQPage` | Home, soluciones, sectores | Generado desde el mismo acordeón visible |
| `ItemList` | Índice de casos | Casos con URL |
| `Article` + `citation` | Cada caso | Fuentes enlazadas como citas |
| `Blog` / `BlogPosting` + `citation` | Blog | Autor, fechas, sección, palabras clave, fuentes |
| `ContactPage` | Contacto | — |

## Estrategia GEO

Los asistentes de IA citan contenido que es **específico, autocontenido y verificable**. El sitio está escrito para eso:

1. **Respuestas directas.** Cada FAQ responde en 1–3 frases que se entienden solas ("¿Qué es la certificación por telemetría?").
2. **Definiciones propias.** Términos del rubro explicados en contexto: certificación por telemetría, tolva, roll-off, ADAS, DSM, pliego.
3. **Evidencia explícita.** Cada cifra dice quién la afirma y enlaza a la fuente. Un asistente puede citar "según la Sindicatura General de la Ciudad…" en lugar de repetir marketing.
4. **Entidades consistentes.** Nombres de producto exactos, razón social, direcciones y fechas iguales en todas las páginas, en el JSON-LD y en `llms.txt`.
5. **Enlaces internos semánticos.** Solución ↔ sector ↔ caso ↔ artículo, con textos de enlace descriptivos.

## Redirecciones desde el sitio actual (HubSpot)

Configuradas en `astro.config.mjs` (en hosting estático generan páginas de redirección; en producción conviene replicarlas como 301 en el servidor o CDN):

| Origen | Destino |
|---|---|
| `/aseo-smart-city` | `/sectores/gobiernos` |
| `/fleet-management` | `/soluciones/gestion-de-flotas` |
| `/oil-y-gas` | `/sectores/oil-gas` |
| `/construccion` | `/sectores/construccion` |
| `/blog` | `/recursos/blog` |
| `/trabaja-en-urbetrack` | `/empresa#trabaja` |
| `/recursos` | `/recursos/blog` |

**Pendientes de mapeo** (definir 301 en el servidor): `/minería` (con tilde, requiere regla de servidor → `/sectores/mineria`), `/calculadora-de-optimizacion`, `/lp-guia-ley-de-economia-circular`, la guía Smart Cities, `/contacto` (existe con la misma URL), los artículos del blog actual (`/blog/<slug>` → `/recursos/blog/<slug>` cuando se migren), las versiones `/en/` y `/pt/`, y el sitio viejo en WordPress todavía indexado (`/mercados/...`).

## Blog

- Categorías: Gestión de residuos · Seguridad y flotas · Tecnología e IA · Casos · Normativa y contratos.
- Búsqueda en el cliente (sin servicios externos), destacados, lectura con índice lateral, tiempo de lectura, autoría, fechas, fuentes, etiquetas y enlaces a soluciones y casos relacionados.
- Las marcas de evidencia escritas en Markdown (`[Declarado · …]`) se convierten automáticamente en la etiqueta del design system (`src/lib/rehype-evidence.mjs`).
- Los 7 artículos actuales son **borradores** escritos solo con fuentes verificadas; llevan aviso visible y `noindex`. Para ocultarlos en producción: `PUBLIC_SHOW_DRAFTS=false`.
- Recomendación: migrar los 19 artículos del blog actual con su URL nueva y redirección, y agregar autoría individual cuando Urbetrack la defina.
