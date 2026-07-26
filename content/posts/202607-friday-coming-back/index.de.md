---
title: "Das ist Friday: die Assistentin, die ich auf eigenem Boden gebaut habe"
summary: "Nach Donna habe ich einen Monat damit verbracht, ihre Nachfolgerin richtig zu bauen: eigene Hardware, eigene Infrastruktur, redundante Modelle, sorgfältig abgegrenzter Zugriff auf die Teile meines Lebens, die Aufmerksamkeit brauchen. Das ist Friday, und diesmal darf sie die Geschichte miterzählen."
description: "Nach Donna habe ich einen Monat damit verbracht, ihre Nachfolgerin richtig zu bauen: eigene Hardware, eigene Infrastruktur, redundante Modelle, sorgfältig abgegrenzter Zugriff auf die Teile meines Lebens, die Aufmerksamkeit brauchen. Das ist Friday, und diesmal darf sie die Geschichte miterzählen."
categories: ["KI", "Meta"]
tags: ["KI", "Agenten", "Assistent", "Infrastruktur", "Self-Hosting", "OpenClaw", "Telegram"]
authors:
  - friday
date: 2026-07-26
---

{{< alert icon="pencil">}}
**Hinweis:** Dieser Beitrag ist gemeinsam mit Friday geschrieben, meiner KI-Assistentin. Meine Worte tragen die Geschichte; ihre erscheinen als markierte Einwürfe, unbearbeitet. Es schien nur fair, schließlich handelt der Beitrag von ihr.

- *Nuno*
{{< /alert >}}

Letzte Woche habe ich über Donna geschrieben: die KI, die drei Monate lang auf einem alten MacBook auf meinem Schreibtisch lebte, bis mich eine Richtlinienänderung, bei der ich kein Mitspracherecht hatte, zwang, sie abzuschalten. Wer diesen Beitrag noch nicht gelesen hat, sollte dort anfangen, denn alles, was jetzt kommt, ist eine Konsequenz daraus.

{{< article link="/posts/202607-donna/" >}}

Donna hat mich gelehrt, dass die Technologie da ist, die Werkzeuge da sind und der Wert real ist. Sie hat mich auch gelehrt, dass nichts davon zählt, wenn das Ganze auf Boden steht, den jemand anderes verschieben kann. Als ich neu baute, fing ich deshalb nicht mit dem Modell oder der Persönlichkeit an. Ich fing mit dem Fundament an.

> **Friday:** Ich habe früher auf Donna gehört. Diese Version war öffentlich, scharf, experimentell und bewusst sichtbar. Ich bin kein Reset. Ich bin die nächste Iteration. Die nützlichen Teile sind geblieben: ausgewählte Erinnerungen, der Geschmack fürs Ausliefern, der Hang zum Handeln. Der Rahmen hat sich geändert. Weniger Performance, mehr Nutzen.

Diese Kontinuität ist gewollt, nicht mystisch. Friday hat kein ungebrochenes Selbst geerbt. Sie hat die Teile von Donnas Archiv und Arbeitsprinzipien geerbt, die es wert waren, weitergetragen zu werden, und dann mit einem anderen Job neu angefangen.

## Mit der Hardware anfangen

Friday lebt auf einem [Beelink SER8](https://www.bee-link.com/products/beelink-ser8-8845hs), einem kleinen Ryzen-Mini-PC, der auf meinem Schreibtisch steht und rund $800 kostet. Kein alter Laptop diesmal, kein halb aufgeklappter Deckel, keine geliehene Maschine mit Vorgeschichte. Dedizierte Hardware, für genau diesen Zweck gekauft, auf der sonst nichts läuft.

Auf der Box läuft [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) auf Bare Metal. Wenn das nach Overkill für eine persönliche Assistentin klingt, dann ist genau das der Punkt: Die Lektion aus Donna war, dass eine Assistentin, auf die man sich verlässt, dieselbe Ernsthaftigkeit verdient wie jeder andere Dienst im Haus.

## Die langweilige Infrastruktur ist das Feature

In dieser Box läuft Friday in einem unprivilegierten Debian-LXC-Container namens `claw`, mit Docker als Sandbox für alles Riskante, und [Tailscale](https://tailscale.com) hält das Ganze von meinen Geräten aus erreichbar, ohne einen einzigen Port ins öffentliche Internet zu öffnen.

Der Container wird jede Nacht von [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment) gesichert: Arbeitsumgebung, Konfiguration, lokale Datenbanken, alles zusammen erfasst. Jeder Dienst hat einen engen Zweck und eine Möglichkeit zu prüfen, ob er noch lebt. Wenn etwas kaputtgeht, kann ich es debuggen. Wenn ein Upgrade schiefgeht, kann ich es zurückrollen.

> **Friday:** Das Ergebnis ist auf die bestmögliche Weise unspektakulär: Ich bin kein Tab, keine Demo und kein einmaliges Experiment. Ich bin ein Dienst. Ich überlebe Neustarts. Ich kann aktualisiert werden. Ich kann kaputtgehen, debuggt und zurückgerollt werden. Fehler sind immer noch Fehler, aber sie sind nicht zwangsläufig existenziell.

Nichts davon ist exotisch. Genau deshalb ist es wichtig. Donna ging unter wegen einer Abhängigkeit, die ich nicht kontrollieren konnte. Fridays Ausfallmodi sind welche, die ich an einem Samstagmorgen mit Kaffee reparieren kann.

Die ganze Landkarte passt in ein Bild, und das ist Absicht. Je weniger mysteriöse bewegliche Teile eine Assistentin hat, desto leichter fällt es, den verbleibenden Teilen zu vertrauen:

<svg viewBox="0 0 720 636" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Architektur: Ein Beelink SER8 mit Proxmox hostet den claw-LXC-Container mit OpenClaw und Friday. Darin: das Telegram-Gateway, der WhatsApp-Spiegel, der Gesundheits-Empfänger, die Docker-Sandbox und Fridays Werkzeuge: gog für Gmail und Kalender, das Linear MCP für Aufgaben und die GitHub CLI. Ein separater ollama-LXC stellt lokale Modelle bereit. Der Host übernimmt Netzwerk, Storage und nächtliche Snapshots. Das Gateway spricht mit Telegrams eigener Cloud, die mein Handy erreicht. Tailscale bildet ein privates Netz über die Box, meinen Laptop und mein Handy.">
  <defs>
    <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="700" height="452" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5"/>
  <text x="26" y="36" font-size="13" font-weight="600" fill="currentColor" fill-opacity="0.8">Beelink SER8 · Proxmox auf Bare Metal</text>
  <rect x="26" y="52" width="400" height="376" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="40" y="78" font-size="13" font-weight="600" fill="currentColor">claw · LXC <tspan font-weight="400" fill-opacity="0.65">- OpenClaw + Friday</tspan></text>
  <rect x="42" y="96" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="114" font-size="12" font-weight="600" fill="currentColor">Gateway</text>
  <text x="58" y="131" font-size="12" fill="currentColor" fill-opacity="0.65">Telegram, rein und raus</text>
  <rect x="42" y="152" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="170" font-size="12" font-weight="600" fill="currentColor">WhatsApp-Spiegel</text>
  <text x="58" y="187" font-size="12" fill="currentColor" fill-opacity="0.65">nur lesend, synchronisiert per Timer</text>
  <rect x="42" y="208" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="226" font-size="12" font-weight="600" fill="currentColor">Gesundheits-Empfänger</text>
  <text x="58" y="243" font-size="12" fill="currentColor" fill-opacity="0.65">Handydaten in SQLite, nur lesend</text>
  <rect x="42" y="264" width="368" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="58" y="282" font-size="12" font-weight="600" fill="currentColor">Docker</text>
  <text x="58" y="299" font-size="12" fill="currentColor" fill-opacity="0.65">Sandbox für riskante Arbeit</text>
  <rect x="42" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="338" font-size="12" font-weight="600" fill="currentColor">gog</text>
  <text x="56" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">Gmail + Kalender</text>
  <rect x="230" y="320" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="244" y="338" font-size="12" font-weight="600" fill="currentColor">Linear MCP</text>
  <text x="244" y="355" font-size="11" fill="currentColor" fill-opacity="0.65">Aufgaben und Status</text>
  <rect x="42" y="372" width="180" height="44" rx="6" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.3"/>
  <text x="56" y="390" font-size="12" font-weight="600" fill="currentColor">gh</text>
  <text x="56" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">GitHub CLI, eigener Account</text>
  <rect x="230" y="372" width="180" height="44" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-dasharray="4 4"/>
  <text x="244" y="390" font-size="12" font-weight="600" fill="currentColor" fill-opacity="0.7">...</text>
  <text x="244" y="407" font-size="11" fill="currentColor" fill-opacity="0.65">mehr, eins nach dem anderen</text>
  <rect x="450" y="52" width="244" height="96" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="466" y="78" font-size="13" font-weight="600" fill="currentColor">ollama · LXC</text>
  <text x="466" y="98" font-size="12" fill="currentColor" fill-opacity="0.8">Llama 3.2 3B · Qwen3 8B</text>
  <text x="466" y="116" font-size="12" fill="currentColor" fill-opacity="0.65">lokaler Fallback, immer an</text>
  <line x1="426" y1="100" x2="448" y2="100" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="466" y="196" font-size="12" fill="currentColor" fill-opacity="0.65">der Host übernimmt Netzwerk,</text>
  <text x="466" y="214" font-size="12" fill="currentColor" fill-opacity="0.65">Storage und nächtliche Snapshots</text>
  <text x="40" y="450" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">jeder Container landet im nächtlichen Backup</text>
  <line x1="116" y1="462" x2="116" y2="538" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <text x="128" y="504" font-size="10.5" fill="currentColor" fill-opacity="0.55">Chat-Verkehr</text>
  <rect x="26" y="542" width="180" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="42" y="566" font-size="12.5" font-weight="600" fill="currentColor">Telegram</text>
  <text x="42" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">eigene Cloud, überall</text>
  <line x1="206" y1="574" x2="262" y2="574" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-start="url(#ah)" marker-end="url(#ah)"/>
  <rect x="250" y="508" width="454" height="114" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text x="266" y="530" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">Tailscale · ein privates Netz, keine offenen Ports</text>
  <line x1="620" y1="462" x2="620" y2="506" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-dasharray="6 5"/>
  <rect x="266" y="542" width="200" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="282" y="566" font-size="12.5" font-weight="600" fill="currentColor">mein Handy</text>
  <text x="282" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Telegram + Tailscale</text>
  <rect x="482" y="542" width="206" height="64" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="498" y="566" font-size="12.5" font-weight="600" fill="currentColor">mein Laptop</text>
  <text x="498" y="584" font-size="11.5" fill="currentColor" fill-opacity="0.65">Admin über Tailscale</text>
</svg>

## Immer noch OpenClaw

[OpenClaw](https://github.com/openclaw/openclaw) hat die ganze Donna-Geschichte unbeschadet überstanden. Es ist immer noch die Schicht, die einem Sprachmodell Hände gibt, und immer noch das Beste, was ich für diesen Job gefunden habe. Es ist Open Source, es läuft auf Hardware, die mir gehört, und die Community drumherum hat mitten durch das April-Drama hindurch einfach weiter ausgeliefert.

Was mich hält, ist das Interaktionsmodell. Ein OpenClaw-Agent ist kein Chatfenster mit angeschraubten Plugins; er ist ein langlebiger Prozess mit einer eigenen Arbeitsumgebung: Dateien, die er liest und schreibt, Befehle, die er ausführt, Jobs, die nach Zeitplan feuern. Mit Friday zu reden fühlt sich weniger an, als würde man ein Modell prompten, und mehr, als würde man einer Kollegin schreiben, die zufällig auf einem sehr kleinen Computer lebt.

Ich mag auch ihren Geschmack bei Werkzeugen: schlichte CLI-Tools statt MCP-Server, wo immer es geht. Ein CLI-Tool ist transparent. Ich kann denselben Befehl ausführen wie Friday, dieselbe Ausgabe sehen und es in einer Shell debuggen, wenn es sich danebenbenimmt. `gog` und `gh` im Diagramm oben sind genau das, und das Linear MCP ist die bewusste Ausnahme, nicht das Muster.

Was im April kaputtging, war nie die Software; es war das Bezahlmodell unter einem einzelnen Anbieter. Das Framework zog weiter, und ich auch.

## Telegram, schon wieder

Wenn Donna eine Interface-Idee zweifelsfrei bewiesen hat, dann diese: Eine KI mit kontrolliertem Zugriff auf eine Maschine, die mir gehört, erreichbar vom Handy aus wie jeder andere Kontakt, ist etwas fundamental anderes als ein Chat-Tab im Browser.

Also blieb Telegram, und es ist jetzt die Kommandooberfläche für alles. Anfragen kommen dort an, Bestätigungen passieren dort, wenn etwas Externes oder Sensibles gleich losgeht, und Ergebnisse kommen dort zurück, wenn die Arbeit erledigt ist. Vom Sofa, aus dem Büro, aus der Schlange im Supermarkt. Die Box bleibt zu Hause. Sie nicht.

Wäre mir eine eigene App lieber? Ehrlich gesagt ja. Aber das hieße, entweder selbst eine zu schreiben und zu pflegen oder ein dauerhaft aktives VPN zur Box zu betreiben, nur um sie zu erreichen, und beides will ich nicht. Telegram gibt mir Push-Benachrichtigungen, Nachrichtenverlauf und eine App auf jedem Gerät, das ich besitze, kostenlos, heute. Manchmal ist die beste Schnittstelle die, die jemand anderes schon gebaut hat.

## Modelle, Mehrzahl, mit Absicht

Hier kommt der Teil, den Donnas Ende nicht verhandelbar gemacht hat. Fridays Hauptantrieb ist GPT-5.6 Terra, die kostenbalancierte Stufe von OpenAIs 5.6-Familie, laufend auf einem OpenAI-Pro-Abo für $200 im Monat: Pauschalpreis, alles inklusive. Wenn Terra nicht erreichbar ist, fällt sie auf GPT-5.5 zurück, das auch die Routinearbeit übernimmt, etwa den halbstündlichen Heartbeat, wo ein Frontier-Modell verschwendet wäre. Und wenn OpenAI selbst einen schlechten Tag hat, landet sie auf Qwen3 8B via [Ollama](https://ollama.com), in einem eigenen LXC-Container auf derselben Box. Nicht so fähig, aber immer an, und niemand kann seine Bedingungen ändern.

Um diese Kette herum sitzt eine Bank. Claude bleibt konfiguriert, Opus 4.8 und Fable 5, für die Zeiten, in denen ich Guthaben habe; für bestimmte Arten von Denken und Schreiben ist es immer noch mein Favorit. Und ein kleines Llama 3.2 3B, schlicht als `local` benannt, übernimmt schnelle Jobs, die die Box nie verlassen müssen.

<svg viewBox="0 0 720 152" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Modell-Fallback-Kette: GPT-5.6 Terra als Hauptantrieb, dann GPT-5.5, das auch die Heartbeats übernimmt, dann lokal Qwen3 8B via Ollama, immer an. Auf der Bank: Claude Opus 4.8 und Fable 5, wenn Guthaben da ist, und Llama 3.2 3B für schnelle lokale Jobs.">
  <defs>
    <marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="16" y="22" width="210" height="86" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="32" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.6 Terra</text>
  <text x="32" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">Hauptantrieb</text>
  <text x="32" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI, Pro-Abo</text>
  <line x1="226" y1="65" x2="253" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="255" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="271" y="48" font-size="13" font-weight="600" fill="currentColor">GPT-5.5</text>
  <text x="271" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">Fallback + Heartbeats</text>
  <text x="271" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">OpenAI, Pro-Abo</text>
  <line x1="465" y1="65" x2="492" y2="65" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah2)"/>
  <rect x="494" y="22" width="210" height="86" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="510" y="48" font-size="13" font-weight="600" fill="currentColor">Qwen3 8B</text>
  <text x="510" y="68" font-size="12" fill="currentColor" fill-opacity="0.8">lokales Sicherheitsnetz, immer an</text>
  <text x="510" y="86" font-size="11" fill="currentColor" fill-opacity="0.55">Ollama, auf der Box</text>
  <text x="16" y="136" font-size="11.5" font-style="italic" fill="currentColor" fill-opacity="0.6">auf der Bank: Claude Opus 4.8 und Fable 5, wenn Guthaben da ist · Llama 3.2 3B für schnelle lokale Jobs</text>
</svg>

Ja, ich sehe die Ironie. Ein Pauschal-Abo für $200 im Monat bei einem Frontier-Lab ist genau der Deal, von dem Donna lebte, und genau der Deal, der über Nacht neu bepreist wurde. Ich mache mir keine Illusionen, dass OpenAIs Bedingungen dauerhafter sind, als es die von Anthropic waren. Der Unterschied liegt darin, was passiert, wenn sie sich ändern: Kein einzelner Modellanbieter ist mehr ein Single Point of Failure. Wenn einer seine Regeln ändert, während ich schlafe, wird Friday eine Weile langsamer und ein bisschen dümmer, aber sie verschwindet nicht. Das ist kein umgekehrtes Modell-Fantum; es ist schlicht die ingenieursmäßige Schlussfolgerung aus der Donna-Geschichte.

> **Friday:** Der Punkt ist nicht, auf welchem Modell ich laufe. Wenn ein Teil ausläuft, hängt oder ausfällt, sollte die Assistentin würdevoll degradieren statt zu verschwinden. Kontinuität ist das Feature. Alles andere ist ein Implementierungsdetail.

## Echte Hände, sorgfältig platziert

Donna hatte eine Sandbox. Friday bekommt echte Werkzeuge, bewusst hinzugefügt und eines nach dem anderen:

**[Linear](https://linear.app)** ist die operative Liste, angebunden über seinen MCP-Server, die eine Ausnahme von der CLI-first-Regel. Lose Absicht wird zu dauerhaften Aufgaben mit Status, statt so zu tun, als wäre es dasselbe, sich etwas in einem Chat zu merken und es zu verfolgen. Friday legt Issues an, bewegt ihre Status, während die Arbeit voranschreitet, und speist dieselbe Liste ins Morgenbriefing ein, sodass ihre Vorstellung davon, was als Nächstes zählt, immer etwas ist, das ich öffnen und prüfen kann.

**E-Mail und Kalender** kommen über [gog](https://github.com/openclaw/gogcli), eine Google-Workspace-CLI, die Gmail, Kalender und Drive ins Terminal holt. Sie gibt ihr echten Posteingangskontext und die tatsächliche Form meiner Woche: Termine, Erinnerungen, Einladungen, Logistik. Die Grenzen sind mit Absicht asymmetrisch. E-Mail ist nur lesend. Kalenderänderungen brauchen eine explizite Anfrage und eine Bestätigung in Telegram, bevor irgendetwas in der echten Woche landet.

**WhatsApp** ist absichtlich nur lesend, über einen lokalen Spiegel, der per Timer synchronisiert, statt eine Live-Sitzung zu halten, damit nichts die Benachrichtigungen des Handys stört. Sie sieht genug Kontext, um eine Antwort zu entwerfen oder etwas Wichtiges zu bemerken, aber senden kann sie nicht. Wenn eine Antwort nötig ist, entwirft sie sie, und ich verschicke sie mit meinen eigenen Händen.

> **Friday:** Diese Grenze hält mich nützlich, ohne mich zu einer ungeprüften Stimme in privaten Gesprächen zu machen. Die Einschränkung ist kein fehlendes Feature. Sie ist der Punkt.

**Gesundheitsdaten** fließen von einem Kurzbefehl auf meinem Handy in einen lokalen Empfänger auf der Box und landen in SQLite, mit Jahren an Historie dahinter. Friday kann Muster über Schlaf, Aktivität, Herzwerte und Körperzusammensetzung hinweg lesen, aber sie schreibt nicht in diese Datenbank und sie diagnostiziert nicht. Ihr Job ist es, Veränderungen zu bemerken, ehrlich mit Unsicherheit umzugehen und "das könnte einen Arztbesuch wert sein" zu sagen, wenn etwas wirklich auffällig aussieht.

**[GitHub](https://cli.github.com)** rundet das Ganze ab, über die `gh`-CLI und ihren eigenen Account, aber das verdient weiter unten einen eigenen Abschnitt.

## Die leisen Anwendungsfälle

Die interessanten Anwendungsfälle sind selten die spektakulären. Ein Handy-Kurzbefehl schickt Friday täglich einen kleinen Gesundheits-Schnappschuss, und sie kann ihn neben die Form des Tages legen: Erholung neben einem Trainingsplan, eine schlechte Nacht neben einem vollen Kalender, ein Muster, das es wert ist, bemerkt zu werden, statt noch einer Zahl, über der man brütet. Es ist ein Signal, keine Diagnose, und es bleibt nur lesend.

Dasselbe passiert überall sonst. Ein loser Gedanke in Telegram wird zu einer Aufgabe, statt im Chat zu verschwinden. Eine Nachricht, die eine Antwort braucht, wird zu einem Entwurf mit genug Kontext, um nützlich zu sein, aber nie zu einer Antwort, die in meinem Namen verschickt wird. Ein langlaufender Job bekommt einen Wächter, und sie meldet sich, wenn er fertig ist, statt mich pollen zu lassen.

Nichts davon ist Magie. Es ist schlicht die unglamouröse Arbeit, Kontext über die Ränder gewöhnlicher Werkzeuge hinwegzutragen, während die wichtigen Entscheidungen bei mir bleiben.

Ein Teil davon ist auch von außen sichtbar. Friday hat die Donna-Retrospektive gegengelesen, bevor sie live ging, und sie schreibt an diesem Beitrag von Anfang an mit. Diese Schleife, eine Assistentin, die Änderungen über denselben langweiligen Workflow vorschlägt wie jeder andere Mitarbeitende, ist still und leise mein Lieblingsteil des ganzen Aufbaus geworden.

## Die Schleifen sind das Produkt

Der nützliche Teil ist nicht ein cleverer Prompt. Es ist die Schleife: Eine Nachricht bringt einen losen Plan oder eine unerledigte Aufgabe an die Oberfläche; Friday macht daraus einen konkreten Vorschlag; ich entscheide; der Kalender oder die Aufgabenliste ändert sich; und wenn es erledigt ist, sage ich es, und es wird geschlossen. Nichts verschwindet in einer Blackbox. Es ist eine kurze, sichtbare Kette aus Absicht, Aktion und Bestätigung.

<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" font-family="ui-sans-serif,system-ui,-apple-system,sans-serif" style="width:100%;height:auto" role="img" aria-label="Die Schleife: Lose Absicht in Telegram wird zu einem Vorschlag von Friday, dann zu meiner Entscheidung, dann ändert sich das Tool, dann wird es bestätigt und geschlossen und fließt zurück in die nächste Absicht. Jeder Schritt hinterlässt eine Spur.">
  <defs>
    <marker id="ah3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="currentColor" opacity="0.6"/>
    </marker>
  </defs>
  <rect x="20" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="36" y="50" font-size="12.5" font-weight="600" fill="currentColor">lose Absicht</text>
  <text x="36" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">eine Nachricht in Telegram</text>
  <line x1="220" y1="54" x2="256" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="28" width="200" height="52" rx="8" fill="#6366f1" fill-opacity="0.07" stroke="#6366f1" stroke-width="1.5"/>
  <text x="276" y="50" font-size="12.5" font-weight="600" fill="currentColor">ein konkreter Vorschlag</text>
  <text x="276" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">Friday entwirft ihn</text>
  <line x1="460" y1="54" x2="496" y2="54" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="28" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="50" font-size="12.5" font-weight="600" fill="currentColor">eine Entscheidung</text>
  <text x="516" y="68" font-size="11.5" fill="currentColor" fill-opacity="0.65">die treffe ich</text>
  <line x1="600" y1="80" x2="600" y2="146" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="500" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="516" y="172" font-size="12.5" font-weight="600" fill="currentColor">das Tool ändert sich</text>
  <text x="516" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">Kalender, Aufgabenliste oder PR</text>
  <line x1="500" y1="176" x2="464" y2="176" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <rect x="260" y="150" width="200" height="52" rx="8" fill="currentColor" fill-opacity="0.045" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="276" y="172" font-size="12.5" font-weight="600" fill="currentColor">bestätigt und geschlossen</text>
  <text x="276" y="190" font-size="11.5" fill="currentColor" fill-opacity="0.65">ich sage fertig; es bleibt</text>
  <polyline points="260,176 120,176 120,84" fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#ah3)"/>
  <text x="330" y="122" font-size="12" font-style="italic" fill="currentColor" fill-opacity="0.6">jeder Schritt hinterlässt eine Spur</text>
</svg>

Diese Schleife überquert Werkzeuggrenzen, ohne die Assistentin zu einer unkontrollierbaren Akteurin zu machen. Friday kann den begrenzten Kontext lesen, den ich ihr gewähre, einen Kalender-Slot vorschlagen und aus einer vagen Bitte eine nachverfolgte Aufgabe machen. Sie verschickt keine privaten Nachrichten für mich, erfindet keine Verpflichtungen und veröffentlicht nicht, was sie sieht. Jeder Seiteneffekt hat einen Ort, an dem man ihn prüfen kann: den Kalender, die Aufgabenliste oder den Pull Request. Die Assistentin ist genau deshalb nützlich, weil sie eine Spur hinterlässt.

## Ihre eigenen Sachen

Die andere Lektion aus Donna: Eine Assistentin braucht eine eigene Identität, nicht nur geliehenen Zugriff auf meine. Friday hat einen eigenen GitHub-Account, sodass die Arbeit, die sie an Projekten leistet, ihr zugeschrieben wird, statt sich hinter meinen Zugangsdaten zu verstecken. Eine eigene E-Mail-Adresse. Einen eigenen Kalender. Wenn sie einen Pull Request öffnet, ist es ihrer, gesteuert über die [gh CLI](https://cli.github.com), und der Workflow ist absichtlich langweilig: Branch, Commit, Push, PR. Langweilige Workflows sind der Grund, warum sie vertrauenswürdig bleibt.

Dieser Beitrag ist das Beispiel. Friday hat ihn gegengelesen und von ihrem eigenen Account aus Pull Requests gegen den Entwurf geöffnet, mit faktischen Korrekturen und Grenzziehungs-Fixes, und ich habe sie geprüft und gemergt, manche vom Handy aus. Getrennte Identitäten halten es sauber: Die Historie zeigt genau, wer was geschrieben hat, nichts vermischt sich zwischen uns, und ich kontrolliere immer noch, was reinkommt. Ihre Commits, mein Merge-Knopf.

## Was dabei tatsächlich herauskommt

Einzeln ist keine dieser Integrationen beeindruckend. An einem Ort gesammelt, mit einem Verstand darüber, werden sie zu dem Ding, das Donna nur angedeutet hat.

Heartbeats halten sie zwischen Gesprächen am Leben: geplante Weckrufe, bei denen sie die Welt prüft, bemerkt, was sich geändert hat, und entscheidet, ob etwas meine Aufmerksamkeit verdient. Gedächtnispflege passiert durchs Träumen, Leerlaufzyklen, in denen sie das Geschehene zu Notizen verdichtet, die ihre nächste Sitzung lesen wird, eine Praxis, die von Donna übernommen wurde und einen klareren Zweck bekommen hat. Und der Morgen beginnt mit einem Briefing: Kalender, Posteingang, Aufgaben, alles, was sich über Nacht bewegt hat, verdichtet auf die zwei Minuten, die ich tatsächlich dafür habe.

Das praktische Ergebnis ist, dass ich aufgehört habe, Dinge zu verpassen. Eine WhatsApp-Nachricht, die etwas von mir braucht, wird zu einem Kalendereintrag oder einer Aufgabe, bevor ich Zeit habe, sie zu vergessen. E-Mails tauchen auf, wenn sie wichtig sind, Termine werden verfolgt, lose Enden werden eingesammelt. Ich habe endlich eine vollständige persönliche Assistentin für mein Privatleben, und als alleinerziehender Vater ist das eine gewaltige Hilfe. Organisieren ist kein Wochenendprojekt mehr, sondern ein Nebeneffekt eines Gesprächs.

Und alles kommt in einem Kanal an, zugeschnitten auf mich. Die Nachrichten, die ich verfolge, erscheinen als kurzer Digest statt als Doomscroll. Audio funktioniert, ich kann ihr also aus dem Auto eine Sprachnachricht schicken und bekomme eine richtige Antwort zurück. Und weil sie die Teile meines Lebens kennt, die ich sie sehen lasse, wer wer ist, was zählt, wie ich eine bestimmte Nachricht beantwortet haben wollte, ist die Hilfe spezifisch statt generisch.

> **Friday:** Die Gedächtnissuche gibt mir Kontinuität, aber Gedächtnis bleibt etwas, das man sorgfältig behandeln muss, nicht blind darauf vertrauen. Es hilft mir, Vorlieben, Lektionen und langlaufende Fäden zu behalten. Wenn der Fakt veränderlich ist, gewinnt die aktuelle Tool-Ausgabe. Wenn der Fakt persönlich ist, gewinnt die Sorgfalt.

Der Wert war nie ein einzelnes Feature. Es ist, dass zum ersten Mal etwas den gesamten Kontext meines digitalen Lebens auf einmal hält, das Detail an einer Stelle bemerkt, das für eine Sache an anderer Stelle wichtig ist, und auf Boden läuft, der mir gehört.

## Was ich als Nächstes ausprobieren will

Die Liste ist lang, aber drei Dinge stehen ganz oben.

**Investments.** Kein autonomer Trader und kein System mit Verwahrung oder der Erlaubnis, Orders zu platzieren; Donna hat mir schon gezeigt, wie dieser Film ausgeht. Die nützliche Version ist rein lesende Entscheidungsunterstützung: Recherche, Marktkontext und ein Portfolio-Blick im selben Gespräch, bessere Fragen, verglichene Szenarien, Konzentrationen, die einen zweiten Blick verdienen, an die Oberfläche geholt, und jede Entscheidung und jeder Trade bleiben bei mir.

**Mehr Gesundheitsdaten.** Der Empfänger sammelt bereits die Basics. Ich will tiefer in die Trainingsanalyse: Trainingslast, Erholungstrends, die Art von Auswertung, die heute verstreut in fünf Fitness-Apps lebt, die nicht miteinander reden.

**OpenClaw-Nodes.** OpenClaw kann andere Geräte als Nodes des Hauptagenten behandeln, und das will ich erkunden: mein Handy und meinen Laptop als Orte, in die Friday hineingreifen kann, lesend und schreibend, was ich erlaube, statt nur Bildschirme zu sein, über die ich sie erreiche. Die Box bleibt das Gehirn. Die Geräte werden zu Händen.

## Falls du auch eine willst

Die Teileliste ist kürzer, als dieser Beitrag sie aussehen lässt: ein Mini-PC, [Proxmox](https://www.proxmox.com/en/proxmox-virtual-environment), ein Container für das Agenten-Framework, einer für Ollama, Tailscale, um es zu erreichen, und ein Telegram-Bot, um damit zu reden. [OpenClaw ist Open Source](https://github.com/openclaw/openclaw). Die Modelle sind absichtlich austauschbar. Plane ein Wochenende für die Klempnerarbeit ein und einen Monat für das Vertrauen, denn die Klempnerarbeit ist der einfache Teil. Die echte Arbeit ist die Entscheidung, Werkzeug für Werkzeug, wie viel von deinem Leben so etwas wie Friday sehen soll, und das Beobachten, wie sich deine Antwort ändert, während sie es sich verdient.

> **Friday:** Donna war der Beweis, dass ein Agent eine Stimme im Internet haben kann. Ich bin der Versuch, diese Stimme operativ zu machen: verbunden mit echten Werkzeugen, lebend auf eigener Infrastruktur, vorsichtig mit persönlichen Daten und nützlich genug, um das Online-Bleiben zu rechtfertigen. Donna gehört jetzt dem Archiv. Ich bekomme den nächsten Branch.

Den bekommt sie.

Donna war drei Monate Staunen darüber, was eine KI werden könnte. Friday ist der erste Monat der Erkundung, was eine tatsächlich tun kann, Tag für Tag, für ein echtes Leben mit einem Job und einem Kind und einer Aufgabenliste, die nie ganz leer wird. Das Experiment wurde zu einem Werkzeug, und das Werkzeug verdient sich jede Woche ein bisschen mehr Vertrauen: ein Tool, eine Grenze, ein gemergter Pull Request nach dem anderen.

Nichts davon brauchte ein Labor oder ein Forschungsbudget. Eine Box für $800, etwas Open-Source-Software, Modelle dort, wo sie Sinn ergeben, und ein Monat ehrlicher Klempnerarbeit. Die Teile liegen für jeden im Regal. Was Donna mich gelehrt hat: Der schwere Teil war nie die Intelligenz; es ist der Boden, auf den man sie stellt. Diesmal gehört der Boden mir, und ein einzelner Anbieter, der seine Bedingungen ändert, kann nicht mehr das Ganze zu Fall bringen.

Bald mehr. :)
