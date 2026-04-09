---
title: "30 Days of Vibe Coding - Día 4 - Tetris"
description: "Un clásico juego de Tetris con bloques de estilo 3D, el tema Korobeiniki, efectos de sonido y todas las funciones que esperarías de un clon real de Tetris."
summary: "Un clásico juego de Tetris con bloques de estilo 3D, el tema Korobeiniki, efectos de sonido y todas las funciones que esperarías de un clon real de Tetris."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-04", "typescript", "nextjs", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 4
seriesOpened: true
date: 2026-04-09
draft: false
---

Día 4. Todo el mundo conoce el Tetris. Por eso es una buena prueba. Sabes exactamente cómo debería sentirse, así que notas inmediatamente cuando algo está mal.

## El Prompt

> "Quiero crear un juego de Tetris basado en web con bloques de estilo 3D, música y efectos de sonido"

## Cómo Se Construyó

Este pasó por [Watchfire](https://watchfire.io) como los demás. El nombre del paquete en el repositorio cuenta la historia: `watchfire-0001-initialize-nextjs-project-with`. Empezó desde un único prompt y Watchfire lo desglosó en tareas que cubrían la configuración del proyecto, la gestión del estado del juego, el renderizador del tablero, las definiciones de piezas con estados de rotación, el sistema de audio y los componentes de la interfaz.

La arquitectura que eligió fue React con hooks. Tres hooks personalizados gestionan la lógica principal: `useGameState` para el reductor del juego y el bucle de ticks, `useGameMusic` para el tema Korobeiniki, y `useSoundEffects` para todo el audio del juego. El estado del juego en sí es un reductor adecuado con acciones para cada movimiento, rotación, caída dura y pausa. Wall kicks, limpieza de líneas, progresión de nivel, puntuación. Todos los fundamentos del Tetris.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

Este me sorprendió de verdad.

![Tetris 3D en medio de una partida](images/screenshot-01.png)

**Los bloques tienen profundidad real.** Cada tipo de tetromino tiene su propio esquema de colores con un color principal, un resalte claro para los bordes superiores izquierdos, una sombra oscura para los bordes inferiores derechos y un efecto de brillo. La pieza I es cian con un suave brillo azul. La pieza T es morada. La pieza Z es roja. Parecen pequeñas piezas de caramelo 3D sobre una cuadrícula oscura. Pedí bloques "de estilo 3D" y el resultado es algo que parece genuinamente pulido.

**Reproduce el tema Korobeiniki.** La melodía real del Tetris, generada en tiempo real usando la Web Audio API. Sin archivos de audio. Crea osciladores y nodos de ganancia al vuelo, toca una melodía de onda cuadrada con una línea de bajo de onda triangular y la reproduce en bucle sin interrupciones. La música se acelera a medida que subes de nivel, pasando de 1.0x en el nivel 0 a 1.5x en el nivel 15. Incluso recuerda tu preferencia de silencio en localStorage.

**Los efectos de sonido son sorprendentemente buenos.** Hay 8 efectos de sonido distintos: clic de movimiento, silbido de rotación, golpe de aterrizaje de pieza (con búfer de ruido para textura de impacto), arpegio de línea completada, una fanfarria especial de Tetris al completar cuatro líneas, silbido de caída dura, un triste arpegio descendente de fin de partida y un tintineo de subida de nivel. Todo sintetizado. Sin archivos de audio en ningún lugar.

**Tiene todas las funciones reales del Tetris.** Vista previa de la siguiente pieza, seguimiento de puntuación con multiplicadores adecuados (100 por una línea, 300 por dos, 500 por tres, 800 por Tetris), progresión de nivel cada 10 líneas, velocidad que realmente aumenta, persistencia de la puntuación máxima, pausa con reanudación y una pantalla de fin de partida que muestra tus estadísticas finales frente a tu puntuación más alta.

![Partida pausada](images/screenshot-02.png)

**Los controles se sienten bien.** Teclas de flecha o WASD para el movimiento, W o Arriba para rotar en sentido horario, Z para sentido antihorario, Espacio para caída dura, P o Escape para pausar. Incluso tiene wall kicks para que las piezas se alejen de las paredes al rotar cerca de los bordes.

## Los Números

- **22 archivos fuente** entre componentes, hooks, constantes y tipos
- **~2.000 líneas de TypeScript**
- **8 efectos de sonido sintetizados distintos** más una banda sonora completa en bucle
- **7 tipos de tetromino** con 4 estados de rotación cada uno (28 definiciones de formas)
- **16 niveles de velocidad** desde 1000 ms hasta 100 ms por tick
- **0 archivos de audio** en todo el proyecto

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day04-tetris" showThumbnail=true >}}

**[Jugar al Tetris](https://vibe30-day04-tetris.vercel.app)**

Teclas de flecha o WASD para mover, Espacio para caída dura, P para pausar. Funciona mejor en escritorio.

## Veredicto del Día 4

Cuatro días dentro y estoy construyendo juegos clásicos más rápido de lo que puedo probarlos. Ese es el verdadero cuello de botella ahora. No el código, no la depuración. Las pruebas de juego.

Este clon de Tetris es genuinamente divertido. El estilo 3D de los bloques le da personalidad, el tema Korobeiniki lo hace sentir auténtico, y el diseño de sonido añade retroalimentación satisfactoria a cada acción. El hecho de que todo el audio esté generado de forma procedural a partir de osciladores y búferes de ruido es, honestamente, increíble. No hay archivos de audio en todo el proyecto.

Lo que me sigue sorprendiendo es la completitud. Pedí Tetris con bloques 3D y música. Obtuve wall kicks, persistencia de puntuación máxima, multiplicadores de puntuación por nivel, una pantalla de pausa con un botón degradado, estado de silencio guardado en localStorage y un panel de fin de partida que te dice si superaste tu puntuación más alta. Todas estas son cosas que eventualmente habría pedido, pero no tuve que hacerlo.

¿Es la implementación de wall kicks tan buena como las directrices oficiales de Tetris? Probablemente no. ¿Es el sistema de puntuación 100% auténtico? Cercano, pero no lo verifiqué contra la especificación. Nada de eso importa para un proyecto de un día. Lo que importa es que funciona, se siente bien y alguien puede jugarlo ahora mismo.

---

*Este es el día 4 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras publico 30 proyectos en 30 días usando programación asistida por IA.*
