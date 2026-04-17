---
title: "30 Días de Vibe Coding - Día 8 - NotesTUI"
description: "Una aplicación de notas en markdown para la terminal con búsqueda de texto completo, categorías, temas y un servidor MCP para integración con IA."
summary: "Una aplicación de notas en markdown para la terminal con búsqueda de texto completo, categorías, temas y un servidor MCP para integración con IA."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-08", "go", "tui", "terminal", "notes", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 8
seriesOpened: false
date: 2026-04-13
draft: false
#type: "hidden"
---

Día 8. Ayer construí una TUI para repos de git. Hoy construí una para mi cerebro.

## El Prompt

> "Build a terminal notes app in Go with markdown support and an MCP server."

Ese fue el punto de partida. Corto, vago, apenas una especificación. Lo metí en [Watchfire](https://watchfire.io) y dejé que expandiera la idea en una definición de producto completa: edición en la app con Glamour para previsualización de markdown, SQLite con FTS5 para búsqueda de texto completo, categorías, tags, múltiples temas de colores, atajos vim, modo servidor MCP, GoReleaser, GitHub Actions CI, scripts de instalación. Todo eso salió de Watchfire tomando mi frase y convirtiéndola en 36 tareas.

## Cómo Se Construyó

Las primeras 30 y pico tareas construyeron la app de notas principal: crear y editar notas en la terminal, renderizado de markdown con Glamour, búsqueda de texto completo con SQLite FTS5, categorías, tags, múltiples temas y atajos estilo vim. Todo almacena datos en `~/.notestui/` con una base de datos SQLite y un archivo de configuración YAML.

Después, el último lote de tareas se encargó del lado de la distribución. Configuración de GoReleaser para builds multiplataforma, GitHub Actions para CI, un script de instalación que auto-detecta tu SO y arquitectura, y un script de desinstalación para limpiar todo. Al final tenía un README en condiciones y estaba listo para lanzarse como un binario independiente.

El modo servidor MCP fue la parte interesante. Ejecutar `notestui serve` inicia un servidor Model Context Protocol que expone tus notas a herramientas de IA. Listar notas, buscar, crear, actualizar, eliminar, todo a través de MCP. Eso significa que Claude Code o cualquier asistente de IA compatible con MCP puede trabajar directamente con tus notas.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![NotesTUI estado vacío con pantalla de bienvenida](images/screenshot-01.png)

**El estado vacío es amigable.** La primera vez que lo ejecutas aparece una pantalla de bienvenida limpia diciéndote que pulses `n` para crear tu primera nota. La barra inferior muestra todos los atajos de un vistazo.

![Creando una nueva nota con título, tags y contenido](images/screenshot-02.png)

**El editor está integrado.** Pulsa `n` y aparecen campos para título, tags y contenido. Tab se mueve entre campos, Ctrl+S guarda. Sin abrir un editor externo, todo se queda dentro de la TUI.

![Lista de notas con panel de previsualización](images/screenshot-03.png)

**Diseño en panel dividido.** Lista de notas a la izquierda, previsualización a la derecha. Las tags aparecen como badges de colores debajo del título. La barra de estado arriba dice "Your markdown notes, beautifully organized", un detalle simpático que la IA añadió por su cuenta.

![Editando una nota más larga con contenido markdown](images/screenshot-04.png)

**La edición de markdown funciona con contenido real.** Pegué una nota más larga y el editor la manejó sin problemas. El área de contenido hace scroll, y cuando guardas, el panel de previsualización renderiza el markdown con Glamour.

![Resultados de búsqueda de texto completo con previsualización](images/screenshot-05.png)

**La búsqueda es rápida y útil.** Pulsa `/` para buscar y hace búsqueda de texto completo en todas tus notas usando SQLite FTS5. Los resultados aparecen en el panel izquierdo con la previsualización de la nota encontrada a la derecha. La consulta de búsqueda se resalta en la previsualización.

![Pantalla de ajustes MCP - no conectado](images/screenshot-06.png)

**La integración MCP tiene su propia pantalla de ajustes.** Pulsa `m` para abrir los ajustes de MCP. Muestra el estado de conexión, herramientas disponibles e instrucciones de configuración. Cuando no está conectado, te guía paso a paso para configurarlo.

![Pantalla de ajustes MCP - conectado a Claude Code](images/screenshot-07.png)

**Una vez conectado, muestra el estado.** La pantalla de ajustes se actualiza para mostrar que NotesTUI está configurado con Claude Code, con un botón para desconectar y una opción para actualizar el estado.

![Claude Code creando notas a través de MCP](images/screenshot-08.png)

**Aquí es donde la cosa se pone loca.** Le pedí a Claude Code que "write me some notes on all Marvel characters, one for each." Empezó a llamar `notestui - create_note` a través de MCP, generando perfiles detallados de personajes y metiéndolos directamente en mi base de datos de notas.

![Claude Code creando notas de personajes Marvel en masa](images/screenshot-09.png)

**Y siguió sin parar.** Claude creó notas para Thor, Hulk, Black Widow, Hawkeye, Capitán América, Iron Man, cada una con poderes, habilidades, datos clave e información sobre quién los interpretó. Todo vía llamadas de herramientas MCP desde Claude Code hacia NotesTUI.

![Más notas Marvel siendo creadas vía MCP](images/screenshot-10.png)

**Las notas seguían llegando.** Puedes ver la lista de notas a la izquierda creciendo mientras Claude las crea. Cada una recibe tags apropiadas como "marvel", "avengers", "mcu". La IA incluso decidió expandirse más allá de los 6 Avengers originales y añadir a Bruja Escarlata, Visión y más.

![Resultados de búsqueda para "spiderman" en todas las notas](images/screenshot-11.png)

**16 notas creadas, todas buscables.** Después de que la IA terminara, busqué "spiderman" y obtuve el perfil completo del personaje con nombre real, poderes, datos clave y apariciones en el MCU. La vista en panel dividido muestra la previsualización del markdown renderizado a la derecha.

![Vista de detalle de nota con renderizado markdown](images/screenshot-12.png)

**El renderizado de markdown es sólido.** Glamour maneja encabezados, texto en negrita, listas y citas. La previsualización de la nota en el panel derecho se ve limpia y legible.

![NotesTUI y Claude Code lado a lado](images/screenshot-13.png)

**Lado a lado con Claude Code.** Ejecutando NotesTUI a la izquierda y Claude Code a la derecha. Mientras Claude crea notas a través de MCP, aparecen en la TUI en tiempo real. La lista se desplaza hacia abajo conforme llegan nuevas notas.

![Claude Code consultando notas a través de MCP](images/screenshot-14.png)

**La IA también puede leer tus notas.** Le pregunté a Claude "What's Spiderman's name based on my notes?" y llamó `notestui - get_note` a través de MCP para buscar la respuesta. Sacó los datos de mis notas y respondió correctamente: Peter Benjamin Parker. La IA puede tanto escribir como leer de tu base de datos de notas personal.

## Los Números

- **36 tareas Watchfire** de repo vacío a binario lanzado
- **Go puro** sin dependencia CGO (usa SQLite en Go puro)
- **6 herramientas MCP**: listar, buscar, obtener, crear, actualizar, eliminar
- **Múltiples temas** y atajos vim
- **GoReleaser + GitHub Actions** para builds automatizados multiplataforma
- **Scripts de instalación y desinstalación** incluidos
- **Tiempo total práctico:** unos 25 minutos de pruebas, prompts y jugando con la integración MCP

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day08-notestui" showThumbnail=true >}}

Instálalo con una sola línea:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day08-notestui/main/scripts/install.sh | bash
```

O desde el código fuente:

```bash
go install github.com/nunocoracao/Vibe30-day08-notestui@latest
```

Después simplemente ejecuta `notestui` para empezar a tomar notas, o `notestui serve` para iniciar el servidor MCP.

## Veredicto del Día 8

La app de notas en sí es sólida. TUI limpia, búsqueda rápida, buen renderizado de markdown. Si no me hubiera mudado ya a Obsidian, este es el tipo de herramienta que usaría a diario. Pero el servidor MCP es lo que hace que esta sea diferente de todo lo demás en el desafío hasta ahora.

La demo con personajes Marvel fue divertida, pero piensa en lo que el servidor MCP realmente permite. Esto no es solo una app de notas donde una IA puede volcar trivialidades. Es un almacén de conocimiento persistente que cualquier agente de IA puede leer y escribir. Podrías usarlo para alimentar la memoria de un agente. Mete notas de reuniones, contexto de proyectos, hallazgos de investigación, y luego cualquier asistente compatible con MCP puede consultar ese conocimiento bajo demanda. La línea entre "app de notas" y "base de conocimiento para agentes" resulta ser un servidor MCP.

Ver las notas aparecer en tiempo real en la TUI mientras Claude escribía en otra terminal fue uno de esos momentos donde todo esto del vibe coding hace clic. Construyes una herramienta, le das una interfaz de IA, y de repente puede hacer cosas que ni se te ocurrió pedir.

36 tareas Watchfire. La complejidad extra vino del servidor MCP, los scripts de distribución y el pipeline de CI. Pero el resultado es una herramienta Go en condiciones que se instala con un solo comando curl y funciona con asistentes de IA de serie.

---

*Este es el día 8 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sigue la serie mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
