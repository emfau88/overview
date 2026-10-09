# HEXFRONT – Identität und getrennte Laufzeitbasis

Stand: **09.10.2026**. Zunächst lesende Identitäts-/Standprüfung; anschließend gezielte Mechanik-Gegenprüfung anhand eigener öffentlicher Browserbeobachtungen des Hauptprüfers. Originalquellen bleiben unverändert.

- Produktname im aktiven Root-HTML: **HEXFRONT**; Repository-/Paketname: `hexwars`.
- Lokaler Originalcheckout: `C:\Users\madde\Documents\ChatGPT\hexwars`.
- `origin`: `https://github.com/emfau88/hexwars.git`.
- Branch: **`codex/improve-mobile-onboarding-copy`**.
- HEAD: **`5f5f35049b1900971fece81dc3365923e5a9c2c1`**, Commit vom **27.09.2026, 16:32:31 +0200**. Der Commitname wurde nur zur Identität gelesen, nicht als Qualitätsbeleg verwendet.
- Arbeitsbaum bei `git --no-optional-locks status --short`: **sauber**. Die Sandbox verhinderte zunächst Git-Status; der ausdrücklich rein lesende Aufruf außerhalb dieser Einschränkung war erfolgreich. Keine Git-Einstellung oder Originaldatei geändert.
- `package.json`: Version **`0.1.0`**, ES-Module, deklarierte Node-Basis **`>=20`**; Bundler **Vite**, Versionsbereich `^8.2.1`. `package-lock.json` fixiert Vite **`8.2.1`**, Lockfileformat 3. Diese Paketversion ist keine gesondert bestätigte öffentliche Spiel-Releaseversion.
- Aktiver Einstieg: Root-`index.html` → **`/src/main.ts`**, Zeile 235. Historische HTML-Dateien wurden nicht als aktive Spielbasis verwendet.
- Standardbuild: `vite build`; `vite.config.ts` verwendet `base: './'`, `publicDir: 'public'` und **`outDir: 'dist'`**.
- Der gelesene Pages-Workflow reagiert auf Pushes nach **`main`** und manuelle Auslösung. Er verwendet Node 24, enthält Prüf-/Buildschritte und lädt den Ordner **`dist`** als Pages-Artefakt hoch. Die Existenz dieser Workflow-Schritte ist **kein Nachweis**, dass sie für den betrachteten öffentlichen Stand bestanden haben.

## Zunächst separate Laufzeitbasis

[Öffentlicher Pages-Auftritt](https://emfau88.github.io/hexwars/) ist die separate Grundlage für den eigenen Browser-Erstdurchlauf. Die lokale Quelle liegt auf einem anderen Branch als `main`. **Eine Gleichheit zwischen lokalem Checkout, erzeugtem Bundle und tatsächlich veröffentlichtem Pages-Stand wird nicht behauptet.** Veröffentlichtes Artefakt beziehungsweise Deployment-Commit wurde in diesem Identitätscheck nicht unabhängig zugeordnet.

## Quellen und Grenzen

- [Paketmetadaten](C:/Users/madde/Documents/ChatGPT/hexwars/package.json:2).
- [Aktiver Moduleinstieg](C:/Users/madde/Documents/ChatGPT/hexwars/index.html:235).
- [Buildziel](C:/Users/madde/Documents/ChatGPT/hexwars/vite.config.ts:7).
- [Pages-Auslieferpfad](C:/Users/madde/Documents/ChatGPT/hexwars/.github/workflows/pages.yml:53).

Keine zusätzliche `AGENTS.md` im Projekt oder den geprüften Elternordnern `Documents\ChatGPT` / `Documents` gefunden. Die OVERVIEW-Arbeitsgrundlage bleibt maßgeblich. Keine README-Qualitätsaussagen, früheren Analysen, Testscores oder Portalbewertungen übernommen. Keine Originalquellen verändert, keine Paketinstallation, Builds oder Tests ausgeführt.

## Gezielte Gegenprüfung des öffentlichen main-Quellstands

Der am 09.10.2026 rein lesend über die GitHub-API ermittelte `main`-HEAD ist **`29ff12d6897db9b994b97be980efb0037e54d476`**. Er unterscheidet sich vom oben identifizierten lokalen Branch-HEAD. Für die angefragten Mechanismen wurden ausschließlich 24 relevante Dateien dieses festgehaltenen Commits als unveränderte, Base64-dekodierte Quelldateien unter `runtime/source-main/` gesichert. Dieser Cache ist ignoriert und bleibt lokal; er ist kein Build, keine geänderte Testkopie und kein veröffentlichter Produktquellcode im OVERVIEW-Repository.

Gegenstand: aktiver Moduleinstieg, Startgatter, Eingabe, Truppenbewegung/-feedback, automatische Versorgung, aktive Pausenpfade, schmale HUD-Darstellung, Ergebnisdialog, Neustart sowie Fortschritts-/Kartenfreigabe. Die Quellen werden im [gezielten Quellenbericht](../Quellenpruefung.md) mit commitfesten GitHub-Dateilinks und Zeilennummern belegt. Der lokale Branch dient hier nur der Identität; Mechanikbefunde stammen ausdrücklich vom genannten `main`-Commit.

Die öffentliche Pages-Laufzeit wurde vom Hauptprüfer separat mit Desktop- und schmalen Browseransichten bedient. **Auch der aktuelle main-Quellstand ist kein unabhängig nachgewiesener Deployment-Commit des beobachteten Pages-Bundles.** Übereinstimmende Verhaltensweisen und sichtbare Texte werden als Abgleich dokumentiert, nicht als vollständiger Gleichheitsnachweis. Keine Debug-API, Debug-Freigabe oder Autoplay-Simulation wurde für den Grundcheck verwendet. Spätere Missionen und Siegabläufe wurden anhand der Quelle beschrieben, nicht als tatsächlich gespielt ausgegeben.
