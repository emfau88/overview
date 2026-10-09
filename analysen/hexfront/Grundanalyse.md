# HEXFRONT – begrenzte Grundanalyse

Stand: **09.10.2026**. Produkt aus dem sechs Spiele umfassenden Dashboardbestand; Repository [emfau88/hexwars](https://github.com/emfau88/hexwars), öffentlich geprüfter Auftritt [HEXFRONT auf Pages](https://emfau88.github.io/hexwars/).

**Ergebnis:** HEXFRONT hat einen erkennbaren, tatsächlich spielbaren Kern: Truppen per Drag versenden, neutrale Felder erobern und mit fortlaufendem Wachstum gegen einen Echtzeitgegner vorrücken. Der konkrete Mission-I-Einstieg ist verständlich erklärt und startet den Gegner nicht vor dem ersten gültigen Zug. Landschaft, orange/blaue Besitzfarben, Zahlenfelder und die ruhige Kampagnenrahmung geben dem Spiel eine eigenständige, bereits ausgearbeitete Gestaltung. Die wesentlichen ersten Verbesserungsansätze betreffen den mobilen Zugang zu Regeln/Versorgung, ungestörtes Nachlesen während des Echtzeitkampfs und einen kleinen Ergebnisdialog-Überlauf. Dies ist ein begrenzter Erstdurchlauf, **keine vollständige Kampagnen-, KI- oder Balancebewertung**. Keine Originalquelle und kein Deployment wurden geändert.

## Prüfgrundlage und Evidenz

**Laufzeit:** eigener öffentlicher Browser-Erstdurchlauf des Hauptprüfers am 09.10.2026, Desktopansicht **1281 × 800**, schmale Browseransicht **391 × 844**. Kampagneneinstieg, Mission I, mehrere gültige Drags/Eroberungen, ein tatsächliches DEFEAT, Try Again/Restart, Kampagnenrückkehr und Desktop-Versorgungsschalter wurden bedient. Die schmale Browserprüfung ist keine Bedienung auf einem physischen Touchgerät.

**Quellcode:** lokale Identität festgestellt, danach gezielt die relevanten Mechaniken des festgehaltenen öffentlichen main-Commits **`29ff12d6897db9b994b97be980efb0037e54d476`** gelesen. Der saubere Originalcheckout `C:\Users\madde\Documents\ChatGPT\hexwars` liegt auf Branch `codex/improve-mobile-onboarding-copy`, HEAD **`5f5f35049b1900971fece81dc3365923e5a9c2c1`**. Die beiden Quellenstände unterscheiden sich. **Auch main wurde nicht unabhängig als Deployment-Commit des beobachteten Pages-Bundles bestätigt.** Paketversion `0.1.0` ist eine lokale Metadatenangabe, kein Gleichheitsnachweis. Provenienz: [runtime/README.md](runtime/README.md); commitfeste Dateilinks/Zeilen: [Quellenpruefung.md](Quellenpruefung.md).

**Außenperspektive:** Verständlichkeit, Optik und Verbesserungsansätze sind Bewertungen aus den bedienten Ansichten und den echten Aufnahmen. Sie sind keine Nutzerstudie und keine gemessene Reichweiten-, Bindungs- oder Umsatzwirkung. Frühere Qualitätsberichte, Testscores und Portalbewertungen wurden nicht übernommen.

## Tatsächlich erlebter Ablauf

Der Kampagneneinstieg benennt das Ziel „blaue Basis erobern“, die orange Ausgangsbasis und das Ziehen zu einem benachbarten Zahlenfeld. Felder ohne Zahl werden ausdrücklich als Landschaft erklärt. Mission I beginnt mit 23 eigenen und 12 gegnerischen Basiseinheiten. Vor dem ersten Zug bleiben Zeit und Anfangsbestand stehen; ein gültiger Drag löste Einheitenbewegung und den Echtzeitkampf aus. Danach fanden kurze Vorstöße, Besitzwechsel und Truppenwachstum statt.

Auto-Supply war im Desktop-Dock standardmäßig ON und wurde erläutert. ON → OFF zeigte eine passende Rückmeldung; in einer zusätzlichen Live-Gegenprüfung setzte RESTART den Button wieder auf ON/aktiv und Zeit auf `0:00`. Der Code bestätigt das Zurücksetzen. Abschalten stoppt nur neue eigene Versorgungsbewegungen; der Kampf pausiert damit nicht.

Die Runde endete tatsächlich mit **DEFEAT** nach angezeigten **2:17**, **7 Captures** und dem Grund „Your base was captured.“. Try Again setzte die Mission auf die Startwerte zurück. Diese Werte dokumentieren ausschließlich diesen einen Bedienversuch, **keine Spieler-KPI, mittlere Rundendauer oder Erfolgschance**. Die langen Pausen zwischen Werkzeugaktionen und Beobachtung liefen im Echtzeitkampf weiter; aus dieser Niederlage folgt keine Aussage, dass Mission I zu schwer oder die KI unfair sei.

Bei 391 Pixeln zeigte die Ansicht weiterhin das Spielfeld und die oberen Feld-/Einheitenzähler. Die separate Mobilebar hatte in Mission I 100 %, Restart, Map und Fullscreen; gesperrte Modi waren dort ausgeblendet. Ein Drag eroberte ein neutrales Feld; die eigene Zellenzahl stieg dadurch von 1 auf 2. Restart stellte den Anfangsbestand wieder her, Map führte korrekt zurück zur Kampagne mit Fortschritt **0/10**. Fullscreen und Audio waren sichtbar, wurden aber nicht funktional geprüft. Ziel-/Regel-/Feldtypen-Sidebar und Auto-Supply-Schalter fehlten während des mobilen Kampfes.

## Was bereits trägt

- **Konkreter, geschützter Ersteinstieg:** Ziel, Quelle und spielbare Felder werden benannt. Der erste gültige Drag startet die Runde; eine ungültige oder bloße erste Berührung wird im gelesenen aktiven Pfad nicht zum Kampfstart. Dadurch ist Zeit für die erste Orientierung vorhanden.
- **Eigenständige Darstellung:** Detailreiche Küsten-/Wiesenlandschaft, gut unterscheidbare Besitzfarben und Zahlenfelder geben dem einfachen Strategiekern eine attraktive Bühne. Das Desktop-Dossier ordnet Ziel, Regel, kommende Taktik und Status; die schmale Ansicht lässt das eigentliche Brett groß sichtbar. Das ist ein visuelles Urteil anhand dieses Levels, keine Bewertung sämtlicher Karten.
- **Reale Rückmeldung und kompletter kleiner Rundenablauf:** Bewegte Truppen, Zahlen, Gebietseroberung, fortlaufende Gesamtzähler, Niederlage mit Grund und erneut spielbare Startwerte wurden erlebt. Neustart und Kampagnenrückkehr funktionierten im geprüften Ablauf. Die Quelle beschreibt zusätzlich Sieg/Freischaltung; diese wurden nicht als erlebt ausgegeben.

## Fünf begrenzte Befunde

### 1. Mobile Spieler verlieren den Zugang zu wichtigen Regeln und Versorgung

**Evidenz: Laufzeit + Quellcode; Priorität: mittel.** Die schmale Ansicht ist bedienbar, verbirgt aber die Desktop-Sidebar mit Ziel/Regel, Zeit/Phase und Feldtypen. Das automatisch aktive Auto-Supply ist dort weder mit seinem eigenen Schalter noch mit der zugehörigen Erklärung zugänglich. Der Code erklärt den Unterschied: Sidebar wird per Mediaquery verborgen; das Command-Dock ist nur im Desktoplayout sichtbar; die Mobilebar hat keinen Versorgungsschalter. Die oberen Truppen-/Feldzähler bleiben ausdrücklich vorhanden.

**Folgerung:** Eine kurze erreichbare Info-/Steuerungsansicht mit Missionsziel, spielbaren Feldern und Versorgungsstatus wäre hilfreicher als eine umfassende Neugestaltung. Auto-Supply muss mobil erkennbar und gegebenenfalls kontrollierbar bleiben. Es gibt noch keine Rückmeldung realer neuer Spieler, ob sie diese Regeln aus dem Kampagneneinstieg ausreichend behalten.

### 2. Nach dem ersten Zug fehlt eine allgemeine Pause zum Nachlesen

**Evidenz: Laufzeit + gezielter Quellpfad; Priorität: mittel.** Der Erstdurchlauf erlebte fortlaufenden Kampf während der Orientierung. Normales Lesen und Dock-Einklappen pausieren die Simulation nicht. In den gelesenen aktiven Pfaden gibt es Startgatter und späteres Guardian-Briefing als besondere Pausen, aber keine allgemeine Pause-/Weiter-Steuerung. Map/Escape geht zur Kampagne und beendet die aktuelle Runde.

**Folgerung:** Für einen neuen Spieler können Ziel-, Reserve- und Versorgungsregeln mit dem laufenden Gegner konkurrieren. Ein klarer Pause-/Infozustand beziehungsweise eine sehr kurze weitere Erklärung vor dem ersten Zug ist ein begrenzter Kandidat. Das ist kein Beleg für schlechte Balance; beim Werkzeugtest ist dieser Zeiteffekt besonders stark und darf nicht als gewöhnliches menschliches Spieltempo gewertet werden.

### 3. Reisezeit, Wachstum und Auto-Supply können Zahlenänderungen schwerer zuordnen lassen

**Evidenz: Quellcode + Einschätzung aus Erstdurchlauf; Priorität: mittel.** Manuelle Befehle ziehen die Sendemenge sofort vom Ausgangsfeld ab; Ankunft und anschließender Kampf folgen später. Gleichzeitig wachsen Einheiten und Auto-Supply transportiert Überschuss durch eigene Felder nach vorne. Bewegungs- und Zahlenfeedback ist vorhanden. Die sichtbare Kurzform „hinten 20 %, vorne 36 %“ nennt jedoch nicht die im Code maßgebliche Geländekapazität und Mindestreserve 6; die Werte sind nicht einfach Prozent des momentanen Truppenbestands.

**Folgerung:** Eine kurze verständliche Erklärung, was gerade reist und was automatisch verteilt wird, kann den bereits vorhandenen Rückmeldungen mehr Bedeutung geben. Nicht als belegten Eingabe- oder Rechenfehler behandeln. Ob Nutzer die Zahlen tatsächlich missverstehen, muss ein kleiner Erstspieltest klären; größere Animationen oder ein kompletter Umbau sind aus diesem Befund nicht abgeleitet.

### 4. Der Desktop-Niederlagendialog zeigt einen horizontalen Scrollbalken

**Evidenz: Laufzeit und echte Aufnahme; Priorität: niedrig.** Unter dem Ergebnisdialog bei 1281 × 800 ist ein horizontaler Balken sichtbar. Grund, Zeit, Captures und beide Aktionen waren lesbar; Try Again funktionierte. Dies ist ein kleiner Layoutmangel, kein bestätigter Abbruch oder verlorener Fortschritt.

**Folgerung:** Gezielt die überlaufende Box bestimmen und den Resultdialog gegen beide Testgrößen prüfen. Die Quelle nutzt `overflow:auto` und überstehende Dekoration; das sind Diagnoseansätze, kein bestätigter Ursachen- oder Fixnachweis. Siegbildschirm, Übersetzungen, sehr kurze Querformate und mobile Ergebnisansicht wurden noch nicht geprüft.

### 5. Die Kampagne zeigt zehn Karten, die Quelle gibt neun frei

**Evidenz: Laufzeit + Quellcode; Priorität: niedrig.** Der Einstieg zeigte „10 MAPS“ und Fortschritt 0/10; Level X war bereits als „SOON“ sichtbar. main besitzt zehn Leveldefinitionen, aber `RELEASED_CAMPAIGN_LEVELS = 9` begrenzt die normale Freigabe. Die nächste unfertige Karte wird ausdrücklich Coming Soon und nicht startbar gezeigt.

**Folgerung:** „9 spielbare Karten + 1 angekündigt“ wäre eine eindeutigere Außendarstellung, solange das dem wirklichen veröffentlichten Stand entspricht. „Neun freigegeben“ beweist weder deren Qualitätsstand noch, dass sie alle fehlerfrei zu Ende gespielt werden können. Die spätere Kampagne wurde im Grundcheck nicht erreicht.

## Drei kleine nächste Maßnahmen

1. **Erste Orientierung vereinheitlichen:** Missionsziel und Versorgung auch mobil erreichbar machen; kurze Erklärung von automatischem Transport und Reise/Kampf. Einen Pause-/Infozustand als begrenzten Kandidaten mitprüfen. Anschließend wenige neue Spieler denselben Ersteinstieg ohne Hilfe bedienen lassen. Keine Umsetzung ist bisher erfolgt.
2. **Ergebnisdarstellung und Umfang klarziehen:** Horizontalen Ergebnisüberlauf gezielt diagnostizieren und korrigieren; die zehn Stationen gegenüber neun freigegebenen Karten klar benennen. Nach einer tatsächlichen Umsetzung Resultdialog, Retry und Kampagnenrückkehr erneut prüfen.
3. **Den noch fehlenden Sieg-/Fortschrittsweg gezielt ergänzen:** Eine echte Mission-I-Victory, 50-%-Freischaltung in II und gespeicherten Fortschritt nach Reload durchspielen; später Gruppe/Guardian und die weiteren Kampagnenkarten separat prüfen. Den begrenzten Grundcheck dadurch ergänzen, ohne bereits die gesamte Kampagne oder eine Balanceänderung vorwegzunehmen.

Die vorgeschlagenen Schritte sind spätere Verbesserungs-/Prüfkandidaten. Es wurden keine Produktfehler behoben, kein Update gebaut und kein Spiel veröffentlicht.

## Offene Fragen und Prüfgrenzen

- Welche konkrete Veröffentlichung/Commit-ID wurde auf Pages beobachtet? Aktueller main, lokaler Branch und Livebundle bleiben getrennte Stände.
- Verstehen neue Spieler das Zusammenwirken von manuellem Befehl, automatischem Wachstum, Transport und Reserven ohne Hilfe? Die Mechanik ist belegt, das Verständnis noch nicht gemessen.
- Wie funktioniert der Sieg-/Freischaltungs-/Reload-Pfad tatsächlich? Mission II–IX, Gruppe, Guardian, spätere Karten und Siegbildschirm wurden nicht gespielt.
- Wie fühlt sich die Eingabe auf einem echten kleinen Touchgerät an? Die Prüfung bei 391 Pixeln verwendete den Browser und bestätigt keine reale Fingerbedienung.
- Wie verhalten sich Audio, Fokus/Hintergrundtab, Portalintegration und längere Sessions? Hierfür wurden keine Tests behauptet.

Keine belastbare Bewertung von Schwierigkeit, KI, langfristigem Wiederspielreiz, vollständiger Kampagnenqualität, Portaltauglichkeit, Reichweite oder Wirtschaftlichkeit. Kein vollständiger Accessibility-, Browsermatrix-, Security- oder Performance-Audit. Keine historischen Testresultate als aktuelle Ergebnisse verwendet. Fehlende Nutzerkennzahlen sind unbekannt, nicht null.

## Belege

- [Gezielte Quellen-Gegenprüfung](Quellenpruefung.md) mit aktiven Codepfaden und commitfesten GitHub-Zeilen.
- [Identität und getrennte Laufzeit-/Quellbasis](runtime/README.md).
- Echte Browserbilder: [Kampagneneinstieg](screenshots/campaign-desktop.jpg), [laufende Mission I](screenshots/battle-desktop.jpg), [Niederlage](screenshots/defeat-desktop.jpg), [schmaler Mission-I-Einstieg](screenshots/mission-mobile.jpg). Metadaten und Dateihashes werden im [Screenshot-Manifest](screenshots/manifest.json) festgehalten; die Bilder sind keine neuen Mockups oder historische Spielszenen.
