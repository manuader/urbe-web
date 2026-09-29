# Reglas de contenido (para quien escriba copy del sitio)

## Fuentes permitidas — y solo estas

1. `/Users/manuader/Desktop/urbetrack/URBETRACK-CONTEXTO.md` — contexto maestro, secciones 1 a 13 y 19.
2. `/Users/manuader/Desktop/urbetrack/computer-vision/.claude/avo/2026-09-28-ads-redes/dossier.md` — hechos con URL de fuente.
3. `/Users/manuader/Desktop/urbetrack/urbe-web/docs/PROPUESTA.md` — la estrategia del sitio.

**No inventes** funcionalidades, clientes, países, resultados, certificaciones, testimonios, fechas, cargos ni cifras. Si algo ayudaría pero no está en las fuentes, no lo escribas: anótalo en `pending` del objeto.

## Evidencia

- Toda cifra, caso, resultado o cita lleva `evidence` con su nivel: `comprobado`, `declarado`, `validar` o `ilustrativo`, y `sources` con URL cuando la fuente la tiene.
- Si la metodología no es pública: `note: 'metodología no publicada'`.
- Las cifras de resultado genéricas (−65/−75 % accidentes, 15–30 % combustible, "hasta 15 %") son `declarado` con esa nota.
- La auditoría SGCBA 2021 no es un aval sin matices: tiene 15 observaciones. Citá solo la conclusión y en su contexto (campo `context` de los casos).
- Irapuato ganó la Escoba de Platino 2026 pero **no se vincula a Urbetrack**: no lo menciones.
- Guadalajara y el Centro de Monitoreo GCBA: atribución a Urbetrack `validar`. No los uses como casos.
- Logos: se presentan como "Organizaciones cuyos logos publica urbetrack.com", nunca como avales.
- SOBEREYE es tecnología de un tercero que Urbetrack integra. Decilo así.
- IA de residuos: se puede decir lo que Urbetrack declara (tipo de residuo, llenado, vaciado) y que Quilmes amplió el sistema con RFID e IA en 2026 (comprobado). **No** afirmes métricas de precisión: no existen medidas publicadas.
- Drones: no hay servicio verificado. No los menciones.

## Voz

- Español profesional y claro, **en tuteo** ("Solicita una demo", "Cuéntanos tu operación"). Nunca voseo.
- Frases cortas, voz activa, sin emojis, sin signos de exclamación.
- Afirmaciones específicas y verificables: "Cada levantamiento queda vinculado a contenedor, unidad, hora y lugar", nunca "revolucionamos la gestión urbana". Sin superlativos que no se puedan probar ("líder", "el mejor", "único").
- Titular mixto: `titleLight` plantea (minúscula tipo oración), `titleBold` nombra lo que importa. Una idea por titular. Ejemplo: titleLight "Cada vehículo informa", titleBold "qué trabajo hizo."
- Traducí cada funcionalidad en beneficio comprensible. Evitá listas de features sin utilidad.
- El costo del problema se muestra sin alarmismo ni urgencia artificial: consecuencias operativas concretas (tiempo, discusiones, multas, combustible, reclamos), no miedo.
- Cifras: coma decimal y espacio antes del porcentaje ("97 %", "56–60 %"). Guion largo "–" para rangos.
- Nombres de producto exactos: Urbetrack Lite, Urbetrack GO, Urbe+, Urbetrack EcoTachos, Movilidad Segura, Video-Analítica, Control de Combustible, Monitoreo de Iris / SOBEREYE, Monitor Online, Monitor Histórico, Monitor de Calidad, Simulador 3D.

## Imágenes

Solo rutas que existen en `/Users/manuader/Desktop/urbetrack/urbe-web/public/img/` (se referencian como `/img/archivo.webp`). Mirá la imagen antes de elegirla si dudás de qué muestra. `imageAlt` describe lo que se ve, en una frase.
