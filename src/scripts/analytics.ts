/**
 * Eventos de conversión. Se empujan a window.dataLayer (GTM / GA4) y, si el
 * script de HubSpot está cargado, a su cola de eventos (_hsq).
 * Nomenclatura en docs/HUBSPOT.md → "Eventos".
 */
declare global {
  interface Window { dataLayer?: Record<string, unknown>[]; _hsq?: unknown[] }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  const payload = { event, page_path: location.pathname, ...params };
  (window.dataLayer = window.dataLayer || []).push(payload);
  if (window._hsq) window._hsq.push(['trackCustomBehavioralEvent', { name: event, properties: params }]);
  if (import.meta.env.DEV) console.info('[track]', payload);
}
