---
title: "30 Días de Vibe Coding - Día 10 - Clon de Miro"
description: "Una pizarra de lienzo infinito local-first con formas, notas adhesivas, conectores, capas y modo de presentación."
summary: "Una pizarra de lienzo infinito local-first con formas, notas adhesivas, conectores, capas y modo de presentación."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-10", "typescript", "canvas", "whiteboard"]
series: ["30 Days of Vibe Coding"]
series_order: 10
seriesOpened: false
date: 2026-04-15
draft: false
---

Día 10. Pedí un clon de Miro. Un lienzo infinito completo con formas, conectores, capas y un modo de presentación.

## El Prompt

> "Construye una app de pizarra con lienzo infinito estilo Miro. Local-first, TypeScript, HTML5 Canvas."

Ese fue el punto de partida. Todo lo demás vino del desglose de tareas.

## Cómo Se Construyó

Este fue grande. Watchfire lo dividió en 27 tareas, que es lo máximo que he visto hasta ahora en este reto. El desglose cubrió:

1. Formas y herramientas de dibujo (rectángulos, elipses, líneas, flechas)
2. Herramienta de lápiz libre
3. Elementos de texto
4. Notas adhesivas con codificación por colores
5. Conectores inteligentes entre formas
6. Cuadrícula y snap-to-grid
7. Historial de deshacer/rehacer
8. Exportación a PNG y JSON
9. Panel de capas
10. Selector de colores
11. Controles de zoom y paneo
12. Atajos de teclado para todo
13. Modo oscuro
14. Pantalla de bienvenida con onboarding
15. Modo de presentación

27 tareas son muchas. Pero estaban bien delimitadas. Cada una añadía una pieza específica de funcionalidad sin romper lo anterior.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

Esto está sorprendentemente completo.

![Lienzo principal con notas adhesivas y conectores](images/screenshot-01.png)

**Se siente como una herramienta de pizarra de verdad.** La abres y aparece un lienzo infinito con una cuadrícula de puntos. Puedes hacer paneo, zoom in y out, soltar formas, escribir texto, conectar cosas con flechas. El bucle básico de pizarra simplemente funciona.

![Pantalla de bienvenida con atajos](images/screenshot-02.png)

**Hay una pantalla de bienvenida como Dios manda.** Te muestra los atajos de teclado y cómo empezar. Puedes cerrarla y marcar una casilla para no volver a verla. Pequeño detalle, pero hace que la app se sienta acabada.

![Formas y conectores](images/screenshot-04.png)

**Los conectores son inteligentes.** Dibujas una línea entre dos formas y se engancha a los puntos de conexión. Mueves una forma y el conector la sigue. Es el tipo de funcionalidad que separa una app de dibujo de una herramienta de diagramación.

![Panel de capas](images/screenshot-06.png)

**El panel de capas funciona de verdad.** Cada elemento aparece en una lista en la barra lateral. Puedes ver la jerarquía, reordenar cosas y gestionar qué está encima de qué. Es como un mini panel de capas de Figma.

![Overlay de atajos de teclado](images/screenshot-05.png)

**Atajos de teclado para todo.** V para seleccionar, R para rectángulo, O para elipse, P para lápiz, T para texto, S para nota adhesiva. Más todo lo estándar como Cmd+Z para deshacer, Cmd+Shift+Z para rehacer. Hay un overlay completo de atajos que puedes abrir con ?.

![Dibujo a mano alzada](images/screenshot-07.png)

**La herramienta de lápiz es suave.** Dibujé una cara solo para probar. Los trazos se sienten responsivos y naturales. No es sensible a la presión ni nada sofisticado, pero suficientemente bueno para bocetar ideas durante un brainstorm.

## Los Bug Reports

Este fue relativamente limpio. Con 27 tareas esperaba más problemas, pero el enfoque incremental hizo que cada pieza se probara antes de que aterrizara la siguiente. Lo principal que noté:

- Las notas adhesivas a veces se solapaban con el texto cuando las redimensionabas demasiado pequeñas
- El minimapa de la esquina podía desincronizarse tras mucho zoom
- La exportación a PNG ocasionalmente cortaba elementos en los bordes del lienzo

Nada grave. La experiencia core de pizarra fue sólida desde pronto.

## Los Números

- **27 tareas de Watchfire** desde el setup del lienzo hasta el modo de presentación
- **TypeScript + Vite** con renderizado en HTML5 Canvas
- **Suite completa de herramientas:** seleccionar, paneo, rectángulo, elipse, línea, flecha, conector, lápiz, texto, nota adhesiva
- **Modo oscuro, capas, exportación, atajos de teclado, modo de presentación**
- **Cero librerías UI externas.** Todo hecho a medida sobre canvas

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day10-miroclone" showThumbnail=true >}}

**[Abrir la Pizarra](https://vibe30-day10-miroclone.vercel.app)**

Funciona mejor en escritorio. Usa los atajos de teclado para la experiencia completa.

## Veredicto del Día 10

Un lienzo infinito con paneo y zoom, múltiples herramientas de formas, dibujo a mano alzada, conectores inteligentes, un sistema de capas, deshacer/rehacer, exportación, modo oscuro y modo de presentación. Eso es mucha funcionalidad para un día.

Lo que destaca es la arquitectura. El codebase está dividido en módulos limpios para manejo de input, renderizado, gestión de estado, herramientas y UI. Cada herramienta es su propio módulo. La gestión de estado maneja el historial para deshacer/rehacer. No es un prototipo chapucero, es una app propiamente estructurada.

¿Podría reemplazar a Miro? No. No hay colaboración, ni sincronización en tiempo real, ni almacenamiento en la nube. ¿Pero como herramienta local-first para bocetar y diagramar? Es sorprendentemente usable. Me encontré organizando ideas en ella de verdad en lugar de solo probarla.

A un tercio del camino del reto. El alcance de lo que cabe en un solo día sigue expandiéndose.

---

*Este es el día 10 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Síguelo mientras lanzo 30 proyectos en 30 días usando coding asistido por IA.*
