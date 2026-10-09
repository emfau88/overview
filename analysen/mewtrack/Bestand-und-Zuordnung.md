# MewTrack – vorläufige Quellen- und Releasezuordnung

Stand: **09.10.2026**. Vorbereitung für die anschließende Produktprüfung. Ausschließlich Quellen und vorhandene Artefakte gelesen; keine Änderung am Original, kein Build, kein Testlauf, keine Installation und keine Veröffentlichung. **Dies ist noch keine abgeschlossene Produkt-, UX- oder Store-Analyse.**

## Vorläufig maßgebliche Basis für Release 13 (0.9.4)

Der Nutzer beziehungsweise Hauptauftrag nennt als Console-Release **13 (0.9.4)**. Dazu passt die native Android-Codebasis am stärksten:

- Projekt-/Dokumentationsordner: `C:\Users\madde\flutter_projects\MEWING 2.0`.
- **Gradle-Projektwurzel:** `C:\Users\madde\flutter_projects\MEWING 2.0\app`.
- **Android-Appmodul:** `C:\Users\madde\flutter_projects\MEWING 2.0\app\app` – der doppelte `app`-Abschnitt im vollständigen Modulpfad ist richtig.
- Modul-Builddatei `app\app\build.gradle.kts`: `applicationId = "com.chargegeist.mew"`, `versionCode = 13`, `versionName = "0.9.4"`.
- Appname in `app\app\src\main\res\values\strings.xml`: **MewTrack: Jawline Tracker**.
- Stack aus aktiver Konfiguration: Kotlin, Jetpack Compose, CameraX, ML Kit, Room und Play Billing; minSdk 26, target-/compileSdk 36. Namespace `com.mewing.jawline` ist vom veröffentlichten Application-ID-Paket zu unterscheiden.
- Vorhandenes Bundle: `C:\Users\madde\flutter_projects\MEWING 2.0\app\app\build\outputs\bundle\release\app-release.aab`, **20.584.681 Bytes**, lokale Dateizeit **28.08.2026, 19:30:58**. Das ist ein Dateisystembefund, kein unabhängig bestätigter Upload- oder Buildzeitpunkt. In der begrenzten Artefaktsuche wurde keine native APK gefunden.

**Grenze:** Passendes Paket und gleiche Versionsangaben ergeben eine starke Arbeitszuordnung, aber keinen Nachweis identischer Quellen oder identischer Binärdateien gegenüber dem Play-Release. Das AAB wurde noch nicht ausgelesen oder mit einem bestätigten Play-Artefakt verglichen. Der lokale Git-Status ließ sich im übergeordneten Ordner nicht als gültiger Arbeitscheckout auslesen; ein gesicherter Commitstand wird deshalb nicht behauptet.

## Drei Varianten sind ein Produktbestand, keine drei bestätigten Store-Apps

| Lokaler Ordner | Konfiguration | Einordnung |
|---|---|---|
| `C:\Users\madde\flutter_projects\MEWING 2.0\app` | Native Gradle-ID `com.chargegeist.mew`, 0.9.4 / Code 13 | Primäre Arbeitsbasis für die angekündigte Prüfung des Console-Release 13. |
| `C:\Users\madde\flutter_projects\MEWING` | React Native mit Expo-Abhängigkeiten; `package.json` 0.0.1. `app.json` / Expo: `com.chargegeist.mew`, 1.0.0 / Code 1. **Vorhandenes natives Android-Gradle: `com.mewtrack`, 1.0 / Code 1.** | Die Expo-Konfiguration allein reicht nicht zur Releasezuordnung. Die abweichende native Gradle-ID ist ein wichtiger Korrekturpunkt gegenüber der ursprünglichen groben Bestandsaufnahme. Kein bestätigter Release-13-Stand. |
| `C:\Users\madde\flutter_projects\mewtrackflutter` | Flutter `pubspec.yaml` 1.0.0+1; natives Android-Paket `com.mewtrack.mewtrack` | Andere Paket-ID; keine Zuordnung zum bestätigten Store-Paket `com.chargegeist.mew`. |

Die ersten Beschreibungen als Expo- und Flutter-Varianten waren grobe Bestandshinweise. Aktive Native-Builddateien haben für die Android-Releasezuordnung Vorrang vor Produktplänen oder allgemeinen README-Texten. Die übrigen Varianten werden nicht gelöscht, geändert oder als schlecht bewertet.

## Primärquellen für die nächste Prüfung

Unter der Gradle-Wurzel `MEWING 2.0\app`:

- `app\build.gradle.kts`, `app\src\main\AndroidManifest.xml`, `app\src\main\res\values\strings.xml`: Paket, Version, Name, Berechtigungen und Buildkonfiguration.
- `app\src\main\java\com\mewing\jawline\MainActivity.kt`: tatsächlicher Appstart, Einrichtungsstatus, Entitlement-Abfrage und Speicherbereinigung.
- `app\src\main\java\com\mewing\jawline\ui\navigation\AppNavGraph.kt`: aktive Einstiege und Routen. Gefunden: Onboarding, Home, Gallery, Settings, Capture, Entry Detail, Compare und Paywall. Das ist eine Routenbestandsaufnahme, noch keine Qualitätsbewertung.
- `ui\home`, `ui\capture`, `ui\gallery`, `ui\compare`, `ui\settings`, `ui\paywall`: UI und ViewModels für die Produktprüfung.
- `camera\FaceAnalyzer.kt`, `camera\PoseValidationRules.kt`, `ui\capture\CameraPreview.kt`: Kamera-/Poseablauf.
- `data\storage`, `data\local`, `data\repository`, `data\prefs`: Speicherung, Datenbank, Einstellungen und Bereinigung.
- `data\billing\EntitlementRepository.kt`, `domain\entitlement\Entitlement.kt`: Monetarisierung und Funktionsgrenzen.
- `app\src\test` und `app\src\androidTest`: vorhandene JVM- und instrumentierte Tests, unter anderem Capture Slots, Entitlement Gate, vollständige/teilweise Sessions und Compare Flow. **Noch kein Test ausgeführt.**

Unter `MEWING 2.0\docs` liegen Vision, Flow, Designspezifikation, Kamera-/Poseguidance, Datenschutz, Monetarisierung, Release- und manuelle Testdokumente. Diese Dokumente erklären beabsichtigtes Verhalten. Sie beweisen keine aktuelle Implementierung oder bestandene Prüfung. Insbesondere `PLAY_CONSOLE_CHECKLIST.md` nennt noch frühe Version 0.1.0-beta / Code 1 und SDK 35; für aktuelle Versionsdaten ist die Builddatei mit Code 13 maßgeblich.

`docs\10_AGENT_RULES.md` beschreibt die native Ausrichtung und verlangt reale Gerätetests für Kameraphasen. Für die Qualitätsprüfung folgt daraus ein sinnvoller Prüfpunkt: Ein Webnachbau oder ein Emulator allein wäre kein Nachweis zuverlässiger nativer Kamerafunktion. In dieser Vorbereitung wurde keine Oberfläche portiert.

## Öffentlicher Store – vorläufiger Textbefund

Ein direkter Abruf des [öffentlichen Google-Play-Auftritts](https://play.google.com/store/apps/details?id=com.chargegeist.mew) zeigte **MewTrack: Jawline Tracker**, Entwickler ChargeGeist, Kategorie Gesundheit und Fitness, In-App-Käufe und ausgewiesenes Update **28.08.2026**. Die dabei sichtbare öffentliche Installationsklasse war **10+**; sie ist keine exakte Downloadzahl und ersetzt weder die Nutzer-Ausgangsschilderung noch die späteren tatsächlich abgelesenen Console-Werte. Live-Browseransicht und Release müssen noch gesondert bestätigt werden.

Der Text beschreibt geführte Front-/Profilfotos, Pose-/Winkelhilfe, automatische Aufnahme, Galerie und Fotovergleich. Lokale Speicherung ohne Konto oder Cloud ist ein wesentliches Versprechen. Er grenzt sich von medizinischen Leistungen und versprochenen körperlichen Veränderungen ab. Die Datensicherheitsdeklaration nennt keine Erhebung/Weitergabe; tatsächlicher nativer Datenfluss wurde hier nicht geprüft. [Google Play](https://play.google.com/store/apps/details?id=com.chargegeist.mew).

Storebilder wurden noch nicht angesehen. Es werden daraus keine Optik-, Conversion- oder Wirksamkeitsurteile abgeleitet. Konto-, Geräte- oder Kontaktdaten wurden nicht in dieses Dossier übernommen.

## Nächster begrenzter Schritt

Nach Abschluss und Push der aktuellen Dashboard-/Mirror-Arbeit folgt der MewTrack-Pilot auf der nativen Codebasis. Er soll Produkt und tatsächlichen Ablauf, Optik/UX, Erfassung/Persistenz, Reminder, mögliche Timer/Übungen/Gamification, Monetarisierung und Privatversprechen prüfen – ohne geplante Funktionen als vorhanden auszugeben. Der Hauptagent übernimmt die öffentliche Store-Browserprüfung und freigegebene Console-Kennzahlen mit jeweils eigener tatsächlicher Datenabdeckung.

Vor einer Laufzeitprüfung werden vorhandenes Android-Gerät beziehungsweise Emulator, ADB-Zugriff und installierter Paketstand nur lesend erfasst. Ob ein sinnvoller nativer Test möglich ist, bleibt bis zu dieser Bestandsprüfung offen. Ein aktueller Sourcecheck kann vorhandene Risiken erklären, ersetzt aber keine reale Kamera- und Gerätetestung. Ergebnisse und konkrete kleine Maßnahmen werden erst nach den entsprechenden Prüfungen als Befunde im Dashboard integriert.
