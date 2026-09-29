---
title: "Qué es la certificación por telemetría y qué cambia en el pago"
description: "Cómo GPS, sensores de trabajo y RFID convierten cada levantamiento en un registro verificable, y por qué eso cambia la forma de pagarle al contratista."
date: 2026-09-22
author: "Equipo Urbetrack"
authorRole: "Consultoría y producto"
category: "gestion-de-residuos"
tags: ["certificación", "rfid", "telemetría", "recolección", "contratos"]
image: "/img/tel-rfid-contenedor.webp"
imageAlt: "Tag RFID negro atornillado al borde de un contenedor verde de residuos."
featured: true
draft: true
sources:
  - label: "Urbetrack · Aseo & Smart City"
    url: "https://urbetrack.com/aseo-smart-city"
  - label: "Urbetrack · Brochure Servicios Públicos, Ciclo de Aseo"
    url: "https://urbetrack.com/hubfs/Brochure%20Servicios%20P%C3%BAblicos%20CICLO%20DE%20ASEO.pdf"
  - label: "Urbetrack · Transformación digital del servicio de higiene urbana en la Ciudad de Buenos Aires"
    url: "https://urbetrack.com/blog/transformacion-digital-servicio-higiene-aseo-urbano-ciudad-buenos-aires"
  - label: "Urbetrack · Cómo Solbayres optimiza su gestión de residuos urbanos"
    url: "https://urbetrack.com/blog/c%C3%B3mo-solbayres-optimiza-su-gesti%C3%B3n-de-residuos-urbanos-con-tecnolog%C3%ADa-y-datos"
  - label: "La Nación · Smart City Expo Buenos Aires (2017)"
    url: "https://www.lanacion.com.ar/tecnologia/smart-city-expo-buenos-aires-el-futuro-de-las-ciudades-es-inteligente-y-con-mejor-calidad-de-vida-nid2068492/"
  - label: "GCBA · Auditoría del Sistema Urbetrack (Informe 77-SGCBA-21)"
    url: "https://buenosaires.gob.ar/contenido/auditoria-del-sistema-urbetrack"
relatedSolutions: ["recoleccion-certificada", "barrido-e-higiene-urbana"]
relatedCases: ["gcba", "solbayres"]
---

Durante años, la pregunta sobre la recolección tuvo una respuesta vaga: el camión pasó. Pasó por la cuadra, estuvo en la zona, cumplió el horario. Eso dice dónde estuvo el vehículo, pero no qué trabajo hizo. La certificación por telemetría cambia la pregunta. Ya no alcanza con saber que el camión pasó. Queda registrado que levantó un contenedor concreto, a una hora concreta, con una unidad identificada.

## Qué es, en una frase

La certificación por telemetría verifica el servicio con datos de los propios equipos. Cada levantamiento queda asociado a contenedor, unidad, hora y lugar. Con ese registro, el organismo que paga puede vincular el pago al contratista con evidencia verificable, en lugar de una declaración.

No es un GPS. El GPS es una de sus capas. El valor aparece cuando se combinan tres fuentes que, por separado, dicen poco.

## Cómo funciona: tres capas que se confirman entre sí

| Capa | Dónde va | Qué aporta |
|---|---|---|
| GPS y computadora de a bordo | Vehículo | Posición, velocidad y eventos. La caja negra guarda los datos segundo a segundo sin depender de la red |
| Sensores de trabajo | Compactador, roll-off, barredora, hidrolavadora | Compactación, cada vuelco de contenedor, cuadras barridas, activación del flusher |
| Tag RFID y antena | Tag en el contenedor, antena en la tolva | La identidad del contenedor en el momento en que se levanta |

La clave está en la última fila. Cada contenedor lleva un tag RFID. La antena montada en la tolva del compactador, del lavacontenedor o del levantacontenedor lo lee cuando el contenedor se vacía. En ese instante, el sistema cruza la lectura con la posición y con la hora. El resultado es un registro por parada, no un recorrido aproximado.

Los sensores de trabajo cumplen la misma función en otros servicios. Una barredora con sensor de encendido informa las cuadras barridas, no solo las recorridas. Un roll-off con sensor de toma de fuerza registra cada vuelco. Una hidrolavadora informa cuándo activó el flusher. En todos los casos, el vehículo informa qué trabajo hizo, no solo dónde estuvo.

El conductor, además, se identifica con una tarjeta RFID al empezar el turno. Así el registro también dice quién operaba la unidad.

## Qué cambia en el pago al contratista

Sin telemetría, el pago se apoya en lo que declara el prestador y en inspecciones por muestreo. La discusión se da sobre percepciones: el vecino dice que no pasaron, la empresa dice que sí, el inspector vio una cuadra de cien.

Con certificación, la base de la conversación es otra:

- **El pago se liga a lo ejecutado.** El módulo Cierre de Servicio certifica el turno y habilita el pago por resultados [Declarado · Urbetrack].
- **Lo planificado se compara con lo hecho.** El Monitor de Calidad contrasta la ruta y el servicio previstos con los ejecutados.
- **La discusión se hace sobre registros.** Si un contenedor no figura como levantado, se ve cuál, en qué ruta y con qué unidad.
- **El prestador también gana.** Puede demostrar su cumplimiento antes de que se lo discutan, con el mismo dato que ve el municipio.

Para que esto funcione, los datos tienen que llegar a los sistemas que ya usas. La plataforma se integra con ERP, balanzas y software de planta. En la Ciudad de Buenos Aires, la integración con SAP funciona desde 2019 [Comprobado · informe de gestión GCBA].

Un exfuncionario porteño lo resumió en una línea:

> "La herramienta sirve para discutir sobre un dato, no sobre una percepción."
>
> — Renzo Morosi, ex subsecretario de Higiene Urbana del GCBA, citado por Urbetrack

## Dos casos, con su nivel de evidencia

**Ciudad de Buenos Aires.** La digitalización de la higiene urbana porteña incluye rutas electrónicas, tags en contenedores, telemetría y una plataforma de auditoría que vincula el pago a contratistas con datos verificables. En 2017, la solución cubría más de 30.000 contenedores y 900 vehículos municipales [Comprobado · La Nación, 2017]. Urbetrack informa un cumplimiento promedio de recolección del 97 % [Declarado · Urbetrack].

La Sindicatura General de la Ciudad auditó el sistema en 2021 (Informe 77-SGCBA-21). Su conclusión fue que el sistema "soporta adecuadamente los procesos del Organismo en lo atinente a la gestión de recolección de residuos". El mismo informe registra 15 observaciones [Comprobado · SGCBA], así que conviene leerlo completo y en su contexto. Más detalle en el [caso GCBA](/casos/gcba).

**Solbayres (Grupo Tysa).** Trabaja con Urbetrack desde 2014 y presta servicio a más de 700.000 habitantes en la Ciudad [Declarado · Urbetrack y Solbayres]. Empezó con RFID en compactadores y lavacontenedores. Después lo extendió a flushers, barredoras y roll-off. El cumplimiento certificable de levantamiento pasó de 56–60 % a más de 98 % por turno [Declarado · Urbetrack y Solbayres].

Lee bien esa cifra. Habla de cumplimiento *certificable*: la parte del servicio que se puede probar con registros. Por eso es un buen indicador de lo que cambia con la certificación. Más detalle en el [caso Solbayres](/casos/solbayres).

Si quieres ver cómo se aplica a tu servicio, empieza por la [recolección certificada](/soluciones/recoleccion-certificada).

## En resumen

- La certificación por telemetría combina GPS, sensores de trabajo y la lectura del tag RFID de cada contenedor por una antena en la tolva.
- Cada levantamiento queda vinculado a contenedor, unidad, hora y lugar, y eso permite ligar el pago a lo ejecutado.
- En CABA y en Solbayres hay resultados publicados, con distinto nivel de evidencia: léelos con su etiqueta.
