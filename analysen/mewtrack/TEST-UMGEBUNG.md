# MewTrack – begrenzter nativer Testversuch

Stand: **09.10.2026**. Ergebnis: **Ein isolierter Offline-Versuch und ein gezielter Retry außerhalb der Sandbox; keine JVM-Tests ausgeführt.** Im ersten Versuch scheiterte die lokale Gradle-Verbindung. Beim gezielten Retry funktionierte diese Verbindung, jedoch brach die Android-Plugin-Konfiguration vor Testaufgaben ab. Beide Abbrüche werden als Grenzen dieser Testumgebung geführt; sie belegen keinen Kompilier- oder Testfehler der Appimplementierung. Die zweite Ursache wurde nicht weiter isoliert.

## Umfang und Isolation

Die aktive native Quelle `C:\Users\madde\flutter_projects\MEWING 2.0\app` wurde ausschließlich gelesen. Unter `analysen/mewtrack/runtime/native-unit-20261009` liegen 80 kopierte Dateien: Kotlin-Quellen einschließlich der vorhandenen Testdateien, Ressourcen und Manifest, Gradle-Konfiguration, Versionskatalog, Wrapper und Proguard-Konfiguration. Keine Änderungen an der Appquelle oder ihrem Buildverzeichnis.

Ausgeschlossen wurden Git-Daten, ursprüngliche Gradle-/Kotlin-Caches, kompilierte Outputs, lokale Projektarchive, Fotos, `.env`, `keystore.properties`, Signaturdateien und `local.properties`. Die kopierten PNGs stammen aus den Ressourcen der App. Kopierte Eingangsdaten sind lokal mit SHA-256 im ignorierten Runtime-Manifest verzeichnet. Signaturvariablen wurden für den Testprozess entfernt.

Genutzt wurden vorhandenes JBR/Java 21, Android SDK mit Plattform/Build-Tools 36 und die bereits installierte Gradle-8.12-Distribution. Die globale Gradle-Abhängigkeitsablage wurde über `GRADLE_RO_DEP_CACHE` als lesende Quelle angegeben; alle schreibbaren Gradle-/Android-Userhomes sowie temporären Dateien lagen in der eigenen Runtime. Keine Abhängigkeiten oder SDK-Komponenten heruntergeladen. [Gradle: Offline-Modus und lesender Abhängigkeitscache](https://docs.gradle.org/current/userguide/dependency_caching.html).

Die Runtime ist durch die vorhandene `.gitignore` ausgeschlossen. Rohlogs, Kopien und generierte lokale Dateien werden nicht in das öffentliche Dossier aufgenommen.

## Versuch und gezielter Retry

Ausgeführt wurde in der isolierten Kopie:

```text
gradle --offline testDebugUnitTest --no-daemon --console=plain
  --gradle-user-home <eigene Runtime>/gradle-user-home
  -Dorg.gradle.vfs.watch=false
  -Djava.io.tmpdir=<eigene Runtime>/temp
  -Pandroid.builder.sdkDownload=false
```

Gradle startete für die eingestellten JVM-Optionen einen einmaligen lokalen Daemon trotz `--no-daemon`. Der Client konnte in der Sandbox die Verbindung zu diesem Daemon nicht herstellen: `Could not connect to the Gradle daemon`. Rückgabecode **1**, Dauer ungefähr **4 Sekunden**.

Daraufhin erfolgte **ein gezielter Retry außerhalb der Sandbox**, um genau diese lokale Verbindungsgrenze zu umgehen. Die automatische Freigabe wurde erteilt. Quelle, Offline-Parameter, eigene Userhomes und Temp-Verzeichnisse blieben gleich. Die Daemon-Verbindung und die Auflösung von Android Gradle Plugin **8.10.1** aus dem Cache funktionierten. Der Build scheiterte nach **41 Sekunden**, Rückgabecode **1**, beim Anwenden des Android-Plugins in `app/build.gradle.kts:3`:

```text
Failed to apply plugin 'com.android.internal.application'.
Failed to create service '...AndroidLocationsBuildService...'.
Could not create provider for value source
AndroidLocationsBuildService.AndroidDirectoryCreator.
```

Die Meldung isoliert die Ursache nicht weiter. Daher weder einen Fehler in den Appquellen noch eine erfolgreiche vollständige Buildkonfiguration behauptet. Keine Testaufgaben ausgeführt, keine JUnit-Ergebnisdateien und kein Releasepaket erzeugt. Keine weiteren Wiederholungen, Downloads oder Reparaturschleife.

Die Signaturkonfiguration war zuvor geprüft worden: Sie ist ohne kopierte Signaturdaten für diesen Debug-Test konfigurierbar. Sie war nicht die gemeldete Abbruchursache. Ob alle übrigen benötigten Abhängigkeiten im bestehenden Cache verfügbar sind, konnten die Versuche noch nicht beantworten.

## Was anderweitig tatsächlich geprüft wurde

Die aktive Konfiguration und das vorhandene zusammengeführte Release-Manifest nennen **com.chargegeist.mew, 0.9.4 / Code 13, minSdk 26 / targetSdk 36**. Ein vorhandenes Release-AAB wurde über Pfad, Größe und Datum zugeordnet; es wurde nicht neu erzeugt oder als identische veröffentlichte Quelle verifiziert.

Read-only ADB-Paketinventar bestätigte eine installierte App mit denselben Versions-/SDK-Werten und `installer=com.android.vending`. Das stützt eine Play-Installation. Die App wurde nicht gestartet oder per ADB bedient. Keine Installation, Kameraaufnahme, Kaufhandlung oder Nutzerdatenlöschung ausgeführt.

Vorhanden sind fünf JVM-Testdateien und sechs Android-Test-/Helperdateien. Ihr Vorhandensein ist kein Testpass; einige UI-Tests verwenden ältere Stub-Freischaltungsannahmen. Die Codebefunde wurden anhand der aktiven Implementierung geprüft, die drei Risiken Billing-Fehlerabschluss, Entitlement-Synchronisation und Tageswechsel zusätzlich unabhängig anhand derselben Quellen gegengelesen.

Ein tatsächlicher nativer Bedien-/Kameratest und kontrollierte Billing-Fehlertests bleiben offen. Auch ein erfolgreicher JVM-Test würde Kamera, Storebilder, echte Play-Käufe oder die Identität von Quelle und installiertem Release nicht vollständig bestätigen.
