# Projektkompass – Daten und Darstellung

Das Dashboard verbindet die ursprünglichen Anliegen, den Projektbestand, ausführliche Ergebnisse, offene Fragen und nächste Schritte. Es ist die gemeinsame Arbeitsgrundlage für Android-Apps, Browsergames und Onlineauftritte. Die Originalberichte bleiben erhalten und sind zusätzlich als vollständiger Text in der Dashboard-Datei eingebettet.

Nach dem Build lässt sich `index.html` im Repository-Hauptordner **direkt per Doppelklick** öffnen. Daten, Oberfläche und vorhandene Produktbilder liegen in dieser einzelnen Datei; ein lokaler Server, externe Bibliotheken oder eine Anmeldung sind dafür nicht erforderlich. Der GitHub-Pages-Workflow veröffentlicht dieselbe Datei unter [emfau88.github.io/overview](https://emfau88.github.io/overview/), sobald Pages für GitHub Actions eingerichtet ist.

## Welche Dateien den Arbeitsstand tragen

| Datei | Aufgabe |
|---|---|
| `context.json` | Ausgangslage, Ziele, Originalnachrichten, Prinzipien und Verlauf des Auftrags. |
| `projects.json` | Hauptprodukte, Repositories, bestätigte lokale Pfade, Varianten, Status und nächste Prüfschritte. |
| `results.json` | Ausführliche Analysen, Evidenz, Grenzen, Kennzahlen, vorgeschlagene Maßnahmen, Entscheidungen und offene Arbeit. |
| `icons.json` und `assets/` | Originalbilder mit Herkunft und Zuordnungsgrenzen. Nicht vorhandene Produktbilder werden durch einfache Monogramme vertreten. |
| `index.template.html`, `styles.css`, `app.js` | Vorlage, Gestaltung und Interaktion; keine zweite unabhängige Projektdatenquelle. |
| `../analysen/` | Vollständige Einzelberichte und Prüfprotokolle. Die `runtime`-Unterordner enthalten lokal isolierte Testkopien; veröffentlicht werden nur deren Provenienz-Markdowns. |
| `../scripts/build_dashboard.py` | Python-Bundler mit Referenzprüfung und Prüfung auf einen aktuellen erzeugten Stand. |

Die ursprünglichen Bestandsdateien im Hauptordner bleiben als Quellen erhalten: `spiele-bestand.json`, `online-bestand.json`, `apps-bestand.json` und `github-repositories.json`. Das Dashboard zählt sechs Kernspiele, sieben Webprojekte und vier Apps; MewTrack-Implementierungen und verwandte Spiele-Repositories sind separat zu unterscheiden.

## Einen neuen Befund ergänzen

1. Die dazugehörige Produkt-ID und den bisherigen Prüfstand in `projects.json` beziehungsweise `results.json` lesen. Bei lokalen Varianten zuerst Identität und Arbeitsstand zuordnen.
2. Den vollständigen Bericht unter `analysen/<produkt>/` speichern. Beobachtung, Codeableitung, Vermutung und tatsächliche Umsetzung klar auseinanderhalten; Testumgebung, Version und Grenzen nennen.
3. Das Ergebnis in `results.json` ausführlich aufnehmen und die Dokumentpfade unter `documents` angeben. Maßnahmen als Vorschlag führen, bis sie tatsächlich umgesetzt und geprüft sind. Kennzahlen stets mit Zeitraum, Definition und Einschränkung dokumentieren.
4. Projektstatus und nächste Schritte in `projects.json` sowie geänderte Auftragsentscheidungen in `context.json` fortschreiben. `updatedAt` auf das tatsächliche Bearbeitungsdatum setzen. Originalnachrichten und frühere Quellen nicht stillschweigend durch Zusammenfassungen ersetzen.
5. Den Build erzeugen und prüfen:

   ```sh
   node --check dashboard/app.js
   python scripts/build_dashboard.py
   python scripts/build_dashboard.py --check
   ```

6. `index.html` öffnen und die geänderten Ansichten, Dokumente, Produktdetails und Navigation prüfen. Nach Änderungen am Quellstand muss die erzeugte Datei erneut gebaut werden.

Der Builder braucht ausschließlich die Python-Standardbibliothek. Er lehnt unbekannte Produkt-/Analyse-IDs, nicht eingebundene Dokumentreferenzen und fehlende Icons ab. Er bindet die vollständigen Markdown-Berichte auf Produktebene, die Runtime-Provenienz, Mirror-Evidenz, Inventare und Dashboard-Daten ein. `--check` schreibt nichts und schlägt fehl, wenn `index.html` nicht exakt den aktuellen Quellen entspricht.

## Pflege und Veröffentlichung

Dieser Kompass ist **manuell gepflegtes Arbeitsgedächtnis**, keine Liveüberwachung der anderen Repositories, des Dateisystems oder der Play Console. Änderungen an Apps, Stores oder Projekten erscheinen erst, wenn sie geprüft und hier dokumentiert wurden. „Analyse abgeschlossen“ bedeutet weder „Fehler behoben“ noch „Update veröffentlicht“.

GitHub Actions prüft JavaScript, baut das Dashboard, prüft die erzeugte Datei und veröffentlicht ausschließlich `_site/index.html`. Darin sind die eingebundenen Texte enthalten. Deshalb müssen Berichte und Daten vor einem öffentlichen Push auf tatsächlich beabsichtigte öffentliche Inhalte geprüft werden. Appquellen, Buildprodukte, Signaturen, Umgebungsdateien und Diagnose-Logs gehören nicht in dieses Repository.

Ein späterer Schritt kann zusätzliche Produkte prüfen oder einen vorhandenen Befund umsetzen. Das Dashboard selbst erteilt dafür keine neue Veröffentlichungsfreigabe und erzeugt keine Nutzer- oder Erfolgsaussage ohne Belege.
