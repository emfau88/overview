# Projektübersicht emfau

[**Dashboard öffnen →**](https://emfau88.github.io/overview/)

[**Kompaktübersicht: Was ist erledigt, was fehlt noch? →**](KOMPAKTUEBERSICHT.md)

Der Projektkompass ist der zentrale Arbeitsstand: ursprüngliche Ziele und Nachrichten, 17 Produkte in drei Bereichen, lokale Pfade, ausführliche Analyseberichte, Kennzahlen mit ihren Aussagegrenzen und offene nächste Schritte. Er funktioniert auch offline durch Öffnen von `index.html`. GitHub Actions veröffentlicht ihn nach Änderungen an `main` automatisch auf GitHub Pages.

Stand: **09.10.2026**. Grobe Bestandsaufnahme der angefragten Projekte: Spiele aus dem Dashboard, die sieben genannten Web-Repositories und vier Android-Apps. Enthalten sind kurze Beschreibungen, Repository-Zuordnungen und lokale Pfade. Die Bewertungen werden schrittweise ergänzt.

**Produktchecks:** [ZeroHero](analysen/zerohero/ZeroHero-Pilotanalyse.md) und [Mirror / RelateLens](analysen/mirror/Mirror-Pilotanalyse.md) mit lokaler visueller UX-Prüfung, Store-Prüfung, Code-Gegenprüfung und Play-Console-Kennzahlen. Konkrete kleine nächste Schritte sind vorgeschlagen. Der lokale Mirror-Relaunch 1.1.0+16 ist vom veröffentlichten Mirror 1.0.13 getrennt dokumentiert. Appcode und Store wurden nicht verändert. [MewTrack](analysen/mewtrack/MewTrack-Pilotanalyse.md) ist ebenfalls abgeschlossen: native Produkt- und Layoutquellen, Store und Console wurden geprüft, Release **13 (0.9.4)** ist zugeordnet. Kamera und native UI wurden noch nicht bedient; zwei isolierte Testversuche endeten vor Testausführung an der Buildumgebung. Die fünf gezielten Android-Kernprüfungen bleiben offen; Spiele und Onlineauftritte sind inventarisiert und später separat zu bewerten.

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

Weitere gefundene Repositories mit Bezug zu diesen Spielen:

| Repository | Grobe Zuordnung | Lokaler Pfad |
|---|---|---|
| [MoreThanWombarUnity](https://github.com/emfau88/MoreThanWombarUnity) | Eigenständiger Unity-Versuch eines 3D-/2.5D-Beat-'em-ups mit MoreThanWombat als Designreferenz. Der Name enthält tatsächlich **Wombar**. | [MoreThanWombarUnity](C:/Users/madde/Documents/MoreThanWombarUnity) |
| [KesselKrawall-3-D](https://github.com/emfau88/KesselKrawall-3-D) | Eigenständiger 3D-Neuaufbau von KesselKrawall als Browsergame. | [KesselKrawall3D](C:/Users/madde/Documents/ChatGPT/KesselKrawall3D) |
| [territory-tide](https://github.com/emfau88/territory-tide) | Laut GitHub-Beschreibung eine für CrazyGames angepasste HEXFRONT-Variante. | In der begrenzten Suche nicht gefunden. |
| [CTF](https://github.com/emfau88/CTF) | Weitere CTF-Version; genaue Beziehung zu CORE ARENA noch ungeprüft. | [CTF](C:/Users/madde/Documents/CTF) |
| [CTF-2.0](https://github.com/emfau88/CTF-2.0) | Weitere CTF-Version; genaue Beziehung zu CORE ARENA noch ungeprüft. | In der begrenzten Suche nicht gefunden. |

Zuordnungshinweise:

- [Documents/ROOSTER](C:/Users/madde/Documents/ROOSTER) ist ein zweiter Checkout von RoosterRage. Der zuletzt dokumentierte lokale Commit stammt dort vom 09.08.2026, im oben verlinkten Checkout vom 05.10.2026. Uncommittete Änderungen und der maßgebliche Arbeitsstand wurden nicht verglichen.
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

In [online-bestand.json](online-bestand.json) stehen die aus Projektquellen übernommenen Onlineadressen und die Quellnachweise. Die Seiten wurden nicht auf Erreichbarkeit, Nutzererlebnis oder Veröffentlichungsstand geprüft.

## Android-Apps

In dieser Tabelle wurden Projektidentität und Pfade festgehalten. Die Versionen stammen aus lokalen Metadaten. Die Veröffentlichungsstände und die Grenzen gegenüber lokalen Quellen wurden anschließend in den drei verlinkten Pilotberichten separat geprüft.

| App | Bestätigter lokaler Projektordner | Identität / Hinweis |
|---|---|---|
| **ZeroHero** | [ZEROHERO25](C:/Users/madde/flutter_projects/ZEROHERO25) | Flutter, `com.energycrafted.zerohero`; lokale Version `1.0.3+25`. |
| **MewTrack – Flutter-Variante** | [mewtrackflutter](C:/Users/madde/flutter_projects/mewtrackflutter) | Flutter, `com.mewtrack.mewtrack`; lokale Version `1.0.0+1`. |
| **MewTrack – Expo-Variante** | [MEWING](C:/Users/madde/flutter_projects/MEWING) | React Native/Expo: Expo-Konfiguration `com.chargegeist.mew` / `1.0.0+1`, vorhandener Android-Gradle-Stand dagegen `com.mewtrack` / `1.0+1`. |
| **MewTrack – native Android-Variante** | [MEWING 2.0/app](<C:/Users/madde/flutter_projects/MEWING 2.0/app>) | Natives Android-Projekt; Name **MewTrack: Jawline Tracker**, `com.chargegeist.mew`; Version `0.9.4`, Versioncode `13`. |
| **Mirror** | [Mirror](C:/Users/madde/Documents/Mirror) | Flutter, `com.energycrafted.mirror`; aktueller Appname in den Projektmetadaten **RelateLens**, lokale Version `1.1.0+16`. |
| **Between** / [between](https://github.com/emfau88/between) | [love insight scanner](<C:/Users/madde/flutter_projects/love insight scanner>) | Flutter-Projekt `love_insight_scanner`; Repositoryzuordnung per Git-Remote bestätigt. Lokale Version `1.0.0+20`. |

**MewTrack umfasst drei lokale Implementierungen, nicht drei bestätigte aktive Store-Apps.** In der Play Console ist **MewTrack: Jawline Tracker** mit `com.chargegeist.mew` aufgeführt. Die native Android-Variante unter **MEWING 2.0/app** ist die gewählte Reviewbasis: Paket, Version und Versioncode passen zu Produktionsrelease **13 (0.9.4)** und dem installierten Play-Paket. Identische Quellen zum veröffentlichten Binary sind damit noch nicht bewiesen. Expo enthält widersprüchliche Paketmetadaten, Flutter eine andere App-ID; beide sind separate lokale Varianten.

[Mirror-backups](C:/Users/madde/Documents/Mirror-backups) enthält die Sicherung `mirror-paused-2026-10-07.bundle`, kein separates Arbeitsprojekt. Das öffentliche Repository [mirror-googleplay-formular](https://github.com/emfau88/mirror-googleplay-formular) wurde als zusätzlicher Fund vermerkt; es wurde nicht als App-Quellcode eingeordnet.

## Vorgehen nach der Bestandsaufnahme

Die vorhandenen Ziele reichen für den Einstieg: Bei Android-Apps mehr Downloads und wiederkehrende Nutzer; bei Spielen eine ehrliche Qualitätsprüfung; beim Onlineauftritt die Entscheidung für eine geeignete zentrale Website. Eine große vorgeschaltete Zielklärung ist dafür nicht nötig.

1. **Ein Produkt als Pilot prüfen:** tatsächliche Bedienung und Optik, Nutzen, Store-Auftritt und verfügbare Nutzungsdaten zusammen betrachten. Für ZeroHero, Mirror und MewTrack im dokumentierten Umfang abgeschlossen; native Prüfgrenzen bleiben sichtbar.
2. **Wenige Maßnahmen priorisieren:** belegte Probleme, Chancen und offene Fragen unterscheiden. Ein kleiner sinnvoller Updateumfang folgt aus den Befunden; Umsetzung ist ein eigener Schritt.
3. **Android-Piloten vertiefen:** gezielte native Gegenprüfungen und wenige kleine Verbesserungs- und Nutzerversuche aus den drei Analysen auswählen. Between ist bisher nur inventarisiert.
4. **Browsergames spielen und bewerten:** Einstieg, Verständlichkeit, Spielgefühl, Optik, technische Zuverlässigkeit und Wiederholungsreiz untersuchen; danach Aufwand und Chancen vergleichen.
5. **Onlineauftritte vergleichen:** vorhandene Entwürfe tatsächlich ansehen und daraus eine Empfehlung für die zentrale Landingpage ableiten. Die Rolle von Webverkauf, Games und Apps erst anhand dieses Vergleichs festlegen.

Spiele und Onlineauftritte sind noch nicht qualitativ analysiert. Es wurden keine Verbesserungen veröffentlicht. Fehlende Daten und unbestätigte Nutzerwirkungen werden ausdrücklich als offen behandelt.

## Quellen und Umfang

Die ursprünglichen Bestandsbeschreibungen beruhen auf README-Dateien und Startseitentexten. Repository-/Ordnerzuordnungen beruhen auf lokalen Git-Remotes beziehungsweise öffentlichen GitHub-Metadaten. Ergänzend wurden ZeroHero, Mirror und MewTrack wie oben verlinkt untersucht. Spiele, Onlineauftritte und Between wurden noch nicht im Betrieb geprüft; Originalprojekte und Store-Einträge wurden nicht verändert.

- [spiele-bestand.json](spiele-bestand.json): sechs Dashboard-Spiele und fünf ergänzende Repositories mit Quellnachweisen.
- [online-bestand.json](online-bestand.json): sieben Web-Repositories und verwandte lokale Entwürfe.
- [apps-bestand.json](apps-bestand.json): vier Apps, MewTrack-Varianten und Mirror-Sicherung.
- [github-repositories.json](github-repositories.json): Snapshot aller **65 öffentlich sichtbaren Repositories** von `emfau88` am 09.10.2026. Diese Gesamtliste ist noch nicht vollständig nach Projektbereichen klassifiziert; private Repositories sind nicht erfasst.

Der Umfang entspricht den angefragten drei Bereichen. Er ist keine vollständige Inventarisierung sämtlicher lokaler Ordner oder aller übrigen Projekte des Kontos.
