---
title: "30 Jours de Vibe Coding - Jour 26 - PixelForge"
description: "Un canevas de pixel art collaboratif avec dessin en temps réel, plusieurs tailles de grille et une panoplie complète d'outils créatifs."
summary: "Un canevas de pixel art collaboratif avec dessin en temps réel, plusieurs tailles de grille et une panoplie complète d'outils créatifs."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-26", "pixel-art", "firebase", "collaboration"]
series: ["30 Days of Vibe Coding"]
series_order: 26
seriesOpened: false
date: 2026-05-01
draft: false
#type: "hidden"
---

Jour 26. Je voulais construire quelque chose de collaboratif, quelque chose où les gens pourraient vraiment créer ensemble en temps réel. Alors j'ai opté pour un canevas de pixel art.

## Le Prompt

Le point de départ était simple :

> "Construis un canevas de pixel art collaboratif où plusieurs utilisateurs peuvent dessiner ensemble en temps réel."

{{< alert icon="fire">}}
Essayez-le vous-même [ici](https://vibe30-day26-pixelforge.vercel.app)
{{< /alert >}}

## Comment ça a été construit

[Watchfire](https://watchfire.io) a découpé ça en 13 tâches, ce qui fait beaucoup pour un projet d'une seule journée. Mais les éditeurs de pixel art ont un nombre surprenant de pièces mobiles une fois qu'on commence à réfléchir à tous les outils que les gens attendent.

Les premières tâches couvraient les fondations : mettre en place le canevas avec Firebase Realtime Database pour la synchronisation, ajouter des tailles de grille sélectionnables (16x16, 32x32, 64x64), et construire une palette de 32 couleurs avec un sélecteur de couleurs personnalisé. Ensuite, ça s'est orienté vers les outils de dessin proprement dits : crayon, gomme et remplissage.

Et puis ça n'a pas arrêté. Support annuler/rétablir. Un mode symétrie pour créer des designs en miroir. Des outils de formes pour les rectangles et les lignes. Des tailles de pinceau ajustables. Des modèles de canevas pour ne pas avoir à partir de zéro à chaque fois. Une fonctionnalité de timelapse qui rejoue comment un canevas a été dessiné. Un fil d'activité montrant ce que font les autres utilisateurs. Un outil de sélection pour déplacer et copier des régions. Un système à 2 calques avec premier plan et arrière-plan. Et enfin, des options d'export pour récupérer votre art en PNG dans différentes tailles.

Treize tâches. C'est une application de dessin complète.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Page d'accueil de PixelForge avec modèles et canevas récents](images/screenshot-01.png)

La page d'accueil donnait déjà le ton. Elle affiche des modèles de départ (cœur, épée, smiley, arbre) et une galerie de canevas récents créés par d'autres utilisateurs. Vous pouvez sauter dans n'importe lequel ou en créer un nouveau de zéro.

![Éditeur de canevas avec barre d'outils et panneau de calques](images/screenshot-02.png)

En haut, vous avez la barre d'outils complète : crayon, gomme, remplissage, ligne, rectangle, cercle et outils de sélection. À gauche, il y a la palette de couleurs étendue avec le sélecteur personnalisé. À droite, le panneau de calques avec les calques premier plan et arrière-plan, chacun avec des boutons de visibilité.

![Pixel art en cours de dessin sur le canevas](images/screenshot-03.png)

Le dessin est réactif. Chaque clic de pixel se synchronise via Firebase, donc quiconque se trouve sur la même URL de canevas voit les changements immédiatement. Les lignes de la grille aident à rester précis, et le niveau de zoom s'adapte bien aux différentes tailles de grille.

![Lecture du timelapse](images/screenshot-04.png)

La fonctionnalité timelapse est un de ces trucs que je ne m'attendais pas à voir fonctionner aussi bien. Elle enregistre chaque placement de pixel et peut rejouer tout le processus de dessin du début à la fin. Vous avez des contrôles de lecture et des options de vitesse.

![Timelapse en action avec un canevas coloré](images/screenshot-05.png)

Regarder une pièce complexe se construire pixel par pixel est étrangement satisfaisant. C'est aussi un bon moyen de voir comment d'autres personnes abordent leurs dessins.

![Dialogue d'export avec options de format et de taille](images/screenshot-06.png)

Le dialogue d'export vous donne de vraies options. Vous pouvez définir un fond transparent, choisir parmi plusieurs tailles de sortie (1x, 2x, 4x, 8x), et exporter en PNG, SVG, ou copier directement dans le presse-papiers. Pour un outil de pixel art, avoir l'agrandissement intégré est important puisque personne ne veut un PNG 16x16 à sa taille réelle.

![Modèle de cœur dessiné avec des ombres](images/screenshot-07.png)

Les modèles sont un plus appréciable. Ce modèle de cœur est pré-chargé pour que vous puissiez commencer à ajouter des détails et des ombres tout de suite au lieu de dessiner le contour à partir de zéro. Le système à 2 calques signifie que vous pouvez garder le modèle sur le calque d'arrière-plan et peindre sur le premier plan sans craindre de gâcher la forme de base.

![Galerie des canevas récents](images/screenshot-09.png)

La section des canevas récents sur la page d'accueil fait office de galerie communautaire. Vous pouvez voir ce que les autres ont fait, et chaque canevas affiche sa taille de grille. Cœurs, visages, épées, arbres... les gens gravitent naturellement vers les mêmes types de sujets en pixel art.

## Les Rapports de Bugs

Les principaux problèmes que j'ai rencontrés pendant les tests :

- Le remplissage sur les grilles plus grandes (64x64) pouvait être lent quand chaque pixel modifié était synchronisé individuellement. Il fallait des mises à jour par lots.
- Le mode symétrie ne s'alignait pas toujours correctement sur les grilles de taille paire au début.
- Le dessin tactile sur mobile nécessitait du travail pour empêcher la page de défiler pendant qu'on essayait de dessiner.
- Le changement de calque n'était pas toujours évident visuellement, ce qui rendait facile de dessiner sur le mauvais calque sans s'en rendre compte.

## Les Chiffres

- **13 tâches Watchfire** du canevas initial aux options d'export
- **3 tailles de grille** avec synchronisation en temps réel sur toutes
- **Palette de 32 couleurs** plus sélecteur de couleurs personnalisé
- **8 outils de dessin** incluant formes et sélection
- **Système à 2 calques** avec visibilité indépendante
- **Firebase Realtime Database** gérant toute la collaboration

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day26-pixelforge" showThumbnail=true >}}

**[Essayez PixelForge](https://vibe30-day26-pixelforge.vercel.app)**

Créez un canevas et partagez le lien. Quiconque a l'URL peut dessiner avec vous.

## Verdict du Jour 26

Un canevas de pixel art ça a l'air simple, mais une fois qu'on ajoute des calques, la symétrie, des modèles, le timelapse et la collaboration en temps réel, on se retrouve face à un véritable outil créatif.

L'intégration Firebase est le cœur de toute l'application. Chaque changement de pixel passe par la Realtime Database, ce qui signifie que plusieurs personnes peuvent véritablement dessiner sur le même canevas en même temps. Pas de polling, pas de bouton rafraîchir, juste des mises à jour en direct. Les 13 tâches se sont assemblées en quelque chose de cohérent à partir d'un seul prompt.

Est-ce que ça va remplacer Aseprite ou Piskel ? Non. Mais pour des sessions rapides de pixel art collaboratif, ça fait le travail. Et rien que la lecture du timelapse vaut le détour. Il y a quelque chose de vraiment fun à regarder une grille vide se transformer en art, un pixel à la fois.

---

*C'est le jour 26 de [30 Jours de Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
