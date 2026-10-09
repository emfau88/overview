# Mirror / RelateLens – vorhandene lokale UI-Vorschauen

Diese sechs PNG-Dateien wurden am **09.10.2026 unverändert** aus `C:\Users\madde\Documents\Mirror\store\qa` kopiert. Sie sind **Bestandsbilder**, kein Screenshotnachweis des heutigen Browser-Pilottests und kein Nachweis der veröffentlichten Play-App. Originale und Kopien wurden per SHA256 auf Gleichheit geprüft; Dateigrößen, Quellpfade, ursprüngliche Dateizeiten und Hashes stehen in [manifest.json](manifest.json). Gesamtgröße: etwa **1,96 MB**.

## Herkunft und Grenzen

Der vorhandene Quelltest `C:\Users\madde\Documents\Mirror\tool\relaunch_preview_test.dart` beschreibt echte Flutter-UI-Captures für Store-Artwork mit **erfundenen Antworten**. Er verwendet ein `FakeUserStateRepository`, eine logische Oberfläche von **390 × 844 Pixeln** und PNG-Erzeugung mit Pixelverhältnis **3** (Dateien 1170 × 2532 Pixel). Für lesbare Vorschauen lädt er Ersatz-Systemschriften. Das bedeutet: Bildinhalt stammt aus Flutter-Screens, aber Fonts/Testzustand und Renderumgebung sind kein pixelgenauer Android-Release-Nachweis.

Die Quelldateien tragen lokale Änderungszeiten vom **07.10.2026 gegen 22:47 Uhr**. Das ist ein Dateisystembefund, kein unabhängig belegter Aufnahmezeitpunkt. Der Test wurde für diese Kopie **nicht erneut ausgeführt**. Dokumentierte alte Test-/Build-Ergebnisse im Original wurden nicht als heutiger erfolgreicher Testlauf ausgegeben. Alle sechs Bilder wurden vor der Aufnahme in diesen Ordner visuell betrachtet.

Keine Bilder wurden bearbeitet oder aus dem öffentlichen Store heruntergeladen. Die Originaldateien bleiben unverändert. Die in `store/en-US` vorhandenen gerahmten Store-Layouts wurden nicht zusätzlich kopiert, um den Umfang klein zu halten.

## Bildinhalt

| Datei | Sichtbarer Inhalt |
|---|---|
| [bestand-ui-1.png](bestand-ui-1.png) | RelateLens-Home: gemischte Signale, Start eines Clarity Scan, ergänzende Tageskarte und Navigation. |
| [bestand-ui-2.png](bestand-ui-2.png) | Erste Frage des fünfteiligen Scans; situative Auswahlmöglichkeiten, noch deaktivierter Weiter-Button. |
| [bestand-ui-3.png](bestand-ui-3.png) | Beispielergebnis mit beobachteter Situation, möglicher Einordnung und Hinweisen; ausdrücklich antwortenbasiert. |
| [bestand-ui-4.png](bestand-ui-4.png) | Praktischer nächster Schritt, Hinweis auf lokale Speicherung und zusätzliche Reflexion. |
| [bestand-ui-5.png](bestand-ui-5.png) | Home mit zuletzt gespeichertem Ergebnis, Archivzugang sowie Tageskarte und Tagesimpuls. |
| [bestand-ui-6.png](bestand-ui-6.png) | Symbolische Tarotkarte The High Priestess mit ergänzender Reflexion. |

Die Bilder ergänzen die Bestandsbeschreibung. Bedienfehler, tatsächliche Speicherung, native Laufzeit oder heutige Tests werden mit ihnen nicht bewiesen; dafür gelten die gesonderten Prüfprotokolle.
