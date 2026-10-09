# KESSELKRAWALL – erste praktische Grundanalyse

Stand: **09.10.2026**. Repository: [emfau88/KesselKrawall](https://github.com/emfau88/KesselKrawall). Öffentliche Fassung: [Kessel-Krawall öffnen](https://emfau88.github.io/KesselKrawall/).

**KESSELKRAWALL zeigt in den ersten beiden gespielten Runden eine überzeugende, zusammenhängende Produktbasis.** Der Fantasyauftritt hat Charakter, der Einstieg führt verständlich vom Gegner zum Markt, Käufe und automatische Merges reagieren sichtbar, Kämpfe lassen sich beschleunigen und pausieren. Die schmale Ansicht ist besonders ordentlich: kompakte Angebote, verständliche Itemdetails und erreichbare feste Hauptaktionen. Ein kleiner klarer UX-Befund ist der Kaufversuch mit zu wenig Gold: Der Zustand bleibt korrekt erhalten, aber der Markt zeigt die Ablehnung nicht sichtbar an. Ein kleiner Pflegeansatz reicht zunächst; aus diesem Ersttest folgt kein umfassender Neubau.

## Welche Fassung tatsächlich gespielt wurde

Die öffentliche Pages-Fassung enthielt beim ersten Öffnen bereits einen gespeicherten Zustand in Runde 2 mit einem Siegel gegen Moor Martha. Dieser wurde unangetastet gelassen. Für den frischen Lauf wurde eine saubere Kopie des aktuellen öffentlichen main-Commits **`83d17ab14ff265559b58652e9040eecef7d7ad51`** als isolierter Next-Export gebaut und auf **`http://127.0.0.1:8768/KesselKrawall/`** gespielt. Ein eigener lokaler HTTP-Helfer lieferte die Exportdateien unverändert aus; er ist keine Spieländerung.

Die Source-/Assetkopie wurde anhand Git-Blob-SHA1 und SHA256 zugeordnet. Originalcheckout und öffentlicher Spielstand wurden nicht verändert. Der Originalcheckout hat denselben HEAD, aber vorhandene Änderungen an Spiel und Layout; er ist keine automatisch identische Testbasis. Der lokale Export ist außerdem kein Bytegleichheitsbeweis zur gerade veröffentlichten Pages-Auslieferung. Details stehen in [runtime/README.md](runtime/README.md).

**Prüfflächen:** Desktop 1281×800 und schmale Browseransicht 391×844. Zwei eigene Kämpfe tatsächlich gewonnen, anschließend Aufbau in Runde 3 und Reload/Fortsetzen geprüft. Sieben unveränderte JPEG-Aufnahmen mit [Herkunftsnachweis](screenshots/manifest.json) ergänzen den Bericht. Browserbreite ersetzt kein physisches Touchgerät.

## Tatsächlich bedienter Ablauf

| Abschnitt | Beobachtung im eigenen frischen Lauf |
|---|---|
| Start | Spielen führte zur Einführung gegen Zischbert, Variante 3/3, Gegner 20 HP, eigener Kessel 100 HP; Runde 1, sieben Gold, drei Siegel. Danach erklärter Einstieg in den Markt. |
| Markt Runde 1 | Chili für drei Gold auf Slot 1 und Egg/Eierschale für drei Gold auf Slot 2 gekauft; ein Gold blieb. Gekaufte Angebote wurden erkennbar grau. Chilidetail zeigte Takt 3,2 Sekunden, Feuer 1/3 und Verkauf +1; Tauschanweisung sichtbar. Verkauf und Tausch wurden nicht ausgeführt. |
| Kampf Runde 1 | Automatischer Kampf, 1x/4x und Pause/Fortsetzen tatsächlich bedient. Pause machte Status und verbleibende HP nachvollziehbar. Sieg gegen Zischbert: Gegner 0, eigener Kessel 82 HP. Ergebnis zeigte Chili fünf Auslösungen/20 Schaden und Egg vier Auslösungen/24 Schild. |
| Übergang Runde 2 | Belohnung +6; damit wieder sieben Gold. Eigener Kessel wieder 100 HP, drei Siegel erhalten. |
| Markt Runde 2 | Zweiter Chili-Kauf führte automatisch von I auf II im bisherigen Slot. Overlay erklärte Schaden 4 → 9 und Takt 3,2 → 3,0 Sekunden; Feuer 2/3. Goldlöffel für vier Gold kam auf Slot 3, Gold danach 0. |
| Schmale Markt-/Detailansicht | 391×844 ohne horizontalen Überlauf. Drei kompakte Angebote und feste Aktionen Neu würfeln/Kampf starten. Goldlöffel-Details erreichbar: Takt 4,6 Sekunden, 16 Prozent Verstärkung für benachbarte passende Eierschale; Zielslot wurde sichtbar und semantisch markiert. Verkauf +2 sichtbar. |
| Kampf Runde 2 | Gegen Moor Martha, Variante 1/3, 86 HP, bei 4x bis zum Sieg gespielt. Gegner 0, eigener Kessel 91 HP und sieben Schild. Mobile Ergebnisansicht: Chili II neun Auslösungen/86 Schaden, Egg sieben/49 Schild, Goldlöffel fünf/17 Heilung. Belohnung +7 und Runde 3 mit sieben Gold. |
| Markt Runde 3 | Egg-Kauf erzeugte II und Schutz 3/3 mit zwölf Startschild/15 Prozent Verstärkung. Neuer Chili I kam neben vorhandenem Chili II auf Slot 4; Feuer 3/3 mit 22 Prozent Direktschaden. Vier Zutaten, Buildanzeige 71, ein Gold. |
| Kaufgrenze | Weiteres Chiliangebot kostete drei Gold und zeigte Merge-III-Vorschau. Klick bei einem Gold änderte weder Gold noch Zutaten; kein visueller beziehungsweise Accessibility-Erklärtext wurde gesehen. |
| Neuwurf und Fortsetzen | Erster Neuwurf gratis: drei andere Angebote, Gold blieb 1, danach Preis 1. Hauptmenü zeigte Fortsetzen für Runde 3 mit drei Siegeln gegen Siggi. Reload und Fortsetzen stellten vier Zutaten, Synergien und ein Gold wieder her. |

Diese Zahlen dokumentieren die eigene Sitzung und ihre beobachteten Ergebnisanzeigen. Sie sind **keine Nutzungs-KPIs, Schwierigkeitsnote oder vollständige Rechenprüfung**. Zwei gewonnene Einstiegsrunden beweisen weder zu leichte Balance noch eine gut abgestimmte gesamte Kampagne.

## Stärken

- **Eigenständiger Fantasycharakter:** Charakterkessel, Zutatenillustrationen, Markt- und Kampfumgebung bilden einen zusammenhängenden Auftritt. Der Aufbau bleibt trotz dekorativer Umgebung erkennbar.
- **Geführter Start mit sichtbaren Reaktionen:** Einführung, Käufe, ausgegraute Angebote, Mergeoverlay und konkrete Vorher-/Nachher-Werte erklären die Grundschleife praktisch. Der erste bessere Chili fühlte sich als greifbare Veränderung an.
- **Sehr brauchbare schmale Darstellung:** Kompakte Karten und feste Hauptaktionen reduzieren unnötige Suche. Das Itemdetail zeigte Wirkung, Takt, Nachbarbezug und Verkaufswert erreichbar; kein horizontaler Überlauf in der geprüften Breite.
- **Lesbarer automatischer Kampf:** Beschleunigung und Pause helfen beim Beobachten. Ergebnisbeiträge machen den Anteil eigener Zutaten nachvollziehbarer als nur ein Sieg-/Niederlagetext.
- **Fortsetzen im geprüften Fall zuverlässig:** Der konkrete Runde-3-Aufbau blieb nach Menüwechsel und Reload erhalten. Dadurch musste der gerade gebaute Kessel nicht erneut zusammengestellt werden.

## Vier zentrale Befunde

### 1. Kauf mit zu wenig Gold braucht sichtbare Marktrückmeldung

**Laufzeitbeobachtung plus aktive Codegegenprüfung:** Der Klick auf das Drei-Gold-Chili bei einem Gold wirkte ohne Erklärung. Die Quelle lehnt den Kauf korrekt vor einer Zustandsänderung ab. Sie setzt auch einen Fehlertext, dessen einzige Ausgabe jedoch innerhalb der in der Shopphase nicht gerenderten Arena liegt. Die Shopkarte bleibt bei zu wenig Gold anklickbar.

**Einordnung:** Kleiner konkreter Bedienbefund, kein Goldverlust und kein kaputtes Merge- oder Savesystem. Ein Fehler-Sound ist im Code vorhanden, wurde aber nicht gehört und ersetzt keinen sichtbaren Preisgrund.

**Vorschlag:** Direkt im Markt kurz „Nicht genug Gold – noch 2 benötigt“ oder eine ähnlich klare Kaufgrenze anzeigen. Die Vorschau darf als hilfreiche Information erhalten bleiben. Bei einem späteren Fix die gleiche Grenze mobil und auf Desktop prüfen.

### 2. Mergelevel und Familienpunkte könnten mit einer kurzen Grundregel schneller klar werden

**UX-Einschätzung:** Die vorhandene Kaufvorschau und der Mergeoverlay sind gut. Trotzdem ist für den ersten Aufbau nicht ganz selbstverständlich, warum ein neuer Chili I neben Chili II liegen bleibt und später eine III-Kette entstehen kann oder warum ein einzelnes Level-II-Item zwei Familienpunkte zählt.

**Quellengegenprüfung:** Gleiche Zutat gleichen Levels verschmilzt; ein Kauf beginnt bei I und kann eine Kette auslösen. Stufen zählen für Familien I=1, II=2, III=4; ab drei Punkten gilt der Bonus. Details enthalten bereits den Beitrag, die Regel ist also nicht insgesamt unerklärt oder falsch.

**Vorschlag:** Vorhandene Erklärungen um eine knappe sichtbare Regel präzisieren und mit dem bestehenden Kaufpreview verbinden. Kein langes Tutorial und keine Änderung der Regeln erforderlich. Diese Einschätzung ist keine belegte Verständnisquote echter Nutzer.

### 3. Mobile Kompaktheit und Itemdetails sind eine Stärke zum Erhalten

**Laufzeitbefund:** Markt, drei Angebote, Itemdetail und feste Aktionen waren in der schmalen Ansicht gut erreichbar. Nachbarschaft des Goldlöffels wurde konkret auf der Eierschale markiert. Die Oberfläche hilft damit bei echten Aufbaumentscheidungen.

**Grenze:** Kein physischer Touch, kein alter beziehungsweise schwacher Android-Browser, keine komplette Detailmatrix und kein vollständiger Tastatur-/Accessibilitytest. Aus 391 Pixeln folgt keine geprüfte Gerätetauglichkeit aller Fälle.

**Vorschlag:** Diese Struktur beim kleinen Feedback-/Textupdate erhalten und auf einem echten Handy kurz bestätigen. Kein Anlass aus diesem Befund, das mobile Layout umzubauen.

### 4. Der eigene Runde-3-Aufbau wurde nach Reload korrekt fortgesetzt

**Laufzeitbefund:** Runde, drei Siegel, ein Gold, vier Zutaten und aktive Synergien waren nach Menü, Reload und Fortsetzen wieder vorhanden. Das stützt den konkreten Fortsetzungsweg der lokalen Testfassung.

**Grenze:** Kein Cloud-/Gerätewechselnachweis, keine Migration aller alten Saves, blockierter Speicher oder Wiederaufnahme eines laufenden beziehungsweise abgeschlossenen Kampfs getestet. Der bestehende öffentliche Save wurde nicht angerührt.

**Vorschlag:** Das funktionierende Verhalten erhalten; bei einer späteren Spieländerung denselben kleinen Persistenzfall erneut prüfen. Für weitere Zuverlässigkeitsurteile wären gezielte Randfälle erforderlich.

## Drei kleine nächste Maßnahmen

1. **Shop-Kaufgrenze sichtbar machen.** Rückmeldung bei zu wenig Gold im tatsächlich gerenderten Markt ergänzen und knapp erklären, statt den Klick wirkungslos erscheinen zu lassen. Gold/Zutaten müssen dabei unverändert bleiben. Noch nicht umgesetzt.
2. **Vorhandene Merge-/Familienerklärung präzisieren.** Gleiche Levels sowie I=1/II=2/III=4 Familienpunkte knapp sichtbar erklären. Vorschau, Mergeoverlay, Nachbarmarkierung und Mobile-Kompaktheit erhalten.
3. **Begrenzten Folgecheck statt großen Umbau planen.** Echtes Handy, einmal Niederlage/Siegelverlust und ein späterer Kampf beziehungsweise Kampagnenende prüfen. Optional beobachten, ob neue Spieler aus der vorhandenen Gegnervorschau einen eigenen Plan ableiten können; bisher kein belegter Balance- oder Gegenstrategiefehler.

Alle Maßnahmen sind Vorschläge. Keine Originalquelle, kein Portalpaket und kein veröffentlichter Spielstand wurden geändert. Es wurde kein Produktfix umgesetzt.

## Offene Prüfgrenzen und Dokumente

Nicht gespielt: Runde-3-Kampf, vollständige acht Runden, Kampagnensieg, Niederlage/Siegelbruch, Vitrine, spätere Familien oder lange Wiederkehr. Nicht gehört beziehungsweise geprüft: Audio, physischer Touch, Geräteperformance, schwaches Netz und echte Spielerreaktionen. Verkauf und Positionstausch waren sichtbar erklärt, wurden jedoch nicht ausgeführt. Die neue Export-Kompilierung ist ein technischer Buildnachweis, kein bestandener Gameplaytest oder Ersatz für diese Grenzen.

Dokumente: [Quellengegenprüfung](Quellenpruefung.md), [Identität/isolierte Testumgebung](runtime/README.md), [Screenshotmanifest](screenshots/manifest.json).

Aufnahmen: [Menü Desktop](screenshots/menu-desktop.jpg), [Markt Desktop](screenshots/market-desktop.jpg), [pausierter Kampf Desktop](screenshots/battle-desktop.jpg), [Ergebnis Runde 1](screenshots/result-desktop.jpg), [Markt mobil](screenshots/market-mobile.jpg), [Kampf Runde 2 mobil](screenshots/battle-mobile.jpg), [Ergebnis Runde 2 mobil](screenshots/result-mobile.jpg).
