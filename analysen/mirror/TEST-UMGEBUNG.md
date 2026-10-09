# Mirror / RelateLens – Testumgebung und Provenienz

Stand: 09.10.2026. Diese Umgebung dient der Prüfung des aktuellen lokalen Projekts. Das Original wurde nur gelesen. Sie ist keine Reproduktion des veröffentlichten Android-Binaries.

## Ausgangsstand

| Merkmal | Erfasster Wert |
|---|---|
| Originalprojekt | `C:\Users\madde\Documents\Mirror` |
| Branch | `relaunch/paused-2026-10-07` |
| HEAD | `27ff955611886951e832159b91bec4f3ceec14a4` |
| Git-Arbeitsstand vor dem Laufzeittest | sauber; `git status --short` ohne Ausgabe |
| Name laut aktuellen Metadaten | RelateLens; Flutter-Projektname `mirror` |
| Lokale Version | `1.1.0+16` |
| Isolierte Kopie | `C:\Users\madde\Documents\OVERVIEW\analysen\mirror\runtime` |
| Flutter / Dart | Flutter 3.41.4, Dart 3.11.1 |

Die aktuelle Quelle gehört zum RelateLens-Relaunch. Frühere Mirror-/Tarot-Berichte und der veröffentlichte Store-Auftritt sind davon getrennt zu betrachten. Eine Übereinstimmung zwischen dieser Quelle und einer veröffentlichten Android-Version ist durch diesen Test nicht nachgewiesen.

## Kopie und Build

Kopiert wurden ausschließlich `lib/`, `assets/`, `pubspec.yaml`, `pubspec.lock` und `analysis_options.yaml`. Android-, iOS-, Signing- und Firebase-Konfigurationen, Original-Builds, Git-Metadaten und Nutzerdaten wurden nicht übernommen. Es wurden keine API-Schlüssel oder Analyse-Token als Buildparameter gesetzt.

Da das Original keinen Webordner enthält, wurde das Webgerüst mit dem vorhandenen Flutter-SDK in der Testkopie erzeugt. Dieses Gerüst ist ein Hilfsmittel der Prüfung und stammt nicht aus dem Original. Die Appquellen wurden anschließend unverändert aus dem Original übernommen; es wurde kein Appcode für die Webprüfung angepasst.

69 Dart-Dateien in `lib/` und 56 Asset-Dateien, zusammen **125 Dateien**, wurden per SHA256 zwischen Original und Kopie verglichen: **keine Abweichung**. Die Einzelwerte stehen lokal in `runtime/source-hashes.json`. Zusätzlich stimmen die drei übernommenen Metadaten-Dateien nach `pub get --offline` weiterhin überein:

| Datei | SHA256 |
|---|---|
| `pubspec.yaml` | `4CC37EA8F035A2876AE17CFE9E9E49071852ED9B315E5C091451A2CFB4BC229B` |
| `pubspec.lock` | `27D7227B4CA20BC8137A79D15663C73F88A2948E464A7D6D46B165C4A89DB06A` |
| `analysis_options.yaml` | `B63207CF529949EC4727B68C23DBB38CE255B6F6F4AE1EFFCB5C1DCF2852D238` |

`flutter pub get --offline` war erfolgreich. Der Releasebuild mit `flutter build web --release --no-web-resources-cdn` war ebenfalls erfolgreich und benötigte laut Buildausgabe 46,2 Sekunden. Flutter-Webressourcen werden aus dem lokalen Build bereitgestellt. `build/web/version.json` bestätigt `version: 1.1.0` und `build_number: 16`.

## Bereitstellung und Testdaten

Die Vorschau wird ausschließlich an `127.0.0.1` auf Port **8770** bereitgestellt. `http://127.0.0.1:8770/` lieferte vor der visuellen Prüfung eine erfolgreiche HTTP-Antwort (**200**). Der Versuch im Default-Sandbox scheiterte am lokalen Socketzugriff; die lokale Bereitstellung und lesende HTTP-Prüfung wurden anschließend über die zugelassene Eskalation ausgeführt.

Der Test verwendet eine eigene localhost-Origin mit erfundenen Antworten. Dadurch bleiben die Daten der installierten Android-App und vorhandene echte Beziehungstexte unberührt. Das ist kein eigener Browserprofil-Test. Änderungen innerhalb der Vorschau betreffen allein ihre lokalen Testdaten.

Das optionale PostHog-Ziel ist in diesem Build mangels `POSTHOG_PROJECT_TOKEN` und `POSTHOG_HOST` nicht konfiguriert. Dieser Test weist keine Produktionskonfiguration oder deren Datenauslieferung nach. Reale Käufe, Bewertungen, Cloud-Nachrichten oder Store-Änderungen gehören nicht zum Test.

## Aussagegrenzen

- Der erfolgreiche Build weist die Kompilierbarkeit der lokalen Webkopie nach. Er belegt keinen bestandenen Android-Geräte- oder Play-Release-Test.
- Visuelle und funktionale Befunde gelten für die dokumentierte lokale Quelle im Browser. Native Funktionen wie Android-Systemintegration, Store-Billing, native Bewertungsdialoge, Tastaturverhalten und Geräteleistung sind dadurch nicht vollständig geprüft.
- Es wurden im Rahmen dieser Vorbereitung keine Flutter-Unit- oder Widgettests ausgeführt. Die Buildausgabe darf nicht als Ergebnis dieser Tests ausgegeben werden.
- Eine unveränderte Quelle kann auf Web und Android dennoch unterschiedliche Plattformwirkungen haben. Solche Grenzen sind im jeweiligen Laufzeitbefund zu benennen.
- Der lokale Vorschau-Server soll nach Abschluss der Prüfung beendet werden; eine spätere Wiederholung benötigt erneut die lokale Bereitstellung.

Die tatsächlich beobachteten Abläufe, Optik und Fehler werden im separaten Laufzeitbericht dokumentiert. Dieses Dokument hält die Vorbereitung und ihre Grenzen fest.
