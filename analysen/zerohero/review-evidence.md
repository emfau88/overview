# ZeroHero – unabhängige Gegenprüfung

Stand: 09.10.2026. Geprüft wurde der aktuelle Quellcode unter `C:\Users\madde\flutter_projects\ZEROHERO25`, ausschließlich lesend. Diese Gegenprüfung belegt Codepfade; sie ersetzt weder einen Test des veröffentlichten Android-Pakets noch den ergänzenden visuellen Laufzeittest.

## Drei Funktionsbefunde aus dem Codebericht

| Behauptung | Ergebnis und Präzisierung |
|---|---|
| Konsumfreier Tag ist umständlich zu bestätigen | **Aktiver Pfad bestätigt.** Heute öffnet `HomeDashboardPage`, darin `TrackableInputTile`, darin `CounterRow`. Die Anzeige setzt fehlende Werte auf 0. Nicht-Alkohol: Minus bei 0 schreibt ausdrücklich 0 in den Tagesentwurf. Alkohol: Der Entfernen-Button erscheint erst bei einer bereits hinzugefügten Getränkemenge. Eine eigene verständliche Nulltag-Aktion wurde in diesem Pfad nicht gefunden. Vollständig leere Entwürfe werden beim Autoabschluss übersprungen. Daher trifft „0 kann überhaupt nicht gespeichert werden“ ausdrücklich **nicht** zu; das Problem ist die verständliche Bestätigung und die Unterscheidung von fehlender Angabe. |
| Ältere Entwürfe können nach einer Pause hängen bleiben | **Automatischer Pfad bestätigt, kein Laufzeitnachweis.** `_handleAutoFinalize` nimmt ausschließlich `yesterdayKeyAtMidnight`; `finalizeDraftIfNeeded` blockiert andere Tage, sofern nicht `force`. Der manuelle `completeDay` betrachtet nur aktuellen Tages-/Periodenschlüssel. Das Draft-Repository besitzt keinen Aufzählungs-/Nachholablauf. Die Today-Schaltfläche zum manuellen Abschluss ist zusätzlich nur in `kDebugMode` sichtbar. Kein allgemeiner Nachholpfad für ältere Entwürfe wurde gefunden. Daraus folgt ein Reproduktionsfall, keine belegte Löschung der Daten. |
| Settings werden nicht sofort auf Heute übernommen | **Aktiver Zustandspfad bestätigt und im aktuellen Webbuild reproduziert.** Heute lädt Settings mit `ref.read`, hält sie in `_settings` und nutzt diesen lokalen Wert im Build. Beim gleichen Tageskey verwirft `_refreshTodayIfRolled` neue Settings, wenn `_settings` bereits belegt ist. Einstellungen speichern invalidiert lediglich `settingsProvider` und wechselt zu Home. Der `IndexedStack` erhält den State der Heute-Seite. Eine Änderung der Auswahl/Baseline wird im gezeigten Pfad somit nicht in den bestehenden Heute-State übertragen. |

Belege für den aktiven Einstieg: [Heute-Tab](C:/Users/madde/flutter_projects/ZEROHERO25/lib/app/router/navigation_shell.dart:314), [aktives Widget](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/widgets/today_home_tab.dart:4), [Eingabekachel](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/widgets/today_home_tab.dart:415), [CounterRow](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/today_page.dart:278).

Belege für Null/fehlend: [Anzeige](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/ui/widgets/counter_row.dart:80), [Minus-Handler](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/ui/widgets/counter_row.dart:247), [Nullwert schreiben](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/logic/counter_service.dart:40), [Alkohol-Entfernen erst bei vorhandenem Getränk](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/ui/widgets/counter_row.dart:413), [Entwurf speichern](C:/Users/madde/flutter_projects/ZEROHERO25/lib/app/router/navigation_listeners.dart:85), [leere Tage überspringen](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/services/eod_service.dart:355).

Belege für Pausenfall: [nur gestern](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/services/eod_service.dart:203), [andere Tage blockiert](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/services/eod_service.dart:321), [manueller Abschluss](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/services/eod_service.dart:261), [Repository](C:/Users/madde/flutter_projects/ZEROHERO25/lib/data/repos/hive_repos.dart:263), [nur Debug-Abschlussbutton](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/widgets/today_home_tab.dart:431).

Belege für Settings: [Initialwert](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/widgets/today_home_tab.dart:32), [gleicher Tageskey](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/widgets/today_home_tab.dart:72), [lokaler Wert im Build](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/widgets/today_home_tab.dart:337), [IndexedStack](C:/Users/madde/flutter_projects/ZEROHERO25/lib/app/router/navigation_shell.dart:223), [Speichern](C:/Users/madde/flutter_projects/ZEROHERO25/lib/app/router/navigation_shell.dart:342).

**Gezielte Reproduktion:** (1) ohne Eingabe zu Heute gehen, Nulltag-Aktion suchen, bei Zigaretten Minus auf 0 drücken; (2) mit vorhandenem Entwurf zwei Tage später erneut öffnen. Der Pausenfall benötigt eine kontrollierte Testumgebung; die Systemzeit des Nutzerrechners soll dafür nicht geändert werden.

**Bestätigter Settings-Laufzeittest (aktueller Webbuild, 390 × 844):** Heute zeigte zunächst keine Tabletten. Tabletten mit Referenzwert 1 in Einstellungen gespeichert, Speicherbestätigung erschien; auf Heute fehlten sie weiterhin. Nach Browserreload erschien Tabletten mit Tageswert 0. Nativer Android-Laufzeittest noch offen.

## Firebase Analytics und die Privatsphäre-Aussagen

Der aktuelle Android-Quellstand ist **für aktive Firebase Analytics eingerichtet**, nicht nur mit einer ungenutzten Abhängigkeit versehen:

- `android/app/google-services.json` existiert und enthält einen Client zum Paket `com.energycrafted.zerohero`. Werte und Kennungen aus der Konfiguration wurden weder ausgegeben noch in diesen Bericht aufgenommen.
- Der Google-services-Build-Plugin ist aktiv; Android-Anwendungs-ID und Config-Paket passen zusammen. [Build-Konfiguration](C:/Users/madde/flutter_projects/ZEROHERO25/android/app/build.gradle.kts:6).
- `main` startet Analytics nach Hive-Initialisierung, vor der Anzeige des Onboardings. Es gibt hier keine Beschränkung auf Debug-Builds. [Appstart](C:/Users/madde/flutter_projects/ZEROHERO25/lib/main.dart:26).
- Nach erfolgreichem `Firebase.initializeApp()` setzt der Service `setAnalyticsCollectionEnabled(true)`. Bei fehlgeschlagener Initialisierung bleiben die eigenen Logmethoden ohne Wirkung. [Aktivierung](C:/Users/madde/flutter_projects/ZEROHERO25/lib/services/analytics_service.dart:22).
- Im geprüften `lib` gibt es keinen `setConsent`-Aufruf, keinen `setAnalyticsCollectionEnabled(false)`-Pfad und keine Analytics-Opt-out-Oberfläche. In den geprüften nativen Manifest-/Plist-Dateien wurden keine Collection-Deaktivierungs- oder Consent-Defaults gefunden. Das ist eine Feststellung zum Quellstand, keine rechtliche Bewertung.

Die selbst definierten Analytics-Ereignisse sind:

| Ereignis | Inhalt der selbst übergebenen Parameter |
|---|---|
| `app_opened` | Keine |
| `onboarding_completed` | Keine |
| `today_opened` | Keine |
| `history_opened` | Keine |
| `first_trackable_created` | Keine; einmaliger Marker beim ersten nichtleeren Tagesentwurf |
| `session_ended` | `duration_bucket`: unter 10 Sekunden, 10–60 Sekunden, 1–5 Minuten, über 5 Minuten |

[Ereignisse und Dauerklassen](C:/Users/madde/flutter_projects/ZEROHERO25/lib/services/analytics_service.dart:39), [erster Tracking-Eintrag](C:/Users/madde/flutter_projects/ZEROHERO25/lib/app/router/navigation_listeners.dart:97), [Onboarding-Ereignis](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/onboarding/onboarding_page.dart:214).

In diesen eigenen Events werden **keine Konsummengen, Baselines, Konsumartnamen oder selbst eingegebene Texte** als Eventparameter übergeben. Daraus darf nicht „keine Daten werden erhoben“ abgeleitet werden: Schon diese Ereignisse sind Nutzungsinformationen. Vom SDK automatisch erzeugte Ereignisse, Kennungen und Metadaten sowie tatsächlich übertragene Netzwerkdaten wurden in dieser Gegenprüfung nicht erfasst.

**Konsequenz für das nächste Update:** Das aktuelle Analytics-Verhalten muss mit dem gewünschten Privatmodus, Datenschutztext und Store-Deklaration abgeglichen werden. Entweder werden die externen Analysen für das versprochene Verhalten deaktiviert/entfernt oder die Nutzerinformationen beschreiben die tatsächlich vorgesehenen Datenflüsse zutreffend. Welche Lösung passt und welche Einstellungen erforderlich sind, wird erst nach Prüfung des Android-Release-Pakets festgelegt.

**Grenze:** Die öffentlich beschriebene Play-Version vom Mai 2026 kann älter sein als diese Analytics-Ergänzung. Ohne Abgleich mit dem veröffentlichten AAB/APK ist weder tatsächliche Analytics-Übertragung der Store-Version noch eine falsche Store-Deklaration belegt. Der Webtest kann native Android-Firebase-Initialisierung ebenfalls nicht bestätigen.

## Ergänzung: zwei Befunde aus dem visuellen Test gezielt geprüft

Die Hauptanalyse hat beide folgenden Fälle im aktuellen Webbuild bei 390 × 844 Pixeln reproduziert. Folgende Gegenprüfung erklärt und begrenzt diese Beobachtungen. Das Verhalten der nativen Android-App ist weiterhin nicht durch einen Android-Laufzeittest bestätigt.

**Bestätigter Rundungs-Laufzeittest:** Referenz 1 × Bier 500 ml mit 5 %; nach Neuladung denselben Drink hinzugefügt. Heute meldete „Über deinem üblichen Bereich“, obwohl Referenz und Eingabe demselben Getränk entsprechen.

**Bestätigter Listen-Laufzeittest:** Nach erstem Drink fehlte die Liste; nach Themewechsel erschien ×1. Nach zweitem Drink zeigte das Sheet ×2, Heute nach Schließen aber ×1; nach Zigaretten+ aktualisierte sich Heute auf ×2.

**1. Gleiches Referenzgetränk wird unmittelbar als darüber bewertet – mittlere Priorität (P2).** Ein Bier 500 ml mit 5 % ergibt im aktuellen Umrechner `500 × 0,05 × 0,789 = 19,725 g`. Das Onboarding formatiert diese Menge auf eine Nachkommastelle, also `19,7`, schreibt sie in den Controller und speichert anschließend den geparsten Controllertext als Baseline. Heute addiert dagegen die ungerundeten `19,725 g`. Das direkte Alkoholfeedback prüft `ratio == 1.0` exakt und stuft alles darüber als „Über deinem üblichen Bereich“ ein. Es gibt in diesem Feedbackzweig keinen Vergleichsspielraum. Damit ist der beobachtete Widerspruch im aktiven Code nachvollziehbar; er kann die Verlässlichkeit der Rückmeldung infrage stellen.

Belege: [Getränke-Preset](C:/Users/madde/flutter_projects/ZEROHERO25/lib/core/registry/trackable_presets.dart:29), [Umrechnung](C:/Users/madde/flutter_projects/ZEROHERO25/lib/core/units/conversion.dart:2), [gerundeter Controllertext](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/onboarding/onboarding_page.dart:252), [Nachkommastelle](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/onboarding/onboarding_page.dart:841), [Baseline speichern](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/onboarding/onboarding_page.dart:180), [ungerundete Tagesmenge](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/logic/counter_service.dart:51), [exakter Feedbackvergleich](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/today_page.dart:42).

**Wichtige Grenze:** Die eigentliche Tagesabschlussbewertung verwendet einen anderen Algorithmus mit Toleranzband bis 1,10. Deshalb belegt dieser Fall eine irreführende Live-Rückmeldung, keinen falschen XP-Abzug oder „Over“-Abschluss. [Toleranz beim Abschluss](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/services/eod_service.dart:574), [Bewertungsband](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/services/eod_scoring.dart:14). Kleine Korrekturidee: Baseline ungerundet speichern und Anzeigeformatierung getrennt halten; dieselbe nachvollziehbare Bewertungsregel für Livefeedback und Tagesabschluss verwenden.

**2. Alkoholbestätigung kann nach dem Hinzufügen fehlen/veraltet sein – mittlere Priorität (P2).** Der Mengen-Chip wird für Alkohol sowohl im schmalen als auch im breiten `CounterRow` ausdrücklich weggelassen; die zusätzliche Baseline-Zeile ebenfalls. Die aktuelle `TrackableInputTile` enthält aber sehr wohl eine Getränkeliste „Heute erfasst“ mit Name und Anzahl. Deshalb wäre „Die Getränkeliste wurde vollständig entfernt“ falsch.

Die reproduzierte fehlende/veraltete Liste passt zu einem Aktualisierungsproblem: `applyAlcoholPreset` schreibt zuerst die Gesamtmenge in `todayDraftProvider` und aktualisiert erst anschließend die Getränkezähler im Hive-Repository. Die Kachel reagiert auf den Provider mit den Mengen, liest die Getränkezähler aber nur direkt aus Hive. Das anschließende Speichern der Zähler löst in diesem Pfad keine Provider-State-Änderung aus. Dadurch kann der Build die alten Zähler sehen und erst durch eine spätere Änderung/Neuladung aktuell werden. **Die fehlende/veraltete unmittelbare Anzeige ist im aktuellen Webbuild reproduziert; die genaue asynchrone Ursache ist eine starke Code-Inferenz.**

Belege: [Alkohol ohne Mengen-Chip](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/ui/widgets/counter_row.dart:174), [vorhandene Getränkeliste](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/today_page.dart:224), [Listenrendering](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/today_page.dart:285), [Menge vor Zähler schreiben](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/logic/counter_service.dart:45), [Zähler nur aus Repository lesen/schreiben](C:/Users/madde/flutter_projects/ZEROHERO25/lib/features/today/widgets/today_home_tab.dart:357). Kleine Korrekturidee: Gesamtmenge und Getränkezähler in einem reaktiven Tageszustand speichern; unmittelbar nach Erfassung die bestätigte Anzahl zeigen.
