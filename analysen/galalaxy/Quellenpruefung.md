# GALALAXY – gezielte Quellengegenprüfung

Stand: **09.10.2026**. Die Fragen dieser Prüfung entstanden nach der eigenen Bedienung der öffentlichen Browserfassung. README-Qualitätsbehauptungen, ältere Urteile, Testscores und Portalbewertungen wurden nicht als Ergebnis übernommen. Die praktischen Beobachtungen stehen in [Grundanalyse.md](Grundanalyse.md).

## Quellenidentität und Methode

Gegenprüfbasis ist der am Prüftag abgefragte öffentliche `main`-Commit **`f3a261cff049f5f94b03019c72f5047be2bf91c2`** vom 25.09.2026, 10:59:39 UTC, im Repository [emfau88/galalaxy](https://github.com/emfau88/galalaxy/commit/f3a261cff049f5f94b03019c72f5047be2bf91c2). GitHub Pages ist auf `main` und die Repositorywurzel `/` konfiguriert. Der tatsächliche Spieltest fand auf [der öffentlichen Pages-Fassung](https://emfau88.github.io/galalaxy/) statt. Die Konfiguration beweist keine vollständige Byteidentität aller im Browser geladenen Ressourcen.

Die lokale Originalquelle `C:\Users\madde\Documents\galaxy` liegt dagegen auf `codex/y8-integration`, HEAD `24c96c595bb62905e2e1594824b489378c5d2e3b`, mit sechs bereits vorhandenen Änderungen. Sie wurde nicht als identische Live-Quelle behandelt und nicht verändert. Identität und ursprüngliche Dateifingerabdrücke stehen im [Provenienznachweis](runtime/README.md).

18 gezielt benötigte öffentliche HTML-/JavaScript-Dateien wurden über die GitHub-API aus dem eingefrorenen Commit in die ignorierte lokale Ablage `runtime/source-main/` geladen. Ihre Git-Blob-SHA1 wurde geprüft; ein dortiges Manifest enthält zusätzlich SHA256 und Dateigrößen. Insgesamt umfassen diese ausgewählten Dateien **293.162 Bytes**. Das ist **keine Messung des gesamten Spiels oder seines initialen Netzwerktransfers**; Bild-/Audiomedien wurden nicht heruntergeladen. Kein Build, keine automatische Testsuite und kein lokaler Spielserver wurden gestartet.

Alle folgenden Zeilen beziehen sich auf diesen festen Commit, nicht auf die abweichende lokale Arbeitskopie.

## Steuerung und kurzer Pointerkontakt

- `src/input.js:25–108` bindet Pointer-Ereignisse, hält einen aktiven Pointer fest und beendet die Steuerung bei Loslassen beziehungsweise Abbruch. `src/input.js:161–166` setzt bei echtem Touch einen vertikalen Abstand von 70 Designpixeln zwischen Finger und Schiff; Mouse hat keinen solchen Abstand. Die Bildschirmkoordinaten werden bei `src/input.js:180–188` anhand der Spielskalierung zurückgerechnet.
- `src/input.js:110–150` verarbeitet WASD im laufenden Spiel und normalisiert diagonale Bewegung. Das passt zur tatsächlich wirksamen Bedienung mit gehaltenen WASD-Tasten.
- `src/entities/player.js:185–215` bewegt das Schiff höchstens um `speed × evolutionMultiplier × dt` pro Frame in Richtung Pointerziel. Die Grundgeschwindigkeit beträgt 260 Designpixel pro Sekunde (`src/config.js:66`). Das Schiff teleportiert daher auch bei einem großen Pointerversatz nicht sofort an die Zielposition.

**Einordnung:** Der sehr kurze Drag im Browserwerkzeug bewies Bewegung, aber keine realistische längere Fingerführung. Die begrenzte Geschwindigkeit erklärt, warum ein kurzer Kontakt nur wenig Strecke erzeugen kann; sie beweist weder schlechte Touchsteuerung noch eine gemessene Eingabelatenz. Echte Touchführung, Fingerabdeckung und schnelle Richtungswechsel bleiben zu prüfen.

## Autofeuer, XP und nachvollziehbare Upgradewirkung

- `src/entities/player.js:30–49` setzt Hull 100, Shield 55, Grund-Schussabstand 0,28 Sekunden und Shield-Regeneration 2,2 pro Sekunde. `src/entities/player.js:238–242` löst automatisches Feuer aus. Eine gesonderte Feuertaste ist für diesen Pfad nicht nötig.
- `src/game.js:325–348` beginnt jeden Lauf mit Score/Kills/XP 0, Level 1, erster XP-Schwelle 8 und Sektor I. Diese Startwerte stimmen mit dem bedienten Neustart überein.
- `src/systems/combatSystem.js:128–153` wandelt erreichte XP-Schwellen in Levelaufstieg und eine wartende Upgradeauswahl um. Während `levelUp` findet kein normaler Kampf-Update statt (`src/game.js:636–651`).
- `src/systems/upgrades.js:92–117` erzeugt konkrete Vorher-/Nachher-Werte. Die Änderungen selbst stehen bei `src/systems/upgrades.js:389–410`: Fire Rate wird mit 0,86 multipliziert, Multi Cannon erhöht `twin` um 1, Hull erhöht das Maximum um 18 und repariert begrenzt.
- `src/entities/player.js:263–270` ordnet Upgrade-Rang `twin = 0` einem Projektil und `twin = 1` zwei parallelen Projektilen zu. Damit passen der gewählte Multi-Cannon-Effekt und die beobachtete zweite Schussbahn zusammen.

Die Ergebniskarte schreibt Module als Name plus Modullevel (`src/rendering/menuRenderer.js:430–434`). Ein angezeigtes **Multi Cannon 1** ist deshalb kein belegter Widerspruch zu **Cannons 1 → 2** in der Upgradevorschau: Modulrang und Anzahl der Schussbahnen sind unterschiedliche Größen. Der beobachtete Effekt war ein Multi-Cannon-Upgrade der normalen Autokanone; ein Beam-Modul wurde nicht getestet.

## Pause, Resume, Neustart und Ressourcen

`src/game.js:600–612` wechselt zwischen `playing` und `paused` und löscht dabei alte Bewegungseingaben. `src/game.js:733–734` setzt einen pausierten Lauf nach einem normalen Tap fort. Der Kampfzeitmesser wird nur bei `playing` erhöht (`src/game.js:636–644`). Das stützt die tatsächlich bedienten Pause-/Resume-Schritte. Blur und versteckter Tab lösen ebenfalls eine Unterbrechungspause aus (`src/game.js:135–138`); dieser Unterbrechungsfall wurde jedoch **nicht praktisch geprüft**.

Der Neustart setzt Ressourcen über einen neuen Player und den übrigen Laufzustand über `startRun` zurück (`src/game.js:308–351`). Der tatsächlich geklickte Play-Again-Start zeigte Shield 55, Hull 100, Level 1 und XP 0/8. Bestehende Bestwerte gehören dagegen nicht zum flüchtigen Laufzustand und dürfen nicht als eigene Leistung des Tests ausgegeben werden.

Shield nimmt Schaden zuerst auf; übriger Schaden trifft Hull (`src/entities/player.js:434–464`). Shield erholt sich nach einer Wartezeit, anfangs sechs Sekunden (`src/config.js:70`, `src/entities/player.js:169–170,223–225`). Reparatur- und Shield-Pickups sind weitere Codepfade (`src/entities/pickup.js:125–137`), Drops werden erst ab einer Mindestzeit und mit Zufallsentscheidung möglich (`src/systems/combatSystem.js:100–125`, `src/entities/pickup.js:25–31`). Diese Möglichkeiten wurden **nicht im eigenen Lauf als eingesammelte Heilung oder garantiertes Rettungsangebot nachgewiesen**. Aus dem frühen Testende folgt weder fehlende Erholung noch ein Urteil über die Spielbalance.

## Erste Gegner, Sektorziel und HUD

Der erste Begegnungsplan sieht eine Anfangsverzögerung von 1,2 Sekunden und eine Single-File-Welle vor (`src/data/encounters.js:205–221,315–329`). Die ersten 25 aktiven Sekunden nutzen die frühe Kartenauswahl (`src/data/encounters.js:346–359`). Sektor I versieht normale Spawns vor Sekunde 15 mit einer Feuersperre (`src/systems/sectorSystem.js:193–202,267–273,513`); `src/entities/enemy.js:550` prüft diese Sperre vor normalem Gegnerfeuer. Das betrifft Schüsse, **nicht eine pauschale Unverwundbarkeit oder ausgeschlossene Kollisionen**. Es wurde nicht als exakt gestoppte Startzeit im Live-Test gemessen.

Sektor I dauert im Code 70 aktive Sekunden (`src/config.js:140–145`); danach wird ein Boss mit Warnphase ausgelöst (`src/systems/sectorSystem.js:18–29`). Die eigene Runde endete bei 0:52 in Sektor I. Boss, Bossbelohnung, Keystones und spätere Sektoren wurden daher nicht praktisch erreicht. Vorhandene Codepfade ersetzen diesen fehlenden Spielnachweis nicht.

Die HUD-Lesbarkeit lässt sich gezielt erklären: Shield/Hull verwenden 9 Designpixel, Zeit/XP/Best 8 und Sektor/Level 11 (`src/rendering/hudRenderer.js:38,53,85,93,135,164`). Die komplette 420×760-Spielfläche wird proportional in den Viewport eingepasst (`src/config.js:1–4`, `src/game.js:184–213`). Daher werden kleine Labels in einer schmalen Ansicht nicht unabhängig größer. Bosswarnung und Bosstext besitzen eigene kleine Canvas-Schriften (`src/rendering/hudRenderer.js:146,199–205`); ihre Wirkung im Bosskampf wurde nicht gesehen. Die kurze Spielsitzung belegte bereits schwer lesbare Statusdetails in der schmalen Ansicht, keine vollständige Kontrast-/Accessibilitymessung.

## Canvas-Menüs und Tastatur – zusätzlicher Codebefund

Der Einstieg enthält ein Canvas und einen Overlaycontainer, keine individuell ausgezeichneten HTML-Start-/Upgradebuttons (`index.html:48–50`). Die Live-Browserstruktur stellte das Spiel als Canvasbild dar; einzelne HUD-Labels und gezeichnete Schaltflächen waren darüber nicht semantisch ansprechbar.

WASD-Bewegung bedeutet hier keine vollständige Tastaturbedienung der Menüs. Space/Enter erzeugt im Code einen Tap an der festen Designkoordinate **210/380** (`src/input.js:121–126`). Der Titelstart erwartet hingegen eine Y-Position zwischen 500 und 610 (`src/game.js:723–724`); Play Again liegt bei Y 554–620 (`src/rendering/menuRenderer.js:5`, `src/game.js:725–726`). Bei der Upgradeauswahl liegt 210/380 in der mittleren Karte, während der aktive Pfad keine freie Tastaturauswahl zwischen allen drei Karten vorsieht (`src/systems/upgrades.js:20–29,457–465`).

**Aussagegrenze:** Dieser Menübefund ist eine zusammenhängende statische Gegenprüfung. Titelstart per Enter, fokussierte Upgradeauswahl und Neustart per Tastatur wurden in dieser Runde nicht praktisch ausgeführt. Daraus wird kein vollständiger Barrierefreiheitsaudit abgeleitet. Ein begrenzter Gegencheck und klare Tastaturaktionen wären sinnvoll; die praktisch funktionierenden Mouse-/Tap-Wege und WASD-Bewegung bleiben davon getrennt.

## Laden und Grenzen

Assets werden in Boot-, gemeinsame und Sektorgruppen aufgeteilt (`src/assets.js:201–220`). `startRun` wartet auf gemeinsame und erste Sektorgruppe; die nächste Sektorgruppe wird vorbereitet (`src/game.js:300–315,350`). Der Loader behandelt Erfolg, Fehler und Timeout (`src/assetLoader.js:15–55`, Timeoutkonfiguration `src/config.js:14`). Das ist eine vorhandene Ladestruktur, **keine gemessene gute oder schlechte Ladezeit**. Kalter Cache, schwaches Netz, fehlende Assets und Geräteperformance wurden nicht untersucht.

Diese Gegenprüfung dokumentiert Erklärungen und konkrete offene Fragen. Keine Spielquelle, kein Portalpaket, kein Storeeintrag und keine Spielbalance wurden geändert. Maßnahmen in der Grundanalyse sind weiterhin Vorschläge.
