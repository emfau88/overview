# keyofsolomon – begrenzte Quellenprüfung

Stand: **09.10.2026**. Ergänzung zur visuellen Grundanalyse des Webauftritts; keine vollständige Shop-, Rechts-, Datenschutz-, historische Editions- oder Wirtschaftlichkeitsprüfung.

## Geprüfter Stand

- Bestätigter lokaler Checkout: `C:\Users\madde\Documents\BOOK KEY OF SOLOMON\keyofsolomon`.
- Origin: `https://github.com/emfau88/keyofsolomon.git`; Branch `main`.
- Lokaler HEAD und lesend abgefragter GitHub-HEAD: **63a9f4c3f637c7e2670dd6afc0e2e9117e179d90**, Commit „Replace lifestyle images with natural scenes“, 04.10.2026, 17:36:14 UTC.
- Ein manueller Git-Blob-Abgleich der **42 versionierten Dateien** ergab keine Inhaltsabweichung zum Git-Index. Bei Textdateien wurden CRLF/LF normalisiert; Bild- und Fontdateien wurden byteweise über den Git-Blob-Hash verglichen. Zusätzlich vorhanden sind `SITE_PREPARATION.md` sowie zwei ältere Café-Bildvarianten. Diese zusätzlichen Dateien wurden nicht als aktive Startseiteninhalte gewertet.
- Für die Hauptstartseite `index.html`: SHA256 **49e8e1ca9bcdcda9061a85685a65b7e6ed953b35ba76d018b1a0b3b94691e76b**. Der lokale Text entspricht nach Zeilenendennormalisierung dem HEAD-Blob. Eine Identität sämtlicher ausgelieferter Pages-Ressourcen ist dadurch allein noch nicht bewiesen; die Live-Ansicht wird separat dokumentiert.
- Gelesen: aktive `index.html`, `legal-notice.html`, `privacy-policy.html`, `thankyou.html`, `api/intent.js`, README und die zusätzliche lokale Vorbereitungsliste. Keine Originaldatei wurde verändert.

## Aktive Struktur und Handlungswege

Die Startseite ist ein englischer, eigenständiger Produktauftritt **Solomon Archive** für ein gedrucktes Hardcover. Die Navigation springt zu `#book`, `#inside`, `#difference` und `#faq`. Mehrere „Order Now“-Buttons öffnen dasselbe Whop-Checkout-Modal; mobil ist zusätzlich eine dauerhafte Kaufleiste vorgesehen. Preis, Produkt und Lieferhinweise erscheinen wiederholt. Footer und Bestätigungsseite verlinken die beiden separaten Informationsseiten.

Der aktive Checkout enthält eine öffentliche Whop-Plan-ID und einen gehosteten Fallback-Link. Die Bestellbestätigung wird nach dem clientseitigen Whop-Callback auf `thankyou.html?status=success` geöffnet. **Es wurden keine Daten eingegeben, keine Bestellung abgeschickt und kein Kauf durchgeführt.**

Quellen: [Startseitenstruktur, Zeilen 92–168](https://github.com/emfau88/keyofsolomon/blob/63a9f4c3f637c7e2670dd6afc0e2e9117e179d90/index.html#L92), [Checkout, Zeilen 173–257](https://github.com/emfau88/keyofsolomon/blob/63a9f4c3f637c7e2670dd6afc0e2e9117e179d90/index.html#L173).

## Zentrale Befunde

### K1 – Ein konkretes Angebot und eine nachvollziehbare Editionsbeschreibung

**Quellbefund / Stärke:** Die Seite benennt ein Produkt, den historischen Ausgangstext, die gedruckte Form und das Format. Aktuell beworben werden **49,95 USD**, Standardversand innerhalb der USA inklusive und ungefähr zwei Wochen für Herstellung und US-Lieferung. Die FAQ erklärt ausdrücklich, dass es eine heutige Print-on-Demand-Ausgabe und kein Exemplar der ursprünglichen Auflage ist. Das ist eine deutlich präzisere Produktkommunikation als ein allgemeiner Projektkatalog.

**Einordnung:** Als eigenständige Buch-Verkaufsseite oder verlinktes Produktprojekt plausibel. Als zentrale Homepage für die gesamte Tätigkeit des Nutzers deckt sie andere Angebote und Produkte nicht ab. Die tatsächliche Papier-, Druck-, Liefer- und Reproduktionsqualität wurde nicht geprüft; Werbetext ist kein Qualitätsnachweis.

Quellen: `index.html` **96–107, 115–123, 144–156**; [Produktbeschreibung](https://github.com/emfau88/keyofsolomon/blob/63a9f4c3f637c7e2670dd6afc0e2e9117e179d90/index.html#L96).

### K2 – Anbieter und direkter Kontakt sind als unfertige Felder hinterlegt

**Quellbefund / hoher praktischer Handlungsbedarf:** Die verlinkte Anbieterinformation trägt sichtbar einen Entwurfsvermerk. Name, Anschrift, geschäftliche E-Mail und direkter Kontakt sind Platzhalter. Auch die Datenschutzseite enthält unvollständige Anbieter- und Verarbeitungseinträge. Ein Besucher bekommt damit keinen fertigen Kontaktweg für Bestell- oder Lieferfragen.

**Einordnung:** Vor aktiver Bewerbung eines kaufbaren Produktes müssen die tatsächlichen Anbieter- und Supportinformationen konkretisiert werden. Dieser Befund bewertet Vollständigkeit und Vertrauen aus der Quelle; er ist **keine juristische Feststellung**, kein Compliance-Zertifikat und keine neue Freigabe zum Veröffentlichen privater Angaben.

Quellen: `legal-notice.html` **22–40, 46–61**, `privacy-policy.html` **21–37, 76–101**; [sichtbare Entwurfs- und Kontaktfelder](https://github.com/emfau88/keyofsolomon/blob/63a9f4c3f637c7e2670dd6afc0e2e9117e179d90/legal-notice.html#L22).

### K3 – Kaufversprechen und tatsächliche Erfüllung müssen noch zusammengebracht werden

**Quellbefund / offene Prüfung:** Die Startseite verspricht ein bestimmtes gedrucktes Produkt, kostenlosen US-Versand und ungefähr zwei Wochen. Das Repository enthält **keine automatische Lulu-Bestellerstellung**. Die zusätzliche lokale `SITE_PREPARATION.md` nennt Druckkonfiguration, Probeexemplar, tatsächlichen Versand und manuellen Erfüllungsablauf ausdrücklich als noch zu verifizieren. Daraus folgt nicht, dass keine Bestellungen manuell erfüllbar wären; der konkrete Ablauf ist in dieser Grundanalyse nicht bestätigt.

**Kleine nächste Maßnahme:** Tatsächliches Buch, Druckkonfiguration, zulässige Liefergebiete, Gesamtpreis und Support-/Bestellablauf vor einem echten Verkaufsversuch abgleichen. Keine Aussage über Nachfrage oder Umsatz aus dem vorhandenen Design ableiten.

Quellen: `index.html` **103–107, 116–123, 152–154, 159–164**, `privacy-policy.html` **83–86**; lokale [Vorbereitungsliste](<C:/Users/madde/Documents/BOOK KEY OF SOLOMON/keyofsolomon/SITE_PREPARATION.md>).

### K4 – Messpunkte sind vorgesehen, beweisen aber keine abgeschlossene Bestellung

**Quellbefund:** Umami und der Whop-Loader werden beim Laden der Startseite eingebunden. Kaufbutton, Öffnen des Checkouts und erfolgreicher Whop-Callback besitzen clientseitige Ereignisse. Der in der README erwähnte Server-Logger `api/intent.js` wird von der aktiven Startseite nicht aufgerufen; es gibt dort keinen `fetch('/api/intent')` oder vergleichbaren Verweis. GitHub Pages führt diese Vercel-Funktion nicht allein durch ihre Existenz als Serverfunktion aus.

**Einordnung:** Keine Besucher-, Kauf- oder Umsatzdaten wurden abgerufen. Die öffentlich direkt aufrufbare Danke-Seite beweist für sich genommen keine Bezahlung. Ein eventueller späterer Verkaufscheck müsste Whop-Bestellung und Erfüllung tatsächlich zuordnen; ein aufgezeichnetes `purchase`-Ereignis ist hier nur ein im Frontend definierter Callback-Messpunkt.

Quellen: `index.html` **86–89, 209–255**, `api/intent.js` **1–6**, `thankyou.html` **25–31**; [Mess- und Weiterleitungscode](https://github.com/emfau88/keyofsolomon/blob/63a9f4c3f637c7e2670dd6afc0e2e9117e179d90/index.html#L209).

### K5 – Historische Entwürfe sollten nicht mit der aktiven Produktfassung verwechselt werden

**Quellbefund / kleiner Strukturpunkt:** `index2.html` bis `index8.html` liegen weiterhin im Repository. Sie sind nicht die aktive Root-Startseite. Die zusätzliche Vorbereitungsliste beschreibt ältere Produkt-, Tracking- und Schrifteinstellungen in diesen Entwürfen. Die beiden neuen lokalen Café-Bildvarianten sind ebenfalls nicht aktive Startseitenbilder; die Startseite nutzt `lifestyle-woman-cafe-v5.png`.

**Einordnung:** Für eine spätere tatsächliche Verkaufsfreigabe sollte klar sein, welche Version öffentlich verlinkt und maßgeblich ist. Es wurde nichts entfernt und keine Veröffentlichung umgestellt. Die Erreichbarkeit jedes historischen Entwurfs ist kein Bestandteil dieser Quellenprüfung.

Quelle: Dateibestand, `index.html` **133–138**, lokale `SITE_PREPARATION.md`, Abschnitt zu Archivdateien.

## Prüfgrenzen und Empfehlung

Quellenprüfung abgeschlossen; visuelle Desktop-/Mobilbeobachtungen gehören in den separaten Grundanalysebericht. **Nicht geprüft:** tatsächliches Whop-Bezahlformular bis zum Abschluss, Zahlungsabwicklung, physisches Buch, Versand, Rückerstattung, echte Nachfrage, Conversion, Analytics-Daten, Rechtskonformität oder historische Restaurationsqualität.

Für den gemeinsamen Vergleich ist diese Seite eine **spezialisierte Produkt-Landingpage**. Die nächsten wenigen sinnvollen Punkte sind ein fertig zugeordneter Anbieter/Supportweg, nachvollziehbare Produkt- und Erfüllungsangaben und ein kontrollierter Checkout-Abgleich vor Werbung. Ein kompletter visueller Neubau folgt daraus nicht.
