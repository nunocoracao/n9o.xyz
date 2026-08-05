---
title: "La Linux Foundation S'attaque à la Tokenomics de l'IA, Sans les Laboratoires"
summary: "La Linux Foundation a lancé cette semaine la Tokenomics Foundation pour standardiser la mesure du coût et du ROI de l'IA. Vingt-neuf membres fondateurs, dont aucun ne fixe le prix d'un token. Voici ce qui est sorti, qui manque, et les tensions d'une norme de mesure que les fournisseurs n'ont jamais signée."
description: "La Linux Foundation a lancé cette semaine la Tokenomics Foundation pour standardiser la mesure du coût et du ROI de l'IA. Vingt-neuf membres fondateurs, dont aucun ne fixe le prix d'un token. Voici ce qui est sorti, qui manque, et les tensions d'une norme de mesure que les fournisseurs n'ont jamais signée."
categories: ["IA", "Tech", "Opinion"]
tags: ["IA", "tokens", "finops", "standards", "économie"]
date: 2026-08-05
draft: false
---

La dernière fois qu'on m'a parlé de "tokenomics", j'étais assis en face d'un fondateur de crypto qui m'expliquait comment sa boîte payait ses développeurs. J'ai posé ce que je croyais être une question simple, en gros : comment sait-on ce que ça vaut le jour où ça atterrit sur le compte de quelqu'un ? La réponse a été "c'est parce que tu ne comprends pas la tokenomics." Une phrase qui ne veut rien dire et qui met fin à la conversation en même temps.

Alors quand le mot est apparu cette semaine dans le nom d'une nouvelle organisation de la Linux Foundation, j'ai eu un léger mouvement de recul avant de lire la suite. Token différent. Mais la même question : comment savoir ce que ça valait le jour où la facture arrive.

À celle-là non plus, personne n'a encore de bonne réponse.

> [!info] TL;DR
> - La Linux Foundation a lancé la **Tokenomics Foundation** le 4 août, un organisme de normalisation neutre pour mesurer le coût et le ROI de l'IA.
> - Vingt-neuf membres fondateurs : banques, intégrateurs, éditeurs de logiciels d'entreprise, et une douzaine de fournisseurs d'outils FinOps.
> - **Aucun laboratoire de pointe n'en fait partie.** Ni OpenAI, ni Anthropic, ni Google, ni Microsoft, ni AWS, ni NVIDIA.
> - Google Cloud, Microsoft, Salesforce et KPMG avaient exprimé leur soutien en juin et ne figurent pas sur la liste d'août.
> - Le précédent réussi le plus proche, FOCUS, n'a fonctionné qu'une fois les hyperscalers embarqués. Cette condition n'est pas remplie ici.

## Ce qui a été lancé

Le 4 août, la [Linux Foundation](https://www.linuxfoundation.org/) a [lancé](https://www.linuxfoundation.org/press/linux-foundation-launches-the-tokenomics-foundation-to-define-the-economics-and-roi-of-ai-value) la [Tokenomics Foundation](https://www.tokeneconomics.com/), un organisme de normalisation pour l'économie de l'IA. Elle est dirigée par [J.R. Storment](https://www.linkedin.com/in/jrstorment), la même personne qui dirige la [FinOps Foundation](https://www.finops.org/) juste à côté. Le conseil d'administration s'est réuni le 30 juillet, un comité technique est prévu, et les deux organisations partageront la spécification de facturation [FOCUS](https://focus.finops.org/) et un calendrier de conférences.

La feuille de route initiale est assez concrète pour être jugée :

- Un document de **définitions** pour la tokenomics et les métriques de valeur de l'IA
- Un **Big-T Framework** classant la complexité des tokens pour le routage des charges de travail
- De la **télémétrie de coût des tokens** intégrée à FOCUS v1.5 et suivantes
- Une méthodologie de **coût de service**, mesurant le travail effectué par appel
- Des **AI Value Frameworks** reliant la dépense aux résultats métier
- De la formation et de la certification, plus une conférence à Amsterdam en septembre

Des livraisons mensuelles sont promises jusqu'à la fin de l'année. Le problème identifié est réel et tout le monde le reconnaît : l'IA est désormais la ligne qui croît le plus vite dans le budget technologique et il n'existe pas de manière partagée de dire ce que vaut un token.

## Qui est dans la pièce

La liste des fondateurs compte vingt-neuf noms : Accenture, BNY, Broadcom, Calero, Cast.ai, DoiT, Finout, Flexera, GoDaddy, Greenpixie, Hitachi, IBM, JPMorganChase, Kion, Lenovo, Nebius, North Cloud, Oracle, Pay-i, Pointfive, Revenium, SAP, ServiceNow, SHI, Stacklet, Vantage, WWT, XOsphere et Yarken.

La liste se répartit en trois groupes. Des entreprises qui achètent de l'IA à grande échelle ([JPMorganChase](https://www.jpmorganchase.com/), [BNY](https://www.bny.com/), [GoDaddy](https://www.godaddy.com/), [Lenovo](https://www.lenovo.com/), [Hitachi](https://www.hitachi.com/)). Des intégrateurs et revendeurs ([Accenture](https://www.accenture.com/), [WWT](https://www.wwt.com/), [SHI](https://www.shi.com/)). Et une douzaine de fournisseurs de gestion de coûts ([Kion](https://kion.io/), [Yarken](https://www.yarken.com/), [Flexera](https://www.flexera.com/) et d'autres).

Aucun d'entre eux ne fixe le prix d'un token.

Deux absences. La première, ce sont les laboratoires de pointe : [OpenAI](https://openai.com/) et [Anthropic](https://www.anthropic.com/) ne sont pas membres, et pas davantage [Google](https://cloud.google.com/), [Microsoft](https://www.microsoft.com/), [AWS](https://aws.amazon.com/), [NVIDIA](https://www.nvidia.com/), [Mistral](https://mistral.ai/) ou [Cohere](https://cohere.com/). Aucune organisation qui fixe les prix des modèles de pointe n'est membre.

La seconde a eu moins d'attention. Quand la Linux Foundation a [annoncé son intention](https://www.linuxfoundation.org/press/linux-foundation-announces-the-intent-to-launch-the-tokenomics-foundation-to-establish-open-standards-for-ai-cost-management) de former la fondation, le 3 juin, elle a nommé douze organisations ayant "exprimé un soutien initial" : Accenture, [Booking.com](https://www.booking.com/), Flexera, Google Cloud, [IBM](https://www.ibm.com/), JPMorganChase, [KPMG](https://kpmg.com/), Microsoft, [Oracle](https://www.oracle.com/), [Salesforce](https://www.salesforce.com/), [SAP](https://www.sap.com/) et [ServiceNow](https://www.servicenow.com/). Comparez à la liste d'août. Google Cloud, Microsoft, Salesforce, KPMG et Booking.com ont disparu. Deux mois de soutien déclaré qui ne s'est pas converti en adhésion fondatrice.

La couverture presse l'a décrit autrement. [CIO Dive](https://www.ciodive.com/news/foundation-tackle-ai-token-cost-management/822839/) a écrit que le lancement réunit "entreprises, hyperscalers et développeurs de modèles de pointe", ce que la liste publiée ne montre pas. [The New Stack](https://thenewstack.io/tokenomics-foundation/) l'a titré en disant que la crise des coûts de l'IA a enfin un chien de garde, "sauf les entreprises qui la causent".

## Ce qu'ont fait les laboratoires

Aucun laboratoire de pointe n'a commenté publiquement le lancement. Je n'ai trouvé aucune déclaration d'OpenAI, Anthropic, Google ou Microsoft, favorable ou non.

À titre de comparaison : en décembre 2025, la Linux Foundation a lancé l'[Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation). Anthropic, OpenAI et [Block](https://block.xyz/) l'ont cofondée, avec le soutien de Google, AWS, Microsoft et [Cloudflare](https://www.cloudflare.com/). Anthropic a donné [MCP](https://modelcontextprotocol.io/), et [OpenAI a donné AGENTS.md](https://openai.com/index/agentic-ai-foundation/). Même organisateur, huit mois plus tôt, participation totale.

Sur la même période, les deux ont sorti leurs propres contrôles de coûts. OpenAI a ajouté des contrôles de dépense et des plafonds de crédit mensuels à ChatGPT Enterprise le 18 juin. Anthropic a livré des contrôles d'administration pour Claude Enterprise avec des droits au niveau du modèle, des alertes de dépense et une Admin API. Les deux donnent aux clients une visibilité réelle. Les deux vivent dans la console du fournisseur, et les chiffres qu'ils produisent ne sont pas comparables d'un fournisseur à l'autre.

## Est-ce que ça a déjà marché

Les normes de mesure lient bel et bien les fournisseurs, mais historiquement sous une seule de trois conditions.

**Le fournisseur adhère volontairement**, parce qu'être comparable l'aide à se battre. [SPEC](https://www.spec.org/) et [TPC](https://www.tpc.org/) se sont formés tous deux en 1988, SPEC à partir d'un consortium de constructeurs de stations de travail incluant HP, Sun et MIPS, TPC pour mesurer le traitement transactionnel. Les deux ont pris, sur des marchés sans acteur dominant, parce que chaque fournisseur voulait un tableau de score où il pouvait gagner.

C'est aussi ainsi qu'a marché [FOCUS](https://focus.finops.org/). La [FinOps Foundation](https://www.finops.org/about/) s'est formée en 2019 et a rejoint la Linux Foundation en 2020. FOCUS a été annoncé en 2023 et [a atteint la 1.0 en juin 2024](https://www.finops.org/insights/focus-1-0-available/), AWS, Azure, Google Cloud et Oracle Cloud livrant tous des exports de facturation natifs FOCUS le même jour. Cinq ans de la fondation à la spécification, et ça a marché parce que les vendeurs étaient dans la pièce. En 2023, AWS n'était même pas sponsor de FinOps.

**Un régulateur l'impose.** Étiquettes de consommation, informations nutritionnelles, portabilité des numéros de téléphone. Personne ne régule la facturation des tokens.

**Les acheteurs concentrent assez de dépense pour en faire une condition de vente.** En janvier 2017, Marc Pritchard, de P&G, [a dit à l'IAB](https://www.adexchanger.com/advertiser/pritchards-progress-pg-marketing-chief-impact-digital-ultimatums/) que Google et Facebook avaient jusqu'à la fin de l'année pour accepter une vérification indépendante accréditée par le [MRC](https://mediaratingcouncil.org/), sous peine de perdre les budgets. Les deux ont accepté des audits. Facebook a ensuite audité d'abord les impressions servies et a mis nettement plus longtemps sur les impressions visibles.

Deux tentatives qui ont tourné autrement. L'[Open Cloud Manifesto](https://www.theregister.com/2009/03/30/open_cloud_manifesto_in_out/), en mars 2009, comptait trente-six signataires avec IBM au centre, et Amazon, Google, Microsoft et Salesforce ont toutes refusé de signer. Ça n'a mené nulle part. Le [CDMI](https://www.snia.org/cdmi) de la SNIA est devenu une norme ISO pour le stockage cloud, S3 est devenu la norme de fait quand même, et CDMI a plus tard ajouté la compatibilité S3.

Le précédent réussi le plus proche est donc celui dont cette fondation s'inspire, et il remplissait une condition que ce lancement ne remplit pas pour l'instant.

## Trois tensions

**Le côté achat est standardisable. Le côté vente ne l'est pas.** Imputation, étiquetage, économie unitaire, coût de service, définitions du ROI : tout cela peut être standardisé sans rien demander à un laboratoire, et c'est l'essentiel de la valeur au quotidien. Ce qui ne peut pas être standardisé unilatéralement, c'est la comparabilité. Les tokenizers sont propriétaires et diffèrent, donc le même prompt ne donne pas le même décompte de tokens d'un fournisseur à l'autre. La tarification est multi-paliers par conception : comparez les tarifs publiés d'[Anthropic](https://docs.claude.com/en/docs/about-claude/pricing) et d'[OpenAI](https://platform.openai.com/docs/pricing) et vous obtenez entrée, entrée en cache, écritures en cache à des multiplicateurs variables selon le TTL, sortie, et des tokens de raisonnement cachés facturés comme de la sortie, avec des paliers définis différemment de chaque côté. Un schéma peut enregistrer tout cela fidèlement et toujours ne pas vous laisser comparer deux factures.

**La norme existe peut-être déjà.** Les [conventions sémantiques GenAI d'OpenTelemetry](https://opentelemetry.io/blog/2026/genai-observability/) portent `gen_ai.usage.input_tokens` et compagnie depuis 2024, et FOCUS s'étend déjà à la dépense en tokens. Le praticien FinOps [Dvir Mizrahi](https://www.linkedin.com/pulse/lets-talk-tokenomics-foundation-dvir-mizrahi-uauzf) le dit directement, en demandant pourquoi un groupe de travail FOCUS a besoin de sa propre fondation, de son conseil et de son circuit de conférences, et en concluant que la motivation "n'est pas technique. Elle est commerciale." À mettre en balance avec la proportion de membres qui vendent des outils de gestion de coûts.

**Le levier joue dans le mauvais sens.** L'analogie publicitaire est tentante mais l'économie s'inverse. Facebook et Google avaient besoin de l'argent des annonceurs et avaient de l'inventaire en trop. Les laboratoires sont contraints par l'offre, et leurs plus grosses lignes de revenus sont les abonnements grand public et les licences de développement, pas les contrats d'API entreprise que détiennent ces membres. Selon la plupart des estimations, Anthropic et OpenAI réunis approchent les soixante pour cent de la dépense entreprise en API de LLM. Retenir un budget est une menace faible quand la file d'attente est déjà pleine.

Et sous ces trois tensions, l'unité est peut-être tout simplement mauvaise. [Uber](https://www.uber.com/) a brûlé la totalité de son budget IA 2026 en avril, sur environ cinq mille ingénieurs, puis [a plafonné chaque employé à 1 500 dollars par mois](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/). Elle n'avait pas échoué à compter les tokens. Elle les comptait très bien. Elle avait mis ses ingénieurs sur des classements d'utilisation de Claude Code, ce qui est un problème d'incitations et non de mesure. Le COO d'Uber, Andrew Macdonald, sur le fait de savoir si la dépense se reliait à quelque chose que les clients ressentaient : ["Ce lien n'existe pas encore."](https://fortune.com/2026/05/26/uber-coo-ai-spending-tokens-claude-code/) Pendant ce temps, les prix par token ont chuté d'environ quatre-vingts pour cent sur l'année écoulée tandis que la dépense totale montait. C'est le [paradoxe de Jevons](https://fr.wikipedia.org/wiki/Paradoxe_de_Jevons), et aucun schéma de télémétrie n'y touche.

## Questions ouvertes

1. Une norme de mesure que les fournisseurs ignorent change-t-elle un comportement, ou crée-t-elle surtout un marché de la certification ?
2. Existe-t-il quelque part une coalition d'acheteurs avec assez de dépense concentrée pour faire de la conformité une condition de vente, sachant que les laboratoires sont contraints par l'offre ?
3. Si OTel et FOCUS portent déjà le schéma, qu'apporte une fondation séparée au-delà de la gouvernance et d'une conférence ?
4. Que concéderait exactement un laboratoire en adhérant ? La comparabilité par token profite à celui qui est le moins cher à qualité égale, ce qui est une cible mouvante. Le refus est-il une stratégie, ou personne n'a-t-il simplement encore demandé ?
5. Standardise-t-on le mauvais dénominateur ? Le coût par token est mesurable et à peu près résolu. La valeur par décision n'est ni l'un ni l'autre, et c'était le chiffre dont Uber avait besoin.

## Ce que je surveille

Trois marqueurs, tous vérifiables avant la fin de l'année. Si un laboratoire de pointe adhère d'ici la conférence d'Amsterdam en septembre. Si le schéma de tokens de FOCUS v1.5 sort au rythme mensuel promis. Et si Google Cloud et Microsoft convertissent le soutien déclaré en juin en adhésion réelle, ou si la liste de juin reste le point haut.

Je veux que ça marche. Les entreprises sont réellement incapables de dire ce que leur dépense en IA a acheté, et quelqu'un devrait régler ça. Je pense simplement que la version qui sortira décrira votre dépense plutôt que de discipliner vos fournisseurs, et ce sont des produits très différents.
