---
title: "Découvrez Gordon : l'agent IA de Docker pour l'ensemble de votre workflow de conteneurs"
summary: "Gordon est désormais disponible en version générale — l'agent IA de Docker, intégré à Docker Desktop et à la CLI, qui lit votre environnement, retrace les pannes et agit sur l'ensemble de votre workflow avec votre approbation explicite."
categories: ["Externe"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/"
date: 2026-05-19
draft: false
---

Les workflows de conteneurs sont pleins de petites frictions qui s'accumulent : des caches de build invalidés au pire moment, des services qui ne se trouvent pas, des images qui marchent en local mais plantent en CI, et des messages d'erreur qui pointent vers des ressources qui n'existent plus. Les assistants de code généralistes excellent avec la logique applicative, mais ils ne voient pas vos conteneurs en cours d'exécution, vos logs, vos fichiers compose, ni l'état de votre machine. Ils ne connaissent que ce que vous collez.

Gordon a été conçu précisément pour combler cet écart. Aujourd'hui, Gordon est disponible en version générale — l'agent IA de Docker, taillé sur mesure pour les workflows de conteneurs, intégré à Docker Desktop et à la CLI.

## Ce que fait Gordon

Gordon lit votre environnement avant que vous ne posiez la question. Il consulte les logs, les images, les fichiers compose et les conteneurs en cours d'exécution, retrace les pannes jusqu'à leur cause réelle, propose un correctif et — avec votre approbation — agit via la Docker CLI et votre système de fichiers.

Quelques tâches que Gordon fait passer d'heures à minutes :

- **Déboguer des conteneurs cassés** — « Mon conteneur s'arrête sans cesse » → Gordon lit les logs, identifie la variable d'environnement manquante, la mauvaise image de base ou le volume mal configuré, et propose un correctif.
- **Conteneuriser de nouvelles apps** — « Conteneurise cette app et monte un environnement de dev avec Postgres » → Gordon écrit le Dockerfile, la stack compose et la lance.
- **Optimiser les Dockerfiles** — Builds multi-étapes, réorganisation des couches pour de meilleurs hits de cache, images de base plus légères, health checks.
- **Opérations courantes** — « Nettoie les images inutilisées » → Gordon vous montre les commandes à approuver, sans recherche de flags.
- **Requêtes de contexte** — Posez des questions sur les conteneurs en cours, l'utilisation du disque ou les images sans avoir à mémoriser les flags Docker.
- **Apprentissage en contexte** — Obtenez des explications sur les concepts Docker à partir de votre configuration réelle, pas d'un vieil article de blog.

## Où vit Gordon

Gordon est intégré à deux endroits :

- **Docker Desktop** — un onglet dédié avec contexte complet de l'environnement, plus une apparition contextuelle quand les problèmes surgissent.
- **CLI** — lancez `docker ai` depuis votre terminal.

Disponible dans Docker Desktop 4.74 et au-delà.

## Approbation d'abord, by design

Chaque action que Gordon entreprend — chaque commande shell, chaque modification de fichier, chaque opération Docker — vous est présentée pour approbation avant exécution. Les permissions ont la portée d'une session et sont réinitialisées à sa fermeture. Vous pouvez optionnellement activer l'auto-approbation pour les workflows de confiance. Aucun code ni donnée personnelle n'est stocké, et les fournisseurs d'IA ne conservent pas vos données. L'infrastructure sous-jacente est attestée SOC 2 Type 2 et certifiée ISO 27001.

## Gordon dans la stack

Gordon ne remplace pas les assistants de code comme Cursor, Copilot ou Claude Code — il les complète. Ces outils gèrent la logique applicative et la génération de nouveau code. Gordon gère les workflows de conteneurs, l'infrastructure, le débogage et le déploiement. Ensemble, ils couvrent tout le chemin du code à la production, sans changement de contexte.

## Tarification

Gordon est gratuit avec tout compte Docker, avec des limites d'utilisation qui se réinitialisent toutes les quelques heures. Pour un usage plus intensif, Gordon Plus ajoute 2x de capacité pour 20 $/mois, avec des plans allant jusqu'à 20x.

## Démarrer

1. Mettez à jour Docker Desktop vers 4.74 ou plus
2. Cliquez sur l'icône Gordon dans la barre latérale, ou lancez `docker ai` dans votre terminal
3. Pointez-le sur un projet et posez-lui une question — « optimise mon Dockerfile » est un bon premier prompt

Poursuivez la lecture de l'article original sur le [Docker Blog](https://www.docker.com/blog/meet-gordon-dockers-ai-agent-for-your-entire-container-workflow/).
