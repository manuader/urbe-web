# Pendientes de validación y configuración

> Todo lo que el sitio **no afirma** hasta que Urbetrack lo confirme, más lo que falta configurar para publicar. Ordenado por impacto. La sección 4 se regenera con `node scripts/pendientes.ts` a partir de los campos `pending` de `src/data/*.ts`.

## 1. Bloqueantes para publicar

| # | Pendiente | Dónde impacta | Responsable sugerido |
|---|---|---|---|
| 1 | GUID del formulario de HubSpot, región del portal y propiedades personalizadas | Formularios (hoy en modo simulado) | RevOps / Marketing |
| 2 | Texto legal de privacidad y consentimiento (Ley 25.326 en Argentina, RGPD en España) | `/privacidad`, formularios | Legal |
| 3 | Banner de consentimiento antes de activar HubSpot tracking o GTM | Todas las páginas | Legal + Marketing |
| 4 | Validación editorial de los 7 artículos del blog (hoy borradores con `noindex`) | `/recursos/blog` | Marketing + producto |
| 5 | Redirecciones 301 en el servidor desde las URLs actuales de HubSpot | SEO | Web / IT |
| 6 | Revisión legal de cómo se cita la auditoría SGCBA 2021 (conclusión + 15 observaciones) | Caso GCBA, soluciones, FAQ | Legal |

## 2. Datos de marca y empresa a confirmar

| Dato | Qué dice el sitio | Estado | Qué hace falta |
|---|---|---|---|
| Tamaño del equipo | "~150 personas", etiquetado **A validar** | LinkedIn: 51–200 (~130 perfiles); otra fuente: 95 | Cifra oficial |
| Trayectoria | "Desde 2007" (contrato social, comprobado) | Las piezas dicen 15, casi 20, 20 o más de 20 años | Unificar el mensaje; el sitio evita decir "X años" |
| Cifras corporativas (+42 ciudades, +11k vehículos, +700k t/mes, +26M habitantes) | Etiquetadas **Declarado** | +11k solo aparece en el contador del sitio; 700k t/mes no cuadra con SONDA 2023 (71.000 t/día) | Fuente y fecha de cada cifra |
| Oficina en México | Zapopan, Av. Patria 2085 | El sitio actual también menciona Av. Santa Fe 546, CDMX | Cuál es la vigente |
| Urbetrack S.A.S. | Bogotá (informacolombia) | Un archivo interno dice Medellín | Confirmar |
| ISO 9001:2015 | TÜV Rheinland, ID 9105078821, alcance AR y ES | Sin año de emisión ni vigencia públicos | Fecha de vigencia |
| Honduras | No figura en el mapa | Solo lo mencionó el CEO en 2024 | ¿Hay operación publicable? |
| Premio a la Trayectoria 2026 (México) | No se usa | Solo en perfiles de empleados | Fuente primaria |
| Resultados genéricos (−65/−75 % accidentes, 15–30 % combustible, "hasta 15 %") | Declarados, "metodología no publicada" | Inconsistentes entre páginas del sitio actual | Unificar y documentar metodología o cliente |
| Nombres de apps | Urbe+ figura con equivalencia **A validar** | ¿Urbe+ = "Urbetrack Plus"? ¿EcoTachos = "BA Recicla"? | Confirmar |
| Drones | No se mencionan | No hay servicio verificado | Confirmar si existe |

## 3. Assets

| Pendiente | Por qué | Cómo resolverlo |
|---|---|---|
| Versiones de 1600 px o más de las piezas de campaña (sensores por vehículo, camiones recortados) | Las actuales tienen 500–650 px; el sitio las muestra a tamaño nativo para no pixelarlas | Equipo de diseño o skill `urbetrack-assets` |
| Capturas reales y actuales de la plataforma (Monitor de Calidad, Cierre de Servicio, Kanban de mantenimiento, gestión de viajes) | Hoy se usan mockups del banco | Producto |
| Fotos propias de Quilmes, Moreno, Santa Fe y DEFIBA | Los casos usan fotos genéricas | Clientes / comercial, con autorización |
| Autorización de publicación del metraje "IA a bordo" (unidad 24) | Sin autorización no se publica | Cliente + legal |
| Foto de surtidor o tanque sin cifras impresas | `fleet-combustible.webp` trae "hasta el 60 %" sin fuente | Diseño |
| Logos de Quilmes, Irapuato y DEFIBA | Casos sin logo | Clientes, con autorización |
| Identificación y autorización de las personas en `caso-irapuato-a.webp` | Foto grupal usada en el caso | Comercial |
| Imagen Open Graph específica por sección | Hoy se usa la general | Diseño |

## 4. Pendientes por página (generado desde los datos)

### Soluciones

**Recolección certificada**
- No hay cifra publicada de levantamientos por día: no usar un contador de levantamientos.
- Conseguir una captura real del Cierre de Servicio o del Monitor de Calidad (planificado contra ejecutado) para ilustrar la página.
- La auditoría SGCBA 2021 se cita solo con su conclusión y las 15 observaciones como contexto: revisar con legal si se mantiene en la FAQ.

**Barrido e higiene urbana**
- Confirmar si el barrido manual se traza con relojes inteligentes, con carritos portabolsa o con ambos según el cliente, y cómo se registra el mobiliario urbano.
- No hay cifra publicada de cuadras barridas certificadas ni de frecuencias de lavado: la página va sin métricas.
- Conseguir una captura real del Monitor de Servicios de Higiene Urbana.

**Rutas y contenedores**
- Conseguir la URL del informe de gestión de la Subsecretaría de Higiene Urbana que respalda los 740 contenedores con sensor volumétrico (2019).
- Cifra “hasta 15 %” de rutas inteligentes: declarada, sin cliente ni metodología.
- Confirmar si las cerraduras electrónicas se siguen ofreciendo con GPRS 2G o hay una versión con otra red.
- Decidir si se nombra a Sensoneo como fabricante de los sensores de llenado (partner local en CABA).

**Incidencias y reclamos**
- Confirmar que Urbe+ es la app publicada como “Urbetrack Plus” (equivalencia a validar).
- No existe app de vecinos propia: confirmar con qué aplicaciones vecinales concretas hay integración para poder nombrarlas.
- Aclarar si “efectividad del 75 % al 90 %” es una mejora (de 75 a 90) o un rango; hoy es declarada y sin metodología.
- La eliminación de minibasurales en Moreno es declarada por Urbetrack: no usarla como cifra.

**Gestión de flotas**
- La cifra de −8 a −10 % en personal comisionado es declarada (“comprobado” según la propia empresa), sin cliente ni metodología.
- La cifra “+11 mil vehículos conectados” solo aparece en el contador del sitio: no se usa aquí.
- Conseguir capturas reales del tablero Kanban de mantenimiento y de la gestión de viajes.
- Decidir si se enlaza la Calculadora de optimización (urbetrack.com/calculadora-de-optimizacion) desde esta página.

**Movilidad Segura**
- La cifra de −65 a −75 % de accidentes es declarada, sin cliente, período ni metodología: conseguir un caso con fuente para reemplazarla.
- Confirmar con SOBEREYE las condiciones de uso de su nombre y marca en el sitio.
- No se usa la cifra “90 % de los accidentes laborales” del material de SOBEREYE: es declarada y no es de Urbetrack.
- DEFIBA no publica cifras de resultado: la página va sin métrica de caso.

**Control de Combustible**
- Unificar la cifra de ahorro de combustible: "hasta 15 %" (Aseo), "15–30 %" (Oil & Gas y Construcción) y “hasta 30 %” (blog) son inconsistentes y todas declaradas.
- La imagen /img/fleet-combustible.webp trae impreso “hasta el 60 %” del costo operativo, sin fuente: no usarla. Falta una foto de surtidor o tanque sin cifras.
- La minería del litio en Salta menciona combustible entre los módulos (entrevista al CEO), sin resultados: confirmar si puede citarse como caso de esta solución.

**IA y Video-Analítica**
- Falta autorización de publicación del metraje “IA a bordo”: no usarlo en la página hasta tenerla.
- No hay métricas de precisión medidas ni publicadas: no afirmar porcentajes de acierto ni mostrar confianzas como resultado.
- No se publican como capacidades la lectura del número de contenedor (“podrían reemplazar tags RFID”) ni la infracción automática por restos diseminados: la primera es condicional y la segunda choca con el régimen de fotomultas.
- La página oficial de Quilmes (id 6126) devolvía error 502: el hecho se respalda en tres medios; sumar la fuente oficial cuando esté accesible.
- Confirmar que /img/ia-vaciado.webp puede publicarse (metraje con marcas de fecha y sin autorización documentada).

**Consultoría**
- El método 2–4 / 8–12 semanas y el cierre con SLA son declarados: confirmar si aplican a todos los contratos o son una propuesta tipo.
- La segunda prórroga de la LPU (Res. 91/SSHIG/26) no tiene fecha de fin publicada en las fuentes: no mencionarla con fecha.
- La participación de Urbetrack en el diseño de los próximos pliegos del GCBA figura en el contexto sin fuente pública enlazada: no se afirma en la página.
- No se usa la antigüedad del equipo (“más de 15 años en aseo urbano”) por la inconsistencia de trayectoria (15, casi 20, 20, más de 20 años).

### Sectores

**Gobiernos y municipios**
- URL pública de la ordenanza 2557/2019 de San Carlos de Bolívar y de los decretos de Moreno en SIBOM (respaldan la modalidad de contratación).
- Logos de Rosario, Municipalidad de Córdoba, San Martín y Nueve de Julio: solo figuran en urbetrack.com, sin fuente independiente.
- Huella de carbono y ODS: declarado, sin cifras publicadas de CO₂ evitado.

**Prestadores de higiene urbana**
- Evidencia de descargo con imagen del levantamiento: la IA a bordo (VisionPlatform) arrancó en agosto de 2026; confirmar qué parte está disponible comercialmente antes de publicar.
- Régimen de multas (puntos sobre facturación, inhabilitación por multas acumuladas): sale de una investigación interna de mercado; conseguir la fuente pública del pliego si se quieren citar cifras.
- Logo de HESURMET omitido: la lectura del logo está a validar.
- Logos de Interaseo, LIME y Emvarias: solo logos, sin caso con fuente.

**Oil & Gas**
- No hay caso de Oil & Gas con nombre, fuente y resultados: conseguir uno para caseSlugs.
- Cifras de 65–75 % de accidentes, 15–30 % de combustible y 8–10 % de personal comisionado: declaradas sin cliente, período ni metodología.

**Minería**
- Clientes mineros (POSCO, Ganfeng, Rio Tinto): solo por entrevista al CEO; sin confirmación independiente.
- Cifra de “hasta 75 %” de caída de accidentes: declarada, sin cliente ni metodología.
- Chile: el CEO menciona operación, pero no hay mineras chilenas con fuente.

**Construcción**
- Sin caso ni logos publicados para construcción.
- Detalle funcional del “arribo predictivo”: solo figura como declaración en urbetrack.com/construccion.
- Configuración de obras y plantas como puntos en el mapa: inferida de geocercas y puntos de control; confirmar con producto.
- Cifra de 15–30 % de combustible: declarada sin metodología e inconsistente con el “hasta 15 %” de otras páginas.

**Logística y flotas**
- La página /logistica-y-transporte del sitio actual da 404; no hay fuente propia de logística más allá de Fleet Management.
- Cifras de combustible inconsistentes entre páginas (“hasta 15 %”, “15–30 %”, “hasta 30 %”): unificar antes de publicar.
- Sin logos de logística publicados.

### Casos

**Gobierno de la Ciudad de Buenos Aires**
- URL pública del informe de gestión de la Subsecretaría de Higiene Urbana (100 % de telemetría, +1.000 vehículos, 3.670 rutas, +28.000 contenedores por día, 740 sensores, SAP).
- URL del Anexo V “Procedimiento Urbetrack” del Ente de Higiene Urbana (2024).
- Contenedores: +30.000 (prensa 2017), +28.000 por día (informe de gestión) y meta de 25.000 (blog) son métricas distintas; no mezclarlas.
- El Centro de Monitoreo del GCBA (28 mil contenedores, 1.100 camiones) no se usa: la atribución a Urbetrack está a validar.

**Solbayres (Grupo Tysa)**
- Texto textual de la cita de Diego Ameal (Gerente de Sistemas, Grupo Tysa): el caso la menciona, pero las fuentes permitidas no la transcriben.
- Alcance territorial: el contexto dice “unas 7.100 manzanas” y el dossier “unas 7.100 cuadras”; confirmar antes de usarlo.
- Frecuencia de mantenimiento de contenedores (tres veces por semana): confirmar si corresponde al servicio con Urbetrack.

**Municipalidad de Moreno**
- URLs de los siete decretos de contratación en SIBOM (2021–2025).
- Cita textual de Florencia González: las fuentes solo la parafrasean.
- Foto real del complejo Catonas; la imagen actual es genérica.
- 214 contenedores con geolocalización en centros comerciales: no se usa, está a validar si es Urbetrack.

**Municipio de Quilmes**
- Cifras de resultado del piloto y de la ampliación: no publicadas.
- Cargo exacto de Roberto Gaudio (qué secretaría) y en cuál de las notas figura la cita textual.
- La página oficial del municipio (noticia 6126) devolvía error 502; confirmar que sigue en línea.
- Logo del Municipio de Quilmes: no hay archivo en /img/clientes/.
- Foto propia del piloto o del Ecoparque; la imagen actual es genérica.

**Municipalidad de Santa Fe**
- Discrepancia en la cantidad de GPS: la prensa de 2018 (dossier) dice 60 y el contexto maestro dice 66. Se usa 60; confirmar con Urbetrack.
- URL del Decreto DMM 00234/2018 y del informe del Tribunal de Cuentas (2019).
- Cita del exintendente José Corral: la prensa la menciona, pero las fuentes permitidas no la transcriben.
- Foto propia de la implementación; la imagen actual es genérica.

**Municipio de Irapuato**
- No hay prensa independiente ni nota del gobierno municipal que nombre a Urbetrack en Irapuato.
- Período de implementación: las fuentes solo fechan la publicación del caso (julio de 2026).
- Identificar a las personas de la foto y confirmar la autorización de uso.
- Logo: definir si corresponde el del municipio (no hay archivo) o el de GISA, la concesionaria.
- Cargo de Medina Mendiola: el contexto dice “Director de Aseo Público / Limpia” y el dossier “Director de Limpia”; unificar.

**DEFIBA**
- Cifras de resultado: el caso no publica ninguna.
- Ubicación de la operación (puerto o ciudad) y fecha de inicio.
- Cita de un responsable de DEFIBA.
- Logo de DEFIBA: no hay archivo en /img/clientes/.

**Empresas del litio en Salta**
- Confirmación independiente de POSCO, Ganfeng y Rio Tinto como clientes (hoy solo por entrevista al CEO).
- Alcance por empresa, período y cifras de resultado.
- Autorización para nombrar a cada empresa en un caso.

### Blog (informe del redactor)

- La cita de Eva Mieri (Quilmes) sale del contexto interno; el dossier no le asocia URL: se atribuye "según la prensa local".
- Faltan URLs públicas para: integración con SAP y 740 sensores en CABA (informe de gestión GCBA), decretos de Moreno (SIBOM), Ordenanza 2557/2019 de Bolívar.
- Se dejaron afuera por falta de fuente: reclamos de CABA (+603 %, restos de obra 33 %), contrato de Madrid (68 indicadores), 7.100 manzanas/cuadras de Solbayres, 4.500 sensores Sensoneo.
