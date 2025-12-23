---
title: "Simplifiez la Dockerisation avec Docker Init GA"
summary: "Initialisez les Dockerfiles et les fichiers Compose avec une seule commande CLI"
categories: ["Externe"]
tags: ["docker","blog","release"]
externalUrl: "https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/"
date: 2024-02-06
draft: false
# series: ["The Complete PM"]
# series\_order: 1
---


En mai 2023, Docker a annoncé la version bêta de docker init, un nouvel outil d'interface en ligne de commande (CLI) dans Docker Desktop conçu pour simplifier le processus de configuration Docker pour différents types d'applications et aider les utilisateurs à containeriser leurs projets existants. Nous sommes maintenant ravis d'annoncer la disponibilité générale de docker init, avec prise en charge de plusieurs langages et stacks, rendant plus simple que jamais la containerisation de vos applications.


<img src="/posts/202402-docker-init-ga/feature.webp"/>


## Qu'est-ce que docker init ?
Initialement publié dans sa forme bêta dans Docker 4.18, docker init a subi plusieurs améliorations. docker init est un utilitaire en ligne de commande qui aide à l'initialisation des ressources Docker au sein d'un projet. Il génère automatiquement des Dockerfiles, des fichiers Compose et des fichiers .dockerignore en fonction de la nature du projet, réduisant considérablement le temps de configuration et la complexité associés aux configurations Docker.

La version bêta initiale de init ne prenait en charge que Go et les projets génériques. La dernière version, disponible dans Docker Desktop 4.27, prend en charge Go, Python, Node.js, Rust, ASP.NET, PHP et Java.

## Comment utiliser docker init
L'utilisation de docker init est simple et implique quelques étapes simples. Commencez par naviguer vers le répertoire de votre projet où vous souhaitez que les ressources Docker soient initialisées. Dans le terminal, exécutez la commande docker init. Cette commande lance l'outil et le prépare à analyser votre projet (Figure 1).


<img src="/posts/202402-docker-init-ga/img/img1.webp"/>


docker init analysera votre projet et vous demandera de confirmer et de choisir le modèle qui convient le mieux à votre application. Une fois que vous avez sélectionné le modèle, docker init demande des informations spécifiques au projet, générant automatiquement les ressources Docker nécessaires pour votre projet (Figure 2).

<img src="/posts/202402-docker-init-ga/img/img2.webp"/>

Cette étape comprend la création d'un Dockerfile et d'un fichier Compose adaptés au langage et au framework de votre choix, ainsi que d'autres fichiers pertinents. La dernière étape consiste à exécuter docker-compose up pour démarrer votre projet nouvellement containerisé.

## Pourquoi utiliser docker init ?
L'outil docker init simplifie le processus de dockerisation, le rendant accessible même à ceux qui découvrent Docker. Il élimine le besoin d'écrire manuellement des Dockerfiles et d'autres fichiers de configuration à partir de zéro, économisant du temps et réduisant le potentiel d'erreurs. Avec son approche basée sur des modèles, docker init garantit que la configuration Docker est optimisée pour le type spécifique d'application sur lequel vous travaillez et que votre projet suivra les meilleures pratiques de l'industrie.

## Conclusion
La disponibilité générale de docker init offre un moyen efficace et convivial d'intégrer Docker dans vos projets. Que vous soyez un utilisateur Docker chevronné ou nouveau dans la containerisation, docker init est prêt à améliorer votre flux de travail de développement.

{{< alert >}}
**Note :** cet article a été initialement publié en externe, veuillez consulter le [blog de Docker](https://www.docker.com/blog/streamline-dockerization-with-docker-init-ga/) pour lire l'article complet
{{< /alert >}}
