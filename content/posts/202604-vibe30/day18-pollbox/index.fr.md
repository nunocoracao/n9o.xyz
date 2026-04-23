---
title: "30 Days of Vibe Coding - Jour 18 - PollBox"
description: "Une appli de vote en temps réel avec des résultats animés en direct, propulsée par Firebase et construite en une journée."
summary: "Une appli de vote en temps réel avec des résultats animés en direct, propulsée par Firebase et construite en une journée."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-18", "nextjs", "firebase", "react", "typescript"]
series: ["30 Days of Vibe Coding"]
series_order: 18
seriesOpened: false
date: 2026-04-23
draft: false
#type: "hidden"
---

Jour 18. Je voulais quelque chose de collaboratif. Un truc où tu peux partager un lien et voir immédiatement d'autres personnes interagir avec. Une appli de sondage en temps réel semblait être le bon choix.

## Le Prompt

> "Construis une appli de création et de vote de sondages en temps réel. Les utilisateurs doivent pouvoir créer des sondages avec plusieurs options, les partager via un lien, et voir les résultats se mettre à jour en direct avec des graphiques en barres animés."

{{< alert icon="fire">}}
Essaie par toi-même [ici](https://vibe30-day18-pollbox.vercel.app)
{{< /alert >}}

## Comment ça a été construit

[Watchfire](https://watchfire.io) a découpé le projet en 31 tâches. C'est beaucoup pour une appli de sondage, mais la liste de fonctionnalités grandit vite dès qu'on commence à réfléchir à tous les petits détails qui rendent une expérience de vote complète.

Le cœur est venu en premier : l'intégration de la base de données temps réel Firebase, le flow de création de sondage, les mécaniques de vote, et la vue des résultats animés. Ensuite, tout le reste s'est ajouté couche par couche. Des catégories et des modèles pour créer des sondages rapidement. Des améliorations d'accessibilité. Des squelettes de chargement pour que l'appli n'affiche pas du contenu vide. Une vraie page 404. Et bien sûr, la traditionnelle série de corrections de déploiement à la fin.

L'intégration Firebase était la colonne vertébrale de tout le projet. Firestore gère la persistance, les listeners temps réel poussent les mises à jour de votes à chaque client connecté, et l'authentification anonyme fait que personne n'a besoin de créer un compte juste pour voter.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

Le flow de création est étonnamment complet pour un projet d'une journée.

![Formulaire de création de sondage](images/screenshot-02.png)

Tu as un titre, une description, des tags de catégorie, plusieurs options, et même un sélecteur de thème de couleur. Il y a aussi le support d'images de couverture, des sondages programmés, la protection par mot de passe, et des dates d'expiration. En bas, des modèles pour les types de sondages courants comme "Oui ou Non", "Note de 1 à 5" et "Vote d'équipe" pour pouvoir sauter la configuration entièrement.

![Options de création avec thèmes et modèles](images/screenshot-03.png)

La page des résultats, c'est là que ça devient fun. Après avoir voté, les barres s'animent, l'option gagnante se met en surbrillance, et des confettis explosent à travers l'écran.

![Résultats en direct avec confettis](images/screenshot-05.png)

Chaque page de sondage a aussi des réactions emoji, une section commentaires, des liens de partage avec génération de QR code, et des options d'export en CSV et en images. Ça fait beaucoup de surface.

![Résultats du vote d'équipe](images/screenshot-06.png)

![Résultats du sondage de notation](images/screenshot-07.png)

Le tableau de bord "Mes Sondages" garde la trace de tout ce que tu as créé, avec recherche et filtres par catégorie. Chaque sondage affiche son statut, le nombre d'options, le nombre de votes, et a un bouton de duplication pour réutiliser rapidement.

![Tableau de bord Mes Sondages](images/screenshot-01.png)

## Les Bugs

La phase de déploiement a été le principal point de douleur. La config Firebase avait besoin d'ajustements pour la production, et il y avait les problèmes habituels spécifiques à Vercel à régler. Rien d'inhabituel pour un projet qui dépend de services externes. L'application d'un vote par utilisateur nécessitait des transactions Firestore pour fonctionner correctement, ce qui a demandé quelques itérations pour être au point.

## Essaie-le

{{< github repo="nunocoracao/Vibe30-day18-pollbox" showThumbnail=true >}}

**[Essaie PollBox](https://vibe30-day18-pollbox.vercel.app)**

Crée un sondage et partage le lien. Pas besoin de compte.

## Verdict du Jour 18

La liste de fonctionnalités ici est dense. Une appli de vote en temps réel avec Firebase, des résultats animés, le partage par QR, des réactions emoji, des commentaires, l'export CSV, l'export d'images, des modèles, des catégories, la protection par mot de passe, et un tableau de bord. C'est une liste de fonctionnalités de production compressée en une seule journée.

Le temps réel, c'est ce qui donne vie au projet. Tu partages un lien, quelqu'un vote, et les barres bougent sur ton écran. Pas besoin de rafraîchir. Les listeners temps réel de Firebase combinés aux animations Framer Motion rendent le tout réactif et soigné d'une manière que des résultats statiques ne pourraient jamais atteindre.

31 tâches Watchfire, et la profondeur se voit.

---

*C'est le jour 18 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suis le projet alors que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
