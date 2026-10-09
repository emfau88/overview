# LandingGame – begrenzte Quellenprüfung

Stand: **09.10.2026**. EvidenceType dieses Dokuments: **Quellcodebefund** und ausdrücklich gekennzeichnete **Einordnung/Hypothese**. Die tatsächliche Browserprüfung wird separat im Grundanalysebericht dokumentiert. Historische README-Prüfbehauptungen werden nicht als heute ausgeführte Tests übernommen.

## Identität und Prüfgrundlage

- Repository: [emfau88/LandingGame](https://github.com/emfau88/LandingGame).
- Lokaler Checkout: `C:\Users\madde\Documents\Landing Page`.
- GitHEAD: `01b8ce40798a41b3922cbb02635e0d65b21a4e43`, Commit vom **07.10.2026, 13:08:25 +0200**, „Add four Signature projects with paired desktop and mobile previews“.
- `git --no-optional-locks status --short` lieferte keine Änderungen. Die Identitätsprüfung erfolgte rein lesend; für den fremden Eigentümer des Checkouts wurde nur die einzelne Git-Aufrufoption `safe.directory` verwendet, keine globale Einstellung verändert. Der normale Sandbox-Zugriff verhinderte Git-Status; die reine Leseprüfung außerhalb dieser Einschränkung war erfolgreich.
- Keine zusätzliche örtliche `AGENTS.md` im Projekt gefunden. Die Arbeitsgrundlage aus OVERVIEW wurde gelesen.
- **Aktive ausgelieferte Quelle ist selbst `emfau-site/dist/`**. Der Pages-Workflow lädt diesen Ordner direkt hoch; es gibt hier keinen erforderlichen Paketbuild. Die Bezeichnung `dist` bezeichnet in diesem Projekt die direkt gepflegten HTML/CSS/JS-Dateien. `design-assets/` ist eine nicht veröffentlichte Sammlung, kein zweiter aktiver Webauftritt.

Quelle: [.github/workflows/pages.yml](<C:/Users/madde/Documents/Landing Page/.github/workflows/pages.yml:33>), [README](<C:/Users/madde/Documents/Landing Page/README.md:44>).

## Aktive Seiten und Varianten

| Aufruf | Tatsächliche Quelle und Bedeutung |
|---|---|
| `/LandingGame/` | `emfau-site/dist/index.html`, Anbieter-Onepager; ohne gespeicherte Auswahl Standard **Clean Blau**. |
| `?design=blue`, `?design=clean`, `?design=dark` | Dieselbe Startseite mit Blau-, Grün- oder Dark-Gestaltung; Auswahl in `localStorage` unter `emfau-design`, direkte URL-Auswahl hat Vorrang. Keine drei eigenständigen Produkte. |
| `/LandingGame/studio/` | Eigener HTML/CSS/JS-Entwurf mit veränderter Komposition, OMF-Fallbeispiel und vier Signature-Konzepten. |
| `/studio/?owl=on` | Optionale Eulen-Vorschau im Kontaktbereich. Ohne Parameter ist die Eule ausgeschaltet. |

Quellen: [design.js](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/design.js:3>), [Studio-HTML](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:20>), [owl.js](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/owl.js:56>), [owl.js – URL-Aktivierung](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/owl.js:357>).

## Fünf zentrale Befunde

### LG-S01 – Angebot und Zielgruppe sind im Text klar, Games und Apps sind hier bisher keine Inhalte

**EvidenceType: Quellcodebefund; Eignung als zentrale Seite: Einordnung.** Beide aktiven Entwürfe verkaufen persönliche Planung, Gestaltung und Entwicklung von Websites. Genannt sind lokale Betriebe, Gastronomie beziehungsweise Vereine, Region Karlsruhe, ein direkter Ansprechpartner, Abstimmung vor Umsetzung und individuelle Angebote. Studio formuliert den Nutzen besonders direkt: Angebot, wichtige Informationen und Kontakt stehen im Mittelpunkt. Die bestehende inhaltliche Rolle ist damit eine Anbieterwebsite für Webleistungen. Games und Android-Apps sind keine aktiven Präsentationsbereiche dieser Startseiten. Das ist eine bewusste aktuelle Ausrichtung, kein fehlender Pflichtbereich. Ob die spätere zentrale Homepage zusätzlich Produkte zeigen soll, bleibt eine Strategieentscheidung des Nutzers.

Quellen: [Startseite – Zielgruppen und Leistungen](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/index.html:52>), [FAQ zu Preis, Hosting und Betreuung](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/index.html:64>), [Studio-Hero](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:24>), [Studio-Zusammenarbeit](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:74>).

### LG-S02 – Der nächste Kundenschritt endet derzeit ausschließlich in einer lokalen Textvorbereitung

**EvidenceType: Quellcodebefund; Priorität vor echter Akquise: hoch.** Die Kontakt-CTA führen zu `#kontakt`. Die Formulare verhindern den Standardversand, bauen einen Text im Browser zusammen und bieten Kopieren/Download an. Es gibt in diesem Ablauf weder Versandendpoint noch geschäftliche Empfängeradresse; die Hinweise benennen die Grenze offen. Die Anbieter- und Datenschutzdialoge sind als Vorschau gekennzeichnet, verantwortlich handelnde Person und tatsächliche Kontaktadresse fehlen. Beide HTML-Seiten enthalten `noindex,nofollow`. Damit ist ein nachvollziehbarer Design-Prototyp vorhanden, aber noch kein funktionierender Weg, um aus einem interessierten Besucher tatsächlich eine eingehende Anfrage zu machen. Dies ist kein rechtlicher Audit; die fehlenden Angaben werden unmittelbar aus den sichtbaren Vorschautexten übernommen.

Quellen: [Startseiten-Kontakt](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/index.html:65>), [Formularcode](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/app.js:44>), [Studio-Formularcode](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/studio.js:40>), [Studio-Kontakt](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:78>), [Studio-Anbieterhinweis](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:91>), [Robots-Metadatum](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:8>).

### LG-S03 – OMF und fiktive Konzepte sind unterscheidbar, aber der OMF-Projektstatus widerspricht sich

**EvidenceType: Quellcodebefund.** Die Standardstartseite bezeichnet OMF als **„Kundenprojekt · in Entwicklung“** und die verlinkte Seite als Entwicklungsvorschau vor dem offiziellen Start. Studio schreibt **„Abgeschlossenes Kundenprojekt“**. Beides steht im selben geprüften Commit. Der README hält fest, dass Studio auf Wunsch als abgeschlossen dargestellt wurde und ältere Vergleichsseiten frühere Texte behalten. Aus dem Widerspruch folgt kein Beweis, dass die Kundenarbeit tatsächlich unfertig ist: Der richtige, kundenfreigegebene Stand muss geklärt und dann einheitlich beschrieben werden. Studio trennt die vier weiteren Arbeiten bereits sauber als **fiktive Konzepte**; externe Signature-Links führen zu shop. Die OMF-Bilder sind vorhandene Websiteansichten, keine von diesem Review neu erzeugten Referenzen.

Quellen: [Standard – OMF-Status](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/index.html:47>), [Standard – laufende Arbeit](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/index.html:48>), [Studio – OMF-Status](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:31>), [Studio – Konzeptkennzeichnung](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:37>), [Studio – vier externe Demos](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:45>).

### LG-S04 – Designvergleich ist für die Abstimmung sinnvoll; seine Rolle im fertigen Auftritt sollte später beendet werden

**EvidenceType: Quellcodebefund; Wirkung auf Besucher: Hypothese.** Blau/Grün/Dark und Studio sind aktiv sichtbare Auswahloptionen. Die gespeicherte Auswahl kann bewirken, dass derselbe Link bei verschiedenen Besuchern anders aussieht. Die Eule ist dagegen bereits optional und standardmäßig aus; sie ist kein notwendiger Bestandteil des derzeitigen Auftritts. Für die heutige Entwurfsentscheidung sind diese Experimente nützlich. Für eine spätere eindeutige Markenpräsentation wäre eine fest gewählte Hauptfassung nachvollziehbarer. Ein messbarer Conversion-Nachteil durch die Auswahl wurde nicht ermittelt.

Quellen: [Designschalter](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/index.html:24>), [Auswahlpriorität und Speicherung](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/design.js:6>), [Studio-Vergleichsleiste](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/index.html:20>), [optionale Eulen-Aktivierung](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/owl.js:357>).

### LG-S05 – Mobile und zugängliche Bedienung sind in der Implementierung bewusst berücksichtigt

**EvidenceType: Quellcodebefund; tatsächliche visuelle Funktion: separat zu prüfen.** Studio enthält semantische Navigation, Skip-Link, sichtbare Fokusmarkierung, mobile Menülogik mit `aria-expanded` und Escape, native Bilddialoge, Bildgrößen und lokale Schrift. Die CSS-Regeln stapeln Inhalte für kleine Ansichten; die Bewegungsreduktion schaltet Animationen ab. Die optionale Eule stoppt ihre laufende Zeichenschleife bei ausgeblendetem Tab oder unsichtbarer Darstellung und bei reduzierter Bewegung. Die Standardseite implementiert zusätzlich die übliche Tastaturbedienung für Branchentabs. Dies ist eine gute technische Grundlage, aber keine automatisch bestandene Barrierefreiheits- oder Geräteprüfung. Lesbarkeit, Überlauf und CTA-Sichtbarkeit werden von Root tatsächlich im Browser beurteilt.

Quellen: [Studio-Layout/Fokus](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/studio.css:4>), [mobile Regeln](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/studio.css:15>), [Bewegungsreduktion](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/studio.css:17>), [Studio-Menü](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/studio.js:4>), [Branchentabs](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/app.js:10>), [Eulen-Laufzeitbegrenzung](<C:/Users/madde/Documents/Landing Page/emfau-site/dist/studio/owl.js:216>).

## Kleine nächste Maßnahmen – noch nicht umgesetzt

1. Nach dem visuellen Vergleich eine Hauptfassung auswählen; **Studio ist aus dem Inhaltsaufbau ein enger Kandidat**, die endgültige Bewertung braucht den Browservergleich.
2. Vor Akquise tatsächliche Kontaktmöglichkeit und Anfragezustellung schaffen, die Vorschauangaben entsprechend dem wirklichen Betrieb vervollständigen und die Indexierungsentscheidung erst dann treffen.
3. Den tatsächlichen OMF-Status bestätigen und über Varianten hinweg einheitlich darstellen. Konzeptarbeiten weiterhin deutlich als Konzepte kennzeichnen.

## Prüfgrenzen

Rein lesende, begrenzte Quellenprüfung der zwei aktiven HTML-Einstiege, ihrer gemeinsamen Interaktionen und Deployment-Zuordnung. Keine Originaldateien verändert, keine Formulare ausgefüllt oder abgeschickt, keine Nachrichten gesendet. Kein vollständiger Security-, SEO-, Netzwerk-, Accessibility-, Performance- oder rechtlicher Audit; keine Leads, Verkäufe oder Reichweitendaten erfasst. Die optische Qualität ist hier nicht eigenständig bewertet. Historische README-Testberichte bleiben historische Angaben. Websitequelle und tatsächlich veröffentlichter Stand sind trotz passender Seiteninhalte nicht als kryptografisch identisch nachgewiesen.
