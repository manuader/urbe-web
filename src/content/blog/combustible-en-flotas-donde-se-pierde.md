---
title: "Combustible en flotas: dónde se pierde y cómo detectarlo"
description: "Despacho, consumo y temperatura: dónde se va el combustible y cómo lo detectan la sonda, el puerto CAN, el surtidor con RFID y el bloqueo de cargas."
date: 2026-08-04
author: "Equipo Urbetrack"
authorRole: "Consultoría y producto"
category: "seguridad-y-flotas"
tags: ["combustible", "flotas", "rfid", "telemetría", "can"]
image: "/img/sector-fleet.webp"
imageAlt: "Operario con chaleco reflectante consulta un mapa en una tablet de noche, con camiones cisterna estacionados detrás."
featured: false
draft: true
sources:
  - label: "Urbetrack · Fleet Management"
    url: "https://urbetrack.com/fleet-management"
  - label: "Urbetrack · Cómo un sistema de control de combustible detecta irregularidades en flotas municipales"
    url: "https://urbetrack.com/blog/c%C3%B3mo-un-sistema-de-control-de-combustible-detecta-irregularidades-en-flotas-municipales"
  - label: "Urbetrack · Aseo & Smart City (Control de Combustible)"
    url: "https://urbetrack.com/aseo-smart-city"
  - label: "Salta Mining · Entrevista a Pablo Ader, CEO de Urbetrack (2024)"
    url: "https://saltamining.com/contenido/3387/urbetrack-hemos-superado-desafios-muy-importantes-en-empresas-mineras-que-operan"
relatedSolutions: ["control-de-combustible", "gestion-de-flotas"]
relatedCases: ["mineria-salta"]
---

El combustible es uno de los costos que más se discuten en una flota y uno de los que menos se miden bien. Se sabe cuánto se compró. Se sabe, más o menos, cuántos kilómetros se hicieron. Lo que falta es el tramo del medio: cuánto entró a cada tanque, cuánto se consumió y si esa relación tiene sentido. Ahí es donde aparecen las pérdidas. Este artículo recorre los tres puntos donde suelen producirse y las herramientas que las hacen visibles.

## Dónde se pierde

Control de Combustible, el módulo de Urbetrack, agrupa las irregularidades en tres familias [Declarado · Urbetrack]:

- **Despacho.** Lo que pasa en el surtidor. Cargas a vehículos no habilitados, cargas fuera del lugar previsto, cargas repetidas en poco tiempo, cargas mayores a la capacidad del tanque.
- **Consumo.** Lo que pasa en el camino. Rendimientos que se alejan del promedio del vehículo o del modelo, sin una razón operativa que lo explique.
- **Temperatura.** El volumen del combustible varía con la temperatura, y el sistema también registra irregularidades en esa variable.

Cada familia pide una forma distinta de medir. Por eso un control serio combina fuentes.

## Cómo se mide el consumo

Hay tres formas de saber cuánto combustible usa un vehículo. No son excluyentes:

- **Sonda en el tanque.** Mide el nivel de forma directa. Permite ver cargas y descensos bruscos en el momento en que ocurren.
- **Lectura por puerto CAN.** Toma los datos de consumo que ya genera la computadora del vehículo. No requiere intervenir el tanque.
- **Consumo estimado por modelo.** Calcula el consumo esperado según el vehículo y su uso. Sirve como referencia cuando no hay sonda ni CAN disponibles.

La combinación importa. Si la sonda indica una carga de cierta cantidad de litros pero el surtidor registró otra, hay algo que revisar. Si el consumo real se aleja del estimado para ese modelo, también. El dato aislado dice poco. El cruce entre fuentes es lo que detecta la irregularidad.

La plataforma permite hacer el control por playa de expendio, por estimación o por telemetría a bordo, según lo que tenga cada flota. Más detalle en [control de combustible](/soluciones/control-de-combustible).

## El surtidor como punto de control

Buena parte de las pérdidas ocurre en el despacho. Por eso el surtidor es un punto de control, no solo un punto de carga.

Con un tag RFID en el surtidor, la carga se autoriza solo para vehículos habilitados. Si el pico se desvía durante la carga, el flujo se corta [Declarado · Urbetrack]. El sistema permite además bloquear cargas no autorizadas.

Así, el control deja de depender de que alguien revise tickets al final del mes. Cada carga queda vinculada a un vehículo, un lugar y un momento, y la irregularidad se ve cuando ocurre.

## Qué alertas mirar y cuánto se puede ahorrar

Las alertas que declara el módulo son concretas [Declarado · Urbetrack]:

- Cargas fuera de geocerca.
- Cargas repetitivas.
- Exceso de capacidad del tanque.
- Rendimientos fuera de promedio.

Cada una apunta a un tipo de pérdida distinto. Una carga fuera de geocerca indica un despacho en un lugar no previsto. Una carga repetitiva en poco tiempo, o mayor a la capacidad del tanque, puede indicar que el combustible no fue a ese vehículo. Un rendimiento fuera de promedio puede ser una pérdida o un problema mecánico. En los dos casos conviene revisarlo, y ahí el control de combustible se cruza con el mantenimiento y la gestión de la flota. Más detalle en [gestión de flotas](/soluciones/gestion-de-flotas).

Sobre el ahorro, Urbetrack declara que Control de Combustible genera "ahorros de hasta el 15 %" [Declarado · Urbetrack, metodología no publicada]. No hay cliente, período ni método de cálculo publicados. El resultado en tu flota depende de cuánto se pierde hoy y de qué controles ya tienes. Por eso conviene medir una línea de base antes de implementar, para poder comparar después con tus propios números.

El control de combustible también aparece en operaciones fuera de lo urbano. En la minería del litio en Salta, el CEO de Urbetrack lo menciona entre las funciones que la empresa provee a sus clientes, junto con seguridad vial, mantenimiento y comunicación satelital [Declarado · entrevista al CEO, 2024]. Más detalle en el [caso de minería en Salta](/casos/mineria-salta).

## En resumen

- El combustible se pierde en tres lugares: el despacho, el consumo y las variaciones de temperatura.
- La sonda, el puerto CAN, la estimación por modelo y el surtidor con RFID se complementan: el cruce entre fuentes es lo que revela la irregularidad.
- El ahorro de "hasta 15 %" es una cifra declarada sin metodología publicada; medir una línea de base propia es el primer paso.
