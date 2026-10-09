# ROOSTER RAGE – gezielte Quellengegenprüfung

Stand: 09.10.2026. Begrenzter Quellencheck nach tatsächlicher Bedienung durch den Hauptagenten. Keine Übernahme alter QA-Scores, README-Qualitätsurteile oder früherer Testbehauptungen.

## 1. Identität und verwendeter Stand

| Ebene | Festgestellter Stand | Bedeutung |
|---|---|---|
| Öffentlich bedientes Spiel | https://emfau88.github.io/RoosterRage/ | Bewertete Browserfassung |
| Ausgelieferte Buildmetadaten | master, 328843a042f19f551f53e9ea17e9922a7100417e | build-info.json tatsächlich lesend abgerufen |
| Öffentliches Repository | Defaultbranch master; master-HEAD 328843a042f19f551f53e9ea17e9922a7100417e | Lesend über GitHub API/gh geprüft |
| Letztes erfolgreiches Pages-Deployment | Workflowlauf 37307967603, HEAD 328843a042f19f551f53e9ea17e9922a7100417e, 05.10.2026 | Deploymentherkunft bestätigt |
| Primärer lokaler Checkout | C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage; codex/portal-feedback-polish; gleicher HEAD | Gezielte Spielquellen entsprechen HEAD; gesamter Checkout ist dirty |
| Zweiter Checkout | C:/Users/madde/Documents/ROOSTER; master; 8cb831f4e165e9c135c1c286fec8fb6f22df41fd | Abweichender älterer Arbeitsstand, nicht Spielanalysebasis |

Beide origin-Remotes sind https://github.com/emfau88/RoosterRage.git. Im primären Ordner waren fünf Dateien verändert (.gitignore, package.json, src/main.js, src/systems/KongregateSystem.js, vite.config.js) und fünf Y8-/Paketdateien unversioniert. Das ist vorhandene lokale Arbeit, kein Befund über den öffentlichen Spielstart. Der zweite Checkout weist zahlreiche weitere Änderungen auf; deren Qualität wurde nicht geprüft.

Der lesende Gitvergleich gegen HEAD war für diese 16 Dateien ohne Diff: GameScene.js, HUD.js, PlayerInputSystem.js, GamePauseSystem.js, RunStateSystem.js, CombatSystem.js, MetaProgressionSystem.js, UpgradeSystem.js, WaveSystem.js, waveDefinitions.js, upgradeDefinitions.js, roosterDefinitions.js, Player.js, SupportChicken.js, arenaDefinitions.js, challengeDefinitions.js. Alle Dateinamen beziehen sich auf ihre tatsächlichen src-Unterordner. Für diese gezielten Befunde wurde kein vom öffentlichen Commit abweichender lokaler Spielcode verwendet. Gesamte Byteidentität aller ausgelieferten Ressourcen wurde nicht geprüft.

Quelle: [ausgelieferte Buildmetadaten](https://emfau88.github.io/RoosterRage/build-info.json), [öffentlicher Commit](https://github.com/emfau88/RoosterRage/commit/328843a042f19f551f53e9ea17e9922a7100417e), [erfolgreicher Deploylauf](https://github.com/emfau88/RoosterRage/actions/runs/37307967603). Lokale Quellen bleiben unverändert; es wurden weder Builds noch automatische Tests ausgeführt.

## 2. Steuerung, Kameraführung und Autofeuer

**Laufzeit:** Gehaltene D-/S-/W-Eingaben bewegten Barnyard Ace; die Kamera folgte. Autofeuer war ohne extra Schusstaste sichtbar. Der kurze Joystickdrag in 391×844 bewegte geringfügig, beweist aber keine brauchbare längere Fingerführung.

**Quellcode:** [PlayerInputSystem.js:13](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/PlayerInputSystem.js:13) registriert Pfeiltasten und WASD. Pointerdown/-move/-up werden ab Zeile 20 behandelt; Pause/Upgrade und Pointer rechts von 58 Prozent der Canvasbreite werden bei der Joystickaktivierung ausgeschlossen. [PlayerInputSystem.js:52](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/PlayerInputSystem.js:52) normalisiert die relative Joystickbewegung; ab Zeile 61 wird Tastaturbewegung mit Pointerfallback ermittelt. [GameScene.js:187](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/scenes/GameScene.js:187) lässt die Kamera dem Spieler folgen. [CombatSystem.js:40](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/CombatSystem.js:40) feuert zeitgesteuert auf ein ausgewähltes Ziel, sofern Gegner vorhanden sind.

**Grenze:** Die Verbindung Code/Bedienung bestätigt den geprüften Grundweg. Latenz, echte Touchgesten, Fingerabdeckung, alle Eingabemethoden und sämtliche Menüfokuswege wurden nicht untersucht.

## 3. Wellen, XP und erster sichtbarer Upgradeeffekt

**Laufzeit:** Welle 1/10 begann mit 100 HP. In Welle 2, um angezeigte 0:31, erschienen drei gut lesbare Upgradebuttons. Angeboten wurden unter anderem Target Egg R1→R2 (Twin Lock) und Support Chick R1. Gewählt wurde ausschließlich Support Chick; danach erschien ein Begleiter, Ace L2, zwei aktive Einträge und eine New-Ability-Bestätigung.

**Quellcode:** [WaveSystem.js:122](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/WaveSystem.js:122) schaltet erst nach Ende der Spawnphase und ohne verbleibende Gegner zur nächsten Welle. [waveDefinitions.js:18](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/data/waveDefinitions.js:18) enthält die zehn Wellen; die erste definiert 24 Gegner und einen XP-Verlauf mit 44 XP (Zeile 52), Welle 2 weitere Gegner und XP (Zeile 61/72). [GameScene.js:739](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/scenes/GameScene.js:739) legt in Welle 2 nach 3500 ms ein zusätzliches XP am Spieler ab; beim Wellenabschluss wird verbliebenes XP eingesammelt (Zeile 748). Das erklärt einen bewusst vorgesehenen frühen Upgradezugang, ist kein Nachweis über alle tatsächlichen Spielverläufe.

[RunStateSystem.js:107](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/RunStateSystem.js:107) fordert drei Auswahlmöglichkeiten an, hält beim Auswahlzustand an und wendet die Wahl ab Zeile 166 auf den Spieler an. [upgradeDefinitions.js:65](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/data/upgradeDefinitions.js:65) beschreibt Target Egg samt Twin-Lock-Doppelangriff auf jeder zweiten Attacke; es wurde nicht gewählt. [upgradeDefinitions.js:256](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/data/upgradeDefinitions.js:256) definiert Support Chick mit einem Begleiter und 17 Schaden auf Rang 1 und setzt den Begleiterrang über die aktive Spielfunktion. [HUD.js:354](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/ui/HUD.js:354) ergänzt Evolutionsrezepte bereits auf den Auswahlkarten.

**Einordnung:** Verständliche Zahlen und die sichtbare Begleiterwirkung sind echte Stärken. Die Rezeptdichte auf der ersten Karte ist eine UX-Einschätzung, kein bewiesener Upgradefehler. Evolution, spätere Rangwirkungen und Boss wurden nicht gespielt.

## 4. Pause, Settings und Ergebnis

**Laufzeit:** Öffnen von Pause/Settings stoppte den bedienten Kampf und die angezeigte Zeit; Continue setzte ihn fort. In schmaler Ansicht war der Settingsinhalt scrollbar, Continue und Main menu unten erreichbar. Das eigene Ende zeigte 0:47, 45 Kills, +5 kernels und Balance 131, +45 XP. Return to Henhouse und ein neuer Start mit 100 HP/0:00/Welle 1 waren bedienbar.

**Quellcode:** [GameScene.js:226](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/scenes/GameScene.js:226) verlässt den Updateweg unter anderem bei Settings, Upgrade und Pause, bevor die Laufzeit fortgeschrieben wird. [GamePauseSystem.js:1](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/GamePauseSystem.js:1) friert für normale Pausengründe Zeit, Tweens und Physik ein und löscht Input. [RunStateSystem.js:273](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/RunStateSystem.js:273) beendet den Lauf einmalig, verbucht die Runde im Metafortschritt und öffnet das Ergebnis.

[HUD.js:1226](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/ui/HUD.js:1226) legt fünf Audiofelder an. [HUD.js:1274](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/ui/HUD.js:1274) enthält Pickup report samt Exportbutton direkt im normalen Settingsdialog. [GameScene.js:331](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/scenes/GameScene.js:331) verbindet ihn mit dem Diagnoseexport. Das ist ein aktiver Codepfad; der Export selbst wurde nicht ausgeführt. [HUD.js:1283](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/ui/HUD.js:1283) hält Main menu und Continue außerhalb der scrollbaren Inhalte.

**Einordnung:** Der geprüfte Pause-/Rückkehrweg funktioniert. Eine separate erweiterte Gruppe für Diagnose und Detailaudio ist eine mögliche Vereinfachung, kein defektes Menü. Kein Audiohörtest, keine komplette Tab-/Blur-/Mehrfachpauseprüfung oder Exportprüfung.

## 5. Bestehender Spielstand und Ersteinsteigergrenze

**Laufzeit:** 126 kernels, Mastery 3/5, Best Hunt 1131 und First clear complete bestanden bereits vor der Sitzung. Es wurde kein Talent gekauft oder Profil zurückgesetzt. Die heutigen eigenen Ergebnisse sind nur der kurze Lauf und dessen sichtbarer Zuwachs von 5 kernels.

**Quellcode:** [MetaProgressionSystem.js:174](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/MetaProgressionSystem.js:174) lädt gespeicherten Fortschritt; ab Zeile 408 berechnet es Talentboni für HP, Bewegung, Schaden, XP-Radius, Rerolls und Critchance, ab Zeile 419 werden sie auf den neuen Lauf angewandt. [RunStateSystem.js:55](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/RunStateSystem.js:55) bindet dies beim Runstart ein. Mastery-/Kernzahlen allein sagen nicht, welche Talentränge gekauft wurden.

[RunStateSystem.js:264](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/systems/RunStateSystem.js:264) zeigt den einmaligen Breakable-Supplies-Hinweis nur ohne bereits gespeicherten Hinweisstatus; [HUD.js:1421](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/ui/HUD.js:1421) erläutert zerstörbare Kisten und Heu mit möglichen Vorräten. Es wurde im bestehenden Profil kein vollständiges neues Onboarding getestet. Aus einem heute nicht gesehenen Hinweis lässt sich daher kein fehlendes Erstbenutzertutorial ableiten.

[HUD.js:559](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/ui/HUD.js:559) ordnet Play, Roosters, Talents und Archive im Henhouse; [arenaDefinitions.js:9](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/data/arenaDefinitions.js:9) definiert drei Karten, [challengeDefinitions.js:3](C:/Users/madde/Documents/ChatGPT/Rooster/RoosterRage/src/data/challengeDefinitions.js:3) vier Expeditionen. Diese vorhandene Breite ist im Hub sichtbar, ihre frühen Freischaltzustände auf einem leeren Profil bleiben offen.

**Bewertungsgrenze:** Keine Härte-/Balancewertung aus dem Ende nach 47 Sekunden. Der bewusste Gang in Gegner und begrenzte Eingabeintervalle bilden keine repräsentative Nutzersitzung ab. Für das erste Nutzererlebnis ist ein getrenntes neues Profil sinnvoll, ohne den vorhandenen Spielstand zu löschen.

## Ergebnis der Quellenprüfung

Die aktiven Grundpfade für Bewegung, Autofeuer, XP/Upgrade, Begleiter, Pause, Ergebnis und Metafortschritt passen zu den konkreten Laufzeitbeobachtungen. Es wurde kein reproduzierter blockerartiger Produktfehler festgestellt. Die vorgeschlagenen kleinen Verbesserungen betreffen Informationsreihenfolge und Einstellungen; Ersteinsteigerführung, echter Touch, Audio, Boss und Wiederkehr bleiben eigene offene Prüfungen. Es wurden keine Testsuites, Builds, Fixes oder Spielveröffentlichungen ausgeführt.
