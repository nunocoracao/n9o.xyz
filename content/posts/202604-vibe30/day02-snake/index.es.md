---
title: "30 Days of Vibe Coding - Día 2 - Snake"
description: "Un juego de Snake al estilo Nokia 3310 con gráficos LCD auténticos, efectos de sonido retro y un marco de teléfono completo."
summary: "Un juego de Snake al estilo Nokia 3310 con gráficos LCD auténticos, efectos de sonido retro y un marco de teléfono completo."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-02", "typescript", "react", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 2
seriesOpened: false
date: 2026-04-07
draft: false
#type: "hidden"
---

Día 2. Quería algo nostálgico.

## El Prompt

Opté por esto:

> "Construye un juego de Snake con el estilo del Nokia 3310. Pantalla LCD verde, bloques de píxeles, todo el paquete. Ponlo dentro de un marco de teléfono."

Eso fue prácticamente todo el encargo. Tenía una imagen visual clara en mente pero no di ningún detalle de implementación.

## Cómo Se Construyó

[Watchfire](https://watchfire.io) tomó ese prompt y lo desglosó en tareas que cubrían el motor del juego, el estilo visual Nokia, los efectos de sonido, los controles móviles y la interfaz del marco del teléfono. La lógica del juego, el renderizado LCD, la pantalla de puntuación de siete segmentos, todo surgió de ese único prompt.

No me senté a guiar cada decisión. Describí el ambiente que quería y volví a algo jugable.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

Este me sorprendió por lo lejos que llegó en lo estético.

![Pantalla de inicio con marco de teléfono Nokia](images/screenshot-01.png)

**Construyó un teléfono entero.** No solo un lienzo de juego. Un marco Nokia 3310 completo con una rejilla de altavoz, el branding de NOKIA, un D-pad, botones de acción y un bisel de pantalla con profundidad. El cuerpo del teléfono tiene degradados y sombras que lo hacen parecer tridimensional. Pedí un marco de teléfono. Me dieron un teléfono.

![Jugabilidad con cuadrícula LCD](images/screenshot-02.png)

**La pantalla LCD es auténtica.** El clásico verde Nokia (#9bbc0f para quien tenga curiosidad), con una cuadrícula de píxeles visible, superposición de líneas de barrido y un efecto de resplandor de pantalla en la esquina. Cada celda de la cuadrícula tiene una pequeña separación para simular segmentos LCD reales. La cabeza de la serpiente incluso tiene pequeños ojos de píxeles.

**Tiene una pantalla de puntuación de siete segmentos.** No solo un número en pantalla. Una pantalla LCD de siete segmentos renderizada en SVG ubicada fuera de la pantalla del juego, como la pantalla secundaria del teléfono. Puntuación y puntuación máxima, ambas renderizadas con el fantasmeo correcto de segmentos inactivos.

![Serpiente creciendo en plena partida](images/screenshot-03.png)

**La comida pulsa.** Hay una animación de onda sinusoidal en el bloque de comida que lo hace vibrar suavemente. La serpiente acelera cada vez que come. Comienza a 150 ms por tick y baja hasta un mínimo de 50 ms. La curva de dificultad está integrada en el bucle del juego, no codificada de forma fija por nivel.

**Efectos de sonido retro.** Sonidos de oscilador de onda cuadrada generados a través de la Web Audio API. Tonos ascendentes al iniciar, un alegre pitido al comer, tonos tristes descendentes al terminar la partida. Todo sintetizado en tiempo de ejecución, sin archivos de audio necesarios. Incluso guarda tu preferencia de silencio en localStorage.

![Pantalla de game over con puntuación máxima](images/screenshot-04.png)

**Persistencia de la puntuación máxima.** Guarda tu mejor puntuación en localStorage y muestra un mensaje "¡NUEVA PUNTUACIÓN MÁXIMA!" con una animación de pulso cuando la superas. La pantalla de game over tiene un icono de calavera en arte de píxeles construido con una cuadrícula CSS.

**Controles móviles.** En dispositivos táctiles, renderiza un D-pad con un botón de pausa central. En escritorio, muestra botones decorativos que coinciden con la estética del teléfono. Detecta el tipo de dispositivo y se adapta. También hay controles de deslizamiento como alternativa.

**Marco de teléfono activable.** Puedes cambiar entre el marco completo del teléfono Nokia y una vista mínima con solo la pantalla del juego. La preferencia persiste en localStorage.

## Los Números

- **8 módulos fuente** (GameBoard, StartScreen, GameOverScreen, PauseOverlay, ScoreDisplay, useSnakeGame, useSound, más el diseño de página)
- **~2,100 líneas de TypeScript y React**
- **Cero librerías de juego externas** (solo Next.js y React, la lógica del juego son hooks personalizados y Canvas)
- **5 efectos de sonido sintetizados** mediante Web Audio API
- **Tiempo total de trabajo manual:** quizás 20 minutos jugando y ajustando el prompt

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day02-Snake" showThumbnail=true >}}

**[Jugar Snake II](https://vibe30-day02-snake.vercel.app)**

Teclas de flecha o WASD para moverse, espacio para pausar. Funciona en móvil con controles de D-pad.

## Veredicto del Día 2

Pedí un juego de Snake en un marco Nokia. Obtuve una simulación de teléfono completa con audio sintetizado, pantallas de siete segmentos, efectos de líneas de barrido LCD y persistencia en localStorage para puntuaciones, preferencias de sonido y visibilidad del marco.

Lo que destaca es cuánto del trabajo se dedicó a detalles que nunca pedí. El resplandor de la pantalla. Los puntos de la rejilla del altavoz. La animación de pulso en la comida. La calavera en arte de píxeles en la pantalla de game over. Estas son decisiones de acabado que llevarían horas implementar a mano, y aparecieron de forma gratuita.

¿Podría haber construido Snake yo mismo? Probablemente, con suficiente tiempo. Pero habría hecho un cuadrado verde en una cuadrícula con un contador de puntuación. No habría construido un simulador de Nokia 3310 con audio chiptune sintetizado y controles móviles responsivos. La brecha entre lo que yo habría construido y lo que obtuve es el punto central de este desafío.

Dos días, dos juegos entregados. El patrón del Día 1 se mantiene: el punto de partida ya no es un archivo en blanco, y el punto de llegada está muy por encima de lo que yo habría apuntado por mi cuenta.

---

*Este es el día 2 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
