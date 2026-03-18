---
title: "PMer avec Claude Code : Chapitre 4 - Second Cerveau"
summary: "Claude Code pouvait tout atteindre mais ne se souvenait de rien. Le connecter a Obsidian a transforme des fichiers eparpilles en un graphe de connaissances - avec des entites, de l'extraction de taches et des transcriptions de reunions qui s'alimentent mutuellement."
description: "Claude Code pouvait tout atteindre mais ne se souvenait de rien. Le connecter a Obsidian a transforme des fichiers eparpilles en un graphe de connaissances - avec des entites, de l'extraction de taches et des transcriptions de reunions qui s'alimentent mutuellement."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Obsidian", "Granola", "knowledge management"]
series: ["PMing with Claude Code"]
series_order: 4
date: 2026-03-18
draft: false
---

A la fin du chapitre trois, j'avais qualifie la configuration de "mode dieu." Claude Code pouvait puiser dans GitHub, Notion, Snowflake, Google Workspace et Slack - le tout depuis un seul terminal. Cinq integrations, cinq sources de donnees, des reponses en secondes au lieu d'heures. Acces a tout.

Mais chaque conversation repartait de zero.

Les informations que Claude faisait emerger dans une session ne se transmettaient pas a la suivante. Les connexions qu'il etablissait entre un fil Slack et un document de tarification disparaissaient quand la conversation se terminait. Je pouvais demander a Claude de trouver n'importe quoi, mais il ne pouvait pas se souvenir de ce qu'il avait deja trouve. Le manque, ce n'etait pas plus d'outils. C'etait de faire en sorte que les connaissances s'accumulent - construire une couche ou chaque nouvelle information se connecte a tout ce qui a precede.

C'est le sujet de ce chapitre. Pas une nouvelle integration. Un second cerveau.

## Pourquoi Obsidian

Obsidian est une application de prise de notes construite sur des fichiers markdown bruts. Pas de format proprietaire, pas de base de donnees cloud, pas de dependance fournisseur. Votre vault est simplement un dossier sur le disque - ouvrez-le dans n'importe quel editeur de texte et tout est la.

Ce qui le rend interessant pour ce cas d'usage, c'est la combinaison de fonctionnalites qui se superposent a ces fichiers. Les wikilinks (`[[comme ceci]]`) permettent de connecter n'importe quelle note a n'importe quelle autre sans friction. Une vue en graphe visualise ces connexions. Le frontmatter YAML donne des metadonnees structurees a chaque note. Un ecosysteme de plugins ajoute tout, des tableaux kanban aux vues base de donnees. Et avec la synchronisation iCloud, tout le vault est accessible sur votre telephone.

Point crucial : il n'y a pas d'API a configurer. Pas de danse OAuth, pas de serveur MCP, pas de tokens d'authentification. C'est un dossier de fichiers markdown sur votre systeme de fichiers local. Claude Code a deja acces au systeme de fichiers. C'est toute l'integration.

## L'integration la plus simple

Sur macOS avec la synchronisation iCloud, un vault Obsidian se trouve a :

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/<vault-name>/
```

Pas besoin de serveur MCP. Pas de plugin. Claude sait deja lire et ecrire des fichiers. J'ai ajoute une section "Knowledge Base" dans `CLAUDE.md` avec le chemin du vault et une note indiquant que c'est l'emplacement principal pour tous les fichiers persistants. Ensuite, j'ai mis a jour le skill `/sync` pour ecrire la roadmap a la fois dans le vault Obsidian et le repo git - le vault comme source principale, le repo comme sauvegarde versionne.

C'est tout. A partir de la, chaque conversation savait ou trouver et stocker les choses. La partie mecanique a pris cinq minutes.

## Structure du vault

Avec la connexion en place, j'ai mis en place une structure de dossiers :

| Dossier | Objectif |
|---------|----------|
| `roadmap/` | Fichiers de roadmap synchronises depuis GitHub |
| `meetings/` | Transcriptions de reunions pour la recherche et le contexte |
| `tasks/` | Taches personnelles et to-dos |
| `docs/` | Documents de strategie, analyses, recherches |
| `blogs/` | Brouillons d'articles de blog |
| `entities/` | Entites de connaissances reutilisables - personnes, projets, produits, initiatives |

Les dossiers `docs/` et `blogs/` que je gardais dans le repo git ont ete deplaces dans le vault. Les memes fichiers, mais desormais consultables via Obsidian, reliables par wikilinks, et accessibles sur mon telephone via iCloud. Une seule source de verite au lieu de deux.

## Le CLI Obsidian

C'est la que les choses sont devenues interessantes. Obsidian est livre avec un CLI integre a `/Applications/Obsidian.app/Contents/MacOS/obsidian`. J'ai fait ce que je fais avec chaque nouvel outil desormais - le pattern etape-zero des chapitres precedents : pointer Claude dessus et dire "explore ca, documente ce que tu trouves dans `CLAUDE.md`."

Claude a parcouru l'arbre de commandes, teste les sous-commandes et cartographie les capacites. Le resultat : deux facons complementaires d'interagir avec le vault.

**L'acces direct aux fichiers** gere les lectures et ecritures - rapide et simple. Mais le CLI ajoute des requetes structurees que les operations sur le systeme de fichiers ne peuvent pas faire :

```bash
# Full-text search across the vault
obsidian search "launch plan" --vault nexus

# Find what links to any note
obsidian backlinks "Project Alpha" --vault nexus

# Read/write YAML frontmatter programmatically
obsidian properties get "tasks/review-api.md" --vault nexus

# List and query tags across all notes
obsidian tags --vault nexus

# List and filter tasks
obsidian tasks --vault nexus --status open
```

Le systeme de fichiers pour la vitesse, le CLI pour les relations. La combinaison signifie que Claude peut a la fois lire le contenu d'un fichier et comprendre sa place dans le graphe de connaissances plus large.

## Entites : Le graphe de connaissances

C'est la piece maitresse conceptuelle de toute la configuration.

Le dossier `entities/` utilise une convention simple : chaque entite a son propre fichier markdown avec du frontmatter YAML pour les metadonnees et des wikilinks pour les connexions. Les types d'entites incluent les personnes, produits, projets, equipes, initiatives et concepts. Chaque type a son propre sous-dossier.

Voici a quoi ressemble une entite :

```yaml
---
type: product
tags: [platform, ai, agents]
---
# Project Alpha

Internal AI assistant. Started as a CLI tool,
expanding to web and desktop surfaces.

Related: [[Platform Team]], [[Desktop App]], [[MCP]]
```

Simple, mais la puissance reside dans l'effet de reseau. Chaque wikilink est une connexion bidirectionnelle. Quand je cree une note de reunion qui mentionne `[[Project Alpha]]`, elle apparait automatiquement dans les backlinks de Project Alpha. Quand une tache reference `[[Platform Team]]`, elle est decouvrable depuis la page d'entite de l'equipe. Le graphe se construit tout seul.

J'ai cree le skill `/entities` pour automatiser l'extraction. Il scanne le contenu du vault - `CLAUDE.md` (listes d'equipe), `roadmap.md` (epics, assignes), transcriptions de reunions (personnes referencees), taches (references d'entites) - et cree des fichiers d'entites structures pour tout ce qu'il trouve.

La premiere extraction a produit **39 entites** reparties dans six sous-dossiers :

```
entities/
  _index.md              # Master index
  people/                # 20 people
  products/              # 10 products
  projects/              # 2 active projects
  teams/                 # 1 team
  initiatives/           # 2 strategic initiatives
  concepts/              # 3 technical concepts
```

Quand j'ai ouvert la vue graphe d'Obsidian, les connexions sont apparues immediatement - qui travaille sur quel produit, quelles initiatives couvrent quelles equipes, quels concepts sous-tendent quels projets. Des informations qui etaient toujours implicites dans mes documents, desormais explicites et navigables.

Chaque nouveau document qui entre dans le vault et utilise des wikilinks rejoint ce reseau automatiquement. Le graphe devient plus dense et plus utile avec le temps sans aucun effort de maintenance.

## Gestion de taches et kanban

Au chapitre un, j'avais signale une lacune : "Tout n'est pas un epic de roadmap. J'ai des todos personnels... Ils n'ont pas leur place dans les issues GitHub." Trois chapitres plus tard, j'ai enfin comble ce manque.

Le systeme fonctionne avec un fichier par tache, avec du frontmatter structure :

```yaml
---
status: todo
priority: high
source: slack
due: 2026-03-20
entities: ["[[Project Alpha]]", "[[Sarah Chen]]"]
---
# Review launch plan feedback

## Description
Review and address Sarah's feedback on the Project Alpha launch plan.

## Output
Updated launch plan with resolved comments.

## Context
From 1:1 with [[Sarah Chen]] on 2026-03-17.
```

Chaque fichier de tache a un statut, une priorite, une source (d'ou vient l'action), une date d'echeance et des entites liees. Le format inclut a quoi ressemble le "termine" et d'ou provient la tache - suffisamment de structure pour etre utile, pas assez pour que creer une tache devienne une surcharge.

Pour la visualisation, j'ai installe le plugin communautaire Obsidian Kanban via le CLI :

```bash
obsidian plugin:install id=obsidian-kanban enable
```

Quatre colonnes : **Todo**, **Doing**, **Done**, **Dropped**. Les cartes sont des wikilinks vers les fichiers de taches, donc cliquer sur une carte ouvre le detail complet. Le tableau kanban est devenu le tableau de bord quotidien que je n'avais jamais eu - une vue unique de tout ce que j'ai a faire, alimente par tous les endroits ou je travaille.

## Granola : Transcriptions de reunions

La derniere source d'entree etait les reunions. J'ai installe Granola - un outil de transcription de reunions - et le plugin granola-to-obsidian. Le pipeline est simple : Granola enregistre et transcrit les reunions, le plugin exporte automatiquement les transcriptions dans le dossier `meetings/` du vault.

Maintenant chaque reunion est consultable. Claude peut lire les transcriptions, extraire les actions a mener, trouver qui a dit quoi et croiser les discussions avec les entites existantes. Une conversation sur un lancement de produit en 1:1 se relie naturellement a l'entite produit et a l'entite personne. La transcription rejoint le graphe de connaissances des qu'elle atterrit dans le vault.

Le vrai pipeline ressemble a ceci : **transcriptions > entites > taches > kanban**. La reunion a lieu, la transcription apparait dans le vault, les references d'entites la connectent au graphe, les actions sont extraites dans des fichiers de taches, les fichiers de taches apparaissent sur le tableau kanban. Chaque etape est automatisee ou a une commande pres.

## Executer /pm-task pour de vrai

C'est la que tout s'est assemble.

Le skill `/pm-task` scanne quatre sources pour trouver des actions : Slack, Email, Calendar et les notes de reunion Granola. Il lit l'activite recente, identifie tout ce qui ressemble a une tache ou un engagement, presente les candidats pour revue, et cree des fichiers de taches ainsi que des cartes kanban apres confirmation.

Je l'ai lance sur une journee normale d'activite - messages Slack recents, emails non lus, calendrier du jour et quelques transcriptions Granola. Il a extrait **8 taches** et les a ajoutees au tableau kanban. Chacune avait les bons liens d'entites, le contexte source et la priorite. Il a correctement ignore le bruit - messages FYI, fils resolus, emails marketing, invitations calendrier informatives. Signal dedans, bruit dehors.

Quatre sources d'entree canalisees a travers un seul skill vers des fichiers de taches structures avec des liens d'entites et une visualisation kanban. Le genre d'extraction de taches multi-sources qui prendrait trente minutes de scanning manuel s'est fait en une vingtaine de secondes.

## Ce qui a change

Le tableau des integrations ressemble maintenant a ceci :

| Outil | Methode | Ce qu'il fait |
|-------|---------|---------------|
| GitHub | CLI `gh` | Issues, epics, gestion de projet |
| Notion | MCP | Specs produit et documentation |
| Snowflake | CLI `snow` | Requetes sur l'entrepot de donnees |
| Google Workspace | CLI `gws` | Calendar, Docs, Sheets, Gmail |
| Slack | Plugin MCP | Recherche, lecture et envoi de messages |
| **Obsidian** | **Filesystem + CLI** | **Graphe de connaissances, taches, entites, vault** |
| **Granola** | **Plugin Obsidian** | **Transcriptions de reunions** |

Sept integrations maintenant. Mais ce chapitre ne consistait pas vraiment a ajouter deux lignes de plus au tableau.

Ce qui a vraiment change : un chemin de vault dans `CLAUDE.md`. Deux nouveaux skills - `/pm-task` et `/entities`. Trente-neuf entites extraites et connectees. Huit taches tirees de quatre sources differentes. Un tableau kanban qui n'existait pas avant. Et sous tout cela, un graphe de connaissances qui se densifie chaque fois que Claude touche au vault.

## Et ensuite

Obsidian a recemment lance Bases - des vues de base de donnees structurees qui interrogent les notes en utilisant les proprietes du frontmatter. Cela pourrait transformer le systeme d'entites en quelque chose de plus proche d'une vraie base de donnees relationnelle. Je veux aussi diriger les fichiers memoire de Claude Code vers le vault, pour que sa memoire persistante et le graphe de connaissances fusionnent en un seul systeme. Et en tete du tableau kanban : construire le prototype de roadmap AI-native.

Mais la these de ce chapitre ne porte pas sur ce qui vient ensuite. C'est que le manque n'a jamais ete plus d'entrees - c'etait de construire la couche qui fait que toutes les entrees s'accumulent. Les chapitres un a trois ont connecte Claude Code au monde. Ce chapitre lui a donne un endroit pour se souvenir de ce qu'il a trouve.

Acces plus memoire. C'est ca le vrai effet compose.
