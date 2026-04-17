---
title: "30 Days of Vibe Coding - Día 6 - Pomodoro"
description: "Un temporizador Pomodoro para la terminal construido en Go con Bubble Tea, con arte ASCII, seguimiento de sesiones y estadísticas semanales."
summary: "Un temporizador Pomodoro para la terminal construido en Go con Bubble Tea, con arte ASCII, seguimiento de sesiones y estadísticas semanales."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-06", "go", "tui", "bubbletea"]
series: ["30 Days of Vibe Coding"]
series_order: 6
seriesOpened: false
date: 2026-04-11
draft: false
#type: "hidden"
---

Día 6. Hora de dejar el navegador atrás — y salir completamente de mi zona de confort.

Cada proyecto hasta ahora había sido TypeScript, React, Canvas. Lenguajes y frameworks que conozco. Hoy quise probar algo diferente: ¿qué pasa cuando le pido a la IA que construya con herramientas que nunca he tocado?

## El Prompt

> "Construye un temporizador Pomodoro para la terminal en Go usando Bubble Tea con una cuenta regresiva grande en ASCII, seguimiento de sesiones con SQLite, estadísticas diarias y semanales, etiquetas de tareas y duraciones personalizables."

Nunca he escrito Go. Nunca he usado Bubble Tea. Nunca he tocado Lip Gloss. No podría explicarte la diferencia entre una `goroutine` y un `channel` sin buscarlo. Todo el stack tecnológico de este prompt me es ajeno.

Ese era el punto. Cinco días construyendo juegos web en territorio familiar me hicieron preguntarme: ¿la IA solo es buena con cosas que yo ya entiendo? ¿Qué pasa si le doy un stack que ni siquiera puedo revisar correctamente?

## Cómo Se Construyó

[Watchfire](https://watchfire.io) tomó el prompt y lo descompuso de la misma manera que lo hizo con los proyectos en TypeScript. El hecho de que esto fuera Go en lugar de TypeScript no pareció importar. Eligió Bubble Tea para el framework TUI, Lip Gloss para el estilo, SQLite para la persistencia. Sin servidor web, sin wrapper de Electron, sin navegador. Solo un binario que puedes ejecutar desde cualquier lugar.

El proyecto llegó como un módulo Go limpio con 11 archivos fuente distribuidos en 6 paquetes: `main`, `ascii`, `config`, `db`, `stats`, `timer` y `ui`. Cada paquete tiene una responsabilidad clara. El paquete timer maneja la máquina de estados (inactivo, en ejecución, pausado, terminado). El paquete UI renderiza todo con Bubble Tea. El paquete de base de datos gestiona la persistencia con SQLite. El paquete stats agrega los datos de sesión para las vistas diarias y semanales.

Incluso vino con un script de instalación, un Makefile y flags de CLI adecuados usando un cargador de configuración personalizado que combina un archivo de configuración YAML con argumentos de línea de comandos. Yo no sabría cómo configurar nada de esto en Go por mi cuenta.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Temporizador Pomodoro listo para iniciar](images/screenshot-01.png)

**Números ASCII grandes.** La pantalla de cuenta regresiva usa dígitos personalizados con caracteres de bloque de 5 líneas de altura. Se pueden leer desde el otro lado de la habitación, que es precisamente el objetivo de un temporizador Pomodoro. Deberías poder echarle un vistazo y saber cuánto tiempo te queda.

![Temporizador en marcha con barra de progreso](images/screenshot-02.png)

**Sesiones con código de colores.** Las sesiones de trabajo brillan en rojo. Los descansos cortos se vuelven verdes. Los descansos largos tienen un tono diferente. Toda la interfaz cambia de color según la fase en la que estés, para que sepas de un vistazo si deberías estar trabajando o descansando.

![Descanso corto listo](images/screenshot-03.png)

**Registra todo.** Cada sesión se guarda en una base de datos SQLite local en `~/.pomo/sessions.db`. La barra de encabezado muestra tus estadísticas diarias en tiempo real: cuántos pomodoros has completado y el tiempo total de enfoque. Ejecuta `pomo stats` y obtienes un resumen semanal con gráficos de barras ASCII.

![Descanso corto en marcha](images/screenshot-04.png)

**El ciclo de sesiones funciona.** Cuatro sesiones de trabajo y luego un descanso largo. La insignia de progreso en la parte superior derecha muestra dónde estás en el ciclo (por ejemplo, `[WORK 1/4]`). Después de la cuarta sesión de trabajo, cambia automáticamente a un descanso largo de 15 minutos en lugar del habitual descanso corto de 5 minutos.

**Etiquetas de tareas.** Ejecuta `pomo -t "Escribir entrada del blog"` y el nombre de la tarea aparece en el encabezado. También se almacena en la base de datos, así que cuando consultes tus estadísticas más tarde, puedes ver en qué estabas trabajando realmente.

**Campana de terminal.** Cuando termina una sesión, suena la campana del terminal. Simple, efectivo, y funciona con cualquier sistema de notificaciones que soporte tu terminal.

## Los Reportes de Errores

Ninguno esta vez. El temporizador funcionó correctamente en la primera compilación. Iniciar, pausar, reanudar, saltar, reiniciar, las transiciones de sesión — todo funcionó como se esperaba. Los controles de teclado respondieron bien y la máquina de estados manejó los casos extremos de forma limpia.

## Los Números

- **11 archivos fuente en Go** distribuidos en 6 paquetes
- **1 archivo de pruebas** con tests para la máquina de estados del temporizador
- **4 tipos de sesión:** trabajo, descanso corto, descanso largo y las transiciones entre ellos
- **Persistencia con SQLite** para el historial de sesiones
- **Configuración YAML + CLI** con valores predeterminados razonables (ciclos de 25/5/15 minutos)
- **Tiempo total con las manos en la masa:** unos 20 minutos probando y ajustando el prompt

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day06-pomodoro" showThumbnail=true >}}

Instálalo con:

```bash
go install github.com/nunocoracao/Vibe30-day06-pomodoro@latest
```

O usa el script de instalación:

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day06-pomodoro/main/install.sh | bash
```

Luego simplemente ejecuta `pomo` en tu terminal.

## Veredicto del Día 6

Este proyecto respondió una pregunta que llevaba conmigo desde el día 1: ¿el desarrollo asistido por IA solo funciona cuando ya conoces el stack?

No. No es así. No sé escribir Go. No sé construir una TUI con Bubble Tea. No sabría cómo estructurar un módulo Go con seis paquetes, configurar los bindings de SQLite o escribir un Makefile para compilación cruzada. Pero la herramienta existe, funciona, y es algo que uso todos los días. Un único binario, sin dependencias en tiempo de ejecución, funciona en cualquier terminal.

Lo que más me sorprendió fue la arquitectura. Seis paquetes con límites bien definidos. Una máquina de estados adecuada para el temporizador. Un manejo elegante de la base de datos donde, si SQLite falla, el temporizador sigue funcionando — simplemente no obtienes las estadísticas. Ese es el tipo de decisión que tomaría un desarrollador senior, y surgió de un prompt escrito por alguien que no conoce el lenguaje.

Esto cambia lo que significa "no estándar". Si puedo lanzar una aplicación TUI pulida en Go sin saber Go, entonces la barrera para probar stacks tecnológicos desconocidos simplemente desapareció. El costo de la experimentación cayó a casi cero.

Seis días después y este es el primer proyecto que he mantenido en marcha después de escribir la entrada del blog.

---

*Este es el día 6 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras publico 30 proyectos en 30 días usando desarrollo asistido por IA.*
