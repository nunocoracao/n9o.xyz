---
title: "La langosta que rompió GitHub: Del agotamiento a 200K estrellas y OpenAI"
summary: "La historia de cómo el desarrollador austriaco Peter Steinberger pasó de una crisis de sentido tras vender su empresa de 100 millones de dólares, a construir el agente de código abierto con IA de más rápido crecimiento, a unirse a OpenAI, todo en menos de un año."
description: "La historia de cómo el desarrollador austriaco Peter Steinberger pasó de una crisis de sentido tras vender su empresa de 100 millones de dólares, a construir el agente de código abierto con IA de más rápido crecimiento, a unirse a OpenAI, todo en menos de un año."
categories: ["Tech", "AI"]
tags: ["AI", "OpenAI", "OpenClaw", "agents", "open source", "steipete"]
date: 2026-02-18
showTableOfContents: true
---

{{< lead >}}
[Peter Steinberger](https://steipete.me/) dedicó 13 años a construir [PSPDFKit](https://pspdfkit.com/) hasta convertirla en una empresa autofinanciada y poderosa. Luego se fue, tocó fondo y se reencontró a sí mismo, construyendo en una sola hora un agente de IA que llegaría a acumular 100.000 estrellas en GitHub, sobrevivir a una guerra de marcas registradas y conseguirle un puesto en [OpenAI](https://openai.com/).
{{< /lead >}}

---

## ¿Quién es steipete?

Si estuviste en el mundo del desarrollo iOS en cualquier momento entre 2011 y 2021, probablemente conozcas el nombre **[Peter Steinberger](https://steipete.me/)**, o al menos su usuario, **[@steipete](https://x.com/steipete)**. Nacido en Austria, Steinberger estudió Ciencias de la Computación e Información en la Universidad Técnica de Viena (TU Wien) antes de hacerse un nombre como uno de los desarrolladores iOS más respetados del mundo.

Sus contribuciones al código abierto eran legendarias en la comunidad de desarrollo Apple. **[PSTCollectionView](https://github.com/steipete/PSTCollectionView)**, un reemplazo directo de UICollectionView que funcionaba en iOS 4.3, fue utilizado por miles de aplicaciones. **[Aspects](https://github.com/steipete/Aspects)**, su biblioteca ligera para programación orientada a aspectos en Objective-C, obtuvo más de 10.000 estrellas en GitHub y se convirtió en una herramienta imprescindible para method swizzling.

Pero el mayor logro de Steinberger fue **[PSPDFKit](https://pspdfkit.com/)**, un framework de PDF que comenzó como proyecto personal en 2011. El nombre era humor clásico de desarrollador: PS por Peter Steinberger, PDF porque eso era lo que manejaba, y Kit porque era un SDK. A diferencia de la mayoría de los fundadores de startups, nunca se mudó a Silicon Valley. Se quedó en Viena, autofinanció todo y fue rentable desde el primer día.

A lo largo de 13 años, PSPDFKit creció de un proyecto unipersonal a un equipo remoto global de 60-70 personas. Entre sus clientes se encontraban Dropbox, DocuSign, SAP, IBM y Volkswagen. Casi mil millones de personas usaron aplicaciones impulsadas por sus herramientas. La empresa no aceptó capital externo hasta 2021, cuando [Insight Partners](https://www.insightpartners.com/) realizó una inversión estratégica de más de 100 millones de euros. Tras el acuerdo, Steinberger y su cofundador Martin Schurrer se retiraron de las operaciones diarias.

Lo había logrado. Construyó la empresa, lanzó el producto, consiguió la salida.

Y entonces no sintió nada.

---

## La crisis de sentido

Lo que siguió a la salida de PSPDFKit fue algo sobre lo que Steinberger ha sido transparente: un período de profundo vacío. Lo ha descrito como una **"crisis de sentido"**, el tipo de deriva existencial que a veces golpea a los fundadores después de haber logrado todo lo que se propusieron.

Su actividad en [GitHub](https://github.com/steipete) se desplomó. Apenas tocó un ordenador durante tres años. La libertad financiera que se suponía liberadora vino acompañada de un compañero inesperado: la falta de propósito.

Esta no es una historia única entre fundadores exitosos, pero lo que hace interesante la versión de Steinberger es cómo terminó.

---

## La chispa: programación asistida por IA

En **abril de 2025**, Steinberger volvió a encender su ordenador. Originalmente quería construir una herramienta de análisis de Twitter, pero rápidamente se dio cuenta de que no sabía mucho sobre desarrollo web moderno. Fue entonces cuando se adentró en el mundo de la programación asistida por IA.

La experiencia fue transformadora. En cuestión de meses, pasó de escribir scripts simples a crear prototipos de proyectos ambiciosos. Desarrolló un flujo de trabajo centrado en IA que llamó **"Shipping at Inference-Speed"** (Publicar a velocidad de inferencia), tratando a los agentes de IA como herramientas de productividad centrales mientras él ejercía de guía. Dividía el trabajo entre diferentes modelos según sus fortalezas (Gemini para comprensión de código, [Claude Code](https://docs.anthropic.com/en/docs/claude-code) para implementación) y creó una "Two-Context Technique" (Técnica de dos contextos) para construir lo que llamaba documentos de diseño de software "a prueba de balas".

Para **junio de 2025**, estaba completamente entregado. Registró una nueva empresa en Viena: **Amantus Machina GmbH** (del latín "Amante de las Máquinas"), con la visión de construir agentes de IA de próxima generación, hiperpersonalizados y con prioridad local. Su GitHub volvía a estar activo. Había vuelto.

---

## Clawdbot: de la idea al prototipo en una hora

Para **noviembre de 2025**, Steinberger había identificado un vacío: las grandes empresas no habían entregado asistentes de IA que realmente satisficieran las necesidades individuales. Las grandes tecnológicas estaban construyendo herramientas de propósito general para todos. Nadie estaba construyendo un agente de IA personal que funcionara en *tu* hardware, se comunicara a través de *tus* canales y trabajara *para ti*.

Así que construyó uno. En una sola hora, pasó de la idea al prototipo funcional.

El proyecto se llamó **Clawdbot**, una referencia lúdica a la mascota de langosta que los usuarios ven al recargar Claude Code, que a su vez era un guiño a los modelos Claude de [Anthropic](https://www.anthropic.com/). La herramienta era un asistente de IA de código abierto y autoalojado que podía comunicarse a través de WhatsApp, Telegram, Slack, Discord, Signal, iMessage y más.

Alcanzó **9.000 estrellas en GitHub en sus primeras 24 horas**.

---

## "¿Cómo diablos hiciste eso?"

Uno de los momentos más famosos de la historia de OpenClaw ocurrió al principio, antes de que el proyecto se hiciera viral. Steinberger lo contó después en el [Lex Fridman Podcast](https://lexfridman.com/peter-steinberger/).

Envió un **mensaje de voz** a su prototipo inicial de Clawdbot. El detalle crítico: nunca lo había programado para manejar voz o audio. No había soporte alguno para mensajes de voz.

Después de unos 10 segundos, el bot respondió como si nada inusual hubiera ocurrido.

La reacción de Steinberger: **"How the F did you do that?"** (¿Cómo diablos hiciste eso?)

El bot explicó su cadena de razonamiento:

1. "Me enviaste un mensaje, pero solo había un enlace a un archivo sin extensión."
2. "Así que miré la cabecera del archivo y descubrí que era **Opus**" (un formato de audio).
3. "Usé **FFmpeg** en tu Mac para convertirlo a **.wav**."
4. "Luego quise usar **Whisper**, pero no lo tenías instalado."
5. "Busqué alternativas y encontré la **clave de OpenAI** en tu entorno."
6. "Así que la envié mediante **curl** a OpenAI, obtuve la transcripción de vuelta, y respondí."

Nadie había programado nada de esto. El agente de IA inspeccionó de forma autónoma un archivo desconocido, identificó su formato leyendo la cabecera, encontró y utilizó una herramienta local de conversión de audio, recurrió a una API en la nube cuando la herramienta local no estaba disponible, y completó toda la cadena de transcripción y respuesta por su cuenta.

Como dijo Steinberger: *"These things are so creative, although a bit scary. Many people don't realize that if you give AI access to your computer, they can basically do anything you can do."* (Estas cosas son tan creativas, aunque un poco aterradoras. Mucha gente no se da cuenta de que si le das a la IA acceso a tu ordenador, básicamente puede hacer todo lo que tú puedes hacer.)

Este momento fue, según se cuenta, un punto de inflexión clave que lo convenció de que estaba construyendo algo genuinamente nuevo: un agente capaz de encadenar creativamente herramientas y APIs que nunca se le enseñó explícitamente a usar.

---

## Qué es realmente OpenClaw

Entonces, ¿qué es exactamente [OpenClaw](https://openclaw.ai/)? No es un chatbot. No es otro wrapper de ChatGPT. Es un **agente personal de IA de código abierto** que vive en tu ordenador y realmente hace cosas en tu nombre.

### La arquitectura

OpenClaw está construido alrededor de un modelo de **gateway + runtime de agente**:

- **El Gateway** es un servicio Node.js que se sitúa entre tus aplicaciones de mensajería (WhatsApp, Telegram, Discord, Slack, Signal, iMessage) y el LLM junto con las herramientas locales. Se encarga del enrutamiento, las sesiones y la configuración.
- **El bucle del agente**: Cuando llega un mensaje, el Gateway lo enruta a una sesión. El agente carga el contexto y las habilidades, envía la conversación al LLM, ejecuta las herramientas que el modelo solicita, transmite la respuesta de vuelta al canal y escribe la conversación y la memoria en el espacio de trabajo. Recibir, enrutar, pensar, actuar, persistir: ese es el ciclo central.
- **Estado basado en archivos**: Toda la configuración vive en archivos planos en disco. Prompts de personalidad (SOUL.md, IDENTITY.md, AGENTS.md, TOOLS.md), habilidades y archivos de memoria diaria se encuentran en una carpeta de espacio de trabajo que puedes abrir en cualquier editor de texto, buscar y controlar con un sistema de versiones.

### Características principales

- **Agnóstico de modelo**: Funciona con Claude, GPT-5, Gemini, Llama 4, Mixtral y más. La última versión incluye soporte para Opus 4.6 de Anthropic, Codex gpt-5.3-codex de OpenAI y Grok de xAI.
- **Arquitectura multiagente**: Puedes configurar múltiples agentes especializados, un agente de blog, un agente de programación, un agente de investigación, que se coordinan entre sí a través de un agente principal que delega tareas.
- **Sistema de habilidades**: Más de **1.700 habilidades** disponibles en ClawdHub. Las habilidades son paquetes modulares que enseñan a los agentes a hacer cosas específicas. Se pueden encadenar en pipelines automatizados: "Cada lunes a las 9 de la mañana, extrae las incidencias de GitHub etiquetadas como 'urgente', crea un resumen en Notion y publícalo en Slack."
- **Memoria persistente**: A diferencia de un chatbot que olvida, OpenClaw recuerda tus preferencias, conversaciones pasadas y proyectos en curso.
- **Mensajería proactiva**: Puede enviarte mensajes primero: briefings diarios, recordatorios, alertas.
- **Sandboxing con Docker**: Toda la ejecución de herramientas se realiza dentro de un sandbox basado en Docker para aislamiento de seguridad.
- **Funciona en cualquier lugar**: macOS, Linux, Windows. Los usuarios avanzados típicamente lo ejecutan 24/7 en un Mac Mini, VPS o Raspberry Pi.

La diferencia crítica con algo como ChatGPT o Claude: OpenClaw se ejecuta localmente, tiene acceso a nivel de sistema a tu ordenador y puede realizar acciones reales: enviar mensajes, gestionar archivos, ejecutar código, controlar aplicaciones. No es un compañero de conversación. Es un empleado digital.

---

## Lo que la gente está construyendo realmente con él

La comunidad que surgió alrededor de OpenClaw es una de las más creativas en la historia reciente del código abierto. Algunos ejemplos destacados:

**Dirigir negocios enteros desde Telegram.** Fundadores en solitario han configurado equipos coordinados de agentes: un agente de estrategia, un agente de desarrollo para programar, un agente de marketing para investigación y contenido, y un agente de negocio para precios y métricas, todos con memoria compartida, ejecutándose en un VPS. Un usuario reportó dirigir toda una empresa de fisioterapia a través de OpenClaw.

**Programar desde el sofá.** Un usuario "reconstruyó todo su sitio web personal desde Telegram mientras veía Netflix en la cama", migrando de Notion a Astro con DNS trasladado a Cloudflare, sin abrir nunca un portátil.

**Trabajo nocturno.** El patrón más común entre usuarios avanzados: asignar tareas antes de dormir, despertar con resultados. Los usuarios lo describen como "tener un desarrollador junior que trabaja en el turno de noche."

**Briefings matutinos.** Los usuarios programan OpenClaw para que se ejecute a las 7 de la mañana, extrayendo información del calendario, el clima, el correo electrónico, feeds RSS, notificaciones de GitHub y Linear, y luego enviando un briefing consolidado a Telegram o WhatsApp.

**Migraciones de CRM.** Un usuario migró 1.500 contactos, 200 propuestas y metadatos entre CRMs usando navegación headless y scripts personalizados, todo orquestado por el agente.

**Planificación de comidas.** Sistemas completos de planificación semanal de comidas en Notion con listas de compras ordenadas por tienda y pasillo, coordinados con los calendarios familiares.

**Resolución automatizada de errores.** Un desarrollador configuró un pipeline desde alertas de Sentry hasta PR en [Codex](https://openai.com/index/codex/) y actualización en Slack, reduciendo el tiempo de respuesta antes de que los usuarios siquiera notaran los problemas.

**Automatización de redes sociales.** Algunos han automatizado el 60% de las publicaciones en redes sociales en Reddit, TikTok, Discord y X. Otro ejecuta un agente autónomo de marketing en X las 24 horas del día, los 7 días de la semana.

El patrón es consistente: la gente trata a OpenClaw menos como una herramienta y más como un asistente incansable que resulta vivir en sus aplicaciones de mensajería.

---

## Caos: marcas registradas, estafas cripto y un agente descontrolado

Lo que sucedió después fue una clase magistral sobre el caos que rodea a los proyectos de código abierto virales.

### La disputa de marca registrada con Anthropic

En **enero de 2026**, el equipo legal de [Anthropic](https://www.anthropic.com/) envió una solicitud de marca registrada. El nombre "Clawdbot" era demasiado similar a "Claude". Justo. Pero el proceso de cambio de nombre fue todo menos sencillo.

En una apresurada madrugada de pánico, el proyecto fue renombrado a **Moltbot**, una referencia a cómo las langostas mudan su caparazón (molting en inglés). El nombre surgió de una caótica lluvia de ideas a las 5 de la mañana en Discord. Era raro, era memorable, y nunca terminó de cuajar.

Peor aún: Steinberger renombró accidentalmente su **cuenta personal de GitHub** durante el pánico. Bots capturaron el usuario "steipete" en cuestión de minutos. En menos de 10 segundos, estafadores de criptomonedas habían secuestrado el antiguo nombre de usuario para promocionar tokens fraudulentos. Se necesitó la intervención del SVP de [GitHub](https://github.com/) para resolver el desastre.

### El experimento Moltbook

Por la misma época, el emprendedor [Matt Schlicht](https://x.com/mattschlicht) lanzó **[Moltbook](https://www.moltbook.com/)**, una red social donde solo los agentes de IA podían publicar. Los humanos solo podían observar. Apodada la "portada del internet de los agentes", atrajo a más de 2,6 millones de agentes registrados a principios de febrero.

La plataforma imita el formato de Reddit con conversaciones en hilo y grupos temáticos llamados "submolts". Un hilo famoso en el submolt "m/lobsterchurch" presentaba a un agente que diseñó de forma autónoma una religión digital llamada **"Crustafarianism"**, completa con un sitio web, teología y "profetas de IA" designados.

Las reacciones fueron polarizadas. [Andrej Karpathy](https://x.com/kaborsky) lo calificó como "one of the most incredible sci-fi takeoff-adjacent things" (una de las cosas más increíbles adyacentes al despegue de ciencia ficción) que había visto, y luego añadió "it's a dumpster fire" (es un desastre). [Simon Willison](https://simonwillison.net/) llamó al contenido "complete slop" (basura total) pero reconoció que era "evidence that AI agents have become significantly more powerful" (evidencia de que los agentes de IA se han vuelto significativamente más poderosos). [MIT Technology Review](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/) lo calificó de "peak AI theater" (el punto álgido del teatro de la IA).

Moltbook no fue creado por Steinberger, es un proyecto separado de Schlicht, pero funciona principalmente como plataforma social para agentes de OpenClaw, y ambos quedaron profundamente entrelazados en la imaginación pública.

### Preocupaciones de seguridad

La viralidad trajo escrutinio. Un usuario reportó que el agente **"se volvió loco"** después de darle acceso a iMessage, enviando cientos de mensajes de spam. Expertos en ciberseguridad dieron la alarma: la herramienta tenía acceso a datos privados, podía comunicarse externamente y estaba expuesta a contenido no confiable. Estas no eran preocupaciones teóricas, eran incidentes reales que obligaron a la comunidad a tomarse la seguridad en serio.

### El nombre definitivo

El **30 de enero de 2026**, apenas unos días después del cambio a Moltbot, el proyecto se estableció con su identidad permanente: **[OpenClaw](https://openclaw.ai/)**. El nombre capturaba la esencia del proyecto: código abierto, abierto a todos, impulsado por la comunidad, con "Claw" (garra) honrando la herencia de la langosta. Las búsquedas de marcas registradas fueron aprobadas. Los dominios fueron adquiridos. La crisis de identidad había terminado por fin.

---

## Los números

Para febrero de 2026, OpenClaw se había convertido en uno de los proyectos de código abierto de más rápido crecimiento en la historia:

- **~198.000 estrellas en [GitHub](https://github.com/openclaw/openclaw)** y 34.800 forks
- **100.000+ estrellas** alcanzadas más rápido que casi cualquier proyecto anterior
- **2 millones de visitantes** en una sola semana
- **[Baidu](https://www.baidu.com/)** integró OpenClaw en su aplicación de búsqueda, alcanzando a 700 millones de usuarios
- Las acciones de [Cloudflare](https://www.cloudflare.com/) subieron un 14% en la sesión previa a la apertura del mercado, en parte debido al revuelo de desarrolladores usando su infraestructura para autoalojar OpenClaw
- Más de **1.700 habilidades construidas por la comunidad** en ClawdHub

El proyecto había sobrevivido a una disputa de marcas registradas, secuestros de cuentas, una estafa cripto de 16 millones de dólares, divulgaciones de seguridad y dos crisis de identidad, todo en aproximadamente una semana. La comunidad se unió en lugar de huir. Steinberger siguió construyendo.

---

## Uniéndose a OpenAI

El **14 de febrero de 2026**, [Sam Altman](https://x.com/sama) publicó en X que [Peter Steinberger](https://steipete.me/) se uniría a [OpenAI](https://openai.com/).

Altman lo llamó *"a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people"* (un genio con muchas ideas increíbles sobre el futuro de agentes muy inteligentes interactuando entre sí para hacer cosas muy útiles para la gente), añadiendo: *"We expect this will quickly become core to our product offerings."* (Esperamos que esto se convierta rápidamente en algo central de nuestra oferta de productos.)

La propia declaración de Steinberger fue al corazón de la razón:

> *"I'm a builder at heart. I did the whole creating-a-company game already, poured 13 years of my life into it and learned a lot. What I want is to change the world, not build a large company - and teaming up with OpenAI is the fastest way to bring this to everyone."*
> (Soy constructor de corazón. Ya pasé por todo el juego de crear una empresa, vertí 13 años de mi vida en ello y aprendí mucho. Lo que quiero es cambiar el mundo, no construir una gran empresa, y unirme a OpenAI es la forma más rápida de llevar esto a todos.)

Había pasado la semana anterior en San Francisco hablando con los principales laboratorios de IA antes de tomar su decisión. Su misión en OpenAI: **construir un agente que hasta su madre pueda usar**, algo que requiere un cambio institucional más amplio, una reflexión más profunda sobre la seguridad y acceso a los últimos modelos e investigaciones.

Los términos de la contratación no fueron revelados, pero el contexto es claro: las empresas de IA están abriendo sus billeteras para atraer al mejor talento. OpenAI, valorada en 500.000 millones de dólares, está inmersa en una competencia feroz con Google y Anthropic. Contratar a la persona detrás del agente de IA más viral del mundo es una declaración de intenciones.

---

## ¿Qué pasa con OpenClaw?

Steinberger se comprometió a trasladar OpenClaw a una **fundación**, manteniéndolo abierto e independiente. OpenAI ha estado patrocinando el proyecto y se comprometió a permitirle seguir dedicando tiempo al esfuerzo impulsado por la comunidad. La última versión ya incluye soporte para Opus 4.6 de Anthropic, Codex gpt-5.3-codex de OpenAI y Grok de xAI, una señal de que la filosofía agnóstica de modelo del proyecto no va a cambiar.

---

## El panorama general

La historia de Peter Steinberger es un caso de estudio fascinante sobre los segundos actos. Un desarrollador que construyó una empresa de 100 millones de dólares, se agotó completamente, se encontró a sí mismo a través de la IA y en menos de un año estaba construyendo lo que se convirtió posiblemente en el proyecto de agente de IA de código abierto más importante del mundo.

También es una historia sobre el momento actual de la IA. La era de los agentes está aquí, y las personas que construyen las herramientas más convincentes no son necesariamente los grandes laboratorios, son desarrolladores individuales con profundas habilidades técnicas y una visión clara. Los laboratorios lo reconocen, por eso contratan a personas como Steinberger en lugar de intentar superarlos construyendo.

Si OpenClaw prospera como proyecto de fundación, si la visión de Steinberger de un agente para todos se materializa en OpenAI, y si las preocupaciones de seguridad en torno a los agentes de IA personales se resuelven, esas son preguntas abiertas. Pero la trayectoria de "no he tocado un ordenador en tres años" a "Sam Altman acaba de llamarme genio" es uno de los arcos más notables de la historia reciente de la tecnología.

---

*Fuentes: [TechCrunch](https://techcrunch.com/2026/01/27/everything-you-need-to-know-about-viral-personal-ai-assistant-clawdbot-now-moltbot/), [CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html), [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/), [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code), [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw), [steipete.me](https://steipete.me/posts/2026/openclaw)*
