/**
 * Contratos de contenido del sitio.
 * Regla de marca: ninguna cifra, caso o resultado sale sin `Evidence`.
 *  - comprobado: organismo público, boletín oficial, órgano de control, certificadora o prensa independiente
 *  - declarado:  lo dice Urbetrack o un socio (sitio, blog, brochure, entrevista)
 *  - validar:    mención indirecta, datos que no coinciden o sin fuente accesible
 *  - ilustrativo: simulación, maqueta o valores de ejemplo (nunca un resultado)
 */
export type EvidenceLevel = 'comprobado' | 'declarado' | 'validar' | 'ilustrativo';

export interface Source {
  label: string;
  url?: string;
}

export interface Evidence {
  level: EvidenceLevel;
  /** Texto corto que acompaña la etiqueta: "Boletín Oficial CABA", "metodología no publicada" */
  note?: string;
  sources?: Source[];
}

export interface Metric {
  /** Solo el número, con coma decimal: "98", "56–60", "1" */
  value: string;
  prefix?: string; // "+", "−", "de"
  suffix?: string; // " %", "k", " t/día"
  label: string; // máx. ~40 caracteres
  evidence: Evidence;
}

/** Nombres válidos de íconos (ver src/components/Icon.astro) */
export type IconName =
  | 'truck' | 'container' | 'rfid' | 'sensor' | 'route' | 'pin' | 'alert' | 'shield'
  | 'camera' | 'fuel' | 'wrench' | 'chart' | 'users' | 'building' | 'broom' | 'water'
  | 'leaf' | 'doc' | 'check' | 'clock' | 'phone' | 'cloud' | 'plug' | 'satellite'
  | 'eye' | 'steering' | 'flag' | 'globe' | 'layers' | 'search' | 'map' | 'bell'
  | 'spark' | 'gauge' | 'helmet' | 'mine' | 'oil' | 'crane' | 'box' | 'handshake'
  | 'compass' | 'lock' | 'cpu' | 'megaphone';

export interface Hero {
  kicker: string; // máx. 5 palabras, nombra la sección o el producto
  /** Titular mixto: la parte Light plantea, la parte ExtraBold nombra lo que importa */
  titleLight: string;
  titleBold: string;
  lead: string; // máx. ~160 caracteres
  image: string; // ruta bajo /public, ej. "/img/tel-rfid-contenedor.webp"
  imageAlt: string;
}

export interface Seo {
  title: string; // máx. 60 caracteres, sin "| Urbetrack" (se agrega solo)
  description: string; // 140–160 caracteres
}

export interface FaqItem {
  q: string;
  a: string; // respuesta autocontenida, 1–3 frases, útil para buscadores y asistentes
}

/** La cadena que exige el brief: problema → capacidad → decisión o acción → resultado esperado */
export interface ValueChain {
  problem: string;
  capability: string;
  decision: string;
  result: string;
  evidence?: Evidence; // obligatoria si `result` trae una cifra
}

export interface Solution {
  slug: string;
  group: 'servicios-urbanos' | 'flotas-y-seguridad' | 'transversal';
  name: string;
  short: string; // una línea para tarjetas (≤ 90 caracteres)
  icon: IconName;
  seo: Seo;
  hero: Hero;
  forWhom: { who: string; question: string }[]; // 2–3
  problem: {
    title: string;
    body: string;
    /** El costo operativo de mantener el problema, sin alarmismo */
    costs: { title: string; body: string; evidence?: Evidence }[]; // 2–3
  };
  howItWorks: { title: string; body: string }[]; // 3–5 pasos
  chain: ValueChain[]; // 3–4
  features: string[]; // capacidades concretas, empiezan con sustantivo, sin punto final
  products: string[]; // nombres de producto exactos involucrados
  proof?: { caseSlugs: string[]; metrics?: Metric[] };
  faq: FaqItem[]; // 3–5
  related: string[]; // slugs de otras soluciones
  sectors: string[]; // slugs de sectores
  /** Lo que falta confirmar antes de publicar esta página */
  pending?: string[];
}

export interface Sector {
  slug: string;
  audience: 'publico' | 'empresas';
  name: string;
  short: string;
  icon: IconName;
  seo: Seo;
  hero: Hero;
  question: string; // la pregunta del comprador, entre comillas
  pains: { title: string; body: string }[]; // 3–4
  outcomes: { title: string; body: string; evidence?: Evidence }[]; // 3–4
  solutions: string[]; // slugs de soluciones, en orden de relevancia
  /** Cómo se implementa o se contrata para este público */
  journey: { title: string; body: string }[]; // 3–5
  caseSlugs: string[];
  logos?: { src: string; alt: string }[];
  logosNote?: string;
  faq: FaqItem[];
  pending?: string[];
}

export type CountryCode = 'AR' | 'MX' | 'CO' | 'CL' | 'ES';

export interface CaseStudy {
  slug: string;
  client: string;
  place: string; // "Ciudad de Buenos Aires"
  country: CountryCode;
  sector: string; // slug de sector
  period: string; // "2017–2026"
  summary: string; // una línea
  image: string;
  imageAlt: string;
  challenge: string;
  implemented: string[];
  results: { value?: string; prefix?: string; suffix?: string; label: string; evidence: Evidence }[];
  quote?: { text: string; author: string; role: string; evidence: Evidence };
  /** Matiz obligatorio cuando existe (ej. observaciones de una auditoría) */
  context?: string;
  sources: Source[]; // al menos una; no se publica un caso sin fuente
  evidence: Evidence; // nivel general del caso
  solutions: string[];
  featured?: boolean;
  logo?: string;
  pending?: string[];
}
