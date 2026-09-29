/**
 * Imágenes del banco actual con menos de ~900 px de ancho. No se amplían:
 * se muestran a tamaño nativo sobre fondo de estudio (ver docs/PENDIENTES.md → assets).
 */
export const LOWRES: Record<string, number> = {
  '/img/campana/sensores-levanta-contenedor.webp': 506,
  '/img/campana/sensores-barredora.webp': 506,
  '/img/campana/sensores-compactador.webp': 506,
  '/img/campana/sensores-roll-off.webp': 506,
  '/img/campana/sensores-hidrolavadora-flusher.webp': 504,
  '/img/campana/sensores-barrido-manual.webp': 498,
  '/img/campana/camion-dsm.webp': 614,
  '/img/campana/camion-frente.webp': 595,
  '/img/campana/camion-anillo.webp': 547,
  '/img/campana/camion-trasera-operario.webp': 655,
  '/img/campana/camion-adas-peaton.webp': 854,
  '/img/mod-monitor-online.webp': 600,
  '/img/mod-monitor-historico.webp': 600,
  '/img/mod-monitor-calidad.webp': 600,
  '/img/mod-simulador-3d.webp': 600,
  '/img/mod-incidencias.webp': 643,
  '/img/fleet-escritorio.webp': 600,
  '/img/caso-solbayres.webp': 407,
  '/img/caso-caba.webp': 407,
  '/img/ia-vaciado.webp': 407,
  '/img/ia-llenado.webp': 407,
  '/img/ia-tipo-residuo.webp': 407,
  '/img/consultoria-mesa.webp': 889,
};
export const nativeWidth = (src?: string) => (src ? LOWRES[src] : undefined);
