---
title: "30 Days of Vibe Coding - Jour 14 - WeatherTUI"
description: "Un tableau de bord météo en terminal avec des scènes météo en art ASCII, des effets animés et le support multi-localisation."
summary: "Un tableau de bord météo en terminal avec des scènes météo en art ASCII, des effets animés et le support multi-localisation."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-14", "python", "tui", "weather", "textual"]
series: ["30 Days of Vibe Coding"]
series_order: 14
seriesOpened: false
date: 2026-04-19
draft: false
#type: "hidden"
---

Jour 14. Je voulais voir à quoi ressemble une appli météo quand on enlève tous les frameworks UI modernes et qu'on force tout dans un terminal.

## Le Prompt

> "Construis un tableau de bord météo en terminal avec des scènes météo en art ASCII, des effets météo animés et le support multi-localisation"

## Comment ça a été construit

J'ai utilisé [Watchfire](https://watchfire.io) et il a découpé le travail en 23 tâches. Ça semble beaucoup pour une appli météo, mais le périmètre a vite grandi une fois que l'art ASCII et les animations sont entrés en jeu.

La liste de tâches couvrait d'abord les trucs attendus : setup du projet, intégration API avec Open-Meteo, mise en page de base. Puis c'est devenu plus fun : 12 scènes météo uniques en art ASCII (soleil, lune, pluie, neige, orage, brouillard, vent, nuages), des effets animés à base de particules pour chaque condition météo, des graphiques de température et précipitations, des vues de prévisions horaires et quotidiennes, un tableau de bord multi-localisation, des thèmes de couleurs, le support de la souris et une mise en page scrollable.

23 tâches. Je ne suis pas resté là à guider chacune d'entre elles. Watchfire les a mises en file d'attente et les a traitées pendant que je faisais autre chose.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

Celui-ci m'a plus surpris que la plupart.

![Vue détaillée avec infos météo](images/screenshot-10.png)

**L'art ASCII est vraiment impressionnant.** Chaque condition météo a sa propre scène. Il y a un grand ciel couvert avec des couches de nuages, de la pluie avec des gouttes qui tombent, de la neige avec des flocons qui dérivent, un soleil avec des rayons qui irradient. L'art est détaillé et remplit le terminal avec un vrai caractère. Pas le genre paresseux "il pleut : //" d'art ASCII. De vraies scènes multi-lignes avec des ombrages et de la profondeur.

**Les animations sont fluides.** Les gouttes de pluie tombent. Les flocons de neige dérivent. Les étoiles scintillent dans le ciel nocturne. Les particules de vent soufflent à travers l'écran. Les éclairs flashent pendant les orages. Tout ça dans un terminal. On peut mettre en pause et reprendre les animations avec une seule touche.

![Tableau de bord avec plusieurs localisations](images/screenshot-02.png)

**Le tableau de bord est propre.** Plusieurs localisations affichées en grille, chacune avec une petite icône météo en ASCII, la température actuelle et les conditions en un coup d'œil. Cliquez sur n'importe quelle carte ou appuyez sur une touche numérique pour accéder à la vue détaillée de cette localisation.

![Vue détaillée pour New York](images/screenshot-08.png)

**La vue détaillée a tout ce qu'il faut.** Indice de qualité de l'air, heures de lever/coucher du soleil, indice UV avec code couleur, barre d'humidité, vitesse et direction du vent, couverture nuageuse, détail des précipitations (pluie vs neige). Plus une prévision sur 7 jours en bas avec un mini art ASCII pour chaque jour. On peut aussi basculer vers une vue horaire sur 12 heures.

![Recherche de localisation](images/screenshot-03.png)

![Résultats de recherche pour Lisbonne](images/screenshot-04.png)

**La gestion des localisations fonctionne bien.** Recherchez n'importe quelle ville dans le monde, ajoutez-la à votre tableau de bord, réorganisez les localisations, définissez un défaut. La recherche de géocodage renvoie des résultats rapidement et l'interface de sélection est propre.

![Tableau de bord avec quatre localisations](images/screenshot-05.png)

**Quatre thèmes de couleurs.** Défaut, océan (bleus et cyans), coucher de soleil (oranges chauds) et forêt (verts et tons terreux). Appuyez sur `t` pour les parcourir. Votre préférence est sauvegardée dans un fichier de configuration.

![Sélecteur de thème](images/screenshot-06.png)

![Thème océan appliqué](images/screenshot-07.png)

**Pas besoin de clé API.** Ça utilise l'API gratuite Open-Meteo, donc vous clonez, installez les dépendances et lancez. Pas d'inscription, pas de tokens, pas de configuration nécessaire.

## Les Chiffres

- **12 scènes météo uniques en art ASCII** avec des effets animés assortis
- **4 thèmes de couleurs** avec des préférences persistantes
- **23 tâches Watchfire** du setup au polish final
- **Construit avec Python et Textual** (le framework TUI par Textualize)
- **Temps total de manipulation :** peut-être 20 minutes à essayer différentes villes et parcourir les thèmes

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day14-weathertui" showThumbnail=true >}}

Clonez le repo et lancez `python -m weather_tui`. Pas besoin de clé API. Touches fléchées pour naviguer, touches numériques pour passer d'une localisation à l'autre, `t` pour changer de thème, `?` pour la liste complète des raccourcis clavier.

## Verdict du Jour 14

L'art ASCII seul m'aurait pris des jours à concevoir à la main. Les effets météo animés en plus ? Je n'aurais même pas essayé.

Ce qui me frappe, c'est l'attention aux détails. Les cartes de prévision sur 7 jours ont chacune leur propre petite icône météo en ASCII. L'humidité s'affiche sous forme de barre de progression. Le vent inclut à la fois la vitesse et la direction cardinale. L'indice UV change de couleur selon la sévérité. Rien de tout ça n'a été spécifié explicitement. L'IA a simplement compris qu'un tableau de bord météo a besoin de ces éléments et les a tous construits.

Les applis en terminal semblent être un sweet spot pour le coding assisté par IA. Les contraintes d'une interface textuelle aident à concentrer le résultat plutôt qu'à le limiter.

---

*C'est le jour 14 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours avec du coding assisté par IA.*
