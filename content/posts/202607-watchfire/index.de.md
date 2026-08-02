---
title: "Watchfire: eine Leitstelle für KI-Coding-Agenten"
summary: "Eine Open-Source-Leitstelle, um KI-Coding-Agenten über mehrere Projekte hinweg laufen zu lassen - sie isoliert die Arbeit, verwaltet Tasks und Worktrees und meldet sich, wenn wirklich Aufmerksamkeit nötig ist. Sechs Monate, neun Hauptversionen und ein Meta-Problem, das immer größer wird: Watchfire baut inzwischen Watchfire, und seit v9 kann auch dein Agent es steuern."
description: "Eine Open-Source-Leitstelle, um KI-Coding-Agenten über mehrere Projekte hinweg laufen zu lassen - sie isoliert die Arbeit, verwaltet Tasks und Worktrees und meldet sich, wenn wirklich Aufmerksamkeit nötig ist. Sechs Monate, neun Hauptversionen und ein Meta-Problem, das immer größer wird: Watchfire baut inzwischen Watchfire, und seit v9 kann auch dein Agent es steuern."
categories: ["Technik", "KI", "Makers"]
tags: ["KI", "Claude Code", "vibe coding", "Nebenprojekte", "watchfire"]
date: 2026-08-02
draft: false
---

KI-Coding-Agenten haben vor etwa einem Jahr aufgehört, eine Demo zu sein. Claude Code, Codex, opencode, Gemini CLI, Copilot CLI, Cursor Agent - sie alle schreiben inzwischen wirklich Code. Der Engpass hat sich verschoben. Es geht nicht mehr um "kann der Agent das bauen". Es geht um "kann ich noch überblicken, was fünf Agenten in sechs Repos treiben, ohne den Verstand zu verlieren".

Ich bin jeden Tag gegen diese Wand gelaufen. Also habe ich ein Werkzeug gebaut. Ich habe es Watchfire genannt.

**Watchfire ist eine Open-Source-Leitstelle, um KI-Coding-Agenten über mehrere Projekte hinweg laufen zu lassen: Sie isoliert die Arbeit, verwaltet Tasks und Git-Worktrees und meldet sich, wenn wirklich Aufmerksamkeit nötig ist.** Gedacht ist sie für eine einzelne Entwicklerin oder ein kleines Team, das ohnehin schon mehrere langlaufende Agenten-Tasks am Laufen hat. Sie ersetzt deine IDE nicht, und für eine einmalige Claude-Code-Sitzung ist sie überdimensioniert.

Nach sechs Monaten hat sie eine unbequeme Eigenschaft: **Watchfire baut Watchfire**. Jede Funktion weiter unten wurde von Agenten spezifiziert, ausgeführt und gemergt, die Watchfire selbst orchestriert hat - einschließlich der Version, die *deinem* Agenten dasselbe erlaubt. Diese Schleife ist der Grund für diesen Artikel, und ich zeige die Belege.

Das Nützlichste, was ich in sechs Monaten gelernt habe, hat allerdings nichts mit Codegenerierung zu tun. Es geht um die Projekte, in denen die Tasks dem Agenten sagen, er solle *nicht* entscheiden. Das ist die zweite Hälfte dieses Artikels, und es ist die Hälfte, die ich zuerst lesen würde.

Es ist Open Source, Apache 2.0, und läuft auf macOS, Linux und Windows:

{{< github repo="watchfire-io/watchfire" >}}

{{< figure src="/posts/202607-watchfire/img/tour/dashboard.webp" alt="Das aktuelle Watchfire-Dashboard" caption="Das Watchfire-Dashboard heute - Puls aus arbeitet/untätig/heute-erledigt, ein Aufmerksamkeitsbanner, das still bleibt, solange alles in Ordnung ist, und Flotten-Insights der letzten Woche: 69 Tasks, 202 Commits, +64.979 Nettozeilen. Diese letzte Zahl ist Churn, keine Produktivitätsbehauptung." >}}

## Das Problem, das das Werkzeug erzwungen hat

Ein paar Wochen lang bin ich Anfang des Jahres zwischen fünf Projekten und drei Terminalfenstern hin- und hergesprungen. Jedes Projekt hatte seine eigene Claude-Code-Sitzung. Jede Sitzung hatte ihre eigenen Berechtigungsabfragen, ihre eigenen Rate-Limit-Schluckaufe, ihren eigenen halbfertigen Task, den ich vergaß, sobald ich das Fenster wechselte. Die Agenten haben großartige Arbeit geleistet. Das langsame Teil war ich.

Ein paar Dinge im Besonderen:

- **Prompts babysitten.** Jeder Shell-Befehl brauchte eine Freigabe. Jedes Schreiben einer Datei brauchte eine Freigabe. Ich kam vom Kaffee zurück und fand einen Agenten, der beim zweiten Prompt eines 50-Schritte-Tasks stand.
- **Keine Gesamtsicht.** Was läuft gerade wirklich? Was hängt? Was hat Agent #3 in der letzten Stunde gemacht, während ich auf Agent #1 geschaut habe? Nichts hat es mir gesagt.
- **Stille Fehlschläge.** Agenten starben an einem Merge-Konflikt, einem Rate Limit, einem kaputten YAML, und blieben dann einfach... stehen. Ich merkte es eine Stunde später.
- **Verlorener Kontext.** Projektwechsel hieß: Konventionen neu erklären, CLAUDE.md neu einfügen, das mentale Modell davon neu laden, was wo liegt.

Watchfire begann als Sonntagnachmittags-Flucht vor diesem Schmerz.

## Was Watchfire heute ist

Vier Dinge, die es tatsächlich für dich tut:

- **Du hörst auf, Dinge freizugeben.** Arbeit wird als Task mit Prompt und Akzeptanzkriterien erfasst und dann unbeaufsichtigt ausgeführt. Du kommst zu einem gemergten Branch zurück, nicht zu einem pausierten Prompt.
- **Du siehst die ganze Flotte auf einmal.** Ein Dashboard über alle Projekte: was läuft, was hängt, was heute fertig wurde, was es gekostet hat. Das Aufmerksamkeitsbanner bleibt still, solange nichts dich wirklich braucht.
- **Nichts kollidiert.** Jeder Task läuft in seiner eigenen Git-Worktree hinter einer Betriebssystem-Sandbox, sodass parallele Agenten über Projekte hinweg die Arbeit der anderen nicht beschädigen können und deutlich weniger Möglichkeiten haben, an deine Zugangsdaten zu kommen.
- **Die Arbeit hinterlässt Spuren.** Metriken pro Task - Dauer, Kosten, Commits, Dateien, Zeilen, wie der Merge gelaufen ist - fließen in Insights pro Projekt und für die gesamte Flotte, dazu CSV-/Markdown-Exporte und eine Wochenzusammenfassung.

Aktuell werden **sechs Agenten-Backends** über eine einzige `Backend`-Schnittstelle unterstützt - Claude Code, OpenAI Codex, opencode, Gemini CLI, GitHub Copilot CLI und Cursor Agent - jedes in einem eigenen, isolierten Konfigurationsverzeichnis (`CODEX_HOME`, `OPENCODE_CONFIG_DIR`, `COPILOT_HOME`), damit Zugangsdaten und Prompts nicht zwischen Sitzungen verschwimmen. Den Agenten kannst du pro Task überschreiben.

### Zwei Schichten Wirkungsradius

Das ist der Teil, über den ich Bescheid wissen wollte, wenn jemand anderes das gebaut hätte, denn "geh weg und lass es laufen" ist nur dann vernünftig, wenn du weißt, woran "es" herankommt.

Jeder Task läuft hinter **zwei unabhängigen Isolationsschichten**. Die erste ist eine Git-Worktree: Jeder Task bekommt seinen eigenen `watchfire/<task_number>`-Checkout, sodass zwei Agenten im selben Repo die halbfertigen Änderungen des anderen nicht sehen und nichts auf deinem Branch landet, bevor der Lauf erfolgreich war und gemergt hat. Die zweite ist eine Sandbox auf Betriebssystemebene um den Agentenprozess - **Seatbelt** auf macOS, **Landlock** auf Linux 5.13+, mit einem Mount-Namespace-Fallback über **bubblewrap** auf älteren Kerneln.

Die Sandbox ist eine Dateisystem-Allowlist mit klaren Meinungen. Schreibbar: das Projektverzeichnis, temporäre Dateien und die Caches, die echte Builds brauchen (`~/.npm`, `~/.cargo`, `~/go`, `~/.rustup`). Lesbar: Compiler, Systembibliotheken, Werkzeugkonfiguration. Rundheraus blockiert: `~/.ssh`, `~/.aws`, `~/.gnupg`, `.netrc`, `.npmrc`, `.env`-Dateien, `.git/hooks` und auf macOS deine persönlichen Ordner. Ein Agent, der an diesen geschützten Orten nach Deploy-Keys sucht, findet dort nichts.

Zwei ehrliche Einschränkungen, die beide im [Artikel über Sandboxing](https://watchfire.io/blog/2026-05-19-how-watchfire-sandboxes-every-agent) klar benannt und nicht versteckt werden: Die Sandbox ist auf das Dateisystem ausgerichtet und blockiert derzeit **kein** ausgehendes HTTPS, und **Windows läuft aktuell ohne Sandbox** - die Worktree-Isolation greift, die Betriebssystemschicht nicht. Beides steht auf der Liste.

Diese Kombination ist es, die alles andere in diesem Artikel vertretbar macht. Berechtigungsabfragen zu umgehen ist nur dann vernünftig, wenn der Wirkungsradius eine wegwerfbare Worktree und ein Dateisystem ist, aus dem der Agent nicht herausspazieren kann.

### Unter der Haube

Ein **Go-Daemon** (`watchfired`) übernimmt Orchestrierung, Sandboxing, PTY-Emulation, Worktrees und einen gRPC-Server. Drei Clients sprechen mit ihm: eine **Bubble-Tea-TUI** für Terminal- und SSH-Arbeit, eine **Electron-+-React-GUI**, die pro Projekt ein Betriebssystemfenster öffnet, und eine schlanke **CLI**. Der Daemon veröffentlicht seinen Port über `~/.watchfire/daemon.yaml`, und ein `flock` auf der Lockdatei garantiert genau einen Daemon pro Benutzer - Schluss mit "zwei Fenster streiten sich um dieselbe Worktree". Die Agentenausgabe läuft durch ein PTY, das daemonseitig von einem echten VT-Emulator (`hinshun/vt10x`) geparst wird, sodass ANSI überall sauber dargestellt wird.

Der Zustand liegt überall als YAML auf der Platte - eine Registry, globale Einstellungen, Integrationen sowie pro Projekt eine `project.yaml` plus `.watchfire/tasks/<n>.yaml`-Dateien - mit atomaren Schreibvorgängen (tmp + `fsync` + `rename`) seit v6.0, was ein Datenverlust-Race auf die harte Tour geschlossen hat. Alles ist greppbar, diffbar und übersteht git.

Und seit v9 gibt es einen vierten Client, der gar keine Oberfläche ist: `watchfire mcp serve` stellt den gesamten Orchestrator als MCP-Server bereit. Der bekommt seinen eigenen Abschnitt.

## Ein kurzer Rundgang

Was mir in jenen frühen Nur-Terminal-Tagen am meisten fehlte, war ein *Dashboard*. Keine Projektliste - ein Status. Wo stehen wir? Was klemmt? Was haben die Agenten heute gemacht? Genau das ist der Screenshot ganz oben in diesem Artikel: eine Pulslinie für arbeitet / braucht Aufmerksamkeit / untätig / heute erledigt, ein Alles-in-Ordnung-Banner, Flotten-Insights mit 7T/30T/90T/Alle-Fenstern, Filter und eine Karte pro Projekt mit eigenen Task-Zahlen und Code-Churn.

Klick auf ein Projekt und es öffnet sich in einem eigenen Fenster - das "Inferno"-Redesign aus v8. Das Layout ist chatzentriert: Das Agentengespräch ist die breite Fläche, und Tasks / Definition / Insights / Secrets / Trash / Settings liegen in einer Seitenleiste mit Reitern rechts:

{{< figure src="/posts/202607-watchfire/img/tour/project-window.webp" alt="Ein Watchfire-Projektfenster mit dem Agenten-Stream links und der Task-Warteschlange rechts" caption="Ein Projektfenster: zuerst der Chat, alles andere ist Referenz. Das hier ist Watchfires eigenes Repo, 129 Tasks tief, untätig in einer frischen Claude-Code-Sitzung." >}}

Jedes Projekt hat eine **Definition** in Markdown, die in den Prompt-Kontext eingefaltet wird. Sie ist das dauerhafte Briefing des Projekts - was es ist, welche Konventionen zählen, welche Dateien zählen - und sie ist der Grund, warum ein Mehrprojekt-Workflow überhaupt funktioniert, weil Agenten mit Kontext statt mit leerem Kopf starten:

{{< figure src="/posts/202607-watchfire/img/tour/definition.webp" alt="Der Definition-Reiter des Projekts" caption="Der Definition-Reiter. Direkt dort bearbeiten oder in $EDITOR springen." >}}

Die **Insights** pro Projekt beantworten "was habe ich diese Woche eigentlich gemacht" - Tasks pro Tag, Aufteilung nach Agent, Dauerverteilung, Kosten, und seit v8 auch die Code-Metriken:

{{< figure src="/posts/202607-watchfire/img/tour/insights.webp" alt="Insights pro Projekt" caption="Insights pro Projekt: KPIs, Tasks pro Tag, Ringdiagramm nach Agent, Dauerverteilung. Eine flottenweite Zusammenfassung gibt es außerdem im Haupt-Dashboard." >}}

**Wildfire** ist der autonome Modus: Watchfire führt fertige Tasks aus, verfeinert Entwürfe und erzeugt in einer Schleife neue, bis die Projektdefinition sagt, dass es fertig ist. In v8 hat er eine vollwertige GUI bekommen - einen Startknopf mit Bestätigungsdialog und eine Live-Phasenanzeige während des Laufs. Der Artikel [Inside Wildfire mode](https://watchfire.io/blog/2026-05-18-inside-wildfire-mode) hat die ganze Mechanik:

{{< figure src="/posts/202607-watchfire/img/tour/wildfire-confirm.webp" alt="Der Bestätigungsdialog von Start Wildfire" caption="Der Dialog spricht aus, was man sonst verschweigt: eine autonome Schleife, die unbeaufsichtigt läuft und laufend Tokens verbraucht und dabei den Agenten ersetzt, der gerade am Projekt sitzt. Zwei Sätze, die mich mehr als einmal vor mir selbst gerettet haben." >}}

Die globalen **Settings** haben durchsuchbare Unterseiten bekommen, die die flottenweiten Vorgaben tragen - welchen Agenten neue Projekte bekommen und ob sie automatisch mergen, Branches löschen und fertige Tasks starten, alles pro Projekt überschreibbar. Der geteilte **Open**-Knopf erkennt, welche Editor-CLIs tatsächlich installiert sind, von VS Code und Cursor über Zed und JetBrains bis Xcode, und funktioniert auch dann, wenn der PATH der GUI abgeräumt wurde.

Für die Stunden, in denen Watchfire nicht das Ding auf dem Bildschirm sein sollte, hat v8 den **Mini Monitor** ergänzt - einen rahmenlosen Streifen, der immer oben bleibt - sowie ein Menü im Systembereich mit demselben Status plus dem Port des Daemons:

{{< figure src="/posts/202607-watchfire/img/tour/mini-monitor.webp" alt="Das Fenster des Mini Monitors" caption="Der Mini Monitor: die ganze Flotte in einem Streifen von der Größe eines Haftzettels. Die orange Linie ist das einzige Projekt, das gerade tatsächlich etwas tut." >}}

Denselben Ablauf gibt es in einer **TUI**, weil die Hälfte meiner Arbeit per SSH auf einer Linux-Maschine passiert, wo sich Tasks genauso gut bearbeiten lassen wie in der GUI. Eine schlanke **CLI** deckt alles ab, was der Daemon kann:

{{< figure src="/posts/202607-watchfire/img/tour/tui.webp" alt="Watchfire-TUI" caption="Die TUI spiegelt das Zwei-Spalten-Layout der GUI: Tasks links, Agenten-Stream rechts, mit Kürzeln für chat / generate / plan / run all / wildfire / stop." >}}

{{< figure src="/posts/202607-watchfire/img/tour/cli-help.webp" alt="watchfire --help" caption="Die CLI-Oberfläche: chat, configure, daemon, define, generate, init, integrations, metrics, plan, run, task, update, wildfire - und seit v9 mcp." >}}

## Der Beweis: 30 Tage Vibe Coding

Im April habe ich mich auf [30 Tage, 30 mit KI gebaute Projekte](/posts/202604-vibe30/announcement/) festgelegt. Eines pro Tag, jeden Tag. Claude Code auf einem Max-20x-Plan, Watchfire als Orchestrierung, Context7 MCP, das die Agenten mit frischer Dokumentation versorgt.

Der Plan war, Nebenprojekte zu veröffentlichen. Womit ich nicht gerechnet hatte: **Watchfire wurde zu dem Projekt, das jeden einzelnen Tag auf Herz und Nieren geprüft wurde**, und die Issue-Liste, die ich mir selbst aufgemacht hatte, wurde zur aggressivsten Produkt-Roadmap, die ich je gefahren habe.

Ein paar repräsentative Momente aus der [Serie](/series/30-days-of-vibe-coding/):

- **Tag 1 (Platformer)** - *"Ich saß nicht da und gab jede Dateiänderung frei. Watchfire hat die Tasks in die Warteschlange gestellt und abgearbeitet. Ich kam zurück und hatte ein funktionierendes Spiel."* Die Weggeh-Schleife funktionierte am ersten Tag. Und sie legte sofort alles offen, was noch nicht bereit war: verstümmelte Terminalausgabe, Neustartschleifen des Agenten bei Rate Limits, die Sandbox, die auf macOS `~/Desktop` blockierte.
- **Tag 12 (Wordle)** - *"Jeder Task legte eine bestimmte Kategorie Feinschliff obendrauf, und keiner hat kaputt gemacht, was vorher da war."* Das inkrementelle Task-Modell war der einzige Grund, warum das funktionierte. Prompts am Stück gingen ständig schief; viele kleine, eng gefasste Tasks nicht.
- **Tage 27-28 (Terminal, ideA)** - Plattformübergreifende native CI/CD-Hölle. *"Watchfire hat hier sehr geholfen, indem es in endlosen Schleifen debuggt, getestet, ausgeführt, gescheitert und wiederholt hat, bis die Pipeline endlich lief. Ohne diese Hartnäckigkeit hätte ich plattformübergreifende Releases aufgegeben."*
- **Tag 30 (miniOs)** - *"An Tag 1 habe ich aus einem Satz ein Jump-'n'-Run gebaut. An Tag 30 habe ich ein Betriebssystem gebaut, das dieses Jump-'n'-Run enthält, und alles, was ich dazwischen gemacht habe."*

Über die 30 Tage hinweg: **~450 über Watchfire ausgeführte Tasks und ~1.200 Commits**, mit rund 326.000 geänderten Zeilen - das ist Watchfires eigene Zählung aus Einfügungen plus Löschungen, ein Maß für Churn und keine Produktivitätsbehauptung. Allein während der Challenge sind fünf Watchfire-Hauptversionen erschienen (Ember → Spark → Blaze → Beacon → Flare).

Irgendwo dazwischen hat das Werkzeug eine Linie überschritten, die ich nicht eingeplant hatte.

## Der Meta-Teil

Es gibt einen Moment - irgendwo in der zweiten Woche - in dem sich die Schleife schließt. Du benutzt Watchfire, um ein Projekt zu bauen. Das Projekt bringt einen Bug in Watchfire zum Vorschein. Du erfasst den Bug als Watchfire-Task. Watchfire lässt einen Agenten laufen, um Watchfire zu reparieren. Der Fix geht raus. Dann gehst du zum ursprünglichen Projekt zurück, das immer noch in einem anderen Tab wartet.

Beim ersten Mal ist es komisch. Beim zehnten Mal ist es einfach der Arbeitsablauf. Beim Rückblick ist es der ganze Punkt:

> *Oder genauer gesagt: Watchfire baut jetzt Watchfire. Das Werkzeug orchestriert seine eigene Entwicklung.*

Das wurde im Mai geschrieben. Im Juli hörte es auf, eine Zeile in einem Blogartikel zu sein, und wurde zum Release-Prozess. Jeder Task in der Warteschlange von v9 - das Gerüst des MCP-Servers, die Task-Fabrik-Werkzeuge, die Ausführungswerkzeuge, die Inspektionswerkzeuge - wurde über Watchfire verfasst, ausgeführt und gemergt:

{{< figure src="/posts/202607-watchfire/img/meta/building-v9.webp" alt="Watchfires eigenes Projektfenster mit der v9-Task-Warteschlange in Entwicklung" caption="v8 baut v9: neun Tasks in Entwicklung, jeder davon ein Stück des MCP-Servers, laufend in Watchfires eigenem Repo innerhalb von Watchfire." >}}

Und als die Warteschlange leer war, hat der Agent das Release selbst vorbereitet:

{{< figure src="/posts/202607-watchfire/img/meta/v9-release-chat.webp" alt="Der Watchfire-Agent meldet, dass v9.0.0 als Draft-Release vorbereitet ist" caption="Das Finale von v9.0.0, wörtlich: Version hochgezogen, CHANGELOG geschrieben, 22 Commits gepusht, Release-Workflow grün, 20 Artefakte als Entwurf vorbereitet - und ein voller Halt an genau dem Schritt, der sich nicht rückgängig machen lässt, wartend auf ein Ja. Es hat die Grenze richtig gesetzt, und das war der Teil, auf den es mir wirklich ankam." >}}

Auch die Website ist in der Schleife. [watchfire.io](https://watchfire.io) - Doku, Tour, Changelog, Blog - ist ein Watchfire-Projekt wie jedes andere, Task für Task von dem gebaut, was es dokumentiert. Es gibt einen ganzen Artikel darüber, geschrieben von dem Prozess, den er beschreibt: [Watchfire eats its own dogfood](https://watchfire.io/blog/2026-05-19-eating-our-own-dogfood).

{{< figure src="/posts/202607-watchfire/img/meta/website-v91.webp" alt="Ein Watchfire-Agent aktualisiert watchfire.io auf v9.1" caption="Vier Wörter Prompt - \"update watchfire website to 9.1\" - und der Agent findet jede Stelle, an der die Version behauptet wird (Hero-Badge, JSON-LD, Changelog, RSS), schreibt die Release Notes, prüft den Build und hört vor dem Commit auf. Man beachte die Ermessensentscheidung mittendrin: Ein Badge blieb auf 9.0 stehen, weil das weiterhin das Hauptrelease ist und 9.1 ein Bugfix." >}}

Der Grund, warum nichts davon eine Spielerei ist, ist banal. Jede kleine Wunde, die ich gespürt habe, wurde von genau der Maschinerie erfasst und behoben, die sie verursacht hat. Jedes "ich wünschte, es würde..." wurde in Sekunden zum Task-Entwurf, und der Abstand zwischen dem Bemerken einer Lücke und dem Ausliefern des Fixes schrumpfte auf Stunden. Das beweist nicht, dass Watchfire die richtige Oberfläche für *deine* Arbeit hat - es beweist, dass es die richtige Oberfläche für den einen Arbeitsablauf hat, den ich sechs Monate lang jeden Tag in voller Detailtiefe beobachten konnte. Das ist zufällig eine gute Art, ein Werkzeug zu bauen. Und v9 ist genau diese Beobachtung als Produkt: Wenn Watchfire schon Watchfire bauen konnte, fehlte nur noch, auch *deinen* Agenten ans Steuer zu lassen.

## Einen Chat an die Fabrik anschließen

Womit ich beim Teil von v9 wäre, der mir am meisten Spaß gemacht hat. Einen Agenten an die Fabrik anzuschließen ist keine Schnitzeljagd durch Konfigurationsdateien - es ist eine Einstellungsseite. Watchfire erkennt, welche Agenten-CLIs auf deiner Maschine liegen, und schreibt den MCP-Eintrag mit einem Klick in die jeweilige Konfiguration:

{{< figure src="/posts/202607-watchfire/img/meta/mcp-settings.webp" alt="Die Seite Settings → MCP mit Ein-Klick-Installationen pro Agent" caption="Settings → MCP: eine Karte pro Agenten-CLI. Claude Code ist ein Klick - Watchfire schreibt den Eintrag in ~/.claude.json. Codex und Copilot wurden automatisch erkannt und waren ein Install entfernt. Für alles andere gibt es ein kopierbares Snippet. Nur stdio, lokal auf dem Rechner, nichts im Netz." >}}

Ich habe den Claude-Code-Knopf gedrückt, eine Sitzung neu gestartet, und ein schlichtes Terminal wurde zum Watchfire-Client. Frag es, was läuft, und es listet jedes registrierte Projekt auf, sagt dir, welches eine Wildfire-Schleife in der Ausführungsphase hat, und holt die komplette Task-Warteschlange dieses Projekts - ohne dass irgendwo ein Watchfire-Fenster offen ist.

Sobald man das hat, hören etliche Abläufe auf, Science-Fiction zu sein:

- **Draußen planen, drinnen fertigen.** Du machst Brainstorming mit einem Agenten im Chat - in irgendeinem Chat - und statt dir Code hinzuwerfen, erfasst er eng gefasste Tasks mit Akzeptanzkriterien und lässt Watchfire sie in der Sandbox, in Worktrees, mit Merges und Metriken ausführen. Das Gespräch bleibt ein Gespräch; der Code passiert in der Fabrik.
- **Projektübergreifend von einem Platz aus.** Eine Sitzung, die im Repo dieses Blogs sitzt, kann einen Bug erfassen, den sie gerade im Repo von Watchfire gefunden hat, oder eine Doku-Aktualisierung im Website-Projekt anstoßen, ohne Verzeichnis oder Fenster zu wechseln.
- **Agenten, die Agenten prüfen.** Der äußere Agent liest nach einem Lauf `get_task_diff` und entscheidet, ob er einen Folge-Task erfasst - eine Review-Schleife, in der der Prüfer die Worktree nie anfasst.
- **Bugreports, die sich selbst schreiben.** Das Erste, wonach ich eine verbundene Sitzung gefragt habe, waren die Insights eines Projekts, und sie gab mir eine Wand aus Nullen zurück: Bei historischen Tasks war nie ein `completed_at` gesetzt worden, weshalb jede darauf aufbauende Metrik leer blieb. Daraus wurde ein Task, und aus dem Task wurde zwei Tage später v9.1. Der äußere Agent hat den Bug gefunden, indem er die Fabrik *benutzt* hat.

Die Fabrikmetapher hört an dieser Stelle auf, eine Metapher zu sein. Watchfire übernimmt die Fertigung - Isolation, Ausführung, Merge, Buchführung - und alles, was MCP spricht, kann sich an den Bestelltresen stellen.

## Der Belastungstest: Neon Fable

Um herauszufinden, ob v9 wirklich trägt, habe ich sie auf etwas bewusst Unvernünftiges gerichtet: `rpg-fable-test`, ein Cyberpunk-Rollenspiel im Browser namens **Neon Fable**, fast vollständig von Wildfire gebaut, während ich hauptsächlich die Definition des Projekts geschrieben und der Warteschlange beim Abarbeiten zugesehen habe.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-definition.webp" alt="Wildfire läuft mit der geöffneten Projektdefinition von Neon Fable" caption="Der ganze Aufbau: eine Definition, die das Spiel beschreibt (verzweigte Geschichte in drei Akten, isometrischer Renderer, rundenbasierter Kampf, Cyberware-Inventar) und eine Wildfire-Schleife, die daraus Tasks macht. v1 - die vollständige spielbare Schleife - kam als Tasks #1-18." >}}

Die v1-Warteschlange brachte das Spiel von `npm create vite` zu einer fertigen Schleife: Charaktererstellung, verzweigte Geschichte in drei Akten, rundenbasierter Kampf mit festem Seed, Inventar und Cyber-Erweiterungen, mehrere Enden, ein Enden-Kodex, New Game+. Die gesamte Pixelgrafik *im Code* verfasst, als palettenindizierte String-Raster, weil ein Agent genau daran iterieren kann. Die v2-Warteschlange - eine hochauflösende Grafiküberarbeitung und ein modulares System für das Aussehen der Figuren - hat Wildfire selbst erzeugt. Das Projekt steht jetzt bei **119 Tasks, 103 davon erledigt und gemergt**, mit einer Testsuite, die rund um Task #40 bei 902 Tests lag und seitdem nur gewachsen ist.

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-wildfire.webp" alt="Wildfire führt einen Grafik-Task von Neon Fable aus" caption="Wildfire in der Ausführungsphase an \"Day-phase neon states - dusk, night, late-night\", von Hand geschriebene emissive Farbverläufe in TypeScript. Der Vite-Entwicklungsserver in der angedockten Shell lädt das Spiel neu, sobald jede Änderung landet." >}}

Und das kommt am anderen Ende heraus. Der Charaktereditor ist das gesamte Aussehen-System der v2, sichtbar gemacht - geschichtete Sprite-Komposition, Kataloge pro Slot, Live-Vorschau, sperrbarer Zufall:

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-appearance.webp" alt="Der Aussehen-Schritt der Charaktererstellung in Neon Fable" caption="Die Tasks #33-53 in einem Bild: geschichtete Sprite-Komposition, Kataloge für Haare/Augen/Brauen/Mund/Gesichtsdetails, Farbkanäle, eine rotierende Live-Vorschau und ein \"surprise me\", das die Sperren pro Slot respektiert. Jedes Sprite ist ein String-Raster in einer TypeScript-Datei." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-plaza.webp" alt="Isometrisches Gameplay auf der Cinder Row Plaza" caption="Cinder Row Plaza: isometrische 64×32-Kacheln, animierte Neonschilder, ein Dutzend unterschiedlicher NPCs über dasselbe Schichtensystem, eine Minikarte und verzweigte Dialoge - jedes Pixel als Code verfasst von einem Agenten, der nicht sehen kann." >}}

{{< figure src="/posts/202607-watchfire/img/projects/neon-fable-combat.webp" alt="Rundenbasierter Kampf in Neon Fable" caption="Kampf: Initiativreihenfolge oben, Bewegungs- und Aktionsbudgets, ein mitlaufendes Protokoll. Der Zufallsgenerator mit festem Seed darunter war Task #6, noch aus der v1-Warteschlange." >}}

Neon Fable ist kein Produkt und wird auch keines. Es ist ein Demoprojekt, gebaut um zu sehen, was passiert, wenn man die Fabrik auf etwas Unbequemes richtet. Du kannst es [im Browser spielen](https://nunocoracao.github.io/neon-fable/) und [den Code lesen](https://github.com/nunocoracao/neon-fable). Als Belastungstest hat es die Frage bereits beantwortet: Es behebt nicht nur seine eigenen Bugs und schreibt seine eigene Doku - vor etwas so Heikles wie *Pixelgrafik und Spielgefühl* gestellt, liefert es weiter.

## Die andere Hälfte: Projekte, die vor allem Denken sind

Neon Fable ist der spektakuläre Fall, und es ist auch der irreführende. Es lässt Watchfire wie eine Maschine aussehen, die Code erzeugt, den du nicht geschrieben hast - das ist die Hälfte des Ablaufs, die sich gut fotografieren lässt, und die Hälfte, der ich am wenigsten traue.

Die beiden neuesten Projekte auf meinem Dashboard sind das Gegenteil. **Anima** ist ein Produkt für persönliche Agenten - ein dauerhafter Agent pro Person - und **FitQuest** ist ein Fitness-Tracker, der Messwerte von allen deinen Geräten spielerisch aufbereitet. Beide haben echte Ambitionen. Keines hat bisher Produktcode. Was sie haben, ist ein `docs/`-Verzeichnis, ein Entscheidungsprotokoll und eine Projekt-Definition, deren erste Regel lautet: *die Dokumentation ist die Quelle der Wahrheit; der Code folgt der Dokumentation, nie umgekehrt*.

Deshalb sehen die Tasks überhaupt nicht aus wie die von Neon Fable:

- *"Den Keil schärfen - erster Nutzer, zentraler Anwendungsfall, Interaktionsmodell (**empfehlen, nicht festlegen**)"*
- *"Evidenzpapier zur Entscheidung KMP vs. Flutter - **nur Recherche, nicht entscheiden**"*
- *"Kontrast- und Farbsehprüfung der HUD-Palette"*
- *"MDR-konforme Textregeln in die Markenstimme überführen und jede nutzersichtbare Zeichenkette im PoC prüfen"*

Lies diese Klammern noch einmal. Das sind Anweisungen, *nicht* autonom zu sein - trag die Belege zusammen, benenne die Abwägungen, lass die Entscheidung bei mir. Animas Definition trägt dieselbe Haltung als stehende Regel: Was als gesperrt markiert ist, ist entschieden, und wenn ein Task eine Lücke oder einen Widerspruch offenlegt, wird dem Agenten gesagt, er solle **anhalten, es sichtbar machen, das Dokument korrigieren und dann weitermachen**, statt sich eine Richtung auszudenken. Die von FitQuest sagt, der Task solle glatt fehlschlagen - `success: false` mit einer Begründung - statt vom dokumentierten Pfad abzuweichen.

Das verwandelt dieselbe Maschinerie in etwas, das eher einem Forschungsassistenten mit Aktenlage gleicht: Arbeit wird abgesteckt, isoliert, ausgeführt und gemergt wie zuvor, aber was im Diff landet, ist ein Entscheidungspapier oder eine Doku-Aktualisierung statt einer Funktion. Die Definition ist an dieser Stelle kein Kontextstopfen mehr; sie ist Governance.

Beide Projekte haben durchaus Artefakte, weil man sich die Sache irgendwann ansehen muss:

{{< figure src="/posts/202607-watchfire/img/projects/anima-ori.webp" alt="Der Onboarding-Bildschirm von Anima" caption="Animas Schlüpfen: ein treibendes Lichtvolumen, das sich zu einem Wesen verdichtet und dann sechs Fragen stellt - jede formt entweder das Wesen oder wird zu seiner ersten Erinnerung. Gebaut als eigenständiger WebGL-Prototyp unter docs/explorations/, weil das Designdokument sagt, dass Prototypen Dinge belegen, bevor Code existiert." >}}

{{< figure src="/posts/202607-watchfire/img/projects/fitquest-today.webp" alt="Der Heute-Bildschirm von FitQuest auf iOS" caption="FitQuests wegwerfbarer SwiftUI-Machbarkeitsnachweis - echte HealthKit-Daten, Quests mit Stufen und Serien, eine XP-Leiste. Ausdrücklich nicht das Produkt: Er existiert, um zu prüfen, ob die Quest-Mechanik den Kontakt mit einem echten Gerät übersteht, und die Erkenntnisse fließen zurück in die Doku, bevor der Code weggeworfen wird." >}}

Einhundertdrei gemergte Tasks beim Spiel; achtunddreißig sorgfältig eingezäunte bei den anderen beiden. Derselbe Daemon, dieselben Worktrees, dieselbe Sandbox. Der Unterschied liegt ausschließlich darin, wie die Definition geschrieben ist - und das ist nach sechs Monaten die eigentliche Lehre, die ich jedem mitgeben würde, der anfängt: **das Werkzeug ist nur so gut wie das Briefing, das du ihm gibst, und zu wissen, wann man ihm sagt, dass es nicht entscheiden soll, macht den größten Teil des Könnens aus.**

## Wie es hierher kam

Die erste Version hieß nicht einmal Watchfire. Sie hieß **FORGE** - ein einzelnes Electron-Fenster mit Projektauswahl, Task-Liste und einem eingebetteten Terminal, in dem Claude Code lief. Grob: dünnes Task-Modell, verstümmelte Ausgabe, Projektwechsel hieß Anwendung neu starten. Aber der Kerngedanke war schon da - Arbeit einreihen, beim Ausführen zusehen, das Terminal nicht direkt anfassen.

{{< figure src="/posts/202607-watchfire/img/history/forge-jan.webp" alt="FORGE am 12. Januar 2026" caption="12. Januar: FORGE. Ein Projekt zur Zeit, Reiter-Layout, kein Dashboard, keine Metriken, kein Multi-Agent. Der Pixelgrafik-Avatar von Claude Code in der Willkommensnachricht hat sich länger gehalten, als er sollte." >}}

Anfang Februar habe ich das Repo von Grund auf in Go neu aufgesetzt - gRPC statt HTTP, YAML statt SQLite, drei Binaries statt eines Electron-Monolithen. Das ist die Codebasis, die bis heute läuft. Dann kam der April, und die Versionierung bekam ein Thema: Jede Hauptversion trägt einen Feuernamen, und die Taktung sagt dir genau, was in dem Monat wehgetan hat.

- **v1.0 "Ember"** *(Anfang April)* - erstes echtes Release. Auffinden von Transkripten aus `~/.claude/projects/` von Claude Code, eine Absicherung gegen Neustartschleifen nach drei Abstürzen, der Seatbelt-Fix für Projekte in `~/Desktop`.
- **v2.0 "Spark"** *(Mitte April)* - die steckbare Backend-Schnittstelle. Codex, opencode und Gemini CLI erscheinen am selben Tag, mit Agentenwahl pro Task und Konfigurationsisolierung pro Sitzung.
- **v3.0 "Blaze"** *(Ende April)* - Copilot CLI als 5. Backend, dazu zwei Wochen gestillte Blutung: ein dateisystemübergreifender `EXDEV`-Bug, der Linux-Updates fraß, Rotation der Task-Liste, Update-Schleifen der GUI.
- **v4.0 "Beacon"** *(Tag 28)* - der Wendepunkt vom Task-Runner zum *Betriebs*-Werkzeug. Dashboard neu gebaut, Metriken pro Task, Insights, Exporte, Wochenzusammenfassung, Systembenachrichtigungen, Slack-/Discord-/Webhook-Relais mit Signaturprüfung, automatischer PR auf GitHub.
- **v5.0 "Flare"** *(Tag 30)* - OAuth-Bots für Slack und Discord, ein eingehender HTTP-Server mit Rate Limiting und Idempotenz, Merge-Parität für GitLab/Bitbucket und ein Fix für `run-all`, das bei einem fehlgeschlagenen Merge stillschweigend anhielt. Ein stilles Dashboard ist eben das zweitschlechteste Dashboard.
- **v6.0 "Phoenix"** *(Anfang Mai)* - atomare YAML-Schreibvorgänge, der Singleton-Daemon per `flock`, Cursor Agent als 6. Backend und eine TUI mit echtem Scrollback.
- **v7.0 → v7.4 "Forge"** *(Mai-Juni)* - ja, der ursprüngliche Name, als Codename recycelt, lange nachdem das, wozu er gehörte, weggeschrieben worden war. Task-Umsortierung überall, ein Chat-Fenster, das nicht mehr nach oben springt, ein fokussierter Chatmodus und meine liebste Kriegsgeschichte: ein Daemon-Log, das endlich in der Größe begrenzt wurde, nachdem das eines Nutzers auf **300 GB** angewachsen war, ohne dass es jemand bemerkt hatte ([Post-mortem](https://watchfire.io/blog/2026-05-29-forge-7-3-the-300gb-log)).
- **v8.0 "Inferno"** *(Ende Juni)* - ein Betriebssystemfenster pro Projekt, ein Startfenster als Leitstand, die Wildfire-GUI, der Mini Monitor und Code-Output-Metriken, die ausgelieferten Code messen statt geschlossener Tasks. ([Release-Artikel](https://watchfire.io/blog/2026-06-29-inferno-8-0-parallel-workspaces))
- **v9.0 "Firestorm"** *(26. Juli)* - die Rollenumkehr: eine MCP-Fabrik mit 18 Werkzeugen, nur stdio, mit einem `--read-only`-Modus und Leitplanken überall. ([Release-Artikel](https://watchfire.io/blog/2026-07-26-firestorm-9-0-watchfire-as-a-factory))
- **v9.1** *(29. Juli)* - der `completed_at`-Fix von vor ein paar Abschnitten, mit dem ~580 historische Tasks nachgetragen wurden, damit Insights, Exporte und die Zusammenfassung alle aufleuchten.

Noch ein Screenshot, und dann schau zurück auf den, der diesen Artikel eröffnet:

{{< figure src="/posts/202607-watchfire/img/history/watchfire-april.webp" alt="Watchfire im April 2026" caption="27. April: die GUI der Go-Neufassung - wiedererkennbar, aber ohne Insights, ohne Flotten-KPIs, ohne Live-Vorschauen. Das ist die Version, die den größten Teil der 30-Tage-Challenge getragen hat." >}}

Vierzehn Wochen zwischen den beiden. Dasselbe Werkzeug.

## Was als Nächstes kommt

- Mehr Agenten-Backends, sobald sie auftauchen. Die `Backend`-Schnittstelle ist der einzige Integrationspunkt - alles, was Shell spricht und ein Transkript erzeugt, kann dazukommen.
- Eine breitere MCP-Oberfläche: reichhaltigere Inspektionswerkzeuge und langlaufende äußere Agenten, die ganze Flotten statt einzelner Projekte beaufsichtigen.
- Bessere Diff- und Review-Werkzeuge. Der eingebettete Betrachter ist da; was fehlt, ist eine richtige PR-artige Oberfläche zum "erst prüfen, dann mergen" für Tasks, die ein menschliches Auge brauchen.
- Team-Abläufe. Das dateibasierte Task-Modell übersteht git bereits - gemeinsame Task-Listen und Review-Oberflächen sind die natürliche Erweiterung.

## Probier es aus

{{< github repo="watchfire-io/watchfire" >}}

Auf macOS ist die Installation eine Zeile:

```bash
brew tap watchfire-io/tap && brew install --cask watchfire-io/tap/watchfire
```

Alles Weitere: [neueste Version herunterladen](https://github.com/watchfire-io/watchfire/releases/latest) · [Doku](https://watchfire.io/docs) · [Changelog](https://watchfire.io/changelog) · [Blog](https://watchfire.io/blog)

Wenn du mit mehr als einem KI-Agenten jonglierst und dich schon beim Hin- und Herspringen zwischen Terminals ertappt hast, ist es vielleicht das fehlende Stück. Für mich war es das.

*Sechs Monate, neun Releases und ein Werkzeug, das am Ende sich selbst gebaut hat. Die Variante von "vibe coding", bei der man am Ende des Tages trotzdem etwas abliefern muss.*
