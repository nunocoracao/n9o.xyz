---
title: "Erstelle deine Homepage mit Blowfish und Hugo"
summary: "Vor gerade einem Jahr habe ich Blowfish erstellt, ein Hugo-Theme, das speziell für meine einzigartige Vision meiner persönlichen Homepage entwickelt wurde. Ich entschied mich auch, es als Open-Source-Projekt zu veröffentlichen. Heute hat sich Blowfish zu einem florierenden Open-Source-Projekt mit über 600 Sternen auf GitHub und einer Nutzerbasis von Hunderten entwickelt. In diesem Tutorial zeige ich dir, wie du loslegen und deine Website in wenigen Minuten zum Laufen bringen kannst."
description: "Vor gerade einem Jahr habe ich Blowfish erstellt, ein Hugo-Theme, das speziell für meine einzigartige Vision meiner persönlichen Homepage entwickelt wurde. Ich entschied mich auch, es als Open-Source-Projekt zu veröffentlichen. Heute hat sich Blowfish zu einem florierenden Open-Source-Projekt mit über 600 Sternen auf GitHub und einer Nutzerbasis von Hunderten entwickelt. In diesem Tutorial zeige ich dir, wie du loslegen und deine Website in wenigen Minuten zum Laufen bringen kannst."
categories: ["Open-Source", "Blowfish"]
tags: ["tutorial", "blowfish", "hugo"]
date: 2023-10-04
draft: false
---

Vor gerade einem Jahr habe ich [Blowfish](https://blowfish.page/) erstellt, ein [Hugo](https://gohugo.io/)-Theme, das speziell für meine einzigartige Vision meiner persönlichen Homepage entwickelt wurde. Ich entschied mich auch, es als Open-Source-Projekt zu veröffentlichen. Heute hat sich Blowfish zu einem florierenden Open-Source-Projekt mit über 600 Sternen auf GitHub und einer Nutzerbasis von Hunderten entwickelt. In diesem Tutorial zeige ich dir, wie du loslegen und deine Website in wenigen Minuten zum Laufen bringen kannst.

{{< github repo="nunocoracao/blowfish" >}}

## TL;DR

Das Ziel dieses Guides ist es, einem Hugo-Neuling zu zeigen, wie man seine eigene Website installiert, verwaltet und veröffentlicht. Die finale Version des Codes ist in diesem [Repo](https://github.com/nunocoracao/blowfish-tutorial/tree/main) verfügbar - für diejenigen, die zum Ende springen möchten.

![Tutorial-Beispiel](/posts/202310-blowfish-tutorial/img/01.webp)

Der visuelle Stil ist nur eine der vielen Möglichkeiten, die in Blowfish verfügbar sind. Benutzer werden ermutigt, die [Dokumentationsseite](https://blowfish.page/) zu besuchen und zu lernen, wie sie das Theme an ihre Bedürfnisse anpassen können. Außerdem gibt es bereits [tolle Beispiele](https://blowfish.page/users/) des Themes von anderen Benutzern zur Inspiration. Blowfish bietet auch mehrere zusätzliche Funktionen in Form von `shortcodes`, die im Theme sofort verfügbar sind - schau sie dir [hier](https://blowfish.page/docs/shortcodes/) an und lass dich inspirieren.

## Richte deine Umgebung ein

Beginnen wir mit der Installation aller benötigten Tools. Dieser Guide behandelt die Schritte für Mac, daher gelten diese Anweisungen möglicherweise nicht für deine Hardware und dein Betriebssystem. Wenn du Windows oder Linux verwendest, konsultiere bitte die Anleitungen zur [Installation von Hugo](https://gohugo.io/installation/) und [GitHubs CLI](https://cli.github.com/) für dein Betriebssystem.

Wenn du MacOS verwendest, installieren wir zunächst `brew` - einen Paketmanager für Mac - da dies bei der Installation und Verwaltung der anderen Tools helfen wird.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Sobald `brew` installiert ist, installieren wir Git, Hugo und GitHubs CLI.
```bash
brew install git
brew install hugo
brew install gh
```

Erstelle einen Ordner für deinen Code und öffne eine Terminalsitzung darin (ich habe _blowfish-tutorial_ in den Befehlen unten gewählt, du kannst den Ordner nennen, wie du willst).
```bash
mkdir blowfish-tutorial
cd blowfish-tutorial
```

Sobald du im Ordner bist, ist der nächste Schritt die Initialisierung deines lokalen `git`-Repos.
```bash
git init -b main
```

Jetzt erstellen und synchronisieren wir das lokale Repo mit einem GitHub-Repo, damit dein Code remote gespeichert wird.
```bash
gh auth login
gh repo create
git push --set-upstream origin main
```

Schau dir das Bild unten für die Optionen an, die ich für diesen Guide ausgewählt habe, ändere gerne Namen und Beschreibung für deinen Anwendungsfall.

![gh repo create Beispiel](/posts/202310-blowfish-tutorial/img/ghcreate.webp)


Erstelle schließlich eine **.gitignore**-Datei, die es dir ermöglicht, bestimmte Dateien automatisch von deinem Repo auszuschließen. Ich würde mit etwas wie dem folgenden Beispiel beginnen.

```bash
#others
node_modules
.hugo_build.lock

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes

# Hugo
public
```

Der letzte Schritt ist das Speichern aller Änderungen im Repo.
```bash
git add .
git commit -m "initial commit"
git push
```


## Erstelle die Site und konfiguriere sie

Mit allen Tools bereit wird das Erstellen und Konfigurieren deiner Site einfach sein. Noch immer im Ordner, den du im letzten Abschnitt erstellt hast, erstellen wir eine leere Hugo-Website (_ohne Theme_).

```bash
hugo new site --force .
```

Sobald das Scaffolding fertig ist, versuche den folgenden Befehl, um deine Seite auszuführen. Öffne einen Browser unter _[https://localhost:1313](https://localhost:1313)_, um deine Site zu sehen…

```bash
hugo server
```

 Ups… Seite nicht gefunden – richtig?
Dies war zu erwarten, denn obwohl du eine Website erstellt hast, gibt Hugo keine Standarderfahrung – d.h. deine Site hat keine Seite zum Anzeigen.

Nächster Schritt, installieren wir Blowfish mit `git submodules`, was es einfacher macht, es zu verwalten und auf neue Versionen in der Zukunft zu aktualisieren.

```bash
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Als nächstes erstelle die folgende Ordnerstruktur im Stammverzeichnis deines Code-Verzeichnisses - `config/_default/`. Jetzt musst du [diese Dateien](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fnunocoracao%2Fblowfish%2Ftree%2Fmain%2Fconfig%2F%5C_default) herunterladen und sie im _\_default_-Ordner platzieren, den du gerade erstellt hast. Die finale Struktur sollte etwa so aussehen.

```md
config/_default/
├─ config.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
└─ params.toml
`
```


Öffne die **config.toml** und entkommentiere die Zeile **theme = "blowfish"** und du bist bereit loszulegen. Versuche die Site erneut auszuführen und überprüfe das Ergebnis unter _[https://localhost:1313](https://localhost:1313)_

```bash
hugo server
```

Du solltest etwas wie das Bild unten sehen. Noch nicht viel, da wir keinen Inhalt hinzugefügt haben, aber das Hauptgerüst für Blowfish ist bereits vorhanden - es erfordert nur Konfiguration.

![blowfish leere Site](/posts/202310-blowfish-tutorial/img/blowfishempty.webp)

Jetzt konfigurieren wir das Theme.

{{< alert  d>}}
**FYI** Dieser Guide wird nicht im Detail behandeln, was jeder in Blowfish verfügbare Parameter macht – für alles Verfügbare und wie man es verwendet, schau in der [Blowfish-Dokumentation](https://blowfish.page/docs/configuration/#theme-parameters) für jede Option in jeder Datei nach.
{{< /alert >}}

### menus.en.toml
Diese Datei definiert deine Menüstruktur für das obere Banner und die Fußzeile. Für diesen Guide erstellen wir zwei Menüabschnitte: einen für _Posts_ und einen für _Tags_.
- **Posts** - zeigt die vollständige Liste der Einträge an
- **Tags** - automatisch generiert basierend auf Tags, die in jedem Artikel platziert sind

Um dies zu erreichen, stelle sicher, dass die folgenden Einträge in der **menus.en.toml**-Datei existieren. Sobald die Änderungen vorgenommen sind, solltest du die Menüs erscheinen sehen, wenn du **hugo server** erneut ausführst.

```toml
[[main]]
  name = "Posts"
  pageRef = "posts"
  weight = 10

[[main]]
  name = "Tags"
  pageRef = "tags"
  weight = 30
```


### languages.en.toml

Diese Datei konfiguriert deine Hauptdetails als Autor der Website. Ändere den Abschnitt unten, um deine Details widerzuspiegeln.

```bash
[author]
   name = "Dein Name hier"
   image = "profile.jpg"
   headline = "Ich bin auch nur ein Mensch"
   bio = "Ein bisschen über dich" # erscheint in der Autorenkarte für jeden Artikel
```

Die Bilder für die Website sollten im _assets_-Ordner platziert werden. Für diesen Schritt füge bitte ein Profilbild zu diesem Ordner hinzu, das _profile.jpg_ heißt, oder ändere die Konfiguration oben auf den von dir gewählten Dateinamen. Wenn du kein Profilbild verfügbar hast, kannst du das untenstehende für das Tutorial verwenden.

![Profil](/posts/202310-blowfish-tutorial/img/profile.jpg "assets/profile.jpg")

Der letzte Schritt ist die Konfiguration deiner Links – Social Media, GitHub, etc. Die Datei enthält alle unterstützten Optionen, aber sie sind auskommentiert. Du kannst gerne alles entkommentieren und die löschen, die du lieber nicht verwenden möchtest. Ersetze die richtigen Links bei denen, die du behalten möchtest. Du kannst auch die Reihenfolge ändern.



### params.toml

Dies ist die Hauptkonfigurationsdatei für Blowfish. Die meisten visuellen Optionen oder Anpassungen können damit konfiguriert werden, und sie deckt mehrere Bereiche des Themes ab. Für dieses Tutorial habe ich mich für ein **background**-Layout entschieden - [andere Layouts für Blowfishs Landingpage ansehen](https://blowfish.page/) - mit dem **Neon**-Farbschema - du kannst ein anderes Farbschema wählen, wenn du möchtest - schau dir [diese Liste](https://blowfish.page/docs/getting-started/#colour-schemes) an oder [erstelle dein eigenes](https://blowfish.page/docs/advanced-customisation/#colour-schemes).

Füge ein **image.jpg** zum assets-Ordner hinzu, das der Hintergrund für die Site sein wird. Du kannst auch die Beispiele herunterladen, die ich in diesem Tutorial verwende.

![Hintergrund](/posts/202310-blowfish-tutorial/img/background.jpg "assets/image.jpg")

Jetzt springen wir in die _params.toml_ und beginnen mit der Konfiguration der Datei. Ich werde mich nur auf die Werte konzentrieren, die geändert werden müssen, lösche nicht den Rest der Datei ohne die Dokumentation zu lesen. Beginnen wir damit sicherzustellen, dass wir das richtige Farbschema haben, dass die Bildoptimierung aktiviert ist, und konfigurieren das Standardhintergrundbild.

```bash
colorScheme = "neon"
disableImageOptimization = false
defaultBackgroundImage = "image.jpg" # wird als Standard für Hintergrundbilder verwendet
```

Als nächstes konfigurieren wir unsere Homepage. Wir verwenden das _background_-Layout, konfigurieren das Homepage-Bild und die neuesten Elemente. Außerdem verwenden wir die **Card-Ansicht** für Elemente in der Kategorie "Neueste". Schließlich konfigurieren wir den Header als fixiert.

```bash
[homepage]
  layout = "background" # gültige Optionen: page, profile, hero, card, background, custom
  homepageImage = "image.jpg" # verwendet in: hero und card
  showRecent = true
  showRecentItems = 6
  showMoreLink = true
  showMoreLinkDest = "/posts"
  cardView = true
  cardViewScreenWidth = false
  layoutBackgroundBlur = true # nur verwendet wenn Layout gleich background

[header]
  layout = "fixed"
```

Jetzt konfigurieren, wie die Artikel- und Listenseiten aussehen werden. Hier sind die Konfigurationen dafür.

```bash
[article]
  showHero = true
  heroStyle = "background"
  showSummary = true
  showTableOfContents = true
  showRelatedContent = true
  relatedContentLimit = 3

[list]
  showCards = true
  groupByYear = false
  cardView = true
```


Wenn du **hugo server** erneut ausführst, solltest du etwas wie das Bild unten sehen.


![blowfish keine Artikel](/posts/202310-blowfish-tutorial/img/blowfishnoarticles.webp)



## Inhalte zu deiner Site hinzufügen

Erstelle einen Ordner für deine Posts in `/content/posts`. Dies war auch das Verzeichnis, das in deinem Menü konfiguriert wurde, um alle Artikel aufzulisten. Innerhalb dieses Ordners erstellen wir ein neues Verzeichnis und nennen es **myfirstpost**. Darin erstelle eine **index.md**-Datei – deinen Artikel und platziere ein featured.jpg oder .webp im selben Verzeichnis als Thumbnail für den Artikel. Verwende das Beispiel unten zum Einstieg. Die ersten Zeilen in der Datei sind die Front Matter, die Hugo mitteilen, wie der Artikel aussehen und sich verhalten soll – verschiedene Themes unterstützen verschiedene Parameter dafür. Schau in der [Dokumentation](https://blowfish.page/docs/front-matter/) für weitere Informationen nach.

```md
---
title: "Mein erster Post"
date: 2023-08-14
draft: false
summary: "Dies ist mein erster Post auf meiner Site"
tags: ["space"]
---

## Ein Untertitel

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisl, vulputate eu lacus vitae, maximus molestie libero. Vestibulum laoreet, odio et sollicitudin sollicitudin, quam ligula tempus urna, sed sagittis eros eros ac felis. In tristique tortor vitae lacinia commodo. Mauris venenatis ultrices purus nec fermentum. Nunc sit amet aliquet metus. Morbi nisl felis, gravida ac consequat vitae, blandit eu libero. Curabitur porta est in dui elementum porttitor. Maecenas fermentum, tortor ac feugiat fringilla, orci sem sagittis massa, a congue risus ipsum vel massa. Aliquam sit amet nunc vulputate, facilisis neque in, faucibus nisl.
```

Du kannst zusätzliche Artikel erstellen, um zu sehen, wie deine Site aussehen wird, sobald Inhalt vorhanden ist. Deine Site sollte wie die Bilder unten aussehen. Die Hauptseite zeigt die neuesten Artikel, jeder Artikel ist automatisch über den verwandten Bereich mit anderen verbunden, du hast Tag-Aggregation und Volltextsuche.

{{< gallery >}}
  <img src="/posts/202310-blowfish-tutorial/img/blowfishrecent.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/article.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/search.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/tag.webp" class="grid-w50" />
{{< /gallery >}}


## Veröffentlichen

Das Einzige, was noch fehlt, ist deine Site zu veröffentlichen. Ich werde [Firebase](https://firebase.google.com/) für das Hosting verwenden - es ist eine kostenlose Alternative und bietet erweiterte Funktionen, wenn du etwas Komplexeres erstellst. Gehe zu Firebase und erstelle ein neues Projekt. Sobald das erledigt ist, wechseln wir zur CLI, da es einfacher wird, alles zu konfigurieren.

Installieren wir die Firebase-CLI - wenn nicht auf Mac, schau dir die [Installationsanweisungen auf Firebase](https://firebase.google.com/docs/cli) an.
```bash
brew install firebase
```

Jetzt einloggen und Firebase-Hosting für das Projekt initialisieren.

```bash
firebase login
firebase init
```

Wähle Hosting und fahre fort.

![firebase init](/posts/202310-blowfish-tutorial/img/firebasecli.webp)

Folge dem Bild unten für die Optionen, die ich empfehle. Stelle sicher, dass du die Workflow-Dateien für GitHub-Actions einrichtest. Diese werden garantieren, dass dein Code bereitgestellt wird, sobald es eine Änderung im Repo gibt.

![firebase Optionen](/posts/202310-blowfish-tutorial/img/firebaseoptions.webp)

Diese Dateien werden jedoch nicht sofort funktionieren, da Hugo zusätzliche Schritte für den Build erfordert. Bitte kopiere und füge die Code-Blöcke unten in die entsprechenden Dateien im **.github**-Ordner ein, aber behalte die ursprüngliche **projectId** in den von Firebase generierten Dateien.

### firebase-hosting-merge.yml
```yaml
# This file was auto-generated by the Firebase CLI
# https://github.com/firebase/firebase-tools

name: Deploy to Firebase Hosting on merge
'on':
  push:
    branches:
      - main
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Hugo setup
        uses: peaceiris/actions-hugo@v2.6.0
        with:
          hugo-version: 0.115.4
          extended: true
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: 'true'

      - name: Check out code into the Go module directory
        uses: actions/checkout@v4
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: hugo -E -F --minify -d public

      - name: Deploy Production
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BLOWFISH_TUTORIAL }}'
          channelId: live
          projectId: blowfish-tutorial

```


### firebase-hosting-pull-request.yml
```yaml
# This file was auto-generated by the Firebase CLI
# https://github.com/firebase/firebase-tools

name: Deploy to Firebase Hosting on PR
'on': pull_request
jobs:
  build_and_preview:
    if: '${{ github.event.pull_request.head.repo.full_name == github.repository }}'
    runs-on: ubuntu-latest
    steps:
      - name: Hugo setup
        uses: peaceiris/actions-hugo@v2.6.0
        with:
          hugo-version: 0.115.4
          extended: true
        env:
          ACTIONS_ALLOW_UNSECURE_COMMANDS: 'true'

      - name: Check out code into the Go module directory
        uses: actions/checkout@v4
        with:
          submodules: true  # Fetch Hugo themes (true OR recursive)
          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod

      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run:  hugo -E -F --minify -d public

      - name: Deploy preview
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_BLOWFISH_TUTORIAL }}'
          expires: 30d
          channelId: preview-${{ github.event.number }}
          projectId: blowfish-tutorial
```


Der letzte Schritt ist das Committen deines Codes zu GitHub und die erstellten Workflows kümmern sich um das Deployment deiner Site. Da wir GitHub-Actions konfiguriert haben, wird dies einen Job auslösen, der deine Site automatisch konfiguriert und bereitstellt.

```bash
git add .
git commit -m "add github actions workflows"
git push
```

Im Actions-Tab deines Repos solltest du etwas wie dies sehen.

![gh actions](/posts/202310-blowfish-tutorial/img/githubactions.webp)

Sobald alle Schritte abgeschlossen sind, sollte deine Firebase-Konsole etwas wie das Bild unten zeigen - einschließlich der Links, um deine App zu sehen – ich habe eine Version dieses Tutorials unter [https://blowfish-tutorial.web.app/](https://blowfish-tutorial.web.app/) laufen.

![firebase Konsole](/posts/202310-blowfish-tutorial/img/firebaseconsole.webp)


## Fazit und nächste Schritte

Jetzt hast du deine erste Version deiner Homepage. Du kannst lokal Änderungen vornehmen und sobald du deinen Code committest, werden sie automatisch online reflektiert. Was solltest du als nächstes tun? Ich lasse dir einige nützliche Links, um dich zu inspirieren und mehr über Blowfish und Hugo zu erfahren.

- https://blowfish.page/docs/
- https://blowfish.page/docs/configuration/
- https://blowfish.page/docs/shortcodes/
- https://blowfish.page/examples/
- https://blowfish.page/users/
- https://gohugo.io/documentation/

![blowfish final](/posts/202310-blowfish-tutorial/img/01.webp)
