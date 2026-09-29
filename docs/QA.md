# Verificación (29/09/2026)

Hecha sobre el build de producción (`astro build` + `astro preview`) en el navegador integrado.

## Build y tipos

- `astro build`: 46 páginas, sin errores ni advertencias.
- `astro check`: 0 errores en 69 archivos.

## Peso

| Recurso | Tamaño |
|---|---|
| HTML de la home | 245 KB (53 KB gzip), incluye los mapas SVG de calles y de presencia |
| HTML de una solución | ~98 KB |
| CSS total | ~119 KB entre todos los archivos (cada página carga solo lo suyo) |
| JS de la home | GSAP + línea de tiempo del hero: 74 KB (29 KB gzip); resto < 12 KB |
| JS de páginas internas | < 10 KB |
| Fuente | Montserrat variable local, 80 KB, con `preload` y fallback métrico |

El primer pantallazo no depende de JavaScript: el hero entra con CSS y se ve completo si el script no carga.

## Layout en 375 px (mobile)

Chequeo automático en home, solución, sector, caso, índice de casos, blog, artículo, plataforma, empresa y contacto:

- **Desborde horizontal:** ninguno (el ancho de página es igual al del viewport en todas).
- **Texto menor a 12 px:** ninguno después de los ajustes.
- **Áreas táctiles:** todas ≥ 24 px (WCAG 2.2 AA); botones de 52 px.
- **Imágenes ampliadas por encima de su resolución:** ninguna.
- El hero muestra titular, bajada y CTA en la primera pantalla; la demo del hero gira el mapa para encuadre vertical y compacta la alerta.

## Desktop (1440 px)

Revisión visual de todas las secciones de la home y de las plantillas de solución, sector, caso, blog, plataforma, empresa y contacto. Correcciones aplicadas durante la revisión: ancho del titular del hero, tarjeta de indicadores del hero en franja superior, muro de logos sin celdas vacías, mapa de presencia recortado a su columna, redacción del resultado de Irapuato, comillas tipográficas.

## Interacciones

| Prueba | Resultado |
|---|---|
| Formulario: continuar sin elegir tipo | Muestra "Elige una opción para continuar." |
| Formulario: elegir tipo con clic | Avanza al paso 2 (con teclado no salta de paso) |
| Formulario: enviar vacío en paso 3 | Cinco mensajes de error explícitos, foco en "Nombre y apellido" |
| Formulario: error de envío (`?simular=error`) | Mensaje de error, reintento vuelve al paso 3 con los datos cargados, evento `demo_form_error` |
| Formulario: envío válido | "Enviando…" con botón bloqueado → confirmación con próximos pasos y aviso de modo de prueba |
| Eventos | `demo_form_start`, `demo_form_step` ×2, `demo_form_view`, `demo_form_submit`, `demo_form_success`, `generate_lead` |
| Atribución | UTM de la URL guardados como primer y último contacto |
| Flota → unidad | Demostración automática única: zoom a la unidad 24, ficha con sensores que se actualizan, "Volver a la flota" |
| Secuencia señal → decisión | Cambia de estado con el paso en lectura, sin fijar el scroll |
| Pestañas (públicos, módulos) | Clic, flechas, Inicio y Fin |
| Filtros de casos y búsqueda del blog | Filtran en el cliente y avisan cuando no hay resultados |

## Pendiente de verificar

- Lighthouse y pruebas en dispositivos reales (iOS Safari, Android Chrome).
- Lector de pantalla (VoiceOver, NVDA) sobre las demos y el formulario.
- Envío real a HubSpot una vez configurado el GUID.
- Contraste de las imágenes con texto incrustado del banco de campaña.
