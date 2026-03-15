---
title: "Construire Gordon : l'agent IA de Docker"
summary: "Un regard dans les coulisses de la construction de Gordon - l'agent IA de Docker. Du choix de docker-agent comme runtime, à l'analyse des questions des utilisateurs, en passant par la conception de l'UX, la mise en place des évaluations et la création des bons outils."
description: "Un regard dans les coulisses de la construction de Gordon - l'agent IA de Docker. Du choix de docker-agent comme runtime, à l'analyse des questions des utilisateurs, en passant par la conception de l'UX, la mise en place des évaluations et la création des bons outils."
categories: [IA, Outils pour développeurs]
tags: [Docker, Gordon, Agents, AI, docker-agent]
date: 2026-03-13
draft: false
showTableOfContents: true
---

Au cours de l'année écoulée, j'ai fait partie de l'équipe qui a construit [Gordon](https://docs.docker.com/ai/gordon/) - l'agent IA de Docker. Si vous avez utilisé Docker Desktop récemment, vous l'avez probablement remarqué : cliquez sur l'icône Gordon dans la barre latérale ou lancez `docker ai` dans votre terminal, et vous obtenez un agent qui comprend vraiment vos conteneurs, vos images et votre environnement. Il ne se contente pas de répondre à des questions - il agit.

Mais construire un agent IA auquel des millions de développeurs font confiance pour leur code, leurs conteneurs, leurs images, leurs fichiers Compose, leurs builds et leurs pipelines CI n'a pas été simple. Voici l'histoire de comment nous l'avons construit - les décisions que nous avons prises, les erreurs que nous avons commises, et ce que nous avons appris en chemin.

## Gordon v1

La première version de Gordon a été construite avant que la plupart des outils agentiques que nous avons aujourd'hui n'existent. Gordon alimente l'expérience IA de Docker depuis le début - sur [docs.docker.com](https://docs.docker.com), dans le support, et à l'intérieur de Docker Desktop. Nous avons écrit la boucle agentique initiale avec LangGraph, mis en place un système RAG sur la documentation Docker pour que Gordon puisse répondre à des questions ancrées dans du contenu réel, et construit ce que nous appelions des « recettes » - des chemins de code déterministes qui géraient des tâches spécifiques comme la génération d'un Dockerfile ou le débogage d'un conteneur. Considérez les recettes comme le prédécesseur du MCP et des appels d'outils, mais entièrement personnalisées. Chaque recette était un flux artisanal : détecter l'intention de l'utilisateur, rassembler le bon contexte, et exécuter une séquence d'étapes que nous savions fonctionner.

Ça a été livré. Les gens l'ont utilisé. Et nous avons énormément appris - ce dont les utilisateurs avaient vraiment besoin, là où le LLM avait du mal, et à quel point les flux déterministes deviennent fragiles quand on essaie de couvrir tous les cas limites. Nous construisions aussi sur des modèles de l'ère GPT-4o - capables, mais loin de ce qui est disponible aujourd'hui. Même les plus petits modèles actuels comme Haiku surpassent ce que nous avions à l'époque, et il s'est passé moins d'un an.

Mais pendant que Gordon v1 était en production, le monde autour de nous a évolué vite. MCP est devenu un standard pour l'intégration d'outils. Les appels d'outils ont été intégrés nativement dans tous les grands modèles. Les frameworks agentiques ont mûri. Les modèles eux-mêmes ont fait un bond considérable. L'écart entre ce que nous avions construit et ce qui était désormais possible ne cessait de grandir.

Nous avons donc décidé de reconstruire Gordon de zéro, en tirant parti de tout ce que nous avions appris de la v1 et en combinant cela avec les nouveaux standards et l'infrastructure qui avaient émergé depuis le lancement.

## Fondations

La première question pour la reconstruction était fondamentale : sur quoi bâtir ?

Nous aurions pu itérer sur la stack LangGraph, mais nous développions [docker-agent](https://github.com/docker/docker-agent) (initialement appelé cagent) comme runtime open source pour les agents IA, et il était logique de manger notre propre cuisine.

{{< github repo="docker/docker-agent" >}}

docker-agent offre une manière déclarative de définir des agents en YAML - leur modèle, leurs instructions, leurs outils, et la façon dont ils collaborent. Au lieu d'écrire du code impératif pour gérer les boucles de conversation, la distribution des outils et les fenêtres de contexte, vous décrivez ce que l'agent doit faire et laissez le runtime s'occuper du reste. Écrit presque entièrement en Go, il se distribue comme un plugin CLI Docker - `docker agent run`, `docker agent new`, etc. - ce qui lui donne un caractère naturel dans le flux de travail Docker.

Pour Gordon, cela signifiait que nous pouvions itérer rapidement. Modifier le prompt système ? Éditez le YAML. Ajouter un nouvel outil ? Ajoutez-le à l'ensemble d'outils. Changer de modèle ? Une ligne suffit. Pas de redéploiement de code personnalisé, pas de reconstruction de pipelines. La définition de l'agent, c'est le produit.

L'un des plus grands avantages de construire sur docker-agent est la distribution. Les définitions d'agents sont packagées et partagées comme des artefacts OCI - le même format que Docker utilise pour les images de conteneurs. Cela signifie que nous pouvons faire `docker agent push` d'une nouvelle version de Gordon vers Docker Hub et `docker agent pull` de l'autre côté. Les mises à jour se déploient instantanément sans reconstruire de code, parce que la boucle de l'agent n'est pas intégrée dans l'application - elle vit dans le runtime. La définition de Gordon n'est qu'un fichier YAML sur Docker Hub. Quand nous poussons une nouvelle version, chaque installation de Docker Desktop la récupère (c'est un peu plus complexe que ça, mais vous voyez l'idée). Pas de mises à jour binaires, pas de revues d'app store, pas de scripts de migration. Cette séparation entre le runtime (docker-agent) et la définition de l'agent (le YAML) est ce qui fait fonctionner l'ensemble à l'échelle.

docker-agent est livré avec des ensembles d'outils intégrés - `filesystem` pour lire et écrire des fichiers, `shell` pour l'exécution de commandes, `think` pour un bloc-notes de raisonnement, `todo` pour le suivi des tâches, et `memory` pour la persistance entre les sessions. En plus de ça, n'importe quel serveur MCP peut être branché comme outil. Vous pouvez aussi définir des outils de script personnalisés directement dans le YAML - enveloppez un script shell ou un endpoint API et exposez-le à l'agent avec des arguments typés.

Utiliser docker-agent signifie également que Gordon bénéficie de tout ce que le runtime fournit nativement - support multi-fournisseurs (OpenAI, Anthropic, Gemini, Bedrock, Mistral, et même des modèles locaux via Docker Model Runner), intégration MCP, RAG intégré avec plusieurs stratégies de récupération, orchestration multi-agents avec sous-agents et transferts, et distribution basée sur OCI. Quand nous améliorons docker-agent, Gordon s'améliore aussi. Et quand Gordon pousse les limites de docker-agent, nous améliorons le runtime pour tout le monde.

Nous utilisons docker-agent pour construire le docker agent. Ce n'est pas un slogan - c'est comme nous travaillons réellement.

## Comprendre ce que les utilisateurs veulent vraiment

Construire un agent IA est facile. En construire un qui soit vraiment utile, c'est difficile. La différence se résume à comprendre ce que les utilisateurs demandent réellement.

Au début, nous avons passé beaucoup de temps à analyser comment les gens interagissent avec Docker. Quelles questions posent-ils dans les forums ? Que cherchent-ils dans la documentation ? Où bloquent-ils ? Puisque Gordon v1 alimentait déjà l'assistant IA sur [docs.docker.com](https://docs.docker.com), dans le support et à l'intérieur de Docker Desktop, nous disposions de deux sources de données inestimables : les interactions avec la documentation et le support, et les données réelles d'intention des utilisateurs issues des sessions v1 - ce que les gens demandaient à Gordon de faire, quelles recettes étaient déclenchées, où ça réussissait et où ça échouait.

Les patterns étaient clairs :

- **« Pourquoi mon conteneur ne démarre pas ? »** - Le débogage est le cas d'usage numéro un. Codes de sortie, erreurs dans les logs, problèmes réseau, problèmes de permissions.
- **« Comment je containerise ça ? »** - Les gens ont une application et veulent un bon Dockerfile. Pas un générique tiré d'un tutoriel - un qui comprend la structure de leur projet.
- **« Comment faire X avec Docker ? »** - Des opérations courantes simples si vous connaissez la commande, mais qui nécessitent un détour par la documentation si ce n'est pas le cas.

Ces trois catégories ont tout façonné. Gordon n'est pas un chatbot généraliste qui se trouve à connaître Docker. C'est un agent spécifiquement conçu autour de ces flux de travail - déboguer, construire et gérer. Chaque outil, chaque prompt, chaque décision UX découle de là.

Nous avons aussi appris que les utilisateurs ne posent pas des questions propres et bien formulées. Ils collent des messages d'erreur. Ils décrivent des symptômes, pas des causes. Ils fournissent un contexte incomplet. Un bon agent ne peut pas simplement faire de la correspondance de mots-clés - il doit comprendre l'intention, poser des questions de clarification si nécessaire, et aller enquêter de lui-même.

## Construire l'agent

Avec docker-agent comme runtime et une vision claire de ce dont les utilisateurs avaient besoin, nous avons commencé à construire. Ce qui a suivi fut des semaines d'itération rapide - et l'agent a changé radicalement en cours de route. Gordon est distribué comme artefact OCI sur Docker Hub (`docker/gordon`), et vous pouvez en réalité télécharger n'importe quelle version avec `cagent pull docker/gordon:<tag>` et lire la définition complète de l'agent. L'évolution est là, dans l'historique des versions.

### Du swarm multi-agents à l'agent unique

Notre première tentative pour Gordon v2 était ambitieuse. Nous avons conçu une architecture multi-agents avec neuf sous-agents spécialisés : un expert Docker, un expert en code, un expert en déploiement, un spécialiste Kubernetes, un agent réseau, un agent sécurité, un agent d'intégration GitHub, un expert en migration DHI, et même un agent Notion. L'agent racine jouait le rôle d'orchestrateur - il analysait la demande de l'utilisateur, déléguait au bon spécialiste et coordonnait les réponses au sein de l'équipe. Des todos partagés permettaient de faire circuler le contexte entre les agents.

C'était élégant en théorie. En pratique, c'était lent et imprévisible. La délégation ajoutait de la latence. L'orchestrateur choisissait parfois le mauvais sous-agent. Le contexte se perdait dans les transferts. Et plus nous ajoutions d'agents, plus il devenait difficile de raisonner sur le comportement global du système.

Nous avons donc tout consolidé. Nous avons migré presque tout vers un agent racine unique avec un seul prompt système soigneusement conçu. Le seul sous-agent qui a survécu était le spécialiste de migration DHI, parce que ce flux de travail est suffisamment distinct pour justifier son propre agent avec ses propres outils et instructions. Tout le reste - les opérations Docker, le débogage, la containerisation, l'aide au développement général - vit dans l'agent racine.

Le résultat était plus rapide, plus prévisible et plus facile à faire évoluer. Un agent, un prompt, un seul endroit où chercher quand quelque chose ne va pas.

### Choix du modèle

Le choix du modèle a aussi évolué. Les premières versions de la v2 tournaient sur Claude Sonnet 4.5 - un modèle puissant, mais coûteux à l'échelle à laquelle Gordon opère. En affinant le prompt et les outils, nous avons découvert que nous pouvions obtenir la même qualité avec Claude Haiku 4.5 - un modèle bien plus petit, plus rapide et moins cher. L'astuce était d'investir dans de meilleurs prompts. Chaque fois que nous améliorions les instructions - des descriptions d'outils plus précises, des règles comportementales plus claires, de meilleurs exemples - l'écart entre Sonnet et Haiku se réduisait jusqu'à disparaître pour nos cas d'usage.

Gordon tourne actuellement sur Haiku 4.5 pour la plupart de ses interactions. La différence de vitesse est perceptible - les réponses semblent vives, les appels d'outils se résolvent plus rapidement, et le coût par conversation a considérablement baissé. Le support multi-fournisseurs de docker-agent signifie que nous pouvons changer de modèle avec une modification d'une seule ligne dans le YAML, donc nous testons toujours les nouveaux modèles dès leur sortie.

### L'ingénierie de prompt comme développement produit

La plus grande surprise a été de constater à quel point une grande partie du produit réside dans le prompt système. Le prompt de Gordon n'est pas un paragraphe d'instructions - c'est une spécification détaillée couvrant l'identité, le style de communication, les patterns d'accès aux fichiers, l'utilisation de la base de connaissances, le dimensionnement des réponses, les bonnes pratiques pour les Dockerfiles, les flux de débogage et les règles de sécurité.

Voici à quoi ressemble la définition actuelle de Gordon :

```yaml
version: "2"

models:
  brain:
    provider: anthropic
    model: claude-haiku-4-5-20251001

agents:
  root:
    model: brain
    description: Gordon - Docker Agent
    instruction: |
      You are Gordon, an AI assistant created by Docker Inc.,
      specialized in Docker and Docker-related products, tools,
      and technologies...
    sub_agents:
      - DHI migration
    toolsets:
      - type: api
        api_config:
          name: knowledge_base
          endpoint: https://ai-backend-service.docker.com/docs
          ...
      - type: filesystem
      - type: shell
      - type: fetch
      - type: todo

  DHI migration:
    model: brain
    description: Migrates a Dockerfile to use Docker Hardened Images
    toolsets:
      - type: api
        api_config:
          name: get_image_tags
          endpoint: https://ai-backend-service.docker.com/dhi
          ...
      - type: filesystem
      - type: shell
```

Nous avons itéré sur le prompt en permanence. Chaque fois que nous trouvions un point de défaillance - Gordon trop verbeux, choisissant le mauvais outil, posant des questions de clarification inutiles, utilisant des mots de remplissage - nous ajoutions quelque chose pour y remédier : une nouvelle évaluation, une nouvelle instruction, etc. Le prompt a grandi organiquement à partir des interactions réelles des utilisateurs et des échecs d'évaluation. Ce n'est pas du beau code, mais ça fonctionne. Et voilà la chose : nous n'écrivons plus la plupart de ces prompts à la main. On en parle plus après avoir abordé les évaluations.

## L'expérience utilisateur

L'UX d'un agent IA est fondamentalement différente de celle d'un chatbot. Un chatbot vous donne du texte. Un agent veut faire des choses - lancer des commandes, modifier des fichiers, créer des configurations. Cela change tout dans la façon dont vous concevez l'interaction.

Le principe fondamental sur lequel nous nous sommes arrêtés : **montrer, puis agir**.

Gordon n'exécute jamais quoi que ce soit sans vous montrer exactement ce qu'il envisage de faire d'abord. Vous voulez lancer une commande shell ? Vous voyez la commande. Vous voulez modifier un Dockerfile ? Vous voyez le diff. Vous voulez arrêter un conteneur ? Vous voyez lequel. Chaque action requiert votre approbation explicite.

Ce n'est pas seulement une fonctionnalité de sécurité - c'est un mécanisme de construction de la confiance. Quand vous utilisez Gordon pour la première fois, vous approuvez chaque action. Avec le temps, vous commencez à lui faire confiance parce que vous l'avez vu prendre de bonnes décisions. Vous approuvez plus vite, non pas parce que vous êtes moins vigilant, mais parce que vous avez développé une confiance dans ce qu'il fait.

Nous avons aussi rendu Gordon disponible à deux endroits : Docker Desktop (GUI) et la CLI (`docker ai`). L'expérience Desktop est visuelle - vous voyez vos conteneurs, images et logs à côté de la conversation. L'expérience CLI est pour les développeurs qui vivent dans le terminal et veulent y rester. Le même agent, les mêmes capacités, des contextes différents.

Une chose que nous avons délibérément évitée : le mode autonome. Gordon ne va pas faire dix choses pendant que vous ne regardez pas. C'est un agent collaboratif - il travaille avec vous, pas à votre place. Dans un monde où les développeurs se méfient à juste titre des outils IA qui apportent des modifications non supervisées à leur infrastructure, c'est important.

## Outils : ce que Gordon peut vraiment faire

Un LLM sans outils n'est qu'un générateur de texte. Ce qui fait de Gordon un agent, c'est sa capacité à agir. Et trouver les bons outils a été l'une des parties les plus difficiles du projet.

L'architecture de Gordon repose sur une séparation client-serveur. Le backend vit sur les serveurs de Docker, tandis que le client est une CLI intégrée à Docker Desktop qui tourne sur la machine de l'utilisateur. Le client gère l'accès local - lire vos fichiers, exécuter des commandes, interagir avec le daemon Docker - tandis que le backend gère l'orchestration du LLM. Quand vous utilisez Gordon via Docker Desktop, l'utilisateur peut sélectionner un répertoire de travail pour délimiter son accès - ou un répertoire par défaut est utilisé. Quand vous utilisez `docker ai` depuis le terminal, il fonctionne avec le répertoire dans lequel vous vous trouvez.

Les ensembles d'outils de base de Gordon sont étonnamment minimalistes :

- **Filesystem** - Lire, écrire, modifier et lister les fichiers dans le répertoire de travail de l'utilisateur. C'est ainsi que Gordon inspecte la structure de votre projet, lit les Dockerfiles et écrit de nouvelles configurations.
- **Shell** - Exécuter des commandes dans le terminal de l'utilisateur (avec approbation). C'est l'outil de base - via le shell, Gordon peut lancer `docker build`, `docker compose up`, `docker scout`, `kubectl`, `git`, et tout ce qui est disponible sur la machine de l'utilisateur. Au lieu de construire des intégrations sur mesure pour chaque commande Docker, nous donnons à l'agent un accès shell et le laissons utiliser les outils CLI que les développeurs ont déjà installés.
- **Fetch** - Effectuer des requêtes HTTP vers des URLs externes pour de la documentation, des références API, ou tout contenu web dont Gordon a besoin pour répondre à une question.
- **Todo** - Suivre les tâches en plusieurs étapes pour que Gordon puisse décomposer les demandes complexes et les traiter méthodiquement.
- **Base de connaissances** - Un outil API personnalisé qui interroge le backend de documentation de Docker. Nous avons construit notre propre pipeline RAG sur les docs Docker depuis la v1, et il alimente non seulement Gordon mais aussi l'assistant de documentation et le support. Gordon accède à une documentation à jour, aux bonnes pratiques et aux patterns courants via cette infrastructure partagée.
- **Migration DHI** - Un sous-agent dédié avec son propre ensemble d'outils pour migrer les Dockerfiles vers Docker Hardened Images, incluant un outil API qui résout les tags d'images compatibles DHI.

La première étape dans le pipeline de Gordon - comprendre ce que l'utilisateur veut et déterminer quel outil utiliser - se fait via les appels d'outils avec le LLM. Ça semble simple, mais c'est l'un des domaines où nous avons passé le plus de temps à expérimenter.

Ce que nous avons appris :

**Les descriptions d'outils comptent plus que vous ne le pensez.** Une brève description vague ne suffit pas. Le LLM a besoin de descriptions détaillées avec des exemples de quand utiliser chaque outil. Nous avons constaté que des définitions d'outils plus descriptives amélioraient considérablement la précision de la sélection des outils.

**Ajouter des outils peut tout casser.** C'était contre-intuitif. Nous ajoutions un nouvel outil, et soudainement le LLM cessait de déclencher correctement les outils existants. L'ensemble d'outils n'est pas juste une liste - c'est un espace de décision, et l'élargir change la façon dont le modèle raisonne sur quel outil choisir.

**Les modèles se comportent différemment.** Les appels d'outils ne sont pas standardisés entre les fournisseurs. Ce qui fonctionne bien avec un modèle peut échouer avec un autre. Les descriptions optimales pour GPT-4 peuvent perturber Claude, et vice versa. Nous devions tester sur plusieurs fournisseurs et parfois adapter les descriptions par modèle.

**Tirez parti de l'infrastructure de connaissances existante.** Nous avons construit notre propre pipeline RAG sur la documentation Docker dès la v1, et il alimente depuis l'assistant de documentation, le support et Gordon. Pour la v2, nous n'avions pas besoin de réinventer ça - nous avons simplement branché Gordon sur le même backend via un outil API. Des années de documentation indexée, déjà éprouvée en production, disponible avec un simple appel API.

## Évaluations

Voilà la réalité des agents IA : ils échouent de manière subtile. Un chatbot qui donne une réponse légèrement erronée est ennuyeux. Un agent qui exécute la mauvaise commande est dangereux. Les évaluations ne sont pas optionnelles - elles sont essentielles.

docker-agent a des évaluations intégrées. Le flux de travail commence par l'enregistrement de sessions - vous interagissez normalement avec Gordon, et quand une conversation constitue un bon cas de test, vous la sauvegardez comme évaluation. Chaque évaluation est un fichier JSON capturant le message de l'utilisateur, les appels d'outils attendus et les critères d'évaluation : des déclarations de pertinence que la réponse doit satisfaire, la taille de réponse attendue, quels outils doivent être appelés, quels fichiers doivent être créés. Ces évaluations s'exécutent dans des conteneurs Docker pour l'isolation - chacune obtient un environnement propre, donc les résultats sont reproductibles.

`docker agent eval` exécute la suite complète, en évaluant selon plusieurs dimensions - la précision des appels d'outils (Gordon a-t-il appelé les bons outils ?), la pertinence (la réponse a-t-elle vraiment répondu à la question ?), le dimensionnement des réponses et les transferts vers les sous-agents. Un juge LLM évalue les critères de pertinence, ce qui nous permet de tester des comportements nuancés, pas seulement de la correspondance de chaînes de caractères.

C'est ainsi que nous détectons les régressions. Chaque modification de Gordon - mises à jour du prompt, changements d'outils, changements de modèle - est évaluée contre la suite complète avant d'être déployée. Dans un système agentique, tout est interconnecté. Une légère modification d'une description d'outil peut entraîner des comportements inattendus en cascade. Quand une nouvelle version d'un modèle sort, nous exécutons la suite avant de basculer. Nous ne mettons pas à jour aveuglément.

Une leçon difficile : la couverture des évaluations compte plus que leur quantité. Au début, nos évaluations ne couvraient pas les cas d'usage principaux - nous optimisions Gordon pour des cas limites tandis que les flux de travail de base (débogage de conteneurs, génération de Dockerfiles, réponses aux questions Docker) n'étaient pas bien représentés. Nous améliorions les scores sans vraiment rendre Gordon meilleur pour la plupart des utilisateurs. Une fois que nous avons rééquilibré la suite d'évaluations autour des vrais patterns d'utilisation issus des données v1, les améliorations ont commencé à correspondre à ce que les utilisateurs vivaient réellement.

## Utiliser des agents pour améliorer l'agent

Vous vous souvenez de l'aperçu sur le fait de ne plus écrire les prompts à la main ? Voici à quoi ça ressemble en pratique.

Nous avons construit un agent personnalisé - tournant sur un modèle plus puissant comme Claude Opus 4.6 - dont le rôle est d'améliorer le prompt système de Gordon. Le flux de travail : lui donner la définition actuelle de l'agent Gordon, un ensemble d'évaluations en échec, et les résultats. L'agent analyse les échecs, propose des modifications du prompt, et produit un YAML mis à jour. Nous exécutons la suite d'évaluations contre la nouvelle version. Si les scores s'améliorent sans régression, nous déployons.

Cela crée une boucle d'amélioration serrée. Un utilisateur signale que Gordon pose trop de questions de clarification au lieu de simplement lire les fichiers ? Nous ajoutons une évaluation pour ça, pointons l'agent optimiseur vers l'échec, et le laissons trouver la bonne modification du prompt. Il peut ajouter une règle comme « Lisez TOUJOURS les fichiers directement avec les outils filesystem. Ne demandez JAMAIS aux utilisateurs de coller du contenu. » - ce qui est exactement le genre d'instruction spécifique et actionnable qui fait la différence entre un bon agent et un agent frustrant.

Utiliser un modèle plus puissant comme « professeur » pour améliorer l'« élève » est délibéré. Opus a la capacité de raisonnement nécessaire pour comprendre les problèmes comportementaux subtils et concevoir des instructions précises qui guident Haiku dans la bonne direction. C'est des agents jusqu'en bas.

La plupart des règles comportementales détaillées dans le prompt de Gordon - les mots de remplissage bannis, les patterns d'accès aux fichiers, les directives de dimensionnement des réponses, les séquences de débogage - ont été rédigées ou affinées par l'agent optimiseur, pas par un humain. Nous fixons la direction et définissons ce que « bon » signifie via les évaluations. L'agent trouve comment y arriver.

## La prochaine étape : la mémoire

Pour l'instant, Gordon est sans état entre les sessions. Chaque conversation repart de zéro. Vous fermez Docker Desktop, et Gordon oublie tout - la structure de votre projet, les problèmes que vous déboguiez, les patterns de Dockerfile que vous préférez.

La mémoire est la prochaine frontière. Nous travaillons à donner à Gordon la capacité de se souvenir du contexte entre les sessions :

- **Contexte de projet** - Gordon devrait se souvenir de la structure de votre projet, de votre configuration Docker et des patterns que vous utilisez
- **Historique des interactions** - Si vous avez résolu un problème la semaine dernière, Gordon devrait le savoir quand un problème similaire survient
- **Préférences utilisateur** - Si vous utilisez toujours des builds multi-étapes, Gordon devrait par défaut vous les suggérer

C'est plus difficile que ça en a l'air. La mémoire dans les agents IA, ce n'est pas juste « sauvegarder l'historique du chat ». Il s'agit de décider ce qui vaut la peine d'être mémorisé, comment le récupérer efficacement, et comment éviter qu'il devienne obsolète. Un système de mémoire qui remonte des contextes non pertinents est pire qu'aucune mémoire.

docker-agent dispose déjà des briques de base. Il y a un ensemble d'outils `memory` qui persiste les informations dans une base de données locale entre les sessions - l'agent peut stocker et récupérer des informations au fur et à mesure de son travail. Les pièces sont là. Le défi est de le rendre naturel - Gordon devrait faire remonter les souvenirs pertinents sans y être invité, apprendre vos préférences sans qu'on le lui dise, et oublier les choses qui ne sont plus pertinentes. Comme la fenêtre glissante que j'ai utilisée en construisant [Eva](/posts/202601-building-eva/), mais plus intelligente.

L'objectif est simple : Gordon devrait se sentir comme un coéquipier qui connaît votre projet, pas comme un inconnu à qui vous devez tout réexpliquer à chaque fois.

---

Construire Gordon a été l'un des projets les plus stimulants et gratifiants sur lesquels j'ai travaillé. Les agents IA en sont encore à leurs débuts - les outils évoluent vite, les bonnes pratiques sont encore en train de s'écrire, et les attentes des utilisateurs changent avec chaque nouvelle version de modèle. Mais l'insight fondamental reste le même : les développeurs n'ont pas besoin d'un autre chatbot. Ils ont besoin d'un agent qui comprend leur environnement, qui agit, et qui gagne leur confiance une commande approuvée à la fois.

Si vous voulez essayer Gordon, mettez à jour vers la dernière version de [Docker Desktop](https://www.docker.com/products/docker-desktop/) et cherchez l'icône Gordon dans la barre latérale, ou lancez `docker ai` depuis votre terminal.

Et si vous voulez construire vos propres agents, jetez un œil à [docker-agent](https://github.com/docker/docker-agent) - c'est open source, et c'est le même runtime sur lequel tourne Gordon.
