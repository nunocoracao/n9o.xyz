---
title: "Le ratio bruit/valeur : quand la production de l'IA dépasse l'attention humaine"
summary: "L'IA a rendu les messages, les documents et le code presque gratuits à produire. L'attention humaine, elle, n'a pas bougé. Comment j'essaie de faire baisser le ratio bruit/valeur en tant que lecteur, en tant que producteur et au sein d'une équipe."
description: "L'IA a rendu documents et code presque gratuits à produire, mais l'attention humaine n'a pas suivi. Comment réduire le ratio bruit/valeur, seul et en équipe."
categories: ["IA", "Meta"]
tags: ["ia", "attention", "productivité", "agents", "surcharge informationnelle", "gestion de produit"]
date: 2026-09-20
alt: "Une personne à son bureau isole une page lumineuse et utile au milieu d'un torrent de messages, de documents et de code générés par des machines."
---

Quand j'ai commencé à utiliser Slack au travail, j'ai remarqué qu'une bonne partie de ma journée passait à décider quoi ignorer.

La communication était devenue un processus d'arrière-plan à plein temps. Les messages Slack, les fils, les réactions, les e-mails, les documents partagés et les réunions Zoom ont tous rendu les gens plus faciles à joindre. Ils ont aussi créé plus d'endroits à surveiller, plus de conversations à suivre et plus de décisions qui arrivent tout au long de la journée.

J'avais parfois l'impression de travailler dans un bureau où, toutes les dix minutes, quelqu'un se levait pour crier quelque chose à tout le monde. Chaque interruption pouvait être utile à quelqu'un. Tous les autres devaient quand même dépenser un peu d'attention pour décider si ça les concernait.

L'IA générative n'a pas créé ce bruit. Elle l'a industrialisé.

En deux ans, le coût de production d'un message, d'un document, d'une présentation ou d'un bout de code plausible s'est effondré. Ajoutez maintenant des agents capables de traiter de l'information et de générer de nouveaux artefacts sans que personne ne regarde. Chaque personne peut produire plus, chaque équipe peut demander plus, et chaque système peut remonter plus d'informations.

Notre capacité d'attention, elle, n'a pas changé du tout. Herbert Simon en avait vu les contours dès 1971 : [l'abondance d'information crée une pénurie d'attention](https://en.wikipedia.org/wiki/Attention_economy).

## Du rapport signal/bruit au ratio bruit/valeur

On décrit généralement ça comme un problème de [rapport signal/bruit](https://en.wikipedia.org/wiki/Signal-to-noise_ratio). Il manque quelque chose d'important.

Un message peut être pertinent, bien écrit, m'être adressé, et n'avoir quand même aucune valeur. Un document peut être exact et soigné sans changer la moindre décision. Du code peut fonctionner et rester la mauvaise chose à ajouter à un produit.

Le signal, c'est ce qui semble pertinent. La valeur, c'est ce qui change ce que je comprends, ce que je décide ou ce que je fais.

Les deux étaient autrefois plus proches. Écrire un document réfléchi prenait du temps, donc l'effort qu'il représentait était au moins un indice qu'il comptait. Ce filtre n'a jamais été parfait, mais il existait. Aujourd'hui, produire quelque chose de soigné peut prendre un seul prompt. Le résultat peut contenir une vraie valeur, ou aucune. L'apparence de l'effort ne me dit plus grand-chose sur la valeur qu'il y a dessous.

La mesure qui m'intéresse est donc un ratio bruit/valeur : tout ce qu'une personne doit traverser pour chaque chose qui change ce qu'elle comprend, décide ou fait. L'IA fait grimper le premier chiffre gratuitement. Le second dépend du jugement humain, qui n'a pas accéléré.

Le goulot d'étranglement est passé de la production à la consommation. Nous pouvons générer plus que ce que quiconque peut relire de façon responsable.

{{< inlinesvg src="attention-gate.svg" alt="Schéma animé : un flux dense de points gris avance vers un mur percé d'une seule ouverture étroite, devant une personne. Seuls les quelques points alignés avec l'ouverture passent. Sur les quatre points lumineux du flux, un seul atteint la personne et trois restent bloqués contre le mur avec les autres." caption="Produire ne coûte presque plus rien. L'ouverture, c'est l'attention, et elle ne s'est pas élargie. Une partie de ce qui reste bloqué derrière le mur est justement ce qui a de la valeur." >}}

## Deux façons de faire baisser le ratio

Une réponse possible est de ralentir. Aucune équipe qui veut rester compétitive ne le fera.

L'autre est de travailler sur les deux côtés du ratio : mieux trouver la valeur dans ce qui m'arrive, et choisir avec soin ce que j'ajoute pour tous les autres.

Les deux comptent surtout là où des gens décident ensemble quoi construire, comment s'y prendre et pourquoi. Ces décisions reposent sur des choses qu'un modèle n'a pas. Il n'a jamais été agacé par une interface. Si cette conversation se remplit de contenu généré, les voix humaines y deviennent plus difficiles à entendre, alors qu'elles sont la raison d'être de la conversation.

{{< inlinesvg src="human-voices.svg" alt="Schéma animé : trois personnes reliées en triangle s'échangent des messages pendant qu'une dérive continue de points gris traverse leur conversation." caption="La conversation entre les personnes est le canal étroit. Tout ce qui est généré lui fait concurrence." >}}

## Le correct est plus dur à filtrer que le mauvais

Le contenu difficile à traiter n'est pas celui qui est visiblement cassé. Le spam se rejette facilement. Un mauvais document se repère tout seul. Une grande partie de la nouvelle production est correcte : cohérente, assez pertinente et mise en forme de façon professionnelle.

Un travail correct consomme quand même de l'attention. Quelqu'un doit lire le document, relire la pull request, vérifier le résumé ou décider si la recommandation compte. Le coût de production a disparu, mais le coût de relecture a été transféré à quelqu'un d'autre. Des chercheurs ont donné un nom à ce phénomène dans la Harvard Business Review, le [workslop](https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity) : du travail généré par IA qui a l'air terminé et qui laisse le vrai effort à celui qui le reçoit.

Je vois le même effet avec [mes propres agents](/fr/posts/202609-an-organization-of-three/#manager-les-assistants). Un point d'avancement peut être exact et ne rien m'apprendre d'utile. Une tâche terminée peut créer un document de plus à relire. Une notification censée prouver qu'un travail utile a été fait peut devenir elle-même du travail en plus.

L'échec habituel est plus discret que la noyade : tout survoler, changer de contexte en permanence et ne rien traiter avec l'attention que ça mérite.

## En tant que lecteur : protéger l'attention, puis laisser l'IA l'ordonner

Je commence par quelque chose qui n'a rien à voir avec l'IA. Je bloque du temps pour le [deep work](https://calnewport.com/deep-work-rules-for-focused-success-in-a-distracted-world/). Tout ce qui demande de la compréhension, de l'invention ou une décision difficile a besoin d'espace, sans flux en direct qui tourne à côté.

Les messages continuent de s'accumuler, et je les traite par lots. Lire vingt mises à jour d'un coup coûte bien moins cher que d'être interrompu vingt fois, alors que le volume est identique. [Des recherches sur le travail interrompu](https://ics.uci.edu/~gmark/chi08-mark.pdf) ont montré que les gens compensent en travaillant plus vite, et le paient en stress et en frustration.

L'IA fait partie de la cause, mais c'est aussi le seul moyen pratique que j'aie trouvé pour traiter une partie du volume qui en résulte.

Au travail, l'IA peut aider à repérer les messages qui demandent peut-être une action. Je lis ceux-là en premier. Je parcours quand même tout le reste, parce qu'être au courant dépasse largement une liste de tâches. Le contexte, les signaux faibles et, de temps en temps, ce que le filtre a mal compris comptent toujours.

J'utilise l'IA pour ordonner mon attention, pas pour l'abandonner. Le filtre apprend ce qui a tendance à compter, mais je reste responsable de ce que je rate.

Pour le travail répétable, je vais volontiers plus loin. Si c'est de la mécanique, automatisez. Si le processus est connu, que les entrées sont claires et que les erreurs sont faciles à détecter ou à annuler, une délégation complète peut suffire.

Tout ce qui sort de cette catégorie demande du jugement.

## En tant que producteur : du travail réfléchi plutôt que de la production jetable

L'autre côté du ratio, c'est ce que j'y ajoute. Utiliser l'IA pour un travail qui demande du jugement ne veut pas dire demander une réponse et l'accepter.

Quand je m'en sers pour écrire un document conséquent, je commence par décider ce que j'essaie de dire. Je définis la structure, je fournis le contexte utile et j'explique l'objectif. Ensuite je génère une section, je la corrige moi-même, je la remets en question, j'ajoute le contexte manquant, et je recommence.

C'est pareil pour le code. Un agent peut produire une implémentation rapidement, mais c'est toujours à moi de décider si la fonctionnalité doit exister, si l'approche a sa place dans le système et si le résultat est maintenable. Des tests qui passent ne répondent qu'à une partie de la question.

Savoir si c'est une IA ou une personne qui a écrit quelque chose ne m'apprend pas grand-chose. Ce qui compte, c'est de savoir si c'est de la production jetable ou du travail réfléchi, et c'est la production jetable qui génère l'essentiel du bruit.

L'IA peut participer à un travail réfléchi. Elle peut questionner, rédiger, comparer et réviser à une vitesse que je ne peux pas égaler. Mais la valeur vient de la boucle : structure, contexte, génération, relecture, corrections à la main, puis une nouvelle passe. Mon énergie mentale va dans les parties qui ne sont pas de la mécanique.

## Envoyer moins de choses aux gens

Il y a un piège évident à utiliser l'IA pour résumer tout ce que l'IA nous a aidés à créer. Un meilleur filtrage peut rendre le volume supportable sans jamais questionner pourquoi ce volume existe.

La production totale peut continuer de croître. Ce qui doit diminuer, c'est la part destinée à des personnes. Toutes les mises à jour n'ont pas besoin d'être envoyées. Toutes les idées n'ont pas besoin d'un document. Tout bout de code qui fonctionne n'a pas besoin de devenir une fonctionnalité. Avant de demander à l'IA de résumer un artefact, il vaut la peine de se demander si cet artefact avait besoin d'exister.

Le producteur devrait porter une partie du coût de la consommation. Tout ce qui est remis à une autre personne, par une personne ou par un agent, devrait dire ce qui a changé, pourquoi c'est important et quelle décision est attendue. Si je ne peux pas répondre à ces trois questions, l'artefact n'est probablement pas prêt à être envoyé, et il n'a peut-être pas besoin d'exister. Mes agents suivent maintenant la même règle : la surveillance de routine reste silencieuse quand il n'y a rien sur quoi agir. Parfois, la bonne mise à jour, c'est le silence.

## Les équipes ont adopté les outils et gardé le processus

L'essentiel du fonctionnement des équipes produit a été conçu à une époque où produire coûtait cher. Une spec prenait une semaine à écrire, donc peu de specs arrivaient en relecture. Un prototype prenait un sprint, donc on débattait d'abord pour savoir s'il fallait le construire. Le coût servait de limite de débit, et le processus en dépendait.

Cette limite a disparu. Tout le monde peut générer un document et tout le monde peut générer du code, mais la réunion de revue, la chaîne de validation et le nombre de personnes capables de trancher sont les mêmes qu'avant. Nous avons adopté les outils et gardé l'organisation.

{{< inlinesvg src="rate-limit.svg" alt="Schéma animé à deux voies. Sur la voie du haut, une personne produit un document à la fois, qui chemine jusqu'à un relecteur. Sur la voie du bas, une personne aidée d'un assistant IA produit des documents en rafale, et ils s'entassent devant le même relecteur unique." caption="Quand produire coûtait cher, le coût servait de limite de débit. Le relecteur à droite est le même sur les deux voies." >}}

Je n'ai pas encore trouvé la nouvelle structure. Je pense qu'elle commence par traiter l'attention des personnes qui décident comme le budget autour duquel tout le reste se planifie : moins d'artefacts destinés à des personnes, des groupes plus petits pour décider, et une réponse claire à la question de qui doit voir quoi.

L'attention est désormais la limite dure. Les équipes qui s'en sortiront seront celles qui protègent assez de jugement pour trouver la valeur dans le volume.

Rien de tout ça n'est un argument pour ou contre l'IA. Je m'en sers tous les jours pour réfléchir, créer et traverser le bruit. Mais les décisions qui comptent sont toujours prises par des gens qui se parlent, avec une attention limitée et un jugement qui prend du temps. Je veux que ces outils dégagent de la place pour cette conversation, pour que nous soyons présents là où ça compte.
