/** Pestañas accesibles (patrón WAI-ARIA): clic, flechas, Inicio y Fin. */
export function initTabs(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-tabs]').forEach((list) => {
    if (list.dataset.tabsReady) return;
    list.dataset.tabsReady = '1';
    const tabs = [...list.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
    const select = (t: HTMLButtonElement, focus = false) => {
      tabs.forEach((x) => {
        const on = x === t;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        const p = document.getElementById(x.getAttribute('aria-controls')!);
        if (p) p.hidden = !on;
      });
      if (focus) t.focus();
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        const k = e.key;
        const n = k === 'ArrowRight' ? (i + 1) % tabs.length : k === 'ArrowLeft' ? (i - 1 + tabs.length) % tabs.length : k === 'Home' ? 0 : k === 'End' ? tabs.length - 1 : -1;
        if (n >= 0) { e.preventDefault(); select(tabs[n], true); }
      });
    });
  });
}
