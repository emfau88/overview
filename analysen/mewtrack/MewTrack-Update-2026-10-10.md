# MewTrack – gezielte Korrekturen und Play-/Storeübernahme

Stand: **10.10.2026**. Ergänzung zur [nativen Nachprüfung und Versionsklärung](Nachpruefung-2026-10-10.md). Diese datierte Dokumentation beschreibt die anschließend ausdrücklich beauftragte kleine Umsetzung. Die früheren Pilot- und Nachprüfungsberichte bleiben als historische Stände erhalten.

**Bisheriges Ergebnis:** Die besprochenen Fehler und begrenzten Bedienverbesserungen sind in einer isolierten Arbeitskopie umgesetzt und anschließend in den Originalordner übernommen. **0.9.5 / Code 14**, Debugbuild, **81 JVM-Tests**, **sechs gezielte Android-Tests** sowie der signierte Releasebuild wurden erfolgreich geprüft. Compare, Guidance-Tageswechsel und die Restore-Fehlermeldung wurden zusätzlich im Android-Debugbuild bedient. Das Release-AAB ist validiert und verwendet das Uploadzertifikat des vorherigen lokalen AAB13. Das daraus abgeleitete lokal signierte Test-APK wurde separat installiert; Onboarding, Home, Settings/Privatheit und der begrenzte Front-Kameraeinstieg wurden bedient. **Code14 wurde in der richtigen Play-App akzeptiert, der Produktionsrelease mit 100 % für die bisherigen 178 Länder gespeichert und Titel/Kurz-/Langbeschreibung auf Englisch und Deutsch gespeichert.**

**Zur Überprüfung eingereicht:** Am **10.10.2026 gegen 22:31 MESZ** bestätigte die Console nach dem Dialog per Toast, dass **fünf Änderungen zur Überprüfung gesendet wurden**. Google-Freigabe und öffentliche Aktivierung sind noch nicht belegt. Die exakten gespeicherten EN-/DE-Texte stehen im [Storebericht](MewTrack-Store-2026-10-10.md). **Alle bisherigen Storebilder bleiben auf ausdrückliche Nutzerpräzisierung unverändert.** Eine zuvor vorbereitete Grafikempfehlung wurde nicht gewählt und gestoppt; daraus folgt keine offene Pflicht zum Bildtausch.

**Lesende Schlusskontrolle um 22:35 MESZ:** Automatische Vorabprüfungen abgeschlossen; die Console zeigt **„Deine Änderungen werden jetzt überprüft.“** Die fünf eingereichten Änderungen bleiben unverändert. Google-Freigabe und öffentlicher Release14 weiterhin offen, Managed Publishing aus.

## Nutzerauftrag und enger Umfang

Die maßgebliche ausdrückliche Freigabe lautet unverändert:

> Achso OK dann führe diese besprochenen fixes durch, sonst nichts ändern, Version um +1 erhöhen, bei googleplay hochladen und danach Storeeintrag auf Englisch verbessern für bessere ASO und mehr Downloads

Zuvor legte der Nutzer fest: **„Die Optik grundsätzlich soll beibehalten werden.“** Der Vergleich verschiedener Sessions bleibt der zentrale gewünschte Nutzen. Der konkret bestätigte Compare-Fehler war, dass die aus dem Detail gewählte Ausgangssession dabei fehlte; es ging nicht darum, den Vergleich verschiedener Tage zu verhindern.

Umgesetzt wurden die vier besprochenen Fehlerbereiche Compare, Restore-Fehlerklassifikation, Home-Tageszustand und Review-Speicherfehlermeldung. Dazu kommen die besprochenen kleinen Verbesserungen: besser lesbare Hilfstexte/Systemicons, prominenterer Aufnahmebutton, weniger Settings-Abstand, scrollbare Reviewansicht mit antippbaren Fotos, sichtbare Löschfehler, synchroner Lifetime-Zustand, Preis aus geladenen Play-Daten und zutreffende Datenschutz-/Exportformulierungen.

**Erhalten:** Androidinterner Name/Launchername, bestehendes Icon, Schwarz-Grün-Grundgestaltung, Navigation, Front-/Links-/Rechts-Aufnahmeschritte, die Grenze von drei Gratissessions und der bestehende einmalige Lifetime-Kauf. Keine neue Exportfunktion, neue Bezahlstufe, Datenmigration, Kameraausrichtung oder frei erfundene Grid-/Overlay-Funktion. Der Storetext darf den Routinekontext „looksmaxing“ dezent nennen; daraus folgt weder eine körperliche Wirkung noch ein nachgewiesener Suchvolumen-/Downloadvorteil.

Eine spätere ausdrückliche Storepräzisierung wählt **MewTrack: Mewing Photo Tracker** als Storetitel und hebt geführte Fotos in der englischen Kurzbeschreibung hervor; eine deutsche Übersetzung ist ebenfalls freigegeben. Diese Änderung betrifft die Storetexte, keine erneute Änderung des geprüften Android-Launchernamens oder des Icons. Der Nutzer stellte anschließend ausdrücklich klar, **die bisherigen Storebilder zu erhalten**. Weder Bildtausch noch Bildlöschung wurde in der Console vorgenommen. Die endgültigen gespeicherten Texte und ihre Längen sind im separaten Storebericht nachzulesen.

## Identität und getrennte Quellenstände

| Stand | Identität | Bedeutung und Grenze |
|---|---|---|
| Original vor dieser Umsetzung | `C:/Users/madde/flutter_projects/MEWING 2.0/app`, Arbeitsbaum **0.9.4 / 13**, Package `com.chargegeist.mew`; Git-HEAD `e0729e4c20663bd34c424c5fb92155b8395259c6` weiterhin **0.9.3 / 12** | Die vier bereits vorhandenen Änderungen aus der Nachprüfung sind nicht als neue Umsetzung gezählt. Original und Git-HEAD sind unterschiedliche Stände. |
| Isolierte neue Quelle | `analysen/mewtrack/runtime/update-20261010/source/`, **0.9.5 / 14**, min26, target/compile36 | Kleine Korrekturen auf einer Kopie des aktuellen Arbeitsbaums. Versionsname und Versionscode jeweils um einen Schritt erhöht. Kein SDK-/Billing-Upgrade auf Verdacht. |
| Tatsächlich bedientes neues Debug-APK | `com.chargegeist.mew.debug`, **0.9.5-debug / 14** | Eigene Debug-Sandbox, synthetische Sessions, Android34-Emulator. Keine Produktionsdaten und keine Play-Auslieferung. |
| Neues signiertes Release-AAB | `com.chargegeist.mew`, **0.9.5 / 14**, target36 | Releasebuild mit R8/Ressourcenverkleinerung, Signierungs- und Bundlevalidierung. Ein fertiges lokales AAB ist noch kein Google-freigegebener Release. |
| Daraus abgeleitetes lokales Universal-APK | `com.chargegeist.mew`, **0.9.5 / 14** | Mit lokaler Testsignatur verpackt, separat installiert; Onboarding, Home, Settings/Privatheit und Front-Kameraeinstieg bedient. Virtuelle Kamera blieb bei „No face detected“ ohne abgeschlossene Aufnahme. Keine Google-Play-Auslieferungssignatur und keine Wiederholung sämtlicher Debugproben im Release-APK. |
| Originalübernahme | `codex/mewtrack-fixes-14`, Arbeitsbaum **0.9.5 / 14** | 32 ausgewählte Dateien übernommen; vorherige Arbeitsbaumänderungen erhalten. HEAD bleibt die Ausgangsbasis `e0729e4c20663bd34c424c5fb92155b8395259c6`; Appänderungen uncommitted. |
| Play-Console | **Code14 akzeptiert; Google-Überprüfung läuft** | 100 % für bisherige 178 Länder und EN-/DE-Storetexte gespeichert; Einreichung gegen 22:31 MESZ bestätigt. Lesende Nachkontrolle 22:35: Vorabprüfungen fertig, fünf Änderungen werden überprüft. Google-Freigabe und öffentliche Aktivierung noch offen. |

Der Quellabgleich `source_diff.py` bestätigte vor der Übernahme **alle 80 ursprünglichen Eingabedateien bytegleich zur Baseline**. Das gespeicherte Diffmanifest enthält **20 geänderte bestehende Dateien und zwölf neue Quelldateien**, insgesamt 32 ausgewählte Dateien; die übrigen 60 Baseline-Dateien bleiben gleich. Neue Dateien liegen ausschließlich unter `app/src/` und betreffen kleine Helper und Regressionstests. Der spätere tatsächliche Sync ist getrennt in `original-sync.json` dokumentiert; die ursprüngliche Baseline bleibt unverändert als Herkunftsbeleg erhalten.

Alle Dateien unter `app/src/main/res`, das Manifest sowie `Theme.kt` und `Type.kt` sind gegenüber der Baseline unverändert. Damit bleiben insbesondere Icon, Appidentität, Basisthema, Typografie und vorhandene Ressourcen erhalten. Nur informative Grautöne, Systemleistenkontrast und die besprochenen kleinen Abstände/Reihenfolgen ändern sich.

## Was konkret korrigiert wurde

| Bereich | Änderung | Passender Beleg und Grenze |
|---|---|---|
| Compare-Ausgangssession | Navigations-ID wird tatsächlich angewendet. Vergleich enthält die gewählte Session und eine sinnvolle andere Session; die erste Ansicht ist zeitlich geordnet. Asynchron eintreffende Sessions und neue IDs werden berücksichtigt, manuelle Auswahl bleibt erhalten. Überholte Fotoladevorgänge werden abgebrochen. | Zehn neue JVM-Tests plus native Gegenprobe mit drei künstlichen Sessions: Detail **5. Oktober → Vergleich 1. / 5. Oktober**; anschließend **9. Oktober frei ausgewählt**. Keine pauschale Einschränkung auf diese Paarung. |
| Restore und Ladezustände | Erfolgreich gefundener Kauf, erfolgreich abgefragter fehlender Kauf und technischer Fehler haben getrennte Ergebnisse. Verbindungs-/Querypfade sind zeitlich begrenzt und beenden den UI-Fortschritt; verspätete SDK-Callbacks werden ignoriert. | Neue Billing-Logik-/Callbacktests sowie native technische Fehlerprobe: **„Could not check purchases. Check your connection and try again.“**, Fortschritt beendet. Keine falsche „No purchase found“-Meldung in dieser Probe. Kein echter Play-Kauf. |
| Lifetime-Zustand und Preis | Bestehende Repository-Aufrufer teilen den Lifetime-Zustand samt Preferences-Listener. Die Paywall zeigt geladenen Play-Preis statt erfundenem festen Euro-Fallback; bei fehlenden Produktdaten kann neu geladen werden und der Kauf bleibt gesperrt. | Quellen- und JVM-Gegenprüfung. Kein getesteter realer Kauf, regionaler Preis, Kontowechsel oder kompletter Kauf-/Restore-Durchlauf. |
| Home/Guidance und Tagesgate | Lokaler Tag, aktueller Guidance-Tipp, Erledigtzustand und heutige abgeschlossene Session werden bei Resume und während sichtbarem Home einmal pro Minute erneuert. Derselbe lokale Tag steuert Tipp und Check-in-Gate. Ein alter Tipp unmittelbar nach Mitternacht kann den ungesehenen neuen Tipp nicht abhaken. | Sechs neue Tageslogiktests plus kontrollierte native Datums-/Resumeprobe: Nach Bestätigung am 10.10. zeigt der 11.10. einen neuen Tipp ohne alten „Done for today“-Zustand. Kein natürlicher mehrtägiger Langzeittest. |
| Review-Speicherfehler und Wiederholen | Speicherfehler wird unmittelbar im Review angezeigt; bei fehlgeschlagenem Speichern bleibt Wiederholen möglich. Fehlende Fotos werden verständlich gemeldet. Doppel-Save, Retake und Discard sind während des Speicherns gesperrt. Back/Cancel entfernt keine Dateien während einer laufenden Aufnahme oder Speicherung. | Vier gezielte Android-Reviewtests mit künstlichen Bildern prüfen sichtbaren Fehler/Retry, Sperren, Vollbild und große Schrift. Die Reviewfehleransicht wurde gezielt als UI-Zustand aufgebaut; kein künstlich ausgelöster Kamera-/Datenbank-Savefehler im vollständigen Kamerafluss. |
| Review-Bedienung | Vorschauinhalt ist vertikal scrollbar; antippbare Fotos öffnen den bestehenden Vollbildviewer. Save und Discard bleiben in der unteren Aktionsfläche. | Android-Reviewtest mit Schriftfaktor 2 prüft Erreichbarkeit der Aktionen und Retake. Keine vollständige Prüfung aller Displays/Orientierungen. |
| Löschen und Cleanup | Dateirückgaben werden ausgewertet; bei unvollständiger Dateilöschung werden Datenbankzeilen für erneutes Löschen erhalten. Detail/Settings zeigen Fehler; die Detailansicht verlässt den Eintrag nur nach Erfolg. Cleanup zählt nur erfolgreich entfernte Dateien. | Vier neue JVM-Löschtests sowie zwei Android-Repositorytests mit isolierter In-Memory-Datenbank und absichtlich blockierter künstlicher Datei. Einzel- und Gesamtlöschung bleiben nach Fehler wiederholbar. Keine Löschung privater Nutzerdaten. |
| Lesbarkeit und Hauptaktion | Hilfstextfarbe von `#5C6470` auf `#929CA8` aufgehellt, Status-/Navigationsleistenicons hell, Aufnahmeaktion direkt nach Tagesstatus vor Guidance, Settings-TopBar-Abstand kleiner. | Quellenabgleich und native Debugansichten. Das Schwarz-Grün-Grunddesign und vorhandene Karten bleiben erhalten. Keine vollständige Barrierefreiheitszertifizierung oder Downloadwirkung behauptet. |
| Zutreffende Texte | Nicht vorhandener Export wird nicht mehr versprochen. Lokale appprivate Fotodaten und Verlust bei Deinstallation werden erklärt; Fotoablauf ohne Konto und Onlineabhängigkeiten für Play-Kauf/Restore werden getrennt beschrieben. | Aktive Onboarding-/Settings-Texte und Storeentwurf geprüft. Keine Exportfunktion hinzugefügt und keine vollständige Netzwerkprüfung. |

### Zwei wichtige Grenzen der Umsetzung

**Löschung ist kein atomarer Dateisystem-/Datenbankvorgang.** Bei einer fehlgeschlagenen Dateilöschung bleiben Datensätze zum Wiederholen erhalten; andere Fotos können bereits entfernt sein. Scheitert die Datenbanklöschung nach erfolgreicher Dateilöschung, werden Fotos nicht zurückgerollt. Fehlerbehandlung und Retry verbessern den bisherigen Vorgang, behaupten aber keine Transaktion über beide Speicherbereiche.

**Der bereits gespeicherte Lifetime-Zugang bleibt bei fehlenden oder fehlerhaften Abfragen erhalten**, entsprechend der bisherigen Offline-Zugangsregel. Restore-Meldung und lokales Entitlement werden ausdrücklich getrennt. Eine neue Abgleichregel für Erstattungen, Widerrufe oder kontobezogene Entziehung wurde nicht eingeführt und nicht getestet. Die Korrektur darf daher nicht als vollständige Billing-Neuentwicklung ausgegeben werden.

## Tatsächlich ausgeführte Tests

`assembleDebug` und `testDebugUnitTest` liefen erfolgreich. Die vollständigen zehn Unit-Suite-XMLs enthalten **81 Tests, 0 Fehler, 0 Fehlschläge, 0 übersprungen**. Davon sind 45 bereits vorhandene Tests und 36 neue Regressionstests:

| Suite | Tests | Herkunft |
|---|---:|---|
| DateFormattingTest | 10 | vorhanden |
| EntitlementGateTest | 15 | vorhanden |
| CaptureSlotsTest | 6 | vorhanden |
| DailyGuidanceTest | 10 | vorhanden |
| HomeUiStateTest | 4 | vorhanden |
| ComparisonSelectionTest | 10 | neu |
| HomeDaySnapshotTest | 6 | neu |
| DeleteProgressDataTest | 4 | neu |
| BillingCallbacksTest | 5 | neu |
| BillingOutcomesTest | 11 | neu |

Zusätzlich bestanden **sechs gezielte instrumentierte Android-Tests** im isolierten Android34-Emulator `emulator-5582`: vier `CaptureReviewTest`-Fälle und zwei `ProgressDeletionTest`-Fälle. Die Reviewtests verwenden künstliche Fotos und prüfen gezielt die Review-Composable; die Löschtests verwenden eine getrennte In-Memory-Datenbank sowie künstliche temporäre Dateien. Dies ist ein tatsächlicher Android-Nachweis der ausgewählten Komponenten, **kein vollständiger Kamera-Check-in und keine Ausführung sämtlicher bestehender Androidtests**.

Der Hauptagent führte die native Compare-, Guidance- und Restore-Gegenprobe separat an der laufenden Debug-App aus. Die drei vorhandenen Sessions sind mit eingespeisten geometrischen Fixturebildern samt Herkunftskennzeichnung befüllt, keine erfolgreich fotografierten menschlichen Gesichter. Der Restore-Fehler wurde im Emulator ohne funktionierenden echten Play-Kaufpfad beobachtet; der gespeicherte Ablauf zeigt die verständliche technische Fehlermeldung und spätestens nach 8,83 Sekunden wieder die verfügbare Restore-Aktion. Daraus folgt keine erfolgreiche Kaufwiederherstellung.

Für den Tageswechsel wurde ausschließlich die isolierte Emulatoruhr kontrolliert auf den **11. Oktober** gesetzt und die App wieder geöffnet. In dieser Probe wurde die ADB-Identität des Emulators vorübergehend von UID 2000 auf UID 0 umgestellt. `clock-day-check.json` dokumentiert anschließend die Rückstellung auf **automatische Zeit 1 und ursprüngliche UID 2000**, mit wiederhergestelltem 10.10.-Datum. Keine private Gerätezeit wurde verändert. Der kontrollierte Versuch ersetzt keinen natürlichen Mitternachts-/Langzeitlauf; der Abschluss echter Kamerasessions an zwei Tagen wurde nicht geprüft.

Der signierte Releasebuild bestand `bundleRelease` einschließlich **R8/Ressourcenverkleinerung und `lintVitalRelease`**. Bundletool-Validierung und Signierungsprüfung bestanden ebenfalls. Die früheren fehlgeschlagenen Offline-/Cacheversuche bleiben historische Umgebungsdiagnosen und werden nicht als bestandene Builds gezählt. Positive Terminalausgaben und vollständige Unit-XMLs gehören zur zusätzlichen lokalen Prüfspur; Zugangsdaten und Rohlogs werden nicht veröffentlicht.

## Releaseartefakte und Hashes

| Artefakt | Größe | SHA256 |
|---|---:|---|
| Neues Debug-APK, `com.chargegeist.mew.debug`,14 | 36.588.048 Bytes | `b7805ed77ffb3f665d244309cdcb7579724b4498e9444e711a3aad2c7663f29b` |
| Neues signiertes Release-AAB, `com.chargegeist.mew`,14 | 20.613.143 Bytes | `a2bc62b84dcd0ba19b8f0b32b6d65c71c37ec0996cb508bf37530d32c285f6ae` |
| Lokales Universal-Test-APK aus AAB14 | 28.103.659 Bytes | `0fa10cc188d6fdcd857664b8895c4d5664030808339e7f031ce4937f86af33a1` |

Lokales AAB: `C:/Users/madde/Documents/OVERVIEW/analysen/mewtrack/runtime/update-20261010/source/app/build/outputs/bundle/release/app-release.aab`. `release-validation.json` bestätigt Package/Version, min26/target36, Bundletool-Validierung, verifizierte Signatur und **dasselbe Uploadzertifikat wie im vorhandenen AAB13**. Keine Schlüssel, Signierungsproperties oder Zertifikatsdateien werden in Overview veröffentlicht.

Die Ableitung eines lokalen Universal-APKs verändert dessen Verpackung und Signatur gegenüber einer Play-Auslieferung. Dieses APK wird nicht als Google-Play-Download oder echter 13→14-Play-Upgradeversuch bezeichnet. Die separate begrenzte native Release-Gegenprobe belegt **Installation und Onboardingstart** (`aab14-start.png`/`.xml`); die tieferen Debug-Gegenproben werden dem Release-APK nicht pauschal zugerechnet.

Anschließend wurden auch **Home, Settings/Privatheit und der Front-Kameraeinstieg** dieser AAB14-Ableitung nativ bedient. Die Kameraerlaubnis wurde erteilt; die isolierte virtuelle Kamera verwendete ein eigenes virtuelles Bild. Die Vorschau zeigte **„No face detected — move into frame“**, Schritt 1/3 FRONT, und die automatische Aufnahme blieb gesperrt. Dies belegt den Einstieg und das Erkennungsgate, **keine erfolgreiche Gesichtserkennung, Aufnahme aller drei Posen, Retake oder Speicherung**. Diese Kernprüfung bleibt offen. Das Gate allein beweist keinen Fehler der Kamera auf einem echten Nutzergerät.

## Originalübernahme

**Durchgeführt:** Die geprüften 32 ausgewählten Dateien wurden nach Baseline-/Hashabgleich in den Originalordner übernommen; frühere Arbeitsbaumänderungen bleiben erhalten. `original-sync.json` hält die ausgewählten Pfade, Branch **`codex/mewtrack-fixes-14`**, unveränderten Ausgangs-HEAD und abgelegtes Releaseartefakt fest. Die Appänderungen sind **uncommitted**; kein App-Commit oder App-Push wird behauptet.

Das uploadfertige Originalartefakt liegt unter **`C:/Users/madde/flutter_projects/MEWING 2.0/app/release/mewtrack-0.9.5-14.aab`**. Sein SHA256 ist bytegleich zum oben validierten isolierten Release-AAB: `a2bc62b84dcd0ba19b8f0b32b6d65c71c37ec0996cb508bf37530d32c285f6ae`.

## Google Play und englischer/deutscher Storeauftritt

**Belegt gespeichert und eingereicht, noch nicht als öffentlich veröffentlicht belegt:** Code14 wurde in der richtigen Console-App `com.chargegeist.mew` akzeptiert. Der Produktionsrelease ist mit **100 % Rollout und den bisherigen 178 Ländern** gespeichert. Der neue Storetitel **MewTrack: Mewing Photo Tracker** sowie Kurz- und Langbeschreibung wurden für **Englisch und Deutsch** gespeichert; nach „Bewerten“ bestätigte die Console **„Änderung gespeichert“**. Die gespeicherten Feldlängen betragen EN **30 / 79 / 1.510**, DE **30 / 75 / 1.702** Zeichen. Die exakten Texte stehen im [Storebericht](MewTrack-Store-2026-10-10.md). Der englische Nutzen lautet: geführte Front-/Seitenfotos aufnehmen, als private Sessions ablegen und verschiedene Zeitpunkte vergleichen.

Am **10.10.2026 gegen 22:31 MESZ** wurde der abschließende Einreichungsdialog bestätigt; die Console meldete **fünf zur Überprüfung gesendete Änderungen**: Produktionsrelease14/Rollout, hinzugefügter deutscher Eintrag mit den drei Textfeldern sowie englischer Name, englische Kurzbeschreibung und englische Langbeschreibung. Es gab keine Änderungszeile für Bilder, Icon oder Featuregrafik. Vor dem Senden waren automatische Vorabprüfungen mit einer angezeigten Restdauer von bis zu 14 Minuten noch im Gange; das ist keine zugesagte Freigabedauer. **Managed Publishing ist ausgeschaltet**, die Aktivierung erfolgt nach Google-Freigabe automatisch. Die bestätigte Einreichung ist kein Freigabe- oder öffentlicher Auslieferungsnachweis.

Die **lesende Nachkontrolle um 22:35 MESZ** im frischen Console-Tab bestätigt anschließend abgeschlossene Vorabprüfungen und **„Deine Änderungen werden jetzt überprüft.“** Code14 und die fünf EN-/DE-/Produktionsänderungen entsprechen weiterhin der Einreichung. Es wurde keine weitere Änderung vorgenommen oder erneut eingereicht. Google-Freigabe und öffentliche Aktivierung bleiben offen.

„Looksmaxing“ erscheint einmal als möglicher Routinekontext in der Langbeschreibung. Der Text macht keine medizinische, körperliche oder garantierte Fortschrittszusage. Er benennt das Dreisessions-Angebot und den optionalen einmaligen Lifetime-Kauf, ohne einen festen Preis zu erfinden. Keine belegte Wirkung auf Ranking, Downloads oder wiederkehrende Nutzung.

**Storebilder ausdrücklich erhalten:** vier Telefonbilder, fünf 7-Zoll-Tablet-Bilder, ein 10-Zoll-Tablet-Bild, Icon und Featuregrafik bleiben unverändert. Es gab **keinen Bild-Upload und keine Bildentfernung in der Console**. Die frühere Empfehlung, nicht zugeordneten Grid-/Overlay-Werkzeugen und Galleryfiltern entsprechend neue Darstellungen vorzubereiten, bleibt als historische Empfehlung nachvollziehbar; sie ist **nicht ausgewählt und wird nicht umgesetzt**. Der Nutzerauftrag umfasst hier die freigegebenen Texte und den Release, keinen neuen Grafikauftritt.

Separat wurden lokal vier HTML-Marketingansichten vorbereitet und drei PNG-Entwürfe gerendert. Neun Illustrationen wurden ausschließlich für lokale Debug-Demos vorbereitet; die jeweiligen Avatare bleiben über die drei Datumsgruppen identisch und behaupten keinen körperlichen Fortschritt. Diese Marketingvorbereitung hat **weder die historischen Testfixtures und Beleg-PNGs noch die Consolebilder verändert**. Sie liegt außerhalb des gewählten Veröffentlichungsumfangs und wurde nach der Nutzerpräzisierung gestoppt.

Noch festzuhalten sind Google-Freigabe und öffentliche Aktivierung. Lokale Tests, akzeptiertes Bundle, gespeicherter Produktionsrelease, gespeicherte Storetexte und bestätigte Einreichung behalten jeweils ihren eigenen Belegumfang.

## Lokale Belegspur und spätere unabhängige Prüfung

Die ausführlichen Rohbelege bleiben im ignorierten Ordner `analysen/mewtrack/runtime/update-20261010/`:

- `baseline.json`, `source_diff.py`, `diff-manifest.json`, `original-sync.json`: ursprüngliche 80 Eingaben, Kopie/Originalvergleich, ausgewählte Dateien und spätere Originalübernahme.
- `source/app/build/test-results/testDebugUnitTest/TEST-*.xml`: vollständige Unit-Suite-Ergebnisse.
- `unit-build-output.log` und `native-test-output.log`: nachträglich gespeicherte Ausschnitte der positiven Terminalausgaben; **keine vollständigen Build-/Instrumentation-Protokolle**.
- `debug14-compare-from5.*`, `debug14-compare-selection.*`, `debug14-compare-free9.*`: tatsächlich bediente Compare-Auswahl mit künstlichen Sessions.
- `debug14-guidance-done.*`, `debug14-day11-resume.*`, `clock-day-check.json`: kontrollierte Tages-/Resumeprobe und Rückstellung der Emulatoruhr/ADB-Identität.
- `restore-check.json`, `debug14-restore-error.*`, `debug14-restore-terminal.*`: technische Restore-Fehlermeldung und beendeter Ladezustand.
- `release-validation.json`, `release14-manifest.xml`: Releaseidentität, Hash-/Signierungsvergleich und Bundlevalidierung.
- `aab14-start.*`, `aab14-home.*`, `aab14-settings-privacy.xml`, `aab14-camera-permission.*`, `aab14-camera.xml`: separate native AAB-Ableitungsprobe, Home-/Privatheitstexte sowie begrenzter virtueller Kameraeinstieg ohne erfolgreichen Drei-Posen-Check-in.
- `console-review-final.png` und zugehöriger DOM-Text: lesende Console-Nachkontrolle 22:35 MESZ mit laufender Google-Überprüfung nach abgeschlossenen Vorabprüfungen.
- `store/`: lokale kopierfertige EN-/DE-Texte und separat vorbereitete, gestoppte Grafikentwürfe. Keine hochgeladenen Storebilder daraus ableiten.

Die nativen Bild-/UI-Dumps sind lokale Android-Emulatoraufnahmen, `kind: local_android_emulator_capture`, mit der jeweils zugeordneten Debug- oder lokal testsignierten Release-Package-ID. Synthetische Debugsessions und virtueller Kameraeingang behalten ihre eigene Herkunft. Die separate Consoleaufnahme belegt eine Browser-Nachkontrolle. Keine dieser Aufnahmen wird als reales Nutzerfoto, Play-Auslieferung auf einem Gerät oder Testerreaktion ausgegeben. Die zusätzlichen Rohdateien, Apppakete, Schlüssel, Emulatorzustände und Logs sind nicht öffentlich verlinkt.

Ein externer Chat kann mit dieser öffentlichen Zusammenfassung Auftrag, Umfang, Methoden und Schlussfolgerungen beurteilen. Für eine eigene technische Wiederholung benötigt er separat die lokalen Appquellen, die konkreten Binärartefakte und die Prüfspur. Hauptgrenzen bleiben **kein echtes Android-Nutzergerät, kein vollständiger Kamera-/Retake-/Speicherablauf mit Gesicht, kein realer Kauf/Restore, kein Play-Upgrade und keine nachgewiesene Download-/Retentionwirkung**.
