# MewTrack – native Nachprüfung und Versionsklärung

Stand: **10.10.2026**. Dieser Nachtrag ergänzt die [Pilotanalyse vom 09.10.](MewTrack-Pilotanalyse.md), [Quellprüfung](MewTrack-code-review.md), [visuelle Prüfung](Visual-review.md) und [damalige Testumgebung](TEST-UMGEBUNG.md). Die historischen Berichte bleiben unverändert und behalten ihre damaligen Grenzen. Die frühere Aussage „keine native Bedienung/keine bestandenen Tests“ beschreibt den Pilot, nicht diese spätere Prüfung.

**Ergebnis:** Im isolierten Android-Debugtest wurden eine falsche Restore-Fehlermeldung und die ignorierte Compare-Ausgangssession tatsächlich beobachtet. Eine zusätzliche kontrollierte Guidance-Tagesprobe bestätigte veralteten Home-Zustand nach Resume. Normales Löschen funktionierte, der Aufnahmebutton war erreichbar. **45 vorhandene JVM-Tests bestanden.** Eine getrennte Binary-Prüfung bestätigt Compare-Vorauswahl, Restore-Fehlerklassifikation und den unsichtbaren Review-Speicherfehler außerdem direkt im vorhandenen lokalen Release-AAB. Das ist kein vollständiger Kamera-, Kauf- oder Play-Release-Nachweis.

**Keine Umsetzung:** Originalcode, Store und MewTrack-Releases wurden nicht verändert. Die vier bestehenden MewTrack-Maßnahmen bleiben offen; die teilweise ausgeführte native Prüfrunde ist `in_progress`, keine Maßnahme wird durch diesen Nachtrag als erledigt gezählt. Between bleibt nur inventarisiert und wurde nicht geprüft. Keine neuen Download-, Retention- oder Umsatzwerte erhoben.

## Identität und getrennte Prüfstände

Maßgeblicher Originalordner: `C:/Users/madde/flutter_projects/MEWING 2.0/app`. Kotlin-/Compose-Quellen liegen darunter in `app/src/main/java/com/mewing/jawline/`. Die zwei weiteren lokalen MewTrack-Implementierungen wurden nicht als zusätzliche Storeprodukte oder maßgebliche native Quelle behandelt.

| Stand | Identität | Tatsächlicher Beleg und Grenze |
|---|---|---|
| Ursprünglicher Git-HEAD | `e0729e4c20663bd34c424c5fb92155b8395259c6`, Commit 18.06.2026; **0.9.3 / Code 12**, target/compile 35 | Lesend mit dem heutigen Arbeitsbaum verglichen. Kein neuer Build dieses HEAD. Seine Version ist nicht die Version des heute geprüften Arbeitsbaums. |
| Heutiger Arbeitsbaum | `com.chargegeist.mew`, **0.9.4 / Code 13**, min 26, target/compile 36; AGP 8.10.1, Billing 9.1.0 | Vier bereits vorhandene lokale Änderungen gegenüber HEAD. Kein Quellfix durch diese Prüfung. |
| Neuer isolierter Debugbuild | `com.chargegeist.mew.debug`, **0.9.4-debug / Code 13**, target 36 | Aus einer isolierten Kopie des aktuellen Arbeitsbaums gebaut und tatsächlich nativ bedient. Separate Package-ID und ausschließlich künstliche Daten. Kein Produktions-/Play-Binary. |
| Vorhandenes lokales Release-AAB | `com.chargegeist.mew`, **0.9.4 / Code 13**, target/compile 36; Datei vom 28.08.2026 | Nicht neu kompiliert. Manifest, Dependency-Metadaten, eigene R8-Zuordnung und aktive DEX-Pfade gelesen. Drei konkrete Fehlermechanismen im enthaltenen Releasecode bestätigt. |
| Lokales Universal-Test-APK aus diesem AAB | `com.chargegeist.mew`, **0.9.4 / Code 13** | Nur vorhandenes AAB verpackt und mit neuer lokaler Testsignatur versehen. Beide DEX-Dateien bytegleich erhalten. Für einen weiteren Gegencheck bereitgestellt, in dieser Nachprüfung **nicht installiert oder bedient**. Kein Play-Download. |
| Zuvor zugeordneter Play-Stand | Package/Release **0.9.4 / 13** passen zur bisherigen Console-/Paketzuordnung | Die öffentliche Storeseite wurde am 10.10. erneut angesehen. **Vollständige Source-/Play-Binarygleichheit bleibt unbelegt.** Metadaten- oder Versionsgleichheit reicht dafür nicht. |

Die vier vorhandenen Änderungen liegen in `app/build.gradle.kts`, `gradle/libs.versions.toml`, `app/src/main/AndroidManifest.xml` und `app/src/main/java/com/mewing/jawline/data/billing/EntitlementRepository.kt`: SDK/Version und AGP/Billing wurden aktualisiert, KTX-Abfragen durch Java-Callback-Adapter ersetzt, automatische Billing-Wiederverbindung/Offer-Token ergänzt und die Kamera als optionales Gerätefeature markiert. Der Diff umfasst **62 Einfügungen und 25 Löschungen**. Diese Änderungen beheben die drei untersuchten Compare-/Restore-/Review-Mechanismen nicht.

Compare-, Capture-, Home-, Settings- und Paywall-Dateien sowie MainActivity sind gegenüber HEAD identisch, wenn nur CRLF/LF normalisiert werden. Insbesondere die drei unten genannten Fehlermechanismen sind deshalb keine neu eingeführten Effekte des heutigen Debugbuilds. Dateizeiten der vier Änderungen und vorhandenen Compileoutputs passen zum lokalen Build vom 28.08.; **Dateizeiten sind Indizien, keine signierte historische Quellsicherung**.

## Build, Tests und native Testumgebung

Die isolierte Kopie liegt lokal unter `analysen/mewtrack/runtime/native-unit-20261009/`. **80 ursprüngliche Eingabedateien** waren vor und nach dem Build per SHA256 identisch mit dem Originalarbeitsstand. Keine Produktionssignatur oder Zugangsdaten wurden kopiert.

Der gezielte Offlineversuch beseitigte den früheren AndroidLocationsBuildService-Konfigurationsfehler durch eigene vorhandene Android-/AVD-/Temppfade, scheiterte dann an fehlenden gecachten AAR-Abhängigkeiten. Anschließend gelang eine einmalige Dependency-Auflösung über die bereits konfigurierten offiziellen Google-/MavenCentral-Repositories in einen eigenen Runtime-Cache. Keine SDK-/Toolinstallation und kein nachgewiesener Appquellfehler aus der vorherigen Buildblockade.

`assembleDebug` und `testDebugUnitTest` liefen erfolgreich. **45 Tests, 0 Fehler, 0 Fehlschläge, 0 übersprungen** in fünf vorhandenen Suiten:

| Vorhandene Suite | Tests | Geprüfter Teilbereich |
|---|---:|---|
| `DateFormattingTest` | 10 | Datumsformatierung |
| `EntitlementGateTest` | 15 | Freischaltungs-/Gratisregeln |
| `CaptureSlotsTest` | 6 | Aufnahme-Slots und Reihenfolge |
| `DailyGuidanceTest` | 10 | Guidance-Tageslogik |
| `HomeUiStateTest` | 4 | Home-Zustandslogik |

Dies sind **JVM-Logiktests**, keine instrumentierten Android-Tests und kein Kauf-/Kamera-Integrationstest. Die vorhandenen `androidTest`-Dateien wurden nicht ausgeführt. Keine neuen Tests ins Original geschrieben.

Debug-APK: **36.555.280 Bytes**, SHA256 **`334c6545a1a0be14c9ca2a74224bcdc67dd740a8afc3b7ac5f2b33c7eda49e21`**. Package/Version/targetSdk wurden mit aapt2 bestätigt. Laufzeit war eine frische isolierte Android-34/google_apis/x86_64-AVD, 1080×2400 Pixel, Dichte 420 und Standardschrift. Kein angeschlossenes Nutzergerät, keine privaten Appdaten, kein realer Kauf und keine Person fotografiert.

Für Gallery/Compare/Löschung wurde ausschließlich die vorher leere Debug-Sandbox mit **drei vollständigen Sessions vom 1., 5. und 9. Oktober 2026** ergänzt. Neun geometrische PNGs tragen gut sichtbar `SYNTHETIC TEST`, Datum, Pose und Session-ID. Diese Fixtures belegen die Bedienung vorhandener Sessions; **sie stammen nicht aus einem erfolgreichen Kameradurchlauf**. UI-Eingaben erfolgten anhand frisch beobachteter Bounds. Der Nachprüfer gab den laufenden Emulator anschließend an den Hauptagenten zurück; dessen spätere Guidance-Tagesprobe ist unten separat zugeordnet.

## Befunde, Gegenproben und verbleibende Grenzen

### 1. Restore: technischer Fehler wird als fehlender Kauf ausgegeben

**Nativ am Debugbuild bestätigt:** Auf dem Emulator ohne verfügbaren Play-Billingdienst endete die Abfrage nach wenigen Sekunden mit **„No purchase found“**. Das zugehörige App-Log meldete einen technischen Billing-Verbindungs-/Queryfehler. Der aktive `EntitlementRepository.restorePurchases()` gibt im Query-Fehlerfall den lokal gespeicherten `is_pro`-Boolean zurück. `SettingsViewModel.restorePurchases()` und `PaywallViewModel.restorePurchases()` übersetzen false in die Kauf-fehlt-Meldung. Der Schutz eines vorhandenen Offline-Entitlements ist sinnvoll; technischer Fehler, erfolgreich abgefragter fehlender Kauf und vorhandene Freischaltung brauchen dennoch getrennte Ergebniszustände.

**Auch im lokalen AAB bestätigt:** Der aktive DEX-Fehlerzweig loggt „Restore query failed“, liest `is_pro` und ruft den Boolean-Callback auf; die UI-Zweige enthalten dessen Übersetzung zu „No purchase found“. Dieselbe Klassifikation bestand schon in HEAD mit den früheren KTX-Abfragen. Die Billing-9.1.0-Automatik korrigiert diesen eigenen Ergebnisfehler nicht.

**Gegenfall/Grenze:** Ein endloser Spinner wurde in dieser nativen Sitzung **nicht** beobachtet. Der separate aktive `ensureConnected()`-Fehlerpfad ruft seine Fortsetzung nur nach erfolgreichem Setup auf und kann Ladezustände offenlassen; das bleibt hier ein Quellbefund, kein reproduzierter Endlosspinner. Kein echter Kauf oder erfolgreicher Play-Restore.

### 2. Lifetime-Zustand und Preis bleiben gezielte Risiken

MainActivity, Home, Settings und Paywall erzeugen eigene `EntitlementRepository`-Instanzen und StateFlows. `grantPro()` aktualisiert den eigenen Flow; kein gemeinsamer Provider oder Preferences-Listener wurde gefunden. Resume aktualisiert in MainActivity nur deren Instanz. **Sofortige Freischaltung in bereits geöffneten anderen Screens bleibt ein Synchronisationsrisiko**, kein Nachweis, dass sämtliche Kaufabläufe fehlschlagen.

Die Paywall verwendet ohne geladene Produktdaten einen festen **„3.99 € one-time“**-Fallback; die tatsächliche aktuelle regionale Play-Preisabfrage wurde nicht getestet. Kleiner Schritt: geladenen Play-Preis und Kaufbereitschaft gemeinsam anzeigen, Fehler und erneutes Laden verständlich behandeln. Kein SDK-Upgrade allein auf Verdacht begründet.

### 3. Compare ignoriert die gewählte Ausgangssession

**Nativ am Debugbuild bestätigt:** Aus dem Detail der künstlichen Session **5. Oktober** öffnete „Compare with another date“ die Sessions **1. und 9. Oktober**. Die Navigation übergibt eine Session-ID; `CompareScreen(preselectedEntryId)` nimmt sie an, verwendet sie jedoch nicht für Auswahl/Zustand. `CompareViewModel` initialisiert älteste/neuste vollständige Session.

**Auch in HEAD und lokalem AAB bestätigt:** Die betreffenden Quellen sind gegenüber HEAD unverändert. Die AAB-eigene R8-Zuordnung und vollständige DEX-Methode zeigen: Der Session-ID-Parameter wird nur für die Compose-Wiederaufrufclosure weitergereicht, nicht an ViewModel-Auswahl oder gerenderte Daten. Das ist ein aktiver Kontroll-/Datenflussbefund und nicht nur ein gefundener Text.

**Gegenfall/Grenze:** Side-by-side und Front/Left/Right waren im nativen Vergleich sichtbar und den tatsächlich ausgewählten künstlichen Sessions korrekt zugeordnet. Kein genereller Compare-Defekt. Der vorhandene Vollbildweg wurde nicht separat bedient. Kleinster Fix: die aus dem Detail übergebene Ausgangssession verlässlich vorauswählen.

### 4. Guidance bleibt bei kontrolliertem Tageswechsel bis Neustart veraltet

**Zusätzliche native Debugprobe durch den Hauptagenten:** Am 10.10. wurde Guidance mit „Got it“ bestätigt; Home zeigte **„Done for today“**. Ausschließlich die Uhr des isolierten Emulators wurde anschließend über den normalen Android-CLI-Befehl `cmd alarm set-time` auf den 11.10. gestellt. **Keine Rootrechte und keine Änderung privater Gerätezeit.** Nach Resume blieb im selben Prozess **PID 4415** „Done for today“ stehen. Erst Force-stop/Neustart, nun **PID 5021**, zeigte den neuen Guide **„Avoid force“** mit „Got it“.

Das passt zum einmalig erzeugten `todayKey` und Guidance-Tipp in `HomeViewModel`. **Veralteter Guidance-Zustand bei Resume ist damit nativ reproduziert.** Die gespeicherte Markierung ist nicht als verloren nachgewiesen; die Anzeige erneuerte sich beim Neustart.

**Grenze:** kontrollierter Debug-/Emulatordatumsfall, kein natürlicher Langzeittest über Mitternacht, kein echter Kameradurchlauf/Session-Abschluss und nicht sämtliche Datumszustände. Das aus AAB13 abgeleitete Release-Test-APK wurde nicht bedient; kein nativer Release-Tageswechselnachweis. Kleiner Schritt: lokalen Tag und abhängige Home-Zustände bei Resume/Datumswechsel neu bestimmen.

### 5. Capture-Schutz vorhanden; Review und Speicherfehler gezielt verbessern

Die Quelle verwendet feste Pose-Slots und verlangt alle drei Fotos vor dem Speichern; Eintrag und Fotometadaten werden gemeinsam in einer Datenbanktransaktion gespeichert. Die sechs CaptureSlots-Tests bestanden. **Dies ersetzt keine native Retake-/Kamerasave-Prüfung.**

Auto Capture ließ sich in Settings ausschalten; der Schalter war anschließend tatsächlich false. Die Emulatorkamera zeigte kein erkanntes Gesicht. „No face detected — move into frame“ und der deaktivierte manuelle Auslöser passen zum aktiven Gesichtsgate; ein fehlender Blind-Auslöser ist dadurch kein Fehler. **Review, Retake und vollständiges Speichern über die Kamera wurden nicht erreicht**, Code wurde dafür nicht umgangen.

**Zusätzlicher aktiver Fehlerpfad:** `CaptureViewModel.saveEntry()` setzt beim Speicherfehler `errorMessage`. Der `showReview`-Zweig in `CaptureScreen()` übergibt der Review-Ansicht keinen Fehlerzustand und kehrt vor dem anderen Snackbarzweig zurück. Der Mechanismus besteht bereits in HEAD und ist auch im AAB-DEX bestätigt: Review-Aufruf ohne Fehlermeldung, anschließender Return; die Save-Coroutine setzt tatsächlich den Fehlertext. **Kein Speicherfehler nativ erzeugt und kein realer Datenverlust behauptet.** Kleiner Schritt: Fehlermeldung und Wiederholen direkt im Review anbieten.

`ReviewScreen()` verwendet eine nicht vertikal scrollbare Column und kleine, zugeschnittene 110×160-dp-Vorschaubilder ohne Vollbildklick. Antippbares Vergrößern und ein Test mit großer Schrift wären sinnvoll. Tatsächliches Abschneiden oder unerreichbares Speichern auf einem kleinen Gerät wurde hier nicht beobachtet.

### 6. Normales Löschen funktioniert; Fehlerbehandlung und Texte bleiben offen

**Erfolgreiche native Gegenprobe:** Löschen der künstlichen Session vom 5. Oktober entfernte den Gallery-Eintrag und alle drei zugehörigen PNGs aus der Debug-Sandbox. Die beiden übrigen Sessions und deren sechs Dateien blieben erhalten. Dies bestätigt den normalen Löschweg.

**Weiterhin Quellrisiko:** `ImageStorageRepository.deleteFile()` liefert einen Boolean, der vor Entfernung der Datenbankzeilen nicht ausgewertet wird. Cleanup zählt einen ungeprüften `file.delete()` als Entfernung; Detail/Settings erhalten keine verlässliche Fehlerauskunft. **Keine fehlgeschlagene Löschung oder zurückgebliebenes Foto erzeugt.** Kleiner Schritt: Rückgaben auswerten und einen fehlgeschlagenen Vorgang sichtbar machen.

Onboarding nennt „unless you export them“, aber im geprüften aktiven Routensatz/Quellbestand fehlt eine Export-/Share-Funktion. Fotos liegen appprivat unter `filesDir/captures`, Backup ist deaktiviert; Kauf-Restore stellt keine Fotos wieder her. Exporttext entfernen oder eine bewusst begrenzte echte Exportfunktion umsetzen. Keine Deinstallations-/Datenverlustprobe.

„Entirely offline“ ist zu weit: Billing und Google-Font-Provider haben Onlineabhängigkeiten; das Release-Manifest enthält Internet-/Netzwerkrechte. Eigener Foto-Upload-/Analytics-Code wurde in den geprüften aktiven Dateien nicht gefunden. **Keine vollständige Netzwerkprüfung und keine Behauptung eines Fotouploads.** Lokal gespeicherte Fotos und Onlineabhängigkeiten für Kauf/Wiederherstellung getrennt und konkret beschreiben.

### 7. Storeabbildungen weiterhin mit tatsächlichen Funktionen abgleichen

Der Hauptagent sah am 10.10. die aktuelle öffentliche Play-Seite erneut: Update 28.08.2026; Bild 2 zeigt weiterhin **Overlay/Grid/Guide Lines**, Bild 3 **All/Front/Left/Right**. Aktive Quelle und tatsächlich bediente Debugansichten bieten diese Werkzeuge an den dargestellten Stellen nicht; Gallery zeigt Sessionkarten. **Das ist kein Laufzeitnachweis einer Fehlfunktion des nicht bedienten Play-Binaries.** Zuerst die beabsichtigte Releasefunktionalität und wenige echte Storebilder zusammenführen; nicht allein zur Rettung alter Bilder einen großen neuen Funktionsumfang bauen.

Das Dreisessions-Gratislimit ist durch die Logiktests nicht als Produktentscheidung bestätigt oder widerlegt. Langfristiger Vergleichsnutzen, freiwillige Wiederkehr und passende Gratisgrenze bleiben echte Nutzerfragen. Historische Store-/Console-Kennzahlen behalten ihre eigenen Zeiträume; dieser Nachtrag erzeugt keine neue Erfolgsmessung.

## Wie weit die Release-/Quellzuordnung trägt

Vorhandenes Original-AAB: `C:/Users/madde/flutter_projects/MEWING 2.0/app/app/build/outputs/bundle/release/app-release.aab`, **20.584.681 Bytes**, Dateizeit 28.08.2026, 19:30:58 +02:00. SHA256 vor/nach Analyse und Verpackung unverändert: **`eb6359a1f29ac328766a1e4f3369574939551e21b9c2ac7b75a8331432be68d6`**.

Die AAB-eigenen Metadaten belegen **AGP 8.10.1**, **Billing 9.1.0** und **R8 8.10.24**. Dependency-Protobuf wurde gelesen; Billing ist deshalb nicht nur aus der heutigen TOML übernommen. Die AAB-eigene `proguard.map` ist bytegleich mit dem vorhandenen lokalen Release-Mapping. Vorhandene Release-Kotlinclasses enthalten die heutigen Callback-Adapter/Offer-Token; Compilecachepfade passen zu den untersuchten Dateien. Diese vorhandenen Outputs sind **keine vollständige historische Quellinhaltssicherung**.

Zusätzlich wurden vorhandene Release- und heutige Debug-Kotlinclass-Instruktionen für sieben relevante Klassen verglichen: `EntitlementRepository`, `CompareScreenKt`, `CompareViewModel`, `CaptureScreenKt`, `CaptureViewModel`, `SettingsViewModel`, `PaywallViewModel`. Sie stimmen nach enger Normalisierung von Constant-Pool-Indizes und Varianten-Modulnamen überein. Es wird keine pauschale Class-Bytegleichheit behauptet: Von 265 gemeinsam vorhandenen Classdateien waren 97 bytegleich und 168 byteverschieden. Die gezielte Gegenprobe stützt die drei beschriebenen Mechanismen, nicht sämtliche Appfunktionen.

Das bereitgestellte AAB-Test-APK besitzt **28.087.275 Bytes**, SHA256 **`197ae205ff9d189c8dc52c4cbe8aa430453fd8a4098f454a2b18403e9aaf78e7`**. Beide DEX-Dateien sind exakt aus dem AAB erhalten; Manifest-/Ressourcenverpackung und lokale Testsignatur unterscheiden sich von einer Play-Auslieferung. **Kein echter Play-Install, kein Kauf und keine vollständige Source-/Play-Binaryidentität daraus ableiten.**

## Konkrete Quellen für ein weiteres technisches Review

Die folgenden Pfade sind relativ zur oben genannten aktuellen Kotlinbasis. Funktionsnamen und Zeilen wurden am 10.10. aus den aktiven Dateien gelesen; sie sind Momentaufnahmen, keine dauerhaft gültigen Zeilennummern nach späteren Änderungen.

| Thema | Aktive Datei/Funktion und gezielte Fundstelle |
|---|---|
| Restore-Ergebnis und Reconnect | `data/billing/EntitlementRepository.kt`: `ensureConnected()` ab 91; `restorePurchases()` ab 288, Queryfehler bei 294–302; `grantPro()` ab 281. `ui/settings/SettingsViewModel.kt`: `restorePurchases()` ab 40; `ui/paywall/PaywallViewModel.kt`: `restorePurchases()` ab 72. |
| Getrennte Lifetime-Flows | Repository-Erstellung in `MainActivity.kt`, `ui/home/HomeViewModel.kt`, `ui/settings/SettingsViewModel.kt`, `ui/paywall/PaywallViewModel.kt`; `EntitlementRepository.grantPro()`. MainActivity aktualisiert bei Resume nur die eigene Instanz. |
| Guidance/Tag | `ui/home/HomeViewModel.kt`: `todayKey` bei 35, Tipp bei 39; Zustandsberechnung 48–62; `markGuidanceDone()` ab 70. |
| Compare | `ui/navigation/AppNavGraph.kt`: Session-ID-Übergabe 143/151–154; `ui/compare/CompareScreen.kt`: `CompareScreen()` ab 33, Parameter bei 34; `ui/compare/CompareViewModel.kt`: Initialauswahl 33–34, `selectEntry()` ab 48. |
| Speichern/Review | `ui/capture/CaptureViewModel.kt`: `saveEntry()` ab 211, Speicherfehler bei 238–239; `ui/capture/CaptureScreen.kt`: `CaptureScreen()` ab 52, Review-Return 81–90, alternativer Fehlerzweig 139–149, `ReviewScreen()` ab 355. |
| Löschung | `data/storage/ImageStorageRepository.kt`: `deleteFile()` ab 22, `deleteFiles()` ab 30; `data/repository/ProgressRepository.kt`: `deleteEntry()` ab 67, `deleteAll()` ab 78; `data/repository/StorageCleanupRepository.kt`: `removeFilesMissingDbRows()` ab 64; `ui/detail/EntryDetailViewModel.kt`: `deleteEntry()` ab 44. |
| Datenschutz-/Exporttext und Gestaltung | `ui/onboarding/OnboardingScreen.kt`, `ui/settings/SettingsScreen.kt`, `ui/theme/Type.kt`, `ui/theme/Color.kt`; aktive Texte, Provider und Farben im beschriebenen Arbeitsstand. |
| AAB-Kontrollfluss | AAB-eigene R8-Mappingdatei: CompareScreenKt → `t1.l`, Restore-Coroutine → `m1.i`, CaptureScreenKt → `r1.E`, Capture-Save-Coroutine → `r1.G`. Die detaillierten DEX-Auszüge bleiben lokal; die bestätigten Kontroll-/Datenflüsse sind oben zusammengefasst. |

## Herkunft und Zugang der zusätzlichen Belege

Dieser Bericht ist die **öffentliche bereinigte Zusammenfassung**. Die ausführlichen Arbeitsnotizen sind ausschließlich lokal im ignorierten Scratch vorhanden, nicht als extern abrufbare Dokumente verlinkt:

- `analysen/mewtrack/runtime/reaudit-20261010/MewTrack-Nachpruefung.md`: unabhängige Quell-/native Nachprüfung, Build/JVM-Ergebnisse, künstliche Sessionherkunft und Screenshotmanifest.
- `analysen/mewtrack/runtime/reaudit-20261010/Versionsklaerung.md`: HEAD/Arbeitsbaum/AAB-Zuordnung, drei aktive DEX-Fehlerpfade und vom Hauptagenten übermittelte Guidance-Tagesprobe.
- `analysen/android/runtime/reaudit-20261010/Android-Nachpruefung.md`: gemeinsame damalige Android-Nachprüfung; die spätere Versions-/Guidance-Ergänzung steht in der vorgenannten Versionsnotiz.

Wesentliche tatsächliche Debugaufnahmen heißen `mew-restore-wait.png`, `mew-fixture-compare-middle.png`, `mew-fixture-delete-confirm.png`, `mew-fixture-deleted-gallery.png`, `mew-home-fresh.png`, `mew-settings-fresh.png`, `mew-capture-manual.png`. Es sind lokale Android-Emulatoraufnahmen vom 10.10., `kind: local_android_emulator_capture`, Package `com.chargegeist.mew.debug`, obiges Debug-APK, 1080×2400. Das lokale Manifest hält Datei/SHA256/Dateizeit fest. Bei `fixture`-Aufnahmen sind die Bildinhalte eingespeist; die dargestellte Oberfläche wurde tatsächlich bedient. Hauptagenten-Aufnahmen aus der vorausgehenden Sitzung bleiben davon getrennt.

**Keine Apppakete, Keystore-/Signaturdaten, privaten IDs, Emulatorzustände, Rohlogs oder Rohdisassemblierungen werden veröffentlicht.** Ein externer Chat kann diesen Bericht und die unveränderten öffentlichen Pilotquellen lesen; auf den zusätzlichen Scratch hat er ohne gesonderte lokale Bereitstellung keinen Zugriff. Die Zusammenfassung darf nicht als eigenständige Einsicht in nicht bereitgestellte Rohbelege ausgegeben werden.

## Eigenes Optik- und Bedienurteil

Die dunklen Karten, klaren Hauptüberschriften, der kräftige grüne CTA und die geordnete Hauptnavigation bilden eine verständliche Grundgestaltung. Ein vollständiger Neubau ist nicht begründet. Im tatsächlich bedienten Home/Settings/Compare waren wichtige graue Hilfstexte schwer lesbar; schwarze Uhr/Statusicons verschwanden auf dunklem Grund nahezu. Settings zeigte auffällig viel Leerraum oberhalb der Überschrift; seine technische Ursache wurde nicht isoliert.

Der Aufnahmebutton war auf dem geprüften Standardviewport sichtbar und bedienbar. Eine pauschal fehlende oder unerreichbare Hauptaktion ist damit **nicht bestätigt**. Kleine Prioritätsverbesserung: CTA vor Guidance und näher am Tagesstatus. Große Schrift/kleiner Viewport blieben ungeprüft.

Die aktuelle Farbgegenprüfung ergibt für `TextTertiary #5C6470` auf `Background #0D0F12` **3,2096:1**, auf `SurfaceRaised #1A1D22` **2,8259:1**. Die vorhandene Sekundärfarbe `#9AA3AE` erreicht auf Background **7,5162:1**; bodySmall/labelSmall sind 12/11 sp. Das ist eine konkrete Farb-/Typografieprüfung, keine vollständige Barrierefreiheitsbewertung.

Wenige gestalterische Schritte: informative Grau-Texte aufhellen, Systemstatusicons hell schalten, Hauptaktion vor Guidance, Settings-Abstand verkleinern. Reviewbilder antippbar vergrößern ist zusätzlich durch die Quelle begründet, hier jedoch nicht in einer erreichten nativen Reviewansicht gesehen. Keine Wirkung auf Downloads oder Wiederkehr aus diesem Urteil ableiten.

## Befund → kleiner nächster Schritt → offene Grenze

| Befund | Empfohlener kleiner Schritt | Offene Grenze |
|---|---|---|
| Restore nennt technischen Fehler „No purchase found“; eigener Reconnect kann Abschluss verlieren | Getrennte Ergebnisse für Fehler/kein Kauf/Freischaltung; jeden Ladezustand beenden, erneutes Laden anbieten | Echter Play-Testkauf/Restore und der andere Reconnect-Fehlerfall nicht durchgespielt |
| Getrennte Lifetime-Flows und fester Fallbackpreis | Gemeinsamen Entitlement-State und Preis aus geladenen Play-Daten verwenden | Sofortige Freischaltung in bestehenden Screens nicht mit echtem Kauf geprüft |
| Compare ignoriert Ausgangssession | Übergebene Session tatsächlich vorauswählen und vorhandene Auswahlwege erhalten | Native Beobachtung mit künstlichen Debug-Sessions; kein Play-Binary bedient |
| Guidance bleibt nach kontrolliertem Datum-/Resumewechsel alt | Tag und abhängige Home-Zustände bei Resume/Datumswechsel erneuern | Kein natürlicher Mitternachtslauf, Session-Abschluss oder nativer Release-Zeitwechsel |
| Review erhält Speicherfehler nicht; kleine zugeschnittene Bilder | Fehler/Wiederholen direkt in Review; antippbare Vergrößerung | Quell-/AAB-Befund; Kameradreiersatz, Retake und echter Speicherfehler offen |
| Normales Löschen funktioniert, Rückgaben bleiben ungeprüft; Export-/Offlinetext zu weit | Löschfehler sichtbar behandeln; Export und Onlineabhängigkeiten ehrlich formulieren | Löschfehler, Deinstallation und vollständiger Netzwerkfluss nicht geprüft |
| Graue Hilfstexte/dunkle Statusicons; CTA erreichbar | Kontrast und Statusicons verbessern; CTA vor Guidance, Settings-Abstand kleiner | Kleine Displays/große Schrift und Reviewlayout nicht nativ geprüft |
| Store zeigt nicht zugeordnetes Werkzeugangebot; echter Wiederkehrnutzen offen | Wenige reale Storeansichten zum beabsichtigten Release; später kleiner freiwilliger Nutzerversuch | Kein öffentlicher Releasefix, keine Testeransprache, kein gemessener Nutzungs-/ASO-Effekt |

Die Nachprüfung stärkt die Begründung für einen **kleinen gezielten Updateumfang**. Sie repariert selbst nichts und schließt weder alle nativen Prüfungen noch die vier bestehenden Maßnahmen ab.
