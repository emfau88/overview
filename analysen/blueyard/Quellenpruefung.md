# blueyard – Quellenprüfung für die Web-Grundanalyse

Stand: **09.10.2026**. Geprüft wurde der lokale Checkout `C:\Users\madde\Documents\bluebyte`, ausschließlich lesend. Dieser Bericht enthält **Quellcodebefunde und begrenzte Einschätzungen**, keine vorgetäuschten Browserbeobachtungen. Die tatsächliche Live-Prüfung wird separat dokumentiert. Es wurden keine Originalquellen, Abhängigkeiten, Builds oder Deployments verändert.

## Identität und verwendeter Stand

- Repository: [emfau88/blueyard](https://github.com/emfau88/blueyard).
- Lokaler Branch: `main`; HEAD `fe70c409a3e28c6b7cf5b42e4e3844804fe07521`, letzter Commit am **01.10.2026, 22:46:48 +02:00**.
- Arbeitsbaum: **13 modifizierte und fünf unversionierte Status-Einträge**. Unter anderem sind `components/emfau-landing.tsx`, `components/experience-canvas.tsx`, `app/globals.css` und Partikel-/Eingabemodule geändert. Unversioniert sind zusätzliche K4-Verifikationen, Bilder, ein Partikellayer und ein Test. Der gelesene aktuelle lokale Inhalt ist daher nicht vollständig durch den HEAD beschrieben.
- Keine `AGENTS.md` im Projekt, seinen durch die Dateisuche erfassten Unterordnern oder direkt unter `Documents` gefunden.
- Der README-Stand bezeichnet den Auftritt ausdrücklich als öffentliche Entwicklungsvorschau. Die Onlineadresse ist [blueyard](https://emfau88.github.io/blueyard/), die englische Fassung [blueyard/en](https://emfau88.github.io/blueyard/en/). **Gleichheit mit dem aktuellen lokalen Arbeitsbaum ist nicht belegt.**

## Aktive Struktur

Die Startseiten `/` und `/en/` rendern `EmfauLanding`. Es handelt sich um eine durchgehende, vom eigenen Eingabesystem gesteuerte Szene mit **Intro → Haltung → Bereiche → Web → Games → Labs → Kontakt**. Das Menü kann jede dieser Stationen gezielt ansteuern. Die Bereichsordner bewegen zunächst innerhalb der Startseite zum passenden Abschnitt; dessen CTA führt anschließend auf eine Unterseite.

Die sechs Unterseiten `/web`, `/games`, `/labs`, `/en/web`, `/en/games` und `/en/labs` rendern jeweils **denselben `SectorGateway` mit unterschiedlichem Bereich und Sprache**. Sie sind tatsächlich aktive Routen, derzeit jedoch Vorschauseiten. Die in `lib/content.ts` vorhandenen ausführlicheren Leistungsbeschreibungen sind nicht automatisch ein sichtbarer Projektkatalog: Der aktive Gateway verwendet Bereichstitel, den gemeinsamen Vorschautext und einen deaktivierten Interessenhinweis.

Quellen: [Startseite](C:/Users/madde/Documents/bluebyte/app/page.tsx:15), [englische Startseite](C:/Users/madde/Documents/bluebyte/app/en/page.tsx:15), [Webroute](C:/Users/madde/Documents/bluebyte/app/web/page.tsx:5), [Gamesroute](C:/Users/madde/Documents/bluebyte/app/games/page.tsx:5), [Labsroute](C:/Users/madde/Documents/bluebyte/app/labs/page.tsx:5), [Szeneninhalte](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:52), [Bereichsordner](C:/Users/madde/Documents/bluebyte/components/experience-gateway.tsx:17), [Gateway](C:/Users/madde/Documents/bluebyte/components/sector-gateway.tsx:17).

## Vier zentrale Quellenbefunde

### B1 · Der Kontaktweg ist noch nicht ausführbar

**Quellcodebefund, hohe Relevanz für Websiteverkauf.** Auf der Startseite ist „Kontakt aufnehmen“ ein `span` mit `aria-disabled="true"`, kein Link oder Formular. Dasselbe gilt für „Interesse vormerken“ auf den Unterseiten. In den geprüften aktiven Komponenten und Inhaltsquellen wurde kein `mailto:`, `tel:` oder Formular gefunden. Der deutsche Text fordert zum Beschreiben des Vorhabens auf, stellt jedoch keine Adresse bereit; die englische Fassung erklärt den Vorschauzustand ausdrücklich.

Nachweise: [Kontakt-Markup](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:571), [Interessenhinweis](C:/Users/madde/Documents/bluebyte/components/sector-gateway.tsx:31), [deutscher Kontakttext](C:/Users/madde/Documents/bluebyte/lib/content.ts:16), [englischer Kontakttext](C:/Users/madde/Documents/bluebyte/lib/content.ts:31).

**Folgerung:** Vor Nutzung als zentraler Anbieterauftritt braucht es einen tatsächlichen Anfrageweg. Die Wirkung auf heutige Besucher und verlorene Anfragen wurde nicht gemessen.

### B2 · „Projekte ansehen“ führt derzeit zu Vorbereitungstext

**Quellcodebefund, hohe Relevanz.** Web, Games und Labs haben passende Startseiten-CTAs, zeigen im aktiven Gateway aber „wird gerade vorbereitet“ und einen gemeinsamen Platzhaltertext. Kein konkretes Websitebeispiel, spielbarer Game-Link oder Tool ist dort angeschlossen. Vorhandene Inhaltsfelder `services` und `body` werden vom Gateway nicht ausgegeben.

Nachweise: [deutsche CTA- und Leistungsdaten](C:/Users/madde/Documents/bluebyte/lib/content.ts:11), [Vorschautexte](C:/Users/madde/Documents/bluebyte/lib/content.ts:18), [tatsächlich gerenderter Gateway](C:/Users/madde/Documents/bluebyte/components/sector-gateway.tsx:26), [aktive Startseiten-CTA](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:565).

**Folgerung:** Die Form eignet sich als Entwurf eines gemeinsamen Hubs, aber der derzeitige lokale Inhalt liefert noch keine belastbare Auswahl- oder Kaufgrundlage. Zunächst wenige echte Ziele anschließen; eine komplette Neugestaltung ist daraus nicht abzuleiten.

### B3 · Die Bereiche sind verständlich benannt, der Weg zu ihnen ist szenengeführt

**Quellcodebefund plus UX-Hypothese, mittlere Relevanz.** Die Textbasis nennt Websites für Vereine, kleinere Unternehmen und Selbstständige konkret. Web, Games und Labs bieten eine klare mögliche Trennung. Gleichzeitig nimmt die Startseite Wheel-, Touch- und bestimmte Tastatureingaben selbst entgegen, hält das Dokument auf einer Vollbildbühne und zeigt nur die jeweils aktive Szene als zugänglich an. Bereichsordner wählen erst eine Szene, anschließend öffnet ein zweiter CTA die Unterseite.

Nachweise: [Zielgruppe und Angebot](C:/Users/madde/Documents/bluebyte/lib/content.ts:11), [Wheel-/Touch-Steuerung](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:363), [Tastatursteuerung](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:400), [Inert-/ARIA-Zustand](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:548), [Vollbildgerüst](C:/Users/madde/Documents/bluebyte/app/globals.css:1363).

**Hypothese:** Als kreativer Hub kann dieser Weg reizvoll sein; für Menschen mit einer konkreten Websiteanfrage könnte ein dauerhaft sichtbarer Direktweg hilfreicher sein. Dafür sind tatsächliche Bedienung und erste kurze Nutzertests entscheidend. Aus dem Code folgt weder eine unbedienbare Seite noch eine gemessene Absprungrate.

### B4 · Technische Alternativen sind bereits vorgesehen

**Quellcodebefund, Stärke.** Der Code berücksichtigt `prefers-reduced-motion`, Tastaturstationen, mobile Scroll-/Szenenberechnung, semantische Menülinks und einen Skip-Link. Rendererfehler bzw. WebGL-Verlust melden einen CSS-Fallback; der Loader besitzt einen Zehnsekunden-Timeout. Die Text- und Menüebene bleibt getrennt vom dekorativen Canvas. Der Fallback reduziert das 3D-Bild, ersetzt aber nicht den szenengeführten Seitenaufbau durch ein normales vollständiges Dokument.

Nachweise: [Bewegungspräferenz](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:208), [Loader-Timeout](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:175), [Timeoutkonstante](C:/Users/madde/Documents/bluebyte/lib/experience-loading.ts:1), [Fallback-Meldung](C:/Users/madde/Documents/bluebyte/components/experience-canvas.tsx:29), [Renderer-/Context-Fallback](C:/Users/madde/Documents/bluebyte/components/experience-canvas.tsx:261), [Menü und Skip-Link](C:/Users/madde/Documents/bluebyte/components/emfau-landing.tsx:479).

**Grenze:** Das Vorhandensein dieser Pfade ist kein Nachweis bestandener Barrierefreiheits-, Geräte-, Ausfall- oder Leistungstests in dieser Analyse.

## Vorläufige Eignung und kleiner nächster Schritt

**Einschätzung auf Quellenbasis:** Plausibler gemeinsamer emfau-Hub für Web / Games / Labs mit klarer sprachlicher Grundlage. Als sofort einsetzbarer Verkaufsauftritt ist der aktuelle lokale Stand wegen fehlender Ziele und Kontaktverbindung noch nicht ausreichend. Für die Entscheidung zwischen diesem Hub und den anderen Entwürfen sind die separaten visuellen Beobachtungen maßgeblich.

Ein begrenzter nächster Umfang wäre: **ein echter Kontaktweg, zwei bis drei konkrete Websitebeispiele und direkte Ziele für ausgewählte Games/Apps**, einschließlich klarer Kennzeichnung von veröffentlichten Produkten und Entwürfen. Noch keine Festlegung auf diesen Kandidaten und keine Änderungen umgesetzt.

## Prüfgrenzen

Kein Build, kein Dependency-Install, keine automatisierten Tests, keine Browserbedienung durch den Quellenprüfer. Kein vollständiger SEO-, Sicherheits-, Rechts- oder Performanceaudit. Die in der README beschriebenen alten Tests wurden nicht erneut ausgeführt und nicht als heutige Testresultate übernommen. Zahlen zu Anfragen, Besuchern und Conversions lagen hier nicht vor.
