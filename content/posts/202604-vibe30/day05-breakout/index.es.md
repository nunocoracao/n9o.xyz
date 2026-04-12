---
title: "30 Days of Vibe Coding - Día 5 - Breakout"
description: "Un clásico juego arcade de Breakout con 5 niveles, potenciadores, puntuación por combos y efectos de partículas, construido con TypeScript y HTML5 Canvas."
summary: "Un clásico juego arcade de Breakout con 5 niveles, potenciadores, puntuación por combos y efectos de partículas, construido con TypeScript y HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-05", "typescript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 5
seriesOpened: false
date: 2026-04-10
draft: false
---

Día 5. Otro clásico de los arcades. Esta vez quería ver qué pasaba cuando le pedía un Breakout.

## El Prompt

> "Quiero crear un juego arcade estilo Breakout/Arkanoid con múltiples niveles, potenciadores, puntuación por combos y física fluida"

Un poco más específico que algunos de mis prompts anteriores. Para el día 5 ya estaba aprendiendo que ser ligeramente más intencional con las funcionalidades que quieres desde el principio te evita tener que reportar bugs después.

## Cómo Se Construyó

Usé [Watchfire](https://watchfire.io) de nuevo para este. Se nota en el package.json, que se nombra automáticamente con el prefijo `watchfire-0000`. Le di el prompt y se encargó del resto. El juego completo vive en un único componente de React que envuelve un HTML5 Canvas, un patrón que he visto varias veces en estas builds diarias. No es la arquitectura más limpia, pero funciona y se publica.

El stack tecnológico es Next.js con TypeScript y Tailwind CSS. El renderizado del juego está completamente basado en Canvas, con React manejando la interfaz superpuesta para los menús y las pantallas de pausa.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

Un clon de Breakout totalmente jugable con mucho más pulido del que esperaba.

![Inicio del nivel 1 con cuadrícula de ladrillos completa](images/screenshot-01.png)

**Cinco niveles con patrones únicos.** "The Beginning" es una cuadrícula estándar completa. "Diamond Formation" organiza los ladrillos en forma de diamante. "Fortress" construye muros con huecos. "Waves" alterna filas. "Final Challenge" es un patrón denso por capas. Cada nivel aumenta el multiplicador de velocidad de la pelota, pasando de 1.0x hasta 1.5x.

![A mitad del juego con rastro de pelota y ladrillos rompiéndose](images/screenshot-02.png)

**Los potenciadores realmente importan.** Cuatro tipos caen de los ladrillos rotos: paleta ancha (10 segundos), pelota lenta (8 segundos), multi-bola (se divide en múltiples pelotas hasta que las pierdes) y vida extra (instantánea). Los ladrillos "super" especiales tienen el doble de probabilidad de soltar potenciadores. Los potenciadores caen flotando como orbes brillantes y los atraparás con tu paleta.

![Limpiando ladrillos con potenciadores activos](images/screenshot-03.png)

**El sistema de combos añade profundidad.** Los golpes encadenados construyen un multiplicador de puntuación de hasta 3x. El combo decae después de 2 segundos sin golpes, así que estás incentivado a mantener la pelota moviéndose rápido y golpeando ladrillos en rápida sucesión. Es algo pequeño, pero cambia la forma en que juegas.

![Nivel avanzado con distribución de ladrillos dispersa](images/screenshot-04.png)

**Efectos visuales por todas partes.** Explosiones de partículas cuando se rompen ladrillos. Un efecto de rastro de pelota. Temblor de pantalla en ciertos golpes. Efectos de destello. Un fondo de campo de estrellas parpadeantes. Los ladrillos tienen un esquema de colores degradado de neón con filas en rosa intenso, naranja, amarillo, verde y cian. Nada de esto era estrictamente necesario para un juego de Breakout, pero hace que todo se sienta vivo.

![Nivel 2 con formación de diamante](images/screenshot-05.png)

**Tres tipos de ladrillos.** Los ladrillos normales se rompen de un golpe. Los ladrillos fuertes requieren varios golpes (tienen un indicador de HP visible). Los ladrillos super son aún más resistentes y tienen mayor probabilidad de soltar potenciadores. Los patrones de los niveles mezclan estos tipos para crear diferentes desafíos.

## Los Reportes de Bugs

Sinceramente, este estuvo bastante limpio. La física se sintió bien desde el principio, el movimiento de la paleta era fluido tanto con el ratón como con el teclado, y los niveles cargaban correctamente. No hay bugs importantes que reportar en esta build.

## Los Números

- **5 niveles** con patrones de ladrillos únicos y dificultad creciente
- **4 tipos de potenciadores** con duraciones temporizadas
- **~2.300 líneas de TypeScript** en un único componente de juego
- **3 tipos de ladrillos** (normal, fuerte, super)
- **3 métodos de control:** teclado, ratón y táctil

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day05-breakout" showThumbnail=true >}}

**[Jugar Breakout](https://vibe30-day05-breakout.vercel.app)**

Ratón o teclas de flecha para mover la paleta. Espacio o clic para lanzar la pelota. P o Escape para pausar.

## Veredicto del Día 5

Cinco días después y estoy notando un patrón. Estos juegos basados en Canvas son un punto dulce para la programación asistida por IA. El alcance es claro, las reglas están bien definidas y hay una forma inmediata de probar si funciona: simplemente lo juegas.

Lo que me sorprendió aquí fue el sistema de partículas y el pulido visual. No pedí temblor de pantalla, ni rastros de pelota, ni un fondo de campo de estrellas. La IA simplemente decidió que el juego se sentiría mejor con esas cosas, y tenía razón. El sistema de combos también fue un toque agradable. Convierte un simple juego de "rebota la pelota, rompe ladrillos" en algo en lo que realmente estás pensando en el ángulo y el momento.

¿Va a competir con el Arkanoid real? No. Pero es un juego completo con múltiples niveles, potenciadores y un sistema de puntuación que realmente te hace querer rejugar los niveles. Construido en un día, a partir de un único prompt.

---

*Este es el día 5 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras publico 30 proyectos en 30 días usando programación asistida por IA.*
