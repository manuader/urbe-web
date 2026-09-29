# Extensión del design system "Evidencia luminosa" para la web

El sitio usa el sistema tal como está definido en `design-system/sistema/` (tokens, componentes y guías). Lo que sigue es lo que **se agregó o se ajustó** para la web, con el porqué. Todo está marcado `[EXT]` en `src/styles/tokens.css` y `src/styles/components.css`.

## Se conserva sin cambios

- Paleta oficial y derivados: violeta = sistema, `u-pin` = alerta, `u-naranja` solo en "Solicitar demo", tinta para secciones oscuras.
- Montserrat como familia única, titular mixto Light + ExtraBold, kicker en mayúsculas con tracking amplio.
- Filete violeta → naranja: uno por bloque, alineado a la izquierda (centrado solo en cierres).
- Vidrio lavanda (`.glass`) solo para superficies de dato; `.glass--alerta` para eventos.
- Etiqueta de evidencia obligatoria junto a cada cifra, caso o resultado.
- Radios del sitio (5 / 6 / 10) y 16 px para vidrio y marcos.
- Curvas `--ease-out` y `--ease-io`; duraciones 200 / 450 / 900 ms.

## Tokens agregados o ajustados

| Token | Valor | Por qué |
|---|---|---|
| `--fs-display` | `clamp(2.55rem, 1.05rem + 5vw, 6.2rem)` | El 8,4 rem de campaña no deja lugar a la demo en el primer pantallazo. El hero usa ~4,2 rem en desktop |
| `--fs-body` | 17 px (antes 16) | Lectura en pantallas grandes y a distancia; el brief pide evitar textos diminutos |
| `--fs-small` / `--fs-micro` | 15 px / 13 px | Mínimo de texto informativo: 13 px. Etiquetas en mayúsculas: mínimo 12 px |
| `--u-violeta-profundo` | `#4F2D72` | Hover del violeta sobre fondo claro (8,9:1) |
| `--u-alerta-fondo` | `#FFF1E6` | Fondo de la etiqueta "A validar" y de chips de alerta; texto `u-alerta-txt` (4,6:1) |
| `--u-tinta-2` / `--u-tinta-3` | `#1E2330` / `#262C3B` | Superficies y bordes elevados dentro de secciones oscuras (demo de flota, pie) |
| `--u-sombra-2` | sombra doble suave | Elevación de tarjetas editoriales al pasar el cursor (la del sistema es para objetos sobre estudio) |
| `--r-card` | 14 px | Tarjetas editoriales, entre el radio de caja (5) y el de vidrio (16) |
| `--ease-back` | `cubic-bezier(.34, 1.4, .64, 1)` | El "rebote suave (back 1,4)" de las fichas que describe la guía multimedia, llevado a CSS |
| `--t-micro` | 180 ms | Respuesta de hover y pulsación |
| Fuente de respaldo métrica | `Montserrat Fallback` (Arial con `size-adjust`) | Evita saltos de layout mientras carga la fuente variable local |

## Componentes nuevos

| Componente | Archivo | Qué es | Regla |
|---|---|---|---|
| Tarjeta editorial | `.card` | Superficie blanca con filete para contenido que no es dato (problemas, casos, soluciones) | El vidrio queda reservado a datos; la tarjeta editorial no brilla |
| Etiqueta Ilustrativo | `.ev--ilustrativo` | Cuarto nivel de evidencia, gris con punto discontinuo | Para simulaciones y borradores. Nunca acompaña un resultado |
| Íconos de interfaz | `Icon.astro` | 46 íconos SVG de trazo 1,8 px en grilla de 24 | Cubre el pendiente del DS ("no hay set SVG oficial"). Reemplazar si aparece uno oficial |
| Logo animado | `Logo.astro` | La U se traza sobre su eje, el pin cae y se asienta, el logotipo entra letra por letra | No redibuja el vector oficial: solo lo revela. Una vez por sesión en la barra; al entrar en pantalla en cierres |
| Hero de página | `PageHero.astro` | Migas, kicker, titular mixto, bajada, CTA y figura | La figura respeta la resolución nativa de la imagen (ver Imágenes) |
| Cadena de valor | `ValueChain.astro` | Problema → capacidad → decisión → resultado | La línea degradé se dibuja al entrar: el movimiento muestra causalidad |
| Pasos | `Steps.astro` | Lista numerada con línea de avance ligada al scroll | Sin secuestrar el scroll: solo se llena |
| Formulario de demo | `DemoForm.astro` | Tres pasos con opciones visuales, chips y validación explícita | Un solo botón naranja por vista: el de envío |
| Demos de producto | `components/demos/` | Operación en vivo, conexiones, secuencia señal → decisión, flota → unidad, mapa de presencia | Siempre rotuladas "Simulación"; el estado final se entiende sin animación |

## Texturas y fondos

- **Grilla de puntos** (`radial-gradient` violeta al 10 %) detrás de los héroes, desvanecida hacia abajo. Evoca el plano y la cartografía sin competir con el contenido.
- **Mapa de calles real** (OpenStreetMap, Almagro) en la demo del hero y en la vista de flota: calles blancas sobre manzanas `#F3F2F6` en claro, `#242A39` en oscuro. Rotulado siempre.
- **Mapa de puntos** de Iberoamérica para presencia: solo se iluminan los países con oficina.

## Imágenes

- Las piezas de campaña del banco (sensores por vehículo, camiones recortados) tienen entre 500 y 650 px de ancho. **No se amplían**: `src/lib/images.ts` las lista y el hero de página las muestra a tamaño nativo sobre fondo de estudio. Pendiente: versiones de 1600 px o más (ver `PENDIENTES.md`).
- Fotos con texto o cifras impresas sin fuente (por ejemplo `fleet-combustible.webp`, "hasta el 60 %") no se usan.
- Metraje de cámaras de a bordo: no se publica hasta tener autorización.

## Tema oscuro

Se usa en tres lugares con intención: la demo de flota (producto), la franja de continuidad de la plataforma y el pie. En oscuro, el violeta de texto pasa a `u-violeta-claro`, el secundario a `u-acero` y las etiquetas de evidencia a sus variantes claras.

## Accesibilidad incorporada al sistema

- Foco visible de 3 px en `u-pin` con separación de 3 px en todos los controles.
- Texto informativo mínimo 13 px; etiquetas en mayúsculas mínimo 12 px.
- Áreas táctiles mínimas de 24 × 24 px (WCAG 2.2 AA); botones de 52 px de alto (42 px en la barra).
- Todo lo animado tiene estado final estático con `prefers-reduced-motion`.
