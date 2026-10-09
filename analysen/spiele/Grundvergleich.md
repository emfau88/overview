# Fünf Browsergames – gemeinsame Grundübersicht

Stand: **09.10.2026**. Diese Gegenüberstellung bündelt die eigene begrenzte Prüfung von HEXFRONT, GALALAXY, ROOSTER RAGE, KESSELKRAWALL und CORE ARENA. Sie ist ein gemeinsamer Leseschlüssel zu den fünf Einzelanalysen, keine sechste Produktanalyse und keine bereits beschlossene Umsetzungsplanung.

## Was die Runde tatsächlich abdeckt

Alle fünf Spiele wurden selbst im Browser bedient; anschließend wurden ausgewählte aktive Codepfade gezielt geprüft. Bei vier Spielen wurde die öffentliche Fassung gespielt. KESSELKRAWALL wurde mit frischem Spielstand in einem unveränderten lokalen Export des öffentlichen main-Commits geprüft, damit die bestehende öffentliche Kampagne erhalten bleibt. Der lokale Export ist nicht als byteidentisches öffentliches Bundle nachgewiesen.

Desktop und schmale Browseransichten, Einstieg, konkrete Entscheidungen und ausgewählte Ergebnis-/Rückkehrwege sind dokumentiert. COREs schmale Prüfung betrifft nur das Match-Setup. Vorhandene Spielstände von GALALAXY, ROOSTER RAGE und CORE ARENA sind ausdrücklich vom heutigen eigenen Fortschritt getrennt. ROOSTERs eigener Lauf erzeugte regulär +5 kernels; kein vorhandenes Profil wurde gelöscht.

**Das ist eine brauchbare gemeinsame erste Basis. Es ist keine vollständige Prüfung aller Spielmodi, Kampagnen, Bosse, Geräte oder langfristigen Spielmotivation.** Langsame Werkzeugabstände lassen keine verlässliche Bot-/Schwierigkeitsnote zu. Kurze Siege und Niederlagen sind keine Reichweiten-, Bindungs- oder Wirtschaftlichkeits-Kennzahlen. Keine Produktverbesserung wurde bislang umgesetzt.

## Schnellvergleich

| Spiel | Was im eigenen Check bereits trägt | Wichtigster begrenzter Ansatz | Noch entscheidende Aussagegrenze |
|---|---|---|---|
| [HEXFRONT](../hexfront/Grundanalyse.md) | Klarer Kartenkern; Ziehen erobert Gebiete, Gegner reagieren, Niederlage und Retry funktionieren. | Missions-/Versorgungsinfos mobil zugänglich machen; Resultdialog-Überlauf gezielt beheben. | Kein eigener Sieg-/Freischaltungspfad, keine Kampagnen- oder Echtzeit-Balancenote. |
| [GALALAXY](../galalaxy/Grundanalyse.md) | Eigenes Ausweichen, Autofeuer und ein sichtbar wirksames Multi-Cannon-Upgrade; Pause und Retry funktionieren. | Kleines HUD und frühes Fortschrittsziel verständlicher machen; Menü-Tastaturwege gezielt nachprüfen. | Erster Boss und Sektorwechsel ungespielt; echte Touchführung und Langzeitwirkung offen. |
| [ROOSTER RAGE](../rooster-rage/Grundanalyse.md) | Wiedererkennbare Cartoonwelt; eigener Run, klarer Support-Chick-Effekt, Pause und nachvollziehbare Ergebnisbelohnung. | Frischen Einstieg kurz gegenprüfen; Hub-/Upgradeinformationen und erweiterte Settings ruhiger ordnen. | Bereits fortgeschrittenes Profil; Boss und längere Handybedienung nicht geprüft. |
| [KESSELKRAWALL](../kesselkrawall/Grundanalyse.md) | Geführter erster Lauf, zwei eigene Siege, automatisches Verschmelzen, Familienboni und sehr ordentlich kompakte mobile Darstellung. | Kaufgrenze mit sichtbarem Shop-Hinweis erklären; Merge-/Familienpunkte bei Bedarf knapp präzisieren. | Isolierte Testkopie; keine Niederlage, kein Siegelbruch oder kompletter Achtkampfabschluss. |
| [CORE ARENA](../core-arena/Grundanalyse.md) | Drei klare Einstiege, bedienbares Match-Setup, eigene Kernsteuerung und funktionierende Menüpause. | Trainingsbestätigung und Zuordnung der Lernaufgaben verlässlich machen; erste Waffenstation konkret erklären. | Keine empirische Bot-Balancebewertung, kein CTF-/Karrierecheck; eigene Pulse-Aufnahme noch nicht gesichert. |

## Welche Befunde zuerst genauer betrachtet werden sollten

**CORE ARENA: Trainingsaussage verlässlich machen.** Hier gibt es eine konkrete Diskrepanz zwischen offenem Lernschritt und „Kampfprüfung bestanden“. Der aktive main-Code prüft beim Abschluss keine erfüllten Aufgaben und kann außerdem Botaktionen als menschliche Tutorialleistung werten. Das sollte vor zusätzlichen Spielsystemen geklärt werden. Ein Siegzwang ist dabei keine automatisch richtige Regel. Nutzerhinweise zu schweren Bots oder zu viel Sci-Fi bleiben separate Prüffragen; daraus wurde kein pauschales Urteil übernommen.

**Verständnisprobleme jeweils klein angehen.** Bei HEXFRONT fehlen in der schmalen Spielansicht erreichbare Ziel-/Versorgungsinformationen, bei GALALAXY wirken HUD und frühes Fortschrittsziel knapp. Bei KESSELKRAWALL verhindert die Kaufregel zu wenig Gold korrekt, aber das Fehlerfeedback liegt im nicht sichtbaren Arena-Zweig statt im Shop. Dies sind konkrete kleine Ansatzpunkte; sie rechtfertigen keinen vollständigen Umbau.

**Vorhandene Stärken erhalten.** ROOSTERs unmittelbare Upgrade-Wirkung, KESSELKRAWALLs mobile Verdichtung und COREs brauchbare Setup-Struktur sind gute Grundlagen. Ein ruhigerer Einstieg kann sinnvoll sein, ohne Systemtiefe und eigenen visuellen Charakter wegzunehmen. Für ROOSTER hängt die genaue Änderung am noch ungeprüften frischen Profil.

## Sinnvoller Anschluss ohne Mammutprojekt

1. Die fünf Kurzfassungen zusammen mit den drei App-Piloten und sieben Web-Grundanalysen ansehen. Daraus **wenige konkrete Prioritäten** wählen: Nutzergewinnung bei Apps, Rolle der Homepage und höchstens ein kleines Spielpaket für die erste Umsetzung. Keine automatische Umsetzung aus dieser Tabelle ableiten.
2. Für das tatsächlich gewählte Produkt nur die Entscheidungslücken schließen, die das erste Paket betreffen. Beispiele: COREs eigene Waffenaufnahme und Aufgabenprüfung, ein frischer ROOSTER-Einstieg oder HEXFRONTs echter Siegpfad. Eine volle Kampagnen-/Gerätematrix für jedes Spiel ist kein notwendiger nächster Gesamtschritt.
3. Nach tatsächlicher Änderung den betroffenen Weg gezielt erneut prüfen. Danach können wenige echte Spieler helfen, Verständnis und Spielgefühl unter normalem Reaktionstempo zu beurteilen. Solche Reaktionen liegen bislang nicht vor; Verbesserungswirkung darf nicht allein aus einem Codefix behauptet werden.

Bei den Apps bleibt der nächste belastbare Schritt der Abgleich mit der tatsächlich veröffentlichten Android-Fassung und ein begrenzter nativer Test der priorisierten Wege. Für die zentrale Website bleibt die Entscheidung zwischen Dienstleistungsangebot und einer klar gegliederten Präsenz mit Games/Apps offen. Die Bestands- und Grundanalysen liefern dafür Material, treffen diese Strategieentscheidung aber noch nicht.

## Zurückgestellt und erhalten

MORE THAN WOMBAT sowie verwandte und übrige Spiele bleiben auf ausdrücklichen Nutzerwunsch im Bestand, werden aktuell aber nicht getestet. Eine mögliche spätere Verwerfung ist eine offene Option des Nutzers, kein Analyseurteil. Between ist weiterhin nur inventarisiert. Umfang, Originalaufträge und bisherige Historie bleiben im [zentralen Kontext](../../dashboard/context.json) erhalten.

Die Einzelberichte enthalten ausführliche Stärken, Befunde, Nachweise, Prüfgrenzen und jeweils wenige vorgeschlagene Maßnahmen. Bilder und Herkunft stehen in den jeweiligen Screenshot-Manifesten; unbekannte Produkt-KPI bleiben unbekannt.
