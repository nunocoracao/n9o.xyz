---
title: "30 Días de Vibe Coding - Día 29 - n0ti0n"
description: "Un editor de bloques inspirado en Notion con páginas anidadas, comandos slash y sincronización en tiempo real vía Firebase Firestore"
summary: "Un editor de bloques inspirado en Notion con páginas anidadas, comandos slash y sincronización en tiempo real vía Firebase Firestore"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-29"]
series: ["30 Days of Vibe Coding"]
series_order: 29
seriesOpened: false
date: 2026-05-04
draft: false
#type: "hidden"
---

Día 29. Queda un día después de este. Así que cloné Notion.

No todo. Pero la experiencia central: un editor de bloques con páginas anidadas, comandos slash y una barra lateral limpia para navegación. El resultado es n0ti0n. El frontend se armó rápido. El despliegue fue otra historia.

## El Prompt

> "Construye un editor de bloques inspirado en Notion con páginas anidadas, comandos slash, formato de texto enriquecido, bloques de código con resaltado de sintaxis, tablas, listas de tareas y una barra lateral para navegación. Usa Tiptap para el editor, Firebase Firestore para persistencia en tiempo real, autenticación anónima para que cualquiera pueda probarlo, y modo oscuro."

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://blocknotes-lime.vercel.app)
{{< /alert >}}

## Lo Que Obtuve

El editor usa Tiptap 3, que es un framework fantástico de editor basado en bloques, y me dio casi todo lo que quería de entrada con las extensiones correctas. Tienes comandos slash que aparecen cuando escribes `/`, permitiéndote insertar encabezados, listas, bloques de código, tablas, listas de tareas, divisores e incluso páginas anidadas. Selecciona cualquier texto y aparece un menú flotante con opciones de formato inline como negrita, cursiva, tachado, resaltado y enlaces.

![Página de bienvenida con navegación en barra lateral y resumen de funcionalidades](images/screenshot-02.png)

La barra lateral es donde las páginas anidadas realmente brillan. Puedes crear páginas dentro de páginas, y la estructura de árbol aparece en el panel izquierdo con secciones colapsables. Hay una paleta de búsqueda/comandos (Cmd+K) que te permite saltar entre páginas rápidamente, alternar el modo claro o crear nuevas páginas al vuelo.

![Navegación en barra lateral con árbol de páginas colapsable](images/screenshot-05.png)

También hay plantillas incorporadas. Cuando creas una nueva página, puedes elegir entre plantillas preconstruidas como itinerarios de viaje, notas de reunión o planes de proyecto. Cada plantilla viene prellenada con una estructura útil.

![Selector de plantillas para nuevas páginas](images/screenshot-06.png)

El menú de comandos slash en sí es limpio y funcional. Escribe `/` en cualquier lugar del editor y aparece un desplegable con todos los tipos de bloque: encabezados, texto, listas con viñetas, listas numeradas, listas de tareas, bloques de código, tablas, citas, divisores, imágenes y páginas anidadas.

![Menú de comandos slash con opciones de tipos de bloque](images/screenshot-10.png)

Las páginas se pueden compartir en la web con un toggle, y hay opciones de exportación para Markdown y JSON. Todo es responsivo también, funcionando bien en móvil.

![Funcionalidad de compartir en la web](images/screenshot-14.png)

![Opciones de exportación incluyendo Markdown y JSON](images/screenshot-16.png)

![Vista móvil del editor](images/screenshot-17.png)

Todo se sincroniza en tiempo real a través de Firebase Firestore con autenticación anónima, así que cualquiera puede abrir la app y empezar a escribir sin crear una cuenta.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## La Saga de Firestore

Aquí está lo importante de este proyecto que realmente vale la pena comentar en detalle. El editor en sí se armó de forma relativamente fluida. Tiptap está bien documentado, las extensiones son modulares, y Claude manejó la integración sin necesitar mucha guía. El verdadero desafío fue hacer que Firestore funcionara correctamente en producción.

El git log de este proyecto es salvaje. Hay docenas de commits solo depurando problemas de despliegue de Firestore. Configuración de long polling, ajustes de caché, fallbacks a REST API, limpieza de variables de entorno, manejo de timeouts de conexión... fue un desfile de problemas pequeños y dolorosos que solo aparecían después de desplegar en Vercel.

Localmente todo funcionaba perfectamente. Pero en producción, las conexiones de Firestore se colgaban, los datos no cargaban, o la app fallaba silenciosamente al sincronizar. Cada corrección llevaba a descubrir el siguiente problema. Limpiar espacios en blanco de las variables de entorno arregló un problema. Cambiar de WebSocket a long polling arregló otro. Ajustar la configuración de caché arregló un tercero. Fue una situación clásica de "funciona en mi máquina" repartida en probablemente 15-20 commits.

Esto es honestamente una de las partes más realistas de todo el desafío. Construir la UI es la parte divertida. Hacer que realmente funcione en producción con un backend real es donde se va el tiempo. Y con coding asistido por IA, el loop de depuración es interesante porque Claude puede sugerir correcciones rápidamente, pero todavía necesitas desplegar, probar e iterar. El ciclo de feedback es más lento que el desarrollo local sin importar lo rápida que sea la IA.

[Watchfire](https://watchfire.io) detectó los problemas de despliegue casi inmediatamente, lo que al menos me ahorró descubrirlos días después a través de reportes de usuarios.

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day29-n0ti0n" showThumbnail=true >}}

**[Demo en Vivo](https://blocknotes-lime.vercel.app)**

![Editor con notas, listas, elementos de tareas y bloques de código](images/screenshot-01.png)

![Barra de formato al seleccionar texto](images/screenshot-03.png)

![Paleta de comandos para navegación rápida](images/screenshot-13.png)

![Plantilla de itinerario de viaje en modo claro](images/screenshot-15.png)

## Veredicto del Día 29

Un editor de bloques con persistencia real, páginas anidadas y una UI limpia es algo que la gente realmente necesita. Tiptap 3 hizo gran parte del trabajo pesado en el lado del editor, y Firebase manejó el backend, pero conectar todo junto y especialmente hacer que el despliegue se comportara requirió esfuerzo real. La saga de depuración de Firestore es un buen recordatorio de que la parte difícil de entregar software rara vez es el código de las funcionalidades. Es la infraestructura, los casos extremos y las cosas que solo se rompen en producción. Queda un día más.

---

*Este es el día 29 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sígueme mientras lanzo 30 proyectos en 30 días usando coding asistido por IA.*
