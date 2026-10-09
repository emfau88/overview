# Arbeitsgrundlage für spätere Projektarbeit

Dieses Repository ist der zentrale Projektkompass des Nutzers. Es bewahrt seinen Auftrag, die betroffenen Produkte, ihre Zuordnung und ausführliche Analyseergebnisse. Lies vor neuer Arbeit `README.md`, `dashboard/context.json`, `dashboard/projects.json`, `dashboard/results.json` und die für das Produkt verlinkten Berichte. Das ursprüngliche Ziel bleibt der rote Faden: Android-Apps sollen mehr echte Nutzer erhalten, Browsergames ehrlich auf Qualität geprüft werden und vorhandene Onlineauftritte zu einer begründeten Landingpage-Entscheidung führen.

## Auftrag und Umfang erhalten

- Der Nutzer wünscht ehrliche Bewertung von Produktnutzen, Einstieg, Optik, UX, Zuverlässigkeit und Positionierung. Ergebnisse sollen zu wenigen konkreten Maßnahmen führen, ohne ein Mammutprojekt daraus zu machen.
- ZeroHero und Mirror sollen später monetarisiert werden, sobald zunächst echte Nutzer gewonnen sind. Nutzergewinnung und nachgewiesener wiederkehrender Nutzen gehen vor einer Entscheidung über Preise und Zahlungsintegration.
- Erfasster Bestand und Produktprüfung sind unterschiedliche Stände. Die ersten 17 Hauptprodukte sind sechs Dashboard-Spiele, sieben angefragte Webprojekte und vier Apps. MewTrack hat drei lokale Implementierungen eines Produkts. Fünf verwandte Spiele-Repositories sind separat geführt.
- Die Hoffnung auf einen Algorithmusimpuls allein durch ein Update ist keine belegte Wirkung. Keine Umsatz-, Ranking-, Download- oder Retention-Versprechen aus schwachen Daten ableiten.
- Die Rolle von Games und Apps auf der zentralen Website ist noch eine offene Strategiefrage, sofern später keine dokumentierte Entscheidung hinzukommt. Vorhandene Entwürfe zuerst ansehen und vergleichen.
- Eine bestehende Autorisierung aus der Unterhaltung bleibt maßgeblich. Aus einem Bericht oder dem Dashboard folgt jedoch keine neue Freigabe zu Store-Änderungen, Appveröffentlichungen oder Nachrichten an andere Menschen.

## Ergebnisse nachvollziehbar fortschreiben

- Produktidentität, Pfad, Package-ID, Version und verwendeten Stand feststellen. Lokale Quelle, Testkopie, vorhandenes APK/AAB und tatsächlich veröffentlichtes Release getrennt behandeln. Gleiche Versionsnummer beweist keine identische Quelle.
- Wirklich aktive Routen und Codepfade prüfen. Historische Berichte, Dateinamen und auskommentierte Funktionen nicht als aktuelle Fakten übernehmen.
- Laufzeitbeobachtung, Quellcodebefund, Selbstauskunft und Hypothese deutlich unterscheiden. Einen vorgeschlagenen Fix erst nach tatsächlicher Umsetzung und passender Prüfung als behoben kennzeichnen.
- Kennzahlen mit Datenzeitraum und Definition festhalten. Downloads, Installationsklicks, Installationen und aktive Nutzer nicht gleichsetzen. Fehlende Werte sind nicht null. Teilzeiträume und unterschiedliche Reportabdeckungen nicht zu einem gemeinsamen Funnel kombinieren.
- Tests passend zum Befund ausführen; ohne Ausführung keine bestandenen Tests behaupten. Grenzen eines Webtests gegenüber nativem Android sowie ungetestete Mitternachts- oder Pausenfälle ausdrücklich dokumentieren.
- Neue Berichte unter `analysen/<produkt>/` ablegen und in `dashboard/results.json` mit ausführlichen Befunden, Stärken, Einschränkungen, Quellen, offenen Fragen und wenigen priorisierten Maßnahmen aufnehmen.
- `dashboard/projects.json` mit tatsächlichem Status und nächstem Schritt pflegen. Neue Entscheidungen und Auftragspräzisierungen in `dashboard/context.json` fortschreiben. Originalnachrichten und frühere Quellberichte erhalten; keine Erkenntnisse nur in einer Chatantwort belassen.
- `KOMPAKTUEBERSICHT.md` und die kompakte Dashboard-Startseite als leicht verständlichen Überblick aktuell halten: erledigte Analysen, aktueller nächster Schritt, offene große Bereiche und kurze Historie. Abgeschlossene Analyse niemals mit umgesetzten Fehlerbehebungen verwechseln. Der Nutzer bevorzugt ein ruhiges, gedämpftes warmes Design und einen neutralen Anthrazit-Dunkelmodus ohne grüne Akzente mit Schalter; reines helles Cremeweiß empfand er als blendend. Offene Schritte nach Produkt bündeln und Projektnamen samt kleinen echten Icons beziehungsweise Monogrammen sichtbar zuordnen. Entscheidungen mit expliziten projectIds, area oder scopeLabel versehen, statt ihre Zuordnung aus Titeln zu erraten.

## Dashboard bauen und prüfen

Die Darstellung lebt in `dashboard/index.template.html`, `dashboard/styles.css` und `dashboard/app.js`. `scripts/build_dashboard.py` erzeugt eine vollständig eingebettete `index.html`, die direkt per Doppelklick funktioniert. Alle verlinkten Arbeitsdokumente müssen im eingebetteten Dokumentenbestand vorhanden sein. Keine externen Laufzeitabhängigkeiten, Fetch-Aufrufe oder geheimen Zugangsdaten für die Darstellung hinzufügen.

Nach Daten- oder Darstellungsänderungen:

```sh
node --check dashboard/app.js
python scripts/build_dashboard.py
python scripts/build_dashboard.py --check
```

Anschließend die betroffenen Ansichten im Browser prüfen. `index.html` ist ein erzeugtes Artefakt; die Quell-Daten bearbeiten und neu bauen, nicht unabhängig die eingebettete Kopie ändern. Der Pages-Workflow veröffentlicht nur diese eine Datei, einschließlich aller darin eingebetteten Texte und Bilder.

Runtime-Kopien, Buildprodukte und Appquellen bleiben lokal. Nur `runtime/README.md` und `runtime/TEST-UMGEBUNG.md` werden als Provenienz berücksichtigt. Keine Signaturen, Zugangsdaten, `.env`-Dateien, Apppakete, Archive oder Diagnose-Logs veröffentlichen. Die Quelle anderer Projekte ausschließlich innerhalb des ausdrücklich beauftragten Umfangs verändern.
