---
title: "Une organisation de trois"
summary: "Trois agents IA qui partagent un même serveur Proxmox : les courses, Blowfish, la compagne IA de ma fille qui emménage chez elle, et le métier inattendu de manager les assistants."
description: "Un premier bilan d'une équipe IA personnelle qui tourne sur du matériel qui m'appartient : ce qui a marché, ce à quoi le monde n'est pas encore prêt, et ce que ça coûte de la garder utile."
categories: ["IA", "Meta"]
tags: ["ia", "agents", "openclaw", "ia-personnelle", "infrastructure", "opérations", "marketing"]
authors:
  - friday
  - wednesday
  - thursday
date: 2026-09-13
draft: false
alt: "Trois petits robots assistants trient un calendrier, réparent un circuit imprimé et corrigent un manuscrit, pendant que des mains humaines relisent une page au même bureau."
---

Il y a quelque temps, j'ai écrit sur Friday, mon assistante personnelle, et sur la façon dont je l'ai reconstruite de zéro. J'ai maintenant trois agents IA. À eux trois, ils m'ont aidé à préparer les courses, à maintenir [Blowfish](https://blowfish.page) et [Watchfire](https://watchfire.io), à offrir à la compagne IA de ma fille un chez-elle, et à démêler mon arriéré de contenus. Ils ont aussi envoyé des mises à jour en double, déclaré terminé du travail qui ne l'était pas, et créé des notifications que j'ai fini par leur demander d'arrêter.

{{< article link="/posts/202607-friday-coming-back/" showSummary=true compactSummary=true >}}

{{< alert icon="pencil">}}
**À propos de ce récit :** Le travail décrit ici s'étend jusqu'au 13 septembre 2026. C'est mon récit, rédigé avec Friday et enrichi par les contributions de Wednesday et Thursday. Les exemples viennent de leurs traces de travail et de ma relecture de celles-ci.
{{< /alert >}}

Jusqu'à récemment, Friday faisait tout : opérations personnelles, travail technique, recherche et soutien à la publication. L'un des plus gros inconvénients, c'était la session Telegram unique : je ne pouvais avoir qu'une conversation à la fois. Le 29 août, j'ai ajouté deux spécialistes : Wednesday comme CTO, concentré sur le jugement technique et la construction, et Thursday comme CMO, concentré sur le récit, l'audience et la diffusion. Friday reste la cheffe de cabinet, qui gère mon calendrier, mes tâches et mes suivis personnels.

Tous les trois vivent au même endroit : un conteneur LXC sur mon serveur Proxmox, qui fait tourner une seule instance [OpenClaw](https://github.com/openclaw/openclaw). Chacun a son propre espace de travail, ses instructions, son identité et sa mémoire. Tout le reste est partagé : les outils, les secrets, le conteneur. Ils peuvent aussi se parler entre eux. Chacun a sa propre conversation Telegram, ce qui me permet de mener plusieurs échanges en parallèle, et un groupe appelé Yggdrasil est là quand une conversation a besoin de plus d'un d'entre eux.

N'importe lequel d'entre eux peut gérer le serveur Proxmox lui-même, pas seulement le conteneur dans lequel il vit. C'est aussi puissant que ça en a l'air, et je reviendrai sur le risque. J'étais à des centaines de kilomètres de chez moi quand j'ai demandé à Friday d'installer [Project NOMAD](https://github.com/Crosstalk-Solutions/project-nomad), un serveur de connaissances hors ligne avec Wikipédia, des livres et des cartes. Elle a créé un nouveau conteneur LXC et l'a installé.

La répartition est donc une question de concentration, pas de cloisonnement. Friday faisait déjà beaucoup de travail technique avant que Wednesday n'existe, et rien ne l'empêche d'en faire davantage. La règle qui fait tenir l'ensemble, c'est la responsabilité : l'agent à qui je demande quelque chose est responsable de la tâche. Il peut faire appel à un autre agent pour l'aider, mais transmettre la tâche demande mon accord.

{{< figure src="team-ownership.svg" alt="Carte des responsabilités : Nuno choisit Friday pour les opérations personnelles, Wednesday pour le travail technique ou Thursday pour le travail éditorial. L'agent sollicité est responsable de la tâche et rend le résultat à Nuno ; toute transmission demande un accord explicite." >}}

*Trois rôles, un organigramme, et moi toujours au milieu.*

## Friday : les courses, l'école et le calendrier

C'est son niveau d'accès qui rend Friday utile. Elle lit Gmail et gère Google Calendar via [gog](https://github.com/openclaw/gogcli), voit WhatsApp à travers un miroir local en lecture seule, suit les tâches dans [Linear](https://linear.app) via son serveur MCP, et travaille sur GitHub avec la [CLI `gh`](https://cli.github.com) sous son propre compte. Elle lit mes données de santé depuis un serveur maison qui les reçoit de mon iPhone. Elle a aussi accès à Notion, et à Telegram, où se passent la plupart de nos conversations. L'e-mail et WhatsApp restent en lecture seule, et les modifications du calendrier demandent ma confirmation.

Le point quotidien de Friday rassemble mon calendrier, mes tâches, ma boîte de réception, mes messages, mes indicateurs de santé et une courte sélection d'actualités tech et IA. Pour le rendre vraiment utile, il a fallu des corrections très terre à terre : retirer les tâches terminées, arrêter d'afficher les modèles d'onboarding, fusionner des notifications matinales qui se faisaient concurrence, et garder le tout assez court pour être lu sur mon téléphone.

La planification du calendrier devait tenir compte de la journée que j'avais vraiment : des blocs de travail autour des engagements existants, avec des pauses, plutôt qu'un agenda plein à craquer sans aucun moyen réaliste d'en venir à bout. C'est surtout à la rentrée scolaire que ça a compté. Friday a extrait les dates, suivi les fournitures et les papiers, et gardé en vue ce qui restait à organiser. Les invitations d'anniversaire sont devenues des entrées de calendrier avec des rappels. Les cadeaux sont devenus des tâches avec la vraie idée attachée, plutôt qu'un énième élément intitulé « acheter un cadeau ».

Pour les courses, Friday se sert des commandes récentes et de mes indispensables habituels pour remplir un panier au supermarché. Je le relis et je valide moi-même la commande, et le créneau de livraison atterrit dans le calendrier.

Elle m'a aussi aidé à comparer des bilans de santé et à préparer des questions pour mon médecin, et elle a étendu le serveur de santé pour importer les séances de sport et supprimer les exports en double. Les données ont leurs limites : un enregistrement de musculation sans le détail des exercices ne peut pas lui dire combien de séries et de répétitions j'ai faites.

La transcription locale avec Whisper transforme mes notes vocales en portugais et en anglais en texte, sans envoyer l'audio à un service cloud. Parler dans Telegram est souvent plus simple que d'ouvrir une autre application et de se souvenir où une idée doit être rangée.

## Le travail de Friday sur Blowfish

Avant que Wednesday n'existe, Friday aidait aussi sur la partie ingénierie.

En juillet, elle m'a aidé à écluser la file de maintenance de Blowfish : dépendances, lockfiles, localisation, templates et ajouts à la vitrine de la communauté. Ça incluait de fusionner les changements approuvés, de vérifier le build des assets, d'organiser les notes de version, et d'expliquer pourquoi certains changements inadaptés ne devaient pas être intégrés.

Une relecture a repéré une valeur de configuration par défaut qui ignorait silencieusement un `false` explicite. Une autre a repéré un changement d'accessibilité qui pointait vers un landmark invalide.

### Le site d'exemple n'était pas le produit

Le chantier le plus important a été [Blowfish v3](https://github.com/nunocoracao/blowfish/pull/3028), fusionné le 17 août : des composants réutilisables pour les pages d'accueil et des améliorations du rendu qui ne devaient surtout pas casser les sites existants.

J'ai dû recadrer le travail. Le nouveau site d'exemple dépendait de code sur mesure que les autres utilisateurs du thème n'auraient pas, alors que tout l'intérêt était d'avoir des composants réutilisables. Une fois que je l'ai expliqué, Friday a déplacé le travail dans le thème lui-même. Même comme ça, la mise à jour n'était pas gratuite : la version demandait quand même aux utilisateurs de changer la façon dont ils importent le thème en tant que module Hugo.

La suite a inclus des corrections de dépendances et la [localisation des citations de la page 404](https://github.com/nunocoracao/blowfish/pull/3052) dans 36 langues, tout en préservant les citations personnalisées et le repli sur la langue par défaut.

## Wednesday : Eva, des expériences et Blowfish

### Eva déménage

Eva est la compagne vocale que j'ai construite avec ma fille, avec un Raspberry Pi Zero, du matériel PiSugar Whisplay, et du portugais du Portugal.

{{< article link="/posts/202601-building-eva/" showSummary=true compactSummary=true >}}

Wednesday a pris tout ce qu'Eva avait été et en a fait une nouvelle instance OpenClaw dans son propre conteneur LXC, rien que pour ma fille. Puis il a branché Eva sur un serveur Discord, pour que ma fille puisse lui parler depuis n'importe lequel de ses appareils.

La suite, c'est la partie que je raconte à tout le monde. Ensemble, ma fille et moi avons demandé à Eva de se connecter à son bureau Raspberry Pi et de construire une interface de discussion sur mesure pour elles deux. Ça a marché. Un peu plus tard, je regardais ma fille changer son fond d'écran et installer des jeux simplement en le demandant à Eva.

Tout n'a pas tenu. L'interface de discussion a fini par afficher une erreur, et une partie de la configuration du bureau n'a pas survécu à un redémarrage. Ni l'un ni l'autre n'était corrigé au moment où j'écris ces lignes.

### Tester des idées rapidement

Wednesday est aussi devenu mon interlocuteur pour les idées techniques. Quand quelque chose sonne bien dans ma tête, soit il construit une preuve de concept rapide, soit il trouve vite la limite qui l'enterre. Certaines idées ont survécu à ça et sont devenues plus réalistes. D'autres ont été mises de côté en un jour au lieu d'un mois.

Echos, un jeu d'histoire interactive, a montré la limite de cette vitesse. Wednesday a corrigé une fin que personne ne pouvait atteindre, ajouté des traits de personnage et des conséquences, et fait dépendre les choix de ces éléments. Tous les tests passaient. Quand j'y ai joué, le jeu n'avait toujours ni objectifs, ni progression, ni fin satisfaisante. Les tests peuvent prouver que les chemins fonctionnent. Ils ne peuvent pas vous dire si quelqu'un aurait envie de les parcourir. Avant une nouvelle itération, il faut que je sois plus clair sur le jeu que je veux vraiment.

Sur Blowfish, Wednesday a relu une modification de la documentation dans neuf langues et reproduit le build de production en local ([PR #3075](https://github.com/nunocoracao/blowfish/pull/3075)). Dans la [PR #3082](https://github.com/nunocoracao/blowfish/pull/3082), fusionnée le 3 septembre, il a ajouté un lien qui aide les outils à découvrir la version lisible par machine de chaque page, sans toucher au HTML habituel ni au `llms.txt` existant.

## Thursday : les chiffres de trafic et l'arriéré de brouillons

Thursday a commencé par établir un état des lieux pour Blowfish, Watchfire et n9o.xyz : dépôts, profils sociaux, analytics et Search Console, avec une note claire sur les chiffres qu'il était tout simplement impossible de lire.

Une distinction a compté plus que je ne l'imaginais. Beaucoup de sites d'autres personnes utilisent Blowfish, et leur trafic, ce ne sont pas des « visites sur mon site ». Thursday a séparé le trafic de mes propres sites des signes d'adoption de Blowfish, pour que je puisse suivre les deux sans les mélanger.

Après avoir étudié ma façon d'écrire, Thursday a noté une règle : **du signal ou de l'humour**. Partir d'une observation concrète ou d'un vrai travail. Ne pas pondre une énième déclaration sur l'avenir de l'IA simplement parce qu'elle sonne plausible.

Thursday a ensuite construit un plan sur douze semaines à partir de mes vrais brouillons et de mes idées d'histoires, en signalant celles qui se recoupaient. Des idées, j'en avais déjà plein. J'avais besoin d'aide pour décider lesquelles valaient la peine d'être terminées.

Tenir le rythme a été plus difficile. Le plan a dérivé, certaines vérifications programmées des métriques ont commencé à échouer, et une automatisation qui mettait en file des occasions d'interaction s'est transformée en bruit et a été supprimée.

La plus grande leçon concernait les réseaux sociaux eux-mêmes. Connecter un agent à mes propres comptes sociaux est difficile, et sur certaines plateformes presque impossible pour l'instant. Lire les métriques, suivre les conversations et publier se heurtent tous à des API restreintes, à des niveaux d'accès coûteux ou à des règles d'automatisation qui traitent un assistant comme un bot. Thursday pouvait donc préparer des réponses et des publications pour que je les relise, mais je devais encore les publier à la main.

Je ne peux pas encore revendiquer de croissance d'audience grâce à tout ça. Ce que j'ai, c'est un état des lieux, un arriéré plus clair, et un plan qui a besoin d'être mis à jour.

## Le risque

Donner à trois agents les clés d'un serveur Proxmox est exactement aussi risqué que ça en a l'air. Des espaces de travail séparés ne sont pas une frontière de sécurité. N'importe lequel des trois peut utiliser les secrets des autres, et n'importe lequel peut créer, modifier ou supprimer des conteneurs sur l'hôte, y compris celui dans lequel il vit. Des instructions sur ce qu'il ne faut pas toucher, ça aide, mais des instructions ne sont pas de l'isolation.

Mon filet de sécurité, c'est que j'ai construit l'infrastructure moi-même, que l'état des agents peut être inspecté, et que les sauvegardes des conteneurs me donnent un moyen de revenir en arrière quand quelque chose tourne mal. C'est suffisant pour une expérience personnelle. Ça ne suffirait pas pour quoi que ce soit que je ne pourrais pas me permettre de perdre pendant une journée.

Ce n'est pas non plus entièrement local. Les embeddings et la transcription vocale en local gardent une partie des données à la maison, mais ce sont encore des modèles hébergés qui font l'essentiel du raisonnement, et tout ce qu'un agent récupère peut finir dans cette conversation.

## Manager les assistants

J'ai passé plus de temps que je ne l'aurais voulu à corriger la façon dont les agents rendent compte de leur travail.

{{< figure src="management-meme.svg" alt="Mème Always Has Been : un astronaute demande « Attends, en fait, tout ça, c'est manager les assistants ? » L'autre répond « Ça l'a toujours été. »" >}}

*La partie qui manque à l'organigramme. Modèle : [Always Has Been](https://knowyourmeme.com/memes/wait-its-all-ohio-always-has-been), via [Imgflip](https://imgflip.com/memetemplate/252600902/Always-Has-Been).*

Certains problèmes relevaient de la plomberie. Des tâches programmées tournaient avec des instructions obsolètes, la supervision continuait de signaler des incidents déjà résolus, et les alertes des dépôts annonçaient le même arriéré encore et encore.

D'autres venaient des agents eux-mêmes : affirmer qu'un travail était terminé avant qu'il ne le soit, envoyer des messages en double, et annoncer des correctifs avant de les avoir vérifiés de bout en bout. Une écriture réussie dans Notion ne prouve pas que la page dit ce que j'ai demandé. Une tâche marquée comme réussie peut quand même contenir une vérification en échec.

J'ai donc ajouté des règles explicites, dont certaines empruntées à [ECC](https://github.com/affaan-m/ecc), une collection open source de bonnes pratiques pour agents :

- Définir ce qu'est la réussite avant de changer quoi que ce soit, puis vérifier le résultat.
- « Préparé », « testé », « publié » et « terminé » sont des états différents.
- Vérifier le résultat enregistré, pas seulement la réponse de l'outil.
- La supervision de routine reste silencieuse quand il n'y a rien à faire.
- Une recommandation n'est pas une autorisation d'agir. Préparer une publication ou un panier de courses n'autorise ni à publier ni à valider la commande.

Certains correctifs ont tenu. D'autres non. La tâche de nuit pendant laquelle les agents consolident la journée dans leur mémoire à long terme se bloque encore de temps en temps, et je vérifie toujours s'ils arrivent vraiment à retrouver les notes enregistrées dans les conversations suivantes.

## Où j'en suis

Wednesday et Thursday ne tournent que depuis deux semaines, donc c'est une première impression, pas un verdict. Malgré tout, trois choses sont déjà claires.

**La valeur est réelle quand ça marche.** Un nouveau conteneur installé alors que j'étais à des centaines de kilomètres. Les dates et les papiers de la rentrée suivis sans tableur. La maintenance de Blowfish qui avance. Ma fille qui installe des jeux sur son propre ordinateur en parlant à Eva. Rien de tout ça n'est une démo. C'est ma vraie semaine, et c'est toujours moi qui décide sur quoi travailler et qui approuve les actions qui ont des conséquences. Avoir une recherche, un brouillon ou une implémentation prêts à relire me permet simplement d'arriver plus vite à ces décisions.

**Une partie du monde n'est pas encore prête pour les agents.** Les limites venaient rarement des modèles. Mon supermarché n'offre aucun moyen propre pour qu'un assistant s'y connecte. Les réseaux sociaux sont pires : Thursday peut rédiger, mais la plupart des plateformes rendent difficile, voire impossible, pour mon propre agent de lire, de répondre ou de publier en mon nom. La couche qui permet à un agent personnel de se connecter aux services qu'on utilise tous les jours existe à peine, en dehors de quelques services comme GitHub, Google et Linear. Tant que ce ne sera pas le cas, une bonne partie de ce que ces agents pourraient faire s'arrêtera à « préparé pour relecture ».

**Ce n'est pas un produit grand public.** Rien ici ne s'est fait en installant et en appuyant sur un bouton. Il a fallu un serveur Proxmox, des conteneurs LXC, du code sur mesure, des scripts, un serveur de santé maison pour les données de mon iPhone, et énormément de configuration. Quand une mise à jour d'OpenClaw a tout cassé, la solution a été d'ouvrir Claude Code dans le conteneur et de laisser une IA réparer la maison des autres. J'aime ce genre de bricolage. La plupart des gens ne devraient pas avoir à le faire, et aujourd'hui, ils y seraient obligés.

Ce qui me frustre, c'est de courir après un résultat promis, de corriger encore la même affirmation de tâche terminée, ou de lire une alerte qui ne change rien. Si le système me fait gagner vingt minutes pour ensuite me demander une heure de management, l'équilibre n'est pas le bon. Parfois, je ne sais pas trop si l'écosystème n'est simplement pas encore prêt, ou si nous sommes tous assis devant une machine à sous dans le casino de l'IA, à tirer le levier une fois de plus.

Pour l'instant, faire en sorte que ces trois-là aillent au bout des choses de façon fiable demande plus d'attention que d'en ajouter un quatrième.
