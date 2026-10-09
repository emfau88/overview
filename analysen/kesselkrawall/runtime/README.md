# KESSELKRAWALL – Identität und isolierte Testbasis

Stand: **09.10.2026**. Dieser Nachweis dokumentiert technische Zuordnung, Quellenstand und Vorbereitung einer getrennten Browser-Testfassung. Der vorbereitende Identitäts-/Buildschritt enthielt kein Qualitätsurteil und keinen Spieltest; die **anschließend tatsächlich ausgeführte Browserprüfung** ist unten und in den verlinkten Berichten getrennt ergänzt. Keine automatisierte Spieltestsuite wurde ausgeführt.

## Lokale Quelle und bestehender öffentlicher Spielstand

| Merkmal | Lesend festgestellt |
|---|---|
| Originalordner | `C:\Users\madde\Documents\kesselkrawall` |
| Origin | `https://github.com/emfau88/KesselKrawall.git` |
| Branch | `main` |
| Lokaler HEAD | `83d17ab14ff265559b58652e9040eecef7d7ad51` |
| Commitdatum | `2026-10-05T21:50:49+02:00` |
| Arbeitskopie | Vorhandene Änderungen und zusätzliche Ordner/Dateien, siehe unten |

Git wurde mit deaktivierten optionalen Schreiblocks lesend abgefragt. Originalquelle, bestehende Buildprodukte und Git-Einstellungen wurden nicht verändert. Bereits vorhandener Status:

```text
 M README.md
 M app/game/Game.tsx
 M app/game/i18n.tsx
 M app/globals.css
 M app/layout.tsx
 M app/menu.css
 M next.config.ts
 M package.json
 M tests/rendered-html.test.mjs
?? .codex-remote-attachments/
?? SOUNDTEST/
?? docs/concepts/
?? platforms/y8/
?? public/assets/platform/
?? scripts/package-y8.ps1
?? tests/y8-bootstrap.test.mjs
```

Der erste Blick der praktischen Prüfinstanz auf die öffentliche URL zeigte bereits einen gespeicherten Zustand: Runde 2, ein Siegel, Kampf gegen Moor Martha. **Dieser bestehende Spielstand wurde nicht als eigener Fortschritt bewertet und für den geplanten frischen Test nicht zurückgesetzt.** Stattdessen wurde eine eigene lokale Origin vorbereitet. Auch dort muss der tatsächliche Startzustand beim ersten Öffnen geprüft werden; diese Dateivorbereitung behauptet keinen bereits beobachteten frischen Lauf.

## Öffentlicher main und Pages-Auslieferung

Lesend abgefragter aktueller öffentlicher `main`: **`83d17ab14ff265559b58652e9040eecef7d7ad51`**, Commit „Add portal artwork and refresh README with current play link“, **05.10.2026, 19:50:49 UTC**. Der Commit entspricht dem lokalen HEAD; die oben genannten zusätzlichen lokalen Änderungen entsprechen deshalb noch nicht automatisch der öffentlichen Fassung.

GitHub Pages nennt Veröffentlichungstyp **workflow** und Quelle `main` mit Repositorywurzel `/`. Öffentliche URL: [https://emfau88.github.io/KesselKrawall/](https://emfau88.github.io/KesselKrawall/). Der [Pages-Workflow](https://github.com/emfau88/KesselKrawall/blob/83d17ab14ff265559b58652e9040eecef7d7ad51/.github/workflows/deploy-pages.yml) verwendet Node 22, installiert mit `npm ci`, sieht Typen-/Lint-/Testschritte vor und erzeugt über `build:pages` einen statischen Next-Export in `out/` mit `GITHUB_PAGES=true`. Dies ist die gelesene Pipeline, **keine Behauptung, dass ihre früheren Runs hier erneut ausgeführt oder alle bestanden wurden**.

Öffentliche Primärquellen: [Commit](https://github.com/emfau88/KesselKrawall/commit/83d17ab14ff265559b58652e9040eecef7d7ad51), [Pages-Konfiguration](https://api.github.com/repos/emfau88/KesselKrawall/pages), [Paket](https://github.com/emfau88/KesselKrawall/blob/83d17ab14ff265559b58652e9040eecef7d7ad51/package.json), [Next-Konfiguration](https://github.com/emfau88/KesselKrawall/blob/83d17ab14ff265559b58652e9040eecef7d7ad51/next.config.ts).

## Saubere Quellenkopie

Testbasis: `C:\Users\madde\Documents\OVERVIEW\analysen\kesselkrawall\runtime\testcopy`.

Die Quellen stammen aus dem öffentlichen GitHub-Archiv des **festen oben genannten Commits**. Ausgewählt wurden `app/`, `build/`, `public/` samt wirksamen Assets und sechs benötigte Paket-/Build-Konfigurationen: **205 Dateien, insgesamt 19.050.235 Bytes**. Der Git-Blob-SHA1 jeder ausgewählten Datei wurde gegen den Repositorybaum geprüft; das ignorierte `source-manifest.json` enthält zusätzlich SHA256, Größe und Archivfingerabdruck.

Nicht übernommen wurden `.git`, Zugangsdaten, `.env`, Originaldiagnoseablagen, Entwurfs-/Konzeptdokumente, alte Bewertungsberichte oder Portalscreenshots. README-Qualitätsbehauptungen und ältere Balanceberichte wurden nicht als Spielurteil gelesen. Der Root-Einstieg `app/page.tsx` lädt das aktuelle `Game`-Modul; die vorhandenen Probe-Routen bleiben reine Bestandteilinformation und wurden nicht als Produkterfahrung bewertet.

Paketmetadaten dieses Quellenstands: `kessel-krawall`, Version **0.1.0**, Node-Anforderung **>=22.13.0**, Next **16.2.6**, React/React DOM **19.2.6**, Pixi **^8.22.0**. Die Paketversion allein identifiziert keinen konkreten veröffentlichten Spielzustand; der feste Commit und Fingerabdrücke sind dafür genauer.

| Ausgewählte unveränderte Quell-Datei | SHA256 |
|---|---|
| `package.json` | `8ef0afccf7ebdcd87252cb02a61469dd1d44f7a650e1a3938793d8222f73be2d` |
| `app/page.tsx` | `9e71d566720ff53f4168d2d39541297d1167e22b90956cadf4878c499d59cc0f` |
| `app/game/Game.tsx` | `363023fa43558ae92645642543bba252319a54bd7363ae4cbed3d15ddcd45bbc` |
| `app/game/state.ts` | `e01fd8c571bf606dbf4a0c1065cadb2c733fe4061dd6cebac5a143b059a24b3d` |
| `app/game/storage.ts` | `5cf9149edba7955bed527b89025601028f5432f0face1f849820d57729a6d164` |
| `next.config.ts` | `a6b1f4b406b10e2eddf74cba1fa36fe8d8eb70ec3f9ab778e050d9166504da8f` |

## Isolierter Build und lokaler Auslieferpfad

Abhängigkeiten wurden als **eigenständige Dateikopie** aus dem vorhandenen lokalen `node_modules` übernommen; keine Junctions oder Hardlinks auf das Original wurden eingerichtet. Der lokale Lockfileinhalt stimmt nach Normalisierung der Windows-Zeilenenden mit dem öffentlichen Lockfile überein. Die für den Export relevanten vorhandenen Paketversionen wurden überprüft: Next 16.2.6, React/React DOM 19.2.6, TypeScript 5.9.3 und Tailwind-PostCSS 4.2.1. Unnötige kopierte Toolcache-Verzeichnisse wurden ausschließlich in dieser Testkopie entfernt. Es wurde kein `npm ci` in der Originalquelle ausgeführt.

In der isolierten Testkopie ausgeführt:

```text
Node: 22.17.1
GITHUB_PAGES=true
GITHUB_REPOSITORY=emfau88/KesselKrawall
GITHUB_SHA=83d17ab14ff265559b58652e9040eecef7d7ad51
NEXT_TELEMETRY_DISABLED=1
node node_modules/next/dist/bin/next build
```

Der erfolgreiche Lauf meldete **Kompilierung, TypeScript-Phase und statische Generierung**; Exitcode 0. Die erste Ausführung innerhalb der Sandbox wurde zuvor beim Windows-SWC-Kanonisieren des lokalen Pfads mit „Zugriff verweigert“ beendet; der gleiche isolierte Build außerhalb der Sandbox lief erfolgreich. Die ausgewählten ursprünglichen Quell-Dateien blieben nach SHA256-Vergleich unverändert. Erzeugte `.next`-/`out`-Dateien und `next-env.d.ts` gehören zur lokalen Buildumgebung, nicht zum Originalstand.

Kein Lintlauf, keine automatisierte Spieltestsuite, keine Browserprüfung und kein Balancetest durch diesen Vorbereitungsschritt. Ein erfolgreicher Export beweist keine gute UX oder korrekte Spielmechanik.

Der Export liegt getrennt unter:

- **HTTP-Serverwurzel:** `C:\Users\madde\Documents\OVERVIEW\analysen\kesselkrawall\runtime\serve`
- **Spielunterordner:** `serve/KesselKrawall/`
- **Geplante Testadresse:** `http://127.0.0.1:8768/KesselKrawall/`

Damit bleibt der Pages-`basePath` `/KesselKrawall` erhalten. Der Export umfasst **236 Dateien, 20.086.807 Bytes**. SHA256 der erzeugten `index.html`: `5d08513aa7080f82e00562eafb83b8e115f11d24083e226cab94464d55057505`. Das ignorierte `export-manifest.json` enthält Dateifingerabdrücke. Diese Größen sind lokale Artefaktgrößen, keine gemessene Erstladezeit und kein Netzwerktransfer eines tatsächlichen Spiels.

Der Server und die praktische Spielsitzung wurden anschließend separat durch die Hauptprüfinstanz gestartet. Ein zunächst gehängter Python-HTTP-Start wurde durch einen eigenen Node-HTTP-Helfer ersetzt, der die unveränderten Exportdateien ausschließlich auf `127.0.0.1:8768` ausliefert. Dieser lokale Helfer bleibt ignoriert und ist keine Produktänderung. Die lokale Origin hat einen getrennten Browser-Speicher gegenüber der öffentlichen Pages-Origin; die öffentliche Fassung, ihr bestehender Save und die lokalen Originalquellen bleiben unverändert. Trotzdem ist diese Testfassung ein **lokal gebauter Export**, kein lückenloser Beweis der Byteidentität mit der veröffentlichten Linux-Pipeline und den dort gerade ausgelieferten Ressourcen.

## Anschließende praktische Prüfung

Desktop 1281×800 und schmale Browseransicht 391×844 wurden tatsächlich bedient. Der frische Lauf begann mit Runde 1, sieben Gold und drei Siegeln. Käufe, Detailansichten, automatische Merges, zwei Kämpfe mit eigenen Siegen, Beschleunigung, Pause/Fortsetzen und Marktbeginn Runde 3 wurden geprüft. Menü, Reload und Fortsetzen erhielten den konkret gebauten Runde-3-Zustand. Der zu teure Chili-Kauf blieb ohne gesehenen sichtbaren Erklärtext; die anschließende Quellenprüfung trennt korrektes Ablehnen des Zustands von nicht gerendertem Shopfeedback.

Sieben unveränderte JPEG-Aufnahmen dokumentieren die lokale Testfassung im [Screenshotmanifest](../screenshots/manifest.json). Es sind keine neuen öffentlichen Pages-Aufnahmen und keine Bilder eines physisch bedienten Touchgeräts. [Grundanalyse.md](../Grundanalyse.md) enthält die genaue eigene Sitzung, Stärken, Befunde und Vorschläge; [Quellenpruefung.md](../Quellenpruefung.md) die gezielte Gegenprüfung mit Zeilen und Commit.

Keine vollständige Kampagne, Niederlage/Siegelverlust, Vitrine, spätere Familien, physischer Touch, hörbares Audio oder langfristige Nutzung geprüft. Ergebniszahlen sind Sitzungsbelege, keine Nutzungs-KPIs. Keine Verbesserung umgesetzt.

## Veröffentlichung und Grenze

Die Runtimekopie, Abhängigkeiten, Quell-/Exportmanifeste und Buildprodukte bleiben ignoriert und lokal. Innerhalb `runtime/` wird nur dieser Provenienznachweis veröffentlicht; Grundanalyse, Quellengegenprüfung und Browseraufnahmen liegen daneben. Keine zentrale Dashboarddatei wurde durch diesen Unterauftrag verändert, kein Spiel fixiert, kein Commit/Push erstellt und kein gespeicherter öffentlicher Lauf gelöscht. Gegenprüfungen betreffen konkrete eigene Beobachtungen und aktive Quellenpfade.
