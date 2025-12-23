---
title: "El Docker MCP Catalog: La Forma Segura de Descubrir y Ejecutar Servidores MCP"
summary: "El ecosistema Model Context Protocol (MCP) está explotando. En solo semanas, nuestro Docker MCP Catalog ha superado 1 millón de pulls, validando que los desarrolladores buscan una forma segura de ejecutar servidores MCP. Hoy, estamos emocionados de compartir actualizaciones importantes del Docker MCP Catalog, incluyendo funcionalidades de descubrimiento mejoradas y nuestro nuevo proceso de envío abierto."
categories: ["Externo"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/"
date: 2025-07-01
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

El ecosistema Model Context Protocol (MCP) está explotando. En solo semanas, nuestro Docker MCP Catalog ha superado 1 millón de pulls, validando que los desarrolladores buscan una forma segura de ejecutar servidores MCP. Hoy, estamos emocionados de compartir actualizaciones importantes del Docker MCP Catalog, incluyendo funcionalidades de descubrimiento mejoradas y nuestro nuevo proceso de envío abierto. Con cientos de desarrolladores ya solicitando publicar sus servidores MCP a través de Docker, estamos acelerando nuestra misión de hacer que los servidores MCP containerizados sean el estándar para la distribución segura de herramientas de IA.

La rápida adopción de servidores MCP también destaca un problema crítico — la práctica actual de ejecutarlos vía comandos npx o uvx expone los sistemas a código no verificado con acceso completo al host, sin mencionar la fricción en la gestión de dependencias. En este post, explicaremos por qué Docker está invirtiendo en el ecosistema MCP, mostraremos las nuevas capacidades del catalog y compartiremos cómo puedes contribuir a construir una base más segura para aplicaciones de IA.

## Por qué Docker está construyendo el MCP Catalog
### Los problemas de seguridad en la distribución MCP
Cada vez que un desarrollador ejecuta npx -y @untrusted/mcp-server o uvx some-mcp-tool, está haciendo un compromiso peligroso: conveniencia antes que seguridad. Estos comandos ejecutan código arbitrario directamente en el sistema host con acceso completo a:

- Todo el sistema de archivos
- Conexiones de red
- Variables de entorno y secretos
- Recursos del sistema

Algunos clientes MCP limitan el acceso a variables de entorno, pero incluso eso no es una práctica universal. Esto no es sostenible. A medida que MCP pasa de la experimentación a producción, necesitamos un enfoque fundamentalmente diferente.

### La posición única de Docker
Docker ha pasado más de una década resolviendo exactamente estos problemas para aplicaciones cloud-native. Hemos construido la infraestructura, herramientas y confianza en la que los desarrolladores confían para ejecutar miles de millones de contenedores en producción. Ahora, estamos aplicando estos mismos principios al ecosistema MCP.

Cuando ejecutas un servidor MCP desde nuestro Catalog, obtienes:

- Firmas criptográficas que verifican que la imagen no ha sido alterada
- Software Bill of Materials (SBOMs) documentando cada componente
- Aislamiento completo de tu sistema host
- Acceso controlado solo a lo que el servidor realmente necesita

No se trata de hacer la vida más difícil a los desarrolladores — se trata de hacer que la seguridad sea el camino de menor resistencia.

## Presentación del MCP Catalog mejorado
### Construido para el descubrimiento MCP
Hemos reimaginado el MCP Catalog para hacerlo más accesible y fácil de navegar. Puedes seguir accediendo al MCP Catalog desde Docker Hub y el MCP Toolkit en Docker Desktop como antes, o ir directamente al MCP catalog. Hemos ido más allá de las listas genéricas de imágenes de contenedor construyendo funcionalidades que te ayudan a encontrar rápidamente los servidores MCP correctos para tus aplicaciones de IA.

Navegar por Caso de Uso: Los servidores MCP están organizados por lo que realmente hacen:

- Integración de Datos (bases de datos, APIs, sistemas de archivos)
- Herramientas de Desarrollo (IDEs, análisis de código, testing)
- Comunicación (email, Slack, plataformas de mensajería)
- Productividad (gestión de tareas, calendarios, notas)
- Analytics (procesamiento de datos, visualización, reporting)

**Búsqueda Mejorada**: Encuentra servidores por capacidad, herramientas, tags de GitHub y categorías — no solo por nombre.

**Transparencia de Seguridad**: Cada entrada del catalog muestra claramente si está construida por Docker (con firma y verificación transparente del build) o construida por la comunidad (containerizada y mantenida por el publisher).

### Cómo clasificamos los Servidores MCP: Construidos por Docker vs. Construidos por la Comunidad
**Servidores Construidos por Docker**: Cuando ves "Built by Docker", estás obteniendo nuestro tratamiento de seguridad completo. Controlamos toda la pipeline de build, proporcionando firmas criptográficas, SBOMs, atestaciones de procedencia y escaneo continuo de vulnerabilidades.

**Servidores Construidos por la Comunidad**: Estos servidores son empaquetados como imágenes Docker por sus desarrolladores. Aunque no controlamos su proceso de build, aún se benefician del aislamiento de contenedores, que es una mejora masiva de seguridad comparada con la ejecución directa.

Los tiers cumplen roles importantes: Los servidores construidos por Docker demuestran el estándar de oro para seguridad, mientras que los servidores construidos por la comunidad aseguran que podamos escalar rápidamente para satisfacer la demanda de los desarrolladores. Los desarrolladores pueden cambiar de opinión después de enviar un servidor construido por la comunidad y optar por reenviarlo como servidor construido por Docker.

Screenshot 2025-06-26 105434
Figura 3: Un ejemplo de Servidor MCP Built by Docker.

## Abierto para envío de Servidores MCP: Únete al movimiento MCP seguro

{{< github repo="docker/mcp-registry" >}}


A partir de hoy, estamos abriendo nuestro proceso de envío a la comunidad. Ya seas un desarrollador individual o un equipo enterprise, puedes presentar tus servidores MCP en el Docker MCP Catalog. Al publicar a través de nuestro catalog, no solo estás distribuyendo tu servidor MCP — estás ayudando a establecer un nuevo estándar de seguridad para todo el ecosistema mientras haces tus herramientas MCP disponibles para millones de desarrolladores que ya usan Docker vía Docker Hub y Docker Desktop. Tu servidor containerizado se convierte en parte de la solución, demostrando que las herramientas de IA listas para producción no requieren comprometer la seguridad.


Continúa leyendo el post original en el [Docker Blog](https://www.docker.com/blog/docker-mcp-catalog-secure-way-to-discover-and-run-mcp-servers/).
