---
title: "30 Days of Vibe Coding - Dia 7 - GitDash"
description: "Un panel de terminal para monitorizar el estado de todos tus repositorios git de un vistazo, construido con Go y Bubble Tea."
summary: "Un panel de terminal para monitorizar el estado de todos tus repositorios git de un vistazo, construido con Go y Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-07", "go", "tui", "terminal", "git"]
series: ["30 Days of Vibe Coding"]
series_order: 7
seriesOpened: false
date: 2026-04-12
draft: false
---

Dia 7. El mismo stack que ayer. El mismo framework. Tampoco es la idea mas original del mundo.

Despues de que el Dia 6 demostro que podia construir con Go y Bubble Tea sin haber tocado ninguno de los dos, queria probar otra cosa: que pasa cuando le apuntas a la IA a una herramienta existente y le pides que construya un wrapper? En este caso, git. Tengo demasiados repos y ni idea de cuales tienen cambios sin commitear.

## El Prompt

> "Construye una app TUI en Go que escanee un arbol de directorios buscando repos de git y muestre su estado en un panel de terminal. Con colores: verde para limpio, amarillo para sucio, azul para adelantado/atrasado. Dejame hacer fetch, pull y abrir una shell en cualquier repo. Usa Bubble Tea para la UI."

## Como se construyo

La parte interesante de este proyecto no es la UI ni el framework. Es como la IA interactuo con git. Toda la app es esencialmente un wrapper: ejecuta comandos de `git` para cada dato que muestra. Nombres de ramas, hashes de commits, conteos de adelantado/atrasado, listas de stash, seguimiento de archivos modificados. No usa una libreria de git para Go. Ejecuta los mismos comandos que escribirias a mano y parsea la salida.

La IA dividio el trabajo en paquetes que mapean a responsabilidades: un scanner que recorre arboles de directorios buscando carpetas `.git`, un paquete git que wrappea comandos CLI, un sistema de configuracion usando YAML, y una capa TUI construida sobre Bubble Tea de Charm. El scanner se salta `node_modules`, `vendor` y directorios ocultos. El paquete git maneja branch, status, log, rev-list, stash list y describe. La UI tiene separacion limpia entre vista de lista, vista de detalle, barra de estado, overlay de ayuda y estilos.

Incluso vino con un Makefile para builds multiplataforma (darwin/linux, amd64/arm64) y un script de instalacion que auto-detecta tu SO y arquitectura.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo que obtuve

![Vista principal de GitDash mostrando repos agrupados por estado](images/screenshot-01.png)

**Agrupa repos por estado.** Los repos sucios con cambios sin commitear aparecen primero (punto amarillo), luego los repos que necesitan sincronizarse con el remoto (conteos de adelantado/atrasado en azul), despues los repos limpios (checkmark verde). De un vistazo puedo ver cuales repos necesitan atencion. Pulsa `s` para alternar entre vista agrupada y alfabetica.

![GitDash con un repo seleccionado](images/screenshot-02.png)

**Cada repo muestra mucha info en dos lineas.** Nombre, rama entre corchetes rosas, ultimo tag entre parentesis, indicador de limpio/sucio, flechas de adelantado/atrasado, tiempo relativo del commit a la derecha, y el ultimo mensaje de commit debajo. Empaqueta una cantidad sorprendente de contexto en un espacio pequeno.

![Vista de detalle para un repo individual](images/screenshot-03.png)

**La vista de detalle es genuinamente util.** Pulsa Enter en cualquier repo y obtienes el panorama completo: ruta, rama, tag, estado, sincronizacion con remoto, mensaje de commit completo con autor, lista de archivos modificados si esta sucio, y conteo de stash. Desde aqui puedes hacer pull, o pulsar `g` para abrir una shell directamente en el directorio de ese repo.

![Shell abierta desde GitDash](images/screenshot-04.png)

**La integracion con la shell funciona.** Pulsa `g` y abre tu shell (lee `$SHELL`) en el directorio del repo. Haz lo que necesites, sal, y vuelves a GitDash. Cuando regresas, refresca el estado del repo automaticamente.

**Tiene busqueda/filtro.** Pulsa `/` y empieza a escribir para filtrar repos por nombre en tiempo real. Util cuando estas escaneando un directorio con docenas de proyectos.

**Archivo de configuracion YAML.** Configura tus rutas de monitoreo en `~/.config/gitdash/config.yaml` para no tener que pasar `-path` cada vez. Configura multiples directorios, profundidad maxima de escaneo, y si mostrar carpetas ocultas.

## Los bugs

Nada importante en este. La TUI quedo limpia. Lo unico que note fue que en arboles de directorios muy grandes, el escaneo inicial tarda un momento, pero muestra un mensaje de "Scanning for repositories..." asi que sabes que esta trabajando.

## Los numeros

- **11 archivos fuente Go** en 5 paquetes (main, config, git, scanner, ui)
- **~1,900 lineas de Go**
- **1 archivo de tests** para el scanner
- **Builds multiplataforma** para macOS y Linux (amd64/arm64)
- **Script de instalacion** con auto-deteccion de SO y arquitectura
- **Tiempo total hands-on:** unos 20 minutos de pruebas y ajustes al prompt

## Pruebalo

{{< github repo="nunocoracao/Vibe30-day07-gitdash" showThumbnail=true >}}

Instalalo con:

```bash
go install github.com/nunocoracao/Vibe30-day07-gitdash@latest
```

O el one-liner:

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day07-gitdash/main/scripts/install.sh | bash
```

Despues simplemente ejecuta `gitdash` en cualquier directorio que contenga repos de git.

## Veredicto del Dia 7

Voy a ser honesto: esto no es un proyecto creativo. Un panel de estado de git no es una idea novedosa. Lazygit y tig ya existen y lo hacen mejor. Y es el mismo stack de Go + Bubble Tea que use ayer, asi que tampoco hay una historia de "tecnologia desconocida" que contar.

Pero la construccion revelo algo que vale la pena mencionar. La IA no necesito entender las interioridades de git. Simplemente wrappeo el CLI. Cada dato en este panel viene de ejecutar un comando de git y parsear la salida de texto. `git status --porcelain` para archivos sucios. `git rev-list --count` para adelantado/atrasado. `git stash list` para conteos de stash. Trato a git como una caja negra con una interfaz de texto, que es exactamente como la mayoria de los desarrolladores lo tratan tambien.

Ese es el patron interesante de hoy. Puedes apuntar a la IA a cualquier herramienta CLI con salida estructurada y obtener una UI wrapper construida alrededor. Git, Docker, kubectl, lo que sea. La IA no necesita entender las interioridades del sistema mas de lo que tu las entiendes. Solo necesita saber que comandos ejecutar y como parsear lo que vuelve.

El proyecto en si esta bien. Funciona, la agrupacion por estado es util de un vistazo, la vista de detalle empaqueta mucha info. Pero no voy a pretender que esto es algo que usare a diario cuando puedo simplemente ejecutar `git status` en cada repo. El valor aqui fue ver el patron, no la herramienta especifica.

---

*Este es el dia 7 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sigueme mientras lanzo 30 proyectos en 30 dias usando programacion asistida por IA.*
