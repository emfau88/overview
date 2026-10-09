# MewTrack: visuelle Quellenprüfung und Produktworkflow

Stand: 09.10.2026. Geprüft ist die **native Android-Quelle** unter `C:\Users\madde\flutter_projects\MEWING 2.0\app`, Modul `app`, Package `com.chargegeist.mew`, Version **0.9.4 / Code 13**. Dieser Bericht beschreibt aktive Compose-Oberflächen und vorhandene Bildquellen. Er ist **kein ausgeführter Android-UI- oder Kameratest**. Gleiche Versionen von Quelle und Store beweisen noch keine identische Binärquelle.

## Einschätzung

MewTrack hat einen verständlichen, begrenzten Produktkern: dieselben drei Gesichtswinkel wiederholt aufnehmen, privat ablegen und zu zwei Daten vergleichen. Das ist als persönliches Fototagebuch klarer und glaubwürdiger vermittelbar als eine versprochene Kieferveränderung. Die Gestaltung ist in der Quelle konsequent: dunkle Flächen, limettengrüne Hauptaktionen, abgerundete Karten und wenige Hauptbereiche. Die tatsächlich gerenderte Anmutung, Kamerabedienung und Schriftlesbarkeit müssen auf Android geprüft werden.

Ein kompletter Gestaltungsneubau ergibt sich aus dieser Quellenprüfung nicht. Die sinnvollsten kleinen Arbeiten sind eine verlässliche Darstellung des tatsächlichen Vergleichs, besser lesbare Hilfstexte und ein schnellerer Weg zur ersten vollständigen Aufnahme. Die Store-Bilder und das installierte Release müssen dabei dieselben Funktionen zeigen.

## Welche Oberflächen tatsächlich angeschlossen sind

`MainActivity.kt:30–32` wählt beim ersten Start Onboarding, danach Home. `ui/navigation/AppNavGraph.kt` verbindet diese acht Routen; Review ist ein Zustand innerhalb der Capture-Route.

| Oberfläche | Aufgabe und sichtbare Elemente aus aktiver Quelle |
|---|---|
| Onboarding | Eine Willkommensseite mit Produktname, privatem Fototracking, Speicherhinweis, Hinweis auf fehlende medizinische/orthodontische Beratung und „Get Started“. |
| Home | Heutiger Check-in-Status, gegebenenfalls letzte Session mit drei Vorschaubildern, täglicher Hinweis, Startaktion, Freikontingent/Lifetime-Status und Speicherhinweis. |
| Capture | Front, linkes Profil, rechtes Profil; Kameraberechtigungszustände, Leitoval, erkannter Gesichtsrahmen, Führungstext, Fortschritt 1/3 bis 3/3; manuelle oder automatische Aufnahme. |
| Review innerhalb Capture | Drei Vorschauen, Bewertung der Ausrichtung, einzelne Wiederholung, Speichern und Verwerfen. |
| Gallery | Einträge nach Datum mit drei Bildern; Öffnen einer Session und Compare-Aktion. Leerer Zustand erklärt, dass ein erster Check-in nötig ist. |
| Session Detail | Größere Fotos aller Winkel, technische Winkelmetadaten sofern vorhanden, Vollbild mit Zoom, Löschen mit Bestätigung und Vergleich mit anderem Datum. |
| Compare | Zwei nebeneinanderstehende Fotos desselben Winkels; Front/Left/Right, Auswahl „Earlier“ und „Later“, Datumsbeschriftung und Vollbild mit Zoom. Unter zwei Sessions wird der Vergleich erläutert statt leer dargestellt. |
| Settings | Auto Capture, Haptik, Aufnahmeton, alle Daten löschen mit Bestätigung, Lifetime-Status/Wiederherstellung, Datenschutztexte und Versionsname. |
| Paywall | Einmalkauf für unbegrenzte Sessions, Leistungsübersicht, Schließen und Wiederherstellen. Preise/Abrechnungserfolg wurden hier nicht geprüft. |

Die dauerhafte Navigation besteht aus **Home / Gallery / Settings**. Capture, Detail, Compare und Paywall laufen ohne untere Navigation. Die zugehörigen Screen-Dateien existieren und werden von der Navigation verwendet; dies ist kein aus einem historischen Konzept übernommener Bildschirmbestand.

## Nachvollziehbarer erster Nutzen

Der in der Quelle angelegte Weg lautet: Willkommen lesen → Home → ersten Check-in starten → Kamera zulassen → Front/links/rechts aufnehmen → alle drei Bilder prüfen → speichern → letzte Session oder Gallery öffnen. Nach einer weiteren Session wird der Datumsvergleich sinnvoll nutzbar. Das Produkt braucht für seinen ersten Nutzen keine Kontoerstellung und in den Oberflächen keinen Upload-Schritt. Ob Speicher- und Offlineaussagen vollständig stimmen, wird im separaten Codebericht geprüft.

Die Ausrichtungshilfe passt gut zu diesem Kern. Die Rückmeldung „Good alignment“ wird ausdrücklich auf **Kopfwinkel und Stabilität** bezogen; sie wird in der geprüften UI nicht als Attraktivitäts-, Kiefer- oder Veränderungswert ausgegeben (`CaptureScreen.kt:157–185,318–349`). Gerade diese klare Begrenzung sollte der Auftritt beibehalten.

## Konkrete visuelle und UX-Befunde

### V01: informative Hilfstexte sind sehr kontrastarm

**Quellcodebefund und berechneter Wert:** `TextTertiary` ist `#5C6470`. Gegen Background `#0D0F12` ergibt sich ungefähr **3,21:1**, gegen SurfaceRaised `#1A1D22` ungefähr **2,83:1**. Berechnet aus den unveränderten sRGB-Farbwerten und relativer Leuchtdichte, ohne Screenshot-Schätzung. Diese Farbe erscheint unter anderem bei Schrittzahl, Datenschutzhinweisen, Versions-/Speichertexten, leeren Zuständen und Datumsinformationen. `Type.kt` definiert bodySmall mit 12sp und labelSmall mit 11sp.

Zum Vergleich: Der [W3C-Orientierungsmaßstab für normalen Text](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) liegt bei 4,5:1. Hier wird dieser Maßstab für die Lesbarkeitsprüfung verwendet; es ist keine vollständige Konformitätsprüfung einer nativen App. Deaktivierte Aktionen sind von informativen Texten getrennt zu behandeln.

**Kleine Verbesserung:** Bedeutungsvolle Hilfs-, Datums- und Datenschutztexte heller setzen, etwa über den bereits vorhandenen TextSecondary-Ton. Dessen Kontrast zu Background liegt bei ungefähr 7,52:1. Die dunkle Gestaltung kann bestehen bleiben.

**Nachprüfung:** Auf Android bei normaler und größerer Schrift, reduzierter Bildschirmhelligkeit und Tageslicht die Hilfstexte ohne Anstrengung lesen. Keine durchgeführte Geräteprüfung behauptet.

Quellen: `ui/theme/Color.kt`, `ui/theme/Type.kt`, `ui/home/HomeScreen.kt:263–285`, `ui/capture/CaptureScreen.kt:262–269`, `ui/settings/SettingsScreen.kt:191–199,244–262`.

### V02: die erste Aufnahme steht hinter ergänzendem Inhalt

**Quellcodebefund:** Home ordnet Today, bei vorhandenen Daten Last Session, danach immer die Daily-Guidance-Karte und erst anschließend die Startaktion an. Die Seite ist scrollbar. Ein Erstnutzer liest somit zusätzlichen Tagesinhalt, bevor er den Kernschritt erreicht. Dass der Button auf einem bestimmten Gerät unter dem sichtbaren Bereich liegt, wurde nicht beobachtet.

**UX-Einschätzung:** Für ein Fototagebuch sollte eine erste gute Session möglichst leicht entstehen. Eine wertvolle Tageshilfe kann trotzdem bestehen bleiben; sie muss den Einstieg nicht anführen.

**Kleine Verbesserung:** Startaktion direkt bei Today platzieren, insbesondere im leeren Zustand. Darunter kurz die drei Winkel und das spätere Vergleichen erklären. Danach kann Guidance folgen. Das ist eine Reihenfolgeänderung und keine Erweiterung um neue Systeme.

**Nachprüfung:** Ein neuer Nutzer findet ohne Erklärung die Aufnahme und versteht nach dem ersten Speichern, warum er wiederkommen soll. Auf einem kleinen Android-Gerät und mit größerer Schrift prüfen.

Quellen: `ui/home/HomeScreen.kt:65–124,126–226,228–258`; leere Gallery: `ui/gallery/GalleryScreen.kt:61–73`.

### V03: vor dem Speichern lässt sich das ganze Foto weniger gut kontrollieren

**Quellcodebefund:** Review zeigt in einer horizontalen Liste feste **110×160dp**-Vorschauen mit `ContentScale.Crop`, Wiederholen-Aktion und Qualitätsbadge. Ein Aufruf des vorhandenen Vollbildbetrachters ist dort nicht angeschlossen. Detail und Compare benutzen dagegen `ContentScale.Fit` und einen aufrufbaren Vollbildbetrachter mit Zoom. Eine tatsächlich abgeschnittene Aufnahme wurde nicht beobachtet.

**UX-Einschätzung:** Gerade vor dem Speichern ist es sinnvoll, vollständige Profilkontur und Bildausschnitt kontrollieren zu können. Kleine Crops und das Alignment-Badge sind dafür nur eine Vorschau.

**Kleine Verbesserung:** Vorhandenen Vollbildbetrachter auch aus Review öffnen oder mindestens das gesamte Foto unverzerrt anzeigen. Profilfotos verschiedener Formate und große Schrift testen. Der Review-Container ist nicht vertikal scrollbar; eventuelle Platzprobleme bei großer Schrift sind deshalb ein Testpunkt, kein nachgewiesener Laufzeitfehler.

Quellen: `ui/capture/CaptureScreen.kt:383–438`; `ui/detail/EntryDetailScreen.kt`; `ui/compare/CompareScreen.kt:155–176,242–248`; `ui/common/FullscreenPhotoViewer.kt`.

### V04: Store-Bilder zeigen Vergleichswerkzeuge und Filter, die diese Routen nicht anbieten

**Live-Store-Beobachtung durch Hauptagent, 09.10.2026:** Im zweiten betrachteten Gallery-Bild stehen „Compare Changes“ sowie die Schalter **Overlay / Grid / Guide Lines** neben zwei Profilbildern. Das Bild verwendet einen Smartphone-Rahmen mit iPhone-artigen Status-/Navigationselementen. Die Live-Beobachtung und vollständige Store-Zuordnung werden im Store-Bericht dokumentiert; hier wird kein heruntergeladenes Marketingbild als native Testaufnahme verwendet.

**Gegenprüfung der Quelle:** Die aktive Compare-Route bietet nebeneinanderstehende Fotos, Winkelwahl, zwei Datumswahlen und Vollbildzoom. Dort sind keine Overlay-, Grid- oder Guide-Lines-Schalter implementiert. Das `PoseGuideOverlay` liegt im Kameraablauf und ersetzt diese Vergleichswerkzeuge nicht. Die Quellenprüfung umfasst CompareScreen, CompareViewModel und die verbundene Navigation.

Die erweiterte Live-Stichprobe umfasst vier von zehn Store-Bildern. Das dritte zeigt eine Galerie mit **All / Front / Left / Right**-Filtern. Die aktive lokale `GalleryScreen.kt` zeigt Sessionkarten mit drei Bildern und Compare-Aktion, keine entsprechende Filterbedienung. Auch dies ist vor einer Änderung mit dem installierten Release abzugleichen. Der [Store-Bericht](store-review.md) hält die vollständige Stichprobe fest.

**Schlussfolgerung mit Grenze:** Für den geprüften lokalen Stand besteht eine konkrete Abweichung zwischen Store-Darstellung und Vergleichsoberfläche. Aus gleicher Versionsnummer folgt noch nicht, dass auch das veröffentlichte Binärpaket genau diesen Stand enthält. Deshalb ist dies zunächst ein abzugleichendes Produktversprechen, keine Behauptung über absichtlich falsche Werbung.

**Kleine Verbesserung:** Installiertes Release 13 prüfen und Store-Bild danach auf die tatsächlich vorhandene Vergleichsfunktion abstimmen. Bestehende native Screens als Grundlage verwenden. Erst einen neuen Overlay-Modus bauen, wenn er nach Nutzerbedarf bewusst Priorität erhält.

Quellen: `ui/navigation/AppNavGraph.kt` Compare-/Gallery-Verbindung; `ui/compare/CompareScreen.kt`, `ui/compare/CompareViewModel.kt`; `ui/gallery/GalleryScreen.kt`; `ui/capture/PoseGuideOverlay.kt`.

## Bildbestand und Herkunftsgrenzen

Die begrenzte lokale Suche umfasste die drei bereits zugeordneten Projektstämme **MEWING 2.0**, **MEWING** und **mewtrackflutter**. Gesucht wurden Bild-/Videoformate und Screenshot-, Preview- oder Demo-Dateinamen, jeweils ohne Build-, Git-, Gradle-, Node- und Dart-Cacheordner.

In der nativen Basis wurden Launcher-PNGs sowie `MEWING 2.0\assets\logo.png` und `assets\2.png` gefunden. Beide größeren Dateien wurden tatsächlich visuell geöffnet: dunkles quadratisches Markenmotiv, limettengrünes M mit seitlicher Gesichtskontur, einmal mit gerundeter Außenform. **Beides sind Logos, keine App-Screenshots.** Die anderen Varianten lieferten ebenfalls Icons, keine lokalen UI-Aufnahmen. Für diesen Suchumfang gibt es daher keine echten lokalen MewTrack-Screenshots, die als Beleg in einen Screenshotordner kopiert werden könnten. Nicht erfasste externe Ordner sind damit nicht ausgeschlossen.

Der bereits vorhandene Dashboard-Launcher unter `dashboard/assets/mewtrack.png` stammt aus der nativen mipmap-xxxhdpi-Ressource. Er ist ein lokales Produkticon und kein Beleg für den heutigen Store- oder Android-Bildschirmstand.

## Positionierung aus Produktquelle

Das vorhandene Konzept `docs/01_PRODUCT_VISION.md` beschreibt Dokumentation statt körperlicher Veränderung: vergleichbare Front- und Profilfotos über Zeit. Die aktive Onboarding-Quelle vermittelt dieses Prinzip bereits. Home formuliert allgemeiner „Track your jaw progress daily“. Die Store-Nachprüfung sollte zeigen, ob Besucher überall denselben konkreten Nutzen erwarten: **geführte Fotos, private Galerie, nachvollziehbarer Zeitvergleich**.

Für die ersten Store-Bilder ist deshalb eine klare Nutzenfolge sinnvoll: drei wiederholbare Winkel → private Sessions nach Datum → echter Vergleich zweier Zeitpunkte. Tägliche Begleithinweise, automatische Aufnahme und Einmalkauf sind nachrangige Details. Diese Reihenfolge ist ein Vorschlag aus dem vorhandenen Produktablauf, kein behaupteter Conversiongewinn. Die Wirkung und medizinische Vertretbarkeit von Mewing selbst wurden hier nicht untersucht; körperliche Ergebnisse werden aus einem Fototracker nicht abgeleitet.

## Kleine native Nachprüfung, bevor ein Update beschlossen wird

1. Frische Installation von Release 13: Einstieg und drei vollständige Aufnahmen mit realer Frontkamera; Ablehnung/Wiederzulassung der Berechtigung mitprüfen.
2. Review auf kleinem Gerät und größerer Schrift: alle Winkel vollständig kontrollieren, gezielt wiederholen und speichern.
3. Zweite Session und Compare: Datumswahl, Winkelzuordnung, Vollbild, tatsächlicher Bestand der beworbenen Overlay-/Grid-Werkzeuge.
4. Gespeicherte Session nach Neustart wiederfinden; einzelne und gesamte Daten löschen. Die tieferen Zuverlässigkeitsbefunde stehen im separaten Codebericht.

Diese Prüfungen wurden für diesen visuellen Quellenbericht **nicht ausgeführt**. Store-Bilder, Logos und Compose-Quellen ersetzen den nativen Test nicht.
