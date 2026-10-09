# ZeroHero – Play-Console-Befunde

Abgelesen am **09.10.2026**, ausschließlich lesend. App: **ZeroHero: Drink & Smoke Less**, Paket `com.energycrafted.zerohero`. Die Auswahl „letzte sechs Monate“ wurde berücksichtigt. Keine Store-Texte, Releases oder Kontoeinstellungen geändert.

## Sechsmonatsauswahl: unterschiedliche Datenabdeckung

Quelle: [Mehr Nutzer gewinnen](https://play.google.com/console/u/0/developers/9121616106606927937/app/4973826835478985126/grow-overview), Messwerte **nach Gerät**, Auswahl **Letzte 6 Monate**. Die Diagrammachse zeigt 12. April bis 8. Oktober. Entscheidend sind jedoch die abweichenden Zeiträume in den jeweiligen Kennzahlen-Tooltips:

| Kennzahl | Anzeigewert | Verfügbare Daten laut Console | Bedeutung / Grenze |
|---|---:|---|---|
| Geräteimpressionen | **18.400** | 157 Tage, **01.05.–04.10.2026** | Tagesbezogene Geräteaufrufe auch von Symbol, Detailseite und anderen App-Inhalten. Keine 18.400 verschiedenen Menschen und keine 18.400 Store-Besucher. |
| Geräteakquisitionen | **31** | 140 Tage, **13.04.–30.08.2026** | Geräte, auf denen die App installiert wurde; keine Zahl ausschließlich neuer Personen. |
| Erstes Öffnen (Geräte) | **18** | 80 Tage, **19.04.–07.07.2026** | Erste Öffnung nach Installation, innerhalb von 180 Tagen; Neu- und Wiederinstallationen berücksichtigt. |
| Monatlich aktive Geräte | **3** | Tooltip nennt **08.07.**, jeweils vorherige 28 Tage | Der am 08.07. angezeigte Wert bezieht sich auf die vorherigen 28 Tage; daraus wird weder ein DAU-Wert noch eine Gesamtzahl aktiver Nutzer über sechs Monate abgeleitet. |
| Gerätebindung (7 Tage) | **1** | In dieser Prüfung nicht weiter aufgeschlüsselt | Console-Anzeigewert; keine belastbare Bindungsquote daraus abgeleitet. |

Die Vergleichsdeltas wurden nicht für die Empfehlung verwendet. Die unterschiedliche Datenabdeckung erlaubt insbesondere **keine gemeinsame Conversion-Kette aus 18.400 → 31 → 18**. Auch 18/31 wäre keine belegte Aktivierungsquote. Warum die Daten nur diese Teilzeiträume abdecken, wurde nicht geklärt; fehlende Daten wurden nicht als null interpretiert.

## Leistung der Store-Einträge

Quelle: Bereich **Store-Einträge**, erreichbar über [App-Präsenz](https://play.google.com/console/u/0/developers/9121616106606927937/app/4973826835478985126/store-listings). Der Zeitraum dieser Performance-Karten ist von der Auswahl in „Mehr Nutzer gewinnen“ unabhängig.

| Sichtbarer Zeitraum | Store-Besucher | Eindeutige Installationsklicks | Console-CTR |
|---|---:|---:|---:|
| Letzte 28 Tage; **08.09.–05.10.2026** | **9** | **1** | **11 %** |
| Letzte 180 Tage ausgewählt; angezeigte verfügbare Spanne **10.07.–05.10.2026** | **40** | **5** | **13 %** |

Die zweite Zeile wird ausdrücklich **nicht** als volle Sechsmonatsbilanz bezeichnet. Die 13 % sind gerundet; 5/40 ergibt 12,5 %. Ein Installationsklick ist eine Absicht beziehungsweise Handlung im Store, noch kein Nachweis einer erfolgreichen Installation oder späteren Nutzung. Besucher können bei Besuchen an unterschiedlichen Tagen erneut gezählt werden. Die unterhalb stehende Store-Eintragstabelle und die feste 90-Tage-Conversion-Karte wurden wegen anderer Zeiträume nicht mit diesen Karten vermischt.

Google hat die Store-Berichte im Juli 2026 auf Besucher, Installationsklicks und CTR umgestellt. Akquisitionen auf anderen Play-Flächen gehören nicht automatisch zu diesem Store-Bericht. [Google: Store performance](https://support.google.com/googleplay/android-developer/answer/9859173?hl=en).

**Einordnung:** Das gemeldete Besucher- und Installationsklickvolumen ist sehr klein. Fünf Klicks reichen nicht, um die Store-Darstellung zuverlässig als gut oder schlecht zu bewerten. Es ist weder bewiesen, dass die Screenshots das Hauptproblem sind, noch dass die App schon ausreichend nachgefragt wird.

## Ergänzende Dashboard-Zahlen

Quelle: [App-Dashboard](https://play.google.com/console/u/0/developers/9121616106606927937/app/4973826835478985126/app-dashboard), dort angezeigte **letzte 28 Tage**. Geräteakquisitionen **1**, erstes Öffnen **1**, monatlich aktive Geräte **1**. Der dortige kumulative Zähler „Installationen insgesamt“ stand auf **79**; er ist keine Zahl aktueller Nutzer. In der App-Liste wurde eine installierte Zielgruppe von **4** angezeigt; ebenfalls kein lebenslanger Downloadzähler.

Die Aktivitätsanzeige in diesem Dashboard und diejenige im Wachstumsbereich unterscheiden sich. Deshalb werden sie nicht zu einer gemeinsamen Reihe zusammengesetzt. Crash-, ANR- und Bewertungsfelder zeigten **„–“**: Daten nicht verfügbar, nicht bestätigte Fehlerfreiheit oder null Bewertungen. Die Dashboard-Durchschnitte einzelner Kennzahlen wurden nicht als Gesamtraten übernommen.

## Veröffentlichungsstand

- Console: Release **25 (1.0.3)**, veröffentlicht **23.05.2026, 00:04**, Rollout **100 %**.
- Öffentlicher [Play-Auftritt](https://play.google.com/store/apps/details?hl=en_GB&id=com.energycrafted.zerohero): **50+ Downloads**, ausgewiesenes Update **22.05.2026**.
- Lokaler Quellstand: `1.0.3+25`. Gleiche Versionsnummer ist **kein Nachweis identischer Quellen oder identischen Verhaltens**.
- Die lokal vorhandene ältere APK mit Versioncode 24 ist nicht das bestätigte Release 25.

## Für die nächste Messung

Nach einem kleinen Qualitätsupdate dieselben Kennzahlen mit **derselben verfügbaren Zeitspanne** vergleichen. Store-Besuche und Klicks beschreiben den Store; tatsächliche Erstnutzung und Wiederkehr beschreiben das Produkt. Bei erneut sehr wenig Besuchern braucht es einen begrenzten Versuch, geeignete Nutzer zu erreichen. Bei vielen Besuchern und wenigen Klicks lohnt eine gezielte Store-Änderung. Bei Installationen ohne Wiederkehr wird der Einstieg beziehungsweise laufende Nutzen wichtiger. Für ZeroHero ist derzeit keine statistisch belastbare Ursachenaufteilung möglich.
