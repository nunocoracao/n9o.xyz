---
title: "30 Días de Vibe Coding - Día 1 - Plataformas"
description: "Un juego de plataformas en el navegador con 10 niveles, construido con JavaScript vanilla y HTML5 Canvas."
summary: "Un juego de plataformas en el navegador con 10 niveles, construido con JavaScript vanilla y HTML5 Canvas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-01", "javascript", "canvas", "game"]
series: ["30 Days of Vibe Coding"]
series_order: 1
seriesOpened: false
date: 2026-04-06
draft: false
---

Día 1. A ver qué pasa cuando le pido a una IA que me construya un juego.

## El Prompt

Empecé con esto:

> "Quiero crear un juego de plataformas web con 10 niveles"

Eso fue todo. Esa fue toda la dirección creativa.

## Cómo Se Construyó

Este fue uno de los primeros proyectos en los que usé [Watchfire](https://watchfire.io). Le di ese único prompt y lo dividió en 21 tareas separadas:

1. Configuración del proyecto y canvas del juego
2. Motor del juego con bucle principal y renderizado
3. Personaje jugador con movimiento y animaciones
4. Física y detección de colisiones
5. Sistema de plataformas y obstáculos
6. Sistema de niveles con cargador y cámara
7. Niveles fáciles (1-3)
8. Niveles medios (4-6) con peligros
9. Niveles difíciles (7-10)
10. Sistema de interfaz/HUD
11. Estados del juego y menús
12. Sistema de audio con efectos de sonido y música de 8 bits
13. Pulido, sistema de guardado, controles táctiles

Luego llegaron los reportes de bugs: corrección de compatibilidad con el navegador, reestructuración para el despliegue, y varios bugs de jugabilidad que detecté mientras hacía pruebas.

No me senté ahí aprobando cada cambio de archivo. Watchfire puso las tareas en cola y las fue resolviendo. Volví y tenía un juego funcionando, y luego lo probé.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

No me lo esperaba para nada.

![Menú principal](images/screenshot-01.webp)

**Tiene gráficos de verdad.** No cuadrados de marcador de posición. Hay un pequeño personaje con ojos, plataformas con diferentes colores, efectos de partículas al aterrizar. Todo tiene un estilo visual coherente que yo definitivamente no especifiqué.

**Tiene música.** Música de fondo de 8 bits que se repite mientras juegas. Nunca pedí audio. Simplemente lo agregó.

![Jugabilidad del Nivel 1](images/screenshot-02.webp)

**Los niveles realmente se vuelven más difíciles.** El Nivel 1 es un tutorial amable llamado "Primeros Pasos." En el nivel 4 ya hay pinchos ("Peligro a la Vista"). El nivel 7 se llama "Demonio de la Velocidad." La curva de dificultad existe y tiene sentido.

![Nivel 4 con peligros](images/screenshot-05.webp)

**Hay un sistema de menús completo.** Menú principal, selección de nivel, pantalla de pausa, pantalla de game over, pantalla de nivel completado. Puedo elegir cualquier nivel que haya desbloqueado. Está mucho más pulido de lo que pedí.

![Selección de nivel](images/screenshot-06.webp)

**Guarda mi progreso.** Cierro el navegador, vuelvo más tarde, mis niveles desbloqueados siguen ahí. Persistencia con localStorage que no pedí.

**18 módulos.** GameEngine, Player, Physics, Camera, LevelLoader, LevelManager, ParticleSystem, AudioManager, SaveManager, TouchControls... construyó una arquitectura adecuada con separación de responsabilidades. Cada módulo tiene una responsabilidad clara. Yo no especifiqué nada de esto.

## Los Reportes de Bugs

No fue perfecto a la primera. Tuve que probarlo y reportar problemas:

- "Solo veo un cuadro azul" (compatibilidad con el navegador, necesitaba un polyfill de roundRect)
- "El nivel no termina cuando llego a la bandera"
- "El jugador sigue moviéndose a la derecha cuando empiezo el siguiente nivel"
- "La selección de nivel siempre carga el nivel 1"
- "La música es demasiado repetitiva"

Descripciones simples. No depuré nada yo mismo, solo describí lo que veía. Las correcciones llegaron y funcionaron.

![Nivel 7](images/screenshot-07.webp)

![Game over](images/screenshot-08.webp)

## Los Números

- **18 módulos de juego** con clara separación de responsabilidades
- **10 niveles** con definiciones de nivel basadas en JSON
- **~3.500 líneas de JavaScript vanilla** (sin framework para el juego en sí)
- **21 tareas de Watchfire** desde la configuración inicial hasta las correcciones finales de bugs
- **Tiempo total con las manos en la masa:** unos 30 minutos de pruebas de juego y escritura de reportes de bugs

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day01-ThePlatformer" showThumbnail=true >}}

**[Jugar al Plataformas](https://vibe30-day01-the-platformer.vercel.app)**

Teclas de flecha o WASD para moverse, espacio para saltar. También funciona en móvil.

## Veredicto del Día 1

Un prompt de una frase. Un juego completo con 10 niveles, música, menús y un sistema de guardado.

Aquí está la cuestión: no he escrito un motor de juegos en más de una década — no desde la universidad. Ya había olvidado todo sobre detección de colisiones y sistemas de progresión de niveles. No podría haberlo construido yo solo. No en un día, probablemente tampoco en una semana.

¿Es el mejor juego de plataformas jamás creado? Ni de lejos. Pero existe. Funciona. La gente puede jugarlo. Y me llevó un par de horas en lugar de semanas. Eso es lo que cambió. El coste de producir algo tan complejo acaba de bajar drásticamente. Y si quisiera, podría seguir puliéndolo, añadiendo niveles, mejorando la física. El punto de partida ya no es un archivo en blanco.

Creo que esto será un patrón en los 30 proyectos. No voy a construir la mejor versión de nada. Pero voy a construir una versión funcional de cosas que antes no podría haber construido, y lo voy a hacer rápido.

---

*Este es el día 1 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras publico 30 proyectos en 30 días usando programación asistida por IA.*
