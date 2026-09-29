/**
 * Atribución de campañas, en almacenamiento propio (sin cookies de terceros).
 * - Primer contacto (first touch): se guarda una sola vez en localStorage.
 * - Último contacto (last touch): se actualiza en cada visita con parámetros de campaña.
 * Se envía con cada formulario a HubSpot como campos ocultos (ver docs/HUBSPOT.md).
 */
export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const CLICK_IDS = ['gclid', 'fbclid', 'msclkid', 'li_fat_id'] as const;

export interface Touch {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  click_id?: string;
  referrer?: string;
  landing_page?: string;
  ts?: string;
}

const FIRST = 'u-attr-first';
const LAST = 'u-attr-last';

function safeGet(k: string): Touch | null {
  try { const v = localStorage.getItem(k); return v ? (JSON.parse(v) as Touch) : null; } catch { return null; }
}
function safeSet(k: string, v: Touch) {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* modo privado: se ignora */ }
}

export function captureAttribution() {
  const q = new URLSearchParams(location.search);
  const touch: Touch = {};
  UTM_KEYS.forEach((k) => { const v = q.get(k); if (v) touch[k] = v.slice(0, 120); });
  CLICK_IDS.forEach((k) => { const v = q.get(k); if (v && !touch.click_id) touch.click_id = `${k}:${v.slice(0, 100)}`; });
  const ref = document.referrer && !document.referrer.startsWith(location.origin) ? document.referrer : '';
  const hasCampaign = Object.keys(touch).length > 0;
  const base: Touch = { ...touch, referrer: ref || undefined, landing_page: location.pathname, ts: new Date().toISOString() };
  if (!safeGet(FIRST)) safeSet(FIRST, base);
  if (hasCampaign || ref) safeSet(LAST, base);
}

export function getAttribution() {
  return { first: safeGet(FIRST), last: safeGet(LAST) };
}
