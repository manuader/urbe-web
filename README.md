# urbe-web — rediseño de urbetrack.com

Sitio estático en **Astro 5** con el design system **"Evidencia luminosa"** de Urbetrack. 46 páginas: home, 9 soluciones, 6 sectores, plataforma, 8 casos con fuente, empresa, blog (índice, categorías, 7 artículos, RSS), contacto, fuentes, privacidad y 404.

> Estado: **propuesta lista para revisión**, no publicada. Formularios en modo simulado hasta configurar HubSpot. Artículos del blog en borrador (`noindex`). Ver `docs/PENDIENTES.md`.

## Correr

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/
npm run check      # tipos
```

Node 22 o superior.

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Estrategia: propuesta de valor, públicos, mapa del sitio, narrativa, interacciones | `docs/PROPUESTA.md` |
| Extensión del design system | `docs/DS-EXTENSION.md` |
| Lenguaje de movimiento | `docs/MOTION.md` |
| HubSpot: campos, atribución, eventos, configuración pendiente | `docs/HUBSPOT.md` |
| SEO, GEO, datos estructurados, redirecciones | `docs/SEO-GEO.md` |
| Datos a validar y assets faltantes | `docs/PENDIENTES.md` |
| Reglas para escribir contenido (fuentes, evidencia, voz) | `docs/REGLAS-CONTENIDO.md` |
| Verificación realizada | `docs/QA.md` |
| Contenido de soluciones, sectores y casos | `src/data/solutions.ts`, `sectors.ts`, `cases.ts` |
| Datos de empresa, oficinas, cifras, credenciales | `src/data/site.ts` |
| Artículos del blog (Markdown) | `src/content/blog/` |
| Tokens y estilos del sistema | `src/styles/` |
| Demos animadas de producto | `src/components/demos/` |
| Integraciones (HubSpot, GTM) | `src/config.ts` y variables `PUBLIC_*` |

## Reglas que el código hace cumplir

- Toda cifra, caso o resultado lleva `Evidence` (comprobado, declarado, a validar o ilustrativo); los tipos lo exigen.
- En el blog, las marcas `[Declarado · …]` se convierten solas en la etiqueta del sistema.
- Las demos están rotuladas como simulación y se pueden pausar; con `prefers-reduced-motion` muestran el estado final.
- Las imágenes de baja resolución no se amplían (`src/lib/images.ts`).

## Variables de entorno

| Variable | Para qué | Por defecto |
|---|---|---|
| `PUBLIC_HS_PORTAL` | Portal de HubSpot | `22363928` |
| `PUBLIC_HS_REGION` | `na1` o `eu1` | `na1` |
| `PUBLIC_HS_FORM_DEMO` | GUID del formulario de demo | `PENDIENTE` (modo simulado) |
| `PUBLIC_HS_TRACKING` | Carga el script de seguimiento de HubSpot | `false` |
| `PUBLIC_GTM_ID` | Google Tag Manager | vacío |
| `PUBLIC_SHOW_DRAFTS` | Muestra artículos en borrador | `true` |

## Fuentes del contenido

`URBETRACK-CONTEXTO.md` (relevado el 28/09/2026), el dossier de hechos verificables y el design system en `design-system/sistema/`. No se inventaron clientes, cifras, certificaciones ni testimonios.
