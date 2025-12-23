---
title: "Costruisci la tua homepage usando Blowfish e Hugo"
summary: "Solo un anno fa, ho creato Blowfish, un tema Hugo progettato per costruire la mia visione unica della mia homepage personale. Ho anche deciso di renderlo un progetto open-source. Oggi Blowfish si è trasformato in un fiorente progetto open-source con oltre 600 stelle su GitHub e una base utenti di centinaia. In questo tutorial, ti mostrerò come iniziare e avere il tuo sito web funzionante in pochi minuti."
description: "Solo un anno fa, ho creato Blowfish, un tema Hugo progettato per costruire la mia visione unica della mia homepage personale. Ho anche deciso di renderlo un progetto open-source. Oggi Blowfish si è trasformato in un fiorente progetto open-source con oltre 600 stelle su GitHub e una base utenti di centinaia. In questo tutorial, ti mostrerò come iniziare e avere il tuo sito web funzionante in pochi minuti."
categories: ["Open-Source", "Blowfish"]
tags: ["tutorial", "blowfish", "hugo"]
date: 2023-10-04
draft: false
---

Solo un anno fa, ho creato [Blowfish](https://blowfish.page/), un tema [Hugo](https://gohugo.io/) progettato per costruire la mia visione unica della mia homepage personale. Ho anche deciso di renderlo un progetto open-source. Oggi Blowfish si è trasformato in un fiorente progetto open-source con oltre 600 stelle su GitHub e una base utenti di centinaia. In questo tutorial, ti mostrerò come iniziare e avere il tuo sito web funzionante in pochi minuti.

{{< github repo="nunocoracao/blowfish" >}}

## TL;DR

L'obiettivo di questa guida è accompagnare un principiante di Hugo su come installare, gestire e pubblicare il proprio sito web. La versione finale del codice è disponibile in questo [repo](https://github.com/nunocoracao/blowfish-tutorial/tree/main) - per chi volesse saltare alla fine.

![Esempio tutorial](/posts/202310-blowfish-tutorial/img/01.webp)

Lo stile visivo è solo una delle molte possibilità disponibili in Blowfish. Gli utenti sono incoraggiati a consultare la [pagina della documentazione](https://blowfish.page/) e imparare come personalizzare il tema secondo le proprie esigenze. Inoltre, ci sono già [ottimi esempi](https://blowfish.page/users/) del tema da altri utenti disponibili per ispirazione. Blowfish offre anche diverse funzionalità extra sotto forma di `shortcodes` disponibili immediatamente nel tema - scoprili [qui](https://blowfish.page/docs/shortcodes/) e lasciati ispirare.

## Configura il tuo ambiente

Iniziamo installando tutti gli strumenti necessari. Questa guida coprirà i passaggi per Mac, quindi queste istruzioni potrebbero non applicarsi al tuo hardware e sistema operativo. Se sei su Windows o Linux, consulta le guide su come [installare Hugo](https://gohugo.io/installation/) e la [CLI di GitHub](https://cli.github.com/) per il tuo OS.

Se stai usando MacOS, installiamo `brew` - un package manager per Mac - poiché questo aiuterà a installare e gestire gli altri strumenti.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Una volta installato `brew`, installiamo Git, Hugo e la CLI di GitHub.
```bash
brew install git
brew install hugo
brew install gh
```

Crea una cartella per il tuo codice e apri una sessione terminale al suo interno (ho scelto _blowfish-tutorial_ nei comandi sotto, sentiti libero di chiamare la cartella come preferisci).
```bash
mkdir blowfish-tutorial
cd blowfish-tutorial
```

Una volta dentro la cartella, il passo successivo è inizializzare il tuo repo `git` locale.
```bash
git init -b main
```

Ora creiamo e sincronizziamo il repo locale con un repo GitHub in modo che il tuo codice sia memorizzato in remoto.
```bash
gh auth login
gh repo create
git push --set-upstream origin main
```

Guarda l'immagine sotto per le opzioni che ho selezionato per questa guida, sentiti libero di cambiare nomi e descrizione per il tuo caso d'uso.

![esempio gh repo create](/posts/202310-blowfish-tutorial/img/ghcreate.webp)


Infine, crea un file **.gitignore** che ti permette di escludere automaticamente certi file dal tuo repo. Inizierei con qualcosa come l'esempio sotto.

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

L'ultimo passo è salvare tutte le modifiche nel repo.
```bash
git add .
git commit -m "initial commit"
git push
```


## Crea il sito e configuralo

Con tutti gli strumenti pronti, creare e configurare il tuo sito sarà facile. Ancora nella cartella che hai creato nella sezione precedente, creiamo un sito Hugo vuoto (_senza tema_).

```bash
hugo new site --force .
```

Una volta completato lo scaffolding, prova il comando sotto per eseguire la tua pagina. Apri un browser su _[https://localhost:1313](https://localhost:1313)_ per vedere il tuo sito…

```bash
hugo server
```

 Ops… Pagina non trovata – giusto?
Questo era previsto, anche se hai creato un sito web, Hugo non fornisce alcuna esperienza predefinita – cioè il tuo sito non ha alcuna pagina da mostrare.

Passo successivo, installiamo Blowfish usando i `git submodules` che renderanno più facile gestire e aggiornare a nuove versioni in futuro.

```bash
git submodule add -b main https://github.com/nunocoracao/blowfish.git themes/blowfish
```

Successivamente, crea la seguente struttura di cartelle nella root della directory del tuo codice - `config/_default/`. Ora dovrai scaricare [questi file](https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2Fnunocoracao%2Fblowfish%2Ftree%2Fmain%2Fconfig%2F%5C_default) e posizionarli nella cartella _\_default_ che hai appena creato. La struttura finale dovrebbe apparire così.

```md
config/_default/
├─ config.toml
├─ languages.en.toml
├─ markup.toml
├─ menus.en.toml
└─ params.toml
`
```


Apri il **config.toml** e decommenta la riga **theme = "blowfish"** e sei pronto. Prova a eseguire di nuovo il sito e controlla il risultato su _[https://localhost:1313](https://localhost:1313)_

```bash
hugo server
```

Dovresti vedere qualcosa come l'immagine sotto. Non molto ancora dato che non abbiamo aggiunto contenuto, ma lo scheletro principale per Blowfish è già in posizione - richiede solo configurazione.

![sito blowfish vuoto](/posts/202310-blowfish-tutorial/img/blowfishempty.webp)

Ora configuriamo il tema.

{{< alert  d>}}
**FYI** Questa guida non coprirà in dettaglio cosa fa ogni parametro disponibile in Blowfish – per tutto ciò che è disponibile e come usarlo, controlla la [documentazione di Blowfish](https://blowfish.page/docs/configuration/#theme-parameters) per ogni opzione in ogni file.
{{< /alert >}}

### menus.en.toml
Questo file definisce la struttura del tuo menu, per il banner superiore e il footer. Per questa guida, creiamo due sezioni di menu: una per _Posts_ e una per _Tags_.
- **Posts** - mostrerà la lista completa delle voci
- **Tags** - generato automaticamente in base ai tag inseriti in ogni articolo

Per ottenere questo, assicurati che le seguenti voci esistano nel file **menus.en.toml**. Una volta fatte le modifiche, dovresti vedere i menu apparire rieseguendo **hugo server**.

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

Questo file configurerà i tuoi dettagli principali come autore del sito web. Modifica la sezione sotto per riflettere i tuoi dettagli.

```bash
[author]
   name = "Il tuo nome qui"
   image = "profile.jpg"
   headline = "Sono solo umano"
   bio = "Qualcosa su di te" # appare nella card dell'autore per ogni articolo
```

Le immagini per il sito web dovrebbero essere posizionate nella cartella _assets_. Per questo passo, aggiungi un'immagine del profilo a quella cartella chiamata _profile.jpg_ o cambia la configurazione sopra con il nome file che hai scelto. Se non hai un'immagine del profilo disponibile, puoi usare quella sotto per il tutorial.

![profilo](/posts/202310-blowfish-tutorial/img/profile.jpg "assets/profile.jpg")

L'ultimo passo è configurare i tuoi link – social media, GitHub, ecc. Il file include tutte le opzioni supportate, ma sono commentate. Sei libero di decommentare tutto e cancellare quelli che preferiresti non usare. Sostituisci i link giusti su quelli che hai deciso di mantenere. Puoi anche cambiare l'ordine.



### params.toml

Questo è il file di configurazione principale per Blowfish. La maggior parte delle opzioni visive o personalizzazioni disponibili possono essere configurate usandolo, e copre diverse aree del tema. Per questo tutorial, ho deciso di usare un layout **background** - [controlla altri layout per la landing page di Blowfish](https://blowfish.page/) - con lo schema colori **Neon** - puoi scegliere uno schema colori diverso se vuoi - controlla [questa lista](https://blowfish.page/docs/getting-started/#colour-schemes) o [crea il tuo](https://blowfish.page/docs/advanced-customisation/#colour-schemes).

Aggiungi un **image.jpg** alla cartella assets che sarà lo sfondo del sito. Puoi anche scaricare gli esempi che sto usando in questo tutorial.

![sfondo](/posts/202310-blowfish-tutorial/img/background.jpg "assets/image.jpg")

Ora passiamo al _params.toml_ e iniziamo a configurare il file. Mi concentrerò solo sui valori che devono essere cambiati, non cancellare il resto del file senza leggere la documentazione. Iniziamo assicurandoci di avere lo schema colori giusto, che l'ottimizzazione delle immagini sia attiva, e configuriamo l'immagine di sfondo predefinita.

```bash
colorScheme = "neon"
disableImageOptimization = false
defaultBackgroundImage = "image.jpg" # usato come default per le immagini di sfondo
```

Successivamente, configuriamo la nostra homepage. Useremo il layout _background_, configurando l'immagine della homepage e gli elementi recenti. Inoltre, useremo la **vista card** per gli elementi nella categoria recenti. Infine, configuriamo l'header come fisso.

```bash
[homepage]
  layout = "background" # opzioni valide: page, profile, hero, card, background, custom
  homepageImage = "image.jpg" # usato in: hero e card
  showRecent = true
  showRecentItems = 6
  showMoreLink = true
  showMoreLinkDest = "/posts"
  cardView = true
  cardViewScreenWidth = false
  layoutBackgroundBlur = true # usato solo quando layout è background

[header]
  layout = "fixed"
```

Ora configuriamo come appariranno le pagine degli articoli e delle liste. Ecco le configurazioni per queste.

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


Se esegui **hugo server** di nuovo, dovresti vedere qualcosa come l'immagine sotto.


![blowfish nessun articolo](/posts/202310-blowfish-tutorial/img/blowfishnoarticles.webp)



## Aggiungere contenuto al tuo sito

Crea una cartella per i tuoi post in `/content/posts`. Questa era anche la directory configurata nel tuo menu per elencare tutti gli articoli. All'interno di quella cartella, creiamo una nuova directory e chiamiamola **myfirstpost**. Al suo interno crea un file **index.md** – il tuo articolo e posiziona un featured.jpg o .webp nella stessa directory come thumbnail per l'articolo. Usa l'esempio sotto per iniziare. Le prime righe nel file sono il Front Matter, che dicono a Hugo quale sarà l'aspetto e l'esperienza dell'articolo – temi diversi supportano parametri diversi per questo. Controlla la [documentazione](https://blowfish.page/docs/front-matter/) per maggiori informazioni.

```md
---
title: "Il mio primo post"
date: 2023-08-14
draft: false
summary: "Questo è il mio primo post sul mio sito"
tags: ["space"]
---

## Un sottotitolo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisl, vulputate eu lacus vitae, maximus molestie libero. Vestibulum laoreet, odio et sollicitudin sollicitudin, quam ligula tempus urna, sed sagittis eros eros ac felis. In tristique tortor vitae lacinia commodo. Mauris venenatis ultrices purus nec fermentum. Nunc sit amet aliquet metus. Morbi nisl felis, gravida ac consequat vitae, blandit eu libero. Curabitur porta est in dui elementum porttitor. Maecenas fermentum, tortor ac feugiat fringilla, orci sem sagittis massa, a congue risus ipsum vel massa. Aliquam sit amet nunc vulputate, facilisis neque in, faucibus nisl.
```

Puoi creare articoli aggiuntivi per vedere come apparirà il tuo sito una volta che ci sarà contenuto. Il tuo sito dovrebbe apparire come le immagini sotto. La pagina principale mostra gli articoli recenti, ogni articolo è collegato automaticamente ad altri tramite la sezione correlati, hai aggregazione dei tag e ricerca full-text.

{{< gallery >}}
  <img src="/posts/202310-blowfish-tutorial/img/blowfishrecent.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/article.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/search.webp" class="grid-w50" />
  <img src="/posts/202310-blowfish-tutorial/img/tag.webp" class="grid-w50" />
{{< /gallery >}}


## Pubblicalo

L'unica cosa che manca è pubblicare il tuo sito. Userò [Firebase](https://firebase.google.com/) per l'hosting - è un'alternativa gratuita e fornisce funzionalità più avanzate se stai creando qualcosa di più complesso. Vai su Firebase e crea un nuovo progetto. Una volta fatto, passiamo alla CLI poiché renderà più facile configurare tutto.

Installiamo la CLI di Firebase - se non sei su Mac controlla le [istruzioni di installazione su Firebase](https://firebase.google.com/docs/cli).
```bash
brew install firebase
```

Ora accedi e inizializza l'hosting Firebase per il progetto.

```bash
firebase login
firebase init
```

Seleziona hosting e procedi.

![firebase init](/posts/202310-blowfish-tutorial/img/firebasecli.webp)

Segui l'immagine sotto per le opzioni che raccomando. Assicurati di impostare i file workflow per le GitHub Actions. Questi garantiranno che il tuo codice venga deployato una volta che c'è una modifica al repo.

![opzioni firebase](/posts/202310-blowfish-tutorial/img/firebaseoptions.webp)

Tuttavia, quei file non funzioneranno immediatamente, poiché Hugo richiede passaggi extra per far funzionare la build. Per favore copia e incolla i blocchi di codice sotto nei rispettivi file nella cartella **.github**, ma mantieni il **projectId** originale nei file generati da Firebase.

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


L'ultimo passo è committare il tuo codice su GitHub e lasciare che i workflow che hai creato si occupino del deployment del tuo sito. Dato che abbiamo configurato le GitHub Actions, questo attiverà un job che configurerà e deployerà il tuo sito automaticamente.

```bash
git add .
git commit -m "add github actions workflows"
git push
```

Nel tab Actions del tuo repo, dovresti vedere qualcosa così.

![gh actions](/posts/202310-blowfish-tutorial/img/githubactions.webp)

Una volta completati tutti i passaggi, la tua console Firebase dovrebbe mostrare qualcosa come l'immagine sotto - inclusi i link per vedere la tua app – ho una versione di questo tutorial in esecuzione su [https://blowfish-tutorial.web.app/](https://blowfish-tutorial.web.app/).

![console firebase](/posts/202310-blowfish-tutorial/img/firebaseconsole.webp)


## Conclusione e prossimi passi

Ora hai la prima versione della tua homepage. Puoi fare modifiche localmente e una volta che committi il tuo codice si rifletteranno automaticamente online. Cosa dovresti fare dopo? Ti lascio alcuni link utili per ispirarti e imparare di più su Blowfish e Hugo.

- https://blowfish.page/docs/
- https://blowfish.page/docs/configuration/
- https://blowfish.page/docs/shortcodes/
- https://blowfish.page/examples/
- https://blowfish.page/users/
- https://gohugo.io/documentation/

![blowfish finale](/posts/202310-blowfish-tutorial/img/01.webp)
