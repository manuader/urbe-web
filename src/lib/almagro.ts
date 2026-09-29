/**
 * Geometría del mapa del hero, calculada en build a partir de OpenStreetMap
 * (Almagro, CABA, alrededor de Av. Rivadavia 4260). Coordenadas en metros
 * relativas a la casa central; y hacia el norte → se invierte para SVG.
 */
import data from '../data/geo/almagro.json';

type Pt = [number, number];
const toSvg = (p: number[]): Pt => [p[0], -p[1]];

const route: Pt[] = (data.route as number[][]).map(toSvg);
const xs = route.map((p) => p[0]);
const ys = route.map((p) => p[1]);
// Margen superior para la franja de indicadores e inferior para las tarjetas de eventos
const minX = Math.min(...xs) - 150;
const maxX = Math.max(...xs) + 150;
const minY = Math.min(...ys) - 330;
const maxY = Math.max(...ys) + 360;
const W = maxX - minX;
const H = maxY - minY;

const r = (n: number) => Math.round(n);
const inBox = (p: Pt, m = 900) => p[0] > minX - m && p[0] < maxX + m && p[1] > minY - m && p[1] < maxY + m;

const nodes = (data.nodes as number[][]).map(toSvg);
const streetD: Record<number, string[]> = { 0: [], 1: [], 2: [] };
for (const [cls, idx] of data.ways as [number, number[]][]) {
  const pts = idx.map((i) => nodes[i]);
  if (!pts.some((p) => inBox(p))) continue;
  let d = `M${r(pts[0][0])} ${r(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) {
    const dx = r(pts[i][0]) - r(pts[i - 1][0]);
    const dy = r(pts[i][1]) - r(pts[i - 1][1]);
    d += `l${dx} ${dy}`;
  }
  streetD[cls]?.push(d);
}

// Longitudes acumuladas de la ruta
const cum: number[] = [0];
for (let i = 1; i < route.length; i++) {
  cum.push(cum[i - 1] + Math.hypot(route[i][0] - route[i - 1][0], route[i][1] - route[i - 1][1]));
}
const total = cum[cum.length - 1];

function at(f: number) {
  const target = f * total;
  let i = cum.findIndex((c) => c >= target);
  if (i <= 0) i = 1;
  const t = (target - cum[i - 1]) / (cum[i] - cum[i - 1] || 1);
  const a = route[i - 1];
  const b = route[i];
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy) || 1;
  return { x: a[0] + dx * t, y: a[1] + dy * t, nx: -dy / len, ny: dx / len };
}

const N = 14;
const containers = Array.from({ length: N }, (_, k) => {
  const f = 0.055 + (k / (N - 1)) * 0.89 + (k % 3 === 1 ? 0.012 : 0);
  const p = at(f);
  const side = k % 2 === 0 ? 1 : -1;
  const off = 46;
  return { id: `CT-${2480 + k * 3}`, f: Number(f.toFixed(4)), x: r(p.x + p.nx * off * side), y: r(p.y + p.ny * off * side) };
});

export const almagro = {
  viewBox: `${r(minX)} ${r(minY)} ${r(W)} ${r(H)}`,
  box: { minX: r(minX), minY: r(minY), W: r(W), H: r(H) },
  streets: { av: streetD[0].join(''), pri: streetD[1].join(''), res: streetD[2].join('') },
  route: 'M' + route.map((p) => `${r(p[0])} ${r(p[1])}`).join('L'),
  routeLength: Math.round(total),
  start: { x: r(route[0][0]), y: r(route[0][1]) },
  end: { x: r(route[route.length - 1][0]), y: r(route[route.length - 1][1]) },
  containers,
  hq: { x: 0, y: 0 },
  source: data.source as string,
};

/** Unidades de flota para la vista "flota → unidad": nodos reales de calle, repartidos en el encuadre. */
const inner = nodes.filter((p) => p[0] > minX + 180 && p[0] < maxX - 180 && p[1] > minY + 380 && p[1] < maxY - 300);
const cols = 6, rows = 3;
const picked: Pt[] = [];
for (let cy = 0; cy < rows; cy++) {
  for (let cx = 0; cx < cols; cx++) {
    const tx = minX + 180 + ((cx + 0.5 + (cy % 2 ? 0.3 : 0)) / cols) * (W - 360);
    const ty = minY + 380 + ((cy + 0.5) / rows) * (H - 680);
    let best = inner[0], bd = Infinity;
    for (const p of inner) { const d = (p[0] - tx) ** 2 + (p[1] - ty) ** 2; if (d < bd) { bd = d; best = p; } }
    picked.push(best);
  }
}
export const fleetUnits = picked.map((p, i) => ({ x: r(p[0]), y: r(p[1]), i }));
