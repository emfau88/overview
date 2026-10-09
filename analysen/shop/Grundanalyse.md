# shop – begrenzte Grundanalyse

Stand: **09.10.2026**. Status: **Grundanalyse abgeschlossen**, innerhalb des unten beschriebenen Umfangs. **Keine Fehlerbehebung, keine strategische Entscheidung und keine Veröffentlichung von Produktänderungen.**

shop hat eine klare Verkaufsrolle: konkrete persönliche Unternehmenswebsites mit transparentem Umfang und einem breiten, ehrlich als fiktiv gekennzeichneten Showroom. Der geplante 699€-Referenzkundenpreis ist verständlich eingeordnet, aber weder buchbar noch auf Rentabilität geprüft. Als Showroom ergänzt das Projekt LandingGame gut; als zentrale emfau-Homepage fehlen einheitliche Anbieteridentität und echte Anfragezustellung. Die fünf Signature-Seiten existieren, werden in den zentralen Übersichten jedoch nicht als Auswahl angeboten. Die begrenzte Grundanalyse ist abgeschlossen, keine Verbesserung umgesetzt und keine endgültige Homepage-Entscheidung getroffen.

## Rolle im Gesamtvorhaben

Anbieterpräsentation und Branchen-Showroom für Unternehmenswebsites. Trotz Repositoryname shop ist der betrachtete Einstieg kein funktionierender Onlineshop mit Warenkorb oder Checkout. Die fiktiven Branchenauftritte dienen als Gestaltungs- und Funktionskonzepte.

## Tatsächlich geprüfter Stand

- Rein lesender Checkout C:\Users\madde\Documents\Ebay Websites mit Anwendung website/; Repository emfau88/shop, GitHEAD 7ea941e5745c78bca9fbfa3eeb547f34111a96d4 vom 23.09.2026, Git-Status ohne lokale Änderungen.
- Aktive Anbieter- und Konzeptquellen, generische Anbieter-Wortmarke, Angebotsumfang/699€-Vorschau, Kontaktformular, Demo-Leiste und Pages-Exportzuordnung.
- Öffentliche Live-Browserprüfung am 09.10.2026 bei Desktopbreite 1281 Pixeln: Anbieter-Hero mit erkennbarem Webdienstleistungsangebot, mehr Inhaltsumfang als Studio, Angebot und sichtbare Vorschaugrenzen.
- Live-Showroom /konzepte/ tatsächlich angesehen und sichtbare Linkziele per DOM geprüft: fünf Core-Ziele, keine Signature-Links in dieser zentralen Übersicht; Source-Abgleich bestätigt denselben Aufbau.
- Anbieter-Mobilansicht bei 391 Pixeln: lesbarer erster Heroabschnitt und kein horizontaler Seitenüberlauf in der geprüften Ansicht.
- Kontaktbereich gelesen: Versand explizit nicht eingerichtet, keine Formularabgabe. 699€ sind ausdrücklich geplanter Referenzkundenpreis für die ersten zwei Kunden und noch kein buchbares Angebot.
- Vorhandener statischer Export pages-dist wurde nur gelesen. Öffentliche Pages-Interaktionen sind die tatsächliche Prüfbasis, weil der Export Framework-Skripte durch eigene Laufzeitmodule ersetzt.
- Anbieter-Mobilmenü bei 391 Pixeln tatsächlich geöffnet: vier Navigationslinks sichtbar; Unverbindlich anfragen gewählt und erfolgreich zum Kontaktanker #anfrage navigiert.
- Exemplarisch AUFSCHLAG-Core und die direkt aus Studio bekannte AUFSCHLAG-Signature-URL öffentlich bei 1281 Pixeln besucht. Beide enthalten transparente Hinweise auf fiktive Konzepte und besitzen erkennbar unterschiedliche Hero-Kompositionen.
- AUFSCHLAG-Core: Tennis geklickt, danach ändern sich Hero-Bild, Titel, CTA und Trainingsfilter. AUFSCHLAG-Signature: 02 Badminton geklickt, danach ändern sich Bild, Court-/Zeitdarstellung, CTA und Filter. Änderungen im sichtbaren beziehungsweise zugänglichen Seitenzustand bestätigt.
- Drei tatsächliche Browser-JPEGs unter screenshots/: Anbieterstart Desktop 1281×721, mobiler Anbieter-Ausschnitt 391×844 und AUFSCHLAG-Signature im Badmintonzustand 1281×721. Herkunft und SHA256 im Manifest, keine erfundenen Mockups.

[Ausführliche lokale Quellenprüfung](Quellenpruefung.md) und [Herkunft der tatsächlichen Browserbilder](screenshots/manifest.json) sind separat erhalten. Lokale Quelle, vorhandene Artefakte und öffentlicher Webauftritt werden nicht pauschal als identisch behandelt.

## Einstieg, Optik und Bedienung

Die öffentliche Desktopansicht bei 1281 Pixeln formuliert klar persönliche Unternehmenswebsites und zeigt einen umfangreicheren Verkaufsaufbau als Studio. Als Absender erscheint die generische Webdesign-Wortmarke. Im Showroom stehen fünf klar fiktive Branchenkonzepte; die tatsächlich ausgelesenen Ziele führen zu den Core-Seiten. Bei 391 Pixeln bleibt der erste Heroabschnitt lesbar und ohne horizontalen Seitenüberlauf. Das mobile Menü wurde anschließend geöffnet und zeigte vier Navigationslinks. Unverbindlich anfragen führte korrekt zu #anfrage. Die Quelle enthält wesentlich mehr Seiten und Interaktionsvarianten, als dieser begrenzte Grundcheck erschöpfend prüfen kann.

### Exemplarische Demo: AUFSCHLAG Core und Signature

Im öffentlichen Auftritt wurden die normale AUFSCHLAG-Core-Seite und die aus Studio bekannte direkte Signature-Adresse bei Desktopbreite 1281 Pixeln besucht. Beide zeigen einen transparenten Hinweis auf das fiktive Konzept. Core und Signature unterscheiden sich sichtbar in Hero-Komposition und Rahmung; kräftiges Blau und Creme, eigenständige Bildsprache und Typografie wirken als nachvollziehbarer Fähigkeitsnachweis.

Auf **Core** wurde **Tennis** gewählt: Hero-Bild, Titel, CTA und Trainingsfilter änderten sich passend. Auf **Signature** wurde **02 Badminton** gewählt: Bild, Court-/Zeitdarstellung, CTA und Filter änderten sich passend. Diese Änderungen wurden im tatsächlichen sichtbaren beziehungsweise zugänglichen Seitenzustand bestätigt. Das ist ein begrenzter positiver Funktionsnachweis für genau diese Interaktionen. Nicht alle zehn Demos, ihre Unterseiten oder ihre mobile Bedienung wurden geprüft. Keine Anfrage oder Reservierung wurde versandt.

- [AUFSCHLAG Core](https://emfau88.github.io/shop/konzept/sportverein/).
- [AUFSCHLAG Signature](https://emfau88.github.io/shop/konzept/sportverein/signature/).

## Vorhandene Stärken

### Konkreter Leistungsrahmen

Bis zu vier Inhaltsseiten, eine Sprache, Text- und Bildumfang, eine Korrekturrunde, dokumentierte Übergabe und abgegrenzte Zusatzleistungen machen das Angebot nachvollziehbarer als eine allgemeine Entwicklerbeschreibung.

### Breiter ehrlich gekennzeichneter Showroom

Fünf Branchen besitzen eigene Core-Seitenwelten und zusätzliche Signature-Entwürfe. Beide tatsächlich besuchten AUFSCHLAG-Fassungen sind transparent fiktiv gekennzeichnet und zeigen kräftige Blau-/Creme-Gestaltung, eigenständige Bilder und Typografie. Ihre Sportart-Wechsel wurden bedient und ändern die passenden Inhalte; das eignet sich als konkreter Fähigkeitsnachweis.

### Klarer Webverkauf statt unklarer Projektmix

Der tatsächlich betrachtete Einstieg erklärt persönliche Unternehmenswebsites und führt zu Beispielen, Leistungsrahmen und Anfrage. Die mobile Ansicht zeigt keinen horizontalen Seitenüberlauf; das Menü öffnet mit vier Links und Unverbindlich anfragen führt korrekt zum Kontaktanker.

## Zentrale Befunde und ihre Beleggrenzen

### Die Anbieterstrecke endet bei einer Formularsimulation

**Belegtyp:** Tatsächliche Browserbeobachtung. **Priorität:** hoch.

Die Website führt sichtbar zu einer Anfrage, erklärt dort aber, dass kein Versand eingerichtet ist. Ohne einen tatsächlich erreichbaren Kontaktweg kann der Auftritt seine Akquiserolle noch nicht erfüllen. Die Vorschau ist dabei ehrlich gekennzeichnet.

**Beobachtung/Quelle:** Root las den öffentlichen Kontaktbereich und seinen ausdrücklichen Versandhinweis. InquiryForm und die tatsächlich ausgelieferte Pages-Laufzeit verhindern den Versand, validieren Beispiele lokal und zeigen nur Beispiel vollständig. Die Anbieterhinweise nennen fehlende reale Kontaktdaten.

**Aussagegrenze:** Keine Formularsendung durchgeführt und keine tatsächlichen Kundendaten verwendet. Kein Beleg für konkret verlorene Leads; keine rechtliche Vollprüfung.

**Vorschlag:** Wenn shop als aktiver Vertriebseinstieg genutzt wird, eine einfache reale Kontaktmöglichkeit und verlässliche Zustellung mit ehrlicher Bestätigung ergänzen. Andernfalls gezielt zur echten Kontaktstrecke einer zentralen emfau-Seite führen.

### Die Signature-Entwürfe sind in den zentralen Übersichten nicht auswählbar

**Belegtyp:** Tatsächliche Browserbeobachtung. **Priorität:** mittel.

Die Anbieter-Karten und der Showroom führen zu den fünf Core-Homepages. Die zusätzlichen Signature-Homepages sind eigene vorhandene Exportpfade, erhalten in diesen Übersichten aber keine gleich erkennbare Auswahl. Ein Teil der aufwendigeren Präsentationsarbeit bleibt so aus dem normalen Einstieg schlechter erschließbar.

**Beobachtung/Quelle:** Root prüfte im Live-Showroom die tatsächlichen Linkziele im DOM: fünf Core-Routen, keine Signature-Links. Source-Ziele in app/page.tsx und app/konzepte/page.tsx bestätigen den Befund; export-pages.mjs enthält dagegen fünf Signature-Pfade. Die direkt über die aus Studio bekannte URL besuchte AUFSCHLAG-Signature war erreichbar, hatte eine sichtbar andere Hero-Rahmung und reagierte auf 02 Badminton; die AUFSCHLAG-Core-Seite reagierte auf Tennis. Das bestätigt eine tatsächlich vorhandene zusätzliche Variante, die in der zentralen Auswahl dennoch nicht erscheint.

**Aussagegrenze:** Die direkte Erreichbarkeit zusätzlicher URLs ist von ihrer Auffindbarkeit zu unterscheiden. Exemplarisch wurden AUFSCHLAG-Core und -Signature auf Desktop bedient, nicht alle zehn Demos oder sämtliche Unterseiten. Keine gemessene Nutzerverwirrung oder Conversionwirkung.

**Vorschlag:** Pro Konzept einen verständlichen Weg zu vollständiger Core-Website und zusätzlichem Signature-Einstieg zeigen. Aus der Darstellung soll erkennbar sein, dass es Varianten desselben Konzepts sind.

### Als Showroom brauchbar; die zentrale Anbieterrolle ist noch nicht einheitlich emfau

**Belegtyp:** Bewertung / Einordnung. **Priorität:** mittel.

Die Website präsentiert eigenständige Webleistungen, nutzt als Absender jedoch die generische Wortmarke webdesign für lokale Betriebe. LandingGame hat bereits eine emfau-Marke und eine echte OMF-Referenz. Für den gemeinsamen Onlineauftritt ist deshalb eine einfache Verbindung sinnvoller als mehrere getrennte Anbieteridentitäten mit ähnlichen Leistungen.

**Beobachtung/Quelle:** Im Live-Hero wurde die generische Webdesign-Marke gesehen; navigation.tsx und shared.tsx enthalten denselben Absender. Alle Konzeptkarten sind fiktiv gekennzeichnet; die OMF-Kundenarbeit aus LandingGame ist in dieser Anbieterstrecke bisher nicht enthalten.

**Aussagegrenze:** Dies ist eine Einordnung des aktuellen Inhaltsaufbaus, keine endgültige Homepage- oder Markenentscheidung. Es wurde keine Befragung potenzieller Kunden durchgeführt und der vollständige Sieben-Seiten-Vergleich bleibt die gemeinsame Entscheidungsbasis.

**Vorschlag:** shop entweder als verlinkten Branchen-Showroom unter der emfau-Anbieterwebsite nutzen oder bei Wahl als Hauptseite Marke/Absender vereinheitlichen. Echte Kundenarbeit und fiktive Konzepte weiterhin getrennt zeigen.

### Der geplante Referenzpreis ist klar, seine Tragfähigkeit ist noch offen

**Belegtyp:** Quellcodebefund. **Priorität:** mittel.

699€ sind als geplanter Einführungspreis für die ersten zwei Referenzkunden beschriftet. Umfang und Zusatzleistungen sind explizit abgegrenzt; gleichzeitig ist es noch kein buchbares Angebot. Der Preis ist damit ein vorhandener Angebotsentwurf, kein in diesem Review bestätigter wirtschaftlicher Rahmen.

**Beobachtung/Quelle:** app/page.tsx beschreibt bis zu vier Inhaltsseiten, ca. 700 Wörter Textüberarbeitung, acht gelieferte Bilder, eine gebündelte Korrekturrunde und 30 Tage technische Fehlerhilfe. Domain/Hosting, CMS-Selbstpflege, Shops und Buchungssysteme sind gesondert. Die sichtbare 699€-Karte nennt geplanter Endpreis und noch kein buchbares Angebot.

**Aussagegrenze:** Kein Zeitaufwand je Auftrag, keine Kosten, Steuern, Akquisekosten oder Marktnachfrage analysiert. Keine Aussage, dass 699€ zu hoch, zu niedrig oder rentabel sind.

**Vorschlag:** Vor echtem Angebot einen kleinen realistischen Aufwandsrahmen samt Korrekturen, Textarbeit und Übergabe kalkulieren. Erst dann Preis und Angebotsgrenzen verbindlich festlegen.

## Drei begrenzte nächste Maßnahmen

### 1. shop als Showroom mit einer gemeinsamen emfau-Anbieterstrecke verbinden

**Status: vorgeschlagen, nicht umgesetzt.** Im Vergleich aller sieben Webauftritte entscheiden, ob shop verlinkte Konzeptbibliothek oder Hauptseite wird. Bei Integration Markenbezeichnung, Referenzen und Kontaktweg eindeutig verbinden; keine zweite widersprüchliche Anbieteridentität schaffen.

**Spätere Prüfung:** Vom zentralen Einstieg ein Branchenbeispiel öffnen und zurück zu Angebot/Kontakt gelangen. Ein neuer Besucher soll Anbieter, echte Kundenarbeit und fiktive Demo unterscheiden können.

### 2. Core und Signature pro Konzept sichtbar auswählbar machen

**Status: vorgeschlagen, nicht umgesetzt.** Die fünf existierenden Signature-Routen in den zentralen Übersichten als zusätzliche Gestaltungsvariante desselben Konzepts verlinken, mit knapper Erklärung und Rückweg zur vollständigen Core-Website. Die heutigen Befunde haben noch keine Änderung ausgelöst.

**Spätere Prüfung:** Desktop und Mobile vom Anbieterstart über Showroom zu Core und Signature prüfen, einschließlich zurück zum Anbieter. Alle Konzeptkennzeichnungen und korrekten /shop-Pfade erhalten.

### 3. Vor Akquise Kontaktweg und begrenztes Angebot tatsächlich abschließen

**Status: vorgeschlagen, nicht umgesetzt.** Eine reale Anfragezustellung beziehungsweise Verlinkung zur gewählten Hauptkontaktstrecke einrichten. Den vorgesehenen Referenzpreis und die zugesagte Leistung anhand realistischen Aufwands prüfen; Anbieter-/Vorschauangaben dann passend vervollständigen.

**Spätere Prüfung:** Später eine ausdrücklich freigegebene Testanfrage mit eigenen Daten Ende zu Ende prüfen; verbindlichen Leistungsrahmen und Ausschlüsse gegen tatsächlichen Aufwand abgleichen. Keine Zustellung oder Wirtschaftlichkeit als erledigt darstellen, solange ungeprüft.

## Offene Entscheidungsfragen

- Soll shop ein ergänzender Showroom der emfau-Hauptseite werden oder selbst den zentralen Verkaufseinstieg bilden?
- Welche tatsächlich verfügbaren Arbeitsbeispiele sollen Interessenten zuerst sehen: Core, Signature oder eine kurze Auswahl beider?
- Welcher Zeit- und Korrekturaufwand ist für das geplante 699€-Referenzkundenangebot realistisch?
- Welche echte Kontaktstrecke und welche Anbieteridentität sollen über LandingGame und shop hinweg einheitlich verwendet werden?

## Kennzahlen

Keine Kennzahlen erhoben. Fehlende Besucher-, Anfrage-, Conversion- und Umsatzwerte sind **nicht null**. Aus dem visuellen Urteil werden keine Verkaufs- oder Rankingversprechen abgeleitet.

## Nicht geprüft und Grenzen

- Kein vollständiger Test aller 30 exportierten Pfade oder aller zehn Core-/Signature-Demos und ihrer Unterseiten. Keine vollständige mobile Bedienprüfung der Demoseiten; exemplarisch AUFSCHLAG wurde auf Desktop geprüft.
- Keine Formulare abgesendet, keine Angebote gekauft, keine Nachricht an Unternehmen oder andere Personen gesendet und keine tatsächliche Anfragezustellung geprüft.
- Kein neuer Build-/Lintlauf im Originalcheckout, kein vollständiger Hashabgleich zwischen Source, vorhandenen lokalen Exportdateien und öffentlichem Pages-Stand.
- Kein vollständiger Performance-, SEO-, Security-, Accessibility-, Geräte- oder rechtlicher Audit. Keine 3D-Leistung auf älteren Geräten oder dauerhaften Interaktions-/Fokusgrenzfälle untersucht.
- Keine Besucher-, Lead-, Conversion- oder Umsatzkennzahlen; keine Marktpreis- oder Rentabilitätsprüfung des vorgesehenen 699€-Angebots.
- Die Rolle als zentrale Anbieterhomepage versus verlinkter Showroom ist noch offen. Das Projekt wurde nicht verändert, kein Preis veröffentlicht und keine Versandfunktion eingeführt.

### Drei tatsächliche Browserbilder

- `screenshots/start-desktop.jpg`: öffentlicher Anbieterstart, Desktop **1281 × 721**.
- `screenshots/start-mobile.jpg`: mobiler Ausschnitt des Anbieterauftritts, **391 × 844**; keine Behauptung, dass das Bild die gesamte Startseite oder ausschließlich den ersten Hero zeigt.
- `screenshots/signature-demo-desktop.jpg`: öffentliche AUFSCHLAG-Signature im Badmintonzustand, Desktop **1281 × 721**.

URLs, tatsächliche Aufnahmezeit und SHA256 stehen im [Screenshot-Manifest](screenshots/manifest.json). Die Bilder zeigen konkrete besuchte Ansichten; sie belegen keine vollständige Prüfung aller Branchenauftritte.

## Quellen und Bilder

- [Quellenprüfung mit GitHEAD und konkreten Pfad-/Zeilenbelegen](Quellenpruefung.md).
- [Screenshot-Manifest mit tatsächlicher URL, Zeit, Viewport und SHA256](screenshots/manifest.json).
- [Öffentlicher Anbieterauftritt](https://emfau88.github.io/shop/).
- [Branchen-Showroom](https://emfau88.github.io/shop/konzepte/).

Die echten Browser-JPEGs sind visuelle Referenzen der jeweils aufgenommenen Ansicht. Ein Screenshot allein belegt weder jede Interaktion noch den vollständigen Zustand aller Unterseiten. Die ausführlichen Inhalte bleiben erhalten; dieser Grundcheck dient der überschaubaren gemeinsamen Auswahl der nächsten Arbeiten.
