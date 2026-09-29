# HubSpot: formularios, atribución y eventos

## Estado

- El formulario de demo está **terminado del lado del sitio** y funciona en **modo simulado**: valida, avanza por pasos, muestra "Enviando…", éxito o error, y empuja todos los eventos. No envía datos a HubSpot hasta completar la configuración de abajo.
- Portal: `22363928` (visto en `/hubfs/` y en los formularios del sitio actual). **Confirmar.**

## Configuración pendiente

| # | Qué | Dónde se configura | Quién |
|---|---|---|---|
| 1 | Crear el formulario "Solicitud de demo (web 2026)" en HubSpot y copiar su GUID | `PUBLIC_HS_FORM_DEMO` (variable de entorno) o `src/config.ts` | Marketing / RevOps |
| 2 | Confirmar la región del portal (`na1` o `eu1`) | `PUBLIC_HS_REGION` | RevOps |
| 3 | Crear las propiedades de contacto personalizadas de la tabla "Campos" | HubSpot → Propiedades | RevOps |
| 4 | Agregar esas propiedades como campos ocultos al formulario (si no están en el formulario, HubSpot las rechaza) | Editor de formularios | RevOps |
| 5 | Texto de consentimiento y suscripciones (GDPR para España) | Formulario + `DemoForm.astro` | Legal |
| 6 | Decidir si se carga el script de seguimiento (cookie `hubspotutk`) y con qué banner de consentimiento | `PUBLIC_HS_TRACKING=true` + banner | Marketing + Legal |
| 7 | Contenedor de Google Tag Manager, si se usa | `PUBLIC_GTM_ID` | Marketing |
| 8 | Flujo de asignación del lead por tipo de organización y país | Workflows de HubSpot | Comercial |
| 9 | Notificación interna y correo de confirmación al contacto | Workflows | Marketing |

Con 1 y 2 resueltos, el envío real queda activo en el siguiente build. Para probar el estado de error sin enviar nada: agregar `?simular=error` a la URL.

## Envío

- Endpoint: `POST https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}` (o `api-eu1.hsforms.com`).
- Sin iframe ni script de formularios de HubSpot: el diseño y la accesibilidad son del sitio.
- Se envía `context.pageUri`, `context.pageName` y, si existe, `context.hutk`.
- Tiempo de espera: 15 s. Error de red, tiempo agotado o respuesta no 2xx → estado de error con reintento y correo alternativo. Los datos cargados no se pierden.
- Trampa anti-bots: campo oculto `empresa_web`; si viene con valor, no se envía.

## Campos

| Campo del formulario | Propiedad HubSpot | Tipo | Estándar |
|---|---|---|---|
| Nombre y apellido | `firstname` + `lastname` | texto | Sí |
| Correo laboral | `email` | email | Sí |
| Organización | `company` | texto | Sí |
| País | `country` | desplegable | Sí |
| Teléfono (opcional) | `phone` | texto | Sí |
| Mensaje (opcional) | `message` | texto largo | Sí |
| Tipo de organización | `urbe_tipo_organizacion` | desplegable: gobierno, prestador, empresa, otro | **Crear** |
| Qué quiere resolver | `urbe_interes` | casillas múltiples (valores separados por `;`), slugs de soluciones | **Crear** |
| Origen del formulario | `urbe_origen_formulario` | texto: `home`, `contacto`, `solucion-<slug>`, `sector-<slug>`, `caso-<slug>`, `blog-<slug>` | **Crear** |

## Atribución de campañas

Se guarda en almacenamiento propio del navegador (`localStorage`), sin cookies de terceros:

- **Primer contacto:** se guarda una vez (`u-attr-first`): UTM, click id, referente externo y página de entrada.
- **Último contacto:** se actualiza cuando la visita trae UTM o referente externo (`u-attr-last`).

Se envía con cada formulario (último contacto con respaldo del primero):

| Propiedad | Valor | Estándar |
|---|---|---|
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | parámetros UTM | **Crear** (HubSpot solo trae las `hs_analytics_*` con el script de seguimiento) |
| `urbe_click_id` | `gclid:…`, `fbclid:…`, `msclkid:…` o `li_fat_id:…` | **Crear** |
| `urbe_first_landing` | primera página vista | **Crear** |
| `urbe_first_referrer` / `urbe_last_referrer` | sitio de origen | **Crear** |

Los formularios pueden precargarse desde la URL: `/contacto?tipo=gobierno&interes=movilidad-segura`. Cada página de solución, sector y caso ya precarga su interés o tipo.

## Eventos

Se empujan a `window.dataLayer` (GTM / GA4) y a `_hsq` si el script de HubSpot está cargado.

| Evento | Cuándo | Parámetros |
|---|---|---|
| `cta_click` | Clic en cualquier elemento con `data-cta` (hero, barra, menú, pie, héroes de página) | `cta_location`, `cta_text` |
| `login_click` | Clic en "Ingresar" (red.urbetrack.com) | — |
| `demo_form_view` | El formulario entra en pantalla (una vez) | `form_source` |
| `demo_form_start` | Primera interacción | `form_source` |
| `demo_form_step` | Avance de paso | `step`, `form_source`, `org_type` |
| `demo_form_submit` | Envío validado | `form_source`, `org_type`, `interests` |
| `demo_form_success` | Respuesta OK | `form_source`, `org_type`, `simulated` |
| `generate_lead` | Respuesta OK (evento recomendado de GA4) | `form_source` |
| `demo_form_error` | Error de envío | `form_source`, `error`, `status` |

**Conversión principal:** `generate_lead`. Recomendado marcarla como conversión en GA4 y como evento de conversión en las plataformas de anuncios.

## Estados del formulario

| Estado | Qué ve la persona |
|---|---|
| Inicial | Paso 1 de 3 con barra de avance |
| Error de validación | Mensaje debajo del campo que dice qué falta y cómo corregirlo; foco en el primer campo con error; `aria-invalid` y `aria-live` |
| Enviando | Botón con spinner y "Enviando…"; no se puede enviar dos veces |
| Éxito | Confirmación con los tres pasos siguientes; foco en el mensaje; en modo simulado lo aclara |
| Error de envío | Mensaje con reintento y correo alternativo; los datos siguen cargados |
| Sin JavaScript | Los tres pasos se ven juntos; el correo y el teléfono quedan como alternativa |
