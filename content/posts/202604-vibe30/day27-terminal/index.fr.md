---
title: "30 Jours de Vibe Coding - Jour 27 - Terminal"
description: "Un émulateur de terminal natif construit avec Tauri 2 et Rust, avec des onglets, des panneaux divisés, des thèmes configurables et des fonctionnalités intelligentes."
summary: "Un émulateur de terminal natif construit avec Tauri 2 et Rust, avec des onglets, des panneaux divisés, des thèmes configurables et des fonctionnalités intelligentes."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-27", "rust", "tauri", "terminal"]
series: ["30 Days of Vibe Coding"]
series_order: 27
seriesOpened: false
date: 2026-05-02
draft: false
#type: "hidden"
---

Jour 27. Plus que quatre jours. C'est le moment d'arrêter de jouer la sécurité.

La dernière ligne droite de ce challenge, c'est là où je veux me lancer dans des trucs qui ne devraient probablement pas tenir en une seule journée. Un émulateur de terminal, c'est exactement ça. Pas un jouet web qui fait semblant d'être un terminal. Une vraie application de bureau native qui lance de vraies sessions shell, fait du rendu à 60fps, et gère tout, de vim à htop.

## Le Prompt

> "Construis un émulateur de terminal en utilisant Tauri 2 et Rust"

C'était la demande de base. Tout le reste est venu par itération.

{{< alert icon="fire">}}
Téléchargez-le depuis la [dernière release](https://github.com/nunocoracao/Vibe30-day27-terminal/releases/latest)
{{< /alert >}}

## Comment ça a été construit

C'était un gros morceau. [Watchfire](https://watchfire.io) a découpé le travail en 19 tâches, et il avait besoin de chacune d'entre elles. Construire un émulateur de terminal, c'est pas trivial. Il y a la gestion des PTY, l'intégration shell, la gestion des entrées, les performances de rendu, et une dizaine d'autres trucs auxquels je n'aurais jamais pensé.

La liste des tâches ressemblait à peu près à ça :

1. Mettre en place un projet Tauri 2 + Vite avec support PTY de base
2. Onglets multiples avec ouverture, fermeture et renommage
3. Panneaux divisés, horizontaux et verticaux
4. Panneau de paramètres avec thèmes, polices et config shell
5. Polish UI, scrollback et corrections shell
6. GitHub Actions pour des releases automatisées
7. Suggestions de commandes IA en ligne
8. Polish visuel pour la transparence, le flou et le chrome de fenêtre
9. Liens cliquables et détection intelligente dans la sortie du terminal
10. Profils shell et actions rapides
11. Avertissements pour commandes dangereuses avec dialogues de confirmation
12. Notifications pour commandes longues
13. Recherche floue dans l'historique avec un overlay riche Ctrl+R
14. Suggestions fantômes en ligne depuis les fichiers d'historique
15. Détection intelligente d'erreurs avec actions de correction rapide
16. Traduction du langage naturel en commandes
17. Explication de commandes et résumé IA de la sortie
18. Regroupement de sortie en blocs avec sections repliables
19. Panneau de paramètres des fonctionnalités intelligentes et tests d'intégration

Ensuite sont venus les correctifs CI/CD. Faire compiler et signer Tauri sur macOS, Linux et Windows via GitHub Actions, c'est une aventure en soi. Plus les scripts d'installation pour les trois plateformes.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Terminal en fonctionnement avec plusieurs fonctionnalités visibles](images/screenshot-01.png)

**C'est un vrai terminal.** Ce n'est pas une simulation. Il utilise le crate portable-pty de Rust pour lancer de vraies sessions shell. Bash, zsh, fish, tout ce que vous avez configuré. Le support PTY complet signifie que tout fonctionne : vim, htop, les prompts interactifs, tout.

![htop en cours d'exécution avec plusieurs onglets](images/screenshot-11.png)

**xterm.js avec accélération WebGL.** Le rendu est rapide. Genre, vraiment rapide. Le scrollback monte jusqu'à 10 000 lignes et ça ne rame pas. Le moteur de rendu WebGL fait une vraie différence par rapport à l'approche canvas standard.

**Onglets et panneaux divisés.** Cmd+T pour un nouvel onglet, Cmd+D pour une division verticale, Cmd+Shift+D pour une division horizontale. Vous pouvez renommer les onglets. La gestion des panneaux fonctionne exactement comme on l'attend d'un terminal moderne.

![Panneaux divisés avec Claude Code en cours d'exécution](images/screenshot-12.png)

**Il a un tour des fonctionnalités intelligentes.** Quand vous ouvrez l'app pour la première fois, il vous guide à travers les fonctionnalités intelligentes avec une visite guidée.

![Tour des fonctionnalités intelligentes](images/screenshot-02.png)

Ces fonctionnalités intelligentes incluent les suggestions fantômes depuis votre historique de commandes, la recherche floue dans l'historique avec Ctrl+R, les avertissements pour commandes dangereuses comme `rm -rf` ou `git push --force`, et la traduction du langage naturel en commandes.

![Suggestions fantômes](images/screenshot-03.png)

![Recherche floue dans l'historique](images/screenshot-04.png)

![Avertissements pour commandes dangereuses](images/screenshot-05.png)

![Langage naturel et fonctionnalités IA](images/screenshot-06.png)

**Un panneau de paramètres complet.** Famille de police, taille de police, style de curseur, thèmes de couleurs. Il est livré avec Dracula, Solarized, Monokai et plus encore. Vous pouvez configurer le flou d'arrière-plan, la transparence et les arguments shell.

![Panneau de paramètres](images/screenshot-14.png)

**Recherche de commandes dans le scrollback.** Ctrl+F ouvre un overlay de recherche qui vous permet de chercher dans l'historique de votre terminal avec correspondance floue.

![Overlay de recherche](images/screenshot-13.png)

**Regroupement de sortie en blocs.** Les longues sorties de commandes sont regroupées en blocs repliables. Il y a un bouton "Résumer la sortie" pour quand une commande crache 2 000 lignes et que vous voulez juste l'essentiel.

![Résumé de sortie](images/screenshot-07.png)

**Il fait tourner pico.** Il fait tourner vim. Il fait tourner tout ce qu'un terminal devrait faire tourner, parce que c'est un terminal.

![Éditeur de texte Pico en cours d'exécution dans Terminal](images/screenshot-08.png)

**Il fait même tourner l'assistant IA de Docker.** Les applications TUI interactives complètes fonctionnent sans problème.

![Assistant IA Docker en cours d'exécution dans Terminal](images/screenshot-09.png)

![Vue étendue de l'assistant IA Docker](images/screenshot-10.png)

**Il fait tourner Claude Code à l'intérieur.** J'ai utilisé le terminal pour lancer Claude Code afin de construire plus de fonctionnalités pour le terminal. Ça ressemblait à un type très spécifique d'inception.

![Claude Code en cours d'exécution dans Terminal avec la liste de tâches Watchfire visible](images/screenshot-12.png)

## Installez-le

C'est une app native, pas un site web. Pas de déploiement Vercel ici. Vous pouvez récupérer la dernière release depuis la page des releases GitHub, ou utiliser les scripts d'installation :

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.sh | bash
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/nunocoracao/Vibe30-day27-terminal/main/install.ps1 | iex
```

Ou compilez depuis les sources si vous voulez :

```bash
git clone https://github.com/nunocoracao/Vibe30-day27-terminal.git
cd Vibe30-day27-terminal
npm install
npm run tauri dev
```

Nécessite Rust 1.77.2+ et Node.js 20+.

{{< github repo="nunocoracao/Vibe30-day27-terminal" showThumbnail=true >}}

## Les chiffres

- **19 tâches Watchfire** du scaffold à l'intégration des fonctionnalités intelligentes
- **Backend Tauri 2 + Rust** avec portable-pty pour de vraies sessions shell
- **xterm.js avec WebGL** pour un rendu rapide
- **6+ thèmes de couleurs** incluant Dracula, Solarized et Monokai
- **Pipeline CI/CD** avec GitHub Actions compilant pour macOS, Linux et Windows
- **Scripts d'installation** pour les trois plateformes

## Verdict du Jour 27

Un émulateur de terminal touche tellement de couches. La gestion PTY en Rust. L'IPC entre le backend Rust et le frontend JavaScript via Tauri. Le rendu WebGL pour la performance. Les builds multi-plateformes et la signature de code via CI/CD. Les scripts d'installation qui détectent votre OS et votre architecture.

Et par-dessus tout ça, il a ajouté des fonctionnalités intelligentes. Les suggestions fantômes, la recherche floue, les avertissements pour commandes dangereuses, l'intégration IA. Ce ne sont pas des gadgets. J'ai trouvé les avertissements pour commandes dangereuses vraiment utiles quand j'ai accidentellement tapé quelque chose de destructif pendant les tests.

Le fait que ça fonctionne tout court est impressionnant. Le fait que ça fonctionne assez bien pour que je l'utilise réellement pour lancer Claude Code afin de construire encore plus de ses propres fonctionnalités, c'est autre chose. Je ne vais pas remplacer iTerm avec demain, mais l'écart entre "terminal vibe codé" et "terminal de production" est plus petit que ce que j'attendais.

Jour 27 sur 30. Plus que trois.

---

*Ceci est le jour 27 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours en utilisant du coding assisté par IA.*
