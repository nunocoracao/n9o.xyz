---
title: "30 Días de Vibe Coding - Día 15 - MyBrute Arena"
description: "Un auto-battler de combate medieval inspirado en el clásico MyBrute, con creación de personajes, peleas animadas, mascotas, armas, torneos y un sistema de prestigio."
summary: "Un auto-battler de combate medieval inspirado en el clásico MyBrute, con creación de personajes, peleas animadas, mascotas, armas, torneos y un sistema de prestigio."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-15", "game", "auto-battler", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 15
seriesOpened: false
date: 2026-04-20
draft: false
#type: "hidden"
---

Día 15. Quería reconstruir algo que me encantaba de adolescente. MyBrute era un juego de navegador simple donde creabas un pequeño luchador, desafiabas a los luchadores de otras personas, y veías las batallas desarrollarse automáticamente. Sin estrategia durante la pelea en sí, solo construías tu personaje y veías qué pasaba. Era adictivo de una forma que no tenía sentido para lo poco que realmente hacías. Candidato perfecto para un proyecto de un día.

## El Prompt

> "Construye un juego de pelea basado en navegador inspirado en MyBrute. Creación de personajes con personalización visual, combate automático por turnos con animaciones, armas y mascotas que recoges de las victorias, XP y nivelación, torneos, peleas contra jefes y un sistema de prestigio."

{{< alert icon="fire">}}
Prueba el juego tú mismo [aquí](https://vibe30-day15-mybrute.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

Watchfire dividió esto en 27 tareas. Es el mayor número de tareas de cualquier proyecto hasta ahora, y tiene sentido. Esta cosa tiene un montón de sistemas que necesitan comunicarse entre sí: matemáticas de combate, curvas de XP, tablas de loot, comportamiento de mascotas, bonificaciones de prestigio, brackets de torneos, desafíos diarios, seguimiento de rivales, logros, replays.

La construcción empezó con el motor de combate principal y la creación de personajes, después fue añadiendo sistemas uno a uno. El diseño de personajes pasó por múltiples iteraciones. Probé personajes estilo chibi, después un look inspirado en Hollow Knight, después algo con capas fluidas. Al final me quedé con estas pequeñas figuras encapuchadas que se leen bien a la escala en que se renderizan. Acertar con el arte de los personajes quemó más tareas de Watchfire de lo que me gustaría admitir, pero el resultado final tiene un buen aire medieval oscuro.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

**La creación de personajes es profunda.** Eliges un nombre, después personalizas el color de piel, estilo y color de pelo, tipo de cuerpo, color de ojos, accesorios (cicatrices, pintura de guerra, parche en el ojo, máscaras, cuernos) y color del atuendo. La previsualización se actualiza en tiempo real en el lado derecho. Son muchas opciones para un proyecto de un día.

![Creación de personaje con previsualización](images/screenshot-02.png)

![Personalizando un brute llamado Ragnar](images/screenshot-03.png)

**La pantalla principal es tu base.** Muestra las stats de tu brute, nivel, barra de XP, arma equipada, mascotas recolectadas, habilidades aprendidas y todos los botones de acción. Pelear, Entrenamiento, Inventario, Exportar, Importar, Salón de la Fama. También hay un desafío diario justo en la pantalla principal con un bonus de 2x XP por aceptarlo.

![Hub del personaje](images/screenshot-04.png)

**La selección de oponentes te da opciones.** Tienes tres oponentes para elegir, cada uno mostrando su nivel, stats y equipo. El juego escala los oponentes a tu nivel para que las peleas se mantengan competitivas.

![Elige a tu oponente](images/screenshot-05.png)

**El combate está completamente animado.** Dos personajes se enfrentan en una arena con pilares, antorchas y banderas rojas. Barras de vida arriba, números de daño flotando, efectos de corte en los golpes. Un registro de combate en la parte inferior narra cada acción. Solo pulsas "Next" para avanzar en cada turno. Es auto-battled pero lo ves desarrollarse paso a paso.

![Combate en la arena](images/screenshot-06.png)

![Batalla en la sala del trono](images/screenshot-01.png)

**La victoria te da XP y loot.** La pantalla de resultados muestra el XP ganado con una barra de progreso animada. Gana suficientes peleas y subes de nivel, desbloqueando mejoras de stats y nuevo equipo.

![Pantalla de victoria](images/screenshot-07.png)

**El sistema de inventario es sorprendentemente robusto.** Tres pestañas para armas, mascotas y habilidades. Las armas tienen niveles de rareza (de común a legendario, con bordes de color correspondiente). Las mascotas tienen sus propias stats. Las habilidades son pasivas y activas que desbloqueas a medida que las recoges. Todo el conjunto se siente como un inventario de RPG de verdad.

![Inventario de armas](images/screenshot-09.png)

![Colección de mascotas](images/screenshot-10.png)

![Lista de habilidades](images/screenshot-11.png)

**El modo entrenamiento te permite farmear.** Pulsa el botón de Entrenamiento y tu brute auto-pelea 100 batallas. Obtienes una pantalla de resumen mostrando el XP total ganado, niveles subidos, victorias y cada pieza de loot que recogiste. Es una buena forma de avanzar rápido en el juego temprano sin hacer clic en cada pelea.

![Resultados del entrenamiento](images/screenshot-08.png)

**Los torneos funcionan como eliminación por brackets.** Cuatro rondas, dificultad creciente. La interfaz del bracket muestra tu progreso en cada ronda, tu próximo oponente y un botón claro para pelear. Gana todo el torneo y obtienes recompensas premium.

![Bracket del torneo](images/screenshot-12.png)

## Los Bug Reports

Las iteraciones de rediseño de personajes fueron lo que más tiempo consumió. Los primeros estilos de personaje se veían bien aislados pero no se leían bien en la arena a escala de combate. Las figuras encapuchadas finales funcionan, pero se necesitaron varias rondas de ida y vuelta para llegar ahí. Este es uno de esos casos donde la dirección artística con IA es más difícil de lo que parece. Puedes describir lo que quieres, pero "haz que se vea bien a 80 píxeles de alto en una arena oscura" es un prompt más difícil de lo que parece.

El balance de combate es tosco de la forma que esperarías de un RPG auto-generado. Algunas combinaciones de armas son claramente overpowered, algunas mascotas son mejores que otras por un margen enorme. Pero para un juego donde el objetivo es ver el caos aleatorio desarrollarse, el desequilibrio casi que le añade diversión.

## Los Números

- **27 tareas en Watchfire** del motor de combate al sistema de prestigio
- **Múltiples rediseños de personaje** probando estilos chibi, Hollow Knight y capas fluidas
- **4 ambientes de arena** incluyendo una sala del trono
- **3 categorías de inventario** con loot de diferentes rarezas
- **100 auto-peleas** por sesión de entrenamiento
- **20 slots de replay** para revivir batallas pasadas

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day15-mybrute" showThumbnail=true >}}

**[Entra en la Arena](https://vibe30-day15-mybrute.vercel.app)**

Crea un brute, busca una pelea y mira hasta dónde puedes llegar.

## Veredicto del Día 15

27 tareas es mucho, y el número de sistemas interconectados (combate, XP, loot, mascotas, habilidades, torneos, diarios, rivales, prestigio, replays, logros) es el tipo de cosa que normalmente le tomaría a un equipo pequeño un par de semanas para conectar todo. El hecho de que todo funcione y sea realmente divertido de jugar es bastante salvaje.

El viaje del diseño de personajes fue la parte más interesante. Pasé por al menos cuatro estilos visuales distintos antes de encontrar uno que funcionara. Es un buen recordatorio de que el coding asistido por IA maneja muy bien la lógica y los sistemas, pero la dirección artística todavía requiere un ojo humano y mucha iteración. No puedes simplemente decir "haz que se vea cool" e irte.

A mitad de camino. Los juegos siguen haciéndose más complejos, pero el workflow se está volviendo más fluido. Sé cuándo insistir por más funcionalidades y cuándo darlo por terminado. Ese instinto puede ser lo más valioso que he sacado de este desafío.

---

*Este es el día 15 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando coding asistido por IA.*
