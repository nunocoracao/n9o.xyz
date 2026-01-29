---
title: "Gestión de Producto con Claude Code"
summary: "Cómo configuré Claude Code como mi centro de mando de PM - conectando issues de GitHub, documentos de Notion y asistencia de IA en un solo flujo de trabajo."
description: "Cómo configuré Claude Code como mi centro de mando de PM - conectando issues de GitHub, documentos de Notion y asistencia de IA en un solo flujo de trabajo."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow"]
date: 2026-01-28
draft: false
---

La mayoría de las herramientas de IA están diseñadas para desarrolladores. Copilotos que autocompletan código, agentes que escriben tests, asistentes que depuran errores. Pero el trabajo de PM - dar seguimiento a roadmaps, escribir especificaciones, consultar issues, sintetizar notas de reuniones - está igual de listo para la asistencia de IA. El desafío es que el trabajo de PM abarca tantas herramientas: GitHub para issues, Notion para documentación, hojas de cálculo para priorización, Slack para contexto. Ninguna herramienta de IA las conecta todas.

Hasta que empecé a hacer mi trabajo de PM en Claude Code.

## ¿Por qué Claude Code para PM?

Claude Code es el asistente de IA basado en CLI de Anthropic. Se ejecuta en tu terminal, lo cual podría parecer una elección extraña para un PM... Pero escúchame. Primero, vive donde paso una parte relevante de mi tiempo. Estoy constantemente en la terminal - ejecutando comandos de git, verificando despliegues, revisando logs cuando depuro con ingenieros. Tener a Claude disponible en el mismo contexto significa que no cambio de contexto entre herramientas para algunos de esos casos de uso.

Segundo, el sistema [MCP (Model Context Protocol)](https://modelcontextprotocol.io) permite a Claude Code conectarse a herramientas externas. GitHub, Notion, Linear, Slack - si hay un servidor MCP para ello, Claude Code puede consultarlo. Esto convierte un simple asistente de IA en un verdadero centro de flujo de trabajo.

Tercero, si no hay servidor MCP, aún puedo usar comandos de shell para conectarme a cualquier herramienta con CLI. El GitHub CLI (`gh`) es perfecto para el trabajo de PM. Claude puede ejecutar comandos `gh` para listar issues, ver detalles, crear nuevos elementos y más. Esto me da acceso de lectura y escritura a mis issues de GitHub directamente desde Claude.

Cuarto, el archivo `CLAUDE.md` le da a Claude contexto persistente sobre cómo trabajo. Mis convenciones, mis plantillas, mis preferencias. Cada conversación comienza con Claude ya conociendo mi flujo de trabajo.

Y finalmente, el sistema de permisos mantiene todo seguro. Controlo exactamente qué comandos puede ejecutar Claude, qué APIs puede llamar. Sin sorpresas.

## La Configuración

Mi espacio de trabajo de PM es una estructura de repositorio simple:

```
pm-workspace/
├── CLAUDE.md                # Convenciones de flujo de trabajo y plantillas
├── .claude/
│   └── settings.local.json  # Permisos y configuración MCP
├── docs/                    # Documentos de estrategia, análisis, especificaciones
├── data_reports/            # Datos de analytics exportados manualmente
└── roadmap.md               # Documento de roadmap vivo
```

La filosofía es documentación primero, con GitHub como fuente de verdad para la ejecución - eso es lo que mi equipo usa para dar seguimiento al trabajo, no sería muy diferente para Jira, Notion, Linear, etc. El repositorio contiene mis documentos de trabajo - documentos de estrategia, análisis escritos, cualquier cosa sobre la que quiera que Claude tenga contexto. GitHub tiene los issues reales y el seguimiento de proyectos. Notion tiene la base de conocimiento de formato largo. Y cuando necesito contexto de analytics, los datos exportados viven en `data_reports/`.

El archivo `CLAUDE.md` es donde ocurre la magia. Contiene mis convenciones:

```markdown
# PM Workflow

## Source of Truth
- **GitHub:** All epics and issues live in the main repo
- **Notion:** PRDs, meeting notes, decision logs
- **Local docs:** Strategy documents in `/docs/`
- **Data:** Exported analytics in `/data_reports/`

## Conventions
- Epics use the `Epic` issue type
- Streams are tracked via labels
- Quarterly goals tagged with `Q1-2026`, `Q2-2026`, etc.

## Useful Commands
- List open epics: `gh api graphql -f query='...'` (full query below)
- View epic details: `gh issue view <number>`
- Sync roadmap: Pull latest epic status and update roadmap.md

## Templates
When creating roadmap items, use this structure:
- Problem: What user problem are we solving?
- Solution: High-level approach
- Success metrics: How do we know it worked?
- Dependencies: What blocks this?

## Documentation Index
| File | Description |
|------|-------------|
| `docs/strategy.md` | Product strategy and vision |
| `docs/analysis.md` | Research and data analysis |
```

Este archivo se carga automáticamente cada vez que inicio Claude Code en este directorio. Claude ya sabe cómo nombro las cosas, dónde encontrar información y qué formato espero.

## Conectando las Herramientas

### Integración con GitHub CLI

El GitHub CLI (`gh`) es la columna vertebral de mi configuración. Claude Code puede ejecutar comandos de shell, así que configuro permisos para permitir operaciones específicas de GitHub:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)"
    ]
  }
}
```

Esto le otorga a Claude acceso de lectura y escritura a issues y proyectos, pero nada más. Sin hacer push de código, sin gestionar releases, sin tocar nada fuera del flujo de trabajo de PM.

Con esta configuración, puedo preguntarle a Claude cosas como:

- "Muéstrame todos los epics abiertos para Q1"
- "¿Cuál es el estado del epic de autenticación?"
- "Crea un nuevo issue para el rediseño del dashboard"
- "Lista todos los issues que bloquean el lanzamiento móvil"
- "¿Hay comentarios abiertos del equipo que necesite atender?"

Claude traduce mi lenguaje natural a los comandos `gh` correctos, los ejecuta y resume los resultados. Para consultas más complejas, puede usar la API GraphQL de GitHub:

```bash
gh api graphql -f query='
  query {
    repository(owner: "myorg", name: "myrepo") {
      projectV2(number: 1) {
        items(first: 50) {
          nodes {
            content { ... on Issue { title state } }
            fieldValues(first: 10) { nodes { ... on ProjectV2ItemFieldSingleSelectValue { name } } }
          }
        }
      }
    }
  }
'
```

No tengo que recordar esta sintaxis. Solo pregunto "¿qué hay en el tablero del proyecto Q1?" y Claude descifra la consulta.

### Notion MCP

Para documentos de formato largo - PRDs, notas de reuniones, registros de decisiones - uso Notion. Claude Code soporta servidores MCP, que son servicios externos que extienden sus capacidades. El servidor MCP de Notion le da a Claude acceso de lectura a mi espacio de trabajo:

```json
{
  "mcpServers": {
    "notion": {
      "type": "url",
      "url": "https://mcp.notion.com/sse"
    }
  }
}
```

Con esto conectado, puedo pedirle a Claude que busque en mi espacio de trabajo de Notion para obtener contexto. "¿Qué decidimos sobre el modelo de precios?" o "Encuentra el PRD para notificaciones de usuario" o "Resume las últimas tres reuniones de producto".

El poder está en la combinación. Claude puede consultar GitHub para el estado de issues, luego hacer referencia cruzada con documentos de Notion para contexto, y luego ayudarme a redactar una actualización que referencie ambos. Una herramienta, múltiples fuentes.

## El Flujo de Trabajo en la Práctica

Así es como se ve un día típico:

**Preparación matutina.** Abro Claude Code y pregunto: "¿Qué issues se cerraron ayer? ¿Hay nuevos bugs reportados?" Claude consulta GitHub, resume la actividad, y tengo mis puntos de conversación para el standup en treinta segundos.

**Sincronización del roadmap.** "Sincroniza el roadmap desde GitHub - obtén el último estado de todos los epics abiertos." Claude ejecuta la consulta GraphQL de mi `CLAUDE.md`, obtiene el estado actual, asignados y milestones, luego actualiza `roadmap.md` con datos frescos. El documento de roadmap se mantiene sincronizado con GitHub sin que yo revise manualmente cada issue.

**Contexto de estrategia.** "¿Cuál es nuestro enfoque en el trabajo de infraestructura de plataforma?" Claude lee el documento de estrategia relevante de mi carpeta `docs/` y resume los puntos clave. Cuando necesito referenciar una decisión o recordarme el razonamiento detrás de una dirección, es instantáneo.

**Análisis de datos.** Exporto un CSV - métricas de engagement de usuarios del último trimestre - y lo dejo en `data_reports/`. "Analiza los datos de engagement y resume las tendencias." Claude lee el archivo, identifica patrones y redacta observaciones. No es tan fluido como una integración directa, pero funciona.

**Escribiendo especificaciones.** Empiezo con una idea aproximada: "Necesito un elemento de roadmap para el nuevo flujo de onboarding." Claude conoce mi plantilla de `CLAUDE.md`, así que hace las preguntas correctas - cuál es el problema, quién está afectado, cuál es el alcance - y redacta un documento estructurado. Yo edito, refino, y cuando está listo, le digo a Claude que cree el epic en GitHub.

**Buscando contexto.** "¿Qué decidimos sobre rate limiting?" Claude busca en Notion notas de reuniones y documentos de decisiones, encuentra la discusión relevante y resume el resultado. No más excavación a través de meses de notas.

**Fin de semana.** "Redacta un resumen de lo que se lanzó esta semana para la actualización a stakeholders." Claude consulta los issues cerrados, los agrupa por stream y redacta un resumen legible. Yo reviso, ajusto el enfoque y envío.

Las plantillas en `CLAUDE.md` aseguran una salida consistente. Cuando pido un elemento de roadmap, siempre sigue la misma estructura. Cuando pido un resumen semanal, siempre incluye las mismas secciones. Consistencia sin el tedio.

## Lo que Aún Falta

La configuración no está completa. Algunas brechas que estoy resolviendo activamente:

**Herramientas de datos.** Vivo en Looker y Sigma para analytics - métricas de uso, datos de funnel, análisis de cohortes. No hay MCP para ninguno. Cuando necesito que Claude me ayude a analizar datos o escribir un resumen que incluya métricas, exporto manualmente CSVs a una carpeta `data_reports/` en mi espacio de trabajo. Funciona, pero es fricción. Cada vez que quiero datos frescos, estoy de vuelta en el navegador haciendo clic en botones de exportar.

**Google Docs.** Mucho trabajo cross-funcional sucede en Google Docs - especificaciones compartidas, PRDs colaborativos, comentarios de stakeholders. Tampoco hay MCP ahí. Mismo workaround: exportar a markdown o PDF, dejarlo en el espacio de trabajo. Claude puede leerlo, pero es una instantánea, no una conexión en vivo.

**Gestión de tareas.** No todo es un epic de roadmap. Tengo todos personales - "dar seguimiento con diseño sobre los mockups", "revisar la propuesta de API", "preparar preguntas para la llamada con el cliente". Estos no pertenecen a issues de GitHub. Aún estoy descubriendo la forma correcta de dar seguimiento a estos. Ahora mismo viven en un archivo markdown simple, pero me encantaría una integración más estrecha - quizás un MCP de Linear o Todoist que Claude pudiera consultar y actualizar.

El ecosistema MCP está creciendo rápido. Slack, Linear, integraciones de calendario están todas emergiendo. Pero por ahora, el flujo de trabajo de exportación manual es un puente necesario para herramientas que aún no tienen conexiones nativas.

## Lo que Está Funcionando

Los flujos de trabajo de lectura intensiva son donde Claude brilla. Consultar issues, buscar documentos, resumir estado - esto solía tomarme diez minutos de hacer clic por ahí, ahora toma treinta segundos. Los flujos de trabajo de escritura intensiva necesitan más juicio humano. Claude puede redactar una especificación, pero aún necesito pensar en la estrategia.

La combinación de GitHub + Notion + documentos locales cubre la mayor parte de mi trabajo diario. Cuando necesito contexto de analytics, la exportación manual añade un paso, pero una vez que los datos están en el espacio de trabajo, Claude los maneja bien.

El panorama más grande es IA como co-piloto de PM, no reemplazo. Claude no toma decisiones de producto. No habla con clientes ni negocia con stakeholders ni siente la intuición de que algo está mal. Pero maneja las partes mecánicas del trabajo - las consultas, el formateo, las búsquedas, la redacción - para que pueda enfocarme en las partes que realmente requieren juicio humano.

Si eres un PM curioso sobre herramientas de IA, dale una oportunidad a Claude Code. Configura un espacio de trabajo simple, conecta GitHub, añade tus convenciones a `CLAUDE.md`, y ve cómo encaja en tu flujo de trabajo. No se trata de reemplazar tus herramientas existentes. Se trata de añadir una capa de inteligencia que las conecte.

Y si construyes algo interesante, comparte tu configuración. Me encantaría ver cómo otros PMs están usando esto.
