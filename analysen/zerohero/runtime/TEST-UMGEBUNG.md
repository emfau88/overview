# ZeroHero – Herkunft und Grenzen der Testumgebung

Prüfdatum: **09.10.2026**. Diese Umgebung dient der begrenzten Produkt- und UX-Prüfung des lokalen ZeroHero-Projekts.

## Herkunft

- Originalprojekt: `C:\Users\madde\flutter_projects\ZEROHERO25`.
- Isolierte Testkopie: `C:\Users\madde\Documents\OVERVIEW\analysen\zerohero\runtime`.
- Kopiert wurden `lib`, `assets`, `web`, `pubspec.yaml`, `pubspec.lock` und `analysis_options.yaml`. Android-Signaturdateien und das Git-Repository wurden nicht übernommen.
- Version in `pubspec.yaml`: **1.0.3+25**. `build/web/version.json` bestätigt Version **1.0.3**, Buildnummer **25**.
- Das Original verweist auf Branch `feature/quests-v2`, Commit `521d9392e5fd144181e6440ae18266d0ae1dbf52`. Die Testkopie stammt aus dem lokalen Dateistand; mögliche lokale Abweichungen vom Commit sind damit eingeschlossen.

## Bestätigte Gleichheit der Eingabedateien

Am Prüfdatum wurden Original und Testkopie mit SHA256 dateiweise verglichen:

| Bereich | Dateien Original / Kopie | Abweichungen |
|---|---:|---:|
| `lib` | 141 / 141 | 0 |
| `assets` | 20 / 20 | 0 |
| `web` | 7 / 7 | 0 |

Auch `pubspec.yaml`, `pubspec.lock` und `analysis_options.yaml` sind bytegleich. Das bereits ausgeführte `pub get --offline` hat **keine Abweichung der Lockdatei** gegenüber dem Original hinterlassen. Es wurden keine Appcode-Änderungen vorgenommen; die Arbeit an dieser Testumgebung verändert das Originalprojekt nicht.

## Vorhandener Build

Der vor der Unterbrechung erstellte Release-Webbuild liegt in `build/web`; insbesondere `main.dart.js`, `index.html`, Assets und `version.json` sind vorhanden. Der letzte Buildzeitpunkt der erzeugten Dateien liegt am **09.10.2026 gegen 19:50 Uhr** (lokale Dateizeit). Dieser Nachweis prüft das vorhandene Artefakt; bei dieser Provenienzprüfung wurde kein neuer Build gestartet.

Laut dem bereits angelegten [README](C:/Users/madde/Documents/OVERVIEW/analysen/zerohero/runtime/README.md) wurde die Kopie mit dem vorhandenen SDK **Flutter 3.41.4 / Dart 3.11.1** erfolgreich gebaut:

```text
flutter --no-version-check pub get --offline
flutter --no-version-check build web --release --no-pub
```

SHA256 des vorhandenen `build/web/main.dart.js`:

```text
F1C2C78D383DED03E18B43D678119002E918AC77F035EFD237B723BCF5027999
```

## Aussagekraft

- Dies ist ein **Web-Testbuild** des lokalen Quellstands, **kein nativer Androidtest** und kein Nachweis über den aktuell im Play Store veröffentlichten Stand.
- Die Browserprüfung verwendet erfundene Testdaten, isoliert durch den lokalen Origin **http://127.0.0.1:8765/**. Es wurde kein eigenes Browserprofil verwendet. Original-Appdaten wurden nicht verändert; Android-Speicherung, Zurück-Taste, Geräteintegration und native Firebase-Komponenten sind damit nicht geprüft.
- Die Quelle enthält eine ältere native APK; laut bisheriger Bestandsaufnahme stammt sie vom 19.05.2026 und trägt VersionCode 24. Sie darf nicht mit diesem Build 25 gleichgesetzt werden.
- Die Play Console zeigt als veröffentlichte Version **25 (1.0.3)**, Veröffentlichung **23.05.2026 um 00:04 Uhr laut Console**. Die öffentliche Store-Seite nennt 22.05.2026. Die gleiche Versionsnummer wie im lokalen Build beweist keine Gleichheit von Quellstand oder Binärdateien. Kennzahlen und Zeiträume stehen im ergänzenden [Console-Bericht](C:/Users/madde/Documents/OVERVIEW/analysen/zerohero/play-console-kpis.md).
- Die App initialisiert Firebase ohne eine Webkonfiguration und fängt Initialisierungsfehler ab. Firebase-/Analytics-Verhalten im Webtest ist deshalb nicht auf Android übertragbar.
- Im Original liegen **18 Testdateien mit 115 statisch gefundenen `test`-/`testWidgets`-Deklarationen**. Darunter sind Prüfungen für Tagesabschluss und Speicherung, Tagesgrenzen, XP-Doppelvergabe, Serien, Quests, Badges und Statistik. Das ist eine Bestandszählung; es wurde im Rahmen dieser Provenienzprüfung **kein Testlauf durchgeführt**, daher wird daraus kein Bestehen der Tests abgeleitet.

Im aktuellen Webbuild wurden Settings-Übernahme, Alkohol-Livefeedback bei gleicher Referenzmenge und die verzögerte Aktualisierung der Getränkeliste reproduziert; Details stehen in [Review-Evidence](C:/Users/madde/Documents/OVERVIEW/analysen/zerohero/review-evidence.md). Diese Nachweise bleiben auf den lokalen Webbuild begrenzt. Der Hauptbericht benennt sichtbare Browserbeobachtungen, Codebefunde und Play-Console-Daten jeweils mit ihrer Herkunft.
