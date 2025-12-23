---
title: "Cómo Estructurar Equipos de Producto"
summary: "No importa si trabajas en una startup, scale-up u organización más grande, en cualquier caso, el éxito de un equipo de producto generalmente significa hacer crecer ese equipo. Estos cambios traen desafíos y oportunidades a las organizaciones. Aquí hay algunas estrategias para organizar equipos de producto, qué optimizan y en qué situación usarlas."
categories: ["Producto", "Estrategia", "Gestión"]
tags: ["equipo","organización"]
# externalUrl: ""
date: 2023-01-08
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

> Cualquier organización que diseña un sistema (definido de forma amplia) producirá un diseño cuya estructura es una copia de la estructura de comunicación de la organización.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

No importa si trabajas en una startup, scale-up u organización más grande, en cualquier caso, el éxito de un equipo de producto típicamente significa hacer crecer ese equipo. Primero, necesitas contratar más personas, luego dividir el equipo, ahora hay un grupo de equipos que organizar, y después de un tiempo, el ciclo eventualmente comienza de nuevo. Estos cambios traen desafíos y oportunidades a las organizaciones. Aquí hay algunas estrategias para organizar equipos de producto, qué optimizan y en qué situación usarlas.

## ¿Para qué optimizar?

Al organizar equipos de producto es importante considerar los siguientes cuatro factores: **completitud**, **independencia**, **claridad** y **equilibrio**. _Alerta de spoiler:_ No he encontrado ninguna forma de optimizar todos. Sin embargo, hay algunos patrones claros sobre cuáles de estos factores importan más, dependiendo de la etapa en la que estarán tu organización y esos equipos.

### Completitud
Asegurar que los equipos y grupos posean un dominio de extremo a extremo. En un dominio completo, los equipos/grupos deberían poder construir una visión y roadmap claras basadas en valor. Los dominios necesitan ser lo suficientemente cerrados (sin agujeros) y lo suficientemente amplios para entregar valor completo a lo largo del tiempo en lugar de solo entregar funcionalidades.

### Independencia
Moverse rápido es uno de los aspectos más esenciales del éxito de un equipo. Asegurar que cada equipo sea independiente sobre su dominio contribuirá enormemente a su capacidad de moverse rápido y crear valor en general. La independencia se logra cuando un equipo puede promover su misión y alcanzar sus objetivos con el equipo de desarrollo con el que trabaja, y con dependencias mínimas de otros equipos. Las dependencias de producto no se limitan a equipos de desarrollo y dependencias técnicas. Dependencias adicionales incluyen otros PMs, otros equipos de entrega como data, UX, diseño, marketing, y también stakeholders como legal, compliance y finanzas.

### Claridad
El dominio debería ser claro para el equipo interno y stakeholders externos. Esto asegurará que a) el equipo sabe cuál es su función central y objetivos y b) que será más fácil alinear stakeholders externos con la misma visión. Todos los artefactos y documentos del equipo deberían apuntar a transmitir esa claridad, ej. el nombre del equipo.

### Equilibrio
Al crear o dividir dominios para equipos de producto, o dentro de un grupo de producto, es importante asegurar que hay una distribución equilibrada en términos de relevancia y carga de los temas. De lo contrario, los equipos pueden caer en escenarios donde un solo equipo está abordando todos los problemas más significativos de la empresa con solo una cantidad limitada de los recursos totales disponibles. El equilibrio también debería asegurar que, hasta cierto punto, todos los grupos y equipos tengan un cierto nivel de relevancia e impacto; de lo contrario, podría ser difícil contratar y motivar a los miembros del equipo.



## Estrategias

Aquí hay algunas opciones sobre cómo organizar equipos y cómo cada estrategia se compara con los cuatro factores anteriores.

### Funcional
*también conocida como por Productos, Funcionalidades, Componentes Técnicos*

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Frontend
FPM(Product Manager)
FEM(Engineering Manager)
FPD(Product Designer)
FFD(Frontend Developers)
end


subgraph Backend
BPM(Product Manager)
BEM(Engineering Manager)
BBD(Backend Developers)
end

subgraph Platform
PPM(Product Manager)
PEM(Engineering Manager)
PBD(Backend Developers)
end

O --> Frontend
O --> Backend
O --> Platform

{{< /mermaid >}}
</div>

<figcaption align = "center">Ejemplos de organizar tus equipos funcionalmente con 3 equipos: frontend, backend y platform</figcaption>

| Factor      | Puntuación                                                             |
| ----------- | ---------------------------------------------------------------------- |
| Completitud | ⭐️  <br/>_alto para startups, cae dramáticamente con la escala_        |
| Independencia | ⭐️ ⭐️                                                                  |
| Claridad    | ⭐️ ⭐️ ⭐️                                                               |
| Equilibrio  | ⭐️ ⭐️                                                                  |

Esta estructura divide grupos y equipos por módulos funcionales como productos, funcionalidades, componentes o capas (FE vs. BE). Esta opción es más adecuada para una empresa en etapa temprana, donde se requiere trabajo pesado para entregar incluso las primeras releases. La visión y roadmap en este punto son típicamente las del producto general, y principalmente necesitas que las diferentes partes trabajen bien juntas hacia el alcance ya definido. A medida que las organizaciones escalan, esto se convierte en una mala opción porque cuando los equipos crecen y su división se vuelve cada vez más granular, esto lleva a un aumento dramático en el nivel de dependencias entre equipos, y la visión y roadmap de cada equipo/grupo se ven restringidas, lo que resulta en baja centralidad en el cliente.

| Pros                                                                                                                                                                                                                                      | Contras                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Claro qué equipo debería manejar feedback/bugs específicos <br/><br/>- Menos dependencias que otras opciones para organizaciones más pequeñas <br/><br/>- Fácil traer a la persona de producto correcta a reuniones externas, como una llamada de ventas | - Causa confusión cuando las funcionalidades requieren actualizaciones de infraestructura/arquitectura <br/><br/>- Restringe visión/estrategia/roadmap al nivel de módulo, funcionalidad o producto (no muy centrado en el cliente) <br/><br/>- Requiere mucha coordinación entre equipos cuando los productos están estrechamente integrados o tienen dependencias de nivel inferior (ej. plataforma) |



### Viaje del Cliente

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Discovery
DPM(Product Manager)
DEM(Engineering Manager)
DPD(Product Designer)
DFD(Frontend Developers)
DBD(Backend Developers)
end

subgraph Purchase
PPM(Product Manager)
PEM(Engineering Manager)
PPD(Product Designer)
PFD(Frontend Developers)
PBD(Backend Developers)
end

subgraph Authentication
APM(Product Manager)
AEM(Engineering Manager)
APD(Product Designer)
AFD(Frontend Developers)
ABD(Backend Developers)
end

O --> Discovery
O --> Purchase
O --> Authentication

{{< /mermaid >}}
</div>

<figcaption align = "center">Ejemplos de organizar tus equipos alrededor de un viaje del cliente</figcaption>

| Factor      | Puntuación   |
| ----------- | ------------ |
| Completitud | ⭐️ ⭐️ ⭐️     |
| Independencia | ⭐️ ⭐️        |
| Claridad    | ⭐️ ⭐️ ⭐️     |
| Equilibrio  | ⭐️ ⭐️        |


En esta estructura, cada equipo/grupo es responsable de un viaje completo del cliente, o una fase específica de ese viaje. Por ejemplo, en un flujo de compra del cliente, un equipo de producto puede ser dueño de la adquisición de usuarios, otro del onboarding, otro del descubrimiento y otro del proceso de checkout. Este método requiere que cada fase en el viaje del cliente tenga suficiente sustancia. A menudo, hay métricas de negocio importantes que reflejan de cerca el éxito o fracaso de los clientes al continuar su viaje en esas coyunturas, permitiendo la delegación de responsabilidad. Sin embargo, optimizar para métricas específicas en partes del flujo general podría no ayudar a las métricas generales. Esta estructura organizacional requiere mucha coordinación de diseño para asegurar una experiencia cohesiva del cliente a través del/los producto(s).


| Pros                                                                                                                                                                                                                                                                                                           | Contras                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - El enfoque permite escalar el producto de manera eficiente<br/><br/>—el equipo de growth trae clientes al producto mientras otros equipos mejoran las experiencias de trial y engagement del producto. <br/><br/>- Métricas claras que puedes asignar a cada product manager, como conversión de trial gratuito a pago o retención | - Si los miembros del equipo no entienden su etapa del cliente asignada, podría llevar a funcionalidades de producto inadecuadas, y por lo tanto a una mala experiencia de producto. <br/><br/>- Requiere gobernanza estricta para asegurar una experiencia de usuario consistente y excelente a través de las etapas del viaje del cliente |


### Definición del Problema
*También conocido como Objetivos, Métricas, Jobs-to-be-Done*

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Acquisition
ACPM(Product Manager)
ACEM(Engineering Manager)
ACPD(Product Designer)
ACFD(Frontend Developers)
ACBD(Backend Developers)
end


subgraph Activation
ACTPM(Product Manager)
ACTEM(Engineering Manager)
ACTPD(Product Designer)
ACTFD(Frontend Developers)
ACTBD(Backend Developers)
end

subgraph Engagement
EPM(Product Manager)
EEM(Engineering Manager)
EPD(Product Designer)
EFD(Frontend Developers)
EBD(Backend Developers)
end

subgraph Conversion
CPM(Product Manager)
CEM(Engineering Manager)
CPD(Product Designer)
CFD(Frontend Developers)
CBD(Backend Developers)
end

O --> Acquisition
O --> Activation
O --> Engagement
O --> Conversion


{{< /mermaid >}}
</div>

<figcaption align = "center">Ejemplos de organizar tus equipos alrededor de una definición de problema basada en métricas, en este caso un subconjunto de las métricas AARRR</figcaption>

| Factor      | Puntuación   |
| ----------- | ------------ |
| Completitud | ⭐️ ⭐️ ⭐️     |
| Independencia | ⭐️ ⭐️        |
| Claridad    | ⭐️ ⭐️        |
| Equilibrio  | ⭐️ ⭐️ ⭐️     |

En este método, cada equipo y grupo es responsable de una definición de problema, que puede traducirse en un objetivo, métricas y jobs-to-be-done. Los equipos pueden entonces tocar cualquier funcionalidad que crean que resolverá ese problema. El principal beneficio de este enfoque es empujar la responsabilidad a los product managers individuales. Puede resultar en múltiples equipos queriendo (o necesitando) trabajar en los mismos componentes de producto al mismo tiempo, y por lo tanto nadie sintiéndose dueño de esas cosas. Esta es una buena elección para empresas con indicadores clave de rendimiento (KPIs) de producto bien establecidos que capturan resultados de clientes y negocio. La diferencia con el método anterior es que las preocupaciones generales a través de diferentes equipos no son necesariamente parte de un único flujo de usuario.

| Pros                                                                                                                                                                                                                                         | Contras                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - El cliente siempre está en el centro de tu pensamiento de producto <br/><br/>- Fácil asignar objetivos a los equipos y luego medir el éxito del producto <br/><br/>- Fácil delegar la toma de decisiones y responsabilidad entre product managers | - Requiere un conjunto estable de KPIs que no cambie frecuentemente <br/><br/>- Requiere coordinación de roadmap entre equipos ya que los equipos individuales pueden necesitar tocar muchas áreas de producto para alcanzar objetivos <br/><br/>- Toma tiempo meterse en la cabeza de los clientes (Por eso es importante no saltar directamente al diseño de producto, sino asegurarse de que todos entienden cómo cada departamento ve al cliente) |


### Personas de Usuario

<div style="background-color:white; padding: 20px">
{{< mermaid >}}
graph LR

O([Product & Engineering Org])

subgraph Buyer
BPM(Product Manager)
BEM(Engineering Manager)
BPD(Product Designer)
BFD(Frontend Developers)
BBD(Backend Developers)
end


subgraph Seller
SPM(Product Manager)
SEM(Engineering Manager)
SPD(Product Designer)
SFD(Frontend Developers)
SBD(Backend Developers)
end

subgraph Advertiser
APM(Product Manager)
AEM(Engineering Manager)
APD(Product Designer)
AFD(Frontend Developers)
ABD(Backend Developers)
end

O --> Buyer
O --> Seller
O --> Advertiser


{{< /mermaid >}}
</div>

<figcaption align = "center">Ejemplos de organizar tus equipos alrededor de personas, cada equipo se enfoca en las necesidades de un tipo específico de usuario</figcaption>

| Factor      | Puntuación                                                                       |
| ----------- | -------------------------------------------------------------------------------- |
| Completitud | ⭐️ ⭐️ ⭐️                                                                         |
| Independencia | ⭐️  </br> _proporcional a la independencia de las necesidades de cada persona_   |
| Claridad    | ⭐️ ⭐️ ⭐️                                                                         |
| Equilibrio  | ⭐️  </br> _depende de la relevancia de cada persona para el negocio_             |


Cada equipo y grupo se asigna a una persona y se vuelve responsable de las necesidades de esa persona de extremo a extremo. Usualmente usado en productos con múltiples personas, donde las necesidades de las varias personas son independientes y no entran en conflicto entre sí (ej. marketplace donde hay compradores y vendedores). Esta organización enfoca los equipos en las necesidades de los usuarios, pero requiere coordinación pesada entre equipos y grupos para evitar duplicar esfuerzos, desviarse de los principios de diseño establecidos o llevar el producto en diferentes direcciones al mismo tiempo.

| Pros                                                                                                                                                                                                                                                              | Contras                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Muy centrado en el cliente, anima a los equipos a pensar en las necesidades/resultados del cliente <br/><br/>- Simplifica la investigación de usuario, cada equipo puede dirigir entrevistas por el tipo de persona con quien quiere hablar y puede volverse experto en esa persona con el tiempo | - Puede tirar el producto en múltiples direcciones a la vez <br/><br/>- Si las personas tienen fuertes conexiones entre ellas (ej. dos personas que son ambas compradores) llevará a choques y baja independencia entre equipos y grupos |


## Conclusión

![Peón solitario mirando a grupo de peones rojos](/posts/202301-how-to-structure-product-teams/img/lonely.webp)

No hay una única solución para todos los problemas organizacionales a través de empresas, industrias, etc. Sin embargo, las estrategias anteriores proporcionan algunas formas interesantes de evitar grandes trampas.

Como ejemplo, si estás trabajando en una empresa en etapa temprana, podría tener sentido ir con una división *funcional*. Los equipos y alcances serán cristalinos, y te llevará a través de las primeras etapas de validación del producto más rápido. De la misma manera, si tu producto ya tiene un flujo de usuario bien definido (*ej. e-commerce con Acquisition, Activation, Conversion, etc.*), podría ser una opción enfocar cada equipo alrededor de una de las *etapas en el flujo del cliente*. Esto hará más fácil proporcionar KPIs y alcances claros para cada equipo, y te permitirá escalar fácilmente. Si tienes más de una *persona* distinta (piensa en el tipo comprador-vendedor), puedes optimizar esas dos experiencias claramente.

Todas estas estrategias te permiten adaptarte a tu contexto, y evolucionar la estructura de tu equipo a medida que ese contexto cambia (*porque cambiará*). No hay respuestas claras, y las *sugerencias* anteriores son simplemente ejemplos de cómo puedes aprovechar algunas estrategias presentadas aquí.

**Lo único que no deberías hacer** es tratar de mezclar algunos de estos frameworks dentro de la misma estructura. Esto generará confusión, dependencias poco claras y ruido a través de tu organización.

Al final, independientemente de qué opción elijas, a medida que escalas, tu objetivo siempre debería ser asegurarte de que tus equipos no pierdan su **enfoque en el cliente** ya que eso llevará a a) clientes insatisfechos y b) fracaso.

> Cualquier organización que diseña un sistema (definido de forma amplia) producirá un diseño cuya estructura es una copia de la estructura de comunicación de la organización.</br>
>
> - <cite>Melvin E. Conway[^1]</cite>

[^1]:	Formulación original de la *Ley de Conway*, introducida en 1967, de [Wikipedia][1].


[1]:	https://en.wikipedia.org/wiki/Conway%27s_law
