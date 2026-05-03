---
title: "30 Days of Vibe Coding - Jour 28 - ideA"
description: "Un éditeur de code natif pour bureau construit avec Wails, Go, React et Monaco Editor."
summary: "Un éditeur de code natif pour bureau construit avec Wails, Go, React et Monaco Editor."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-28", "go", "wails", "react", "monaco", "desktop"]
series: ["30 Days of Vibe Coding"]
series_order: 28
seriesOpened: false
date: 2026-05-03
draft: false
#type: "hidden"
---

Jour 28. Plus que trois jours. Hier c'était un émulateur de terminal. Aujourd'hui ? Un éditeur de code.

Pas une appli web. Pas un truc qui tourne dans un onglet de navigateur. Une application de bureau native que tu installes sur ta machine. Le genre de projet qui prend des années à des équipes entières.

## Le Prompt

{{< alert icon="fire">}}
Télécharge-le depuis la [dernière release](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest)
{{< /alert >}}

> "Construis un éditeur de code natif pour bureau en utilisant Wails v2 avec un backend Go et un frontend React avec Monaco Editor. Arborescence de fichiers en sidebar, onglets, coloration syntaxique. Builds multi-plateformes pour macOS, Linux et Windows."

## Comment ça a été construit

Celui-là c'était un monstre. [Watchfire](https://watchfire.io) a découpé le travail en 43 tâches, ce qui est de loin le plus grand nombre de tâches pour un projet de ce challenge. Et beaucoup d'entre elles étaient des corrections de CI, parce que construire des applis de bureau natives pour trois plateformes s'avère être... pas si simple que ça.

La stack c'est Wails v2 pour le wrapper natif, Go pour les opérations backend sur le système de fichiers, React pour l'interface, et Monaco Editor (le même moteur d'édition qui fait tourner VS Code) pour l'édition de code proprement dite. Le backend Go gère toutes les entrées/sorties fichiers, la lecture des répertoires, l'ouverture des fichiers, la sauvegarde des modifications, et expose tout ça comme des fonctions que le frontend React peut appeler via les bindings Wails.

Le pipeline CI c'est là que la vraie galère a commencé. Les dépendances WebKit sur Linux, les build tags qui devaient être pile poil, la génération des bindings Wails, le packaging multi-plateforme. J'ai perdu le compte des commits "fix CI". Le log git en est rempli. Mais c'est la réalité quand tu livres des applis natives. Le code peut marcher parfaitement sur ta machine et quand même planter de façon spectaculaire dans un runner GitHub Actions.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Écran d'accueil](images/screenshot-01.png)

**Un vrai écran d'accueil.** Des actions rapides pour ouvrir des dossiers et fichiers, une liste de projets récents, et une référence des raccourcis clavier. Ça ressemble à une vraie page d'accueil d'IDE.

![Arborescence de fichiers avec un projet ouvert](images/screenshot-02.png)

**Une arborescence de fichiers qui marche.** Ouvre un dossier et tu obtiens un arbre de répertoires complet dans la sidebar avec déplier/replier, icônes de fichiers, tout le toutim. Il y a une minimap en bas qui montre une vue d'ensemble de la structure du fichier.

![Édition de code avec coloration syntaxique](images/screenshot-03.png)

**Monaco Editor dans son élément.** Coloration syntaxique complète, numéros de ligne, la minimap sur le côté droit. C'est la même expérience d'édition que VS Code parce que c'est littéralement le même composant d'édition. JavaScript, Go, TypeScript, JSON, tout ce que tu ouvres a une coloration correcte.

![Palette de commandes](images/screenshot-04.png)

**Une palette de commandes.** Cette overlay de recherche floue que chaque éditeur moderne possède. Cherche des commandes, saute entre les fichiers. Ça marche.

![Terminal intégré](images/screenshot-05.png)

**Un terminal intégré.** Il y a un panneau terminal en bas de l'éditeur. Lance tes builds, vérifie le statut git, tout ce dont tu as besoin sans quitter l'appli.

![Recherche de fichiers](images/screenshot-07.png)

**Recherche de fichiers avec correspondance floue.** Une overlay d'ouverture rapide pour naviguer entre les fichiers de ton projet. Tape quelques caractères et ça filtre instantanément.

## La Guerre du CI

Ça mérite sa propre section parce que ça a dominé le build. Faire compiler et packager Wails correctement sur GitHub Actions pour macOS, Linux et Windows simultanément a été une bataille sur plusieurs commits. Quelques moments forts :

- Les dépendances WebKit sur Linux nécessitaient des paquets spécifiques (`libgtk-3-dev`, `libwebkit2gtk-4.0-dev`)
- Les build tags devaient être correctement définis pour chaque plateforme
- La génération des bindings Wails devait se faire avant le build
- Le workflow de release devait produire des bundles `.app` pour macOS, des tarballs pour Linux, et des `.exe` pour Windows
- Plusieurs rounds de corrections, tests, re-corrections

Le résultat final est un workflow GitHub Actions qui build et release pour les trois plateformes automatiquement quand tu pousses un tag. Ça marche. Ça a juste pris un moment pour y arriver.

## Installe-le

C'est une appli native, donc pas de lien Vercel cette fois. Tu l'installes sur ta machine.

**Installation rapide (macOS et Linux) :**

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day28-idea/main/install.sh | bash
```

Ou récupère un binaire depuis la [page des releases](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest) :

| Plateforme | Architecture | Téléchargement |
|----------|-------------|----------|
| macOS | Intel (x86_64) | [VibEdit-macos-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-amd64.zip) |
| macOS | Apple Silicon (arm64) | [VibEdit-macos-arm64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-macos-arm64.zip) |
| Linux | x86_64 | [VibEdit-linux-amd64.tar.gz](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-linux-amd64.tar.gz) |
| Windows | x86_64 | [VibEdit-windows-amd64.zip](https://github.com/nunocoracao/Vibe30-day28-idea/releases/latest/download/VibEdit-windows-amd64.zip) |

**Build depuis les sources** si tu veux (nécessite Go 1.23+, Node.js 20+, Wails CLI v2) :

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
git clone https://github.com/nunocoracao/Vibe30-day28-idea.git
cd Vibe30-day28-idea
cd frontend && npm install && cd ..
wails build
```

## Essaie-le

{{< github repo="nunocoracao/Vibe30-day28-idea" showThumbnail=true >}}

## Les Chiffres

- **43 tâches Watchfire** de la mise en place aux dernières corrections CI
- **3 plateformes cibles** (macOS, Linux, Windows)
- **Wails v2 + Go** en backend avec React + Monaco Editor en frontend
- **GitHub Actions** workflow de release pour des builds multi-plateformes automatisés

## Verdict du Jour 28

L'éditeur en lui-même s'est construit assez vite. Monaco Editor fait le gros du boulot, et Wails rend le pont entre Go et React étonnamment propre. La partie difficile c'était tout ce qui entoure le code : faire compiler les applis natives par la CI pour trois systèmes d'exploitation, gérer les dépendances spécifiques à chaque plateforme, packager correctement pour chaque cible.

Est-ce que ça va remplacer VS Code ? Évidemment non. Mais c'est un éditeur de code natif fonctionnel avec une arborescence de fichiers, des onglets, de la coloration syntaxique, une palette de commandes, un terminal intégré, et des releases multi-plateformes. Construit en un jour. Le fait que le même Monaco Editor qui fait tourner VS Code soit disponible en tant que composant React signifie que tu obtiens une vraie expérience d'édition gratuitement. Le reste c'est de la plomberie, et c'est exactement le genre de travail dans lequel l'IA excelle.

43 tâches c'est beaucoup. La plupart des jours de ce challenge étaient dans la fourchette 15-25. Mais les applis de bureau natives avec des pipelines CI c'est un autre animal. Chaque plateforme a ses bizarreries, chaque système de build a ses opinions, et aucun n'est d'accord avec les autres. Plus que deux.

---

*C'est le jour 28 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suis l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
