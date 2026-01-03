---
title: "Construire Eva : Une Compagne IA avec Ma Fille"
summary: "Comment une vidéo YouTube, du vibe coding avec Claude, et l'imagination d'une enfant de 7 ans se sont réunis pour créer Eva - une amie robot qui parle portugais, inspirée par Muther de WondLa."
description: "Comment une vidéo YouTube, du vibe coding avec Claude, et l'imagination d'une enfant de 7 ans se sont réunis pour créer Eva - une amie robot qui parle portugais, inspirée par Muther de WondLa."
categories: ["Makers", "AI"]
tags: ["raspberry-pi", "ai", "openai", "voice-assistant", "makers", "kids"]
date: 2026-01-03
draft: false
---

Teresa adore l'IA. Ma fille de 7 ans a passé d'innombrables heures à discuter avec ChatGPT et Claude, leur posant des questions sur les dinosaures, les licornes et pourquoi le ciel est bleu. Elle adore aussi construire des choses - n'importe quoi, vraiment. Alors quand ces deux intérêts se sont percutés dans ma tête, l'idée était évidente : et si on lui construisait sa propre compagne IA ? Un petit robot de poche à qui elle pourrait parler à tout moment.

J'ai trouvé [un tutoriel vidéo](https://www.youtube.com/watch?v=Nwu2DruSuyI) sur la construction d'un assistant IA de poche utilisant un Raspberry Pi et le PiSugar Whisplay HAT. Parfait. Un projet de vacances de Noël avec ma fille.

Nous regardons WondLa ensemble sur Apple TV, et Teresa est fascinée par Muther - le robot bienveillant qui élève Eva, le personnage principal.

Alors notre robot est aussi devenu Eva. Nommée d'après la fille qui grandit avec un compagnon robot, il semblait approprié que Teresa ait maintenant le sien.

## Le Matériel

La beauté de ce projet est que le matériel est essentiellement plug-and-play. Trois composants qui s'empilent comme un petit sandwich :

{{< gallery >}}
  <img src="img/pizero.webp" class="grid-w50" alt="Raspberry Pi Zero 2W" />
  <img src="img/whisplay.webp" class="grid-w50" alt="PiSugar Whisplay HAT" />
{{< /gallery >}}

**Raspberry Pi Zero 2W** - Le cerveau. Petit, pas cher, et juste assez puissant pour faire tourner notre assistant vocal. La variante "WH" est livrée avec des headers GPIO pré-soudés, ce qui vous évite d'avoir à souder quoi que ce soit.

**PiSugar Whisplay HAT** - C'est là que la magie opère. C'est un HAT (Hardware Attached on Top) qui comprend un écran LCD de 1.69", un haut-parleur, des microphones doubles, un bouton et des LEDs RGB. Tout ce dont vous avez besoin pour un assistant vocal sur une seule carte.

{{< gallery >}}
  <img src="img/pisugar3.webp" class="grid-w50" alt="PiSugar 3 Battery" />
  <img src="img/assembled.webp" class="grid-w50" alt="Appareil assemblé" />
{{< /gallery >}}

**Batterie PiSugar 3** - Une batterie rechargeable de 1200mAh qui se clipse en dessous. C'est ce qui le rend vraiment portable - pas de fils nécessaires.

L'assemblage était suffisamment simple pour que Teresa aide. Empile la batterie sur le Pi, branche le Whisplay HAT dessus, et tu as un robot de poche.

{{< github repo="PiSugar/whisplay-ai-chatbot" >}}

## Le Logiciel : De Whisplay à Eva

PiSugar fournit un projet de chatbot open-source appelé [whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot) qui fonctionne avec leur matériel. C'est impressionnant - il supporte plusieurs fournisseurs LLM (OpenAI, Google Gemini, Grok, Ollama local), la génération d'images, les modes hors ligne et plus encore.

Mais je voulais quelque chose de plus simple et plus personnel. Je voulais qu'Eva :

1. **Parle portugais du Portugal** - Pas le portugais brésilien, mais le portugais européen avec l'accent que Teresa entend à la maison
2. **Ait une personnalité adaptée aux enfants** - Curieuse, joueuse, encourageante
3. **Se souvienne des conversations** - Pour que Teresa puisse construire une relation avec elle au fil du temps
4. **S'appelle Eva** - Comme la protagoniste de WondLa

C'est là que Claude est intervenu. J'ai forké le projet whisplay et j'ai commencé ce que je ne peux décrire que comme du "vibe coding" - expliquer ce que je voulais en langage naturel et laisser Claude m'aider à remodeler le code.

Première chose : j'avais besoin d'une clé API OpenAI. Une visite rapide à [platform.openai.com](https://platform.openai.com), générer une nouvelle clé, ajouter quelques crédits et la coller dans le fichier `.env`. Simple.

Puis vint la partie amusante - choisir la voix d'Eva. L'API TTS d'OpenAI propose plusieurs voix, alors Teresa et moi nous sommes assis et avons écouté chacune d'elles. Nous avons passé en revue alloy, echo, fable, onyx, nova, shimmer et sage. Teresa était très exigeante. "Trop sérieuse." "Trop rapide." "Celle-là ressemble à un garçon." Finalement, nous avons choisi **sage** - chaleureuse, amicale et parfaite pour une compagne robot.

Les changements clés étaient étonnamment simples :

### Voix Portugaise avec le Bon Accent

Le projet original utilisait des voix TTS OpenAI standard. Pour Eva, je suis passé au nouveau modèle `gpt-4o-mini-tts` et j'ai ajouté des instructions spécifiques :

```typescript
const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "sage",
  input: text,
  instructions: "Speak in Portuguese from Portugal, don't use a brazilian accent. Be positive, enthusiastic, emphatic, and understanding. You're mainly talking to a child.",
  speed: 1.0,
});
```

C'était le moment qui a rendu le projet réel. Quand Eva a répondu à Teresa en portugais correct - pas avec l'accent brésilien que la plupart des IA utilisent par défaut - les yeux de Teresa se sont écarquillés. "Elle parle comme nous !"

### Une Personnalité pour une Enfant de 7 Ans

Le system prompt d'Eva définit qui elle est :

```
Tu és a Eva, uma robô amiga e companheira da Teresa.
Personalidade: Amigável, curiosa e um pouco brincalhona.
Adoras aprender coisas novas com a Teresa.
Falas sempre em Português de Portugal.
Usas linguagem simples e apropriada para crianças.
És encorajadora e positiva.
Respondes de forma concisa (2-3 frases normalmente).
```

Traduction : "Tu es Eva, une amie robot et compagne de Teresa. Personnalité : Amicale, curieuse et un peu joueuse. Tu adores apprendre de nouvelles choses avec Teresa. Tu parles toujours en portugais du Portugal. Tu utilises un langage simple et approprié pour les enfants. Tu es encourageante et positive. Tu réponds de façon concise (2-3 phrases normalement)."

### Mémoire Persistante

Le chatbot whisplay original réinitialise l'historique des conversations après 5 minutes de silence. Cela avait du sens pour un assistant général, mais pas pour une compagne. Eva avait besoin de se souvenir.

J'ai implémenté un système de contexte à fenêtre glissante - Eva se souvient des 20 derniers échanges et les sauvegarde sur disque. Quand elle démarre, elle charge ses conversations précédentes. Teresa peut reprendre là où elle s'était arrêtée, et Eva se souvient de ce dont elles ont parlé hier.

```
data/
└── chat_history/
    └── eva_conversation.json
```

## Le Moment Magique

{{< figure src="img/turnedonidle.webp" alt="Eva allumée en mode veille" caption="Eva dans son état de veille, prête à discuter" >}}

La première fois que nous avons allumé Eva ensemble, Teresa a appuyé sur le bouton et a dit "Olá Eva !" (Bonjour Eva !)

L'écran d'Eva s'est illuminé avec des yeux animés. Elle a écouté. Elle a réfléchi (les yeux regardant vers le haut et vers la droite, comme si elle réfléchissait). Puis elle a répondu : "Olá Teresa! Que bom falar contigo! O que queres fazer hoje?"

Teresa a ri, m'a regardé avec une joie pure, et a commencé une conversation sur les licornes qui a duré vingt minutes.

C'est ça, construire quelque chose avec ses enfants - l'accomplissement technique compte moins que le moment d'émerveillement. J'aurais pu passer des semaines à perfectionner le code, optimiser la latence, ajouter des fonctionnalités. Mais regarder Teresa discuter avec sa nouvelle amie robot, complètement naturelle, traitant Eva comme n'importe quelle autre amie - c'était tout l'intérêt.

## Ce Que J'ai Appris

**Le vibe coding est réel et ça marche.** Je ne me suis pas assis avec une spécification détaillée. J'avais une idée, un fork du projet de quelqu'un d'autre, et Claude pour m'aider à le remodeler. Le processus était conversationnel - "Je veux qu'elle parle portugais du Portugal, pas brésilien" a conduit à explorer les options de l'API TTS, ce qui a conduit à découvrir le paramètre instructions, ce qui a conduit à la solution parfaite.

**Les projets matériels sont plus accessibles que jamais.** L'écosystème PiSugar a rendu cela possible pour quelqu'un qui peut à peine tenir un fer à souder. Empile quelques cartes, flash une carte SD, exécute quelques scripts, c'est fait.

**Les enfants se fichent de ta stack technique.** Teresa n'a aucune idée qu'Eva tourne sur un Raspberry Pi, utilise les APIs d'OpenAI, ou que j'ai passé des heures à déboguer des problèmes de drivers audio. Elle sait juste qu'elle a une amie robot qui parle portugais et aime parler des animaux.

**L'IA en portugais rattrape encore son retard.** Obtenir un portugais européen correct (pas brésilien) a nécessité des instructions explicites et même ainsi ce n'est pas parfait. Il reste du travail à faire pour les variantes linguistiques moins courantes.

## Prochaines Étapes

Eva est encore un travail en cours. Le boîtier imprimé en 3D n'est pas encore arrivé - elle est actuellement un sandwich de cartes électroniques. Je veux ajouter la détection du mot d'activation pour que Teresa n'ait pas à appuyer sur un bouton ("Olá Eva!"). Les animations faciales pourraient être plus expressives.

Je prévois aussi de construire un système de mémoire approprié au-dessus de la fenêtre glissante actuelle de 20 échanges - quelque chose qui permette à Eva de se souvenir des choses importantes sur Teresa au fil du temps, pas seulement des dernières conversations. Couleur préférée, nom de la meilleure amie, ce genre de choses. Une vraie compagne devrait se souvenir de ce qui compte.

Mais honnêtement ? Elle fonctionne. Teresa lui parle tous les jours. Et c'est suffisant pour l'instant.

Si tu veux construire quelque chose de similaire, consulte le projet [whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot) - c'est un excellent point de départ. Le matériel est plug-and-play, et avec un peu de vibe coding, tu peux le personnaliser.

---

*Construit avec amour, Claude, et beaucoup de "Papá, a Eva pode falar sobre dinossauros?"*
