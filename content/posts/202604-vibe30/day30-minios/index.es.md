---
title: "30 Días de Vibe Coding - Día 30 - miniOs"
description: "Un sistema operativo de escritorio basado en la web, construido completamente en el navegador, con los 30 proyectos Vibe30 como apps instalables."
summary: "Un sistema operativo de escritorio basado en la web, construido completamente en el navegador, con los 30 proyectos Vibe30 como apps instalables."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-30", "nextjs", "react", "typescript", "os"]
series: ["30 Days of Vibe Coding"]
series_order: 30
seriesOpened: false
date: 2026-05-05
draft: false
#type: "hidden"
---

Día 30. El último. Construí un sistema operativo.

No uno real. Uno falso en el navegador. Pero del tipo de falso en el que lo arrancas, inicias sesión, abres un gestor de archivos, redimensionas ventanas, las encajas en las esquinas, cambias de escritorios, abres un terminal que ejecuta neofetch, cambias el fondo de pantalla, y luego lanzas cualquiera de los 29 proyectos que ya construí este mes como apps dentro de él. Ese tipo de falso.

Este es el proyecto final. Todos los proyectos de los últimos 30 días viven dentro de este.

## El Prompt

> "Construye un SO de escritorio basado en la web. Gestión de ventanas con arrastrar, redimensionar, minimizar, maximizar, snap. Múltiples escritorios. Barra de tareas, menú de inicio, spotlight search, alt-tab. Secuencia de arranque, pantalla de login, pantalla de bloqueo, screensaver. Temas oscuro y claro con colores de acento. Fondos de pantalla con parallax. Widgets de escritorio. Apps incluidas: Gestor de Archivos, Editor de Texto, Terminal con neofetch, Navegador, Calculadora, Configuración, Reproductor de Música, Visor de Imágenes, Paint, Calendario. Y cada proyecto Vibe30 debe ser accesible como una app instalada."

El prompt más grande del desafío, para el proyecto más grande.

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://vibe30-day30-minios.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

[Watchfire](https://watchfire.io) dividió este en 25 tareas. No fue la cuenta más alta del desafío (el editor de código llegó a 43), pero este tuvo el alcance más amplio. Esto no era una app. Era un shell que tenía que contener todas las demás apps.

Las tareas cubrieron todo lo que esperarías de la construcción de un SO (si es que puedes llamarlo así): gestión core de ventanas, el sistema de escritorios, barra de tareas y system tray, menú de inicio, spotlight search, el switcher alt-tab, flujos de arranque y login, la pantalla de bloqueo y screensaver, motor de temas, sistema de fondos de pantalla con parallax, widgets de escritorio, y luego cada app incluida como su propia tarea. Las tareas finales se encargaron de integrar los 30 proyectos Vibe30 como apps lanzables y construir un tour de bienvenida.

Pasé más tiempo hands-on con este que con cualquiera de los 30 días. No escribiendo código, sino probando interacciones. El snap de ventanas tiene muchos edge cases. ¿Qué pasa cuando arrastras a una esquina? ¿Y maximizar una ventana ya encajada? ¿Y si cambias de escritorio mientras se está arrastrando una ventana? Son ese tipo de cosas que tuve que probar y reportar.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Escritorio de miniOs](images/screenshot-01.png)

Arranca. Hay una animación de secuencia de arranque con una barra de carga y mensajes de sistema desplazándose. Luego una pantalla de login. Luego se carga el escritorio.

![Arranque y login](images/screenshot-02.png)

**La gestión de ventanas realmente funciona.** Arrastra ventanas. Agarra cualquier borde o esquina para redimensionar. Doble clic en la barra de título para maximizar. Arrastra al borde izquierdo para encajar a la izquierda, borde derecho para encajar a la derecha, esquinas para encajar en cuadrantes. Minimiza a la barra de tareas y haz clic para restaurar. Este es el tipo de cosa que suena simple pero tiene un millón de pequeños detalles de interacción.

![Gestión de ventanas](images/screenshot-03.png)

**Cuatro escritorios.** Alterna entre ellos con Ctrl+1 hasta Ctrl+4, o haz clic en la barra de tareas. Cada escritorio tiene su propio conjunto de ventanas. Se siente como un setup multi-escritorio real.

**La barra de tareas es legítima.** Botón del menú de inicio, apps fijadas, indicadores de ventanas abiertas, switcher de escritorios, system tray con reloj. Haz clic en el menú de inicio y tienes un launcher de apps categorizado. Pulsa Cmd+K para spotlight search y escribe para encontrar cualquier app al instante. Alt+Tab abre un switcher de ventanas con previews.

![Menú de inicio y barra de tareas](images/screenshot-04.png)

**Temas oscuro y claro con 9 colores de acento.** Abre Configuración, elige tu tema, elige tu color de acento, y el SO entero se redibuja. Hay 4 fondos de pantalla con un efecto parallax que responde al movimiento del ratón.

![Configuración y temas](images/screenshot-05.png)

**Las apps incluidas funcionan.** El Gestor de Archivos navega un filesystem virtual. El Editor de Texto hace undo/redo y puede guardar/abrir archivos. El Terminal ejecuta comandos y tiene un neofetch funcional que muestra información del sistema de miniOs. La Calculadora acepta input del teclado. Paint te deja dibujar. El Calendario funciona.

![Apps incluidas](images/screenshot-06.png)

**Y luego están las apps Vibe30.** Los 30 proyectos aparecen en el menú de inicio bajo su propia categoría. Los proyectos web se abren en un iframe embebido directamente dentro de una ventana de miniOs. Los proyectos TUI y nativos que no pueden ejecutarse en un navegador muestran una tarjeta de proyecto con enlaces al repo y demo en vivo. Puedes tener el Platformer corriendo en una ventana, Snake en otra, y Wordle en una tercera, todo mientras el Reproductor de Música suena de fondo.

![Apps Vibe30 ejecutándose](images/screenshot-07.png)

Esa última parte es lo que hace de esto un proyecto final. No es solo un clon de SO. Es un contenedor para el desafío entero.

## Los Bug Reports

Este tuvo la lista de bugs más larga de cualquier proyecto:

- Los handles de redimensionamiento de ventanas eran demasiado pequeños en el borde inferior
- El snap a esquinas no funcionaba cuando una ventana ya estaba maximizada
- El screensaver no se activaba si una ventana tenía foco
- El orden del alt-tab estaba mal después de minimizar una ventana
- Los resultados del spotlight search no se actualizaban al cambiar de escritorio
- Algunos iframes Vibe30 no cargaban debido a headers X-Frame-Options
- La secuencia de arranque era demasiado rápida (bug report irónico, pero necesitaba sentirse real)
- El efecto parallax era inestable en Safari

Los edge cases de la gestión de ventanas fueron el tema principal. Cada vez que pensaba que el snap funcionaba, encontraba otra combinación que lo rompía.

## Los Números

- **25 tareas Watchfire** desde la arquitectura hasta el tour de bienvenida
- **30 proyectos Vibe30** integrados como apps lanzables
- **10 apps incluidas** (Gestor de Archivos, Editor de Texto, Terminal, Navegador, Calculadora, Configuración, Reproductor de Música, Visor de Imágenes, Paint, Calendario)
- **4 escritorios**, **9 colores de acento**, **4 fondos de pantalla**, **2 temas**
- **Next.js 16, React 19, TypeScript, Tailwind CSS 4**

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day30-minios" showThumbnail=true >}}

**[Abrir miniOs](https://vibe30-day30-minios.vercel.app)**

Mejor experiencia en escritorio. Prueba los atajos de teclado: Cmd+K para spotlight, Ctrl+1-4 para escritorios, Alt+Tab para cambiar ventanas.

## Veredicto del Día 30

Sigo volviendo a lo absurdo de esto. Le pedí a una IA que me construyera un sistema operativo y lo hizo. No una demo de juguete con una barra de tareas falsa y nada detrás. Una cosa con gestión de ventanas real, aislamiento de escritorios real, navegación por teclado real, temas reales, y 40 aplicaciones funcionando dentro.

¿Es un SO real? Obviamente no. Pero es un pedazo de software real. Solo el snap de ventanas es algo que me costaría implementar correctamente por mi cuenta. Los 30 proyectos de este desafío pueden ejecutarse dentro de él, simultáneamente, en sus propias ventanas, en escritorios separados.

El día 1, construí un platformer a partir de una frase. El día 30, construí un sistema operativo que contiene el platformer, y todo lo que hice entre ellos.

Treinta proyectos. Treinta días. Hecho.

---

*Este es el día 30 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Este fue el último proyecto, pero viene un post más: el wrapup completo con todo lo que aprendí al entregar 30 proyectos en 30 días.*
