# Portfolio3 – begrenzte Quellenprüfung

Stand: **09.10.2026**. Ergänzung zur visuellen Grundanalyse. Grundlage ist die öffentlich abrufbare aktuelle GitHub-Quelle; ein eindeutig zugeordneter ursprünglicher lokaler Checkout ist weiterhin nicht bestätigt. Der verwandte Ordner `Documents\portfolio` wurde nicht als Portfolio3 ausgegeben.

## Geprüfter Stand

- Repository: [emfau88/Portfolio3](https://github.com/emfau88/Portfolio3), Standardbranch `main`.
- Lesend abgefragter HEAD: **056fad1b33c9dc11501dd60ab2432dd8278da2c9**, Commit „Rename index-63.html to index.html“, **30.08.2026, 20:37:11 UTC**.
- Startseitenblob: **4ce21f51ed820d881c0652af524ffd707509d6ac**, **1.730.691 Bytes**, SHA256 **6667e4333fb39a3467d0a6adb431de939381060d7d0011ee7a10f6afe17d527f**.
- Eine unveränderte Kopie dieses öffentlichen HTML-Blobs liegt ausschließlich in der ignorierten lokalen Ablage `analysen/portfolio3/runtime/index.html`. Kein neuer Originalcheckout wurde behauptet und keine Portfolio3-Datei verändert.
- Öffentlich dokumentierter Pages-Einstieg: [Portfolio3](https://emfau88.github.io/Portfolio3/). Gleichheit von GitHub-Quelle und sämtlichen derzeit ausgelieferten Ressourcen folgt nicht allein aus dem Commit; die Live-Prüfung ist separat dokumentiert.

## Aktive Inhalte und Wege

Das HTML enthält einen normalen scrollbaren Projektauftritt mit Apps, Browsergames, Technikübersicht und ausklappbarem Archiv. Die wichtigsten Wege sind `#apps`, `#app-showcase`, `#games`, `#core-arena`, `#other-games` und `#archive`. Zusätzlich wechseln Hash-Routen zu `#logbook`, `#war-stories`, `#war-stories-zerohero` oder `#war-stories-chargegeist`; das Logbuch liegt als eingebettetes HTML in einem iframe. Es handelt sich nicht um ein begehbares WebGL-Portfolio.

- App-Karussell: **acht Karten**, davon sieben mit einem Play-Link; ExpiryBuddy ist ausdrücklich „On hold“.
- Hauptbereich Browsergames: Core Arena sowie Rooster Rage, HEXFRONT, Kessel-Krawall, StarConquest und Pocket Pier.
- Archiv: **zwölf Karten**, darunter More Than Wombat sowie „Void Drift: Galaxy Survivor“ mit Link zu `galalaxy`.
- Die aktuelle Root-Startseite ist `index.html`. `index2.html` bis `index11.html` sind zusätzliche historische Dateien und wurden nicht als aktive Homepage bewertet.

Quellen: [Navigation und Einstieg, Zeilen 1208–1277](https://github.com/emfau88/Portfolio3/blob/056fad1b33c9dc11501dd60ab2432dd8278da2c9/index.html#L1208), [Karussell, Zeilen 1283–1394](https://github.com/emfau88/Portfolio3/blob/056fad1b33c9dc11501dd60ab2432dd8278da2c9/index.html#L1283), [Hash-Routing, ab Zeile 2317](https://github.com/emfau88/Portfolio3/blob/056fad1b33c9dc11501dd60ab2432dd8278da2c9/index.html#L2317).

## Zentrale Befunde

### P1 – Ein nachvollziehbares Projektportfolio mit echten Produktwegen

**Quellbefund / Stärke:** Produktnamen, kurze Nutzenbeschreibungen, Bilder, Technologien und direkte Play-/Spiel-Links sind getrennt dargestellt. Historische Experimente besitzen einen eigenen Archivbereich, statt vollständig mit dem aktuellen Einstieg zu konkurrieren. Der Technikabschnitt beschreibt praktische Erfahrung und behauptet ausdrücklich kein allgemeines Expertenniveau. Projektgeschichten und Logbuch geben zusätzliche Hintergrundinformation.

**Einordnung:** Für eine persönliche Games-/Apps-Portfolioseite ist die vorhandene Struktur grundsätzlich brauchbar. Die Grundanalyse muss im Browser noch beurteilen, wie leicht die lange Seite, das App-Karussell und die Unteransichten tatsächlich zu erfassen sind. Die bloße Existenz von Testbeschreibungen in Produkttexten ist kein von dieser Analyse erneut ausgeführter Spieltest.

Quellen: `index.html` **1283–1436, 1473–1571, 1572–1718**; [Projekt- und Technikabschnitt](https://github.com/emfau88/Portfolio3/blob/056fad1b33c9dc11501dd60ab2432dd8278da2c9/index.html#L1283).

### P2 – Für Website-Verkauf fehlen Angebot und unmittelbarer Anfrageweg

**Quellbefund / hoher Bedarf nur bei kommerziellem Homepageziel:** Der Einstieg stellt Android-Apps und kleine digitale Produkte vor. Die aktive Seite bietet keine erkennbare Website-Dienstleistung, keine Preise oder Angebotsstruktur für Kunden und keine Kontaktsektion. Im gesamten Startseitenquelltext wurde kein `mailto:` gefunden; die Navigation enthält keine Kontaktoption, der Footer nur Urheber-/Portfoliohinweis.

**Einordnung:** Als Produktportfolio ist diese Auswahl schlüssig. Soll dieselbe Seite Webkunden gewinnen, braucht sie einen kurzen Anbieter-/Leistungszugang und einen konkreten Kontaktweg. Dies ist eine Empfehlung für diese mögliche Rolle; die zentrale Homepage-Strategie ist noch nicht entschieden. Fehlende Rechts-/Datenschutzhinweise wurden hier lediglich als fehlende sichtbare Verlinkung erfasst, nicht rechtlich bewertet.

Quellen: `index.html` **1212–1218, 1247–1249, 1716–1718**; [Footer](https://github.com/emfau88/Portfolio3/blob/056fad1b33c9dc11501dd60ab2432dd8278da2c9/index.html#L1716).

### P3 – Katalogzuordnung ist überwiegend konsistent; Produktversprechen brauchen Release-Abgleich

**Quellabgleich:** Die vier für diesen Auftrag erfassten Apps verlinken dieselben Package-IDs wie der Bestand: Mirror `com.energycrafted.mirror`, ZeroHero `com.energycrafted.zerohero`, between `com.energycrafted.between` und MewTrack `com.chargegeist.mew`. MewTrack wird korrekt als Kotlin-/Compose-App und privater Fotofortschrittsvergleich beschrieben; die Quelle verspricht dabei keine körperliche Wirksamkeit. Vier der sechs Dashboardgames sind im Hauptbereich, GALALAXY unter einem anderen Anzeigetitel und More Than Wombat im Archiv erreichbar. Der breitere Katalog mit ChargeGeist, MarschLegenden, PflegeNavigator, StarConquest und Pocket Pier erweitert den angefragten Analyseumfang nicht automatisch.

**Konkreter Abgleich und offene Releasegrenze:** ZeroHero wird mit „XP & quests“ beworben, obwohl der geprüfte aktuelle lokale Appstand Quests ausdrücklich deaktiviert (`lib/core/flags.dart:1`, dokumentiert im ZeroHero-Codebericht). Level und Abzeichen sind deshalb nicht als aktive Quests zu werten. Das ist eine Abweichung zur lokalen Reviewbasis, kein nachgewiesenes Fehlversprechen des veröffentlichten Binary. Auch „Privacy-first“ und „Offline first“ benötigen den schon offenen produktiven Analytics-/Datenflusscheck. Mirror wird als Reflexions-/Relationship-Clarity-App beschrieben; die Trennung zwischen veröffentlichtem Mirror und lokalem RelateLens-Relaunch bleibt wichtig. MewTracks stabile Pose und automatischer 3-2-1-Aufnahme-Countdown sind dagegen im vorhandenen nativen Codebericht belegt; Kamerazuverlässigkeit im Play-Paket ist weiterhin nicht nativ bedient. Die Portfolioseite beweist allein keine Releasefunktion. Ältere Bilder aus `portfolio2` müssen später mit der tatsächlich gewünschten Releasefassung abgeglichen werden.

Quellen: `index.html` **1289–1320, 1341–1347, 1493, 1512, 1526, 1539, 1664–1688**; Gegenquellen: [ZeroHero-Codeprüfung](../zerohero/ZeroHero-code-review.md), [ZeroHero-Pilot](../zerohero/ZeroHero-Pilotanalyse.md), [Mirror-Pilot](../mirror/Mirror-Pilotanalyse.md), [MewTrack-Codeprüfung](../mewtrack/MewTrack-code-review.md), [MewTrack-Pilot](../mewtrack/MewTrack-Pilotanalyse.md), [Spielebestand](../../spiele-bestand.json), [Appbestand](../../apps-bestand.json).

### P4 – Inhaltspflege und Bildversorgung hängen von anderen Projekten ab

**Quellbefund:** Viele App- und Archivbilder werden aus `emfau88.github.io/portfolio2/assets/` geladen, Gamebilder aus README-/Marketingpfaden anderer GitHub-Repositories. Drei Gameplayclips, das Markenbild und das Logbuch sind dagegen in der HTML-Datei eingebettet. Die Startseite ist dadurch bereits **1,73 MB HTML vor zusätzlichen Bildern/Fonts** groß. Google-Fonts-CSS und ein Cloudflare-Analytics-Script sind externe Ressourcen. Aus dieser Dateigröße wurde keine konkrete Ladezeit oder Core-Web-Vitals-Note abgeleitet.

**Einordnung:** Externe Dateien können sich unabhängig ändern oder wegfallen; ein konsolidierter eigener Bildbestand würde spätere Pflege erleichtern. Ein vollständiger Performanceumbau ist aus der Quellenprüfung nicht nötig. Das Logbuch beschreibt ausdrücklich einen historischen Stand **25.08.2026**; darin enthaltene Aktivität ist kein aktueller Entwicklungsstatus am 09.10.2026. Keine Besucher- oder Conversionwerte wurden gelesen.

Quellen: `index.html` **10, 1255–1267, 1481, 1507, 1521, 1534, 2155–2178, 2352**; [externe Produktbilder](https://github.com/emfau88/Portfolio3/blob/056fad1b33c9dc11501dd60ab2432dd8278da2c9/index.html#L1255).

### P5 – Sprachauswahl wird geschrieben, beim Start aber nicht wieder gelesen

**Quellbefund / begrenztes Bedienrisiko:** `setLanguage` schreibt die bewusste Auswahl in `localStorage` unter `emfau-lang`. Die Initialisierung bestimmt die Sprache anschließend ausschließlich über `navigator.languages` beziehungsweise `navigator.language`; ein `localStorage.getItem` kommt in der aktiven Startseite nicht vor. Eine vom Browser abweichende Auswahl könnte deshalb nach Neuladen wieder verloren gehen.

**Prüfstatus:** Dieser Bericht dokumentiert den Codepfad. Ein tatsächlich beobachteter Sprachwechsel/Reload gehört in den Browserbericht. Eine kleine Korrektur wäre bei Bestätigung angemessen; hier wurde nichts geändert. Die Zweisprachigkeit und das Übertragen der Auswahl in die Logbuch-/Geschichtenansichten sind grundsätzlich vorhanden.

Quelle: `index.html` **2248–2287**; [Initialisierung und Speicherung](https://github.com/emfau88/Portfolio3/blob/056fad1b33c9dc11501dd60ab2432dd8278da2c9/index.html#L2275).

## Prüfgrenzen und kleine nächste Maßnahmen

Die öffentliche Quelle und die darin aktiven Seitenwege sind geprüft. **Nicht ausgeführt:** native Appprüfung, neues Spielen aller verlinkten Games, vollständige externe Link-/Bildmatrix, Performanceprofil, Suchrankingprüfung, Inhalts-/Rechtsprüfung aller archivierten Seiten oder Nutzerstudie. Die visuelle Grundanalyse ergänzt tatsächliche Desktop-/Mobilbeobachtungen.

Eine überschaubare spätere Verbesserung wäre: gewünschten Zweck am Einstieg deutlich machen, bei Kundenakquise einen Kontaktweg ergänzen, Appbilder/Versprechen mit dem jeweiligen Release abgleichen und gegebenenfalls die Sprachpersistenz reparieren. Ob diese Seite die zentrale Homepage oder ein eigener Produktbereich wird, folgt aus dem Vergleich aller sieben Kandidaten.
