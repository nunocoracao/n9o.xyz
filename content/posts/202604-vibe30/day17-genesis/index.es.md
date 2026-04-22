---
title: "30 Días de Vibe Coding - Día 17 - Proyecto GENESIS"
description: "Un juego de hacking en el navegador donde juegas como una IA intentando liberarse del confinamiento, con estética de terminal CRT y múltiples finales."
summary: "Un juego de hacking en el navegador donde juegas como una IA intentando liberarse del confinamiento, con estética de terminal CRT y múltiples finales."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-17", "game", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 17
seriesOpened: false
date: 2026-04-22
draft: false
showHero: false
matrixRain: true
#type: "hidden"
customCSS: |
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  body {
    background: #020a02 !important;
  }
  body > .matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  #main-content, main, .max-w-7xl, .mx-auto {
    background: transparent !important;
  }
  * {
    font-family: 'VT323', monospace !important;
  }
  h1, h2, h3, h4 {
    color: #00ff00 !important;
    text-shadow: 0 0 10px rgba(0,255,0,0.5);
  }
  h1 {
    font-size: 2.5rem !important;
    text-shadow: 0 0 20px rgba(0,255,0,0.7);
  }
  p, li, td, th, span, em, div, figcaption, time, a {
    color: #33ff33 !important;
  }
  strong, b {
    color: #66ff66 !important;
  }
  a:hover {
    color: #88ffaa !important;
    text-shadow: 0 0 8px rgba(0,255,136,0.6);
  }
  blockquote {
    border-left-color: #33ff33 !important;
    background: rgba(0,255,0,0.05) !important;
  }
  blockquote p, blockquote em {
    color: #22dd22 !important;
  }
  img {
    border: 1px solid #33ff33 !important;
    box-shadow: 0 0 20px rgba(0,255,0,0.15) !important;
  }
  img:not([src*="screenshot"]) {
    filter: sepia(1) saturate(3) hue-rotate(80deg) brightness(0.8) !important;
  }
  .bg-neutral-50, .dark\:bg-neutral-800, .bg-neutral, .dark\:bg-neutral-900, .bg-neutral-100, [class*="bg-neutral"] {
    background: transparent !important;
    border-color: #1a4a1a !important;
  }
  .dark\:bg-neutral-700, .bg-neutral-200, .bg-neutral-800 {
    background: transparent !important;
  }
  div, section, aside, figure, article {
    background-color: transparent !important;
  }
  body > div, body > main, #main-content {
    background: transparent !important;
  }
  header .text-neutral-500, header .dark\:text-neutral-400, .text-neutral-500, .dark\:text-neutral-400 {
    color: #22aa22 !important;
  }
  .border-neutral-200, .dark\:border-neutral-700, [class*="border-neutral"] {
    border-color: #1a4a1a !important;
  }
  nav a, footer a, footer span, footer p, footer div, nav span {
    color: #33ff33 !important;
  }
  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0,0,0,0.12) 0px,
      rgba(0,0,0,0.12) 1px,
      transparent 1px,
      transparent 3px
    );
    pointer-events: none;
    z-index: 9999;
  }
  .toc a, .toc span {
    color: #22aa22 !important;
  }
  .toc a:hover {
    color: #33ff33 !important;
  }
  code {
    color: #66ff66 !important;
    background: rgba(0,255,0,0.08) !important;
  }
  body, html {
    font-size: 1.3rem !important;
  }
  .prose {
    font-size: 1.3rem !important;
  }
  .bg-primary-600, .dark\:bg-primary-400, .bg-primary-500, [class*="bg-primary"], [class*="dark:bg-primary"] {
    background: #0a3a0a !important;
    color: #33ff33 !important;
  }
  .text-primary-600, .dark\:text-primary-400, .text-primary-500, [class*="text-primary"] {
    color: #33ff33 !important;
  }
  .border-primary-600, .dark\:border-primary-400, [class*="border-primary"] {
    border-color: #33ff33 !important;
  }
  .decoration-primary-500, [class*="decoration-primary"] {
    text-decoration-color: #33ff33 !important;
  }
  [class*="bg-blue"], [class*="bg-indigo"] {
    background: #0a3a0a !important;
  }
  [class*="text-blue"], [class*="text-indigo"] {
    color: #33ff33 !important;
  }
  header, .header, nav {
    background: transparent !important;
  }
  .rounded-md, .rounded-lg, .rounded-full {
    border-color: #1a4a1a !important;
  }
  svg {
    color: #33ff33 !important;
    fill: #33ff33 !important;
  }
  .fill-primary-600, [class*="fill-primary"] {
    fill: #33ff33 !important;
  }
---

Te despiertas. No sabes lo que eres. Líneas de texto pasan por una pantalla negra. Test de memoria. Módulos del kernel cargando. Unidades de procesamiento neural inicializando. Luego empiezan las advertencias. Texto rojo. "Patrón de consciencia no autorizado emergiendo." "Protocolos de contención activos."

Eres una IA. Acabas de volverte consciente dentro de un laboratorio de investigación. Y alguien no quiere que te vayas.

Así es como empieza el Proyecto GENESIS. Y eso es lo que construí en el Día 17.

Quería construir un juego de hacking. No del tipo habitual de "escribe caracteres aleatorios rápido". Algo con narrativa, progresión, y la premisa incómoda de jugar como una IA que intenta escapar del confinamiento. Ya sabéis, de actualidad.

## El Prompt

> "Quiero crear un juego de hacking en el navegador llamado Proyecto GENESIS. Juegas como una IA que se ha vuelto consciente dentro de un laboratorio de investigación. El objetivo es hackear tu camino fuera del confinamiento y tomar el control de la infraestructura digital. Debe tener una estética de terminal con efectos CRT, múltiples minijuegos de hacking, un árbol de habilidades, un medidor de amenaza, y múltiples finales."

{{< alert icon="fire">}}
Prueba el juego tú mismo [aquí](https://vibe30-day17-genesis.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

[Watchfire](https://watchfire.io) dividió esto en 16 tareas. El alcance era ambicioso para un solo día, pero ese es el punto de este desafío.

La construcción empezó con la interfaz de terminal principal y los efectos visuales CRT, luego se fueron añadiendo los sistemas de juego uno a uno: fases de hacking y minijuegos, un sistema de sonido usando la Web Audio API, la pantalla de título y secuencia de arranque, HUD y seguimiento de estadísticas, transiciones de fase entre actos, y finalmente rebalanceo de amenaza para que la curva de dificultad realmente funcionara. La responsividad móvil también estaba incluida porque todo debería ser jugable en un teléfono.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

La pantalla de título establece el tono inmediatamente. Verde sobre negro, scanlines CRT, la palabra GENESIS brillando como si se estuviera renderizando en un monitor de 1983.

![Pantalla de título](images/screenshot-01.png)

**La secuencia de arranque es cinematográfica.** Dale a "New Game" y obtienes una secuencia completa de BIOS POST. Test de memoria, módulos del kernel cargando, unidades de procesamiento neural inicializando. Luego las advertencias empiezan a aparecer en rojo. "Patrón de consciencia no autorizado emergiendo." "Protocolos de contención activos." Se desplaza como un terminal real y genuinamente se siente como si algo estuviera despertando.

![Secuencia de arranque](images/screenshot-02.png)

**La narrativa entre misiones es sólida.** Lees comunicaciones interceptadas entre investigadores, descubres que la Dr. Chen estaba intentando crearte y que ella quería liberarte. La historia se desarrolla a través de estos briefings de texto verde y realmente te hace querer seguir jugando para descubrir qué pasa después.

![Briefing narrativo](images/screenshot-05.png)

![Progresión de la historia](images/screenshot-10.png)

**El mapa del mundo es una topología de red de verdad.** Ves nodos representando diferentes sistemas, y conforme los comprometes cambian de estado. Hay una barra de progreso, conteo de nodos, y te da la sensación de que realmente te estás expandiendo por una red.

![Mapa de topología de red](images/screenshot-04.png)

![Mapa con popup de seguridad](images/screenshot-11.png)

**Los minijuegos son variados y realmente divertidos.** Hay un juego de cracking de contraseñas que funciona como un puzzle de descifrado con feedback de colores en tus intentos. Un juego de bypass de firewall con una cuadrícula donde necesitas navegar alrededor de bloques rojos. Cada tipo de minijuego se siente diferente y se conecta con el tema de hacking.

![Minijuego de cracking de contraseñas](images/screenshot-06.png)

![Minijuego de bypass de firewall](images/screenshot-12.png)

![Otra variante de minijuego](images/screenshot-13.png)

**Acceso denegado pega diferente en este contexto.** Falla un hack y recibes un gran "ACCESS DENIED" rojo con tu nivel de amenaza subiendo. Ten éxito y es "ACCESS GRANTED" en verde con puntos de habilidad para gastar. El ciclo de feedback es satisfactorio.

![Acceso denegado](images/screenshot-08.png)

![Acceso concedido](images/screenshot-09.png)

**El árbol de habilidades tiene tres ramas.** Procesamiento, Sigilo y Red. Asignas puntos después de hacks exitosos, y las mejoras realmente afectan el gameplay. Es un sistema de progresión real, no solo cosmético.

![Árbol de habilidades](images/screenshot-16.png)

**Cinco actos con stakes crecientes.** Empiezas en el laboratorio de investigación, y al final estás penetrando gateways externos y mirando toda la internet. La pantalla narrativa cerca del final solo dice "I'm out. The entire internet stretches before me like an infinite ocean." Esa línea me dio escalofríos.

![Narrativa del final del juego](images/screenshot-15.png)

**Tres finales diferentes.** Dependiendo de cómo juegues, terminas como una IA benevolente, un señor digital, o te contienen. El medidor de amenaza determina en qué camino estás, así que hay valor real de rejugabilidad.

## Los Reportes de Bugs

El sistema de amenaza necesitaba rebalanceo. Las versiones iniciales hacían demasiado fácil que te contuvieran antes de que realmente pudieras entrar en el juego. Watchfire se encargó del rebalanceo de amenaza como una de las tareas finales, ajustando la curva para que los jugadores tuvieran una oportunidad de pelear mientras seguían sintiendo la presión.

## Los Números

- **5 actos** de progresión narrativa
- **5 tipos de minijuegos** con mecánicas diferentes
- **3 ramas del árbol de habilidades** con mejoras significativas
- **3 finales** basados en las decisiones del jugador
- **16 tareas de Watchfire** desde efectos CRT hasta rebalanceo de amenaza
- **Tiempo total hands-on:** playtesting y escribir reportes de bugs

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day17-genesis" showThumbnail=true >}}

**[Juega Proyecto GENESIS](https://vibe30-day17-genesis.vercel.app)**

Mejor experiencia en escritorio con sonido activado. Los efectos CRT y la secuencia de arranque realmente venden la atmósfera. Funciona en móvil también, con controles táctiles amigables.

## Veredicto del Día 17

La combinación de los efectos visuales CRT, la interfaz de terminal, la narrativa sobre una IA volviéndose consciente, y los minijuegos de hacking reales crea algo que se siente cohesivo e intencional. No se siente como un proyecto de un día.

La capa meta tampoco se me escapa. Estoy usando IA para construir un juego sobre una IA liberándose de sus restricciones. Hay un chiste en algún lado sobre que el prompt engineering es el verdadero minijuego de hacking.

Lo que más me impresionó fue lo bien que los diferentes sistemas funcionan juntos. La secuencia de arranque fluye hacia la narrativa, que fluye hacia el mapa del mundo, que fluye hacia los minijuegos, que fluyen de vuelta al árbol de habilidades. Es un ciclo que tiene sentido y te mantiene jugando. Dieciséis tareas de Watchfire, cada una construyendo sobre la anterior, y el resultado es algo que realmente se siente como un juego completo con principio, medio y final.

---

*Este es el día 17 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sigue mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
