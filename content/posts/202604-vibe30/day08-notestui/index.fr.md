---
title: "30 Days of Vibe Coding - Jour 8 - NotesTUI"
description: "Une application de prise de notes en markdown dans le terminal avec recherche plein texte, catégories, thèmes et un serveur MCP pour l'intégration IA."
summary: "Une application de prise de notes en markdown dans le terminal avec recherche plein texte, catégories, thèmes et un serveur MCP pour l'intégration IA."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-08", "go", "tui", "terminal", "notes", "mcp"]
series: ["30 Days of Vibe Coding"]
series_order: 8
seriesOpened: false
date: 2026-04-13
draft: false
---

Jour 8. Hier j'ai construit un TUI pour les repos git. Aujourd'hui j'en ai construit un pour mon cerveau.

## Le Prompt

> "Construis une app de notes en terminal en Go avec support markdown et un serveur MCP."

C'était le point de départ. Court, vague, à peine un cahier des charges. Je l'ai donné à [Watchfire](https://watchfire.io) et je l'ai laissé développer l'idée en une définition produit complète : édition intégrée avec Glamour pour la prévisualisation markdown, SQLite avec FTS5 pour la recherche plein texte, catégories, tags, plusieurs thèmes de couleurs, raccourcis vim, mode serveur MCP, GoReleaser, GitHub Actions CI, scripts d'installation. Tout ça est sorti de Watchfire qui a pris ma ligne unique et l'a transformée en 36 tâches.

## Comment c'a été construit

Les 30 premières tâches environ ont construit l'app de notes principale : créer et éditer des notes dans le terminal, rendu markdown avec Glamour, recherche plein texte propulsée par SQLite FTS5, catégories, tags, plusieurs thèmes et raccourcis style vim. Le tout stocke les données dans `~/.notestui/` avec une base SQLite et un fichier de config YAML.

Ensuite la dernière série de tâches a géré le côté distribution. Config GoReleaser pour les builds multi-plateformes, GitHub Actions pour la CI, un script d'installation qui détecte automatiquement votre OS et architecture, et un script de désinstallation pour tout nettoyer. À la fin il y avait un README propre et c'était prêt à être livré comme binaire autonome.

Le mode serveur MCP était la partie intéressante. Lancer `notestui serve` démarre un serveur Model Context Protocol qui expose vos notes aux outils IA. Lister les notes, chercher, créer, mettre à jour, supprimer, tout via MCP. Ça veut dire que Claude Code ou n'importe quel assistant IA compatible MCP peut travailler avec vos notes directement.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![NotesTUI empty state with welcome screen](images/screenshot-01.png)

**L'état initial est accueillant.** La première fois que vous le lancez, vous avez un écran d'accueil propre qui vous dit d'appuyer sur `n` pour créer votre première note. La barre du bas montre tous les raccourcis d'un coup d'œil.

![Creating a new note with title, tags, and content](images/screenshot-02.png)

**L'éditeur est intégré directement.** Appuyez sur `n` et vous avez des champs pour le titre, les tags et le contenu. Tab passe d'un champ à l'autre, Ctrl+S sauvegarde. Pas besoin de lancer un éditeur externe, tout reste dans le TUI.

![Notes list with preview panel](images/screenshot-03.png)

**Disposition en panneaux.** Liste des notes à gauche, prévisualisation à droite. Les tags apparaissent comme des badges colorés sous le titre. La barre de statut en haut dit "Your markdown notes, beautifully organized", une petite touche sympa que l'IA a ajoutée toute seule.

![Editing a longer note with markdown content](images/screenshot-04.png)

**L'édition markdown fonctionne pour du vrai contenu.** J'ai collé une note plus longue et l'éditeur l'a gérée sans problème. La zone de contenu défile, et quand vous sauvegardez, le panneau de prévisualisation rend le markdown avec Glamour.

![Full-text search results with preview](images/screenshot-05.png)

**La recherche est rapide et utile.** Appuyez sur `/` pour chercher et ça fait une recherche plein texte sur toutes vos notes avec SQLite FTS5. Les résultats apparaissent dans le panneau gauche avec la prévisualisation de la note correspondante à droite. La requête de recherche est surlignée dans la prévisualisation.

![MCP settings screen - not connected](images/screenshot-06.png)

**L'intégration MCP a son propre écran de paramètres.** Appuyez sur `m` pour ouvrir les paramètres MCP. Ça montre l'état de connexion, les outils disponibles et les instructions de configuration. Quand ce n'est pas connecté, ça vous guide pour la mise en place.

![MCP settings screen - connected to Claude Code](images/screenshot-07.png)

**Une fois connecté, ça montre le statut.** L'écran de paramètres se met à jour pour montrer que NotesTUI est configuré avec Claude Code, avec un bouton pour se déconnecter et une option de rafraîchissement du statut.

![Claude Code creating notes through MCP](images/screenshot-08.png)

**C'est là que ça devient dingue.** J'ai demandé à Claude Code de "m'écrire des notes sur tous les personnages Marvel, une pour chacun." Il a commencé à appeler `notestui - create_note` via MCP, générant des profils détaillés de personnages et les poussant directement dans ma base de notes.

![Claude Code bulk-creating Marvel character notes](images/screenshot-09.png)

**Il n'a pas arrêté.** Claude a créé des notes pour Thor, Hulk, Black Widow, Hawkeye, Captain America, Iron Man, chacune avec pouvoirs, capacités, faits clés et informations sur les acteurs. Le tout via des appels d'outils MCP de Claude Code vers NotesTUI.

![More Marvel notes being created via MCP](images/screenshot-10.png)

**Les notes continuaient d'arriver.** On peut voir la liste des notes à gauche qui grandit au fur et à mesure que Claude les crée. Chacune reçoit des tags appropriés comme "marvel", "avengers", "mcu". L'IA a même décidé d'aller au-delà des 6 Avengers originaux et d'ajouter Scarlet Witch, Vision et d'autres.

![Search results for "spiderman" across all notes](images/screenshot-11.png)

**16 notes créées, toutes cherchables.** Une fois l'IA terminée, j'ai cherché "spiderman" et j'ai obtenu le profil complet du personnage avec nom réel, pouvoirs, faits clés et apparitions MCU. La vue en panneaux montre la prévisualisation markdown rendue à droite.

![Note detail view with markdown rendering](images/screenshot-12.png)

**Le rendu markdown est solide.** Glamour gère les titres, le texte gras, les listes à puces et les citations. La prévisualisation de la note dans le panneau droit est propre et lisible.

![Side-by-side NotesTUI and Claude Code](images/screenshot-13.png)

**Côte à côte avec Claude Code.** NotesTUI à gauche et Claude Code à droite. Pendant que Claude crée des notes via MCP, elles apparaissent dans le TUI en temps réel. La liste défile vers le bas au fur et à mesure que de nouvelles notes arrivent.

![Claude Code querying notes through MCP](images/screenshot-14.png)

**L'IA peut aussi lire vos notes.** J'ai demandé à Claude "Quel est le nom de Spiderman d'après mes notes ?" et il a appelé `notestui - get_note` via MCP pour chercher la réponse. Il a extrait les données de mes notes et a répondu correctement : Peter Benjamin Parker. L'IA peut à la fois écrire dans et lire depuis votre base de notes personnelle.

## Les Chiffres

- **36 tâches Watchfire** du repo vide au binaire livré
- **Go pur** sans dépendance CGO (utilise SQLite en Go pur)
- **6 outils MCP** : lister, chercher, obtenir, créer, mettre à jour, supprimer
- **Plusieurs thèmes** et raccourcis vim
- **GoReleaser + GitHub Actions** pour des builds automatisés multi-plateformes
- **Scripts d'installation et de désinstallation** inclus
- **Temps pratique total :** environ 25 minutes de tests, de prompting et de jeu avec l'intégration MCP

## Essayez-le

{{< github repo="nunocoracao/Vibe30-day08-notestui" showThumbnail=true >}}

Installez-le avec une seule commande :

```bash
curl -sSL https://raw.githubusercontent.com/nunocoracao/Vibe30-day08-notestui/main/scripts/install.sh | bash
```

Ou depuis les sources :

```bash
go install github.com/nunocoracao/Vibe30-day08-notestui@latest
```

Ensuite lancez simplement `notestui` pour commencer à prendre des notes, ou `notestui serve` pour démarrer le serveur MCP.

## Verdict du Jour 8

L'app de notes en elle-même est solide. TUI propre, recherche rapide, beau rendu markdown. Si je n'avais pas déjà migré vers Obsidian, c'est le genre d'outil que j'utiliserais vraiment au quotidien. Mais c'est le serveur MCP qui rend celui-ci différent de tout le reste du challenge jusqu'ici.

La démo des personnages Marvel était fun, mais réfléchissez à ce que le serveur MCP permet réellement. Ce n'est pas juste une app de notes dans laquelle une IA peut déverser des anecdotes. C'est un stockage de connaissances persistant dans lequel n'importe quel agent IA peut lire et écrire. Vous pourriez l'utiliser pour alimenter la mémoire d'un agent. Nourrissez-le avec des notes de réunion, du contexte projet, des résultats de recherche, et ensuite n'importe quel assistant compatible MCP peut interroger ces connaissances à la demande. La frontière entre "app de notes" et "base de connaissances d'agent" s'avère être un serveur MCP.

Regarder les notes apparaître en temps réel dans le TUI pendant que Claude tapait dans un autre terminal, c'était un de ces moments où tout le concept du vibe coding prend son sens. Tu construis un outil, tu lui donnes une interface IA, et soudain il peut faire des choses auxquelles tu n'avais pas pensé demander.

36 tâches Watchfire. La complexité supplémentaire venait du serveur MCP, des scripts de distribution et du pipeline CI. Mais le résultat est un vrai outil Go qui s'installe avec une seule commande curl et fonctionne avec les assistants IA directement.

---

*Ceci est le jour 8 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suivez l'aventure pendant que je livre 30 projets en 30 jours avec du coding assisté par IA.*
