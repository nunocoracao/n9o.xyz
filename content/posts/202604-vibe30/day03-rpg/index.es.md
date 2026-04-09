---
title: "30 Days of Vibe Coding - Día 3 - RPG"
description: "Un RPG por turnos con gráficos isométricos, creación de personajes, combate, misiones y un sistema de guardado, todo funcionando en el navegador."
summary: "Un RPG por turnos con gráficos isométricos, creación de personajes, combate, misiones y un sistema de guardado, todo funcionando en el navegador."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-03", "typescript", "pixi.js", "game", "rpg"]
series: ["30 Days of Vibe Coding"]
series_order: 3
seriesOpened: true
date: 2026-04-08
draft: false
---

Día 3. Le pedí un RPG completo. En un navegador. En un día.

## El Prompt

> "Quiero crear un RPG basado en navegador con gráficos isométricos, personalización de personajes, combate por turnos, misiones y un sistema de guardar/cargar partida."

Eso es una cantidad absurda de cosas para pedir en un solo prompt. Un RPG no es un juego pequeño. Hay clases de personajes, sistemas de inventario, árboles de diálogo, seguimiento de misiones, mecánicas de combate, exploración de mapas. Cualquiera de esas cosas es un proyecto por sí sola. Quería ver qué pasaría si las pedía todas a la vez.

## Cómo Se Construyó

[Watchfire](https://watchfire.io) tomó el prompt y lo dividió en tareas. El package.json todavía tiene la huella de la primera tarea en su nombre: `watchfire-0000-project-setup---initialize-nex`. A partir de la estructura del proyecto, puedo ver que el trabajo se repartió entre los sistemas principales: configuración del proyecto con Next.js y Pixi.js, definiciones de tipos, gestión del estado del juego, datos de mapa para tres zonas (pueblo, bosque, mazmorra), motor de combate, bases de datos de objetos y enemigos, sistema de diálogo, base de datos de misiones, renderizado isométrico y luego todos los componentes de interfaz encima de todo eso.

La lista de componentes por sí sola dice cuánto se construyó: CharacterCreation, CombatUI, DialogueBox, EquipmentPanel, GameHUD, GameMenu, Inventory, IsometricWorld, ItemTooltip, MainMenu, QuestLog, SaveLoadMenu, SettingsPanel, VictoryScreen. Son 14 componentes de React más la capa de lógica del juego por debajo.

No me senté a guiar cada pieza. Volví y encontré un juego funcionando, y empecé a jugarlo.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

Este me sorprendió de verdad.

![Pantalla de título con el branding de Realm of Shadows](images/screenshot-01.png)

**Se puso nombre a sí mismo.** "Realm of Shadows: An Isometric Adventure." Yo nunca le di un nombre. Eligió uno, diseñó una pantalla de título con texto estilizado y añadió una opción de ajustes en el menú principal. El esquema de colores azul marino oscuro y dorado recorre todo el juego.

![Creación de personaje - entrada de nombre](images/screenshot-02.png)

**La creación de personaje es un asistente de varios pasos.** Introduces un nombre, eliges una clase y revisas tus estadísticas antes de empezar. Te guía por tres pantallas con puntos de progreso en la parte superior. Cada clase (Warrior, Mage, Rogue) tiene diferentes distribuciones de estadísticas y equipamiento inicial.

![Pantalla de selección de clase](images/screenshot-04.png)

Las tarjetas de selección de clase muestran el desglose de estadísticas de cada opción. El Warrior obtiene alta vida y fuerza. El Mage obtiene alta magia y maná. El Rogue obtiene estadísticas equilibradas con alta velocidad. Hay pequeños iconos para cada clase y barras de estadísticas de colores. Este es un trabajo de interfaz pulido.

![Resumen del personaje antes de empezar](images/screenshot-05.png)

**La pantalla de resumen muestra tu equipamiento inicial.** Un Mage llamado John empieza con un Wooden Staff, Cloth Tunic, Leather Pants y Worn Boots. Puedes ver todas tus estadísticas base antes de confirmar. Este es el tipo de detalle que hace que un juego se sienta terminado.

![Vista isométrica del pueblo](images/screenshot-06.png)

**El mundo isométrico funciona de verdad.** Hay un pueblo con edificios, caminos y NPCs caminando. Tu personaje tiene un HUD en la parte superior izquierda que muestra HP, MP y nivel. Hay un minimapa en la parte superior derecha que muestra "Willowbrook" como ubicación actual. Te mueves haciendo clic en las casillas o usando WASD.

![Diálogo con NPC Elder Mira](images/screenshot-08.png)

**Los NPCs tienen árboles de diálogo.** Elder Mira te saluda: "Ah, you have awakened at last! I am Elder Mira, guardian of Willowbrook Village." El cuadro de diálogo aparece en la parte inferior de la pantalla con el nombre del NPC resaltado en dorado. Haces clic o presionas Enter para continuar.

![Opciones de diálogo ramificadas](images/screenshot-10.png)

**El diálogo se ramifica.** Elder Mira te pregunta si ayudarás con las criaturas oscuras del bosque. Tienes dos opciones: "I will help you" o "Tell me more about these creatures." Esto no es solo texto decorativo. Está conectado al sistema de misiones.

![Diario de misiones mostrando misión activa](images/screenshot-13.png)

**Hay un diario de misiones completo.** Registra las misiones activas y completadas con pestañas. "A New Beginning" es la misión principal, marcada como historia principal. Muestra objetivos ("Speak with Elder Mira"), recompensas (oro y XP) y descripciones de misiones. La interfaz tiene el mismo estilo dorado y oscuro que todo lo demás.

![Menú de pausa](images/screenshot-12.png)

**El menú de pausa es completo.** Reanudar, Inventario, Personaje, Diario de Misiones, Guardar Partida, Ajustes, Menú Principal. Muestra el nombre de tu personaje, clase, nivel, HP y MP en la parte superior. Esto no es un parche rápido. Alguien pensó en la jerarquía de información aquí.

![Combate por turnos](images/screenshot-14.png)

**El combate es por turnos con opciones reales.** Luchas contra un Green Slime. Tanto tú como el enemigo tenéis barras de HP. Tu barra de acciones en la parte inferior te da cinco opciones: Attack, Magic, Defend, Item, Flee. Cada una tiene un color diferente. La pantalla de combate es limpia y legible.

![Combate con los botones de acción resaltados](images/screenshot-15.png)

![Pantalla de victoria con recompensas de XP y oro](images/screenshot-16.png)

**La victoria te da XP y oro.** Después de derrotar al Green Slime, obtienes experiencia y moneda. La pantalla de victoria muestra exactamente lo que ganaste con un botón de continuar. Un bucle de retroalimentación simple y satisfactorio.

![Sistema de inventario y equipamiento](images/screenshot-17.png)

**El sistema de inventario tiene ranuras de equipamiento y una mochila.** Hay ranuras para arma, cabeza, pecho, piernas, pies y dos ranuras de accesorio. Tu mochila muestra los objetos en una cuadrícula. Puedes ver el daño del arma y las estadísticas de defensa de la armadura en la parte inferior.

![Tooltip de objeto con opción de uso](images/screenshot-18.png)

**Los objetos tienen tooltips y acciones.** Al pasar el cursor sobre una Small Health Potion aparece su descripción ("Restores 30 HP") con botones de Usar y Cancelar. Este es un sistema de inventario real, no un marcador de posición.

![Panel de estadísticas del personaje superpuesto](images/screenshot-19.png)

**El panel de estadísticas del personaje muestra todo.** Tu hoja de estadísticas completa superpuesta sobre el mundo del juego. Nombre, clase, nivel, barra de experiencia, HP, MP y todas las estadísticas individuales. También lista tus objetos equipados con sus valores de estadísticas.

## Los Informes de Errores

No registré errores específicos en este más allá de las pruebas iniciales. El juego funcionó en la primera carga, lo cual fue un cambio agradable respecto al día 1. Las interacciones con NPCs, el flujo de combate y el sistema de guardado funcionaron todos sin que tuviera que reportar problemas. Dicho esto, sigue siendo un poco tosco en los bordes. El movimiento isométrico puede sentirse algo rígido, y el combate podría usar más variedad de enemigos. Pero nada estaba roto.

## Los Números

- **34 archivos fuente** entre componentes, lógica del juego, hooks, tipos y utilidades
- **3 zonas de mapa** (pueblo, bosque, mazmorra) con datos de casillas isométricas
- **14 componentes de React** para toda la interfaz del juego
- **6 módulos del motor de juego** (combate, objetos, enemigos, diálogo, misiones, renderizado isométrico)
- **Next.js 16 + Pixi.js 8 + React 19 + TypeScript** tech stack
- **Tiempo total de intervención:** quizás 20 minutos jugando y explorando

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day03-rpg" showThumbnail=true >}}

**[Jugar Realm of Shadows](https://vibe30-day03-rpg.vercel.app)**

WASD o teclas de flecha para moverse. Haz clic en los NPCs para hablar. I, C, Q para inventario, personaje y diario de misiones. ESC para el menú. F5 para guardado rápido.

## Veredicto del Día 3

Este es el proyecto donde dejé de considerar este desafío como una novedad. Un RPG por turnos con gráficos isométricos, tres clases de personajes, diálogo ramificado, un sistema de misiones, gestión de inventario, ranuras de equipamiento, combate por turnos y guardados persistentes. En un navegador. De un solo prompt.

Nunca he construido un RPG. Nunca he implementado un motor de renderizado isométrico. Nunca he diseñado un sistema de combate, ni un sistema de equipamiento, ni un árbol de diálogos. No sabría por dónde empezar con ninguno de ellos individualmente, y mucho menos con todos juntos. Este habría sido un proyecto de meses para mí, asumiendo que pudiera terminarlo.

¿Es un RPG completo? No realmente. Tiene el esqueleto de uno. El contenido es escaso, hay apenas un puñado de encuentros, y la historia es una configuración de fantasía genérica. Pero todos los sistemas están ahí y funcionan juntos. El personaje que creas continúa en el combate, tu equipamiento afecta tus estadísticas, las misiones rastrean tu progreso y los guardados persisten entre sesiones. La arquitectura es sólida.

Lo que más me llama la atención es la calidad de la interfaz. El esquema de colores dorado sobre oscuro, el asistente de creación de personaje de varios pasos, las barras de estadísticas, el diario de misiones con pestañas, la cuadrícula de inventario. Nada de eso estaba en mi prompt. Pedí sistemas y obtuve una experiencia diseñada. Esa es la parte que yo no podría haber hecho yo mismo ni con tiempo ilimitado. No soy diseñador.

El coste de construir algo así se ha derrumbado. No el coste de construir un gran RPG. Eso todavía requiere años de contenido, equilibrado y pulido. Pero ¿el coste de construir un prototipo de RPG funcional con sistemas reales? Eso pasó de meses a horas.

---

*Este es el día 3 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
