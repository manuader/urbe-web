/**
 * Comportamiento global: revelado al entrar en pantalla, contadores,
 * atribución de campañas y eventos de conversión.
 * Todo respeta prefers-reduced-motion: el contenido nunca depende de la animación.
 */
import { captureAttribution } from './attribution';
import { track } from './analytics';

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Revelado ---------- */
document.documentElement.classList.add('js');
const rvTargets = document.querySelectorAll<HTMLElement>('[data-rv]');
if (!reduce && 'IntersectionObserver' in window) {
  // Lo que ya está en pantalla se muestra sin animar; el resto entra al aparecer
  rvTargets.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.92 && r.bottom > 0) el.classList.add('is-in');
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  rvTargets.forEach((el) => { if (!el.classList.contains('is-in')) io.observe(el); });
  document.documentElement.classList.add('rv-ready');
}

/* ---------- Contadores ---------- */
function formatNum(n: number) {
  return Math.round(n).toLocaleString('es-AR');
}
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (!reduce && 'IntersectionObserver' in window) {
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        cio.unobserve(el);
        const to = Number(el.dataset.count);
        if (!Number.isFinite(to)) return;
        const dur = 1600;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = formatNum(to * eased);
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = formatNum(to);
        };
        el.textContent = '0';
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => cio.observe(el));
}

/* ---------- Videos en bucle: pausa accesible (WCAG 2.2.2) ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-video-toggle]').forEach((btn) => {
  const video = document.getElementById(btn.dataset.videoToggle!) as HTMLVideoElement | null;
  if (!video) return;
  const sync = () => {
    const playing = !video.paused;
    btn.setAttribute('aria-pressed', String(!playing));
    btn.setAttribute('aria-label', playing ? 'Pausar video' : 'Reproducir video');
    btn.classList.toggle('is-paused', !playing);
  };
  btn.addEventListener('click', () => (video.paused ? video.play() : video.pause()));
  video.addEventListener('play', sync);
  video.addEventListener('pause', sync);
  if (reduce) video.pause();
  sync();
});

/* ---------- Atribución y eventos ---------- */
captureAttribution();
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest<HTMLElement>('[data-cta]');
  if (a) track('cta_click', { cta_location: a.dataset.cta, cta_text: a.textContent?.trim().slice(0, 60) });
  const out = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="https://red.urbetrack.com"]');
  if (out) track('login_click', {});
});
