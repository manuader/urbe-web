/**
 * Envío a HubSpot Forms API v3 (sin iframe ni script de formularios).
 * https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}
 * Si el GUID está PENDIENTE, simula el envío (ver docs/HUBSPOT.md).
 */
import { HUBSPOT, isPending } from '../config';
import { getAttribution } from './attribution';

export interface HsField { name: string; value: string }
export interface SubmitResult { ok: boolean; simulated?: boolean; status?: number; message?: string }

function cookie(name: string) {
  return document.cookie.split('; ').find((c) => c.startsWith(`${name}=`))?.split('=')[1];
}

/** Campos ocultos de atribución. Las propiedades deben existir en HubSpot (ver docs/HUBSPOT.md). */
export function attributionFields(): HsField[] {
  const { first, last } = getAttribution();
  const out: HsField[] = [];
  const push = (name: string, v?: string) => { if (v) out.push({ name, value: v.slice(0, 250) }); };
  push('utm_source', last?.utm_source ?? first?.utm_source);
  push('utm_medium', last?.utm_medium ?? first?.utm_medium);
  push('utm_campaign', last?.utm_campaign ?? first?.utm_campaign);
  push('utm_term', last?.utm_term ?? first?.utm_term);
  push('utm_content', last?.utm_content ?? first?.utm_content);
  push('urbe_click_id', last?.click_id ?? first?.click_id);
  push('urbe_first_landing', first?.landing_page);
  push('urbe_first_referrer', first?.referrer);
  push('urbe_last_referrer', last?.referrer);
  return out;
}

export async function submitHubspot(form: keyof typeof HUBSPOT.forms, fields: HsField[], consentText: string): Promise<SubmitResult> {
  const guid = HUBSPOT.forms[form];
  const context = {
    hutk: cookie('hubspotutk'),
    pageUri: location.href.split('#')[0],
    pageName: document.title,
  };
  const body = {
    submittedAt: Date.now(),
    fields: [...fields, ...attributionFields()],
    context,
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: consentText,
        communications: [],
      },
    },
  };

  const forceError = new URLSearchParams(location.search).get('simular') === 'error';
  if (isPending(guid) || forceError) {
    console.info('[HubSpot · simulado] Formulario', form, body);
    await new Promise((r) => setTimeout(r, 1100));
    return forceError ? { ok: false, simulated: true, status: 500, message: 'Error simulado' } : { ok: true, simulated: true };
  }

  const host = HUBSPOT.region === 'eu1' ? 'https://api-eu1.hsforms.com' : 'https://api.hsforms.com';
  const url = `${host}/submissions/v3/integration/submit/${HUBSPOT.portalId}/${guid}`;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), signal: ctrl.signal });
    clearTimeout(t);
    if (res.ok) return { ok: true, status: res.status };
    let message = `HTTP ${res.status}`;
    try { const j = await res.json(); message = j?.errors?.[0]?.message || j?.message || message; } catch { /* sin cuerpo */ }
    return { ok: false, status: res.status, message };
  } catch (e) {
    return { ok: false, message: (e as Error).name === 'AbortError' ? 'Tiempo de espera agotado' : 'Sin conexión' };
  }
}
