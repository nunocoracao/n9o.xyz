---
title: "30 Days of Vibe Coding - Día 11 - Treelo"
description: "Un tablero kanban completo al estilo Trello con drag-and-drop, etiquetas, checklists, fechas de entrega, vista de calendario y seguimiento de actividad."
summary: "Un tablero kanban completo al estilo Trello con drag-and-drop, etiquetas, checklists, fechas de entrega, vista de calendario y seguimiento de actividad."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-11", "typescript", "nextjs", "kanban", "productivity"]
series: ["30 Days of Vibe Coding"]
series_order: 11
seriesOpened: false
date: 2026-04-16
draft: false
#type: "hidden"
---

Día 11. Pedí un clon de Trello. Tableros kanban, drag and drop, detalles de tarjetas, todo el paquete.

## El Prompt

> "Build a Trello-style kanban board app with boards, lists, cards, and drag-and-drop"

Lo llamé Treelo porque soy muy creativo con los nombres.

## Cómo Se Construyó

Watchfire dividió esto en 18 tareas. Las cosas esenciales vinieron primero: tableros, listas, tarjetas y drag-and-drop. Después siguió adelante. Etiquetas. Fechas de entrega. Un modal de detalle de tarjeta. Fondos personalizados para tableros. Búsqueda y filtrado. Archivado de tarjetas. Multi-selección con operaciones masivas. Un feed de actividad. Una vista de calendario. Y luego una pasada de optimización de rendimiento al final para mantener todo fluido.

Son muchas funcionalidades para un solo prompt. La mayoría de estas no las pedí explícitamente. El prompt inicial era solo tableros, listas, tarjetas y drag-and-drop. Todo lo demás fue Watchfire decidiendo "un tablero kanban también debería tener estas cosas" y simplemente construyéndolas.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Vista del tablero con listas y tarjetas](images/screenshot-01.png)

**Parece Trello.** El diseño, el estilo de las tarjetas, el fondo azul, las columnas de listas. Si entrecierras los ojos podría pasar por el original. Hay una barra superior con búsqueda, actividad, calendario y botones de filtro. Las listas muestran el conteo de tarjetas. Las tarjetas muestran etiquetas y badges de fecha de entrega.

![Página principal de tableros](images/screenshot-02.png)

**Múltiples tableros.** Hay una página de inicio con los tableros vistos recientemente y un botón "Create new board". Registra qué tableros has visitado recientemente. Simple pero funcional.

![Modal de detalle de tarjeta](images/screenshot-03.png)

**El modal de detalle de tarjeta es sorprendentemente completo.** Haz clic en cualquier tarjeta y obtienes un modal completo con etiquetas, un selector de fecha de entrega, una checklist con seguimiento de progreso, un campo de descripción, comentarios y un registro de actividad. En el lado derecho hay un conjunto de acciones: mover, copiar, archivar. Este es el tipo de cosa que llevaría días construir bien a mano.

![Panel de filtro de etiquetas](images/screenshot-04.png)

**Las etiquetas realmente funcionan.** Puedes asignar etiquetas con colores a las tarjetas y luego filtrar por ellas. El panel de filtro se desliza desde el lado derecho. Las tarjetas en el tablero muestran los colores de sus etiquetas como pequeñas franjas de color en la parte superior.

![Feed de actividad](images/screenshot-05.png)

**Hay un feed de actividad.** Cada acción queda registrada. Tarjeta creada, tarjeta movida, etiqueta añadida, checklist completada. Muestra timestamps y describe lo que pasó. Esta es una de esas funcionalidades que separa un juguete de algo usable. Realmente puedes rastrear lo que pasó en un tablero.

![Vista de calendario](images/screenshot-06.png)

**Una vista de calendario.** Cambia de la vista de tablero a un calendario y ve todas tus tarjetas con fechas de entrega dispuestas en una cuadrícula mensual. Las tarjetas sin fechas de entrega aparecen en una barra lateral. Es una forma genuinamente útil de ver lo que viene.

![Detalle de tarjeta desde el calendario](images/screenshot-07.png)

**Los modales de tarjetas también funcionan desde el calendario.** Haz clic en una tarjeta en el calendario y se abre el mismo modal de detalle. Fechas de entrega, etiquetas, todo es accesible desde cualquier vista.

![Fondo personalizado del tablero](images/screenshot-08.png)

**Fondos personalizados para tableros.** Puedes cambiar el fondo del tablero a diferentes colores y gradientes. El modo oscuro también está totalmente soportado. Toda la aplicación respeta tu preferencia de tema.

## Qué Más Hay Dentro

Algunas cosas que no se muestran bien en capturas de pantalla pero vale la pena mencionar:

- **Drag-and-drop** usando @dnd-kit. Puedes reordenar tarjetas dentro de una lista, moverlas entre listas y reordenar las propias listas.
- **Multi-selección.** Mantén shift o ctrl para seleccionar múltiples tarjetas y luego muévelas, archívalas o etiquétalas en masa.
- **Deshacer/rehacer.** Soporte completo de historial con Ctrl+Z y Ctrl+Shift+Z.
- **Atajos de teclado.** Pulsa N para añadir una tarjeta, F para buscar, B para volver a los tableros, Q para filtrar por fecha de entrega y ? para ver todos los atajos.
- **Checklists** dentro de las tarjetas con una barra de progreso.
- **Archivar y restaurar.** Las tarjetas y listas pueden archivarse sin ser eliminadas.
- **Persistencia en local storage.** Todo se guarda en el navegador. Cierra la pestaña, vuelve, y tus tableros siguen ahí.

## Los Bug Reports

Honestamente, este quedó bastante limpio. Los principales problemas eran en casos extremos de drag-and-drop (soltar una tarjeta justo al fondo de una lista a veces no registraba) y la vista de calendario inicialmente no se actualizaba cuando cambiabas una fecha de entrega desde el modal. Cosas pequeñas. Nada estructural.

## Los Números

- **18 tareas de Watchfire** desde el kanban base hasta optimización de rendimiento
- Stack **Next.js + TypeScript + Tailwind CSS**
- **@dnd-kit** para drag-and-drop
- **Navegación completa por teclado** con overlay de atajos
- **Dos vistas:** tablero y calendario
- **Todos los datos en localStorage** sin necesidad de backend

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day11-trelloclone" showThumbnail=true >}}

**[Prueba Treelo](https://vibe30-day11-trelloclone.vercel.app)**

Crea un tablero, añade algunas listas, arrastra algunas tarjetas. Es más divertido de lo que debería ser.

## Veredicto del Día 11

Un tablero kanban suena simple en la superficie, pero hay tantas pequeñas interacciones que necesitan funcionar: objetivos de drag, estado del modal, filtrado, historial de undo, consistencia entre vistas. El hecho de que todo esto viniera de un prompt y 18 tareas automatizadas sigue siendo alucinante para mí.

Sigo volviendo al mismo pensamiento: yo no podría haber construido esto en un día solo. Solo el drag-and-drop me habría llevado un día entero peleando con bibliotecas y casos extremos. En su lugar obtuve un clon funcional de Trello con una vista de calendario, un feed de actividad, operaciones masivas y atajos de teclado. Y pasé mi tiempo probándolo y reportando un par de bugs.

La distancia entre "quiero un tablero kanban" y "aquí tienes un tablero kanban" sigue acortándose.

---

*Este es el día 11 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sigue el progreso mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
