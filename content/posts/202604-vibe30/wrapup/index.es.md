---
title: "30 Dias de Vibe Coding - El Resumen Final"
description: "30 proyectos en 30 dias usando programacion asistida por IA. Que fue facil, que fue dificil, que fue inesperado y hacia donde va todo esto."
summary: "30 proyectos en 30 dias usando programacion asistida por IA. Que fue facil, que fue dificil, que fue inesperado y hacia donde va todo esto."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "wrapup"]
series: ["30 Days of Vibe Coding"]
series_order: 31
seriesOpened: false
date: 2026-05-07
draft: false
#type: "hidden"
---

Esta hecho. Treinta proyectos. Treinta dias.

Un juego de plataformas. Un clon de Snake en un Nokia 3310. Un RPG con graficos isometricos. Tetris con musica procedural. Breakout. Un temporizador Pomodoro en Go. Un dashboard de git. Una app de notas con un servidor MCP. Un tablero kanban que una IA puede gestionar. Un clon de Miro. Un clon de Trello. Wordle. Un generador de portfolios. Un dashboard meteorologico con arte ASCII. Un auto-battler. Un tres en raya donde la IA aprende de sus derrotas. Un juego de hacking sobre una IA escapando del confinamiento. Una app de votaciones en tiempo real. Un muro de reacciones para eventos. Un moodboard colaborativo. Salas de chat anonimas. Una herramienta de Q&A en vivo. Windows 95 en un navegador. Un rediseno de blog. Un mezclador de sonidos ambientales con cero archivos de audio. Pixel art colaborativo. Un emulador de terminal en Rust. Un editor de codigo en Go. Un clon de Notion. Y un sistema operativo que contiene todo lo anterior.

Esto fue posible gracias a agentes de programacion. Principalmente Claude, a veces Codex, pero tambien [Watchfire](https://watchfire.io) para orquestar trabajo complejo convirtiendo ideas vagas en especificaciones detalladas para que mis agentes las ejecuten.

## Los Numeros

- **30 proyectos** lanzados y desplegados
- **~326.000 lineas de codigo** en todos los proyectos
- **~1.200 commits** en total
- **~450 tareas Watchfire** (desde 4 tareas para el tres en raya hasta 43 para el editor de codigo)
- **8 tech stacks:** TypeScript/React, Go/Bubble Tea, Python/Textual, Rust/Tauri, Go/Wails, vanilla JS, Astro, Next.js
- **6 proyectos Firebase** con sincronizacion en tiempo real
- **5 juegos,** 5 apps TUI, 3 apps nativas de escritorio, 17 apps web
- **3 plataformas** (macOS, Linux, Windows) para las apps nativas
- **7 idiomas** por articulo de blog (Ingles, Portugues, Espanol, Aleman, Frances, Italiano, Japones, Chino)

## Lo Que es Facil

Las cosas que funcionaron casi siempre, con iteracion minima.

**Juegos y apps autocontenidas.** Cualquier cosa con reglas claras y un alcance definido. Tetris, Wordle, Breakout, Snake. La IA sabe como deben sentirse estos juegos porque son patrones bien documentados. Describes el juego, la IA construye el juego. Los resultados eran jugables en la primera build casi siempre.

**UI de frontend.** Componentes React, estilos Tailwind, layout, animaciones. La IA genera codigo de UI limpio rapido. Layouts de tarjetas, modales, barras laterales, dashboards, flujos de formularios. Si puedes describir como debe verse, obtienes algo cercano en el primer intento.

**Sistemas y logica.** Motores de combate, Q-learning, gestion de estado kanban, undo/redo, file watchers, servidores MCP. La IA maneja bien el trabajo algoritmico y las maquinas de estado. La maquina de estado del Pomodoro, el sistema de combate de MyBrute, la implementacion de Q-learning en el tres en raya. Todo esto funciono sin que yo tuviera que depurar la logica central.

**Envolver herramientas existentes.** El Dia 7 demostro que puedes apuntar la IA a cualquier CLI con output estructurado y obtener una UI wrapper construida alrededor. Ejecuta comandos git, parsea el texto, construye un dashboard. El mismo patron funciona para Docker, kubectl, cualquier cosa con una interfaz de texto.

**Integracion con Firebase.** Autenticacion anonima, listeners de Firestore, sincronizacion en tiempo real. La IA conocia los patrones de Firebase de memoria. Seis proyectos usaron Firebase y la colaboracion en tiempo real funciono en el primer deploy siempre. Reglas de seguridad, modelado de datos, gestion de conexiones. Todo resuelto.

## Lo Que Sigue Siendo Dificil

Las cosas que consistentemente necesitaron intervencion humana, iteracion y paciencia.

**Estilo visual y direccion artistica.** Esto va mas alla de los juegos. Cada vez que quieres una identidad visual especifica para una app frontend, la IA tiene dificultades. El Dia 15 (MyBrute) paso por cuatro estilos de personaje completamente diferentes antes de dar con uno que funcionaba. Pero el mismo problema aparece en apps web. Estetica de landing pages, paletas de colores que se sienten correctas, combinaciones de tipografia, espaciado que parece intencional en vez de generado. La IA produce output. Un humano decide si es bueno.

**Deployment e infraestructura.** El codigo funciona en tu maquina. Luego haces deploy y todo se rompe. El Dia 29 (n0ti0n) tuvo docenas de commits solo depurando Firestore en produccion. Configuracion de long polling, ajustes de cache, trimming de variables de entorno, timeouts de conexion. Cosas que solo aparecen despues del deployment. El Dia 28 (ideA) fue una guerra de multiples commits para conseguir que Wails compilara para tres plataformas en GitHub Actions. La IA puede sugerir correcciones rapido, pero el ciclo de deploy-probar-iterar es lento sin importar que.

**CI/CD de apps nativas.** Las builds cross-platform son dolorosas. Dependencias de WebKit en Linux, build tags por plataforma, generacion de bindings de Wails, firma de codigo, scripts de instalacion que detectan SO y arquitectura. Los Dias 27 y 28 gastaron mas tiempo en CI que en las propias aplicaciones. Watchfire ayudo mucho aqui entrando en loops interminables de depuracion, pruebas, ejecucion, fallo y repeticion hasta que el pipeline finalmente funciono. Sin esa persistencia, habria abandonado los lanzamientos cross-platform.

**Pulido y casos extremos.** El window snapping en el Dia 30 tenia un bug nuevo cada vez que pensaba que estaba arreglado. Que pasa cuando haces snap a una ventana maximizada? Y si cambias de workspace a mitad de un drag? Y redimensionar una ventana con snap? La IA construye el camino feliz bien. Los casos extremos necesitan un humano probando y reportando.

## Lo Que Fue Inesperado

Las cosas que no vi venir cuando empece este desafio.

**La IA toma decisiones de producto.** El Dia 21 (ChatRooms) uso autenticacion anonima sin que yo lo especificara. La IA decidio que, para una app de chat casual, forzar la creacion de cuenta seria un asesino de conversion. Eso no es generacion de codigo. Es instinto de producto. Sucedio repetidamente. Funcionalidades que no pedi aparecieron porque la IA infirió que pertenecian ahi. Esto puede estar relacionado con el desarrollo orientado por specs. En Watchfire, especificas una direccion de producto para el proyecto. Los agentes trabajan hacia esa vision y siguen iterando hasta que el codigo coincide con la spec. Cuando la spec es clara sobre como debe sentirse el producto, la IA toma mejores decisiones.

**Tech stacks desconocidas funcionan bien.** No se escribir Go. Nunca toque Bubble Tea, Lip Gloss, Tauri o Wails. No se Rust. Pero los Dias 6-9 lanzaron apps TUI en Go pulidas, el Dia 27 lanzo un emulador de terminal con backend en Rust, y el Dia 28 lanzo un editor de codigo en Go/Wails. La barrera para probar nuevas tech stacks se derrumbo. Usar Context7 MCP para alimentar a los agentes con documentacion actualizada ayuda mucho aqui. La IA no necesita depender de los datos de entrenamiento cuando puede obtener la documentacion mas reciente bajo demanda.

**El cuello de botella se movio.** Deje de gastar tiempo construyendo y empece a gastar tiempo revisando, probando y reportando bugs. El factor limitante nunca fue "puede la IA escribir este codigo." Fue "probe esto de forma suficientemente rigurosa" y "esto realmente se siente bien."

**El audio procedural es viable.** Los Dias 4 (Tetris), 12 (Wordle) y 25 (SoundScape) usaron la Web Audio API para sintetizar todos los efectos de sonido y musica. Cero archivos de audio. Lluvia, viento, crepitar de chimenea, beats lo-fi, efectos de sonido de juegos. Todo generado con osciladores y buffers de ruido. No tenia idea de que esto era practico para produccion.

**La narrativa importo mas que el codigo.** Los proyectos que mas resonaron no fueron los tecnicamente impresionantes. El Dia 17 (Genesis) funciono por la historia, no por los minijuegos. El Dia 23 (RetroOS) funciono por la nostalgia, no por el gestor de ventanas. El Dia 15 (MyBrute) funciono porque tenia una conexion personal con el juego original. El codigo fue la parte facil. El angulo fue la parte dificil.

## Mi Prediccion para el Futuro

El coste de construir un prototipo acaba de colapsar. No el coste de construir gran software. Eso todavia requiere tiempo, buen gusto e iteracion. Pero el coste de probar una idea? El coste de explorar una tech stack que nunca usaste? Cerca de cero.

**Anadir funcionalidades a software existente tambien se volvio dramaticamente mas barato.** Una vez que un proyecto esta configurado con la arquitectura correcta, anadir nuevas funcionalidades es mas facil que construir desde cero. La IA comprende la codebase existente, los patrones estan establecidos, y cada nueva funcionalidad construye sobre lo que ya existe. El coste marginal de la siguiente funcionalidad se aproxima a cero.

**El cuello de botella paso de escribir codigo a decidir que lanzar.** Como lo comercializas? Como lo vendes? Cuando lo lanzas? La ingenieria ya no es la restriccion. Estrategia de producto, go-to-market y distribucion lo son.

**Esto ya esta cambiando como trabajan los equipos.** Si puedes construir funcionalidades en horas en lugar de sprints, los roadmaps todavia tienen sentido? Como pruebas todo lo que puedes lanzar? Como sabes si esta teniendo el impacto correcto en las metricas de negocio correctas? Como matas cosas tan rapido como las puedes desplegar? Predigo que las herramientas de experimentacion se volveran criticamente importantes para empresas que construyen software. Tests A/B, feature flags, rollouts progresivos. La capacidad de hacer deploy rapido no vale nada si no puedes medir y revertir igual de rapido.

**La IA no va a reemplazar desarrolladores. Los va a potenciar.** El verdadero desafio es organizacional. Empresas enteras estan construidas desde cero alrededor de planificacion, roadmaps, ciclos de sprint y estimaciones. Ahora que construir es rapido, como mantienen el ritmo las demas funciones? Producto, diseno, QA, marketing, ventas. Que desaparezca el cuello de botella de ingenieria no significa que el trabajo desaparece. Significa que el cuello de botella se mueve hacia arriba y hacia abajo. Las empresas que se adapten a este cambio superaran a todas las demas en output.

Las herramientas no estan reemplazando desarrolladores. Estan eliminando las razones para no intentarlo.

## Watchfire

Todos los proyectos de este desafio fueron construidos con [Watchfire](https://watchfire.io). Estoy muy orgulloso de este. Es mi proyecto. Este desafio fue en parte para testearlo en produccion mientras creaba contenido. Ahora ya lo saben.

Le daba una idea vaga, la convertia en una spec detallada, dividia el trabajo en tareas y ejecutaba cada una a traves de agentes de programacion. Algunos dias fueron 4 tareas. Otros fueron 43. Yo revisaba el output, lo probaba, reportaba bugs cuando las cosas se rompian e iteraba hasta que estaba lanzado.

Empece a construir Watchfire durante este desafio. El primer proyecto Platformer fue construido en la v0. Para cuando miniOs se lanzo en el Dia 30, estabamos en la v5. Cada proyecto me dio la oportunidad de testear la herramienta bajo estres, encontrar bugs, recoger feedback y lanzar mejoras. El desafio y la herramienta evolucionaron juntos.

Esto es lo que cambio en Watchfire durante los 30 dias:

- **v1.0 Ember** (Dia 8) — Los logs de transcripcion JSONL reemplazaron output de terminal ilegible con logs de conversacion limpios. Arreglado el loop de reinicio del agente que causaba loops infinitos en los rate limits. Arreglados problemas de sandbox que bloqueaban proyectos en directorios protegidos de macOS.
- **v2.0 Spark** (Dia 11) — Interfaz pluggable de backend de agente. OpenAI Codex, opencode y Gemini CLI lanzados como backends de primera clase junto a Claude Code. Override de agente por tarea para poder mezclar agentes dentro de un unico proyecto. Selectores de agente en el wizard de inicializacion, ajustes de TUI y ajustes de GUI.
- **v3.0 Blaze** (Dia 15) — GitHub Copilot CLI como quinto backend. Arregladas fallas de actualizacion cross-filesystem en Linux. Arreglado bug de rotacion de la lista de tareas en proyectos con muchas tareas. Arreglados prompts de actualizacion de la GUI disparandose en cada inicio.
- **v4.0 Beacon** (Dia 28) — El grande. Dashboard con estado agregado, chips de filtro, badges de tiempo transcurrido, preview de terminal en vivo y tratamiento de atencion necesaria para tareas fallidas. Notificaciones del SO para fallos de tareas y completaciones de runs. Visor de diffs inline. Captura de metricas por tarea (duracion, tokens, coste). Vistas de insights por proyecto y cross-proyecto con barras de KPI y graficos. Exportacion de reportes a CSV y Markdown. Notificaciones de digest semanal. Integraciones outbound con Slack, Discord y webhooks. Creacion automatica de PR en GitHub. Servidor HTTP inbound con handlers para GitHub, Slack y Discord.
- **v5.0 Flare** (Dia 30) — Cerro el loop inbound de Beacon. Tokens OAuth de bot para Slack y Discord. Soporte para GitHub Enterprise, GitLab y Bitbucket. Rate limiting por IP. Componentes interactivos de Slack con botones de retry/cancel. Auto-registro de slash-commands en Discord. UI de ajustes estilo macOS con busqueda. Arreglado run-all deteniendose silenciosamente en fallos de merge.

Y el mas grande de todos: Watchfire paso de solo macOS a soporte completo cross-platform para macOS, Linux y Windows durante el desafio. Solo eso cambio quien podia usarlo.

Cinco versiones major en 30 dias. De un task runner solo para macOS a una plataforma de orquestacion cross-platform con soporte multi-agente, un dashboard, notificaciones, integraciones, insights y pipelines de entrega.

Watchfire soporta multiples agentes de programacion (Claude Code, Codex, Gemini, opencode, Copilot), funciona en varias plataformas y puede usarse como GUI, CLI o TUI. Actualmente estoy trabajando en la v6, anadiendo soporte para Cursor y arreglando un bug de concurrencia. O mas precisamente, Watchfire esta construyendo Watchfire ahora. La herramienta orquesta su propio desarrollo. Es una frase que no esperaba escribir cuando empece este desafio.

Hay mucho mas por venir. Escribire un deep-dive completo sobre Watchfire despues de recuperarme de los ultimos 30 dias.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Gracias

Si seguiste el desafio, probaste alguno de los proyectos, compartiste un post, o simplemente leiste algunos articulos, gracias. Esto fue mucho trabajo y mucha diversion. Construir en publico es raro porque estas lanzando trabajo inacabado para que todo el mundo lo vea. Pero ese era el objetivo. No el pulido. No la perfeccion. Solo output consistente y aprendizaje.

Si quieres seguir lo que haga despues, suscribete al blog (enlace abajo) o sigueme en redes sociales. Y si algo de esto resono contigo, compartelo con alguien que pueda encontrarlo util. Esa es la mejor forma de apoyar este tipo de trabajo.

Treinta proyectos. Treinta dias. Hecho.

## Los 30 Proyectos

| Dia | Proyecto | Tipo | Pruebalo |
|-----|----------|------|----------|
| 1 | [Platformer](/posts/202604-vibe30/day01-platformer/) | Juego | [Jugar](https://vibe30-day01-the-platformer.vercel.app) |
| 2 | [Snake](/posts/202604-vibe30/day02-snake/) | Juego | [Jugar](https://vibe30-day02-snake.vercel.app) |
| 3 | [Realm of Shadows](/posts/202604-vibe30/day03-rpg/) | Juego | [Jugar](https://vibe30-day03-rpg.vercel.app) |
| 4 | [Tetris](/posts/202604-vibe30/day04-tetris/) | Juego | [Jugar](https://vibe30-day04-tetris.vercel.app) |
| 5 | [Breakout](/posts/202604-vibe30/day05-breakout/) | Juego | [Jugar](https://vibe30-day05-breakout.vercel.app) |
| 6 | [Pomodoro](/posts/202604-vibe30/day06-pomodoro/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day06-pomodoro/releases/latest) |
| 7 | [GitDash](/posts/202604-vibe30/day07-gitdash/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day07-gitdash/releases/latest) |
| 8 | [NotesTUI](/posts/202604-vibe30/day08-notestui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day08-notestui/releases/latest) |
| 9 | [TaskTUI](/posts/202604-vibe30/day09-tasktui/) | TUI | [Release](https://github.com/nunocoracao/Vibe30-day09-tasktui/releases/latest) |
| 10 | [Miro Clone](/posts/202604-vibe30/day10-miroclone/) | App Web | [Probar](https://vibe30-day10-miroclone.vercel.app) |
| 11 | [Treelo](/posts/202604-vibe30/day11-trelloclone/) | App Web | [Probar](https://vibe30-day11-trelloclone.vercel.app) |
| 12 | [Wordle](/posts/202604-vibe30/day12-wordle/) | Juego | [Jugar](https://vibe30-day12-wordle.vercel.app) |
| 13 | [GitFolio](/posts/202604-vibe30/day13-githubportfolio/) | App Web | [Probar](https://vibe30-day13-githubportfolio.vercel.app) |
| 14 | [WeatherTUI](/posts/202604-vibe30/day14-weathertui/) | TUI | [Repo](https://github.com/nunocoracao/Vibe30-day14-weathertui) |
| 15 | [MyBrute Arena](/posts/202604-vibe30/day15-mybrute/) | Juego | [Jugar](https://vibe30-day15-mybrute.vercel.app) |
| 16 | [Tic-Tac-Toe: Evolved](/posts/202604-vibe30/day16-tictactoe/) | Juego | [Jugar](https://vibe30-day16-tictactoe-evolved.vercel.app) |
| 17 | [Project GENESIS](/posts/202604-vibe30/day17-genesis/) | Juego | [Jugar](https://vibe30-day17-genesis.vercel.app) |
| 18 | [PollBox](/posts/202604-vibe30/day18-pollbox/) | App Web | [Probar](https://vibe30-day18-pollbox.vercel.app) |
| 19 | [ReactionWall](/posts/202604-vibe30/day19-reactionwall/) | App Web | [Probar](https://vibe30-day19-reactionwall.vercel.app) |
| 20 | [MoodBoard](/posts/202604-vibe30/day20-moodboard/) | App Web | [Probar](https://vibe30-day20-moodboard.vercel.app) |
| 21 | [ChatRooms](/posts/202604-vibe30/day21-chatrooms/) | App Web | [Probar](https://vibe30-day21-chatrooms-nir8.vercel.app) |
| 22 | [LiveQ&A](/posts/202604-vibe30/day22-liveqa/) | App Web | [Probar](https://vibe30-day22-liveqa.vercel.app) |
| 23 | [RetroOS](/posts/202604-vibe30/day23-retroos/) | App Web | [Probar](https://vibe30-day23-retroos.vercel.app) |
| 24 | [Reblog](/posts/202604-vibe30/day24-reblog/) | App Web | [Probar](https://vibe30-day24-reblog.vercel.app) |
| 25 | [SoundScape](/posts/202604-vibe30/day25-soundscape/) | App Web | [Probar](https://vibe30-day25-soundscape.vercel.app) |
| 26 | [PixelForge](/posts/202604-vibe30/day26-pixelforge/) | App Web | [Probar](https://vibe30-day26-pixelforge.vercel.app) |
| 27 | [Terminal](/posts/202604-vibe30/day27-terminal/) | Nativa | [Release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest) |
| 28 | [ideA](/posts/202604-vibe30/day28-idea/) | Nativa | [Release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) |
| 29 | [n0ti0n](/posts/202604-vibe30/day29-n0ti0n/) | App Web | [Probar](https://blocknotes-lime.vercel.app) |
| 30 | [miniOs](/posts/202604-vibe30/day30-minios/) | App Web | [Probar](https://vibe30-day30-minios.vercel.app) |

---

*Este es el post final de la serie [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Los 30 proyectos son open source en [GitHub](https://github.com/nunocoracao/30DaysOfVibeCoding).*
