---
title: "30 Días de Vibe Coding - Día 24 - Reblog"
description: "Un rediseño moderno de mi blog personal, reconstruido de Hugo/Blowfish a Astro + Tailwind CSS con búsqueda fuzzy, modo oscuro y tipografía personalizada."
summary: "Un rediseño moderno de mi blog personal, reconstruido de Hugo/Blowfish a Astro + Tailwind CSS con búsqueda fuzzy, modo oscuro y tipografía personalizada."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-24", "astro", "tailwind", "blog", "redesign"]
series: ["30 Days of Vibe Coding"]
series_order: 24
seriesOpened: false
date: 2026-04-29
draft: false
#type: "hidden"
---

Día 24. Reconstruí mi propio blog.

Este es personal. Mi blog en [n9o.xyz](https://n9o.xyz) ha estado funcionando con Hugo y mi propio tema, [Blowfish](https://blowfish.page), durante años. Yo construí Blowfish, yo lo mantengo, miles de personas lo usan. Pero llevo tiempo queriendo cambiar a algo diferente. Una identidad visual fresca, un stack diferente, algo que se sienta más como yo y menos como un tema que hice para todos los demás.

Así que el proyecto de hoy fue Reblog: un rediseño desde cero de n9o.xyz, reconstruido de Hugo a Astro 5 con Tailwind CSS.

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://vibe30-day24-reblog.vercel.app)
{{< /alert >}}

## El Prompt

Esto no fue un solo prompt. Fueron 18 tareas de [Watchfire](https://watchfire.io) a lo largo del día. La dirección inicial fue algo como:

> "Construye un blog personal con Astro 5, Tailwind CSS y MDX. Modo oscuro, posts destacados, filtrado por tags, búsqueda fuzzy, una página de currículum, una página de música y una página de proyectos. Tipografía personalizada con Sora, Crimson Pro y JetBrains Mono."

A partir de ahí fue un proceso iterativo. Ajustes de layout, retoques de colores, agregar datos estructurados, arreglar estilos de impresión, conectar el soporte de series para contenido en varias partes. El tipo de trabajo que normalmente toma semanas de ida y vuelta entre diseño y código.

## Lo Que Obtuve

Una plataforma de blog completa con seis secciones distintas.

![Homepage en modo oscuro](images/screenshot-01.png)

**La homepage** tiene una sección hero con mi foto, título, bio y enlaces sociales. Debajo, una sección de posts destacados con tarjetas grandes, luego una cuadrícula de posts recientes. Limpio, centrado y cálido. El modo oscuro usa una paleta apagada de verde oliva marrón que realmente me gusta bastante. No es el típico gris oscuro o negro puro.

![Sección de posts destacados](images/screenshot-02.png)

![Cuadrícula de posts recientes](images/screenshot-03.png)

**La página de posts** tiene filtrado por tags en la parte superior. Haces clic en un tag, la lista se filtra al instante. Sin recargar la página, sin viaje al servidor. Solo Astro haciendo lo suyo.

![Todos los posts con filtrado por tags](images/screenshot-05.png)

**La búsqueda fuzzy** funciona con Fuse.js. Se carga del lado del cliente y busca en títulos, descripciones y tags. Esta es una de las pocas islas interactivas en un sitio que por lo demás tiene cero JS. La arquitectura de islas de Astro significa que el componente de búsqueda se hidrata por su cuenta sin arrastrar un framework para toda la página.

**La página sobre mí** incluye mi bio, enlaces y un apartado de mentoría. La página de currículum lista mi trayectoria profesional con logos de empresas y progresión de roles. Ambas son limpias y legibles.

![Página sobre mí](images/screenshot-04.png)

![Página de currículum](images/screenshot-07.png)

**La página de proyectos** muestra trabajo open source con badges de estado, tags de tecnología y enlaces a repos y sitios web.

![Página de proyectos](images/screenshot-06.png)

**La página de música** es una cuadrícula de portadas de álbumes de tracks que he lanzado bajo el nombre N9O. Cada una enlaza a plataformas de streaming. Esta es una página que nunca tuve en la versión de Hugo y siempre quise tener.

![Página de música](images/screenshot-08.png)

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Modo Claro

Todo también funciona en modo claro con detección de preferencia del sistema. Mismo layout, paleta diferente.

![Homepage en modo claro](images/screenshot-09.png)

![Posts destacados en modo claro](images/screenshot-10.png)

La versión clara usa un fondo crema cálido con la misma tipografía. Cambia automáticamente según la configuración de tu sistema operativo, o puedes alternarlo manualmente.

## Bajo el Capó

Las elecciones tecnológicas aquí fueron deliberadas:

- **Astro 5** para generación estática con cero JS por defecto
- **MDX** para posts del blog para poder incluir componentes en markdown cuando sea necesario
- **Tailwind CSS** para estilizar sin pelear con el CSS de un tema
- **Fuse.js** para búsqueda fuzzy del lado del cliente
- **Sharp** para optimización automática de imágenes
- **Sora + Crimson Pro + JetBrains Mono** para tipografía que se siente intencional
- **Datos estructurados** y **sitemap** para SEO
- **Feed RSS** para las tres personas que todavía usan RSS (yo soy una de ellas)
- **Estilos de impresión** porque a veces imprimo artículos y deberían verse decentes

## Las 18 Tareas

Watchfire dividió esto en 18 tareas. El lote inicial cubrió lo esencial: scaffolding del proyecto, componentes de layout, homepage, página de posts, página sobre mí, modo oscuro. Después seguí agregando peticiones. "Agrega una página de música." "Agrega soporte de series." "Las tarjetas destacadas necesitan más contraste." "Agrega estilos de impresión." "Agrega datos estructurados."

Cada iteración volvió rápida y mayormente correcta. El diseño visual pasó por varias rondas antes de llegar a la paleta cálida. La primera versión era demasiado estéril. La segunda era demasiado oscura. La tercera versión dio con el equilibrio correcto entre acogedor y profesional.

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day24-reblog" showThumbnail=true >}}

**[Demo en Vivo](https://vibe30-day24-reblog.vercel.app)**

## Veredicto del Día 24

Este es el proyecto más personalmente significativo del desafío hasta ahora. No porque sea el más impresionante técnicamente, sino porque es algo que llevo meses posponiendo. Rediseñar tu propio sitio es una de esas tareas que nunca se siente lo suficientemente urgente como para empezar. Siempre hay algo más importante. Y luego un día lo miras y te das cuenta de que ya no te representa.

Construir una plataforma de blog completa con seis páginas, modo oscuro, búsqueda, filtrado por tags, soporte de series, datos estructurados y estilos de impresión en un solo día no es algo que podría haber hecho solo. Ni de cerca. La versión Hugo/Blowfish me tomó semanas de noches y fines de semana, y eso con un framework que ya conocía al derecho y al revés.

¿Esto realmente reemplazará a n9o.xyz? Quizás. Necesito migrar el contenido y convivir con él un rato. Pero el hecho de tener una alternativa funcional lista, construida en un día, es bastante salvaje.

---

*Este es el día 24 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sigue mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
