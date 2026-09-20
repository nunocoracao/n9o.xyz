---
title: "La relación ruido-valor: cuando la producción de la IA desborda la atención humana"
summary: "La IA ha hecho que producir mensajes, documentos y código sea casi gratis. La atención humana sigue exactamente donde estaba. Cómo intento reducir la relación ruido-valor como lector, como productor y como parte de un equipo."
description: "La IA hizo casi gratis producir documentos y código, pero la atención humana no escala. Cómo reducir la relación ruido-valor como lector, productor y equipo."
categories: ["IA", "Meta"]
tags: ["IA", "atención", "productividad", "agentes", "sobrecarga de información", "gestión de producto"]
date: 2026-09-20
alt: "Una persona en un escritorio separa una página luminosa y útil de un torrente de mensajes, documentos y código generados por máquinas."
---

Cuando empecé a usar Slack en el trabajo, me di cuenta de cuánta parte del día se me iba en decidir qué ignorar.

La comunicación se había convertido en un proceso en segundo plano a tiempo completo. Los mensajes de Slack, los hilos, las reacciones, el correo, los documentos compartidos y las reuniones por Zoom hacían más fácil llegar a la gente. También creaban más sitios que revisar, más conversaciones que seguir y más decisiones que iban llegando a lo largo del día.

A veces era como trabajar en una oficina donde, cada diez minutos, alguien se levantaba y le gritaba algo a todos los demás. Cada interrupción podía serle útil a alguien. El resto tenía que gastar igualmente un poco de atención en decidir si aquello iba con ellos.

La IA generativa no creó ese ruido. Lo industrializó.

En los últimos dos años, el coste de producir un mensaje, un documento, una presentación o un trozo de código plausibles se ha desplomado. Ahora súmale agentes capaces de procesar información y generar nuevos artefactos sin que nadie esté mirando. Cada persona puede producir más, cada equipo puede pedir más y cada sistema puede informar de más.

Nuestra capacidad de prestar atención no ha cambiado en absoluto. Herbert Simon ya vio la forma del problema en 1971: [la abundancia de información crea pobreza de atención](https://en.wikipedia.org/wiki/Attention_economy).

## De la relación señal-ruido a la relación ruido-valor

Solemos describir esto como un problema de [relación señal-ruido](https://en.wikipedia.org/wiki/Signal-to-noise_ratio). Esa descripción se deja algo importante.

Un mensaje puede ser relevante, estar bien escrito, ir dirigido a mí y aun así no tener ningún valor. Un documento puede ser correcto y estar pulido sin cambiar ninguna decisión. El código puede funcionar y seguir siendo lo que no había que añadir al producto.

La señal es lo que parece relevante. El valor es lo que cambia lo que entiendo, decido o hago.

Antes estaban más cerca la una del otro. Escribir un documento bien pensado llevaba tiempo, así que el esfuerzo que había detrás era al menos un indicio de que importaba. Ese filtro nunca fue perfecto, pero existía. Hoy, producir algo pulido puede costar un solo prompt. Puede contener valor real o ninguno. La apariencia de esfuerzo ya no me dice gran cosa sobre el valor que hay debajo.

Por eso la medida que me interesa es la relación ruido-valor: cuánto tiene que atravesar una persona por cada cosa que cambia lo que entiende, decide o hace. La IA sube el primer número gratis. El segundo depende del criterio humano, que no se ha acelerado.

El cuello de botella ha pasado de la producción al consumo. Podemos generar más de lo que nadie puede revisar de forma responsable.

{{< inlinesvg src="attention-gate.svg" alt="Diagrama animado: un flujo denso de puntos grises avanza hacia un muro con una única abertura estrecha delante de una persona. Solo pasan los pocos puntos alineados con la abertura. De los cuatro puntos brillantes del flujo, uno llega a la persona y tres se quedan atascados en el muro con el resto." caption="Producir es casi gratis. La abertura es la atención, y no se ha ensanchado. Parte de lo que se queda atascado tras el muro es lo valioso." >}}

## Dos formas de reducir la relación

Una respuesta es ir más despacio. Ningún equipo que quiera seguir siendo competitivo lo hará.

La otra es trabajar en los dos lados de la relación: mejorar a la hora de encontrar el valor en lo que me llega y ser deliberado con lo que añado para los demás.

Las dos cosas importan sobre todo allí donde la gente decide junta qué construir, cómo abordarlo y por qué. Esas decisiones se apoyan en cosas que un modelo no tiene. Nunca le ha irritado una interfaz. Si esa conversación se llena de material generado, las voces humanas que hay en ella se oyen peor, y son la razón de que la conversación exista.

{{< inlinesvg src="human-voices.svg" alt="Diagrama animado: tres personas conectadas en triángulo se pasan mensajes mientras una deriva constante de puntos grises cruza por encima de su conversación." caption="La conversación entre personas es el canal estrecho. Todo lo generado compite con ella." >}}

## Lo aceptable es más difícil de filtrar que lo malo

El material difícil no es el que está claramente roto. El spam es fácil de rechazar. Un mal documento se delata solo. Buena parte de la nueva producción es aceptable: coherente, razonablemente relevante y con formato profesional.

El trabajo aceptable también consume atención. Alguien tiene que leer el documento, revisar la pull request, comprobar el resumen o decidir si la recomendación importa. El coste de producción desapareció, pero el coste de revisión se trasladó a otra persona. Unos investigadores le pusieron nombre en Harvard Business Review, [workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity): trabajo generado con IA que parece terminado y deja el esfuerzo real a quien lo recibe.

Veo el mismo efecto con [mis propios agentes](/es/posts/202609-an-organization-of-three/#gestionar-a-los-asistentes). Una actualización de estado puede ser correcta y no decirme nada que necesite saber. Una tarea completada puede crear otro documento que revisar. Una notificación pensada para demostrar que se hizo trabajo útil puede convertirse ella misma en más trabajo.

El fallo habitual es más silencioso que ahogarse: leerlo todo por encima, cambiar de contexto constantemente y no darle a nada la atención que merece.

## Como lector: proteger la atención y dejar que la IA la ordene

Empiezo por algo que no tiene nada que ver con la IA. Bloqueo tiempo para el [deep work](https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/). Todo lo que exige comprender, inventar o tomar una decisión difícil necesita espacio sin una retransmisión en directo al lado.

Los mensajes se siguen acumulando, y los proceso por lotes. Leer veinte actualizaciones de una vez cuesta mucho menos que ser interrumpido veinte veces, aunque el volumen sea idéntico. Una [investigación sobre el trabajo interrumpido](https://ics.uci.edu/~gmark/chi08-mark.pdf) encontró que la gente lo compensa trabajando más rápido, y lo paga en estrés y frustración.

La IA es parte de la causa, pero también es la única forma práctica que he encontrado de procesar parte del volumen resultante.

En el trabajo, la IA puede ayudar a identificar los mensajes que quizá requieran una acción. Esos los leo primero. Aun así repaso todo lo demás, porque estar al tanto es más amplio que una lista de tareas. El contexto, las señales débiles y esa cosa que de vez en cuando el filtro entendió mal siguen importando.

Uso la IA para ordenar mi atención, no para cedérsela. El filtro aprende qué suele importar, pero el responsable de lo que se me escapa sigo siendo yo.

Con el trabajo repetible no tengo problema en ir más lejos. Si algo es un mecanismo de relojería, se automatiza. Si el proceso es conocido, las entradas están claras y los errores son baratos de detectar o de revertir, la delegación total puede bastar.

Todo lo que queda fuera de esa categoría necesita criterio.

## Como productor: trabajo meditado frente a producción desechable

El otro lado de la relación es lo que yo le añado. Usar IA para un trabajo que exige criterio no significa pedir una respuesta y aceptarla.

Cuando la uso para escribir un documento de cierto peso, empiezo por decidir qué quiero decir. Defino la estructura, doy el contexto relevante y explico el objetivo. Luego genero una sección, la edito yo mismo, la cuestiono, añado el contexto que falta y repito.

Con el código pasa lo mismo. Un agente puede producir una implementación rápido, pero sigo teniendo que decidir si la funcionalidad debe existir, si el enfoque encaja en el sistema y si el resultado se puede mantener. Que pasen los tests responde solo a una parte.

Que algo lo haya escrito una IA o una persona me dice poco. Lo que importa es si es producción desechable o trabajo meditado, y de la producción desechable viene la mayor parte del ruido.

La IA puede participar en el trabajo meditado. Puede cuestionar, redactar, comparar y revisar a una velocidad que yo no puedo igualar. Pero el valor sale del ciclo: estructura, contexto, generación, revisión, ediciones a mano y otra pasada. Mi cabeza se dedica a las partes que no son relojería.

## Enviar menos a las personas

Hay una trampa evidente en usar IA para resumir todo el material que la IA nos ayudó a crear. Un filtrado mejor puede hacer que el volumen sea llevadero sin cuestionar por qué existe ese volumen.

La producción total puede seguir creciendo. Lo que tiene que encoger es la parte que va dirigida a personas. No hace falta enviar cada actualización. No toda idea necesita un documento. No todo trozo de código que funciona tiene que convertirse en una funcionalidad. Antes de pedirle a la IA que resuma un artefacto, merece la pena preguntarse si ese artefacto tenía que existir.

Quien produce debería asumir parte del coste de consumir. Todo lo que se le entrega a otra persona, venga de una persona o de un agente, debería decir qué ha cambiado, por qué importa y qué decisión hace falta. Si no sé responder a esas tres preguntas, lo más probable es que el artefacto no esté listo para enviarse, y puede que no tenga que existir. Mis agentes trabajan ahora con la misma regla: la monitorización rutinaria se queda callada cuando no hay nada sobre lo que actuar. A veces la actualización correcta es el silencio.

## Los equipos adoptaron las herramientas y conservaron el proceso

Casi toda la forma de trabajar de los equipos de producto se diseñó cuando producir cosas era caro. Una especificación tardaba una semana en escribirse, así que llegaban pocas a revisión. Un prototipo llevaba un sprint, así que antes se discutía si merecía la pena construirlo. El coste hacía de límite de caudal, y el proceso dependía de él.

Ese límite ya no existe. Cualquiera puede generar un documento y cualquiera puede generar código, pero la reunión de revisión, la cadena de aprobaciones y el número de personas que pueden tomar la decisión son los mismos de antes. Adoptamos las herramientas y conservamos la organización.

{{< inlinesvg src="rate-limit.svg" alt="Diagrama animado con dos carriles. En el carril superior una persona produce un documento cada vez y este viaja hasta un revisor. En el carril inferior una persona con un asistente de IA produce documentos en rápida sucesión, y se amontonan delante del mismo y único revisor." caption="Cuando producir era caro, el coste era el límite de caudal. El revisor de la derecha es el mismo en los dos carriles." >}}

No tengo resuelta la nueva estructura. Creo que empieza por tratar la atención de las personas que deciden como el presupuesto en torno al cual se planifica todo lo demás: menos artefactos dirigidos a personas, grupos más pequeños tomando decisiones y una respuesta clara a quién necesita ver qué.

La atención es ahora el límite duro. A los equipos que les vaya bien serán los que protejan el criterio suficiente para encontrar el valor dentro del volumen.

Nada de esto es un argumento a favor o en contra de la IA. La uso todos los días para pensar, crear y abrirme paso entre el ruido. Pero las decisiones que importan las siguen tomando personas que hablan entre sí, con una atención finita y un criterio que lleva tiempo. Quiero que estas herramientas despejen sitio para esa conversación, para que estemos presentes en las partes que importan.
