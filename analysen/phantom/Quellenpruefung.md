# phantom – Quellenprüfung für die Web-Grundanalyse

Stand: **09.10.2026**. Geprüft wurde `C:\Users\madde\Documents\phantom`, ausschließlich lesend. Dieser Bericht beschreibt **aktive Quellen und begrenzte Einschätzungen**. Tatsächliche Browserbeobachtungen werden separat ergänzt. Keine Originaldateien, Abhängigkeiten, Builds oder Veröffentlichung verändert.

## Identität und verwendeter Stand

- Repository: [emfau88/phantom](https://github.com/emfau88/phantom), Liveadresse [phantom](https://emfau88.github.io/phantom/).
- Branch `main`, HEAD `b1571d37df44a0b8cb7d7cd2a8c9c3ba574f7f9e`; letzter Commit **02.10.2026, 15:48:43 +02:00**, „Replace animated header cube with crisp flat EMFAU mark“.
- `git status --short` ist leer: sauberer lokaler Arbeitsbaum. Gleichheit mit dem ausgelieferten Live-Bundle wurde durch diese Quellenprüfung nicht bewiesen.
- Keine `AGENTS.md` im erfassten Projektbestand oder direkt unter `Documents` gefunden.
- Vite-/React-/Three.js-Projekt. Der aktive Einstieg ist `index.html` → `src/main.tsx` → `App`. `index2.html` und `legacy/v16-single-file.html` sind gesonderte Dateien und nicht der geprüfte aktive React-Einstieg.

## Aktive Struktur und Katalog

Die Startansicht ist eine räumliche Projektwand. Semantische Oberflächen ergänzen sie: **Work / About / Contact**, Projektindex, Kategorienfilter **ALL / GAME / APP / WEB**, einfache Detailansichten und ausführliche Case Studies. Projekte besitzen direkt teilbare Hashrouten nach dem Muster `#project/zerohero`; Browserhistorie und Escape sind angeschlossen.

`src/data/projects.ts` enthält **20 unterschiedliche Projekte: 13 GAME, sechs APP und ein WEB-Projekt**. Das einzige WEB-Projekt ist **Portfolio3**, also der eigene frühere Portfolioauftritt. Es gibt hier keinen Katalog von Websitekundenreferenzen oder der fünf fiktiven Branchenkonzepte aus `shop`. Der Katalog ist eine lokale redaktionelle Liste, keine automatische vollständige Übernahme aller GitHub-Repositories. Darin enthaltene zusätzliche Games/Apps erweitern nicht automatisch den vereinbarten 17-Produkte-Analyseumfang des Projektkompasses.

Nachweise: [Datentypen und Katalog](C:/Users/madde/Documents/phantom/src/data/projects.ts:1), [Portfolio3 als WEB](C:/Users/madde/Documents/phantom/src/data/projects.ts:249), [Filter und Navigation](C:/Users/madde/Documents/phantom/src/components/Chrome.tsx:19), [Hashroute](C:/Users/madde/Documents/phantom/src/App.tsx:29), [History](C:/Users/madde/Documents/phantom/src/App.tsx:76), [aktiver Detailpfad](C:/Users/madde/Documents/phantom/src/App.tsx:232).

## Vier zentrale Quellenbefunde

### P1 · „Projekt anfragen“ endet noch ohne Anfrageverbindung

**Quellcodebefund, hohe Relevanz für Websiteverkauf.** Der prominente Headerbutton öffnet den Contact-Sheet. Dieser enthält einen allgemeinen englischen Absatz zur Verfügbarkeit und den Hinweis, dass endgültige Kontaktdaten und Anfragelinks noch angeschlossen werden können. Ausgegeben werden lediglich Überschrift, Absatz, Fußtext und Schließen-Button. Kein Formular, Mail- oder Telefonnummernlink ist im aktiven Contact-Sheet vorhanden; die Textsuche in den aktiven Quellen fand ebenfalls keinen solchen Kontaktweg.

Nachweise: [Header-CTA](C:/Users/madde/Documents/phantom/src/components/Chrome.tsx:37), [Contact-Inhalt](C:/Users/madde/Documents/phantom/src/components/SectionSheet.tsx:6), [Contact-Markup](C:/Users/madde/Documents/phantom/src/components/SectionSheet.tsx:14).

**Folgerung:** Vor Verwendung als Anbieterhomepage eine echte Anfrageaktion ergänzen. Kein gemessener Nachweis, wie viele Anfragen dadurch aktuell verloren gehen.

### P2 · Der Bestand beweist eigene Produkte stärker als Websiteleistungen

**Quellcodebefund plus Positionierungseinschätzung, mittlere bis hohe Relevanz.** Der Header nennt „Websites, Apps & Playable Worlds“; About erklärt unabhängige Arbeit an Websites, interaktiven Erfahrungen und Browsergames. Im sichtbaren Datenkatalog stehen jedoch 19 Games/Apps und nur die eigene Portfolio3-Website. Die Seite besitzt sehr wohl Substanz und direkte Produktziele, stellt derzeit aber kaum Websitearbeiten für potenzielle Geschäftskunden bereit.

Nachweise: [Headerbotschaft](C:/Users/madde/Documents/phantom/src/components/Chrome.tsx:30), [About](C:/Users/madde/Documents/phantom/src/components/SectionSheet.tsx:5), [20-Projekte-Liste](C:/Users/madde/Documents/phantom/src/data/projects.ts:23), [einziger WEB-Eintrag](C:/Users/madde/Documents/phantom/src/data/projects.ts:249).

**Einschätzung:** Gute mögliche Produktportfolio-/Showcase-Rolle. Für Websiteverkauf braucht es tatsächliche Leistungsbeispiele und einen verständlichen Ablauf zur Anfrage. Ob eine gemeinsame Website oder eine getrennte Verkaufsseite sinnvoller ist, bleibt die Vergleichsentscheidung über alle sieben Kandidaten.

### P3 · Einige Produkttexte müssen mit dem gemeinten Release abgeglichen werden

**Quellcodebefund plus Abgleich mit bestehenden Pilotberichten, mittlere Relevanz.** ZeroHero wird in den Projekttexten mit „quests“ beschrieben; der Case Study nennt „Storage: 100% offline“ und „The complete workflow stays on the phone“. Die vorhandene ZeroHero-Pilotprüfung des aktuellen lokalen Appcodes dokumentiert dagegen deaktivierte Quests und aktive Firebase-Analytics-Pfade. Das beweist keine falsche Aussage über jede historische bzw. tatsächlich veröffentlichte Version, zeigt aber einen **konkreten Abgleichbedarf zwischen Portfolio, gemeinter Version und geprüftem Produktstand**. Offline Speicherung und mögliche Analytics-Übertragung sind zudem unterschiedliche Aussagen.

Nachweise: [ZeroHero-Beschreibung](C:/Users/madde/Documents/phantom/src/data/projects.ts:61), [ZeroHero-Case-Study](C:/Users/madde/Documents/phantom/src/data/caseStudies.ts:83), [bestehender Codebericht](../zerohero/ZeroHero-code-review.md), [ausführlicher Pilot samt Analytics-Prüfgrenzen](../zerohero/ZeroHero-Pilotanalyse.md).

Auch die pauschalen Privacy-/Published-Fakten anderer App-Case-Studies sind **redaktionelle Projektbehauptungen, keine unabhängige Prüfung durch diesen Websitecheck**. Vor Übernahme auf die zentrale Website nur belegte Funktionen der klar benannten Version verwenden. Kein Datenschutzverstoß des Play-Releases wird behauptet.

### P4 · Die räumliche Wand hat bereits einen zugänglichen Alternativweg

**Quellcodebefund, Stärke.** Der Projektindex besteht aus echten fokussierbaren Buttons und listet die gefilterten Projekte. WebGL wird vor Montage geprüft; fehlende Unterstützung oder Contextverlust wechseln auf `FallbackGrid` mit Bildern und Projektbuttons. `?fallback=1` kann diesen Pfad aktivieren. Die `prefers-reduced-motion`-Präferenz wird gelesen und an Szenen, Übergänge und Medien weitergereicht. Details verlinken tatsächliche Game-/Play-Ziele und Repositories, sofern sie im jeweiligen Datensatz hinterlegt sind. Dadurch ist der Inhalt grundsätzlich nicht allein auf Raycast-Treffer in der Wand angewiesen.

Nachweise: [Projektindex](C:/Users/madde/Documents/phantom/src/components/ProjectBrowser.tsx:18), [WebGL-Prüfung](C:/Users/madde/Documents/phantom/src/scene/grid/webglSupport.ts:1), [Fallback-Auswahl](C:/Users/madde/Documents/phantom/src/App.tsx:35), [Contextverlust](C:/Users/madde/Documents/phantom/src/App.tsx:194), [Fallback-Grid](C:/Users/madde/Documents/phantom/src/components/FallbackGrid.tsx:5), [Bewegungspräferenz](C:/Users/madde/Documents/phantom/src/hooks/useReducedMotion.ts:3), [Case-Study-Ziele](C:/Users/madde/Documents/phantom/src/components/PremiumCaseStudy.tsx:42).

**Grenze:** Das ist kein heutiger Nachweis vollständig barrierefreier Bedienung, funktionierender Fremdlinks oder guter Performance auf schwachen Geräten. Die separate Laufzeitprüfung entscheidet über tatsächliche Lesbarkeit und Navigation.

## Vorläufige Eignung und begrenzter nächster Umfang

**Quellenbasierte Einschätzung:** Inhaltlich ausgearbeiteter Kandidat für ein eigenständiges persönliches Produktportfolio. Die aktiven Case Studies und der alternative Projektindex bieten bereits eine stärkere Inhaltsbasis als reine Szenenplatzhalter. Als Websiteverkaufsseite fehlen vor allem **reale Anfrageverbindung, passende Webbeispiele und ein konkretes Leistungsangebot**. Die attraktive oder weniger attraktive Optik kann erst mit dem tatsächlichen Browserbild beurteilt werden.

Kleiner nächster Umfang: **Kontakt verbinden, zwei bis drei konkrete Webbeispiele aufnehmen und Appbeschreibungen auf belegte Version/Funktionen abgleichen**. Eine Vereinheitlichung der momentan englischen Oberfläche mit dem deutschen Anfragebutton wäre ebenfalls eine kleine redaktionelle Entscheidung; fehlende vollständige deutsche Lokalisierung ist hier eine Quellenbeobachtung, kein automatischer Qualitätsmangel.

## Prüfgrenzen

Keine Browserbedienung durch den Quellenprüfer, keine Builds, keine Installationen und keine Tests ausgeführt. Historische Vitest-/Playwright- und QA-Berichte wurden nicht als heutige bestandene Prüfungen übernommen. Kein vollständiger SEO-, Sicherheits-, Rechts-, Quellenlizenz- oder Performanceaudit. Die Qualität der vorgestellten Games/Apps wurde durch das Lesen ihrer Portfolio-Beschreibung nicht erneut analysiert. Keine Besucher-, Anfrage- oder Conversionmessung vorhanden.
