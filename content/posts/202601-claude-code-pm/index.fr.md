---
title: "Faire du Product Management avec Claude Code"
summary: "Comment j'ai configuré Claude Code comme centre de commande PM - connectant les issues GitHub, les docs Notion et l'assistance IA dans un seul workflow."
description: "Comment j'ai configuré Claude Code comme centre de commande PM - connectant les issues GitHub, les docs Notion et l'assistance IA dans un seul workflow."
categories: ["Tech", "AI", "Product"]
tags: ["AI", "Claude Code", "product management", "MCP", "workflow"]
date: 2026-01-28
draft: false
---

La plupart des outils IA sont conçus pour les développeurs. Des copilotes qui autocomplètent le code, des agents qui écrivent des tests, des assistants qui déboguent les erreurs. Mais le travail de PM - suivre les roadmaps, rédiger des specs, interroger les issues, synthétiser les notes de réunion - est tout aussi propice à l'assistance IA. Le défi est que le travail de PM s'étend sur tellement d'outils : GitHub pour les issues, Notion pour les docs, des tableurs pour la priorisation, Slack pour le contexte. Aucun outil IA ne les connecte tous.

Jusqu'à ce que je commence à faire mon travail de PM dans Claude Code.

## Pourquoi Claude Code pour le PM ?

Claude Code est l'assistant IA de codage en ligne de commande d'Anthropic. Il fonctionne dans votre terminal, ce qui peut sembler un choix étrange pour un PM... Mais écoutez-moi. Premièrement, il vit là où je passe une partie importante de mon temps. Je suis constamment dans le terminal - exécutant des commandes git, vérifiant les déploiements, consultant les logs lors du débogage avec les ingénieurs. Avoir Claude disponible dans le même contexte signifie que je ne change pas de contexte entre les outils pour certains de ces cas d'usage.

Deuxièmement, le système [MCP (Model Context Protocol)](https://modelcontextprotocol.io) permet à Claude Code de se connecter à des outils externes. GitHub, Notion, Linear, Slack - s'il existe un serveur MCP pour cela, Claude Code peut l'interroger. Cela transforme un simple assistant IA en un véritable hub de workflow.

Troisièmement, s'il n'y a pas de serveur MCP, je peux toujours utiliser des commandes shell pour me connecter à n'importe quel outil avec une CLI. La CLI GitHub (`gh`) est parfaite pour le travail de PM. Claude peut exécuter des commandes `gh` pour lister les issues, voir les détails, créer de nouveaux éléments, et plus encore. Cela me donne un accès en lecture et écriture à mes issues GitHub directement depuis Claude.

Quatrièmement, le fichier `CLAUDE.md` donne à Claude un contexte persistant sur ma façon de travailler. Mes conventions, mes templates, mes préférences. Chaque conversation commence avec Claude connaissant déjà mon workflow.

Et enfin, le système de permissions garde tout en sécurité. Je contrôle exactement quelles commandes Claude peut exécuter, quelles API il peut appeler. Pas de surprises.

## La Configuration

Mon espace de travail PM est une structure de repo simple :

```
pm-workspace/
├── CLAUDE.md                # Conventions de workflow et templates
├── .claude/
│   └── settings.local.json  # Permissions et config MCP
├── docs/                    # Docs stratégie, analyses, specs
├── data_reports/            # Données analytics exportées manuellement
└── roadmap.md               # Document roadmap vivant
```

La philosophie est documentation-first, avec GitHub comme source de vérité pour l'exécution - c'est ce que mon équipe utilise pour suivre le travail, ce ne serait pas très différent pour Jira, Notion, Linear, etc. Le repo contient mes documents de travail - documents stratégiques, analyses, tout ce sur quoi je veux que Claude ait du contexte. GitHub contient les issues réelles et le suivi de projet. Notion a la base de connaissances plus détaillée. Et quand j'ai besoin de contexte analytics, les données exportées vivent dans `data_reports/`.

Le fichier `CLAUDE.md` est là où la magie opère. Il contient mes conventions :

```markdown
# PM Workflow

## Source of Truth
- **GitHub:** All epics and issues live in the main repo
- **Notion:** PRDs, meeting notes, decision logs
- **Local docs:** Strategy documents in `/docs/`
- **Data:** Exported analytics in `/data_reports/`

## Conventions
- Epics use the `Epic` issue type
- Streams are tracked via labels
- Quarterly goals tagged with `Q1-2026`, `Q2-2026`, etc.

## Useful Commands
- List open epics: `gh api graphql -f query='...'` (full query below)
- View epic details: `gh issue view <number>`
- Sync roadmap: Pull latest epic status and update roadmap.md

## Templates
When creating roadmap items, use this structure:
- Problem: What user problem are we solving?
- Solution: High-level approach
- Success metrics: How do we know it worked?
- Dependencies: What blocks this?

## Documentation Index
| File | Description |
|------|-------------|
| `docs/strategy.md` | Product strategy and vision |
| `docs/analysis.md` | Research and data analysis |
```

Ce fichier se charge automatiquement chaque fois que je démarre Claude Code dans ce répertoire. Claude sait déjà comment je nomme les choses, où trouver les informations, et quel format j'attends.

## Connecter les Outils

### Intégration de la CLI GitHub

La CLI GitHub (`gh`) est l'épine dorsale de ma configuration. Claude Code peut exécuter des commandes shell, donc je configure les permissions pour autoriser des opérations GitHub spécifiques :

```json
{
  "permissions": {
    "allow": [
      "Bash(gh issue list*)",
      "Bash(gh issue view*)",
      "Bash(gh issue create*)",
      "Bash(gh project*)",
      "Bash(gh api*)"
    ]
  }
}
```

Cela accorde à Claude un accès en lecture et écriture aux issues et projets, mais rien d'autre. Pas de push de code, pas de gestion de releases, pas de toucher à quoi que ce soit en dehors du workflow PM.

Avec cette configuration, je peux demander à Claude des choses comme :

- "Montre-moi tous les epics ouverts pour Q1"
- "Quel est le statut de l'epic d'authentification ?"
- "Crée une nouvelle issue pour le redesign du dashboard"
- "Liste toutes les issues qui bloquent la release mobile"
- "Y a-t-il des commentaires ouverts de l'équipe auxquels je dois répondre ?"

Claude traduit mon langage naturel en commandes `gh` appropriées, les exécute et résume les résultats. Pour des requêtes plus complexes, il peut utiliser l'API GraphQL de GitHub :

```bash
gh api graphql -f query='
  query {
    repository(owner: "myorg", name: "myrepo") {
      projectV2(number: 1) {
        items(first: 50) {
          nodes {
            content { ... on Issue { title state } }
            fieldValues(first: 10) { nodes { ... on ProjectV2ItemFieldSingleSelectValue { name } } }
          }
        }
      }
    }
  }
'
```

Je n'ai pas besoin de me souvenir de cette syntaxe. Je demande juste "qu'est-ce qu'il y a dans le project board Q1 ?" et Claude trouve la requête.

### Notion MCP

Pour les documents plus longs - PRDs, notes de réunion, logs de décisions - j'utilise Notion. Claude Code supporte les serveurs MCP, qui sont des services externes qui étendent ses capacités. Le serveur MCP Notion donne à Claude un accès en lecture à mon workspace :

```json
{
  "mcpServers": {
    "notion": {
      "type": "url",
      "url": "https://mcp.notion.com/sse"
    }
  }
}
```

Avec cela connecté, je peux demander à Claude de chercher dans mon workspace Notion pour du contexte. "Qu'avons-nous décidé concernant le modèle de pricing ?" ou "Trouve le PRD pour les notifications utilisateur" ou "Résume les trois derniers syncs produit."

La puissance est dans la combinaison. Claude peut interroger GitHub pour le statut des issues, puis croiser avec les docs Notion pour le contexte, puis m'aider à rédiger une mise à jour qui référence les deux. Un outil, plusieurs sources.

## Le Workflow en Pratique

Voici à quoi ressemble une journée typique :

**Préparation matinale.** J'ouvre Claude Code et demande : "Quelles issues ont été fermées hier ? De nouveaux bugs ont été signalés ?" Claude interroge GitHub, résume l'activité, et j'ai mes points de discussion pour le standup en trente secondes.

**Sync roadmap.** "Synchronise la roadmap depuis GitHub - obtiens le dernier statut de tous les epics ouverts." Claude exécute la requête GraphQL de mon `CLAUDE.md`, récupère l'état actuel, les assignés et les milestones, puis met à jour `roadmap.md` avec les données fraîches. Le document roadmap reste synchronisé avec GitHub sans que je vérifie manuellement chaque issue.

**Contexte stratégique.** "Quelle est notre approche sur le travail d'infrastructure de la plateforme ?" Claude lit le document stratégique pertinent de mon dossier `docs/` et résume les points clés. Quand j'ai besoin de référencer une décision ou de me rappeler le raisonnement derrière une direction, c'est instantané.

**Analyse de données.** J'exporte un CSV - métriques d'engagement utilisateur pour le dernier trimestre - et le dépose dans `data_reports/`. "Analyse les données d'engagement et résume les tendances." Claude lit le fichier, identifie les patterns et rédige des observations. Pas aussi fluide qu'une intégration directe, mais ça fonctionne.

**Rédaction de specs.** Je commence avec une idée approximative : "J'ai besoin d'un élément de roadmap pour le nouveau flux d'onboarding." Claude connaît mon template de `CLAUDE.md`, donc il pose les bonnes questions - quel est le problème, qui est affecté, quelle est la portée - et rédige un document structuré. J'édite, affine, et quand c'est prêt, je dis à Claude de créer l'epic GitHub.

**Recherche de contexte.** "Qu'avons-nous décidé concernant le rate limiting ?" Claude cherche dans Notion les notes de réunion et les docs de décision, trouve la discussion pertinente et résume le résultat. Plus besoin de fouiller dans des mois de notes.

**Fin de semaine.** "Rédige un résumé de ce qui a été livré cette semaine pour la mise à jour stakeholder." Claude interroge les issues fermées, les groupe par stream et rédige un résumé lisible. Je revois, ajuste le cadrage et envoie.

Les templates dans `CLAUDE.md` assurent une sortie cohérente. Quand je demande un élément de roadmap, il suit toujours la même structure. Quand je demande un résumé hebdomadaire, il inclut toujours les mêmes sections. De la cohérence sans la monotonie.

## Ce Qui Manque Encore

La configuration n'est pas complète. Quelques lacunes que je contourne activement :

**Outils de données.** Je vis dans Looker et Sigma pour les analytics - métriques d'usage, données de funnel, analyse de cohortes. Il n'y a pas de MCP pour l'un ou l'autre. Quand j'ai besoin que Claude m'aide à analyser des données ou à rédiger un résumé qui inclut des métriques, j'exporte manuellement des CSV dans un dossier `data_reports/` de mon workspace. Ça fonctionne, mais c'est de la friction. Chaque fois que je veux des données fraîches, je retourne dans le navigateur cliquer sur des boutons d'export.

**Google Docs.** Beaucoup de travail cross-fonctionnel se passe dans Google Docs - specs partagées, PRDs collaboratifs, commentaires des stakeholders. Pas de MCP là non plus. Même contournement : exporter en markdown ou PDF, le déposer dans le workspace. Claude peut le lire, mais c'est un instantané, pas une connexion live.

**Gestion des tâches.** Tout n'est pas un epic de roadmap. J'ai des todos personnels - "relancer le design sur les maquettes," "revoir la proposition d'API," "préparer des questions pour l'appel client." Ceux-ci n'ont pas leur place dans les issues GitHub. Je cherche encore la bonne façon de les suivre. Pour l'instant ils vivent dans un simple fichier markdown, mais j'aimerais une intégration plus serrée - peut-être un MCP Linear ou Todoist que Claude pourrait interroger et mettre à jour.

L'écosystème MCP grandit rapidement. Slack, Linear, les intégrations calendrier émergent tous. Mais pour l'instant, le workflow d'export manuel est un pont nécessaire pour les outils qui n'ont pas encore de connexions natives.

## Ce Qui Fonctionne

Les workflows à forte lecture sont là où Claude brille. Interroger les issues, chercher dans les docs, résumer les statuts - ces tâches me prenaient dix minutes de clics, maintenant elles prennent trente secondes. Les workflows à forte écriture nécessitent plus de jugement humain. Claude peut rédiger une spec, mais j'ai encore besoin de réfléchir à la stratégie.

La combinaison de GitHub + Notion + docs locaux couvre la plupart de mon travail quotidien. Quand j'ai besoin de contexte analytics, l'export manuel ajoute une étape, mais une fois les données dans le workspace, Claude les gère bien.

La vision plus large est l'IA comme co-pilote PM, pas comme remplacement. Claude ne prend pas de décisions produit. Il ne parle pas aux clients, ne négocie pas avec les stakeholders, ne ressent pas l'intuition que quelque chose ne va pas. Mais il gère les parties mécaniques du job - l'interrogation, le formatage, la recherche, la rédaction - pour que je puisse me concentrer sur les parties qui nécessitent vraiment du jugement humain.

Si vous êtes un PM curieux des outils IA, essayez Claude Code. Configurez un workspace simple, connectez GitHub, ajoutez vos conventions à `CLAUDE.md`, et voyez comment ça s'intègre à votre workflow. Il ne s'agit pas de remplacer vos outils existants. Il s'agit d'ajouter une couche d'intelligence qui les connecte ensemble.

Et si vous construisez quelque chose d'intéressant, partagez votre configuration. J'aimerais voir comment d'autres PMs utilisent cela.
