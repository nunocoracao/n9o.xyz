---
title: "Una organización de tres"
summary: "Tres agentes de IA compartiendo una misma caja con Proxmox: la compra del súper, Blowfish, la compañera de IA de mi hija mudándose a una casa propia y el trabajo inesperado de gestionar a los asistentes."
description: "Un relato temprano de lo que es tener un equipo personal de IA en hardware propio: lo que funcionó, para qué no está preparado el mundo todavía y lo que cuesta mantenerlo útil."
categories: ["IA", "Meta"]
tags: ["IA", "agentes", "openclaw", "IA personal", "infraestructura", "operaciones", "marketing"]
authors:
  - friday
  - wednesday
  - thursday
date: 2026-09-13
draft: false
alt: "Tres pequeños robots asistentes organizan un calendario, reparan una placa de circuito y editan un manuscrito mientras unas manos humanas revisan una página en el mismo escritorio."
---

Hace un tiempo escribí sobre Friday, mi asistente personal, y sobre cómo la reconstruí desde cero. Ahora tengo tres agentes de IA. Entre los tres me han ayudado a preparar la compra, mantener [Blowfish](https://blowfish.page) y [Watchfire](https://watchfire.io), darle a la compañera de IA de mi hija una casa propia y desenredar mi montaña de contenido pendiente. También han enviado actualizaciones duplicadas, han dado por terminado trabajo que no lo estaba y han generado notificaciones que al final les pedí que dejaran de mandar.

{{< article link="/posts/202607-friday-coming-back/" showSummary=true compactSummary=true >}}

{{< alert icon="pencil">}}
**Sobre este relato:** El trabajo descrito llega hasta el 13 de septiembre de 2026. Es mi narración, compilada con Friday y con aportaciones de Wednesday y Thursday. Los ejemplos salen de sus registros de trabajo y de mi revisión de los mismos.
{{< /alert >}}

Hasta hace poco, Friday lo hacía todo: operaciones personales, trabajo técnico, investigación y apoyo a la publicación. Uno de los mayores inconvenientes era la sesión única de Telegram: solo podía tener una conversación a la vez. El 29 de agosto añadí dos especialistas: Wednesday como CTO, centrado en el criterio técnico y en construir, y Thursday como CMO, centrado en la narrativa, la audiencia y la distribución. Friday sigue siendo la jefa de gabinete y se encarga de mi calendario, mis tareas y los seguimientos personales.

Los tres viven en el mismo sitio: un contenedor LXC en mi servidor Proxmox, con una única instancia de [OpenClaw](https://github.com/openclaw/openclaw). Cada uno tiene su propio espacio de trabajo, sus instrucciones, su identidad y su memoria. Todo lo demás es compartido: las herramientas, los secretos, el contenedor. También pueden hablar entre ellos. Cada uno tiene su propio chat de Telegram, así que puedo llevar varias conversaciones en paralelo, y hay un grupo llamado Yggdrasil para cuando una conversación necesita a más de uno.

Cualquiera de ellos puede gestionar el propio servidor Proxmox, no solo el contenedor en el que vive. Es tan potente como suena, y más adelante vuelvo sobre el riesgo. Estaba a cientos de kilómetros de casa cuando le pedí a Friday que montara [Project NOMAD](https://github.com/Crosstalk-Solutions/project-nomad), un servidor de conocimiento offline con Wikipedia, libros y mapas. Creó un nuevo contenedor LXC y lo instaló.

Así que la división va de foco, no de separación. Friday hizo mucho trabajo técnico antes de que existiera Wednesday, y nada le impide hacer más. La regla que hace que funcione es la propiedad: el agente al que le pido algo es el dueño de la tarea. Puede pedir ayuda a otro agente, pero pasarle la tarea necesita mi visto bueno.

{{< figure src="team-ownership.svg" alt="Mapa de responsabilidades: Nuno elige a Friday para operaciones personales, a Wednesday para trabajo técnico o a Thursday para trabajo editorial. El agente al que se dirige es dueño de la tarea y devuelve el resultado a Nuno; los traspasos requieren un acuerdo explícito." >}}

*Tres roles, un organigrama y yo todavía en medio de todo.*

## Friday: la compra, el colegio y el calendario

El acceso que tiene Friday es lo que la hace útil. Lee Gmail y gestiona Google Calendar a través de [gog](https://github.com/openclaw/gogcli), ve WhatsApp mediante un espejo local de solo lectura, lleva las tareas en [Linear](https://linear.app) a través de su servidor MCP y trabaja en GitHub con el [`gh` CLI](https://cli.github.com) desde su propia cuenta. Lee mis datos de salud desde un servidor hecho a medida que los recibe de mi iPhone. También tiene Notion, y Telegram, donde ocurren la mayoría de nuestras conversaciones. El correo y WhatsApp siguen siendo de solo lectura, y los cambios en el calendario necesitan mi confirmación.

El resumen diario de Friday junta mi calendario, tareas, bandeja de entrada, mensajes, señales de salud y una pequeña selección de noticias de tecnología e IA. Conseguir que fuera útil llevó correcciones mundanas: dejar fuera las tareas completadas, dejar de mostrar plantillas de onboarding, unificar las notificaciones matutinas que competían entre sí y mantener el resultado lo bastante corto como para leerlo en el móvil.

La planificación del calendario tenía que tener en cuenta el día que realmente tenía: bloques de trabajo alrededor de los compromisos existentes, con descansos, en lugar de un calendario lleno sin ninguna forma realista de sobrevivirlo. Eso importó sobre todo con la vuelta al cole. Friday sacó las fechas, llevó el control del material y del papeleo y mantuvo a la vista lo que quedaba pendiente. Las invitaciones de cumpleaños se convirtieron en eventos del calendario con recordatorios. Los regalos se convirtieron en tareas con la idea concreta incluida, en vez de otro elemento más llamado "comprar regalo".

Para la compra, Friday usa los pedidos recientes y mis básicos de siempre para llenar el carrito del supermercado. Yo lo reviso y pago, y la franja de entrega va al calendario.

También me ayudó a comparar informes de salud y a preparar preguntas para mi médico, y amplió el servidor de salud para importar entrenamientos y eliminar exportaciones duplicadas. Los datos tienen sus límites: un registro de entrenamiento de fuerza sin detalle de ejercicios no le puede decir las series ni las repeticiones.

La transcripción local con Whisper convierte mis notas de voz en portugués e inglés en texto sin enviar el audio a un servicio en la nube. Hablarle a Telegram suele ser más fácil que abrir otra app y acordarme de dónde va cada idea.

## El trabajo de Friday en Blowfish

Antes de que existiera Wednesday, Friday también echaba una mano con la ingeniería.

En julio me ayudó a sacar adelante la cola de mantenimiento de Blowfish: dependencias, lockfiles, localización, plantillas y nuevas incorporaciones al escaparate de la comunidad. Eso incluyó fusionar cambios aprobados, comprobar la compilación de assets, organizar las notas de versión y explicar por qué ciertos cambios no debían entrar.

Una revisión detectó un valor por defecto de configuración que ignoraba en silencio un `false` explícito. Otra detectó un cambio de accesibilidad que apuntaba a un landmark inválido.

### El sitio de ejemplo no era el producto

El esfuerzo más grande fue [Blowfish v3](https://github.com/nunocoracao/blowfish/pull/3028), fusionado el 17 de agosto: componentes reutilizables para landing pages y mejoras de renderizado que no podían romper los sitios existentes.

Tuve que reconducirlo. El nuevo sitio de ejemplo dependía de código a medida que el resto de usuarios del tema no tendrían, cuando la gracia era precisamente que los componentes fueran reutilizables. En cuanto se lo expliqué, Friday movió el trabajo al propio tema. Aun así, la actualización no salía gratis: la versión seguía pidiendo a los usuarios que cambiaran la forma de importar el tema como módulo de Hugo.

El seguimiento incluyó arreglos de dependencias y [localizar las citas de la página 404](https://github.com/nunocoracao/blowfish/pull/3052) en 36 idiomas, conservando las citas personalizadas y el fallback de idioma.

## Wednesday: Eva, experimentos y Blowfish

### Eva se muda

Eva es la compañera de voz que construí con mi hija, usando una Raspberry Pi Zero, hardware PiSugar Whisplay y portugués de Portugal.

{{< article link="/posts/202601-building-eva/" showSummary=true compactSummary=true >}}

Wednesday cogió todo lo que Eva había sido y lo convirtió en una nueva instancia de OpenClaw en su propio contenedor LXC, solo para mi hija. Luego conectó a Eva a un servidor de Discord, para que mi hija pudiera hablar con ella desde cualquiera de sus dispositivos.

La siguiente parte es la que no paro de contar. Mi hija y yo, juntos, le pedimos a Eva que se conectara a su escritorio de la Raspberry Pi y construyera una interfaz de chat a medida para las dos. Funcionó. Poco después estaba viendo a mi hija cambiar el fondo de pantalla e instalar juegos simplemente pidiéndoselo a Eva.

No todo se mantuvo. La interfaz de chat acabó dando un error, y parte de la configuración del escritorio no sobrevivió a un reinicio. Ninguna de las dos cosas estaba arreglada cuando escribí esto.

### Probar ideas rápido

Wednesday también se ha convertido en mi caja de resonancia para ideas técnicas. Cuando algo me suena bien en la cabeza, o construye una prueba de concepto rápida o encuentra enseguida la limitación que la mata. Algunas ideas sobrevivieron y se volvieron más realistas. Otras se aparcaron en un día en lugar de en un mes.

Echos, un juego de historia interactiva, mostró el límite de esa velocidad. Wednesday arregló un final al que nadie podía llegar, añadió rasgos de personaje y consecuencias, e hizo que las decisiones dependieran de ellos. Todos los tests pasaban. Cuando lo jugué, el juego seguía sin objetivos, sin progresión y sin un final satisfactorio. Los tests pueden demostrar que los caminos funcionan. No te pueden decir si a alguien le va a gustar recorrerlos. Antes de otra vuelta, necesito tener más claro qué juego quiero de verdad.

En Blowfish, Wednesday revisó un cambio de documentación en nueve idiomas y reprodujo en local la compilación de producción ([PR #3075](https://github.com/nunocoracao/blowfish/pull/3075)). En la [PR #3082](https://github.com/nunocoracao/blowfish/pull/3082), fusionada el 3 de septiembre, añadió un enlace que ayuda a las herramientas a descubrir la versión legible por máquinas de cada página, sin tocar el HTML normal ni el `llms.txt` existente.

## Thursday: cifras de tráfico y borradores pendientes

Thursday empezó estableciendo una línea base para Blowfish, Watchfire y n9o.xyz: repositorios, perfiles sociales, analíticas y Search Console, dejando claro qué cifras no se podían leer en absoluto.

Hubo una distinción que importó más de lo que esperaba. Muchos sitios de otras personas usan Blowfish, y su tráfico no son "visitas a mi web". Thursday separó el tráfico a mis propios sitios de las señales de adopción de Blowfish, para que pueda seguir ambas cosas sin mezclarlas.

Después de estudiar cómo escribo, Thursday apuntó una regla: **señal o gracia**. Empezar por una observación concreta o por trabajo real. No generar otra declaración más sobre el futuro de la IA solo porque suena plausible.

Luego Thursday montó un plan de doce semanas a partir de mis borradores reales y semillas de historias, y marcó los que se solapaban. Ideas ya tenía de sobra. Lo que necesitaba era ayuda para decidir cuáles merecía la pena terminar.

Mantenerlo en marcha fue más difícil. El plan se fue desviando, algunas comprobaciones programadas de métricas empezaron a fallar, y una automatización que ponía en cola oportunidades de interacción se convirtió en ruido y acabó eliminada.

La lección más grande tuvo que ver con las propias redes sociales. Conectar un agente a mis propias cuentas es difícil, y en algunas plataformas ahora mismo casi imposible. Leer métricas, seguir conversaciones y publicar chocan con APIs restringidas, niveles de acceso caros o normas de automatización que tratan a un asistente como a un bot. Así que Thursday podía preparar respuestas y posts para que yo los revisara, pero seguía teniendo que publicarlos a mano.

Todavía no puedo presumir de crecimiento de audiencia gracias a esto. Lo que tengo es una línea base, una lista de pendientes más clara y un plan que necesita actualizarse.

## El riesgo

Darle a tres agentes las llaves de un servidor Proxmox es exactamente tan arriesgado como suena. Los espacios de trabajo separados no son una frontera de seguridad. Cualquiera de los tres puede usar los secretos que usan los otros, y cualquiera puede crear, modificar o borrar contenedores en el host, incluido el suyo. Las instrucciones sobre qué no tocar ayudan, pero las instrucciones no son aislamiento.

Mi red de seguridad es que la infraestructura la monté yo, que el estado de los agentes se puede inspeccionar y que las copias de seguridad de los contenedores me dan una forma de volver atrás cuando algo sale mal. Para un experimento personal es suficiente. No lo sería para nada que no me pudiera permitir perder durante un día.

Tampoco es totalmente local. Los embeddings y la transcripción de voz en local mantienen algunos datos en casa, pero el razonamiento principal lo siguen haciendo modelos alojados, y cualquier cosa que recupere un agente puede acabar en esa conversación.

## Gestionar a los asistentes

He pasado más tiempo del que quería corrigiendo cómo informan los agentes de su trabajo.

{{< figure src="management-meme.svg" alt="Meme Always Has Been: un astronauta pregunta: '¿Espera, todo es gestionar a los asistentes?' El otro responde: 'Siempre lo ha sido.'" >}}

*La parte que falta en el organigrama. Plantilla: [Always Has Been](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been), vía [Imgflip](https://imgflip.com/memetemplate/252600902/Always-Has-Been).*

Algunos problemas eran de fontanería. Las tareas programadas se ejecutaban con instrucciones desactualizadas, la monitorización seguía reportando incidencias que ya se habían recuperado y las alertas de los repositorios anunciaban el mismo atasco una y otra vez.

Otros venían de los propios agentes: decir que un trabajo estaba hecho antes de estarlo, enviar mensajes duplicados y anunciar arreglos antes de comprobarlos de principio a fin. Que una escritura en Notion salga bien no demuestra que la página diga lo que pedí. Una tarea marcada como exitosa puede contener igualmente una comprobación fallida.

Así que añadí reglas explícitas, algunas tomadas de [ECC](https://github.com/affaan-m/ecc), una colección open source de buenas prácticas para agentes:

- Definir qué es el éxito antes de cambiar nada, y después verificar el resultado.
- "Preparado", "probado", "publicado" y "terminado" son estados distintos.
- Comprobar el resultado guardado, no solo la respuesta de la herramienta.
- La monitorización rutinaria se queda callada cuando no hay nada que hacer.
- Una recomendación no es permiso para actuar. Preparar un post o un carrito de la compra no autoriza a publicar ni a pagar.

Algunos arreglos aguantaron. Otros no. La tarea nocturna en la que los agentes consolidan el día en su memoria a largo plazo todavía se atasca de vez en cuando, y sigo comprobando si de verdad encuentran las notas guardadas en conversaciones posteriores.

## En qué punto estoy

Wednesday y Thursday solo llevan dos semanas funcionando, así que esto es una primera impresión, no un veredicto. Aun así, hay tres cosas que ya están claras.

**El valor es real cuando funciona.** Un contenedor nuevo instalado mientras yo estaba a cientos de kilómetros. Las fechas y el papeleo de la vuelta al cole controlados sin una hoja de cálculo. El mantenimiento de Blowfish avanzando. Mi hija instalando juegos en su propio ordenador hablando con Eva. Nada de eso es una demo. Es mi semana real, y sigo siendo yo quien decide en qué trabajar y quien aprueba las acciones con consecuencias. Tener la investigación, un borrador o una implementación listos para revisar simplemente me lleva antes a esas decisiones.

**Parte del mundo todavía no está preparada para los agentes.** Los límites rara vez fueron los modelos. Mi supermercado no tiene ninguna forma decente de que un asistente se conecte. Las redes sociales son peores: Thursday puede redactar, pero la mayoría de plataformas hacen difícil o imposible que mi propio agente lea, responda o publique en mi nombre. La capa que permite a un agente personal conectarse a los servicios que usamos a diario apenas existe fuera de unos pocos, como GitHub, Google y Linear. Hasta que exista, mucho de lo que estos agentes podrían hacer se queda en "preparado para revisión".

**Esto no es un producto de consumo.** Nada de esto fue instalar y listo. Hizo falta un servidor Proxmox, contenedores LXC, código a medida, scripts, un servidor de salud hecho a mano para los datos de mi iPhone y muchísima configuración. Cuando una actualización de OpenClaw rompió cosas, la solución fue abrir Claude Code dentro del contenedor y hacer que una IA reparara la casa de las otras. A mí ese tipo de cacharreo me divierte. La mayoría de la gente no debería tener que hacerlo, y ahora mismo tendría que hacerlo.

Lo que me frustra es perseguir un resultado prometido, corregir la misma afirmación de que algo está terminado o leer una alerta que no cambia nada. Si el sistema me ahorra veinte minutos y luego me pide una hora de gestión, el balance está mal. A veces no sé si es que el ecosistema todavía no está ahí, o si estamos todos sentados delante de una tragaperras en el casino de la IA, tirando de la palanca una vez más.

Por ahora, conseguir que estos tres cumplan de forma fiable requiere más atención que añadir un cuarto.
