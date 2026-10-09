# Portfolio3 – abgeschlossene Grundanalyse

Stand: **09.10.2026**. Begrenzt auf Aufbau, Verständlichkeit, Optik, erste Bedienwege und den Abgleich mit der aktuellen öffentlichen Quelle. Die Grundanalyse dient dem Vergleich der sieben Webauftritte als Grundlage für eine spätere Landingpage-Entscheidung.

**Urteil:** Portfolio3 ist eine brauchbare, vergleichsweise unmittelbar lesbare Grundlage für eine persönliche Apps-/Games-Präsenz. Echte Produktbilder, Beschreibungen und direkte Produktlinks machen vorhandene Arbeit sichtbar. Als Website-Verkaufsseite fehlen ein konkretes Kundenangebot und ein Anfrageweg. Umfangreiche Texte und Technikdetails sollten für einen schnellen ersten Überblick besser nach Wichtigkeit gestaffelt werden. Ob daraus die zentrale Homepage oder ein eigener Produktbereich wird, ist noch offen.

## Produkt und geprüfter Stand

- Auftritt: **emfau – Apps, Games, War Stories & Development Log**.
- Live-URL: [Portfolio3](https://emfau88.github.io/Portfolio3/).
- Öffentlich abgefragter GitHub-HEAD: **056fad1b33c9dc11501dd60ab2432dd8278da2c9**, 30.08.2026.
- Kein eindeutig zugeordneter ursprünglicher lokaler Checkout bestätigt. Der Ordner `Documents\portfolio` bleibt ein verwandter älterer Entwurf.
- Öffentliche Startseitenquelle unverändert in einer ignorierten lokalen Prüfablage gespeichert; **1.730.691 Bytes**, Git-Blob und SHA256 im [Quellenbericht](Quellenpruefung.md) und [Herkunftsnachweis](runtime/README.md).
- Live-Desktopansicht ungefähr **1281 Pixel** breit und Mobilansicht ungefähr **391 Pixel** breit; [Screenshotnachweise](screenshots/manifest.json).

## Tatsächlich angesehen und bedient

Desktop- und Mobilansicht des Einstiegs und des Appbereichs wurden angesehen. Ein Klick auf den MewTrack-Button beziehungsweise das entsprechende Appmotiv im Einstieg führte zur korrekten MewTrack-Karte im Appbereich. Die „Next App“-Navigation ließ sich bedienen. Produkt- und Spiel-Links wurden als Website-Navigationswege erfasst; daraus wird kein eigener Test der verlinkten Apps oder Spiele abgeleitet.

Die Quelle bestätigt acht Appkarten, zwölf Archivkarten, den Gamebereich, Techniktexte, Projektgeschichten und das eingebettete Logbuch. **Nicht vollständig im Browser durchgeprüft** wurden alle Appkarten, jeder Archiveintrag, alle Logbuch-/Geschichtenansichten und die Speicherung einer abweichenden Sprachauswahl nach Neuladen. Keine Originalquelle, App oder Storeseite wurde verändert.

## Was bereits gut funktioniert

- **Klarer Schwerpunkt:** Der Einstieg nennt Apps und kleine digitale Produkte; der weitere Aufbau führt zu Games und früheren Projekten. Für Besucher mit Interesse an der vorhandenen Entwicklungsarbeit ist der Zweck nachvollziehbar.
- **Erkennbare Produkte:** Sehr große Typografie, Produktmotive und echte Ansichten geben dem Desktop-Einstieg eine eigene visuelle Identität. Die korrekte Zuordnung des MewTrack-Motivs zur Produktkarte wurde tatsächlich bedient.
- **Direkte Wege:** Die Hauptprodukte besitzen Play-/Spiel-Links; das App-Karussell und die Projektdarstellung trennen einzelne Produkte. Archiv und Hintergrundgeschichten sind zusätzliche Ebenen statt dieselben Informationen nochmals im Einstieg.
- **Normale Lesestruktur:** Der Hauptauftritt ist eine scrollbare HTML-Seite. Mobil bleiben Navigation und Appkarte grundsätzlich lesbar; bei ungefähr 391 Pixeln Breite wurde kein horizontaler Seitenüberlauf beobachtet.

## Zentrale Befunde

### 1. Das Portfolio beantwortet Produktinteresse, noch keine Kundenanfrage nach einer Website

**Quellbefund und Einordnung, Priorität hoch bei Website-Verkauf als Ziel:** Die aktive Startseite enthält kein konkretes Website-Dienstleistungsangebot und keinen erkennbaren Kontakt-/Anfrageweg. Navigation und Footer verlinken keine Kontaktsektion; im Quelltext kommt kein `mailto:` vor.

Das ist kein grundsätzlicher Fehler einer Produktpräsentation. Wenn dieser Auftritt künftig Webkunden gewinnen soll, braucht er jedoch einen kurzen Anbieter-/Leistungszugang und einen erreichbaren nächsten Schritt. Erst der Vergleich aller sieben Kandidaten entscheidet, ob diese Aufgabe hier ergänzt oder in einer eigenen Website-Verkaufsseite gebündelt wird.

Quelle: [Quellenprüfung P2](Quellenpruefung.md), sichtbarer Einstieg am 09.10.2026.

### 2. Umfang und Bildhöhe erschweren die schnelle Orientierung zu einzelnen Apps

**Live-Beobachtung und UX-Bewertung, Priorität mittel:** Desktop wirkt mit großer Überschrift und Telefonfächer eindrucksvoll. In der schmalen Ansicht bleiben vier Navigationspills für Apps, Spiele, War Stories und Dev Log sichtbar. Die Appkarte ist lesbar, aber das große Produktbild nimmt viel Höhe ein; Beschreibung und Handlungsweg können erst weiter unten liegen. Lange Produkt- und Technikbeschreibungen sind für nichttechnische Besucher viel Information auf einmal.

Eine kleine sinnvolle Verbesserung wäre eine kurze Nutzenzeile, Produktstatus und unmittelbarer Produktlink je Karte vor zusätzlichen technischen Details. Hintergrundgeschichten und Technik dürfen erhalten bleiben, sollten aber den schnellen Überblick ergänzen. Eine belegte Nutzer- oder Conversionwirkung wurde nicht gemessen.

Quelle: Live-Appbereich auf Desktop/Mobil, [Screenshots](screenshots/manifest.json); aktiver Kartenaufbau in der [Quellenprüfung](Quellenpruefung.md).

### 3. Die Produktzuordnung stimmt weitgehend; Bilder und Versprechen sind kein Releasebeweis

**Quellabgleich, Priorität mittel:** Mirror, ZeroHero, between und MewTrack verlinken die bereits erfassten Package-IDs. MewTrack wird korrekt als Kotlin-/Compose-App für private Fotofortschrittsvergleiche mit Smart Capture beschrieben; stabile Pose und automatischer Aufnahme-Countdown sind im vorhandenen nativen Quellenbericht belegt, die tatsächliche Kameraqualität bleibt ungetestet. ZeroHero wird auf der Portfolioseite mit Quests beworben, während der geprüfte aktuelle Appquellstand Quests ausdrücklich deaktiviert. Das ist eine konkrete Abweichung zur lokalen Reviewbasis, kein Nachweis einer falschen Funktion im veröffentlichten Binary. Auch ZeroHeros Privat-/Offlineversprechen und Mirrors veröffentlichte Fassung gegenüber dem lokalen RelateLens-Relaunch müssen mit dem jeweils gemeinten Release zusammenpassen. Die vorhandenen Appberichte bleiben die Grundlage für tatsächlich geprüfte Funktionen und Prüfgrenzen.

Die sechs Dashboardgames sind als Websiteinhalte auffindbar: vier im Hauptbereich, More Than Wombat im Archiv und GALALAXY dort unter „Void Drift: Galaxy Survivor“. Das ist eine Darstellungsauswahl, keine neue Qualitätsbewertung oder Freigabe zur Stilllegung dieser Spiele. Weitere Apps/Games des Portfolios erweitern den vereinbarten Bestand nicht automatisch.

Quelle: [Quellenprüfung P3](Quellenpruefung.md) und verlinkte App-/Spielebestände. Die verlinkten Spiele wurden in dieser Grundanalyse nicht gespielt.

### 4. Externe Bilder und historisches Logbuch brauchen eine einfache Pflegegrundlage

**Quellbefund, Priorität niedrig:** Viele Bilder hängen von `portfolio2` und Marketing-/README-Dateien anderer GitHub-Projekte ab. Markenbild, Gameplayclips und das Logbuch sind hingegen in der großen HTML-Datei eingebettet. Das HTML ist bereits rund 1,73 MB groß, bevor weitere Ressourcen geladen werden. Dies ist eine Dateigröße, keine gemessene schlechte Ladezeit.

Für spätere Pflege wäre ein eigener, eindeutig zugeordneter Bildbestand hilfreich. Das Logbuch beschreibt einen historischen Stand 25.08.2026 und sollte als solcher gelesen werden; es bestätigt nicht den aktuellen Produktzustand am 09.10.2026. Ein kompletter Performance- oder Hostingumbau folgt aus diesem Erstdurchlauf nicht.

Quelle: [Quellenprüfung P4](Quellenpruefung.md). Keine vollständige Bild-/Linkmatrix oder Performanceprofilierung ausgeführt.

### 5. Die bewusste Sprachauswahl könnte beim Neuladen verloren gehen

**Quellbefund, Priorität niedrig:** Der Code schreibt die Sprachauswahl in `localStorage`, liest beim Start aber nur die Browsersprache. Das ist ein konkreter Hinweis auf fehlende Wiederherstellung einer bewusst abweichenden Auswahl.

**Prüfgrenze:** Ein Sprachwechsel mit anschließendem Neuladen wurde in diesem Erstdurchlauf nicht bedient. Deshalb steht hier ein Codebefund, kein behaupteter reproduzierter Laufzeitfehler. Ein späterer kurzer Gegencheck und gegebenenfalls wenige Zeilen Korrektur reichen; die grundsätzlich vorhandene Zweisprachigkeit muss nicht neu aufgebaut werden.

Quelle: [Quellenprüfung P5](Quellenpruefung.md), `index.html` Zeilen 2275–2285.

## Drei überschaubare nächste Maßnahmen

1. **Rolle und ersten nächsten Schritt festlegen.** Als Apps-/Games-Portfolio vorhandene Struktur nutzen; bei Website-Verkauf als Ziel einen kurzen Leistungszugang und Kontakt ergänzen. Noch keine dieser Varianten ist beschlossen.
2. **Karten für den schnellen Überblick staffeln.** Nutzen, Produktstatus und Link früh zeigen; lange Technik-/Hintergrundtexte als ergänzende Ebene erhalten. Mobil mit den vorhandenen Screens und einem kurzen Bediencheck prüfen.
3. **Aktualität und kleine Bedienrisiken abgleichen.** Releasebilder/-versprechen, externe Bildpfade und Sprache nach Neuladen prüfen; nur bestätigte Probleme in einem begrenzten Pflegeupdate ändern. Historische Entwicklungsgeschichten weiter als Historie kennzeichnen.

## Was offen bleibt

Nutzerwirkung, vollständige App-/Spiel-Linkprüfung, sämtliche Archive-/Geschichtenansichten, Sprachauswahl nach Reload, Performanceprofil, Analytics, Suchranking und eine Rechts-/Datenschutzprüfung bleiben offen. Keine Empfehlung ist umgesetzt. Die Seite ist eine plausible Portfolio-Grundlage; die gemeinsame strategische Auswahl erfolgt erst nach dem Vergleich aller sieben Webauftritte.
