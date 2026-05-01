---
title: "30 Días de Vibe Coding - Día 26 - PixelForge"
description: "Un lienzo colaborativo de pixel art con dibujo en tiempo real, múltiples tamaños de cuadrícula y un conjunto completo de herramientas creativas."
summary: "Un lienzo colaborativo de pixel art con dibujo en tiempo real, múltiples tamaños de cuadrícula y un conjunto completo de herramientas creativas."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-26", "pixel-art", "firebase", "collaboration"]
series: ["30 Days of Vibe Coding"]
series_order: 26
seriesOpened: false
date: 2026-05-01
draft: false
#type: "hidden"
---

Día 26. Quería construir algo colaborativo, algo donde la gente pudiera realmente crear junta en tiempo real. Así que me decanté por un lienzo de pixel art.

## El Prompt

El punto de partida fue simple:

> "Construye un lienzo colaborativo de pixel art donde múltiples usuarios puedan dibujar juntos en tiempo real."

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://vibe30-day26-pixelforge.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

[Watchfire](https://watchfire.io) dividió esto en 13 tareas, que es bastante para un proyecto de un solo día. Pero los editores de pixel art tienen una cantidad sorprendente de piezas móviles una vez que empiezas a pensar en todas las herramientas que la gente espera.

Las primeras tareas cubrieron la base: configurar el lienzo con Firebase Realtime Database para la sincronización, añadir tamaños de cuadrícula seleccionables (16x16, 32x32, 64x64) y construir una paleta de 32 colores con un selector de colores personalizado. A partir de ahí se ramificó hacia las herramientas de dibujo propiamente dichas: lápiz, borrador y relleno por inundación.

Y luego siguió. Soporte para deshacer/rehacer. Un modo de simetría para crear diseños reflejados. Herramientas de formas para rectángulos y líneas. Tamaños de pincel ajustables. Plantillas de lienzo para no tener que empezar desde cero cada vez. Una función de timelapse que reproduce cómo se dibujó el lienzo. Un feed de actividad que muestra lo que otros usuarios están haciendo. Una herramienta de selección para mover y copiar regiones. Un sistema de 2 capas con capas de primer plano y fondo. Y finalmente, opciones de exportación para sacar tu arte como PNG en varios tamaños.

Trece tareas. Eso es una aplicación de dibujo completa.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Página de inicio de PixelForge con plantillas y lienzos recientes](images/screenshot-01.png)

La página de inicio ya marcó el tono. Muestra plantillas iniciales (corazón, espada, smiley, árbol) y una galería de lienzos recientes que otros usuarios han creado. Puedes saltar a cualquiera de ellos o crear uno nuevo desde cero.

![Editor de lienzo con barra de herramientas y panel de capas](images/screenshot-02.png)

En la parte superior tienes la barra de herramientas completa: lápiz, borrador, relleno, línea, rectángulo, círculo y herramientas de selección. A la izquierda está la paleta de colores expandida con el selector personalizado. A la derecha está el panel de capas con las capas de primer plano y fondo, cada una con controles de visibilidad.

![Pixel art siendo dibujado en el lienzo](images/screenshot-03.png)

Dibujar se siente responsivo. Cada clic de píxel se sincroniza a través de Firebase para que cualquier persona en la misma URL del lienzo vea los cambios inmediatamente. Las líneas de la cuadrícula te ayudan a ser preciso, y el nivel de zoom se ajusta bien para diferentes tamaños de cuadrícula.

![Reproducción de timelapse](images/screenshot-04.png)

La función de timelapse es una de esas cosas que no esperaba que funcionara tan bien. Graba cada píxel colocado y puede reproducir todo el proceso de dibujo de principio a fin. Tienes controles de reproducción y opciones de velocidad.

![Timelapse en acción con un lienzo colorido](images/screenshot-05.png)

Ver una pieza compleja tomar forma píxel a píxel es extrañamente satisfactorio. También sirve como una buena manera de ver cómo otras personas abordan sus dibujos.

![Diálogo de exportación con opciones de formato y tamaño](images/screenshot-06.png)

El diálogo de exportación te da opciones reales. Puedes establecer un fondo transparente, elegir entre múltiples tamaños de salida (1x, 2x, 4x, 8x) y exportar como PNG, SVG o copiar directamente al portapapeles. Para una herramienta de pixel art, tener el escalado integrado es importante ya que nadie quiere un PNG de 16x16 a tamaño real.

![Plantilla de corazón dibujada con sombreado](images/screenshot-07.png)

Las plantillas son un toque agradable. Esta plantilla de corazón viene precargada para que puedas empezar a añadir detalle y sombreado de inmediato en vez de dibujar el contorno desde cero. El sistema de 2 capas significa que puedes mantener la plantilla en la capa de fondo y pintar en el primer plano sin preocuparte por estropear la forma base.

![Galería de lienzos recientes](images/screenshot-09.png)

La sección de lienzos recientes en la página de inicio funciona como una galería comunitaria. Puedes ver lo que otros han hecho, y cada lienzo muestra su tamaño de cuadrícula. Corazones, caras, espadas, árboles... la gente gravita naturalmente hacia los mismos tipos de temas de pixel art.

## Los Reportes de Bugs

Los principales problemas que encontré durante las pruebas:

- El relleno por inundación en cuadrículas más grandes (64x64) podía sentirse lento al sincronizar cada píxel cambiado individualmente. Necesitaba actualizaciones por lotes.
- El modo de simetría no siempre alineaba correctamente en tamaños de cuadrícula pares al principio.
- El dibujo táctil en móvil necesitó algo de trabajo para evitar que la página hiciera scroll mientras intentabas dibujar.
- El cambio de capas no siempre era visualmente obvio, así que era fácil dibujar en la capa equivocada sin darte cuenta.

## Los Números

- **13 tareas Watchfire** desde el lienzo inicial hasta las opciones de exportación
- **3 tamaños de cuadrícula** con sincronización en tiempo real en todos ellos
- **Paleta de 32 colores** más selector de colores personalizado
- **8 herramientas de dibujo** incluyendo formas y selección
- **Sistema de 2 capas** con visibilidad independiente
- **Firebase Realtime Database** manejando toda la colaboración

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day26-pixelforge" showThumbnail=true >}}

**[Prueba PixelForge](https://vibe30-day26-pixelforge.vercel.app)**

Crea un lienzo y comparte el enlace. Cualquier persona con la URL puede dibujar contigo.

## Veredicto del Día 26

Un lienzo de pixel art suena simple, pero una vez que añades capas, simetría, plantillas, timelapse y colaboración en tiempo real, estás ante una herramienta creativa legítima.

La integración con Firebase es el corazón de todo. Cada cambio de píxel pasa por la Realtime Database, lo que significa que varias personas pueden genuinamente dibujar en el mismo lienzo al mismo tiempo. Sin polling, sin botón de refresh, solo actualizaciones en directo. Las 13 tareas se unieron en algo cohesivo a partir de un único prompt.

¿Va a reemplazar a Aseprite o Piskel? No. Pero para sesiones rápidas y colaborativas de pixel art, cumple con el trabajo. Y solo la reproducción de timelapse ya hace que valga la pena probarlo. Hay algo realmente divertido en ver una cuadrícula vacía convertirse en arte, un píxel a la vez.

---

*Este es el día 26 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
