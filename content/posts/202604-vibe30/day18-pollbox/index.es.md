---
title: "30 Días de Vibe Coding - Día 18 - PollBox"
description: "Una app de votación en tiempo real con resultados animados en vivo, impulsada por Firebase y construida en un día."
summary: "Una app de votación en tiempo real con resultados animados en vivo, impulsada por Firebase y construida en un día."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-18", "nextjs", "firebase", "react", "typescript"]
series: ["30 Days of Vibe Coding"]
series_order: 18
seriesOpened: false
date: 2026-04-23
draft: false
#type: "hidden"
---

Día 18. Quería algo colaborativo. Algo donde pudieras compartir un link e inmediatamente ver a otras personas interactuando con él. Una app de encuestas en tiempo real parecía la opción correcta.

## El Prompt

> "Construye una app de creación y votación de encuestas en tiempo real. Los usuarios deben poder crear encuestas con múltiples opciones, compartirlas por link, y ver los resultados actualizarse en vivo con gráficos de barras animados."

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://vibe30-day18-pollbox.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

[Watchfire](https://watchfire.io) dividió esto en 31 tareas. Es bastante para una app de encuestas, pero la lista de funcionalidades creció rápido una vez que empiezas a pensar en todas las pequeñas cosas que hacen que una experiencia de votación se sienta completa.

Lo esencial vino primero: integración con la base de datos en tiempo real de Firebase, flujo de creación de encuestas, mecánicas de votación y la vista animada de resultados. Después se fueron añadiendo capas con todo lo demás. Categorías y plantillas para creación rápida de encuestas. Mejoras de accesibilidad. Skeletons de carga para que la app no muestre contenido vacío. Una página 404 como debe ser. Y por supuesto, la habitual ronda de correcciones de deployment al final.

La integración con Firebase fue la columna vertebral de todo. Firestore maneja la persistencia, los listeners en tiempo real envían actualizaciones de votos a cada cliente conectado, y la autenticación anónima significa que nadie tiene que crear una cuenta solo para votar en algo.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

El flujo de creación es sorprendentemente completo para algo construido en un día.

![Formulario de creación de encuesta](images/screenshot-02.png)

Tienes un título, descripción, etiquetas de categoría, múltiples opciones e incluso un selector de tema de colores. También hay soporte para imagen de portada, encuestas programadas, protección con contraseña y fechas de expiración. En la parte inferior, hay plantillas para tipos comunes de encuestas como "Sí o No", "Califica del 1 al 5" y "Votación de Equipo" para que puedas saltarte toda la configuración.

![Opciones de creación con temas y plantillas](images/screenshot-03.png)

La página de resultados es donde se pone divertido. Después de votar, las barras se animan, la opción ganadora se destaca y confetti explota por toda la pantalla.

![Resultados en vivo con confetti](images/screenshot-05.png)

Cada página de encuesta también tiene reacciones con emoji, una sección de comentarios, links para compartir con generación de código QR y opciones de exportación tanto para datos CSV como imágenes. Es mucha superficie.

![Resultados de votación de equipo](images/screenshot-06.png)

![Resultados de encuesta de calificación](images/screenshot-07.png)

El dashboard "Mis Encuestas" mantiene el registro de todo lo que has creado, con búsqueda y filtros por categoría. Cada encuesta muestra su estado, número de opciones, número de votos y tiene un botón de duplicar para reutilización rápida.

![Dashboard Mis Encuestas](images/screenshot-01.png)

## Los Bug Reports

La ronda de deployment fue el principal punto de dolor. La configuración de Firebase necesitó ajustes para producción y hubo los típicos problemas específicos de Vercel que resolver. Nada inusual para un proyecto que depende de servicios externos. La imposición de un voto por usuario necesitó transacciones de Firestore para funcionar correctamente, lo cual tomó algo de iteración hasta quedar bien.

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day18-pollbox" showThumbnail=true >}}

**[Prueba PollBox](https://vibe30-day18-pollbox.vercel.app)**

Crea una encuesta y comparte el link. No necesitas cuenta.

## Veredicto del Día 18

La lista de funcionalidades aquí es densa. Una app de votación en tiempo real con Firebase, resultados animados, compartir por QR, reacciones con emoji, comentarios, exportación CSV, exportación de imágenes, plantillas, categorías, protección con contraseña y un dashboard. Esa es una lista de funcionalidades de producción metida en un solo día.

La parte de tiempo real es lo que hace que se sienta vivo. Compartes un link, alguien vota y las barras se mueven en tu pantalla. Sin necesidad de refrescar. Los listeners en tiempo real de Firebase más las animaciones de Framer Motion hacen que todo se sienta responsivo y pulido de una forma que los resultados estáticos nunca podrían.

31 tareas en Watchfire, y la profundidad se nota.

---

*Este es el día 18 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sigue el progreso mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
