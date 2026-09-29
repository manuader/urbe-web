import type { Evidence, Solution, Source } from './types';

/**
 * Páginas de solución. Fuentes: URBETRACK-CONTEXTO.md (§1–13 y §19),
 * dossier de hechos verificables (computer-vision/.claude/avo/2026-09-28-ads-redes/dossier.md)
 * y docs/PROPUESTA.md. Toda cifra lleva `evidence`.
 */

const SRC = {
  aseo: { label: 'urbetrack.com · Aseo & Smart City', url: 'https://urbetrack.com/aseo-smart-city' },
  brochureAseo: {
    label: 'Brochure Servicios Públicos · Ciclo de Aseo',
    url: 'https://urbetrack.com/hubfs/Brochure%20Servicios%20P%C3%BAblicos%20CICLO%20DE%20ASEO.pdf',
  },
  fleet: { label: 'urbetrack.com · Fleet Management', url: 'https://urbetrack.com/fleet-management' },
  oilGas: { label: 'urbetrack.com · Oil & Gas', url: 'https://urbetrack.com/oil-y-gas' },
  construccion: { label: 'urbetrack.com · Construcción', url: 'https://urbetrack.com/construccion' },
  solbayres: {
    label: 'Blog Urbetrack · Caso Solbayres',
    url: 'https://urbetrack.com/blog/c%C3%B3mo-solbayres-optimiza-su-gesti%C3%B3n-de-residuos-urbanos-con-tecnolog%C3%ADa-y-datos',
  },
  gcba: {
    label: 'Blog Urbetrack · Caso Ciudad de Buenos Aires',
    url: 'https://urbetrack.com/blog/transformacion-digital-servicio-higiene-aseo-urbano-ciudad-buenos-aires',
  },
  moreno: {
    label: 'Blog Urbetrack · Caso Moreno',
    url: 'https://urbetrack.com/blog/de-minibasurales-a-una-gestion-contenerizada-el-caso-de-urbetrack-en-la-municipalidad-de-moreno',
  },
  irapuato: {
    label: 'Blog Urbetrack · Caso Irapuato',
    url: 'https://urbetrack.com/blog/irapuato-revoluciono-recoleccion-residuos-tecnologia-inteligente',
  },
  ods: {
    label: 'Blog Urbetrack · ODS en acción',
    url: 'https://urbetrack.com/blog/ods-en-accion-urbetrack-acerca-cumplimiento-metas',
  },
  fatiga: {
    label: 'Blog Urbetrack · Monitoreo de fatiga',
    url: 'https://urbetrack.com/blog/como-monitoreo-fatiga-previene-accidentes-flota',
  },
  combustibleBlog: {
    label: 'Blog Urbetrack · Control de combustible en flotas municipales',
    url: 'https://urbetrack.com/blog/c%C3%B3mo-un-sistema-de-control-de-combustible-detecta-irregularidades-en-flotas-municipales',
  },
  combustible30: {
    label: 'Blog Urbetrack · Reducir el gasto de combustible',
    url: 'https://urbetrack.com/blog/reducir-gasto-combustible-de-flota-con-telemetria-avanzada',
  },
  quilmesHecho: {
    label: 'Hecho en Quilmes, 03/07/2026',
    url: 'https://hechoenquilmes.com/2026/07/03/nuevo-sistema-de-gestion-y-certificacion-de-recoleccion-mediante-nuevas-tecnologias-e-ia/',
  },
  quilmesCronica: {
    label: 'Crónica · FM Quilmes',
    url: 'https://www.cronica.com.ar/fmq/noticias-locales/asi-controlara-quilmes-la-basura-cada-contenedor-tendra-identificacion-digital/',
  },
  quilmesConurbano: {
    label: 'Diario Conurbano',
    url: 'https://diarioconurbano.com.ar/sociedad/quilmes-supervisan-el-nuevo-sistema-de-gestion-de-la-recoleccion-de-residuos/',
  },
  boletinLpu: {
    label: 'Boletín Oficial CABA N.º 7347 · Res. 69/SSHIG/26',
    url: 'https://documentosboletinoficial.buenosaires.gob.ar/publico/ck_PE-RES-MJGGC-SSHIG-69-26-7347.pdf',
  },
  informeGestion: { label: 'Informe de gestión · Subsecretaría de Higiene Urbana GCBA' },
} satisfies Record<string, Source>;

const SIN_METODOLOGIA = 'metodología no publicada';

const declarado = (sources: Source[], note: string = SIN_METODOLOGIA): Evidence => ({
  level: 'declarado',
  note,
  sources,
});

export const solutions: Solution[] = [
  /* ───────────────────────── 1. Recolección certificada ───────────────────────── */
  {
    slug: 'recoleccion-certificada',
    group: 'servicios-urbanos',
    name: 'Recolección certificada',
    short: 'Cada levantamiento vinculado a contenedor, unidad, hora y lugar',
    icon: 'rfid',
    seo: {
      title: 'Recolección certificada por telemetría y RFID',
      description:
        'Certifica cada levantamiento con RFID en contenedores, antena en tolva y sensores de trabajo. Compara planificado y ejecutado y cierra el turno con evidencia.',
    },
    hero: {
      kicker: 'Recolección certificada',
      titleLight: 'De “el camión pasó” a',
      titleBold: '“levantó este contenedor”.',
      lead: 'Para municipios y prestadores: cada levantamiento queda registrado con contenedor, unidad, hora y lugar, listo para certificar el turno.',
      image: '/img/campana/sensores-levanta-contenedor.webp',
      imageAlt:
        'Camión levantacontenedor elevando un contenedor, con fichas de lectura RFID, hora del levantamiento, capacidad y sensores activos.',
    },
    forWhom: [
      {
        who: 'Subsecretaría de higiene urbana u organismo de control',
        question: '¿Cómo sé que el servicio que pago se prestó en cada cuadra?',
      },
      {
        who: 'Gerencia de operaciones de una concesionaria',
        question: '¿Cómo demuestro mi cumplimiento antes de que me lo discutan?',
      },
      {
        who: 'Área de control de gestión y pagos',
        question: '¿Con qué respaldo apruebo la certificación mensual del contratista?',
      },
    ],
    problem: {
      title: 'Un servicio que se paga por declaración',
      body: 'Cuando la recolección se controla con planillas e inspecciones por muestreo, lo que se certifica es lo que el prestador informa. El GPS dice por dónde pasó el camión, pero no si levantó cada contenedor.',
      costs: [
        {
          title: 'Discusiones sin cierre',
          body: 'Municipio y prestador discuten sobre percepciones. Cada reclamo abre una conversación que nadie puede zanjar con un dato.',
        },
        {
          title: 'Pagos sin respaldo verificable',
          body: 'La certificación mensual se aprueba sobre planillas. Si después aparece un faltante, no hay forma de reconstruir qué pasó en cada parada.',
        },
        {
          title: 'Multas difíciles de descargar',
          body: 'Ante un acta, el prestador necesita probar que levantó ese contenedor a esa hora. Sin registro del momento, el descargo queda en su palabra.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Se identifica cada contenedor',
        body: 'Cada contenedor lleva un tag RFID y queda empadronado con su ubicación. El conductor inicia el turno con su tarjeta RFID, así la unidad, la persona y la ruta quedan asociadas.',
      },
      {
        title: 'La tolva lee cada levantamiento',
        body: 'Una antena RFID en la tolva del compactador, el levantacontenedor o el lavacontenedor lee el tag al levantar. Contenedor, unidad, hora y lugar se registran juntos.',
      },
      {
        title: 'Los sensores confirman el trabajo',
        body: 'Los sensores de compactación y de toma de fuerza informan qué trabajo hizo la unidad, no solo dónde estuvo. El Monitor Online los muestra en tiempo real junto con la posición.',
      },
      {
        title: 'Planificado contra ejecutado',
        body: 'El Monitor de Calidad compara la ruta planificada con lo ejecutado y muestra los contenedores sin levantar mientras todavía hay tiempo de enviar un repaso.',
      },
      {
        title: 'Cierre de Servicio',
        body: 'Al terminar el turno, el Cierre de Servicio consolida la evidencia y certifica lo prestado. Esa certificación permite vincular el pago al resultado.',
      },
    ],
    chain: [
      {
        problem: 'El pago al contratista se aprueba sobre lo que declara',
        capability: 'Lectura RFID en tolva y sensores de trabajo en cada levantamiento',
        decision: 'El organismo de control certifica con el registro de cada parada',
        result: 'Pago vinculado a un servicio verificable, no a una planilla',
      },
      {
        problem: 'Contenedores que quedan sin levantar en el turno',
        capability: 'Monitor de Calidad con planificado contra ejecutado',
        decision: 'El supervisor envía un repaso antes de que termine el turno',
        result: 'Menos faltantes que se convierten en reclamo al día siguiente',
      },
      {
        problem: 'Un acta de multa que el prestador considera errónea',
        capability: 'Monitor Histórico con el recorrido y la lectura de ese contenedor',
        decision: 'El prestador presenta el registro como descargo',
        result: 'Una discusión que se resuelve con un dato, no con una percepción',
      },
      {
        problem: 'Cumplimiento difícil de demostrar turno por turno',
        capability: 'RFID en contenedores y antenas en compactadores y lavacontenedores',
        decision: 'Solbayres mide y gestiona su cumplimiento por turno',
        result: 'Cumplimiento certificable de 56–60 % a más de 98 % por turno',
        evidence: declarado([SRC.solbayres], 'Solbayres y Urbetrack · metodología no publicada'),
      },
    ],
    features: [
      'Tags RFID en contenedores con empadronamiento geolocalizado',
      'Antena RFID en tolva de compactador, levantacontenedor y lavacontenedor',
      'Sensores de compactación y de toma de fuerza por unidad',
      'Login de conductor con tarjeta RFID, lista blanca y presentismo',
      'Asociación de ruta, cuadrilla y vehículo en cada turno',
      'Comparación de planificado contra ejecutado en el Monitor de Calidad',
      'Reconstrucción de recorridos y eventos en el Monitor Histórico',
      'Cierre de Servicio para certificar el turno y habilitar pago por resultados',
      'Integración con ERP, balanzas y sistemas de terceros',
    ],
    products: ['Monitor Online', 'Monitor Histórico', 'Monitor de Calidad', 'Urbetrack GO'],
    proof: {
      caseSlugs: ['gcba', 'solbayres', 'moreno', 'quilmes'],
      metrics: [
        {
          prefix: '+',
          value: '98',
          suffix: ' %',
          label: 'Levantamientos certificables por turno',
          evidence: declarado([SRC.solbayres], 'Solbayres, antes 56–60 % · metodología no publicada'),
        },
        {
          value: '97',
          suffix: ' %',
          label: 'Cumplimiento promedio de recolección',
          evidence: declarado([SRC.gcba], 'Caso GCBA publicado por Urbetrack · metodología no publicada'),
        },
        {
          prefix: '+',
          value: '95',
          suffix: ' %',
          label: 'Efectividad diaria en Catonas, Moreno',
          evidence: declarado([SRC.moreno], 'Dirección de Control Legal y Operativo de Moreno, vía Urbetrack'),
        },
      ],
    },
    faq: [
      {
        q: '¿Qué es la certificación por telemetría?',
        a: 'Es verificar el servicio con datos de los propios equipos: GPS, sensores de trabajo del camión y lectura del tag RFID de cada contenedor por una antena en la tolva. Cada levantamiento queda asociado a contenedor, unidad, hora y lugar.',
      },
      {
        q: '¿En qué se diferencia de un GPS?',
        a: 'El GPS muestra por dónde pasó el camión. La certificación de Urbetrack suma la lectura RFID del contenedor y los sensores de trabajo, así que registra qué contenedor se levantó y qué trabajo hizo la unidad.',
      },
      {
        q: '¿Le sirve al prestador o solo al municipio?',
        a: 'A los dos. El municipio certifica con evidencia antes de pagar. El prestador demuestra su cumplimiento por turno y cuenta con registros para responder a un acta o a un reclamo.',
      },
      {
        q: '¿La plataforma fue auditada por un organismo público?',
        a: 'La Sindicatura General de la Ciudad de Buenos Aires auditó el Sistema Urbetrack en 2021 (Informe 77-SGCBA-21). Concluyó que soporta adecuadamente los procesos de gestión de recolección y, en el mismo informe, registró 15 observaciones, entre ellas faltantes de integración con contratistas.',
      },
      {
        q: '¿Qué vehículos se pueden equipar?',
        a: 'La antena RFID va en la tolva de compactadores, levantacontenedores y lavacontenedores. El sensor de compactación va en el compactador y el de toma de fuerza en unidades roll-off, para registrar cada vuelco de contenedor.',
      },
    ],
    related: ['rutas-y-contenedores', 'barrido-e-higiene-urbana', 'ia-y-video-analitica'],
    sectors: ['gobiernos', 'prestadores'],
    pending: [
      'No hay cifra publicada de levantamientos por día: no usar un contador de levantamientos.',
      'Conseguir una captura real del Cierre de Servicio o del Monitor de Calidad (planificado contra ejecutado) para ilustrar la página.',
      'La auditoría SGCBA 2021 se cita solo con su conclusión y las 15 observaciones como contexto: revisar con legal si se mantiene en la FAQ.',
    ],
  },

  /* ───────────────────────── 2. Barrido e higiene urbana ───────────────────────── */
  {
    slug: 'barrido-e-higiene-urbana',
    group: 'servicios-urbanos',
    name: 'Barrido e higiene urbana',
    short: 'Cuadras barridas, calles lavadas y contenedores limpios, con registro por tramo',
    icon: 'broom',
    seo: {
      title: 'Control de barrido, lavado e higiene urbana',
      description:
        'Registra el barrido manual y mecánico, el lavado de calles y contenedores y el mobiliario urbano por tramo trabajado, no por recorrido, en un solo monitor.',
    },
    hero: {
      kicker: 'Barrido e higiene urbana',
      titleLight: 'Una ciudad se mide',
      titleBold: 'cuadra por cuadra.',
      lead: 'Para municipios y prestadores de limpieza: barrido manual y mecánico, lavado y mobiliario urbano con registro por tramo trabajado, no por recorrido.',
      image: '/img/campana/sensores-barredora.webp',
      imageAlt:
        'Barredora mecánica en una calle, con fichas de encendido activo, cepillos girando, barrido en curso y sensores activos.',
    },
    forWhom: [
      {
        who: 'Dirección de higiene urbana',
        question: '¿Qué cuadras se barrieron hoy y cuáles quedaron pendientes?',
      },
      {
        who: 'Jefatura de servicios de una concesionaria de barrido',
        question: '¿Cómo pruebo que la barredora trabajó y no solo circuló?',
      },
      {
        who: 'Área de espacio público',
        question: '¿Con qué frecuencia real se lavan los contenedores y se atiende el mobiliario urbano?',
      },
    ],
    problem: {
      title: 'Recorrer no es barrer',
      body: 'Una barredora puede circular con los cepillos apagados y una cuadrilla puede cubrir la mitad de su sector. Sin registro del trabajo, la limpieza se evalúa a ojo, cuadra por cuadra y reclamo por reclamo.',
      costs: [
        {
          title: 'Inspección que no escala',
          body: 'Verificar el barrido con inspectores en la calle cubre una muestra. El resto del servicio se certifica por confianza.',
        },
        {
          title: 'Frecuencias que fallan sin que nadie lo note',
          body: 'El lavado de calles y contenedores se programa, pero si no queda registro, un atraso se descubre cuando llega el reclamo.',
        },
        {
          title: 'Cuadrillas difíciles de reasignar',
          body: 'Sin saber qué tramos quedan pendientes, no hay forma de mover personal a tiempo dentro del mismo turno.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Barrido manual trazado',
        body: 'Cada operario trabaja con un reloj inteligente o un carrito portabolsa equipado. El sistema registra los tramos barridos y los asocia a la cuadrilla y al sector asignado.',
      },
      {
        title: 'Barredoras con sensor de encendido',
        body: 'El sensor de encendido de la barredora separa la cuadra barrida de la cuadra recorrida. Solo cuenta como servicio el tramo donde el equipo trabajó.',
      },
      {
        title: 'Lavado con registro de activación',
        body: 'En hidrolavadoras, el sensor de activación del flusher registra dónde se lavó la calle. En lavacontenedores, la antena RFID lee cada contenedor lavado.',
      },
      {
        title: 'Un monitor para toda la higiene urbana',
        body: 'El Monitor de Servicios de Higiene Urbana reúne barrido manual y mecánico, lavado de contenedores, mobiliario urbano, levantamiento y recolección domiciliaria en una misma vista.',
      },
    ],
    chain: [
      {
        problem: 'Barredoras que circulan sin barrer',
        capability: 'Sensor de encendido cruzado con la posición de cada tramo',
        decision: 'El supervisor certifica solo las cuadras con el equipo en trabajo',
        result: 'Barrido mecánico certificado por cuadra efectivamente barrida',
      },
      {
        problem: 'Sectores de barrido manual sin control de cobertura',
        capability: 'Trazabilidad de tramos con relojes inteligentes o carritos portabolsa',
        decision: 'El jefe de cuadrilla reasigna personal a los tramos pendientes',
        result: 'Cobertura del sector visible durante el turno, no al día siguiente',
      },
      {
        problem: 'Lavado de calles y contenedores sin evidencia',
        capability: 'Sensor de flusher en hidrolavadoras y RFID en lavacontenedores',
        decision: 'El organismo de control verifica frecuencias contra lo planificado',
        result: 'Frecuencias de lavado demostrables ante auditorías y reclamos',
      },
    ],
    features: [
      'Relojes inteligentes que registran los tramos de barrido manual',
      'Carritos portabolsa equipados para cuadrillas de barrido',
      'Sensor de encendido en barredoras para certificar cuadras barridas',
      'Sensor de activación de flusher en hidrolavadoras',
      'Antena RFID en lavacontenedores para registrar cada lavado',
      'Seguimiento del servicio sobre mobiliario urbano',
      'Monitor de Servicios de Higiene Urbana con todos los servicios en una vista',
      'Reportes de cumplimiento por sector, cuadrilla y turno',
    ],
    products: ['Monitor Online', 'Monitor de Calidad', 'Urbe+'],
    proof: {
      caseSlugs: ['solbayres', 'santa-fe', 'irapuato'],
    },
    faq: [
      {
        q: '¿Cómo se certifica el barrido mecánico?',
        a: 'Con un sensor de encendido en la barredora. Urbetrack cruza el encendido con la posición y cuenta como barrida solo la cuadra donde el equipo trabajó, no la que recorrió.',
      },
      {
        q: '¿Se puede controlar el barrido manual?',
        a: 'Sí. Urbetrack registra los tramos barridos con relojes inteligentes o carritos portabolsa equipados y los asocia a la cuadrilla y al sector asignado.',
      },
      {
        q: '¿Qué cubre el Monitor de Servicios de Higiene Urbana?',
        a: 'Barrido manual y mecánico, lavado de contenedores, mobiliario urbano, levantamiento de contenedores y recolección domiciliaria, en una misma vista de la plataforma Urbetrack.',
      },
      {
        q: '¿Cómo se controla el lavado de calles?',
        a: 'La hidrolavadora lleva un sensor de activación del flusher que registra dónde y cuándo se lavó. El lavado deja de ser una declaración y pasa a ser un tramo registrado.',
      },
    ],
    related: ['recoleccion-certificada', 'incidencias-y-reclamos', 'gestion-de-flotas'],
    sectors: ['gobiernos', 'prestadores'],
    pending: [
      'Confirmar si el barrido manual se traza con relojes inteligentes, con carritos portabolsa o con ambos según el cliente, y cómo se registra el mobiliario urbano.',
      'No hay cifra publicada de cuadras barridas certificadas ni de frecuencias de lavado: la página va sin métricas.',
      'Conseguir una captura real del Monitor de Servicios de Higiene Urbana.',
    ],
  },

  /* ───────────────────────── 3. Rutas y contenedores ───────────────────────── */
  {
    slug: 'rutas-y-contenedores',
    group: 'servicios-urbanos',
    name: 'Rutas y contenedores',
    short: 'Rutas fijas, a demanda o por llenado, de la calle a la disposición final',
    icon: 'route',
    seo: {
      title: 'Rutas de recolección y sensores de llenado',
      description:
        'Planifica rutas fijas, a demanda o inteligentes según el llenado de cada contenedor, y cierra el ciclo con geocercas, RFID y balanza en la disposición final.',
    },
    hero: {
      kicker: 'Rutas y contenedores',
      titleLight: 'Que el camión vaya',
      titleBold: 'donde hace falta.',
      lead: 'Para quien planifica la recolección: rutas fijas, a demanda o según el llenado real de cada contenedor, hasta la balanza de disposición final.',
      image: '/img/rutas-inteligentes.webp',
      imageAlt:
        'Ilustración isométrica de un camión recolector que sigue una ruta marcada hacia los contenedores llenos, en rojo, y deja de lado el vacío, en verde.',
    },
    forWhom: [
      {
        who: 'Planificación operativa de un municipio',
        question: '¿Mis frecuencias responden a cómo se llenan los contenedores o a una costumbre?',
      },
      {
        who: 'Gerencia de operaciones de un prestador',
        question: '¿Cuántos kilómetros hago para vaciar contenedores semivacíos?',
      },
      {
        who: 'Responsable de un centro de transferencia o relleno',
        question: '¿Qué camión entró, si estaba habilitado y con cuánta carga?',
      },
    ],
    problem: {
      title: 'Rutas que no cambian aunque la ciudad sí',
      body: 'Muchas rutas se diseñaron hace años y siguen en papel. El camión recorre igual los contenedores vacíos y los desbordados, y lo que pasa después, en la transferencia o el relleno, queda en otro sistema.',
      costs: [
        {
          title: 'Kilómetros sin carga',
          body: 'Vaciar contenedores semivacíos consume combustible, horas de conductor y desgaste de la unidad sin mejorar el servicio.',
        },
        {
          title: 'Desbordes donde la frecuencia no alcanza',
          body: 'Los puntos que se llenan más rápido que la ruta generan residuo fuera del contenedor y reclamos que se repiten.',
        },
        {
          title: 'Descargas sin trazabilidad',
          body: 'Si el ingreso al relleno no se vincula con la unidad y la ruta, las toneladas descargadas no se pueden conciliar con el servicio prestado.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Se elige el tipo de ruta',
        body: 'Rutas fijas con recorrido, frecuencia, dotación y vehículo por defecto. Rutas a demanda armadas según la geoposición de las incidencias. Rutas inteligentes basadas en el llenado de los contenedores.',
      },
      {
        title: 'Los contenedores informan su nivel',
        body: 'Un sensor volumétrico mide de 15 a 400 cm y clasifica cada contenedor como vacío, semilleno o lleno. Con esas lecturas se generan mapas de calor de llenado.',
      },
      {
        title: 'El conductor sigue la ruta',
        body: 'Urbetrack GO entrega la ruta al conductor con navegación giro a giro y certificación de trabajos en el lugar.',
      },
      {
        title: 'El ciclo cierra en la balanza',
        body: 'En centros de transferencia y disposición final, las geocercas registran la llegada, el ingreso al relleno se habilita por RFID y el peso se toma de la balanza integrada.',
      },
    ],
    chain: [
      {
        problem: 'Frecuencias fijas para contenedores que se llenan a distinto ritmo',
        capability: 'Sensores volumétricos y mapas de calor de llenado',
        decision: 'Planificación pasa a rutas inteligentes que priorizan contenedores llenos',
        result: 'Menos kilómetros y combustible: Urbetrack declara hasta 15 %',
        evidence: declarado([SRC.ods]),
      },
      {
        problem: 'Incidencias que esperan a la ruta del día siguiente',
        capability: 'Rutas a demanda según la geoposición de las incidencias',
        decision: 'El supervisor arma un recorrido para los puntos reportados',
        result: 'Puntos críticos atendidos sin desarmar la ruta fija',
      },
      {
        problem: 'Contenedores de uso restringido abiertos por cualquiera',
        capability: 'Cerraduras electrónicas con tarjetas Mifare y comunicación GPRS',
        decision: 'El municipio define qué tarjetas pueden abrir cada contenedor',
        result: 'Apertura habilitada solo para usuarios autorizados',
      },
      {
        problem: 'Descargas en el relleno sin vínculo con la ruta',
        capability: 'Geocercas, ingreso por RFID e integración con balanza',
        decision: 'El centro habilita solo unidades autorizadas y registra el peso',
        result: 'Toneladas descargadas conciliables con cada unidad y ruta',
      },
    ],
    features: [
      'Rutas fijas con frecuencia, dotación y vehículo por defecto',
      'Rutas a demanda generadas desde la geoposición de incidencias',
      'Rutas inteligentes basadas en sensado volumétrico',
      'Sensores volumétricos de 15 a 400 cm con estado vacío, semilleno o lleno',
      'Mapas de calor de llenado por zona',
      'Cerraduras electrónicas para contenedores con tarjetas Mifare',
      'Navegación giro a giro y certificación en campo con Urbetrack GO',
      'Geocercas en centros de transferencia y disposición final',
      'Habilitación de ingreso al relleno por RFID e integración con balanza',
    ],
    products: ['Urbetrack GO', 'Monitor Online', 'Monitor de Calidad'],
    proof: {
      caseSlugs: ['gcba', 'irapuato'],
      metrics: [
        {
          value: '740',
          label: 'Contenedores con sensor de llenado, CABA',
          evidence: {
            level: 'comprobado',
            note: 'Informe de gestión GCBA, 2019',
            sources: [SRC.informeGestion],
          },
        },
        {
          prefix: 'hasta',
          value: '15',
          suffix: ' %',
          label: 'Menos km y combustible, rutas por llenado',
          evidence: declarado([SRC.ods]),
        },
      ],
    },
    faq: [
      {
        q: '¿Qué diferencia hay entre rutas fijas, a demanda e inteligentes?',
        a: 'Las fijas repiten recorrido y frecuencia con dotación y vehículo asignados. Las a demanda se arman según dónde se registran incidencias. Las inteligentes priorizan los contenedores que los sensores volumétricos reportan llenos.',
      },
      {
        q: '¿Cómo mide el llenado un sensor volumétrico?',
        a: 'Mide en un rango de 15 a 400 cm y clasifica el contenedor como vacío, semilleno o lleno. Con esas lecturas, la plataforma Urbetrack arma mapas de calor de llenado.',
      },
      {
        q: '¿Se puede controlar el ingreso al relleno sanitario?',
        a: 'Sí. Urbetrack usa geocercas en centros de transferencia y disposición final, habilita el ingreso al relleno por RFID e integra la balanza para registrar el peso de cada descarga.',
      },
      {
        q: '¿Cuánto se ahorra con rutas inteligentes?',
        a: 'Urbetrack declara hasta un 15 % menos de kilómetros y combustible con rutas basadas en el llenado. Es una cifra propia sin metodología publicada: el ahorro real depende de cada operación y conviene medirlo sobre la tuya.',
      },
    ],
    related: ['recoleccion-certificada', 'incidencias-y-reclamos', 'control-de-combustible'],
    sectors: ['gobiernos', 'prestadores'],
    pending: [
      'Conseguir la URL del informe de gestión de la Subsecretaría de Higiene Urbana que respalda los 740 contenedores con sensor volumétrico (2019).',
      'Cifra “hasta 15 %” de rutas inteligentes: declarada, sin cliente ni metodología.',
      'Confirmar si las cerraduras electrónicas se siguen ofreciendo con GPRS 2G o hay una versión con otra red.',
      'Decidir si se nombra a Sensoneo como fabricante de los sensores de llenado (partner local en CABA).',
    ],
  },

  /* ───────────────────────── 4. Incidencias y reclamos ───────────────────────── */
  {
    slug: 'incidencias-y-reclamos',
    group: 'servicios-urbanos',
    name: 'Incidencias y reclamos',
    short: 'Reclamos con foto y ubicación, asignados y cerrados con evidencia',
    icon: 'pin',
    seo: {
      title: 'Gestión de incidencias y reclamos urbanos con Urbe+',
      description:
        'Centraliza incidencias con foto y ubicación, asígnalas con ruta sugerida y ciérralas con evidencia. Mapas de calor para atacar microbasurales en su origen.',
    },
    hero: {
      kicker: 'Incidencias · Urbe+',
      titleLight: 'Cada reclamo tiene',
      titleBold: 'lugar, responsable y cierre.',
      lead: 'Para municipios y prestadores: incidencias con foto y ubicación que se asignan, se resuelven y se cierran con evidencia visible para todos.',
      image: '/img/mod-incidencias.webp',
      imageAlt:
        'Mano que sostiene un celular con una incidencia cargada con fotos, frente a un montículo de bolsas de residuos junto a un poste.',
    },
    forWhom: [
      {
        who: 'Centro de atención o de monitoreo municipal',
        question: '¿Cuántos reclamos siguen abiertos y quién los tiene?',
      },
      {
        who: 'Supervisión de cuadrillas',
        question: '¿Cómo priorizo lo que entra en el día sin desarmar la ruta?',
      },
      {
        who: 'Área de ambiente',
        question: '¿Dónde se forman los microbasurales y por qué vuelven?',
      },
    ],
    problem: {
      title: 'Reclamos que se repiten porque nadie ve el cierre',
      body: 'El reclamo entra por teléfono, redes o una app, se anota en otro lado y la cuadrilla se entera tarde. Cuando se resuelve, no queda una foto que lo pruebe, y el mismo punto vuelve a aparecer la semana siguiente.',
      costs: [
        {
          title: 'Reclamos duplicados',
          body: 'Sin un registro único, el mismo problema se carga varias veces y el equipo no sabe cuál ya está resuelto.',
        },
        {
          title: 'Cierres sin respaldo',
          body: 'Si la cuadrilla no deja evidencia, el vecino vuelve a reclamar y el organismo no puede responder con un dato.',
        },
        {
          title: 'Microbasurales que reaparecen',
          body: 'Sin ver dónde se concentran los reportes, se limpia el punto pero no se corrige la causa, y el costo de limpieza se repite.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Todo entra al mismo lugar',
        body: 'Las incidencias llegan desde Urbe+, por integración con aplicaciones vecinales o sistemas de terceros, por importación masiva o por carga web. Cada una queda geolocalizada, con categoría y foto.',
      },
      {
        title: 'Se asigna con ruta sugerida',
        body: 'La plataforma asigna la incidencia a una cuadrilla o unidad y sugiere una ruta. Los puntos también pueden sumarse a una ruta a demanda del día.',
      },
      {
        title: 'La cuadrilla cierra con evidencia',
        body: 'En Urbe+, el equipo de campo recibe la hoja de ruta, resuelve y cierra cada punto con foto y observaciones en el lugar.',
      },
      {
        title: 'Los mapas muestran el patrón',
        body: 'Los mapas de calor muestran dónde se concentran los reportes, para decidir frecuencias, contenedores o intervenciones en los puntos que se repiten.',
      },
    ],
    chain: [
      {
        problem: 'Reclamos repartidos en canales que no se hablan',
        capability: 'Registro único de incidencias con foto, categoría y ubicación',
        decision: 'El centro de atención asigna cada caso a un responsable',
        result: 'Un estado visible para cada reclamo, del alta al cierre',
      },
      {
        problem: 'Cierres que no se pueden demostrar',
        capability: 'Cierre con foto en Urbe+ vinculado a la incidencia',
        decision: 'El organismo responde al vecino con la evidencia del cierre',
        result: 'Menos reclamos repetidos por el mismo punto',
      },
      {
        problem: 'Microbasurales recurrentes',
        capability: 'Mapas de calor de incidencias',
        decision: 'El área de ambiente cambia frecuencias o contenedores en esos puntos',
        result: 'Intervención sobre la causa, no solo sobre el síntoma',
      },
      {
        problem: 'Incidencias que se resuelven fuera de plazo',
        capability: 'Asignación con ruta sugerida y seguimiento en tiempo real',
        decision: 'La supervisión prioriza por antigüedad y cercanía',
        result: 'Efectividad de gestión de incidencias del 75 % al 90 %, según Urbetrack',
        evidence: declarado([SRC.ods]),
      },
    ],
    features: [
      'Incidencias geolocalizadas con categoría, fotos y observaciones',
      'Ingreso por app móvil, integración con terceros, importación masiva o carga web',
      'Integración con aplicaciones vecinales para recibir reportes con foto',
      'Asignación a cuadrillas con ruta sugerida',
      'Cierre en campo con evidencia fotográfica',
      'Hojas de ruta y cumplimiento de puntos con certificación en Urbe+',
      'Mapas de calor de reclamos y microbasurales',
      'Empadronamiento de contenedores y mobiliario con o sin lector',
      'Rutas a demanda generadas desde las incidencias abiertas',
    ],
    products: ['Urbe+', 'Monitor Online'],
    proof: {
      caseSlugs: ['irapuato', 'moreno', 'santa-fe'],
      metrics: [
        {
          value: '1',
          suffix: ' al mes',
          label: 'Queja en Irapuato; antes, 39–40 por día',
          evidence: declarado([SRC.irapuato], 'Dirección de Limpia de Irapuato, vía Urbetrack'),
        },
      ],
    },
    faq: [
      {
        q: '¿Urbetrack tiene una app para vecinos?',
        a: 'Urbetrack no publica una app de vecinos propia. Se integra con aplicaciones vecinales: el reporte del ciudadano, con foto y ubicación, llega al tablero municipal como una incidencia más.',
      },
      {
        q: '¿Qué es Urbe+?',
        a: 'Es la app de Urbetrack para reclamos, incidencias y cumplimiento de tareas en campo. Las cuadrillas reciben hojas de ruta, registran incidencias con foto y cierran cada tarea con evidencia en el lugar.',
      },
      {
        q: '¿Por dónde pueden entrar las incidencias?',
        a: 'Por la app móvil, por integración con sistemas de terceros, por importación masiva o por carga web. Todas quedan geolocalizadas en la misma plataforma.',
      },
      {
        q: '¿Cómo ayuda con los microbasurales?',
        a: 'Los mapas de calor muestran dónde se concentran los reportes. Con eso se decide dónde cambiar frecuencias, sumar contenedores o intervenir, y cada limpieza queda cerrada con foto.',
      },
    ],
    related: ['rutas-y-contenedores', 'barrido-e-higiene-urbana', 'recoleccion-certificada'],
    sectors: ['gobiernos', 'prestadores'],
    pending: [
      'Confirmar que Urbe+ es la app publicada como “Urbetrack Plus” (equivalencia a validar).',
      'No existe app de vecinos propia: confirmar con qué aplicaciones vecinales concretas hay integración para poder nombrarlas.',
      'Aclarar si “efectividad del 75 % al 90 %” es una mejora (de 75 a 90) o un rango; hoy es declarada y sin metodología.',
      'La eliminación de minibasurales en Moreno es declarada por Urbetrack: no usarla como cifra.',
    ],
  },

  /* ───────────────────────── 5. Gestión de flotas ───────────────────────── */
  {
    slug: 'gestion-de-flotas',
    group: 'flotas-y-seguridad',
    name: 'Gestión de flotas',
    short: 'Posición, recorridos, mantenimiento y viajes de toda la flota en una plataforma',
    icon: 'truck',
    seo: {
      title: 'Gestión de flotas: monitoreo, mantenimiento y viajes',
      description:
        'Monitorea tu flota en tiempo real, reconstruye recorridos en 3D, planifica el mantenimiento y controla viajes y conductores, también donde no hay señal celular.',
    },
    hero: {
      kicker: 'Gestión de flotas',
      titleLight: 'Toda la flota,',
      titleBold: 'una sola verdad operativa.',
      lead: 'Para jefes de flota en servicios urbanos, oil & gas, minería, construcción y logística: qué hace cada unidad, dónde y qué necesita.',
      image: '/img/mod-monitor-online.webp',
      imageAlt:
        'Monitor de escritorio con el Monitor Online de Urbetrack: mapa de una ciudad con las unidades en tiempo real y filtros de flota.',
    },
    forWhom: [
      {
        who: 'Jefatura de flota',
        question: '¿Qué unidades están trabajando, cuáles paradas y cuáles en el taller?',
      },
      {
        who: 'Gerencia de operaciones en oil & gas o minería',
        question: '¿Cómo controlo viajes y personal donde no hay cobertura celular?',
      },
      {
        who: 'Responsable de mantenimiento',
        question: '¿Qué unidad necesita servicio antes de que se rompa?',
      },
    ],
    problem: {
      title: 'Una flota que se administra con llamadas y planillas',
      body: 'La posición está en un sistema, el mantenimiento en una planilla y los viajes en un grupo de mensajes. Cuando pasa algo, reconstruir qué ocurrió lleva días y cada área tiene su propia versión.',
      costs: [
        {
          title: 'Paradas no planificadas',
          body: 'Un mantenimiento que se posterga termina en una unidad fuera de servicio en plena operación, con rutas y personal que hay que reorganizar.',
        },
        {
          title: 'Viajes sin control de riesgo',
          body: 'Sin validar quién maneja, por dónde y con qué nivel de riesgo, el traslado de personal y carga depende de la buena voluntad de cada uno.',
        },
        {
          title: 'Investigaciones sin datos',
          body: 'Ante un incidente, sin recorrido reconstruido ni eventos registrados, la discusión con el conductor, el cliente o la aseguradora se basa en versiones.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Se conecta cada unidad',
        body: 'GPS con computadora de a bordo y caja negra, que guarda posición y eventos segundo a segundo sin depender de la red. Donde no hay cobertura celular, comunicación satelital.',
      },
      {
        title: 'Se monitorea en vivo',
        body: 'El Monitor Online muestra posición, velocidad, sensores y eventos, con alertas por reglas configurables. Urbetrack Lite lleva esa visibilidad al celular del supervisor.',
      },
      {
        title: 'Se gestionan viajes y conductores',
        body: 'Cada viaje se valida con login del conductor, nivel de riesgo y puntos de control certificados por app. El ranking de conductores muestra los hábitos de manejo de cada uno.',
      },
      {
        title: 'Se reconstruye y se mejora',
        body: 'El Monitor Histórico y el Simulador 3D reconstruyen recorridos para auditar incidentes. El Monitor de Calidad evalúa el desempeño y el tablero Kanban ordena el trabajo del taller.',
      },
    ],
    chain: [
      {
        problem: 'Unidades que fallan en plena operación',
        capability: 'Mantenimiento preventivo y correctivo con historial por unidad y tablero Kanban',
        decision: 'El taller programa servicios antes de la falla',
        result: 'Menos paradas no planificadas y un historial para decidir reemplazos',
      },
      {
        problem: 'Traslados sin control en zonas sin cobertura',
        capability: 'Comunicación satelital, caja negra y gestión de viajes con nivel de riesgo',
        decision: 'Operaciones aprueba y sigue cada viaje desde el monitoreo centralizado',
        result: 'Viajes trazables de punta a punta, también fuera de la red celular',
      },
      {
        problem: 'Accidentes investigados con versiones',
        capability: 'Simulador 3D sobre cartografía digital',
        decision: 'Seguridad reconstruye la maniobra con el recorrido y los eventos',
        result: 'Investigaciones que se cierran con evidencia',
      },
      {
        problem: 'Horas de personal comisionado difíciles de verificar',
        capability: 'Validación de traslados, login de chofer por viaje y presentismo con fichada satelital',
        decision: 'Operaciones y RR. HH. liquidan con el registro real de cada traslado',
        result: 'Urbetrack declara de −8 a −10 % en costo de personal comisionado',
        evidence: declarado([SRC.oilGas]),
      },
    ],
    features: [
      'Monitor Online con posición, velocidad, sensores y alertas por reglas',
      'Monitor Histórico para reconstruir cualquier recorrido pasado',
      'Monitor de Calidad para evaluar el desempeño de la operación',
      'Simulador 3D para auditar accidentes y maniobras sobre cartografía digital',
      'Urbetrack Lite y Urbetrack GO para supervisores y conductores en el celular',
      'Mantenimiento preventivo y correctivo con tablero Kanban para el taller',
      'Gestión de viajes con nivel de riesgo y puntos de control certificados',
      'Caja negra y comunicación satelital para operar sin cobertura',
      'Ranking de conductores por hábitos de manejo',
      'Dashboard de Huella de Carbono con CO₂ estimado y ranking de rutas por emisiones',
    ],
    products: ['Monitor Online', 'Monitor Histórico', 'Monitor de Calidad', 'Simulador 3D', 'Urbetrack Lite', 'Urbetrack GO'],
    proof: {
      caseSlugs: ['mineria-salta', 'solbayres', 'defiba'],
    },
    faq: [
      {
        q: '¿Qué incluye la gestión de flotas de Urbetrack?',
        a: 'Monitoreo en tiempo real, reconstrucción de recorridos, evaluación de desempeño, Simulador 3D, mantenimiento preventivo y correctivo, gestión de viajes, ranking de conductores y huella de carbono, en una plataforma SaaS disponible 7x24.',
      },
      {
        q: '¿Funciona donde no hay señal celular?',
        a: 'Sí. La caja negra guarda posición y eventos segundo a segundo sin depender de la red, y la comunicación satelital permite operar y asistir unidades sin cobertura celular, como en yacimientos y minas.',
      },
      {
        q: '¿Qué diferencia hay entre Urbetrack Lite y Urbetrack GO?',
        a: 'Urbetrack Lite es para quien supervisa: flota en tiempo real, mapas, reportes históricos, eventos y mantenimiento preventivo. Urbetrack GO es para el conductor: planificación de servicios, navegación giro a giro y certificación de trabajos en el lugar.',
      },
      {
        q: '¿Se integra con otros sistemas?',
        a: 'Sí. Urbetrack se integra con ERP, CRM, software de despacho y de planta, balanzas y plataformas de rastreo de terceros. En la Ciudad de Buenos Aires está integrada con SAP desde 2019.',
      },
      {
        q: '¿Cómo calcula la huella de carbono?',
        a: 'El Dashboard de Huella de Carbono estima el CO₂ según el tipo y modelo de camión, cargado o descargado, y arma un ranking de rutas por emisiones. Son valores estimados, analizables con business intelligence.',
      },
    ],
    related: ['movilidad-segura', 'control-de-combustible', 'ia-y-video-analitica'],
    sectors: ['prestadores', 'gobiernos', 'oil-gas', 'mineria', 'construccion', 'logistica'],
    pending: [
      'La cifra de −8 a −10 % en personal comisionado es declarada (“comprobado” según la propia empresa), sin cliente ni metodología.',
      'La cifra “+11 mil vehículos conectados” solo aparece en el contador del sitio: no se usa aquí.',
      'Conseguir capturas reales del tablero Kanban de mantenimiento y de la gestión de viajes.',
      'Decidir si se enlaza la Calculadora de optimización (urbetrack.com/calculadora-de-optimizacion) desde esta página.',
    ],
  },

  /* ───────────────────────── 6. Movilidad Segura ───────────────────────── */
  {
    slug: 'movilidad-segura',
    group: 'flotas-y-seguridad',
    name: 'Movilidad Segura',
    short: 'ADAS, DSM y Video-Analítica para prevenir accidentes y formar conductores',
    icon: 'shield',
    seo: {
      title: 'Movilidad Segura: ADAS, DSM y videotelemática',
      description:
        'Detecta fatiga, distracción, peatones y riesgo de colisión con alertas en cabina y micro-clips por evento. Seguridad vial con enfoque formativo, no punitivo.',
    },
    hero: {
      kicker: 'Movilidad Segura · ADAS + DSM',
      titleLight: 'Un accidente comienza',
      titleBold: 'antes del impacto.',
      lead: 'Para flotas con conductores expuestos al riesgo: alertas en cabina, micro-clips por evento y datos para formar a cada conductor, no para castigarlo.',
      image: '/img/campana/camion-dsm.webp',
      imageAlt:
        'Camión recolector de frente con la cámara DSM marcando en naranja al conductor, que mira el celular mientras maneja.',
    },
    forWhom: [
      {
        who: 'Responsable de HSE',
        question: '¿Cómo detecto fatiga y distracción antes de que terminen en un siniestro?',
      },
      {
        who: 'Jefatura de flota en minería, oil & gas o logística',
        question: '¿Qué conductores necesitan acompañamiento y en qué conducta?',
      },
      {
        who: 'Gerencia de operaciones de un prestador urbano',
        question: '¿Cómo protejo a peatones y operarios alrededor del camión?',
      },
    ],
    problem: {
      title: 'La conducta de riesgo se ve cuando ya es tarde',
      body: 'La fatiga, el celular o un peatón en el punto ciego no dejan registro hasta que hay un choque. Después, la investigación depende de testimonios y el conductor recibe una sanción en lugar de una corrección a tiempo.',
      costs: [
        {
          title: 'Siniestros que se investigan sin imagen',
          body: 'Sin video del momento, la reconstrucción de un incidente termina en versiones cruzadas con el conductor, el tercero o la aseguradora.',
        },
        {
          title: 'Capacitación sin material concreto',
          body: 'Sin eventos reales para mostrar, la formación en manejo seguro queda en charlas generales que no cambian hábitos.',
        },
        {
          title: 'Unidades y personas fuera de servicio',
          body: 'Cada incidente saca una unidad de la operación, a veces también a una persona, y obliga a reorganizar rutas y turnos.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Cámaras que miran afuera y adentro',
        body: 'ADAS observa el entorno: colisión frontal o con peatón, salida de carril y distancia de frenado insuficiente. DSM observa al conductor: fatiga, bostezo, distracción, celular, cinturón, fumar, conductor ausente y lente obstruida.',
      },
      {
        title: 'Alerta en cabina y alrededor',
        body: 'El conductor recibe la alerta en el momento. Punto ciego y visión 360° detectan peatones con alerta en cabina y externa, y anticipan la intención de giro por señal de giro, puerto CAN o sensor G.',
      },
      {
        title: 'Cada evento deja un micro-clip',
        body: 'La Video-Analítica genera un micro-clip en la plataforma web, vinculado a tipo de alerta, unidad, conductor, ubicación, recorrido y fecha y hora, sin un sistema de video externo.',
      },
      {
        title: 'Del evento a la conversación',
        body: 'Los clips y el ranking de conductores ordenan el coaching: se revisa cada conducta con el conductor y se sigue su evolución. Antes de la jornada, el Monitoreo de Iris / SOBEREYE suma un test pupilar de alrededor de un minuto.',
      },
    ],
    chain: [
      {
        problem: 'Fatiga y distracción que nadie ve',
        capability: 'DSM con alerta en cabina',
        decision: 'El conductor corrige en el momento y el supervisor revisa el evento',
        result: 'Conducta de riesgo detectada antes del impacto',
      },
      {
        problem: 'Peatones y operarios en el punto ciego',
        capability: 'Punto ciego y visión 360° con alerta en cabina y externa',
        decision: 'El conductor frena o espera y el peatón recibe el aviso',
        result: 'Giros y maniobras con alerta para quien maneja y para quien camina',
      },
      {
        problem: 'Capacitación sin casos reales',
        capability: 'Micro-clips por evento y ranking de conductores',
        decision: 'HSE arma el coaching con los eventos de cada conductor',
        result: 'Formación basada en evidencia, con enfoque formativo y no punitivo',
      },
      {
        problem: 'Accidentes en flotas que operan con alto riesgo',
        capability: 'ADAS, DSM y Video-Analítica integrados con la gestión de flota',
        decision: 'La empresa actúa sobre las conductas que más se repiten',
        result: 'Urbetrack declara de −65 a −75 % de accidentes',
        evidence: declarado([SRC.fatiga, SRC.oilGas], 'sin cliente, período ni metodología publicados'),
      },
    ],
    features: [
      'ADAS con alerta de colisión frontal o con peatón, salida de carril y distancia de frenado',
      'DSM con detección de fatiga, bostezo, distracción, celular, cinturón, fumar, conductor ausente y lente obstruida',
      'Video-Analítica con micro-clips por evento en la plataforma web',
      'Punto ciego con alerta en cabina y alerta externa para peatones',
      'Visión 360° con carrocería transparente',
      'Detección de intención de giro por señal, puerto CAN o sensor G',
      'Ranking de conductores para priorizar el coaching',
      'Monitoreo de Iris / SOBEREYE, tecnología de un tercero integrada, con test pupilar antes de la jornada',
      'Integración con la gestión de flota y la telemetría existente',
    ],
    products: ['Movilidad Segura', 'Video-Analítica', 'Monitoreo de Iris / SOBEREYE', 'Monitor Online'],
    proof: {
      caseSlugs: ['defiba', 'mineria-salta'],
      metrics: [
        {
          prefix: '−',
          value: '65–75',
          suffix: ' %',
          label: 'Accidentes con ADAS, DSM y video',
          evidence: declarado([SRC.fatiga, SRC.oilGas], 'sin cliente, período ni metodología publicados'),
        },
      ],
    },
    faq: [
      {
        q: '¿Qué diferencia hay entre ADAS y DSM?',
        a: 'ADAS mira el entorno del vehículo: distancia, carril, peatones y posibles colisiones. DSM mira al conductor: fatiga, distracción, celular, cinturón y obstrucción de la cámara. Movilidad Segura combina los dos.',
      },
      {
        q: '¿Hace falta un sistema de video aparte?',
        a: 'No. La Video-Analítica de Urbetrack genera micro-clips por evento directamente en la plataforma web, vinculados a unidad, conductor, ubicación, recorrido y hora.',
      },
      {
        q: '¿Qué es SOBEREYE?',
        a: 'Es una tecnología de un tercero que Urbetrack integra como Monitoreo de Iris / SOBEREYE. Hace un test de reacción pupilar de alrededor de un minuto antes de la jornada para detectar fatiga, somnolencia o consumo de alcohol, drogas o fármacos.',
      },
      {
        q: '¿Se usa para sancionar conductores?',
        a: 'El enfoque de Movilidad Segura es formativo, no punitivo: los eventos y el ranking sirven para acompañar a cada conductor en las conductas que necesita corregir.',
      },
      {
        q: '¿Cuánto reduce los accidentes?',
        a: 'Urbetrack declara reducciones de 65 % a 75 % de accidentes con ADAS, DSM y videoanalítica. Es una cifra propia, sin cliente, período ni metodología publicados.',
      },
    ],
    related: ['gestion-de-flotas', 'ia-y-video-analitica', 'control-de-combustible'],
    sectors: ['oil-gas', 'mineria', 'construccion', 'logistica', 'prestadores'],
    pending: [
      'La cifra de −65 a −75 % de accidentes es declarada, sin cliente, período ni metodología: conseguir un caso con fuente para reemplazarla.',
      'Confirmar con SOBEREYE las condiciones de uso de su nombre y marca en el sitio.',
      'No se usa la cifra “90 % de los accidentes laborales” del material de SOBEREYE: es declarada y no es de Urbetrack.',
      'DEFIBA no publica cifras de resultado: la página va sin métrica de caso.',
    ],
  },

  /* ───────────────────────── 7. Control de Combustible ───────────────────────── */
  {
    slug: 'control-de-combustible',
    group: 'flotas-y-seguridad',
    name: 'Control de Combustible',
    short: 'Cada litro cargado y consumido, conciliado por unidad',
    icon: 'fuel',
    seo: {
      title: 'Control de Combustible para flotas',
      description:
        'Concilia carga y consumo por vehículo con sonda, puerto CAN o playa de expendio. Bloquea cargas no autorizadas con RFID en el surtidor y detecta desvíos.',
    },
    hero: {
      kicker: 'Control de Combustible',
      titleLight: 'Que el combustible',
      titleBold: 'cierre por unidad.',
      lead: 'Para flotas municipales y privadas: carga, consumo y despacho conciliados por vehículo, con alertas ante desvíos y cargas no autorizadas bloqueadas.',
      image: '/img/fleet-escritorio.webp',
      imageAlt:
        'Supervisor frente a un monitor con el resumen de la flota, un recorrido en el mapa y alertas activas; detrás, un camión en la base.',
    },
    forWhom: [
      {
        who: 'Jefatura de flota',
        question: '¿Por qué el consumo de esta unidad no coincide con los kilómetros que hizo?',
      },
      {
        who: 'Administración y compras',
        question: '¿Cuánto de lo que pago en combustible termina en el tanque correcto?',
      },
      {
        who: 'Responsable de playa de expendio',
        question: '¿Cómo evito cargas a vehículos no habilitados?',
      },
    ],
    problem: {
      title: 'Litros que se pagan y no se explican',
      body: 'La carga se registra en un ticket, el consumo se estima y los kilómetros viven en otro sistema. Cuando los números no cierran, no hay forma de saber si fue una carga fuera de lugar, una pérdida o un rendimiento anormal.',
      costs: [
        {
          title: 'Diferencias que se aceptan como costo fijo',
          body: 'La brecha entre litros comprados y kilómetros recorridos se vuelve parte del presupuesto en lugar de investigarse.',
        },
        {
          title: 'Cargas no autorizadas',
          body: 'Sin control en el surtidor, un vehículo no habilitado puede recibir combustible de la flota sin que quede registro.',
        },
        {
          title: 'Rendiciones sin trazabilidad',
          body: 'Cuando la administración o un organismo de control pide explicaciones, solo hay tickets sueltos para justificar el gasto.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Se elige cómo medir',
        body: 'Según la flota: control por playa de expendio, consumo estimado por modelo de vehículo o telemetría a bordo, con sonda en el tanque o lectura por puerto CAN.',
      },
      {
        title: 'El surtidor reconoce al vehículo',
        body: 'Un tag RFID en el surtidor autoriza solo a vehículos habilitados y corta el flujo si el pico se desvía. Las cargas no autorizadas quedan bloqueadas.',
      },
      {
        title: 'La plataforma cruza los datos',
        body: 'Cada carga se cruza con la posición, los kilómetros y el consumo de la unidad. Así se detectan irregularidades de despacho, consumo y temperatura del combustible.',
      },
      {
        title: 'Las alertas llegan a quien decide',
        body: 'Cargas fuera de geocerca, cargas repetitivas, cargas que superan la capacidad del tanque y rendimientos fuera de promedio generan alertas para revisar cada caso.',
      },
    ],
    chain: [
      {
        problem: 'Cargas a vehículos no habilitados',
        capability: 'Tag RFID de surtidor con corte de flujo',
        decision: 'La playa despacha solo a unidades autorizadas',
        result: 'Cargas no autorizadas bloqueadas en el pico',
      },
      {
        problem: 'Consumo que no cierra con los kilómetros',
        capability: 'Sonda en el tanque o lectura por puerto CAN cruzada con el recorrido',
        decision: 'El jefe de flota revisa las unidades con rendimiento fuera de promedio',
        result: 'Desvíos detectados por unidad, no escondidos en el promedio de la flota',
      },
      {
        problem: 'Cargas fuera de lugar o repetidas',
        capability: 'Alertas por geocerca, repetición y exceso de capacidad del tanque',
        decision: 'Administración revisa cada caso con fecha, lugar y unidad',
        result: 'Cada litro con un registro trazable',
      },
      {
        problem: 'Gasto de combustible que crece sin explicación',
        capability: 'Control de Combustible integrado a la gestión de flota',
        decision: 'La empresa corrige cargas, rutas y hábitos con el dato',
        result: 'Ahorros de hasta 15 %, según Urbetrack',
        evidence: declarado(
          [SRC.aseo, SRC.oilGas, SRC.construccion],
          'metodología no publicada; otras páginas de Urbetrack dicen 15–30 % y hasta 30 %',
        ),
      },
    ],
    features: [
      'Control por playa de expendio, consumo estimado o telemetría a bordo',
      'Sonda de tanque para medir el consumo real',
      'Lectura de consumo por puerto CAN',
      'Tag RFID de surtidor que autoriza solo vehículos habilitados',
      'Corte de flujo si se desvía el pico',
      'Bloqueo de cargas no autorizadas',
      'Alertas por cargas fuera de geocerca y cargas repetitivas',
      'Alertas por exceso de capacidad del tanque y rendimiento fuera de promedio',
      'Detección de irregularidades de despacho, consumo y temperatura',
    ],
    products: ['Control de Combustible', 'Monitor Online', 'Monitor Histórico'],
    proof: {
      caseSlugs: ['mineria-salta'],
      metrics: [
        {
          prefix: 'hasta',
          value: '15',
          suffix: ' %',
          label: 'Ahorro de combustible',
          evidence: declarado(
            [SRC.aseo, SRC.combustibleBlog],
            'metodología no publicada; otras páginas de Urbetrack dicen 15–30 % y hasta 30 %',
          ),
        },
      ],
    },
    faq: [
      {
        q: '¿Cómo mide Urbetrack el consumo de combustible?',
        a: 'De tres formas, según la flota: por playa de expendio, por consumo estimado según el modelo del vehículo o con telemetría a bordo, mediante sonda en el tanque o lectura del puerto CAN.',
      },
      {
        q: '¿Cómo se evitan las cargas no autorizadas?',
        a: 'Con un tag RFID en el surtidor que autoriza solo a los vehículos habilitados y corta el flujo si el pico se desvía. Además, la plataforma alerta cargas fuera de geocerca o repetitivas.',
      },
      {
        q: '¿Qué irregularidades detecta?',
        a: 'Irregularidades de despacho, consumo y temperatura del combustible, cargas fuera de geocerca, cargas repetitivas, cargas que superan la capacidad del tanque y rendimientos fuera del promedio de la unidad.',
      },
      {
        q: '¿Cuánto se puede ahorrar?',
        a: 'Urbetrack declara ahorros de hasta 15 % con Control de Combustible; en otras páginas menciona 15–30 %. Son cifras propias sin metodología publicada, y el resultado depende del punto de partida de cada flota.',
      },
    ],
    related: ['gestion-de-flotas', 'movilidad-segura', 'rutas-y-contenedores'],
    sectors: ['gobiernos', 'prestadores', 'oil-gas', 'mineria', 'construccion', 'logistica'],
    pending: [
      'Unificar la cifra de ahorro de combustible: "hasta 15 %" (Aseo), "15–30 %" (Oil & Gas y Construcción) y “hasta 30 %” (blog) son inconsistentes y todas declaradas.',
      'La imagen /img/fleet-combustible.webp trae impreso “hasta el 60 %” del costo operativo, sin fuente: no usarla. Falta una foto de surtidor o tanque sin cifras.',
      'La minería del litio en Salta menciona combustible entre los módulos (entrevista al CEO), sin resultados: confirmar si puede citarse como caso de esta solución.',
    ],
  },

  /* ───────────────────────── 8. IA y Video-Analítica ───────────────────────── */
  {
    slug: 'ia-y-video-analitica',
    group: 'transversal',
    name: 'IA y Video-Analítica',
    short: 'Cámaras con IA que reconocen el evento y guardan el micro-clip',
    icon: 'camera',
    seo: {
      title: 'IA y videoanalítica para residuos y flotas',
      description:
        'Cámaras con IA que detectan vaciado, llenado y residuo en vereda, y cámaras antiexplosivas en oil & gas. Cada evento, un micro-clip con personas difuminadas.',
    },
    hero: {
      kicker: 'IA y Video-Analítica',
      titleLight: 'La tecnología no solo alerta,',
      titleBold: 'también deja evidencia.',
      lead: 'Para municipios, prestadores y operaciones de oil & gas: cámaras con IA que reconocen qué pasó y guardan el micro-clip de ese momento.',
      image: '/img/ia-vaciado.webp',
      imageAlt:
        'Imagen de la cámara de un recolector con dos contenedores marcados por la IA en el momento del vaciado sobre la tolva.',
    },
    forWhom: [
      {
        who: 'Prestador de recolección',
        question: '¿Cómo pruebo que vacié el contenedor y cómo quedó el lugar?',
      },
      {
        who: 'Municipio',
        question: '¿Puedo sumar imagen a la certificación por RFID?',
      },
      {
        who: 'Seguridad patrimonial en oil & gas',
        question: '¿Quién se acercó a las escotillas o a las válvulas, y cuándo?',
      },
    ],
    problem: {
      title: 'Horas de video que nadie mira',
      body: 'Una cámara que graba todo el turno no sirve si para encontrar un evento hay que revisar horas de grabación. El valor aparece cuando la IA reconoce el momento relevante y lo guarda con su contexto.',
      costs: [
        {
          title: 'Evidencia imposible de encontrar',
          body: 'Cuando llega un reclamo o un acta, buscar el momento exacto en horas de grabación lleva más tiempo que la discusión misma.',
        },
        {
          title: 'Descargos sin imagen',
          body: 'El RFID prueba que el contenedor se levantó. Sin imagen, el estado del lugar después del servicio queda a interpretación.',
        },
        {
          title: 'Vigilancia que depende de una persona',
          body: 'En instalaciones de oil & gas, un acceso no autorizado o un robo de combustible se detecta tarde si alguien tiene que estar mirando la pantalla.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Cámaras en el vehículo o en la instalación',
        body: 'En recolectores, cámaras en los laterales. En oil & gas, cámaras antiexplosivas con IA en escotillas de cisternas y cajones de válvulas.',
      },
      {
        title: 'La IA reconoce el evento',
        body: 'En residuos, Urbetrack declara que la IA identifica el tipo de residuo y el nivel de llenado, detecta el vaciado del contenedor y el residuo que queda en la vereda. En instalaciones, detecta personas, robo de combustible y accesos no autorizados.',
      },
      {
        title: 'Se genera el micro-clip',
        body: 'El evento se guarda como micro-clip en la plataforma web, vinculado a unidad, ubicación y fecha y hora. No hace falta un sistema de video externo.',
      },
      {
        title: 'Privacidad por diseño',
        body: 'Las personas se difuminan en las imágenes y los operarios aparecen siempre anonimizados. El sistema registra el servicio, no a quien pasa por la calle.',
      },
    ],
    chain: [
      {
        problem: 'Levantamientos que el RFID confirma pero no muestra',
        capability: 'Detección del vaciado con imagen del momento',
        decision: 'El prestador suma la imagen al registro del levantamiento',
        result: 'Evidencia visual del servicio para responder un reclamo o un acta',
      },
      {
        problem: 'Residuo en la vereda después del servicio',
        capability: 'IA que detecta residuo fuera del contenedor',
        decision: 'El supervisor revisa el micro-clip y define si hace falta un repaso',
        result: 'Estado del lugar documentado después de cada levantamiento',
      },
      {
        problem: 'Robo de combustible o accesos no autorizados en cisternas',
        capability: 'Cámaras antiexplosivas con IA en escotillas y válvulas',
        decision: 'Seguridad actúa sobre la alerta con el clip del evento',
        result: 'Incidentes detectados cuando ocurren, no en la revisión del día siguiente',
      },
      {
        problem: 'Certificar la recolección en toda la ciudad',
        capability: 'RFID por contenedor, registro digital de cada operación e IA',
        decision: 'Quilmes amplió en 2026 el sistema de seguimiento provisto por Urbetrack',
        result: 'Saber qué contenedores fueron vaciados, en qué horarios y con qué unidad, según el municipio',
        evidence: {
          level: 'comprobado',
          note: 'Prensa local, julio 2026 · sin cifras de resultado publicadas',
          sources: [SRC.quilmesHecho, SRC.quilmesCronica, SRC.quilmesConurbano],
        },
      },
    ],
    features: [
      'Identificación del tipo de residuo y del nivel de llenado',
      'Detección del vaciado del contenedor',
      'Detección de residuo en la vereda después del levantamiento',
      'Micro-clips por evento en la plataforma web, sin sistema de video externo',
      'Difuminado de personas por diseño en las imágenes',
      'Cámaras antiexplosivas con IA en escotillas de cisternas y cajones de válvulas',
      'Detección de personas, robo de combustible y acceso no autorizado en instalaciones',
      'Imagen del momento como complemento de la certificación RFID',
    ],
    products: ['Video-Analítica', 'Movilidad Segura', 'Monitor Online'],
    proof: {
      caseSlugs: ['quilmes', 'defiba'],
    },
    faq: [
      {
        q: '¿Qué reconoce la IA de Urbetrack en la recolección?',
        a: 'Según Urbetrack, identifica el tipo de residuo y el nivel de llenado, detecta el vaciado del contenedor y el residuo que queda en la vereda. Cada detección se guarda como micro-clip vinculado a la unidad, el lugar y la hora.',
      },
      {
        q: '¿Qué tan precisa es la detección?',
        a: 'Urbetrack todavía no publica métricas de precisión. En la recolección, la IA se combina con la lectura RFID y la telemetría del camión, como en la ampliación de Quilmes de 2026.',
      },
      {
        q: '¿Dónde se usa ya la IA en la recolección?',
        a: 'En Quilmes. En julio de 2026 el municipio amplió el sistema de seguimiento provisto por Urbetrack con RFID por contenedor, registro digital de cada operación e IA para certificar la recolección, según la prensa local.',
      },
      {
        q: '¿Cómo se protege la privacidad de las personas?',
        a: 'Las personas se difuminan por diseño: los operarios aparecen anonimizados y los rostros quedan desenfocados. El objetivo es registrar el servicio, no identificar a quien pasa.',
      },
      {
        q: '¿Sirve fuera de la recolección?',
        a: 'Sí. En oil & gas, cámaras antiexplosivas con IA en escotillas de cisternas y cajones de válvulas detectan personas, robo de combustible y accesos no autorizados. En flotas, la Video-Analítica genera micro-clips de los eventos de ADAS y DSM.',
      },
    ],
    related: ['recoleccion-certificada', 'movilidad-segura', 'incidencias-y-reclamos'],
    sectors: ['gobiernos', 'prestadores', 'oil-gas', 'logistica'],
    pending: [
      'Falta autorización de publicación del metraje “IA a bordo”: no usarlo en la página hasta tenerla.',
      'No hay métricas de precisión medidas ni publicadas: no afirmar porcentajes de acierto ni mostrar confianzas como resultado.',
      'No se publican como capacidades la lectura del número de contenedor (“podrían reemplazar tags RFID”) ni la infracción automática por restos diseminados: la primera es condicional y la segunda choca con el régimen de fotomultas.',
      'La página oficial de Quilmes (id 6126) devolvía error 502: el hecho se respalda en tres medios; sumar la fuente oficial cuando esté accesible.',
      'Confirmar que /img/ia-vaciado.webp puede publicarse (metraje con marcas de fecha y sin autorización documentada).',
    ],
  },

  /* ───────────────────────── 9. Consultoría ───────────────────────── */
  {
    slug: 'consultoria',
    group: 'transversal',
    name: 'Consultoría',
    short: 'Diagnóstico, planes de trabajo, rutas y pliegos con un equipo interdisciplinario',
    icon: 'handshake',
    seo: {
      title: 'Consultoría en gestión de residuos e higiene urbana',
      description:
        'Diagnóstico en 2–4 semanas, piloto en 8–12 y cierre con SLA. Ingenieros ambientales, geógrafos y sociólogos para diseñar planes, rutas y pliegos controlables.',
    },
    hero: {
      kicker: 'Consultoría',
      titleLight: 'La intuición sirve para empezar,',
      titleBold: 'la evidencia es para decidir.',
      lead: 'Para gobiernos y prestadores que rediseñan su servicio: diagnóstico, planes, rutas y pliegos con ingenieros ambientales, geógrafos y sociólogos.',
      image: '/img/consultoria-mesa.webp',
      imageAlt:
        'Equipo reunido alrededor de una mesa con informes impresos y una pantalla que muestra un mapa y tableros de datos.',
    },
    forWhom: [
      {
        who: 'Gobierno que prepara una nueva licitación',
        question: '¿Qué indicadores pido en el pliego para poder controlarlo después?',
      },
      {
        who: 'Subsecretaría de higiene urbana',
        question: '¿Mi plan de trabajo responde a cómo es hoy la ciudad?',
      },
      {
        who: 'Prestador que quiere mejorar su operación',
        question: '¿Dónde pierdo eficiencia en rutas, flota y contenedores?',
      },
    ],
    problem: {
      title: 'Tecnología sin rediseño no cambia el servicio',
      body: 'Instalar sensores sobre un plan de trabajo mal dimensionado solo mide mejor el mismo problema. Y un pliego que no define qué se controla y cómo deja al organismo sin herramientas para exigir.',
      costs: [
        {
          title: 'Pliegos difíciles de controlar',
          body: 'Indicadores que no se pueden medir, o demasiados, terminan en contratos que nadie puede auditar y en penalidades que no se aplican.',
        },
        {
          title: 'Rutas heredadas',
          body: 'Frecuencias y recorridos que no se revisan en años generan kilómetros de más en unos barrios y reclamos en otros.',
        },
        {
          title: 'Diagnósticos que no llegan a la calle',
          body: 'Un informe sin piloto ni implementación queda en un cajón y el servicio sigue igual.',
        },
      ],
    },
    howItWorks: [
      {
        title: 'Diagnóstico, 2–4 semanas',
        body: 'El equipo releva la operación: rutas, frecuencias, flota, contenedores, reclamos y contrato. Con eso identifica dónde están los problemas y qué conviene medir.',
      },
      {
        title: 'Piloto, 8–12 semanas',
        body: 'Los cambios se prueban en una zona con planes rediseñados y tecnología, con el objetivo de que el cambio se vea en el servicio.',
      },
      {
        title: 'Cierre con SLA',
        body: 'Lo que funcionó se formaliza en un cierre contractual con niveles de servicio acordados.',
      },
      {
        title: 'Implementación y acompañamiento',
        body: 'Instalación de dispositivos, capacitación y transferencia al equipo, con soporte y mejora continua. La Mesa de Ayuda funciona 24x7.',
      },
    ],
    chain: [
      {
        problem: 'Pliegos sin indicadores verificables',
        capability: 'Diseño de pliegos con indicadores medibles por telemetría',
        decision: 'El organismo licita pidiendo evidencia desde el inicio del contrato',
        result: 'Un contrato que se puede controlar con datos',
      },
      {
        problem: 'Rutas y frecuencias que no se revisan',
        capability: 'Diseño de rutas óptimas y digitalización de planes de trabajo',
        decision: 'La operación ajusta frecuencias, dotación y flota',
        result: 'Recursos asignados según la demanda real de cada zona',
      },
      {
        problem: 'Infraestructura y equipos mal dimensionados',
        capability: 'Optimización de contenedores, infraestructura y equipos',
        decision: 'Se define dónde sumar, mover o retirar contenedores y unidades',
        result: 'Inversión dirigida a donde el servicio la necesita',
      },
      {
        problem: 'Rediseñar la gestión de residuos de una ciudad grande',
        capability: 'Consultoría estratégica de residuos sólidos urbanos',
        decision: 'El GCBA adjudicó la LPU 7162-0388-LPU25 a Pagustech S.R.L., razón social de Urbetrack',
        result: 'Contrato por $ 1.560.476.343,36, del 17/10/2025 al 16/04/2026, luego prorrogado',
        evidence: {
          level: 'comprobado',
          note: 'Boletín Oficial CABA',
          sources: [SRC.boletinLpu],
        },
      },
    ],
    features: [
      'Diagnóstico de la operación en 2–4 semanas',
      'Piloto con cambios visibles en 8–12 semanas',
      'Cierre contractual con SLA',
      'Diseño y digitalización de planes de trabajo',
      'Diseño de rutas óptimas y frecuencias',
      'Asesoramiento para pliegos y concesiones',
      'Gestión integral de residuos y optimización de infraestructura y equipos',
      'Capacitación, implementación y Mesa de Ayuda 24x7',
    ],
    products: ['Monitor de Calidad'],
    proof: {
      caseSlugs: ['gcba'],
      metrics: [
        {
          prefix: '$ ',
          value: '1.560,5',
          suffix: ' M',
          label: 'Consultoría GCBA, LPU 7162-0388-LPU25',
          evidence: {
            level: 'comprobado',
            note: 'Boletín Oficial CABA · $ 1.560.476.343,36',
            sources: [SRC.boletinLpu],
          },
        },
      ],
    },
    faq: [
      {
        q: '¿Qué perfiles tiene el equipo de consultoría?',
        a: 'Un equipo interdisciplinario de ingenieros ambientales, geógrafos y sociólogos que diseña planes de trabajo, rutas, pliegos y mejoras de infraestructura para servicios de higiene urbana.',
      },
      {
        q: '¿Cómo es el método de trabajo?',
        a: 'Urbetrack propone un diagnóstico de 2 a 4 semanas, un piloto con cambios visibles en 8 a 12 semanas y un cierre contractual con SLA.',
      },
      {
        q: '¿Urbetrack hizo consultoría para gobiernos?',
        a: 'Sí. El Gobierno de la Ciudad de Buenos Aires adjudicó a Pagustech S.R.L., la razón social de Urbetrack, el Servicio de Consultoría Gestión Estratégica de Residuos Sólidos Urbanos (LPU 7162-0388-LPU25) por $ 1.560.476.343,36, según el Boletín Oficial porteño.',
      },
      {
        q: '¿Cómo se contrata?',
        a: 'Los municipios contratan por licitación, concurso de precios o compra directa. La propuesta se arma después de relevar la operación y puede combinar licencias de módulos, dispositivos y consultoría.',
      },
    ],
    related: ['recoleccion-certificada', 'rutas-y-contenedores', 'incidencias-y-reclamos'],
    sectors: ['gobiernos', 'prestadores'],
    pending: [
      'El método 2–4 / 8–12 semanas y el cierre con SLA son declarados: confirmar si aplican a todos los contratos o son una propuesta tipo.',
      'La segunda prórroga de la LPU (Res. 91/SSHIG/26) no tiene fecha de fin publicada en las fuentes: no mencionarla con fecha.',
      'La participación de Urbetrack en el diseño de los próximos pliegos del GCBA figura en el contexto sin fuente pública enlazada: no se afirma en la página.',
      'No se usa la antigüedad del equipo (“más de 15 años en aseo urbano”) por la inconsistencia de trayectoria (15, casi 20, 20, más de 20 años).',
    ],
  },
];
