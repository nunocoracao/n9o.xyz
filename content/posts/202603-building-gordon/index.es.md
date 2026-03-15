---
title: "Construyendo Gordon: El Agente de IA de Docker"
summary: "Un vistazo entre bastidores a la construcción de Gordon - el agente de IA de Docker. Desde la elección de docker-agent como runtime, hasta el análisis de las preguntas de los usuarios, el diseño de la UX, la configuración de evaluaciones y la construcción de las herramientas adecuadas."
description: "Un vistazo entre bastidores a la construcción de Gordon - el agente de IA de Docker. Desde la elección de docker-agent como runtime, hasta el análisis de las preguntas de los usuarios, el diseño de la UX, la configuración de evaluaciones y la construcción de las herramientas adecuadas."
categories: [IA, Herramientas para Desarrolladores]
tags: [Docker, Gordon, Agentes, IA, docker-agent]
date: 2026-03-13
draft: false
showTableOfContents: true
---

Durante el último año, he formado parte del equipo que construyó [Gordon](https://docs.docker.com/ai/gordon/) - el agente de IA de Docker. Si has usado Docker Desktop últimamente, probablemente lo hayas visto: haz clic en el icono de Gordon en la barra lateral o ejecuta `docker ai` en tu terminal, y obtendrás un agente que realmente entiende tus contenedores, tus imágenes y tu entorno. No solo responde preguntas - toma acción.

Pero construir un agente de IA en el que millones de desarrolladores confíen con su código, contenedores, imágenes, archivos Compose, builds y pipelines de CI no fue sencillo. Esta es la historia de cómo lo construimos: las decisiones que tomamos, los errores que cometimos y lo que aprendimos en el camino.

## Gordon v1

La primera versión de Gordon se construyó antes de que existiera la mayor parte del tooling agéntico que tenemos hoy. Gordon ha impulsado la experiencia de IA de Docker desde el principio - en [docs.docker.com](https://docs.docker.com), en soporte y dentro de Docker Desktop. Escribimos el bucle agéntico inicial usando LangGraph, conectamos un sistema RAG sobre la documentación de Docker para que Gordon pudiera responder preguntas fundamentadas en contenido real, y construimos lo que llamábamos "recetas" - rutas de código deterministas que manejaban tareas específicas como generar un Dockerfile o depurar un contenedor. Piensa en las recetas como el predecesor de MCP y el tool calling, pero completamente personalizadas. Cada receta era un flujo artesanal: detectar la intención del usuario, recopilar el contexto adecuado y ejecutar una secuencia de pasos que sabíamos que funcionaban.

Se lanzó. La gente lo usó. Y aprendimos muchísimo: lo que los usuarios realmente necesitaban, dónde el LLM tenía dificultades y lo frágiles que se vuelven los flujos deterministas cuando intentas cubrir cada caso extremo. También estábamos construyendo sobre modelos de la era GPT-4o - capaces, pero muy lejos de lo que está disponible ahora. Incluso los modelos más pequeños de hoy, como Haiku, superan lo que teníamos entonces, y ha pasado menos de un año.

Pero mientras Gordon v1 estaba en producción, el mundo a nuestro alrededor avanzó rápido. MCP se convirtió en un estándar para la integración de herramientas. El tool calling llegó de forma nativa a todos los modelos principales. Los frameworks de agentes maduraron. Los propios modelos dieron un salto enorme. La brecha entre lo que habíamos construido y lo que era posible ahora no dejaba de crecer.

Así que decidimos reconstruir Gordon desde cero, tomando todo lo aprendido de v1 y combinándolo con los nuevos estándares e infraestructura que habían surgido desde el lanzamiento.

## Fundamentos

La primera pregunta para la reconstrucción fue fundamental: ¿sobre qué construimos esto?

Podríamos haber iterado sobre la stack de LangGraph, pero habíamos estado construyendo [docker-agent](https://github.com/docker/docker-agent) (originalmente llamado cagent) como un runtime de código abierto para agentes de IA, y tenía sentido usar nuestras propias herramientas.

{{< github repo="docker/docker-agent" >}}

docker-agent te ofrece una forma declarativa de definir agentes en YAML - su modelo, instrucciones, herramientas y cómo colaboran entre sí. En lugar de escribir código imperativo para gestionar bucles de conversación, despacho de herramientas y ventanas de contexto, describes lo que el agente debe hacer y dejas que el runtime se encargue del resto. Escrito casi en su totalidad en Go, se distribuye como un plugin de la CLI de Docker - `docker agent run`, `docker agent new`, etc. - por lo que se siente nativo al flujo de trabajo de Docker.

Para Gordon, esto significaba que podíamos iterar rápido. ¿Cambiar el system prompt? Edita el YAML. ¿Añadir una nueva herramienta? Agrégala al toolset. ¿Cambiar el modelo? Una línea. Sin redespliegue de código personalizado, sin reconstruir pipelines. La definición del agente es el producto.

Una de las mayores ventajas de construir sobre docker-agent es la distribución. Las definiciones de agentes se empaquetan y comparten como artefactos OCI - el mismo formato que Docker usa para las imágenes de contenedores. Eso significa que podemos hacer `docker agent push` de una nueva versión de Gordon a Docker Hub y `docker agent pull` en el otro extremo. Las actualizaciones se distribuyen al instante sin reconstruir ningún código, porque el bucle del agente no está integrado en la aplicación - vive en el runtime. La definición de Gordon es simplemente un archivo YAML alojado en Docker Hub. Cuando publicamos una nueva versión, todas las instalaciones de Docker Desktop la reciben (es un poco más complejo que esto, pero se entiende la idea). Sin actualizaciones de binarios, sin revisiones de tiendas de aplicaciones, sin scripts de migración. Esta separación entre el runtime (docker-agent) y la definición del agente (el YAML) es lo que hace que todo funcione a escala.

docker-agent viene con toolsets integrados - `filesystem` para leer y escribir archivos, `shell` para ejecución de comandos, `think` para un bloc de notas de razonamiento, `todo` para el seguimiento de tareas y `memory` para la persistencia entre sesiones. Además de eso, cualquier servidor MCP puede conectarse como herramienta. También puedes definir herramientas de script personalizadas directamente en el YAML - envolver un script de shell o un endpoint de API y exponerlo al agente con argumentos tipados.

Usar docker-agent también significó que Gordon se beneficia de todo lo que el runtime proporciona por defecto - soporte multi-proveedor (OpenAI, Anthropic, Gemini, Bedrock, Mistral e incluso modelos locales vía Docker Model Runner), integración con MCP, RAG integrado con múltiples estrategias de recuperación, orquestación multi-agente con sub-agentes y handoffs, y distribución basada en OCI. Cuando mejoramos docker-agent, Gordon también mejora. Y cuando Gordon lleva docker-agent al límite, hacemos el runtime mejor para todos.

Usamos docker-agent para construir el docker agent. Esto no es un eslogan - es cómo trabajamos realmente.

## Entendiendo lo que los Usuarios Realmente Quieren

Construir un agente de IA es fácil. Construir uno que sea realmente útil es difícil. La diferencia se reduce a entender qué están pidiendo realmente los usuarios.

Desde el principio, dedicamos mucho tiempo a analizar cómo interactúa la gente con Docker. ¿Qué preguntas hacen en los foros? ¿Qué buscan en la documentación? ¿Dónde se atascan? Como Gordon v1 ya impulsaba el asistente de IA en [docs.docker.com](https://docs.docker.com), en soporte y dentro de Docker Desktop, teníamos dos fuentes de datos invaluables: las interacciones con la documentación y el soporte, y los datos de intención real de los usuarios de las sesiones de v1 - qué le pedían a Gordon que hiciera, qué recetas se activaban, dónde tenía éxito y dónde fallaba.

Los patrones eran claros:

- **"¿Por qué no arranca mi contenedor?"** - La depuración es el caso de uso número uno. Códigos de salida, errores en los logs, problemas de red, problemas de permisos.
- **"¿Cómo containerizo esto?"** - La gente tiene una aplicación y quiere un buen Dockerfile. No uno genérico de un tutorial - uno que entienda la estructura de su proyecto.
- **"¿Cómo hago X con Docker?"** - Operaciones rutinarias que son simples si conoces el comando, pero que requieren ir a la documentación si no lo conoces.

Estas tres categorías lo moldearon todo. Gordon no es un chatbot de propósito general que resulta saber sobre Docker. Es un agente diseñado específicamente en torno a estos flujos de trabajo - depurar, construir y gestionar. Cada herramienta, cada prompt, cada decisión de UX parte de aquí.

También aprendimos que los usuarios no hacen preguntas limpias y bien formuladas. Pegan mensajes de error. Describen síntomas, no causas. Dan contexto incompleto. Un buen agente no puede limitarse a hacer coincidencias de patrones con palabras clave - necesita entender la intención, hacer preguntas aclaratorias cuando sea necesario e investigar por su cuenta.

## Construyendo el Agente

Con docker-agent como runtime y una imagen clara de lo que necesitaban los usuarios, empezamos a construir. Lo que siguió fueron semanas de iteración rápida - y el agente cambió drásticamente en el camino. Gordon se distribuye como un artefacto OCI en Docker Hub (`docker/gordon`), y en realidad puedes hacer pull de cualquier versión con `cagent pull docker/gordon:<tag>` y leer la definición completa del agente. La evolución está ahí mismo en el historial de versiones.

### De un enjambre multi-agente a un agente único

Nuestro primer intento de Gordon v2 fue ambicioso. Diseñamos una arquitectura multi-agente con nueve sub-agentes especializados: un experto en Docker, un experto en codificación, un experto en despliegue, un especialista en Kubernetes, un agente de redes, un agente de seguridad, un agente de integración con GitHub, un experto en migración DHI e incluso un agente de Notion. El agente raíz actuaba como orquestador - analizaba la solicitud del usuario, delegaba al especialista adecuado y coordinaba las respuestas del equipo. Los todos compartidos mantenían el contexto fluyendo entre agentes.

Era elegante en teoría. En la práctica, era lento e impredecible. La delegación añadía latencia. El orquestador a veces elegía el sub-agente equivocado. El contexto se perdía en los handoffs. Y cuantos más agentes añadíamos, más difícil se volvía razonar sobre el comportamiento del sistema en su conjunto.

Así que lo colapsamos. Movimos casi todo a un único agente raíz con un system prompt cuidadosamente diseñado. El único sub-agente que sobrevivió fue el especialista en migración DHI, porque ese flujo de trabajo es genuinamente lo suficientemente distinto como para justificar su propio agente con sus propias herramientas e instrucciones. Todo lo demás - operaciones de Docker, depuración, containerización, ayuda general de desarrollo - vive en el agente raíz.

El resultado fue más rápido, más predecible y más fácil de iterar. Un agente, un prompt, un único lugar donde mirar cuando algo sale mal.

### Selección del modelo

La elección del modelo también cambió. Las primeras versiones de v2 funcionaban con Claude Sonnet 4.5 - un modelo potente, pero caro a la escala en la que opera Gordon. A medida que refinamos el prompt y las herramientas, descubrimos que podíamos obtener la misma calidad con Claude Haiku 4.5 - un modelo mucho más pequeño, rápido y económico. El truco fue invertir en mejores prompts. Cada vez que mejorábamos las instrucciones - descripciones de herramientas más específicas, reglas de comportamiento más claras, mejores ejemplos - la brecha entre Sonnet y Haiku se fue reduciendo hasta que desapareció para nuestros casos de uso.

Gordon actualmente funciona con Haiku 4.5 para la mayoría de sus interacciones. La diferencia de velocidad es notable - las respuestas se sienten ágiles, las llamadas a herramientas se resuelven más rápido y el coste por conversación bajó significativamente. El soporte multi-proveedor de docker-agent significa que podemos cambiar de modelo con un solo cambio de línea en el YAML, por lo que siempre estamos probando nuevos modelos a medida que salen.

### La ingeniería de prompts como desarrollo de producto

La mayor sorpresa fue cuánto del producto vive en el system prompt. El prompt de Gordon no es un párrafo de instrucciones - es una especificación detallada que cubre identidad, estilo de comunicación, patrones de acceso a archivos, uso de la base de conocimiento, tamaño de las respuestas, mejores prácticas de Dockerfile, flujos de depuración y reglas de seguridad.

Así es como luce la definición real de Gordon hoy:

```yaml
version: "2"

models:
  brain:
    provider: anthropic
    model: claude-haiku-4-5-20251001

agents:
  root:
    model: brain
    description: Gordon - Docker Agent
    instruction: |
      You are Gordon, an AI assistant created by Docker Inc.,
      specialized in Docker and Docker-related products, tools,
      and technologies...
    sub_agents:
      - DHI migration
    toolsets:
      - type: api
        api_config:
          name: knowledge_base
          endpoint: https://ai-backend-service.docker.com/docs
          ...
      - type: filesystem
      - type: shell
      - type: fetch
      - type: todo

  DHI migration:
    model: brain
    description: Migrates a Dockerfile to use Docker Hardened Images
    toolsets:
      - type: api
        api_config:
          name: get_image_tags
          endpoint: https://ai-backend-service.docker.com/dhi
          ...
      - type: filesystem
      - type: shell
```

Iteramos sobre el prompt constantemente. Cada vez que encontrábamos un modo de fallo - Gordon siendo demasiado verboso, eligiendo la herramienta incorrecta, haciendo preguntas aclaratorias innecesarias, usando muletillas - añadíamos algo para abordarlo: una nueva evaluación, una nueva instrucción, etc. El prompt creció orgánicamente a partir de interacciones reales de usuarios y fallos en las evaluaciones. No es código bello, pero funciona. Y aquí está la clave: en realidad ya no escribimos la mayoría de estos prompts a mano. Más sobre eso después de hablar de las evaluaciones.

## La Experiencia de Usuario

La UX de un agente de IA es fundamentalmente diferente a la de un chatbot. Un chatbot te da texto. Un agente quiere hacer cosas - ejecutar comandos, editar archivos, crear configuraciones. Eso cambia todo sobre cómo diseñas la interacción.

El principio fundamental al que llegamos: **mostrar, luego hacer**.

Gordon nunca ejecuta nada sin mostrarte exactamente lo que planea hacer primero. ¿Quieres ejecutar un comando de shell? Ves el comando. ¿Quieres editar un Dockerfile? Ves el diff. ¿Quieres detener un contenedor? Ves cuál. Cada acción requiere tu aprobación explícita.

Esto no es solo una característica de seguridad - es un mecanismo para generar confianza. Cuando usas Gordon por primera vez, apruebas cada acción. Con el tiempo, empiezas a confiar en él porque lo has visto tomar buenas decisiones. Apruebas más rápido, no porque seas menos cuidadoso, sino porque has desarrollado confianza en lo que hace.

También pusimos Gordon disponible en dos lugares: Docker Desktop (GUI) y la CLI (`docker ai`). La experiencia en Desktop es visual - ves contenedores, imágenes y logs junto a la conversación. La experiencia en CLI es para desarrolladores que viven en la terminal y quieren quedarse ahí. El mismo agente, las mismas capacidades, contexto diferente.

Una cosa que evitamos deliberadamente: el modo autónomo. Gordon no se va a hacer diez cosas mientras no estás mirando. Es un agente colaborativo - trabaja contigo, no en tu lugar. En un mundo donde los desarrolladores desconfían, con razón, de las herramientas de IA que hacen cambios no supervisados en su infraestructura, esto importa.

## Herramientas: Lo que Gordon Puede Hacer Realmente

Un LLM sin herramientas es solo un generador de texto. Lo que hace a Gordon un agente es su capacidad de tomar acción. Y conseguir las herramientas correctas fue una de las partes más difíciles del proyecto.

La arquitectura de Gordon es una división cliente-servidor. El backend vive en los servidores de Docker, mientras que el cliente es una CLI incluida con Docker Desktop que se ejecuta en la máquina del usuario. El cliente gestiona el acceso local - leer tus archivos, ejecutar comandos, interactuar con el daemon de Docker - mientras que el backend gestiona la orquestación del LLM. Cuando usas Gordon a través de Docker Desktop, el usuario puede seleccionar un directorio de trabajo para delimitar su acceso - o se usa uno por defecto. Cuando usas `docker ai` desde la terminal, trabaja con el directorio en el que estás.

Los toolsets principales de Gordon son sorprendentemente mínimos:

- **Filesystem** - Leer, escribir, editar y listar archivos en el directorio de trabajo del usuario. Así es como Gordon inspecciona la estructura de tu proyecto, lee Dockerfiles y escribe nuevas configuraciones.
- **Shell** - Ejecutar comandos en la terminal del usuario (con aprobación). Esta es la herramienta clave - a través de shell, Gordon puede ejecutar `docker build`, `docker compose up`, `docker scout`, `kubectl`, `git` y cualquier otra cosa disponible en la máquina del usuario. En lugar de construir integraciones a medida para cada comando de Docker, le damos al agente acceso al shell y dejamos que use las herramientas CLI que los desarrolladores ya tienen instaladas.
- **Fetch** - Hacer solicitudes HTTP a URLs externas para documentación, referencias de API o cualquier contenido web que Gordon necesite para responder una pregunta.
- **Todo** - Hacer seguimiento de tareas de múltiples pasos para que Gordon pueda desglosar solicitudes complejas y trabajar en ellas metódicamente.
- **Knowledge base** - Una herramienta API personalizada que consulta el backend de documentación de Docker. Construimos nuestro propio pipeline RAG sobre la documentación de Docker desde v1, y alimenta no solo a Gordon sino también al asistente de documentación y al soporte. Gordon obtiene acceso a documentación actualizada, mejores prácticas y patrones comunes a través de esta infraestructura compartida.
- **DHI migration** - Un sub-agente dedicado con su propio toolset para migrar Dockerfiles a Docker Hardened Images, incluyendo una herramienta API que resuelve etiquetas de imágenes compatibles con DHI.

El primer paso en el pipeline de Gordon - entender lo que quiere el usuario y determinar qué herramienta usar - se realiza mediante tool calling con el LLM. Esto suena sencillo, pero fue una de las áreas donde más tiempo pasamos experimentando.

Lo que aprendimos:

**Las descripciones de las herramientas importan más de lo que crees.** Una descripción vaga de una línea no es suficiente. El LLM necesita descripciones detalladas con ejemplos de cuándo usar cada herramienta. Descubrimos que definiciones de herramientas más descriptivas mejoraron drásticamente la precisión en la selección de herramientas.

**Añadir herramientas puede romper cosas.** Esto fue contraintuitivo. Añadíamos una nueva herramienta, y de repente el LLM dejaba de activar correctamente las herramientas existentes. El conjunto de herramientas no es solo una lista - es un espacio de decisión, y expandirlo cambia cómo el modelo razona sobre qué herramienta elegir.

**Los modelos se comportan de forma diferente.** El tool calling no está estandarizado entre proveedores. Lo que funciona bien con un modelo puede fallar con otro. Las descripciones que son óptimas para GPT-4 pueden confundir a Claude, y viceversa. Tuvimos que probar entre proveedores y a veces adaptar las descripciones por modelo.

**Aprovecha la infraestructura de conocimiento existente.** Construimos nuestro propio pipeline RAG sobre la documentación de Docker en v1, y ha estado impulsando el asistente de documentación, el soporte y Gordon desde entonces. Para v2, no necesitamos reinventar esto - simplemente conectamos Gordon al mismo backend a través de una herramienta API. Años de documentación indexada, ya probada en producción, disponible con una sola llamada a la API.

## Evaluaciones

Aquí está la cuestión con los agentes de IA: fallan de formas sutiles. Un chatbot que da una respuesta ligeramente incorrecta es molesto. Un agente que ejecuta el comando equivocado es peligroso. Las evaluaciones no son opcionales - son esenciales.

docker-agent tiene evaluación integrada. El flujo de trabajo comienza con la grabación de sesiones - interactúas con Gordon normalmente, y cuando una conversación representa un buen caso de prueba, la guardas como evaluación. Cada evaluación es un archivo JSON que captura el mensaje del usuario, las llamadas a herramientas esperadas y los criterios de evaluación: declaraciones de relevancia que la respuesta debe satisfacer, tamaño de respuesta esperado, qué herramientas deben llamarse, qué archivos deben crearse. Estas evaluaciones se ejecutan dentro de contenedores Docker para aislamiento - cada una obtiene un entorno limpio, por lo que los resultados son reproducibles.

`docker agent eval` ejecuta el conjunto completo, puntuando en múltiples dimensiones - precisión en las llamadas a herramientas (¿llamó Gordon a las herramientas correctas?), relevancia (¿la respuesta realmente abordó la pregunta?), tamaño de la respuesta y handoffs a sub-agentes. Un juez LLM evalúa los criterios de relevancia, para que podamos probar comportamientos matizados, no solo coincidencias de cadenas de texto.

Así es como detectamos regresiones. Cada cambio en Gordon - actualizaciones de prompts, cambios de herramientas, cambios de modelo - se evalúa contra el conjunto completo antes de lanzarlo. En un sistema de agentes, todo está interconectado. Un pequeño ajuste en la descripción de una herramienta puede generar comportamientos inesperados en cascada. Cuando sale una nueva versión de un modelo, ejecutamos el conjunto antes de cambiar. No actualizamos a ciegas.

Una lección difícil: la cobertura de las evaluaciones importa más que la cantidad. Al principio, nuestras evaluaciones no cubrían los casos de uso principales - estábamos optimizando Gordon para casos extremos mientras que los flujos de trabajo principales (depurar contenedores, generar Dockerfiles, responder preguntas de Docker) no estaban bien representados. Estábamos mejorando las puntuaciones sin hacer realmente a Gordon mejor para la mayoría de los usuarios. Una vez que reequilibramos el conjunto de evaluaciones en torno a los patrones de uso real de los datos de v1, las mejoras empezaron a coincidir con lo que los usuarios realmente experimentaban.

## Usar Agentes para Mejorar el Agente

¿Recuerdas el adelanto sobre no escribir prompts a mano? Así es como se ve en la práctica.

Construimos un agente personalizado - ejecutándose en un modelo más potente como Claude Opus 4.6 - cuyo trabajo es mejorar el system prompt de Gordon. El flujo de trabajo: darle la definición actual del agente de Gordon, un conjunto de evaluaciones fallidas y los resultados. El agente analiza los fallos, propone cambios en el prompt y genera un YAML actualizado. Ejecutamos el conjunto de evaluaciones contra la nueva versión. Si las puntuaciones mejoran y nada regresa, lo lanzamos.

Esto crea un ciclo de mejora continua. ¿Un usuario reporta que Gordon hace demasiadas preguntas aclaratorias en lugar de simplemente leer los archivos? Añadimos una evaluación para ello, apuntamos el agente optimizador al fallo y dejamos que descubra el cambio de prompt correcto. Puede añadir una regla como "SIEMPRE lee los archivos directamente usando herramientas de filesystem. NUNCA le pidas a los usuarios que peguen contenido." - que es exactamente el tipo de instrucción específica y accionable que marca la diferencia entre un buen agente y uno frustrante.

Usar un modelo más potente como "maestro" para mejorar al "alumno" es deliberado. Opus tiene la capacidad de razonamiento para entender problemas de comportamiento sutiles y crear instrucciones precisas que guíen a Haiku en la dirección correcta. Son agentes hasta el fondo.

La mayoría de las reglas de comportamiento detalladas en el prompt de Gordon - las muletillas prohibidas, los patrones de acceso a archivos, las pautas de tamaño de respuesta, las secuencias de depuración - fueron escritas o refinadas por el agente optimizador, no por un humano. Nosotros marcamos la dirección y definimos qué significa "bueno" a través de las evaluaciones. El agente descubre cómo llegar ahí.

## Lo Que Viene: Memoria

Ahora mismo, Gordon no tiene estado entre sesiones. Cada conversación empieza desde cero. Cierras Docker Desktop, y Gordon olvida todo - la estructura de tu proyecto, los problemas que has estado depurando, los patrones de Dockerfile que prefieres.

La memoria es la próxima frontera. Estamos trabajando para darle a Gordon la capacidad de recordar contexto entre sesiones:

- **Contexto del proyecto** - Gordon debería recordar la estructura de tu proyecto, tu configuración de Docker y los patrones que usas
- **Historial de interacciones** - Si solucionaste un problema la semana pasada, Gordon debería saberlo cuando aparezca un problema similar
- **Preferencias del usuario** - Si siempre usas builds multi-etapa, Gordon debería sugerirlos por defecto

Esto es más difícil de lo que parece. La memoria en los agentes de IA no es solo "guardar el historial del chat." Se trata de decidir qué vale la pena recordar, cómo recuperarlo eficientemente y cómo evitar que quede obsoleto. Un sistema de memoria que presenta contexto irrelevante es peor que no tener memoria en absoluto.

docker-agent ya tiene los elementos básicos. Hay un toolset `memory` que persiste información en una base de datos local entre sesiones - el agente puede almacenar y recuperar hechos mientras trabaja. Las piezas están ahí. El reto es hacer que se sienta natural - Gordon debería presentar memorias relevantes sin que se le indique, aprender tus preferencias sin que se le diga, y olvidar cosas que ya no son relevantes. Como la ventana deslizante que usé al construir [Eva](/posts/202601-building-eva/), pero más inteligente.

El objetivo es simple: Gordon debería sentirse como un compañero de equipo que conoce tu proyecto, no como un extraño al que tienes que explicárselo todo de nuevo cada vez.

---

Construir Gordon ha sido uno de los proyectos más desafiantes y gratificantes en los que he trabajado. Los agentes de IA todavía están en sus inicios - las herramientas evolucionan rápido, las mejores prácticas todavía se están escribiendo y las expectativas de los usuarios cambian con cada nuevo lanzamiento de modelos. Pero la intuición central sigue siendo válida: los desarrolladores no necesitan otro chatbot. Necesitan un agente que entienda su entorno, tome acción y se gane su confianza un comando aprobado a la vez.

Si quieres probar Gordon, actualiza al último [Docker Desktop](https://www.docker.com/products/docker-desktop/) y busca el icono de Gordon en la barra lateral, o ejecuta `docker ai` desde tu terminal.

Y si quieres construir tus propios agentes, echa un vistazo a [docker-agent](https://github.com/docker/docker-agent) - es de código abierto y es el mismo runtime sobre el que corre Gordon.
