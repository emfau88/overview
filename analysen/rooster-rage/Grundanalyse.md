# ROOSTER RAGE – begrenzte Spiel-Grundanalyse

Stand: **09.10.2026**. Öffentliche Fassung: [ROOSTER RAGE](https://emfau88.github.io/RoosterRage/). Status: **begrenzte Grundanalyse abgeschlossen; Verbesserungen offen**.

ROOSTER RAGE hat im kurzen echten Browserlauf einen eigenständigen und funktionierenden Kern gezeigt: markanter Cartoonhahn, Bewegung mit Autofeuer, Wellen, XP und eine Upgradeentscheidung mit sichtbar folgendem Begleiter. Der geprüfte Pause-/Ergebnis-/Neustartweg war bedienbar. Die sinnvollsten kleinen Ansatzpunkte liegen im Einstieg durch den bereits umfangreichen Henhouse und in der Reihenfolge der Upgrade- und Settingsinformationen. Eine grundlegende Neuentwicklung lässt sich aus dieser Prüfung nicht begründen.

Die wichtigste Grenze: Im Browser lag bereits ein fortgeschrittenes Profil. Deshalb ist die Erfahrung eines völlig neuen Spielers noch nicht geprüft. Das eigene Ende nach angezeigten 47 Sekunden ist **kein Urteil, dass das Spiel zu schwer oder schlecht ausbalanciert sei**. Diese Runde enthält weder Bossabschluss noch echten Touch-, Audio- oder Langzeittest.

## 1. Identität und Prüfumfang

| Punkt | Tatsächlicher Stand |
|---|---|
| Produkt / Repository | ROOSTER RAGE / [emfau88/RoosterRage](https://github.com/emfau88/RoosterRage) |
| Öffentliche Prüffassung | GitHub Pages, Buildmetadaten master / 328843a042f19f551f53e9ea17e9922a7100417e |
| Primäre lokale Quelle | C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage; Branch codex/portal-feedback-polish; gleicher HEAD, vorhandene lokale Portal-/Y8-Änderungen |
| Zweiter Checkout | C:/Users/madde/Documents/ROOSTER; älterer HEAD und zahlreiche Änderungen, nicht Analysebasis |
| Tatsächlich bedient | Desktop 1281×800, schmale Browseransicht 391×844; Start, WASD, Autofeuer, erste Upgradeauswahl, Pause/Continue, Ergebnis, Henhouse, neuer Run |
| Gezielte Codegegenprüfung | 16 Spieldateien ohne Diff gegen den bestätigten öffentlichen HEAD; aktive Grundpfade geprüft |
| Bilder | Fünf neue unveränderte öffentliche Browseraufnahmen |
| Kein manueller Eingriff | Kein Originalcode, Store oder Paket verändert; Profil nicht zurückgesetzt oder künstlich editiert, normaler Rundenzuwachs im Spiel; keine Verbesserungen umgesetzt |

Ein kurzer sichtbarer Loader wurde beobachtet. Startzeit, Cache-/Netzbedingungen und Framerate wurden nicht gemessen; daraus folgt kein belastbarer Performancebefund.

Details und Zeilennachweise: [Quellenprüfung](Quellenpruefung.md), [Laufzeitprovenienz](runtime/README.md), [Bildmanifest](screenshots/manifest.json).

## 2. Was wirklich gespielt wurde

Vor Testbeginn zeigte das bestehende Profil **126 kernels**, **Mastery 3/5**, **First clear complete** und **Best Hunt 1131**. Diese Werte sind Altbestand, kein Ergebnis dieser Analyse. Gekaufte Talentränge wurden nicht vollständig erhoben; das Profil wurde nicht zurückgesetzt.

Der Hauptagent startete **Standard Run / Barnyard Ace / Harvest Yard** mit 100 HP, Zeit 0 und Welle 1/10. Gehaltene WASD-Eingaben bewegten den Hahn und die Kamera; geschossen wurde automatisch. Bei Welle 2 um angezeigte **0:31**, mit **28 Kills und 100 HP**, erschien die erste Auswahl mit drei lesbaren Karten.

Die Auswahl bot unter anderem **Target Egg R1→R2 / Twin Lock** (jede zweite Attacke zwei Eier) und **Support Chick R1** (ein Begleiter, 17 Schaden). Gewählt wurde **Support Chick**. Danach waren Begleiter, Level 2, zwei aktive Einträge und eine New-Ability-Bestätigung sichtbar. Target Egg wurde lediglich angeboten; sein Rang-2-Effekt wurde in dieser Runde nicht ausprobiert.

Eine weitere Bewegung in Richtung Gegner brachte HP auf 32 beziehungsweise 18 bei angezeigten 0:43. Pause/Settings unterbrach den bedienten Kampf und die Zeitanzeige; Continue arbeitete weiter. Das Ende zeigte **0:47 / 45 Kills / +5 kernels / Balance 131 / +45 XP**, weiterhin Mastery 3. Return to Henhouse funktionierte.

Ein neuer Start in schmaler Ansicht setzte laufbezogene Werte auf 100 HP, Zeit 0 und Welle 1 zurück. Ein sehr kurzer Pointerdrag am Joystick bewegte den Charakter leicht; bei 0:17 waren 100 HP und 15 Kills sichtbar. Das ist kein physischer Touchtest. Kurzzeitig rote Trefferframes im vorherigen Lauf waren nach Ergebnis und Neustart wieder normal; ein bleibender Renderfehler wurde nicht beobachtet.

## 3. Stärken

- **Erkennbarer eigener Stil:** Hahnfigur, Hof, Gegner und golden gerahmte UI vermitteln eine zusammenhängende Cartoonwelt. Das Produkt lässt sich visuell klar zuordnen.
- **Bedienbarer Kampfgrundweg:** WASD, Kameraführung und Autofeuer waren wirksam; der Desktop-HUD machte HP, Zeit, Welle und Kills im geprüften Lauf erfassbar.
- **Konkrete Upgradeentscheidung:** Die Karten nennen Rang und Zahlen. Der gewählte Begleiter war anschließend tatsächlich im Kampf sichtbar; die Wirkung blieb nicht bloß ein Menüspruch.
- **Pause und Ergebnis funktionieren im geprüften Weg:** Der Settingsdialog passt und scrollt in schmaler Ansicht. Continue, Ergebnisbelohnung, Return to Henhouse und ein neuer Run waren bedienbar. Ein Verlust führte zu sichtbar kleinem Fortschritt.

Das sind Beobachtungen und gestalterische Einschätzungen des begrenzten Laufs. Sie beweisen keine Langzeitmotivation, vollständige Touchqualität oder zuverlässige gesamte Kampagne.

## 4. Vier zentrale Befunde

### A. Der Henhouse bietet früh viel Information neben einem klaren Startbutton

**Einordnung: UX-Einschätzung, mittlere Priorität.** Der gelbe START RUN-Button ist deutlich. Gleichzeitig stehen Play, Roosters, Talents und Archive, Kartenwechsel, vier Expeditionen, Mastery, Best Hunt und Belohnungen in derselben Anfangsansicht. Das wirkt in der Desktopaufnahme reichhaltig und relativ beschäftigt. Ein erfahrener Spieler kann davon profitieren; für einen neuen Besucher könnte die Reihenfolge zusätzliche Entscheidungen vor dem ersten Spiel erzeugen.

**Kleiner Vorschlag:** Standard Run und den direkt gewählten Hahn als ruhigen Standardweg betonen. Zusätzliche Karten-/Expeditionsinformation bei Bedarf nachgeordnet öffnen, ohne die vorhandenen Systeme zu streichen. Erst am frischen Profil prüfen, welche Auswahl tatsächlich früh sichtbar ist.

**Grenze:** Kein nachgewiesener Abbruch und keine Nutzerstudie. Der geprüfte Hub stammt aus einem bestehenden Profil; Umfang und Freischaltungen können bei neuen Spielern anders sein.

### B. Zahlen und sichtbare Wirkung sind gut; Evolutionsrezepte konkurrieren schon bei der ersten Auswahl

**Einordnung: UX-Einschätzung, mittlere Priorität.** Die drei großen Upgradebuttons sind gut lesbar; Support Chick benennt den unmittelbaren Nutzen verständlich. Gleichzeitig erscheinen bereits Rangfolgen, Waffen-/Companionkategorie, Begriffe wie Twin Lock und separate EVO-Rezepte mit weiteren Voraussetzungen. Für die erste schnelle Wahl ist mehr Systemwissen verlangt als für die sichtbare Grundentscheidung nötig wäre.

**Kleiner Vorschlag:** Name, unmittelbare Wirkung und nächster Rang bleiben vorne. Evolutionsrezept als zusätzliche Information oder aufklappbare Vorschau anbieten. Konkrete Werte und die bestätigte Begleiterwirkung unbedingt erhalten.

**Grenze:** Rezeptinformationen können Builds planbar machen; ihre Anzeige ist kein Fehler. Es wurde nur die erste Auswahl mit einem Begleiter gewählt, keine Evolution gespielt und kein Verständnis bei echten Neulingen gemessen.

### C. Settings ist bedienbar, aber Diagnose und Detailaudio können ruhiger gruppiert werden

**Einordnung: aktiver Quellcode plus Laufzeit, niedrige Priorität.** Die mobile Pause zeigt einen passend scrollbaren Inhalt mit zugänglichem Continue. Fünf Audiobereiche und ein normal angezeigter Pickup report samt Diagnoseexport erhöhen trotzdem die Länge eines allgemeinen Spielermenüs. Die vorhandenen Schalter für Shake, Hit flashes und Vibration sind nützliche Kontrolle.

**Kleiner Vorschlag:** Häufige Einstellungen direkt lassen; Diagnoseexport und optional detaillierte Audiokanäle unter Erweitert gruppieren. Keine funktionierenden visuellen Komfortschalter entfernen.

**Grenze:** Kein kaputtes Menü, keine Audioqualitätsbewertung und kein Diagnoseexporttest. Umfang allein belegt keinen Nutzerverlust; dieser Vorschlag folgt aus Informationsreihenfolge.

### D. Erstbenutzerführung und ursprüngliche Schwierigkeit bleiben durch den vorhandenen Spielstand offen

**Einordnung: konkrete Prüfgrenze mit Codebezug, mittlere Priorität.** Das vorhandene Profil hatte bereits Mastery, First clear und Kernbestand. Der aktive Code lädt Fortschritt, wendet gekaufte Talentboni an und zeigt mindestens einen Versorgungshinweis nur einmal. Ein heute nicht sichtbarer Hinweis bedeutet deshalb nicht, dass ein frischer Spieler ihn nie erhält.

**Kleiner Vorschlag:** Eine getrennte neue Browsersitzung beziehungsweise einen leeren Testkontext verwenden, ohne das bestehende Profil zu löschen. Fünf bis zehn Minuten mit wirklich frischem Einstieg beobachten: Steuerung, XP-Nutzen, Versorgung, erstes Upgrade, Verlust und erneuter Start. Erst danach eine konkrete Frage zur Einstiegshärte auswählen.

**Grenze:** Kein fehlendes Tutorial behauptet. Mastery 3 oder 126 kernels beweisen keine gekauften Talente. Der Gang in Gegner und die kurzen Bedienintervalle sind keine repräsentative Grundlage für ein Härteurteil.

## 5. Drei sinnvolle nächste Maßnahmen

| Reihenfolge | Begrenzte Maßnahme | Woran sie geprüft wird |
|---|---|---|
| 1 | Frischen Einstieg in getrenntem Testkontext plus kurzen echten Handytest durchführen | Neuer Spieler versteht Bewegung, Autofeuer, XP und erste Wahl; längere Joystickführung, Fingerabdeckung und Unterbrechung auf einem tatsächlichen Gerät beobachten |
| 2 | Henhouse- und Upgradehierarchie als kleines UX-Update konkretisieren | Standardstart bleibt auffindbar; erste Upgradeentscheidung ist ohne Rezeptwissen möglich; genaue Werte und Buildvorschau bleiben erreichbar |
| 3 | Diagnose/Detailaudio optional unter Erweitert ordnen; Audio und ersten Boss im begrenzten Folgelauf prüfen | Continue und Komfortschalter weiterhin schnell erreichbar; Geräusche tatsächlich hören; Bosswarnung und Muster erst nach gespieltem Kampf beurteilen |

Alle drei Maßnahmen sind **offen beziehungsweise vorgeschlagen**. Es wurden keine UI-Änderungen, Fixes oder Veröffentlichungen vorgenommen. Aus diesem Check folgt kein Monetarisierungsplan.

## 6. Offene Fragen und Grenzen

- Wie sieht der erste Weg ohne vorhandene Mastery, Hinweise und Freischaltungen wirklich aus?
- Wie gut verstehen erste Spieler XP, Versorgung und erste Upgradeentscheidung, und wollen sie nach dem Verlust erneut starten?
- Wie funktionieren längere Joystickführung und schnelle Richtungswechsel auf einem echten Handy?
- Sind Soundeffekte, Musik und Trefferfeedback in tatsächlicher Wiedergabe hilfreich oder überladen?
- Wie lesen sich die erste Bosswarnung und dessen Muster im echten Kampf; wie gut tragen weitere Karten und Expeditionen?
- Welcher lokale Portal-/Y8-Arbeitsstand soll später veröffentlicht werden? Das ist eine Versionsfrage, kein nachgewiesenes Qualitätsproblem des getesteten Pages-Spiels.

Nicht geprüft wurden Bossabschluss, spätere Wellen, sämtliche Upgrades/Evolutionen, alle Expeditionen/Karten, Talentkauf, reine Tastaturmenüs, vollständige Focus-/Tabwechselpause, belastbare Performance, echte Nutzerdaten oder Langzeitbindung. Sitzungszahlen sind Ergebniswerte dieses einen Laufs, **keine Produkt-KPIs**.

## 7. Bildbelege

| Aufnahme | Was sie belegt |
|---|---|
| [Henhouse – Desktop](screenshots/henhouse-desktop.jpg) | Bestehendes Profil und die Informationsmenge neben START RUN |
| [Erste Upgradewahl – Desktop](screenshots/upgrades-desktop.jpg) | Lesbare Karten, unmittelbare Zahlen und zusätzliche EVO-Rezepte |
| [Settings – mobil](screenshots/settings-mobile.jpg) | Scrollbarer Dialog und unten erreichbare Hauptaktionen |
| [Kampf – mobil](screenshots/battle-mobile.jpg) | Neuer Lauf bei 0:17, HUD und Portrait-Spielfeld |
| [Eigenes Ergebnis – mobil](screenshots/result-mobile.jpg) | 0:47, 45 Kills und neuer Zuwachs von 5 kernels, kein Boss-/Siegbeleg |

Herkunft und Hashes: [Manifest](screenshots/manifest.json). Das Urteil beruht auf der heutigen Bedienung und gezielter aktiver Quellengegenprüfung; ältere Qualitätsbehauptungen wurden nicht übernommen.
