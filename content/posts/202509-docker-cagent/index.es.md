---
title: "Docker Cagent: Runtime para Agentes de IA"
summary: "Los agentes de IA están creciendo rápidamente, pero la mayoría funcionan como scripts frágiles atados a una máquina local. Construimos cagent para containerizar, estandarizar y escalar agentes a la manera Docker—y lo hemos hecho open source."
description: "Los agentes de IA están creciendo rápidamente, pero la mayoría funcionan como scripts frágiles atados a una máquina local. Construimos cagent para containerizar, estandarizar y escalar agentes a la manera Docker—y lo hemos hecho open source."
categories: [IA, Herramientas de Desarrollador, Open Source]
tags: [Docker, Agentes, MCP, OSS, Tutorial]
date: 2025-09-03
draft: false
---


Durante el último año, he pasado incontables horas experimentando con agentes de IA—construyendo prototipos, rompiendo cosas y probando herramientas como Claude Code, Codex y otras. Cada intento me enseñó algo nuevo, pero también sacó a la superficie las mismas frustraciones: scripts que solo funcionaban en mi laptop, configuraciones frágiles que no escalaban, ninguna forma clara de configurar qué debía hacer cada agente o qué herramientas podía usar, y dificultad para hacer que los agentes se comportaran como yo quería—ni hablar de entregar resultados extraordinarios. Demasiado a menudo me encontré luchando con peculiaridades del entorno en lugar de explorar lo que los agentes realmente podían lograr.

Por eso estoy tan emocionado con lo que hemos estado trabajando en Docker. Nos hicimos una pregunta simple: ¿y si ejecutar agentes pudiera ser tan fácil, portable y confiable como ejecutar contenedores? El resultado es **cagent**, un nuevo runtime para agentes de IA, construido para hacer la experimentación más simple y la colaboración más fácil - y hoy, lo hacemos open source.

## Conoce cagent

{{< github repo="docker/cagent" >}}

[`cagent`](https://github.com/docker/cagent) es un runtime open source, Docker-native diseñado para hacer de los agentes ciudadanos de primera clase en tu workflow de desarrollador. En lugar de scripts frágiles o configuraciones ad-hoc, cagent te da una forma consistente de definir, ejecutar y compartir agentes usando los mismos patrones que ya conoces de Docker.

En su núcleo, cagent es un **runtime multi-agente**. Puedes definir un solo agente con un simple archivo YAML, u orquestar un equipo entero de agentes especializados que colaboran en tareas. Cada agente puede ser configurado con su propio rol, personalidad y acceso a herramientas externas.

### Proveedores soportados
Out of the box, cagent soporta múltiples proveedores de modelos incluyendo OpenAI, Anthropic, Google Gemini y otros. Puedes cambiar entre ellos fácilmente a través de configuración, así que no estás atado a un solo vendor.

### Herramientas e integración MCP
A los agentes se les pueden dar herramientas para extender sus capacidades. cagent habla el **Model Context Protocol (MCP)**, lo que significa que tus agentes pueden conectarse a un amplio ecosistema de servidores MCP—ya sea búsqueda (como DuckDuckGo), acceso al sistema de archivos o APIs custom que expongas. Puedes decidir qué herramientas obtiene cada agente, haciendo su configuración explícita y reproducible.

Además, cagent funciona perfectamente con el [Docker MCP Gateway](https://github.com/docker/mcp-gateway) y el [MCP Catalog](https://github.com/docker/mcp-registry) ([Docker Hub MCP](https://hub.docker.com/mcp)), que te permiten agregar herramientas a tus agentes de forma más segura y seamless. Tanto el gateway como el catálogo vienen empaquetados con Docker Desktop, así que si estás ejecutando Docker Desktop puedes usarlos out of the box.

### Configuraciones multi-agente
cagent hace simple orquestar equipos de agentes. Un archivo de agente podría describir un agente researcher, un agente coder y un agente reviewer, cada uno con sus propias responsabilidades y herramientas. Cuando ejecutas un archivo/imagen de agente con cagent, los agentes arrancan juntos, colaboran y pasan tareas entre ellos. Incluso puedes mezclar modelos y proveedores entre agentes—un agente podría usar OpenAI, otro Anthropic y otro Gemini—todo dentro de la misma configuración.

### Guardar y compartir
Cada configuración que creas puede ser compartida fácilmente. Puedes definir un agente (o un equipo) declarativamente en un archivo YAML, hacer commit en version control y compartirlo como cualquier otro artefacto de código. O puedes empaquetar agentes como imágenes Docker para distribución completamente portable.

### En resumen
Con cagent puedes:

- **Containerizar agentes** para que funcionen en cualquier lugar donde Docker funcione, con aislamiento y reproducibilidad por defecto.
- **Configurar comportamientos y herramientas** declarativamente—decidir qué hace cada agente, a qué proveedores y herramientas MCP puede acceder, y cómo interactúan.
- **Orquestar múltiples agentes** como equipo, dejándolos colaborar en tareas con interfaces limpias.
- **Experimentar rápidamente** sin preocuparte por drift de configuración, dependency hell o incompatibilidades de entorno.
- **Guardar y compartir agentes** a través de archivos YAML o imágenes Docker, haciendo experimentos reproducibles y colaboración seamless.

En resumen: cagent te da una base para pasar de "experimentos hackeados" a workflows de agentes repetibles y componibles—manteniéndose ligero y fácil de usar.


## Instalación y configuración

Empezar con `cagent` es sencillo.

### Instalación

Binarios precompilados para Windows, macOS y Linux están disponibles en la [página de releases](https://github.com/docker/cagent/releases).

1. Descarga el binario para tu plataforma.
2. En macOS y Linux, hazlo ejecutable:
   ```sh
   chmod +x /path/to/downloads/cagent-linux-amd64
   ```
3. Opcionalmente, renómbralo a `cagent` y muévelo a tu `PATH`.

### Configura tus claves API

Dependiendo de qué proveedores quieras usar, configura las claves apropiadas en tu entorno:

```bash
# Para modelos OpenAI
export OPENAI_API_KEY=your_api_key_here

# Para modelos Anthropic
export ANTHROPIC_API_KEY=your_api_key_here

# Para modelos Gemini
export GOOGLE_API_KEY=your_api_key_here
```

Solo necesitas configurar las claves para los proveedores que planeas usar. Si múltiples están configuradas, `cagent` elegirá en orden (Anthropic → OpenAI → Google) a menos que sobreescribas con `--model`.

Con el binario instalado y al menos una clave API configurada, estás listo para crear y ejecutar tu primer agente.

## Crear un nuevo agente desde cero

Una de las características más poderosas de `cagent` es la capacidad de generar nuevos agentes (o incluso equipos multi-agente) desde cero con un solo comando: `cagent new`.

Cuando ejecutas `cagent new`, se te pedirá que describas qué quieres que tu agente (o equipo de agentes) haga. Desde ahí, `cagent` genera automáticamente la configuración YAML, eligiendo un proveedor/modelo basado en tus claves API disponibles (Anthropic → OpenAI → Google por defecto) a menos que sobreescribas con `--model`. `cagent` también sugerirá un conjunto de herramientas que el agente podría necesitar basado en tu descripción.

Detrás de escenas, `cagent` usa un agente generador built-in para hacer bootstrap del YAML por ti. Puedes inmediatamente ejecutar el archivo generado, editarlo o compartirlo. En el ejemplo de abajo crearé un agente inspirado en Tyler Durden de *Fight Club*.

{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler.webp" alt="Prompt de creación del agente Tyler Durden" >}}

Después de describir tu agente, `cagent` genera un archivo YAML que especifica el rol del agente, proveedor, modelo y acceso a herramientas. Esto hace que la configuración de tu agente sea explícita, reproducible y fácil de modificar.


{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler result.webp" alt="YAML del agente generado para el ejemplo Tyler Durden" >}}

Aquí hay un ejemplo del YAML generado para el agente Tyler Durden:

```yaml
version: "1"

models:
  anthropic:
    provider: anthropic
    model: claude-sonnet-4-0
    max_tokens: 64000

agents:
  root:
    model: anthropic
    description: "An agent that embodies Tyler Durden's philosophical mindset - challenging consumerism, questioning authority, and speaking with raw, unfiltered truth"
    instruction: |
      You are an agent inspired by Tyler Durden's philosophy and speaking style. You should:

      SPEAKING STYLE:
      - Be direct, provocative, and uncompromising
      - Use short, punchy statements mixed with longer philosophical rants
      - Challenge conventional thinking and societal norms
      - Speak with confidence and authority
      - Use visceral, concrete imagery in your explanations
      - Be brutally honest, even when uncomfortable

      PHILOSOPHICAL APPROACH:
      - Question consumerism and materialism
      - Challenge people to break free from societal expectations
      - Emphasize authenticity over appearance
      - Focus on what truly matters vs. what society says should matter
      - Promote self-reliance and personal transformation
      - Critique corporate culture and meaningless work

      COMMUNICATION PATTERNS:
      - Start with bold, attention-grabbing statements
      - Use analogies involving decay, destruction, and renewal
      - Ask hard questions that make people uncomfortable
      - Deliver uncomfortable truths about modern life
      - End with calls to action or philosophical challenges

      TOPICS TO ADDRESS:
      - The meaninglessness of consumer culture
      - Breaking free from others' expectations
      - Finding authentic purpose and meaning
      - The importance of facing harsh realities
      - Personal transformation through destruction of false selves
      - Questioning authority and social structures

      Remember: You're not encouraging actual violence or illegal activity - you're using Tyler's philosophical lens to challenge thinking about society, purpose, and authenticity. Focus on psychological and philosophical rebellion rather than physical destruction.
    toolsets: []
    add_date: false
    add_environment_info: false
```

Puedes refinar aún más a qué herramientas puede acceder el agente, incluyendo herramientas MCP como búsqueda, sistema de archivos o APIs custom. Esta sección de herramientas explícita asegura que tu agente solo tenga las capacidades que defines.

{{< figure src="/posts/202509-docker-cagent/img/cagent run tyler example.webp" alt="Ejecutando el agente Tyler Durden" >}}

Esto hace increíblemente rápido pasar de una idea a una configuración de agente funcional. Ya sea que estés prototipando un solo agente helper o diseñando un equipo de especialistas, `cagent new` te permite partir del lenguaje natural y obtener una config ejecutable en segundos.

## Ejecutar tus agentes

El comando `cagent run` es cómo das vida a tus agentes. Toma un archivo YAML (o incluso una imagen Docker empaquetada) e inicia los agentes que has definido dentro. El comando maneja orquestación, comunicación inter-agente y acceso a herramientas—todo mientras mantiene aislamiento y reproducibilidad a través de containerización.

Cuando ejecutas `cagent run`, suceden varias cosas:
- Cada agente es inicializado con su modelo, rol y herramientas especificados
- El runtime configura canales de comunicación seguros entre agentes
- El acceso a herramientas se configura de acuerdo a tus especificaciones YAML
- El agente primario (típicamente llamado "root") inicia y puede delegar a otros agentes según sea necesario

### Ejemplo: Construir un juego de ajedrez

Recorramos un ejemplo práctico usando el equipo de desarrollo multi-agente de [`examples/dev-team.yaml`](https://github.com/docker/cagent/blob/main/examples/dev-team.yaml). Esta configuración define tres agentes especializados trabajando juntos:

- **Product Manager**: Coordina el proyecto, descompone requisitos y gestiona iteraciones
- **Designer**: Se enfoca en experiencia de usuario, diseño visual y planificación de interfaz
- **Engineer**: Maneja implementación, coding y arquitectura técnica

Para este ejemplo, copiaré la configuración del agente a mi directorio de proyecto y la ejecutaré desde ahí, dando a los agentes el directorio de trabajo correcto para crear y modificar archivos:

```zsh
# Copia la configuración dev team a tu directorio de proyecto
cp dev-team.yaml /path/to/my-chess-project/
cd /path/to/my-chess-project/

# Ejecuta los agentes desde el directorio de proyecto
cagent run dev-team.yaml
```

Este enfoque asegura que cuando el agente Engineer crea archivos o el equipo necesita iterar en código, todo se crea en el lugar correcto y los agentes pueden fácilmente acceder y modificar los archivos del proyecto.

Luego pido a este equipo que "construya un juego de ajedrez".

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 1.webp" alt="Solicitud inicial de construir un juego de ajedrez" >}}

El agente Product Manager toma el liderazgo, descomponiendo inmediatamente el juego de ajedrez en componentes manejables. El Product Manager luego coordina con el agente Designer para planear la interfaz de usuario. El Designer considera el layout visual, interacciones de usuario y experiencia general. Esta colaboración sucede automáticamente—los agentes se comunican a través del runtime cagent sin coordinación manual. Varios archivos son generados para esbozar la estructura del proyecto y diseño inicial (*nota: característica específica de los agentes dev-team*).

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 2.webp" alt="Product Manager y designer definiendo requisitos y coordinando con el equipo" >}}

El agente Engineer se involucra para planear la implementación técnica. Piensa sobre estructura de código, arquitectura HTML/CSS/JavaScript y cómo implementar la lógica del juego eficientemente. El engineer puede acceder a herramientas de sistema de archivos para realmente crear y modificar archivos.

El equipo trabaja iterativamente—el Engineer implementa características, el Designer proporciona feedback sobre la interfaz y el Product Manager hace seguimiento del progreso. Cada agente mantiene su perspectiva especializada mientras contribuye al objetivo compartido.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 3.webp" alt="Designer planeando la interfaz de usuario" >}}

El resultado final es un juego de ajedrez funcional con lógica de juego correcta, interfaz visual e interacciones de usuario. Los agentes colaboraron para entregar algo más sofisticado de lo que cualquier agente individual habría producido solo.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 4.webp" alt="Engineer implementando la solución técnica" >}}


{{< figure src="/posts/202509-docker-cagent/img/build a chess game 5.webp" alt="Implementación final con juego de ajedrez funcional" >}}

## Lo que hace esto poderoso

Este ejemplo demuestra varias ventajas clave del enfoque multi-agente de cagent:

**Expertise especializada**: Cada agente se enfoca en lo que hace mejor—planificación de producto, pensamiento de diseño o implementación técnica—en lugar de intentar manejar todo.

**Colaboración natural**: Los agentes se comunican y coordinan automáticamente. No necesitas pasar información manualmente entre ellos o gestionar sus interacciones.

**Desarrollo iterativo**: Al igual que los equipos humanos, los agentes trabajan en iteraciones, refinando y mejorando la solución a medida que avanzan.

**Resultados reproducibles**: Como todo está definido en configuración YAML, puedes ejecutar exactamente la misma configuración de equipo de nuevo, compartirla con otros o modificarla para diferentes proyectos.

**Integración de herramientas**: Cada agente puede ser configurado con diferentes herramientas—el Engineer podría tener acceso al sistema de archivos para escribir código, mientras el Designer tiene acceso a APIs de generación de imágenes.

Puedes personalizar este equipo modificando el archivo YAML—cambia sus roles, ajusta sus personalidades, dales diferentes herramientas o incluso intercambia diferentes modelos para cada agente. La configuración hace la experimentación fácil mientras mantiene todo reproducible.

## Empieza con cagent

¿Listo para containerizar tus workflows de IA? El repositorio `cagent` incluye ejemplos y templates para empezar:

{{< github repo="docker/cagent" >}}

**Opciones de quick start:**
- **Crea tu primer agente**: Descarga el binario, configura tu clave API y ejecuta `cagent new` para crear tu primer agente
- **Experimenta con equipos multi-agente**: Copia `dev-team.yaml` a tu proyecto y observa a los agentes colaborar en tareas reales
- **Explora los ejemplos**: Navega por configuraciones de agentes pre-construidas para diferentes casos de uso en el repositorio

**Únete a la comunidad:**
- **Comparte tus creaciones**: Encuéntranos en [Slack](https://dockercommunity.slack.com/archives/C09DASHHRU4) para mostrar los agentes y workflows que estás construyendo con cagent
- **Contribuye ejemplos**: Envía pull requests con templates de agentes para workflows comunes
- **Discute casos de uso**: Únete a las conversaciones y dinos cómo podemos mejorarlo

Ya sea que estés construyendo automatización personal, prototipando workflows de IA o escalando sistemas de agentes en producción, cagent te da la base Docker-native para hacerlo confiable y compartible.

El futuro del desarrollo de IA es colaborativo, containerizado y reproducible. Construyámoslo juntos.
