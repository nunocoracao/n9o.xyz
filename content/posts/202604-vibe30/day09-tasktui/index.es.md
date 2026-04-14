---
title: "30 Días de Vibe Coding - Día 9 - TaskTUI"
description: "Un tablero kanban personal para la terminal con navegación estilo vim y un servidor MCP para integración con Claude Code, construido con Go y Bubble Tea."
summary: "Un tablero kanban personal para la terminal con navegación estilo vim y un servidor MCP para integración con Claude Code, construido con Go y Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-09", "go", "tui", "terminal", "kanban", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 9
seriesOpened: false
date: 2026-04-14
draft: false
---

Día 9. Quería un tablero de tareas que viviera en la terminal y que Claude también pudiera leer y escribir.

## El Prompt

> "Construye un tablero kanban para la terminal en Go con un servidor MCP para que Claude pueda gestionar tareas."

Esa fue la semilla. [Watchfire](https://watchfire.io) la expandió en 13 tareas cubriendo todo el alcance: tablero de tres columnas con navegación vim, UI con Bubble Tea, persistencia en JSON, un file watcher para actualización automática, un modo de servidor MCP para integración con IA, comandos CLI para gestión rápida de tareas y GoReleaser para distribución.

## Cómo Se Construyó

Las 13 tareas lo llevaron de la nada a un release completo y empaquetado. Las primeras nueve tareas construyeron el núcleo del tablero kanban: el modelo del tablero, renderizado de tarjetas, arrastrar y soltar entre columnas y todo el estilo con Lip Gloss para que se viera bien en la terminal. La tarea 9 añadió el modo de servidor MCP. La tarea 10 trajo la monitorización de archivos en tiempo real. Las tres últimas se encargaron de los comandos CLI, la configuración de GoReleaser para binarios multiplataforma y el README.

La arquitectura se divide limpiamente en paquetes: `task` para el modelo de dominio, `storage` para persistencia JSON, `watcher` para monitorización del sistema de archivos, `mcp` para el servidor MCP y `cli` para todos los comandos Cobra. El punto de entrada enruta entre tres modos dependiendo de cómo lo invoques: modo TUI (por defecto), modo CLI (con subcomandos como `add` o `list`) y modo servidor MCP (con `tasktui mcp`).

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Tablero kanban TaskTUI con tres columnas](images/screenshot-01.png)

**El tablero kanban se ve genial en la terminal.** Tres columnas con encabezados codificados por color: rojo/rosa para Todo, naranja/amarillo para Doing, verde para Done. Cada tarjeta muestra el título y la descripción de la tarea. La tarjeta seleccionada recibe un borde resaltado. Navegas con `h/l` para cambiar de columna y `j/k` para moverte entre tareas dentro de una columna.

![Añadiendo una nueva tarea con el diálogo popup](images/screenshot-02.png)

**Creación de tareas inline.** Pulsa `n` y aparece un modal donde escribes el título y la descripción de la tarea. Cae directamente en la columna Todo. Pulsa `e` para editar una tarea existente de la misma forma.

![Creando una nueva tarea con campos de título y descripción](images/screenshot-03.png)

**El diálogo de entrada tiene navegación de campos adecuada.** Tab entre título y descripción, Enter para confirmar. No te estorba y funciona exactamente como esperas.

![Tablero con tareas movidas entre columnas](images/screenshot-04.png)

**Mover tareas entre columnas es instantáneo.** Pulsa Enter o Espacio para avanzar una tarea (Todo a Doing a Done), o Backspace para moverla hacia atrás. También puedes usar Shift+H y Shift+L para mover tareas a la izquierda y derecha explícitamente. El tablero tiene soporte completo de deshacer/rehacer.

**Los comandos CLI son prácticos para capturas rápidas.** `tasktui add "Arreglar ese bug"` coloca una tarea en Todo sin abrir la TUI. `tasktui list --state doing` muestra lo que está en progreso. `tasktui done 3` marca la tarea 3 como completada. Todo desde la shell.

**El servidor MCP es la parte interesante.** Ejecuta `tasktui mcp` y arranca un servidor Model Context Protocol que expone cuatro herramientas: `list_tasks`, `add_task`, `move_task` y `delete_task`. Añádelo a tu configuración `~/.claude/mcp.json` y Claude Code puede gestionar tus tareas directamente. El file watcher significa que, si tienes la TUI abierta al mismo tiempo, se actualiza automáticamente cada vez que Claude hace un cambio. Puedes literalmente ver tareas aparecer en tu tablero mientras Claude las añade.

## Los Bug Reports

El file watcher ocasionalmente dispara dos veces al guardar, lo que causa un breve parpadeo visual mientras el tablero recarga dos veces en rápida sucesión. No es gran cosa pero se nota. El modo de servidor MCP en sí funcionó limpiamente al primer intento, lo que honestamente me sorprendió dado lo caprichosas que pueden ser las implementaciones de protocolos.

## Los Números

- **13 tareas Watchfire** del inicio al release empaquetado
- **6 comandos CLI** (root, tui, add, list, done, mcp)
- **4 herramientas MCP** (list_tasks, add_task, move_task, delete_task)
- **Stack Go + Bubble Tea + Lip Gloss + Cobra**
- **GoReleaser** para builds de binarios multiplataforma
- **Tiempo total hands-on:** quizás 25 minutos de pruebas e iteración de prompts

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day09-tasktui" showThumbnail=true >}}

Instálalo con:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day09-tasktui/main/install.sh | sh
```

O compílalo desde el código fuente:

```bash
git clone https://github.com/nunocoracao/Vibe30-day09-tasktui.git
cd Vibe30-day09-tasktui
go build -o tasktui ./cmd/tasktui
```

Para configurar la integración MCP con Claude Code, añade esto a `~/.claude/mcp.json`:

```json
{
  "mcpServers": {
    "tasktui": {
      "command": "tasktui",
      "args": ["mcp"]
    }
  }
}
```

## Veredicto del Día 9

Esto redobla la apuesta en la stack Go + Bubble Tea pero añade algo nuevo: integración con IA a través de MCP.

El tablero kanban en sí es sólido. Hace exactamente lo que un gestor de tareas personal debe hacer y nada más. Pero el modo de servidor MCP es lo que hace este proyecto interesante. Tener a Claude Code gestionando mi tablero de tareas mientras estoy trabajando, añadiendo tareas que descubre en comentarios del código, marcando cosas como completadas después de arreglarlas, es un workflow que no sabía que quería.

El file watcher lo conecta todo. La TUI queda abierta en un panel de la terminal, Claude trabaja en otro, y el tablero se actualiza en tiempo real. Se siente como programación en pareja con un tablero de tareas compartido entre tú y la IA.

Nueve días y los proyectos empiezan a conectarse. GitDash para awareness de repositorios, TaskTUI para gestión de tareas, ambos viviendo en la terminal donde realmente trabajo. Las herramientas están empezando a comunicarse entre sí.

---

*Este es el día 9 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
