# GALALAXY – Identität und Quellenstand vor dem Spieltest

Stand: **09.10.2026**. Dieser Nachweis dokumentiert ausschließlich Projektidentität, vorhandenen Arbeitsstand und Veröffentlichungszuordnung. **Er enthält kein Qualitätsurteil und keinen bestandenen Spiel- oder Testlauf.** Der praktische Spieltest und spätere gezielte Codegegenprüfungen werden separat dokumentiert.

## Lokaler Arbeitsstand

| Merkmal | Lesend festgestellt |
|---|---|
| Projektordner | `C:\Users\madde\Documents\galaxy` |
| Origin | `https://github.com/emfau88/galalaxy.git` |
| Branch | `codex/y8-integration` |
| HEAD | `24c96c595bb62905e2e1594824b489378c5d2e3b` |
| Commitdatum | `2026-09-25T23:35:57+02:00` |
| Arbeitskopie | Sechs vorhandene Änderungen, siehe unten |

Git-Status wurde mit deaktivierten optionalen Git-Schreiblocks (`git --no-optional-locks`) lesend abgefragt. Die Sandbox ließ Git zunächst nicht in den externen Projektordner wechseln; derselbe reine Metadaten-/Statusabruf außerhalb der Sandbox war erfolgreich. Keine Dateien, Branches, Commits oder Einstellungen des Originalprojekts wurden verändert.

Vorhandene Änderungen laut `git status --porcelain=v1`:

```text
 M docs/y8/upload-notes.md
 M index.html
 M scripts/y8-browser-check.mjs
 M src/game.js
 M src/input.js
 M src/y8.js
```

Diese Änderungen waren bereits vor der Prüfung vorhanden. Ihre Qualität und ihr Inhalt wurden für diesen Identitätsschritt nicht beurteilt.

## Laufzeit-Einstieg und Paketmetadaten

- Die lokale Root-Datei `index.html` trägt den Titel **Galalaxy** und enthält ein Canvas mit `id="game"`.
- Die Seite lädt direkt das Browser-ES-Modul `src/main.js`; dessen Import führt zu `Game` aus `src/game.js`.
- In der begrenzten Dateisuche wurden **kein `package.json`, kein npm-/pnpm-/Yarn-Lockfile und keine Vite-/Webpack-/Rollup-Konfiguration** gefunden. Der gelesene Root-Einstieg setzt somit keinen bestätigten Bundler-Buildschritt voraus.
- In den für die Identität gelesenen Metadaten wurde keine eigenständige semantische Appversion gefunden. Maßgeblich bleiben Commit, Branch und der vorhandene Änderungsstand; daraus wird kein Versionsetikett erfunden.
- Zusätzlich bestehen lokale Portal-Artefaktordner unter `release/y8/build`, `release/kongregate/build` und `release/gamemonetize/build`. Ihre Existenz beweist keine tatsächliche Portalauslieferung. Sie wurden weder gebaut noch gespielt oder als Pages-Testbasis verwendet.

Quellen: lokale `index.html`, Einstieg in `src/main.js`, begrenzte Dateisuche und Git-Metadaten. README-Qualitätsbehauptungen, Roadmaps, frühere Analysen, Testscores und Portalbewertungen wurden für diese Prüfung nicht als Urteil herangezogen.

## GitHub Pages und abweichender Quellenstand

Die lesend am 09.10.2026 abgefragte GitHub-Pages-Konfiguration nennt:

- URL: [https://emfau88.github.io/galalaxy/](https://emfau88.github.io/galalaxy/).
- Veröffentlichungstyp: **legacy**.
- Konfigurierte Quelle: Branch **`main`**, Pfad **`/`**, also Repositorywurzel.
- Der zeitgleich abgefragte Remote-HEAD von `main`: **`f3a261cff049f5f94b03019c72f5047be2bf91c2`**, Commit „Add Kongregate release packaging“, **25.09.2026, 10:59:39 UTC**.

**Wichtig:** Die lokale Arbeitskopie liegt auf einem anderen Branch, hat einen anderen HEAD und enthält zusätzliche Änderungen. Sie ist deshalb **nicht als identische Quelle des Pages-Spieltests bestätigt**. Auch die konfigurierte Pages-Quelle beweist allein nicht, welche konkreten Ressourcen der Browser im Moment aus Cache beziehungsweise letzter Veröffentlichung erhält. Der tatsächlich geöffnete Live-Auftritt wird im praktischen Spieltest benannt; konkrete Codefragen müssen anschließend gegen den passenden Stand geprüft werden.

Öffentliche API-Quellen: [Pages-Konfiguration](https://api.github.com/repos/emfau88/galalaxy/pages), [abgefragter main-Commit](https://github.com/emfau88/galalaxy/commit/f3a261cff049f5f94b03019c72f5047be2bf91c2).

## Dateifingerabdrücke des vorhandenen lokalen Standes

Die Hashes dienen ausschließlich der späteren Zuordnung; sie sind keine Testergebnisse. Beim ursprünglichen Identitätsschritt wurde keine lokale Originalspielquelle in OVERVIEW kopiert.

| Datei | Bytes | SHA256 |
|---|---:|---|
| `index.html` | 1598 | `36d6420d9851b5e3447a566e9bb57fde84c93bc2161274c92dc26e22955d1db3` |
| `src/main.js` | 107 | `efd17f8ab22d5ad9b60d1ba24c39b2d5556fbe40296323dada17352e5f28d591` |
| `src/config.js` | 5612 | `a5f203e3bcc027f478ed21d6df546d3f76d2c7173e361c6668e1af698573227e` |
| `src/game.js` | 34539 | `51085d6888a586a5d6a80b3a8ae9f4dd99657157e6995aafe25cb2a41f27f2b1` |
| `src/input.js` | 8004 | `a75c2d843752774ae30f462098cc09f6d7286b9fb030d303536ad01ed0b3d3b9` |
| `src/y8.js` | 4762 | `2a36ea15cd05f2a9f91755a4162a1685f64d5694000f37343bd14b80a443c01a` |
| `scripts/y8-browser-check.mjs` | 10258 | `539fed5ba29ab1351e6e57a322ca0ec8b76f3cf1a110ea5298a9728c44594245` |
| `docs/y8/upload-notes.md` | 1876 | `d913537034b449afa4bc8cc7430b4cb20232940bf00de14cba2eb4f02efae7c5` |

## Grenze dieses Schritts

Kein Build, kein Start einer lokalen Spielkopie, kein Browser- oder Spieltest durch diesen Identitätsschritt, keine automatische Testausführung, keine Portalprüfung, keine zentralen Dashboarddaten geändert und kein Commit/Push. Qualität, Bedienung, Spielgefühl und mögliche Probleme werden erst anhand eigener praktischer Beobachtungen beurteilt; gezielte Quellenprüfung folgt danach.

## Anschließende Gegenprüfung nach dem praktischen Spieltest

Nach der eigenen Bedienung der öffentlichen Pages-Fassung wurden gezielte Fragen gegen den oben benannten Remote-main-Commit geprüft. Dafür liegen **18 öffentliche HTML-/JavaScript-Dateien, zusammen 293.162 Bytes**, in der ignorierten lokalen Ablage `runtime/source-main/`. Sie wurden über die GitHub-Blob-API aus dem festen Commit bezogen; Git-Blob-SHA1 wurde für jede Datei geprüft, SHA256 und Größe im dortigen `source-manifest.json` festgehalten. Die ausgewählte Dateigröße ist keine Messung des gesamten Spiels oder des initialen Netzwerktransfers. Bild-/Audiomedien wurden nicht heruntergeladen.

Diese Prüfablage ist von der abweichenden lokalen Originalarbeitskopie getrennt. Weder Originalquelle noch Portalpakete wurden gebaut oder verändert. Die Gegenprüfung ist statisch; keine automatischen Tests und kein lokaler Spielserver wurden gestartet. Der echte öffentliche Browserlauf wird in [Grundanalyse.md](../Grundanalyse.md) und im [Screenshotmanifest](../screenshots/manifest.json) dokumentiert. Die konkreten Codefragen und Zeilen stehen in [Quellenpruefung.md](../Quellenpruefung.md).
