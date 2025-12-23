---
title: "Docker Init"
summary: "Initialisez les Dockerfiles et les fichiers Compose avec une seule commande CLI"
categories: ["Externe"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/"
date: 2023-05-11
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---

Docker a révolutionné la façon dont les développeurs construisent, empaquètent et déploient leurs applications. Les conteneurs Docker fournissent un environnement d'exécution léger, portable et cohérent qui peut fonctionner sur n'importe quelle infrastructure. Et maintenant, l'équipe Docker a développé `docker init`, une nouvelle commande d'interface en ligne de commande (CLI) introduite en tant que fonctionnalité bêta qui simplifie le processus d'ajout de Docker à un projet (Figure 1).

{{< alert >}}
Note : Docker Init ne doit pas être confondu avec l'exécutable docker-init utilisé en interne, qui est invoqué par Docker lors de l'utilisation du flag –init avec la commande docker run.
{{< /alert >}}

{{< gallery >}}
  <img src="/posts/202305-docker-init/img/img1.webp" class="grid-w50" />
  <img src="/posts/202305-docker-init/img/img2.webp" class="grid-w50" />
{{< /gallery >}}


*Avec une seule commande, tous les fichiers Docker requis sont créés et ajoutés à votre projet.*

## Créer des ressources automatiquement
La nouvelle commande docker init automatise la création des ressources Docker nécessaires, telles que les Dockerfiles, les fichiers Compose et les fichiers .dockerignore, en fonction des caractéristiques du projet. En exécutant la commande docker init, les développeurs peuvent rapidement conteneuriser leurs projets. Docker init est un outil précieux pour les développeurs qui veulent expérimenter avec Docker, apprendre la conteneurisation ou intégrer Docker dans leurs projets existants.

Pour utiliser docker init, les développeurs doivent mettre à niveau vers la version 4.19.0 ou ultérieure de Docker Desktop et exécuter la commande dans le dossier du projet cible. Docker init détectera les définitions du projet et générera automatiquement les fichiers nécessaires pour exécuter le projet dans Docker.

La version bêta actuelle de docker init prend en charge Go, Node et Python, et notre équipe de développement travaille activement à étendre le support pour des langages et frameworks supplémentaires, y compris Java, Rust et .NET. S'il y a un langage ou une pile que vous aimeriez voir ajouté ou si vous avez d'autres commentaires sur docker init, faites-le nous savoir via notre formulaire Google.

En conclusion, docker init est un outil précieux pour les développeurs qui veulent simplifier le processus d'ajout du support Docker à leurs projets. Il automatise la création des ressources Docker nécessaires et peut aider à standardiser la création de ressources Docker sur différents projets. En permettant aux développeurs de se concentrer sur le développement de leurs applications et en réduisant le risque d'erreurs et d'incohérences, Docker init peut aider à accélérer l'adoption de Docker et de la conteneurisation.

## Voir Docker Init en action
Pour voir docker init en action, regardez la vidéo de présentation suivante de Francesco Ciulla, qui démontre la construction des ressources Docker requises pour votre projet.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/f4cHtDRZv5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/>

{{< alert >}}
**Note :** ce post a été originellement publié en externe, veuillez aller sur [le blog de Docker](https://www.docker.com/blog/docker-init-initialize-dockerfiles-and-compose-files-with-a-single-cli-command/) pour lire le post complet
{{< /alert >}}
