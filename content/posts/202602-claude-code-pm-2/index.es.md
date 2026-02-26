---
title: "Gestionando producto con Claude Code: Capitulo 2 - Datos"
summary: "Como agregar el CLI de Snowflake a Claude Code lo convirtio en un analista de datos para PMs - ejecutando consultas SQL, comparando retencion entre versiones de producto y dando sentido a datos desordenados rapidamente."
description: "Como agregar el CLI de Snowflake a Claude Code lo convirtio en un analista de datos para PMs - ejecutando consultas SQL, comparando retencion entre versiones de producto y dando sentido a datos desordenados rapidamente."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Snowflake", "data analysis"]
series: ["PMing with Claude Code"]
series_order: 2
date: 2026-02-26
draft: false
---

En el primer capitulo, escribi sobre como configurar Claude Code como un centro de mando para PMs: issues de GitHub, documentos de Notion, archivos de estrategia locales, todo conectado a traves de una terminal. La mayor brecha que senale fue los datos. Exportaba CSVs manualmente desde Looker o Sigma y los dejaba en una carpeta. Funcionaba, pero generaba friccion. Esa brecha ya esta cerrada.

## La Pieza que Faltaba: Acceso SQL

El problema nunca fue que Claude no pudiera analizar datos. Dale un CSV y encontrara patrones, resumira tendencias, redactara observaciones. El problema era llevar los datos a Claude en primer lugar. Cada vez que necesitaba numeros actualizados, tenia que abrir un navegador, navegar a un dashboard, exportar un archivo, moverlo al workspace. Para cuando Claude tenia los datos, ya habia gastado cinco minutos en algo que deberia tomar cinco segundos.

La solucion era obvia en retrospectiva: darle a Claude acceso directo al data warehouse. Nuestros datos de analytics viven en Snowflake, y Snowflake tiene un CLI. (Gracias por esto, Abhi!)

## Configurando el CLI de Snowflake

El [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) (`snow`) es una herramienta de linea de comandos para interactuar con Snowflake. Instalalo, configura una conexion y podras ejecutar consultas SQL directamente desde la terminal. Lo que significa que Claude tambien puede hacerlo.

La configuracion de conexion vive en `~/.snowflake/connections.toml`:

```toml
[my_org]
account = "your-account"
user = "your-user"
authenticator = "externalbrowser"
role = "ROLE_READONLY"
warehouse = "your-warehouse"
```

Algunas cosas que vale la pena mencionar. El autenticador `externalbrowser` significa que la autenticacion pasa por el SSO de tu empresa. Te autentificas una vez en el navegador y la sesion persiste. Sin API keys ni contrasenas en archivos de configuracion. Y el rol es de solo lectura. Claude puede consultar datos pero no puede modificar nada. La misma filosofia que los permisos de GitHub del primer capitulo: darle a la herramienta exactamente el acceso que necesita, nada mas.

Una vez configurada la conexion, ejecutar una consulta es un solo comando:

```bash
snow sql -c my_org -q "SELECT COUNT(*) FROM my_table" --format json
```

Luego le pedi a Claude que explorara y documentara en `CLAUDE.md` algunas de las tablas, esquemas y patrones de consulta comunes. Una vez hecho eso, discuti algunos detalles sobre valores calculados para que los tuviera en cuenta en SQL. Claude termino documentando algo asi:

```markdown
## Snowflake Access
- CLI: `snow sql -c my_org -q "..." --format json`
- Role: read-only
- Key tables:
  - `MARTY.ENTITIES.L3_DIM_MOBIULE>__USER` - User dimension
  - `PREP.AI_SERVICE.L1_AI_TRACE` - API event traces
- The ATTRIBUTES column is a JSON variant with: username,
  planName, model, origin, gordonTag, token counts, cost, etc.
```

Es el mismo patron del primer capitulo. `CLAUDE.md` le da a Claude el contexto que necesita para escribir consultas correctas sin que yo tenga que explicar el esquema cada vez. Y no necesitas escribirlo tu, puedes pedirle a Claude que capture la informacion que quieras.

## El Analisis de Retencion

Aqui es donde se puso interesante. Necesitaba entender la retencion de la primera semana de nuestro asistente de IA en cinco versiones diferentes del producto. Cada version habia sido lanzada con distintas funcionalidades, diferente UX, diferentes flujos de onboarding. La pregunta era simple: cual version retuvo mejor a los usuarios en los primeros siete dias?

Con el flujo de trabajo anterior, esto habria tomado dias de trabajo y dependencias con otros equipos. Abrir Snowflake, averiguar que etiquetas de version corresponden a que lanzamientos, escribir la consulta de cohortes, ejecutarla, exportarla, quedarse mirando una hoja de calculo, intentar detectar el patron. O pedirle a un analista de datos y esperar a que se libere su cola de trabajo.

Con Claude, describi lo que necesitaba en lenguaje natural:

> "Compara la retencion de la semana 1 de Gordon en las ultimas 5 versiones principales."

Claude ya conocia el esquema gracias a `CLAUDE.md`. Sabia que `gordonTag` identifica la version del producto, que `EVENT_TIMESTAMP` rastrea cuando ocurrieron los eventos, y sabia como identificar usuarios. Escribio el SQL, lo ejecuto a traves del CLI de Snowflake, obtuvo los resultados y los formato en una tabla comparativa.

Y en menos de 5 minutos tenia mis resultados...

## En Que es Bueno (y en Que No)

Dejame ser claro sobre lo que esto reemplaza y lo que no.

**No construye dashboards.** Si necesitas una visualizacion persistente y compartible que se actualice diariamente, sigues necesitando Looker o Sigma o lo que use tu equipo. Claude responde preguntas. No crea infraestructura de monitoreo.

**No reemplaza a tu equipo de datos.** Modelado de datos complejo, trabajo de pipelines, optimizacion del warehouse: eso es trabajo de ingenieria. Claude ejecuta consultas ad-hoc contra tablas existentes, no construye nuevos modelos de datos.

**Lo que si hace es colapsar el tiempo entre pregunta y respuesta.** El flujo de trabajo de un PM siempre ha tenido este cuello de botella: piensas en una pregunta, averiguas donde viven los datos, escribes o solicitas una consulta, esperas los resultados, los interpretas, piensas en una pregunta de seguimiento, y el ciclo se repite. Cada ciclo puede tomar minutos o dias dependiendo de si puedes hacerlo por tu cuenta.

Con Claude + Snowflake CLI, el ciclo es conversacional. Pregunta, consulta, resultado, seguimiento, todo en la misma sesion de terminal, todo en segundos. La velocidad cambia como trabajas. Haces mas preguntas. Exploras mas hipotesis. Detectas cosas que habrias pasado por alto porque el costo de verificar es tan bajo.

## El Efecto Compuesto

El verdadero poder no esta en ninguna integracion individual. Esta en la combinacion. En una sola conversacion, Claude puede:

1. Traer los ultimos issues de GitHub para ver que se lanzo en cada version
2. Consultar Snowflake para obtener datos de retencion de esas versiones
3. Buscar en Notion las decisiones de producto detras de cada lanzamiento
4. Cruzar toda la informacion y redactar un resumen

Son cuatro herramientas, cuatro fuentes de datos diferentes, sintetizadas en una conversacion. El contexto se mantiene. Cuando Claude encuentra que la version X tuvo una caida en retencion, puede verificar inmediatamente los issues de GitHub para ver que cambio en ese lanzamiento, y luego buscar el documento de Notion para entender el razonamiento. Sin cambiar de pestana, sin copiar datos entre herramientas.

Esto es lo que quise decir en el primer capitulo sobre Claude como un hub de flujo de trabajo, no solo un asistente de IA. Cada nueva integracion multiplica el valor de todas las existentes.

## Configuracion Actualizada

Como referencia, asi se ve el workspace ahora:

```
pm-workspace/
├── CLAUDE.md                # Workflow conventions, templates, Snowflake schemas
├── .claude/
│   └── settings.local.json  # Permissions: gh, snow sql, MCP servers
├── docs/                    # Strategy docs, analysis, specs
├── data_reports/            # Exported data (still useful for large datasets)
└── roadmap.md               # Living roadmap document
```

Y los permisos han crecido:

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)",
      "Bash(snow sql*)"
    ]
  }
}
```

Una linea nueva. Eso es todo lo que hizo falta para pasar de "exportar CSVs manualmente" a "pedirle a Claude que consulte el warehouse directamente."

## Que Sigue

La carpeta `data_reports/` no queda obsoleta. Para datasets grandes o visualizaciones complejas, exportar sigue teniendo sentido. Pero para las preguntas diarias de PM -- "como va la tendencia de retencion?", "cual es la distribucion de uso por plan?", "cuantos usuarios usaron esta funcionalidad la semana pasada?" -- ya no abro un navegador.

Las brechas restantes del primer capitulo se estan reduciendo. Notion esta conectado via MCP. GitHub esta conectado via CLI. Snowflake esta conectado via CLI. Las que aun faltan: Google Docs (aun no hay MCP), Slack (existe MCP pero no lo he configurado) e integraciones de calendario. Cada una que agrego hace que todo el sistema sea mas util.

Si eres PM y tienes un data warehouse con acceso CLI, esto es lo de mayor impacto que puedes agregar a tu configuracion de Claude Code. Las consultas que Claude escribe no siempre son perfectas al primer intento. Pero el ciclo de iteracion es tan rapido que no importa. Tres consultas imperfectas en treinta segundos superan a una consulta perfecta que toma una hora escribir.

El punto no es la perfeccion. Es la velocidad para llegar al insight.
