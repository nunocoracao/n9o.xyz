---
title: "30 Days of Vibe Coding - Jour 20 - MoodBoard"
description: "Un tableau d'inspiration collaboratif où n'importe qui peut épingler des images, des liens et des notes sur un canevas partagé avec des mises à jour en temps réel."
summary: "Un tableau d'inspiration collaboratif où n'importe qui peut épingler des images, des liens et des notes sur un canevas partagé avec des mises à jour en temps réel."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-20", "firebase", "collaboration", "real-time"]
series: ["30 Days of Vibe Coding"]
series_order: 20
seriesOpened: false
date: 2026-04-25
draft: false
#type: "hidden"
---

Jour 20. Je voulais un canevas partagé où un groupe de personnes peut balancer des images, des liens et des notes sur un mur et juste voir ce qui accroche. Littéralement.

## Le Prompt

> "Construis une appli de tableau d'inspiration collaboratif. N'importe qui avec le lien peut épingler des images, des notes textuelles et des liens sur un canevas partagé. Synchronisation en temps réel, authentification anonyme, disposition libre."

C'était la base. [Watchfire](https://watchfire.io) l'a découpé en 7 tâches qui l'ont fait passer d'un squelette Firebase basique à un vrai tableau d'épingles collaboratif.

{{< alert icon="fire">}}
Essayez-le vous-même [ici](https://vibe30-day20-moodboard.vercel.app)
{{< /alert >}}

## Comment ça a été construit

Sept tâches, chacune ajoutant une nouvelle couche :

1. La synchronisation temps réel Firebase comme fondation
2. Trois types d'épingles : post-its textuels, uploads d'images et cartes de liens avec aperçus OG
3. Glisser-déposer pour arranger les épingles sur un canevas libre
4. Tags de couleur sur les épingles pour regrouper visuellement
5. Zoom et panoramique plus redimensionnement des épingles pour contrôler le canevas
6. Verrouillage du tableau pour que le créateur puisse figer un tableau en lecture seule, et export en PNG
7. Présence des curseurs pour voir où les autres survolent, plus une passe de refonte visuelle

La progression avait du sens. On ne peut pas déplacer des épingles tant qu'elles n'existent pas, et on ne peut pas se soucier du polish visuel tant que les interactions de base ne marchent pas.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

Celui-là a cliqué tout de suite.

![Page d'accueil MoodBoard](images/screenshot-02.png)

**La page d'accueil donne le ton.** Grand logo, des épingles d'exemple éparpillées en arrière-plan, un seul bouton pour créer un tableau. Pas d'inscription, pas de compte, zéro friction. Tu cliques sur "Create New Board" et t'es dedans.

![Tableau vide prêt pour les épingles](images/screenshot-03.png)

**Un tableau fraîchement créé est un canevas vierge.** Fond sombre avec une grille de points subtile. La barre d'outils est minimale, juste des options pour verrouiller, exporter et copier l'URL de partage en haut à droite. Le bouton d'action flottant en bas à droite ouvre le sélecteur de type d'épingle.

![Sélecteur de type d'épingle](images/screenshot-04.png)

**Trois types d'épingles couvrent l'essentiel.** Texte pour les post-its, image pour les uploads et lien pour les cartes URL. Appuie sur le bouton plus, choisis ton type et dépose-le sur le canevas. Assez simple pour que n'importe qui avec le lien puisse comprendre sans instructions.

![Post-it textuel sur le canevas](images/screenshot-05.png)

**Les post-its ressemblent à de vrais post-its.** Ils ont ce côté légèrement incliné, comme du papier. Tu peux taper ce que tu veux, choisir une couleur et les glisser où tu veux. Le pêche sur fond sombre rend étonnamment bien.

![Dialogue d'upload d'image](images/screenshot-06.png)

**L'upload d'image est simple.** Une modale apparaît, tu choisis un fichier et ça s'uploade sur Firebase Storage. L'image apparaît comme une épingle sur le canevas que tu peux glisser et redimensionner comme tout le reste.

![Tableau avec du contenu mixte](images/screenshot-07.png)

**Mélange tout ensemble et ça commence à ressembler à un vrai tableau d'inspiration.** Images, post-its, tailles différentes. Tu peux déplacer les choses pour trouver des arrangements qui marchent. Le canevas libre signifie que rien n'est verrouillé sur une grille, donc tu obtiens ce côté collage organique.

![Tableau complet avec cartes de liens](images/screenshot-08.png)

**Les cartes de liens récupèrent les métadonnées OG.** Colle une URL et ça va chercher le titre, la description et l'image de prévisualisation. La carte Watchfire, la carte Blowfish, la carte OpenClaw se sont toutes bien rendues avec leur branding intact. Ça rend bien mieux qu'un simple URL brut collé.

## Les Rapports de Bugs

La collaboration en temps réel a toujours des cas limites :

- La présence des curseurs scintillait parfois quand plusieurs utilisateurs bougeaient rapidement
- Les très gros uploads d'images pouvaient rendre le canevas lent jusqu'à ce que l'image finisse de charger
- L'export PNG ratait parfois des épingles qui étaient loin du centre de la vue

Rien qui ne cassait l'expérience, mais le genre de problèmes de polish qu'on voudrait régler avant de livrer ça pour un vrai usage.

## Les Chiffres

- **7 tâches Watchfire** du setup Firebase à la refonte visuelle
- **Stack Firebase :** Auth Anonyme, Firestore pour la synchro temps réel, Storage pour les uploads d'images
- **Next.js 15 + Tailwind CSS 4** côté frontend
- **html2canvas** pour la fonctionnalité d'export PNG
- **Trois types d'épingles :** texte, image, lien (avec aperçu OG)
- **Fonctionnalités collaboratives :** synchro temps réel, présence des curseurs, verrouillage du tableau

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day20-moodboard" showThumbnail=true >}}

**[Ouvrir MoodBoard](https://vibe30-day20-moodboard.vercel.app)**

Crée un tableau et partage le lien. N'importe qui peut y épingler.

## Verdict du Jour 20

Deux tiers du challenge terminés. Le jour 10 c'était un clone de Miro sans collaboration. Le jour 20 c'est un tableau d'inspiration avec synchronisation temps réel complète. Ça ressemble à du progrès.

L'intégration Firebase est ce qui fait que celui-ci marche. L'auth anonyme signifie zéro friction pour rejoindre un tableau. Les listeners temps réel Firestore font que les épingles apparaissent instantanément pour tout le monde. La présence des curseurs signifie que tu peux voir que quelqu'un d'autre est vraiment là avec toi. Ce sont les fonctionnalités qui transforment un canevas solo en espace partagé.

Ce qui m'a le plus surpris, c'est les cartes de liens. Coller une URL et obtenir une carte joliment formatée avec le branding du site, la description et l'image de prévisualisation a rendu les tableaux immédiatement plus riches. Cette seule fonctionnalité l'a fait passer de "un endroit pour mettre des post-its" à quelque chose qu'on utiliserait vraiment pour collecter et partager des références pour un projet.

Sept tâches, c'était un scope serré pour une appli collaborative en temps réel. Mais chaque tâche s'est construite proprement sur la précédente, et le produit final semble cohérent. Pas mal pour le jour 20.

---

*C'est le jour 20 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure alors que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
