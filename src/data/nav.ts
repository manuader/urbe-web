import type { IconName } from './types';

export interface NavLink { href: string; label: string; desc?: string; icon?: IconName }
export interface NavGroup { title: string; links: NavLink[] }

export const solutionGroups: NavGroup[] = [
  {
    title: 'Servicios urbanos',
    links: [
      { href: '/soluciones/recoleccion-certificada', label: 'Recolección certificada', desc: 'Cada levantamiento con contenedor, unidad, hora y lugar', icon: 'rfid' },
      { href: '/soluciones/barrido-e-higiene-urbana', label: 'Barrido e higiene urbana', desc: 'Cuadras barridas y lavadas, no solo recorridas', icon: 'broom' },
      { href: '/soluciones/rutas-y-contenedores', label: 'Rutas y contenedores', desc: 'Rutas fijas, a demanda o por llenado', icon: 'route' },
      { href: '/soluciones/incidencias-y-reclamos', label: 'Incidencias y reclamos', desc: 'Del reclamo con foto al cierre con evidencia', icon: 'megaphone' },
    ],
  },
  {
    title: 'Flotas y seguridad',
    links: [
      { href: '/soluciones/gestion-de-flotas', label: 'Gestión de flotas', desc: 'Posición, recorridos, mantenimiento y viajes', icon: 'truck' },
      { href: '/soluciones/movilidad-segura', label: 'Movilidad Segura', desc: 'ADAS, DSM y video por evento', icon: 'shield' },
      { href: '/soluciones/control-de-combustible', label: 'Control de combustible', desc: 'Cada carga y cada litro, con respaldo', icon: 'fuel' },
    ],
  },
  {
    title: 'Transversal',
    links: [
      { href: '/soluciones/ia-y-video-analitica', label: 'IA y Video-Analítica', desc: 'Cámaras que reconocen y documentan eventos', icon: 'eye' },
      { href: '/soluciones/consultoria', label: 'Consultoría', desc: 'Diagnóstico, planes de trabajo y pliegos', icon: 'compass' },
    ],
  },
];

export const sectorGroups: NavGroup[] = [
  {
    title: 'Sector público',
    links: [
      { href: '/sectores/gobiernos', label: 'Gobiernos y municipios', desc: 'Controlar y pagar por servicio verificado', icon: 'building' },
      { href: '/sectores/prestadores', label: 'Prestadores de higiene urbana', desc: 'Demostrar cumplimiento por turno', icon: 'container' },
    ],
  },
  {
    title: 'Empresas',
    links: [
      { href: '/sectores/oil-gas', label: 'Oil & Gas', desc: 'Personas y activos en zonas remotas', icon: 'oil' },
      { href: '/sectores/mineria', label: 'Minería', desc: 'Seguridad en altura, polvo y sin cobertura', icon: 'mine' },
      { href: '/sectores/construccion', label: 'Construcción', desc: 'Entregas de hormigón y áridos a tiempo', icon: 'crane' },
      { href: '/sectores/logistica', label: 'Logística y transporte', desc: 'Flotas más seguras y eficientes', icon: 'box' },
    ],
  },
];

export const mainNav = [
  { label: 'Soluciones', href: '/soluciones', mega: 'soluciones' as const },
  { label: 'Sectores', href: '/sectores', mega: 'sectores' as const },
  { label: 'Plataforma', href: '/plataforma' },
  { label: 'Casos', href: '/casos' },
  { label: 'Empresa', href: '/empresa' },
  { label: 'Recursos', href: '/recursos/blog' },
];

export const blogCategories = [
  { slug: 'gestion-de-residuos', label: 'Gestión de residuos' },
  { slug: 'seguridad-y-flotas', label: 'Seguridad y flotas' },
  { slug: 'tecnologia-e-ia', label: 'Tecnología e IA' },
  { slug: 'casos', label: 'Casos' },
  { slug: 'normativa-y-contratos', label: 'Normativa y contratos' },
] as const;
