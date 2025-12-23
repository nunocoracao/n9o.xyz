---
title: "Wie man Stable Diffusion auf dem Laptop ausführt"
description: "Im letzten Jahr wurden mehrere maschinelle Lernmodelle öffentlich zugänglich, um Bilder aus Textbeschreibungen zu generieren. Dies war eine interessante Entwicklung im KI-Bereich. Erst kürzlich wurde diese Technologie jedoch für jeden zum Ausprobieren verfügbar."
summary: "Im letzten Jahr wurden mehrere maschinelle Lernmodelle öffentlich zugänglich, um Bilder aus Textbeschreibungen zu generieren. Dies war eine interessante Entwicklung im KI-Bereich. Erst kürzlich wurde diese Technologie jedoch für jeden zum Ausprobieren verfügbar."
categories: ["Technologie","Tutorial"]
tags: ["KI","Stable Diffusion","Neuronales Netzwerk"]
#externalUrl: ""
date: 2022-10-06
draft: false
series: ["Der Neue KI-Hype"]
series_order: 3
---

Im letzten Jahr wurden mehrere maschinelle Lernmodelle öffentlich zugänglich, um Bilder aus Textbeschreibungen zu generieren. Dies war eine interessante Entwicklung im KI-Bereich. Die meisten dieser Modelle blieben jedoch aus berechtigten ethischen Gründen Closed Source. Deshalb bist du, obwohl du über eine Schnittstelle mit ihnen interagieren kannst, in der Anzahl der Dinge, die du testen kannst, begrenzt. Bis jetzt…

Das neueste dieser Modelle ist Stable Diffusion, ein offenes maschinelles Lernmodell, das von <a href="https://stability.ai/" target="_blank">Stability AI</a> entwickelt wurde, um digitale Bilder aus natürlichsprachlichen Beschreibungen zu generieren. Dieses Modell ist ziemlich populär geworden, hauptsächlich weil es das erste war, das Open Source wurde.

Ich habe bereits mit <a href="https://openai.com/dall-e-2/" target="_blank">Dall-E</a> und <a href="https://www.midjourney.com/home/" target="_blank">Midjourney</a> experimentiert, wollte aber versuchen, ein Modell lokal auszuführen und mehr Freiheit zum Experimentieren zu haben. Ich konnte das Modell erfolgreich auf meinem M1 Pro und auf meinem Windows-Desktop installieren und ausführen. Diese Anleitung beschreibt die Schritte, die ich befolgt habe, um alles auf meinem Mac zum Laufen zu bringen.


## Anfängliche Hinweise
Ein paar Hinweise, bevor wir loslegen. Ich habe mehrere Anleitungen online ausprobiert und konnte mit keiner davon eine reibungslose Erfahrung machen. Ich musste zahlreiche Repos, Lösungen usw. ausprobieren. Das Hauptziel dieser Anleitung ist es, Anweisungen zu geben, wie man Stable Diffusion auf einem M1 ausführt, wo ich mehr Herausforderungen gefunden habe. Die Installation unter Windows war viel einfacher.

Das gesagt, das Repo, bei dem ich gelandet bin, hat detaillierte Anleitungen für alle Plattformen: <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_WINDOWS.md" target="_blank">Windows</a>, <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md" target="_blank">Mac</a> und <a href="https://github.com/nunocoracao/InvokeAI/blob/main/docs/installation/INSTALL_LINUX.md" target="_blank">Linux</a>. Zögere nicht, eine davon zu verwenden, wenn du eine andere Plattform nutzt oder diese Anleitung auf einem Mac nicht für dich funktioniert.

{{< alert >}}
*Hinweis: Ich habe die obige Mac-Anleitung nicht ausprobiert, da ich, als ich dieses Repo fand, bereits die meisten Workarounds herausgefunden hatte, die nötig waren, um das Modell zum Laufen zu bringen.*
{{< /alert >}}


## Code holen

Beginnen wir damit, den Code zu holen. Ich verwende <a href="https://github.com/invoke-ai/InvokeAI" target="_blank">InvokeAIs Fork von Stable Diffusion</a>, den ich <a href="https://github.com/nunocoracao/InvokeAI" target="_blank">hier</a> geforkt habe. Du kannst gerne das Original-Repo von InvokeAI verwenden, wenn du möchtest. Ich werde meinen Fork verwenden, um sicherzustellen, dass die Anleitung aktuell und funktionsfähig bleibt. Ich habe mich für dieses Repo entschieden, weil 1) es das erste war, das ich zum Laufen bringen konnte, und 2) es einer der wenigen Forks war, die eine Web-UI hatten, was die Interaktion mit dem Ganzen viel einfacher macht.

Zu Beginn klone das Repo auf deinen lokalen Rechner.

```bash
git clone https://github.com/nunocoracao/InvokeAI
```

## Modell holen

Jetzt musst du das eigentliche Modell holen, das die Gewichte für das Netzwerk enthält. Dies ist das Ergebnis massiver Trainingszyklen mit riesigen Datensätzen, mit denen ein normaler Benutzer mit durchschnittlicher Hardware nicht konkurrieren kann. Das Modell wird nicht mit dem Code verteilt wegen seiner Größe (ca. 7,5 GB) und um sicherzustellen, dass Benutzer einer Lizenz zustimmen müssen, hier kommt Hugging Face ins Spiel.

Geh einfach zur <a href="https://huggingface.co/" target="_blank">Hugging Face Website</a> und melde dich an, oder erstelle ein Konto, wenn du noch keines hast. Sobald du eingerichtet bist, klicke <a href="https://huggingface.co/CompVis/stable-diffusion-v-1-4-original" target="_blank">hier</a>, akzeptiere die Bedingungen auf der Model-Card und lade die Datei namens `sd-v1-4-full-ema.ckpt` herunter. Nachdem du das Modell heruntergeladen hast, geh in den Code-Ordner und platziere es in `models/ldm/stable-diffusion-v1/` mit dem Namen `model.ckpt`. Der Ordner `stable-diffusion-v1` existiert nicht und muss erstellt werden.


{{< alert >}}
*Hinweis: Es gibt andere Varianten des Modells, die du erkunden kannst, dies ist die von den meisten Repos empfohlene.*
{{< /alert >}}

## Umgebung einrichten

Mit dem Code und dem Modell bereit ist der nächste Schritt, die lokale Umgebung einzurichten, um alles auszuführen.

### Xcode installieren

Der erste Schritt ist die Installation von Xcode, einer Suite von Tools, die Entwickler verwenden, um Apps für Apple-Plattformen zu erstellen. Xcode kann aus dem App Store installiert werden, oder du kannst es von Apples Developer-Website herunterladen.

Wie in der Dokumentation definiert, ist das Command Line Tools Package ein kleines eigenständiges Paket, das separat von Xcode zum Download verfügbar ist und dir ermöglicht, Kommandozeilen-Entwicklung in macOS durchzuführen.

Für eine Neuinstallation oder um sicherzustellen, dass du alles hast, was wir brauchen, sollte dieser Befehl ausreichen:

```bash
xcode-select --install
```

### Conda installieren

Die meisten Lösungen, die ich gesehen habe, verwenden <a href="https://docs.conda.io/projects/conda/en/latest/#" target="_blank">Conda</a>, um die erforderlichen Pakete und Umgebungen zu verwalten, die zum Ausführen der Lösung benötigt werden. Condas Installationsanleitung für jede Plattform ist super klar, daher rate ich dir, einfach den Anweisungen <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html#regular-installation" target="_blank">hier</a> zu folgen. Sie haben zwei _Varianten_ ihrer Software: Anaconda und Miniconda. Ich habe Miniconda ohne Erfolg versucht. Am Ende habe ich Anaconda verwendet, was einige der Probleme gelöst hat. Außerdem habe ich <a href="https://docs.conda.io/projects/conda/en/latest/user-guide/install/macos.html" target="_blank">diese Anleitung</a> befolgt, wenn du fertig bist, kannst du diesen Befehl verwenden, um deine Installation zu überprüfen (_Hinweis: vergiss nicht, deine Terminal-Anwendung neu zu starten_):

```bash
conda
```

Wenn der Installationsprozess erfolgreich war, solltest du etwas wie das Bild unten sehen.

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/conda_result.webp"/>

{{< alert >}}
*Hinweis: `conda` erfordert, dass sowohl `python`- als auch `pip`-Befehle im Terminal verfügbar sind, wenn die Umgebung in den nächsten Schritten erstellt wird. Bitte stelle sicher, dass diese richtig konfiguriert sind, da auf Mac die Standardwerte python3 und pip3 sind, daher musst du höchstwahrscheinlich einen Alias erstellen.*
{{</ alert >}}


### Rust installieren

Bei einigen anderen Anleitungen hatte ich immer Probleme im nächsten Teil des Prozesses, dem Aufbau der Umgebungen. Nach vielen Versuchen stellte ich fest, dass mir der Rust-Compiler auf meinem System fehlte. Ich folgte der Rust-Installationsanleitung <a href="https://www.rust-lang.org/tools/install" target="_blank">hier</a>, was auf das Ausführen des folgenden Befehls hinausläuft:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

{{< alert >}}
*Hinweis: Ich bin nicht zu allen Anleitungen im Repo zurückgegangen, um zu prüfen, ob dies in ihrer Methode erforderlich ist oder nicht. Zögere nicht, den nächsten Schritt ohne Installation von Rust auszuprobieren und zurückzukommen, wenn du auf Probleme stößt.*
{{< /alert >}}

### Umgebung erstellen und aktivieren

Wir sind fast da. Jetzt werden wir die `ldm`-Umgebung erstellen und aktivieren, bevor wir mit der Bildgenerierung beginnen. Um dies zu erreichen, wechsle mit `cd` in das Stammverzeichnis des Repos, das du am Anfang dieser Anleitung geklont hast, und erstelle die Umgebung mit dem folgenden Befehl:

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env create -f environment-mac.yml
```

Wenn du in diesem Schritt auf Probleme stößt und die Umgebung neu erstellen musst, hast du zwei Optionen: 1) den folgenden Befehl verwenden:

```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-arm64 conda env update -f environment-mac.yml
```

*Wenn du einen Intel Mac hast, sollte der Befehl lauten:*
```bash
PIP_EXISTS_ACTION=w CONDA_SUBDIR=osx-64 conda env create -f environment-mac.yml
```

Oder 2) in Anacondas Ordner gehen, die Umgebung löschen und die Umgebung mit dem ursprünglichen Befehl in diesem Abschnitt erstellen. Nach dem Ausprobieren mehrerer Repos musste ich auf 2) zurückgreifen, um das Durcheinander zu bereinigen.

Jetzt ist es Zeit, die Umgebung zu aktivieren mit:

```bash
conda activate invokeai
```

Der letzte Schritt ist das Vorladen der Modelle mit dem Befehl:

```bash
python scripts/preload_models.py
```


## Viel Spaß…

Jetzt ist es Zeit, mit Stable Diffusion zu experimentieren. Führe aus:

```bash
python scripts/invoke.py --full_precision --web
```

Und öffne deinen Browser auf `localhost:9090`

Du solltest eine Web-Oberfläche wie die unten gezeigte sehen.

<img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/webui_new.webp"/>


Wähle deinen ersten Prompt und probiere das Modell aus, alle Bilder werden in `output/img-samples` gespeichert. Erkunde die verschiedenen möglichen Modelle und Konfigurationen. Ich habe meine mit `512x512` Bildern ausgeführt, etwa `100` Zyklen für die finalen Bilder (`5` für die anfänglichen Varianten), und config scale bei `7.5`. Als Sampler bevorzuge ich die Ergebnisse mit `DDIM`, du findest einige Details zu den Unterschieden zwischen Samplern und einige Beispiele in <a href="https://www.reddit.com/r/StableDiffusion/comments/x4zs1r/comparison\_between\_different\_samplers\_in\_stable/" target="_blank">diesem Reddit-Thread</a>.

Seit ich diesen Artikel ursprünglich geschrieben habe, gibt es eine neue Version von InvokeAIs Stable-Diffusion-Implementierung, neben dem, was ich oben beschrieben habe, gibt es viele neue Funktionen, die du erkunden kannst, mehr Details [hier](https://github.com/invoke-ai/InvokeAI/releases/tag/v2.0.0).

## Einige Beispiele

Hier sind einige Beispielbilder aus meinen ersten Durchläufen des Modells. Ich muss sagen, dass es eine gewisse _Kunst_ gibt, diese zum Funktionieren zu bringen. Ich hinterlasse hier ein paar Links, um Ideen zu bekommen, wie man `Prompts` gestalten kann.

- <a href="https://decentralizedcreator.com/10-best-text-to-image-prompts-for-ai-art-generator-disco-diffusion-a-visual-treat-inside/" target="_blank">10 Beste Text-zu-Bild-Prompts für KI-Kunst-Generator</a>
- <a href="https://prompthero.com/" target="_blank">Prompthero</a>


<div style="display: flex; flex-wrap: wrap;">

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000008.2887160172.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000023.4136023390.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000024.2854274560.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000028.4255152621.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000031.1604394908.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000036.1662843642.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000043.2287582219.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000045.234321637.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000057.107659121.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000058.157499426.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000063.2383238266.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000067.2841883613.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000102.4159217524.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000116.829934269.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000145.2404672998.webp"/>
  </div>

  <div style="flex: 1; margin:10px; min-width:128px">
    <img class="thumbnailshadow" src="/posts/202210-stable-diffusion-tutorial/examples/000149.811067720.webp"/>
  </div>

</div>

## Haftungsausschluss & Andere Optionen

Ein paar Dinge zum Abschluss. Obwohl ich dies sowohl auf einem Mac als auch unter Windows installiert habe und die Mac-Erfahrung mit einem M1 Pro gar nicht schlecht war, war die Leistung auf meinem Windows-Rechner mit einer Nvidia RTX 2070 viel besser. Die meisten Bilder, die du in dieser Anleitung siehst, wurden von diesem System generiert, da es mir ermöglichte, schneller Varianten auszuprobieren und mehr Qualität aus Samples zu holen, die mir gefielen.

Eines meiner anfänglichen Ziele war es, das Modell mit zusätzlichem Training erweitern zu können, also mein Gesicht ins Modell zu bringen und damit zu experimentieren. Leider war das nicht möglich, da ich die Trainingsmethoden nicht auf dem Mac ausführen konnte und meine GPU unter Windows nicht die richtigen Anforderungen hat, um das Modell zu trainieren. Derzeit scheint es, dass du mindestens 16GB VRAM brauchst.

Letztendlich gibt es eine Menge Optionen zum Ausführen des Stable-Diffusion-Modells, einige lokal, einige in der Cloud (z.B. Google Colab), also sei nicht frustriert, wenn du das ausprobieren möchtest, aber keinen Zugang zu einer Maschine hast, die es ausführen kann. Es gibt wahrscheinlich andere Lösungen, die du nutzen kannst.

Markiere mich auf Social Media bei deinen Kreationen, wenn du das zum Laufen bringst:

<div style="display: flex; flex-wrap: wrap;">

  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://twitter.com/nunocoracao" target="_blank" >}}
    {{< icon "twitter" >}}&nbsp;
    Folge mir auf Twitter
    {{< /button >}}
  </div>

  <div style="flex: 1; margin:10px; min-width:256px">
    {{< button href="https://www.instagram.com/nunocoracao/" target="_blank" >}}
    {{< icon "instagram" >}}&nbsp;
    Folge mir auf Instagram
    {{< /button >}}
  </div>

</div>
