# CORE ARENA – Identität und getrennte Laufzeitbasis

Stand: **09.10.2026**. Zunächst lesende Identitäts-/Auslieferprüfung vor dem eigenen öffentlichen Browser-Erstdurchlauf; danach gezielte Code-Gegenprüfung der ausdrücklich angefragten, tatsächlich beobachteten Pfade. Keine Originalquellen geändert.

- Bestätigter Originalcheckout: `C:\Users\madde\Documents\CTF-3.0`.
- Produktname im Root-HTML: **Core Arena**; Repository: **CTF-3.0**; `origin`: `https://github.com/emfau88/CTF-3.0.git`.
- Branch: **`codex/league-result-dialog-viewport`**.
- HEAD: **`6353e7f3bc09d9ff9f194462b6175240cc9c636b`**, Commit vom **30.09.2026, 22:05:43 +0200**.
- Arbeitsbaum bei `git --no-optional-locks status --short`: **verändert**. Vier tracked Dateien sind geändert: eine Dokumentationsdatei, `package-lock.json` und zwei Phaser-Rendererdateien. Zusätzlich existieren untracked Dokumentations-/Bilddateien, Assets, Quelle, Tests und ein temporärer Ordner. Ihre Existenz ist nur Standprovenienz; ihre Inhalte oder behaupteten Ergebnisse wurden nicht als Qualitätsbeleg verwendet. Kein Originalzustand zurückgesetzt oder bereinigt.
- `package.json` enthält **keine eigene Produktversion, keinen Paketnamen und keine ausdrückliche Node-Engine**. Lockfile-Rootname ist `CTF-3.0`. Darum wird keine bestätigte Releaseversion erfunden.
- Bundler: **Vite**, deklarierter Bereich `^7.0.0`, im aktuell geänderten Lockfile **`7.3.5`**. Phaser: deklarierter Bereich `^3.90.0`, Lockfile **`3.90.0`**. TypeScript: deklariert `^5.8.0`, Lockfile **`5.9.3`**. Das sind lokale Abhängigkeitsstände, keine Nachweise identischer öffentlicher Abhängigkeiten.
- Aktiver Root-Einstieg: `index.html` → **`/src/main.ts`**, Zeile **451**. Alte/alternative HTML-Einstiege wurden nicht zur Laufzeitbasis erklärt.
- Buildscript: **`tsc && vite build`**, `package.json:4`. `vite.config.ts` setzt den Basispfad anhand `VITE_BASE_PATH`, anschließend `GITHUB_REPOSITORY`, ansonsten **`/CTF-3.0/`**. Keine Umgebungsdatei oder Zugangsdaten gelesen.
- Pages-Workflow **`.github/workflows/deploy-pages.yml`** reagiert auf Push nach `main`/`master`, Pull Requests und manuelle Auslösung. Er verwendet Node **22**, enthält Test-/Typecheck-/Build-/Browserschritte und lädt bei Nicht-PR-Ereignissen **`dist`** als Pages-Artefakt hoch, Zeile **70**. Workflowinhalt ist **kein Nachweis bestandener Prüfungen** oder eines aktuellen öffentlichen Deployments.
- Bereits vorhandenes lokales `dist/index.html`: **35.233 Bytes**, Dateizeit **07.10.2026, 16:31:40**. Nur Existenz/Metadaten gelesen. Nicht neu gebaut, gestartet oder mit Quelle/Deployment gleichgesetzt; dieser Dateizeitpunkt beweist keinen bestimmten Gitstand.

## Separate öffentliche Laufzeitbasis

[Öffentliche Pages-Version](https://emfau88.github.io/CTF-3.0/) ist die vom Hauptprüfer zunächst eigenständig zu bedienende Laufzeit. Der lokale Checkout liegt auf einem anderen Branch und enthält uncommittete Änderungen. **Gleichheit zwischen lokalem Checkout, vorhandenem dist, main/master und öffentlichem Pages-Bundle wird nicht behauptet.** Deployment-Commit und öffentliche Produktversion wurden in diesem Identitätscheck nicht unabhängig zugeordnet.

## Quellen und Grenzen

- [Paketmetadaten und Buildscript](C:/Users/madde/Documents/CTF-3.0/package.json:2).
- [Aktiver Moduleinstieg](C:/Users/madde/Documents/CTF-3.0/index.html:451).
- [Basispfad](C:/Users/madde/Documents/CTF-3.0/vite.config.ts:7).
- [Pages-Auslieferpfad](C:/Users/madde/Documents/CTF-3.0/.github/workflows/deploy-pages.yml:70).

Keine `AGENTS.md` im Projektroot, in den geprüften Elternordnern `Documents`/`madde` oder den gezielt betrachteten Quell-/Workflow-Unterbäumen gefunden. OVERVIEW-Anweisungen bleiben maßgeblich. Keine README-Qualitätsaussagen, früheren Reviews, Testergebnisse, Roadmapbewertungen oder Nutzermeinungen übernommen. Keine Originalquelle, Assets, Gitkonfiguration oder Arbeitsdatei geändert. Keine Installation, Builds oder Tests ausgeführt.

## Gezielter öffentlicher main-Quellstand

Der rein lesend über GitHub ermittelte main-HEAD am 09.10.2026 ist **`9794575fa6241f47845fb85352316564789e8d1c`** und unterscheidet sich vom oben genannten lokalen Branch. **27 gezielt benötigte Dateien** dieses festgehaltenen Commits wurden unverändert Base64-dekodiert unter `runtime/source-main/` gesichert. Der Cache ist ignoriert und bleibt lokal; er ist keine geänderte Testkopie, kein Build und wird nicht als Produktquelle im OVERVIEW-Repository veröffentlicht.

Gelesen wurden aktive Trainings-/Qualifizierungs-/Tutorialpfade, Zusammenführung menschlicher und Bot-Eingaben, Pausen-/Countdownlogik, Custom-Match-Auswahl, ausgewählte Botparameter sowie Pickup-/Waffenrückmeldung. Der [Quellenbericht](../Quellenpruefung.md) belegt die relevanten Stellen mit commitfesten GitHub-Dateilinks. Keine historische QA-Datei wurde inhaltlich als Prüfgrundlage übernommen.

Die Browser-Laufzeit bleibt davon getrennt. main wurde nicht unabhängig als Deployment-Commit des tatsächlich bedienten Pages-Bundles bestätigt. Der erste Trainingsversuch lief ohne eigene Spieleingabe; der zweite bediente Versuch enthielt eigene WASD-, Maus-/Feuer- und Sprungeingaben. Beide werden im [Grundbericht](../Grundanalyse.md) getrennt beschrieben. Die Teamergebnisse **Blau 12 zu Rot 15** beziehungsweise **Blau 7 zu Rot 16** sind Punktestände, keine Zeitangaben. Die [sechs aktuellen Browserbilder](../screenshots/manifest.json) unterscheiden das passive und das bediente Trainingsergebnis; die offene Aufgabe/4/5 ist eine vorausgehende Livebeobachtung und nicht unabhängig auf dem Ergebnisbild zu sehen. Keine Debug-Freigabe, künstlicher Sieg oder künstliche Tutorialerfüllung wurde verwendet; die vorhandene Karriere wurde nicht zurückgesetzt oder weitergespielt.
