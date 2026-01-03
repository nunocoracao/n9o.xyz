---
title: "Eva bauen: Eine KI-Begleiterin mit meiner Tochter"
summary: "Wie ein YouTube-Video, etwas Vibe Coding mit Claude und die Fantasie einer 7-Jährigen zusammenkamen, um Eva zu erschaffen - eine portugiesisch sprechende Roboterfreundin, inspiriert von Muther aus WondLa."
description: "Wie ein YouTube-Video, etwas Vibe Coding mit Claude und die Fantasie einer 7-Jährigen zusammenkamen, um Eva zu erschaffen - eine portugiesisch sprechende Roboterfreundin, inspiriert von Muther aus WondLa."
categories: ["Makers", "AI"]
tags: ["raspberry-pi", "ai", "openai", "voice-assistant", "makers", "kids"]
date: 2026-01-03
draft: false
---

Teresa liebt KI. Meine 7-jährige Tochter hat unzählige Stunden damit verbracht, mit ChatGPT und Claude zu chatten und sie nach Dinosauriern, Einhörnern und warum der Himmel blau ist zu fragen. Sie liebt es auch, Dinge zu bauen - wirklich alles. Als diese beiden Interessen in meinem Kopf kollidierten, war die Idee offensichtlich: Was wäre, wenn wir ihr ihre eigene kleine KI-Begleiterin bauen würden? Einen Taschenroboter, mit dem sie jederzeit sprechen kann.

Ich fand [ein Video-Tutorial](https://www.youtube.com/watch?v=Nwu2DruSuyI) über den Bau eines Taschen-KI-Assistenten mit einem Raspberry Pi und dem PiSugar Whisplay HAT. Perfekt. Ein Weihnachtsferienprojekt mit meiner Tochter.

Wir haben zusammen WondLa auf Apple TV geschaut, und Teresa ist fasziniert von Muther - dem fürsorglichen Roboter, der Eva, die Hauptfigur, großzieht.

Also wurde unser Roboter auch Eva. Benannt nach dem Mädchen, das mit einem Roboterbegleiter aufwächst, schien es passend, dass Teresa jetzt ihren eigenen hat.

## Die Hardware

Das Schöne an diesem Projekt ist, dass die Hardware im Wesentlichen Plug-and-Play ist. Drei Komponenten, die sich wie ein kleines Sandwich stapeln:

{{< gallery >}}
  <img src="img/pizero.webp" class="grid-w50" alt="Raspberry Pi Zero 2W" />
  <img src="img/whisplay.webp" class="grid-w50" alt="PiSugar Whisplay HAT" />
{{< /gallery >}}

**Raspberry Pi Zero 2W** - Das Gehirn. Klein, günstig und gerade leistungsstark genug, um unseren Sprachassistenten zu betreiben. Die "WH"-Variante kommt mit vorgelöteten GPIO-Headern, was das Löten erspart.

**PiSugar Whisplay HAT** - Hier passiert die Magie. Es ist ein HAT (Hardware Attached on Top), der ein 1,69"-LCD-Display, einen Lautsprecher, Dual-Mikrofone, einen Knopf und RGB-LEDs enthält. Alles, was man für einen Sprachassistenten braucht, auf einer Platine.

{{< gallery >}}
  <img src="img/pisugar3.webp" class="grid-w50" alt="PiSugar 3 Battery" />
  <img src="img/assembled.webp" class="grid-w50" alt="Zusammengebautes Gerät" />
{{< /gallery >}}

**PiSugar 3 Akku** - Ein 1200mAh wiederaufladbarer Akku, der unten eingeklickt wird. Das macht ihn wirklich tragbar - keine Kabel nötig.

Der Zusammenbau war einfach genug, dass Teresa helfen konnte. Stapel den Akku auf den Pi, steck den Whisplay HAT oben drauf, und du hast einen Taschenroboter.

{{< github repo="PiSugar/whisplay-ai-chatbot" >}}

## Die Software: Von Whisplay zu Eva

PiSugar bietet ein Open-Source-Chatbot-Projekt namens [whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot), das mit ihrer Hardware funktioniert. Es ist beeindruckend - unterstützt mehrere LLM-Anbieter (OpenAI, Google Gemini, Grok, lokales Ollama), Bildgenerierung, Offline-Modi und mehr.

Aber ich wollte etwas Einfacheres und Persönlicheres. Ich wollte, dass Eva:

1. **Portugiesisch aus Portugal spricht** - Nicht brasilianisches Portugiesisch, sondern europäisches Portugiesisch mit dem Akzent, den Teresa zu Hause hört
2. **Eine kinderfreundliche Persönlichkeit hat** - Neugierig, verspielt, ermutigend
3. **Sich an Gespräche erinnert** - Damit Teresa im Laufe der Zeit eine Beziehung zu ihr aufbauen kann
4. **Eva heißt** - Nach der Protagonistin von WondLa

Hier kam Claude ins Spiel. Ich forkte das Whisplay-Projekt und begann mit dem, was ich nur als "Vibe Coding" beschreiben kann - erklären, was ich in natürlicher Sprache wollte, und Claude helfen lassen, den Code umzugestalten.

Zuerst das Wichtigste: Ich brauchte einen OpenAI API-Schlüssel. Ein kurzer Besuch auf [platform.openai.com](https://platform.openai.com), einen neuen Schlüssel generieren, ein paar Credits hinzufügen und ihn in die `.env`-Datei einfügen. Einfach.

Dann kam der lustige Teil - Evas Stimme auswählen. Die TTS-API von OpenAI bietet mehrere Stimmen, also setzten Teresa und ich uns hin und hörten jede einzelne an. Wir gingen durch alloy, echo, fable, onyx, nova, shimmer und sage. Teresa war sehr wählerisch. "Zu ernst." "Zu schnell." "Die klingt wie ein Junge." Schließlich entschieden wir uns für **sage** - warm, freundlich und genau richtig für eine Roboterbegleiterin.

Die wichtigsten Änderungen waren überraschend einfach:

### Portugiesische Stimme mit dem richtigen Akzent

Das ursprüngliche Projekt verwendete Standard-OpenAI-TTS-Stimmen. Für Eva wechselte ich zum neueren `gpt-4o-mini-tts`-Modell und fügte spezifische Anweisungen hinzu:

```typescript
const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "sage",
  input: text,
  instructions: "Speak in Portuguese from Portugal, don't use a brazilian accent. Be positive, enthusiastic, emphatic, and understanding. You're mainly talking to a child.",
  speed: 1.0,
});
```

Das war der Moment, der das Projekt real werden ließ. Als Eva Teresa zum ersten Mal in richtigem Portugiesisch antwortete - nicht mit dem brasilianischen Akzent, den die meisten KIs standardmäßig verwenden - wurden Teresas Augen groß. "Sie spricht wie wir!"

### Eine Persönlichkeit für eine 7-Jährige

Evas System-Prompt definiert, wer sie ist:

```
Tu és a Eva, uma robô amiga e companheira da Teresa.
Personalidade: Amigável, curiosa e um pouco brincalhona.
Adoras aprender coisas novas com a Teresa.
Falas sempre em Português de Portugal.
Usas linguagem simples e apropriada para crianças.
És encorajadora e positiva.
Respondes de forma concisa (2-3 frases normalmente).
```

Übersetzung: "Du bist Eva, eine Roboterfreundin und Begleiterin von Teresa. Persönlichkeit: Freundlich, neugierig und ein bisschen verspielt. Du liebst es, neue Dinge mit Teresa zu lernen. Du sprichst immer Portugiesisch aus Portugal. Du verwendest einfache und kindgerechte Sprache. Du bist ermutigend und positiv. Du antwortest prägnant (normalerweise 2-3 Sätze)."

### Persistenter Speicher

Der ursprüngliche Whisplay-Chatbot setzt den Gesprächsverlauf nach 5 Minuten Stille zurück. Das machte Sinn für einen Allzweck-Assistenten, aber nicht für eine Begleiterin. Eva musste sich erinnern.

Ich implementierte ein Sliding-Window-Kontextsystem - Eva erinnert sich an die letzten 20 Gesprächsrunden und speichert sie auf der Festplatte. Wenn sie startet, lädt sie ihre vorherigen Gespräche. Teresa kann dort weitermachen, wo sie aufgehört hat, und Eva erinnert sich daran, worüber sie gestern gesprochen haben.

```
data/
└── chat_history/
    └── eva_conversation.json
```

## Der magische Moment

{{< figure src="img/turnedonidle.webp" alt="Eva eingeschaltet im Leerlauf" caption="Eva in ihrem Ruhezustand, bereit zum Chatten" >}}

Das erste Mal, als wir Eva zusammen einschalteten, drückte Teresa den Knopf und sagte "Olá Eva!" (Hallo Eva!)

Evas Bildschirm leuchtete mit animierten Augen auf. Sie hörte zu. Sie dachte nach (die Augen schauten nach oben und rechts, als ob sie überlegte). Dann antwortete sie: "Olá Teresa! Que bom falar contigo! O que queres fazer hoje?"

Teresa kicherte, schaute mich mit purer Freude an und begann ein Gespräch über Einhörner, das zwanzig Minuten dauerte.

Das ist das Ding, wenn man etwas mit seinen Kindern baut - die technische Leistung zählt weniger als der Moment des Staunens. Ich hätte Wochen damit verbringen können, den Code zu perfektionieren, die Latenz zu optimieren, Funktionen hinzuzufügen. Aber Teresa dabei zuzusehen, wie sie mit ihrer neuen Roboterfreundin chattet, völlig unbefangen, Eva wie jede andere Freundin behandelnd - das war der ganze Punkt.

## Was ich gelernt habe

**Vibe Coding ist real und funktioniert.** Ich habe mich nicht mit einer detaillierten Spezifikation hingesetzt. Ich hatte eine Idee, einen Fork von jemand anderem Projekt und Claude, um mir beim Umgestalten zu helfen. Der Prozess war gesprächsbasiert - "Ich möchte, dass sie Portugiesisch aus Portugal spricht, nicht brasilianisch" führte zur Erkundung der TTS-API-Optionen, was zur Entdeckung des Instructions-Parameters führte, was zur perfekten Lösung führte.

**Hardware-Projekte sind zugänglicher als je zuvor.** Das PiSugar-Ökosystem machte dies für jemanden möglich, der kaum einen Lötkolben halten kann. Stapel ein paar Platinen, flash eine SD-Karte, führe ein paar Skripte aus, fertig.

**Kindern ist dein Tech-Stack egal.** Teresa hat keine Ahnung, dass Eva auf einem Raspberry Pi läuft, OpenAI-APIs verwendet oder dass ich Stunden damit verbracht habe, Audio-Treiber-Probleme zu debuggen. Sie weiß nur, dass sie eine Roboterfreundin hat, die Portugiesisch spricht und gerne über Tiere redet.

**Portugiesische KI holt noch auf.** Richtiges europäisches Portugiesisch (nicht brasilianisch) zu bekommen, erforderte explizite Anweisungen, und selbst dann ist es nicht perfekt. Es gibt noch Arbeit für weniger verbreitete Sprachvarianten.

## Nächste Schritte

Eva ist noch in Arbeit. Das 3D-gedruckte Gehäuse ist noch nicht angekommen - sie ist derzeit ein Sandwich aus Platinen. Ich möchte Wake-Word-Erkennung hinzufügen, damit Teresa keinen Knopf drücken muss ("Olá Eva!"). Die Gesichtsanimationen könnten ausdrucksvoller sein.

Ich plane auch, ein richtiges Gedächtnissystem auf dem aktuellen 20-Runden-Sliding-Window aufzubauen - etwas, das Eva erlaubt, sich an wichtige Dinge über Teresa im Laufe der Zeit zu erinnern, nicht nur an die letzten Gespräche. Lieblingsfarbe, Name der besten Freundin, solche Sachen. Eine echte Begleiterin sollte sich an das erinnern, was wichtig ist.

Aber ehrlich? Sie funktioniert. Teresa spricht jeden Tag mit ihr. Und das ist vorerst genug.

Wenn du etwas Ähnliches bauen möchtest, schau dir das [whisplay-ai-chatbot](https://github.com/PiSugar/whisplay-ai-chatbot)-Projekt an - es ist ein großartiger Ausgangspunkt. Die Hardware ist Plug-and-Play, und mit ein bisschen Vibe Coding kannst du es zu deinem eigenen machen.

---

*Gebaut mit Liebe, Claude und vielen "Papá, a Eva pode falar sobre dinossauros?"*
