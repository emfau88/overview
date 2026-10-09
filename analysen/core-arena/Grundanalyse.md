# CORE ARENA – begrenzte Grundanalyse

Stand: **09.10.2026**. Produkt aus dem sechs Spiele umfassenden Dashboardbestand; Repository [emfau88/CTF-3.0](https://github.com/emfau88/CTF-3.0), geprüfte [öffentliche Pages-Version](https://emfau88.github.io/CTF-3.0/).

**Ergebnis:** CORE ARENA besitzt ein ausgearbeitetes, zum Weltraum-Arenaspiel passendes Menü und einen tatsächlich bedienbaren Shooterkern. Training und ein eigenes TDM-Match auf Helix Canopy wurden mit eigener Bewegung, Zielen/Feuer und Sprung bedient; Pause, Resume und Restart funktionieren im geprüften Ablauf. Der wichtigste belegte Mangel liegt in der Aussagekraft der Kampfprüfung: Das Spiel meldet „qualifiziert/bestanden“, obwohl eine Aufgabe offen bleibt und das Team verliert. Die Quelle bestätigt außerdem, dass Botaktionen menschliche Tutorialaufgaben abhaken können. Diese beiden Punkte sollten vor einer größeren Erweiterung geklärt werden. Weitere kleine Ansätze sind ein weniger bedrängter Lernabschnitt, vollständig lesbare Moduskarten und verständlichere Waffen-/Pickuphinweise. **Keine allgemeine KI-, Balance-, Langzeit- oder vollständige Karrierebewertung.** Originalquelle und Veröffentlichung wurden nicht geändert.

## Geprüfte Basis und Umfang

**Eigene öffentliche Laufzeit:** Browserprüfung am 09.10.2026, Desktop **1281 × 800**; Custom-Setup zusätzlich als schmale Browseransicht **391 × 844**. Hauptmenü, Hilfe, wiederholbares Training, vierstufiges Custom-Setup, eine tatsächlich gestartete Custom-TDM-Runde auf Helix Canopy mit 0 blauen/1 rotem Bot auf Einfach, eigene WASD-/Maus-/Feuer-/Sprungeingaben sowie Pause/Resume/Restart wurden bedient. Die schmale Prüfung umfasst das Setup, **kein mobiles Gameplay und keine echte Touchbedienung**.

**Quelle:** Lokaler Originalcheckout `C:\Users\madde\Documents\CTF-3.0`, Branch `codex/league-result-dialog-viewport`, HEAD **`6353e7f3bc09d9ff9f194462b6175240cc9c636b`**, veränderter Arbeitsbaum. Darum stammt die gezielte Gegenprüfung vom separat eingefrorenen öffentlichen main-Commit **`9794575fa6241f47845fb85352316564789e8d1c`**. **Gleichheit von main, lokalem Branch, vorhandenem dist und bedientem Pages-Bundle ist nicht unabhängig nachgewiesen.** package.json nennt keine eigene Produktversion; keine Releaseversion erfunden. [runtime/README.md](runtime/README.md) dokumentiert Identität, Vite/Phaser und Pages-Auslieferpfad, [Quellenpruefung.md](Quellenpruefung.md) die aktiven Mechaniken mit commitfesten Zeilen.

**Bewertung:** Eine begrenzte Außenperspektive aus eigenen Eingaben, tatsächlich betrachteten Ansichten und aktuellen gezielten Quellen. Keine alten QA-Berichte, Testscores, Roadmapurteile oder Nutzermeinungen übernommen. Keine Installation, Builds oder automatischen Tests ausgeführt. Keine Debug-Siege oder künstliche Aufgabenfreigabe verwendet. Es gibt keine erhobenen Spieler-, Bindungs- oder Wirtschaftlichkeits-KPI.

## Bedienablauf und belastbare Grenzen

Im Hauptmenü sind Karriere, Quick Play und eigenes Match klar benannte Wege. Eine bereits vorhandene Karriere zeigte Proving Circuit, Match 2 von 3; sie wurde weder zurückgesetzt noch weitergespielt. Hilfe erklärt WASD/Space, Maus-Zielen/Feuer und Waffenwahl sowie Botkommandos 1/2/3. Das Training lässt sich dort erneut starten.

**Erster Trainingsversuch: passive Laufzeitbeobachtung.** Nach Start auf Helix mit einem eigenen und zwei gegnerischen Bots lief das Match ohne eigene Spieleingabe bis zum Ende. Das **Teamergebnis war Blau 12 zu Rot 15**, die eigene Zeile zeigte 0 Eliminierungen/2 Tode, trotzdem qualifiziert. 12:15 bezeichnet den Team-Punktestand, keine Dauer. Dies ist ausdrücklich **kein eigener Gameplayversuch** und keine Leistungsmessung.

**Zweiter Trainingsversuch: eigene Eingaben.** Zu Beginn waren Bewegung/Zielen schon als 2/5 erledigt zu sehen. Danach wurden eigene D-/WASD-, Maus-/Feuer- und Sprungeingaben bedient; der Guide zeigte später 4/5. Pulse-Pickup blieb offen, der Player starb und respawnte mehrfach. Das **Teamergebnis war Blau 7 zu Rot 16**, die eigene Zeile zeigte 0 Eliminierungen/5 Tode; der live vor dem Ergebnis beobachtete Guide stand weiter bei vier von fünf Aufgaben, aber die Ergebnisanzeige lautete „Qualifiziert/Kampfprüfung bestanden“. 7:16 bezeichnet den Team-Punktestand, keine Dauer. Das ist eine reale Diskrepanz zwischen Aufgabenstand und Erfolgsaussage. Die Quelle erlaubt genau diesen Abschluss ohne Aufgabenprüfung. Die frühen Bewegungs-Haken haben einen konkret belegten Bot-/Player-Filterfehler; die Ursache des frühen Ziel-Hakens wurde dagegen nicht isoliert nachgewiesen.

**Eigenes Match:** Custom führt durch Modus, Arena, Teams und Übersicht. Drei Modi und drei Arenen sind auswählbar; nur TDM/Helix wurde tatsächlich gestartet. 0 blaue und 1 roter Bot mit Einfach wurden übernommen. Das gestartete Match zeigte 2:00 und „First to 10“. Eigene Bewegung, Zielen/linke Maustaste, Arc Lash und Space-Sprung wurden bedient; Menü öffnete Pause mit Resume/Restart/Hauptmenü, Resume und Restart funktionierten.

Ein kontrollierter Lauf mit Pausen zwischen Eingaben führte zunächst zu einer Rüstungsstation; Rüstung 25 war sichtbar. Später wurde die untere Pulse-Station angenähert, ein Pad zeigte Timer, zeitgleich folgte ein Tod und nach Respawn weiterhin R-Munition 0. **Keine gesicherte eigene Pulse-Aufnahme oder eigene Schusswirkung daraus abgeleitet.** Ein Stationstimer verrät nicht, wer sie aufgenommen hat. Die Quelle sammelt durch räumlichen Kontakt und verlangt für den Tutorial-Haken ausdrücklich die eigene Pulse-Aufnahme; Taste R feuert die zugehörige Waffe, sie nimmt das Pickup nicht selbst auf. Die Station ist daher nicht aufgrund des Versuchs als unerreichbar oder defekt bewertet.

Die langen Abstände zwischen Werkzeugaktionen reduzieren geregelten Gegnerkontakt und führen zu mitlaufendem Kampf. Todes-/Respawnfolgen und einzelne Resultzahlen werden **nicht zur allgemeinen Schwierigkeit, Trefferquote oder KIqualität hochgerechnet**. Für einen aussagekräftigen Balancetest braucht es später menschliche Echtzeitbedienung. Die Quelle besitzt Menü- und Fokus-/Sichtbarkeitspausen; nicht jede Werkzeugpause ist automatisch eine Spielpause.

## Was bereits trägt

- **Verständliche Hauptwege und konfigurierbares Match:** Drei Einstiege sind benannt; das vierstufige Setup ordnet Modus, Karte und Teamwahl und zeigt eine Zusammenfassung. Die Difficulty ist aktiv angeschlossen und wurde beim gestarteten Einfach-Match übernommen.
- **Eigenständige, stimmige Gestaltung:** Futuristische Panels, Embleme, Arenaabbildung und Helix-Landschaft passen zum Setting. Diese vorhandene Richtung ist eine brauchbare Grundlage. Sehr schmale, komprimierte Schrift und viele Kleinteile wirken in der Außenperspektive anstrengender, begründen aber keinen vollständigen Designwechsel.
- **Tatsächlich funktionierende Kernsteuerung und Unterbrechung:** Eigene Bewegung, Zielen/Feuer, Nahwaffe und Sprung wurden bedient. Pause, Resume und Restart bieten im beobachteten Pfad echte Kontrolle. Hilfe und wiederholbares Training existieren; die Aufgabe ist deren Verlässlichkeit und Klarheit zu verbessern.

## Fünf begrenzte Befunde

### 1. „Kampfprüfung bestanden“ überprüft die Lernaufgaben nicht

**Evidenz: Laufzeit + Code; Priorität: hoch.** Beide Trainingsmatches endeten trotz Niederlage als qualifiziert. Im tatsächlich bedienten zweiten Versuch blieb Pulse-Pickup offen und der Guide bei 4/5. main setzt bei jeder beendeten Qualifier-Runde den Status auf qualified und wählt die Erfolgsüberschrift; weder Matchausgang noch erledigte Aufgaben sind Bedingungen.

**Kleiner nächster Schritt:** Festlegen, was der Abschluss aussagen soll. Für ein Lerntraining muss kein Sieg verlangt werden; die eigene Erfüllung der geforderten Bedienaufgaben sollte aber nachvollziehbar bestätigt sein. Soll nur ein absolviertes Kennenlernmatch zählen, muss der Text genau dies sagen. Die aktuelle Erfolgsbehauptung ist kein Beleg gelernter Bedienung. Noch keine Regel oder Implementierung geändert.

### 2. Botaktionen können menschliche Tutorialaufgaben erfüllen

**Evidenz: gezielter Code + passende frühe Anzeige; Priorität: hoch.** Die Simulation vereint menschliche und Botaktionen in einem Inputframe. Der Detektor prüft Bewegung, Arc Lash und Sprung darin ohne actorId-Filter. Botbewegung kann deshalb den Guide als erledigt markieren, bevor der Mensch selbst gelaufen ist. Pickup prüft dagegen ausdrücklich blue-player und pulse.

**Kleiner nächster Schritt:** Aufgaben konsequent auf den tatsächlich gesteuerten Menschen begrenzen und in einem frischen Training separat prüfen. Bei „Zielen“ wird Pointerbewegung ab 8 Pixel gezählt; ein früher Haken könnte aus einer Bewegung beim Eintritt entstehen. Dafür ist noch keine falsche Ready-Erkennung bewiesen. Eigene F-/Sprungeingaben des Prüfversuchs wurden bedient, ihre Haken aber nicht als isoliert ausschließlich dadurch verursacht ausgegeben.

### 3. Lernaufgaben konkurrieren sofort mit laufendem Kampf

**Evidenz: Laufzeit + Code; Einschätzung, Priorität: mittel.** Training verwendet einen normalen 90-Sekunden-/20-Punkte-TDM-Lauf mit allgemeinem 2-Sekunden-Countdown. Danach kämpfen Bots während des Guides; Aufgabenstand oder erste eigene Bewegung sind kein Kampfgatter. Menüpause funktioniert, aber das eigentliche Lernen findet im laufenden Gegnerkampf statt.

**Kleiner nächster Schritt:** Einen kurzen sicheren Lernabschnitt oder eine einfache aufgabenweise Anleitung als begrenzten Kandidaten prüfen; anschließend in normales Spiel wechseln. Das ist eine Hypothese für den Ersteinstieg, keine bestätigte Überforderung echter Nutzer. Aus Todesfolgen während langsamer Werkzeugbedienung folgt ausdrücklich keine KI-/Balancenote und keine pauschale Bot-Abschwächung.

### 4. Wichtige Regeltexte werden in Desktop-Moduskarten abgeschnitten

**Evidenz: Laufzeit/eigene Aufnahme; Priorität: niedrig.** Im Desktop-Setup wird die TDM-10-Eliminierungen-Beschreibung sichtbar am rechten Rand abgeschnitten; die CTF-Erklärung erscheint verkürzt mit Auslassung. Gleichzeitig nimmt das Auswahlpanel viel leere Höhe ein. Auswahl und Weiter-Navigation bleiben bedienbar. Die vier Schritte und Übersicht sind grundsätzlich verständlich.

**Kleiner nächster Schritt:** Kartentexte vollständig lesbar machen und Fläche/Typografie gezielt entspannen. Die schmale Setupansicht hat bei 391 Pixeln keinen horizontalen Seitenüberlauf, aber eine lange Stapelung aus Übersichts-/Bildkarten; Start liegt weiter unten. Der mobile Start wurde nicht bedient. Kein umfassender Layoutumbau ist aus dieser Beobachtung abgeleitet.

### 5. Waffen und Bodenstationen sind für Erstnutzer knapper erklärt als die Menüs

**Evidenz: Code + visuelle UX-Einschätzung; Priorität: mittel.** Waffenstreifen zeigt Icons, Buchstaben und Munition, Bodenstationen Pad/Icon/Timer. Ausgeschriebene Waffennamen fehlen im aktiven Streifen und am Pad. Das passt zur Screenshotbeobachtung mit leeren Munitionsanzeigen: Es ist sichtbar, dass Munition fehlt, aber die Verbindung vom geforderten Pickup zur Station und Taste R verlangt Symbolverständnis.

**Kleiner nächster Schritt:** Nur im Ersteinstieg kurze Namen beziehungsweise ein konkretes Pulse-Ziel und eine eindeutige eigene Aufnahmebestätigung ergänzen. Vorhandene Icons/Zahlen müssen nicht ersetzt werden. Eine echte erfolgreiche Aufnahme, Munitionsänderung und anschließende Feuerwirkung noch kontrolliert prüfen. Kein fehlerhafter Munitionszähler, unerreichbares Pickup oder generelles Scheitern dieses Mechanismus ist durch den bisherigen Versuch bewiesen.

## Drei kleine nächste Maßnahmen

1. **Trainingsbestätigung verlässlich machen:** Qualifiziert-/Bestanden-Regel präzisieren und die Aufgabenprüfung auf menschliche Aktionen begrenzen. Mit frischer eigener Testbasis nachprüfen: ohne menschliche Eingabe keine fremden Haken; jede Aufgabe separat selbst bedienen; Sieg ist nur erforderlich, falls bewusst Produktregel. Keine bestehende Karriere für diesen Test ungefragt zurücksetzen.
2. **Erste Waffen-/Pickup-Erfahrung erleichtern:** Kurzen sicheren Lernabschnitt und knapp bezeichnete Zielstation als begrenzten Kandidaten ansehen. Danach die eigene Pulse-Aufnahme, angezeigte Munition und tatsächliche Nutzung ohne gleichzeitigen Tod nachvollziehbar prüfen; wenige neue Spieler sollen ohne Hilfe erklären können, was zu tun ist.
3. **Lesbarkeit klein verbessern:** Abgeschnittene Modusregeln und unnötig dicht gesetzte Kleinteile korrigieren; schmale Setup-Reihenfolge/Start-Erreichbarkeit prüfen. Nach wirklicher Umsetzung Desktop/schmale Ansichten und den bedienten Start-/Pause-/Restartpfad erneut kontrollieren.

Keine Maßnahme ist bislang umgesetzt. CTF-/Flaggenablauf, andere Karten und Karriere dürfen später separat untersucht werden; die jetzigen Befunde erfordern keine sofortige komplette Erweiterung dieses Grundchecks.

## Offene Fragen und Grenzen

- Welcher Deployment-Commit lief auf Pages, und welcher lokale/Remote-Stand soll für spätere Änderungen maßgeblich sein?
- Soll der Qualifier Bedienaufgaben belegen oder nur ein abgeschlossenes Kennenlernmatch dokumentieren? Ein Siegzwang ist noch keine dokumentierte Entscheidung.
- Wie erleben echte Erstnutzer das Training bei normalem Reaktionstempo und mit zuverlässigen Aufgabenhaken?
- Wie funktioniert eine gesicherte eigene Pulse-Aufnahme mit Munitionsanstieg und Feuerwirkung? Dieser isolierte Pfad bleibt offen.
- Wie funktionieren CTF, One Flag, die anderen zwei Karten, Karrierefortsetzung und längerfristiger Spielfortschritt? Sie wurden nicht gespielt.
- Wie funktionieren mobile Gameplayansicht und reale Touchsteuerung, Audio/Fullscreen sowie Fokus-/Hintergrundfälle? Diese Tests wurden nicht behauptet.

Die Casual-Profile besitzen konkrete Reaktions-/Zielstreuungs-/Navigationsparameter; Beispiele stehen im Quellenbericht. Das ist kein empirischer Schwierigkeits-, Genauigkeits- oder Spawncampcheck. Keine sichere Aussage zu langfristiger Motivation, Portaltauglichkeit, Spielergewinnung, Reichweite oder Wirtschaftlichkeit. Kein vollständiger Performance-, Accessibility-, Security- oder Browsermatrix-Audit. Vorhandenes Potenzial ist eine begrenzte Außenperspektive, kein nachgewiesener Marktbedarf.

## Belege

- [Gezielte Quellen-Gegenprüfung](Quellenpruefung.md).
- [Identität und getrennte Laufzeit-/Quellbasis](runtime/README.md).
- Sechs echte Browserbilder: [Hauptmenü](screenshots/menu-desktop.jpg), [Desktop-Setup](screenshots/setup-desktop.jpg), [schmales Setup](screenshots/setup-mobile.jpg), [passives Training: Teamergebnis Blau 12 zu Rot 15](screenshots/training-result-desktop.jpg), [bedientes Training: Teamergebnis Blau 7 zu Rot 16](screenshots/training-result-active-desktop.jpg), [TDM mit Respawn/leerem Waffenbestand](screenshots/battle-desktop.jpg). Herkunft und SHA256 im [Screenshot-Manifest](screenshots/manifest.json). Das zweite Ergebnisbild belegt Team-Punktestand, eigene 0 Eliminierungen/5 Tode und Qualifiziert-Anzeige; den vorher live gelesenen Aufgabenstand 4/5 beziehungsweise die offene Pickup-Aufgabe belegt es nicht unabhängig. Das Kampfbild ist kein Nachweis einer eigenen erfolgreichen Pulse-Aufnahme oder eines erfolgreichen Schusses.
