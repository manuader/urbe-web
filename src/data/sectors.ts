import type { Sector, Source } from './types';

/* Fuentes reutilizadas. Todas salen de URBETRACK-CONTEXTO.md o del dossier. */
const SRC = {
  auditoria: {
    label: 'Sindicatura General de la Ciudad, Informe 77-SGCBA-21',
    url: 'https://buenosaires.gob.ar/contenido/auditoria-del-sistema-urbetrack',
  },
  auditoriaPdf: {
    label: 'Informe 77-SGCBA-21 (PDF)',
    url: 'https://buenosaires.gob.ar/sites/default/files/media/document/2022/06/29/780f08bc6d268d18c425f1f3128e308fd06341d4.pdf',
  },
  lpu25: {
    label: 'Boletín Oficial CABA N.º 7347, Res. 69/SSHIG/26 (LPU 7162-0388-LPU25)',
    url: 'https://documentosboletinoficial.buenosaires.gob.ar/publico/ck_PE-RES-MJGGC-SSHIG-69-26-7347.pdf',
  },
  aseo: { label: 'urbetrack.com, Aseo & Smart City', url: 'https://urbetrack.com/aseo-smart-city' },
  brochureAseo: {
    label: 'Brochure Servicios Públicos, Ciclo de Aseo',
    url: 'https://urbetrack.com/hubfs/Brochure%20Servicios%20P%C3%BAblicos%20CICLO%20DE%20ASEO.pdf',
  },
  ods: {
    label: 'Blog de Urbetrack, ODS en acción',
    url: 'https://urbetrack.com/blog/ods-en-accion-urbetrack-acerca-cumplimiento-metas',
  },
  solbayres: {
    label: 'Blog de Urbetrack, caso Solbayres',
    url: 'https://urbetrack.com/blog/c%C3%B3mo-solbayres-optimiza-su-gesti%C3%B3n-de-residuos-urbanos-con-tecnolog%C3%ADa-y-datos',
  },
  fleet: { label: 'urbetrack.com, Fleet Management', url: 'https://urbetrack.com/fleet-management' },
  oilGas: { label: 'urbetrack.com, Oil & Gas', url: 'https://urbetrack.com/oil-y-gas' },
  fatiga: {
    label: 'Blog de Urbetrack, monitoreo de fatiga',
    url: 'https://urbetrack.com/blog/como-monitoreo-fatiga-previene-accidentes-flota',
  },
  mineria: { label: 'urbetrack.com, Minería', url: 'https://urbetrack.com/miner%C3%ADa' },
  mineriaCostos: {
    label: 'Blog de Urbetrack, tres costos silenciosos en la mina',
    url: 'https://urbetrack.com/blog/tres-costos-silenciosos-mina-combustible-ralent%C3%AD-mantenimiento',
  },
  saltaMining: {
    label: 'Salta Mining, entrevista a Pablo Ader (26/08/2024)',
    url: 'https://saltamining.com/contenido/3387/urbetrack-hemos-superado-desafios-muy-importantes-en-empresas-mineras-que-operan',
  },
  construccion: { label: 'urbetrack.com, Construcción', url: 'https://urbetrack.com/construccion' },
  combustibleBlog: {
    label: 'Blog de Urbetrack, control de combustible en flotas',
    url: 'https://urbetrack.com/blog/c%C3%B3mo-un-sistema-de-control-de-combustible-detecta-irregularidades-en-flotas-municipales',
  },
  sobereye: { label: 'SOBEREYE', url: 'https://www.sobereye.com/' },
} satisfies Record<string, Source>;

const LOGOS_NOTE_ASEO = 'Organizaciones cuyos logos publica urbetrack.com. No implica aval.';

/** Pasos de implementación comunes a empresas con flota (URBETRACK-CONTEXTO.md §8). */
const journeyEmpresas = (instalacion: string): Sector['journey'] => [
  {
    title: 'Relevamiento y propuesta',
    body: 'Relevamos tu operación antes de cotizar: flota, recorridos, turnos y sistemas en uso. La propuesta se arma sobre ese relevamiento, no sobre un paquete cerrado.',
  },
  {
    title: 'Contratación como servicio',
    body: 'Contratas licencias de uso por módulo, con o sin provisión e instalación de dispositivos, y la consultoría que necesites. Sumas módulos a medida que la operación lo pide.',
  },
  { title: 'Instalación y puesta en marcha', body: instalacion },
  {
    title: 'Capacitación y transferencia',
    body: 'Capacitamos a conductores, supervisores y administradores para que el equipo use la plataforma sin depender de nosotros.',
  },
  {
    title: 'Soporte 24x7 y mejora continua',
    body: 'La Mesa de Ayuda atiende 24x7. Con los datos de los primeros meses ajustamos reglas, alertas y reportes a tu operación.',
  },
];

export const sectors: Sector[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'gobiernos',
    audience: 'publico',
    name: 'Gobiernos y municipios',
    short: 'Verifica con datos que el servicio que pagas se prestó cuadra por cuadra.',
    icon: 'building',
    seo: {
      title: 'Control de higiene urbana para gobiernos y municipios',
      description:
        'Verifica recolección, barrido y reclamos con telemetría y RFID. Tablero para el organismo de control y pago vinculado a evidencia. Casos en CABA y Quilmes.',
    },
    hero: {
      kicker: 'Gobiernos y municipios',
      titleLight: 'Una ciudad se mide',
      titleBold: 'cuadra por cuadra.',
      lead: 'Cada levantamiento queda vinculado a contenedor, unidad, hora y lugar. Tu organismo de control ve lo mismo que el prestador y paga sobre evidencia.',
      image: '/img/equipo-monitoreo.webp',
      imageAlt: 'Dos personas revisan un tablero de control en monitores, con un camión recolector detrás del ventanal.',
    },
    question: '“¿Cómo sé que el servicio que pago se prestó en cada cuadra?”',
    pains: [
      {
        title: 'Pagas sobre lo que declara el prestador',
        body: 'Sin un registro propio, el certificado mensual depende del parte del contratista. Cada diferencia se discute con papeles contra papeles.',
      },
      {
        title: 'El reclamo del vecino llega antes que el dato',
        body: 'Te enteras de un contenedor sin vaciar cuando alguien llama. No sabes si la unidad pasó, a qué hora ni qué hizo en esa cuadra.',
      },
      {
        title: 'Los planes de trabajo viven en papel',
        body: 'Rutas, frecuencias y dotaciones cambian sin quedar registradas. Auditar lo planificado contra lo ejecutado lleva semanas.',
      },
      {
        title: 'El próximo pliego se escribe sin datos',
        body: 'Sin historia operativa, es difícil fijar indicadores, frecuencias y penalidades que después se puedan medir.',
      },
    ],
    outcomes: [
      {
        title: 'Un tablero para el organismo de control',
        body: 'Monitor Online, Monitor Histórico y Monitor de Calidad muestran planificado contra ejecutado por ruta, prestador y turno. En 2021, la Sindicatura General de la Ciudad de Buenos Aires concluyó que el sistema soporta adecuadamente la gestión de recolección, “constituyendo este aspecto en una fortaleza”. El informe también registra 15 observaciones.',
        evidence: {
          level: 'comprobado',
          note: 'Informe 77-SGCBA-21; incluye 15 observaciones',
          sources: [SRC.auditoria, SRC.auditoriaPdf],
        },
      },
      {
        title: 'Pago vinculado a evidencia',
        body: 'El Cierre de Servicio certifica cada turno con RFID, GPS y sensores de trabajo. Así puedes vincular el pago al contratista con un registro verificable.',
        evidence: { level: 'declarado', sources: [SRC.aseo, SRC.brochureAseo] },
      },
      {
        title: 'Reclamos con foto y cierre',
        body: 'Las incidencias entran por app, integración con terceros o carga web. Se geolocalizan, se asignan a una cuadrilla y se cierran con foto en Urbe+.',
        evidence: { level: 'declarado', sources: [SRC.brochureAseo] },
      },
      {
        title: 'Consultoría para pliegos y concesiones',
        body: 'Ingenieros ambientales, geógrafos y sociólogos diseñan planes de trabajo, rutas e indicadores medibles. La Ciudad de Buenos Aires adjudicó a Urbetrack su consultoría de gestión estratégica de residuos en 2025.',
        evidence: { level: 'comprobado', note: 'LPU 7162-0388-LPU25', sources: [SRC.lpu25] },
      },
    ],
    solutions: [
      'recoleccion-certificada',
      'barrido-e-higiene-urbana',
      'incidencias-y-reclamos',
      'rutas-y-contenedores',
      'consultoria',
      'ia-y-video-analitica',
      'gestion-de-flotas',
    ],
    journey: [
      {
        title: 'Relevamiento de tu operación',
        body: 'La propuesta se arma después de relevar la operación: rutas, flota, contenedores, prestadores y pliego vigente. No cotizamos un paquete cerrado.',
      },
      {
        title: 'Modalidad de compra',
        body: 'Los municipios contratan por licitación, concurso de precios o compra directa. Se contratan licencias de uso por módulo, con o sin provisión e instalación de dispositivos, más consultoría. San Carlos de Bolívar, por ejemplo, lo contrató como licencia mensual por equipo.',
      },
      {
        title: 'Consultoría y plan de trabajo',
        body: 'Diseñamos y digitalizamos los planes de trabajo: rutas fijas, a demanda o inteligentes, con dotación y vehículo asignados a cada servicio.',
      },
      {
        title: 'Instalación y capacitación',
        body: 'Instalamos GPS, antenas RFID, tags en contenedores y sensores de trabajo en las unidades. Después capacitamos a inspectores, supervisores y prestadores.',
      },
      {
        title: 'Soporte 24x7 y mejora continua',
        body: 'La Mesa de Ayuda atiende 24x7. Con Monitor de Calidad y los reportes ajustamos frecuencias, rutas y contenedores a lo que muestran los datos.',
      },
    ],
    caseSlugs: ['gcba', 'quilmes', 'moreno', 'santa-fe', 'irapuato'],
    logos: [
      { src: '/img/clientes/buenos-aires-ciudad.png', alt: 'Buenos Aires Ciudad' },
      { src: '/img/clientes/municipio-de-moreno.png', alt: 'Municipio de Moreno' },
      { src: '/img/clientes/santa-fe-ciudad.png', alt: 'Santa Fe Ciudad' },
      { src: '/img/clientes/rosario.png', alt: 'Rosario' },
      { src: '/img/clientes/municipalidad-de-cordoba.png', alt: 'Municipalidad de Córdoba' },
      { src: '/img/clientes/san-martin.png', alt: 'San Martín' },
      { src: '/img/clientes/nueve-de-julio.png', alt: 'Nueve de Julio' },
    ],
    logosNote: LOGOS_NOTE_ASEO,
    faq: [
      {
        q: '¿Cómo contrata Urbetrack un municipio?',
        a: 'Por licitación, concurso de precios o compra directa. Se contratan licencias de uso por módulo, con o sin provisión e instalación de dispositivos, más consultoría. La propuesta se arma después de relevar la operación.',
      },
      {
        q: '¿Qué es la certificación por telemetría?',
        a: 'Es verificar el servicio con datos de los propios equipos: GPS, sensores de trabajo del camión y la lectura del tag RFID de cada contenedor por una antena en la tolva. Cada levantamiento queda asociado a contenedor, unidad, hora y lugar.',
      },
      {
        q: '¿Se integra con los sistemas que ya usa el municipio?',
        a: 'Sí. Urbetrack se integra con ERP, CRM, balanzas y sistemas de rastreo de terceros. En la Ciudad de Buenos Aires está integrado con SAP desde 2019.',
      },
      {
        q: '¿Puedo reportar huella de carbono y ODS?',
        a: 'El Dashboard de Huella de Carbono estima el CO₂ por tipo y modelo de camión, cargado o descargado, y ordena las rutas por emisiones. Urbetrack asocia su oferta a los ODS 11, 12, 13 y 16.',
      },
      {
        q: '¿Qué dijo la auditoría de la Ciudad de Buenos Aires?',
        a: 'La Sindicatura General concluyó en 2021 que el sistema “soporta adecuadamente los procesos” de recolección de residuos, “constituyendo este aspecto en una fortaleza”. El mismo informe, 77-SGCBA-21, registra 15 observaciones que puedes leer en el documento publicado.',
      },
    ],
    pending: [
      'URL pública de la ordenanza 2557/2019 de San Carlos de Bolívar y de los decretos de Moreno en SIBOM (respaldan la modalidad de contratación).',
      'Logos de Rosario, Municipalidad de Córdoba, San Martín y Nueve de Julio: solo figuran en urbetrack.com, sin fuente independiente.',
      'Huella de carbono y ODS: declarado, sin cifras publicadas de CO₂ evitado.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'prestadores',
    audience: 'publico',
    name: 'Prestadores de higiene urbana',
    short: 'Demuestra tu cumplimiento turno por turno, con evidencia de cada levantamiento.',
    icon: 'truck',
    seo: {
      title: 'Evidencia de cumplimiento para prestadores de higiene urbana',
      description:
        'Certifica cada levantamiento por turno con RFID y sensores de trabajo. Evidencia para descargos, ranking de conductores, mantenimiento y balanzas integradas.',
    },
    hero: {
      kicker: 'Prestadores de higiene urbana',
      titleLight: 'Cada vehículo informa',
      titleBold: 'qué trabajo hizo.',
      lead: 'RFID, GPS y sensores de trabajo registran cada levantamiento, cada cuadra barrida y cada lavado. Llegas a la auditoría con el turno ya certificado.',
      image: '/img/tel-roll-off.webp',
      imageAlt: 'Primer plano del sistema hidráulico de un camión recolector estacionado en la calle.',
    },
    question: '“¿Cómo demuestro mi cumplimiento antes de que me lo discutan?”',
    pains: [
      {
        title: 'Un acta mal labrada se paga igual',
        body: 'Sin un registro propio del momento del levantamiento, contestar un acta es tu palabra contra la del inspector.',
      },
      {
        title: 'Las multas cuestan más que su monto',
        body: 'Se calculan en puntos sobre la facturación mensual del servicio. En algunos municipios, acumular multas inhabilita para volver a ofertar.',
      },
      {
        title: 'El GPS dice dónde estuvo, no qué hizo',
        body: 'Saber que la unidad pasó por la cuadra no prueba que levantó el contenedor, barrió o lavó. Esa diferencia es la que se discute.',
      },
      {
        title: 'La flota se desgasta sin datos',
        body: 'Sin historial por unidad y por conductor, el mantenimiento llega tarde y las malas prácticas de manejo no se corrigen.',
      },
    ],
    outcomes: [
      {
        title: 'Cumplimiento certificable por turno',
        body: 'Tags RFID en los contenedores y antenas en las tolvas registran cada levantamiento. Solbayres pasó de certificar 56–60 % a más de 98 % de los levantamientos por turno.',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.solbayres] },
      },
      {
        title: 'Sensores de trabajo en cada unidad',
        body: 'Toma de fuerza, compactación, encendido de barredora y activación de flusher. La unidad informa cuadras barridas y calles lavadas, no solo recorridas.',
        evidence: { level: 'declarado', sources: [SRC.aseo, SRC.brochureAseo] },
      },
      {
        title: 'Evidencia para tu descargo',
        body: 'Ante un acta, presentas el registro del levantamiento con contenedor, unidad, hora y lugar, y los micro-clips del evento si la unidad tiene cámaras. La evidencia de descargo la aportas tú.',
        evidence: { level: 'declarado', sources: [SRC.aseo] },
      },
      {
        title: 'Flota, conductores y balanza en un solo lugar',
        body: 'Ranking de conductores, mantenimiento preventivo y correctivo, control de combustible e integración con balanzas en centros de transferencia y disposición final.',
        evidence: { level: 'declarado', sources: [SRC.brochureAseo, SRC.fleet] },
      },
    ],
    solutions: [
      'recoleccion-certificada',
      'barrido-e-higiene-urbana',
      'ia-y-video-analitica',
      'gestion-de-flotas',
      'movilidad-segura',
      'control-de-combustible',
      'rutas-y-contenedores',
    ],
    journey: [
      {
        title: 'Relevamiento de tu contrato y tu flota',
        body: 'Partimos del pliego y de tu operación: qué servicios prestas, qué indicadores te miden y cómo se labran las actas. La propuesta se arma sobre ese relevamiento.',
      },
      {
        title: 'Empieza por el servicio que más se discute',
        body: 'Solbayres empezó con RFID en compactadores y lavacontenedores. Después sumó flushers, barredoras y roll-off. Contratas licencias por módulo y amplías por etapas.',
      },
      {
        title: 'Instalación en la flota',
        body: 'Instalamos GPS, antenas RFID en las tolvas, tags en los contenedores, sensores de trabajo y tarjetas RFID para el login de los choferes.',
      },
      {
        title: 'Capacitación de supervisores y choferes',
        body: 'Capacitamos a quienes planifican, supervisan y manejan. La asociación de ruta, cuadrilla y vehículo queda configurada desde el primer turno.',
      },
      {
        title: 'Soporte 24x7 y mejora continua',
        body: 'La Mesa de Ayuda atiende 24x7. Con Monitor de Calidad detectas a tiempo los servicios que se desvían del plan.',
      },
    ],
    caseSlugs: ['solbayres', 'gcba'],
    logos: [
      { src: '/img/clientes/solbayres.png', alt: 'Solbayres' },
      { src: '/img/clientes/cliba.png', alt: 'Cliba' },
      { src: '/img/clientes/veolia.png', alt: 'Veolia' },
      { src: '/img/clientes/gisa.png', alt: 'GISA' },
      { src: '/img/clientes/grupo-caabsa.png', alt: 'Grupo CAABSA' },
      { src: '/img/clientes/urbacor.png', alt: 'UrbaCor' },
      { src: '/img/clientes/urbasur.png', alt: 'urBAsur' },
      { src: '/img/clientes/transporte-panizza.png', alt: 'Transporte Panizza' },
      { src: '/img/clientes/ashira.png', alt: 'Ashira' },
      { src: '/img/clientes/interaseo.png', alt: 'Interaseo' },
      { src: '/img/clientes/lime.png', alt: 'LIME' },
      { src: '/img/clientes/emvarias-grupo-epm.png', alt: 'Emvarias, Grupo EPM' },
    ],
    logosNote: LOGOS_NOTE_ASEO,
    faq: [
      {
        q: '¿Qué diferencia hay entre rastreo GPS y certificación por telemetría?',
        a: 'El GPS dice dónde estuvo la unidad. La certificación suma sensores de trabajo y la lectura del tag RFID de cada contenedor, así que registra qué trabajo hizo: qué contenedor levantó, a qué hora y en qué lugar.',
      },
      {
        q: '¿Sirve para contestar actas y multas?',
        a: 'Sí. El registro de cada levantamiento con contenedor, unidad, hora y lugar, más los micro-clips por evento cuando hay cámaras, es evidencia que el prestador aporta en su descargo.',
      },
      {
        q: '¿También cubre barrido y lavado?',
        a: 'Sí. El sensor de encendido de la barredora registra cuadras barridas y el de activación del flusher, calles lavadas. El barrido manual se traza con relojes inteligentes.',
      },
      {
        q: '¿Tengo que equipar toda la flota de entrada?',
        a: 'No. Contratas licencias por módulo y puedes empezar por un servicio. Solbayres empezó con compactadores y lavacontenedores y después sumó flushers, barredoras y roll-off.',
      },
    ],
    pending: [
      'Evidencia de descargo con imagen del levantamiento: la IA a bordo (VisionPlatform) arrancó en agosto de 2026; confirmar qué parte está disponible comercialmente antes de publicar.',
      'Régimen de multas (puntos sobre facturación, inhabilitación por multas acumuladas): sale de una investigación interna de mercado; conseguir la fuente pública del pliego si se quieren citar cifras.',
      'Logo de HESURMET omitido: la lectura del logo está a validar.',
      'Logos de Interaseo, LIME y Emvarias: solo logos, sin caso con fuente.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'oil-gas',
    audience: 'empresas',
    name: 'Oil & Gas',
    short: 'Seguridad, viajes y combustible bajo control para operadoras y contratistas.',
    icon: 'oil',
    seo: {
      title: 'Seguridad y control de flota para Oil & Gas',
      description:
        'Traslados de personal, cisternas y equipos bajo control aun sin cobertura: comunicación satelital, ADAS, DSM, cámaras con IA en escotillas y gestión de viajes.',
    },
    hero: {
      kicker: 'Oil & Gas',
      titleLight: 'Un accidente comienza',
      titleBold: 'antes del impacto.',
      lead: 'Gestión de viajes con nivel de riesgo, alertas de fatiga y distracción, y comunicación satelital para operar donde no hay señal.',
      image: '/img/sector-oil-gas.webp',
      imageAlt: 'Un camión cisterna circula por una ruta con bruma y un balancín petrolero al fondo.',
    },
    question: '“¿Cómo protejo a mi gente y mis activos donde no hay señal?”',
    pains: [
      {
        title: 'Traslados largos sin cobertura',
        body: 'Personal, cisternas y equipos recorren caminos donde el celular no llega. Si algo pasa, te enteras tarde.',
      },
      {
        title: 'Fatiga y distracción al volante',
        body: 'Turnos extensos y rutas monótonas aumentan el riesgo. Sin datos, la prevención depende de lo que cada conductor declara.',
      },
      {
        title: 'Combustible que no cierra',
        body: 'Cargas fuera de lugar, desvíos en escotillas y válvulas y consumos fuera de promedio se detectan cuando ya ocurrieron.',
      },
      {
        title: 'Viajes sin trazabilidad',
        body: 'Sin registro de quién manejó, por dónde y con qué nivel de riesgo, auditar un incidente lleva días.',
      },
    ],
    outcomes: [
      {
        title: 'Menos accidentes con Movilidad Segura',
        body: 'ADAS, DSM y Video-Analítica alertan en cabina y dejan un micro-clip de cada evento. Urbetrack declara reducciones de 65–75 % en accidentes.',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.oilGas, SRC.fatiga] },
      },
      {
        title: 'Combustible bajo control',
        body: 'Cámaras antiexplosivas con IA en escotillas y cajones de válvulas, geocercas y medición de consumo. Urbetrack declara ahorros de 15–30 % en combustible.',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.oilGas] },
      },
      {
        title: 'Operación sin depender de la red',
        body: 'La caja negra registra posición y eventos segundo a segundo sin cobertura, y la comunicación satelital mantiene el contacto con la unidad.',
        evidence: { level: 'declarado', sources: [SRC.oilGas] },
      },
      {
        title: 'Personal comisionado bajo control',
        body: 'Login de chofer por viaje, presentismo y fichada satelital. Urbetrack declara una baja de 8–10 % en el costo de personal comisionado.',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.oilGas] },
      },
    ],
    solutions: ['movilidad-segura', 'gestion-de-flotas', 'control-de-combustible', 'ia-y-video-analitica', 'consultoria'],
    journey: journeyEmpresas(
      'Instalamos GPS con caja negra, comunicación satelital, cámaras ADAS y DSM y, donde haga falta, cámaras antiexplosivas en escotillas y válvulas. Configuramos geocercas y puntos de control.',
    ),
    caseSlugs: [],
    logos: [
      {
        src: '/img/clientes/compuesto-oil-gas.png',
        alt: 'Logos de Archer, Manpetrol, Boart Longyear, DLS, Enausa y John M. Phillips',
      },
    ],
    logosNote: 'Organizaciones cuyos logos publica urbetrack.com/oil-y-gas',
    faq: [
      {
        q: '¿Funciona donde no hay cobertura celular?',
        a: 'Sí. La caja negra registra posición y eventos segundo a segundo sin depender de la red, y la comunicación satelital permite operar y asistir a la unidad sin cobertura celular.',
      },
      {
        q: '¿Qué es el Monitoreo de Iris?',
        a: 'Es un test de reacción pupilar de alrededor de un minuto antes de la jornada que detecta fatiga, somnolencia, alcohol, drogas o fármacos. Usa SOBEREYE, una tecnología de un tercero que Urbetrack integra.',
      },
      {
        q: '¿Cómo se auditan los viajes?',
        a: 'Cada viaje tiene nivel de riesgo, chofer identificado y puntos de control certificados por app. El Simulador 3D reconstruye el recorrido sobre cartografía digital para investigar incidentes.',
      },
      {
        q: '¿Se integra con el software que ya usamos?',
        a: 'Sí. Urbetrack se integra con ERP, CRM, software de despacho y sistemas de rastreo de terceros.',
      },
    ],
    pending: [
      'No hay caso de Oil & Gas con nombre, fuente y resultados: conseguir uno para caseSlugs.',
      'Cifras de 65–75 % de accidentes, 15–30 % de combustible y 8–10 % de personal comisionado: declaradas sin cliente, período ni metodología.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'mineria',
    audience: 'empresas',
    name: 'Minería',
    short: 'Seguridad vial, control de activos y comunicación satelital para operaciones en altura.',
    icon: 'mine',
    seo: {
      title: 'Seguridad y control de flota para minería',
      description:
        'Punto ciego, visión 360°, ADAS y DSM para equipos pesados. Comunicación satelital, combustible y mantenimiento para operaciones mineras sin cobertura celular.',
    },
    hero: {
      kicker: 'Minería',
      titleLight: 'Que cada persona',
      titleBold: 'vuelva a casa a salvo.',
      lead: 'Alertas de punto ciego, fatiga y distracción en equipos pesados, con comunicación satelital para operar lejos de la red.',
      image: '/img/sector-mineria.webp',
      imageAlt: 'Un camión minero de gran porte en un frente de extracción polvoriento.',
    },
    question: '“¿Cómo cuido a mi gente y mis equipos lejos de todo?”',
    pains: [
      {
        title: 'Equipos pesados con puntos ciegos',
        body: 'Camiones y máquinas de gran porte comparten espacio con personas. Lo que el operador no ve es donde ocurre el accidente.',
      },
      {
        title: 'Turnos largos en condiciones duras',
        body: 'Altura, polvo y jornadas extensas aumentan la fatiga. Sin datos, la prevención llega después del incidente.',
      },
      {
        title: 'Sin cobertura y con proveedores dispersos',
        body: 'Varias empresas y contratistas operan en el mismo sitio sin compartir información, y la red celular no llega.',
      },
      {
        title: 'Costos que no se ven',
        body: 'Combustible, ralentí y mantenimiento no planificado se acumulan sin que nadie los mida por equipo.',
      },
    ],
    outcomes: [
      {
        title: 'Menos accidentes con equipos pesados',
        body: 'Punto ciego y visión 360° con alerta en cabina y externa, más ADAS y DSM. Urbetrack cita casos con caídas de hasta 75 % en accidentes.',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.mineriaCostos] },
      },
      {
        title: 'Avisos tempranos, aunque estés lejos',
        body: 'Urbetrack declara notificaciones remotas tempranas en operaciones de litio en Salta. La comunicación satelital cubre las zonas sin red.',
        evidence: { level: 'declarado', note: 'entrevista al CEO de Urbetrack', sources: [SRC.saltaMining] },
      },
      {
        title: 'Aptitud del conductor antes de la jornada',
        body: 'El Monitoreo de Iris con SOBEREYE, tecnología de un tercero que Urbetrack integra, evalúa fatiga y consumo de sustancias en alrededor de un minuto.',
        evidence: { level: 'declarado', sources: [SRC.sobereye, SRC.oilGas] },
      },
      {
        title: 'Activos, combustible y mantenimiento por equipo',
        body: 'Control de combustible, gestión de viajes, acceso de personal y mantenimiento preventivo en la misma plataforma.',
        evidence: { level: 'declarado', sources: [SRC.saltaMining] },
      },
    ],
    solutions: ['movilidad-segura', 'gestion-de-flotas', 'control-de-combustible', 'ia-y-video-analitica'],
    journey: journeyEmpresas(
      'Instalamos GPS con caja negra, comunicación satelital, cámaras de punto ciego y visión 360°, ADAS, DSM y tablets industriales para los conductores.',
    ),
    caseSlugs: ['mineria-salta'],
    logos: [
      {
        src: '/img/clientes/compuesto-mineria.png',
        alt: 'Logos de Lithium Americas, Ganfeng Lithium, POSCO, Alpha Lithium y Eramet',
      },
    ],
    logosNote: 'Organizaciones cuyos logos publica urbetrack.com/minería',
    faq: [
      {
        q: '¿Cómo funciona el punto ciego?',
        a: 'Cámaras de punto ciego y visión 360° detectan peatones y alertan en cabina y hacia afuera. La intención de giro se toma de la señal de giro, del puerto CAN o de un sensor G.',
      },
      {
        q: '¿Funciona sin cobertura celular?',
        a: 'Sí. La caja negra registra sin depender de la red y la comunicación satelital permite operar y asistir a la unidad donde no hay señal.',
      },
      {
        q: '¿En qué operaciones mineras trabaja Urbetrack?',
        a: 'En una entrevista de 2024, el CEO de Urbetrack mencionó operaciones de litio en Salta con POSCO, Ganfeng y Rio Tinto.',
      },
    ],
    pending: [
      'Clientes mineros (POSCO, Ganfeng, Rio Tinto): solo por entrevista al CEO; sin confirmación independiente.',
      'Cifra de “hasta 75 %” de caída de accidentes: declarada, sin cliente ni metodología.',
      'Chile: el CEO menciona operación, pero no hay mineras chilenas con fuente.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'construccion',
    audience: 'empresas',
    name: 'Construcción',
    short: 'Visibilidad de entregas de hormigón y áridos, combustible y flota en obra.',
    icon: 'crane',
    seo: {
      title: 'Control de flota para construcción y materiales',
      description:
        'Visibilidad de entregas de hormigón y áridos, arribo predictivo a obra, control de combustible y mantenimiento para plantas dosificadoras y corralones.',
    },
    hero: {
      kicker: 'Construcción',
      titleLight: 'Cada entrega, a la vista',
      titleBold: 'desde la planta hasta la obra.',
      lead: 'Sabes dónde está cada mixer y cada camión de áridos, cuándo llega a la obra y cuánto combustible usó en el viaje.',
      image: '/img/sector-construccion.webp',
      imageAlt: 'Un camión mixer amarillo en una obra en construcción, con máquinas y edificios detrás.',
    },
    question: '“¿Dónde está cada entrega y cuándo llega a la obra?”',
    pains: [
      {
        title: 'Entregas sin visibilidad',
        body: 'La obra llama para saber dónde está el hormigón y en la planta nadie tiene la respuesta a mano.',
      },
      {
        title: 'Combustible difícil de controlar',
        body: 'Cargas repetidas, cargas fuera de lugar y rendimientos fuera de promedio pasan inadvertidos entre tantos viajes cortos.',
      },
      {
        title: 'Mantenimiento que llega tarde',
        body: 'Una unidad parada en plena jornada frena entregas y deja equipos esperando en la obra.',
      },
    ],
    outcomes: [
      {
        title: 'Arribo predictivo a la obra',
        body: 'Monitor Online muestra cada unidad en tiempo real y estima su llegada, para que la obra se prepare antes de que llegue el camión.',
        evidence: { level: 'declarado', sources: [SRC.construccion] },
      },
      {
        title: 'Menos combustible por viaje',
        body: 'Control de Combustible con sondas, lectura por CAN y alertas de cargas irregulares. Urbetrack declara ahorros de 15–30 %.',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.construccion] },
      },
      {
        title: 'Taller organizado',
        body: 'Mantenimiento preventivo y correctivo, con historial por unidad y tablero Kanban para el taller.',
        evidence: { level: 'declarado', sources: [SRC.fleet] },
      },
    ],
    solutions: ['gestion-de-flotas', 'control-de-combustible', 'movilidad-segura'],
    journey: journeyEmpresas(
      'Instalamos GPS y computadora de a bordo en mixers y camiones, y configuramos plantas, corralones y obras como puntos de referencia en el mapa.',
    ),
    caseSlugs: [],
    faq: [
      {
        q: '¿Para qué empresas de construcción sirve?',
        a: 'Para plantas dosificadoras, corralones y empresas de logística de materiales que necesitan ver sus entregas de hormigón y áridos.',
      },
      {
        q: '¿Cómo se controla el combustible?',
        a: 'Con sondas en el tanque, consumo estimado por modelo o lectura por puerto CAN. En el surtidor, un tag RFID autoriza solo a vehículos habilitados y corta el flujo si se desvía el pico.',
      },
      {
        q: '¿Puedo empezar con pocas unidades?',
        a: 'Sí. Se contratan licencias por módulo, con o sin dispositivos, y se suman unidades y módulos a medida que la operación lo pide.',
      },
    ],
    pending: [
      'Sin caso ni logos publicados para construcción.',
      'Detalle funcional del “arribo predictivo”: solo figura como declaración en urbetrack.com/construccion.',
      'Configuración de obras y plantas como puntos en el mapa: inferida de geocercas y puntos de control; confirmar con producto.',
      'Cifra de 15–30 % de combustible: declarada sin metodología e inconsistente con el “hasta 15 %” de otras páginas.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'logistica',
    audience: 'empresas',
    name: 'Logística y flotas',
    short: 'Combustible, seguridad y mantenimiento para flotas de logística y corporativas.',
    icon: 'box',
    seo: {
      title: 'Gestión de flotas para logística y transporte',
      description:
        'Monitor Online, Movilidad Segura, Control de Combustible y mantenimiento para flotas de logística, transporte y corporativas. Cada evento, con su micro-clip.',
    },
    hero: {
      kicker: 'Fleet Management',
      titleLight: 'Gestión de flotas',
      titleBold: 'inteligente, segura y conectada.',
      lead: 'Ves cada unidad en tiempo real, recibes alertas de conducción riesgosa y detectas cargas de combustible irregulares.',
      image: '/img/sector-logistica.webp',
      imageAlt: 'Un camión con semirremolque circula por una ruta arbolada.',
    },
    question: '“¿Dónde se me van el combustible, el tiempo y la seguridad?”',
    pains: [
      {
        title: 'Combustible que se escapa',
        body: 'Cargas fuera de geocerca, cargas repetitivas y rendimientos fuera de promedio no aparecen en ninguna factura.',
      },
      {
        title: 'Accidentes y daño reputacional',
        body: 'Una maniobra riesgosa con tu logo en la caja es un problema de seguridad y de marca a la vez.',
      },
      {
        title: 'Uso indebido y rutas ineficientes',
        body: 'Sin registro de recorridos, los desvíos y los kilómetros de más se descubren a fin de mes.',
      },
      {
        title: 'Mantenimiento no planificado',
        body: 'Cada unidad detenida sin aviso es un viaje que no sale y un cliente que espera.',
      },
    ],
    outcomes: [
      {
        title: 'Control de combustible',
        body: 'Sondas, lectura por CAN y surtidor con RFID que corta el flujo si se desvía el pico. Urbetrack declara ahorros de hasta 15 % en combustible.',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.aseo, SRC.combustibleBlog] },
      },
      {
        title: 'Conducción más segura',
        body: 'Movilidad Segura suma ADAS, DSM y punto ciego. Cada evento queda con video, unidad, conductor, lugar y hora, y se usa para formar, no para castigar.',
        evidence: { level: 'declarado', sources: [SRC.fleet] },
      },
      {
        title: 'Incidentes que se pueden auditar',
        body: 'Monitor Histórico y Simulador 3D reconstruyen cualquier recorrido para revisar un incidente o una maniobra.',
        evidence: { level: 'declarado', sources: [SRC.fleet] },
      },
      {
        title: 'Taller con historial por unidad',
        body: 'Mantenimiento preventivo y correctivo, tablero Kanban para el taller y alertas por reglas configurables.',
        evidence: { level: 'declarado', sources: [SRC.fleet] },
      },
    ],
    solutions: ['gestion-de-flotas', 'movilidad-segura', 'control-de-combustible', 'ia-y-video-analitica'],
    journey: journeyEmpresas(
      'Instalamos GPS y computadora de a bordo, cámaras ADAS y DSM si sumas Movilidad Segura, y sensores de combustible. Si ya tienes telemetría, la integramos.',
    ),
    caseSlugs: ['defiba'],
    faq: [
      {
        q: '¿Puedo sumar video a la telemetría que ya tengo?',
        a: 'Sí. DEFIBA sumó videoanalítica con IA, ADAS, DSM y punto ciego integrados con su telemetría existente.',
      },
      {
        q: '¿Necesito un sistema de video aparte?',
        a: 'No. Con Video-Analítica, la IA y los eventos parametrizados generan micro-clips dentro de la plataforma web.',
      },
      {
        q: '¿Qué ve el conductor?',
        a: 'Recibe alertas en cabina por colisión frontal o con peatón, salida de carril, distancia de frenado insuficiente, fatiga o distracción. Con Urbetrack GO sigue la ruta con navegación giro a giro.',
      },
      {
        q: '¿Qué ahorro de combustible puedo esperar?',
        a: 'Urbetrack declara ahorros de hasta 15 % con Control de Combustible. Es una cifra sin metodología publicada; el resultado depende de tu operación.',
      },
    ],
    pending: [
      'La página /logistica-y-transporte del sitio actual da 404; no hay fuente propia de logística más allá de Fleet Management.',
      'Cifras de combustible inconsistentes entre páginas (“hasta 15 %”, “15–30 %”, “hasta 30 %”): unificar antes de publicar.',
      'Sin logos de logística publicados.',
    ],
  },
];
