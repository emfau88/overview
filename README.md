# Projektübersicht emfau

[**Dashboard öffnen →**](https://emfau88.github.io/overview/)

[**Kompaktübersicht: Was ist erledigt, was fehlt noch? →**](KOMPAKTUEBERSICHT.md)

[**Neu: drei begründete nächste Schritte →**](KOMPAKTUEBERSICHT.md#meine-empfehlung-drei-nächste-schritte)

[**Alle Android-Arbeiten vom 10.10.2026: Tagesstand und Einstieg für ein weiteres Review →**](analysen/android/Tagesstand-2026-10-10.md)

**Heutige Nachprüfungen zusätzlich dokumentiert:** [ZeroHero](analysen/zerohero/Nachpruefung-2026-10-10.md) trennt Quelle/Web 25, ältere APK 24, lokal bedientes AAB 26 und Play 25. [MewTrack](analysen/mewtrack/Nachpruefung-2026-10-10.md) ergänzt 45 bestandene JVM-Tests, native Debug-Gegenproben und drei konkrete lokale AAB-Fehlerpfade. Optik-/UX-Vorschläge, aktive Quellenanker und offene Grenzen stehen in den datierten Nachträgen. Frühere Pilotberichte bleiben erhalten. **Keine ZeroHero-/MewTrack-Appkorrektur**; MewTracks native Prüfrunde teilweise ausgeführt, weiter offen. Unverändert **15 Analysen, 49 Maßnahmen und 2 abgeschlossene Maßnahmen**.

Ein externer Chat kann Auftrag, Methoden und Folgerungen anhand dieser Dokumentation beurteilen. Eine unabhängige technische Wiederholung benötigt zusätzlich die separat lokalen Appquellen und Prüfartefakte; Apppakete, Schlüssel und Rohprotokolle werden nicht veröffentlicht.

**Lokaler Heartvia-Schritt seit 10.10.2026 übernommen und geprüft:** **Heartvia: Love Tarot & Clarity 1.1.1+17**, gleiche Mirror-Paket-ID. Antworttreue sowie Daten/Tageswechsel sind abgeschlossen: **2/49 Maßnahmen insgesamt, 2/4 bei Mirror, weiterhin 2/3 Phasen**. 195 Fluttertests bestanden, analyze ohne Befunde; Android-34-Debugtest und bytegleiche Originalübernahme belegt, Änderungen noch uncommitted. Signiertes Releasebundle samt Hash-/Signierungsprüfung und begrenzter nativer Release-Nachprobe fertig; englische ASO-Felder 30/69/1.306 und Icon lokal exportiert. AAB 17 und Name/Icon/englische Texte sind jetzt in der richtigen Play-App gespeichert; Einreichung bestätigt. Console-Nachkontrolle am 10.10. um 19:12 MESZ bestätigt laufende Google-Überprüfung; Google-Freigabe und öffentliche Aktivierung noch ausstehend. Bestehende Screenshots und Featuregrafik unverändert. **Anschließend vorgeschlagen:** Homepage aus Studio/shop/Portfolio3 sowie CORE-Training, weiterhin ungewählt. [Heartvia-Nachtrag](analysen/mirror/Heartvia-Update-2026-10-10.md) · [Storeentwurf](analysen/mirror/Heartvia-Store-Entwurf.md).

Der Projektkompass ist der zentrale Arbeitsstand: ursprüngliche Ziele und Nachrichten, 17 Produkte in drei Bereichen, lokale Pfade, ausführliche Analyseberichte, Kennzahlen mit ihren Aussagegrenzen und offene nächste Schritte. Er funktioniert auch offline durch Öffnen von `index.html`. GitHub Actions veröffentlicht ihn nach Änderungen an `main` automatisch auf GitHub Pages.

Stand: **10.10.2026**. Bestandsaufnahme der angefragten Projekte: sechs Spiele aus dem Dashboard, sieben Web-Repositories und vier Android-Apps. **Fünfzehn begrenzte Analysen sind dokumentiert: drei Android-Piloten, sieben Web-Grundanalysen und fünf Spiel-Grundanalysen.** Die ausgewählte erste Analysebasis ist damit vollständig. Enthalten sind Beschreibungen, Repository-Zuordnungen, lokale Pfade und ausführliche Befunde mit ihren jeweiligen Prüfgrenzen; eine vollständige Prüfung aller Funktionen oder aller 17 Produkte ist damit nicht behauptet.

**Zusätzlicher kompakter Fortschritt:** Das Dashboard ergänzt die bestehenden Inhalte um drei Arbeitsphasen pro Produkt: **1. Bestand erfasst · 2. Analyse dokumentiert · 3. vorgeschlagene Maßnahmen umgesetzt und geprüft.** Erledigte Phasen und abgeschlossene Analysen werden grün markiert; die noch fehlende Umsetzung bleibt neutral. Aktuell stehen die 15 analysierten Produkte bei **2/3 Phasen**, Between und das bewusst zurückgestellte MORE THAN WOMBAT bei **1/3**. Die getrennte Maßnahmenanzeige zählt tatsächlich abgeschlossene Vorschläge: derzeit **2 von 49 dokumentierten Maßnahmen**; beide bei Mirror/Heartvia (**2/4**). Release/Store und echter Nutzerversuch bleiben dort offen.

Phase 3 gilt erst als erledigt, wenn alle dokumentierten Maßnahmen des Produkts tatsächlich umgesetzt und passend geprüft sind. Offene Maßnahmen machen eine fertige Analyse nicht wieder offen. Die Anzeige zählt Arbeitsphasen und dokumentierte Maßnahmen; sie ist keine Schätzung von Zeit, Aufwand, Produktqualität oder wirtschaftlichem Erfolg und keine automatische Freigabe zur Umsetzung sämtlicher Vorschläge. [Phasen und Restpunkte kompakt ansehen](KOMPAKTUEBERSICHT.md).

**Android-Produktchecks:** Die historischen Piloten für [ZeroHero](analysen/zerohero/ZeroHero-Pilotanalyse.md), [Mirror / RelateLens](analysen/mirror/Mirror-Pilotanalyse.md) und [MewTrack](analysen/mewtrack/MewTrack-Pilotanalyse.md) bleiben mit ihren eigenen Prüfgrenzen erhalten. **Neu für Mirror am 10.10.:** Nach begrenzter nativer AAB-16-Nachprüfung wurde der [Heartvia-Stand 1.1.1+17](analysen/mirror/Heartvia-Update-2026-10-10.md) lokal übernommen und passend geprüft. Frühere RelateLens-Quelle, lokale Testbinaries und veröffentlichter Mirror 1.0.13 bleiben getrennt; kein echter Play-Upgrade-Nachweis. Bundleupload und Storeänderungen nun bestätigt, öffentliche Aktivierung noch ausstehend; Between bleibt inventarisiert.

**Sieben Web-Grundanalysen abgeschlossen:** Die öffentlichen Onlineauftritte wurden auf Desktop und in schmaler Mobilansicht angesehen, mit ihren Quellen abgeglichen und in begrenzten Navigationsabläufen geprüft. **15 neue JPEG-Screenshots** mit Herkunftsnachweisen ergänzen die Berichte. Zweck, Einstieg, Optik, Bedienung, konkrete Befunde und wenige nächste Maßnahmen sind im [Vergleich der Onlineauftritte](analysen/onlineauftritt/Grundanalyse-Vergleich.md) sowie den sieben Einzelanalysen festgehalten. Keine Originalwebsite wurde verändert, keine Zahlung ausgelöst und kein Formular abgesendet. Ein vollständig geprüfter Kauf-/Lieferablauf, Performance-, Markt- oder Rechtsaudit ist damit nicht behauptet.

**Fünf Spiel-Grundanalysen abgeschlossen:** [HEXFRONT](analysen/hexfront/Grundanalyse.md), [GALALAXY](analysen/galalaxy/Grundanalyse.md), [ROOSTER RAGE](analysen/rooster-rage/Grundanalyse.md), [CORE ARENA](analysen/core-arena/Grundanalyse.md) und [KESSELKRAWALL](analysen/kesselkrawall/Grundanalyse.md) wurden anhand tatsächlicher Bedienung und gezielter aktiver Quellengegenprüfung untersucht. Vier Checks betreffen öffentliche Browserfassungen; KESSELKRAWALL eine isolierte frische Testkopie. Unveränderte Browseraufnahmen ergänzen die Berichte; Herkunft, Browser-Viewport und Prüfsummen stehen in den jeweiligen Screenshotmanifesten. Umfang und Versionszuordnung unterscheiden sich je Spiel. Vollständige Kampagnen-/Bossnachweise, echte Touchgeräte, Audio und Langzeitmotivation sind nicht durch diese Grundanalysen abgedeckt; einzelne gespielte Abläufe stehen im jeweiligen Bericht.

**KESSELKRAWALL – abweichende Testherkunft:** Die öffentliche Seite enthielt einen bestehenden Run. Für einen frischen Einstieg wurde deshalb eine isolierte lokale Testkopie des aktuellen öffentlichen main-Commits **83d17ab14ff265559b58652e9040eecef7d7ad51** verwendet. Der vorhandene öffentliche Run wurde nicht zurückgesetzt oder weitergespielt. Lokale Browseraufnahmen sind ausdrücklich als Testkopie dokumentiert; die Identität mit dem öffentlich ausgelieferten Live-Bundle ist nicht bewiesen. [Herkunft der Testbasis](analysen/kesselkrawall/runtime/README.md).

**Aktueller Spieleumfang:** Die Reviewrunde umfasst HEXFRONT, GALALAXY, ROOSTER RAGE, KESSELKRAWALL und CORE ARENA. **MORE THAN WOMBAT und die verwandten beziehungsweise übrigen Games bleiben auf Nutzerwunsch vorerst zurückgestellt.** Der Bestand enthält weiterhin sechs Hauptspiele. Keine Spielverbesserungen wurden umgesetzt.

Der [gemeinsame Spielevergleich](analysen/spiele/Grundvergleich.md) bündelt die fünf Einzelanalysen als Leseschlüssel für die nächste Priorisierung; er zählt nicht als zusätzliche Produktanalyse. **27 unveränderte Spielaufnahmen** sind in den Manifesten dokumentiert: 20 aus vier öffentlichen Spielchecks und sieben aus KESSELKRAWALLs isolierter Testkopie. Aufnahmen belegen nur die jeweils gezeigten Zustände und deren Herkunft.

**Ziel:** zunächst Nutzer und wiederkehrende Nutzung gewinnen. ZeroHero und Mirror sollen anschließend grundsätzlich auch monetarisiert werden; ein konkretes Preismodell ist noch offen. Eine Veröffentlichung allein ist kein garantierter Algorithmus-Schub.

[Mirror-Bilder mit Herkunftsnachweis](analysen/mirror/screenshots/README.md): sechs vorhandene lokale UI-Previewbilder vom 07.10.2026 mit Testdaten, keine Aufnahmen eines heutigen Android- oder Play-Release-Tests. Die Bilder sind außerdem im Dashboard unter Mirror → Prüfgrenzen eingebettet.

## Spiele

Quelle ist das [Dashboard](https://github.com/emfau88/dashboard) in [Documents/dashboard](C:/Users/madde/Documents/dashboard). Das lokale Register [data.json](C:/Users/madde/Documents/dashboard/data.json) hat den Stand **07.10.2026** und enthält diese sechs Spiele. Die lokalen Zuordnungen wurden anhand der Git-Remotes bestätigt.

| Spiel / Repository | Knappe Beschreibung | Bestätigter lokaler Projektordner |
|---|---|---|
| **HEXFRONT** / [hexwars](https://github.com/emfau88/hexwars) | Echtzeit-Taktik auf Hexfeldern: Gebiete ausbauen, Truppen verteilen und die gegnerische Basis erobern. | [hexwars](C:/Users/madde/Documents/ChatGPT/hexwars) |
| **GALALAXY** / [galalaxy](https://github.com/emfau88/galalaxy) | Weltraum-Arcade-Survivor mit automatisch feuerndem Schiff, Gegnerflotten, Bossen und Upgrades. | [galaxy](C:/Users/madde/Documents/galaxy) |
| **ROOSTER RAGE** / [RoosterRage](https://github.com/emfau88/RoosterRage) | Top-down-Action-Roguelite mit Kampf-Hähnen, Eierwaffen und Gegnerwellen. | [RoosterRage](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage) |
| **KESSELKRAWALL** / [KesselKrawall](https://github.com/emfau88/KesselKrawall) | Magischer Browser-Autobattler: Zutaten kaufen, kombinieren und verschmelzen; anschließend kämpft der Kessel automatisch. Auch als **Cauldron Rumble** bezeichnet. | [kesselkrawall](C:/Users/madde/Documents/kesselkrawall) |
| **CORE ARENA** / [CTF-3.0](https://github.com/emfau88/CTF-3.0) | 2D-Arena-/Capture-the-Flag-Shooter mit Waffen und Spielzielen; die dokumentierte Browserfassung spielt gegen Bots. | [CTF-3.0](C:/Users/madde/Documents/CTF-3.0) |
| **MORE THAN WOMBAT** / [MoreThanWombat](https://github.com/emfau88/MoreThanWombat) | Comicartiger 2.5D-Arcade-Brawler mit kurzen Sessions, Spezialangriffen und einer Schrottplatz-Stage. | [New project 9](<C:/Users/madde/Documents/New project 9>) |

| Spielcheck | Aktueller Stand | Bericht |
|---|---|---|
| HEXFRONT | Begrenzte öffentliche Spiel-Grundanalyse abgeschlossen | [Analyse](analysen/hexfront/Grundanalyse.md) |
| GALALAXY | Begrenzte öffentliche Spiel-Grundanalyse abgeschlossen | [Analyse](analysen/galalaxy/Grundanalyse.md) |
| ROOSTER RAGE | Begrenzte öffentliche Spiel-Grundanalyse abgeschlossen | [Analyse](analysen/rooster-rage/Grundanalyse.md) |
| CORE ARENA | Begrenzte öffentliche Spiel-Grundanalyse abgeschlossen | [Analyse](analysen/core-arena/Grundanalyse.md) |
| KESSELKRAWALL | Begrenzte Grundanalyse an isolierter frischer Testkopie abgeschlossen | [Analyse](analysen/kesselkrawall/Grundanalyse.md) |
| MORE THAN WOMBAT | Nur Bestand; vom Nutzer vorerst zurückgestellt | Kein Spieltest in dieser Runde |

Für CORE ARENA wurden Nutzereindrücke zu Bots, Sci-Fi-Menüs und Waffen-/Munitionsdrops als Prüffragen aufgenommen. Das heutige unabhängige Urteil beruht auf eigener Bedienung und gezielter aktiver Quellengegenprüfung; die ursprünglichen Eindrücke werden nicht pauschal als festgestellte Mängel übernommen. Der [Bericht](analysen/core-arena/Grundanalyse.md) trennt belegte Trainingsbefunde von weiter offenen Balance- und Pickupfragen.

Weitere gefundene Repositories mit Bezug zu diesen Spielen:

| Repository | Grobe Zuordnung | Lokaler Pfad |
|---|---|---|
| [MoreThanWombarUnity](https://github.com/emfau88/MoreThanWombarUnity) | Eigenständiger Unity-Versuch eines 3D-/2.5D-Beat-'em-ups mit MoreThanWombat als Designreferenz. Der Name enthält tatsächlich **Wombar**. | [MoreThanWombarUnity](C:/Users/madde/Documents/MoreThanWombarUnity) |
| [KesselKrawall-3-D](https://github.com/emfau88/KesselKrawall-3-D) | Eigenständiger 3D-Neuaufbau von KesselKrawall als Browsergame. | [KesselKrawall3D](C:/Users/madde/Documents/ChatGPT/KesselKrawall3D) |
| [territory-tide](https://github.com/emfau88/territory-tide) | Laut GitHub-Beschreibung eine für CrazyGames angepasste HEXFRONT-Variante. | In der begrenzten Suche nicht gefunden. |
| [CTF](https://github.com/emfau88/CTF) | Weitere CTF-Version; genaue Beziehung zu CORE ARENA noch ungeprüft. | [CTF](C:/Users/madde/Documents/CTF) |
| [CTF-2.0](https://github.com/emfau88/CTF-2.0) | Weitere CTF-Version; genaue Beziehung zu CORE ARENA noch ungeprüft. | In der begrenzten Suche nicht gefunden. |

Zuordnungshinweise:

- [Documents/ROOSTER](C:/Users/madde/Documents/ROOSTER) ist ein zweiter Checkout von RoosterRage mit älterem HEAD und zahlreichen vorhandenen Änderungen. Die heutige [Quellenprüfung](analysen/rooster-rage/Quellenpruefung.md) ordnet beide Arbeitsstände zu: Die gezielten Spielquellen des primären Checkouts entsprechen dem durch öffentliche Buildmetadaten bestätigten Commit; dessen übrige lokale Portal-/Y8-Arbeit bleibt getrennt.
- [Documents/CTF 3.0](<C:/Users/madde/Documents/CTF 3.0>) ist ein anderer Ordner ohne gefundenen `origin`-Remote. Bestätigt ist **CTF-3.0 mit Bindestrich**.
- Andere Spiele außerhalb des Dashboard-Registers wurden nicht systematisch beschrieben. Die öffentliche Repositoryliste ist zusätzlich gespeichert, damit dieser Umfang später gezielt ergänzt werden kann.

## Onlineauftritt

| Repository | Knappe Beschreibung | Bestätigter lokaler Projektordner |
|---|---|---|
| [LandingGame](https://github.com/emfau88/LandingGame) | emfau-Anbieterwebsite für individuelle Websites für kleine Unternehmen, Gastronomie und Vereine. Enthält Gestaltungsvarianten, einen Studio-Entwurf und Referenz-/Branchenkonzepte. | [Landing Page](<C:/Users/madde/Documents/Landing Page>) |
| [shop](https://github.com/emfau88/shop) | Verkaufspräsentation für Unternehmenswebsites mit eigenem Anbieterauftritt und fünf fiktiven Branchenkonzepten samt Core- und Signature-Seiten. | [Ebay Websites](<C:/Users/madde/Documents/Ebay Websites>), Anwendung unter `website/` |
| [keyofsolomon](https://github.com/emfau88/keyofsolomon) | Einzelprodukt-Verkaufsseite unter Solomon Archive für eine restaurierte Hardcover-Ausgabe von *The Key of Solomon*, mit Produktinformationen und Whop-Bestellzugang. | [keyofsolomon](<C:/Users/madde/Documents/BOOK KEY OF SOLOMON/keyofsolomon>) |
| [Portfolio3](https://github.com/emfau88/Portfolio3) | Persönliches emfau-Portfolio und Projektarchiv für Android-Apps, Browsergames, Experimente und Entwicklungsgeschichten. | Kein eindeutig zugeordneter lokaler Checkout gefunden. |
| [blueyard](https://github.com/emfau88/blueyard) | Zweisprachige Landingpage für Web / Games / Labs mit scrollgesteuerter 3D-Szene und Bereichsauswahl. | [bluebyte](C:/Users/madde/Documents/bluebyte) |
| [phantom](https://github.com/emfau88/phantom) | Räumliches Portfolio mit gebogener Projektwand, Filtern und Projekt-Detailseiten. | [phantom](C:/Users/madde/Documents/phantom) |
| [basement](https://github.com/emfau88/basement) | Virtuelles 3D-Studio als Portfolio für Games, Apps, Webprojekte und archivierte Experimente. | [basement](C:/Users/madde/Documents/basement) |

Verwandte lokale Entwürfe:

- [Documents/portfolio](C:/Users/madde/Documents/portfolio) enthält einen älteren zweisprachigen Game-&-App-Developer-Auftritt mit zwei HTML-Dateien. Ohne Git-Konfiguration ist eine Zuordnung zu Portfolio3 **nicht bestätigt**.
- Im [übergeordneten Solomon-Ordner](<C:/Users/madde/Documents/BOOK KEY OF SOLOMON>) liegen außerdem `keyofsolomon_repo_ready`, `solomon_archive_highend_site` und `solomon-umami-whop`.

In [online-bestand.json](online-bestand.json) stehen die aus Projektquellen übernommenen Onlineadressen und Quellnachweise der ursprünglichen groben Bestandsaufnahme. Dieser Snapshot bleibt als ursprüngliche Quelle erhalten; die späteren Live-Beobachtungen und Prüfgrenzen stehen in den abgeschlossenen Grundanalysen.

| Webprojekt | Grundanalyse | Dashboard |
|---|---|---|
| LandingGame / Landing Page | [Bericht](analysen/landinggame/Grundanalyse.md) | [Analyse öffnen](https://emfau88.github.io/overview/#results/landinggame/review) |
| shop | [Bericht](analysen/shop/Grundanalyse.md) | [Analyse öffnen](https://emfau88.github.io/overview/#results/shop/review) |
| keyofsolomon | [Bericht](analysen/keyofsolomon/Grundanalyse.md) | [Analyse öffnen](https://emfau88.github.io/overview/#results/keyofsolomon/review) |
| Portfolio3 | [Bericht](analysen/portfolio3/Grundanalyse.md) | [Analyse öffnen](https://emfau88.github.io/overview/#results/portfolio3/review) |
| blueyard | [Bericht](analysen/blueyard/Grundanalyse.md) | [Analyse öffnen](https://emfau88.github.io/overview/#results/blueyard/review) |
| phantom | [Bericht](analysen/phantom/Grundanalyse.md) | [Analyse öffnen](https://emfau88.github.io/overview/#results/phantom/review) |
| basement | [Bericht](analysen/basement/Grundanalyse.md) | [Analyse öffnen](https://emfau88.github.io/overview/#results/basement/review) |

Die endgültige Rolle der zentralen Homepage bleibt offen: Websiteverkauf, persönliche Apps-/Games-Präsenz oder eine verständliche Verbindung beider Aufgaben. Die [vergleichende Grundanalyse](analysen/onlineauftritt/Grundanalyse-Vergleich.md) bildet dafür eine Grundlage, keine bereits umgesetzte Strategie.

## Android-Apps

In dieser Tabelle wurden Projektidentität und Pfade festgehalten. Die Versionen stammen aus lokalen Metadaten. Die Veröffentlichungsstände und die Grenzen gegenüber lokalen Quellen wurden anschließend in den drei verlinkten Pilotberichten separat geprüft.

| App | Bestätigter lokaler Projektordner | Identität / Hinweis |
|---|---|---|
| **ZeroHero** | [ZEROHERO25](C:/Users/madde/flutter_projects/ZEROHERO25) | Flutter, `com.energycrafted.zerohero`; lokale Version `1.0.3+25`. |
| **MewTrack – Flutter-Variante** | [mewtrackflutter](C:/Users/madde/flutter_projects/mewtrackflutter) | Flutter, `com.mewtrack.mewtrack`; lokale Version `1.0.0+1`. |
| **MewTrack – Expo-Variante** | [MEWING](C:/Users/madde/flutter_projects/MEWING) | React Native/Expo: Expo-Konfiguration `com.chargegeist.mew` / `1.0.0+1`, vorhandener Android-Gradle-Stand dagegen `com.mewtrack` / `1.0+1`. |
| **MewTrack – native Android-Variante** | [MEWING 2.0/app](<C:/Users/madde/flutter_projects/MEWING 2.0/app>) | Natives Android-Projekt; Name **MewTrack: Jawline Tracker**, `com.chargegeist.mew`; Version `0.9.4`, Versioncode `13`. |
| **Mirror / Heartvia** | [Mirror](C:/Users/madde/Documents/Mirror) | Flutter, `com.energycrafted.mirror`; **Heartvia: Love Tarot & Clarity 1.1.1+17** lokal übernommen und geprüft, Branch `codex/heartvia-relaunch`, Änderungen uncommitted. Vorherige RelateLens-Version `1.1.0+16` und veröffentlichter Mirror `1.0.13` bleiben getrennt. |
| **Between** / [between](https://github.com/emfau88/between) | [love insight scanner](<C:/Users/madde/flutter_projects/love insight scanner>) | Flutter-Projekt `love_insight_scanner`; Repositoryzuordnung per Git-Remote bestätigt. Lokale Version `1.0.0+20`. |

**MewTrack umfasst drei lokale Implementierungen, nicht drei bestätigte aktive Store-Apps.** In der Play Console ist **MewTrack: Jawline Tracker** mit `com.chargegeist.mew` aufgeführt. Die native Android-Variante unter **MEWING 2.0/app** ist die gewählte Reviewbasis: Paket, Version und Versioncode passen zu Produktionsrelease **13 (0.9.4)** und dem installierten Play-Paket. Identische Quellen zum veröffentlichten Binary sind damit noch nicht bewiesen. Expo enthält widersprüchliche Paketmetadaten, Flutter eine andere App-ID; beide sind separate lokale Varianten.

[Mirror-backups](C:/Users/madde/Documents/Mirror-backups) enthält die Sicherung `mirror-paused-2026-10-07.bundle`, kein separates Arbeitsprojekt. Das öffentliche Repository [mirror-googleplay-formular](https://github.com/emfau88/mirror-googleplay-formular) wurde als zusätzlicher Fund vermerkt; es wurde nicht als App-Quellcode eingeordnet.

## Vorgehen nach der Bestandsaufnahme

Die vorhandenen Ziele reichen für den Einstieg: Bei Android-Apps mehr Downloads und wiederkehrende Nutzer; bei Spielen eine ehrliche Qualitätsprüfung; beim Onlineauftritt die Entscheidung für eine geeignete zentrale Website. Eine große vorgeschaltete Zielklärung ist dafür nicht nötig.

Der Nutzer hat die Reihenfolge präzisiert: zuerst eine breite qualitative Grundlage ergänzen, danach gezielt priorisieren und umsetzen.

1. **Android-Piloten:** ZeroHero, Mirror und MewTrack sind im dokumentierten Umfang abgeschlossen; native Prüfgrenzen bleiben sichtbar. Between ist bisher nur inventarisiert.
2. **Sieben Webauftritte:** Grundanalysen und erster Vergleich sind abgeschlossen. Die endgültige Homepage-Rolle und Umsetzung bleiben offen.
3. **Ausgewählte Spiele-Reviewrunde:** Fünf begrenzte Grundanalysen sind abgeschlossen; öffentliche Spielbeobachtungen und KESSELKRAWALLs isolierte frische Testkopie bleiben getrennt. MORE THAN WOMBAT sowie verwandte und übrige Games bleiben auf Nutzerwunsch zurückgestellt. Links in einem Webportfolio sind kein Spieltest.
4. **Gesamtvergleich und wenige Prioritäten:** vorhandene Stärken, belegte Probleme, offene Fragen und Aufwand zusammenführen. Erst dann kleine konkrete Maßnahmen auswählen, statt alles gleichzeitig umzubauen.
5. **Ausgewählte Umsetzungen:** Appbefunde gegen tatsächliche Android-Releases prüfen, lokale Relaunches getrennt betrachten und erst anhand der gewählten Prioritäten begrenzte Qualitätsupdates, passende Nutzerversuche oder die zentrale Website konkret angehen. Keine Empfehlung ist allein durch ihre Dokumentation umgesetzt.

Die ausgewählte erste Analysebasis ist vollständig: drei Apps, sieben Webauftritte und fünf Games. Das ist keine vollständige Produktprüfung aller Funktionen oder aller 17 Hauptprodukte. Als nächste Etappe werden die vorhandenen Befunde verglichen und wenige Prioritäten gewählt. Die zentrale Homepage-Strategie und native App-Gegenprüfungen bleiben eigene Aufgaben; es wurden keine Verbesserungen an Originalprodukten oder Stores veröffentlicht. Fehlende Daten, unbestätigte Nutzerwirkungen und bewusst zurückgestellter Bestand bleiben sichtbar.

## Quellen und Umfang

Die ursprünglichen Bestandsbeschreibungen beruhen auf README-Dateien und Startseitentexten. Repository-/Ordnerzuordnungen beruhen auf lokalen Git-Remotes beziehungsweise öffentlichen GitHub-Metadaten. Ergänzend wurden drei Android-Piloten, sieben Web-Grundanalysen und fünf begrenzte Spiel-Grundanalysen dokumentiert. Bei Games wurden eigene Bedienbeobachtungen gezielt am Code gegengeprüft. Öffentliche Browserfassungen und isolierte Testkopie bleiben nach Herkunft getrennt. Kurze Sessions ersetzen keine Langzeittests, vollständigen Kampagnen-/Bossnachweise oder echten Spielerreaktionen. MORE THAN WOMBAT, verwandte Games und Between bleiben ohne Produktprüfung. Originalquellen und Store-Einträge wurden nicht verändert; bestehende öffentliche Spielstände wurden nicht zurückgesetzt. Sämtliche Maßnahmen bleiben Vorschläge. Aus einer Website-Navigation folgt kein App-/Spieltest, aus einem geladenen Checkout kein erfolgreicher Kauf.

- [spiele-bestand.json](spiele-bestand.json): sechs Dashboard-Spiele und fünf ergänzende Repositories mit Quellnachweisen.
- [online-bestand.json](online-bestand.json): sieben Web-Repositories und verwandte lokale Entwürfe.
- [apps-bestand.json](apps-bestand.json): vier Apps, MewTrack-Varianten und Mirror-Sicherung.
- [github-repositories.json](github-repositories.json): Snapshot aller **65 öffentlich sichtbaren Repositories** von `emfau88` am 09.10.2026. Diese Gesamtliste ist noch nicht vollständig nach Projektbereichen klassifiziert; private Repositories sind nicht erfasst.

Der Umfang entspricht den angefragten drei Bereichen. Er ist keine vollständige Inventarisierung sämtlicher lokaler Ordner oder aller übrigen Projekte des Kontos.
