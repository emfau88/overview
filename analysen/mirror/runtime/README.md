# Mirror – Herkunft der lokalen Prüfumgebungen

Stand: **10.10.2026**. Dieses Verzeichnis enthält lokale, ignorierte Appkopien und Prüfartefakte. Die frühere Flutter-Standardbeschreibung war kein Herkunftsnachweis. Der Pilot und die heutigen Nachprüfungen sind unterschiedliche Etappen.

| Etappe | Herkunft und Grenze |
|---|---|
| Pilot vom 09.10. | Isolierte lokale Webkopie des RelateLens-Standes 1.1.0+16; vorhandene Previewbilder vom 07.10. behalten ihre eigene Herkunft. Siehe [Testumgebung](../TEST-UMGEBUNG.md) und [Pilot](../Mirror-Pilotanalyse.md). |
| Unveränderte Nachprüfung vom 10.10. | Webbedienung plus separat testsigniertes Universal-APK aus dem vorhandenen lokalen AAB 16. Quellen und lokale Originalnotiz liegen getrennt unter `analysen/android/runtime/reaudit-20261010/`. Kein Play-Download. |
| Heartvia-Korrektur vom 10.10. | Testkopie unter `heartvia-20261010/app/`, danach bytegleiche Originalübernahme nach `C:/Users/madde/Documents/Mirror`, Branch `codex/heartvia-relaunch`, 1.1.1+17. Automatisierte und native Prüfungen sowie Releasebuild haben jeweils eigene Belege. Siehe [Umsetzungsnachtrag](../Heartvia-Update-2026-10-10.md). |
| Play-Console-Einreichung | Bestehendes Paket `com.energycrafted.mirror`, AAB 17 akzeptiert und fünf Änderungen bestätigt. Beobachtungszeit 18:52:09 MESZ; Freigabe und öffentliche Aktivierung zu diesem Zeitpunkt offen. Die private Console-Aufnahme bleibt lokal. |

Der öffentliche Nachtrag nennt Testumfang, Versionen, Prüfsummen, aktive Quelldateien und Wiederholungsbefehle. Für eine technische Wiederholung braucht ein weiterer Chat zusätzlich Zugriff auf die lokale Appquelle und Prüfarbeitsdateien. Overview veröffentlicht diese Dateien nicht.

Unter `heartvia-20261010/` bleiben unter anderem `final-source-binary-proof.json`, `changed-files.json`, `basis-manifest.json`, `Native-Abschluss.md`, `release/release-proof.json`, die nativen Aufnahmen und die private Console-Aufnahme. Frühere Notizen mit „noch kein Upload“ beschreiben den Stand vor der Console-Etappe; maßgeblich ist der datierte öffentliche Nachtrag.

Apppakete, Rohlogs, Preferences, Testsignaturen, Schlüssel, Archive und Appquellen bleiben ignoriert. Nur diese README wird als bereinigter Herkunftshinweis eingebettet.
