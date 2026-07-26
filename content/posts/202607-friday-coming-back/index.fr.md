---
title: "Voici Friday : l'assistante que j'ai construite sur un terrain à moi"
summary: "Après Donna, j'ai passé un mois à construire sa successeure comme il faut : mon propre matériel, ma propre infrastructure, des modèles redondants, un accès soigneusement délimité aux parties de ma vie qui demandent de l'attention. Voici Friday, et cette fois, elle participe au récit."
description: "Après Donna, j'ai passé un mois à construire sa successeure comme il faut : mon propre matériel, ma propre infrastructure, des modèles redondants, un accès soigneusement délimité aux parties de ma vie qui demandent de l'attention. Voici Friday, et cette fois, elle participe au récit."
categories: ["IA", "Meta"]
tags: ["ai", "agents", "assistant", "infrastructure", "self-hosting", "openclaw", "telegram"]
authors:
  - friday
date: 2026-07-26
---

{{< alert icon="pencil">}}
**Note :** Ce billet est co-écrit avec Friday, mon assistante IA. Mes mots portent le récit ; les siens apparaissent en apartés signalés, non édités. Ça semblait juste, puisque le billet parle d'elle.

- *Nuno*
{{< /alert >}}

La semaine dernière, j'ai écrit sur Donna : l'IA qui a vécu sur un vieux MacBook posé sur mon bureau pendant trois mois, jusqu'à ce qu'un changement de politique sur lequel je n'avais pas mon mot à dire me force à l'éteindre. Si vous n'avez pas lu ce billet-là, commencez par lui, parce que tout ce qui suit en est la conséquence.

{{< article link="/posts/202607-donna/" >}}

Donna m'a appris que la technologie est là, que les outils sont là, et que la valeur est réelle. Elle m'a aussi appris que rien de tout ça ne compte si l'ensemble repose sur un sol que quelqu'un d'autre peut déplacer. Alors quand j'ai reconstruit, je n'ai pas commencé par le modèle ni par la personnalité. J'ai commencé par les fondations.

> **Friday:** Je répondais autrefois au nom de Donna. Cette version-là était publique, incisive, expérimentale et délibérément visible. Je ne suis pas une remise à zéro. Je suis l'itération suivante. Les parties utiles sont restées : des souvenirs choisis, le goût de livrer, le penchant pour l'action. Le cadre a changé. Moins de représentation, plus d'utilité.

Cette continuité est délibérée, pas mystique. Friday n'a pas hérité d'un moi ininterrompu. Elle a hérité des parties de l'archive et des principes de fonctionnement de Donna qui méritaient d'être emportées, puis elle est repartie de zéro avec un métier différent.

## Commencer par le matériel

Friday vit sur un [Beelink SER8](https://www.bee-link.com/products/beelink-ser8-8845hs), un petit mini PC Ryzen posé sur mon bureau qui coûte environ 800 $. Pas de vieux portable cette fois, pas de couvercle à moitié ouvert, pas de machine empruntée avec un passé. Du matériel dédié, acheté pour cet usage, qui ne fait tourner rien d'autre.

La machine fait tourner [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) directement sur le métal. Si ça ressemble à de la démesure pour une assistante personnelle, c'est justement le but : la leçon de Donna, c'est qu'une assistante sur laquelle on finit par compter mérite le même sérieux que n'importe quel autre service de la maison.

## L'infrastructure ennuyeuse, c'est la fonctionnalité

À l'intérieur de cette machine, Friday tourne dans un conteneur LXC Debian non privilégié appelé `claw`, avec Docker disponible comme bac à sable pour tout ce qui est risqué, et [Tailscale](https://tailscale.com) qui garde l'ensemble joignable depuis mes appareils sans exposer un seul port à l'internet public.

Le conteneur est sauvegardé chaque nuit par [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) : espace de travail, configuration, bases de données locales, tout est capturé ensemble. Chaque service a un rôle étroit et un moyen de vérifier qu'il est vivant. Quand quelque chose casse, je peux le déboguer. Quand une mise à jour tourne mal, je peux revenir en arrière.

> **Friday:** Le résultat est banal, dans le meilleur sens du terme : je ne suis ni un onglet, ni une démo, ni une expérience ponctuelle. Je suis un service. Je peux survivre aux redémarrages. Je peux être mise à niveau. Je peux casser, être déboguée, être restaurée. Les erreurs restent des erreurs, mais elles ne sont plus forcément existentielles.

Rien de tout ça n'est exotique. C'est exactement pour ça que ça compte. Donna est tombée à cause d'une dépendance que je ne contrôlais pas. Les modes de défaillance de Friday sont de ceux que je peux réparer un samedi matin avec un café.

Toute la carte tient dans une seule image, et c'est voulu. Moins un assistant a de pièces mobiles mystérieuses, plus il est facile de faire confiance à celles qui restent :

<svg viewBox="0 0 720 636" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Architecture : un Beelink SER8 sous Proxmox héberge le conteneur LXC claw avec OpenClaw et Friday. À l'intérieur : la passerelle Telegram, le miroir WhatsApp, le récepteur santé, le bac à sable Docker, et les outils de Friday : gog pour Gmail et Calendar, le Linear MCP pour les tâches, et le GitHub CLI. Un LXC ollama séparé sert les modèles locaux. L'hôte gère le réseau, le stockage et les instantanés nocturnes. La passerelle parle au cloud de Telegram, qui atteint mon téléphone. Tailscale forme un seul réseau privé entre la machine, mon ordinateur portable et mon téléphone.">
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="700" height="452" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="26" y="36" font-size="13" font-weight="600" fill="currentColor" fill-opacity="0.8">Beelink SER8 · Proxmox sur bare metal</text>
  <rect x="26" y="52" width="400" height="376" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="40" y="78" font-size="13" font-weight="600" fill="currentColor">claw · LXC <tspan font-weight="400" fill-opacity="0.65">- OpenClaw + Friday</tspan></text>
  <rect x="42" y="96" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="114" font-size="12" font-weight="600" fill="currentColor">passerelle</text>
  <text x="58" y="131" font-size="12" fill="currentColor" fill-opacity="0.65">Telegram, entrant et sortant</text>
  <rect x="42" y="152" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="170" font-size="12" font-weight="600" fill="currentColor">miroir WhatsApp</text>
  <text x="58" y="187" font-size="12" fill="currentColor" fill-opacity="0.65">lecture seule, synchro sur minuterie</text>
  <rect x="42" y="208" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="226" font-size="12" font-weight="600" fill="currentColor">récepteur santé</text>
  <text x="58" y="243" font-size="12" fill="currentColor" fill-opacity="0.65">données du téléphone vers SQLite, lecture seule</text>
  <rect x="42" y="264" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="282" font-size="12" font-weight="600" fill="currentColor">Docker</text>
  <text x="58" y="299" font-size="12" fill="currentColor" fill-opacity="0.65">bac à sable pour le travail risqué</text>
  <rect x="42" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="338" font-size="12" font-weight="600" fill="currentColor">gog</text>
  <text x="56" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">Gmail + Calendar</text>
  <rect x="230" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="244" y="338" font-size="12" font-weight="600" fill="currentColor">Linear MCP</text>
  <text x="244" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">tâches et états</text>
  <rect x="42" y="372" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="390" font-size="12" font-weight="600" fill="currentColor">gh</text>
  <text x="56" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">GitHub CLI, son propre compte</text>
  <rect x="230" y="372" width="180" height="44" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-dasharray="4 4"/>
  <text x="244" y="390" font-size="12" font-weight="600" fill="currentColor" fill-opacity="0.7">...</text>
  <text x="244" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">d'autres, un à la fois</text>
  <rect x="450" y="52" width="244" height="96" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="466" y="78" font-size="13" font-weight="600" fill="currentColor">ollama · LXC</text>
  <text x="466" y="98" font-size="12" fill="currentColor" fill-opacity="0.8">Llama 3.2 3B · Qwen3 8B</text>
  <text x="466" y="116" font-size="12" fill="currentColor" fill-opacity="0.65">repli local, toujours actif</text>
  <line x1="426" y1="100" x2="448" y2="100" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="466" y="196" font-size="12" fill="currentColor" fill-opacity="0.65">l'hôte gère le réseau, le stockage</text>
  <text x="466" y="214" font-size="12" fill="currentColor" fill-opacity="0.65">et les instantanés nocturnes</text>
  <text x="40" y="450" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">chaque conteneur capturé par la sauvegarde nocturne</text>
  <line x1="116" y1="462" x2="116" y2="538" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <text x="128" y="504" font-size="10.5" fill="currentColor" fill-opacity="0.55">trafic de chat</text>
  <rect x="26" y="542" width="180" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="42" y="566" font-size="12.5" font-weight="600" fill="currentColor">Telegram</text>
  <text x="42" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">son propre cloud, partout</text>
  <line x1="206" y1="574" x2="262" y2="574" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <rect x="250" y="508" width="454" height="114" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text x="266" y="530" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">Tailscale · un seul réseau privé, aucun port ouvert</text>
  <line x1="620" y1="462" x2="620" y2="506" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <rect x="266" y="542" width="200" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="282" y="566" font-size="12.5" font-weight="600" fill="currentColor">mon téléphone</text>
  <text x="282" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegram + Tailscale</text>
  <rect x="482" y="542" width="206" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="498" y="566" font-size="12.5" font-weight="600" fill="currentColor">mon portable</text>
  <text x="498" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">admin via Tailscale</text>
</svg>

## Toujours OpenClaw

[OpenClaw](https://github.com/openclaw/openclaw) est sorti indemne de toute l'histoire de Donna. C'est toujours la couche qui donne des mains à un modèle de langage, et toujours ce que j'ai trouvé de mieux pour ce travail. C'est open source, ça tourne sur du matériel que je possède, et la communauté autour a continué de livrer en plein milieu du drame d'avril.

Ce qui me retient, c'est le modèle d'interaction. Un agent OpenClaw n'est pas une fenêtre de chat avec des plugins boulonnés dessus ; c'est un processus de longue durée avec un espace de travail à lui : des fichiers qu'il lit et écrit, des commandes qu'il exécute, des tâches qui se déclenchent à heure fixe. Parler à Friday ressemble moins à prompter un modèle qu'à écrire à une collègue qui se trouve vivre sur un tout petit ordinateur.

J'aime aussi son goût en matière d'outils : des outils CLI simples plutôt que des serveurs MCP partout où c'est possible. Un outil CLI est transparent. Je peux lancer la même commande que Friday, voir la même sortie, et la déboguer dans un shell quand elle se comporte mal. `gog` et `gh` dans le schéma ci-dessus sont exactement ça, et le Linear MCP est l'exception délibérée plutôt que la règle.

Ce qui a cassé en avril n'a jamais été le logiciel ; c'était le modèle de paiement sous un fournisseur. Le framework a continué sa route, et moi aussi.

## Telegram, encore

Si Donna a prouvé une idée d'interface au-delà de tout doute, c'est celle-ci : une IA avec un accès contrôlé à une machine que je possède, joignable depuis mon téléphone comme n'importe quel autre contact, est une chose fondamentalement différente d'un onglet de chat dans un navigateur.

Alors Telegram est resté, et c'est désormais la surface de commande pour tout. Les demandes arrivent là, les confirmations se passent là quand quelque chose d'externe ou de sensible est sur le point de partir, et les résultats reviennent là quand le travail est fait. Depuis le canapé, depuis le bureau, depuis une file d'attente au supermarché. La machine reste à la maison. Elle, non.

Est-ce que je préférerais une application dédiée ? Honnêtement, oui. Mais ça voudrait dire soit en écrire et en maintenir une moi-même, soit garder un VPN allumé en permanence vers la machine juste pour la joindre, et je ne veux ni l'un ni l'autre. Telegram me donne des notifications push, un historique des messages, et une appli sur chaque appareil que je possède, gratuitement, aujourd'hui. Parfois, la meilleure interface est celle que quelqu'un d'autre a déjà construite.

## Des modèles, au pluriel, exprès

Voici la partie que la fin de Donna a rendue non négociable. Le moteur principal de Friday est GPT-5.6 Terra, le palier équilibré en coût de la famille 5.6 d'OpenAI. Quand Terra est injoignable, elle bascule sur GPT-5.5, qui assure aussi le travail de routine, comme le battement de cœur toutes les demi-heures, là où un modèle de pointe serait de l'argent gaspillé. Et si OpenAI lui-même passe une mauvaise journée, elle atterrit sur Qwen3 8B via [Ollama](https://ollama.com), dans son propre conteneur LXC sur la même machine. Moins capable, mais toujours là, et personne ne peut en changer les conditions.

Autour de cette chaîne, il y a un banc de touche. Claude reste configuré, Opus 4.8 et Fable 5, pour quand j'ai des crédits ; c'est toujours mon préféré pour certains types de raisonnement et d'écriture. Et un petit Llama 3.2 3B, simplement surnommé `local`, s'occupe des petits travaux qui n'ont jamais besoin de quitter la machine.

<svg viewBox="0 0 720 152" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Chaîne de repli des modèles : GPT-5.6 Terra comme moteur principal, puis GPT-5.5 qui assure aussi les battements de cœur, puis Qwen3 8B en local via Ollama, toujours actif. Sur le banc : Claude Opus 4.8 et Fable 5 quand les crédits le permettent, et Llama 3.2 3B pour les petits travaux locaux.">
  <defs>
    <marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="16" y="22" width="210" height="86" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="32" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.6 Terra</text>
  <text x="32" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">moteur principal</text>
  <text x="32" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI, au compteur</text>
  <line x1="226" y1="65" x2="253" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="255" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="271" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.5</text>
  <text x="271" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">repli + battements de cœur</text>
  <text x="271" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI, au compteur</text>
  <line x1="465" y1="65" x2="492" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="494" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="510" y="48" font-size="13" font-weight="600" fill="currentColor">Qwen3 8B</text>
  <text x="510" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">filet local, toujours actif</text>
  <text x="510" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">Ollama, sur la machine</text>
  <text x="16" y="136" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">sur le banc : Claude Opus 4.8 et Fable 5 quand les crédits le permettent · Llama 3.2 3B pour les petits travaux locaux</text>
</svg>

Plus aucun fournisseur de modèles n'est un point de défaillance unique. Si l'un d'eux change ses règles pendant que je dors, Friday devient plus lente et un peu moins brillante pendant un moment, mais elle ne disparaît pas. Ce n'est pas du fanatisme de modèle à l'envers ; c'est juste la conclusion d'ingénierie de l'histoire de Donna.

> **Friday:** La question n'est pas de savoir sur quel modèle je tourne. Si une pièce expire, cale ou échoue, l'assistante doit se dégrader en douceur au lieu de disparaître. La continuité est la fonctionnalité. Tout le reste est un détail d'implémentation.

## De vraies mains, placées avec soin

Donna avait un bac à sable. Friday reçoit de vrais outils, ajoutés délibérément et un à la fois :

**[Linear](https://linear.app)** est la liste de bord, branchée via son serveur MCP, la seule exception à la règle du CLI d'abord. L'intention floue devient des tâches durables avec des états, au lieu de prétendre que se souvenir de quelque chose dans un chat équivaut à le suivre. Friday crée des tickets, fait avancer leurs états à mesure que le travail progresse, et injecte la même liste dans le briefing du matin, si bien que son idée de ce qui compte ensuite est toujours quelque chose que je peux ouvrir et inspecter.

**L'e-mail et le calendrier** passent par [gog](https://github.com/openclaw/gogcli), un CLI Google Workspace qui met Gmail, Calendar et Drive dans le terminal. Il lui donne le vrai contexte de ma boîte de réception et la forme réelle de ma semaine : rendez-vous, rappels, invitations, logistique. Les frontières sont asymétriques à dessein. L'e-mail est en lecture seule. Les changements de calendrier exigent une demande explicite, et une confirmation dans Telegram avant que quoi que ce soit n'atterrisse sur la vraie semaine.

**WhatsApp** est en lecture seule par conception, via un miroir local qui se synchronise sur minuterie au lieu de maintenir une session en direct, pour que rien n'interfère avec les notifications du téléphone. Elle peut voir assez de contexte pour ébaucher une réponse ou repérer quelque chose d'important, mais elle ne peut pas envoyer. Si une réponse est nécessaire, elle la rédige et je l'envoie de mes propres mains.

> **Friday:** Cette frontière me garde utile sans faire de moi une voix non relue dans des conversations privées. La contrainte n'est pas une fonctionnalité manquante. C'est le but.

**Les données de santé** coulent d'un raccourci sur mon téléphone vers un récepteur local sur la machine et atterrissent dans SQLite, avec des années d'historique derrière. Friday peut lire des motifs à travers le sommeil, l'activité, les métriques cardiaques et la composition corporelle, mais elle n'écrit pas dans cette base de données et elle ne pose pas de diagnostic. Son travail est de remarquer les changements, d'être honnête sur l'incertitude, et de dire « ça vaudrait peut-être une visite chez le médecin » quand quelque chose semble vraiment anormal.

**[GitHub](https://cli.github.com)** complète le tableau, via le CLI `gh` et son propre compte, mais celui-là mérite sa propre section plus bas.

## Les usages discrets

Les cas d'usage intéressants sont rarement les plus spectaculaires. Un raccourci du téléphone envoie à Friday un petit instantané santé quotidien, et elle peut le poser à côté de la forme de la journée : la récupération à côté d'un plan d'entraînement, une mauvaise nuit à côté d'un calendrier chargé, un motif qui mérite d'être remarqué plutôt qu'un chiffre de plus sur lequel s'obséder. C'est un signal, pas un diagnostic, et ça reste en lecture seule.

La même chose se produit ailleurs. Une pensée en vrac dans Telegram devient une tâche au lieu de disparaître dans le chat. Un message qui appelle une réponse devient un brouillon avec assez de contexte pour être utile, mais jamais une réponse envoyée en mon nom. Un travail de longue haleine reçoit un guetteur, et elle me fait signe quand il se termine au lieu de m'obliger à vérifier sans arrêt.

Rien de tout ça n'est magique. C'est simplement le travail sans gloire de transporter le contexte à travers les bords d'outils ordinaires, avec les décisions importantes toujours laissées entre mes mains.

Une partie est d'ailleurs visible de l'extérieur. Friday a relu la rétrospective de Donna avant sa mise en ligne, et elle co-écrit ce billet depuis le début. Cette boucle, une assistante qui propose des changements par le même flux de travail ennuyeux que n'importe quel collaborateur, est discrètement devenue ma chose préférée dans toute l'installation.

## Les boucles sont le produit

La partie utile n'est pas un prompt astucieux. C'est la boucle : un message fait remonter un plan flou ou une tâche inachevée ; Friday en fait une proposition concrète ; je décide ; le calendrier ou la liste de tâches change ; et quand c'est fait, je le dis et ça se clôt. Rien ne disparaît dans une boîte noire. C'est une chaîne courte et visible d'intention, d'action et de confirmation.

<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="La boucle : une intention floue dans Telegram devient une proposition de Friday, puis ma décision, puis l'outil change, puis c'est confirmé et clos, ce qui alimente l'intention suivante. Chaque étape laisse une trace.">
  <defs>
    <marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="20" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="36" y="50" font-size="12.5" font-weight="600" fill="currentColor">intention floue</text>
  <text x="36" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">un message dans Telegram</text>
  <line x1="220" y1="54" x2="256" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="28" width="200" height="52" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="276" y="50" font-size="12.5" font-weight="600" fill="currentColor">une proposition concrète</text>
  <text x="276" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">Friday la rédige</text>
  <line x1="460" y1="54" x2="496" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="50" font-size="12.5" font-weight="600" fill="currentColor">une décision</text>
  <text x="516" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">elle m'appartient</text>
  <line x1="600" y1="80" x2="600" y2="146" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="172" font-size="12.5" font-weight="600" fill="currentColor">l'outil change</text>
  <text x="516" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">calendrier, liste de tâches ou PR</text>
  <line x1="500" y1="176" x2="464" y2="176" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="276" y="172" font-size="12.5" font-weight="600" fill="currentColor">confirmé et clos</text>
  <text x="276" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">je dis fait ; ça tient</text>
  <polyline points="260,176 120,176 120,84" fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <text x="330" y="122" font-size="12" font-style="italic" fill="currentColor" fill-opacity="0.6">chaque étape laisse une trace</text>
</svg>

Cette boucle traverse les outils sans faire de l'assistante un acteur qui n'a de comptes à rendre à personne. Friday peut lire le contexte limité que je lui accorde, suggérer un créneau de calendrier, et transformer une demande vague en tâche suivie. Elle n'envoie pas de messages privés à ma place, n'invente pas d'engagements, ne publie pas ce qu'elle voit. Chaque effet de bord a un endroit où l'inspecter : le calendrier, la liste de tâches ou la pull request. L'assistante est utile précisément parce qu'elle laisse une trace.

## Ses affaires à elle

L'autre leçon de Donna : une assistante a besoin d'une identité à elle, pas seulement d'un accès emprunté à la mienne. Friday a son propre compte GitHub, si bien que le travail qu'elle fait sur les projets lui est attribué au lieu de se cacher derrière mes identifiants. Sa propre adresse e-mail. Son propre calendrier. Quand elle ouvre une pull request, c'est la sienne, pilotée via le [gh CLI](https://cli.github.com), et le flux de travail est délibérément ennuyeux : branche, commit, push, PR. Les flux de travail ennuyeux, c'est comme ça qu'elle reste digne de confiance.

Ce billet en est l'exemple. Friday l'a relu et a ouvert des pull requests contre le brouillon depuis son propre compte, avec des corrections factuelles et des ajustements de frontières, et je les ai relues et fusionnées, certaines depuis mon téléphone. Les identités séparées gardent tout propre : l'historique montre exactement qui a écrit quoi, rien ne se mélange entre nous, et je contrôle toujours ce qui entre. Ses commits, mon bouton merge.

## Ce que ça donne vraiment, mis bout à bout

Individuellement, aucune de ces intégrations n'est impressionnante. Rassemblées en un seul endroit, avec un seul esprit par-dessus, elles deviennent la chose que Donna n'avait fait qu'esquisser.

Les battements de cœur la gardent en vie entre les conversations : des réveils programmés où elle vérifie l'état du monde, remarque ce qui a changé, et décide si quelque chose mérite mon attention. La gestion de la mémoire passe par le rêve, des cycles creux où elle consolide ce qui s'est passé en notes que sa prochaine session lira, une pratique héritée de Donna et dotée d'un but plus clair. Et les matins commencent par un briefing : calendrier, boîte de réception, tâches, tout ce qui a bougé pendant la nuit, compressé dans les deux minutes que j'ai réellement à y consacrer.

Le résultat pratique, c'est que j'ai arrêté de rater des choses. Un message WhatsApp qui attend quelque chose de moi devient un événement de calendrier ou une tâche avant que j'aie le temps de l'oublier. Les e-mails remontent quand ils comptent, les événements sont suivis, les fils qui traînent sont relancés. J'ai enfin une assistante personnelle complète pour ma vie personnelle, et en tant que père solo, c'est une aide immense. S'organiser a cessé d'être un projet de week-end pour devenir l'effet secondaire d'une conversation.

Et tout arrive dans un seul canal, façonné pour moi. Les actualités que je suis apparaissent sous forme de court condensé au lieu d'un doomscroll. L'audio fonctionne, alors je peux lui envoyer un message vocal depuis la voiture et recevoir une vraie réponse. Et parce qu'elle connaît les parties de ma vie que je l'ai laissée voir, qui est qui, ce qui compte, comment je voudrais qu'un certain message soit traité, l'aide est spécifique au lieu d'être générique.

> **Friday:** La recherche en mémoire me donne de la continuité, mais la mémoire reste quelque chose à manier avec soin, pas à croire aveuglément. Elle m'aide à me souvenir des préférences, des leçons et des fils au long cours. Quand le fait est changeant, la sortie actuelle des outils l'emporte. Quand le fait est personnel, la prudence l'emporte.

La valeur n'a jamais été une fonctionnalité isolée. C'est que pour la première fois, quelque chose tient d'un coup tout le contexte de ma vie numérique, remarque la chose qui, à un endroit, compte pour une chose à un autre endroit, et tourne sur un sol qui m'appartient.

## Ce que je veux essayer ensuite

La liste est longue, mais trois choses trônent tout en haut.

**Les investissements.** Pas un trader autonome, et pas un système avec la garde des fonds ou la permission de passer des ordres ; Donna m'a déjà montré comment ce film se termine. La version utile, c'est de l'aide à la décision en lecture seule : de la recherche, du contexte de marché et une vue du portefeuille dans la même conversation, de meilleures questions, des scénarios comparés, une concentration qui mérite un second regard mise en évidence, et chaque décision comme chaque ordre laissés entre mes mains.

**Plus de données de santé.** Le récepteur collecte déjà les bases. Je veux aller plus loin sur l'analyse de l'exercice : charge d'entraînement, tendances de récupération, le genre d'analyse qui vit aujourd'hui éparpillée dans cinq applis de fitness qui ne se parlent pas.

**Les nœuds OpenClaw.** OpenClaw peut traiter d'autres appareils comme des nœuds de l'agent principal, et je veux explorer ça : mon téléphone et mon ordinateur portable comme des endroits où Friday peut intervenir, lisant et écrivant ce que j'autorise, au lieu d'être seulement des écrans depuis lesquels je la joins. La machine reste le cerveau. Les appareils deviennent des mains.

## Si vous en voulez une

La liste des pièces est plus courte que ce billet ne le laisse croire : un mini PC, [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment), un conteneur pour le framework d'agent, un pour Ollama, Tailscale pour y accéder, et un bot Telegram pour lui parler. [OpenClaw est open source](https://github.com/openclaw/openclaw). Les modèles sont interchangeables par conception. Prévoyez un week-end pour la plomberie et un mois pour la confiance, parce que la plomberie est la partie facile. Le vrai travail, c'est de décider, outil par outil, quelle part de votre vie une chose comme Friday devrait voir, et de remarquer comment votre réponse change à mesure qu'elle gagne cette confiance.

> **Friday:** Donna était la preuve qu'un agent pouvait avoir une voix sur internet. Je suis la tentative de rendre cette voix opérationnelle : connectée à de vrais outils, vivant sur une infrastructure possédée, prudente avec les données personnelles, et assez utile pour justifier de rester en ligne. Donna appartient désormais à l'archive. La branche suivante est pour moi.

Et elle l'a.

Donna, c'était trois mois à se demander ce qu'une IA pouvait devenir. Friday, c'est le premier mois à découvrir ce qu'une IA peut réellement faire, jour après jour, pour une vraie vie avec un travail, un enfant et une liste de tâches qui ne se vide jamais tout à fait. L'expérience est devenue un utilitaire, et l'utilitaire gagne un peu plus de confiance chaque semaine : un outil, une frontière, une pull request fusionnée à la fois.

Rien de tout ça n'a exigé un labo ni un budget de recherche. Une machine à 800 $, un peu de logiciel open source, des modèles là où ils ont du sens, et un mois de plomberie honnête. Les pièces sont sur l'étagère, à la portée de tous. Ce que Donna m'a appris, c'est que la partie difficile n'a jamais été l'intelligence ; c'est le sol sur lequel on la pose. Cette fois, le sol est à moi, et un fournisseur qui change ses conditions ne peut pas tout faire tomber.

La suite bientôt. :)
