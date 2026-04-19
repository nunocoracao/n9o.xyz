---
title: "30 Días de Vibe Coding - Día 14 - WeatherTUI"
description: "Un panel meteorológico para terminal con escenas en ASCII art, efectos animados y soporte para múltiples ubicaciones."
summary: "Un panel meteorológico para terminal con escenas en ASCII art, efectos animados y soporte para múltiples ubicaciones."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-14", "python", "tui", "weather", "textual"]
series: ["30 Days of Vibe Coding"]
series_order: 14
seriesOpened: false
date: 2026-04-19
draft: false
#type: "hidden"
---

Día 14. Quería ver cómo se ve una app del tiempo cuando le quitas todos los frameworks de UI modernos y lo fuerzas todo a un terminal.

## El Prompt

> "Construye un panel meteorológico para terminal con escenas en ASCII art, efectos animados del tiempo y soporte para múltiples ubicaciones"

## Cómo Se Construyó

Usé [Watchfire](https://watchfire.io) y dividió el trabajo en 23 tareas. Suena a mucho para una app del tiempo, pero el alcance creció rápido en cuanto entraron el ASCII art y las animaciones.

La lista de tareas cubrió primero lo esperado: configuración del proyecto, integración con la API Open-Meteo, layout básico. Luego entró en la parte divertida: 12 escenas únicas en ASCII art (sol, luna, lluvia, nieve, tormenta, niebla, viento, nubes), efectos animados basados en partículas para cada condición meteorológica, gráficos de temperatura y precipitación, vistas de pronóstico por hora y por día, un panel con múltiples ubicaciones, temas de colores, soporte para ratón y un layout con scroll.

23 tareas. No me quedé ahí guiando cada una. Watchfire las puso en cola y fue trabajando mientras yo hacía otras cosas.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

Este me sorprendió más que la mayoría.

![Vista enfocada con detalles meteorológicos](images/screenshot-10.png)

**El ASCII art es genuinamente impresionante.** Cada condición meteorológica tiene su propia escena. Hay un cielo cubierto con capas de nubes, lluvia con gotas cayendo, nieve con copos flotando, un sol con rayos radiando. El arte es detallado y llena el terminal con verdadero carácter. No es ese ASCII art perezoso tipo "está lloviendo: //". Escenas reales multilínea con sombreado y profundidad.

**Las animaciones son fluidas.** Las gotas de lluvia caen. Los copos de nieve flotan. Las estrellas titilan en el cielo nocturno. Partículas de viento soplan por la pantalla. Los relámpagos brillan durante las tormentas. Todo esto pasando en un terminal. Puedes pausar y reanudar las animaciones con una sola tecla.

![Panel con múltiples ubicaciones](images/screenshot-02.png)

**El panel está limpio.** Múltiples ubicaciones mostradas en una cuadrícula, cada una con un pequeño icono ASCII del tiempo, temperatura actual y condiciones de un vistazo. Haz clic en cualquier tarjeta o pulsa una tecla numérica para saltar a la vista detallada de esa ubicación.

![Vista enfocada para Nueva York](images/screenshot-08.png)

**La vista de detalle lo tiene todo.** Índice de calidad del aire, horas de amanecer/atardecer, índice UV con código de colores, barra de humedad, velocidad y dirección del viento, cobertura de nubes, desglose de precipitación (lluvia vs nieve). Más un pronóstico de 7 días en la parte inferior con mini ASCII art para cada día. También puedes cambiar a una vista horaria de 12 horas.

![Búsqueda de ubicación](images/screenshot-03.png)

![Resultados de búsqueda para Lisboa](images/screenshot-04.png)

**La gestión de ubicaciones funciona bien.** Busca cualquier ciudad del mundo, añádela a tu panel, reordena ubicaciones, establece una predeterminada. La búsqueda de geocodificación devuelve resultados rápidamente y la interfaz de selección es limpia.

![Panel con cuatro ubicaciones](images/screenshot-05.png)

**Cuatro temas de colores.** Predeterminado, océano (azules y cianes), atardecer (naranjas cálidos) y bosque (verdes y tonos tierra). Pulsa `t` para alternar entre ellos. Tu preferencia se guarda en un archivo de configuración.

![Selector de temas](images/screenshot-06.png)

![Tema océano aplicado](images/screenshot-07.png)

**Sin necesidad de clave de API.** Usa la API gratuita Open-Meteo, así que clonas el repo, instalas dependencias y ejecutas. Sin registro, sin tokens, sin configuración necesaria.

## Los Números

- **12 escenas únicas en ASCII art** con efectos animados correspondientes
- **4 temas de colores** con preferencias persistentes
- **23 tareas en Watchfire** desde la configuración hasta el pulido final
- **Construido con Python y Textual** (el framework TUI de Textualize)
- **Tiempo total hands-on:** quizás 20 minutos probando diferentes ciudades y alternando entre temas

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day14-weathertui" showThumbnail=true >}}

Clona el repo y ejecuta `python -m weather_tui`. Sin necesidad de clave de API. Teclas de flecha para navegar, teclas numéricas para saltar entre ubicaciones, `t` para cambiar temas, `?` para la lista completa de atajos.

## Veredicto del Día 14

Solo el ASCII art me habría llevado días diseñarlo a mano. Los efectos animados del tiempo encima de eso? Ni siquiera lo habría intentado.

Lo que me impresiona es la atención al detalle. Las tarjetas de pronóstico de 7 días tienen cada una su propio icono ASCII del tiempo en miniatura. La humedad se muestra como una barra de progreso. El viento incluye velocidad y dirección de brújula. El índice UV cambia de color según la severidad. Nada de eso fue especificado explícitamente. Simplemente entendió que un panel meteorológico necesita estas cosas y las construyó todas.

Las apps de terminal parecen ser un punto ideal para el coding asistido por IA. Las restricciones de una interfaz basada en texto ayudan a enfocar el resultado en lugar de limitarlo.

---

*Este es el día 14 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando coding asistido por IA.*
