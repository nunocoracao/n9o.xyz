---
title: "Le PM avec Claude Code : Chapitre 2 - Les Données"
summary: "Comment l'ajout du CLI Snowflake à Claude Code l'a transformé en analyste de données pour PM - exécuter des requêtes SQL, comparer la rétention entre versions produit, et donner du sens à des données complexes rapidement."
description: "Comment l'ajout du CLI Snowflake à Claude Code l'a transformé en analyste de données pour PM - exécuter des requêtes SQL, comparer la rétention entre versions produit, et donner du sens à des données complexes rapidement."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow", "Snowflake", "data analysis"]
series: ["PMing with Claude Code"]
series_order: 2
date: 2026-02-26
draft: false
---

Dans le premier chapitre, j'ai parlé de la mise en place de Claude Code comme centre de commande pour un PM - issues GitHub, docs Notion, fichiers de stratégie locaux, le tout connecté via un seul terminal. La plus grosse lacune que j'avais soulignée ? Les données. J'exportais manuellement des CSV depuis Looker ou Sigma et je les déposais dans un dossier. Ca marchait, mais c'était laborieux. Cette lacune est désormais comblée.

## La pièce manquante : l'accès SQL

Le problème n'a jamais été que Claude ne savait pas analyser des données. Donnez-lui un CSV et il trouvera des tendances, résumera des patterns, rédigera des observations. Le problème, c'était d'acheminer les données jusqu'à Claude. Chaque fois que j'avais besoin de chiffres à jour, je devais ouvrir un navigateur, naviguer vers un tableau de bord, exporter un fichier, le déplacer dans le workspace. Le temps que Claude ait les données, j'avais déjà passé cinq minutes sur quelque chose qui devrait prendre cinq secondes.

La solution était évidente avec le recul : donner à Claude un accès direct à l'entrepôt de données. Nos analyses sont dans Snowflake, et Snowflake dispose d'un CLI. (Merci pour ça Abhi !)

## Configurer le CLI Snowflake

Le [Snowflake CLI](https://docs.snowflake.com/en/developer-guide/snowflake-cli/index) (`snow`) est un outil en ligne de commande pour interagir avec Snowflake. Installez-le, configurez une connexion, et vous pouvez exécuter des requêtes SQL directement depuis le terminal. Ce qui signifie que Claude peut les exécuter aussi.

La configuration de connexion se trouve dans `~/.snowflake/connections.toml` :

```toml
[my_org]
account = "your-account"
user = "your-user"
authenticator = "externalbrowser"
role = "ROLE_READONLY"
warehouse = "your-warehouse"
```

Quelques points à noter. L'authentificateur `externalbrowser` signifie que l'authentification passe par le SSO de votre entreprise. Vous vous authentifiez une fois dans le navigateur et la session persiste. Pas de clés API ni de mots de passe qui traînent dans des fichiers de configuration. Et le rôle est en lecture seule. Claude peut interroger les données mais ne peut rien modifier. Même philosophie que les permissions GitHub du premier chapitre : donner à l'outil exactement l'accès dont il a besoin, rien de plus.

Une fois la connexion configurée, lancer une requête se fait en une seule commande :

```bash
snow sql -c my_org -q "SELECT COUNT(*) FROM my_table" --format json
```

Ensuite, j'ai demandé à Claude d'explorer et de documenter dans `CLAUDE.md` certaines des tables, schémas et patterns de requêtes courants. Une fois cela fait, j'ai discuté de certains détails sur des valeurs calculées pour qu'il en tienne compte dans le SQL. Claude a fini par documenter quelque chose comme ceci :

```markdown
## Snowflake Access
- CLI: `snow sql -c my_org -q "..." --format json`
- Role: read-only
- Key tables:
  - `MARTY.ENTITIES.L3_DIM_MOBIULE>__USER` - User dimension
  - `PREP.AI_SERVICE.L1_AI_TRACE` - API event traces
- The ATTRIBUTES column is a JSON variant with: username,
  planName, model, origin, gordonTag, token counts, cost, etc.
```

C'est le même pattern que dans le premier chapitre. `CLAUDE.md` donne à Claude le contexte nécessaire pour écrire des requêtes correctes sans que j'aie à expliquer le schéma à chaque fois. Et vous n'avez pas besoin de l'écrire vous-même, vous pouvez demander à Claude de capturer les informations que vous souhaitez.

## L'analyse de rétention

C'est là que ça devient intéressant. J'avais besoin de comprendre la rétention à la première semaine pour notre assistant IA sur cinq versions produit différentes. Chaque version avait été livrée avec des fonctionnalités différentes, une UX différente, des parcours d'onboarding différents. La question était simple : quelle version retenait le mieux les utilisateurs durant les sept premiers jours ?

Avec l'ancien workflow, cela aurait représenté des jours de travail et des dépendances avec d'autres équipes. Ouvrir Snowflake, déterminer quels tags de version correspondent à quelles releases, écrire la requête de cohorte, l'exécuter, l'exporter, fixer un tableur, essayer de repérer le pattern. Ou demander à un data analyst et attendre que sa file d'attente se libère.

Avec Claude, j'ai décrit ce dont j'avais besoin en langage naturel :

> "Compare la rétention de la semaine 1 pour Gordon sur les 5 dernières versions majeures."

Claude connaissait déjà le schéma grâce à `CLAUDE.md`. Il savait que `gordonTag` identifie la version du produit, que `EVENT_TIMESTAMP` enregistre quand les événements se sont produits, et il savait comment identifier les utilisateurs. Il a écrit le SQL, l'a exécuté via le CLI Snowflake, a obtenu les résultats et les a formatés dans un tableau comparatif.

Et en moins de 5 minutes, j'avais mes résultats...

## Ce qu'il fait bien (et ce qu'il ne fait pas)

Soyons clairs sur ce que cela remplace et ne remplace pas.

**Il ne construit pas de tableaux de bord.** Si vous avez besoin d'une visualisation persistante et partageable qui se met à jour quotidiennement, vous voulez toujours Looker ou Sigma ou l'outil de votre équipe. Claude répond à des questions. Il ne crée pas d'infrastructure de monitoring.

**Il ne remplace pas votre équipe data.** La modélisation de données complexe, le travail sur les pipelines, l'optimisation de l'entrepôt - c'est du travail d'ingénierie. Claude exécute des requêtes ad-hoc sur des tables existantes, il ne construit pas de nouveaux modèles de données.

**Ce qu'il fait, c'est réduire le temps entre la question et la réponse.** Le workflow d'un PM a toujours eu ce goulot d'étranglement : vous pensez à une question, vous cherchez où se trouvent les données, vous écrivez ou demandez une requête, vous attendez les résultats, vous les interprétez, vous pensez à une question de suivi, et le cycle recommence. Chaque cycle peut prendre des minutes ou des jours selon que vous pouvez vous servir en autonomie ou non.

Avec Claude + le CLI Snowflake, le cycle est conversationnel. Question, requête, résultat, suivi - tout dans la même session terminal, tout en quelques secondes. La vitesse change votre façon de travailler. Vous posez plus de questions. Vous explorez plus d'hypothèses. Vous repérez des choses que vous auriez manquées parce que le coût de vérification est si faible.

## L'effet cumulé

La vraie puissance ne réside pas dans une seule intégration. C'est la combinaison. Dans une seule conversation, Claude peut :

1. Récupérer les dernières issues GitHub pour voir ce qui a été livré dans chaque version
2. Interroger Snowflake pour obtenir les données de rétention de ces versions
3. Chercher dans Notion les décisions produit derrière chaque release
4. Croiser toutes ces informations et rédiger une synthèse

Quatre outils, quatre sources de données différentes, synthétisés en une seule conversation. Le contexte se propage. Quand Claude constate que la version X a eu une baisse de rétention, il peut immédiatement vérifier les issues GitHub pour voir ce qui a changé dans cette release, puis consulter le doc Notion pour comprendre le raisonnement. Pas de changement d'onglet, pas de copie de données entre outils.

C'est ce que je voulais dire dans le premier chapitre quand je parlais de Claude comme hub de workflow, et pas simplement comme assistant IA. Chaque nouvelle intégration multiplie la valeur de toutes les intégrations existantes.

## Configuration mise à jour

Pour référence, voici à quoi ressemble le workspace maintenant :

```
pm-workspace/
├── CLAUDE.md                # Workflow conventions, templates, Snowflake schemas
├── .claude/
│   └── settings.local.json  # Permissions: gh, snow sql, MCP servers
├── docs/                    # Strategy docs, analysis, specs
├── data_reports/            # Exported data (still useful for large datasets)
└── roadmap.md               # Living roadmap document
```

Et les permissions se sont étoffées :

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)",
      "Bash(snow sql*)"
    ]
  }
}
```

Une seule nouvelle ligne. C'est tout ce qu'il a fallu pour passer de "exporter manuellement des CSV" à "demander à Claude d'interroger directement l'entrepôt de données."

## Et ensuite

Le dossier `data_reports/` n'est pas obsolète. Pour les grands jeux de données ou les visualisations complexes, l'export reste pertinent. Mais pour les questions quotidiennes d'un PM - "comment évolue la rétention ?", "quelle est la répartition d'usage par forfait ?", "combien d'utilisateurs ont utilisé cette fonctionnalité la semaine dernière ?" - je n'ouvre plus jamais de navigateur.

Les lacunes restantes du premier chapitre se réduisent. Notion est connecté via MCP. GitHub est connecté via CLI. Snowflake est connecté via CLI. Ceux qui manquent encore : Google Docs (pas de MCP pour l'instant), Slack (le MCP existe mais je ne l'ai pas encore configuré), et les intégrations calendrier. Chaque ajout rend l'ensemble du système plus utile.

Si vous êtes PM avec accès à un entrepôt de données via CLI, c'est l'ajout le plus rentable que vous puissiez faire à votre configuration Claude Code. Les requêtes que Claude écrit ne sont pas toujours parfaites du premier coup. Mais la boucle d'itération est si rapide que ça n'a pas d'importance. Trois requêtes imparfaites en trente secondes valent mieux qu'une requête parfaite qui prend une heure à écrire.

L'objectif n'est pas la perfection. C'est la rapidité d'accès à l'insight.
