---
title: "PMing con Claude Code: Capítulo 4 - Segundo Cerebro"
summary: "Claude Code podía acceder a todo pero no recordaba nada. Conectarlo a Obsidian convirtió archivos dispersos en un grafo de conocimiento — con entidades, extracción de tareas y transcripciones de reuniones que se retroalimentan entre sí."
description: "Claude Code podía acceder a todo pero no recordaba nada. Conectarlo a Obsidian convirtió archivos dispersos en un grafo de conocimiento — con entidades, extracción de tareas y transcripciones de reuniones que se retroalimentan entre sí."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Obsidian", "Granola", "knowledge management"]
series: ["PMing with Claude Code"]
series_order: 4
date: 2026-03-18
draft: false
---

Al final del capítulo tres, llamé a la configuración "modo dios." Claude Code podía acceder a GitHub, Notion, Snowflake, Google Workspace y Slack — todo desde una sola terminal. Cinco integraciones, cinco fuentes de datos, respuestas en segundos en lugar de horas. Acceso a todo.

Pero cada conversación empezaba desde cero.

Los insights que Claude descubría en una sesión no se trasladaban a la siguiente. Las conexiones que hacía entre un hilo de Slack y un documento de precios desaparecían cuando la conversación terminaba. Podía pedirle a Claude que encontrara cualquier cosa, pero no podía recordar lo que ya había encontrado. La brecha no era más herramientas. Era hacer que el conocimiento se acumulara — construir una capa donde cada nueva pieza de información se conecta con todo lo anterior.

De eso trata este capítulo. No otra integración. Un segundo cerebro.

## Por Qué Obsidian

Obsidian es una aplicación de notas construida sobre archivos markdown planos. Sin formato propietario, sin base de datos en la nube, sin dependencia de proveedor. Tu vault es simplemente una carpeta en disco — ábrela en cualquier editor de texto y todo está ahí.

Lo que la hace interesante para este caso de uso es la combinación de funcionalidades que se construyen sobre esos archivos. Los wikilinks (`[[así]]`) te permiten conectar cualquier nota con cualquier otra nota sin fricción. Una vista de grafo visualiza esas conexiones. El frontmatter YAML te da metadatos estructurados en cada nota. Un ecosistema de plugins añade de todo, desde tableros kanban hasta vistas de base de datos. Y con la sincronización de iCloud, todo el vault está disponible en tu teléfono.

Lo fundamental: no hay API que configurar. Sin danza de OAuth, sin servidor MCP, sin tokens de autenticación. Es una carpeta de archivos markdown en tu sistema de archivos local. Claude Code ya tiene acceso al sistema de archivos. Esa es toda la integración.

## La Integración Más Simple

En macOS con sincronización de iCloud, un vault de Obsidian vive en:

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/<vault-name>/
```

No se necesita servidor MCP. Ni plugin. Claude ya sabe leer y escribir archivos. Añadí una sección "Knowledge Base" a `CLAUDE.md` con la ruta del vault y una nota indicando que es la ubicación principal para todos los archivos persistentes. Luego actualicé el skill `/sync` para que escriba el roadmap tanto en el vault de Obsidian como en el repositorio git — vault como principal, repositorio como respaldo con control de versiones.

Eso es todo. A partir de ese momento, cada conversación sabía dónde encontrar y almacenar cosas. La parte mecánica tomó cinco minutos.

## Estructura del Vault

Con la conexión establecida, configuré una estructura de carpetas:

| Carpeta | Propósito |
|--------|---------|
| `roadmap/` | Archivos de roadmap sincronizados desde GitHub |
| `meetings/` | Transcripciones de reuniones para búsqueda y contexto |
| `tasks/` | Tareas personales y pendientes |
| `docs/` | Documentos de estrategia, análisis, investigación |
| `blogs/` | Borradores de publicaciones del blog |
| `entities/` | Entidades de conocimiento reutilizables — personas, proyectos, productos, iniciativas |

Las carpetas `docs/` y `blogs/` que tenía en el repositorio git se mudaron al vault. Los mismos archivos, pero ahora son buscables a través de Obsidian, enlazables vía wikilinks, y accesibles en mi teléfono a través de iCloud. Una sola fuente de verdad en lugar de dos.

## El CLI de Obsidian

Aquí es donde se puso interesante. Obsidian viene con un CLI integrado en `/Applications/Obsidian.app/Contents/MacOS/obsidian`. Hice lo que hago con cada herramienta nueva ahora — el patrón de paso cero de los capítulos anteriores: apuntar a Claude hacia él y decirle "explora esto, documenta lo que encuentres en `CLAUDE.md`."

Claude recorrió el árbol de comandos, probó subcomandos y mapeó las capacidades. El resultado: dos formas complementarias de interactuar con el vault.

**El acceso directo a archivos** maneja lecturas y escrituras — rápido y simple. Pero el CLI añade consultas estructuradas que las operaciones del sistema de archivos no pueden hacer:

```bash
# Full-text search across the vault
obsidian search "launch plan" --vault nexus

# Find what links to any note
obsidian backlinks "Project Alpha" --vault nexus

# Read/write YAML frontmatter programmatically
obsidian properties get "tasks/review-api.md" --vault nexus

# List and query tags across all notes
obsidian tags --vault nexus

# List and filter tasks
obsidian tasks --vault nexus --status open
```

Sistema de archivos para velocidad, CLI para relaciones. La combinación significa que Claude puede tanto leer el contenido de un archivo como entender su lugar en el grafo de conocimiento más amplio.

## Entidades: El Grafo de Conocimiento

Este es el centro conceptual de toda la configuración.

La carpeta `entities/` usa una convención simple: cada entidad tiene su propio archivo markdown con frontmatter YAML para metadatos y wikilinks para conexiones. Los tipos de entidad incluyen personas, productos, proyectos, equipos, iniciativas y conceptos. Cada tipo tiene su propia subcarpeta.

Así se ve una entidad:

```yaml
---
type: product
tags: [platform, ai, agents]
---
# Project Alpha

Internal AI assistant. Started as a CLI tool,
expanding to web and desktop surfaces.

Related: [[Platform Team]], [[Desktop App]], [[MCP]]
```

Simple, pero el poder está en el efecto de red. Cada wikilink es una conexión bidireccional. Cuando creo una nota de reunión que menciona `[[Project Alpha]]`, automáticamente aparece en los backlinks de Project Alpha. Cuando una tarea referencia `[[Platform Team]]`, es descubrible desde la página de la entidad del equipo. El grafo se construye solo.

Creé el skill `/entities` para automatizar la extracción. Escanea el contenido del vault — `CLAUDE.md` (listas de equipo), `roadmap.md` (épicas, asignados), transcripciones de reuniones (personas referenciadas), tareas (referencias a entidades) — y crea archivos de entidades estructurados para cualquier cosa que encuentre.

La primera extracción produjo **39 entidades** en seis subcarpetas:

```
entities/
  _index.md              # Master index
  people/                # 20 people
  products/              # 10 products
  projects/              # 2 active projects
  teams/                 # 1 team
  initiatives/           # 2 strategic initiatives
  concepts/              # 3 technical concepts
```

Cuando abrí la vista de grafo de Obsidian, las conexiones aparecieron inmediatamente — quién trabaja en qué producto, qué iniciativas abarcan qué equipos, qué conceptos sustentan qué proyectos. Información que siempre estaba implícita en mis documentos, ahora explícita y navegable.

Cada nuevo documento que entra al vault y usa wikilinks se une a esta red automáticamente. El grafo se vuelve más denso y más útil con el tiempo sin ningún esfuerzo de mantenimiento.

## Gestión de Tareas y Kanban

En el capítulo uno, señalé una brecha: "No todo es una épica del roadmap. Tengo pendientes personales... Estos no pertenecen a los issues de GitHub." Tres capítulos después, finalmente la cerré.

El sistema es un archivo por tarea, con frontmatter estructurado:

```yaml
---
status: todo
priority: high
source: slack
due: 2026-03-20
entities: ["[[Project Alpha]]", "[[Sarah Chen]]"]
---
# Review launch plan feedback

## Description
Review and address Sarah's feedback on the Project Alpha launch plan.

## Output
Updated launch plan with resolved comments.

## Context
From 1:1 with [[Sarah Chen]] on 2026-03-17.
```

Cada archivo de tarea tiene un estado, prioridad, origen (de dónde vino la acción), fecha límite y entidades enlazadas. El formato incluye cómo se ve "terminado" y de dónde se originó la tarea — suficiente estructura para ser útil, no tanta como para que crear una tarea se convierta en overhead.

Para la visualización, instalé el plugin comunitario Kanban de Obsidian vía el CLI:

```bash
obsidian plugin:install id=obsidian-kanban enable
```

Cuatro columnas: **Todo**, **Doing**, **Done**, **Dropped**. Las tarjetas son wikilinks a archivos de tareas, así que hacer clic en una tarjeta abre el detalle completo. El tablero kanban se convirtió en el dashboard diario que nunca tuve — una vista única de todo lo que necesito hacer, recopilado de todos los lugares donde trabajo.

## Granola: Transcripciones de Reuniones

La última fuente de entrada fueron las reuniones. Instalé Granola — una herramienta de transcripción de reuniones — y el plugin granola-to-obsidian. El pipeline es simple: Granola graba y transcribe reuniones, el plugin exporta automáticamente las transcripciones a la carpeta `meetings/` en el vault.

Ahora cada reunión es buscable. Claude puede leer transcripciones, extraer acciones pendientes, encontrar quién dijo qué y cruzar referencias de discusiones con entidades existentes. Una conversación sobre el lanzamiento de un producto en un 1:1 se enlaza naturalmente con la entidad del producto y la entidad de la persona. La transcripción se convierte en parte del grafo de conocimiento en el momento en que aterriza en el vault.

El pipeline real se ve así: **transcripciones > entidades > tareas > kanban**. Ocurre una reunión, la transcripción aparece en el vault, las referencias a entidades la conectan al grafo, las acciones pendientes se extraen en archivos de tareas, los archivos de tareas aparecen en el tablero kanban. Cada paso está automatizado o a un solo comando de distancia.

## Ejecutando /pm-task de Verdad

Aquí es donde todo se juntó.

El skill `/pm-task` escanea cuatro fuentes en busca de acciones pendientes: Slack, correo electrónico, calendario y notas de reuniones de Granola. Lee la actividad reciente, identifica cualquier cosa que parezca una tarea o compromiso, presenta candidatos para revisión y crea archivos de tareas más tarjetas kanban tras la confirmación.

Lo ejecuté contra la actividad de un día normal — mensajes recientes de Slack, correos sin leer, el calendario de hoy y un par de transcripciones de Granola. Extrajo **8 tareas** y las añadió al tablero kanban. Cada una tenía los enlaces de entidades correctos, contexto de origen y prioridad. Correctamente ignoró el ruido — mensajes informativos, hilos resueltos, correos de marketing, invitaciones informativas de calendario. Señal adentro, ruido afuera.

Cuatro fuentes de entrada canalizadas a través de un solo skill hacia archivos de tareas estructurados con enlaces de entidades y visualización kanban. El tipo de extracción de tareas entre múltiples fuentes que tomaría treinta minutos de escaneo manual ocurrió en unos veinte segundos.

## Qué Cambió

La tabla de integraciones ahora se ve así:

| Herramienta | Método | Qué Hace |
|------|--------|-------------|
| GitHub | `gh` CLI | Issues, épicas, gestión de proyectos |
| Notion | MCP | Specs de producto y documentación |
| Snowflake | `snow` CLI | Consultas al data warehouse |
| Google Workspace | `gws` CLI | Calendar, Docs, Sheets, Gmail |
| Slack | MCP Plugin | Buscar, leer y enviar mensajes |
| **Obsidian** | **Filesystem + CLI** | **Grafo de conocimiento, tareas, entidades, vault** |
| **Granola** | **Plugin de Obsidian** | **Transcripciones de reuniones** |

Siete integraciones ahora. Pero este capítulo realmente no trataba de añadir dos filas más a la tabla.

Lo que realmente cambió: una ruta de vault en `CLAUDE.md`. Dos nuevos skills — `/pm-task` y `/entities`. Treinta y nueve entidades extraídas y conectadas. Ocho tareas extraídas de cuatro fuentes diferentes. Un tablero kanban que no existía antes. Y debajo de todo, un grafo de conocimiento que se vuelve más denso cada vez que Claude toca el vault.

## Qué Viene Después

Obsidian lanzó recientemente Bases — vistas de base de datos estructuradas que consultan notas usando propiedades del frontmatter. Eso podría convertir el sistema de entidades en algo más cercano a una base de datos relacional real. También quiero dirigir los archivos de memoria propios de Claude Code hacia el vault, para que su memoria persistente y el grafo de conocimiento se fusionen en un solo sistema. Y el elemento principal del tablero kanban: construir el prototipo de roadmap AI-native.

Pero la tesis de este capítulo no va sobre lo que viene después. Es que la brecha nunca fue más inputs — fue construir la capa que hace que todos los inputs se acumulen. Los capítulos del uno al tres conectaron a Claude Code con el mundo. Este capítulo le dio un lugar para recordar lo que encontró.

Acceso más memoria. Ese es el verdadero efecto compuesto.
