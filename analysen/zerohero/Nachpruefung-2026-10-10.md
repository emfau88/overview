# ZeroHero – Nachprüfung und Versionsklärung am 10.10.2026

Stand: **10.10.2026**. Dieser Nachtrag dokumentiert die erneute Prüfung der früheren Diagnosen, die native Bedienung eines vorhandenen lokalen AAB und die anschließende Quellenzuordnung. Er ergänzt die [Pilotanalyse](ZeroHero-Pilotanalyse.md) und den [früheren Quellenbericht](ZeroHero-code-review.md), ohne deren damalige Herkunft zu ändern. **Keine ZeroHero-Appkorrektur, Veröffentlichung oder Storeänderung wurde durchgeführt.** Alle bestehenden Maßnahmen bleiben Vorschläge.

**Das wichtigste Ergebnis:** Die heute lose vorliegende Quelle **1.0.3+25** und das nativ geprüfte lokale AAB **1.1.0/26** unterscheiden sich deutlich. Version 26 besitzt bereits direkte Home-Erfassung, einen Wochenplan mit ausdrücklicher Nullbestätigung und eine freiwillige, zunächst ausgeschaltete Analytics-Einwilligung. Alte Empfehlungen dürfen diese vorhandenen Funktionen nicht erneut als fehlend behandeln. Bestätigt bleiben eine verzögerte Übernahme aktivierter Konsumarten sowie die falsche Gleichsetzung fehlender Angaben mit Null im alten Tagesabschluss. Nach einer beschleunigt simulierten Pause fehlte ein Tagesabschluss; die erfasste Menge war weiterhin vorhanden.

## 1. Die vier getrennten Prüfstände

Alle genannten lokalen Originalartefakte gehören zum Ordner `C:/Users/madde/flutter_projects/ZEROHERO25`. Die Paket-ID lautet **`com.energycrafted.zerohero`**. Der Ordnername ist kein Versionsnachweis.

| Stand | Identität und Herkunft | Was er belegt |
|---|---|---|
| Lose Originalquelle und vorhandene Webkopie | Pubspec **1.0.3+25**, Branch `feature/quests-v2`, referenzierter HEAD **`521d9392e5fd144181e6440ae18266d0ae1dbf52`**. Der Arbeitsbaum enthält bereits lokale Änderungen und ist kein reiner HEAD-Checkout. | Am 10.10. erneut lesend gegengeprüft: **141 lib-Dateien, 20 Assets, sieben Webdateien** sowie Pubspec, Lockfile und Analysekonfiguration stimmen bytegleich mit der bestehenden isolierten Web-Testkopie überein. Die erneute Webbedienung betrifft diesen Stand. |
| Ältere vorhandene APK | `build/app/outputs/flutter-apk/app-release.apk`, Versionname **1.0.3**, Versioncode **24**, Dateizeit 19.05.2026. | Ein älteres lokales Paket. Es wurde nicht als aktuelle Androidbasis oder Play-Release ausgegeben. |
| Vorhandenes lokales AAB | `build/app/intermediates/intermediary_bundle/release/packageReleaseBundle/intermediary-bundle.aab`, Versionname **1.1.0**, Versioncode **26**, Dateizeit 07.10.2026. | Genau dieses AAB wurde als separat lokal testsigniertes Universal-APK im isolierten **Android-34-Emulator** bedient. Das ist ein nativer Artefakttest, kein Play-Download. |
| Früher erfasster Play-Stand | Console-Pilot: **25 / 1.0.3**; der am 10.10. erneut betrachtete öffentliche Auftritt nennt **1.0.3**. | Kein erneuter Download, keine Bytegleichheitsprüfung des von Play ausgelieferten Pakets und keine erneute Erhebung der früheren Console-Kennzahlen. |

Die frühere Pilotgrenze „kein nativer Test“ bleibt für den damaligen Pilot richtig. Sie beschreibt nicht die gesamte spätere Arbeit. Umgekehrt ist der heutige lokale AAB-26-Test kein Nachweis über Play 25.

## 2. Quellenzuordnung des neueren AAB

Ein neuerer Release-Kernel ist im ursprünglichen Buildverzeichnis erhalten: `.dart_tool/flutter_build/8d803281614d38646a2a6ec70d241256/app.dill`. Seine SourceTable enthält **1.030 Einträge**; daraus wurden **112 tatsächlich eingebundene eigene lib-Dateien** ausschließlich in den ignorierten Scratch extrahiert. **98 dieser Dateien** sind bytegleich mit der heutigen losen Quelle; **14 sind verändert oder neu**. Die rekonstruierten Bibliotheken enthalten den nativ beobachteten neuen Einstieg, Consent und Wochenplan.

Die Verbindung zum AAB beruht auf vorhandenen Buildbelegen, nicht nur auf ähnlichen Texten:

1. Die AOT-Buildstamps für **ARM64, ARMv7 und x86_64** nennen den erhaltenen Kernel als Input und die vorhandenen `app.so` als Outputs.
2. Diese Outputs stimmen vollständig mit den entsprechenden gestagten Flutter-Releaseoutputs überein.
3. Nach dem bereits früher durchgeführten Stripping bleiben alle geladenen ELF-Segmente bytegleich; die festgestellten Unterschiede betreffen jeweils 91 Bytes außerhalb dieser geladenen Segmente. Die heutige Prüfung selbst hat kein Stripping vorgenommen.
4. Die gestrippten `libapp.so` sind jeweils bytegleich mit den entsprechenden Einträgen des geprüften AAB. Native Buildmetadaten nennen **1.1.0/26**.

| Identifizierbarer Beleg | SHA256 |
|---|---|
| Vorhandenes AAB 26 | `e5ae6c6173f97bb2d11b38da5a06bb1903604175d68e60591b4d213d31947c09` |
| Erhaltener Kernel, Format 127, 39.099.120 Bytes | `e8b7d45afc8ce7a6aae151c3eb5d4965cc901ad3cd873f29d1bf061aa2d20c49` |
| Ältere APK 24 | `cb3df19fc86d01bf3cdcacb033fc543e1e3b5b378538a90a56aa699e2ccaed46` |

**Die vollständige baubare 26er-Arbeitskopie wurde dennoch nicht gefunden.** Reguläre Gitrefs, registrierte Worktrees, der vorhandene Codex-Checkpoint und gezielt erkennbare Projektkopien unter `flutter_projects`, `Documents` und den erkennbaren Codex-Worktree-Pfaden ergaben keinen vollständigen passenden Checkout. Depfiles und Buildmetadaten verweisen weiterhin auf `ZEROHERO25`. Aus dem abweichenden heutigen Arbeitsbaum wird keine Absicht oder Rücksetzungschronologie abgeleitet. Private Chats, Zugangsdaten und Signaturdaten waren nicht Teil der Suche.

Die lib-Extraktion rekonstruiert weder die vollständigen damaligen Assets noch Pubspec, Lockfile, Androidkonfiguration und sämtliche Toolchain-/Buildinputs. Sie darf nicht über die lose 25er-Quelle kopiert werden. Ein anfänglicher Scratchvergleich von Standard-MD5 mit Flutter-Cachewerten wird hier **nicht als bestätigter Inhaltskonflikt** übernommen: Die Gleichwertigkeit der Hashverfahren wurde für ZeroHero nicht abschließend gegengeprüft. Insbesondere entsteht daraus keine zusätzliche gesicherte „Statsquellen passen nicht zum AAB“-Diagnose. Die Kernel-/Outputkette und die einzelnen nativen Beobachtungen bleiben getrennte Belege.

## 3. Welche Diagnosen gelten für welchen Stand?

| Bereich | Heutige Gegenprüfung | Konsequenz und Grenze |
|---|---|---|
| **Settings-Übernahme** | Web 25: neu aktivierte Tabletten erscheinen auf Heute erst nach Reload. Nativ 26: Pills mit Referenz 1 bleiben auf dem bereits geöffneten Heute zunächst unsichtbar und erscheinen erst nach Prozessneustart. Die Speicherung ging im Test nicht verloren. | **Auch an AAB 26 nativ bestätigt.** Heute muss den gespeicherten Einstellungsstand unmittelbar übernehmen. Der neue Home-Plan liest Settings reaktiv; seine bewusst erhaltene Startbaseline ist ein eigener, bereits erklärter Produktablauf. |
| **Getränkeliste** | Web 25: gespeichertes Bier erscheint erst nach einem anderen UI-Trigger. Nativ 26: Beer 500 ml ist nach Schließen der Auswahl sofort sichtbar. | Der 25er-Anzeigefehler bleibt belegt, wurde im geprüften 26er-Fall jedoch **nicht reproduziert**. Keine Behauptung eines Speicherverlusts und kein automatischer 26er-Fixauftrag. |
| **Rundung und XP** | Web 25: 500 ml Bier mit 5 % ergeben **19,725 g**, die Referenz ist auf **19,7 g** gerundet. Der exakte Livevergleich meldet „darüber“. Der Tagesabschluss besitzt dagegen ein Toleranzband bis Verhältnis 1,10. | Inkonsistentes Livefeedback ist belegt. **Kein falscher Abzug bereits erhaltener XP nachgewiesen.** Liveanzeige, Tagesgesamtstatus und XP-Regel dürfen nicht gleichgesetzt werden. |
| **Einstieg und Home** | Web 25: großer Wochenbereich vor der Erfassungsaktion; der Startbutton war bei **390 × 844** sichtbar. Nativ 26: Konsumarten zuerst, Alkohol als typische Woche, Reduktionsplan und direkte Home-Erfassung. Zusatzinsights sind eingeklappt. | Die 26er-Fassung hat wesentliche frühere Einstiegsvorschläge bereits umgesetzt. Kein erneuter vollständiger Home-Umbau begründet. Echte Verständlichkeit und Wiederkehr wurden nicht mit Nutzern gemessen. |
| **Analytics** | Lose 25er-Quelle: Messaktivierung ohne Einwilligungsschalter. Nativ 26: sichtbarer freiwilliger Consent, anfangs aus. Zugeordnete 26er-Quelle aktiviert den eigenen Service nur bei gespeichertem `true`; vorhandener nativer Manifestdefault ist aus. | Die pauschale fehlende-Einwilligungsdiagnose gilt **nicht für 26**. Keine Messung des tatsächlichen Produktionsnetzverkehrs und kein vollständiger SDK-/Datenschutz- oder Rechtsnachweis. |
| **Explizite Null im Plan** | Am simulierten 11.10.: zunächst **0/7 bestätigte Tage**, Erklärung unbekannter Tage. Bewusste Bestätigung von 0 Zigaretten am 10.10. erhöht auf **1/7**; „No reliable weekly comparison yet“ bleibt bestehen. | **Nullbestätigung nativ belegt.** Der Planvergleich verlangt eine abgeschlossene Woche und sieben Bestätigungen. Diese sinnvolle Schutzregel erhalten; keine allgemeine Aussage „Null ist nicht speicherbar“. |
| **Fehlende Angaben im Tagesabschluss** | Für den 10.10. wurde ausschließlich ein Bier erfasst. Zigaretten und Pills wurden weder eingegeben noch als Null bestätigt. Am simulierten Folgetag zeigt das Tagesdetail dennoch beide mit **0 / Excellent**. Die spätere bewusste Nullbestätigung fand erst danach statt. | **Konkrete Fehlbewertung an AAB 26 nativ bestätigt.** Der alte Abschluss ergänzt fehlende aktive Mengen als Null. Das ist ein anderer Pfad als der neue bestätigungsbasierte Planvergleich. |
| **Mehrere Tage Pause** | Am simulierten 11.10. eine Zigarette erfasst, danach Force-stop und Emulator auf 13.10. vorgerückt. History enthält nur den 10.10.; der Plan zeigt weiterhin die Eingabe vom 11.10. und **Wochensumme 1/28**. | **Ausgelassener Tagesabschluss in diesem Muster bestätigt; Menge erhalten.** Kein globaler Datenverlust. Regelmäßiger Autoabschluss betrachtet nur gestern. Andere Konsumarten, Cutoffs und Doppelabschluss-/XP-Folgen sind getrennte Prüfungen. |
| **Stats** | Lose und eingebettete Quellen: „7 Tage“ nimmt bis zu **acht jüngste gespeicherte Summaries**, ohne Kalenderfilter. Der Chart zeichnet sieben Kalenderpunkte bis zur neuesten Summary und setzt Lücken auf 0. | Konkrete **Quelleninkonsistenz**, kein vollständiger nativer Statistiknachweis. Neuer Planvergleich und alte Stats getrennt bewerten. Verzögerte Stats-Aktualisierung nach einem Plan-Nachtrag bleibt eine zusätzliche Quellinferenz. |

### Alkohol: Wochenreferenz und Tagesbewertung

In 26 ist der native Alkoholbefund **nicht derselbe Rundungsfall wie in 25**. Eine typische Woche mit einem Bier wird ungerundet als Tagesdurchschnitt gespeichert: etwa **19,725 / 7 = 2,8 g pro Tag**. Das alte Tagesdetail setzt die an einem Tag dokumentierten 19,7 g gegen diesen Durchschnitt und zeigt „OVER“. Home betrachtet dagegen die Wochensumme gegenüber dem bewusst reduzierten Wochenziel. Im konkreten Test waren **2,0 Einheiten** gegenüber **1,7 Zieleinheiten** tatsächlich mehr; diese Wochenmeldung ist rechnerisch plausibel.

Der kleine Produktbefund ist der uneinheitlich erklärte Bezugsrahmen und die starke Tagesbewertung. Es wurde kein allgemeiner Alkohol-Rechenfehler und keine tatsächliche XP-Verlustfolge nachgewiesen. Ein einzelner Tag oberhalb des üblichen Tagesdurchschnitts beweist auch nicht in jedem Szenario einen verfehlten Wochenplan.

## 4. Nachvollziehbare aktive Quellenbelege

Für **25** beziehen sich die folgenden relativen Pfade auf die heute lose Quelle unter `C:/Users/madde/flutter_projects/ZEROHERO25`. Für **26** beziehen sie sich auf die aus dem erhaltenen Kernel rekonstruierten historischen Bibliotheken im lokalen Scratch; die heutigen Dateien am ursprünglichen Pfad können abweichen. Es handelt sich um gezielte aktive Pfade, nicht um eine vollständige Appprüfung.

| Befund | Aktiver Quellenpfad und Zeilen |
|---|---|
| Heute hält Settings in lokalem State; Save invalidiert Provider | 26: `lib/features/today/widgets/today_home_tab.dart:33,337`; `lib/app/router/navigation_shell.dart:343`. Neuer reaktiver Plan: `lib/features/cutback/cutback_panel.dart:24,108`. |
| Typische Alkoholwoche wird durch sieben geteilt | 26: `lib/features/onboarding/onboarding_page.dart:269`; Planbezug `lib/features/cutback/cutback_plan.dart:33`. |
| Zustimmung als Voraussetzung des eigenen Analytics-Service | 26: `lib/services/analytics_service.dart:32,51`; sichtbarer Einstieg `lib/features/onboarding/onboarding_page.dart:392`. |
| Wochenvergleich und Bestätigung | 26: `lib/features/cutback/cutback_plan.dart:97`; `lib/features/cutback/cutback_repo.dart:64,73`; UI `lib/features/cutback/cutback_panel.dart:469,495,518`. |
| Autoabschluss nur gestern; leere Drafts übersprungen; fehlende Mengen als 0 | 26: `lib/features/today/services/eod_service.dart:203,321,355,578`; gespeicherte Null `lib/data/repos/hive_repos.dart:314`. |
| Tagesabschluss hat eigene Toleranz und danach XP-Anwendung | 26: `lib/features/today/services/eod_scoring.dart:21`; `lib/features/today/services/eod_service.dart:371,439`. |
| Acht Einträge gegenüber sieben Chartpunkten; Lücken als 0 | 26: `lib/features/stats/stats_provider.dart:24,43`; `lib/features/stats/stats_chart_view_model.dart:63,84,155`. |
| 25er-Rundungsfall | 25: `lib/core/units/conversion.dart:2`; `lib/features/onboarding/onboarding_page.dart:180,252,841`; `lib/features/today/today_page.dart:42`. |

Beim neuen rückwirkenden Plan-Nachtrag fehlen ein ausdrücklich toleranzbewusster Gesamtstatus und eine direkte XP-Anwendung in diesem Pfad; beim Start existiert jedoch XP-Recovery. Eine sofortige Aktualisierung des einmal lesenden Aggregatproviders ist nicht ausdrücklich sichtbar. Deshalb bleiben **Toleranz, Stats-Aktualisierung und XP nach Nachtrag gezielte offene Fälle**. „Nachträge bekommen nie XP“ oder „Stats sind insgesamt kaputt“ wäre nicht belegt.

## 5. Tests und Zeitgrenzen

Vorhandene 25er-Testdateien wurden unverändert in der isolierten Runtimekopie ausgeführt. **Drei Charttests bestanden. Der Gesamtlauf bestand nicht.** Ein Aggregationsfall scheiterte vor der Assertion am fehlenden `TimeOfDay`-Hive-Adapter, zwei EOD-Fälle an einer nicht geöffneten Settingsbox. Ein Boundarytest erwartet verschiedene Tageskeys für 00:00 und 00:02 trotz 04:00-Cutoff und deaktiviertem schnellen Debugcutoff; diese Erwartung passt nicht zu den geprüften Eingaben. Die Legacy-DraftRepo-Suite war ausdrücklich übersprungen. Diese Setup-/Erwartungsprobleme sind keine nachgewiesenen Appfehler und kein Test des neuen 26er-Plans.

Die nativen Zeitgegenproben verwendeten ausschließlich einen eigenen Android-34-Testemulator mit erfundenen Eingaben. Dessen Uhr wurde über den normalen Befehl `cmd alarm set-time` kontrolliert auf den 11. beziehungsweise 13.10. gesetzt; kein Root war erforderlich. Keine Host- oder Privatgeräteuhr wurde geändert. Zum Abschluss wurden aktuelle Emulatorzeit und automatische Zeit wiederhergestellt und der eigene Emulator beendet.

Das sind beschleunigte Datums- und Pausenfälle, **keine natürliche Mitternachtssitzung, kein echter mehrtägiger Langzeittest und kein Play-Upgradeversuch**. Ein vollständiger nativer Statsdatensatz, sämtliche Cutoff-/Wochenwechsel und tatsächliche Nutzerwirkung bleiben offen. Historische Kennzahlen wurden nicht neu erhoben oder aus kleinen Datenmengen als Erfolgsvorhersage verwendet.

## 6. Lokale Herkunft und öffentliche Lesbarkeit

Die ausführlichen Erst- und Vertiefungsprotokolle liegen ausschließlich lokal unter:

- `analysen/android/runtime/reaudit-20261010/Android-Nachpruefung.md` und `Versions-und-Fehlerklaerung.md`;
- `analysen/zerohero/runtime/reaudit-20261010/Quellpruefung.md`, `Versionsklaerung.md`, `Buildprovenienz.json` sowie dem Extraktionsmanifest unter `kernel26-source/`;
- `analysen/android/runtime/reaudit-20261010/native-screenshots.json` und `timecheck-screenshots.json`; die darin zugeordneten synthetischen Screenshots/XMLs liegen im MewTrack-Scratch.

Diese ignorierten Dateien sind **keine für externe Leser verfügbaren Anlagen**. Dieser neue öffentliche Nachtrag bewahrt die entscheidenden Versionen, Methoden, beobachteten Abläufe und Grenzen. Apppakete, extrahierte Appquellen, Rohlogs und Testsignaturen werden nicht veröffentlicht.

Ausgewählte lokal erhaltene Zeitaufnahmen sind zusätzlich über ihre Prüfsummen identifizierbar. Alle vier zeigen **AAB-abgeleitete Version 1.1.0/26, Android API 34, 1080 × 2400**, ausschließlich erfundene Daten. Die dokumentierten Aufnahmezeitpunkte stammen aus Host-Dateimetadaten vom 10.10.; angezeigte Emulatortage sind simuliert.

| Lokaler Aufnahmebezeichner | Echte Aufnahmezeit MESZ / simulierter Tag | Screenshot-SHA256 |
|---|---|---|
| `zero-day-next-detail` | 10.10., 16:35:15 / 11.10. | `d7090ccd7d51272a3393cacdbd3eb2c853fcca221c92bb8ec10bc11d9ce67c84` |
| `zero-day-confirmed-null` | 10.10., 16:40:55 / 11.10. | `a8109da22b8aead3969e3fc957c3a8466fbb9b100cefd8c807e50ec096b058b3` |
| `zero-pause-day13-history` | 10.10., 16:41:47 / 13.10. | `76032f03231b7e2f52e5355e25625afc5ff9cc5425177bea58fb9d5d2d5a5bc9` |
| `zero-pause-day13-plan` | 10.10., 16:42:13 / 13.10. | `0fac6fc08269c4f2d18cb76074ffa55463105ad6206abb9c0c8ec596d8162eb2` |

## 7. Wenige empfohlene nächste Schritte

1. **Eine vollständige Arbeitsbasis wählen und sichern.** Vorrangig den vollständigen 26er-Stand beziehungsweise seine Sicherung finden. Die erhaltenen Kernel-/AAB-Belege aufbewahren; keine extrahierten Bibliotheken ungeprüft über Quelle 25 schreiben. Falls ein anderer Stand gewählt wird, diese Entscheidung ausdrücklich dokumentieren.
2. **Fehlende Angaben und Tagesbewertung in einem kleinen Korrekturschritt behandeln.** Im alten Abschluss bleibt eine nicht erfasste Konsumart unbekannt; eine ausdrücklich bestätigte Null bleibt Null. Settings erscheinen nach Save sofort auf Heute. Tages-/Wochenbezug beim Alkohol verständlich erklären. Den schon vorhandenen Plan-Bestätigungsmechanismus erhalten.
3. **Danach Pausen und Stats gezielt prüfen.** Erhaltene alte Eingaben geordnet abschließen, Doppelabschlüsse verhindern und XP gesondert vergleichen. Ein Sieben-Tage-Szenario mit acht gespeicherten Tagen und einer Lücke sowie ein rückwirkender Plan-Nachtrag klären den kleinen Statsumfang. Getränkelisten- und Rundungsfehler aus 25 nur dann am gewählten Stand reparieren, wenn sie dort erneut bestätigt werden. Store-/Privatsphäreangaben anschließend mit genau diesem Release abgleichen.

Diese Empfehlungen sind keine neue Umsetzungsauswahl oder Veröffentlichungserlaubnis. ZeroHero ist analysiert, seine Maßnahmen sind weiterhin offen. Die heutigen Prüfungen rechtfertigen keinen größeren Coaching-, Quest- oder Monetarisierungsumbau.

## 8. Kleine Vorschläge für Optik und Bedienung

- **Vorhandene direkte 26er-Erfassungsbuttons behalten.** Nach der ersten Eingabe die lange Einführung zu einem knappen Tagesstand verdichten. Für den 25er-Einstieg war der Startbutton sichtbar; ein genereller Unerreichbarkeitsbefund wird nicht behauptet.
- **Bezugsgrößen klar beschriften.** Alkohol-Wochenziel und üblicher Tagesdurchschnitt mit gut sichtbaren Einheiten benennen. „Noch nicht erfasst“ und „0 bestätigt“ auch in den alten Tages-/Statistikansichten sichtbar unterscheiden.
- **Gezielte Lesbarkeitskorrektur statt Neugestaltung.** Klassische Grundgestaltung verwenden; dunkles grünes Feedback auf Neonflächen separat visuell prüfen. Eine vollständige native Kontrast- oder Barrierefreiheitsmessung wurde hier nicht durchgeführt. Sofortige Settings-Übernahme ist wichtiger als eine neue Navigationsstruktur.

Der unabhängige Eindruck ist begrenzt positiv für den kleinen Tracker-Kern und die direktere 26er-Erfassung. Die uneinheitlichen Regeln von Plan, Tagesabschluss und Statistik sind der konkretere nächste Arbeitsbereich. Echte Nutzerreaktionen, wiederkehrender Nutzen und wirtschaftliche Tragfähigkeit wurden durch diese Nachprüfung nicht nachgewiesen.
