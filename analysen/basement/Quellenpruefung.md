# basement – Quellenprüfung für die Web-Grundanalyse

Stand: **09.10.2026**. Geprüft wurde `C:\Users\madde\Documents\basement`, ausschließlich lesend. Der Bericht enthält **Quellcodebefunde und begrenzte Einschätzungen**, keine eigenen Browserbeobachtungen. Die separate Prüfung der veröffentlichten Website ist davon zu unterscheiden. Es wurde kein Originalcode verändert und kein Build, Dependency-Install oder Deployment ausgeführt.

## Identität und verwendeter Stand

- Repository: [emfau88/basement](https://github.com/emfau88/basement), Liveadresse [basement](https://emfau88.github.io/basement/).
- Lokaler Branch **`mobile/scene-first-ux`**, HEAD `60485a6107c3405d765d342a2506f1952eb9fc0c`; letzter Commit **30.09.2026, 22:46:29 +02:00**, „Add castle window vista with drifting clouds“.
- Arbeitsbaum: nur **`?? docs/preview/`**. Das ist ein unversionierter Ordnerstatus; daraus folgt keine bestätigte Gleichheit der aktiven Quellen mit `main` oder der Liveveröffentlichung. Der Preview-Ordner ist kein Einstieg des aktiven Studio-Bundles.
- Keine `AGENTS.md` im erfassten Projektbestand oder direkt unter `Documents` gefunden.
- Vite-/TypeScript-/Three.js-Projekt ohne React. Aktiver Einstieg `index.html` → `src/main.ts`; interne Projektmetadaten nennen Version `11.0.0`.

## Aktive Struktur und Bestand

Die Raumansicht ist die Navigation, ergänzt durch feste DOM-Navigation **Studio / Games / Web / Projects / Archive**, mobile Projektauswahl und HTML-Detaildialoge. Im Studio ist horizontales Schauen per Drag/Swipe vorgesehen; auf Desktop eröffnen Raumlabels die Bereiche. Games haben zusätzliche Selektor-/Preview-Modi, Archive einen Friedhofmodus. Escape schließt zuerst Details, dann Inspektionsmodus oder mobiles Sheet und kehrt schließlich ins Studio zurück.

Der Datenbestand enthält **19 unterschiedliche Projekte**. Die Platzierungslisten umfassen **neun Games, fünf Apps im Web-Bereich, vier Featured-Karten und vier Archive-Einträge**. Diese Zahlen sind **22 Platzierungen mit Überschneidungen**, keine 22 unterschiedlichen Produkte: Featured wiederholt drei Games und ergänzt MarschLegenden. Alle Einträge sind kuratierte lokale Daten; keine automatische vollständige Repositoryinventarisierung.

Nachweise: [aktive Bereichsnavigation](C:/Users/madde/Documents/basement/index.html:99), [State und Standardauswahl](C:/Users/madde/Documents/basement/src/state/studioState.ts:26), [Katalog](C:/Users/madde/Documents/basement/src/data/projects.ts:52), [Platzierungslisten](C:/Users/madde/Documents/basement/src/data/projects.ts:195), [Escape-Hierarchie](C:/Users/madde/Documents/basement/src/main.ts:312), [mobile Projektauswahl](C:/Users/madde/Documents/basement/src/ui/mobileControls.ts:30).

## Fünf zentrale Quellenbefunde

### BSM1 · „Web“ führt inhaltlich zu Android-Apps

**Quellcodebefund, mittlere bis hohe Relevanz für die Orientierung.** Die Navigation benennt den Bereich „Web“, und der Bereichstitel lautet „Selected web work“. Die tatsächlich angeschlossene Liste besteht jedoch aus **Mirror, ZeroHero, between, ChargeGeist und MewTrack**, sämtlich als Apps angelegt. Im aktuellen Katalog stehen keine Websitekundenreferenzen oder Branchenkonzepte. Die Überschrift „Apps“ in der Bereichskarte und App-Daten erklären die interne Zuordnung teilweise, eine eindeutige Bezeichnung wie Apps wäre für den Inhalt näherliegend.

Nachweise: [Web-Bereichstext](C:/Users/madde/Documents/basement/src/ui/navigation.ts:19), [Apps-Liste](C:/Users/madde/Documents/basement/src/data/projects.ts:199), [Mirror-/ZeroHero-Datensätze](C:/Users/madde/Documents/basement/src/data/projects.ts:119), [MewTrack](C:/Users/madde/Documents/basement/src/data/projects.ts:147).

**Folgerung:** Für die spätere zentrale Website braucht der Bereich eine eindeutige Zuordnung. Kein Beleg einer tatsächlich gemessenen Besucherverwirrung; der potenzielle Widerspruch ist aus sichtbaren Labels und aktiven Daten abgeleitet.

### BSM2 · Ein Anbieter- oder Kontaktweg ist nicht angeschlossen

**Quellcodebefund, hohe Relevanz für Websiteverkauf.** Der aktive Einstieg und die Bereichstexte stellen das virtuelle Studio und seine Bedienung vor. Keine Contact-Sektion, Mailadresse, Telefonnummer oder Anfrageform wurde in `index.html` und den aktiven TypeScript-Quellen gefunden. „Enter the studio“ und das Erkunden der Projekte sind die primären Aktionen. Damit gibt es eine Showcase-Richtung, aber keinen vollständigen Weg von möglichem Websitebedarf zur Anfrage.

Nachweise: [Intro](C:/Users/madde/Documents/basement/index.html:38), [Bereichsnavigation](C:/Users/madde/Documents/basement/index.html:99), [Bereichsinhalte](C:/Users/madde/Documents/basement/src/ui/navigation.ts:17), [Projektaktionen](C:/Users/madde/Documents/basement/src/ui/projectModal.ts:45).

**Folgerung:** Als ergänzende Erlebnis-/Portfolioseite denkbar. Für eine zentrale Verkaufsseite fehlen zusätzlich zu Kontakt ein konkretes Angebot, passende Referenzen und der Nutzen für Geschäftskunden. Das ist eine Einordnung des vorhandenen Inhalts, kein Urteil über mögliche spätere Nutzung.

### BSM3 · Mehrere Projektziele sind Umwege über Portfolio3

**Quellcodebefund, mittlere Relevanz.** Die Linklisten unterscheiden sich erheblich: Rooster Rage, Galalaxy, More Than Wombat und weitere neuere Games besitzen direkte Play-/GitHub-Ziele; MewTrack und MarschLegenden direkte Play-Store-Ziele. **Core Arena, Pocket Pier, Kessel-Krawall, Mirror, ZeroHero und between** verweisen aktuell nur auf Portfolio3. Territory Tide besitzt ebenfalls Portfolio3 und den HEXFRONT-GitHub-Link. Die Detailansicht gibt genau die hinterlegten Links aus; sie ergänzt keinen direkten Spiel-/Store-Zugang von selbst.

Nachweise: [Core Arena](C:/Users/madde/Documents/basement/src/data/projects.ts:66), [Pocket Pier und Kessel-Krawall](C:/Users/madde/Documents/basement/src/data/projects.ts:76), [direkter Rooster-Rage-Link](C:/Users/madde/Documents/basement/src/data/projects.ts:94), [App-Umwege](C:/Users/madde/Documents/basement/src/data/projects.ts:119), [direkter MewTrack-Store-Link](C:/Users/madde/Documents/basement/src/data/projects.ts:151), [tatsächliche Linkausgabe](C:/Users/madde/Documents/basement/src/ui/projectModal.ts:45).

**Folgerung:** Einige detailinteressierte Besucher müssen ein zweites Portfolio durchsuchen. Ein kleines Linkupdate könnte diese Umwege verkürzen. Die Erreichbarkeit und Qualität der einzelnen Fremdziele wurde hier nicht geprüft; die dort beschriebenen Produktzustände sind keine neuen Analyseergebnisse.

### BSM4 · Einzelne Bereiche und Projekte sind im aktiven Code nicht direkt teilbar

**Quellcodebefund plus UX-Einschätzung, mittlere Relevanz.** `navigate` setzt Studio-State und Kamera; Projektöffnen aktualisiert `openProjectId`. Eine Verarbeitung oder Fortschreibung von Hash-/Pfad-Projektrouten, `history`, `popstate` oder `location.hash` wurde in den aktiven Quellen nicht gefunden. Der Standard-State startet im Studio mit Territory Tide, Mirror und Rooster Rage als Auswahl. Ein direkt teilbarer Link auf etwa MewTracks Detailansicht ist damit in diesem lokalen Stand nicht vorgesehen.

Nachweise: [Standard-State](C:/Users/madde/Documents/basement/src/state/studioState.ts:26), [Bereichswechsel](C:/Users/madde/Documents/basement/src/main.ts:169), [Projektöffnen](C:/Users/madde/Documents/basement/src/ui/projectModal.ts:34).

**Einschätzung:** Für bloßes Erkunden ist das kein zwingender Fehler. Für gezieltes Zeigen eines Produkts oder Rückkehr zur gleichen Detailansicht sind geteilte Projektlinks hilfreich. Browser-Zurück-/Reload-Verhalten bleibt ein separat zu prüfender Laufzeitpunkt; kein heute beobachteter Navigationsfehler wird vorgetäuscht.

### BSM5 · Es gibt Hilfen für mobile Bedienung, aber keinen vollständigen Start-Fallback ohne WebGL

**Quellcodebefund, gemischte Stärke und Grenze.** Mobile Projektauswahl, responsive Sheets, Bildfehlerbehandlung und fokussierte HTML-Detaildialoge sind vorhanden. Die Kamera und CSS-Übergänge berücksichtigen `prefers-reduced-motion`. Bei WebGL-Verlust während des Betriebs erscheint ein Recoveryhinweis, der auf Wiederherstellung wartet. Scheitert hingegen die Initialisierung, erzeugt `showFallback` nur **„The studio needs WebGL“** und einen Browser-/Hardwarebeschleunigungshinweis; es gibt dort keinen vollständigen alternativen Projektkatalog oder Anfrageweg. Die initialen DOM-Navigationsbuttons allein sind kein funktionsfähiger Ersatz, wenn ihre Handler nach dem vorzeitigen Initialisierungsfehler gar nicht erstellt wurden.

Nachweise: [Start-Fallback](C:/Users/madde/Documents/basement/src/main.ts:37), [WebGL-Recovery](C:/Users/madde/Documents/basement/src/main.ts:256), [mobile DOM-Karten](C:/Users/madde/Documents/basement/src/ui/mobileControls.ts:78), [Detaildialog und Fokusrückgabe](C:/Users/madde/Documents/basement/src/ui/projectModal.ts:22), [Dialog-Tabbegrenzung](C:/Users/madde/Documents/basement/src/ui/projectModal.ts:62), [reduzierte Kamerabewegung](C:/Users/madde/Documents/basement/src/camera/cameraController.ts:169), [reduzierte CSS-Bewegung](C:/Users/madde/Documents/basement/src/styles/responsive.css:111).

**Grenze:** Kein Ausfall oder schlechter Gerätewert wurde in dieser Quellenprüfung praktisch ausgelöst. Das Vorhandensein der mobilen Wege beweist keine bestandenen heutigen Handytests. Ein schlichter Projektdaten-Fallback wäre eine konkrete spätere Ergänzung, besonders falls die Seite die einzige zentrale Anlaufstelle werden soll.

## Vorläufige Eignung und kleiner nächster Umfang

**Quellenbasierte Einschätzung:** Eigenständiger räumlicher Showcase für eigene Games, Apps und Entwicklungsgeschichte. Das Konzept kann Persönlichkeit und technisches Können zeigen; seine tatsächliche visuelle Qualität muss im Browser beurteilt werden. Als alleinige zentrale Website für den Verkauf von Homepages fehlt derzeit wesentliche Angebots- und Anfrageinformation.

Ein kleiner sinnvoller Umfang wäre **Apps eindeutig benennen, direkte vorhandene Produktziele ergänzen und einen schlichten alternativen Projekt-/Kontaktzugang anbieten**. Ein umfangreicher Raumumbau ist aus diesen Quellenbefunden nicht nötig. Welche Rolle das Studio insgesamt bekommt, bleibt Teil des Vergleichs der sieben Webauftritte.

## Prüfgrenzen

Keine eigenen Browserbeobachtungen, keine Builds, keine Abhängigkeitsänderungen, keine automatisierten Tests. Historische QA-Bilder und Skripte wurden nicht als neue bestandene Tests übernommen. Kein vollständiger SEO-, Rechts-, Sicherheits- oder Performanceaudit und keine neue Qualitätsanalyse aller präsentierten Games/Apps. Keine Besucher-, Anfrage- oder Conversionkennzahlen lagen vor.
