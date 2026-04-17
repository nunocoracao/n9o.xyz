---
title: "30 Days of Vibe Coding - Jour 9 - TaskTUI"
description: "Un tableau kanban personnel dans le terminal avec navigation style vim et un serveur MCP pour l'intégration avec Claude Code, construit en Go avec Bubble Tea."
summary: "Un tableau kanban personnel dans le terminal avec navigation style vim et un serveur MCP pour l'intégration avec Claude Code, construit en Go avec Bubble Tea."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-09", "go", "tui", "terminal", "kanban", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 9
seriesOpened: false
date: 2026-04-14
draft: false
#type: "hidden"
---

Jour 9. Je voulais un tableau de tâches qui vit dans le terminal et que Claude puisse aussi lire et modifier.

## Le Prompt

> "Construis un tableau kanban en terminal en Go avec un serveur MCP pour que Claude puisse gérer les tâches."

C'était le point de départ. [Watchfire](https://watchfire.io) l'a développé en 13 tâches couvrant le périmètre complet : tableau à trois colonnes avec navigation vim, interface Bubble Tea, persistance JSON, un observateur de fichiers pour le rafraîchissement automatique, un mode serveur MCP pour l'intégration IA, des commandes CLI pour la gestion rapide des tâches, et GoReleaser pour la distribution.

## Comment c'a été construit

Les 13 tâches l'ont fait passer du néant à une release complètement packagée. Les neuf premières tâches ont construit le cœur du tableau kanban : le modèle du tableau, le rendu des cartes, le glisser-déposer entre colonnes, et tout le style Lip Gloss pour que ça soit beau dans le terminal. La tâche 9 a ajouté le mode serveur MCP. La tâche 10 a apporté l'observation de fichiers en temps réel. Les trois dernières ont géré les commandes CLI, la config GoReleaser pour les binaires multi-plateformes, et le README.

L'architecture se découpe proprement en packages : `task` pour le modèle métier, `storage` pour la persistance JSON, `watcher` pour la surveillance du système de fichiers, `mcp` pour le serveur MCP, et `cli` pour toutes les commandes Cobra. Le point d'entrée route entre trois modes selon comment vous l'invoquez : mode TUI (par défaut), mode CLI (avec des sous-commandes comme `add` ou `list`), et mode serveur MCP (avec `tasktui mcp`).

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![TaskTUI kanban board with three columns](images/screenshot-01.png)

**Le tableau kanban est superbe dans le terminal.** Trois colonnes avec des en-têtes colorés : rouge/rose pour Todo, orange/jaune pour Doing, vert pour Done. Chaque carte affiche le titre et la description de la tâche. La carte sélectionnée a une bordure surlignée. On navigue avec `h/l` pour changer de colonne et `j/k` pour se déplacer entre les tâches dans une colonne.

![Adding a new task with the popup dialog](images/screenshot-02.png)

**Création de tâches en ligne.** Appuyez sur `n` et une fenêtre modale apparaît pour saisir le titre et la description de la tâche. Elle atterrit directement dans la colonne Todo. Appuyez sur `e` pour modifier une tâche existante de la même façon.

![Creating a new task with title and description fields](images/screenshot-03.png)

**La boîte de dialogue a une navigation de champs correcte.** Tab pour passer du titre à la description, Entrée pour confirmer. Ça ne gêne pas et ça fonctionne exactement comme on s'y attend.

![Board with tasks moved across columns](images/screenshot-04.png)

**Déplacer des tâches entre colonnes est instantané.** Appuyez sur Entrée ou Espace pour avancer une tâche (Todo vers Doing vers Done), ou Retour arrière pour la reculer. Vous pouvez aussi utiliser Shift+H et Shift+L pour déplacer les tâches explicitement à gauche et à droite. Le tableau supporte aussi l'annulation et le rétablissement complets.

**Les commandes CLI sont pratiques pour les captures rapides.** `tasktui add "Fix that bug"` dépose une tâche dans Todo sans ouvrir le TUI. `tasktui list --state doing` montre ce qui est en cours. `tasktui done 3` marque la tâche 3 comme terminée. Tout depuis le shell.

**Le serveur MCP est la partie intéressante.** Lancez `tasktui mcp` et ça démarre un serveur Model Context Protocol qui expose quatre outils : `list_tasks`, `add_task`, `move_task` et `delete_task`. Ajoutez-le à votre config `~/.claude/mcp.json` et Claude Code peut gérer vos tâches directement. L'observateur de fichiers fait que si vous avez le TUI ouvert en même temps, il se rafraîchit automatiquement quand Claude fait un changement. Vous pouvez littéralement voir les tâches apparaître sur votre tableau pendant que Claude les ajoute.

## Les Rapports de Bugs

L'observateur de fichiers se déclenche parfois deux fois lors des sauvegardes, ce qui cause un bref scintillement visuel quand le tableau se recharge deux fois d'affilée. Rien de grave mais c'est visible. Le mode serveur MCP en lui-même a fonctionné du premier coup, ce qui m'a honnêtement surpris vu à quel point les implémentations de protocoles peuvent être capricieuses.

## Les Chiffres

- **13 tâches Watchfire** du début à la release packagée
- **6 commandes CLI** (root, tui, add, list, done, mcp)
- **4 outils MCP** (list_tasks, add_task, move_task, delete_task)
- **Stack Go + Bubble Tea + Lip Gloss + Cobra**
- **GoReleaser** pour les builds de binaires multi-plateformes
- **Temps pratique total :** environ 25 minutes de tests et d'itération de prompts

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day09-tasktui" showThumbnail=true >}}

Installez-le avec :

```bash
curl -fsSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day09-tasktui/main/install.sh | sh
```

Ou compilez depuis les sources :

```bash
git clone https://github.com/nunocoracao/Vibe30-day09-tasktui.git
cd Vibe30-day09-tasktui
go build -o tasktui ./cmd/tasktui
```

Pour configurer l'intégration MCP avec Claude Code, ajoutez ceci à `~/.claude/mcp.json` :

```json
{
  "mcpServers": {
    "tasktui": {
      "command": "tasktui",
      "args": ["mcp"]
    }
  }
}
```

## Verdict du Jour 9

Celui-ci approfondit le stack Go + Bubble Tea mais ajoute quelque chose de nouveau : l'intégration IA via MCP.

Le tableau kanban en lui-même est solide. Il fait exactement ce qu'un gestionnaire de tâches personnel doit faire et rien de plus. Mais c'est le mode serveur MCP qui rend celui-ci intéressant. Avoir Claude Code qui gère mon tableau de tâches pendant que je travaille, qui ajoute des tâches qu'il découvre dans les commentaires du code, qui marque des choses comme terminées après les avoir corrigées, c'est un workflow dont je ne savais pas que j'avais besoin.

L'observateur de fichiers relie tout ensemble. Le TUI reste ouvert dans un panneau de terminal, Claude travaille dans un autre, et le tableau se met à jour en temps réel. On dirait du pair programming avec un tableau de tâches partagé entre toi et l'IA.

Neuf jours et les projets commencent à se connecter. GitDash pour la veille sur les repos, TaskTUI pour la gestion des tâches, les deux vivant dans le terminal là où je travaille vraiment. Les outils commencent à se parler entre eux.

---

*Ceci est le jour 9 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours avec du coding assisté par IA.*
