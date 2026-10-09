# MewTrack – Pilotanalyse und kleine nächste Schritte

Stand: **09.10.2026**. Geprüft wurden native Android-Quellen, öffentliche Store-Darstellung, Play-Console-Kennzahlen und installierte Paketmetadaten. **Die native App und Kamera wurden nicht bedient. Appcode, Store und Releases wurden nicht geändert.** Zwei isolierte Offline-Testversuche wurden durchgeführt: zunächst scheiterte die Gradle-Daemon-Verbindung in der Sandbox; ein gezielter genehmigter Retry außerhalb löste diese Grenze, brach aber nach 41 Sekunden bei `AndroidLocationsBuildService / AndroidDirectoryCreator` während der Plugin-Konfiguration ab. Keine Testaufgaben oder JUnit-Ergebnisse wurden ausgeführt; ein Appimplementierungsfehler ist damit nicht bewiesen. Alle 80 kopierten Original-Eingangsdateien blieben laut SHA-256-Abgleich unverändert. Details in der [Testumgebung](TEST-UMGEBUNG.md).

## Ehrliche Einschätzung

MewTrack ist ein kleines persönliches Fototagebuch mit einem nachvollziehbaren Nutzen: geführte Front- und Profilaufnahmen privat speichern und über Zeit vergleichen. Diesen Kern sollte das Produkt zunächst zuverlässig erfüllen. Die vorhandene schwarz-grüne Storegestaltung wirkt zusammenhängend, die Beschreibung grenzt medizinische Leistungen und körperliche Veränderungsversprechen ausdrücklich aus. Ein kompletter gestalterischer Neubau oder eine große Trainingsplattform ist aus diesem Pilot nicht begründet.

Das stärkste aktuelle Wachstumsindiz ist **zu wenig Reichweite**: In 08.09.–05.10.2026 wurden nur **18 Store-Besucher** und **11 eindeutige Installationsklicks** angezeigt. Die angezeigten 61 % sind wegen der kleinen Grundlage kein belastbarer Qualitätsbeweis; sie rechtfertigen aber auch kein pauschales Urteil, der Store halte alle Menschen vom Download ab. Ob neue Nutzer die Aufnahme abschließen und später wiederkommen, ist noch nicht ausreichend bekannt. Ein App-Update ohne solche Klärung garantiert keinen Algorithmusimpuls.

Vor aktiver Verbreitung sind einige konkrete Punkte zu prüfen: Stimmen beworbene Vergleichswerkzeuge mit dem Play-Release überein? Bleiben Tagesstatus und Freischaltung verlässlich? Können Menschen ihre Fotos kontrollieren und langfristig behalten? Daraus entsteht ein kleiner Reparatur- und Testumfang, keine lange Liste neuer Features.

## Welche MewTrack-Version betroffen ist

Maßgebliche Arbeitsbasis ist `C:\Users\madde\flutter_projects\MEWING 2.0\app`, darunter das Appmodul `app`: Kotlin/Jetpack Compose, **com.chargegeist.mew, 0.9.4 / Code 13**, min API 26, Ziel-SDK 36. Die Console bestätigt Produktionsrelease 13 vom **28.08.2026**, Ziel-SDK 36. Ein erreichbares Android-Gerät enthält ebenfalls Version 13 / 0.9.4, Ziel-SDK 36, mit Play als Installer. Das ist eine gute Produktzuordnung, kein Beweis identischer Quellen/Binaries und kein ausgeführter Gerätetest.

Die zwei weiteren lokalen Implementierungen bleiben als Bestand erhalten. Expo/React Native unter `MEWING` hat widersprüchliche Expo-/native Paketkonfigurationen; Flutter unter `mewtrackflutter` nutzt ein anderes Paket. **Drei Varianten bedeutet nicht drei aktive Store-Apps.** Details und vorhandene Artefakte: [Bestand und Zuordnung](Bestand-und-Zuordnung.md).

## Tatsächlicher Produktkern und Stärken

Aktiv verbunden sind Onboarding, Home, Capture mit Review, Gallery, Session Detail, Compare, Settings und Paywall. Der Ablauf ist: drei Winkel aufnehmen → Bilder prüfen und gegebenenfalls wiederholen → speichern → weitere Session aufnehmen → zwei Termine vergleichen. Ein Konto ist im Ablauf nicht erforderlich.

Die Quelle schützt einige Grundlagen sinnvoll: feste Slots für Front/links/rechts, Ablehnung unvollständiger Sessions und eine Datenbanktransaktion für Session und Fotozeilen. Detail und Compare bieten Vollbild mit Zoom. Kameraausrichtung wird als Kopfwinkel-/Stabilitätshilfe bezeichnet und nicht als Schönheits- oder Kieferwert. Fotos liegen appprivat, Android-Backup ist deaktiviert; eigene Analytics- oder Fotouploadpfade wurden im gescannten Code nicht gefunden. Das ist kein vollständiger Netzwerk-/Sicherheitstest.

Vorhanden sind ein Aufnahme-Countdown, 21 kurze rotierende Hinweise, Tagesstatus und Sessionzähler. **Ein eigener Übungstimer, Übungsprogramm, XP-/Badge-/Streak-System oder Push-Reminder wurde in aktiven Routen nicht gefunden.** Das ist eine Produktabgrenzung, keine Forderung, diese Funktionen nun alle zu bauen. Ausführlich: [Codecheck](MewTrack-code-review.md) und [visuelle Quellenprüfung](Visual-review.md).

## Wichtigste Probleme und offene Produkthypothesen

1. **Store und tatsächliche Vergleichsfunktion abgleichen.** Storebild 2 zeigt Overlay/Grid/Guide Lines, Bild 3 Galerie-Winkelfilter. Die aktuelle native Quelle enthält diese Bedienungen dort nicht; Compare bietet nebeneinanderstehende Bilder, Winkel- und Datumswahl, Gallery komplette Sessionkarten. Zudem wird die aus Detail übergebene Sessionvorauswahl in Compare nicht verwendet. Das ist ein konkreter Quellen-/Store-Abgleich, noch kein reproduzierter Fehler im Play-Binary. Erst tatsächlich vorhandene Funktionen prüfen und Bilder darauf abstimmen; zusätzliche Technik ist keine automatische Pflicht.
2. **Fehlerfälle bei Kauf/Restore und Tageswechsel prüfen.** Ein Billing-Verbindungsfehler kann laut Code-Inferenz den Ladezustand offenlassen; mehrere getrennte Entitlement-Instanzen bergen ein Synchronisationsrisiko. Home berechnet Tag und Tageshinweis nur beim Erzeugen des ViewModels. Ein über Mitternacht bestehender Zustand kann deshalb veraltet bleiben. Keiner dieser Fehler wurde im nativen Gerät reproduziert. Sinnvoll sind wenige gezielte Gegenprüfungen und anschließend nachgewiesene kleine Fixes.
3. **Langzeitnutzen und Fotohoheit verständlich machen.** Drei aktuell gespeicherte vollständige Gratis-Sessions sind erlaubt, maximal eine pro Tag; danach folgt die Lifetime-Paywall. Gleichzeitig empfiehlt Guidance den Vergleich über Wochen/Monate. Ob das Kontingent den längerfristigen Nutzen ausreichend erlebbar macht, ist eine offene Produkthypothese. Löschen senkt den Gratiszähler bewusst. Onboarding erwähnt Export, in aktiven Routen fehlt er; Kauf-Restore bringt Fotos nicht zurück. Löschfehler werden im Code außerdem nicht zuverlässig an die Oberfläche weitergegeben. Noch kein beobachteter Datenverlust.
4. **Einige Texte und der erste Kernschritt verdienen kleine UX-Korrekturen.** Informative kleine graue Texte haben aus den Themefarben berechnet nur etwa 3,21:1 beziehungsweise 2,83:1 Kontrast. Home setzt die Aufnahmeaktion hinter die Tageshilfe. Review bietet kleine zugeschnittene Vorschaubilder ohne den bereits vorhandenen Vollbildbetrachter. Dies sind überprüfbare Quellenbefunde mit konkreten Geräte-Testpunkten, keine Aussage, dass die native Oberfläche in diesem Pilot schlecht bedienbar war.

Alle technischen Fundstellen, Reproideen und Grenzen stehen im [Codecheck](MewTrack-code-review.md); Layout, Kontrastberechnung und Screenbestand in der [visuellen Quellenprüfung](Visual-review.md). Nur Logos/Icons, keine echten lokalen UI-Screenshotbestände wurden in den drei erfassten Projektstämmen gefunden. Ein Webnachbau wurde nicht erstellt.

## Store und Kennzahlen richtig einordnen

Der live geprüfte englische Store zeigt **MewTrack: Jawline Tracker**, ChargeGeist, Health & Fitness, **10+** als öffentliche Downloadklasse, Version 0.9.4 und Update 28.08.2026. Der sichtbare In-App-Kaufbetrag beträgt regional **3,59 €**; der lokale Paywall-Fallback 3,99 € ist kein bestätigter Livepreis. Die ersten vier von zehn Bildern wurden angesehen. Die vorhandene Gestaltung braucht vor allem eine prüfbare echte Funktionsdarstellung und weniger dichte erste Botschaft, keine pauschale Abwertung. [Storeprüfung](store-review.md).

| Kennzahl | Wert und tatsächlicher Bezug |
|---|---|
| Store, jüngeres Fenster | 18 Besucher / 11 Installationsklicks / angezeigte 61 %, 08.09.–05.10.2026 |
| Store, längerer Filter | 104 Besucher / 49 Klicks / 47 %, tatsächlich 10.07.–05.10.2026 trotz „180 Tage“ |
| Geräteimpressionen | 6.120, 13.06.–04.10.2026, 114 Tage |
| Akquisitionen / erste Öffnungen | 55 / 36, 04.07.–19.09.2026, je 78 Tage; keine gesicherte Kohortenquote |
| Monatlich aktive Geräte | 12, Stand 22.09.2026, vorherige 28 Tage |
| 7-Tage-Bindung | 3 als Anzahl, nur 08.–13.06.2026; keine aktuelle Bindungsquote und keine 3 % |
| Bestand | 48 kumulative Installationen, installierte Zielgruppe 9; andere Definitionen als 10+ oder MAU |

Klicks sind keine erfolgreichen Installationen oder Erstöffnungen. Unterschiedliche Wachstumsfenster ergeben keinen gemeinsamen Funnel. Fehlende Crash-/ANR-, Bewertungs- und Umsatzfelder bedeuten nicht null oder Fehlerfreiheit. Vollständige weitere Zähler und Definitionen: [Play-Console-Dossier](play-console-kpis.md).

Die Console nennt eine API-Frist bis 01.11.2026, obwohl aktiver Release 13 bereits Ziel-SDK 36 besitzt. Betroffenen Track/Artefakt oder einen überholten Hinweis klären; **kein SDK-Upgrade auf Verdacht** ableiten. Ein kontoweiter Zahlungskonto-Hinweis vom 02.10.2026 wurde gesehen; Ursache und Kaufwirkung sind ungeprüft. Vor aktiver Kaufwerbung gesondert klären, ohne aus seinem bloßen Vorhandensein einen ausgefallenen Kauf zu behaupten.

## Kleiner nächster Umfang

Zunächst fünf begrenzte native Prüfungen mit Testdaten durchführen:

1. **Erster Check-in:** Berechtigung, Front/links/rechts, gezielte Wiederholung und vollständiges Review; auf kleinem Gerät und mit größerer Schrift.
2. **Wiederfinden und Vergleichen:** gespeicherte Session nach Neustart, mehrere Termine, mittlere Session als Vorauswahl, alle Winkel und Abgleich der beworbenen Werkzeuge.
3. **Tageswechsel:** Home über einen kontrolliert simulierten Datumswechsel/Wiederaufnahme prüfen, ohne die Systemuhr des privaten Geräts zu verändern.
4. **Freischaltung:** Kauf-/Restore-Verbindungsfehler, Abbruch und gemeinsamer Status über Home/Settings; ohne reale Zahlung prüfen, Preis nur aus tatsächlich verfügbaren Produktdaten anzeigen.
5. **Fotohoheit:** einzelne/gesamte Testdaten löschen und Resultat prüfen; Export-/Gerätewechseltext gegen vorhandene Funktionen abgleichen. Keine privaten Nutzerdaten dafür löschen.

Bestätigte Probleme in einem kleinen Update beheben, lesbare Hilfstexte und wahrheitsgleiche Storebilder mitnehmen; tatsächliche Versionshinweise ergänzen. Danach etwa fünf passende freiwillige Menschen, die private Profilfotos dokumentieren möchten, den Ablauf ohne Erklärung ausprobieren lassen. Konkrete Rückfragen: erste vollständige Session geschafft, Vergleich verstanden, Wunsch nach Wiederholung, Umgang mit der Dreisessionsgrenze. Dies ist ein Vorschlag; niemand wurde angeschrieben.

Parallel Reichweite gezielt testen: einen passenden, begrenzten Verbreitungsweg wählen und mit nachvollziehbaren Zeitfenstern Store-Besuche, Klicks, erste Nutzung und spätere Wiederkehr getrennt festhalten. Erst aus solchen Rückmeldungen entscheiden, ob Gratisumfang, Ansprache oder ein einzelnes zusätzliches Werkzeug geändert werden sollte. Preis-/Trainings-/Gamification-Ausbau und wirtschaftliche Tragfähigkeit sind damit noch nicht entschieden.
