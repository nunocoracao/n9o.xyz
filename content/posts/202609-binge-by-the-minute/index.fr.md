---
title: "Netflix nous a appris à binger. Ces applis le vendent à la minute."
summary: "Une pub Instagram pour un moins que rien secrètement tout-puissant m'a mené à une page d'atterrissage jetable, une appli à 100 millions d'installations, une société dans un immeuble industriel de Hong Kong et un pass hebdomadaire que les gens disent ne pas pouvoir résilier. J'ai suivi l'argent."
description: "Ce qu'une pub de drama vertical vend vraiment : le tunnel, l'économie des pièces, les sociétés derrière ShortMax, ReelShort et DramaBox, et si tout cela relève du slop IA."
categories: ["Tech", "Médias", "Business"]
tags: ["médias", "mobile", "publicité", "microdrama", "ia", "enquête"]
date: 2026-09-27
---

Pendant une semaine, Instagram a insisté pour que je fasse la connaissance de Nate Ryder.

Nate est pauvre. Tout le monde le déteste. Un garçon plus riche a ruiné sa famille. Un tournoi national approche. Heureusement, Nate est aussi, en secret, un dieu du tonnerre de rang SSS, ce qui semble être une information utile qu'il aurait pu mentionner plus tôt.

Juste au moment où il s'apprête à se révéler, la pub s'arrête.

La série s'appelle *SSS-Rank: The Slum-Born Thunder God*. Elle ne perd pas de temps avec l'ambiguïté. Ses méchants ont fait de l'humiliation publique une carrière à plein temps, son héros est à un poing lumineux de la vengeance, et le bouton sous la vidéo offre la seule chose que je veux désormais : la minute suivante.

La qualité de l'ensemble était affreuse. Le jeu, l'écriture, la lumière, le son, le montage, le rythme, la synchronisation labiale, les plans de foule, les mains, les visages qui changent d'un plan à l'autre, le texte à l'écran : tout était faux. C'était aussi captivant. C'était du slop généré par IA avec une accroche, et je voulais voir la suite.

Je n'ai pas appuyé sur le bouton. J'ai ouvert le code source de la page à la place.

La faute à [ma carrière](/about/). J'en ai passé les six ou sept premières années dans la télévision et le streaming, et je n'ai jamais perdu l'habitude d'observer ce que font les grands acteurs : Netflix, Amazon Prime Video, HBO et les autres. Ces deux dernières années ont été fascinantes à suivre. Là, c'était différent. Pas l'IA, à laquelle je m'attendais, mais la quantité de machinerie qui se cachait derrière une mauvaise minute de vidéo.

Voici donc ce que je regardais, où mène le bouton, et qui est payé. Ce que j'ai trouvé, c'est une très vieille machine habillée de neuf, et un premier aperçu de ce que deviennent les histoires quand la seule question qui reste est de savoir si vous allez payer.

## Qu'est-ce que je regardais

Retirez la foudre et ce qui reste, c'est le manuel de Netflix.

Netflix a passé une décennie à nous apprendre à binger. La société a [déclaré le binge watching « la nouvelle norme »](https://www.prnewswire.com/news-releases/netflix-declares-binge-watching-is-the-new-normal-235713431.html) dès 2013, et a construit le produit autour de cette idée : chaque épisode se termine sur une accroche pour que le compte à rebours de la lecture automatique l'emporte et que six heures disparaissent un mardi. La pub du dieu du tonnerre, c'est cette idée réduite à l'essentiel. Il n'y a pas de saison à parcourir. Il y a une minute, une injustice, une accroche, puis un verrou.

Chaque épisode fait avancer l'histoire d'exactement une unité émotionnelle :

- une insulte ;
- un plan de réaction ;
- un indice que le héros pourrait être spécial ;
- personne ne croit à l'indice ;
- quelqu'un fait monter les enchères ;
- coupure sur le verrou.

L'histoire existe pour fabriquer un sentiment, vite : cette personne subit une injustice, et vous voulez la voir réparée. Le [synopsis officiel](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605) fait le travail en quatre phrases. Nate est « rejeté comme un raté sans valeur ». La santé de son père a été « détruite en vendant son sang pour un sérum » qu'une « brute privilégiée » a ensuite détruit. La brute « compte l'humilier devant des milliers de personnes ». Au lieu de quoi, Nate « stupéfie le monde et entame son ascension irrésistible ». Une caractérisation subtile ne ferait que ralentir la transaction.

L'affiche est l'indice le plus clair.

{{< figure src="poster.webp" alt="Affiche de SSS-Rank: The Slum-Born Thunder God. Un jeune homme accroupi sur un ring de boxe, des éclairs bleus autour des poings. Derrière lui se tiennent trois femmes blondes quasi identiques et un homme renfrogné en sweat à capuche. Le titre est frappé dans le sol en lettres de métal." caption="L'affiche de [*SSS-Rank: The Slum-Born Thunder God*](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605), telle que servie par le serveur de campagne de ShortMax. Mise en ligne le 18 août 2026." >}}

Trois femmes blondes quasi identiques sur un ring de boxe, une peau sans pores, une lumière sans source, et un titre frappé dans le sol en métal. La page de la série crédite une « Créatrice : Grace Whitman » et personne d'autre. Pas de distribution, pas de réalisateur, pas de studio. Soixante et un épisodes, et pas un seul nom humain vérifiable.

L'histoire n'est pas le produit. L'histoire est l'appât, et le produit est la minute suivante. Netflix a supprimé l'attente entre les épisodes. Ici, on supprime tout le reste : le scénario, le jeu, le goût, la valeur de production, les noms humains. Ce qui reste est une machine à vous donner envie de voir la suite, et l'art de raconter des histoires remplacé par une transaction de casino.

## Ce qui se passe ensuite

Le lien de la pub mène à [`storyreel.life`](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en), sous la marque **StoryReel**. Ça ressemble à un site de streaming : l'affiche, le synopsis, un bouton orange qui pulse avec la mention « Continuer à regarder » et une petite main animée qui pointe dessus.

Ce n'est pas un site de streaming. StoryReel n'héberge pas la moindre vidéo. Son code fait quatre choses qui comptent.

1. Il récupère l'affiche, le titre et le synopsis depuis un serveur de campagne **ShortMax**, indexé par l'identifiant de pub dans l'URL.
2. Il prend l'empreinte de votre navigateur, détermine votre adresse IP et signale votre arrivée, avec l'identifiant de clic que Meta a attaché au lien.
3. Quand vous touchez n'importe où sur la page (le bouton est décoratif ; toute la page est le bouton), il copie dans votre presse-papiers un code caché contenant l'identifiant de l'épisode.
4. Il tente d'ouvrir l'appli ShortMax avec un lien `shorttv://`. Si l'appli n'est pas installée, il vous envoie vers l'[App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) ou [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps). Le code dans le presse-papiers est là pour que l'appli puisse le lire après l'installation et vous déposer directement dans l'épisode que vous regardiez.

Ce dernier tour est la raison pour laquelle le tunnel ne vous perd pas entre la pub et l'appli. C'est aussi pour cela que la page ne m'a jamais rien demandé. Pas de compte, pas de prix, pas de conditions. Tout cela attend dans l'appli, une fois que l'accroche a fait son travail.

{{< inlinesvg src="funnel.svg" alt="Diagramme animé de deux boucles reliées par un nœud commun. À gauche, un spectateur passe d'une pub dans le fil aux épisodes gratuits, puis à un cliffhanger, puis à l'installation de l'appli, et recommence. À droite, l'argent va du cliffhanger aux pièces ou au pass, puis à l'achat de nouvelles pubs, et revient aux épisodes gratuits." caption="Deux boucles qui partagent un cliffhanger. Le spectateur tourne dans celle de gauche. L'argent tourne dans celle de droite. Aucune des deux n'a de sortie prévue." >}}

La série elle-même vit sur le site de ShortMax sous le nom de [drama 32605](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605), avec 61 épisodes. Le [serveur de campagne](https://prod-api.storyreel.life/prod-api/16/app/hiCampaignLink/getConfig?adId=288123&pageType=1&ver=001) rapporte 6 076 623 lectures. Le fichier de l'affiche est daté du 18 août 2026, cinq semaines avant d'atteindre mon fil.

Ai-je dû payer ? Pas encore. Une fois la série trouvée sur le site de ShortMax, elle m'a proposé les cinq premiers épisodes gratuitement. Tout ce qui vient après exige l'appli. Je n'en ai regardé aucun et je n'ai rien installé, donc les prix viennent de la [fiche du store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) plutôt que du paywall lui-même. La fiche montre ce qui attend : des packs de pièces de 3,49 $ à 24,99 $, et un « Weekly Pass Pro » à 9,99 $ ou 19,99 $. Vingt dollars par semaine, ce n'est pas une coquille. Un avis sur la fiche note que les épisodes coûtent jusqu'à 60 pièces chacun, et que « vous ne voyez le montant qu'une fois à court de pièces, quand l'appli veut que vous en achetiez d'autres ».

L'appli est classée 18+ et, selon le résumé de confidentialité d'Apple, utilise les identifiants de votre appareil pour vous suivre dans les applis d'autres sociétés. La page avait déjà pris mon empreinte avant que j'en arrive là.

## Qui fabrique ça

La catégorie s'appelle **microdrama**, **short drama** ou **drama vertical** : de la fiction scénarisée faite pour un téléphone tenu à la verticale, en épisodes d'environ une minute. Ce n'est pas petit.

Au premier trimestre 2026, [Sensor Tower estimait](https://sensortower.com/blog/state-of-short-drama-apps-2026-report) que les applis de short drama avaient dépassé **850 millions de téléchargements en trois mois**, en hausse de 140 % sur un an. Les revenus des achats intégrés ont atteint environ **750 millions de dollars sur le trimestre**, soit **3 milliards de dollars par an** à ce rythme. Six applis de short drama figuraient parmi les 40 applis les plus téléchargées au monde. En avril, les gens y passaient en moyenne 25 minutes par jour. L'épisode dure une minute. L'habitude, non.

Ces chiffres sont des estimations de l'activité sur l'App Store et Google Play. Ils excluent les revenus publicitaires et les stores Android tiers, donc le vrai chiffre est plus élevé.

Trois sociétés montrent trois versions du même produit d'exportation.

**ReelShort** appartient à [Crazy Maple Studio](https://www.crazymaplestudios.com/), fondé à San Francisco en 2016, lui-même filiale de [COL Group](https://restofworld.org/2023/what-is-reelshort/), une société chinoise de littérature en ligne. Cette filiation compte : ils ne sont pas arrivés au short drama en rétrécissant la télévision. Ils sont arrivés par la fiction web en feuilleton, qui savait déjà faire payer au chapitre. [TechCrunch a saisi la machine en pleine accélération](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/) en novembre 2023 : 22 millions de dollars de revenus nets depuis le lancement, un samedi à 326 000 installations et 459 000 $ de revenus, et environ 8 100 pubs tournant en même temps sur Meta aux États-Unis. Au premier trimestre 2026, Sensor Tower le situait près de 140 millions de dollars de revenus d'achats intégrés sur le trimestre.

**DramaBox** est vendu par [StoryMatrix Pte. Ltd.](https://apps.apple.com/us/app/dramabox-stream-drama-shorts/id6445905219), une entité singapourienne, et sa maison mère est [Dianzhong Technology](https://restofworld.org/2023/what-is-reelshort/). C'est celle qui entre sur le plateau du studio. DramaBox a rejoint le [Disney Accelerator 2025](https://thewaltdisneycompany.com/news/disney-accelerator-2025/), où Disney Publishing a dit être en discussion pour adapter des romans de fantasy young adult en microdramas pour les plateformes Disney, et Disney Music explore la transformation d'albums en courts formats vidéo verticaux. Ce n'est pas seulement un badge. Disney dit que [les participants « reçoivent un capital d'investissement »](https://thewaltdisneycompany.com/news/disney-accelerator-companies-2025/), donc la société en détient une part, si petite soit-elle ; le montant n'est pas divulgué. Un accélérateur n'est pas une acquisition. Cela signifie tout de même qu'un format balayé comme boue de fil d'actualité il y a deux ans est désormais quelque chose dont Disney a payé pour se rapprocher. Le dieu du tonnerre est entré dans le bâtiment. Il porte un badge visiteur, et c'est Disney qui le lui a acheté.

**ShortMax**, l'appli derrière ma pub, est la plus grosse et la moins lisible. [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps) affiche plus de 100 millions d'installations. La [fiche App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) revendique 50 000 dramas et films en 19 langues. Le vendeur sur les deux stores est **SHORTTV LIMITED**, que ses propres [conditions d'utilisation](https://www.shorttv.live/Temsof) situent à « Unit 2-J3, 1st Floor, Fuk Hong Industrial Building » à Mong Kok, Hong Kong. Les médias d'État chinois [rapportent](https://www.chinadailyhk.com/hk/article/624225) que ShortMax appartient à Jiuzhou Culture, un producteur chinois de short dramas. Je n'ai trouvé aucun dépôt officiel qui le confirme.

{{< inlinesvg src="layers.svg" alt="Diagramme de quatre cases alignées, chacune plus solide que la précédente : StoryReel, le nom dans la pub ; ShortMax, l'appli ; SHORTTV LIMITED, le vendeur à Hong Kong ; et Propriétaire, présenté comme Jiuzhou Culture sans aucun dépôt officiel vu. Des pièces circulent en dessous, de gauche à droite." caption="Chaque couche est plus solide que la précédente, et chacune est plus difficile à atteindre. La marque de la pub peut être jetée demain. Le propriétaire est un article de presse." >}}

Cette structure n'est pas sinistre en soi. Une marque de campagne peut être remplacée sans reconstruire l'appli. L'appli conserve votre compte et votre relation de paiement. Le vendeur légal reste invisible à moins que quelqu'un lise les petits caractères.

### Sont-elles toutes chinoises ?

Oui, et aucune ne sert la Chine.

Chacune des trois remonte à une maison mère chinoise : ReelShort à COL Group, DramaBox à Dianzhong, ShortMax, selon la presse, à Jiuzhou Culture. Les sociétés californienne, singapourienne et hongkongaise intercalées sont la forme standard d'une appli grand public chinoise qui part à l'étranger. TikTok, Shein et Temu sont bâtis de la même façon.

Ce sont des produits d'exportation. Le marché domestique tourne sur Douyin, Kuaishou, WeChat et Hongguo de ByteDance, avec d'autres applis et d'autres séries, et il est bien plus gros : le régulateur compte [800 millions d'utilisateurs et plus de 100 milliards de yuans (environ 15 milliards de dollars) en 2025](https://www.globaltimes.cn/page/202609/1370760.shtml). Chez eux, les microdramas sont soumis à licence, [68 000 ont été retirés cette année](https://www.globaltimes.cn/page/202609/1370760.shtml) comme nuisibles, vulgaires ou piratés, et [ceux faits par IA doivent porter une étiquette](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html). Le dieu du tonnerre ne porte aucune étiquette. Aucune de ces règles ne suit les versions d'exportation hors du pays.

Est-ce parrainé par l'État ? Pas au sens d'une opération. Au sens d'une politique industrielle, ouvertement. Le vice-ministre du régulateur a déclaré le 17 septembre 2026 que, jusqu'en 2030, l'État allait [« soutenir les contenus et les plateformes qui partent à l'étranger »](https://www.globaltimes.cn/page/202609/1370760.shtml), et que les microdramas chinois détiennent déjà [plus de 80 % du marché à l'étranger](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html). [Des villes rivalisent de subventions](https://www.globaltimes.cn/page/202605/1362076.shtml) pour accueillir les studios. La Corée du Sud a fait quelque chose de similaire pour le K-drama, et personne n'a parlé d'attaque. Un [essai du Yale Journal of International Affairs](https://www.yalejournal.org/publications/micro-drama-as-soft-power-yedbr) de mai 2026 soutient que savoir si Pékin dirige cela ou se contente de le permettre est une question secondaire. Ce qui compte, c'est qu'un pipeline de cette taille décide « quelles histoires entrent dans le temps de loisir des Américains », et que chacun de ses goulots d'étranglement se situe hors de toute régulation occidentale.

Le fingerprinting et la collecte d'IP que j'ai trouvés sur la page d'atterrissage sont réels, et ils relèvent aussi de l'adtech standard. Je n'ai aucune preuve les reliant à autre chose que du suivi de conversion, et je ne vais pas en inventer.

Pas sinistre, donc. Mais ces quatre couches sont ce qui rend la suite très difficile à corriger.

### L'abonnement que personne ne trouve

Les conditions de ShortMax disent qu'un abonnement « sera renouvelé automatiquement 24 heures avant la date d'expiration », et que pour résilier il faut « se reporter à la section “About Subscription” dans l'appli ShortMax ». Elles disent aussi que les paiements « doivent être effectués via les méthodes spécifiées par ShortMax », que la société « a le droit d'ajuster ».

Les utilisateurs disent ne pas trouver la sortie. Sur [Trustpilot](https://www.trustpilot.com/review/www.shortmax.app), ShortMax obtient 1,2 sur 5 pour 77 avis, dont 99 % à une étoile. Les plaintes se répètent : facturé 19,99 $ par semaine après résiliation, facturé 13,99 $ sans jamais s'être abonné, un essai gratuit devenu 239,88 $. Ce dernier chiffre fait douze fois 19,99 $, soit ce que coûteraient douze renouvellements hebdomadaires. Plusieurs disent que l'abonnement n'apparaît pas dans leurs réglages Apple ou Google, là où on le résilierait normalement, et que la seule chose qui a fonctionné a été d'appeler leur banque.

Le [Better Business Bureau](https://www.bbb.org/us/fl/miami/profile/mobile-apps/shortmax-innovations-0633-92056233/complaints) recense une « Shortmax Innovations » à une adresse de Brickell Avenue à Miami, avec une note F et 149 plaintes clôturées en trois ans. Son enquête de juin 2026 n'a trouvé aucune immatriculation valide, aucun propriétaire identifié, ni email ni téléphone en état de marche. Que ce soit le nom qui figure sur les relevés de carte des gens ou une coïncidence, je ne peux pas le dire à partir des registres publics. Ce n'est pas la société des conditions d'utilisation.

Je veux rester prudent ici. Ce sont des témoignages d'utilisateurs et un agrégateur de plaintes, pas une décision de justice. Mais le schéma est cohérent d'une source à l'autre, il est cohérent avec les conditions, et il colle au tunnel. Un produit aussi efficace pour supprimer la friction à l'entrée n'a aucune raison commerciale d'en ajouter à la sortie.

### Pourquoi la pièce est le vrai protagoniste

L'économie prend sens dès qu'on cesse de comparer ces applis à Netflix.

Netflix vend l'accès à un catalogue. Les applis de microdrama vendent la **résolution**. Un abonnement demande si un service entier vaut la peine d'être payé, une fois par mois, dans un moment calme. Une pièce pose une question plus petite à un moment bien plus chaud : voulez-vous savoir ce qui se passe ensuite ?

Donc le chiffre qui compte n'est pas le revenu. C'est le rapport entre ce que coûte l'acquisition d'un spectateur payant et ce que ce spectateur dépense avant de partir. Si une cohorte couvre la production, la commission des stores, les spectateurs gratuits et la prochaine vague de pubs, la campagne passe à l'échelle. Sinon, StoryReel disparaît et une nouvelle marque apparaît demain avec un loup-garou milliardaire, une héritière abandonnée ou un chirurgien dont la famille a commis l'erreur catastrophique de douter de lui.

C'est là que l'IA entre en jeu, et ce n'est pas là où je l'attendais.

Les microdramas tournés avec des humains coûtent de l'argent réel : le New York Times [chiffrait une série de 150 000 à 300 000 dollars](https://www.c21media.net/news/ai-slashing-cost-of-microdrama-production-in-china-to-30-per-minute/) en mai 2026. Le même reportage a trouvé des producteurs chinois qui les fabriquent pour à peine **30 dollars la minute** avec des outils d'IA qui « éliminent presque complètement les humains ». DataEye a compté près de 50 000 nouveaux microdramas générés par IA sur Douyin pour le seul mois de mars 2026. En septembre, le régulateur lui-même a dit que la Chine avait sorti [430 000 microdramas au cours des huit premiers mois de l'année, dont plus de 90 % faits par IA](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html), treize fois l'ensemble de 2025.

{{< inlinesvg src="cost.svg" alt="Diagramme en barres comparant le coût d'une série. Tournée avec des humains : une longue barre étiquetée 150 000 à 300 000 dollars. Faite par IA, 61 minutes à 30 dollars la minute : une barre de quatre pixels de large étiquetée environ 1 800 dollars." caption="Ce que coûte la fabrication d'une série de 61 épisodes, à la même échelle. La barre IA est dessinée à taille réelle." >}}

À 30 dollars la minute, mon dieu du tonnerre en 61 épisodes coûterait environ 1 800 $ à produire. À ce prix, le calcul d'acquisition change du tout au tout. Vous n'avez plus besoin d'un succès. Vous avez besoin de mille tentatives, d'un tableau de bord, et de la discipline de tuer tout ce qui ne convertit pas. L'histoire cesse d'être le produit. Elle devient une variante de pub.

## Est-ce du slop IA ?

À mon avis, oui, sans le moindre doute. J'ai listé ce qui clochait en ouverture et je ne le répéterai pas. Ce n'est pas une question de goût. C'est une question de métier.

Il y a quelque temps, j'ai surpris deux amis en train de débattre d'art, de technologie et d'IA. L'un des deux est artiste. L'un a dit : « oui, mais l'art est subjectif », et la réponse a été : « oui, mais pas le métier ». C'est la distinction qui compte ici. Personne parmi ceux impliqués dans le dieu du tonnerre n'essayait de raconter une histoire, donc il n'y a pas d'histoire à juger. La série existe pour vous donner envie d'appuyer sur un bouton, et le fait que vous ayez envie d'appuyer ne la rend pas bonne. Les machines à sous aussi sont captivantes.

Le régulateur chinois lui-même, dans la même annonce qui comptait plus de 90 % des sorties de l'année comme faites par IA, [a qualifié la prise de vues réelle de « pilier des productions de qualité »](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html) et y a mis de l'argent. Le pays qui produit le slop reconnaît que c'est du slop.

L'IA est un outil, pas une baguette magique. Ce n'est pas la raison pour laquelle cela arrive. C'est ce qui le rend possible. Quelqu'un a décidé que l'histoire n'avait jamais été le sujet, et l'IA a rendu cette décision presque gratuite. Pas d'âme, pas de métier, pas d'art. Juste une machine qui joue sur un réflexe, avec un bouton au bout.

## Conclusions

Je suis parti chercher qui est payé et j'ai trouvé la réponse à chaque couche sauf la dernière. Ce que je ne m'attendais pas à trouver, c'est à quel point l'argent avait peu à voir avec la série.

**L'art contre le casino.** Netflix nous a appris à binger, mais il devait fabriquer quelque chose que les gens aimaient pour les garder. L'accroche ne fonctionnait que parce que vous vous souciiez de ce qui arrivait aux personnages. Le dieu du tonnerre garde l'accroche et jette le souci des personnages. Vouloir savoir la suite était autrefois la récompense d'une histoire bien racontée. Ici, ce désir a été isolé, purifié et vendu à la minute, comme le principe actif extrait d'une plante. C'est la différence entre un théâtre et une machine à sous, et les deux ne devraient pas être confondus parce qu'ils partagent un écran.

**Le côté gouvernement.** Les utilisateurs disent ne pas pouvoir résilier parce que l'abonnement n'apparaît jamais dans leurs réglages Apple ou Google, ce qui signifie qu'il est facturé d'une autre manière. Chaque abonnement facturé par ces deux-là a un bouton de résiliation dans les réglages de votre téléphone, à côté de celui de Netflix. Ce qui a facturé ces utilisateurs ne leur en a pas donné. Le remède est aussi vieux que la vente par correspondance : quiconque prélève un paiement récurrent doit rendre l'arrêt aussi facile que le départ. Deux autres remèdes sont tout aussi ennuyeux : une étiquette sur la vidéo synthétique, que la Chine exige chez elle et n'exige pas de ses exportations, et un vendeur dont le nom correspond à celui de votre relevé de carte. Rien de tout cela ne demande une nouvelle loi sur l'IA. Cela demande que les vieilles règles de la vente soient appliquées à une appli qui a beaucoup travaillé pour se tenir juste en dehors.

**Le côté tech.** L'IA n'a pas inventé cela. Elle a fait descendre le coût marginal d'une histoire à quelque chose comme mille huit cents dollars, et quand l'histoire est aussi proche du gratuit, vous n'en faites pas une meilleure, vous en faites 430 000 et vous laissez le tableau de bord choisir. L'automatisation optimise ce vers quoi on la pointe. Celle-ci était pointée vers le bouton.

**Ce qu'est le slop, et ce qu'il n'est pas.** Le slop n'est pas un verdict sur l'IA, et ce n'est pas un verdict sur les gens qui regardent 25 minutes par jour, qui obtiennent exactement le réflexe qu'on leur a vendu. Le slop, c'est du contenu fait sans autre intention que la transaction. Il compte parce qu'il fonctionne, et ce qui fonctionne se fait copier. Disney n'a pas mis de l'argent dans DramaBox pour apprendre à raconter des histoires. Il en a mis pour apprendre le bouton.

Nous avons inventé les histoires pour découvrir qui nous sommes. Nate Ryder a été inventé pour découvrir si vous alliez payer.

Voilà à quoi ça ressemble quand le goût, l'émotion, l'âme et la créativité sont poussés hors du chemin, et que ce qui prend leur place est bon marché, efficace et prédateur, pointé droit sur votre portefeuille. Ce n'est pas un nouveau genre de divertissement. C'est ce qui reste du divertissement une fois qu'on a retiré tout ce qui valait la peine d'être payé, sauf le paiement.

Quelque part ce soir, il sera de nouveau insulté par des gens qui vont le regretter dans soixante secondes. À côté de lui, quelqu'un a un tableau de bord ouvert. Il ne mesure pas si l'histoire était bonne. Il ne l'a jamais fait.

## Sources et méthode

Je n'ai inspecté que du code de page et des fiches de store accessibles publiquement. Je n'ai pas créé de compte, acheté de pièces ni touché à un système non public. Les chiffres de marché sont des estimations de tiers, pas des déclarations d'entreprise auditées. Les chiffres de plaintes sont des témoignages d'utilisateurs. Recherches vérifiées le 27 septembre 2026 ; les compteurs des stores, les prix et les pages marketing changent fréquemment.

- [Page d'atterrissage de la campagne StoryReel](https://w2a.storyreel.life/v6/2/fb02.html?shorttv_adid=288123&language=en) et sa [configuration de campagne](https://prod-api.storyreel.life/prod-api/16/app/hiCampaignLink/getConfig?adId=288123&pageType=1&ver=001).
- [*SSS-Rank: The Slum-Born Thunder God* sur ShortMax](https://www.shorttv.live/drama/sss-rank-the-slum-born-thunder-god-32605).
- ShortMax sur l'[Apple App Store](https://apps.apple.com/us/app/shortmax-short-dramas-tv/id6464002625) et [Google Play](https://play.google.com/store/apps/details?id=live.shorttv.apps) ; [conditions d'utilisation de ShortMax](https://www.shorttv.live/Temsof).
- [ShortMax sur Trustpilot](https://www.trustpilot.com/review/www.shortmax.app) ; [Shortmax Innovations sur le BBB](https://www.bbb.org/us/fl/miami/profile/mobile-apps/shortmax-innovations-0633-92056233/complaints).
- [Sensor Tower, rapport State of Short Drama Apps 2026](https://sensortower.com/blog/state-of-short-drama-apps-2026-report).
- [Crazy Maple Studio](https://www.crazymaplestudios.com/) ; [Rest of World sur ReelShort et ses propriétaires](https://restofworld.org/2023/what-is-reelshort/) ; [TechCrunch sur la percée de ReelShort en 2023](https://techcrunch.com/2023/11/16/a-quibi-like-app-called-reelshort-hit-record-downloads-and-revenue-this-month/).
- [DramaBox sur l'App Store](https://apps.apple.com/us/app/dramabox-stream-drama-shorts/id6445905219) ; [The Walt Disney Company, Demo Day de l'Accelerator 2025](https://thewaltdisneycompany.com/news/disney-accelerator-2025/) et [annonce de la promotion 2025](https://thewaltdisneycompany.com/news/disney-accelerator-companies-2025/).
- [China Daily HK sur Jiuzhou Culture et ShortMax](https://www.chinadailyhk.com/hk/article/624225).
- [C21Media résumant le New York Times sur les coûts des microdramas IA](https://www.c21media.net/news/ai-slashing-cost-of-microdrama-production-in-china-to-30-per-minute/).
- [Global Times sur les chiffres de la NRTA et le soutien à l'export, septembre 2026](https://www.globaltimes.cn/page/202609/1370760.shtml) ; [Xinhua sur les microdramas faits par IA et les règles d'étiquetage](https://english.news.cn/20260917/62224fd5e67a441dbc2c97717c9c2942/c.html) ; [Global Times sur les subventions locales, mai 2026](https://www.globaltimes.cn/page/202605/1362076.shtml).
- [Yale Journal of International Affairs, Le microdrama comme soft power](https://www.yalejournal.org/publications/micro-drama-as-soft-power-yedbr).
