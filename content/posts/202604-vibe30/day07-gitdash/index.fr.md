---
title: "30 Days of Vibe Coding - Jour 7 - GitDash"
description: "Un tableau de bord terminal pour surveiller l'état de tous vos dépôts git en un coup d'œil, construit avec Go et Bubble Tea."
summary: "Un tableau de bord terminal pour surveiller l'état de tous vos dépôts git en un coup d'œil, construit avec Go et Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-07", "go", "tui", "terminal", "git"]
series: ["30 Days of Vibe Coding"]
series_order: 7
seriesOpened: true
date: 2026-04-12
draft: false
---

Jour 7. Même stack qu'hier. Même framework. Pas l'idée la plus originale non plus.

Après que le Jour 6 ait prouvé que je pouvais construire avec Go et Bubble Tea sans jamais y avoir touché, je voulais tester autre chose : que se passe-t-il quand on pointe l'IA vers un outil existant et qu'on lui demande de construire un wrapper ? Dans ce cas, git. J'ai trop de dépôts et aucune idée desquels ont des changements non commités.

## Le Prompt

> "Construis une application TUI en Go qui scanne une arborescence de répertoires à la recherche de dépôts git et affiche leur état dans un tableau de bord terminal. Code couleur : vert pour propre, jaune pour modifié, bleu pour en avance/en retard. Laisse-moi fetch, pull, et ouvrir un shell dans n'importe quel dépôt. Utilise Bubble Tea pour l'interface."

## Comment ça a été construit

La partie intéressante de ce projet, ce n'est pas l'interface ni le framework. C'est la façon dont l'IA s'est interfacée avec git. L'appli est essentiellement un wrapper : elle appelle `git` en ligne de commande pour chaque information qu'elle affiche. Noms de branches, hash de commits, compteurs d'avance/retard, listes de stash, suivi des fichiers modifiés. Elle n'utilise pas de bibliothèque Go pour git. Elle exécute les mêmes commandes que vous taperiez à la main et parse la sortie.

L'IA a découpé le travail en packages correspondant aux responsabilités : un scanner qui parcourt les arborescences de répertoires à la recherche de dossiers `.git`, un package git qui enveloppe les commandes CLI, un système de configuration utilisant YAML, et une couche TUI construite sur Bubble Tea de Charm. Le scanner ignore `node_modules`, `vendor`, et les répertoires cachés. Le package git gère branch, status, log, rev-list, stash list et describe. L'interface a une séparation nette entre la vue liste, la vue détail, la barre d'état, l'overlay d'aide et les styles.

Il est même venu avec un Makefile pour les builds multi-plateformes (darwin/linux, amd64/arm64) et un script d'installation qui détecte automatiquement votre OS et votre architecture.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Vue principale de GitDash montrant les dépôts groupés par statut](images/screenshot-01.png)

**Il regroupe les dépôts par statut.** Les dépôts modifiés avec des changements non commités apparaissent en premier (point jaune), puis les dépôts qui doivent être synchronisés avec le remote (compteurs d'avance/retard en bleu), puis les dépôts propres (coche verte). En un coup d'œil, je peux voir quels dépôts nécessitent de l'attention. Appuyez sur `s` pour basculer entre les vues groupées et alphabétiques.

![GitDash avec un dépôt sélectionné](images/screenshot-02.png)

**Chaque dépôt affiche beaucoup d'infos sur deux lignes.** Nom, branche entre crochets roses, dernier tag entre parenthèses, indicateur propre/modifié, flèches d'avance/retard, temps relatif du commit à droite, et le dernier message de commit en dessous. Ça condense une quantité surprenante de contexte dans un petit espace.

![Vue détaillée d'un seul dépôt](images/screenshot-03.png)

**La vue détaillée est vraiment utile.** Appuyez sur Entrée sur n'importe quel dépôt et vous avez le tableau complet : chemin, branche, tag, statut, état de synchronisation remote, message de commit complet avec auteur, liste des fichiers modifiés si dirty, et nombre de stash. De là, vous pouvez pull, ou appuyer sur `g` pour ouvrir un shell directement dans le répertoire de ce dépôt.

![Shell ouvert depuis GitDash](images/screenshot-04.png)

**L'intégration shell fonctionne.** Appuyez sur `g` et ça lance votre shell (lit `$SHELL`) dans le répertoire du dépôt. Faites ce que vous avez à faire, quittez, et vous êtes de retour dans GitDash. Quand vous revenez, le statut du dépôt se rafraîchit automatiquement.

**Il a un système de recherche/filtre.** Appuyez sur `/` et commencez à taper pour filtrer les dépôts par nom en temps réel. Pratique quand vous scannez un répertoire avec des dizaines de projets.

**Fichier de config YAML.** Définissez vos chemins de surveillance dans `~/.config/gitdash/config.yaml` pour ne pas avoir à passer `-path` à chaque fois. Configurez plusieurs répertoires, la profondeur maximale de scan, et si vous voulez afficher les dossiers cachés.

## Les Bugs

Rien de majeur sur celui-ci. La TUI s'est assemblée proprement. La seule chose que j'ai remarquée, c'est que sur de très grandes arborescences, le scan initial prend un moment, mais il affiche un message "Scanning for repositories..." donc vous savez que ça travaille.

## Les Chiffres

- **11 fichiers source Go** répartis en 5 packages (main, config, git, scanner, ui)
- **~1 900 lignes de Go**
- **1 fichier de test** pour le scanner
- **Builds multi-plateformes** pour macOS et Linux (amd64/arm64)
- **Script d'installation** avec détection automatique de l'OS et de l'architecture
- **Temps réel passé dessus :** peut-être 20 minutes de tests et d'ajustement du prompt

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day07-gitdash" showThumbnail=true >}}

Installez-le avec :

```bash
go install github.com/nunocoracao/Vibe30-day07-gitdash@latest
```

Ou en une seule ligne :

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day07-gitdash/main/scripts/install.sh | bash
```

Ensuite lancez simplement `gitdash` dans n'importe quel répertoire contenant des dépôts git.

## Verdict du Jour 7

Soyons honnêtes : ce n'est pas un projet créatif. Un tableau de bord de statut git, ce n'est pas une idée nouvelle. Lazygit et tig existent déjà et font ça mieux. Et c'est la même stack Go + Bubble Tea que j'ai utilisée hier, donc il n'y a pas d'histoire de "techno inconnue" à raconter non plus.

Mais le build a révélé quelque chose qui mérite d'être noté. L'IA n'a pas eu besoin de comprendre les mécanismes internes de git. Elle a juste wrappé la CLI. Chaque donnée dans ce tableau de bord vient de l'exécution d'une commande git et du parsing de la sortie texte. `git status --porcelain` pour les fichiers modifiés. `git rev-list --count` pour l'avance/retard. `git stash list` pour le nombre de stash. Elle a traité git comme une boîte noire avec une interface texte, ce qui est exactement comme la plupart des développeurs le traitent aussi.

C'est le pattern intéressant d'aujourd'hui. Vous pouvez pointer l'IA vers n'importe quel outil CLI avec une sortie structurée et obtenir une interface wrapper construite autour. Git, Docker, kubectl, peu importe. L'IA n'a pas besoin de comprendre les mécanismes internes du système plus que vous. Elle a juste besoin de savoir quelles commandes exécuter et comment parser ce qui revient.

Le projet en lui-même est correct. Il fonctionne, le regroupement par statut est utile en un coup d'œil, la vue détaillée contient beaucoup d'infos. Mais je ne vais pas prétendre que c'est quelque chose que j'utiliserai au quotidien alors que je peux juste lancer `git status` dans chaque dépôt. La valeur ici était de voir le pattern, pas l'outil spécifique.

---

*Ceci est le jour 7 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure alors que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
