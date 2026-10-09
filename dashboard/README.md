# Projektkompass – Daten und Darstellung

Das Dashboard verbindet die ursprünglichen Anliegen, den Projektbestand, ausführliche Ergebnisse, offene Fragen und nächste Schritte. Es ist die gemeinsame Arbeitsgrundlage für Android-Apps, Browsergames und Onlineauftritte. Die Originalberichte bleiben erhalten und sind zusätzlich als vollständiger Text in der Dashboard-Datei eingebettet.

Die Startansicht ist eine **Kompaktübersicht**: „Erledigt“, „Als Nächstes“ und „Noch offen“, automatische Zähler für Bestand und abgeschlossene Analysen sowie kurze Produktstände nach Bereich. Der dokumentierte Verlauf zeigt die zuletzt festgehaltenen Schritte und lässt sich vollständig aufklappen. Abschlusszahlen beruhen auf dem Analyse- beziehungsweise Verlaufsstatus; vorgeschlagene Maßnahmen werden dadurch nicht als umgesetzt gezählt. Die ausführlichen Befunde, Kennzahlen, Quellen und Originalnachrichten bleiben in den übrigen Ansichten vollständig erhalten. [KOMPAKTUEBERSICHT.md](../KOMPAKTUEBERSICHT.md) ergänzt den kurzen Stand als Repository-Dokument.

Die Darstellung verwendet gedämpfte warme Grautöne und einen umschaltbaren neutralen Anthrazitmodus. Dezente grüne Markierungen zeigen auf ausdrücklichen Nutzerwunsch erledigte Arbeit; die Grundflächen bleiben neutral. Die Moduswahl wird lokal im Browser gespeichert; Produktbilder und ausgeschriebene Namen helfen bei der Zuordnung. Es gibt keine externen Schriften, Bibliotheken oder Laufzeitabrufe.

**Offene Schritte** sind zuerst nach Bereich und anschließend nach Produkt gruppiert. So stehen die Schritte einer App zusammen, statt zwischen anderen Apps verteilt zu erscheinen. Bereichsweite Aufgaben tragen eine eigene Kennzeichnung. Sprunglinks führen direkt zu den Produkten, zu den Bereichen und zum Abschnitt mit Entscheidungen; direkte Links wie `#pending/zerohero` oder `#pending/decisions` bleiben teilbar. Diese Gruppierung legt keine neue Priorität fest.

**Entscheidungen und Vorschläge** werden nach ihrem Geltungsbereich zusammengefasst und zeigen an jedem Eintrag Produktname, vorhandenes Produktbild beziehungsweise den allgemeinen Bereich sowie den unveränderten Status. Die Zuordnung kommt aus expliziten `projectId`-/`projectIds`-, `area`- oder `scopeLabel`-Metadaten und wird nicht aus Überschriften geraten. Für neue Einträge diese Metadaten pflegen. Die ausführlichen Texte bleiben unverändert erhalten.

Die **Ergebnis-Auswahl** zeigt die analysierten Produkte als Links mit Bild und Namen. Beim Wechsel bleibt der gewählte Teilbereich (Bewertung, Kennzahlen, Maßnahmen oder Prüfumfang) erhalten. Kleine Produktkennzeichnungen ergänzen außerdem den Erledigt-Überblick, konkrete nächste Produkte, Befund- und Maßnahmenkacheln, den Verlauf bei expliziter Zuordnung und den Kopf zugeordneter Analyseberichte im Dokumentenleser. Dokumentzuordnungen stammen aus den `documents`-Referenzen der Analysen, nicht aus Dateinamen.

Nach dem Build lässt sich `index.html` im Repository-Hauptordner **direkt per Doppelklick** öffnen. Daten, Oberfläche und vorhandene Produktbilder liegen in dieser einzelnen Datei; ein lokaler Server, externe Bibliotheken oder eine Anmeldung sind dafür nicht erforderlich. Der GitHub-Pages-Workflow veröffentlicht dieselbe Datei unter [emfau88.github.io/overview](https://emfau88.github.io/overview/), sobald Pages für GitHub Actions eingerichtet ist.

## Zusätzlicher Arbeitsfortschritt

**Zusätzliche Prioritätsempfehlung:** Übersicht und offene Schritte zeigen dieselben drei Empfehlungskarten: Mirror-Versuch, Homepage-Struktur und CORE-Training. Die Reihenfolge kommt ausschließlich aus den `priorityRank`-Feldern der drei zugehörigen Vorschläge in `results.json`; keine zweite unabhängige Prioritätenliste in der Oberfläche pflegen. Begründung und erster Schritt sind direkt sichtbar, Paketumfang, Abschlusskriterium, Grenzen und Quellen aufklappbar. Produktzuordnung zeigt Namen und vorhandene Icons. Vorschläge bleiben als offen gekennzeichnet; die 49 bestehenden Maßnahmen werden nicht erneut angelegt oder als umgesetzt gezählt. Die Kompaktübersicht hält die Begründung zusätzlich als lesbares Repository-Dokument fest.

Die ursprünglichen Inhalte bleiben bestehen. Eine ergänzende Anzeige unterscheidet drei Arbeitsphasen: **Bestand erfasst → begrenzte Analyse dokumentiert → Maßnahmen umgesetzt und geprüft**. Produktkarten, Produktdialoge, Ergebnis-Untermenüs, Bereichsübersicht, produktbezogene offene Gruppen und zugeordnete Dokumente zeigen denselben aus den zentralen Daten berechneten Stand. Die Ergebniswahl markiert fertige Analysen grün, mit Statuswort statt allein durch Farbe.

Aktuell sind **15 Produkte bei 2/3 Phasen**, Between und das zurückgestellte MORE THAN WOMBAT bei **1/3**. Die beauftragte Analyserunde ist mit **15/15** abgeschlossen; der gesamte Hauptbestand umfasst weiterhin 17 Produkte. **0/49 dokumentierte Vorschläge** sind als umgesetzt geführt. Diese Maßnahmenzahl ist ein anderer Zähler als die 26 gebündelten offenen Einträge. Vorschläge bilden eine Auswahlbasis, keinen verpflichtenden Gesamtplan.

Die Maßnahmenphase ist erst abgeschlossen, wenn alle zugehörigen dokumentierten Aktionen als umgesetzt/geprüft geführt werden. Teilweise umgesetzte Aktionen bleiben als eigene Zahl sichtbar. Bestandsprodukte und zurückgestellte Varianten erhalten durch eine Phasenanzeige keinen neuen Prüfauftrag. Prozent- oder Phasenwerte sind keine Aufwandsschätzung, vollständige Produktprüfung oder wirtschaftliche Erfolgsgarantie.

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

## Frühere Prüfung der Darstellung mit drei App-Piloten

Am 09.10.2026 wurden die gedämpfte warme und die neutrale Anthrazitdarstellung im Browser geprüft, einschließlich schmaler Ansicht um 390 Pixel, gespeicherter Moduswahl nach Neuladen, Produkt-Sprungziel und Analysewechsel mit erhaltenem Kennzahlen-Teilbereich. Im damaligen Drei-Pilot-Stand waren alle 15 offenen Schritte und 9 Entscheidungen vorhanden; die Seitenbreite lief nicht über den sichtbaren Bereich hinaus. Originalicons bleiben als Produktmerkmale erhalten. Die drei damaligen Appanalysen enthalten zusammen 34 Befunde, 60 Kennzahlen und 13 vorgeschlagene Maßnahmen; ihre jeweiligen Prüfgrenzen bleiben maßgeblich.

## Aktueller Quellenstand nach der ausgewählten Grundrunde

Am 09.10.2026 umfasst die gemeinsame Grundlage 15 begrenzte Analysen (3 Apps, 7 Webauftritte, 5 Games), 86 Befunde, 60 Kennzahlen, 49 vorgeschlagene Maßnahmen mit 0 Umsetzungen, 26 offene Einträge und nach der Prioritätsempfehlung 18 festgehaltene Entscheidungen/Vorschläge. 27 neue Spielbilder ergänzen die 15 Websitebilder und sechs historischen Mirror-Previews. KESSELKRAWALLs sieben Bilder stammen aus der gesonderten lokalen Testkopie; der öffentlich ausgelieferte Spielstand ist damit nicht als identisch bestätigt. Bildmetadaten nennen den Browser-Viewport in CSS-Pixeln; die gespeicherte JPEG-Breite kann durch Rundung davon abweichen.

Die älteren Bestandsquellen, Originalnachrichten und historischen Etappen bleiben erhalten. Aktuelle Prinzipien, Produktstände, Entscheidungen und nächste Schritte werden bei einer neuen Etappe abgeglichen; historische Momentaufnahmen werden nicht auf heutige Zahlen umgeschrieben. Analyseabschluss, Umsetzung und nachgewiesene Wirkung bleiben unterschiedliche Stände.

Die ergänzten Fortschrittsanzeigen wurden am 09.10.2026 in beiden Themes und in der schmalen Browseransicht geprüft: Übersicht, Produktkarten/-dialoge, Analysewahl sowie Kennzahlen-/Maßnahmen-Untermenüs, offene Produktgruppen und gemeinsamer Dokumentenleser zeigen konsistente Stände. 15 grün markierte Analysen, 15 Produkte mit 2/3 und Between/Wombat mit 1/3 Phasen; keine Maßnahmen fälschlich als umgesetzt. Keine unbeabsichtigte horizontale Seitenvergrößerung in den geprüften Ansichten.

Die drei neuen Empfehlungskarten wurden zusätzlich auf Übersicht und offenen Schritten geprüft, im Anthrazit-Desktopmodus und bei etwa 391 CSS-Pixeln in beiden Themes. Produktzuordnung, offene Vorschlagsstatus, Aufklappen der Grenzen und Beleglink zum vollständigen Mirror-Bericht funktionieren. Die Seite läuft in diesen Ansichten nicht horizontal über; die Produktanalysen und 0/49 Umsetzungen bleiben unverändert. Ein alter noch ausstehender Sechs-Spiele-Schritt im Webvergleich wurde an die tatsächliche abgeschlossene Fünferrunde und das zurückgestellte Wombat angepasst.
