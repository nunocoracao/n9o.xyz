---
title: "30 Días de Vibe Coding - Día 27 - Terminal"
description: "Un emulador de terminal nativo construido con Tauri 2 y Rust, con pestañas, paneles divididos, temas configurables y funciones inteligentes."
summary: "Un emulador de terminal nativo construido con Tauri 2 y Rust, con pestañas, paneles divididos, temas configurables y funciones inteligentes."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-27", "rust", "tauri", "terminal"]
series: ["30 Days of Vibe Coding"]
series_order: 27
seriesOpened: false
date: 2026-05-02
draft: false
#type: "hidden"
---

Día 27. Quedan cuatro días. Hora de dejar de ir a lo seguro.

La recta final de este desafío es donde quiero meterme en cosas que probablemente no deberían funcionar en un solo día. Un emulador de terminal es una de esas cosas. No un juguete web que finge ser un terminal. Una aplicación de escritorio nativa de verdad que lanza sesiones de shell reales, renderiza a 60fps, y maneja todo desde vim hasta htop.

## El Prompt

> "Construir un emulador de terminal usando Tauri 2 y Rust"

Esa fue la petición principal. Todo lo demás vino de la iteración.

{{< alert icon="fire">}}
Descárgalo desde la [última release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest)
{{< /alert >}}

## Cómo Se Construyó

Este fue de los gordos. [Watchfire](https://watchfire.io) dividió el trabajo en 19 tareas, y necesitó cada una de ellas. Construir un emulador de terminal no es trivial. Hay gestión de PTY, integración con la shell, manejo de input, rendimiento de renderizado, y una docena de otras cosas en las que nunca habría pensado.

La lista de tareas fue más o menos así:

1. Crear la estructura de un proyecto Tauri 2 + Vite con soporte básico de PTY
2. Múltiples pestañas con abrir, cerrar y renombrar
3. Paneles divididos, horizontal y verticalmente
4. Panel de configuración con temas, fuentes y configuración de shell
5. Polish de la UI, scrollback y correcciones de shell
6. GitHub Actions para releases automatizadas
7. Sugerencias de comandos por IA inline
8. Polish visual para transparencia, blur y chrome de ventana
9. Links clicables y detección inteligente en el output del terminal
10. Perfiles de shell y acciones rápidas
11. Avisos de comandos peligrosos con diálogos de confirmación
12. Notificaciones para comandos de larga duración
13. Búsqueda fuzzy en el historial con un overlay rico en Ctrl+R
14. Sugerencias fantasma inline desde archivos de historial
15. Detección inteligente de errores con acciones de corrección rápida
16. Traducción de lenguaje natural a comandos
17. Explicación de comandos y resumen de output por IA
18. Agrupación de output basada en bloques con secciones colapsables
19. Panel de configuración de funciones inteligentes y pruebas de integración

Después vinieron las correcciones de CI/CD. Hacer que Tauri compile y firme en macOS, Linux y Windows a través de GitHub Actions es toda una aventura. Scripts de instalación para las tres plataformas también.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Terminal corriendo con múltiples funciones visibles](images/screenshot-01.png)

**Es un terminal de verdad.** Esto no es una simulación. Usa el crate portable-pty de Rust para lanzar sesiones de shell reales. Bash, zsh, fish, lo que tengas configurado. Soporte completo de PTY significa que todo funciona: vim, htop, prompts interactivos, todo.

![Corriendo htop con múltiples pestañas](images/screenshot-11.png)

**xterm.js con aceleración WebGL.** El renderizado es rápido. Como, notablemente rápido. El scrollback llega hasta 10.000 líneas y no se atraganta. El renderer WebGL hace una diferencia real comparado con el enfoque estándar de canvas.

**Pestañas y paneles divididos.** Cmd+T para una nueva pestaña, Cmd+D para un split vertical, Cmd+Shift+D para un split horizontal. Puedes renombrar pestañas. La gestión de paneles funciona exactamente como esperarías de un terminal moderno.

![Paneles divididos con Claude Code corriendo](images/screenshot-12.png)

**Tiene un tour de funciones inteligentes.** Cuando abres la app por primera vez, te guía por las funciones inteligentes con un tour guiado.

![Tour de funciones inteligentes](images/screenshot-02.png)

Esas funciones inteligentes incluyen sugerencias fantasma de tu historial de comandos, búsqueda fuzzy en el historial con Ctrl+R, avisos de comandos peligrosos para cosas como `rm -rf` o `git push --force`, y traducción de lenguaje natural a comandos.

![Sugerencias fantasma](images/screenshot-03.png)

![Búsqueda fuzzy en el historial](images/screenshot-04.png)

![Avisos de comandos peligrosos](images/screenshot-05.png)

![Lenguaje natural y funciones de IA](images/screenshot-06.png)

**Un panel de configuración completo.** Familia de fuente, tamaño de fuente, estilo de cursor, temas de colores. Viene con Dracula, Solarized, Monokai y más. Puedes configurar blur de fondo, transparencia y argumentos de shell.

![Panel de configuración](images/screenshot-14.png)

**Búsqueda de comandos en el scrollback.** Ctrl+F abre un overlay de búsqueda que te permite buscar en tu historial del terminal con coincidencia fuzzy.

![Overlay de búsqueda](images/screenshot-13.png)

**Agrupación de output basada en bloques.** Los outputs largos de comandos se agrupan en bloques colapsables. Hay un botón "Resumir output" para cuando un comando escupe 2.000 líneas y solo quieres lo esencial.

![Resumen de output](images/screenshot-07.png)

**Corre pico.** Corre vim. Corre todo lo que un terminal debería correr, porque es un terminal.

![Editor de texto Pico corriendo dentro del Terminal](images/screenshot-08.png)

**Hasta corre el asistente de IA de Docker.** Las aplicaciones TUI interactivas completas funcionan sin problemas.

![Asistente de IA de Docker corriendo dentro del Terminal](images/screenshot-09.png)

![Asistente de IA de Docker vista expandida](images/screenshot-10.png)

**Corre Claude Code dentro de él.** Usé el terminal para correr Claude Code para construir más funciones para el terminal. Eso se sintió como un tipo muy específico de inception.

![Claude Code corriendo dentro del Terminal con la lista de tareas de Watchfire visible](images/screenshot-12.png)

## Instálalo

Esta es una app nativa, no un sitio web. Nada de deployment en Vercel aquí. Puedes descargar la última release desde la página de releases de GitHub, o usar los scripts de instalación:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.ps1 | iex
```

O compila desde el código fuente si quieres:

```bash
git clone https://github.com/nunocoracao/Vibe30-day27-terminal.git
cd Vibe30-day27-terminal
npm install
npm run tauri dev
```

Requiere Rust 1.77.2+ y Node.js 20+.

{{< github repo="nunocoracao/Vibe30-day27-terminal" showThumbnail=true >}}

## Los Números

- **19 tareas en Watchfire** desde la estructura inicial hasta la integración de funciones inteligentes
- **Tauri 2 + backend en Rust** con portable-pty para sesiones de shell reales
- **xterm.js con WebGL** para renderizado rápido
- **6+ temas de colores** incluyendo Dracula, Solarized y Monokai
- **Pipeline de CI/CD** con GitHub Actions compilando para macOS, Linux y Windows
- **Scripts de instalación** para las tres plataformas

## Veredicto del Día 27

Un emulador de terminal toca tantas capas. Gestión de PTY en Rust. IPC entre el backend en Rust y el frontend en JavaScript a través de Tauri. Renderizado WebGL para rendimiento. Builds multiplataforma y firma de código a través de CI/CD. Scripts de instalación que detectan tu SO y arquitectura.

Y luego, encima de todo eso, añadió funciones inteligentes. Sugerencias fantasma, búsqueda fuzzy, avisos de comandos peligrosos, integración con IA. Esto no son trucos. Los avisos de comandos peligrosos me resultaron genuinamente útiles cuando accidentalmente escribí algo destructivo durante las pruebas.

El hecho de que esto funcione es impresionante. El hecho de que funcione lo suficientemente bien como para que lo usara para correr Claude Code para construir más funciones de sí mismo es otra cosa completamente diferente. No voy a reemplazar iTerm con él mañana, pero la distancia entre "terminal vibe coded" y "terminal de producción" es más pequeña de lo que esperaba.

Día 27 de 30. Quedan tres más.

---

*Este es el día 27 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
