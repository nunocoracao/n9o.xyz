---
title: "30 Days of Vibe Coding - Jour 25 - SoundScape"
description: "Un mixeur de sons ambiants avec audio généré de manière procédurale, des presets, un générateur de beats lo-fi et des mix partageables."
summary: "Un mixeur de sons ambiants avec audio généré de manière procédurale, des presets, un générateur de beats lo-fi et des mix partageables."
categories: ["Coding", "AI", "Challenge"]
tags: ["30DaysOfVibeCoding", "AI", "day-25", "web-audio", "typescript", "nextjs"]
series: ["30 Days of Vibe Coding"]
series_order: 25
seriesOpened: false
date: 2026-04-30
draft: false
#type: "hidden"
---

Jour 25. Je me suis construit exactement l'app que j'utiliserais vraiment pendant que je construisais tous les autres jours.

## Le Prompt

L'idée était simple : un mixeur de sons ambiants où tu superposes des sons pour créer une atmosphère de fond pour travailler, se détendre ou dormir. Pense à ces vidéos YouTube "ambiance café", mais interactif et personnalisable.

La contrainte intéressante, c'est que je voulais que tout l'audio soit généré de manière procédurale avec la Web Audio API. Pas de fichiers sample, pas d'assets audio à charger. Tout est synthétisé dans le navigateur.

{{< alert icon="fire">}}
Essaie par toi-même [ici](https://vibe30-day25-soundscape.vercel.app)
{{< /alert >}}

## Comment ça a été construit

[Watchfire](https://watchfire.io) a décomposé ça en 10 tâches. Le plan initial utilisait en fait Howler.js avec des fichiers audio pré-enregistrés, mais j'ai pivoté tôt vers la génération procédurale avec la Web Audio API. Ça veut dire que chaque son que tu entends, de la pluie au crépitement d'une cheminée, est généré mathématiquement en temps réel. Pas de MP3, pas de téléchargements, pas d'écrans de chargement.

{{< github repo="watchfire-io/watchfire" showThumbnail=true >}}

## Ce que j'ai obtenu

![Vue principale de SoundScape](images/screenshot-01.png)

**12 sons répartis en 3 catégories.** Nature, Urbain et Cozy. Chacun a sa propre carte avec un curseur de volume, et tu peux mixer comme tu veux. La catégorie Nature a des trucs comme la pluie, la forêt et les vagues de l'océan. Urbain a le brouhaha d'un café et le bruit de clavier. Cozy a le crépitement de cheminée.

![Contrôles principaux](images/screenshot-02.png)

**Les contrôles principaux sont épurés.** Trois curseurs en haut pour l'Ambiance, la Musique et le volume général, plus un bouton minuterie pour le mode sommeil. L'UI en glassmorphisme est vraiment belle sur le fond sombre.

![Sons actifs avec le preset Forest Cabin](images/screenshot-03.png)

**Les presets rendent l'app instantanément utile.** Il y a quatre presets intégrés : Rainy Coffee Shop, Forest Cabin, Late Night Coding et Ocean Breeze. Un clic et tu obtiens un mix sélectionné. Forest Cabin, par exemple, active Forêt, Vent, Oiseaux et Cheminée à différents niveaux de volume. Tu peux aussi sauvegarder tes propres presets personnalisés dans le localStorage.

![Grille de sons - Nature et Urbain](images/screenshot-05.png)

![Grille de sons - Catégorie Cozy](images/screenshot-06.png)

**Chaque son est généré de manière procédurale.** La pluie, c'est du bruit blanc façonné avec des filtres. Le vent, ce sont des oscillateurs basse fréquence avec une modulation lente. Les oiseaux sont de courts gazouillis en onde sinusoïdale avec un timing aléatoire. La cheminée, c'est du bruit filtré avec des crépitements soudains. Rien de tout ça ne sonne parfaitement, mais tout est reconnaissable et se mélange assez bien pour que ton cerveau comble les lacunes.

![Générateur de beats lo-fi](images/screenshot-04.png)

**Il y a un générateur de beats lo-fi.** C'était pas dans le plan original mais c'est apparu en bonus. Il a des presets d'ambiance (Chill, Happy, Sad, Dreamy) et des contrôles individuels pour la Batterie, la Basse, les Claviers, la Mélodie et le craquement Vinyle. Ça tourne à 74 BPM et ça produit vraiment quelque chose qu'on voudrait en fond sonore. Les beats se superposent aux sons ambiants, donc tu peux avoir la pluie plus des beats lo-fi plus une cheminée en même temps.

**Le fond change avec ton mix.** Un dégradé dynamique en arrière-plan change selon les sons actifs. Les mix orientés nature tirent vers les verts et bleus, l'urbain penche vers des tons plus chauds. C'est subtil mais ça rend le tout plus vivant.

**Partage via URL.** Tu peux partager ton mix exact avec quelqu'un en copiant l'URL. Elle encode quels sons sont actifs et leurs niveaux de volume, donc quiconque ouvre le lien obtient exactement ta configuration.

**Des raccourcis clavier partout.** Espace pour tout mettre en pause, les touches 1-9 et 0 pour activer/désactiver les sons individuels, Échap pour tout arrêter. La minuterie de sommeil fait un fondu progressif sur la durée choisie (15, 30, 60 ou 90 minutes).

## Les Bugs

L'approche d'audio procédural signifiait que la plupart des bugs étaient liés à l'audio :

- Certains sons avaient des clics et des pops en s'activant et se désactivant (il fallait un ramping de gain correct)
- Le timing du générateur de beats lo-fi dérivait légèrement sur les longues sessions
- Quelques sons synthétisés étaient trop agressifs à plein volume avant que les filtres soient réglés

Rien de majeur. La Web Audio API est puissante mais impitoyable si tu ne gères pas correctement le cycle de vie du contexte audio.

## Essaie-le

{{< github repo="nunocoracao/Vibe30-day25-soundscape" showThumbnail=true >}}

**[Ouvrir SoundScape](https://vibe30-day25-soundscape.vercel.app)**

Meilleure expérience avec un casque. Essaie le preset "Late Night Coding" et active les Beats Lo-Fi.

## Verdict du Jour 25

Il y a quelque chose de satisfaisant à mixer son propre fond sonore ambiant plutôt que de chercher la bonne vidéo YouTube ou playlist Spotify. Et le fait que tout soit généré de manière procédurale signifie qu'il n'y a pas de boucles, pas de répétition. La pluie continue simplement, toujours légèrement différente.

La Web Audio API est sous-estimée. Je n'avais aucune idée qu'on pouvait synthétiser autant de sons différents uniquement avec des oscillateurs, des générateurs de bruit et des filtres. C'est pas de la qualité studio, mais pour une ambiance de fond ça marche étonnamment bien. Zéro fichier audio signifie que l'app se charge instantanément et fonctionne hors ligne.

Plus que cinq jours.

---

*Ceci est le jour 25 de [30 Days of Vibe Coding](/series/30-days-of-vibe-coding/). Suis l'aventure pendant que je livre 30 projets en 30 jours en utilisant le coding assisté par IA.*
