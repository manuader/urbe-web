/**
 * Configuración de integraciones. Los valores `PENDIENTE` bloquean el envío real
 * y activan el modo simulado (ver docs/HUBSPOT.md).
 * Se pueden sobreescribir con variables de entorno PUBLIC_* al construir.
 */
const env = import.meta.env;

export const HUBSPOT = {
  /** Portal de urbetrack.com (visto en /hubfs/ y en los formularios del sitio actual) */
  portalId: (env.PUBLIC_HS_PORTAL as string) || '22363928',
  /** Región del portal: na1 (api.hsforms.com) o eu1 (api-eu1.hsforms.com). A confirmar. */
  region: ((env.PUBLIC_HS_REGION as string) || 'na1') as 'na1' | 'eu1',
  forms: {
    demo: (env.PUBLIC_HS_FORM_DEMO as string) || 'PENDIENTE',
    contacto: (env.PUBLIC_HS_FORM_CONTACTO as string) || 'PENDIENTE',
    newsletter: (env.PUBLIC_HS_FORM_NEWSLETTER as string) || 'PENDIENTE',
  },
  /** Carga el script de seguimiento (cookie hubspotutk). Requiere banner de consentimiento. */
  tracking: (env.PUBLIC_HS_TRACKING as string) === 'true',
};

export const ANALYTICS = {
  /** Google Tag Manager. Vacío = no se carga. Los eventos igual se empujan a window.dataLayer. */
  gtmId: (env.PUBLIC_GTM_ID as string) || '',
};

export const isPending = (v: string) => !v || v === 'PENDIENTE';
