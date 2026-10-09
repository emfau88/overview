# Mirror / RelateLens – beobachteter Browserablauf

Stand: **09.10.2026**. Die folgenden Beobachtungen stammen aus der Bedienungsprüfung des Hauptagenten. Getestet wurde die unveränderte lokale Quelle **RelateLens 1.1.0+16** im isolierten Webbuild unter `http://127.0.0.1:8770/`, bei **390 × 844 Pixeln**. Es wurden erfundene Auswahlantworten verwendet. Das Originalprojekt, echte Android-Appdaten, Store-Einträge und Releases blieben unverändert.

Die Vorbereitung, Hashvergleiche und Plattformgrenzen stehen in [TEST-UMGEBUNG.md](TEST-UMGEBUNG.md). Dieser Ablauf ist **kein Test der veröffentlichten Android-App**. Quellcodebefunde über Tageswechsel, Backup und wirtschaftlichen Nutzen werden durch ihn nicht automatisch bestätigt.

## Einstieg und erster Scan

Der Hauptagent bediente den Home-Einstieg und schloss den Clarity-Scan mit diesen fünf Antworten ab:

1. `Dating`
2. `I cannot stop thinking about them`
3. `I go silent`
4. `Avoids serious conversations`
5. `Calmer and more secure`

Die erste Ergebnisansicht wurde vollständig gelesen. Sie zeigte vier Karten: **What's happening**, **What the pattern suggests**, **What to watch for** und **Your next step**. Diese kurze Ansicht grenzt ihre Einordnung als antwortenbasiert ab und nennt einen praktischen nächsten Schritt. Der enthaltene Volltext wurde in diesem ersten Durchlauf bewusst noch nicht geöffnet.

Die ruhige Kartenoberfläche und der kleine Frageumfang bilden einen brauchbaren Einstieg. Aus dem getesteten Ablauf wurde kein Bedarf für eine komplette Neugestaltung abgeleitet. Dies ist ein begrenzter Eindruck aus dem aktuellen mobilen Webviewport, keine umfassende Prüfung von Barrierefreiheit, verschiedenen Geräten oder sämtlichen Textgrößen.

## M02 · Gespeicherte Kurzansicht verändert das Ergebnis

Nach dem ersten Durchlauf ging der Hauptagent über **Back to my next step** zu Home und öffnete **Your last reading**. Die gesamte gespeicherte Ansicht wurde durchgescrollt.

Beobachtet wurde:

- Die gespeicherte Ansicht zeigte **Your pattern**, **Their pattern**, **The dynamic** und **Next step**.
- Der vorherige Abschnitt **What to watch for** war nicht vorhanden.
- Ein Button zum kostenlos enthaltenen Volltext war in dieser gespeicherten Ansicht nicht vorhanden.

Damit ist eine Inkonsistenz zwischen erster Ergebnisansicht und wiedergeöffneter Kurzansicht nachgewiesen. Es wurde kein Datenverlust behauptet: Der Code speichert eine umfangreichere Ergebnisstruktur, rendert im Archiv aber eine andere Auswahl. Die Verbesserung besteht in einer verständlichen, konsistenten Darstellung und einem bewusst geregelten Weiterweg.

## M01 · Beschreibung des eigenen Musters widerspricht der gewählten Reaktion

Bereits in der gespeicherten Kurzansicht stand unter **Your pattern** sinngemäß, man bleibe engagiert und hoffnungsvoll und deute kleine Öffnungen als Zeichen tieferen Interesses. Das passt nicht zur ausdrücklich gewählten Reaktion **I go silent**.

Der Hauptagent startete danach einen zweiten Scan mit derselben Antwortfolge und öffnete **Read more — included**. In der Vollansicht beschrieb **Your Emotional Pattern**, man begegne ihrem Rückzug durch Nähe, Wärme und Verfügbarkeit: „leaning in“, „staying warm“, „staying available“.

Der Widerspruch ist damit in zwei Darstellungswegen der aktuellen Webquelle beobachtet. Die Code-Gegenprüfung erklärt ihn: Das Verhalten der anderen Person zählt doppelt in denselben dominanten Tag, der den Text über das eigene Muster steuert. Eigenreaktion und beobachtetes Verhalten sollten getrennt behandelt werden.

## M07 · Der Volltext vermittelt zu große Sicherheit über fremdes Interesse

Im ausführlichen Text des zweiten Durchlaufs wurde echtes Interesse als vorhanden und nicht eingebildet behandelt. Aus den fünf Auswahlantworten ist diese Sicherheit nicht abzuleiten. Der Vergleich mit dem aktiven Textbaustein in `ClarityPremiumContent` bestätigte dieselbe Aussage.

Dies ist eine konkrete Inhaltskritik: Das Produkt sollte Beobachtung und mögliche Einordnung vermitteln. Unbekannte Gefühle und Absichten sollten auch im Volltext offenbleiben. Es wurde weder eine tatsächliche Beziehung analysiert noch die Wirkung des Textes auf echte Nutzer gemessen.

## Tageskarte / Tarot

Der Hauptagent öffnete **Daily** → **Draw today's card**, wählte **What am I not seeing?** und startete **Draw my card**. Eine verdeckte Karte im Format 2:3 erschien; die Animation enthüllte **The Star, XVII**. **Continue Reading** führte zum Tagesergebnis.

Das Ergebnis vermittelte ruhige Hoffnung und Geduld, die Anregung, vor weiterer Deutung erst Ruhe zurückkehren zu lassen, einen nächsten Schritt zur Erholung und einen ausführlichen Text. In diesem beobachteten Durchlauf gab es keine Bedienblockade. Creme- und Pflaumentöne sowie die Kartenkunst wirkten ruhig und stimmig.

Ein Wiederöffnen nach Neustart, weitere Kartentypen oder der Wechsel zum nächsten Tag wurden in diesem Ablauf noch nicht geprüft. Daraus folgt keine Bestätigung sämtlicher Tarot- oder Tageskartenpfade.

## Pattern, Insights, Settings und Reload

Alle vier Tabs und Settings ließen sich bedienen. **Pattern** zeigte einen verständlichen Einstieg „Discover your relationship pattern“, ungefähr zehn Fragen sowie Hinweise auf Trigger, Schutzmuster und blinde Flecken. Der Text grenzte den Test als keine klinische Diagnose ab. Der eigentliche Pattern-Fragebogen wurde in dieser Prüfung **nicht abgeschlossen**.

**Insights** zeigte heute Texte zum Sammeln kleiner Zeichen und den nächsten Schritt, das Handy für eine Stunde wegzulegen. „Journal prompt“ war eine gelesene Anregung; ein Eingabefeld war nicht vorhanden. Das bestätigt die Art der Ansicht, nicht die gesamte siebentägige Inhaltsrotation oder ihre Wirkung auf Nutzer.

**Settings** zeigte Privacy Policy, Disclaimer und Version **1.1.0 (16)**. Eine Löschfunktion war in der geprüften Settings-Ansicht nicht sichtbar. Da im Test keine PostHog-Defines gesetzt waren, war damit kein Produktions-Analytics-Schalter praktisch geprüft.

Nach Browserreload erschienen auf Home **Your readings: 2 saved** und **The Star** als Tageskarte weiterhin. Die Grundpersistenz dieser erfundenen Webdaten ist damit bestätigt. Daily zeigte anschließend **View today's reading** und **Your last 7 cards** mit The Star als **Today**. Der Reading-Button wurde nach dieser Rückkehr nicht erneut vollständig geprüft. Ein Android-Neustart, Restore oder Wechsel auf den nächsten Tag ist damit nicht getestet.

## Grenzen und noch nicht beobachtete Fälle

- M01, M02 und der konkrete M07-Text sind im aktuellen Webablauf bestätigt. Daraus folgt keine Bestätigung ihrer Existenz im älteren veröffentlichten Android-Release.
- Mehrere andere Antwortkombinationen, sämtliche neutralen Auswertungen und alle ausführlichen Textbausteine wurden nicht vollständig durchgespielt.
- Tageswechsel und erhaltene App-Prozesse über Mitternacht wurden nicht getestet. Die entsprechenden Risiken bleiben Codeableitungen.
- Android-Backup, Produktions-Analytics, native Bewertungsdialoge und reales Store-Billing wurden nicht im Netz- oder Gerätetest geprüft.
- Keine Unit- oder Widgettests wurden in diesem Lauf ausgeführt.
- Pattern-Intro, Insights-Ansicht, Settings und Grundpersistenz nach Browserreload wurden zusätzlich angesehen. Der komplette Pattern-Test und alle Reopen-Pfade wurden nicht durchgespielt.

Die vollständige Produktbewertung mit begrenzten nächsten Maßnahmen steht in [Mirror-Pilotanalyse.md](Mirror-Pilotanalyse.md); aktive Codepfade und Reproideen im [Codebericht](Mirror-code-review.md).
