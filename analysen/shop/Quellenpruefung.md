# shop – begrenzte Quellenprüfung

Stand: **09.10.2026**. EvidenceType dieses Dokuments: **Quellcodebefund**, separat gekennzeichnete **Einordnung/Hypothese**. Die tatsächliche Browserprüfung und visuelle Bewertung werden im Grundanalysebericht dokumentiert.

## Identität und aktive Grundlage

- Repository: [emfau88/shop](https://github.com/emfau88/shop).
- Git-Checkout: `C:\Users\madde\Documents\Ebay Websites`; Anwendung unter `website/`.
- GitHEAD: `7ea941e5745c78bca9fbfa3eeb547f34111a96d4`, Commit vom **23.09.2026, 11:39:39 +0200**, „Build GRUENRAUM signature experience“.
- Rein lesende Prüfung mit `git --no-optional-locks status --short`: keine lokalen Änderungen. Die Sandbox blockierte zunächst Git-Status; der reine lesende Aufruf außerhalb dieser Einschränkung war erfolgreich. Keine Git-Einstellungen oder Originaldateien verändert.
- Keine zusätzliche örtliche `AGENTS.md` im Projekt gefunden. OVERVIEW-Arbeitsgrundlage wurde gelesen.
- Aktive Quellen: `website/app/`, `components/`, `public/`; React 19.2.6 und Vinext 1.0.0-beta.5 laut `package.json`. Das ist die vorgefundene Paketkonfiguration, keine Empfehlung aktueller Frameworkversionen.
- GitHub Pages veröffentlicht **`website/pages-dist/`**, nachdem der Workflow installiert, lintet, baut und über `scripts/export-pages.mjs` statisch exportiert. Der Export entfernt die ursprünglichen Framework-Skripte und ergänzt `pages-runtime.js` plus passende Signature-/3D-Module. Ein Development-UI-Test wäre deshalb nicht automatisch ein Test dieser tatsächlich ausgelieferten Interaktionsfassung.
- Vorhandene lokale `pages-dist/index.html`: **23.09.2026, 10:52:47**, 21.113 Byte. Dieser vorhandene Export wurde nur gelesen, nicht neu gebaut. Die zeitliche Nähe beweist keine vollständige Quell-/Exportidentität.

Quellen: [package.json](<C:/Users/madde/Documents/Ebay Websites/website/package.json:10>), [Pages-Workflow](<C:/Users/madde/Documents/Ebay Websites/.github/workflows/deploy-pages.yml:31>), [Exporttransformation](<C:/Users/madde/Documents/Ebay Websites/website/scripts/export-pages.mjs:49>).

## Aktive Seitenstruktur

`export-pages.mjs` listet **30 feste Pfade**: Anbieterstartseite `/`, Showroom `/konzepte/`, zwei Vorschauhinweise `/impressum/` und `/datenschutz/`, fünf Core-Homepages mit Unterseiten und fünf zusätzliche Signature-Homepages. Alle werden für Pages unter der Basis `/shop` exportiert.

| Konzept | Core und Signature |
|---|---|
| FARBFORM | `/konzept/maler/`, `/konzept/maler/signature/`; Leistungen, Gestaltung, Kontakt |
| WERKFORM | `/konzept/metallbau/`, `/konzept/metallbau/signature/`; Leistungen, Einblicke, Anfrage |
| GRÜNRAUM | `/konzept/galabau/`, `/konzept/galabau/signature/`; Leistungen, Gartenideen, Anfrage |
| AUFSCHLAG | `/konzept/sportverein/`, `/konzept/sportverein/signature/`; Training, Verein, Probetraining |
| LINDENWIRT | `/konzept/gastronomie/`, `/konzept/gastronomie/signature/`; Speisekarte, Haus, Feiern, Reservieren |

Quelle: [Exportpfade und Pages-Basis](<C:/Users/madde/Documents/Ebay Websites/website/scripts/export-pages.mjs:13>).

## Fünf zentrale Befunde

### SH-S01 – Der Angebotsumfang ist konkreter als eine allgemeine Portfolioaussage

**EvidenceType: Quellcodebefund; wirtschaftliche Eignung: noch offen.** Die Anbieterstartseite richtet sich an inhabergeführte lokale Betriebe und nennt ein persönliches Website-Angebot mit festem Rahmen. Enthalten sind bis zu vier Inhaltsseiten/eine Sprache, eine gebündelte Korrekturrunde, ca. 700 Wörter Textüberarbeitung, bis zu acht gelieferte Bilder, mobile Darstellung, Anfrageformular, dokumentierte Übergabe und 30 Tage technische Fehlerhilfe. Domain/Hosting sind separat, CMS, Shops und Buchungssysteme zusätzliche Anforderungen. Der sichtbare Preis **699 €** ist ein geplanter Einführungspreis für **die ersten zwei Referenzkunden**, ausdrücklich **noch kein buchbares Angebot**. Eine Preisempfehlung oder belegte Rentabilität folgt daraus nicht.

Quellen: [Leistungsrahmen](<C:/Users/madde/Documents/Ebay Websites/website/app/page.tsx:7>), [Hero/Zielgruppe](<C:/Users/madde/Documents/Ebay Websites/website/app/page.tsx:100>), [Preis und Einschränkungen](<C:/Users/madde/Documents/Ebay Websites/website/app/page.tsx:217>).

### SH-S02 – Der Anbieter hat noch keinen echten Anfragekanal auf der Website

**EvidenceType: Quellcodebefund; Priorität vor echter Akquise: hoch.** Navigation, Formular und Anbieterhinweise erklären den Vorschauzustand offen. Das Formular prüft Beispieldaten lokal und meldet dann „Beispiel vollständig“; sowohl React-Implementierung als auch die zusätzliche Pages-Laufzeit verhindern den Versand. Es gibt in der geprüften Anbieterstrecke keinen tatsächlichen Mail-/Telefonkontakt oder Versandendpoint. Die Anbieteridentität ist noch nicht hinterlegt; die Datenschutzhinweise sind explizit unvollständig. Die Root-Metadaten setzen `index:false, follow:false`. Das ist als Entwurf konsequent, aber ohne Ergänzung kein funktionierendes Akquiseprodukt. Diese Beobachtung stammt aus der Implementierung und sichtbaren Vorschauhinweisen; sie ist keine rechtliche Vollständigkeitsbewertung.

Quellen: [Vorschauleiste](<C:/Users/madde/Documents/Ebay Websites/website/components/navigation.tsx:42>), [Formularprüfung](<C:/Users/madde/Documents/Ebay Websites/website/components/inquiry-form.tsx:25>), [Formularhinweis](<C:/Users/madde/Documents/Ebay Websites/website/components/inquiry-form.tsx:56>), [Pages-Formularcode](<C:/Users/madde/Documents/Ebay Websites/website/public/pages-runtime.js:363>), [Anbieterhinweis](<C:/Users/madde/Documents/Ebay Websites/website/app/impressum/page.tsx:14>), [Root-Metadaten](<C:/Users/madde/Documents/Ebay Websites/website/app/layout.tsx:10>).

### SH-S03 – Signature-Seiten existieren, werden aber in den beiden zentralen Übersichten nicht angeboten

**EvidenceType: Quellcodebefund; Auswirkung auf Auffindbarkeit: Hypothese bis zum Browserabgleich.** Die Anbieter-Konzeptkarten und `/konzepte/` verlinken auf die fünf Core-Homepages. In diesen beiden aktiven Übersichten wurde kein Link auf `/signature/` gefunden. Die fünf zusätzlichen Signature-Pfade sind dagegen Bestandteil des Exports. Ihre eigene Seitenschale führt zurück zur vollständigen Core-Website und zum Angebot. Daraus ergibt sich eine konkrete kleine Prüfung: Kann ein neuer Besucher die aufwendigen Signature-Entwürfe überhaupt vom normalen Einstieg aus entdecken? Die Live-Browserprüfung muss die tatsächliche Entdeckbarkeit bestätigen; allein die direkte Existenz einer URL macht sie nicht im Showroom sichtbar.

Quellen: [Anbieter-Kartenziele](<C:/Users/madde/Documents/Ebay Websites/website/app/page.tsx:58>), [Konzept-Kartenziele](<C:/Users/madde/Documents/Ebay Websites/website/app/konzepte/page.tsx:25>), [Konzeptlinks](<C:/Users/madde/Documents/Ebay Websites/website/app/konzepte/page.tsx:150>), [Signature-Export](<C:/Users/madde/Documents/Ebay Websites/website/scripts/export-pages.mjs:22>), [Signature-Rückweg](<C:/Users/madde/Documents/Ebay Websites/website/components/signature/signature-shell.tsx:142>).

### SH-S04 – Konzept und Kundenreferenz werden ehrlich getrennt; die eigene Anbieteridentität ist noch generisch

**EvidenceType: Quellcodebefund; spätere Markenrolle: Einordnung.** Die Karten und Showroom-Leiste kennzeichnen alle Branchenarbeiten ausdrücklich als **fiktive Konzeptprojekte**. Es wird keine reale Kundenliste erfunden. Zugleich lautet die eigene Marke aktuell „webdesign · für lokale Betriebe“ beziehungsweise „webdesign · persönlich umgesetzt“, nicht emfau; ein persönlicher Anbietername ist noch nicht aktiv angegeben. Als Verkaufs-Showroom ist das Material brauchbar. Für eine spätere zentrale emfau-Seite sollte klar werden, dass die Konzepte die Fähigkeiten desselben Anbieters zeigen und echte Referenzen separat stehen. Die OMF-Referenz aus LandingGame ist hier bisher nicht eingebunden; ob sie hierher gehört, ist eine spätere Inhaltsentscheidung, keine schon umgesetzte Änderung.

Quellen: [fiktive Konzepte](<C:/Users/madde/Documents/Ebay Websites/website/app/page.tsx:151>), [Demo-Leiste](<C:/Users/madde/Documents/Ebay Websites/website/components/demo-bar.tsx:12>), [generische Anbieter-Wortmarke](<C:/Users/madde/Documents/Ebay Websites/website/components/navigation.tsx:62>), [Footer](<C:/Users/madde/Documents/Ebay Websites/website/components/shared.tsx:54>), [FAQ – echte Kundenarbeiten erst nach Freigabe](<C:/Users/madde/Documents/Ebay Websites/website/app/page.tsx:388>).

### SH-S05 – Grundlegende mobile Vorsorge ist vorhanden; Source und Pages benötigen getrennte Bedienprüfungen

**EvidenceType: Quellcodebefund; tatsächliche Zuverlässigkeit: separat zu prüfen.** Anbieter und Konzepte nutzen lokale, dimensionierte WebP-Assets mit 480-/960-Pixel-Ableitungen, `sizes`, priorisierten Hero-Bildern und verzögertem Laden weiterer Bilder. Das CSS besitzt eigene mobile Layoutregeln; React-Navigation hat Menüstatus und Escape/Fokusrückgabe. Der Pages-Export setzt native Links unter `/shop` und ersetzt React-Interaktionen durch eigene JS-Funktionen. Diese liefern z. B. Menü-/Formularlogik, Signature-Varianten oder 3D. Daher ist der öffentliche Pages-Auftritt die passende begrenzte Reviewbasis für Einstieg, mobile Navigation und diese Interaktionen. Ein aktueller Build-/Lintlauf wurde im Originalprojekt **nicht** durchgeführt; ältere QA-Dokumente belegen keine heutigen Tests. Die 30 Pfade machen einen vollständigen Unterseitentest größer als diesen Grundcheck.

Quellen: [ResponsiveImage](<C:/Users/madde/Documents/Ebay Websites/website/components/responsive-image.tsx:13>), [mobile Hero-Regeln](<C:/Users/madde/Documents/Ebay Websites/website/app/globals.css:171>), [React-Menü](<C:/Users/madde/Documents/Ebay Websites/website/components/navigation.tsx:15>), [Pages-Menü](<C:/Users/madde/Documents/Ebay Websites/website/public/pages-runtime.js:2>), [Exporttransformation](<C:/Users/madde/Documents/Ebay Websites/website/scripts/export-pages.mjs:72>).

## Kleine nächste Maßnahmen – noch nicht umgesetzt

1. Die Anbieterrolle mit LandingGame vergleichen: shop als zentraler Verkaufseinstieg oder als verlinkter Showroom unter einer emfau-Hauptseite nutzen. Die tatsächliche Entscheidung folgt erst aus dem Vergleich aller sieben Webauftritte.
2. Bei Nutzung zur Akquise den echten Anfrageweg, Anbieterangaben und verbindlichen Angebotsrahmen vervollständigen. Den geplanten Einführungspreis vor einem tatsächlichen Angebot auf Aufwand und Spielraum prüfen; dieser Grundcheck bewertet keine Marktpreise.
3. Core und Signature direkt in den beiden zentralen Konzeptübersichten auswählbar machen, sofern der Browserbefund die schwer erkennbare Zuordnung bestätigt. Die fiktive Kennzeichnung erhalten.

## Prüfgrenzen und historische Angaben

Nur begrenzte Quellenprüfung von Anbieter-, Showroom-, Anfrage-, Export- und Demo-Zuordnung; keine Originaländerungen, Formularabgaben, Käufe oder Nachrichten. Keine vollständige Prüfung aller 30 Pfade, Geräte, 3D-Grenzfälle, SEO, Security, Performance, Barrierefreiheit oder Rechtstexte. Visuelle Qualität und tatsächlich veröffentlichte Funktion werden von Root im Browser geprüft. Kein Beleg für Leads, Kunden, Verkäufe oder wirtschaftliche Tragfähigkeit.

`website/README.md` beschreibt noch 25 Routen und ältere Sites-Hostinggrenzen; der aktive Export enthält 30 Pfade und der Pages-Workflow veröffentlicht `pages-dist`. Root-README nennt ältere Ausbauabsichten für einzelne Signature-Seiten, während aktuelle Quellen bereits fünf Signature-Seiten enthalten. Diese historischen Dokumentationsstände wurden nicht als Beleg für fehlende aktive Routen übernommen.
