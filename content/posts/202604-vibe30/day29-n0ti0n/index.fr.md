---
title: "30 Days of Vibe Coding - Jour 29 - n0ti0n"
description: "Un éditeur de blocs inspiré de Notion avec des pages imbriquées, des commandes slash et une synchronisation en temps réel via Firebase Firestore"
summary: "Un éditeur de blocs inspiré de Notion avec des pages imbriquées, des commandes slash et une synchronisation en temps réel via Firebase Firestore"
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-29"]
series: ["30 Days of Vibe Coding"]
series_order: 29
seriesOpened: false
date: 2026-05-04
draft: false
#type: "hidden"
---

Jour 29. Plus qu'un jour après celui-ci. Alors j'ai cloné Notion.

Pas tout. Mais l'expérience principale : un éditeur de blocs avec des pages imbriquées, des commandes slash et une barre latérale propre pour la navigation. Le résultat, c'est n0ti0n. Le frontend s'est assemblé rapidement. Le déploiement, c'était une autre histoire.

## Le Prompt

> "Construis un éditeur de blocs inspiré de Notion avec des pages imbriquées, des commandes slash, du formatage de texte riche, des blocs de code avec coloration syntaxique, des tableaux, des listes de tâches et une barre latérale pour la navigation. Utilise Tiptap pour l'éditeur, Firebase Firestore pour la persistance en temps réel, l'authentification anonyme pour que tout le monde puisse l'essayer, et un mode sombre."

{{< alert icon="fire">}}
Essayez-le vous-même [ici](https://blocknotes-lime.vercel.app)
{{< /alert >}}

## Ce que j'ai obtenu

L'éditeur utilise Tiptap 3, qui est un framework d'éditeur de blocs fantastique, et il m'a donné la plupart de ce que je voulais directement avec les bonnes extensions. On a des commandes slash qui apparaissent quand on tape `/`, permettant d'insérer des titres, des listes, des blocs de code, des tableaux, des listes de tâches, des séparateurs, et même des pages imbriquées. Sélectionnez n'importe quel texte et un menu bulle apparaît avec des options de formatage en ligne comme gras, italique, barré, surligné et liens.

![Page d'accueil avec navigation dans la barre latérale et aperçu des fonctionnalités](images/screenshot-02.png)

La barre latérale, c'est là que les pages imbriquées brillent vraiment. On peut créer des pages dans des pages, et l'arborescence s'affiche dans le panneau de gauche avec des sections repliables. Il y a une palette de recherche/commandes (Cmd+K) qui permet de naviguer rapidement entre les pages, de basculer en mode clair ou de créer de nouvelles pages à la volée.

![Navigation dans la barre latérale avec arborescence repliable](images/screenshot-05.png)

Il y a aussi des modèles intégrés. Quand on crée une nouvelle page, on peut choisir parmi des modèles pré-construits comme des itinéraires de voyage, des notes de réunion ou des plans de projet. Chaque modèle est pré-rempli avec une structure utile.

![Sélecteur de modèles pour les nouvelles pages](images/screenshot-06.png)

Le menu des commandes slash en lui-même est propre et fonctionnel. Tapez `/` n'importe où dans l'éditeur et vous obtenez un menu déroulant avec tous les types de blocs : titres, texte, listes à puces, listes numérotées, listes de tâches, blocs de code, tableaux, citations, séparateurs, images et pages imbriquées.

![Menu des commandes slash avec options de types de blocs](images/screenshot-10.png)

Les pages peuvent être partagées sur le web avec un bouton, et il y a des options d'export en Markdown et JSON. Le tout est responsive aussi, et fonctionne bien sur mobile.

![Fonctionnalité de partage sur le web](images/screenshot-14.png)

![Options d'export incluant Markdown et JSON](images/screenshot-16.png)

![Vue mobile de l'éditeur](images/screenshot-17.png)

Tout se synchronise en temps réel via Firebase Firestore avec authentification anonyme, donc n'importe qui peut ouvrir l'app et commencer à écrire sans créer de compte.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## La Saga Firestore

Voilà le truc de ce projet qui vaut vraiment la peine d'être raconté en détail. L'éditeur en lui-même s'est assemblé assez facilement. Tiptap est bien documenté, les extensions sont modulaires, et Claude a géré l'intégration sans trop d'accompagnement. Le vrai défi, c'était de faire fonctionner Firestore correctement en production.

Le git log de ce projet est dingue. Il y a des dizaines de commits juste pour débugger des problèmes de déploiement Firestore. Configuration du long polling, paramètres de cache, fallbacks vers l'API REST, nettoyage des variables d'environnement, gestion des timeouts de connexion... c'était un défilé de petits problèmes douloureux qui n'apparaissaient qu'après le déploiement sur Vercel.

En local, tout fonctionnait parfaitement. Mais en production, les connexions Firestore restaient bloquées, les données ne chargeaient pas, ou l'app échouait silencieusement à synchroniser. Chaque fix menait à la découverte du problème suivant. Nettoyer les espaces blancs des variables d'environnement a résolu un problème. Passer de WebSocket au long polling en a résolu un autre. Ajuster la configuration du cache en a résolu un troisième. C'était un classique "ça marche sur ma machine" étalé sur probablement 15-20 commits.

C'est honnêtement l'une des parties les plus réalistes de tout le challenge. Construire l'UI, c'est la partie fun. Faire en sorte que ça marche vraiment en production avec un vrai backend, c'est là que le temps passe. Et avec le coding assisté par IA, la boucle de débogage est intéressante parce que Claude peut suggérer des fixes rapidement, mais il faut quand même déployer, tester et itérer. Le cycle de feedback est plus lent que le développement local, peu importe la rapidité de l'IA.

[Watchfire](https://watchfire.io) a détecté les problèmes de déploiement presque immédiatement, ce qui m'a au moins évité de les découvrir des jours plus tard via des rapports d'utilisateurs.

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day29-n0ti0n" showThumbnail=true >}}

**[Démo en direct](https://blocknotes-lime.vercel.app)**

![Éditeur avec notes, listes, éléments de tâches et blocs de code](images/screenshot-01.png)

![Barre d'outils de formatage à la sélection de texte](images/screenshot-03.png)

![Palette de commandes pour navigation rapide](images/screenshot-13.png)

![Modèle d'itinéraire de voyage en mode clair](images/screenshot-15.png)

## Verdict du Jour 29

Un éditeur de blocs avec une vraie persistance, des pages imbriquées et une interface propre, c'est quelque chose dont les gens ont vraiment besoin. Tiptap 3 a fait le gros du travail côté éditeur, et Firebase a géré le backend, mais tout câbler ensemble et surtout faire en sorte que le déploiement se comporte bien a demandé un vrai effort. La saga du débogage Firestore est un bon rappel que la partie difficile du shipping logiciel, c'est rarement le code des fonctionnalités. C'est l'infrastructure, les cas limites et les trucs qui ne cassent qu'en production. Plus qu'un jour.

---

*Ceci est le jour 29 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
