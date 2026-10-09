# Mirror / RelateLens – Prüfung des aktiven lokalen Codes

Stand: **09.10.2026**. Diese Teilprüfung betrachtet den aktuellen lokalen Quellcode, seine aktiven Routen, Inhalte und Datenflüsse. Ergänzend wurden M01 und M02 vom Hauptagenten im unveränderten lokalen Webbuild bei 390 × 844 Pixeln mit erfundenen Antworten reproduziert. Sie ersetzt weder einen Android-Gerätetest noch die Prüfung des veröffentlichten Store-Builds. Befunde sind im ergänzenden [Evidenzprotokoll](evidence.json) mit konkreten Dateien und Reproideen festgehalten.

## Ausgangslage und Produktidentität

- Projekt: [Documents/Mirror](C:/Users/madde/Documents/Mirror), Paket `com.energycrafted.mirror`, lokale Version **1.1.0+16**.
- Aktiver Name im Code und Android-Label: **RelateLens**. Die Branding-Konstante nennt als vorgesehenen Store-Titel „RelateLens: Mixed Signals“. Daraus folgt keine bestätigte Umbenennung im veröffentlichten Store.
- Branch `relaunch/paused-2026-10-07`, HEAD `27ff955611886951e832159b91bec4f3ceec14a4`, Commit vom **07.10.2026, 23:19 CEST**. `git status --short` war leer.
- Vorhandenes Debug-APK: **1.0.11 (13)** laut `output-metadata.json`, Dateistand **24.06.2026**. Es bildet den aktuellen Relaunch nicht ab.
- Zusätzlich liegt `build/app/outputs/bundle/release/app-release.aab` vor, Dateistand **07.10.2026, 22:49 CEST**. Version, verwendete Build-Defines und Gleichheit mit der geprüften Quelle sind hier nicht verifiziert. Signatur- und Zugangsdaten wurden nicht gelesen.

Der aktive Ablauf beginnt unter `/home` im [Router](C:/Users/madde/Documents/Mirror/lib/app/router.dart:28). Die Homepage verspricht Hilfe bei unklaren Dating-Signalen und einen praktischen nächsten Schritt. Ihr Hauptbutton startet direkt fünf Fragen; daneben gibt es Daily Tarot, einen Pattern-Test mit zehn Fragen und tägliche Insights. Das aktuelle Produkt ist damit ein **lokales Reflexionswerkzeug mit vorformulierten, nach Antworten ausgewählten Texten**. Es liest keine Chats, kontaktiert keine KI-API und ermittelt keine Gefühle einer anderen Person.

Aktiv verdrahtet sind die lokalen `Mock*Repository`-Klassen in [providers.dart](C:/Users/madde/Documents/Mirror/lib/app/providers.dart:28). Der Name „Mock“ bedeutet hier nicht, dass alle Ergebnisse derselbe Platzhalter wären: Der Clarity-Generator kombiniert fünf Situationen mit Antwort-Tags und enthält eigene neutrale Fälle. Die Tarot-Bibliothek umfasst tatsächlich **42 Karten**, obwohl ein älterer Klassenkommentar noch 22 nennt.

## Was an der Grundlage bereits sinnvoll ist

Der Einstieg hat ein konkretes Problem, einen klaren Hauptbutton und ein kleines Fragenpaket. Ohne Konto gelangt man zum Ergebnis. Die Frageansichten erzwingen eine Auswahl und halten den Weiter-Button getrennt von der scrollbaren Optionsliste. Im Ergebnis steht ausdrücklich, dass die Darstellung auf Antworten beruht und keine Vorhersage ihrer Gefühle ist.

Die Texte unterscheiden inzwischen zwischen widersprüchlichem Verhalten, konsequentem Verhalten und zu wenig Information. Bei den letzten beiden Fällen erzeugt [_neutralResult](C:/Users/madde/Documents/Mirror/lib/features/clarity_scan/data/mock_reading_generation_repository.dart:193) vorsichtigere Ergebnisse. Ein No-Contact-Fall nennt das Respektieren einer Kontaktgrenze. Das sind brauchbare Schutzmaßnahmen gegen pauschale negative Deutungen.

Ergebnisse werden lokal archiviert. Bereits angezeigte ausführliche Inhalte können als unveränderliche Snapshots wieder geöffnet werden. Eine Tageskarte bleibt innerhalb eines Kalendertags dieselbe; das öffentliche „noch einmal ziehen“-Werkzeug ist ausgeschaltet. Diese Grundlagen sollten erhalten bleiben. Ihre tatsächliche Darstellung und Persistenz im aktuellen Android-Build müssen noch praktisch geprüft werden.

## Konkrete Befunde und ihre Bedeutung

### M01 · Eigenes Verhaltensmuster kann der eigenen Antwort widersprechen

**Im aktiven Code nachvollziehbar und im aktuellen Webbuild reproduziert.** Das Scoring zählt Antworten zu ihrem Verhalten und zum Gefühl nach Kontakt doppelt. Derselbe dominante Tag bestimmt anschließend den Text „Your Emotional Pattern“. Damit kann die Antwort über die andere Person die ausdrücklich gewählte eigene Reaktion verdrängen.

Konkreter Fall: `Dating` → `I cannot stop thinking about them` → **`I go silent`** → **`Avoids serious conversations`** → `Calmer and more secure`. Das ergibt `avoidant_behavior` mit zwei Punkten gegenüber je einem Punkt für Intensität und Rückzug. Der Hauptagent öffnete nach einem zweiten Scan mit diesen Antworten „Read more — included“. Unter „Your Emotional Pattern“ stand tatsächlich, man begegne ihrem Rückzug durch Nähe, Wärme und Verfügbarkeit. Das passt nicht zu „I go silent“. In der zuvor wiedergeöffneten gespeicherten Kurzansicht war ebenfalls der entsprechende Text „You stay engaged and hopeful …“ sichtbar. Der Nachweis gilt für die aktuelle lokale Quelle im Web, nicht automatisch für den veröffentlichten Android-Build.

Das ist für ein Produkt, das persönliche Klarheit verspricht, relevanter als eine zusätzliche Funktion. Eigene Reaktion und beobachtetes Verhalten sollten getrennt ausgewertet werden; ein Beispieltest mit Rückzug und einer mit aktivem Nachfragen reicht als erste Absicherung. Quellen: [Scoring](C:/Users/madde/Documents/Mirror/lib/features/clarity_scan/domain/clarity_scoring.dart:30), [Antwort-Tags](C:/Users/madde/Documents/Mirror/lib/features/clarity_scan/data/mock_clarity_scan_repository.dart:106), [Volltext-Auswahl](C:/Users/madde/Documents/Mirror/lib/features/clarity_scan/domain/clarity_premium_content.dart:28), [betroffener Text](C:/Users/madde/Documents/Mirror/lib/features/clarity_scan/domain/clarity_premium_content.dart:81).

### M02 · Eine gespeicherte Kurzansicht ist nicht dieselbe Ansicht wie das erste Ergebnis

**Im aktiven Code belegt und im aktuellen Webbuild reproduziert.** Das erste Ergebnis zeigt „What's happening“, „What the pattern suggests“, „What to watch for“ und „Your next step“. Nach „Back to my next step“ führt Home zum gespeicherten Reading. Falls der Volltext noch nie geöffnet wurde, zeigt dessen [_freeSections](C:/Users/madde/Documents/Mirror/lib/features/clarity_scan/presentation/full_reading_screen.dart:57) stattdessen „Your pattern“, „Their pattern“, „The dynamic“ und „Next step“. Der Hauptagent hat die gesamte gespeicherte Ansicht durchgescrollt: „What to watch for“ fehlte dort; dafür wurde der andere bisher nicht sichtbare Text eingeführt.

Außerdem fehlte in dieser gespeicherten Kurzansicht ein Button zum aktuell kostenlos enthaltenen Volltext. Das Archiv ist absichtlich unveränderlich; dennoch ist der Weg für Nutzer unnötig schwer nachvollziehbar. Ein kleiner erster Schritt wäre, dieselben Ergebnisabschnitte konsistent wieder zu zeigen. Der Ausbau eines gespeicherten Ergebnisses sollte bewusst entschieden werden, statt dafür den gesamten Scan wiederholen zu müssen. Repro: Scan abschließen, „Read more“ nicht öffnen, Home → „Your last reading“. Auf einem nativen Android-Gerät wurde dieser Ablauf nicht getestet.

### M03 · Der tägliche Wiederkehrnutzen bleibt begrenzt

**Codefakt mit Produktbewertung.** [Insights](C:/Users/madde/Documents/Mirror/lib/features/daily_insight/data/mock_daily_insight_repository.dart:8) enthält sieben Texte und wählt nach Tag des Jahres modulo sieben. Es verwendet weder Scan noch Pattern-Profil und wiederholt sich nach einer Woche. „Journal prompt“ ist eine gelesene Anregung, keine Eingabefunktion. Die gespeicherten Readings sind ebenfalls nur lesbar.

Das ist für einen kleinen kostenlosen Einstieg vertretbar. Für dauerhafte Nutzung oder ein späteres Abo ist der wiederholte Nutzen noch nicht ausreichend gezeigt. Als kleiner Versuch genügt, am letzten konkreten nächsten Schritt anzuknüpfen: Ist seitdem etwas klarer geworden, und was hat tatsächlich stattgefunden? Dafür braucht es zunächst weder eine KI-Anbindung noch ein großes Journal. Ob Nutzer das wünschen, muss mit echten Rückmeldungen geprüft werden; der Code beweist keine Abwanderung.

### M04 · Lokale Speicherung ist nachvollziehbar, Datenkontrolle und Backup-Aussage bleiben offen

**Codefakten:** Antworten und Ergebnisse werden dauerhaft in [SharedPreferences](C:/Users/madde/Documents/Mirror/lib/features/journal/data/shared_prefs_user_state_repository.dart:280) gespeichert. Settings bietet Analytics, Privacy Policy, Disclaimer und Version, jedoch keinen Button zum Löschen der eigenen Readings oder aller lokalen Antworten. Der aktive Repository-Vertrag hat ebenfalls keinen vollständigen Löschvorgang. Eine einfache Löschfunktion mit verständlicher Bestätigung wäre bei diesen persönlichen Inhalten angemessen.

Die Hauptseite sagt „Answers stay on this device“. Im Quell-[AndroidManifest](C:/Users/madde/Documents/Mirror/android/app/src/main/AndroidManifest.xml:3) sind keine expliziten Backup- oder Extraktionsregeln gesetzt. Android nimmt Apps standardmäßig am Auto Backup teil; dabei können auch SharedPreferences gesichert werden. Ob das auf einem konkreten Gerät passiert, hängt unter anderem von Geräteeinstellungen und Build ab. Daher ist **kein tatsächlicher Upload nachgewiesen**. Vor dem nächsten Release sollten der zusammengeführte Manifeststand, Cloud-Backup und Gerätetransfer bewusst geprüft und mit dem Versprechen abgestimmt werden. [Android-Dokumentation zu Auto Backup](https://developer.android.com/identity/data/autobackup?hl=en).

### M05 · „Heute“ kann nach einem Tageswechsel veraltet bleiben

**Codebasierter Zuverlässigkeitsbefund; nicht über Mitternacht praktisch getestet.** `todaysCardProvider` und `todaysInsightProvider` sind gecachte Provider ohne Datum als Abhängigkeit. Beim Wiederaufnehmen der App bearbeitet [app.dart](C:/Users/madde/Documents/Mirror/lib/app/app.dart:26) nur Analytics. Die Datenberechnung kennt zwar das aktuelle Datum, wird durch das Wiederaufnehmen aber nicht neu ausgelöst.

Bleibt der Prozess über Nacht erhalten, kann die Darstellung gestern berechnete Inhalte unter „Today“ zeigen. Ein kleiner Datumsvergleich beim Wiederaufnehmen mit gezielter Aktualisierung der Tages-Provider wäre ausreichend. Ein Test sollte auch prüfen, dass ein RAM-gehaltenes Tarot-Ergebnis nach dem Datumswechsel nicht die alte Tageskarte wiederherstellt. Quelle: [Tages-Provider](C:/Users/madde/Documents/Mirror/lib/app/providers.dart:81), [Tarot-Restore](C:/Users/madde/Documents/Mirror/lib/features/mirror_card/presentation/mirror_card_providers.dart:55).

### M06 · Die aktuelle Quelle hat noch kein echtes Geschäftsmodell umgesetzt

**Absichtlicher Zustand, kein versteckter Kaufdefekt.** [earlyAccessFullReadingsEnabled](C:/Users/madde/Documents/Mirror/lib/features/paywall/data/mock_purchase_repository.dart:31) ist `true`. Volltexte, Deep Pattern und Tarot sind damit kostenlos freigeschaltet. Die verdrahtete Kauf-Implementierung setzt lediglich lokalen Mock-Premium-Zustand; eine echte Store-Abrechnung fehlt. Die vorhandene Mock-Paywall ist über eine Route registriert, erscheint im normalen freigeschalteten Ablauf aber nicht als Kaufhürde.

Mit diesem Stand kann man Nutzung und Interesse erproben, aber keine Zahlungsbereitschaft oder App-Umsätze aus funktionierendem Billing ableiten. Ich würde zunächst die inhaltliche Verlässlichkeit und einen klaren Nutzen prüfen. Falls der Nutzen bestätigt wird, passt ein kleiner transparenter Einzelkauf eher zum heutigen Umfang als ein unbegründetes Abo-Versprechen; diese Einschätzung ist eine zu testende Produktidee, kein Marktbeleg.

### M07 · Der ausführliche Text behauptet stellenweise mehr, als die Antworten belegen

**Im aktiven Inhalt belegt und für den genannten Testfall vom Hauptagenten in der Vollansicht gesehen.** Die Mixed-Signals-Fassung sagt, es gebe echte Momente von Interesse und diese seien nicht eingebildet. Die fünf Auswahlantworten erlauben jedoch keine sichere Aussage darüber, was die andere Person tatsächlich fühlt. Ein vorgeschalteter Hinweis „not a prediction“ löst diesen Widerspruch innerhalb des konkreten Textes nicht.

Die hilfreichere Richtung ist bereits in der kurzen Ergebnisansicht angelegt: beobachtetes Verhalten wiedergeben und eine mögliche Einordnung kennzeichnen. Auch der Volltext sollte dieses Maß halten und Annahmen über Interesse, Motive und Dynamik erkennbar als Möglichkeit formulieren. Es geht um eine kleine gezielte Textkorrektur, keine Erweiterung durch KI. Quelle: [Mixed-Signals-Volltext](C:/Users/madde/Documents/Mirror/lib/features/clarity_scan/domain/clarity_premium_content.dart:140). Die Wirkung dieses Textes auf echte Nutzer wurde nicht erhoben.

## Datenfluss und Analytics, konkret

Im aktiven Dart-Code und den aktuellen Paketabhängigkeiten wurde **keine Firebase-Integration** gefunden. Es gibt eine eigene [PostHogDelivery](C:/Users/madde/Documents/Mirror/lib/core/analytics/posthog_delivery.dart:29), die nur bei passenden Build-Defines **und** expliziter Zustimmung sendet. Ohne diese Kombination bleibt sie aus. Die konfigurierten Release-Defines wurden nicht ausgelesen; das tatsächliche Netzverhalten eines veröffentlichten Builds ist hier nicht geprüft.

Der Versand übernimmt eine geschlossene Ereignisliste, etwa App öffnen, Scan abschließen, Ergebnis sehen und zurückkehren. Der Body enthält Zeitpunkt, zufällige App-ID, Sessionnummer, Appversion, Kohorte und Zeitpunkt der Zustimmung. Antworten, Situationstags, Nachrichtentexte und Reading-IDs werden in diesem Payload nicht übernommen. Nach Zustimmung werden nur bereits aufgezeichnete Ereignisse der aktuellen Sitzung nachgesendet; frühere Besuche werden nicht wiedergegeben. Die Auswahl erklärt dieses Verhalten und kann in Settings widerrufen werden. Beim Widerruf werden Warteschlange und zufällige ID entfernt.

Das ist eine wesentlich präzisere Grundlage als ein pauschales „es werden keinerlei Daten verarbeitet“. Ein vollständiger Datenschutz- oder Sicherheitsaudit, eine Inhaltsprüfung der verlinkten Privacy Policy und eine Prüfung des tatsächlich veröffentlichten Binarys sind nicht Bestandteil dieser Teilprüfung.

## Ein kleiner sinnvoller nächster Umfang

1. **Ergebnislogik verlässlich machen:** eigene Reaktion getrennt von ihrem Verhalten auswerten und Ergebnis-/Archivabschnitte angleichen.
2. **Lokale Daten kontrollierbar machen:** einfaches Löschen anbieten und Android-Backup mit der Aussage zur lokalen Speicherung abstimmen.
3. **Tageswechsel sauber behandeln:** beim Wiederaufnehmen Tagesinhalte und alten Tarot-RAM-Zustand aktualisieren.
4. **Nutzen vor Ausbau prüfen:** den konkreten nächsten Schritt als Hauptnutzen beibehalten; mit wenigen echten Nutzern fragen, ob er hilft und ob sie deshalb wiederkommen. Erst danach Billing oder zusätzliche Inhalte entscheiden.

Die vorhandenen Tests wurden hier gelesen beziehungsweise inventarisiert, **nicht ausgeführt**. Es wurden keine neuen Tests oder Appänderungen erstellt. Die Bewertung von Layout, Bedienung auf einem Gerät, Store-Bildern, öffentlichen Texten und tatsächlichen Nutzungskennzahlen muss mit den getrennten Pilotnachweisen zusammengeführt werden.
