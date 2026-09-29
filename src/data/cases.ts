import type { CaseStudy, Source } from './types';

/* Fuentes: URBETRACK-CONTEXTO.md §10 y dossier §3. */
const SRC = {
  gcbaAuditoria: {
    label: 'Sindicatura General de la Ciudad, Informe 77-SGCBA-21',
    url: 'https://buenosaires.gob.ar/contenido/auditoria-del-sistema-urbetrack',
  },
  gcbaAuditoriaPdf: {
    label: 'Informe 77-SGCBA-21 completo, con sus 15 observaciones (PDF)',
    url: 'https://buenosaires.gob.ar/sites/default/files/media/document/2022/06/29/780f08bc6d268d18c425f1f3128e308fd06341d4.pdf',
  },
  gcbaLpu25: {
    label: 'Boletín Oficial CABA N.º 7347, Res. 69/SSHIG/26 (LPU 7162-0388-LPU25)',
    url: 'https://documentosboletinoficial.buenosaires.gob.ar/publico/ck_PE-RES-MJGGC-SSHIG-69-26-7347.pdf',
  },
  gcbaInformeGestion: { label: 'Informe de gestión de la Subsecretaría de Higiene Urbana, GCBA' },
  laNacion2017: {
    label: 'La Nación, Smart City Expo Buenos Aires (2017)',
    url: 'https://www.lanacion.com.ar/tecnologia/smart-city-expo-buenos-aires-el-futuro-de-las-ciudades-es-inteligente-y-con-mejor-calidad-de-vida-nid2068492/',
  },
  gcbaBlog: {
    label: 'Blog de Urbetrack, transformación digital de la higiene urbana en la Ciudad de Buenos Aires',
    url: 'https://urbetrack.com/blog/transformacion-digital-servicio-higiene-aseo-urbano-ciudad-buenos-aires',
  },
  solbayresBlog: {
    label: 'Blog de Urbetrack, caso Solbayres',
    url: 'https://urbetrack.com/blog/c%C3%B3mo-solbayres-optimiza-su-gesti%C3%B3n-de-residuos-urbanos-con-tecnolog%C3%ADa-y-datos',
  },
  solbayresFb: {
    label: 'Solbayres en Facebook, Urbetrack y Solbayres',
    url: 'https://www.facebook.com/SolbayresBA/posts/urbetrack-y-solbayres-tecnolog%C3%ADa-aplicada-para-el-servicio-de-recolecci%C3%B3n-de-res/1607001002692431/',
  },
  morenoSibom: { label: 'Decretos de contratación 2021–2025, Municipalidad de Moreno (SIBOM)' },
  morenoBlog: {
    label: 'Blog de Urbetrack, caso Municipalidad de Moreno',
    url: 'https://urbetrack.com/blog/de-minibasurales-a-una-gestion-contenerizada-el-caso-de-urbetrack-en-la-municipalidad-de-moreno',
  },
  morenoGob: {
    label: 'Municipalidad de Moreno, contenedores con localización (no nombra al proveedor)',
    url: 'https://moreno.gob.ar/noticia-detalle.php?id=2777',
  },
  quilmesSwt: {
    label: 'Inteligencia Argentina, Kick Off SWT en Quilmes (2025)',
    url: 'https://inteligenciaargentina.ar/gobierno/kick-off-swt-la-tecnologia-inteligente-que-transformara-la-gestion-de-residuos-en-quilmes',
  },
  quilmesGob: {
    label: 'Municipio de Quilmes, noticia 6126',
    url: 'https://quilmes.gov.ar/noticias/noticia.php?id_noti=6126',
  },
  quilmesHecho: {
    label: 'Hecho en Quilmes (03/07/2026)',
    url: 'https://hechoenquilmes.com/2026/07/03/nuevo-sistema-de-gestion-y-certificacion-de-recoleccion-mediante-nuevas-tecnologias-e-ia/',
  },
  quilmesCronica: {
    label: 'Crónica, así controlará Quilmes la basura',
    url: 'https://www.cronica.com.ar/fmq/noticias-locales/asi-controlara-quilmes-la-basura-cada-contenedor-tendra-identificacion-digital/',
  },
  quilmesConurbano: {
    label: 'Diario Conurbano, Quilmes supervisa el nuevo sistema',
    url: 'https://diarioconurbano.com.ar/sociedad/quilmes-supervisan-el-nuevo-sistema-de-gestion-de-la-recoleccion-de-residuos/',
  },
  quilmesBlog: {
    label: 'Blog de Urbetrack, Quilmes suma RFID e IA',
    url: 'https://urbetrack.com/blog/quilmes-suma-tecnolog%C3%ADa-rfid-e-ia-para-optimizar-la-recolecci%C3%B3n-de-residuos-con-urbetrack',
  },
  santaFeUno: {
    label: 'UNO Santa Fe (2018)',
    url: 'https://www.unosantafe.com.ar/santa-fe/urbetrack-el-nuevo-sistema-monitoreo-satelital-recoleccion-residuos-la-ciudad-n2143229.html',
  },
  santaFeAreaUrbana: {
    label: 'Área Urbana, monitoreo para la recolección de residuos',
    url: 'https://areaurbana.com/monitoreo-para-la-recoleccion-de-residuos/',
  },
  santaFeDecreto: { label: 'Decreto DMM 00234/2018, Municipalidad de Santa Fe' },
  santaFeTribunal: { label: 'Tribunal de Cuentas de la Municipalidad de Santa Fe (2019)' },
  irapuatoBlog: {
    label: 'Blog de Urbetrack, Irapuato y la recolección con tecnología',
    url: 'https://urbetrack.com/blog/irapuato-revoluciono-recoleccion-residuos-tecnologia-inteligente',
  },
  irapuatoBlog2: {
    label: 'Blog de Urbetrack, Irapuato: sustentabilidad y economía circular',
    url: 'https://urbetrack.com/blog/urbetrack-en-irapuato-sustentabilidad-econom%C3%ADa-circular-y-tecnolog%C3%ADa',
  },
  defibaBlog: {
    label: 'Blog de Urbetrack, DEFIBA y la videoanalítica',
    url: 'https://urbetrack.com/blog/defiba-videoanalitica-urbetrack-seguridad-operativa',
  },
  saltaMining: {
    label: 'Salta Mining, entrevista a Pablo Ader, CEO de Urbetrack (26/08/2024)',
    url: 'https://saltamining.com/contenido/3387/urbetrack-hemos-superado-desafios-muy-importantes-en-empresas-mineras-que-operan',
  },
} satisfies Record<string, Source>;

export const cases: CaseStudy[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: 'gcba',
    client: 'Gobierno de la Ciudad de Buenos Aires',
    place: 'Ciudad de Buenos Aires',
    country: 'AR',
    sector: 'gobiernos',
    period: '2017–2026',
    summary: 'Telemetría sobre toda la higiene urbana porteña, con una plataforma de auditoría que vincula el pago con datos.',
    image: '/img/caso-caba-calle.webp',
    imageAlt: 'Una avenida arbolada de Buenos Aires con el Obelisco al fondo.',
    challenge:
      'La Ciudad contrata la recolección y la higiene urbana a varias empresas prestatarias. Necesitaba verificar el servicio con datos propios, no con lo que declara cada una. Y vincular el pago a contratistas con esa evidencia.',
    implemented: [
      'Rutas electrónicas y tags RFID en los contenedores',
      'Telemetría sobre el 100 % de la operación de higiene urbana desde 2017',
      'Más de 1.000 vehículos por mes y 3.670 rutas mecanizadas bajo seguimiento',
      '740 contenedores con sensores volumétricos (2019)',
      'Integración con SAP (2019)',
      'Anexo V “Procedimiento Urbetrack” del Ente de Higiene Urbana para volquetes (2024)',
      'Consultoría de gestión estratégica de residuos sólidos urbanos (LPU 7162-0388-LPU25, 2025–2026)',
    ],
    results: [
      {
        value: '100',
        suffix: ' %',
        label: 'de la higiene urbana con telemetría desde 2017',
        evidence: { level: 'comprobado', note: 'Informe de gestión, GCBA', sources: [SRC.gcbaInformeGestion] },
      },
      {
        value: '28.000',
        prefix: '+',
        label: 'contenedores por día',
        evidence: { level: 'comprobado', note: 'Informe de gestión, GCBA', sources: [SRC.gcbaInformeGestion] },
      },
      {
        value: '97',
        suffix: ' %',
        label: 'de cumplimiento promedio de recolección',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.gcbaBlog] },
      },
      {
        label: 'Sistema auditado por la Sindicatura General de la Ciudad en 2021',
        evidence: {
          level: 'comprobado',
          note: 'Informe 77-SGCBA-21, con 15 observaciones',
          sources: [SRC.gcbaAuditoria, SRC.gcbaAuditoriaPdf],
        },
      },
    ],
    quote: {
      text: 'La herramienta sirve para discutir sobre un dato, no sobre una percepción.',
      author: 'Renzo Morosi',
      role: 'Ex Subsecretario de Higiene Urbana, GCBA',
      evidence: { level: 'declarado', note: 'cita publicada por Urbetrack', sources: [SRC.gcbaBlog] },
    },
    context:
      'La Sindicatura General de la Ciudad auditó el “Sistema Urbetrack” entre el 04/05 y el 30/08/2021 (Informe 77-SGCBA-21). Concluyó que el sistema “soporta adecuadamente los procesos del Organismo en lo atinente a la gestión de recolección de residuos, constituyendo este aspecto en una fortaleza”. El mismo informe registra 15 observaciones, entre ellas faltantes de integración con contratistas y con la CEAMSE y la ausencia de un diccionario de datos. Puedes leerlas todas en el informe publicado por el GCBA, enlazado en las fuentes.',
    sources: [
      SRC.gcbaAuditoria,
      SRC.gcbaAuditoriaPdf,
      SRC.gcbaLpu25,
      SRC.gcbaInformeGestion,
      SRC.laNacion2017,
      SRC.gcbaBlog,
    ],
    evidence: {
      level: 'comprobado',
      note: 'Sindicatura General, Boletín Oficial CABA e informe de gestión; el 97 % es declarado',
    },
    solutions: ['recoleccion-certificada', 'rutas-y-contenedores', 'gestion-de-flotas', 'consultoria'],
    featured: true,
    logo: '/img/clientes/buenos-aires-ciudad.png',
    pending: [
      'URL pública del informe de gestión de la Subsecretaría de Higiene Urbana (100 % de telemetría, +1.000 vehículos, 3.670 rutas, +28.000 contenedores por día, 740 sensores, SAP).',
      'URL del Anexo V “Procedimiento Urbetrack” del Ente de Higiene Urbana (2024).',
      'Contenedores: +30.000 (prensa 2017), +28.000 por día (informe de gestión) y meta de 25.000 (blog) son métricas distintas; no mezclarlas.',
      'El Centro de Monitoreo del GCBA (28 mil contenedores, 1.100 camiones) no se usa: la atribución a Urbetrack está a validar.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'solbayres',
    client: 'Solbayres (Grupo Tysa)',
    place: 'Ciudad de Buenos Aires',
    country: 'AR',
    sector: 'prestadores',
    period: 'Desde 2014',
    summary: 'Una concesionaria porteña que certifica cada levantamiento por turno con RFID y sensores de trabajo.',
    image: '/img/caso-solbayres.webp',
    imageAlt: 'Un camión recolector compactador blanco en una calle arbolada de Buenos Aires.',
    challenge:
      'Solbayres presta servicio de recolección e higiene urbana a más de 700.000 habitantes de la Ciudad. Antes de registrar cada contenedor, solo podía certificar entre el 56 y el 60 % de los levantamientos de cada turno. El resto no tenía un registro verificable.',
    implemented: [
      'Rastreo y telemetría por unidad',
      'Asociación de ruta, cuadrilla y vehículo en cada turno',
      'Tags RFID en los contenedores y antenas en las tolvas de compactadores y lavacontenedores',
      'Extensión a flushers, barredoras y roll-off',
      'Mantenimiento de flota en la plataforma',
      'Ranking de conductores',
    ],
    results: [
      {
        value: '98',
        prefix: '+',
        suffix: ' %',
        label: 'de levantamientos certificables por turno, desde 56–60 %',
        evidence: { level: 'declarado', note: 'metodología no publicada', sources: [SRC.solbayresBlog] },
      },
    ],
    sources: [SRC.solbayresBlog, SRC.solbayresFb],
    evidence: { level: 'declarado', note: 'Urbetrack y el cliente' },
    solutions: ['recoleccion-certificada', 'barrido-e-higiene-urbana', 'gestion-de-flotas'],
    featured: true,
    logo: '/img/clientes/solbayres.png',
    pending: [
      'Texto textual de la cita de Diego Ameal (Gerente de Sistemas, Grupo Tysa): el caso la menciona, pero las fuentes permitidas no la transcriben.',
      'Alcance territorial: el contexto dice “unas 7.100 manzanas” y el dossier “unas 7.100 cuadras”; confirmar antes de usarlo.',
      'Frecuencia de mantenimiento de contenedores (tres veces por semana): confirmar si corresponde al servicio con Urbetrack.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'moreno',
    client: 'Municipalidad de Moreno',
    place: 'Moreno, provincia de Buenos Aires',
    country: 'AR',
    sector: 'gobiernos',
    period: 'Desde 2021',
    summary: 'Recolección contenerizada con RFID en el complejo Catonas, contratada por decreto desde 2021.',
    image: '/img/contenedores-inteligentes.webp',
    imageAlt: 'Un operario con chaleco naranja camina junto a un camión recolector y dos contenedores en la vereda.',
    challenge:
      'En el complejo Catonas viven unos 25.000 habitantes en 80 edificios. La acumulación de residuos formaba minibasurales. El municipio necesitaba verificar que cada contenedor se vaciara cada día.',
    implemented: [
      'Licencias de rastreo satelital y monitoreo de la recolección',
      '60 contenedores metálicos con tags RFID en el complejo Catonas',
      'Antenas RFID en los camiones recolectores',
      'Verificación del servicio en tiempo real',
    ],
    results: [
      {
        value: '95',
        suffix: ' % o más',
        label: 'de efectividad diaria del servicio',
        evidence: {
          level: 'declarado',
          note: 'según Florencia González, Directora General de Control Legal y Operativo; metodología no publicada',
          sources: [SRC.morenoBlog],
        },
      },
      {
        label: 'Eliminación de minibasurales en el complejo',
        evidence: { level: 'declarado', sources: [SRC.morenoBlog] },
      },
      {
        value: '7',
        label: 'decretos de contratación entre 2021 y 2025',
        evidence: { level: 'comprobado', note: 'SIBOM', sources: [SRC.morenoSibom] },
      },
    ],
    sources: [SRC.morenoSibom, SRC.morenoBlog, SRC.morenoGob],
    evidence: { level: 'comprobado', note: 'contratación comprobada en SIBOM; resultados declarados' },
    solutions: ['recoleccion-certificada', 'rutas-y-contenedores'],
    logo: '/img/clientes/municipio-de-moreno.png',
    pending: [
      'URLs de los siete decretos de contratación en SIBOM (2021–2025).',
      'Cita textual de Florencia González: las fuentes solo la parafrasean.',
      'Foto real del complejo Catonas; la imagen actual es genérica.',
      '214 contenedores con geolocalización en centros comerciales: no se usa, está a validar si es Urbetrack.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'quilmes',
    client: 'Municipio de Quilmes',
    place: 'Quilmes, provincia de Buenos Aires',
    country: 'AR',
    sector: 'gobiernos',
    period: '2025–2026',
    summary: 'Piloto con el BID en 2025 y ampliación con RFID por contenedor e IA en 2026.',
    image: '/img/tel-rfid-contenedor.webp',
    imageAlt: 'Un tag RFID montado en el borde de un contenedor verde.',
    challenge:
      'Quilmes quería saber qué contenedores se vaciaban, en qué horario y con qué unidad. Primero lo probó con un piloto acotado de seis meses junto al BID. Después decidió ampliarlo.',
    implemented: [
      'Piloto “Kick Off SWT” (Smart Waste Technologies) con el BID, de seis meses (2025)',
      '10 camiones en el piloto: 6 de carga lateral y 4 de verdes',
      '100 contenedores con tags RFID y 2 antenas RFID',
      '6 sensores de trabajo y 4 de compactación, más una app de inspección',
      'Ampliación en julio de 2026: RFID por contenedor y registro digital de cada operación',
      'IA para certificar la recolección, supervisada por la intendenta interina Eva Mieri en el Ecoparque',
    ],
    results: [
      {
        label: 'Ampliación del sistema en 2026, después del piloto con el BID',
        evidence: {
          level: 'comprobado',
          note: 'prensa local',
          sources: [SRC.quilmesHecho, SRC.quilmesCronica, SRC.quilmesConurbano],
        },
      },
    ],
    quote: {
      text: 'Con Urbetrack se podrá saber con mayor precisión qué contenedores fueron vaciados, en qué horarios y con qué unidad.',
      author: 'Roberto Gaudio',
      role: 'Secretario, Municipio de Quilmes',
      evidence: {
        level: 'comprobado',
        note: 'prensa local',
        sources: [SRC.quilmesHecho, SRC.quilmesCronica, SRC.quilmesConurbano],
      },
    },
    context:
      'El piloto de 2025 y la ampliación de julio de 2026 están documentados por prensa local. Todavía no hay cifras de resultado publicadas. La IA se usa para certificar la recolección; no hay métricas de precisión publicadas.',
    sources: [
      SRC.quilmesSwt,
      SRC.quilmesHecho,
      SRC.quilmesCronica,
      SRC.quilmesConurbano,
      SRC.quilmesGob,
      SRC.quilmesBlog,
    ],
    evidence: { level: 'comprobado', note: 'prensa local; sin cifras de resultado publicadas' },
    solutions: ['recoleccion-certificada', 'ia-y-video-analitica', 'rutas-y-contenedores'],
    featured: true,
    pending: [
      'Cifras de resultado del piloto y de la ampliación: no publicadas.',
      'Cargo exacto de Roberto Gaudio (qué secretaría) y en cuál de las notas figura la cita textual.',
      'La página oficial del municipio (noticia 6126) devolvía error 502; confirmar que sigue en línea.',
      'Logo del Municipio de Quilmes: no hay archivo en /img/clientes/.',
      'Foto propia del piloto o del Ecoparque; la imagen actual es genérica.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'santa-fe',
    client: 'Municipalidad de Santa Fe',
    place: 'Santa Fe, provincia de Santa Fe',
    country: 'AR',
    sector: 'gobiernos',
    period: '2018–2019',
    summary: 'Sistema de Gestión de Higiene Urbana para recolección y barrido, integrado al Centro de Monitoreo municipal.',
    image: '/img/centro-monitoreo.webp',
    imageAlt: 'Una persona sigue mapas y cámaras en varios monitores dentro de una sala de monitoreo.',
    challenge:
      'La recolección y el barrido de la ciudad estaban a cargo del municipio y de dos empresas, Urbafe y Cliba. La ciudad necesitaba ver el servicio de todos en un mismo lugar. Y medir su cumplimiento.',
    implemented: [
      '60 equipos GPS con computadora de a bordo en vehículos de Urbafe, Cliba y el municipio',
      '25 dispositivos con apps para el trabajo en campo',
      'Integración con el Centro de Monitoreo municipal y con el sistema de reclamos',
      'Reportes de cumplimiento, compactaciones y toneladas descargadas',
      'Cobertura de dos sectores de 3.279 y 3.216 manzanas',
      'Contratación por Decreto DMM 00234/2018',
    ],
    results: [
      {
        label: 'El Tribunal de Cuentas municipal calificó el sistema como “aporte positivo” (2019)',
        evidence: { level: 'comprobado', note: 'Tribunal de Cuentas de Santa Fe', sources: [SRC.santaFeTribunal] },
      },
    ],
    sources: [SRC.santaFeUno, SRC.santaFeAreaUrbana, SRC.santaFeDecreto, SRC.santaFeTribunal],
    evidence: { level: 'comprobado', note: 'prensa, decreto municipal y Tribunal de Cuentas' },
    solutions: ['recoleccion-certificada', 'barrido-e-higiene-urbana', 'incidencias-y-reclamos', 'gestion-de-flotas'],
    logo: '/img/clientes/santa-fe-ciudad.png',
    pending: [
      'Discrepancia en la cantidad de GPS: la prensa de 2018 (dossier) dice 60 y el contexto maestro dice 66. Se usa 60; confirmar con Urbetrack.',
      'URL del Decreto DMM 00234/2018 y del informe del Tribunal de Cuentas (2019).',
      'Cita del exintendente José Corral: la prensa la menciona, pero las fuentes permitidas no la transcriben.',
      'Foto propia de la implementación; la imagen actual es genérica.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'irapuato',
    client: 'Municipio de Irapuato',
    place: 'Irapuato, Guanajuato',
    country: 'MX',
    sector: 'gobiernos',
    period: 'Caso publicado en 2026',
    summary: 'Rastreo, analítica y auditoría de rutas para recolección y barrido en una ciudad de casi 600.000 habitantes.',
    image: '/img/caso-irapuato-a.webp',
    imageAlt: 'Un grupo de personas conversa de pie en una oficina.',
    challenge:
      'Irapuato genera unas 550 t de residuos por día y tiene casi 600.000 habitantes. La recolección está concesionada a GISA. El municipio recibía 39–40 quejas por día y necesitaba auditar rutas, recolección y barrido.',
    implemented: [
      'Rastreo en tiempo real de la recolección',
      'IoT, analítica y auditoría de rutas',
      'Seguimiento del barrido manual en unas 40 vialidades',
      'Seguimiento de 70 km de barrido mecánico nocturno',
      'Reconfiguración dinámica de rutas alineada con la Ley General de Economía Circular',
    ],
    results: [
      {
        value: '1',
        suffix: ' queja al mes',
        label: 'antes eran 39–40 quejas por día',
        evidence: {
          level: 'declarado',
          note: 'según el Director de Limpia; metodología no publicada',
          sources: [SRC.irapuatoBlog],
        },
      },
    ],
    quote: {
      text: 'El primer filtro es la tecnología.',
      author: 'Jorge Alberto Medina Mendiola',
      role: 'Director de Limpia, Municipio de Irapuato',
      evidence: { level: 'declarado', note: 'entrevista publicada por Urbetrack', sources: [SRC.irapuatoBlog] },
    },
    sources: [SRC.irapuatoBlog, SRC.irapuatoBlog2],
    evidence: { level: 'declarado', note: 'blog de Urbetrack con entrevistas a funcionarios' },
    solutions: ['barrido-e-higiene-urbana', 'rutas-y-contenedores', 'incidencias-y-reclamos', 'recoleccion-certificada'],
    featured: true,
    pending: [
      'No hay prensa independiente ni nota del gobierno municipal que nombre a Urbetrack en Irapuato.',
      'Período de implementación: las fuentes solo fechan la publicación del caso (julio de 2026).',
      'Identificar a las personas de la foto y confirmar la autorización de uso.',
      'Logo: definir si corresponde el del municipio (no hay archivo) o el de GISA, la concesionaria.',
      'Cargo de Medina Mendiola: el contexto dice “Director de Aseo Público / Limpia” y el dossier “Director de Limpia”; unificar.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'defiba',
    client: 'DEFIBA',
    place: 'Argentina',
    country: 'AR',
    sector: 'logistica',
    period: 'Caso publicado en 2026',
    summary: 'Videoanalítica con IA, ADAS, DSM y punto ciego para una operación de logística portuaria y depósito fiscal.',
    image: '/img/caso-defiba.webp',
    imageAlt: 'Seis personas, algunas con chaleco reflectivo y casco, posan frente a grúas portuarias.',
    challenge:
      'DEFIBA opera logística portuaria y depósitos fiscales. Ya contaba con telemetría en su flota. Buscaba sumar prevención de accidentes con video, sin reemplazar lo que tenía.',
    implemented: [
      'Videoanalítica con IA',
      'ADAS, asistencia avanzada a la conducción',
      'DSM, monitoreo del estado del conductor',
      'Cámaras de punto ciego',
      'Integración con la telemetría existente',
    ],
    results: [
      {
        label: 'ADAS, DSM y punto ciego integrados en la misma plataforma que la telemetría existente',
        evidence: { level: 'declarado', note: 'sin cifras publicadas', sources: [SRC.defibaBlog] },
      },
    ],
    sources: [SRC.defibaBlog],
    evidence: { level: 'declarado', note: 'blog de Urbetrack; sin cifras de resultado' },
    solutions: ['movilidad-segura', 'ia-y-video-analitica', 'gestion-de-flotas'],
    pending: [
      'Cifras de resultado: el caso no publica ninguna.',
      'Ubicación de la operación (puerto o ciudad) y fecha de inicio.',
      'Cita de un responsable de DEFIBA.',
      'Logo de DEFIBA: no hay archivo en /img/clientes/.',
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: 'mineria-salta',
    client: 'Empresas del litio en Salta',
    place: 'Salta',
    country: 'AR',
    sector: 'mineria',
    period: '2024',
    summary: 'Control de activos, seguridad vial y comunicación satelital para operaciones de litio, según el CEO de Urbetrack.',
    image: '/img/sector-mineria-camino.webp',
    imageAlt: 'Un camión minero avanza por un camino de tierra en un yacimiento a cielo abierto.',
    challenge:
      'Las operaciones de litio en Salta trabajan con equipos pesados, turnos largos y zonas sin cobertura celular. En una entrevista de 2024, el CEO de Urbetrack nombró a POSCO, Ganfeng y Rio Tinto entre las empresas que atiende allí.',
    implemented: [
      'Control de activos y mantenimiento',
      'Seguridad vial con IA y ADAS',
      'Control de combustible',
      'Gestión de viajes',
      'Control de acceso de personal',
      'Comunicación satelital',
    ],
    results: [
      {
        label: 'Notificaciones remotas tempranas en operaciones de litio',
        evidence: { level: 'declarado', note: 'entrevista al CEO de Urbetrack', sources: [SRC.saltaMining] },
      },
    ],
    sources: [SRC.saltaMining],
    evidence: { level: 'declarado', note: 'entrevista al CEO en prensa sectorial' },
    solutions: ['movilidad-segura', 'gestion-de-flotas', 'control-de-combustible', 'ia-y-video-analitica'],
    pending: [
      'Confirmación independiente de POSCO, Ganfeng y Rio Tinto como clientes (hoy solo por entrevista al CEO).',
      'Alcance por empresa, período y cifras de resultado.',
      'Autorización para nombrar a cada empresa en un caso.',
    ],
  },
];
