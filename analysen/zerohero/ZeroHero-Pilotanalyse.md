# ZeroHero – Pilotanalyse

**Stand: 09.10.2026. Mein Urteil:** ZeroHero hat einen brauchbaren kleinen Produktkern und eine bereits ordentliche Gestaltung. Ein begrenztes Verbesserungsupdate ist sinnvoll. Der größte belegte Bedarf liegt bei verlässlicher Erfassung und verständlichem Feedback. Die Console zeigt sehr wenig neue Nutzung; ob die App wirtschaftlich tragfähig werden kann, ist damit noch offen.

Geprüft wurden der aktuelle lokale Quellstand, ein daraus unverändert gebauter Webtest bei 390 × 844 Pixeln, die ersten fünf öffentlichen Store-Bilder sowie die freigegebenen Console-Daten. **Die veröffentlichte Android-App wurde nicht auf einem Gerät getestet.** Die folgenden Laufzeitbefunde gelten für den lokalen Webbuild; die jeweiligen Codepfade wurden unabhängig gegengeprüft. Keine Änderungen am Originalprojekt oder Store vorgenommen.

## Was bereits funktioniert

Der Ablauf ist nachvollziehbar: Konsumarten wählen, den üblichen Tageswert angeben, Zigaretten beziehungsweise konkrete Getränke erfassen und später den Verlauf betrachten. Die klassische Oberfläche wirkt ruhig und lesbar; große Eingabeelemente passen zur schnellen täglichen Nutzung. Die Haltung „im eigenen Tempo, ohne Verurteilung“ ist eine brauchbare Ausgangsbotschaft.

Auch die Store-Bilder sind kein offensichtlicher Totalausfall: konsistente mintgrüne Gestaltung, klare große Überschriften und echte App-Ansichten. Die ersten fünf Motive erklären schnelle Erfassung, eigenen Rhythmus, schwierige Tage, Belohnungen und Verlauf. Ein kompletter visueller Neustart wäre aus dieser Prüfung nicht begründet. Die kleinen Telefoninhalte erklären allerdings weniger als die großen Überschriften; deshalb sollte der konkrete Nutzen für Alkohol und Zigaretten früher deutlich werden.

## Was die Zahlen tatsächlich sagen

| Befund | Wert | Grenze |
|---|---:|---|
| Geräteakquisitionen bei Auswahl „6 Monate“ | **31** | Verfügbare Daten laut Tooltip nur 13.04.–30.08. |
| Erstes Öffnen bei Auswahl „6 Monate“ | **18** | Verfügbare Daten nur 19.04.–07.07.; kein gemeinsamer Nenner mit den 31. |
| Store-Besuche / Installationsklicks | **40 / 5** | Angezeigte Daten 10.07.–05.10.; CTR gerundet **13 %**. |
| Store-Besuche / Installationsklicks zuletzt | **9 / 1** | 08.09.–05.10.; CTR gerundet **11 %**. |

Das ist sehr wenig Volumen. Daraus folgt noch keine zuverlässige Bewertung der Conversion und keine Erklärung, warum Menschen nicht wiederkommen. Die 18.400 angezeigten Geräteimpressionen betreffen andere Flächen und einen anderen verfügbaren Zeitraum; sie sind kein gemeinsamer Funnel mit den Store-Besuchen. Alle Definitionen und Einschränkungen stehen im [KPI-Protokoll](play-console-kpis.md).

## Die wichtigsten Produktprobleme

**Drei Fehler wurden im Webbuild reproduziert:**

- **Gespeicherte Konsumarten erscheinen erst nach Neuladen.** Tabletten mit Referenz 1 aktiviert, Speicherung bestätigt, auf Heute weiterhin unsichtbar; nach Reload vorhanden. Einstellungen wirken dadurch unzuverlässig.
- **Getränke werden nach dem Hinzufügen nicht sofort richtig bestätigt.** Im Auswahlfenster standen zwei Bier, auf Heute weiterhin eines. Erst eine zusätzliche Zigaretteneingabe aktualisierte die Getränkeliste. Gerade ein schneller Tracker muss unmittelbar zeigen, was er gespeichert hat.
- **Dasselbe Bier wie die Referenz wird als „darüber“ eingeordnet.** Die Referenz wird auf 19,7 g gerundet, der Eintrag intern als 19,725 g bewertet. Das ist irreführendes Livefeedback. Der Tagesabschluss verwendet ein anderes Toleranzband; ein falscher XP-Abzug wurde damit nicht nachgewiesen.

**Zwei weitere Punkte sind besonders relevant:**

- **„Heute nichts konsumiert“ fehlt als verständliche Aktion.** Sichtbare 0 bedeutet zunächst auch „noch nichts eingetragen“. Technisch kann etwa Minus bei Zigaretten auf 0 eine echte Null speichern; für Alkohol ist der Weg umständlicher. Laut Code überspringt der automatische Abschluss völlig leere Entwürfe. Ein konsumfreier Tag sollte ausdrücklich dokumentierbar sein. Der zusätzliche Pausenfall – ältere Entwürfe werden möglicherweise nicht nachgeholt – ist aus dem Code belegt, im Zeitverlauf aber noch nicht getestet.
- **Der erste Tag bietet wenig unmittelbaren Ertrag.** Nach drei Einrichtungsschritten erscheint zuerst ein großer leerer Wochenring. Die erste Aktion war auf dem getesteten Bildschirm noch sichtbar; sie war nicht unterhalb des sichtbaren Bereichs versteckt. Trotzdem konkurriert sie mit leeren Auswertungen. Level, Verlauf und Statistik liefern vor dem ersten Abschluss kaum Nutzen. Ein kurzer sichtbarer Tagesstand nach dem ersten Eintrag wäre hilfreicher.

Die Begriffe „üblicher Tageswert“, „Limit“ und „Ziel“ sollten vereinheitlicht werden: Ein bisheriger Durchschnitt ist nicht automatisch ein bewusst gewähltes Ziel. Ebenso sollte das Versprechen, dass schwierige Tage zählen, zur Anerkennung ehrlicher Dokumentation passen. Das sind UX-Einschätzungen, keine gemessenen Nutzerreaktionen.

**Optik:** Klassisch ist als Ausgangspunkt gut genug. Im getesteten Neonmodus waren dunkelgrüne beziehungsweise dunkelrote Rückmeldungen und das Schließen-Symbol auf dunklem Hintergrund schwerer lesbar. Hier genügen gezielte Kontrastkorrekturen.

## Vor einem Update klären: Privatsphäre

Der Store wirbt mit vollständig privatem Offlinebetrieb und keiner Datenerhebung. Der aktuelle Android-Quellstand initialisiert dagegen Firebase Analytics und aktiviert die Erfassung. Eigene Events betreffen App-Nutzung; Konsummengen wurden in deren Parametern nicht gefunden. Tatsächliche Netzwerkübertragung der veröffentlichten Mai-Version wurde nicht geprüft. **Der Befund ist ein Widerspruch zwischen aktuellem Code und versprochenem Verhalten, kein bewiesener Verstoß der veröffentlichten App.** Vor dem nächsten Release müssen Datenfluss, gewolltes Privatversprechen und Store-Angaben zusammenpassen. [Technische Gegenprüfung](review-evidence.md).

## Ein überschaubarer nächster Schritt

1. **Erfassung reparieren:** Einstellungen sofort anwenden, Getränkezähler direkt bestätigen, Referenz und Livefeedback konsistent berechnen. Danach diese Fälle auf Android prüfen.
2. **Nulltage und Pausen zuverlässig behandeln:** explizite Nulltag-Aktion, fehlende Angabe unterscheiden, Nachholen vorhandener Entwürfe gezielt testen und gegebenenfalls korrigieren.
3. **Ersten Nutzen zeigen:** erste Eingabe stärker hervorheben, unmittelbar einen verständlichen Tagesstand zeigen, Referenzbegriffe vereinheitlichen. Kleine Neon-Kontrastkorrektur; keine neuen Quests nötig.
4. **Store und Privatversprechen abgleichen:** vorhandene Gestaltung behalten, aktuelle Ansichten verwenden, Alkohol/Zigaretten konkret benennen. Kurztext als Entwurf: „Track drinks and cigarettes, compare your baseline, and see your progress“. Google empfiehlt Kernnutzen und tatsächliche Funktionen in Texten und Bildern. [Vorschauassets](https://support.google.com/googleplay/android-developer/answer/9866151?hl=en).
5. **Einen kleinen Vertriebsversuch machen:** nach dem Update vier Wochen lang über einen passenden Kanal freiwillige Tester erreichen. Eintragsbestätigung, Nulltage und Rückkehr gezielt beobachten; dieselben verfügbaren Console-Zeiträume vergleichen. Wenige direkte Rückmeldungen wären jetzt aussagekräftiger als ein A/B-Test mit fünf Klicks. Bei erneut kaum Store-Besuchen zuerst die Ansprache und den Vertriebsweg prüfen.

Die Hoffnung auf einen automatischen Schub durch ein Update sollte keine Planungsvoraussetzung sein. Google beschreibt Nutzungs- und Qualitätssignale; eine garantierte Hochstufung allein durch eine neue Version ist daraus nicht belegt. [Google: User metrics](https://developer.android.com/quality/core-value/user-metrics).

**Wirtschaftliche Einschätzung:** Der Produktkern rechtfertigt diesen kleinen Versuch, aber noch keinen größeren Ausbau oder eine sichere Umsatzprognose. Zuerst muss sich zeigen, ob passende Menschen den Nutzen verstehen und wiederkommen. Die klare Arbeitshypothese lautet: **ein schneller Tracker für Alkohol und Zigaretten, der den eigenen Verlauf verständlich macht und keine Perfektion verlangt.**

Weitere Belege: [Codebericht](ZeroHero-code-review.md), [Store-Prüfung](store-review.md), [Testumgebung und Versionsgrenzen](runtime/TEST-UMGEBUNG.md). Die Console bestätigt Release 25 (1.0.3) vom Mai; dieselbe lokale Versionsnummer beweist keine identischen Quellen. Der Webbuild wurde erfolgreich gebaut; automatisierte Tests wurden für diese Analyse nicht ausgeführt.
