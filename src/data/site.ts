import type { Evidence, Metric } from './types';

/** Fecha de la última verificación de datos del sitio. Se muestra en /fuentes y en páginas de datos. */
export const VERIFIED_AT = '2026-09-28';

export const site = {
  name: 'Urbetrack',
  url: 'https://urbetrack.com',
  legalName: 'Pagustech S.R.L.',
  taxId: '30-71035969-1',
  slogan: 'Inteligencia en tu gestión',
  email: 'info@urbetrack.com',
  phone: '+54 11 5252 2370',
  phoneHref: '+541152522370',
  address: 'Av. Rivadavia 4260, pisos 11 y 12, C1205AAP, Ciudad Autónoma de Buenos Aires',
  loginUrl: 'https://red.urbetrack.com/',
  careersUrl: 'https://urbetracksrl.hiringroom.com/',
  social: {
    linkedin: 'https://www.linkedin.com/company/2582254',
    instagram: 'https://www.instagram.com/urbetrack/',
    facebook: 'https://www.facebook.com/urbetrack',
  },
  defaultDescription:
    'Software, dispositivos IoT, IA y consultoría para ver, controlar y certificar la recolección, la higiene urbana y las flotas. Oficinas en Argentina, México, Colombia, Chile y España.',
};

export interface Office {
  id: 'ar' | 'mx' | 'co' | 'cl' | 'es';
  country: string;
  city: string;
  address: string;
  phone: string;
  role: string;
  evidence: Evidence;
  flag: string;
}

export const offices: Office[] = [
  { id: 'ar', country: 'Argentina', city: 'Buenos Aires', address: 'Av. Rivadavia 4260, pisos 11 y 12', phone: '+54 11 5252 2370', role: 'Casa central', flag: '/brand/bandera-arg.png', evidence: { level: 'comprobado', note: 'Boletín Oficial CABA' } },
  { id: 'mx', country: 'México', city: 'Zapopan, Jalisco', address: 'Av. Patria 2085', phone: '+52 55 8521 9248', role: 'Oficina', flag: '/brand/bandera-mex.png', evidence: { level: 'declarado', note: 'urbetrack.com · también figura una dirección en CDMX, a validar' } },
  { id: 'co', country: 'Colombia', city: 'Bogotá', address: 'Av. 19 #95-31', phone: '+57 320 419 7975', role: 'Urbetrack S.A.S.', flag: '/brand/bandera-col.png', evidence: { level: 'comprobado', note: 'Sociedad registrada · informacolombia' } },
  { id: 'cl', country: 'Chile', city: 'Providencia, Santiago', address: 'Av. Holanda 99, Dpto. 1101', phone: '+56 2 3384 9207', role: 'Oficina', flag: '/brand/bandera-chi.png', evidence: { level: 'declarado', note: 'urbetrack.com' } },
  { id: 'es', country: 'España', city: 'Madrid', address: 'Núñez de Balboa 114, piso 3, puerta 10', phone: '+34 699 68 29 89', role: 'Urbetrack SL', flag: '/brand/bandera-esp.png', evidence: { level: 'comprobado', note: 'BORME 15/01/2024' } },
];

const DECLARADO_SITIO: Evidence = {
  level: 'declarado',
  note: 'cifras publicadas por Urbetrack',
  sources: [{ label: 'urbetrack.com y brochure “Ciclo de Aseo”', url: 'https://urbetrack.com' }],
};

export const corporateStats: Metric[] = [
  { prefix: '+', value: '42', label: 'ciudades y municipios', evidence: DECLARADO_SITIO },
  { prefix: '+', value: '11', suffix: 'k', label: 'vehículos conectados', evidence: DECLARADO_SITIO },
  { prefix: '+', value: '700', suffix: 'k t', label: 'de residuos gestionados por mes', evidence: DECLARADO_SITIO },
  { prefix: '+', value: '26', suffix: 'M', label: 'habitantes en ciudades que operan con Urbetrack', evidence: DECLARADO_SITIO },
];

export interface Credential {
  title: string;
  detail: string;
  evidence: Evidence;
  img?: string;
}

export const credentials: Credential[] = [
  {
    title: 'ISO 9001:2015',
    detail: 'TÜV Rheinland · Argentina y España · ID 9105078821',
    img: '/brand/tuv-iso9001.jpg',
    evidence: { level: 'comprobado', note: 'Certipedia', sources: [{ label: 'Certipedia · TÜV Rheinland', url: 'https://www.certipedia.com/quality_marks/9105078821?locale=en' }] },
  },
  {
    title: 'Escoba de Plata 2026',
    detail: 'ATEGRUS · Categoría F · TECMA, Madrid',
    evidence: { level: 'comprobado', note: 'Residuos Profesional', sources: [{ label: 'Residuos Profesional', url: 'https://www.residuosprofesional.com/ategrus-entrega-premios-escobas-2026/' }] },
  },
  {
    title: 'Sponsor Diamante ISWA 2025',
    detail: 'Congreso Mundial de Residuos · Buenos Aires',
    evidence: { level: 'comprobado', note: 'iswa2025.org', sources: [{ label: 'ISWA 2025 · Sponsors', url: 'https://iswa2025.org/sponsors/' }] },
  },
  {
    title: 'Auditado por la Sindicatura GCBA',
    detail: 'Informe 77-SGCBA-21 sobre el “Sistema Urbetrack”',
    evidence: { level: 'comprobado', note: 'con 15 observaciones', sources: [{ label: 'buenosaires.gob.ar', url: 'https://buenosaires.gob.ar/contenido/auditoria-del-sistema-urbetrack' }] },
  },
];

export const milestones = [
  { year: '2007', text: 'Se constituye Pagustech S.R.L., la empresa detrás de Urbetrack.', evidence: { level: 'comprobado', note: 'contrato social' } as Evidence },
  { year: '2014', text: 'Solbayres adopta la plataforma en la Ciudad de Buenos Aires.', evidence: { level: 'declarado' } as Evidence },
  { year: '2017', text: 'Telemetría sobre el 100 % de la higiene urbana porteña.', evidence: { level: 'comprobado', note: 'informe de gestión GCBA' } as Evidence },
  { year: '2019', text: 'Integración con SAP en CABA. Santa Fe y Bolívar con el sistema.', evidence: { level: 'comprobado' } as Evidence },
  { year: '2021', text: 'La Sindicatura General de la Ciudad audita el “Sistema Urbetrack”.', evidence: { level: 'comprobado' } as Evidence },
  { year: '2023', text: 'Alianza regional con SONDA. Se constituye Urbetrack SL en Madrid.', evidence: { level: 'comprobado' } as Evidence },
  { year: '2025', text: 'Piloto con el BID en Quilmes. Consultoría estratégica de residuos para el GCBA. Sponsor Diamante de ISWA.', evidence: { level: 'comprobado' } as Evidence },
  { year: '2026', text: 'Escoba de Plata ATEGRUS. Quilmes amplía el sistema con RFID e IA.', evidence: { level: 'comprobado' } as Evidence },
];

export const leadership = [
  { name: 'Pablo Hernán Ader', role: 'CEO y Socio Gerente' },
  { name: 'Ángel Brusca', role: 'Director comercial (CCO)' },
  { name: 'Gabriela Spector', role: 'Product Manager' },
];

/** Tamaño del equipo: el brief habla de ~150 personas; LinkedIn informa 51–200 (~130 perfiles). */
export const teamSize = {
  label: 'personas en el equipo',
  value: '150',
  prefix: '~',
  evidence: { level: 'validar', note: 'LinkedIn informa 51–200 · confirmar cifra oficial' } as Evidence,
};

export const quote = {
  text: 'La herramienta sirve para discutir sobre un dato, no sobre una percepción.',
  author: 'Renzo Morosi',
  role: 'Ex Subsecretario de Higiene Urbana, Gobierno de la Ciudad de Buenos Aires',
  evidence: {
    level: 'declarado',
    note: 'citado en el caso publicado por Urbetrack',
    sources: [{ label: 'Blog de Urbetrack', url: 'https://urbetrack.com/blog/transformacion-digital-servicio-higiene-aseo-urbano-ciudad-buenos-aires' }],
  } as Evidence,
};

export const logoWall = [
  { src: '/img/clientes/buenos-aires-ciudad.png', alt: 'Buenos Aires Ciudad' },
  { src: '/img/clientes/solbayres.png', alt: 'Solbayres' },
  { src: '/img/clientes/municipio-de-moreno.png', alt: 'Municipio de Moreno' },
  { src: '/img/clientes/santa-fe-ciudad.png', alt: 'Santa Fe Ciudad' },
  { src: '/img/clientes/cliba.png', alt: 'Cliba' },
  { src: '/img/clientes/veolia.png', alt: 'Veolia' },
  { src: '/img/clientes/gisa.png', alt: 'GISA' },
  { src: '/img/clientes/grupo-caabsa.png', alt: 'Grupo CAABSA' },
  { src: '/img/clientes/urbasur.png', alt: 'urBAsur' },
  { src: '/img/clientes/urbacor.png', alt: 'UrbaCor' },
  { src: '/img/clientes/transporte-panizza.png', alt: 'Transporte Panizza' },
  { src: '/img/clientes/ashira.png', alt: 'Ashira' },
];
