---
title: "30 Days of Vibe Coding - Dia 28 - ideA"
description: "Un editor de codigo nativo de escritorio construido con Wails, Go, React y Monaco Editor."
summary: "Un editor de codigo nativo de escritorio construido con Wails, Go, React y Monaco Editor."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-28", "go", "wails", "react", "monaco", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 28
seriesOpened: false
date: 2026-05-03
draft: false
#type: "hidden"
---

Dia 28. Quedan tres dias. Ayer fue un emulador de terminal. Hoy? Un editor de codigo.

No una app web. No algo corriendo en una pestana del navegador. Una aplicacion nativa de escritorio que instalas en tu maquina. El tipo de cosa que le lleva anos a equipos enteros construir.

## El Prompt

{{< alert icon="fire">}}
Descargalo desde la [ultima release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest)
{{< /alert >}}

> "Construir un editor de codigo nativo de escritorio usando Wails v2 con backend en Go y frontend en React con Monaco Editor. Barra lateral con arbol de archivos, pestanas, syntax highlighting. Builds multi-plataforma para macOS, Linux y Windows."

## Como Se Construyo

Este fue una bestia. [Watchfire](https://watchfire.io) dividio el trabajo en 43 tareas, que es por lejos la mayor cantidad de tareas de cualquier proyecto en este desafio. Y muchas de esas fueron correcciones de CI, porque construir apps nativas de escritorio para tres plataformas resulta ser... no precisamente sencillo.

El stack es Wails v2 para el wrapper nativo, Go para las operaciones del sistema de archivos en el backend, React para la UI, y Monaco Editor (el mismo motor de edicion que alimenta VS Code) para la edicion de codigo propiamente dicha. El backend en Go maneja todo el I/O de archivos, lectura de directorios, apertura de archivos, guardado de cambios, y expone todo eso como funciones que el frontend React puede llamar a traves de los bindings de Wails.

El pipeline de CI fue donde aparecio el verdadero dolor. Dependencias de WebKit en Linux, build tags que tenian que estar exactas, generacion de bindings de Wails, empaquetado multi-plataforma. Perdi la cuenta de cuantos commits de "fix CI" hubo. El git log esta lleno de ellos. Pero esa es la realidad de lanzar apps nativas. El codigo puede funcionar perfectamente en tu maquina y aun asi fallar espectacularmente en un runner de GitHub Actions.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Pantalla de bienvenida](images/screenshot-01.png)

**Una pantalla de bienvenida de verdad.** Acciones rapidas para abrir carpetas y archivos, lista de proyectos recientes, y una referencia de atajos de teclado. Parece una pagina de bienvenida de un IDE real.

![Arbol de archivos con proyecto abierto](images/screenshot-02.png)

**Arbol de archivos que funciona.** Abres una carpeta y tienes un arbol de directorio completo en la barra lateral con expandir/colapsar, iconos de archivos, y todo lo demas. Hay un minimap en la parte inferior mostrando una vista general de la estructura de archivos.

![Edicion de codigo con syntax highlighting](images/screenshot-03.png)

**Monaco Editor haciendo lo suyo.** Syntax highlighting completo, numeros de linea, el minimap en el lado derecho. Es la misma experiencia de edicion que VS Code porque literalmente es el mismo componente de editor. JavaScript, Go, TypeScript, JSON, lo que abras tiene highlighting adecuado.

![Paleta de comandos](images/screenshot-04.png)

**Una paleta de comandos.** Ese overlay de busqueda fuzzy que todos los editores modernos tienen. Busca comandos, salta a archivos. Funciona.

![Terminal integrada](images/screenshot-05.png)

**Una terminal integrada.** Hay un panel de terminal en la parte inferior del editor. Ejecuta tus builds, revisa el git status, lo que necesites sin salir de la app.

![Busqueda de archivos](images/screenshot-07.png)

**Busqueda de archivos con fuzzy matching.** Overlay de apertura rapida para saltar entre archivos en tu proyecto. Escribes unos caracteres y filtra.

## La Guerra del CI

Esto merece su propia seccion porque domino la construccion. Lograr que Wails compilara y empaquetara correctamente en GitHub Actions para macOS, Linux y Windows simultaneamente fue una batalla de multiples commits. Algunos highlights:

- Dependencias de WebKit en Linux necesitaban paquetes especificos (`libgtk-3-dev`, `libwebkit2gtk-4.0-dev`)
- Las build tags tenian que estar configuradas correctamente para cada plataforma
- La generacion de bindings de Wails tenia que ocurrir antes del build
- El workflow de release necesitaba producir bundles `.app` para macOS, tarballs para Linux, y `.exe` para Windows
- Multiples rondas de corregir, testear, corregir de nuevo

El resultado final es un workflow de GitHub Actions que hace build y release para las tres plataformas automaticamente cuando haces push de un tag. Funciona. Solo tomo un rato llegar ahi.

## Instalalo

Esta es una app nativa, asi que nada de link de Vercel esta vez. Lo instalas en tu maquina.

**Instalacion rapida (macOS y Linux):**

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day28-idea/main/install.sh | bash
```

O descarga un binario desde la [pagina de releases](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest):

| Plataforma | Arquitectura | Download |
|----------|-------------|----------|
| macOS | Intel (x86_64) | [VibEdit-macos-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-amd64.zip) |
| macOS | Apple Silicon (arm64) | [VibEdit-macos-arm64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-arm64.zip) |
| Linux | x86_64 | [VibEdit-linux-amd64.tar.gz](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-linux-amd64.tar.gz) |
| Windows | x86_64 | [VibEdit-windows-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-windows-amd64.zip) |

**Compilar desde el codigo fuente** si quieres (requiere Go 1.23+, Node.js 20+, Wails CLI v2):

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
git clone https://github.com/nunocoracao/Vibe30-day28-idea.git
cd Vibe30-day28-idea
cd frontend && npm install && cd ..
wails build
```

## Pruebalo

{{< github repo="nunocoracao/Vibe30-day28-idea" showThumbnail=true >}}

## Los Numeros

- **43 tareas en Watchfire** desde el setup hasta las correcciones finales de CI
- **3 plataformas objetivo** (macOS, Linux, Windows)
- **Wails v2 + Go** backend con React + Monaco Editor frontend
- **GitHub Actions** workflow de release para builds multi-plataforma automatizados

## Veredicto del Dia 28

El editor en si se armo razonablemente rapido. Monaco Editor hace gran parte del trabajo pesado, y Wails hace que el puente entre Go y React sea sorprendentemente limpio. La parte dificil fue todo lo que rodea al codigo: lograr que el CI construyera apps nativas para tres sistemas operativos, manejar dependencias especificas de cada plataforma, empaquetar correctamente para cada objetivo.

Esto va a reemplazar VS Code? Obviamente no. Pero es un editor de codigo nativo funcional con arbol de archivos, pestanas, syntax highlighting, paleta de comandos, terminal integrada, y releases multi-plataforma. Construido en un dia. El hecho de que el mismo Monaco Editor que alimenta VS Code este disponible como componente React significa que tienes una experiencia de edicion real gratis. El resto es fontaneria, y eso es exactamente el tipo de trabajo en el que la IA es buena.

43 tareas es mucho. La mayoria de los dias en este desafio estuvieron en el rango de 15-25. Pero apps nativas de escritorio con pipelines de CI son otro animal. Cada plataforma tiene sus manias, cada sistema de build tiene sus opiniones, y ninguno se pone de acuerdo con el otro. Quedan dos mas.

---

*Este es el dia 28 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sigue la serie mientras lanzo 30 proyectos en 30 dias usando programacion asistida por IA.*
