# GALALAXY – erste praktische Grundanalyse

Stand: **09.10.2026**. Öffentliche Browserfassung: [GALALAXY öffnen](https://emfau88.github.io/galalaxy/). Zugeordnetes Repository: [emfau88/galalaxy](https://github.com/emfau88/galalaxy).

**GALALAXY hat einen funktionierenden, sichtbar reagierenden Einstieg als Weltraum-Survivor: Schiff bewegen, automatisch schießen, XP sammeln und ein konkretes Upgrade wählen.** Die bediente Upgradeentscheidung veränderte Schiff und Schussbild unmittelbar. Pause, Fortsetzen und Neustart funktionierten. Die sinnvollste kleine Verbesserungsrichtung ist vorerst bessere Lesbarkeit und Orientierung, ergänzt um einen gezielten Test auf einem echten Touchgerät und bis zum ersten Boss. Ein Gesamturteil über Balance, spätere Sektoren oder langfristige Motivation wäre nach diesem kurzen Durchlauf verfrüht.

Die Bewertung entstand zuerst aus tatsächlicher Bedienung; erst anschließend wurden diese Beobachtungen gezielt am Code gegengeprüft. Alte Qualitätsbehauptungen, Testscores, Roadmaps oder Portalbewertungen sind keine Grundlage des Urteils. Kein Fix wurde umgesetzt.

## Was praktisch geprüft wurde

Der öffentliche Auftritt wurde im Browser bei **1281×800** und anschließend in einer schmalen Ansicht von **391×844** bedient. Der komplette erste Lauf endete in Sektor I; danach wurde Play Again geklickt und der neue Lauf pausiert. Fünf unveränderte Aufnahmen dokumentieren den Stand im [Screenshotmanifest](screenshots/manifest.json).

| Schritt | Eigene Beobachtung | Aussagegrenze |
|---|---|---|
| Einstieg | Portraitspielfeld, Neonrahmen und vier Sektornamen; Hinweis „Drag or WASD to move · Auto-fire · Survive“. START öffnete den Lauf. | Die spätere Sektorfolge wurde damit noch nicht gespielt. |
| Bewegung und Feuer | Gehaltene WASD-Tasten bewegten das Schiff; kurzer Drag ebenfalls. Schüsse entstanden automatisch. | Der kurze Pointerkontakt ersetzt keine längere Fingerführung auf einem echten Gerät. Keine Eingabelatenz gemessen. |
| Erste Upgradeauswahl | Drei konkrete Optionen: Fire Rate 0,280 → 0,241 Sekunden, Hull 100 → 118, Multi Cannon 1 → 2 Schussbahnen. Gewählte Multi Cannon änderte Schiffbild und erzeugte zwei parallele Schüsse; danach Level 2. | Nur diese konkrete Auswahl geprüft; weder kompletter Upgradepool noch spätere Builds bewertet. |
| Pause und Resume | Pause zeigte „PAUSED / Tap To Resume“. Ein Tap setzte den Lauf fort; Zeit wechselte danach von 0:35 auf 0:36. | Blur-/Tabwechselpause und längere Wiederaufnahme wurden nicht getestet. |
| Kurzer Lauf und Ende | „SHIP DESTROYED“, eigener Score 597, 18 Kills, Zeit 0:52, Sektor I erreicht, 0/4 Sektoren abgeschlossen, Ursache Enemy Fire. | Das sind Sitzungsbelege, keine Qualitätsnote, Nutzungskennzahlen oder belastbare Schwierigkeitseinstufung. Werkzeugpausen beeinflussen die Bedienung. |
| Neustart | Play Again begann mit Score 0, Shield 55, Hull 100, Level 1 und XP 0/8. | Ein vollständiger zweiter Lauf wurde nicht gespielt. |
| Schmale Ansicht | Kein horizontaler Überlauf bei 391 Pixeln; die Statusbeschriftungen waren sehr klein. | Browserbreite ist kein Nachweis realer Touchbedienung oder schwacher Geräteperformance. |

**Der Bestwert 2334 war bereits vor dem eigenen Start vorhanden.** Er blieb nach dem Lauf erhalten und wird nicht als Ergebnis dieses Tests ausgegeben. Die Modulangabe Multi Cannon 1 auf der Ergebnisansicht bezeichnet im Code einen Upgraderang; sie widerspricht nicht der zweiten Schussbahn. Keystones, Boss, Sektoren II–IV, Sieg und Audio wurden nicht erlebt beziehungsweise gehört.

## Stärken, die erhalten bleiben sollten

- **Sofort spielbarer Kern:** WASD und Autofeuer funktionierten ohne Anmeldung oder langen vorgeschalteten Ablauf. Bewegung und Schüsse waren als eigene Aktion erkennbar.
- **Konkrete Upgradeentscheidung:** Vorher-/Nachher-Zahlen, Schiffbilder und der beobachtete Wechsel zu zwei Schussbahnen machen eine Wahl greifbar. Diese Rückmeldung ist eine stärkere Grundlage als zusätzliche abstrakte Statistiktexte.
- **Unterscheidbare Kampfobjekte:** Eigene und gegnerische Schüsse waren farblich unterschiedlich; Gegner hatten verschiedene Spriteformen. Das gibt dem vorhandenen Material einen erkennbaren Stil. Vollständige Lesbarkeit dichterer Kämpfe ist noch offen.
- **Bedienbare Unterbrechung:** Pause, Fortsetzen, Ergebnis und Play Again funktionierten in den tatsächlich bedienten Wegen. Die Ergebnisansicht benennt Ursache, erreichten Sektor und gewählte Module.

## Vier zentrale Befunde

### 1. Statusdetails sind in der schmalen Ansicht schwer zu lesen

**Laufzeitbeobachtung:** Shield, Hull, XP, Zeit und Bestwert stehen in einem kompakten oberen HUD. Das Schiff und der Kampf bleiben sichtbar, aber Beschriftungen und Detailzahlen sind bei 391 Pixeln klein und benötigen einen gezielten Blick. Gerade im laufenden Ausweichen sollte die wichtigste Überlebensinformation schneller erfassbar sein.

**Quellengegenprüfung:** Im HUD stehen mehrere Labels und Zahlen mit 8–11 Designpixeln; die ganze Spielfläche wird proportional skaliert. Die Quelle erklärt die Größe, beweist jedoch keinen gemessenen Kontrastverstoß oder Spielerabbruch.

**Kleiner Vorschlag:** Hull und Shield samt kritischem Zustand deutlicher priorisieren, XP-Fortschritt erkennbar halten und sekundäre Zahlen ruhiger ordnen. Zuerst ein begrenztes HUD-Update vergleichen; nicht alle Spielgrafiken erneuern. Bosswarnung später im realen Bosskampf gegenprüfen.

### 2. Der erste konkrete Fortschritt ist schwächer erklärt als die Upgradeauswahl

**Gestaltungs-/UX-Einschätzung:** Der Start nennt Steuerung und Überleben. Große Rahmen, Sektornamen und der Fleet-Spruch geben Atmosphäre, erklären aber noch nicht ebenso klar, warum XP eingesammelt werden soll und welches nächste kurze Ziel erreicht werden kann. Die erste Upgradeauswahl vermittelt ihren Nutzen wesentlich konkreter.

**Beobachtungsgrenze:** Das ist eine Einschätzung des ersten Eindrucks, keine Nutzerstudie und kein Nachweis, dass Spieler den Einstieg nicht verstehen. Im Code ist bereits ein gestaffelter erster Sektor vorhanden, einschließlich früher Feuersperre für normale Gegner und späterem Boss. Ein komplett fehlendes Tutorial wird nicht behauptet.

**Kleiner Vorschlag:** Ein kurzer, früh sichtbarer Hinweis zu XP → Upgrade → Sektorboss und eine lesbare nächste Zielanzeige könnten genügen. Die vorhandenen Vorher-/Nachher-Karten erhalten. Kein langes Tutorial und kein umfassender Balanceumbau aus diesem Ersttest ableiten.

### 3. Bewegung per Tastatur ist vorhanden, Menübedienung nicht vollständig abgedeckt

**Codebefund nach dem Spieltest:** Die tatsächliche WASD-Bewegung funktionierte. Space/Enter erzeugt jedoch im betrachteten Code nur einen Tap in der Canvasmitte. Diese Position trifft weder den Titelstart noch Play Again; bei Upgrades liegt sie in der mittleren Karte. Eigene Start-/Upgrade-/Neustartaktionen per Tastatur und semantisch ansprechbare Einzelbuttons sind im geprüften Pfad nicht vorhanden.

**Beobachtungsgrenze:** Menübedienung ausschließlich per Tastatur wurde nicht praktisch ausgeführt. Es ist ein gezielter statischer Befund, kein behaupteter reproduzierter Komplettausfall und kein vollständiger Accessibilityaudit.

**Kleiner Vorschlag:** Start, Pause, freie Auswahl aller drei Upgrades und Neustart als eindeutige Tastaturaktionen gegenprüfen; bei Bestätigung passende Aktionen beziehungsweise kleine semantische Menübuttons ergänzen. Keine Änderung der Canvas-Kampftechnik dafür nötig.

### 4. Das Portraitformat ist konsistent, auf Desktop bleibt der Spielbereich klein

**Gestaltungseinschätzung mit Laufzeitbeleg:** Bei 1281×800 war das Spiel ungefähr 440 Pixel breit und von großen Seitenflächen umgeben. Die schmale Ansicht passte ohne horizontalen Überlauf. Ein durchgehend hochformatiges Arcadefeld ist eine nachvollziehbare Entscheidung; auf Desktop bietet die vorhandene Fläche jedoch wenig zusätzliche Orientierung oder größer lesbare Statusinformationen.

**Beobachtungsgrenze:** Kein technischer Defekt, kein nachgewiesener Conversionverlust und keine Aufforderung, Gegnerbahnen oder Spielgeometrie auf Breitbild umzubauen. Fullscreen wurde nicht geprüft.

**Kleiner Vorschlag:** Zuerst HUD und Zweckhinweis verbessern. Danach nur bei Bedarf die freie Desktopfläche für wenige ruhige Hinweise nutzen oder die Größenwirkung prüfen. Mobile Geometrie und Gegnerverhalten bei einer solchen Variante ausdrücklich gegenprüfen.

## Drei begrenzte nächste Maßnahmen

1. **Lesbarkeit und erste Orientierung konkretisieren.** Ein kleines HUD-/Hinweisupdate skizzieren: Überleben, XP-Nutzen und nächstes Sektorziel. Die greifbaren Upgradevorschauen erhalten. Danach erste 30 Sekunden in Desktop- und schmaler Ansicht vergleichen.
2. **Menübedienung per Tastatur gegenprüfen.** Start, drei Upgradeoptionen, Pause/Resume und Neustart ausschließlich per Tastatur bedienen. Nur bestätigte Lücken anschließend begrenzt ändern und erneut prüfen.
3. **Touch und ersten Boss tatsächlich erleben.** Einen überschaubaren Lauf auf einem echten Handy sowie bis zum ersten Boss prüfen: längere Fingerführung, Ausweichen, Ressourcenverständnis, Warnung, Bossphase und gegebenenfalls Sektorwechsel. Audio dabei wirklich hören. Erst danach konkrete Balancefragen ableiten.

Diese Punkte sind **Vorschläge und offene Prüfungen**, keine ausgeführten Produktänderungen. Monetarisierung, Portalveröffentlichung, Marktchancen und Wiederkehr werden aus dieser Sitzung nicht bewertet.

## Quellenstand und vollständige Prüfgrenzen

Die [Quellengegenprüfung](Quellenpruefung.md) nutzt den eingefrorenen öffentlichen `main`-Commit `f3a261cff049f5f94b03019c72f5047be2bf91c2`. Der [lokale Originalstand](runtime/README.md) liegt auf einem anderen Branch mit anderem HEAD und bestehenden Änderungen; Quellenidentität zur Live-Auslieferung ist nicht lückenlos bestätigt. Alle Codebefunde nennen ihren Stand und die tatsächlich aktiven Pfade.

Nicht geprüft: erster Bossabschluss, spätere Sektoren, Keystones, sämtliche Upgrades, Sieg, vollständige Kampagne, längere Motivation, echte Spielerreaktionen, physischer Touch, hörbares Audio, Fullscreen, vollständige Tastaturmenüs, kalter Cache, schwaches Netz, Geräteperformance oder längere Unterbrechungen. Keine automatischen Tests ausgeführt, keine ursprünglichen Spielquellen gebaut oder verändert, keine Portal-/Storeänderung und keine Balancekorrektur vorgenommen. Der Testscore ist kein Nutzungs-KPI; Kennzahlenfelder bleiben leer.

## Aufnahmen und Arbeitsdokumente

- [Start auf Desktop](screenshots/title-desktop.jpg), [erste Upgradeauswahl](screenshots/upgrades-desktop.jpg), [Pause](screenshots/paused-desktop.jpg).
- [Eigener Lauf in schmaler Ansicht](screenshots/battle-mobile.jpg), [Ergebnis des kurzen eigenen Laufs](screenshots/result-mobile.jpg).
- [Aufnahmeherkunft und SHA256](screenshots/manifest.json), [Quellengegenprüfung](Quellenpruefung.md), [Identität und Provenienz](runtime/README.md).
