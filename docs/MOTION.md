# Lenguaje de movimiento

El movimiento del sitio tiene una sola función: **explicar cómo funciona Urbetrack**. Cada animación orienta, confirma una interacción, muestra una causalidad o refuerza la identidad. Si no hace ninguna de esas cosas, no está.

## Principios

1. **Una orquestación por vista.** Nunca hay dos demos animándose a la vez en pantalla. Las demos autónomas solo corren cuando están visibles (≥ 35 %) y la pestaña está activa.
2. **El contenido no espera a la animación.** Única excepción: la intro de marca de la home (~3 s, una vez por sesión, salteable, solo CSS para que nunca quede trabada). El hero se entiende completo sin que la demo termine. Las entradas del primer pantallazo usan CSS puro (no dependen de que cargue JavaScript) y duran menos de un segundo.
3. **No se secuestra el scroll.** Las secuencias fijas (`SignalSequence`) dejan que la página avance normalmente; solo cambian de estado según qué paso está en lectura.
4. **Precisión antes que espectáculo.** Desplazamientos cortos (16–18 px), sin rebotes grandes, sin destellos, sin parallax decorativo.
5. **Naranja = atención.** Lo único que pulsa en naranja es un evento que requiere acción (contenedor desbordado, alerta DSM). Si todo pulsa, nada alerta.
6. **Movimiento reducido.** Con `prefers-reduced-motion` se apaga todo lo autónomo (demos, pulsos, flujos, contadores) y se muestra el estado final. Lo que controla el usuario (pestañas, acordeones, selección de unidad) sigue funcionando sin transición.

## Ritmos y curvas

| Uso | Duración | Curva |
|---|---|---|
| Hover, pulsación, cambio de color | 180 ms | `--ease-out` `cubic-bezier(.22,1,.36,1)` |
| Cambio de estado (pestaña, panel, ficha) | 450–600 ms | `--ease-out` |
| Revelado de bloques y líneas de titular | 900–1000 ms | `--ease-out` |
| Transición entre vistas (flota → unidad) | 1100 ms | `--ease-io` `cubic-bezier(.65,0,.35,1)` |
| Fichas de dato que aparecen | 550–600 ms | `--ease-back` (rebote suave, back 1,4) |
| Datos que fluyen (conexiones) | 2,8 s lineal en bucle | `linear` |
| Contadores | 1,6 s | easing de cuarta potencia |
| Escalonado entre elementos hermanos | 45–80 ms | — |

## Inventario: qué explica cada animación

| Animación | Dónde | Qué explica | Disparador | Movimiento reducido |
|---|---|---|---|---|
| Intro de marca: grilla de puntos que se revela, U que se traza con una luz en la punta, pin que cae con anillos concéntricos, logotipo que se contrae desde un tracking amplio, firma y brillo recortado a la silueta, filete como barra de carga, cortina que sube | Home, antes del hero (1 vez por sesión, ~3 s, se saltea con clic o tecla; `?intro=1` la fuerza; se repite al hacer clic en el logo de la barra o del pie) | Identidad y transición al hero | Carga de la home | No se muestra |
| U que se traza, pin que cae y se asienta, logotipo que entra | Barra (1 vez por sesión, si no corrió la intro), cierres y pie (al entrar) | Identidad: la U marca un lugar | Carga / entrada en pantalla | Logo estático |
| Pin que salta | Logo al pasar el cursor | Confirma que es un enlace | Hover | Sin salto |
| Recorrido que se dibuja y unidad que avanza | Hero, "Operación en vivo" | Monitor Online: ver la ruta en tiempo real | Visible ≥ 35 % | Ruta completa, 14/14 |
| Contenedor que pasa a violeta con onda de lectura | Hero | Certificación por RFID en cada parada | Paso de la unidad | Todos certificados |
| Contenedor naranja → alerta → asignada → resuelta | Hero | Ver → decidir → actuar (incidencias con foto) | Línea de tiempo | Alerta resuelta visible |
| "Cierre de servicio" que aparece al final | Hero | Certificación del turno | Fin de ruta | Visible |
| Pasos 01 · 02 · 03 que se completan | Pie del hero | Orienta: en qué parte del ciclo está la demo | Línea de tiempo | Los tres completos |
| Líneas que se encienden y pulsos que viajan | "Una sola verdad operativa" | Todas las fuentes llegan al mismo lugar | Entrada en pantalla | Líneas estáticas |
| Resaltado de conexiones | Mismo diagrama | A quién le sirve cada dato | Hover / foco | Igual, sin transición |
| Fichas conectadas al camión → indicador → alerta → decisión | "De la señal a la decisión" | Vehículo → dato → alerta → acción | Paso en lectura (scroll normal) | Cambia de estado sin transición |
| Mapa que se acerca y ficha que entra | "Del panorama a la unidad" | Monitor Online: de la flota al detalle | Clic o demostración automática única | Sin zoom animado |
| Valores de sensores que cambian | Ficha de unidad | La telemetría llega en vivo | Ficha abierta | Valores fijos |
| Arcos que salen de Buenos Aires | Mapa de presencia | Oficinas conectadas con la casa central | Entrada en pantalla | Arcos dibujados |
| Línea degradé por fila | Cadena de valor (soluciones) | Causalidad problema → resultado | Entrada en pantalla | Línea completa |
| Línea de avance que se llena | Pasos "Cómo funciona" | Progreso de lectura del proceso | Scroll | Llena |
| Barra de progreso bajo la navegación | Toda la web | Cuánto falta de la página | Scroll | Igual (lo controla el usuario) |
| Barra que se oculta al bajar y vuelve al subir | Toda la web | Más espacio de lectura | Scroll | Igual |

## Implementación

- CSS para entradas, hover y estados; `IntersectionObserver` para disparar; GSAP (solo en la home, ~29 KB gzip) para la línea de tiempo del hero, que necesita sincronizar ruta, contenedores, indicadores y tarjetas.
- Las demos se pausan fuera de pantalla, con la pestaña oculta y con el botón de pausa (WCAG 2.2.2).
- Nada anima propiedades de layout: solo `transform`, `opacity` y `stroke-dashoffset`.
