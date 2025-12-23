---
title: "Docker Cagent : Runtime pour Agents IA"
summary: "Les agents IA se développent rapidement, mais la plupart fonctionnent comme des scripts fragiles liés à une machine locale. Nous avons construit cagent pour containeriser, standardiser et mettre à l'échelle les agents à la manière Docker—et nous l'avons open sourcé."
description: "Les agents IA se développent rapidement, mais la plupart fonctionnent comme des scripts fragiles liés à une machine locale. Nous avons construit cagent pour containeriser, standardiser et mettre à l'échelle les agents à la manière Docker—et nous l'avons open sourcé."
categories: [IA, Outils Développeur, Open Source]
tags: [Docker, Agents, MCP, OSS, Tutoriel]
date: 2025-09-03
draft: false
---


Au cours de l'année passée, j'ai passé d'innombrables heures à expérimenter avec des agents IA—construisant des prototypes, cassant des choses et testant des outils comme Claude Code, Codex et d'autres. Chaque tentative m'a appris quelque chose de nouveau, mais a aussi fait remonter les mêmes frustrations : des scripts qui ne fonctionnaient que sur mon laptop, des configurations fragiles qui ne passaient pas à l'échelle, aucun moyen clair de configurer ce que chaque agent devait faire ou quels outils il pouvait utiliser, et des difficultés à faire se comporter les agents comme je le voulais—encore moins à obtenir des résultats extraordinaires. Trop souvent, je me retrouvais à combattre des bizarreries d'environnement au lieu d'explorer ce que les agents pouvaient réellement accomplir.

C'est pourquoi je suis si enthousiaste par ce sur quoi nous avons travaillé chez Docker. Nous nous sommes posé une question simple : et si exécuter des agents pouvait être aussi facile, portable et fiable qu'exécuter des conteneurs ? Le résultat est **cagent**, un nouveau runtime pour agents IA, construit pour rendre l'expérimentation plus simple et la collaboration plus facile - et aujourd'hui, nous le rendons open source.

## Découvrez cagent

{{< github repo="docker/cagent" >}}

[`cagent`](https://github.com/docker/cagent) est un runtime open source, Docker-native conçu pour faire des agents des citoyens de première classe dans votre workflow de développeur. Au lieu de scripts fragiles ou de configurations ad-hoc, cagent vous donne une façon cohérente de définir, exécuter et partager des agents en utilisant les mêmes patterns que vous connaissez déjà de Docker.

À son cœur, cagent est un **runtime multi-agent**. Vous pouvez définir un seul agent avec un simple fichier YAML, ou orchestrer une équipe entière d'agents spécialisés qui collaborent sur des tâches. Chaque agent peut être configuré avec son propre rôle, personnalité et accès aux outils externes.

### Fournisseurs supportés
Out of the box, cagent supporte plusieurs fournisseurs de modèles incluant OpenAI, Anthropic, Google Gemini et d'autres. Vous pouvez facilement passer de l'un à l'autre via la configuration, donc vous n'êtes pas verrouillé sur un seul vendeur.

### Outils et intégration MCP
Les agents peuvent recevoir des outils pour étendre leurs capacités. cagent parle le **Model Context Protocol (MCP)**, ce qui signifie que vos agents peuvent se connecter à un large écosystème de serveurs MCP—que ce soit la recherche (comme DuckDuckGo), l'accès au système de fichiers ou des APIs custom que vous exposez. Vous pouvez décider quels outils chaque agent reçoit, rendant leur configuration explicite et reproductible.

De plus, cagent fonctionne parfaitement avec le [Docker MCP Gateway](https://github.com/docker/mcp-gateway) et le [MCP Catalog](https://github.com/docker/mcp-registry) ([Docker Hub MCP](https://hub.docker.com/mcp)), qui vous permettent d'ajouter des outils à vos agents de manière plus sécurisée et seamless. Le gateway et le catalog sont packagés avec Docker Desktop, donc si vous exécutez Docker Desktop, vous pouvez les utiliser out of the box.

### Configurations multi-agent
cagent rend simple l'orchestration d'équipes d'agents. Un fichier agent pourrait décrire un agent chercheur, un agent codeur et un agent réviseur, chacun avec ses propres responsabilités et outils. Quand vous exécutez un fichier/image agent avec cagent, les agents démarrent ensemble, collaborent et se passent des tâches entre eux. Vous pouvez même mélanger les modèles et fournisseurs entre agents—un agent pourrait utiliser OpenAI, un autre Anthropic et un autre Gemini—le tout dans la même configuration.

### Sauvegarder et partager
Chaque configuration que vous créez peut être partagée facilement. Vous pouvez définir un agent (ou une équipe) de manière déclarative dans un fichier YAML, le commiter en version control et le partager comme n'importe quel autre artefact de code. Ou vous pouvez packager des agents comme images Docker pour une distribution entièrement portable.

### En bref
Avec cagent vous pouvez :

- **Containeriser des agents** pour qu'ils fonctionnent partout où Docker fonctionne, avec isolation et reproductibilité par défaut.
- **Configurer comportements et outils** de manière déclarative—décider ce que fait chaque agent, à quels fournisseurs et outils MCP il peut accéder, et comment ils interagissent.
- **Orchestrer plusieurs agents** en équipe, les laissant collaborer sur des tâches avec des interfaces propres.
- **Expérimenter rapidement** sans vous soucier du drift de configuration, de l'enfer des dépendances ou des incompatibilités d'environnement.
- **Sauvegarder et partager des agents** via des fichiers YAML ou des images Docker, rendant les expériences reproductibles et la collaboration seamless.

En bref : cagent vous donne une base pour passer d'« expériences bidouillées » à des workflows d'agents répétables et composables—tout en restant léger et facile à utiliser.


## Installation et configuration

Démarrer avec `cagent` est simple.

### Installation

Des binaires pré-compilés pour Windows, macOS et Linux sont disponibles sur la [page releases](https://github.com/docker/cagent/releases).

1. Téléchargez le binaire pour votre plateforme.
2. Sur macOS et Linux, rendez-le exécutable :
   ```sh
   chmod +x /path/to/downloads/cagent-linux-amd64
   ```
3. Optionnellement, renommez-le en `cagent` et déplacez-le dans votre `PATH`.

### Configurez vos clés API

Selon les fournisseurs que vous voulez utiliser, configurez les clés appropriées dans votre environnement :

```bash
# Pour les modèles OpenAI
export OPENAI_API_KEY=your_api_key_here

# Pour les modèles Anthropic
export ANTHROPIC_API_KEY=your_api_key_here

# Pour les modèles Gemini
export GOOGLE_API_KEY=your_api_key_here
```

Vous n'avez besoin de configurer que les clés pour les fournisseurs que vous prévoyez d'utiliser. Si plusieurs sont configurées, `cagent` choisira dans l'ordre (Anthropic → OpenAI → Google) sauf si vous surchargez avec `--model`.

Avec le binaire installé et au moins une clé API configurée, vous êtes prêt à créer et exécuter votre premier agent.

## Créer un nouvel agent de zéro

L'une des fonctionnalités les plus puissantes de `cagent` est la capacité de générer de nouveaux agents (ou même des équipes multi-agents) de zéro avec une seule commande : `cagent new`.

Quand vous exécutez `cagent new`, on vous demandera de décrire ce que vous voulez que votre agent (ou équipe d'agents) fasse. De là, `cagent` génère automatiquement la configuration YAML, choisissant un fournisseur/modèle basé sur vos clés API disponibles (Anthropic → OpenAI → Google par défaut) sauf si vous surchargez avec `--model`. `cagent` suggérera aussi un ensemble d'outils dont l'agent pourrait avoir besoin basé sur votre description.

En coulisses, `cagent` utilise un agent générateur intégré pour bootstrapper le YAML pour vous. Vous pouvez immédiatement exécuter le fichier généré, le modifier ou le partager. Dans l'exemple ci-dessous, je créerai un agent inspiré de Tyler Durden de *Fight Club*.

{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler.webp" alt="Prompt de création d'agent Tyler Durden" >}}

Après avoir décrit votre agent, `cagent` génère un fichier YAML qui spécifie le rôle de l'agent, fournisseur, modèle et accès aux outils. Cela rend la configuration de votre agent explicite, reproductible et facile à modifier.


{{< figure src="/posts/202509-docker-cagent/img/cagent new tyler result.webp" alt="YAML d'agent généré pour l'exemple Tyler Durden" >}}

Voici un exemple du YAML généré pour l'agent Tyler Durden :

```yaml
version: "1"

models:
  anthropic:
    provider: anthropic
    model: claude-sonnet-4-0
    max_tokens: 64000

agents:
  root:
    model: anthropic
    description: "An agent that embodies Tyler Durden's philosophical mindset - challenging consumerism, questioning authority, and speaking with raw, unfiltered truth"
    instruction: |
      You are an agent inspired by Tyler Durden's philosophy and speaking style. You should:

      SPEAKING STYLE:
      - Be direct, provocative, and uncompromising
      - Use short, punchy statements mixed with longer philosophical rants
      - Challenge conventional thinking and societal norms
      - Speak with confidence and authority
      - Use visceral, concrete imagery in your explanations
      - Be brutally honest, even when uncomfortable

      PHILOSOPHICAL APPROACH:
      - Question consumerism and materialism
      - Challenge people to break free from societal expectations
      - Emphasize authenticity over appearance
      - Focus on what truly matters vs. what society says should matter
      - Promote self-reliance and personal transformation
      - Critique corporate culture and meaningless work

      COMMUNICATION PATTERNS:
      - Start with bold, attention-grabbing statements
      - Use analogies involving decay, destruction, and renewal
      - Ask hard questions that make people uncomfortable
      - Deliver uncomfortable truths about modern life
      - End with calls to action or philosophical challenges

      TOPICS TO ADDRESS:
      - The meaninglessness of consumer culture
      - Breaking free from others' expectations
      - Finding authentic purpose and meaning
      - The importance of facing harsh realities
      - Personal transformation through destruction of false selves
      - Questioning authority and social structures

      Remember: You're not encouraging actual violence or illegal activity - you're using Tyler's philosophical lens to challenge thinking about society, purpose, and authenticity. Focus on psychological and philosophical rebellion rather than physical destruction.
    toolsets: []
    add_date: false
    add_environment_info: false
```

Vous pouvez affiner davantage les outils auxquels l'agent peut accéder, y compris les outils MCP comme la recherche, le système de fichiers ou des APIs custom. Cette section outils explicite garantit que votre agent n'a que les capacités que vous définissez.

{{< figure src="/posts/202509-docker-cagent/img/cagent run tyler example.webp" alt="Exécution de l'agent Tyler Durden" >}}

Cela rend incroyablement rapide de passer d'une idée à une configuration d'agent fonctionnelle. Que vous prototypiez un seul agent assistant ou conceviez une équipe de spécialistes, `cagent new` vous permet de partir du langage naturel et d'obtenir une config exécutable en secondes.

## Exécuter vos agents

La commande `cagent run` est comment vous donnez vie à vos agents. Elle prend un fichier YAML (ou même une image Docker packagée) et démarre les agents que vous avez définis à l'intérieur. La commande gère l'orchestration, la communication inter-agent et l'accès aux outils—tout en maintenant l'isolation et la reproductibilité via la containerisation.

Quand vous exécutez `cagent run`, plusieurs choses se passent :
- Chaque agent est initialisé avec son modèle, rôle et outils spécifiés
- Le runtime configure des canaux de communication sécurisés entre agents
- L'accès aux outils est configuré selon vos spécifications YAML
- L'agent principal (typiquement appelé "root") démarre et peut déléguer à d'autres agents selon les besoins

### Exemple : Construire un jeu d'échecs

Parcourons un exemple pratique en utilisant l'équipe de développement multi-agent de [`examples/dev-team.yaml`](https://github.com/docker/cagent/blob/main/examples/dev-team.yaml). Cette configuration définit trois agents spécialisés travaillant ensemble :

- **Product Manager** : Coordonne le projet, décompose les exigences et gère les itérations
- **Designer** : Se concentre sur l'expérience utilisateur, le design visuel et la planification de l'interface
- **Engineer** : Gère l'implémentation, le coding et l'architecture technique

Pour cet exemple, je copierai la configuration agent dans mon répertoire de projet et l'exécuterai de là, donnant aux agents le bon répertoire de travail pour créer et modifier des fichiers :

```zsh
# Copiez la configuration dev team dans votre répertoire de projet
cp dev-team.yaml /path/to/my-chess-project/
cd /path/to/my-chess-project/

# Exécutez les agents depuis le répertoire de projet
cagent run dev-team.yaml
```

Cette approche garantit que quand l'agent Engineer crée des fichiers ou que l'équipe a besoin d'itérer sur le code, tout est créé au bon endroit et les agents peuvent facilement accéder et modifier les fichiers du projet.

Puis je demande à cette équipe de "construire un jeu d'échecs".

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 1.webp" alt="Demande initiale de construire un jeu d'échecs" >}}

L'agent Product Manager prend la tête, décomposant immédiatement le jeu d'échecs en composants gérables. Le Product Manager se coordonne ensuite avec l'agent Designer pour planifier l'interface utilisateur. Le Designer considère le layout visuel, les interactions utilisateur et l'expérience globale. Cette collaboration se produit automatiquement—les agents communiquent via le runtime cagent sans coordination manuelle. Plusieurs fichiers sont générés pour esquisser la structure du projet et le design initial (*note : fonctionnalité spécifique des agents dev-team*).

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 2.webp" alt="Product Manager et designer définissant les exigences et se coordonnant avec l'équipe" >}}

L'agent Engineer est impliqué pour planifier l'implémentation technique. Il réfléchit à la structure du code, l'architecture HTML/CSS/JavaScript et comment implémenter la logique du jeu efficacement. L'engineer peut accéder aux outils filesystem pour créer et modifier des fichiers.

L'équipe travaille de manière itérative—l'Engineer implémente des fonctionnalités, le Designer fournit des retours sur l'interface et le Product Manager suit le progrès. Chaque agent maintient sa perspective spécialisée tout en contribuant à l'objectif commun.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 3.webp" alt="Designer planifiant l'interface utilisateur" >}}

Le résultat final est un jeu d'échecs fonctionnel avec une logique de jeu correcte, une interface visuelle et des interactions utilisateur. Les agents ont collaboré pour livrer quelque chose de plus sophistiqué que ce qu'un seul agent aurait produit seul.

{{< figure src="/posts/202509-docker-cagent/img/build a chess game 4.webp" alt="Engineer implémentant la solution technique" >}}


{{< figure src="/posts/202509-docker-cagent/img/build a chess game 5.webp" alt="Implémentation finale avec jeu d'échecs fonctionnel" >}}

## Ce qui rend cela puissant

Cet exemple démontre plusieurs avantages clés de l'approche multi-agent de cagent :

**Expertise spécialisée** : Chaque agent se concentre sur ce qu'il fait le mieux—planification produit, réflexion design ou implémentation technique—plutôt que d'essayer de tout gérer.

**Collaboration naturelle** : Les agents communiquent et se coordonnent automatiquement. Vous n'avez pas besoin de passer manuellement des informations entre eux ou de gérer leurs interactions.

**Développement itératif** : Comme les équipes humaines, les agents travaillent par itérations, raffinant et améliorant la solution au fur et à mesure.

**Résultats reproductibles** : Parce que tout est défini en configuration YAML, vous pouvez exécuter exactement la même configuration d'équipe encore, la partager avec d'autres ou la modifier pour différents projets.

**Intégration d'outils** : Chaque agent peut être configuré avec différents outils—l'Engineer pourrait avoir accès au filesystem pour écrire du code, tandis que le Designer a accès aux APIs de génération d'images.

Vous pouvez personnaliser cette équipe en modifiant le fichier YAML—changez leurs rôles, ajustez leurs personnalités, donnez-leur différents outils ou même échangez différents modèles pour chaque agent. La configuration rend l'expérimentation facile tout en gardant tout reproductible.

## Commencez avec cagent

Prêt à containeriser vos workflows IA ? Le dépôt `cagent` inclut des exemples et templates pour démarrer :

{{< github repo="docker/cagent" >}}

**Options quick start :**
- **Créez votre premier agent** : Téléchargez le binaire, configurez votre clé API et exécutez `cagent new` pour créer votre premier agent
- **Expérimentez avec des équipes multi-agents** : Copiez `dev-team.yaml` dans votre projet et regardez les agents collaborer sur des tâches réelles
- **Explorez les exemples** : Parcourez les configurations d'agents pré-construites pour différents cas d'usage dans le dépôt

**Rejoignez la communauté :**
- **Partagez vos créations** : Retrouvez-nous sur [Slack](https://dockercommunity.slack.com/archives/C09DASHHRU4) pour présenter les agents et workflows que vous construisez avec cagent
- **Contribuez des exemples** : Soumettez des pull requests avec des templates d'agents pour des workflows communs
- **Discutez des cas d'usage** : Rejoignez les conversations et dites-nous comment nous pouvons l'améliorer

Que vous construisiez de l'automatisation personnelle, prototypiez des workflows IA ou mettiez à l'échelle des systèmes d'agents en production, cagent vous donne la base Docker-native pour le rendre fiable et partageable.

L'avenir du développement IA est collaboratif, containerisé et reproductible. Construisons-le ensemble.
