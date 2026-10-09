# ZeroHero – lokale Testkopie

Erstellt am 09.10.2026 für die visuelle Produkt- und UX-Prüfung.

- Quelle: `C:\Users\madde\flutter_projects\ZEROHERO25`
- App-Version aus `pubspec.yaml`: **1.0.3+25**.
- Kopiert: `lib`, `assets`, `web`, `pubspec.yaml`, `pubspec.lock`, `analysis_options.yaml`; kein Git-Repository, keine Android-Signaturdateien.
- 168 Quelldateien aus `lib`, `assets`, `web` wurden per SHA256 gegen die Kopie geprüft: keine Abweichungen. `pubspec.yaml`, `pubspec.lock`, `lib/main.dart` sind ebenfalls identisch.
- Quellbranch laut `.git/HEAD`: `feature/quests-v2`; referenzierter Commit `521d9392e5fd144181e6440ae18266d0ae1dbf52`. Die Kopie enthält den lokalen Dateistand; sie ist kein reiner Commit-Checkout.
- Flutter aus vorhandenem SDK-Cache: **3.41.4**, Dart **3.11.1**.
- `flutter --no-version-check pub get --offline`: erfolgreich.
- `flutter --no-version-check build web --release --no-pub`: erfolgreich, Ausgabe `build/web`.

Diese Kopie ist ein **Web-Testbuild** des aktuellen lokalen Quellstands. Sie belegt keinen Test des nativen Android-Pakets und keinen Test des derzeit im Play Store veröffentlichten Stands. Die vorhandene native APK in der Quelle stammt vom 19.05.2026 und trägt VersionCode 24.

Es wurden keine Appcode-Änderungen vorgenommen. Der Hauptagent startet den lokalen Server und prüft mit erfundenen Daten. Daten dieses Webtests bleiben im Browserprofil; sie sind nicht die gespeicherten Daten einer Androidinstallation. Die App versucht Firebase ohne Webkonfiguration zu initialisieren und fängt Initialisierungsfehler ab.
