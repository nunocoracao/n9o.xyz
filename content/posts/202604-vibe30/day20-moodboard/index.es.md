---
title: "30 Días de Vibe Coding - Día 20 - MoodBoard"
description: "Un mood board colaborativo donde cualquiera puede fijar imágenes, enlaces y notas en un lienzo compartido con actualizaciones en tiempo real."
summary: "Un mood board colaborativo donde cualquiera puede fijar imágenes, enlaces y notas en un lienzo compartido con actualizaciones en tiempo real."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-20", "firebase", "collaboration", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 20
seriesOpened: false
date: 2026-04-25
draft: false
#type: "hidden"
---

Día 20. Quería un lienzo compartido donde un grupo de personas pudiera lanzar imágenes, enlaces y notas contra una pared y ver qué se queda. Literalmente.

## El Prompt

> "Construye una app de mood board colaborativo. Cualquiera con el enlace puede fijar imágenes, notas de texto y enlaces en un lienzo compartido. Sincronización en tiempo real, autenticación anónima, diseño libre."

Esa fue la semilla. [Watchfire](https://watchfire.io) lo dividió en 7 tareas que lo llevaron de un esqueleto básico de Firebase a un pinboard colaborativo completo.

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://vibe30-day20-moodboard.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

Siete tareas, cada una añadiendo una nueva capa:

1. Sincronización en tiempo real con Firebase como base
2. Tres tipos de pins: notas adhesivas de texto, subida de imágenes y tarjetas de enlaces con vista previa OG
3. Arrastrar para organizar los pins en un lienzo libre
4. Etiquetas de color en los pins para agrupar visualmente
5. Zoom y pan más redimensionamiento de pins para controlar el lienzo
6. Bloqueo de tablero para que el creador pueda congelar un board en modo lectura, y exportación a PNG
7. Presencia de cursores para ver dónde están pasando el ratón las otras personas, más un pase de rediseño visual

La progresión tenía sentido. No puedes arrastrar pins antes de que existan, y no vale la pena preocuparte por el pulido visual hasta que las interacciones principales funcionen.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

Este encajó de inmediato.

![Página de inicio de MoodBoard](images/screenshot-02.png)

**La página de inicio marca el tono.** Logo grande, pins de ejemplo dispersos en el fondo, un botón para crear un tablero. Sin registro, sin cuenta, sin fricción. Haces clic en "Create New Board" y ya estás dentro.

![Tablero vacío listo para pins](images/screenshot-03.png)

**Un tablero nuevo es un lienzo en blanco.** Fondo oscuro con una rejilla de puntos sutil. La barra de herramientas es mínima — solo opciones para bloquear, exportar y copiar la URL de compartir en la esquina superior derecha. El botón de acción flotante en la esquina inferior derecha abre el selector de tipo de pin.

![Selector de tipo de pin](images/screenshot-04.png)

**Tres tipos de pins cubren lo esencial.** Texto para notas adhesivas, imagen para subidas y enlace para tarjetas de URL. Pulsa el botón de más, elige tu tipo y suéltalo en el lienzo. Lo suficientemente simple para que cualquiera con el enlace lo entienda sin instrucciones.

![Nota adhesiva de texto en el lienzo](images/screenshot-05.png)

**Las notas adhesivas parecen notas adhesivas de verdad.** Tienen esa sensación ligeramente inclinada, como de papel. Puedes escribir lo que quieras, elegir un color y arrastrarlas donde quieras. El color melocotón sobre un lienzo oscuro queda sorprendentemente bien.

![Diálogo de subida de imagen](images/screenshot-06.png)

**La subida de imágenes es directa.** Aparece un modal, eliges un archivo y se sube a Firebase Storage. La imagen aparece como un pin en el lienzo que puedes arrastrar y redimensionar como todo lo demás.

![Tablero con contenido mixto](images/screenshot-07.png)

**Mezcla todo y empieza a parecer un mood board de verdad.** Imágenes, notas adhesivas, diferentes tamaños. Puedes arrastrar las cosas para encontrar disposiciones que funcionen. El lienzo libre significa que nada está atado a una cuadrícula, así que consigues esa sensación orgánica de collage.

![Tablero completo con tarjetas de enlaces](images/screenshot-08.png)

**Las tarjetas de enlaces extraen metadatos OG.** Pega una URL y obtiene el título, descripción e imagen de vista previa. La tarjeta de Watchfire, la de Blowfish, la de OpenClaw, todas se renderizaron bien con su branding intacto. Quedan mucho mejor que simplemente pegar una URL cruda.

## Los Bug Reports

La colaboración en tiempo real siempre tiene casos extremos:

- La presencia de cursores a veces parpadeaba cuando varios usuarios se movían rápido
- Las subidas de imágenes muy grandes podían hacer que el lienzo fuera lento hasta que la imagen terminara de cargar
- La exportación a PNG a veces se perdía pins que estaban lejos del centro del viewport

Nada que rompiera la experiencia, pero el tipo de problemas de pulido que querrías resolver antes de lanzar esto para uso real.

## Los Números

- **7 tareas Watchfire** desde el setup de Firebase hasta el rediseño visual
- **Stack Firebase:** Anonymous Auth, Firestore para sincronización en tiempo real, Storage para subida de imágenes
- **Next.js 15 + Tailwind CSS 4** en el frontend
- **html2canvas** para la funcionalidad de exportación a PNG
- **Tres tipos de pins:** texto, imagen, enlace (con vista previa OG)
- **Funcionalidades colaborativas:** sincronización en tiempo real, presencia de cursores, bloqueo de tablero

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day20-moodboard" showThumbnail=true >}}

**[Abrir MoodBoard](https://vibe30-day20-moodboard.vercel.app)**

Crea un tablero y comparte el enlace. Cualquiera puede fijar contenido en él.

## Veredicto del Día 20

Dos tercios del reto completados. El Día 10 fue un clon de Miro sin colaboración. El Día 20 es un mood board con sincronización en tiempo real completa. Eso se siente como progreso.

La integración con Firebase es lo que hace que este funcione. La autenticación anónima significa cero fricción para unirse a un tablero. Los listeners en tiempo real de Firestore hacen que los pins aparezcan instantáneamente para todos. La presencia de cursores significa que puedes ver que alguien más está ahí contigo. Estas son las funcionalidades que convierten un lienzo individual en un espacio compartido.

Lo que más me sorprendió fueron las tarjetas de enlaces. Pegar una URL y obtener una tarjeta bien formateada con el branding del sitio, descripción e imagen de vista previa hizo que los tableros se sintieran inmediatamente más ricos. Esa única funcionalidad lo transformó de "un sitio para poner notas adhesivas" en algo que realmente usarías para recopilar y compartir referencias para un proyecto.

Siete tareas fue un alcance ajustado para una app colaborativa en tiempo real. Pero cada tarea construyó sobre la anterior de forma limpia, y el producto final se siente cohesivo. Nada mal para el día 20.

---

*Este es el día 20 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
