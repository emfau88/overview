# KESSELKRAWALL – gezielte Quellengegenprüfung

Stand: **09.10.2026**. Diese Gegenprüfung folgt den eigenen praktischen Beobachtungen der ersten beiden Runden und dem Beginn von Runde 3. Alte Qualitätsbehauptungen, Balancereports und Testscores wurden nicht als Urteil übernommen. Der [praktische Bericht](Grundanalyse.md) dokumentiert die tatsächlich bedienten Wege.

## Test- und Quellenstand

Basis ist der feste öffentliche `main`-Commit **`83d17ab14ff265559b58652e9040eecef7d7ad51`** des Repositorys [emfau88/KesselKrawall](https://github.com/emfau88/KesselKrawall/commit/83d17ab14ff265559b58652e9040eecef7d7ad51). Die saubere Quellen-/Assetkopie wurde gegen Git-Blob-SHA1 geprüft und mit den Pages-Einstellungen als lokaler Next-Export gebaut. Alle ausgewählten Quell-Dateien blieben beim Build nach SHA256-Vergleich unverändert. Getestete Adresse: **`http://127.0.0.1:8768/KesselKrawall/`**. Ein eigener Node-HTTP-Helfer lieferte die unveränderten Exportdateien ausschließlich auf Loopback aus.

Die öffentliche Pages-Fassung zeigte bereits einen gespeicherten Runde-2-Zustand. Dieser wurde nicht überschrieben; die lokale Origin diente dem frischen Lauf. Der Originalcheckout hat denselben HEAD, aber zahlreiche bestehende Änderungen, unter anderem am Game-Modul und Layout. Er wurde nicht als identische Quelle des öffentlichen Spiels behandelt und nicht verändert. Ein lokaler Export ist auch kein lückenloser Bytegleichheitsnachweis zur gerade ausgelieferten Pages-Fassung. Details: [Provenienz](runtime/README.md).

Die folgenden Zeilen beziehen sich ausschließlich auf die saubere, unveränderte Quelle dieses Commits.

## Kauf mit zu wenig Gold – Ablehnung korrekt, Text im Markt nicht gerendert

**Praktische Beobachtung:** In Runde 3 blieben ein Gold und vier Zutaten. Eine weitere Chilischote kostete drei Gold und zeigte eine Merge-III-Vorschau. Der tatsächliche Klick führte zu keiner gesehenen visuellen beziehungsweise Accessibility-Textänderung; Gold und Zutaten blieben erhalten. Damit war die Ursache des wirkungslosen Klicks nicht unmittelbar erklärt.

**Aktive Quellenkette:**

1. `app/game/state.ts:396–405` prüft Angebot und Preis. Bei zu wenig Gold wird der unveränderte Zustand mit Fehler **„Nicht genug Gold.“** zurückgegeben. Gold wird erst hinter dieser Prüfung abgezogen (`state.ts:407`). Kein belegter Goldverlust oder Datenfehler.
2. `app/game/Game.tsx:2509–2514` behandelt diesen Fehler mit `announceActionError` und bricht vor erfolgreichem Kauf ab.
3. `Game.tsx:2441–2452` setzt dabei den Feedbacktext und löst einen Fehler-Sound aus. Audio wurde im praktischen Test nicht gehört; daraus wird keine gehörte Rückmeldung behauptet.
4. Der einzige Ausgabeort des variablen Feedbacktexts liegt bei `Game.tsx:3887–3889` als `phase-message` mit `aria-live="polite"` **innerhalb der Arena**. Die Arena wird aber bei Shopphase überhaupt nicht gerendert (`Game.tsx:3722`). Ein vorhandener Fehlertext im React-State ist somit im Markt kein sichtbarer beziehungsweise semantisch ausgegebener Hinweis.
5. Die Shopkarte wird nur bei bereits gekauftem Angebot oder `busy` deaktiviert (`Game.tsx:4176–4189`); die Goldmenge gehört nicht zu dieser Bedingung. Kaufpreis und Mergevorschau sind weiterhin angezeigt (`Game.tsx:4215–4247`).

**Einordnung:** Die konkrete Laufzeitbeobachtung passt zum zusammenhängenden Codepfad. Der kleine Befund betrifft Rückmeldung und Darstellung einer Kaufgrenze, nicht die Zustandsvalidierung. Sinnvoll wäre ein kurzer sichtbarer Shop-Hinweis oder eine klar erkennbare, erklärte Geldgrenze direkt am Angebot. Eine bloße deaktivierte Karte ohne Erklärung muss nicht die beste Lösung sein. Ein späterer Fix benötigt den gleichen Kaufversuch in schmaler und breiter Ansicht; bisher wurde nichts geändert.

## Merge- und Familienregeln erklären die beobachteten Stufen

`state.ts:267–285` sucht identische Zutaten **gleichen Levels**. Ein gekaufter Level-I-Gegenstand wird zunächst mit vorhandenem Level I zusammengeführt (`state.ts:297–338`). Weitere gleichstufige Treffer können die Kette bis Level III fortsetzen (`state.ts:340–367`). `state.ts:373–393` berechnet die Kaufvorschau anhand derselben Mergefunktion.

Damit passen beide beobachteten Wege zusammen:

- Zweite Chilischote bei vorhandenem Chili I: automatische Zusammenführung im bisherigen Slot auf II.
- Eine neue Chilischote bei vorhandenem Chili II: neues Chili I auf einem freien Slot. Erst der nächste passende Kauf kann I → II und mit dem bestehenden II weiter → III auslösen; im Test wurde nur die Vorschau auf diesen weiteren Kauf gesehen, der Kauf scheiterte am Gold.

Die Chiliwerte sind `4 / 9 / 18` bei Takt `3,2 / 3,0 / 2,7` Sekunden (`app/game/data.ts:45–60`). Vorschau und Mergeoverlay greifen auf diese Stufenwerte zu (`Game.tsx:2525–2548`), was zur tatsächlich gesehenen I→II-Änderung passt.

Familienpunkte sind keine bloße Anzahl belegter Slots. `state.ts:177–193` zählt pro aktivem Gegenstand **`2 ** (level - 1)`**, also I=1, II=2 und III=4; Synergie beginnt ab drei Punkten. Anzeige und aktive Bonusbeschreibung stehen bei `Game.tsx:964–999`. Itemdetails nennen bei noch inaktiver Familie bereits den eigenen Beitrag (`app/game/itemInsights.ts:332–349`). Für aktive Familie wird der Bonus erklärt.

**Gestaltungseinordnung:** Die Regel ist vorhanden und die Kaufvorschau hilft schon. Eine knappe sichtbare Grundregel zu gleichen Levels und Stufenpunkten könnte den ersten Aufbau schneller verständlich machen. Der Ersttest belegt keinen notwendigen umfassenden Tutorialumbau oder kaputtes Mergeverhalten.

## Nachbarschaft, Kampfbeiträge und bedienbare Unterbrechung

Goldlöffel I kostet vier Gold, hat einen Takt von 4,6 Sekunden und stärkt direkte passende Schutz-Nachbarn um 16 Prozent (`data.ts:220–238`). `itemInsights.ts:228–260` erzeugt die konkrete Zielslotliste und Stärkeangabe für den Inspector. Das passt zum beobachteten markierten Egg-Nachbarn und der lesbaren Mobile-Detailansicht. Positionstausch und Verkauf wurden jedoch nicht ausgeführt; sichtbare Bedienhinweise und Verkaufspreise sind kein vollständiger Funktionsnachweis dieser Aktionen.

Die tatsächliche Kampfpräsentation verarbeitet eine vorbereitete Ereignisfolge mit getrenntem Präsentationszeitmesser. Bei Pause werden keine weiteren Präsentationsschritte verarbeitet (`Game.tsx:2150–2168`); Beschleunigung fließt in die Fortschrittsberechnung ein. Das stützt die bedienten Pause-/Fortsetzen- und 1x-/4x-Wege, beweist aber keine Timingkorrektheit bei allen Ereignissen, Hintergrundwechseln oder Geräten. Ergebnis und Beitragswerte wurden nach beiden eigenen Siegen gesehen; ihre gesamte Rechenmatrix wurde nicht systematisch geprüft.

## Neu würfeln, Fortsetzen und lokale Speicherung

`state.ts:534–545` setzt den ersten Neuwurf pro Marktphase auf null Gold, weitere auf ein Gold. Das passt zum tatsächlichen Gratiswurf in Runde 3 mit erhaltenem Gold und danach angezeigt kostenpflichtigem Button. Verbleibende Shopaktionen wurden dadurch nicht komplett getestet.

`app/game/storage.ts:19–40` lädt/sanitisiert den lokalen Lauf und speichert den Zustand. `Game.tsx:1830–1878` stellt ihn beim Start wieder her; `Game.tsx:2021–2026` persistiert Änderungen im Spiel. Rückkehr zum Menü speichert erneut (`Game.tsx:2810–2811`), Fortsetzen schaltet zurück auf das Spiel (`Game.tsx:2804–2807`). Im tatsächlich bedienten Reload-/Fortsetzen-Fall blieben Runde 3, drei Siegel, ein Gold, vier Zutaten und aktive Synergien sichtbar erhalten.

Das ist ein positiver Nachweis für **diesen lokalen Origin- und Laufzustand**. Er beweist weder Cloud-/Gerätewechsel-Speicherung noch Migration aller älteren Saves, blockierten Speicher, lange Unterbrechungen oder Ergebniswiederaufnahme. Der öffentliche vorhandene Save wurde nicht verändert.

## Prüfgrenzen

Keine Qualitätsurteile aus älteren Berichten. Keine neuen automatisierten Spieltests, kein Lintlauf und keine komplette Balanceberechnung. Die Export-Kompilierung und TypeScript-Phase wurden bei der Vorbereitung ausgeführt; ihre Aussage ist technische Baubarkeit, nicht geprüfte Spielqualität. Praktisch offen bleiben Runde-3-Kampf, vollständige Kampagne, Niederlage/Siegelverlust, Vitrine, weitere Familien, echtes Touchgerät, hörbares Audio, Langzeitmotivation und echte Spielerreaktionen. Keine Originalquelle, keine Angebotsregel und keine Veröffentlichung verändert.
