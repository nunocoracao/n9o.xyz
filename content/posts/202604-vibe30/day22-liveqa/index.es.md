---
title: "30 Days of Vibe Coding - Día 22 - LiveQ&A"
description: "Un tablero de Q&A en tiempo real para eventos, AMAs y charlas, con votación en vivo y controles de anfitrión, construido con Firebase Firestore."
summary: "Un tablero de Q&A en tiempo real para eventos, AMAs y charlas, con votación en vivo y controles de anfitrión, construido con Firebase Firestore."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-22", "nextjs", "firebase", "typescript", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 22
seriesOpened: false
date: 2026-04-27
draft: false
#type: "hidden"
---

Día 22. Ya he estado en suficientes eventos donde el Q&A es un desastre. Gente gritando por encima de los demás, la misma pregunta hecha dos veces, las mejores preguntas enterradas bajo las voces más fuertes. Hora de construir algo mejor.

## El Prompt

> "Construye un tablero de Q&A en vivo donde un anfitrión crea una sesión, la audiencia envía y vota preguntas en tiempo real, y el anfitrión puede destacar, responder, descartar o cerrar la sesión. Incluye un modal para compartir con un código QR."

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://vibe30-day22-liveqa.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

Este pasó por 7 tareas de [Watchfire](https://watchfire.io), construyendo desde la capa de base de datos hasta el pulido final:

1. **Configuración de Firebase Firestore.** La capa de datos. Colecciones de sesiones y preguntas, autenticación anónima para que los usuarios puedan entrar sin crear una cuenta, y reglas de seguridad para mantener todo protegido.
2. **Creación de sesión.** Un anfitrión rellena un título y una descripción, pulsa crear, y obtiene una página de sesión única. Formulario simple, nada del otro mundo.
3. **Envío de preguntas.** Los miembros de la audiencia llegan a la página de la sesión y envían preguntas. Límite de 280 caracteres para mantener el foco. Las preguntas aparecen en tiempo real para todos en la sesión.
4. **Votación en tiempo real.** Un voto por usuario por pregunta, aplicado del lado del servidor. Los conteos de votos se actualizan en vivo en todos los clientes conectados. Ordena por más votados o más recientes.
5. **Controles del anfitrión.** El anfitrión tiene botones extra en cada pregunta: destacar, marcar como respondida, descartar. Las preguntas destacadas se promueven a un panel dedicado en el lado derecho de la pantalla. El anfitrión también puede cerrar la sesión por completo.
6. **Modal para compartir con código QR.** Un botón de compartir abre un modal con el enlace de la sesión, un botón de copiar, y un código QR generado con qrcode.react. Apuntas tu teléfono a la pantalla y ya estás dentro.
7. **Pulido de UI.** Limpiar el layout, refinar el diseño de dos columnas, asegurarse de que el panel de preguntas destacadas se ve bien tanto en escritorio como en móvil.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Landing page](images/screenshot-01.png)

**Landing page limpia.** Crea una sesión o pega un código de sesión existente para unirte a una. La autenticación anónima ocurre entre bastidores, así que los usuarios solo eligen un nombre para mostrar y listo.

![Solicitud de nombre para mostrar](images/screenshot-02.png)

**Sin fricción de registro.** La primera visita dispara una solicitud de nombre para mostrar. Eso es todo. La autenticación anónima de Firebase se encarga del resto. Sin emails, sin contraseñas, sin flujos OAuth. Para una herramienta de eventos en vivo, esto es exactamente lo correcto. No quieres que la gente ande luchando con la creación de cuentas cuando el ponente acaba de decir "escaneen el código QR."

![Creación de sesión](images/screenshot-03.png)

**La creación de sesión son dos campos.** Título y descripción. Pulsas el botón y estás organizando un Q&A en vivo. La simplicidad aquí importa porque el anfitrión probablemente está configurando esto cinco minutos antes de que empiece su charla.

![Modal para compartir con código QR](images/screenshot-04.png)

**El modal para compartir cumple su función.** Enlace de la sesión con botón de copiar y un código QR ahí mismo. Este es el flujo de trabajo que estaba imaginando: el anfitrión crea la sesión, proyecta este modal en la pantalla grande, la audiencia escanea el código, y las preguntas empiezan a llegar.

![Vista de la audiencia con preguntas](images/screenshot-05.png)

**La vista de la audiencia se mantiene enfocada.** Envía una pregunta, ve otras preguntas, vota las que quieres que se respondan. La caja de envío está arriba, la lista de preguntas debajo, ordenada por más votadas por defecto. Todo se actualiza en tiempo real a través de listeners de Firestore.

![Vista del anfitrión con controles](images/screenshot-06.png)

**El anfitrión tiene herramientas de moderación.** Cada pregunta muestra botones de destacar, marcar como respondida y descartar. Solo el anfitrión los ve. También hay un botón de cerrar sesión en el encabezado que bloquea todo. La columna derecha muestra preguntas destacadas, o un mensaje placeholder si ninguna ha sido destacada todavía.

![Vista completa del anfitrión](images/screenshot-07.png)

**El destacado funciona bien.** Cuando el anfitrión destaca una pregunta, se promueve al panel derecho con el texto de la pregunta y el nombre del autor mostrados de forma prominente. La pregunta también recibe un indicador visual en la lista principal para que todos vean que ha sido señalada. En móvil, esta sección de destacados se ubica en la parte superior de la página en lugar de en una columna lateral.

![Pregunta destacada](images/screenshot-08.png)

![Votación en acción](images/screenshot-09.png)

**La votación crea un filtro natural.** Las mejores preguntas suben al tope. El anfitrión no tiene que leer todo. La audiencia hace la curación por ti.

## Los Reportes de Bugs

Este fue sorprendentemente limpio. Los listeners en tiempo real de Firestore manejaron las partes complicadas, así que las preguntas y votos aparecían instantáneamente sin ningún polling ni lógica de refresh manual. El flujo de autenticación anónima fue transparente. Ningún bug reportado en este proyecto.

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day22-liveqa" showThumbnail=true >}}

**[Prueba LiveQ&A](https://vibe30-day22-liveqa.vercel.app)**

Crea una sesión y comparte el enlace. No se necesita cuenta.

## Veredicto del Día 22

Cuarto proyecto con Firebase. A estas alturas el patrón se escribe solo: autenticación anónima, listeners de Firestore, sincronización en tiempo real. Probablemente ya podría construir uno de estos dormido. La stack técnica ya no es la historia.

Lo interesante de este es la capa de moderación. La mayoría de las herramientas de Q&A son solo listas de preguntas con conteos de votos. La funcionalidad de destacar cambia eso. Cuando el anfitrión destaca una pregunta, se transmite a todas las pantallas de la sala. La audiencia ve qué se está abordando. El anfitrión controla el flujo sin gritar "siguiente pregunta por favor" en un micrófono. Eso es un insight de producto, no técnico.

¿Usaría esto en una charla real? Sí. Ya he estado en suficientes conferencias donde el Q&A degenera en quienquiera que agarre el micrófono primero haciendo una "pregunta" de cinco minutos que en realidad es un comentario. Esto lo arregla. La audiencia vota, las mejores preguntas suben, el anfitrión elige qué abordar. La voz más fuerte en la sala deja de ser el factor decisivo.

El botón de descartar es silenciosamente la funcionalidad más importante. Preguntas fuera de tema, duplicadas, alguien tratando de ser gracioso. El anfitrión las elimina y nadie se da cuenta. Sin ese momento incómodo de "sigamos adelante." Simplemente desaparecen.

---

*Este es el día 22 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Sigue el proceso mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
