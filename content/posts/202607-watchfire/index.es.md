---
title: "Watchfire: una sala de control para agentes de programación con IA"
summary: "Una sala de control open source para ejecutar agentes de programación con IA en varios proyectos - aísla el trabajo, gestiona tareas y worktrees, y te avisa cuando de verdad hace falta tu atención. Seis meses, nueve versiones mayores y un problema meta que no deja de crecer: Watchfire ya construye Watchfire y, desde la v9, tu agente también puede conducirlo."
description: "Una sala de control open source para ejecutar agentes de programación con IA en varios proyectos - aísla el trabajo, gestiona tareas y worktrees, y te avisa cuando de verdad hace falta tu atención. Seis meses, nueve versiones mayores y un problema meta que no deja de crecer: Watchfire ya construye Watchfire y, desde la v9, tu agente también puede conducirlo."
categories: ["Tecnología", "IA", "Makers"]
tags: ["IA", "Claude Code", "vibe coding", "proyectos paralelos", "watchfire"]
date: 2026-08-02
draft: false
---

Los agentes de programación con IA dejaron de ser una demo hace cosa de un año. Claude Code, Codex, opencode, Gemini CLI, Copilot CLI, Cursor Agent - todos escriben código de verdad ya. El cuello de botella se ha movido. Ya no es "¿puede el agente construir esto?". Es "¿puedo seguir la pista de lo que hacen cinco agentes en seis repositorios sin volverme loco?".

Empecé a chocar con esa pared todos los días. Así que construí una herramienta. La llamé Watchfire.

**Watchfire es una sala de control open source para ejecutar agentes de programación con IA en varios proyectos: aísla el trabajo, gestiona tareas y worktrees de git, y te avisa cuando de verdad hace falta tu atención.** Está pensada para un desarrollador en solitario o un equipo pequeño que ya tenga varias tareas de agente de larga duración en marcha. No sustituye a tu IDE, y es excesiva para una sesión puntual de Claude Code.

Seis meses después, tiene una propiedad incómoda: **Watchfire construye Watchfire**. Cada funcionalidad de las que siguen fue especificada, ejecutada e integrada por agentes que el propio Watchfire orquestaba - incluida la versión que permite que *tu* agente haga lo mismo. Ese bucle es la razón de ser de este artículo, y voy a enseñar las pruebas.

Pero lo más útil que he aprendido en seis meses no tiene nada que ver con generar código. Tiene que ver con los proyectos en los que las tareas le dicen al agente que *no* decida. Esa es la segunda mitad de este artículo, y es la mitad que yo leería primero.

Es open source, Apache 2.0, y funciona en macOS, Linux y Windows:

{{< github repo="watchfire-io/watchfire" >}}

{{< figure src="/posts/202607-watchfire/img/tour/dashboard.webp" alt="El dashboard actual de Watchfire" caption="El dashboard de Watchfire hoy - pulso de trabajando/inactivo/hecho-hoy, un aviso de atención que se queda callado cuando todo va bien, e insights de la flota de la última semana: 69 tareas, 202 commits, +64.979 líneas netas. Ese último número es churn, no una afirmación de productividad." >}}

## El problema que forzó la herramienta

Durante unas semanas a principios de año iba dando tumbos entre cinco proyectos y tres ventanas de terminal. Cada proyecto tenía su propia sesión de Claude Code. Cada sesión tenía sus propias peticiones de permiso, sus propios tropiezos de rate limit, su propia tarea a medias que olvidaba en cuanto cambiaba de ventana. Los agentes hacían un trabajo estupendo. La pieza lenta era yo.

Algunas cosas en concreto:

- **Hacer de niñera de los prompts.** Cada comando de shell necesitaba aprobación. Cada escritura de fichero necesitaba aprobación. Volvía de un café y me encontraba un agente parado en el segundo prompt de una tarea de 50 pasos.
- **Sin vista agregada.** ¿Qué está ejecutándose de verdad? ¿Qué está bloqueado? ¿Qué hizo el agente #3 en la última hora mientras yo miraba al agente #1? Nada me lo decía.
- **Fallos silenciosos.** Los agentes morían en un conflicto de merge, un rate limit, un YAML mal formado, y simplemente... paraban. Me enteraba una hora después.
- **Contexto perdido.** Cambiar de proyecto significaba volver a explicar convenciones, volver a pegar el CLAUDE.md, volver a cargar el modelo mental de dónde estaba cada cosa.

Watchfire empezó como una vía de escape de domingo por la tarde a ese dolor.

## Qué es Watchfire hoy

Cuatro cosas que hace de verdad por ti:

- **Dejas de aprobar cosas.** El trabajo se registra como tareas con un prompt y criterios de aceptación, y luego se ejecuta sin supervisión. Vuelves y te encuentras una rama integrada, no un prompt en pausa.
- **Ves toda la flota de golpe.** Un dashboard sobre todos los proyectos: qué se está ejecutando, qué está bloqueado, qué ha terminado hoy, cuánto ha costado. El aviso de atención se queda callado salvo que algo te necesite de verdad.
- **Nada colisiona.** Cada tarea se ejecuta en su propia worktree de git detrás de un sandbox del sistema operativo, de modo que agentes en paralelo en varios proyectos no pueden corromper el trabajo de los demás y tienen una capacidad drásticamente reducida de llegar a tus credenciales.
- **El trabajo deja rastro.** Métricas por tarea - duración, coste, commits, ficheros, líneas, cómo acabó el merge - se agregan en Insights por proyecto y de toda la flota, además de exportaciones CSV/Markdown y un resumen semanal.

Actualmente soporta **seis backends de agente** a través de una única interfaz `Backend` - Claude Code, OpenAI Codex, opencode, Gemini CLI, GitHub Copilot CLI y Cursor Agent - cada uno en su propio directorio de configuración aislado (`CODEX_HOME`, `OPENCODE_CONFIG_DIR`, `COPILOT_HOME`) para que credenciales y prompts no se mezclen entre sesiones. Puedes cambiar de agente tarea por tarea.

### Dos capas de radio de acción

Esta es la parte que yo querría conocer si lo hubiera construido otra persona, porque "vete y déjalo correr" solo es razonable si sabes a qué puede llegar "eso".

Cada tarea se ejecuta tras **dos capas independientes de aislamiento**. La primera es una worktree de git: cada tarea recibe su propio checkout `watchfire/<task_number>`, de forma que dos agentes en el mismo repositorio no ven las ediciones a medias del otro, y nada llega a tu rama hasta que la ejecución termina bien y se integra. La segunda es un sandbox a nivel de sistema operativo alrededor del proceso del agente - **Seatbelt** en macOS, **Landlock** en Linux 5.13+, con un fallback de mount namespace vía **bubblewrap** en kernels más antiguos.

El sandbox es una allowlist de sistema de ficheros con opiniones. Escritura: el directorio del proyecto, temporales, y las cachés que necesitan las builds reales (`~/.npm`, `~/.cargo`, `~/go`, `~/.rustup`). Lectura: compiladores, bibliotecas del sistema, configuración de herramientas. Bloqueado de plano: `~/.ssh`, `~/.aws`, `~/.gnupg`, `.netrc`, `.npmrc`, ficheros `.env`, `.git/hooks`, y en macOS tus carpetas personales. Un agente que busque claves de despliegue en esas ubicaciones protegidas no encuentra nada allí.

Dos salvedades honestas, ambas expuestas con claridad (y no enterradas) en el [artículo sobre sandboxing](https://watchfire.io/blog/2026-05-19-how-watchfire-sandboxes-every-agent): el sandbox se centra en el sistema de ficheros y **no** bloquea HTTPS saliente a día de hoy, y **Windows funciona actualmente sin sandbox** - el aislamiento por worktree se aplica, la capa del sistema operativo no. Ambas están en la lista.

Esa combinación es lo que hace defendible todo lo demás en este artículo. Saltarse las peticiones de permiso solo es sensato cuando el radio de acción es una worktree desechable y un sistema de ficheros del que el agente no puede salir.

### Por dentro

Un **demonio en Go** (`watchfired`) se encarga de la orquestación, el sandboxing, la emulación de PTY, las worktrees y un servidor gRPC. Hablan con él tres clientes: una **TUI en Bubble Tea** para trabajo en terminal y SSH, una **GUI en Electron + React** que abre una ventana del sistema por proyecto, y una **CLI** ligera. El demonio anuncia su puerto a través de `~/.watchfire/daemon.yaml`, y un `flock` sobre el fichero de bloqueo garantiza un demonio por usuario - se acabó lo de "dos ventanas peleándose por la misma worktree". La salida del agente pasa por un PTY interpretado del lado del demonio por un emulador VT de verdad (`hinshun/vt10x`), así que el ANSI se ve bien en todas partes.

El estado es YAML en disco, en todas partes - un registro, ajustes globales, integraciones, y un `project.yaml` por proyecto más ficheros `.watchfire/tasks/<n>.yaml` - con escrituras atómicas (tmp + `fsync` + `rename`) desde la v6.0, que cerró a las malas una race condition de pérdida de datos. Todo se puede buscar con grep, comparar con diff y sobrevive a git.

Y desde la v9 hay un cuarto cliente que ni siquiera es una interfaz: `watchfire mcp serve` expone el orquestador entero como servidor MCP. Ese tiene sección propia.

## Una visita rápida

Lo que más eché de menos en aquellos primeros tiempos de solo terminal fue un *dashboard*. No una lista de proyectos - un estado. ¿Dónde estamos? ¿Qué está atascado? ¿Qué han hecho los agentes hoy? Es la captura que abre este artículo: una línea de pulso para trabajando / necesita atención / inactivo / hecho hoy, un aviso de todo en orden, insights de flota con ventanas de 7d/30d/90d/Todo, filtros, y una tarjeta por proyecto con sus propios recuentos de tareas y churn de código.

Haces clic en un proyecto y se abre en su propia ventana - el rediseño "Inferno" de la v8. La disposición es centrada en el chat: la conversación del agente es el panel ancho, y Tasks / Definition / Insights / Secrets / Trash / Settings viven en una barra lateral con pestañas a la derecha:

{{< figure src="/posts/202607-watchfire/img/tour/project-window.webp" alt="Una ventana de proyecto de Watchfire con el stream del agente a la izquierda y la cola de tareas a la derecha" caption="Una ventana de proyecto: primero el chat, todo lo demás es referencia. Esta es el repositorio del propio Watchfire, con 129 tareas, inactivo en una sesión nueva de Claude Code." >}}

Cada proyecto tiene una **Definition** en markdown que se incorpora al contexto del prompt. Es el resumen permanente del proyecto - qué es, qué convenciones importan, qué ficheros importan - y es lo que hace viable un flujo con varios proyectos, porque los agentes empiezan con contexto en lugar de con la mente en blanco:

{{< figure src="/posts/202607-watchfire/img/tour/definition.webp" alt="La pestaña Definition del proyecto" caption="La pestaña Definition. Se edita ahí mismo o saltas a $EDITOR." >}}

Los **Insights** por proyecto responden a "qué he hecho realmente esta semana" - tareas por día, desglose por agente, distribución de duraciones, coste, y desde la v8 también las métricas de código:

{{< figure src="/posts/202607-watchfire/img/tour/insights.webp" alt="Insights por proyecto" caption="Insights por proyecto: KPIs, tareas por día, gráfico de anillo por agente, distribución de duraciones. También hay un agregado de toda la flota en el dashboard principal." >}}

**Wildfire** es el modo autónomo: Watchfire ejecuta tareas listas, refina borradores y genera nuevas en bucle hasta que la definición del proyecto dice que está terminado. Recibió una GUI de primera en la v8 - un botón de arranque con modal de confirmación, y un indicador de fases en vivo mientras corre. El artículo [Inside Wildfire mode](https://watchfire.io/blog/2026-05-18-inside-wildfire-mode) tiene toda la mecánica:

{{< figure src="/posts/202607-watchfire/img/tour/wildfire-confirm.webp" alt="El modal de confirmación de Start Wildfire" caption="El modal dice en voz alta lo que normalmente se calla: un bucle autónomo que corre sin supervisión y gasta tokens continuamente, sustituyendo al agente que haya en el proyecto. Dos frases que me han salvado de mí mismo más de una vez." >}}

Los **Settings** globales ganaron subpáginas buscables con los valores por defecto de la flota - qué agente reciben los proyectos nuevos, y si integran, borran ramas y arrancan tareas listas automáticamente, todo sobreescribible por proyecto. El botón partido **Open** detecta qué CLIs de editor están realmente instaladas, desde VS Code y Cursor hasta Zed, JetBrains y Xcode, y funciona incluso cuando el PATH de la GUI viene pelado.

Para las horas en las que Watchfire no debería ser lo que ocupa la pantalla, la v8 añadió el **Mini Monitor** - una tira sin marco siempre visible - y un menú de bandeja con el mismo estado más el puerto del demonio:

{{< figure src="/posts/202607-watchfire/img/tour/mini-monitor.webp" alt="La ventana del Mini Monitor" caption="El Mini Monitor: toda la flota en una tira del tamaño de un post-it. La línea naranja es el único proyecto que está haciendo algo." >}}

El mismo flujo existe en una **TUI**, porque la mitad de mi trabajo ocurre por SSH contra una máquina Linux, donde las tareas se editan igual de bien que en la GUI. Una **CLI** ligera cubre todo lo que sabe hacer el demonio:

{{< figure src="/posts/202607-watchfire/img/tour/tui.webp" alt="TUI de Watchfire" caption="La TUI refleja la disposición de dos paneles de la GUI: tareas a la izquierda, stream del agente a la derecha, con atajos para chat / generate / plan / run all / wildfire / stop." >}}

{{< figure src="/posts/202607-watchfire/img/tour/cli-help.webp" alt="watchfire --help" caption="La superficie de la CLI: chat, configure, daemon, define, generate, init, integrations, metrics, plan, run, task, update, wildfire - y, desde la v9, mcp." >}}

## La prueba: 30 días de vibe coding

En abril me comprometí a [30 días, 30 proyectos construidos con IA](/posts/202604-vibe30/announcement/). Uno al día, todos los días. Claude Code con un plan Max 20x, Watchfire orquestando, Context7 MCP alimentando a los agentes con documentación fresca.

El plan era sacar proyectos paralelos. Lo que no esperaba: **Watchfire se convirtió en el proyecto sometido a prueba de esfuerzo cada santo día**, y la cola de issues que abrí para mí mismo se convirtió en la hoja de ruta de producto más agresiva que he llevado nunca.

Algunos momentos representativos de la [serie](/series/30-days-of-vibe-coding/):

- **Día 1 (Platformer)** - *"No me quedé ahí aprobando cada cambio de fichero. Watchfire puso las tareas en cola y fue resolviéndolas. Volví y tenía un juego funcionando."* El bucle de irse funcionó el primer día. Y expuso al instante todo lo que no estaba listo: salida de terminal ilegible, bucles de reinicio del agente en los rate limits, el sandbox bloqueando `~/Desktop` en macOS.
- **Día 12 (Wordle)** - *"Cada tarea añadía una categoría concreta de pulido, y ninguna rompió lo que ya había."* El modelo incremental de tareas fue la única razón por la que eso funcionó. Los prompts en bloque se rompían siempre; muchas tareas pequeñas y acotadas, no.
- **Días 27-28 (Terminal, ideA)** - Infierno de CI/CD nativo multiplataforma. *"Watchfire ayudó muchísimo aquí metiéndose en bucles interminables de depurar, probar, ejecutar, fallar y repetir hasta que el pipeline funcionó por fin. Sin esa persistencia, habría abandonado las releases multiplataforma."*
- **Día 30 (miniOs)** - *"El día 1 construí un juego de plataformas a partir de una frase. El día 30 construí un sistema operativo que contiene ese juego, y todo lo que hice por el camino."*

A lo largo de los 30 días: **~450 tareas ejecutadas a través de Watchfire y ~1.200 commits**, con unas 326 mil líneas modificadas - ese es el recuento del propio Watchfire de inserciones más borrados, una medida de churn y no una afirmación de productividad. Solo durante el reto salieron cinco versiones mayores de Watchfire (Ember → Spark → Blaze → Beacon → Flare).

En algún punto de todo eso la herramienta cruzó una línea que yo no había planeado.

## La parte meta

Hay un momento - en algún punto de la segunda semana - en que el bucle se cierra. Estás usando Watchfire para construir un proyecto. El proyecto saca a la luz un bug en Watchfire. Registras el bug como tarea de Watchfire. Watchfire lanza un agente para arreglar Watchfire. El arreglo se publica. Luego vuelves al proyecto original, que sigue esperando en otra pestaña.

La primera vez tiene gracia. A la décima ya es simplemente el flujo de trabajo. Para cuando llega el resumen, es la idea entera:

> *O más exactamente, Watchfire está construyendo Watchfire ahora. La herramienta orquesta su propio desarrollo.*

Eso se escribió en mayo. En julio dejó de ser una frase en un artículo y pasó a ser un proceso de release. Cada tarea de la cola de la v9 - el esqueleto del servidor MCP, las herramientas de fábrica de tareas, las de ejecución, las de inspección - fue escrita, ejecutada e integrada a través de Watchfire:

{{< figure src="/posts/202607-watchfire/img/meta/building-v9.webp" alt="La ventana de proyecto del propio Watchfire con la cola de tareas de la v9 en desarrollo" caption="La v8 construyendo la v9: nueve tareas en desarrollo, cada una de ellas una pieza del servidor MCP, ejecutándose en el repositorio del propio Watchfire dentro de Watchfire." >}}

Y cuando la cola terminó, fue el agente quien preparó la release:

{{< figure src="/posts/202607-watchfire/img/meta/v9-release-chat.webp" alt="El agente de Watchfire informando de que la v9.0.0 está preparada como draft release" caption="El desenlace de la v9.0.0, literal: versión subida, CHANGELOG escrito, 22 commits publicados, workflow de release en verde, 20 artefactos preparados como borrador - y una parada en seco en el único paso que no se puede deshacer, esperando un sí. Acertó con el límite, que es la parte que de verdad me importaba." >}}

La web también está en el bucle. [watchfire.io](https://watchfire.io) - documentación, tour, changelog, blog - es un proyecto de Watchfire como cualquier otro, construido tarea a tarea por aquello que documenta. Hay un artículo entero sobre eso, escrito por el proceso que describe: [Watchfire eats its own dogfood](https://watchfire.io/blog/2026-05-19-eating-our-own-dogfood).

{{< figure src="/posts/202607-watchfire/img/meta/website-v91.webp" alt="Un agente de Watchfire actualizando watchfire.io a la v9.1" caption="Cuatro palabras de prompt - \"update watchfire website to 9.1\" - y el agente encuentra todos los sitios donde se afirma la versión (badge del hero, JSON-LD, changelog, RSS), escribe las notas de la release, verifica la build y se detiene antes de hacer commit. Fíjate en el criterio a mitad de camino: dejó un badge apuntando a la 9.0 porque esa sigue siendo la release insignia y la 9.1 es una corrección de bugs." >}}

La razón por la que nada de esto es un truco es de lo más mundana. Cada roce que sentí quedó registrado y arreglado por la misma maquinaria que lo causaba. Cada "ojalá hiciera..." se convirtió en un borrador de tarea en segundos, y la distancia entre notar una carencia y publicar el arreglo se redujo a horas. Eso no demuestra que Watchfire tenga la superficie adecuada para *tu* trabajo - demuestra que la tiene para el único flujo que pude observar con todo detalle, cada día, durante seis meses. Da la casualidad de que esa es una buena forma de construir una herramienta. Y la v9 es esa observación convertida en producto: si Watchfire ya podía construir Watchfire, lo único que faltaba era dejar que *tu* agente condujera también.

## Enchufar un chat a la fábrica

Lo que me lleva a la parte de la v9 que más he disfrutado. Conectar un agente a la fábrica no es una búsqueda del tesoro por ficheros de configuración - es una página de ajustes. Watchfire detecta qué CLIs de agente tienes en la máquina y escribe la entrada MCP en la configuración de cada una con un solo clic:

{{< figure src="/posts/202607-watchfire/img/meta/mcp-settings.webp" alt="La página Settings → MCP con instalaciones de un clic por agente" caption="Settings → MCP: una tarjeta por CLI de agente. Claude Code es un clic - Watchfire escribe la entrada en ~/.claude.json. Codex y Copilot se detectaron automáticamente y estaban a un Install de distancia. Hay un snippet copiable para cualquier otra cosa. Solo stdio, local a la máquina, nada en la red." >}}

Pulsé el botón de Claude Code, reinicié una sesión, y un terminal corriente se convirtió en cliente de Watchfire. Le preguntas qué se está ejecutando y te lista todos los proyectos registrados, te dice cuál tiene un bucle Wildfire en fase de ejecución, y te trae la cola de tareas entera de ese proyecto - sin una sola ventana de Watchfire abierta.

En cuanto tienes eso, un puñado de flujos dejan de ser ciencia ficción:

- **Planificar fuera, fabricar dentro.** Haces lluvia de ideas con un agente en el chat - cualquier chat - y, en lugar de soltarte código, registra tareas acotadas con criterios de aceptación y deja que Watchfire las ejecute en sandbox, en worktrees, con merges y métricas. La conversación sigue siendo una conversación; el código ocurre en la fábrica.
- **Trabajo entre proyectos desde un solo sitio.** Una sesión sentada en el repositorio de este blog puede registrar un bug que acaba de encontrar en el repositorio de Watchfire, o lanzar una actualización de documentación en el proyecto de la web, sin cambiar de directorio ni de ventana.
- **Agentes revisando agentes.** El agente exterior lee `get_task_diff` después de una ejecución y decide si registra un seguimiento - un bucle de revisión en el que el revisor nunca toca la worktree.
- **Informes de bug que se escriben solos.** Lo primero que le pedí a una sesión conectada fueron los insights de un proyecto, y me devolvió un muro de ceros: las tareas históricas nunca habían tenido `completed_at` marcado, así que todas las métricas que dependían de él salían vacías. Eso se convirtió en tarea, y la tarea se convirtió en la v9.1 dos días después. El agente exterior encontró el bug *usando* la fábrica.

La metáfora de la fábrica deja de ser metáfora en este punto. Watchfire se encarga de la fabricación - aislamiento, ejecución, integración, contabilidad - y cualquier cosa que hable MCP puede ponerse al mostrador de pedidos.

## La prueba de esfuerzo: Neon Fable

Para averiguar si la v9 aguantaba de verdad, la apunté a algo deliberadamente irrazonable: `rpg-fable-test`, un RPG cyberpunk de navegador llamado **Neon Fable**, construido casi por completo por Wildfire, con mi papel reducido a escribir la Definition del proyecto y ver cómo se vaciaba la cola.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-definition.webp" alt="Wildfire ejecutándose con la definición del proyecto Neon Fable abierta" caption="El montaje completo: una Definition que describe el juego (historia ramificada en tres actos, renderizador isométrico, combate por turnos, inventario de ciberimplantes) y un bucle Wildfire que la convierte en tareas. La v1 - el bucle jugable completo - salió como las tareas #1-18." >}}

La cola de la v1 llevó el juego desde `npm create vite` hasta un bucle terminado: creación de personaje, historia ramificada en tres actos, combate por turnos con semilla, inventario y ciberimplantes, múltiples finales, un códice de finales, New Game+. Todo el pixel art escrito *en código* como rejillas de cadenas indexadas por paleta, porque es sobre eso sobre lo que un agente puede iterar. La cola de la v2 - una revisión gráfica de alto detalle y un sistema modular de apariencia de personaje - la generó el propio Wildfire. El proyecto está ahora en **119 tareas, 103 de ellas hechas e integradas**, con una batería de pruebas que pasó 902 tests en torno a la tarea #40 y que desde entonces no ha dejado de crecer.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-wildfire.webp" alt="Wildfire ejecutando una tarea de arte de Neon Fable" caption="Wildfire en su fase de ejecución sobre \"Day-phase neon states - dusk, night, late-night\", escribiendo a mano rampas de color emisivas en TypeScript. El servidor de desarrollo Vite en la shell acoplada recarga el juego según entra cada cambio." >}}

Y esto es lo que sale por el otro lado. El creador de personajes es todo el sistema de apariencia de la v2 hecho visible - composición de sprites por capas, catálogos por ranura, vista previa en vivo, aleatorización con bloqueos:

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-appearance.webp" alt="El paso de apariencia en la creación de personaje de Neon Fable" caption="Las tareas #33-53 en una sola pantalla: composición de sprites por capas, catálogos de pelo/ojos/cejas/boca/detalles faciales, canales de color, una vista previa rotatoria en vivo, y un \"surprise me\" que respeta los bloqueos por ranura. Cada sprite es una rejilla de cadenas en un fichero TypeScript." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-plaza.webp" alt="Juego isométrico en Cinder Row Plaza" caption="Cinder Row Plaza: tiles isométricos de 64×32, cartelería de neón animada, una docena de NPCs distintos a través del mismo sistema de capas, un minimapa y diálogo ramificado - cada píxel escrito como código por un agente que no puede ver." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-combat.webp" alt="Combate por turnos en Neon Fable" caption="Combate: orden de iniciativa arriba, presupuestos de movimiento y de acción, un registro continuo. El generador aleatorio con semilla que hay debajo fue la tarea #6, allá en la cola de la v1." >}}

Neon Fable no es un producto y no va a serlo. Es un proyecto de demostración, hecho para ver qué pasa cuando apuntas la fábrica a algo incómodo. Puedes [jugarlo en el navegador](https://nunocoracao.github.io/neon-fable/) y [leer el código](https://github.com/nunocoracao/neon-fable). Como prueba de esfuerzo ya ha respondido a la pregunta: no se limita a arreglar sus propios bugs y escribir su propia documentación - dado algo tan quisquilloso como *el pixel art y el tacto de un juego*, sigue entregando.

## La otra mitad: proyectos que son sobre todo pensar

Neon Fable es el caso vistoso, y también el engañoso. Hace que Watchfire parezca una máquina de generar código que no escribiste - que es la mitad del flujo que sale bien en la foto, y la mitad de la que menos me fío.

Los dos proyectos más recientes de mi dashboard son lo contrario. **Anima** es un producto de agente personal - un agente persistente por persona - y **FitQuest** es un registro de fitness que gamifica métricas de todos los dispositivos que tengas. Ambos tienen ambiciones reales. Ninguno tiene todavía código de producto. Lo que tienen es un directorio `docs/`, un registro de decisiones, y una Definition de proyecto cuya primera regla es *la documentación es la fuente de verdad; el código sigue a la documentación, nunca al revés*.

Por eso las tareas no se parecen en nada a las de Neon Fable:

- *"Afilar la cuña - primer usuario, caso de uso principal, modelo de interfaz (**recomendar, no cerrar**)"*
- *"Informe de evidencias para la decisión KMP vs Flutter - **solo investigación, no decidir**"*
- *"Auditoría de contraste y de visión cromática de la paleta del HUD"*
- *"Reglas de texto conformes con el MDR en la voz de marca, y auditar todas las cadenas visibles al usuario en la PoC"*

Lee otra vez esos paréntesis. Son instrucciones para *no* ser autónomo - reúne las evidencias, señala los compromisos, déjame la decisión a mí. La Definition de Anima lleva la misma postura como regla permanente: lo que esté marcado como cerrado está decidido, y si una tarea saca a la luz una laguna o una contradicción, se le dice al agente que **pare, lo saque a la superficie, arregle el documento y luego continúe**, en vez de inventarse un rumbo. La de FitQuest dice que falle la tarea directamente - `success: false` con un motivo - antes que salirse del camino documentado.

Eso convierte la misma maquinaria en algo más parecido a un asistente de investigación con rastro documental: el trabajo se acota, se aísla, se ejecuta y se integra exactamente igual que antes, pero lo que aterriza en el diff es un informe de decisión o una actualización de documentación en lugar de una funcionalidad. La Definition deja de ser relleno de contexto en ese momento; pasa a ser gobernanza.

Ambos proyectos sí tienen artefactos, porque tarde o temprano hay que mirar la cosa:

{{< figure src="/posts/202607-watchfire/img/projects/anima-ori.webp" alt="La pantalla de onboarding de Anima" caption="La eclosión de Anima: un volumen de luz a la deriva que se condensa en una criatura y luego hace seis preguntas - cada una o bien moldea al ser o bien se convierte en su primer recuerdo. Hecho como prototipo WebGL autónomo bajo docs/explorations/, porque el documento de diseño dice que los prototipos demuestran cosas antes de que exista código." >}}

{{< figure src="/posts/202607-watchfire/img/projects/fitquest-today.webp" alt="La pantalla de hoy de FitQuest en iOS" caption="La prueba de concepto desechable de FitQuest en SwiftUI - datos reales de HealthKit, misiones con etapas y rachas, una barra de XP. Explícitamente no es el producto: existe para comprobar si la mecánica de misiones sobrevive al contacto con un dispositivo real, y lo aprendido vuelve a la documentación antes de tirar el código." >}}

Ciento tres tareas integradas en el juego; treinta y ocho cuidadosamente acotadas en los otros dos. Mismo demonio, mismas worktrees, mismo sandbox. La diferencia está enteramente en cómo se escribe la Definition - que es la lección de verdad a los seis meses, y la que le daría a quien esté empezando: **la herramienta vale lo que valga el encargo que le des, y saber cuándo decirle que no decida es la mayor parte del oficio.**

## Cómo llegó hasta aquí

La primera versión ni siquiera se llamaba Watchfire. Se llamaba **FORGE** - una única ventana de Electron con un selector de proyectos, una lista de tareas y un terminal empotrado ejecutando Claude Code. Tosca: modelo de tareas endeble, salida ilegible, cambiar de proyecto obligaba a reiniciar la aplicación. Pero la idea central ya estaba ahí - encolar trabajo, verlo ejecutarse, no tocar el terminal directamente.

{{< figure src="/posts/202607-watchfire/img/history/forge-jan.webp" alt="FORGE el 12 de enero de 2026" caption="12 de enero: FORGE. Un proyecto cada vez, disposición con pestañas, sin dashboard, sin métricas, sin multiagente. El avatar en pixel art de Claude Code en el mensaje de bienvenida duró más de lo que debería." >}}

A principios de febrero rehíce el repositorio desde cero en Go - gRPC en vez de HTTP, YAML en vez de SQLite, tres binarios en vez de un monolito Electron. Esa es la base de código que sigue funcionando hoy. Luego llegó abril, y el versionado cogió un tema: cada versión mayor lleva nombre de fuego, y la cadencia te dice exactamente qué dolió ese mes.

- **v1.0 "Ember"** *(principios de abril)* - primera release de verdad. Descubrimiento de transcripciones desde `~/.claude/projects/` de Claude Code, una protección contra bucles de reinicio tras tres cierres inesperados, el arreglo de Seatbelt para proyectos en `~/Desktop`.
- **v2.0 "Spark"** *(mediados de abril)* - la interfaz de backends enchufables. Codex, opencode y Gemini CLI salen el mismo día, con cambio de agente por tarea y aislamiento de configuración por sesión.
- **v3.0 "Blaze"** *(finales de abril)* - Copilot CLI como 5.º backend, más quince días de hemorragia detenida: un bug `EXDEV` entre sistemas de ficheros que se comía las actualizaciones en Linux, rotación de la lista de tareas, bucles de actualización de la GUI.
- **v4.0 "Beacon"** *(día 28)* - el giro de ejecutor de tareas a herramienta de *operaciones*. Dashboard rehecho, métricas por tarea, Insights, exportaciones, resumen semanal, notificaciones del sistema, relés a Slack/Discord/webhooks con verificación de firma, PR automática en GitHub.
- **v5.0 "Flare"** *(día 30)* - bots OAuth para Slack y Discord, un servidor HTTP de entrada con rate limiting e idempotencia, paridad de merge para GitLab/Bitbucket, y un arreglo para `run-all`, que se paraba en silencio cuando fallaba un merge. Resulta que un dashboard silencioso es el segundo peor dashboard.
- **v6.0 "Phoenix"** *(principios de mayo)* - escrituras atómicas de YAML, el demonio singleton con `flock`, Cursor Agent como 6.º backend, y una TUI con scrollback de verdad.
- **v7.0 → v7.4 "Forge"** *(mayo-junio)* - sí, el nombre original, reciclado como nombre en clave mucho después de que aquello a lo que pertenecía hubiera sido reescrito y desechado. Reordenación de tareas por todas partes, una ventana de chat que deja de saltar al principio, modo de chat enfocado, y mi mejor batallita: un log del demonio por fin limitado en tamaño después de que el de un usuario llegara a **300 GB** en disco sin que nadie se diera cuenta ([post-mortem](https://watchfire.io/blog/2026-05-29-forge-7-3-the-300gb-log)).
- **v8.0 "Inferno"** *(finales de junio)* - una ventana del sistema por proyecto, una ventana principal de control, la GUI de Wildfire, el Mini Monitor, y métricas de salida de código que miden código entregado en vez de tareas cerradas. ([artículo de la release](https://watchfire.io/blog/2026-06-29-inferno-8-0-parallel-workspaces))
- **v9.0 "Firestorm"** *(26 de julio)* - la inversión de papeles: una fábrica MCP de 18 herramientas, solo stdio, con modo `--read-only` y protecciones por todas partes. ([artículo de la release](https://watchfire.io/blog/2026-07-26-firestorm-9-0-watchfire-as-a-factory))
- **v9.1** *(29 de julio)* - el arreglo de `completed_at` del que hablaba hace unas secciones, rellenando retroactivamente ~580 tareas históricas para que Insights, exportaciones y resumen se enciendan todos.

Una captura más, y luego vuelve a mirar la que abre este artículo:

{{< figure src="/posts/202607-watchfire/img/history/watchfire-april.webp" alt="Watchfire en abril de 2026" caption="27 de abril: la GUI de la reescritura en Go - reconocible, pero sin Insights, sin KPIs de flota, sin vistas previas en vivo. Esta es la versión que aguantó la mayor parte del reto de los 30 días." >}}

Catorce semanas entre esas dos. La misma herramienta.

## Qué viene ahora

- Más backends de agente según vayan apareciendo. La interfaz `Backend` es el único punto de integración - cualquier cosa que hable shell y produzca una transcripción puede entrar.
- Una superficie MCP más amplia: herramientas de inspección más ricas, y permitir que agentes exteriores de larga duración supervisen flotas enteras en vez de proyectos sueltos.
- Mejores herramientas de diff y revisión. El visor integrado ya está; falta una superficie estilo PR de "revisar y luego integrar" para las tareas que necesitan ojo humano.
- Flujos de equipo. El modelo de tareas en ficheros ya sobrevive a git - listas de tareas compartidas y superficies de revisión son la extensión natural.

## Pruébalo

{{< github repo="watchfire-io/watchfire" >}}

En macOS, instalarlo es una línea:

```bash
brew tap watchfire-io/tap && brew install --cask watchfire-io/tap/watchfire
```

Todo lo demás: [descargar la última versión](https://github.com/watchfire-io/watchfire/releases/latest) · [documentación](https://watchfire.io/docs) · [changelog](https://watchfire.io/changelog) · [blog](https://watchfire.io/blog)

Si andas haciendo malabares con más de un agente de IA y te has descubierto saltando entre terminales, puede que sea la pieza que te falta. A mí me lo fue.

*Seis meses, nueve releases, y una herramienta que acabó construyéndose a sí misma. La versión de "vibe coding" en la que todavía tienes que entregar algo al final del día.*
