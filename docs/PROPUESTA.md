# Propuesta — rediseño de urbetrack.com

> Síntesis previa a la implementación. Fuentes: `URBETRACK-CONTEXTO.md` (relevado 28/09/2026), dossier de hechos verificables (`computer-vision/.claude/avo/2026-09-28-ads-redes/dossier.md`), design system "Evidencia luminosa" (`design-system/sistema/`) y el prototipo anterior (`design-system/sitio-web/`).

## 1. Diagnóstico del prototipo anterior

Qué funcionaba y se conserva: el sistema visual (estudio blanco, titular mixto, violeta = sistema, naranja = alerta), la regla de evidencia (toda cifra con etiqueta) y la base técnica de SEO/GEO (JSON-LD, FAQ, `llms.txt`).

Qué no alcanzaba:

| Problema | Consecuencia | Qué cambia |
|---|---|---|
| El hero es una maqueta 3D con texto encima | Contraste bajo, primer pantallazo ilegible, 65 KB de Three.js antes de entender nada | Hero editorial con una demostración SVG legible al lado, no detrás del texto |
| El recorrido secuestra el scroll (5 pasos pinneados) | El visitante tarda 6 pantallas en llegar al contenido | Ninguna sección se pinnea más de una pantalla; el movimiento acompaña, no retiene |
| Todo en una sola página (14 módulos, 5 industrias con 10 checks cada una) | Acumulación de funcionalidades sin explicar su utilidad | La home orienta; las páginas internas profundizan |
| Organizado por producto ("No es un GPS", "4 capas", "14 módulos") | Habla de Urbetrack, no del problema del cliente | Organizado por preguntas del comprador |
| Capturas de dashboards chicas | No se entienden sin zoom | Recortes de producto redibujados a escala de lectura |
| Una sola audiencia implícita | El municipio y la flota minera leen lo mismo | Recorridos separados para sector público y empresas |

## 2. Propuesta de valor

**Una frase:** Urbetrack muestra qué está pasando en cada ruta, cada vehículo y cada contenedor, avisa lo que requiere atención y deja evidencia de cada servicio prestado.

**El ciclo que la sostiene:** ver → entender → decidir → actuar → certificar.

| Nivel | Mensaje | Respaldo verificable |
|---|---|---|
| Qué hace | Conecta vehículos, contenedores, cuadrillas y reclamos en una sola plataforma | Suite de 4 capas: SaaS, dispositivos IoT, datos e IA, consultoría [Declarado] |
| Para quién | Municipios, prestadores de higiene urbana y empresas con flotas | Casos públicos en CABA, Moreno, Quilmes, Santa Fe, Bolívar [Comprobado] |
| Beneficio principal | Discutir sobre un dato, no sobre una percepción | Cita de un exfuncionario del GCBA publicada por Urbetrack [Declarado] |
| Diferencial | Certificación por telemetría: cada levantamiento atado a contenedor, unidad, hora y lugar | RFID + antena en tolva + sensores de trabajo [Declarado]; auditado por la Sindicatura GCBA en 2021 [Comprobado] |
| Escala | 5 países con oficina, +42 ciudades, ISO 9001:2015, Escoba de Plata 2026 | ISO y premio [Comprobado]; ciudades [Declarado] |

**Titular del hero:** "Entiende qué pasa en tu operación. **Decide con evidencia.**"
Bajada: municipio, prestador o flota → qué ve, qué recibe, qué certifica.

## 3. Públicos y sus preguntas

| Público | Rol típico | Pregunta que lo trae | Lo que necesita ver primero | Recorrido |
|---|---|---|---|---|
| Sector público | Subsecretario de higiene urbana, director de control, intendencia | "¿Cómo sé que el servicio que pago se prestó en cada cuadra?" | Certificación por cuadra, tablero de control, reclamos con cierre, casos de gobierno con fuente | `/sectores/gobiernos` |
| Prestadores | Gerente de operaciones o de sistemas de una concesionaria | "¿Cómo demuestro mi cumplimiento antes de que me lo discutan?" | Evidencia por turno, sensores de trabajo, descargo ante multas, Solbayres | `/sectores/prestadores` |
| Empresas con flota | Jefe de flota, HSE, gerente de logística en oil & gas, minería, construcción | "¿Dónde se me van el combustible, el tiempo y la seguridad?" | Movilidad Segura, combustible, operación sin cobertura | `/sectores/oil-gas`, `/mineria`, `/construccion`, `/logistica` |
| Influenciadores | Consultores, organismos multilaterales, prensa | "¿Quién es esta empresa y qué tan seria es?" | Empresa, fuentes, certificaciones | `/empresa`, `/fuentes` |

## 4. Mapa del sitio

```
/                                   Home: orienta
/soluciones/                        Índice por necesidad
  recoleccion-certificada           RFID, sensores de trabajo, cierre de servicio
  barrido-e-higiene-urbana          Barrido manual y mecánico, lavado, flusher
  rutas-y-contenedores              Rutas fijas, a demanda e inteligentes; sensores de llenado
  incidencias-y-reclamos            Urbe+, reclamos con foto, microbasurales
  gestion-de-flotas                 Monitores, mantenimiento, viajes, Simulador 3D
  movilidad-segura                  ADAS, DSM, Video-Analítica, SOBEREYE
  control-de-combustible            Sonda, CAN, surtidor con RFID
  ia-y-video-analitica              IA en la recolección y micro-clips por evento
  consultoria                       Diagnóstico, pliegos, rutas, implementación
/sectores/
  gobiernos                         Sector público (recorrido propio)
  prestadores                       Concesionarias de higiene urbana
  oil-gas · mineria · construccion · logistica
/plataforma                         4 capas, módulos, apps, hardware, integraciones
/casos/                             Índice filtrable por país y sector
  gcba · solbayres · moreno · quilmes · santa-fe · irapuato · defiba · mineria-salta
/empresa                            Historia, equipo, presencia, certificaciones
/recursos/blog/                     Blog con categorías, búsqueda y destacados
  [slug] · categoria/[cat]
/contacto                           Demo y contacto (formulario HubSpot)
/fuentes                            Metodología de evidencia y cada dato con su fuente
/privacidad · /404
```

Redirecciones previstas desde el sitio en producción (HubSpot): `/aseo-smart-city` → `/sectores/gobiernos`, `/fleet-management` → `/soluciones/gestion-de-flotas`, `/oil-y-gas` → `/sectores/oil-gas`, `/minería` → `/sectores/mineria`, `/construccion` → `/sectores/construccion`, `/blog/*` → `/recursos/blog/*`. Lista completa en `docs/SEO-GEO.md`.

## 5. Recorrido narrativo de la home

Cada sección responde una pregunta distinta y aporta una idea nueva. Ninguna repite una promesa anterior.

| # | Sección | Pregunta del visitante | Idea nueva | Forma |
|---|---|---|---|---|
| 1 | Hero | ¿Qué hacen y para quién? | Ver, decidir y certificar la operación en la calle | Titular mixto + bajada + CTA + demo "Operación en vivo" |
| 2 | Credenciales | ¿Son serios? | Escala y terceros que lo avalan | Franja con países, ISO, premio, ISWA, cifras con etiqueta |
| 3 | Problemas | ¿Esto me pasa a mí? | Seis situaciones reconocibles y su costo operativo | Tarjetas editoriales con la pregunta, el costo y la capacidad que lo resuelve |
| 4 | Cómo conecta | ¿Qué puedo ver, controlar o mejorar? | Una sola verdad operativa: todas las señales en un mismo lugar | Diagrama de conexiones animado (fuentes → plataforma → decisiones) |
| 5 | De la señal a la decisión | ¿Cómo funciona en mi operación? | Un evento real, paso a paso, hasta el resultado | Secuencia de 4 escenas: señal → alerta → acción → evidencia |
| 6 | Soluciones por público | ¿Qué me corresponde? | Tres recorridos distintos | Selector público / prestador / flota con capacidades y enlace |
| 7 | Producto en detalle | ¿Qué veo en pantalla? | De la flota a la unidad | Transición flota → unidad con fichas de sensores |
| 8 | Evidencia | ¿Funciona en operaciones como la mía? | Casos con fuente y resultado | Casos destacados con cifra, etiqueta y enlace a la fuente |
| 9 | Escala | ¿Pueden acompañarme? | Equipo, presencia y trayectoria | Mapa de oficinas, fotos de equipo y eventos, hitos |
| 10 | Siguiente paso | ¿Cómo avanzo? | Una demo sobre tu operación, en tres pasos | Formulario corto en pasos + qué pasa después |
| 11 | Preguntas | ¿Y si…? | Respuestas directas para compras y asistentes de IA | Acordeón con JSON-LD `FAQPage` |

## 6. Qué explica cada interacción

| Interacción | Dónde | Qué explica | Funcionalidad real que representa |
|---|---|---|---|
| Recorrido que se dibuja y unidad que avanza | Hero | La plataforma ve la ruta en tiempo real | Monitor Online + planes de trabajo |
| Contenedor que pasa a "certificado" cuando la unidad lo levanta | Hero | Certificación por telemetría | RFID en contenedor + antena en tolva |
| Evento que aparece en el mapa y se convierte en alerta, luego en tarea | Hero y sección 5 | Ver → decidir → actuar | Incidencias (Urbe+), reglas y alertas |
| Señal de telemetría que actualiza un indicador | Sección 5 y flota → unidad | La unidad informa qué trabajo hizo | Sensores de compactación, toma de fuerza, barredora, flusher |
| Líneas que conectan fuentes con la plataforma | Sección 4 | Una sola verdad operativa | Integraciones: GPS, RFID, sensores, cámaras, reclamos, ERP |
| Transición flota → unidad | Sección 7 | Del panorama al detalle | Monitor Online, fichas de unidad |
| Evento DSM → micro-clip → coaching | `/soluciones/movilidad-segura` | La alerta deja evidencia y se vuelve formación | Movilidad Segura, Video-Analítica |
| Contadores que suben | Credenciales, casos | Magnitud, siempre con etiqueta | Cifras declaradas o comprobadas |
| Animación del logo (U que se traza, pin que cae) | Barra de navegación, cierre y pie | Identidad: la U de Urbetrack marca un lugar | — |

Reglas del movimiento en `docs/MOTION.md`. Extensiones del design system en `docs/DS-EXTENSION.md`. Datos a validar en `docs/PENDIENTES.md`.

## 7. Criterio de éxito

En pocos segundos el visitante puede decir: *"Entiendo qué hace Urbetrack, reconozco el problema que me resuelve y quiero ver cómo funcionaría en mi operación."*

Pruebas concretas:
- El hero se entiende sin scrollear, sin hover y sin que la animación termine (la demo es un complemento, no la explicación).
- A 375 px de ancho, titular, bajada y CTA entran en la primera pantalla.
- Ninguna cifra sin etiqueta de evidencia; ninguna simulación sin rótulo.
- Con `prefers-reduced-motion`, todo el contenido se ve en su estado final.
- LCP bajo 2,5 s en 4G; sin JavaScript bloqueante antes del primer render.
