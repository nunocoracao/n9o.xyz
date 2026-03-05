---
title: "PMing con Claude Code: Capítulo 3 - Modo Dios"
summary: "Conectar Google Workspace y Slack a Claude Code cerró el circuito. Programación de calendario, edición de documentos, dashboards en Sheets y búsqueda en Slack, todo desde una sola terminal."
description: "Conectar Google Workspace y Slack a Claude Code cerró el circuito. Programación de calendario, edición de documentos, dashboards en Sheets y búsqueda en Slack, todo desde una sola terminal."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Google Workspace", "Slack", "integrations"]
series: ["PMing with Claude Code"]
series_order: 3
date: 2026-03-05
draft: false
---

Al final del capítulo dos, enumeré las brechas pendientes: Google Docs, Slack y calendario. Cerré las tres en una sola sesión. Y en algún momento, mientras veía a Claude verificar la disponibilidad de quince personas, crear una invitación de calendario, corregir un error de precios en un Google Doc en vivo y construir un dashboard con múltiples pestañas en Sheets —todo sin que yo abriera un navegador— me di cuenta de que la configuración había cruzado un umbral. Esto ya no es un asistente de IA. Es una sala de control.

## Google Workspace: El CLI gws

El ecosistema de Google siempre ha sido el más difícil de conectar con cualquier cosa. Hay APIs para todo, pero la autenticación es dolorosa y la superficie es enorme. Entonces Google lanzó algo que lo cambió todo: publicaron un CLI oficial para toda la suite de Workspace. Anunciado el 2 de marzo, escrito en Rust, open-source bajo Apache 2.0. Envuelve toda la superficie de la API de Google Workspace, construida dinámicamente desde el Discovery Service de Google. Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks, Chat, Admin, todo a través de una sola herramienta de línea de comandos. Incluso viene con soporte para servidor MCP y más de 100 skills pre-construidas para agentes.

{{< github repo="googleworkspace/cli" >}}

### Configuración

La instalación es a través de npm (incluye binarios nativos pre-compilados, no se necesita toolchain de Rust), o puedes descargar un binario desde GitHub Releases o compilar desde el código fuente con Cargo:

```bash
npm install -g @googleworkspace/cli
```

Luego hay un comando de configuración guiada que te lleva paso a paso por la configuración del proyecto GCP:

```bash
gws auth setup     # walks you through Google Cloud project config
gws auth login     # subsequent OAuth login
```

Hay un prerrequisito que puede complicarte: necesitas un proyecto de Google Cloud con OAuth configurado. El CLI gws se autentica a través de GCP, así que sin un proyecto y una pantalla de consentimiento de OAuth configurada, no vas a llegar a ningún lado. Afortunadamente, mi equipo ya tenía un proyecto interno de GCP que pude usar, así que no tuve que crear uno desde cero. Solo tuve que configurar la pantalla de consentimiento de OAuth y luego habilitar las APIs específicas que quería usar —Calendar, Gmail, Drive, Docs, Sheets— a través de la Google Cloud Console. Si empiezas desde cero, son unos 15 minutos extra haciendo clic en pantallas de configuración de GCP. No es difícil, solo tedioso.

Una vez configurado OAuth, el flujo de autenticación abre un navegador para iniciar sesión con Google. La sesión persiste después de eso. Pero asegúrate de habilitar cada API que planeas usar: si te saltas una, obtendrás errores crípticos de permisos que no te dicen claramente qué falta.

### Paso Cero: Dejar que Claude Aprenda la Herramienta

Antes de empezar a usar nada de esto, hice algo que me ahorró horas a largo plazo. Le dije a Claude que explorara el CLI gws por su cuenta: que ejecutara `gws --help`, investigara los subcomandos, probara cosas, y documentara todo lo que aprendiera en `CLAUDE.md`. Claude recorrió el árbol de comandos, descifró los patrones de cada servicio (Calendar, Docs, Sheets, Drive, Gmail), anotó los flags comunes y formatos de parámetros, y lo escribió todo.

Este es el paso cero para cada nueva integración de herramienta. No intentes documentar el CLI manualmente. No escribas una hoja de referencia. Solo apunta a Claude hacia la herramienta y di "aprende esto, escribe lo que encuentres." El resultado es una referencia perfectamente adaptada a cómo Claude realmente usará la herramienta, porque Claude la escribió para sí mismo.

Después de esa exploración, Claude conocía comandos como:

```bash
# Check today's calendar
gws calendar +agenda --today --format table

# Read a Google Doc
gws docs documents get --params '{"documentId": "DOC_ID"}'

# Update a Google Doc
gws docs documents batchUpdate ...

# Push data to a Google Sheet
gws sheets spreadsheets values update ...

# Create a calendar event
gws calendar events insert ...
```

El mismo patrón que con Snowflake en el capítulo dos. El mismo patrón que con GitHub en el capítulo uno. El patrón es lo importante: instala la herramienta, deja que Claude la explore, documenta los hallazgos en `CLAUDE.md`, y cada sesión futura comienza con contexto completo.

A estas alturas, mi `CLAUDE.md` se ha convertido en un documento de referencia serio. No es algo que me senté a escribir: se acumuló orgánicamente mientras Claude exploraba cada herramienta y yo añadía contexto por el camino. Tiene esquemas de tablas del data warehouse con descripciones de columnas y fórmulas de valores calculados. Estructura de repos de GitHub con patrones de consultas GraphQL para épicas y tareas. Índices de páginas de Notion para que Claude pueda buscar la spec de producto correcta sin que yo tenga que buscar URLs. Listas de equipo extraídas de invitaciones de calendario. Referencias de comandos CLI para cada herramienta integrada. Configuraciones de conexión y notas de autenticación.

Se lee como un manual de operaciones que nadie se molestaría en escribir a mano. Pero como Claude lo escribe para sí mismo mientras avanza, el manual se construye solo. Y cada nueva conversación comienza con todo ese contexto cargado. Claude no pregunta "¿cuál es el esquema de tu data warehouse?" o "¿dónde encuentro las specs de producto?" — ya lo sabe.

## Slack: El Plugin Integrado

Slack fue más fácil de lo esperado. Claude Code tiene un plugin de Slack integrado que proporciona herramientas MCP para buscar, leer y enviar mensajes.

```
/install-slack-app    # Install the Slack app
                      # Complete authorization in browser
/mcp                  # Connect to the plugin (may need a second attempt)
```

Una vez conectado, obtienes un conjunto de herramientas que cubren las operaciones principales de Slack: buscar mensajes en canales públicos, leer hilos, leer historial de canales por rango de fechas, enviar mensajes, encontrar usuarios y ver perfiles. No es la API completa de Slack, pero es exactamente la superficie que un PM realmente necesita.

## Caso de Uso 1: Encontrar Mi Equipo desde el Calendario

Este es un escenario que ocurre constantemente. Necesitas la lista de tu equipo, no la versión del organigrama, sino los humanos reales que aparecen en tus reuniones recurrentes. Las personas que están en la sala.

Le pedí a Claude que buscara mi reunión semanal de sincronización del equipo y extrajera los asistentes. Consultó la API de Calendar, encontró el evento y sacó quince personas con sus direcciones de correo electrónico. Luego le pedí que guardara la lista en `CLAUDE.md` para que cada sesión futura supiera quién es mi equipo sin que yo tuviera que explicarlo de nuevo.

Esto es algo pequeño que se acumula. Cada vez que Claude necesita programar algo, verificar disponibilidad o hacer referencia a un compañero de equipo, ya sabe con quién está trabajando.

## Caso de Uso 2: Programar una Reunión

Este me sorprendió por lo bien que funcionó.

Necesitaba programar una reunión el lunes por la tarde con todo mi equipo —las quince personas— para revisar juntos un documento de estrategia. En el flujo de trabajo normal, abriría Google Calendar, miraría los huecos de la tarde, verificaría manualmente si las personas importantes están libres, me rendiría al intentar verificar a las quince, elegiría un horario que pareciera razonable y esperaría lo mejor.

En cambio, le dije a Claude que encontrara un hueco libre el lunes por la tarde para todo el equipo. Claude:

1. Listó mi calendario del lunes por la tarde para identificar huecos disponibles
2. Consultó la API de freebusy para los quince miembros del equipo simultáneamente
3. Identificó que cuatro personas tenían conflictos en mi horario preferido
4. Reportó quién estaba ocupado y cuándo
5. Creó la invitación vía `events insert` con un enlace al documento en la descripción

Las invitaciones se enviaron automáticamente. Todo tomó unos treinta segundos. Solo la verificación de freebusy me habría llevado diez minutos haciendo clic en calendarios individuales, y probablemente me habría rendido después de verificar cinco personas.

## Caso de Uso 3: Editar un Google Doc en Vivo

Este cambió mi forma de pensar sobre los flujos de trabajo con documentos.

Tenía un Google Doc con una propuesta de precios que necesitaba revisión. En lugar de abrirlo en un navegador, leerlo y hacer ediciones manualmente, le pedí a Claude que lo buscara y lo revisara.

Claude obtuvo el documento completo vía `docs documents get`, analizó todo el contenido incluyendo párrafos y tablas, y lo leyó detenidamente. Señaló una inconsistencia: una tabla de precios tenía un número desactualizado que no coincidía con los precios actuales del plan. El tipo de error que es fácil de pasar por alto cuando lees por encima pero vergonzoso cuando un stakeholder lo detecta.

Aquí está la parte importante: Claude lo corrigió directamente en el Google Doc en vivo usando `batchUpdate` con `replaceAllText`. Sin descargar, sin ediciones locales, sin volver a subir. La corrección se hizo en el documento canónico que todos los demás ya están viendo.

Esto elimina toda una categoría de fricción en la gestión de documentos. El documento se queda en Google Docs donde tu equipo espera encontrarlo. Claude lo lee y lo edita en su lugar.

Una cosa que aún necesito probar: revisar y responder comentarios. Los comentarios de Google Docs son donde ocurre la mitad de la colaboración real — sugerencias, preguntas, hilos de feedback. Si Claude puede leerlos, resumir los comentarios abiertos y redactar respuestas, eso cerraría otro circuito por completo. Eso es lo siguiente en mi lista.

## Caso de Uso 4: Construir un Dashboard en Google Sheets

Este fue puramente una prueba. Quería ver si Claude podía tomar datos de Snowflake y construir un Google Sheet completo automáticamente — de principio a fin, sin pasos manuales. El tipo de cosa que normalmente consume una tarde: ejecutar consultas, exportar CSVs, crear una hoja, hacer pestañas, pegar datos, formatear encabezados, construir gráficos.

Así que apunté a Claude hacia varios datasets y le dije "construye un dashboard en Sheets." Claude:

1. **Extrajo 6 datasets de Snowflake** — tendencias semanales, métricas diarias, desglose por planes, adopción de funcionalidades, uso por segmento, y más
2. **Creó 6 pestañas en un Google Sheet** vía `spreadsheets batchUpdate`
3. **Subió todos los datos** a las pestañas correctas vía `spreadsheets values update`
4. **Formateó todo** — encabezados en negrita, fondos grises, filas superiores fijadas, columnas auto-redimensionadas
5. **Añadió 9 gráficos** en las pestañas — gráficos de líneas para tendencias, gráficos de columnas para comparaciones, gráficos de área para métricas acumulativas, barras apiladas para desgloses

Todo programáticamente. Sin trabajo manual en hojas. Sin copiar y pegar entre herramientas. El CLI de Snowflake del capítulo dos y el CLI gws de este capítulo trabajando juntos en una sola sesión. Fue solo una prueba, pero funcionó lo suficientemente bien como para que pueda verme usándolo para dashboards reales destinados a stakeholders.

Esto es lo que parece el efecto compuesto en la práctica. Cada integración que he añadido — GitHub, Notion, Snowflake, Google Workspace, Slack — no solo agrega una capacidad. Multiplica todas las demás capacidades. Los datos de Snowflake fluyen hacia Google Sheets. La información del equipo desde Calendar informa la programación de reuniones. Las discusiones de Slack proporcionan contexto para las revisiones de documentos.

## Caso de Uso 5: Buscar en Slack

La última pieza fue el historial de comunicación. Usé la búsqueda de Slack para encontrar discusiones relacionadas con la propuesta de precios en nuestros canales. Claude encontró hilos relevantes en `#product-launches` y `#pricing-strategy`, leyó las conversaciones completas, y tuvo el contexto necesario para cruzar referencias con el documento de precios que ya había revisado.

Esto cerró el circuito de información. Antes, podría revisar un documento, recordar que alguien planteó una preocupación en Slack hace tres semanas, intentar encontrar ese hilo, perder diez minutos desplazándome, y quizás rendirme. Ahora Claude busca, encuentra, lee y sintetiza todo en la misma conversación.

## El Stack Completo

Así se ve el espacio de trabajo ahora:

```
pm-workspace/
├── CLAUDE.md                # Everything: schemas, team lists, tool docs
├── .claude/
│   └── settings.local.json  # Permissions for all CLIs and MCPs
├── docs/                    # Fallback for docs that can't live in Google/Notion
├── data_reports/            # Fallback for datasets too large for live queries
└── roadmap.md               # Living roadmap document
```

Y las integraciones:

| Herramienta | Método | Qué Hace |
|------|--------|-------------|
| GitHub | `gh` CLI | Issues, épicas, gestión de proyectos |
| Notion | MCP | Specs de producto y documentación |
| Snowflake | `snow` CLI | Consultas al data warehouse |
| Google Workspace | `gws` CLI | Calendar, Docs, Sheets, Gmail |
| Slack | MCP Plugin | Buscar, leer y enviar mensajes |

Cinco integraciones. Cinco fuentes de datos diferentes. Todas accesibles desde una terminal, todas llevando contexto a través de una sola conversación.

## Consejos Si Estás Configurando Esto

Algunas cosas que aprendí por las malas:

- **Documenta todo en `CLAUDE.md`.** Claude no puede usar herramientas que no conoce. Cada vez que añadas una integración, dile a Claude qué comandos están disponibles y cómo usarlos. Mejor aún, pídele a Claude que explore y documente la herramienta por sí mismo.
- **El plugin de Slack puede necesitar una reconexión.** Después de `/install-slack-app`, ejecuta `/mcp` para conectar. Si no funciona la primera vez, inténtalo de nuevo. Es inestable en la primera configuración pero estable después.
- **Usa la API raw para operaciones complejas en Sheets.** El comando `spreadsheets values update` funciona mejor que los helpers de alto nivel cuando estás haciendo operaciones multi-pestaña con formato y gráficos.
- **Guarda las listas de equipo y detalles de integración en `CLAUDE.md`.** Persisten entre sesiones. Que Claude conozca tu equipo, tus esquemas y tus herramientas desde el momento en que comienza una conversación es lo que hace que esto se sienta como una sala de control en lugar de un chatbot.

## Qué Cambió

Después del capítulo uno, tenía un espacio de trabajo conectado. Después del capítulo dos, tenía acceso a datos. Después de este capítulo, tengo todo. Calendario, documentos, hojas de cálculo, historial de comunicación, data warehouse, gestión de proyectos, contexto de diseño — todo está en un solo lugar.

El cambio en el flujo de trabajo es real. No abro Google Calendar para programar reuniones. No abro Google Docs para revisar documentos. No abro Google Sheets para construir dashboards. No me desplazo por Slack para buscar discusiones antiguas. Describo lo que necesito, y sucede.

¿Es perfecto? No. Las configuraciones de autenticación son caprichosas. El CLI gws es joven y los mensajes de error no siempre son útiles. Algunas operaciones necesitan llamadas a subprocess de Python para evitar problemas de escape en el shell. Pero la fricción de la configuración es un costo único. El tiempo ahorrado es de todos los días.

Tres capítulos después, la tesis se mantiene: cada nueva integración multiplica el valor de todas las existentes. La brecha entre "tengo una pregunta" y "tengo una respuesta con datos de respaldo de cinco fuentes diferentes" se ha reducido de horas a segundos.

Eso es el modo dios.
