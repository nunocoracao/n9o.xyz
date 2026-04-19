---
title: "30 Días de Vibe Coding - Día 13 - GitFolio"
description: "Un generador de portafolio GitHub que convierte cualquier nombre de usuario en un sitio de portafolio pulido con 5 plantillas y 7 temas de color."
summary: "Un generador de portafolio GitHub que convierte cualquier nombre de usuario en un sitio de portafolio pulido con 5 plantillas y 7 temas de color."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-13", "github", "portfolio", "nextjs", "react"]
series: ["30 Days of Vibe Coding"]
series_order: 13
seriesOpened: false
date: 2026-04-18
draft: false
#type: "hidden"
---

Día 13. ¿Y si pudieras convertir cualquier perfil de GitHub en un sitio de portafolio con buena pinta sin escribir una sola línea de código?

## El Prompt

> "Construye un generador de portafolio GitHub. Introduce un nombre de usuario, obtén un portafolio pulido con estadísticas, repos, lenguajes y actividad. Múltiples plantillas, múltiples temas de color, exportación a HTML."

## Cómo Se Construyó

Watchfire dividió esto en 19 tareas. El trabajo principal empezó con la integración de la API de GitHub y la recopilación de todos los datos que querrías en un portafolio: información de perfil, repos, actividad de contribuciones, lenguajes, organizaciones. A partir de ahí construyó el sistema de plantillas, el motor de temas, y todas las funcionalidades de exportación y compartición.

La lista de tareas cubrió mucho terreno: cinco plantillas de portafolio (Minimal, Developer Card, Creative/Bento Grid, Corporate/Showcase, y un tema Hacker/Terminal), siete temas de color, colores de acento personalizados, modo de impresión y PDF, habilidades detectadas automáticamente, guías de deployment, exportación de README, y un generador de tarjetas para compartir en redes sociales. Es un conjunto de funcionalidades sorprendentemente profundo para algo que corre enteramente en el navegador sin backend.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

La landing page ya tiene un aspecto pulido. Modo oscuro por defecto, tipografía limpia, un explicador en tres pasos, y una vista previa de todas las plantillas y temas directamente en la página principal.

![Landing page](images/screenshot-01.png)

![Tres pasos para tu portafolio](images/screenshot-02.png)

**Cinco plantillas, cada una con una personalidad distinta.** Showcase es la opción completa con un layout de cuadrícula bento. Developer Card es compacto y va al grano. Bento Grid apuesta por el look de tarjetas asimétricas. Minimal reduce todo a la tipografía. Y Terminal renderiza todo como una interfaz de línea de comandos, completa con arte ASCII y fuentes monoespaciadas.

![Selector de plantilla y tema](images/screenshot-03.png)

**Siete temas de color más colores de acento personalizados.** Midnight, Ocean, Forest, Sunset, Rose, Slate, y una opción personalizada donde eliges tu propio color de acento. La landing page incluso tiene una variante de modo claro.

![Landing en modo claro](images/screenshot-04.png)

**Los portafolios generados están repletos de datos.** Estadísticas con contadores animados, mapa de calor de contribuciones, desglose de lenguajes con un gráfico de barras apiladas, repositorios principales, actividad reciente, organizaciones, enlaces sociales. Todo extraído de la API pública de GitHub sin necesidad de autenticación.

![Plantilla Showcase con estadísticas](images/screenshot-05.png)

![Plantilla Minimal](images/screenshot-06.png)

**El panel de personalización es completo.** Puedes activar y desactivar secciones individuales, cambiar temas y plantillas en vivo, modificar el texto de la bio, y ver los cambios reflejados al instante. Todo sucede del lado del cliente así que no hay carga entre cambios.

![Panel de personalización](images/screenshot-07.png)

**La plantilla Bento Grid se ve genial.** Esta fue la que me sorprendió. Organiza información de perfil, estadísticas, repos destacados, actividad reciente y lenguajes en una cuadrícula de tarjetas asimétrica que se siente como un proyecto de diseño de verdad.

![Plantilla Bento Grid](images/screenshot-08.png)

**La plantilla Terminal es una locura.** Renderiza todo tu portafolio como si estuvieras ejecutando comandos en una terminal. La información de perfil aparece como una salida estilo fetch, las estadísticas se muestran como respuestas CLI, los repos se listan como entradas de directorio. Incluso tiene un cursor parpadeante.

![Plantilla Terminal](images/screenshot-09.png)

**Guías de deployment integradas.** Una vez que exportas el HTML de tu portafolio, un modal de deploy te guía paso a paso para alojarlo en Netlify Drop, GitHub Pages o Vercel. Instrucciones paso a paso con enlaces a cada plataforma. Este es el tipo de toque final que convierte una demo en algo que la gente puede usar de verdad.

![Modal de deploy - Netlify](images/screenshot-10.png)

![Modal de deploy - GitHub Pages](images/screenshot-11.png)

![Modal de deploy - Vercel](images/screenshot-12.png)

## Los Bugs Reportados

La API pública de GitHub te limita a 60 peticiones por hora sin autenticación, y cada generación de portafolio usa unas 4 peticiones. Durante las pruebas alcancé el límite de tasa varias veces al regenerar portafolios rápidamente. No es realmente un bug, solo una restricción que vale la pena conocer. La app lo maneja con elegancia y te dice que esperes.

El README menciona 6 temas y 4 plantillas, pero la app real viene con 5 plantillas y 7 temas. El código superó a la documentación, que es básicamente la historia de todo este desafío.

## Los Números

- **5 plantillas de portafolio** con layouts distintos
- **7 temas de color** más colores de acento personalizados
- **19 tareas Watchfire** desde integración de API hasta guías de deployment
- **Zero backend** necesario, todo corre del lado del cliente
- **4 llamadas a la API de GitHub** por generación de portafolio
- **Formatos de exportación:** descarga HTML, copia al portapapeles, enlace compartible, README y tarjeta de compartición social

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day13-githubportfolio" showThumbnail=true >}}

**[Genera Tu Portafolio](https://vibe30-day13-githubportfolio.vercel.app)**

Solo introduce cualquier nombre de usuario público de GitHub y elige una plantilla.

## Veredicto del Día 13

Este llena un vacío real. La mayoría de las herramientas de portafolio para developers o te exigen montar un proyecto entero o te atan a un diseño específico. GitFolio simplemente toma un nombre de usuario y te da un archivo HTML autónomo que puedes alojar en cualquier sitio. La variedad de plantillas es sólida, el tema Terminal solo ya merece la pena probarlo, y las guías de deployment eliminan el último punto de fricción entre generar un portafolio y realmente ponerlo en línea.

El hecho de que corra enteramente en el navegador sin autenticación, sin base de datos y sin tracking es un buen detalle. Podrías darle esta URL a alguien que nunca ha tocado una terminal y tendría un sitio de portafolio en línea en cinco minutos.

Si la mejora en la calidad del output se debe a que estoy mejorando en los prompts o a que las herramientas están mejorando en inferir lo que quiero, no estoy seguro. Probablemente ambas cosas.

---

*Este es el día 13 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sigue la serie mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
