---
title: "Gordon : l'agent IA de Docker vient de recevoir une mise à jour"
summary: "Découvrez Gordon, l'agent IA de Docker intégré à Docker Desktop. Il comprend vos conteneurs, vos images et votre environnement — et vous aide à déboguer, générer des Dockerfiles et appliquer des correctifs avec votre approbation."
categories: ["Externe"]
tags: ["docker","blog","ai"]
externalUrl: "https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/"
date: 2026-02-23
draft: false
---

Les agents IA passent des démonstrations aux flux de travail quotidiens. Ils écrivent du code, exécutent des commandes et accomplissent des tâches en plusieurs étapes sans assistance permanente. Mais les agents généralistes ne connaissent pas Docker. Ils ne comprennent ni vos conteneurs, ni vos images, ni votre configuration spécifique.

Gordon, si. Lancez simplement `docker ai` dans votre terminal ou essayez-le dans Docker Desktop.

Disponible dès aujourd'hui dans Docker Desktop 4.61, encore en bêta, Gordon est un agent IA conçu spécifiquement pour Docker. Il dispose d'un accès au shell, au Docker CLI, à votre système de fichiers et d'une connaissance approfondie des bonnes pratiques Docker. Dirigez-le vers un problème, approuvez ses actions et regardez-le travailler.

## Pourquoi Docker a besoin de son propre agent

Quand votre conteneur se termine avec le code 137, Claude ou ChatGPT vous expliqueront ce que signifie OOM. Gordon vérifie la limite mémoire de votre conteneur, inspecte les logs, identifie le processus gourmand en mémoire et propose un correctif. Une seule approbation, et c'est réglé.

Quand vous devez conteneuriser une application Next.js, Copilot peut suggérer un Dockerfile. Gordon examine la structure de votre projet, détecte vos dépendances, génère un Dockerfile prêt pour la production avec des builds multi-étapes, crée un docker-compose.yml avec les bons services et configure votre environnement.

La différence réside dans le contexte et l'exécution. Gordon sait ce qui tourne sur votre machine. Il peut lire l'état de Docker, accéder à votre système de fichiers et agir. Il ne devine pas — il travaille avec votre environnement réel.

## Ce que fait Gordon

**Déboguer et corriger** – Un conteneur ne démarre pas. Un service est en mauvaise santé. Quelque chose consomme toute la mémoire. Gordon inspecte les logs, vérifie l'état du conteneur, identifie la cause racine et propose des correctifs. Vous approuvez, il exécute.

**Construire et conteneuriser** – Prenez cette application et faites-la tourner dans Docker. Gordon examine votre projet, génère des Dockerfiles prêts pour la production avec des builds multi-étapes, crée un docker-compose.yml avec les bons services, gère les configurations d'environnement et les dépendances.

**Exécuter et gérer** – Libérer de l'espace disque. Arrêter tous les conteneurs. Télécharger et lancer des images spécifiques. Les opérations Docker courantes devraient être conversationnelles, pas nécessiter un détour par la documentation.

**Développer et optimiser** – Ajouter des health checks. Implémenter des builds multi-étapes. Appliquer les bonnes pratiques de sécurité. Réduire la taille des images. Rendre les configurations Docker existantes prêtes pour la production.

Gordon gère tout cela.

## Comment fonctionne Gordon

Gordon est construit sur **cagent**, le framework d'agents de Docker inclus avec Docker Desktop, et s'exécute localement au sein de Docker Desktop. Il a accès à :

- **Votre shell** – Peut exécuter des commandes après approbation
- **Votre système de fichiers** – Lit la structure du projet, les configurations, les logs
- **Docker CLI** – Accès complet aux opérations Docker
- **Base de connaissances Docker** – Documentation, bonnes pratiques, patterns courants

Vous pouvez configurer le répertoire de travail de Gordon pour pointer vers un code source spécifique. Cela donne à Gordon un contexte complet sur la structure de votre projet, les dépendances et la configuration Docker existante.

Le modèle de permissions est simple : Gordon vous montre ce qu'il veut faire, vous approuvez ou refusez, puis il exécute. Chaque commande. Chaque mise à jour de fichier. Chaque opération Docker. Vous n'êtes pas un spectateur passif — vous dirigez un agent qui connaît Docker sur le bout des doigts.

## Où trouver Gordon

**Docker Desktop :** Cherchez l'icône Gordon dans la barre latérale gauche

**CLI :** Lancez `docker ai` depuis votre terminal

Gordon est inclus dans tous les abonnements Docker :

- **Personal :** Inclus
- **Pro :** 3x la capacité d'utilisation
- **Team :** 3x la capacité d'utilisation
- **Business :** 6x la capacité d'utilisation

**Note pour les utilisateurs Business :** Si vous ne voyez pas Gordon, votre administrateur doit demander l'activation pour votre organisation. Contactez votre équipe de compte Docker ou le support.

## Commencez dès aujourd'hui

1. Téléchargez Docker Desktop 4.61+
2. Connectez-vous avec votre compte Docker
3. Cliquez sur l'icône Gordon, sélectionnez un répertoire de projet et demandez « Optimise mon Dockerfile »
4. Explorez la documentation complète dans Docker Docs

Gordon est disponible dès maintenant dans Docker Desktop 4.61 et versions ultérieures.

Poursuivez la lecture de l'article original sur le [Blog Docker](https://www.docker.com/blog/gordon-dockers-ai-agent-just-got-an-update/).
