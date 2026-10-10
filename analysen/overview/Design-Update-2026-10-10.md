# Overview – freigegebener visueller und struktureller Schritt

Stand: **10.10.2026**. Ergänzung des Projektkompasses, **keine neue Produktanalyse und kein Appänderungsauftrag**.

## Beschluss und Ziel

Das beigefügte Mockup wurde zunächst nur zur Meinung vorgelegt. Nach der Empfehlung gab der Nutzer die Umsetzung ausdrücklich frei:

> Ok dann noch deine Empfehlung von vorher bezüglich Design umsetzen, das mit blocker direkt bei Aufgabe usw

Die vorangehende Präzisierung lautet:

> Also ich will keine termine drin haben, aber den Rest finde ich sehr gut und Clean und übersichtlich und gut nachvollziehbar, muss auch vor allem auf mobile Funktionieren.

Die gewünschte Informationsfolge ist: **Als Nächstes → aktive bewusst gewählte Aufgaben → kompakte Produktübersicht → einklappbare Hintergrundinformationen**. Echte Hindernisse werden bei der betroffenen Aufgabe gezeigt. Weitere Fragen stehen einklappbar darunter, nicht als dauerhafte zusätzliche Seitenspalte. Begrüßung, Motivationsbox und Termine werden aus dem Mockup nicht übernommen. Es entstehen keine erfundenen Aufwand-, Prioritäts- oder Prozentwerte; der Arbeitsfortschritt zählt die bestehenden bewusst gewählten Maßnahmen.

## Zu erhalten und zu prüfen

- `dashboard/context.json`, `projects.json` und `results.json` bleiben die Datenquellen. Keine Modellumbenennung und keine neue Business-Logik.
- 17 Hauptprodukte, 15 begrenzte Analysen, 49 Maßnahmen-IDs samt Reihenfolge, sechs ausdrücklich ausgewählte IDs und historische Kennzahlen bleiben erhalten.
- Produkt-/Berichtslinks, aktive Routen, Filter, Dialoge, Status-/Phasenlogik sowie alle bisherigen Analyseinhalte bleiben erreichbar. Weniger wichtige Bereiche dürfen gruppiert/eingeklappt werden.
- Gedämpfte warme Darstellung, neutraler Anthrazitmodus, Schalter und grüne Erledigtmarkierungen bleiben. Typografie/Abstände sowie Listenhierarchie werden beruhigt; Manrope wird lokal eingebettet, ohne externen Fontabruf.
- Mobile Aufgaben-/Produktzeilen erhalten lesbare vertikale Anordnung und erreichbare Aktionen. Keine gequetschte Desktoptabelle und kein seitlicher Dokumentüberlauf.
- Die vollständig eingebettete `index.html` funktioniert weiterhin ohne externe Laufzeitabhängigkeiten und ohne Fetch-Aufrufe. Rohbelege, private Consoleinformationen, Apppakete und Schlüssel bleiben lokal.

## Getrennter aktueller Sachstand

MewTrack14/0.9.5 und EN/DE-Storetexte sind nach Nutzer-Livemeldung unabhängig öffentlich bestätigt; vorhandene Storebilder unverändert. Fünf von sechs gewählten Aufgaben sind erledigt. Die native MewTrack-Kernprüfung bleibt offen, weil der bisherige virtuelle Kameralauf kein Gesicht erkannte und reale Kauf-/Restore-/Upgradefälle nicht ausgeführt wurden. Dieses Hindernis gehört direkt an diese Aufgabe. Veröffentlichung ist kein Kamera-, Kauf- oder Nutzerversuch. Der Plan bleibt Apps gezielt abschließen → eigene Homepage entscheiden; CORE und andere Vorschläge werden durch die Darstellung nicht ausgewählt.

## Umsetzung und tatsächliche Prüfung

Die Darstellung in `dashboard/app.js` und `dashboard/styles.css` ist umgebaut: horizontale Desktopnavigation, sechs mobile Navigationseinträge, Hauptfokus oben, flache Aufgaben- und Produktzeilen sowie einklappbare Belege, erledigte Aufgaben, weitere Produkte, Analysen und Historie. Hindernisse stehen direkt am Arbeitsschritt. Mobile Kennzahlen- und Dokumenttabellen werden zu beschrifteten vertikalen Abschnitten. Manrope samt unveränderter Original-Lizenz und Fontlog liegt unter `dashboard/assets/fonts/` und wird durch den Python-Build als Data-URL eingebettet; keine zusätzliche Laufzeitbibliothek. Die frühere Desktop-/Mobilprüfung im Android-Tagesstand gehört zu ihrem damaligen Zwischenstand und belegt diesen Umbau nicht automatisch.

Tatsächliche Gegenprüfung des neuen Stands am 10.10.2026:

- JavaScript-Syntaxprüfung, Python-Build und Prüfung auf einen aktuellen eingebetteten Build bestanden. 17 Hauptprodukte, 15 Analysen, 92 vollständige Dokumente und zehn Icons eingebettet; alle referenzierten Quellen vorhanden.
- Unabhängiger Datenvergleich gegen den vorherigen Commit `0e188e5`: Produkt-/Analyse-IDs, alle 49 Maßnahmen-IDs samt Reihenfolge, sechs ausgewählte IDs und sämtliche Kennzahlen erhalten. Nur die belegte MewTrack-Veröffentlichungsaufgabe wechselt auf `completed`; daraus korrekt 5/6 gewählt und 5/49 insgesamt, Mirror 3/4 und MewTrack 2/4. Phasenregel unverändert.
- Echte Browserbedienung über `http://127.0.0.1:8873/`: Desktop bei rund 1.030 und 1.280 Pixeln, mobile Layouts bei 390 und 320 Pixeln Breite; warmer heller Modus und neutraler Dunkelmodus. Manrope tatsächlich geladen, kein horizontaler Seitenüberlauf in Übersicht, Produkten, Kennzahlen und Dokumentleser. Dies sind Desktopbrowser mit verkleinertem Viewport, keine physische Touchgeräteprüfung.
- Bereichsfilter zeigt vier Android-Produkte. Textsuche, Produktdialog samt Escape und Rückkehr, Aufgaben-/Abschlussdetails, erledigte Auswahl und direkte Links funktionieren. Ein direkter Link zur abgeschlossenen Heartvia-Releaseaufgabe öffnet den eingeklappten Abschnitt und positioniert die richtige bestehende ID. Produktwechsel innerhalb der Kennzahlen behält den gewählten Teilbereich.
- ZeroHero-Kennzahlen bei 320 Pixeln: 18 erhaltene Zeilen, alle fünf Zellbeschriftungen sichtbar. Die fünf Tabellen der Kompaktübersicht sind vertikal beschriftet und ohne Seitenüberlauf. Der neue Designbericht ist im Dokumentleser erreichbar.
- Tatsächlich über den Exportknopf heruntergeladener JSON-Snapshot geprüft: 17 Produkte, 15 Analysen, 49 Maßnahmen, sechs ausgewählte IDs und 92 vollständige Dokumente. Keine Browserwarnungen oder JavaScriptfehler in der geprüften Sitzung protokolliert. Ergänzende DOM-Stub-Prüfung des UI-Agents deckte 154 Routen sowie Filter/Dialog/Escape ab; sie ersetzt die genannten echten Browserproben nicht.
- Direkter `file://`-Aufruf konnte mit dem verfügbaren Browserwerkzeug nicht ausgeführt werden: dessen URL-Regel erlaubt nur HTTP/HTTPS. Kein Umgehen dieser Grenze versucht. Die erhaltene Einzeldatei-Struktur, vollständig eingebetteten Daten/Schriften/Bilder und fehlenden externen Laufzeitabrufe sind am Quellstand/Build geprüft; dies ist kein behaupteter neuer Doppelklick-Laufzeittest.
- Bei der Quellgegenprüfung wurde eine Druckfarben-Regression durch die spätere Dunkelmodusregel gefunden und durch abschließende Druckvariablen/weiße neue Flächen korrigiert. Die Druck-CSS wurde gegen den Quellstand geprüft; ein physischer Ausdruck oder PDF-Druckdialog wurde nicht ausgeführt. Original-Lizenzdateien bleiben bytegleich, nur der eingebettete CSS-Kommentar entfernt Leerzeichen am Zeilenende.

Lokale Bildbelege liegen unter `analysen/mewtrack/runtime/update-20261010/overview-design-desktop-dark.png` und `overview-design-mobile-dark.png` und bleiben als Runtime-Artefakte außerhalb der Veröffentlichung. Appquellen und Storebilder wurden durch diesen Dashboardauftrag nicht geändert.

## Sicherung und konkrete Zugriffsgrenze

Der geprüfte Umbau ist auf dem lokalen `main` committed; die vorherige lokale Sicherung `0e188e5` bleibt in seiner Historie. Der noch ausstehende GitHub-Push wurde erneut tatsächlich versucht: `git push origin main` scheitert an `Could not resolve host: github.com`. Der alternative verbundene GitHub-Zugang verweigert `create_blob` mit HTTP 403 / `Resource not accessible by integration`; der Codex-Browser erreicht die Repositoryseite ebenfalls nicht (`ERR_ADDRESS_UNREACHABLE`). Es wurden keine Zugangsdaten ausgelesen, Netzwerk-/Sicherheitseinstellungen geändert oder diese Grenzen umgangen.

Die letzte unabhängige GitHub-Refkontrolle zeigt `main` weiterhin bei `153e1356caffd06b673c6ceee7a295ad9c8288fa`. Kein neuer Remote-Commit, kein erfolgreicher Push und keine neue Pages-Veröffentlichung behauptet. Die Dateien und beiden fachlichen lokalen Commitstände bleiben erhalten; ein regulärer `git push origin main` über einen funktionierenden Zugang kann die lokale Historie anschließend übertragen.

Auf anschließenden ausdrücklichen Nutzerwunsch wurde auch **GitHub Desktop** tatsächlich bedient: Repository `overview`, Branch `main`, keine uncommitteten Änderungen, zwei wartende lokale Commits. Der normale Knopf **Push origin** führte zum Dialog **Failed to push** mit derselben Meldung `Could not resolve host: github.com`. Lokaler und unabhängiger Remote-Refvergleich bestätigen anschließend weiterhin den bisherigen GitHub-Stand. Dieser Versuch betrifft den regulären Desktopzugang und belegt weiterhin keinen allgemeinen GitHub-Ausfall. Screenshot `analysen/mewtrack/runtime/update-20261010/github-desktop-push-failed.png` bleibt nur lokal. Keine Sicherheits-, Netzwerk- oder Kontoeinstellungen verändert.
