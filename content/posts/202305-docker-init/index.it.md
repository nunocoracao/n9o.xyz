---
title: "Docker Init"
summary: "Inizializza Dockerfile e file Compose con un singolo comando CLI"
categories: ["Esterno"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/"
date: 2023-05-11
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker ha rivoluzionato il modo in cui gli sviluppatori costruiscono, pacchettizzano e distribuiscono le loro applicazioni. I container Docker forniscono un ambiente runtime leggero, portabile e coerente che può essere eseguito su qualsiasi infrastruttura. E ora, il team Docker ha sviluppato `docker init`, un nuovo comando dell'interfaccia a riga di comando (CLI) introdotto come funzionalità beta che semplifica il processo di aggiunta di Docker a un progetto (Figura 1).

{{< alert >}}
Nota: Docker Init non deve essere confuso con l'eseguibile docker-init usato internamente, che viene invocato da Docker quando si utilizza il flag –init con il comando docker run.
{{< /alert >}}

{{< gallery >}}
  <img src="/posts/202305-docker-init/img/img1.webp" class="grid-w50" />
  <img src="/posts/202305-docker-init/img/img2.webp" class="grid-w50" />
{{< /gallery >}}


*Con un comando, tutti i file Docker richiesti vengono creati e aggiunti al tuo progetto.*

## Crea asset automaticamente
Il nuovo comando docker init automatizza la creazione degli asset Docker necessari, come Dockerfile, file Compose e file .dockerignore, in base alle caratteristiche del progetto. Eseguendo il comando docker init, gli sviluppatori possono containerizzare rapidamente i loro progetti. Docker init è uno strumento prezioso per gli sviluppatori che vogliono sperimentare con Docker, imparare la containerizzazione o integrare Docker nei loro progetti esistenti.

Per usare docker init, gli sviluppatori devono aggiornare alla versione 4.19.0 o successiva di Docker Desktop ed eseguire il comando nella cartella del progetto target. Docker init rileverà le definizioni del progetto e genererà automaticamente i file necessari per eseguire il progetto in Docker.

L'attuale versione Beta di docker init supporta Go, Node e Python, e il nostro team di sviluppo sta lavorando attivamente per estendere il supporto a linguaggi e framework aggiuntivi, inclusi Java, Rust e .NET. Se c'è un linguaggio o uno stack che vorresti vedere aggiunto o se hai altri feedback su docker init, faccelo sapere attraverso il nostro modulo Google.

In conclusione, docker init è uno strumento prezioso per gli sviluppatori che vogliono semplificare il processo di aggiunta del supporto Docker ai loro progetti. Automatizza la creazione degli asset Docker necessari e può aiutare a standardizzare la creazione di asset Docker tra diversi progetti. Permettendo agli sviluppatori di concentrarsi sullo sviluppo delle loro applicazioni e riducendo il rischio di errori e incoerenze, Docker init può aiutare ad accelerare l'adozione di Docker e della containerizzazione.

## Guarda Docker Init in azione
Per vedere docker init in azione, guarda il seguente video panoramico di Francesco Ciulla, che dimostra come costruire gli asset Docker richiesti per il tuo progetto.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/f4cHtDRZv5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/>

{{< alert >}}
**Nota:** questo post è stato originariamente pubblicato esternamente, per favore vai al [blog di Docker](https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/) per leggere il post completo
{{< /alert >}}
