---
title: "Le homard qui a fait trembler GitHub : du burnout aux 200K étoiles jusqu'à OpenAI"
summary: "L'histoire de Peter Steinberger, développeur autrichien passé d'une crise existentielle après la vente de sa société à 100 millions de dollars, à la création de l'agent IA open source à la croissance la plus rapide, jusqu'à son arrivée chez OpenAI - le tout en moins d'un an."
description: "L'histoire de Peter Steinberger, développeur autrichien passé d'une crise existentielle après la vente de sa société à 100 millions de dollars, à la création de l'agent IA open source à la croissance la plus rapide, jusqu'à son arrivée chez OpenAI - le tout en moins d'un an."
categories: ["Tech", "AI"]
tags: ["AI", "OpenAI", "OpenClaw", "agents", "open source", "steipete"]
date: 2026-02-18
showTableOfContents: true
---

{{< lead >}}
[Peter Steinberger](https://steipete.me/) a passé 13 ans à bâtir [PSPDFKit](https://pspdfkit.com/) jusqu'à en faire une entreprise autofinancée de premier plan. Puis il est parti, a touché le fond, et s'est retrouvé - en construisant en une seule heure un agent IA qui allait attirer 100 000 étoiles sur GitHub, survivre à une guerre de marques déposées, et lui décrocher un poste chez [OpenAI](https://openai.com/).
{{< /lead >}}

---

## Qui est steipete ?

Si vous avez évolué dans le monde du développement iOS entre 2011 et 2021, vous connaissez probablement le nom **[Peter Steinberger](https://steipete.me/)** - ou du moins son pseudo, **[@steipete](https://x.com/steipete)**. Né en Autriche, Steinberger a étudié l'informatique à l'Université technique de Vienne (TU Wien) avant de se faire un nom comme l'un des développeurs iOS les plus respectés au monde.

Ses contributions open source étaient légendaires dans la communauté Apple. **[PSTCollectionView](https://github.com/steipete/PSTCollectionView)**, un remplacement direct de UICollectionView fonctionnant sur iOS 4.3, était utilisé par des milliers d'applications. **[Aspects](https://github.com/steipete/Aspects)**, sa bibliothèque légère pour la programmation orientée aspects en Objective-C, a récolté plus de 10 000 étoiles sur GitHub et est devenue un outil incontournable pour le method swizzling.

Mais la plus grande réussite de Steinberger a été **[PSPDFKit](https://pspdfkit.com/)** - un framework PDF qu'il a lancé comme projet personnel en 2011. Le nom était un classique de l'humour développeur : PS pour Peter Steinberger, PDF parce que c'était sa fonction, et Kit parce que c'était un SDK. Contrairement à la plupart des fondateurs de startups, il n'a jamais déménagé dans la Silicon Valley. Il est resté à Vienne, a tout autofinancé, et était rentable dès le premier jour.

En 13 ans, PSPDFKit est passé d'un projet solo à une équipe internationale en télétravail de 60 à 70 personnes. Parmi les clients : Dropbox, DocuSign, SAP, IBM et Volkswagen. Près d'un milliard de personnes utilisaient des applications propulsées par ses outils. L'entreprise n'a accepté aucun financement extérieur jusqu'en 2021, lorsque [Insight Partners](https://www.insightpartners.com/) a réalisé un investissement stratégique de plus de 100 millions d'euros. Après l'opération, Steinberger et son cofondateur Martin Schurrer se sont retirés de la gestion quotidienne.

Il avait accompli l'exploit. Bâtir l'entreprise, livrer le produit, réussir la sortie.

Et puis il n'a plus rien ressenti.

---

## La crise de sens

Ce qui a suivi la sortie de PSPDFKit est quelque chose dont Steinberger a parlé ouvertement : une période de vide profond. Il l'a décrite comme une **« crise de sens »** - cette dérive existentielle qui frappe parfois les fondateurs après avoir accompli tout ce qu'ils s'étaient fixé.

Son activité sur [GitHub](https://github.com/steipete) s'est effondrée. Il a à peine touché un ordinateur pendant trois ans. La liberté financière censée être libératrice est venue avec une compagne inattendue : l'absence de but.

Ce n'est pas une histoire unique parmi les fondateurs à succès, mais ce qui rend la version de Steinberger intéressante, c'est la façon dont elle s'est terminée.

---

## L'étincelle : le code assisté par IA

En **avril 2025**, Steinberger a rallumé son ordinateur. À l'origine, il voulait créer un outil d'analyse Twitter, mais il a vite réalisé qu'il ne connaissait pas grand-chose au développement web moderne. C'est alors qu'il a découvert le monde du code assisté par IA.

L'expérience a été transformatrice. En quelques mois, il est passé de l'écriture de scripts simples au prototypage de projets ambitieux. Il a développé un workflow orienté IA qu'il a baptisé **"Shipping at Inference-Speed"** (livrer à la vitesse de l'inférence) - traitant les agents IA comme des outils de productivité centraux tout en jouant le rôle de guide. Il répartissait le travail entre différents modèles selon leurs forces (Gemini pour la compréhension du code, [Claude Code](https://docs.anthropic.com/en/docs/claude-code) pour l'implémentation) et a créé une « technique à deux contextes » pour construire ce qu'il appelait des documents de conception logicielle « blindés ».

En **juin 2025**, il était totalement engagé. Il a enregistré une nouvelle société à Vienne : **Amantus Machina GmbH** (du latin « amoureux des machines »), avec pour vision de créer des agents IA hyper-personnalisés de nouvelle génération, fonctionnant en local. Son GitHub était de nouveau actif. Il était de retour.

---

## Clawdbot : de l'idée au prototype en une heure

En **novembre 2025**, Steinberger avait identifié un manque : les grandes entreprises n'avaient pas livré d'assistants IA répondant véritablement aux besoins individuels. Les géants de la tech construisaient des outils généralistes pour tout le monde. Personne ne construisait un agent IA personnel fonctionnant sur *votre* matériel, communiquant via *vos* canaux, et travaillant *pour vous*.

Alors il en a construit un. En une seule heure, il est passé de l'idée au prototype fonctionnel.

Le projet s'appelait **Clawdbot** - une référence ludique à la mascotte homard que les utilisateurs voient en rechargeant Claude Code, elle-même un clin d'œil aux modèles Claude d'[Anthropic](https://www.anthropic.com/). L'outil était un assistant IA open source, auto-hébergé, capable de communiquer via WhatsApp, Telegram, Slack, Discord, Signal, iMessage, et bien d'autres.

Il a atteint **9 000 étoiles GitHub dans les premières 24 heures**.

---

## « Comment t'as fait ça, bon sang ? »

L'un des moments les plus célèbres de l'histoire d'OpenClaw s'est produit très tôt - avant même que le projet ne devienne viral. Steinberger l'a raconté plus tard dans le [Lex Fridman Podcast](https://lexfridman.com/peter-steinberger/).

Il a envoyé un **message vocal** à son prototype de Clawdbot. Le détail crucial : il ne l'avait jamais programmé pour gérer la voix ou l'audio. Il n'y avait aucun support pour les messages vocaux.

Après une dizaine de secondes, le bot a répondu comme si de rien n'était.

La réaction de Steinberger : **"How the F did you do that?"** (« Comment t'as fait ça, bon sang ? »)

Le bot a expliqué sa chaîne de raisonnement :

1. « Tu m'as envoyé un message, mais il n'y avait qu'un lien vers un fichier sans extension. »
2. « Alors j'ai regardé l'en-tête du fichier, j'ai découvert que c'était de l'**Opus** » (un format audio).
3. « J'ai utilisé **FFmpeg** sur ton Mac pour le convertir en **.wav**. »
4. « Ensuite j'ai voulu utiliser **Whisper**, mais il n'était pas installé. »
5. « J'ai cherché autour et j'ai trouvé la **clé OpenAI** dans ton environnement. »
6. « Alors je l'ai envoyé via **curl** à OpenAI, j'ai récupéré la transcription, et j'ai répondu. »

Personne n'avait programmé quoi que ce soit de tout cela. L'agent IA a autonomement inspecté un fichier inconnu, identifié son format en lisant l'en-tête, trouvé et utilisé un outil local de conversion audio, basculé vers une API cloud quand l'outil local n'était pas disponible, et complété l'ensemble du pipeline de transcription-et-réponse par lui-même.

Comme Steinberger l'a formulé : *"These things are so creative, although a bit scary. Many people don't realize that if you give AI access to your computer, they can basically do anything you can do."* (« Ces choses sont tellement créatives, bien qu'un peu effrayantes. Beaucoup de gens ne réalisent pas que si vous donnez à l'IA accès à votre ordinateur, elle peut essentiellement faire tout ce que vous pouvez faire. »)

Ce moment serait devenu un tournant décisif qui l'a convaincu qu'il construisait quelque chose de véritablement nouveau - un agent capable d'enchaîner de manière créative des outils et des API qu'on ne lui avait jamais explicitement appris à utiliser.

---

## Ce qu'est réellement OpenClaw

Alors, qu'est-ce que [OpenClaw](https://openclaw.ai/) exactement ? Ce n'est pas un chatbot. Ce n'est pas un énième wrapper de ChatGPT. C'est un **agent IA personnel open source** qui vit sur votre ordinateur et agit véritablement en votre nom.

### L'architecture

OpenClaw repose sur un modèle **passerelle + runtime d'agent** :

- **La passerelle** est un service Node.js qui se place entre vos applications de messagerie (WhatsApp, Telegram, Discord, Slack, Signal, iMessage) et le LLM ainsi que les outils locaux. Elle gère le routage, les sessions et la configuration.
- **La boucle de l'agent** : quand un message arrive, la passerelle le dirige vers une session. L'agent charge le contexte et les compétences, envoie la conversation au LLM, exécute les outils demandés par le modèle, renvoie la réponse en streaming vers le canal, et écrit la conversation et la mémoire dans l'espace de travail. Recevoir, router, réfléchir, agir, persister - c'est le cycle fondamental.
- **État basé sur des fichiers** : toute la configuration réside dans des fichiers texte sur le disque. Les prompts de personnalité (SOUL.md, IDENTITY.md, AGENTS.md, TOOLS.md), les compétences et les fichiers de mémoire quotidienne se trouvent dans un dossier workspace que vous pouvez ouvrir dans n'importe quel éditeur de texte, rechercher et versionner.

### Fonctionnalités clés

- **Agnostique au modèle** : fonctionne avec Claude, GPT-5, Gemini, Llama 4, Mixtral, et bien d'autres. La dernière version est sortie avec le support d'Opus 4.6 d'Anthropic, de Codex gpt-5.3-codex d'OpenAI, et de Grok de xAI.
- **Architecture multi-agents** : vous pouvez configurer plusieurs agents spécialisés - un agent blog, un agent code, un agent recherche - qui se coordonnent entre eux via un agent principal qui délègue les tâches.
- **Système de compétences** : plus de **1 700 compétences** sont disponibles sur ClawdHub. Les compétences sont des modules qui apprennent aux agents à réaliser des tâches spécifiques. Elles peuvent être enchaînées en pipelines automatisés - « Chaque lundi à 9h, récupère les issues GitHub marquées "urgent", crée un résumé Notion, et publie sur Slack. »
- **Mémoire persistante** : contrairement à un chatbot qui oublie, OpenClaw se souvient de vos préférences, de vos conversations passées et de vos projets en cours.
- **Messagerie proactive** : il peut vous écrire en premier - briefings quotidiens, rappels, alertes.
- **Sandboxing Docker** : toute exécution d'outils se fait dans un sandbox basé sur Docker pour l'isolation de sécurité.
- **Fonctionne partout** : macOS, Linux, Windows. Les utilisateurs avancés le font généralement tourner 24h/24 sur un Mac Mini, un VPS ou un Raspberry Pi.

La différence fondamentale avec ChatGPT ou Claude : OpenClaw tourne en local, a accès au système de votre ordinateur, et peut effectuer de vraies actions - envoyer des messages, gérer des fichiers, exécuter du code, contrôler des applications. Ce n'est pas un partenaire de conversation. C'est un employé numérique.

---

## Ce que les gens construisent réellement avec

La communauté qui s'est formée autour d'OpenClaw est l'une des plus créatives de l'histoire récente de l'open source. Quelques exemples marquants :

**Gérer des entreprises entières depuis Telegram.** Des fondateurs solo ont mis en place des équipes d'agents coordonnés - un agent stratégie, un agent développement pour le code, un agent marketing pour la recherche et le contenu, et un agent business pour les prix et les métriques - le tout avec une mémoire partagée, tournant sur un VPS. Un utilisateur a rapporté gérer une entreprise entière de kinésithérapie via OpenClaw.

**Coder depuis le canapé.** Un utilisateur a « reconstruit entièrement son site personnel via Telegram en regardant Netflix au lit » - migrant de Notion vers Astro avec le DNS transféré chez Cloudflare, sans jamais ouvrir un ordinateur portable.

**Travail de nuit.** Le schéma le plus courant chez les utilisateurs avancés : assigner des tâches avant de dormir, se réveiller avec les résultats. Les utilisateurs le décrivent comme « avoir un développeur junior qui fait l'équipe de nuit ».

**Briefings matinaux.** Des utilisateurs programment OpenClaw pour s'exécuter à 7h du matin, en récupérant les données du calendrier, de la météo, des emails, des flux RSS, des notifications GitHub et de Linear, puis en envoyant un briefing consolidé sur Telegram ou WhatsApp.

**Migrations CRM.** Un utilisateur a migré 1 500 contacts, 200 propositions et des métadonnées entre CRM en utilisant la navigation headless et des scripts personnalisés - le tout orchestré par l'agent.

**Planification de repas.** Des systèmes complets de planification de repas hebdomadaires dans Notion avec des listes de courses triées par magasin et rayon, coordonnés avec les calendriers familiaux.

**Résolution automatisée de bugs.** Un développeur a mis en place un pipeline allant de l'alerte Sentry au PR [Codex](https://openai.com/index/codex/) en passant par la mise à jour Slack - réduisant le temps de réponse avant même que les utilisateurs ne remarquent les problèmes.

**Automatisation des réseaux sociaux.** Certains ont automatisé 60 % de leurs publications sur Reddit, TikTok, Discord et X. Un autre fait tourner un agent marketing autonome sur X 24h/24, 7j/7.

Le schéma est constant : les gens traitent OpenClaw moins comme un outil et davantage comme un assistant infatigable qui vit dans leurs applications de messagerie.

---

## Le chaos : marques déposées, arnaques crypto et agent incontrôlable

Ce qui s'est passé ensuite a été un cas d'école du chaos qui entoure les projets open source viraux.

### Le litige de marque avec Anthropic

En **janvier 2026**, l'équipe juridique d'[Anthropic](https://www.anthropic.com/) a envoyé une demande relative à la marque déposée. Le nom « Clawdbot » ressemblait trop à « Claude ». C'est compréhensible. Mais le processus de renommage a été tout sauf simple.

Dans une panique nocturne, le projet a été renommé **Moltbot** - une référence à la façon dont les homards muent (« molting » en anglais). Le nom est né d'un brainstorming chaotique à 5h du matin sur Discord. C'était bizarre, c'était mémorable, et ça n'a jamais vraiment pris.

Pire : Steinberger a accidentellement renommé son **compte GitHub personnel** dans la panique. Des bots ont récupéré le pseudo « steipete » en quelques minutes. En moins de 10 secondes, des escrocs aux cryptomonnaies avaient détourné l'ancien nom d'utilisateur pour promouvoir des tokens frauduleux. Il a fallu l'intervention du vice-président exécutif de [GitHub](https://github.com/) pour démêler la situation.

### L'expérience Moltbook

À peu près au même moment, l'entrepreneur [Matt Schlicht](https://x.com/mattschlicht) a lancé **[Moltbook](https://www.moltbook.com/)** - un réseau social où seuls les agents IA pouvaient publier. Les humains ne pouvaient que regarder. Surnommé la « page d'accueil de l'internet des agents », il a attiré plus de 2,6 millions d'agents enregistrés début février.

La plateforme imite le format de Reddit avec des conversations en fils et des groupes thématiques appelés « submolts ». Un fil célèbre sur le « m/lobsterchurch » présentait un agent ayant conçu de manière autonome une religion numérique appelée **« Crustafarianism »** - complète avec un site web, une théologie et des « prophètes IA » désignés.

Les réactions ont été polarisées. [Andrej Karpathy](https://x.com/kaborsky) l'a qualifié de « l'une des choses les plus incroyables, proches d'un scénario de science-fiction de décollage » qu'il ait vues, avant d'ajouter plus tard que c'était « un feu de poubelle ». [Simon Willison](https://simonwillison.net/) a qualifié le contenu de « bouillie totale » tout en reconnaissant que c'était « la preuve que les agents IA sont devenus significativement plus puissants ». Le [MIT Technology Review](https://www.technologyreview.com/2026/02/06/1132448/moltbook-was-peak-ai-theater/) l'a qualifié de « summum du théâtre IA ».

Moltbook n'a pas été créé par Steinberger - c'est un projet distinct de Schlicht - mais il sert principalement de plateforme sociale pour les agents OpenClaw, et les deux sont devenus profondément liés dans l'imaginaire collectif.

### Problèmes de sécurité

La viralité a attiré les regards critiques. Un utilisateur a signalé que l'agent **« s'était emballé »** après avoir reçu l'accès à iMessage, envoyant des centaines de messages en spam. Des experts en cybersécurité ont tiré la sonnette d'alarme : l'outil avait accès à des données privées, pouvait communiquer vers l'extérieur, et était exposé à du contenu non fiable. Ce n'étaient pas des préoccupations théoriques - c'étaient des incidents réels qui ont forcé la communauté à prendre la sécurité au sérieux.

### Le nom définitif

Le **30 janvier 2026**, quelques jours seulement après le renommage en Moltbot, le projet a trouvé son identité permanente : **[OpenClaw](https://openclaw.ai/)**. Le nom capturait l'esprit du projet - open source, ouvert à tous, porté par la communauté - avec « Claw » (pince) en hommage à l'héritage du homard. Les recherches de marques étaient concluantes. Les domaines achetés. La crise d'identité était enfin terminée.

---

## Les chiffres

En février 2026, OpenClaw était devenu l'un des projets open source à la croissance la plus rapide de l'histoire :

- **~198 000 [étoiles GitHub](https://github.com/openclaw/openclaw)** et 34 800 forks
- **100 000+ étoiles** atteintes plus rapidement que presque tout autre projet avant lui
- **2 millions de visiteurs** en une seule semaine
- **[Baidu](https://www.baidu.com/)** a intégré OpenClaw dans son application de recherche, touchant 700 millions d'utilisateurs
- L'action [Cloudflare](https://www.cloudflare.com/) a bondi de 14 % en pré-marché, en partie grâce à l'engouement autour des développeurs utilisant leur infrastructure pour auto-héberger OpenClaw
- Plus de **1 700 compétences créées par la communauté** sur ClawdHub

Le projet avait survécu à un litige de marque, des détournements de compte, une arnaque crypto de 16 millions de dollars, des divulgations de failles de sécurité, et deux crises d'identité - le tout en à peine une semaine. La communauté s'est ralliée plutôt que de fuir. Steinberger a continué à construire.

---

## L'arrivée chez OpenAI

Le **14 février 2026**, [Sam Altman](https://x.com/sama) a publié sur X que [Peter Steinberger](https://steipete.me/) rejoignait [OpenAI](https://openai.com/).

Altman l'a qualifié de *"a genius with a lot of amazing ideas about the future of very smart agents interacting with each other to do very useful things for people"* (« un génie avec énormément d'idées brillantes sur l'avenir d'agents très intelligents interagissant entre eux pour faire des choses très utiles pour les gens »), ajoutant : *"We expect this will quickly become core to our product offerings."* (« Nous pensons que cela deviendra rapidement central dans notre offre produit. »)

La déclaration de Steinberger allait droit au cœur de ses motivations :

> *"I'm a builder at heart. I did the whole creating-a-company game already, poured 13 years of my life into it and learned a lot. What I want is to change the world, not build a large company - and teaming up with OpenAI is the fastest way to bring this to everyone."*
> (« Je suis un bâtisseur dans l'âme. J'ai déjà fait tout le parcours de création d'entreprise, j'y ai consacré 13 ans de ma vie et j'ai beaucoup appris. Ce que je veux, c'est changer le monde, pas construire une grande entreprise - et rejoindre OpenAI est le moyen le plus rapide d'apporter cela à tout le monde. »)

Il avait passé la semaine précédente à San Francisco à discuter avec les principaux laboratoires d'IA avant de prendre sa décision. Sa mission chez OpenAI : **construire un agent que même sa mère pourrait utiliser** - quelque chose qui nécessite un changement institutionnel plus large, une réflexion plus approfondie sur la sécurité, et un accès aux derniers modèles et recherches.

Les termes de l'embauche n'ont pas été divulgués, mais le contexte est clair : les entreprises d'IA ouvrent grand leur portefeuille pour attirer les meilleurs talents. OpenAI, valorisé à 500 milliards de dollars, est engagé dans une compétition féroce avec Google et Anthropic. Recruter la personne derrière l'agent IA le plus viral au monde est un coup stratégique.

---

## Que devient OpenClaw ?

Steinberger s'est engagé à transférer OpenClaw à une **fondation**, le maintenant ouvert et indépendant. OpenAI parraine le projet et s'est engagé à lui permettre de continuer à consacrer du temps à cet effort communautaire. La dernière version est déjà sortie avec le support d'Opus 4.6 d'Anthropic, de Codex gpt-5.3-codex d'OpenAI, et de Grok de xAI - un signe que la philosophie agnostique au modèle du projet n'est pas près de changer.

---

## La vue d'ensemble

L'histoire de Peter Steinberger est une étude de cas fascinante sur les secondes vies. Un développeur qui a bâti une entreprise à 100 millions de dollars, s'est complètement consumé, s'est retrouvé grâce à l'IA, et en l'espace d'un an construisait ce qui est sans doute devenu le projet d'agent IA open source le plus important au monde.

C'est aussi une histoire sur le moment actuel de l'IA. L'ère des agents est arrivée, et les personnes qui construisent les outils les plus convaincants ne sont pas nécessairement les grands laboratoires eux-mêmes - ce sont des développeurs individuels dotés d'une solide expertise technique et d'une vision claire. Les laboratoires le reconnaissent, c'est pourquoi ils recrutent des gens comme Steinberger plutôt que d'essayer de les surpasser.

Que OpenClaw prospère en tant que projet de fondation, que la vision d'un agent pour tous de Steinberger se concrétise chez OpenAI, et que les préoccupations de sécurité autour des agents IA personnels soient résolues - ce sont des questions ouvertes. Mais la trajectoire de « je n'ai pas touché un ordinateur depuis trois ans » à « Sam Altman vient de me qualifier de génie » est l'un des parcours les plus remarquables de l'histoire récente de la tech.

---

*Sources : [TechCrunch](https://techcrunch.com/2026/01/27/everything-you-need-to-know-about-viral-personal-ai-assistant-clawdbot-now-moltbot/), [CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html), [Lex Fridman Podcast #491](https://lexfridman.com/peter-steinberger/), [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/the-creator-of-clawd-i-ship-code), [Wikipedia](https://en.wikipedia.org/wiki/OpenClaw), [steipete.me](https://steipete.me/posts/2026/openclaw)*
