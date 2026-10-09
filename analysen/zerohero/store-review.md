# ZeroHero – öffentlicher Store-Auftritt

Stand: **09.10.2026**. Pilotanalyse, keine Änderungen oder Veröffentlichung vorgenommen.

## Was öffentlich bestätigt ist

| Merkmal | Befund |
|---|---|
| Paket | `com.energycrafted.zerohero` |
| Titel | **ZeroHero: Drink & Smoke Less** |
| Entwickler | ChargeGeist |
| Kategorie | Gesundheit und Fitness |
| Installationsklasse | **50+**; keine exakte Downloadzahl |
| Sterne/Rezensionen | Im zugänglichen Auszug keine Aggregation sichtbar; das bedeutet keine bestätigte Zahl von null Bewertungen |
| Letztes ausgewiesenes Update | **22.05.2026** |
| Release-Hinweis | Reparatur eines Tagesabschlussproblems nach dem vorherigen Patch |

Der Text positioniert die App für weniger Alkohol und Zigaretten, mit eigener Ausgangsmenge, schneller täglicher Erfassung, Abzeichen und Verlauf. Datenschutz und ein Einstieg ohne Konto sind wesentliche Verkaufsargumente. [Öffentlicher englischer Google-Play-Auftritt](https://play.google.com/store/apps/details?hl=en_GB&id=com.energycrafted.zerohero).

## Fünf wesentliche Einschätzungen

1. **Die Grundpositionierung ist brauchbar:** schrittweise reduzieren und ohne Druck beobachten. Das sollte die erste Botschaft bleiben.
2. **Die Kurzbeschreibung wird unnötig allgemein:** Sie spricht von schlechten Gewohnheiten. Besser Alkohol/Zigaretten und den persönlichen Verlauf konkret benennen.
3. **Das Datenschutzversprechen braucht Prüfung:** „Nothing shared, nothing stored. Ever.“ ist für einen Tracker missverständlich. Zusätzlich verspricht die Seite vollständigen Offlinebetrieb und deklariert keine Datenerhebung. Ob die veröffentlichte Version das erfüllt, ist unbestätigt; lokale Firebase-Nutzung muss vor einem Update damit abgeglichen werden.
4. **Der Änderungstext vermittelt wenig Nutzerwert:** Ein knapper verständlicher Satz über zuverlässige Tagesabschlüsse würde den sichtbaren Hotfix erklären.
5. **Die ersten fünf Store-Bilder wirken konsistent und lesbar:** Mintgrüne Gestaltung, große englische Überschriften und erkennbare App-Ansichten vermitteln schnellen Einstieg, eigenes Tempo, gute/schwierige Tage, Level/Abzeichen und Trends. Das vierte Bild zeigt Level 3 mit Abzeichen. Insgesamt sind elf Bilder vorhanden; geprüft wurden ausschließlich Bilder 1–5. Eine pauschal schlechte Optik lässt sich daraus nicht begründen. Die Übereinstimmung einzelner Ansichten mit dem nächsten Release sollte dennoch geprüft werden.

Belege für die beobachteten Texte: [ZeroHero bei Google Play](https://play.google.com/store/apps/details?hl=en_GB&id=com.energycrafted.zerohero). Die Bewertungen und Formulierungsvorschläge sind meine Einschätzung.

## Kleiner Verbesserungsvorschlag

Kurzbeschreibung als Entwurf: **„Track drinks and cigarettes, compare your baseline, and see your progress“** (73 Zeichen). Kein neuer Markenname nötig. Erst nach Bestätigung des tatsächlichen Datenflusses Privatsphäre ergänzen.

Die bestehende Bildgestaltung ist eine brauchbare Grundlage. Bei der nächsten Überarbeitung würde ich die ersten Aussagen auf **Deine Ausgangsmenge → schnell eintragen → Wochenentwicklung sehen → nach einem schwierigen Tag weitermachen** konzentrieren und echte Ansichten des geprüften Release verwenden. Level/Abzeichen können als ergänzender Nutzen bleiben; sie sind auch im aktuellen Code aktiv. Google empfiehlt, Kurztexte auf Kernnutzen zu konzentrieren und Screenshots zur Darstellung der echten Funktionen und Bedienung einzusetzen. [Google: Vorschauassets](https://support.google.com/googleplay/android-developer/answer/9866151?hl=en).

## Update und Sichtbarkeit

**Ein Update allein ist kein belegter Wachstumstrigger.** Google nennt Marketingassets, Nutzerwert, aktive Nutzung und Deinstallationen bei der Bewertung für Discovery und Promotion. Ein Update ist sinnvoll, wenn es die ersten Minuten, Zuverlässigkeit oder den wiederkehrenden Nutzen verbessert; eine garantierte Hochstufung bei Veröffentlichung geht aus den geprüften Quellen nicht hervor. [Google: Core value und Discovery](https://developer.android.com/quality/core-value), [Google: User metrics](https://developer.android.com/quality/core-value/user-metrics).

Technische Probleme können die Auffindbarkeit auf betroffenen Geräten einschränken. Google empfiehlt regelmäßige Updates für Verbesserungen und eine kontrollierte, getestete Einführung. [Google: Technical quality](https://developer.android.com/quality/technical).

Play-Console-Daten wurden inzwischen im eingeloggten Browser eingesehen. Kennzahlen, jeweils mit dem zugehörigen Zeitraum und ihrer Bedeutung, werden in [Play-Console-KPIs](play-console-kpis.md) dokumentiert. Sinnvoll bleibt der Vergleich **Store-Besucher → eindeutige Install-Klicks/CTR → tatsächliche Erstnutzung → Wiederkehr/Deinstallationen**, nach Sprache und Herkunft soweit verfügbar. So unterscheiden wir zu wenig Reichweite von einem schwachen Store-Auftritt oder schwacher Bindung. Die aktuelle Store-Performance-Dokumentation beschreibt seit Juli 2026 Klicks/CTR als Berichtsfokus; sie sind nicht automatisch erfolgreiche Installationen. [Google: Store performance](https://support.google.com/googleplay/android-developer/answer/9859173?hl=en-en).

Ein A/B-Test ist später möglich. Bei geringem Traffic kann eine statistisch belastbare Aussage lange dauern; die Console schätzt die benötigte Datenmenge. Zunächst eine klare, nachvollziehbare Verbesserung veröffentlichen und die Werte beobachten. [Google: Store listing experiments](https://support.google.com/googleplay/android-developer/answer/12053285?hl=en&page_id=111073).

## Zwei passende Vergleichspunkte

| App | Was als Vergleich hilft |
|---|---|
| [Sunnyside](https://play.google.com/store/apps/details?id=co.sunnyside) | Ebenfalls Moderation statt zwingender Abstinenz; setzt auf Wochenplanung und Begleitung. Eine ähnliche Positionierung wird bereits angeboten; ZeroHeros Haltung ist allein noch keine Alleinstellung. Das belegt nicht automatisch Nachfrage nach ZeroHero. |
| [DrinkControl](https://play.google.com/store/apps/details?hl=en&id=lv.happymoments.drinkcontrol) | Konkreter Nutzen durch Alkoholeinheiten, Verlauf und Ausgaben; wirbt ebenfalls mit lokalem Privatmodus. ZeroHero sollte seine einfachere tägliche Reduktionssicht und optional beide Konsumarten verständlicher erklären. |

Nur Positionierungsvergleich der öffentlich beschriebenen Angebote; keine Bedienungsprüfung, Wirksamkeitsprüfung oder vollständige Marktanalyse dieser Apps.

## Grenzen und lokale Zuordnung

- Die englische Store-Seite und Bilder 1–5 wurden im Browser geprüft. Die deutsche Store-Fassung wurde nicht geprüft; fehlende deutsche Lokalisierung ist damit **nicht** nachgewiesen.
- Im aktuellen Webtest wirkt die klassische Appgestaltung sauber mit Weiß, Mint und Blau. Das Neon-Thema hat schwächere Kontraste. Das ist ein begrenzter Vergleich des lokalen Webbuilds, keine Prüfung der nativen Store-Version.
- Öffentliche Seiten können zeitversetzt indexiert sein; die angegebenen Daten sind die beim Abruf sichtbaren Angaben.
- Die Play Console zeigt die veröffentlichte Version **25 (1.0.3)** mit Veröffentlichung am **23.05.2026 um 00:04 Uhr laut Console**; die öffentliche Store-Seite nennt **22.05.2026**. Diese Angaben stammen aus unterschiedlichen Ansichten. Die lokale Versionsnummer stimmt überein, beweist aber keine Gleichheit von Quellstand oder Binärdateien. Eine vorhandene APK vom 19.05.2026 mit Code 24 ist älter.
- Lokal geprüft: [README](C:/Users/madde/flutter_projects/ZEROHERO25/README.md) beschreibt Flutter, Hive und gamifizierte Reduktion. Keine eindeutig versionierten Store-Texte im kurzen Dateiscan gefunden. README, lokale aktuelle Version und veröffentlichte App dürfen nicht gleichgesetzt werden.
- Console-Kennzahlen ergänzen die Bewertung; Store-Experimente oder verlässliche Nutzerbefragungen liegen weiterhin nicht vor. Ursächliche Aussagen über geringe Downloads brauchen deshalb mehr als einen einzelnen Kennzahlenstand. Originalcode unverändert; native Android-Laufzeitprüfung weiterhin offen.
