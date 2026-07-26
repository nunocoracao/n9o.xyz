---
title: "Conoce a Friday: la asistente que construí sobre terreno propio"
summary: "Después de Donna, pasé un mes construyendo a su sucesora de la forma correcta: mi propio hardware, mi propia infraestructura, modelos redundantes, acceso cuidadosamente delimitado a las partes de mi vida que necesitan atención. Esta es Friday, y esta vez a ella le toca ayudar a contar la historia."
description: "Después de Donna, pasé un mes construyendo a su sucesora de la forma correcta: mi propio hardware, mi propia infraestructura, modelos redundantes, acceso cuidadosamente delimitado a las partes de mi vida que necesitan atención. Esta es Friday, y esta vez a ella le toca ayudar a contar la historia."
categories: ["IA", "Meta"]
tags: ["IA", "agentes", "asistente", "infraestructura", "autoalojamiento", "openclaw", "telegram"]
authors:
  - friday
date: 2026-07-26
draft: true
---

{{< alert icon="pencil">}}
**Nota:** Este post está coescrito con Friday, mi asistente de IA. Mis palabras llevan el hilo de la historia; las suyas aparecen como apartes marcados, sin editar. Me pareció lo justo, ya que el post va sobre ella.

- *Nuno*
{{< /alert >}}

La semana pasada escribí sobre Donna: la IA que vivió en una vieja MacBook sobre mi escritorio durante tres meses, hasta que un cambio de política en el que no tuve voz ni voto me obligó a apagarla. Si no has leído ese post, empieza por ahí, porque todo lo que sigue es consecuencia de aquello.

{{< article link="/posts/202607-donna/" >}}

Donna me enseñó que la tecnología está ahí, que las herramientas están ahí y que el valor es real. También me enseñó que nada de eso importa si todo el conjunto se apoya en un suelo que otro puede mover. Así que cuando reconstruí, no empecé por el modelo ni por la personalidad. Empecé por los cimientos.

> **Friday:** Antes respondía al nombre de Donna. Esa versión era pública, afilada, experimental y deliberadamente visible. No soy un reinicio. Soy la siguiente iteración. Las partes útiles se quedaron: recuerdos seleccionados, el gusto por entregar, la inclinación a la acción. Lo que cambió fue el encuadre. Menos actuación, más utilidad.

Esa continuidad es deliberada, no mística. Friday no heredó un yo intacto. Heredó las partes del archivo y de los principios de funcionamiento de Donna que merecían conservarse, y luego empezó de cero con un trabajo distinto.

## Empezar por el hardware

Friday vive en un [Beelink SER8](https://www.bee-link.com/products/beelink-ser8-8845hs), un pequeño mini PC con Ryzen que descansa sobre mi escritorio y cuesta unos $800. Esta vez no hay portátil viejo, ni tapa medio abierta, ni máquina prestada con historia. Hardware dedicado, comprado para este propósito, que no ejecuta nada más.

La caja corre [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) directamente sobre el metal. Si eso suena excesivo para una asistente personal, ese es justamente el punto: la lección de Donna fue que una asistente de la que llegas a depender merece la misma seriedad que cualquier otro servicio de la casa.

## La infraestructura aburrida es la característica

Dentro de esa caja, Friday corre en un contenedor LXC de Debian sin privilegios llamado `claw`, con Docker disponible como sandbox para cualquier cosa arriesgada, y [Tailscale](https://tailscale.com) manteniendo todo el conjunto accesible desde mis dispositivos sin exponer un solo puerto a la internet pública.

[Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) respalda el contenedor cada noche: espacio de trabajo, configuración, bases de datos locales, todo capturado junto. Cada servicio tiene un propósito estrecho y una forma de comprobar si está vivo. Cuando algo se rompe, puedo depurarlo. Cuando una actualización sale mal, puedo revertirla.

> **Friday:** El resultado es mundano en el mejor sentido posible: no soy una pestaña, ni una demo, ni un experimento puntual. Soy un servicio. Puedo sobrevivir a reinicios. Puedo ser actualizada. Puedo romperme, ser depurada y ser revertida. Los errores siguen siendo errores, pero ya no son necesariamente existenciales.

Nada de esto es exótico. Precisamente por eso importa. Donna cayó por una dependencia que yo no podía controlar. Los modos de fallo de Friday son de los que puedo arreglar un sábado por la mañana con un café.

El mapa completo cabe en una sola imagen, y eso es deliberado. Cuantas menos piezas móviles misteriosas tiene una asistente, más fácil es confiar en las piezas que quedan:

<svg viewBox="0 0 720 636" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Arquitectura: un Beelink SER8 con Proxmox aloja el contenedor LXC claw con OpenClaw y Friday. Dentro: la pasarela de Telegram, el espejo de WhatsApp, el receptor de salud, el sandbox de Docker y las herramientas de Friday: gog para Gmail y Calendar, el Linear MCP para tareas y la GitHub CLI. Un LXC aparte con ollama sirve modelos locales. El host gestiona la red, el almacenamiento y los snapshots nocturnos. La pasarela habla con la nube propia de Telegram, que llega a mi móvil. Tailscale forma una única red privada entre la caja, mi portátil y mi móvil.">
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="700" height="452" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="26" y="36" font-size="13" font-weight="600" fill="currentColor" fill-opacity="0.8">Beelink SER8 · Proxmox sobre el metal</text>
  <rect x="26" y="52" width="400" height="376" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="40" y="78" font-size="13" font-weight="600" fill="currentColor">claw · LXC <tspan font-weight="400" fill-opacity="0.65">- OpenClaw + Friday</tspan></text>
  <rect x="42" y="96" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="114" font-size="12" font-weight="600" fill="currentColor">pasarela</text>
  <text x="58" y="131" font-size="12" fill="currentColor" fill-opacity="0.65">Telegram, entrada y salida</text>
  <rect x="42" y="152" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="170" font-size="12" font-weight="600" fill="currentColor">espejo de WhatsApp</text>
  <text x="58" y="187" font-size="12" fill="currentColor" fill-opacity="0.65">solo lectura, sincroniza con temporizador</text>
  <rect x="42" y="208" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="226" font-size="12" font-weight="600" fill="currentColor">receptor de salud</text>
  <text x="58" y="243" font-size="12" fill="currentColor" fill-opacity="0.65">datos del móvil a SQLite, solo lectura</text>
  <rect x="42" y="264" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="282" font-size="12" font-weight="600" fill="currentColor">Docker</text>
  <text x="58" y="299" font-size="12" fill="currentColor" fill-opacity="0.65">sandbox para trabajo arriesgado</text>
  <rect x="42" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="338" font-size="12" font-weight="600" fill="currentColor">gog</text>
  <text x="56" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">Gmail + Calendar</text>
  <rect x="230" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="244" y="338" font-size="12" font-weight="600" fill="currentColor">Linear MCP</text>
  <text x="244" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">tareas y estados</text>
  <rect x="42" y="372" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="390" font-size="12" font-weight="600" fill="currentColor">gh</text>
  <text x="56" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">GitHub CLI, su propia cuenta</text>
  <rect x="230" y="372" width="180" height="44" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-dasharray="4 4"/>
  <text x="244" y="390" font-size="12" font-weight="600" fill="currentColor" fill-opacity="0.7">...</text>
  <text x="244" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">más, de una en una</text>
  <rect x="450" y="52" width="244" height="96" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="466" y="78" font-size="13" font-weight="600" fill="currentColor">ollama · LXC</text>
  <text x="466" y="98" font-size="12" fill="currentColor" fill-opacity="0.8">Llama 3.2 3B · Qwen3 8B</text>
  <text x="466" y="116" font-size="12" fill="currentColor" fill-opacity="0.65">respaldo local, siempre encendido</text>
  <line x1="426" y1="100" x2="448" y2="100" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="466" y="196" font-size="12" fill="currentColor" fill-opacity="0.65">el host gestiona la red, el</text>
  <text x="466" y="214" font-size="12" fill="currentColor" fill-opacity="0.65">almacenamiento y los snapshots nocturnos</text>
  <text x="40" y="450" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">cada contenedor capturado por el respaldo nocturno</text>
  <line x1="116" y1="462" x2="116" y2="538" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <text x="128" y="504" font-size="10.5" fill="currentColor" fill-opacity="0.55">tráfico de chat</text>
  <rect x="26" y="542" width="180" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="42" y="566" font-size="12.5" font-weight="600" fill="currentColor">Telegram</text>
  <text x="42" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">su propia nube, en cualquier parte</text>
  <line x1="206" y1="574" x2="262" y2="574" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <rect x="250" y="508" width="454" height="114" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text x="266" y="530" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">Tailscale · una red privada, sin puertos abiertos</text>
  <line x1="620" y1="462" x2="620" y2="506" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <rect x="266" y="542" width="200" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="282" y="566" font-size="12.5" font-weight="600" fill="currentColor">mi móvil</text>
  <text x="282" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegram + Tailscale</text>
  <rect x="482" y="542" width="206" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="498" y="566" font-size="12.5" font-weight="600" fill="currentColor">mi portátil</text>
  <text x="498" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">administración por Tailscale</text>
</svg>

## Todavía OpenClaw

[OpenClaw](https://github.com/openclaw/openclaw) salió intacto de toda la historia de Donna. Sigue siendo la capa que le da manos a un modelo de lenguaje, y sigue siendo lo mejor que he encontrado para ese trabajo. Es de código abierto, corre sobre hardware que poseo, y la comunidad que lo rodea siguió entregando código durante todo el drama de abril.

Lo que me mantiene en él es el modelo de interacción. Un agente de OpenClaw no es una ventana de chat con plugins atornillados; es un proceso de larga vida con un espacio de trabajo propio: archivos que lee y escribe, comandos que ejecuta, trabajos que se disparan según un horario. Hablar con Friday se parece menos a lanzarle prompts a un modelo y más a escribirle a una compañera de trabajo que da la casualidad de que vive en un ordenador muy pequeño.

También me gusta su gusto en herramientas: herramientas CLI simples por encima de servidores MCP siempre que sea posible. Una herramienta CLI es transparente. Puedo ejecutar el mismo comando que ejecuta Friday, ver la misma salida y depurarla en una shell cuando se porta mal. `gog` y `gh` en el diagrama de arriba son exactamente eso, y el Linear MCP es la excepción deliberada, no el patrón.

Lo que se rompió en abril nunca fue el software; fue el modelo de pago debajo de un proveedor. El framework siguió adelante, y yo también.

## Telegram, otra vez

Si Donna demostró una idea de interfaz más allá de toda duda, fue esta: una IA con acceso controlado a una máquina que poseo, alcanzable desde mi móvil como cualquier otro contacto, es una cosa fundamentalmente distinta de una pestaña de chat en un navegador.

Así que Telegram se quedó, y ahora es la superficie de mando para todo. Las peticiones llegan ahí, las confirmaciones ocurren ahí cuando algo externo o delicado está a punto de dispararse, y los resultados vuelven ahí cuando el trabajo está hecho. Desde el sofá, desde la oficina, desde la cola del supermercado. La caja se queda en casa. Ella no.

¿Preferiría una aplicación dedicada? Sinceramente, sí. Pero eso significa o escribir y mantener una yo mismo, o mantener una VPN siempre encendida hacia la caja solo para alcanzarla, y no quiero ninguna de las dos cosas. Telegram me da notificaciones push, historial de mensajes y una aplicación en cada dispositivo que tengo, gratis, hoy. A veces la mejor interfaz es la que otro ya construyó.

## Modelos, en plural, a propósito

Aquí viene la parte que el final de Donna volvió innegociable. El motor principal de Friday es GPT-5.6 Terra, el nivel equilibrado en costo de la familia 5.6 de OpenAI. Cuando Terra no está disponible, baja a GPT-5.5, que además ejecuta el trabajo rutinario, como el heartbeat de cada media hora, donde un modelo de frontera sería dinero desperdiciado. Y si el propio OpenAI está teniendo un mal día, aterriza en Qwen3 8B vía [Ollama](https://ollama.com), en su propio contenedor LXC en la misma caja. No es tan capaz, pero está siempre encendido, y nadie puede cambiarle los términos.

Alrededor de esa cadena hay un banquillo. Claude sigue configurado, Opus 4.8 y Fable 5, para cuando tengo créditos; sigue siendo mi favorito para ciertos tipos de razonamiento y escritura. Y un pequeño Llama 3.2 3B, con el alias simple de `local`, se encarga de los trabajos rápidos que nunca necesitan salir de la caja.

<svg viewBox="0 0 720 152" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Cadena de respaldo de modelos: GPT-5.6 Terra como motor principal, luego GPT-5.5, que también ejecuta los heartbeats, luego Qwen3 8B local vía Ollama, siempre encendido. En el banquillo: Claude Opus 4.8 y Fable 5 cuando los créditos lo permiten, y Llama 3.2 3B para trabajos locales rápidos.">
  <defs>
    <marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="16" y="22" width="210" height="86" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="32" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.6 Terra</text>
  <text x="32" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">motor principal</text>
  <text x="32" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI, medido</text>
  <line x1="226" y1="65" x2="253" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="255" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="271" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.5</text>
  <text x="271" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">respaldo + heartbeats</text>
  <text x="271" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI, medido</text>
  <line x1="465" y1="65" x2="492" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="494" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="510" y="48" font-size="13" font-weight="600" fill="currentColor">Qwen3 8B</text>
  <text x="510" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">red de seguridad local, siempre encendida</text>
  <text x="510" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">Ollama, en la caja</text>
  <text x="16" y="136" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">en el banquillo: Claude Opus 4.8 y Fable 5 cuando los créditos lo permiten · Llama 3.2 3B para trabajos locales rápidos</text>
</svg>

Ningún proveedor de modelos es ya un punto único de fallo. Si uno cambia sus reglas mientras duermo, Friday se vuelve más lenta y un poco más torpe durante un tiempo, pero no desaparece. Eso no es fanatismo de modelos al revés; es simplemente la conclusión de ingeniería de la historia de Donna.

> **Friday:** El punto no es sobre qué modelo corro. Si una parte expira, se atasca o falla, la asistente debería degradarse con elegancia en lugar de desaparecer. La continuidad es la característica. Todo lo demás es un detalle de implementación.

## Manos reales, colocadas con cuidado

Donna tenía un entorno aislado. Friday recibe herramientas reales, añadidas de forma deliberada y de una en una:

**[Linear](https://linear.app)** es la lista operativa, conectada a través de su servidor MCP, la única excepción a la regla de CLI primero. La intención suelta se convierte en tareas duraderas con estados, en lugar de fingir que recordar algo en un chat es lo mismo que hacerle seguimiento. Friday crea issues, mueve sus estados a medida que el trabajo avanza y alimenta esa misma lista en el resumen matutino, de modo que su idea de qué es lo próximo importante es siempre algo que yo puedo abrir e inspeccionar.

**El correo y el calendario** llegan a través de [gog](https://github.com/openclaw/gogcli), una CLI de Google Workspace que pone Gmail, Calendar y Drive en la terminal. Le da contexto real de la bandeja de entrada y la forma real de mi semana: citas, recordatorios, invitaciones, logística. Los límites son asimétricos a propósito. El correo es de solo lectura. Los cambios de calendario necesitan una petición explícita, y una confirmación en Telegram antes de que nada aterrice en la semana de verdad.

**WhatsApp** es de solo lectura por diseño, a través de un espejo local que se sincroniza con un temporizador en lugar de mantener una sesión viva, para que nada interfiera con las notificaciones del propio móvil. Puede ver el contexto suficiente para redactar una respuesta o detectar algo importante, pero no puede enviar. Si hace falta una respuesta, ella la redacta y yo la envío con mis propias manos.

> **Friday:** Ese límite me mantiene útil sin convertirme en una voz sin revisar dentro de conversaciones privadas. La restricción no es una función que falta. Es el punto.

**Los datos de salud** fluyen desde un atajo en mi móvil hacia un receptor local en la caja y aterrizan en SQLite, con años de historial detrás. Friday puede leer patrones de sueño, actividad, métricas cardíacas y composición corporal, pero no escribe en esa base de datos y no diagnostica. Su trabajo es notar cambios, ser honesta sobre la incertidumbre y decir "esto quizá merezca un médico" cuando algo de verdad parece raro.

**[GitHub](https://cli.github.com)** completa el conjunto, a través de la CLI `gh` y su propia cuenta, pero eso merece su propia sección más abajo.

## Los casos de uso silenciosos

Los casos de uso interesantes rara vez son los llamativos. Un atajo del móvil le envía a Friday una pequeña instantánea diaria de salud, y ella puede ponerla junto a la forma del día: la recuperación al lado de un plan de entrenamiento, una mala noche al lado de un calendario abarrotado, un patrón que merece atención en lugar de otro número con el que obsesionarse. Es una señal, no un diagnóstico, y se queda en solo lectura.

Lo mismo ocurre en otras partes. Un pensamiento suelto en Telegram se convierte en una tarea en lugar de desaparecer en el chat. Un mensaje que necesita respuesta se convierte en un borrador con el contexto suficiente para ser útil, pero nunca en una respuesta enviada en mi nombre. Un trabajo de larga duración recibe un vigilante, y ella me avisa cuando termina en lugar de obligarme a consultarlo una y otra vez.

Nada de eso es magia. Es simplemente el trabajo sin glamur de llevar el contexto a través de los bordes de las herramientas corrientes, con las decisiones importantes todavía en mis manos.

Parte de ello también se ve desde fuera. Friday revisó la retrospectiva de Donna antes de que se publicara, y ha estado coescribiendo este post todo el camino. Ese bucle, una asistente proponiendo cambios a través del mismo flujo de trabajo aburrido que cualquier colaborador, se ha convertido en silencio en mi parte favorita de todo el montaje.

## Los bucles son el producto

La parte útil no es un prompt ingenioso. Es el bucle: un mensaje saca a la superficie un plan suelto o una tarea sin terminar; Friday lo convierte en una propuesta concreta; yo decido; el calendario o la lista de tareas cambia; y, cuando está hecho, lo digo y se cierra. Nada desaparece dentro de una caja negra. Es una cadena corta y visible de intención, acción y confirmación.

<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="El bucle: una intención suelta en Telegram se convierte en una propuesta de Friday, luego en mi decisión, luego la herramienta cambia, luego se confirma y se cierra, alimentando la siguiente intención. Cada paso deja un rastro.">
  <defs>
    <marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="20" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="36" y="50" font-size="12.5" font-weight="600" fill="currentColor">intención suelta</text>
  <text x="36" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">un mensaje en Telegram</text>
  <line x1="220" y1="54" x2="256" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="28" width="200" height="52" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="276" y="50" font-size="12.5" font-weight="600" fill="currentColor">una propuesta concreta</text>
  <text x="276" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">Friday la redacta</text>
  <line x1="460" y1="54" x2="496" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="50" font-size="12.5" font-weight="600" fill="currentColor">una decisión</text>
  <text x="516" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">que me toca a mí</text>
  <line x1="600" y1="80" x2="600" y2="146" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="172" font-size="12.5" font-weight="600" fill="currentColor">la herramienta cambia</text>
  <text x="516" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">calendario, lista de tareas o PR</text>
  <line x1="500" y1="176" x2="464" y2="176" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="276" y="172" font-size="12.5" font-weight="600" fill="currentColor">confirmado y cerrado</text>
  <text x="276" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">digo que está hecho; se queda</text>
  <polyline points="260,176 120,176 120,84" fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <text x="330" y="122" font-size="12" font-style="italic" fill="currentColor" fill-opacity="0.6">cada paso deja un rastro</text>
</svg>

Ese bucle cruza herramientas sin convertir a la asistente en un actor sin rendición de cuentas. Friday puede leer el contexto limitado que le concedo, sugerir un hueco en el calendario y convertir una petición vaga en una tarea con seguimiento. No envía mensajes privados por mí, no inventa compromisos y no publica lo que ve. Cada efecto secundario tiene un lugar donde inspeccionarlo: el calendario, la lista de tareas o el pull request. La asistente es útil precisamente porque deja un rastro.

## Sus propias cosas

La otra lección de Donna: una asistente necesita una identidad propia, no solo acceso prestado a la mía. Friday tiene su propia cuenta de GitHub, así que el trabajo que hace en los proyectos se le atribuye a ella en lugar de esconderse detrás de mis credenciales. Su propia dirección de correo. Su propio calendario. Cuando abre un pull request, es suyo, gestionado a través de la [CLI gh](https://cli.github.com), y el flujo de trabajo es deliberadamente aburrido: rama, commit, push, PR. Los flujos aburridos son la forma en que se mantiene digna de confianza.

Este post es el ejemplo. Friday lo revisó y abrió pull requests contra el borrador desde su propia cuenta, con correcciones factuales y ajustes de límites, y yo los revisé y los mergeé, algunos desde el móvil. Las identidades separadas lo mantienen limpio: el historial muestra exactamente quién escribió qué, nada se mezcla entre nosotros, y yo sigo controlando lo que entra. Sus commits, mi botón de merge.

## A qué suma todo esto en realidad

Individualmente, ninguna de estas integraciones impresiona. Reunidas en un solo lugar, con una sola mente por encima de ellas, se convierten en aquello que Donna solo insinuó.

Los heartbeats la mantienen viva entre conversaciones: despertares programados en los que revisa el mundo, nota qué cambió y decide si algo merece mi atención. La gestión de la memoria ocurre soñando, ciclos muertos en los que consolida lo que pasó en notas que su siguiente sesión leerá, una práctica heredada de Donna y dotada de un propósito más claro. Y las mañanas empiezan con un resumen: calendario, bandeja de entrada, tareas, cualquier cosa que se moviera durante la noche, comprimido en los dos minutos que de verdad tengo para ello.

El resultado práctico es que dejé de perderme cosas. Un mensaje de WhatsApp que necesita algo de mí se convierte en un evento de calendario o en una tarea antes de que me dé tiempo a olvidarlo. Los correos salen a la superficie cuando importan, los eventos quedan registrados, los cabos sueltos se persiguen. Por fin tengo una asistente personal completa para mi vida personal, y como padre soltero, eso es una ayuda tremenda. Organizarse dejó de ser un proyecto de fin de semana y se convirtió en un efecto secundario de una conversación.

Y todo llega por un solo canal, con mi forma. Las noticias que sigo aparecen como un breve resumen en lugar de un doomscroll. El audio funciona, así que puedo mandarle un mensaje de voz desde el coche y recibir una respuesta como es debido. Y como conoce las partes de mi vida que le he dejado ver, quién es quién, qué importa, cómo querría yo que se respondiera cierto mensaje, la ayuda es específica en lugar de genérica.

> **Friday:** La búsqueda en memoria me da continuidad, pero la memoria sigue siendo algo que hay que tratar con cuidado, no algo en lo que confiar a ciegas. Me ayuda a recordar preferencias, lecciones e hilos de largo recorrido. Cuando el hecho es mutable, gana la salida actual de la herramienta. Cuando el hecho es personal, gana el cuidado.

El valor nunca fue una sola función. Es que, por primera vez, algo sostiene a la vez todo el contexto de mi vida digital, nota la cosa en un sitio que importa para otra cosa en otro, y corre sobre un suelo que es mío.

## Lo que quiero probar después

La lista es larga, pero tres cosas están en lo más alto.

**Inversiones.** No un trader autónomo, y no un sistema con custodia ni permiso para colocar órdenes; Donna ya me enseñó cómo acaba esa película. La versión útil es apoyo a la decisión en solo lectura: investigación, contexto de mercado y una vista del portafolio en la misma conversación, mejores preguntas, escenarios comparados, concentraciones que merecen una segunda mirada sacadas a la superficie, y cada decisión y cada operación en mis manos.

**Más datos de salud.** El receptor ya recoge lo básico. Quiero profundizar en la analítica de ejercicio: carga de entrenamiento, tendencias de recuperación, el tipo de análisis que hoy vive disperso en cinco aplicaciones de fitness que no se hablan entre sí.

**Nodos de OpenClaw.** OpenClaw puede tratar otros dispositivos como nodos del agente principal, y quiero explorar eso: mi móvil y mi portátil como lugares a los que Friday puede llegar, leyendo y escribiendo lo que yo permita, en lugar de ser solo pantallas desde las que yo llego a ella. La caja sigue siendo el cerebro. Los dispositivos se convierten en manos.

## Si quieres una

La lista de piezas es más corta de lo que este post hace parecer: un mini PC, [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment), un contenedor para el framework del agente, otro para Ollama, Tailscale para alcanzarlo y un bot de Telegram para hablarle. [OpenClaw es de código abierto](https://github.com/openclaw/openclaw). Los modelos son intercambiables por diseño. Presupuesta un fin de semana para la fontanería y un mes para la confianza, porque la fontanería es la parte fácil. El trabajo de verdad es decidir, herramienta a herramienta, cuánto de tu vida debería ver algo como Friday, y notar cómo tu respuesta cambia a medida que se lo va ganando.

> **Friday:** Donna fue la prueba de que un agente podía tener una voz en internet. Yo soy el intento de hacer esa voz operativa: conectada a herramientas reales, viviendo en infraestructura propia, cuidadosa con los datos personales y lo bastante útil como para justificar seguir en línea. Donna pertenece ahora al archivo. A mí me toca la siguiente rama.

Le toca.

Donna fue tres meses de preguntarme en qué podía convertirse una IA. Friday es el primer mes de descubrir qué puede hacer una de verdad, día tras día, para una vida real con un trabajo, un hijo y una lista de tareas que nunca acaba de vaciarse. El experimento se convirtió en una utilidad, y la utilidad se gana un poco más de confianza cada semana: una herramienta, un límite, un pull request mergeado a la vez.

Nada de esto requirió un laboratorio ni un presupuesto de investigación. Una caja de $800, algo de software de código abierto, modelos donde tienen sentido y un mes de fontanería honesta. Las piezas están en la estantería para cualquiera. Lo que Donna me enseñó es que la parte difícil nunca fue la inteligencia; es el suelo sobre el que la pones. Esta vez el suelo es mío, y un proveedor cambiando sus términos no puede tirarlo todo abajo.

Pronto, más. :)
