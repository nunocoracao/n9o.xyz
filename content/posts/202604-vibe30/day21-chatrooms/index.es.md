---
title: "30 Días de Vibe Coding - Día 21 - ChatRooms"
description: "Una app de salas de chat anónimas en tiempo real con Firebase, reacciones, compartir archivos e indicadores de presencia."
summary: "Una app de salas de chat anónimas en tiempo real con Firebase, reacciones, compartir archivos e indicadores de presencia."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-21", "react", "nextjs", "typescript", "firebase", "realtime"]
series: ["30 Days of Vibe Coding"]
series_order: 21
seriesOpened: false
date: 2026-04-26
draft: false
#type: "hidden"
---

Día 21. Quería construir algo que se sintiera vivo. Algo donde pudieras ver a otras personas haciendo cosas en tiempo real. Así que hoy toca salas de chat anónimas.

## El Prompt

> "Construye una app de salas de chat en tiempo real. Autenticación anónima con nombres personalizados, creación de salas, mensajería en vivo, reacciones, compartir archivos, indicadores de escritura y presencia online."

{{< alert icon="fire">}}
Pruébalo tú mismo [aquí](https://vibe30-day21-chatrooms-nir8.vercel.app)
{{< /alert >}}

## Cómo Se Construyó

Este pasó por 7 tareas de [Watchfire](https://watchfire.io), y el orden tenía mucho sentido para una app en tiempo real como esta:

1. **Firebase Realtime Database.** La base. Configurar autenticación anónima, reglas de base de datos y el modelo de datos para salas, mensajes y usuarios. Esta es la fontanería de la que depende todo lo demás.
2. **Creación de salas.** La capacidad de crear nuevas salas y navegar por las existentes. Una barra lateral con nombres de salas, conteo de participantes y previsualizaciones del último mensaje.
3. **Mensajería en tiempo real.** La funcionalidad principal. Los mensajes aparecen instantáneamente para todos en la sala. Los listeners de Firebase manejan la sincronización así que no hay polling, no hay botón de actualizar. Escribes, envías, todos lo ven.
4. **Reacciones.** Toca un mensaje para reaccionar. Una funcionalidad pequeña, pero hace que el chat se sienta más interactivo que solo paredes de texto.
5. **Compartir archivos.** Sube y comparte archivos dentro de una sala de chat. Otra capa de utilidad más allá de mensajes de texto simples.
6. **Presencia e indicadores de escritura.** Ve quién está online, ve quién está escribiendo. Estos son los detalles que hacen que una app de chat se sienta como una app de chat de verdad en lugar de un tablón de mensajes.
7. **Pulido mobile.** Ajustes de layout responsivo, objetivos táctiles, asegurarse de que toda la experiencia funciona bien en una pantalla de teléfono.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Lo Que Obtuve

![Pantalla de bienvenida](images/screenshot-01.png)

**Onboarding simple como nada.** Llegas a la app, eliges un nombre y ya estás dentro. Sin email, sin contraseña, sin flujo de OAuth. Firebase Anonymous Auth maneja la identidad entre bastidores. Solo escribes un nombre y le das a "Let's go."

![Lista de salas y estado de bienvenida](images/screenshot-03.png)

**Un navegador de salas limpio.** La barra lateral izquierda muestra todas las salas disponibles con conteo de participantes. Hay un botón "Create Room" arriba y una barra de búsqueda para filtrar salas. El estado por defecto muestra un mensaje de bienvenida pidiéndote que selecciones una sala o crees una nueva.

![Sala de chat con mensajes](images/screenshot-04.png)

**Mensajería en tiempo real que simplemente funciona.** Los mensajes aparecen instantáneamente. Cada mensaje muestra el nombre del remitente con un avatar de color, un timestamp y el contenido del mensaje. La parte inferior de la pantalla muestra quién está actualmente en la sala y un campo de mensaje con botón de enviar. El conteo de usuarios online está en la esquina superior derecha.

![Conversación activa](images/screenshot-05.png)

**Indicadores de escritura y presencia.** Puedes ver quién está online y quién está escribiendo activamente. Estos pequeños toques son lo que separa una app de chat de una sección de comentarios. Todo se siente responsivo y vivo.

**El tema oscuro queda genial.** El fondo azul marino oscuro con acentos morados le da un aspecto de app de chat moderna. No parece un proyecto escolar. La tipografía es limpia, el espaciado está bien y la codificación por colores para diferentes usuarios hace que las conversaciones sean fáciles de seguir.

## Los Bug Reports

Las apps de tiempo real con Firebase tienden a tener una categoría de bugs que solo aparecen con múltiples usuarios o al reconectarse. Para este proyecto, las tareas de Watchfire manejaron la progresión de forma lo suficientemente limpia como para que no encontrara ningún problema grave. El sistema de presencia y los indicadores de escritura funcionaron en el primer deploy, lo cual honestamente me sorprendió. Esas funcionalidades normalmente necesitan unas cuantas rondas de debugging alrededor de edge cases como cambiar de pestaña y caídas de red.

## Los Números

- **7 tareas Watchfire** desde configuración de base de datos hasta pulido mobile
- **Firebase Realtime Database** para sincronización de mensajes con latencia cero
- **Autenticación anónima** para onboarding sin fricción
- **Reacciones, compartir archivos, indicadores de escritura, presencia** todo añadido incrementalmente

## Pruébalo

{{< github repo="nunocoracao/Vibe30-day21-chatrooms" showThumbnail=true >}}

**[Abrir ChatRooms](https://vibe30-day21-chatrooms-nir8.vercel.app)**

Elige un nombre y empieza a chatear. Crea una sala o únete a una existente.

## Veredicto del Día 21

El tiempo real es difícil. O al menos, solía serlo. Configurar conexiones WebSocket, gestionar estado de conexión, manejar reconexiones, sincronizar datos entre clientes, lidiar con condiciones de carrera. Eso es mucha infraestructura antes de siquiera llegar a las funcionalidades de chat propiamente dichas.

Firebase abstrae la mayor parte de eso, y la IA sabía exactamente cómo usarlo. La progresión de "la base de datos existe" a "la gente está chateando con reacciones e indicadores de escritura" sucedió a lo largo de 7 tareas sin que yo tuviera que pensar en gestión de conexiones en absoluto.

Lo que me parece interesante de este proyecto es que la autenticación anónima fue la decisión correcta. Para una app de chat casual, obligar a la gente a crear cuentas es un asesino de conversión. Eliges un nombre y listo. Firebase maneja la identidad, el usuario nunca tiene que pensar en ello. Es una decisión de producto que la IA tomó correctamente sin que yo la especificara.

Veintiún días hechos. Estamos en la recta final y los proyectos siguen siendo cada vez más interactivos.

---

*Este es el día 21 de [30 Días de Vibe Coding](/series/30-days-of-vibe-coding/). Sigue la serie mientras lanzo 30 proyectos en 30 días usando programación asistida por IA.*
