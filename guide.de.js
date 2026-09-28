'use strict';
window.PLAY_GUIDE_DE = {
  "profiles": {
    "purpose": "Ein UV-Profil bündelt Spannung, GPU-Takt und Power-Limit. Über die sechs Plätze im Hauptfenster aktivierst du die gespeicherten Einstellungen mit einem Klick.",
    "benefit": "Du entscheidest: Nutze die vorbereiteten Profile oder deine eigenen. Jeden der sechs Profilplätze kannst du anpassen und mit einem anderen Profil belegen. Auch der Weg zurück ist möglich.",
    "how": "Wähle einen der sechs Profilplätze als Ausgangspunkt. Per Rechtsklick → Edit profile passt du die Werte an. Manage profiles öffnet deine gespeicherten Profile; im Tab Stabilizer findest du die gelernten Korrekturen. Ein Startprofil lässt sich unabhängig vom normalen Play-Autostart festlegen.",
    "limit": "Die Beschreibungen beziehen sich auf die mitgelieferten Profile. Ihre Werte unterscheiden sich je nach GPU-Modell; selbst bearbeitete Profilplätze können andere Einstellungen enthalten. Vergleiche FPS und Verbrauch im selben Spiel und teste die Stabilität auf deiner Karte.",
    "controls": [
      [
        "Profilplätze",
        "Die sechs Profilplätze sind frei belegbare Schnellzugriffe. Du kannst jeden Platz anpassen, seine Belegung durch ein eigenes Profil ersetzen und ihn später wieder zurücksetzen oder leeren. Ein Klick aktiviert das dort gespeicherte Profil global. Du entscheidest, ob du mit vorbereiteten oder eigenen Einstellungen spielst."
      ],
      [
        "Eco",
        "Du möchtest Strom sparen und weniger Abwärme erzeugen? Eco setzt auf einen niedrigeren GPU-Zieltakt als Balanced und eine sparsame Spannung. Das passt etwa zu älteren Spielen oder wenn dein gewünschtes FPS-Limit schon mit weniger GPU-Leistung erreicht wird. Unter voller Last können die FPS niedriger ausfallen als mit den leistungsorientierten Profilen. Auch diesen Profilplatz kannst du anpassen und mit einem eigenen Profil belegen."
      ],
      [
        "Balanced",
        "Du suchst ein Profil für den Spielealltag? Balanced ist der Mittelweg: mehr Taktspielraum als Eco, mit stärkerem Blick auf den Verbrauch als Performance oder Max. Ein passender Einstieg, wenn du flüssig spielen und zugleich effizienter unterwegs sein möchtest. Vergleiche im Spiel, ob es deine gewünschte Bildrate erreicht. Auch diesen Profilplatz kannst du anpassen und mit einem eigenen Profil belegen."
      ],
      [
        "Performance",
        "Dein Spiel fordert die GPU stärker und du möchtest mehr Spielraum für FPS? Performance setzt einen höheren Zieltakt als Balanced und verwendet dafür je nach Modell eine höhere Spannung. Der Schwerpunkt liegt auf Leistung mit Undervolting. Dafür kann der Verbrauch höher ausfallen als mit Eco oder Balanced. Sinnvoll, wenn dir dort bei gleicher Grafikqualität noch Bildrate fehlt. Auch diesen Profilplatz kannst du anpassen und mit einem eigenen Profil belegen."
      ],
      [
        "Max",
        "Du möchtest den größten Taktspielraum der vorausgewählten Profile nutzen? Max ist die leistungsorientierteste Stufe und setzt für dein GPU-Modell den höchsten Zieltakt dieser Auswahl. Der Fokus liegt stärker auf FPS als auf maximaler Ersparnis. Prüfe, ob dir der zusätzliche Takt im Spiel tatsächlich mehr Leistung bringt und auf deiner Karte stabil läuft. Auch diesen Profilplatz kannst du anpassen und mit einem eigenen Profil belegen."
      ],
      [
        "MFG · Multi Frame Generation",
        "Du spielst auf einer RTX-50-GPU mit Multi Frame Generation? MFG kombiniert eine niedrige Spannung mit dem normalen Power-Limit deiner Karte. Gegenüber Eco bleibt dadurch mehr Leistungsspielraum für diese Spielelast. Es ist das dafür vorbereitete UV-Profil; Multi Frame Generation aktivierst du weiterhin im Spiel. Vergleiche Verbrauch und Bildrate mit deinen tatsächlichen Spieleinstellungen. Auch diesen Profilplatz kannst du anpassen und mit einem eigenen Profil belegen."
      ],
      [
        "Custom",
        "Eigene Profile kannst du auf jedem der sechs Plätze verwenden. Passe in Curve editor Spannung, Takt und bei Bedarf Power-Limit oder VRAM-Takt an und speichere die Einstellungen. So kannst du etwa ein Profil für dein Lieblingsspiel erstellen und später mit einem Klick aufrufen. Den Namen und die Werte bestimmst du; Custom im Bild ist ein Beispiel für eine eigene Belegung."
      ],
      [
        "Default",
        "Stellt das Standardprofil deiner GPU wieder her. Deine gespeicherten Profile und Spielzuordnungen werden dadurch nicht gelöscht."
      ],
      [
        "Manage profiles",
        "Gespeicherte Profile bearbeiten, zuweisen oder in einen Slot übernehmen. Der Tab Stabilizer zeigt gelernte Korrekturen und kann daraus eigene Profilkopien speichern."
      ],
      [
        "Rename",
        "Gibt einem Profil einen verständlichen Namen. Das ändert seine Bezeichnung, nicht automatisch seine Tuning-Werte."
      ],
      [
        "Save only / Save as new",
        "Speichert einen Entwurf beziehungsweise eine neue Kopie. Das ist sinnvoll, wenn du Einstellungen vorbereiten möchtest, ohne das aktive Profil sofort zu wechseln."
      ],
      [
        "Community-Profile über UV Try",
        "Unter Curve editor → UV Try findest du weitere Einträge für dein GPU-Modell. Du kannst sie in einen Profilplatz übernehmen, testen und bewerten. So profitierst du von den Erfahrungen anderer und hilfst selbst mit."
      ],
      [
        "Profilplatz zurücksetzen oder leeren",
        "Wähle den Platz im Kurveneditor. Für Platz 1 bis 4 stellt Restore wieder Eco, Balanced, Performance beziehungsweise Max als Belegung her. Bei Platz 5 und 6 leert Clear slot den Platz, sodass du ihn neu belegen kannst. Gespeicherte Profile und Spielzuordnungen bleiben erhalten; ein ungespeicherter Entwurf dieses Platzes wird verworfen."
      ],
      [
        "Edit profile",
        "Rechtsklick auf einen Profilplatz → Edit profile. Der Editor öffnet die vorhandenen Werte zur Bearbeitung."
      ],
      [
        "Use as startup profile",
        "Wendet das gespeicherte Profil bei der Windows-Anmeldung an und beendet den Startprozess. Play-Autostart darf aus bleiben. Shift beim Anmelden überspringt diesen Start."
      ]
    ]
  },
  "pilot": {
    "purpose": "UV Pilot erkennt Spiele anhand der Game Library und verwendet die zugeordneten Profile automatisch.",
    "benefit": "Du kannst für verschiedene Spiele unterschiedliche Einstellungen nutzen, ohne vor jedem Start selbst umzuschalten.",
    "how": "Ordne in der Game Library ein Profil zu und schalte UV Pilot ein. Starte danach das Spiel. Play erkennt den passenden Eintrag und verwendet seine Zuordnung.",
    "limit": "Ein direkt angeklickter globaler Profilplatz schaltet UV Pilot aus. Ein Launcher kann eine andere EXE als das eigentliche Spiel verwenden.",
    "controls": [
      [
        "UV Pilot ein / aus",
        "Ein aktiviert die Spielzuordnungen. Aus verwendet das zuletzt gewählte globale Profil."
      ],
      [
        "Spielerkennung",
        "Play braucht einen passenden Prozesseintrag in der Bibliothek. Bei Problemen die eigentliche Spiel-EXE prüfen, nicht nur den Launcher."
      ]
    ],
    "scenarioTitle": "Unterschiedliche Spiele. Unterschiedliche UV-Profile.",
    "scenario": "Für einen älteren Titel genügt dir ein sparsames Profil. Für ein anspruchsvolles Spiel möchtest du mehr Leistung, für ein anderes eine selbst angepasste UV-Kurve. Ordne jedem Spiel in der Game Library das passende Profil zu. UV Pilot erkennt den Spielstart und übernimmt den Wechsel für dich."
  },
  "library": {
    "purpose": "Die Game Library verknüpft Spiele mit ihren Profilen und verwaltet die Einträge für die Spielerkennung.",
    "benefit": "Ein anspruchsvolles Spiel kann ein anderes Profil erhalten als ein älterer oder leichter Titel. Die Zuordnung wird durch UV Pilot automatisch genutzt.",
    "how": "Suche ein Spiel, wähle sein Profil und aktiviere UV Pilot. Fehlende Spiele kannst du über ihre EXE ergänzen.",
    "limit": "Für die automatische Zuordnung muss die tatsächliche Spiel-EXE erkannt werden. Prüfe bei einem fehlenden Wechsel den Eintrag in der Bibliothek.",
    "controls": [
      [
        "Profilzuordnung",
        "Legt fest, welches Profil UV Pilot bei diesem Spiel verwenden soll. Das globale Profil und die Spielzuordnung sind unterschiedliche Einstellungen."
      ],
      [
        "Add Game",
        "Fügt ein Spiel über seine ausführbare Datei hinzu. So können auch Titel verwendet werden, die in der gemeinsamen Datenbank noch fehlen."
      ],
      [
        "Request a game",
        "Meldet einen fehlenden Titel für die gemeinsame Bibliothek. Hilfreich sind Spielname, die eigentliche Spiel-EXE und ein Store-Link."
      ],
      [
        "Game override / No Override",
        "Ein Spiel-Override kann eine gemeinsame Vorgabe nutzen. No Override nimmt einzelne Spiele aus dieser Vorgabe heraus. Das ist praktisch für Ausnahmen."
      ],
      [
        "Search / Filter",
        "Hilft, Einträge in einer großen Bibliothek zu finden, beispielsweise nach Namen oder Profil."
      ],
      [
        "Stabilizer Adjustments",
        "Zeigt gelernte Korrekturen für die jeweiligen Spiele und Profile. Damit kannst du nachvollziehen, welche Anpassungen erfolgt sind."
      ],
      [
        "Datenbank-Update",
        "Aktualisiert die gemeinsame Liste bekannter Spiele. Das ist getrennt von einem Update der Play-Anwendung."
      ],
      [
        "MFG für ein Spiel wählen",
        "Auf Blackwell/RTX 50 steht auch das MFG-Profil für Spiele mit Multi Frame Generation zur Verfügung. Ordne es dem passenden Spiel zu. UV Pilot verwendet die Zuordnung automatisch, wenn er aktiv ist und das Spiel erkennt."
      ]
    ]
  },
  "curve": {
    "purpose": "Der UV-Kurveneditor legt fest, welche GPU-Frequenz zu einem Spannungspunkt gehört. Zusätzlich lassen sich Power limit und VRAM-Offset bearbeiten.",
    "benefit": "Du kannst dein Profil gezielt auf deine Grafikkarte und deine Spiele abstimmen: Setze einzelne Kurvenpunkte von Hand oder flache die Kurve manuell ab, wie beim klassischen Undervolting. Du kannst auch empfohlene Spannungs- und Taktwerte aus Foren oder Videos direkt eintragen oder Community-Profile über UV Try ausprobieren.",
    "how": "Wähle einen Profilplatz und bearbeite einzelne Kurvenpunkte. Apply curve wendet die gesamte Kurve genau wie im Editor an und speichert sie. Flatline curve hält den Takt des ausgewählten Punkts nach rechts konstant und wendet diese Kurve an. Tooltips erklären beide Aktionen; Flatline zeigt beim Darüberfahren oder Fokussieren eine Vorschau.",
    "limit": "Vorschau des nächsten Play-Stands. Echte Editor-Oberfläche auf Basis einer gespeicherten RTX-5090-Stock-Kurve. Die Beispielwerte sind keine Empfehlung für deine Karte.",
    "controls": [
      [
        "Profilplätze",
        "Wählt das Profil, dessen Kurve du bearbeiten möchtest. Der Entwurf und das momentan aktive GPU-Profil können verschieden sein."
      ],
      [
        "Punkt bearbeiten",
        "Voltage wählt den Spannungspunkt. Frequency bestimmt den Takt an diesem Punkt. Das erlaubt eine gezielte Anpassung statt eines pauschalen Takt-Offsets."
      ],
      [
        "Apply curve",
        "Übernimmt die gesamte Kurve genau wie dargestellt, einschließlich deiner einzeln bearbeiteten Punkte. Wendet das Profil global an und speichert es. Die Kurve wird dabei nicht automatisch abgeflacht."
      ],
      [
        "Save only",
        "Speichert deine Änderungen, ohne die GPU-Einstellungen sofort anzuwenden. Nützlich, um einen Entwurf vorzubereiten."
      ],
      [
        "Save as new",
        "Speichert eine eigene Profilkopie. So kannst du eine Variante behalten und später vergleichen."
      ],
      [
        "Power limit und VRAM",
        "Power limit begrenzt die erlaubte Leistungsaufnahme. VRAM ist ein Takt-Offset für den Grafikspeicher. Weniger Power limit ist kein Ersatz für eine passende UV-Kurve; ein zu hoher VRAM-Takt kann instabil sein."
      ],
      [
        "Read GPU",
        "Liest die aktuell angewandte GPU-Kurve in den Editor ein, ohne sie durch das Lesen zu verändern."
      ],
      [
        "Stock curve",
        "Lädt die Referenzkurve als Entwurf. Das ist hilfreich, um Änderungen von einem Ausgangspunkt aus vorzunehmen. Es ist nicht dasselbe wie Default sofort zu aktivieren."
      ],
      [
        "Undo / Redo",
        "Nimmt eine Bearbeitung zurück oder stellt sie wieder her. Damit kannst du Entwürfe vergleichen und Fehleingaben korrigieren."
      ],
      [
        "UV Try, Auto-UV und Scanner",
        "UV Try bietet Community-Profile. Auto-UV liefert einen NVIDIA-Ausgangspunkt. Der Scanner prüft Kandidaten unter Testlast. Keiner dieser Wege garantiert Stabilität auf jeder GPU."
      ],
      [
        "Expert voltage settings",
        "Öffnet separat freizugebende experimentelle Spannungs- und Taktparameter. Dieser Bereich richtet sich an erfahrene Nutzer und hat zusätzliche Risiken."
      ],
      [
        "Clear slot / Restore preset",
        "Clear slot entfernt die Zuordnung dieses Platzes. Gespeicherte Profile und Spielzuordnungen bleiben erhalten. Bei vorbereiteten Plätzen stellt Restore das jeweilige Preset wieder her. Beides aktiviert die GPU nicht automatisch."
      ],
      [
        "Assign to game",
        "Ordnet das Profil einem Spiel zu. UV Pilot kann es dann beim erkannten Spielstart automatisch verwenden."
      ],
      [
        "Enable UV Pilot",
        "Schaltet die automatische Verwendung deiner Spielzuordnungen ein. Die Zuordnung und das globale Profil werden im UV-Pilot-Bereich genauer erklärt."
      ],
      [
        "Voltage",
        "Wählt den Spannungspunkt der Kurve, den du bearbeiten möchtest. Die daneben angegebene Frequenz gehört zu diesem Punkt."
      ],
      [
        "Frequency (MHz)",
        "Legt den gewünschten GPU-Takt am ausgewählten Spannungspunkt fest. Ein höherer Takt bei gleicher Spannung kann die Stabilität verringern."
      ],
      [
        "Power limit (%)",
        "Begrenzt die erlaubte Leistungsaufnahme relativ zum vorgesehenen Leistungsbudget der Karte. Ein niedrigeres Limit kann Verbrauch, aber auch Leistung reduzieren."
      ],
      [
        "VRAM (MHz)",
        "Ändert den Takt-Offset des Grafikspeichers. Das ist eine separate Einstellung zur GPU-Kurve. Prüfe Speicheränderungen auf Fehler und Stabilität."
      ],
      [
        "Flatline curve",
        "Hält den Takt des ausgewählten Punkts ab dieser Spannung nach rechts konstant. Punkte links davon bleiben erhalten. Anschließend wird die Kurve global angewendet und gespeichert. Mauszeiger oder Tastaturfokus auf der Schaltfläche zeigen die Vorschau."
      ],
      [
        "Offsetbereich und Warnung",
        "Pro Punkt gilt -1000 bis +1050 MHz. Über +1000 MHz erscheint eine Warnung. Ob der Treiber den Wert akzeptiert, hängt von Karte und Treiber ab."
      ]
    ],
    "scenarioTitle": "Du möchtest mehr Feinabstimmung?",
    "scenario": "Passe deine UV-Kurve gezielt an deine Karte an. Du kannst Spannungspunkte und Takt bearbeiten, Power limit und VRAM-Offset abstimmen und eigene Profile speichern. Für weitere Tests steht der Voltage Step Scanner bereit; zusätzliche experimentelle Spannungswerte findest du in den Expert voltage settings."
  },
  "scanner": {
    "purpose": "Der Voltage Step Scanner prüft Spannungspunkte und Takt mit konfigurierbarer GPU-Testlast. Ergebnisse und Testverlauf helfen dir, deine eigenen Einstellungen weiter abzustimmen.",
    "benefit": "Du kannst einen gewählten Spannungspunkt prüfen, passende Taktraten suchen oder den Grafikspeicher gesondert testen. So erhältst du Anhaltspunkte für ein Profil, das zu deiner Karte passt.",
    "how": "Öffne Curve editor → Scanner. Wähle ein Ausgangsprofil, die Zielspannung und einen Testmodus. Lege Testdauer und Schrittgröße fest, starte den Test und prüfe das Ergebnis anschließend auch in deinen Spielen.",
    "limit": "Aktuell wird eine einzelne NVIDIA-GPU benötigt. Ein bestandener Lauf ist kein Stabilitätsnachweis für alle Spiele. Testlasten können einen instabilen Kandidaten zum Absturz bringen.",
    "controls": [
      [
        "Test konfigurieren",
        "Wählt die zu prüfenden Einstellungen und den Testumfang. Ein kurzer Test sagt weniger über längere Spielesitzungen aus als eine passende, breitere Prüfung."
      ],
      [
        "Start / Abbrechen",
        "Start beginnt die Testlast, Abbrechen beendet den laufenden Test. Speichere offene Arbeit, bevor du in Play einen echten Test ausführst."
      ],
      [
        "Ergebnisse / History",
        "Zeigt gespeicherte Ergebnisse und frühere Durchläufe. Ein bestandener Lauf ist ein Testergebnis unter seinen jeweiligen Bedingungen, keine allgemeine Stabilitätsgarantie."
      ],
      [
        "NVIDIA Auto-UV",
        "Ermittelt nach der NVIDIA-Methode einen Ausgangspunkt aus der Werkskurve deiner GPU. Diesen kannst du in einem Profilplatz speichern und aktivieren. Auto-UV selbst führt keinen Stabilitätstest durch."
      ],
      [
        "UV Try",
        "Öffnet Community-Profile mit vorausgewähltem GPU-Modell. Du kannst Einträge vergleichen, in einen Profilplatz übernehmen, auf deiner Karte testen und deine Erfahrung bewerten. Dafür musst du keine eigene Kurve von Hand erstellen."
      ],
      [
        "Verify point",
        "Prüft einen gewählten Spannungspunkt und Takt unter der konfigurierten Testlast. Damit kannst du einen bestimmten Kandidaten untersuchen."
      ],
      [
        "Scan frequency",
        "Sucht schrittweise nach einer passenden Frequenz für die gewählte Zielspannung. Testdauer und Schrittgröße bestimmen, wie der Suchlauf vorgeht."
      ],
      [
        "VRAM-only · stock core",
        "Prüft den Grafikspeicher mit dem GPU-Kern im Standardzustand. Das hilft, Änderungen am Speicher getrennt von der eigenen Kernkurve zu untersuchen."
      ],
      [
        "Optimize point · voltage probes",
        "Untersucht weitere Spannungspunkte rund um deinen Kandidaten. Einen gefundenen Punkt kannst du anschließend gezielt verifizieren."
      ]
    ]
  },
  "dcc": {
    "purpose": "DCC regelt den Takt deiner Grafikkarte beim Spielen automatisch. Wird nicht die volle Leistung benötigt, kann das Strom sparen und die Abwärme reduzieren.",
    "benefit": "Wenn zusätzlicher Takt im aktuellen Spiel wenig bringt, kann DCC helfen, unnötigen Energiebedarf zu reduzieren. Der tatsächliche Nutzen hängt vom Spiel und der Hardware ab.",
    "how": "Wähle den Algorithmus in DCC settings. DCC und Stabilizer werden alternativ genutzt. Unter History wechselst du zwischen Learned profiles und Blocked profiles. NVIDIA Experimental konfigurierst du vor dem Spielstart.",
    "limit": "Die neue History mit UV-Profilübernahme und Blockliste kommt mit dem nächsten Update. Eine UV-Kopie braucht vollständig erfasste Kurvendaten. Sie enthält den festen Zustand, keine dynamische DCC-Regelung.",
    "controls": [
      [
        "DCC Automatic",
        "Sucht im laufenden Spiel schrittweise einen sinnvollen GPU-Takt und prüft dabei Leistung und Auslastung. Der Lernstand wird pro Spiel gespeichert. Verwendet auch in Multi-GPU-Systemen die in Play ausgewählte Karte."
      ],
      [
        "NVIDIA Power Efficiency Mode",
        "Fordert einen Effizienzmodus des NVIDIA-Treibers an. Das Ziel ist von einem FPS-Limiter getrennt. Dieser separate DCC-Modus benötigt derzeit eine einzelne NVIDIA-GPU und ist unabhängig von den Expert-Spannungseinstellungen. Nach Änderungen das Spiel neu starten."
      ],
      [
        "Set efficiency target manually",
        "Ersetzt das automatische Effizienzziel durch eine eigene Vorgabe. Das kann bei besonderen Monitor- oder Spielkonstellationen sinnvoll sein. Es ist keine garantierte Bildrate."
      ],
      [
        "FPS-Limit und VSync",
        "NVIDIA Max Frame Rate begrenzt FPS. Global NVIDIA VSync steuert VSync im Treiber. Das sind zusätzliche Einstellungen; bereits im Spiel oder Treiber gesetzte Vorgaben nicht unnötig doppeln."
      ],
      [
        "Diagnose und Lernstände",
        "Performance Logging zeichnet den Verlauf für die Fehlersuche auf. Die grundlegende Diagnose fehlender GPU-Messwerte ist auch ohne diese Aufzeichnung verfügbar."
      ],
      [
        "Reset selected learned profile",
        "Verwirft nach Übernahme nur den ausgewählten Lernstand. Nützlich, wenn dieses Spiel neu lernen soll."
      ],
      [
        "Änderungen anwenden",
        "Apply übernimmt den Einstellungsentwurf einschließlich der EXE-Blacklist. Cancel verwirft diese Änderungen. Eine zuvor über Save as UV profile gespeicherte Profilkopie bleibt erhalten."
      ],
      [
        "DCC und Stabilizer",
        "Beide Funktionen greifen in das Profilverhalten ein und können nicht gleichzeitig aktiv sein. Schalte die andere Funktion bewusst aus."
      ],
      [
        "NVIDIA Max Frame Rate",
        "Begrenzt die vom Spiel berechneten Bilder pro Sekunde. Ein sinnvolles Limit kann unnötig hohe Bildraten und damit zusätzliche Last vermeiden. Der Limiter ist vom DCC-Algorithmus getrennt."
      ],
      [
        "Global NVIDIA VSync",
        "Synchronisiert die Bildausgabe über den NVIDIA-Treiber mit der Bildwiederholrate. Das kann Bildrisse vermeiden. Wenn VSync schon im Spiel oder Treiber gesetzt ist, musst du es hier nicht zusätzlich einschalten."
      ],
      [
        "Enable performance logging",
        "Zeichnet Bildrate, GPU-Takt und Leistungsaufnahme lokal auf. Das hilft, das Verhalten von DCC nachzuvollziehen oder einen Fehlerbericht vorzubereiten."
      ],
      [
        "History → Learned profiles",
        "Gespeicherte Lernstände pro Spiel. Per Rechtsklick als UV-Profil übernehmen oder Automatic DCC für dieses Spiel blockieren. Blockieren erhält den Lernstand."
      ],
      [
        "Save as UV profile",
        "Rechtsklick auf einen Lernstand → Save as UV profile → Slot 1–6. Speichert eine feste Kurve mit dem niedrigsten gespeicherten Lerntakt und den zugehörigen Einstellungen. Aktiviert sie nicht."
      ],
      [
        "History → Blocked profiles",
        "Add öffnet die EXE-Auswahl. Alternativ ein gelerntes Spiel per Rechtsklick blockieren. Apply übernimmt die Liste; Unblock selected erlaubt die EXE wieder. Gilt nur für Automatic DCC."
      ],
      [
        "Warum ist Save as UV profile ausgegraut?",
        "Alten Einträgen kann die gespeicherte UV-Kurve fehlen. Für den Export: Eintrag zurücksetzen, Apply klicken und mit DCC erneut spielen. Der bisherige Lerntakt funktioniert auch ohne Export weiter."
      ],
      [
        "Was wird blockiert?",
        "Der EXE-Dateiname gilt in allen Ordnern. Apply beendet auch eine laufende DCC-Sitzung dieses Spiels. NVIDIA Experimental und globale FPS-/V-Sync-Einstellungen bleiben aktiv."
      ]
    ],
    "scenarioTitle": "2.700+ MHz, aber nur 30 bis 50 % Auslastung?",
    "scenario": "Stell dir vor, du spielst mit V-Sync oder einem FPS-Limit, vielleicht zusammen mit G-SYNC. Deine Grafikkarte ist nur zu 30 bis 50 % ausgelastet, taktet aber trotzdem mit 2.700 MHz oder mehr. Genau hier kommt DCC ins Spiel: weniger Takt, bessere Auslastung und je nach Spielraum deutlich weniger Verbrauch, während deine gewünschte Bildrate erhalten bleibt."
  },
  "overlay": {
    "purpose": "Das Overlay zeigt ausgewählte Leistungs- und Sensorwerte auf dem Desktop oder über erkannten Spielen.",
    "benefit": "Du kannst während des Spielens sehen, wie sich ein Profil auf Bildrate, Verbrauch und Temperatur auswirkt, ohne ständig zu einem anderen Fenster zu wechseln.",
    "how": "Overlay einschalten, unter Display on den Einsatzort wählen und in Readings die gewünschten Werte aktivieren. Layout und Colors passen die Darstellung an.",
    "limit": "Unterstützt werden Desktop, Fenster und randlose Fenster. Exklusives Vollbild wird seit v2.0.8 nicht unterstützt. Einige Werte brauchen kompatible Sensoren oder optionales PawnIO-Setup.",
    "scenarioTitle": "Woran erkenne ich, dass mein UV-Profil wirkt?",
    "scenario": "Beobachte GPU-Takt, Spannung und Leistungsaufnahme zusammen mit deinen FPS. Vergleiche dieselbe Spielszene mit gleichen Einstellungen und gleichem FPS-Limit, einmal mit Standardeinstellungen und einmal mit UV-Profil. Weniger Spannung bei vergleichbarem Takt zeigt die Wirkung des Undervoltings. Weniger Watt bei ähnlicher Bildrate zeigt den Effizienzgewinn. Ein niedriger Verbrauch allein kann auch an geringerer Last liegen. Alternativ zur Play-Telemetrie kannst du HWiNFO oder GPU-Z nutzen.",
    "controls": [
      [
        "Overlay aktivieren",
        "Schaltet die Anzeige ein oder aus. Das Einstellungsfenster oder seine Vorschau zu öffnen ist nicht dasselbe wie das Overlay zu aktivieren."
      ],
      [
        "Display on: Desktop oder Game",
        "Desktop zeigt das Overlay auf dem Desktop. Game zeigt es über einem erkannten Spiel im Vordergrund. So bestimmst du, wann die Werte sichtbar sein sollen."
      ],
      [
        "Anzeige, Werte, Layout, Farben, Profile",
        "Display legt Position und Aussehen fest. Readings wählt Messwerte, Layout ordnet sie an, Colors steuert Farben. Profiles verwaltet gespeicherte Overlay-Layouts."
      ],
      [
        "Position und Darstellung",
        "Position, Horizontal und Vertical legen den Ort fest. Font size bestimmt die Textgröße, Opacity die Deckkraft des Hintergrunds. Damit bleibt das Overlay gut lesbar und stört möglichst wenig."
      ],
      [
        "Live preview",
        "Zeigt die Anordnung direkt während der Bearbeitung. Du kannst Werte auswählen und im echten Designer verschieben. Die Originalaufnahme verwendet simulierte Testwerte."
      ],
      [
        "FPS / 1% Low / Frame time",
        "FPS beschreibt die Bildrate. 1% Low hilft, langsamere Abschnitte zu beurteilen. Frame time zeigt die Zeit je Bild; Ausschläge können auf Ruckler hinweisen."
      ],
      [
        "GPU power / Voltage / Clock",
        "GPU power zeigt die Leistungsaufnahme in Watt, Voltage die Spannung und Clock den GPU-Takt in MHz. Achte auf die Spannungseinheit: 0,950 V sind 950 mV. Vergleiche Standard und UV-Profil in derselben Spielszene bei gleichen Einstellungen und gleichem FPS-Limit. Weniger Spannung bei vergleichbarem Takt zeigt die Wirkung des Undervoltings; weniger Watt bei ähnlichen FPS den Effizienzgewinn. Niedrige Watt allein können auch durch weniger Last entstehen."
      ],
      [
        "Temperature / Hotspot",
        "Zeigt verfügbare Temperatursensoren. Nicht jede Karte liefert jeden Wert; Hotspot und GPU-Temperatur sind unterschiedliche Messgrößen."
      ],
      [
        "CPU / RAM / VRAM",
        "Zusätzliche Auslastungs- und Speicherdaten helfen bei der Einordnung von Engpässen. Verfügbarkeit hängt vom Sensor und vom System ab."
      ],
      [
        "Show / hide shortcut",
        "Blendet ein eingeschaltetes Overlay per Tastenkombination ein oder aus. Praktisch, wenn es kurzzeitig freie Sicht lassen soll."
      ],
      [
        "Sensor support",
        "Richtet bei Bedarf zusätzliche Sensorunterstützung ein. Das kann Internetzugang, Administratorfreigabe und gegebenenfalls einen Neustart erfordern."
      ],
      [
        "Display",
        "Hier legst du fest, wo und wie groß das Overlay erscheint. Die Aufnahme zeigt diesen Reiter."
      ],
      [
        "Readings",
        "Wählt die angezeigten Messwerte. Zum Prüfen deines UV-Profils helfen GPU-Takt, Spannung, Leistungsaufnahme und FPS. Temperatur und GPU-Auslastung ergänzen den Vergleich."
      ],
      [
        "Layout",
        "Ordnet die gewählten Werte an. Damit kannst du das Overlay kompakt halten und zusammengehörige Werte nebeneinander setzen."
      ],
      [
        "Colors",
        "Passt die Farben von Text und Elementen an. So bleibt das Overlay auch vor unterschiedlichen Spielhintergründen lesbar."
      ],
      [
        "Profiles",
        "Verwaltet gespeicherte Overlay-Layouts. Diese Anzeigeprofile sind von den Undervolting-Profilen deiner GPU getrennt."
      ],
      [
        "Font size",
        "Verändert die Schriftgröße im Overlay. Größere Schrift hilft bei hoher Auflösung, kleinere braucht weniger Platz im Spiel."
      ],
      [
        "Opacity",
        "Verändert die Deckkraft des Overlay-Hintergrunds. Ein kräftigerer Hintergrund verbessert oft die Lesbarkeit."
      ],
      [
        "Frame-time trend",
        "Zeigt den Frametime-Verlauf mit fließender Bewegung. Einzelne Messwerte und kurze Spitzen bleiben erhalten; die Werte werden nicht geglättet."
      ],
      [
        "GPU usage",
        "Zeigt die gemeldete Auslastung der GPU. Zusammen mit FPS, Takt und Leistungsaufnahme hilft der Wert, die aktuelle Last einzuordnen."
      ],
      [
        "Reset defaults",
        "Setzt die Overlay-Einstellungen auf ihre Vorgaben zurück. Das betrifft die Anzeige, nicht das Undervolting-Profil. Änderungen am Overlay werden in Play automatisch gespeichert."
      ]
    ]
  },
  "fan": {
    "purpose": "Die Lüftersteuerung nutzt GPU-Automatik, einen festen Lüfterwert oder eine eigene Temperaturkurve pro unterstütztem Kanal.",
    "benefit": "Kühlung und Lautstärke an deinen Alltag anpassen. Mit Zero Fan kannst du im kühlen Bereich 0%-Kurvenpunkte verwenden.",
    "how": "Öffne Fan curve und wähle GPU-Automatik, eine feste Drehzahl oder eine Temperaturkurve. Für Zero Fan den Schalter aktivieren und niedrige Temperaturpunkte auf 0% setzen. Apply & save übernimmt die Einstellungen.",
    "limit": "Zero Fan kommt mit dem nächsten Update. Bei 0% übernimmt die automatische Kühlung der GPU. Ob die Lüfter tatsächlich stoppen, entscheidet die Karte. Eigene laufende Lüfterkurven brauchen Play.",
    "scenarioTitle": "Kühlung und Lautstärke selbst abstimmen.",
    "scenario": "GPU-Automatik, feste Drehzahl oder eigene Temperaturkurve: Du entscheidest, wie du die Kühlung steuern möchtest. Zero Fan überlässt den 0%-Bereich der GPU; oberhalb davon regelt wieder deine Kurve.",
    "controls": [
      [
        "GPU automatic",
        "Überlässt die Lüfterregelung der GPU. Du benötigst dann keine eigene Kurve."
      ],
      [
        "Fixed speed",
        "Hält einen gewählten Lüfterwert. Das kann für Vergleichstests nützlich sein, passt sich aber nicht automatisch der Temperatur an."
      ],
      [
        "Custom curve",
        "Ordnet Temperaturen Lüfterwerte zu. So kann der Lüfter bei höherer Temperatur stärker kühlen."
      ],
      [
        "Kanäle und Profile",
        "Unterstützte Lüfterkanäle lassen sich getrennt konfigurieren. Gespeicherte Profile und eine optionale Aktivierung beim Start erleichtern wiederkehrende Einstellungen."
      ],
      [
        "Zero Fan · GPU auto at 0%",
        "Erlaubt 0%-Kurvenpunkte. Die GPU entscheidet über den Lüfterstopp. Oberhalb von 0% gilt deine Kurve im Treiberbereich. Änderungen mit Apply bestätigen."
      ],
      [
        "Apply & save",
        "Übernimmt und speichert die gewählten Lüftereinstellungen. Das bloße Bearbeiten einer Kurve oder Laden eines Profils aktiviert diese Einstellungen noch nicht."
      ],
      [
        "Profil auswählen",
        "Lädt ein gespeichertes Lüfterprofil zum Bearbeiten. Das Laden allein ändert die laufende Lüftersteuerung nicht."
      ],
      [
        "Save",
        "Speichert Änderungen im gewählten Lüfterprofil. Die laufende Steuerung bleibt unverändert."
      ],
      [
        "Save as new…",
        "Speichert die aktuellen Einstellungen als eigenes benanntes Lüfterprofil."
      ],
      [
        "More…",
        "Öffnet die Aktionen zum Umbenennen oder Löschen des gewählten Lüfterprofils."
      ],
      [
        "Activate at Play start",
        "Startet das gespeicherte Lüfterprofil beim Öffnen von Play. Das ist unabhängig vom GPU-Startprofil; die eigene Lüfterregelung benötigt laufendes Play."
      ],
      [
        "Hysteresis",
        "Legt fest, um wie viele Grad die Temperatur seit der letzten Drehzahländerung fallen muss, bevor die Lüfter langsamer werden. Das vermeidet häufiges Hin- und Herschalten. Höhere Drehzahlen werden sofort angefordert."
      ],
      [
        "Minimum hold",
        "Mindestzeit vor dem Absenken der Lüfterdrehzahl. Bei einer Kurve müssen sowohl diese Zeit als auch die eingestellte Temperaturhysterese erfüllt sein."
      ],
      [
        "Kurvenpunkte",
        "Ordnet Temperaturen Lüfterwerte zu. Klicke einen Punkt an, passe °C und Prozent an oder verschiebe ihn. Plus und Minus ergänzen beziehungsweise entfernen Punkte im Entwurf."
      ],
      [
        "GPU automatic · all",
        "Gibt alle erkannten Lüfterkanäle an die automatische GPU-Regelung zurück. Gespeicherte Profile bleiben erhalten."
      ],
      [
        "Discard edits",
        "Verwirft die ungespeicherten Änderungen und lädt das gespeicherte Profil erneut. Die laufende Lüftersteuerung bleibt unverändert."
      ],
      [
        "RPM und Running",
        "Zeigt die gemessene Drehzahl und den laufenden Modus. Die darunter ausgewählten Modi können noch ein nicht angewendeter Entwurf sein."
      ]
    ]
  },
  "hz": {
    "purpose": "Smart Hz wechselt zwischen einer niedrigeren Desktop-Bildwiederholrate und der nativen Rate für Spiele.",
    "benefit": "Wenn eine hohe Bildwiederholrate auf dem Desktop nicht nötig ist, kann eine niedrigere Rate je nach System den Energiebedarf reduzieren. Im Spiel steht wieder die passende hohe Rate zur Verfügung.",
    "how": "Smart Hz einschalten und die Idle-Rate festlegen. Im Hauptfenster erreichst du die Einstellung auch über das Kontextmenü.",
    "limit": "Nur vom Monitor unterstützte Modi verwenden. Monitor-Hertz und vom Spiel berechnete FPS sind nicht dasselbe.",
    "controls": [
      [
        "Idle refresh rate",
        "Die Rate für den Desktop ohne erkanntes Spiel. Wähle einen Modus, den dein Monitor tatsächlich unterstützt."
      ],
      [
        "Spielrate",
        "Beim Spielbetrieb verwendet Smart Hz die native Bildwiederholrate. So kannst du im Spiel die hohe Rate nutzen und auf dem Desktop eine niedrigere."
      ]
    ]
  },
  "stabilizer": {
    "purpose": "Stabilizer reagiert auf erkannte Treiberabstürze und korrigiert GPU-Kurve beziehungsweise Takt- und Spannungsziel.",
    "benefit": "Du musst nach einem erkannten Treiberabsturz nicht jede Korrektur selbst vornehmen. Play berücksichtigt sowohl Spielprofile als auch das globale Profil und speichert die Anpassungen im passenden Kontext.",
    "how": "Aktiviere Stabilizer bei ausgeschaltetem DCC und wähle Strategie, Schrittweiten und Grenzen. Korrekturen findest du in My profiles → Stabilizer sowie unter Stabilizer Adjustments in der Game Library.",
    "limit": "Nicht jeder Absturz wird erkannt. Stabilizer verhindert nicht alle Instabilitäten und ist kein Schutzversprechen gegen Schäden oder Datenverlust.",
    "controls": [
      [
        "Korrekturstrategie",
        "Bestimmt, ob Takt reduziert, Spannung erhöht oder beides kombiniert wird. Die Wahl beeinflusst, wie Play nach einem erkannten Treiberabsturz nachjustiert."
      ],
      [
        "Taktschritt",
        "Frequency step per crash legt fest, um wie viel der Takt pro erkanntem Ereignis reduziert werden soll."
      ],
      [
        "Spannungsschritt",
        "Voltage step per crash bestimmt die schrittweise Spannungskorrektur. Höhere Spannung kann auch den Verbrauch erhöhen."
      ],
      [
        "Grenzen",
        "Frequency floor und Voltage ceiling begrenzen die Korrekturen. Sie sind keine Garantie für einen sicheren oder stabilen Betriebsbereich."
      ],
      [
        "Gespeicherte Korrekturen",
        "My profiles → Stabilizer zeigt Ausgangswerte, Korrekturen und erkannte Abstürze. Derselbe Bestand ist auch über die Game Library erreichbar."
      ],
      [
        "Save / Cancel",
        "Save übernimmt die Einstellungen. Cancel verwirft den aktuellen Entwurf."
      ],
      [
        "Frequency floor",
        "Legt fest, bis zu welchem Mindesttakt Stabilizer die Frequenz absenken darf. So begrenzt du den Spielraum der automatischen Korrektur."
      ],
      [
        "Voltage ceiling",
        "Legt die Obergrenze für automatische Spannungskorrekturen fest. Diese Grenze ist deine Vorgabe, keine von Play garantierte sichere Spannung."
      ],
      [
        "Als UV-Profil speichern",
        "Speichert die Korrektur als unabhängige Profilkopie, ohne sie zu aktivieren. Powerlimit und VRAM stammen aus dem aktuellen Quellprofil. Fehlende oder geänderte Quellen können den Export verhindern."
      ],
      [
        "Einzelne Korrektur zurücksetzen",
        "Entfernt nur die ausgewählte Korrektur. Andere Spiel- und Profilkorrekturen bleiben erhalten."
      ]
    ],
    "scenarioTitle": "Weniger Nachjustieren nach einem Absturz.",
    "scenario": "Undervolting bedeutet oft: ausprobieren, spielen, nachjustieren. Erkennt Play einen Treiberabsturz, kann Stabilizer den Takt schrittweise senken, die Spannung anheben oder beides kombinieren. Das hilft dir beim Weg zu einem stabilen Profil, für einzelne Spiele und für das globale Profil. Welche Strategie und Grenzen gelten, bestimmst du."
  },
  "expert": {
    "purpose": "Expert voltage settings ergänzt dein UV-Profil um experimentelle Takt- und Spannungsparameter. Seit Play v2.0.9 gehören diese Werte zum jeweiligen Profil.",
    "benefit": "Erfahrene Nutzer erhalten feinere Eingriffsmöglichkeiten über die normale UV-Kurve hinaus. Für den schnellen Einstieg mit Community-Profilen ist dieser Bereich nicht erforderlich.",
    "how": "Nach der Freigabe unter Settings → Experimental features öffnest du Curve editor → Expert voltage settings. Save profile speichert den Entwurf. Apply & save profile aktiviert und speichert das gesamte Profil einschließlich Kurve, Power limit, VRAM und Expert-Werten.",
    "limit": "Kann Instabilität, Datenverlust und dauerhafte Hardware-Schäden verursachen. Hardware- und Treiberunterstützung sind nicht überall validiert. Ein Restore ist keine Wiederherstellungsgarantie.",
    "controls": [
      [
        "XBAR / SYS",
        "Zusätzliche Takt- und Spannungsanforderungen bestimmter GPU-Bereiche. Die Spannungsanforderung ist keine feste Rail-Spannung."
      ],
      [
        "Video clock / Core / Fabric / Voltage Boost",
        "Weitere hardwareabhängige Expertenparameter. Verfügbarkeit und Wirkung unterscheiden sich je nach GPU und Treiber."
      ],
      [
        "Apply & save profile",
        "Wendet das gesamte ausgewählte Profil mit Kurve, Power limit, VRAM und Expert-Werten an und speichert es. Die Werte gelten, solange dieses Profil aktiv ist, unabhängig davon, ob es global oder durch UV Pilot gewählt wurde."
      ],
      [
        "Live readings / Remove from profile",
        "Live readings zeigt aktuelle Messwerte, ohne deine Eingabefelder zu überschreiben. Remove from profile entfernt Expert-Werte zunächst aus dem Entwurf; erst das Anwenden des Profils gibt die bisherigen Anpassungen frei."
      ],
      [
        "Abgrenzung zu DCC",
        "DCC NVIDIA Experimental ist der Power Efficiency Mode. Er ist nicht dieser experimentelle Spannungsbereich."
      ],
      [
        "Save profile",
        "Speichert das Profil mit den Expert-Werten, ohne die GPU-Einstellungen sofort zu ändern."
      ],
      [
        "Profilwechsel",
        "Beim Wechsel gelten die Expert-Werte des neuen Profils. Ein Profil ohne Expert-Werte gibt die vorherigen Anpassungen auf die von Play zuvor erfassten Werte zurück. Ein Offset von null ist kein Werksreset."
      ],
      [
        "More…",
        "Bietet unter anderem das erneute Laden des Entwurfs und die Übernahme früherer globaler Werte in dieses Profil. Das Kopieren allein wendet nichts an."
      ],
      [
        "Clock offset · XBAR / SYS / Video",
        "Verschiebt den Takt des jeweiligen GPU-Bereichs gegenüber dessen Ausgangswert. Die grüne Anzeige zeigt den aktuell gemessenen Takt, nicht den eingetragenen Offset."
      ],
      [
        "Voltage demand · XBAR / SYS",
        "Verändert die Spannungsanforderung des jeweiligen Bereichs als Offset. Das ist keine Zusage einer festen gemessenen Spannung."
      ],
      [
        "Minimum offset · Core / Fabric",
        "Verschiebt das gemeldete untere Spannungslimit des jeweiligen Bereichs. Die verfügbaren Grenzen stammen von GPU und Treiber."
      ],
      [
        "Reliability offset · Core / Fabric",
        "Verschiebt das vom Treiber gemeldete Reliability-Spannungslimit. Die Bezeichnung ist keine Stabilitätsgarantie für deine Einstellung."
      ],
      [
        "Operating offset · Core / Fabric",
        "Verschiebt das gemeldete Betriebsspannungslimit. Nicht verfügbare Felder bleiben gesperrt; Grenzen können sich mit GPU, Treiber und Betriebszustand unterscheiden."
      ],
      [
        "Voltage Boost",
        "Zusätzlicher treiberabhängiger Boost-Parameter in Prozent. In dieser Aufnahme meldet Play ihn als nicht verfügbar."
      ],
      [
        "Remove from profile",
        "Entfernt Expert-Werte aus dem Profilentwurf. Erst Apply & save profile aktiviert den geänderten Entwurf und gibt die bisherigen Expert-Anpassungen frei."
      ],
      [
        "Live readings",
        "Grüne Werte zeigen aktuelle Messungen. Sie ändern sich mit der Last und überschreiben deine Eingabewerte nicht. Die gemeldete GPU-Spannung und einzelne Railsensoren können unterschiedliche Werte zeigen."
      ],
      [
        "Feld aktivieren",
        "Das Kontrollkästchen bestimmt, ob dieses Profil den jeweiligen Expert-Wert verwalten soll. Die Auswahl gehört zunächst zum Entwurf; erst Anwenden ändert die GPU."
      ]
    ]
  },
  "settings": {
    "purpose": "Settings bündelt GPU-Auswahl, Funktionsdialoge, Anzeigeoptionen und Hilfe.",
    "benefit": "Du findest allgemeine Einstellungen zentral und kannst sicherstellen, dass Play die gewünschte GPU steuert.",
    "how": "Im Hauptfenster Settings öffnen und den passenden Bereich wählen. Eine geänderte GPU-Auswahl speichern und Play anschließend neu starten.",
    "limit": "Die Auswahl ändert nicht, welche GPU ein Spiel oder Lossless Scaling benutzt. Multi-GPU-Hardwarevalidierung steht noch aus.",
    "controls": [
      [
        "NVIDIA GPU auswählen",
        "Bestimmt die GPU für Profile, Messwerte und DCC Automatic. Ist eine gespeicherte Karte nicht verfügbar, fordert Play eine neue Auswahl."
      ],
      [
        "Autostart",
        "Startet die vollständige App bei der Windows-Anmeldung. Das separate Startprofil kann GPU-Werte auch bei ausgeschaltetem Play-Autostart anwenden."
      ],
      [
        "UI scaling",
        "Ändert die Größe von Play-Fenstern und Text. Praktisch für hohe Auflösungen oder größere Schrift."
      ],
      [
        "Advanced options",
        "Bündelt zusätzliche Einstellungen, die für den normalen Einstieg nicht ständig benötigt werden, beispielsweise das Startverhalten."
      ],
      [
        "Experimental features",
        "Schaltet ausdrücklich bestätigte experimentelle Bereiche frei. Die Hinweise vorher lesen; es handelt sich nicht um eine allgemeine Empfehlung zum Aktivieren."
      ],
      [
        "Notifications",
        "Einstellungen zu Benachrichtigungen. Sie betreffen Hinweise der Anwendung und sind von den Tuning-Werten getrennt."
      ],
      [
        "Patch notes / About",
        "Patch notes erklärt Änderungen einer Version. About zeigt Produkt- und Versionsinformationen, die auch bei Fehlerberichten hilfreich sind."
      ],
      [
        "Fenster und Skalierung",
        "My profiles, Expert voltage settings und Game Library merken sich Größe und Position. Curve editor und UV Try lassen die anderen Fenster bedienbar."
      ],
      [
        "Minimieren und Speicher",
        "Minimieren oder Verbergen im Tray löst den Speicher-Trim aus. Beim erneuten Öffnen kann Windows benötigte Speicherseiten wieder laden."
      ]
    ]
  },
  "updates": {
    "purpose": "Der integrierte Updater findet, lädt und installiert verifizierte Play-Updates.",
    "benefit": "Du kannst Verbesserungen und Fehlerkorrekturen einspielen, ohne für jedes Update einen neuen Arbeitsordner manuell vorzubereiten.",
    "how": "Updates → Check now → Download → Install & restart. Vor der Installation ist eine Bestätigung erforderlich.",
    "limit": "Ein App-Update ist getrennt von einem Update der Spiele-Datenbank. Die Webseite führt keinen Updatecheck durch.",
    "controls": [
      [
        "Check now",
        "Prüft, ob eine neue Play-Version angeboten wird. Die Netzwerkabfrage greift auf die vorgesehene Updatequelle zu."
      ],
      [
        "Download",
        "Lädt das angebotene Update. Ein Download allein bedeutet noch nicht, dass die neue Version installiert ist."
      ],
      [
        "Install & restart",
        "Installiert nach Bestätigung und startet Play neu. Prüfe danach Version und gespeicherte Einstellungen."
      ],
      [
        "Portable ZIP",
        "Der vollständige Download bleibt die manuelle Alternative. Das gesamte Archiv zusammen entpacken, nicht nur die EXE."
      ]
    ]
  },
  "diagnostics": {
    "purpose": "Diagnostics und Report a problem helfen, Fehler mit nachvollziehbaren Informationen zu melden.",
    "benefit": "Version, Hardware, Ablauf und passende Logs erleichtern es, ein Problem nachzustellen und einen Fix zu prüfen.",
    "how": "Den Fehler möglichst genau beschreiben. Diagnoseexport beziehungsweise Bericht in Play ansehen und vor dem freiwilligen Versand prüfen.",
    "limit": "Diese Anleitung sendet keine Berichte. Ein echter Versand ist eine eigene, bewusste Aktion.",
    "controls": [
      [
        "Diagnoseexport",
        "Erstellt in Play ein lokales Diagnosepaket. So kannst du Informationen zunächst selbst prüfen und gezielt weitergeben."
      ],
      [
        "Report a problem",
        "Führt zur Berichtsvorschau und optionalen Übermittlung. Nenne Spiel, Profil, GPU, Treiber, Play-Version und reproduzierbare Schritte."
      ],
      [
        "Performance-Logging für DCC",
        "Vor dem Spielstart einschalten und die ungefähre Testzeit notieren. Wenn keine Logdatei entstanden ist, das ebenfalls melden."
      ],
      [
        "Fehlendes Spiel",
        "Für eine Bibliotheksmeldung die eigentliche EXE und einen Store-Link angeben. Das ist ein anderer Fall als ein Absturzbericht."
      ],
      [
        "GPU und andere Tuning-Programme",
        "Die Diagnose erfasst GPU-Erkennung, Messwertfehler, Startprofil-Status und Hinweise auf Afterburner. Gefundene Start-Einstellungen belegen keinen tatsächlichen GPU-Schreibzugriff."
      ]
    ]
  },
  "community": {
    "purpose": "UV Try macht Community-Profile aus der NV-UV-Gemeinde direkt in Play zugänglich. Dein erkanntes GPU-Modell wird vorausgewählt.",
    "benefit": "Du kannst Erfahrungen anderer als Ausgangspunkt nutzen, statt Werte aus Foren oder Social Media einzeln zu übertragen. Suche dir ein Profil aus, teste es und bewerte deine Erfahrung. Eine eigene Kurve musst du dafür nicht von Hand erstellen.",
    "how": "Öffne Curve editor → UV Try. Prüfe das vorausgewählte GPU-Modell und vergleiche die Einträge. Über Rechtsklick auf ein Profil → Slot 1 bis 6 kannst du es in einen Profilplatz übernehmen und aktivieren. Teste es danach in deinen Spielen und gib eine Bewertung ab.",
    "limit": "Auch zwei Karten desselben GPU-Modells können unterschiedlich reagieren. Bewertungen sind Erfahrungen aus der Community, keine Stabilitätsgarantie. Wenn dein Modell nicht erkannt wird, prüfe die GPU-Auswahl besonders sorgfältig.",
    "scenarioTitle": "Werte gefunden. Und jetzt einem Tutorial folgen?",
    "scenario": "Du bekommst Werte in einem Forum oder auf Social Media. Jetzt ein Tutorial durcharbeiten und alles von Hand einstellen? Und für welche Kartenvariante gelten die Angaben überhaupt? UV Try bündelt die verfügbaren Angaben, Profile und Bewertungen. Du kannst ein Profil übernehmen, auf deiner GPU testen und deine Erfahrung bewerten, ohne selbst eine Kurve zeichnen zu müssen.",
    "controls": [
      [
        "GPU-Modell",
        "Play wählt das zum erkannten GPU-Namen passende Modell in der Community-Datenbank vor. Prüfe die Auswahl und ändere sie bei Bedarf. Das GPU-Modell ist nicht automatisch dieselbe Hersteller- oder Board-Variante wie deine Karte."
      ],
      [
        "Profil vergleichen",
        "Voltage zeigt die Spannung, Clock den GPU-Takt, PL das Power limit und VRAM den Speichertakt-Offset. So siehst du, welche Einstellungen ein Eintrag enthält, bevor du ihn übernimmst."
      ],
      [
        "Card variant und Source",
        "Die Kartenvariante, vorhandene Notizen und die Quelle helfen, einen Eintrag einzuordnen. Über Source kannst du verfügbare Herkunftsinformationen ansehen. So bleibt nachvollziehbar, auf welche Karte oder Erfahrung sich die Angaben beziehen."
      ],
      [
        "Search",
        "Durchsucht Kartenvarianten, Notizen und Quellen sowie Spannungs- und Taktangaben. Praktisch, wenn du einen bestimmten Hersteller oder einen Eintrag wiederfinden möchtest."
      ],
      [
        "Rechtsklick → Slot 1 bis 6",
        "Speichert das gewählte Community-Profil in einem Profilplatz und aktiviert es über die normale Profilauswahl. Play übernimmt die Werte für dich. Du musst die Spannungskurve dafür nicht Punkt für Punkt selbst zeichnen."
      ],
      [
        "Auf deiner GPU testen",
        "Nutze das Profil in deinen eigenen Spielen und prüfe Bildrate, Verbrauch, Temperatur und Stabilität. Erfahrungen anderer helfen bei der Auswahl, ersetzen aber diesen Schritt auf deiner Karte nicht."
      ],
      [
        "Rating",
        "Mit einem bis fünf Sternen kannst du deine Erfahrung zum Eintrag zurückmelden. Bewerte nach dem Test auf deinem System. Die Rückmeldungen helfen anderen bei ihrer Auswahl; eine hohe Bewertung garantiert keine Stabilität."
      ],
      [
        "Load into editor",
        "Wenn dieser Weg im geöffneten Editor angeboten wird, lädt er die Werte zunächst als bearbeitbaren Entwurf. Erst Apply curve wendet ihn an und speichert ihn. So kannst du bei Bedarf selbst weiter optimieren."
      ],
      [
        "Share values",
        "Erst Send überträgt Takt, Spannung, Powerlimit, VRAM-Offset, GPU-Modell, optionale Kartenangaben/Notiz und eine zufällige Community-ID. Die vollständige Kurve wird nicht geteilt."
      ],
      [
        "Refresh",
        "Aktualisiert Community-Einträge und Bewertungen. So kannst du neue Profile und weitere Rückmeldungen berücksichtigen."
      ]
    ]
  },
  "autouv": {
    "purpose": "NVIDIA Auto-UV ermittelt nach der NVIDIA-Methode einen Ausgangspunkt aus der Werkskurve deiner eigenen GPU.",
    "benefit": "Wenn du mit einem konservativen Profil für deine Karte beginnen möchtest, gibt dir Auto-UV einen Ausgangspunkt für deine anschließenden Tests. Du musst dafür keine Kurve von Hand erstellen.",
    "how": "Öffne Curve editor → Auto-UV. Lies den Ausgangspunkt mit Read GPU ein, prüfe die angezeigten Werte und wähle unter Save to einen Profilplatz. Save & activate speichert und aktiviert das Profil.",
    "limit": "Auto-UV führt keinen Stabilitätstest durch. Prüfe das Ergebnis mit deinen Spielen oder dem Voltage Step Scanner. Ein berechneter Ausgangspunkt garantiert keine stabile Einstellung.",
    "scenarioTitle": "Ein Ausgangspunkt aus deiner eigenen GPU.",
    "scenario": "Du kennst Undervolting, möchtest aber mit einem konservativen Profil beginnen. Auto-UV nutzt die Werkskurve deiner GPU als Grundlage. Übernimm den Vorschlag in einen Profilplatz, teste ihn und passe ihn bei Bedarf weiter an.",
    "controls": [
      [
        "Read GPU",
        "Liest den NVIDIA-Ausgangspunkt und die Daten für den Vorschlag aus. Dieser Lesevorgang ändert die GPU-Einstellung noch nicht."
      ],
      [
        "NVIDIA starting point",
        "Zeigt den ermittelten Ausgangspunkt aus der GPU-Kurve mit Spannung und Takt. So kannst du nachvollziehen, worauf der Vorschlag basiert."
      ],
      [
        "Auto-UV target",
        "Zeigt die Zielwerte des Auto-UV-Vorschlags. Prüfe sie, bevor du das Profil aktivierst."
      ],
      [
        "Save to",
        "Wählt einen der sechs Profilplätze als Ziel. Achte darauf, ob der Platz schon belegt ist."
      ],
      [
        "Save & activate",
        "Speichert den Vorschlag als Profil und aktiviert ihn. Bei einem belegten Profilplatz fragt Play vor dem Ersetzen nach."
      ],
      [
        "Power limit und VRAM",
        "Auto-UV verwendet 100 Prozent Power limit innerhalb der Grenzen deiner GPU und einen VRAM-Offset von 0 MHz. Speicherübertaktung ist damit nicht Teil dieses Ausgangsprofils."
      ],
      [
        "Danach testen",
        "Prüfe dein Profil in deinen tatsächlichen Spielen. Für gezielte Tests einzelner Spannungspunkte kannst du den Voltage Step Scanner nutzen."
      ]
    ]
  },
  "advanced": {
    "purpose": "Advanced options steuert, wie Play einfache UV-Presets anwendet: Gradient Lock, Voltage Lock, optional Hard Lock und V-Step Compensation.",
    "benefit": "Du kannst das Verhalten einfacher Presets genauer verstehen und anpassen. Gespeicherte V-Kurven verwenden dagegen ihre eigenen Punkte und dynamische Taktskalierung.",
    "how": "Öffne Settings → Advanced options. Lies die Erklärung zum gewünschten Verfahren. Save speichert die Auswahl; Cancel verwirft Änderungen im Fenster.",
    "limit": "Diese Verfahren und V-Step Compensation gelten für einfache Presets. Hard Lock verhindert normales Heruntertakten im Leerlauf und kann den Idle-Verbrauch erhöhen. Verfügbarkeit und Wirkung hängen von GPU und Treiber ab.",
    "controls": [
      [
        "Autostart without minimizing",
        "Zeigt das Hauptfenster beim Windows-Autostart. Ohne diese Option startet Play im Tray. Manuelle Starts zeigen das Fenster weiterhin."
      ],
      [
        "Gradient Lock",
        "Formt die Kurve unterhalb der gewählten Spannung und flacht die Punkte darüber ab. Der gemessene Takt hängt weiterhin von Last und Treibergrenzen ab."
      ],
      [
        "Voltage Lock",
        "Flacht die Kurve oberhalb der gewählten Spannung ab. Niedrigere Punkte bleiben zum Heruntertakten erhalten. Der Name bedeutet nicht, dass die gemessene Spannung festgehalten wird."
      ],
      [
        "Hard Lock · experimental",
        "Fordert denselben minimalen und maximalen GPU-Takt am Preset-Ziel an. Verhindert normales Idle-Heruntertakten und kann den Verbrauch erhöhen. Benötigt passende GPU- und Treiberunterstützung sowie ausgeschaltetes DCC."
      ],
      [
        "V-Step Compensation",
        "Verschiebt den Spannungsanker um die gewählte Anzahl VF-Schritte nach oben. Kann einen Spannungsabfall unter Last berücksichtigen, kostet aber Effizienz und garantiert keinen konstanten Takt."
      ],
      [
        "Gradient Lock on Ampere",
        "Optionale experimentelle Freigabe von Gradient Lock für RTX 30. Ohne sie verwendet Ampere Voltage Lock. Andere GPU-Familien werden dadurch nicht umgestellt."
      ],
      [
        "Save / Cancel",
        "Save speichert die Auswahl. Preset-Änderungen können ein aktives Preset direkt neu anwenden. Cancel schließt das Fenster ohne die Änderungen zu speichern."
      ]
    ]
  },
  "startup": {
    "purpose": "Dein gespeichertes GPU-Profil wird bei der Windows-Anmeldung angewendet, ohne dass Play anschließend geöffnet bleiben muss.",
    "benefit": "Einmal auswählen und nach dem nächsten Neustart wieder nutzen. Der normale Play-Autostart darf ausgeschaltet bleiben.",
    "how": "Änderungen zuerst speichern. Dann Rechtsklick auf den gewünschten Profilplatz → Use as startup profile. Nach der Windows-Anmeldung wartet der kurze Startprozess 15 Sekunden, wendet das Profil an, prüft es und beendet sich.",
    "limit": "Neu im kommenden Update. DCC, Stabilizer, UV Pilot, Overlay, Smart Hz und eigene laufende Lüfterregelung benötigen weiterhin Play. Nutze ein zuvor getestetes Profil.",
    "scenarioTitle": "Dein Profil beim Anmelden. Danach bleibt Play geschlossen.",
    "scenario": "Du möchtest einen festen UV-Zustand nutzen, ohne Play dauerhaft laufen zu lassen? Das Startprofil übernimmt die gespeicherten GPU-Einstellungen für dich. Die automatischen Funktionen während des Spielens schaltest du bei Bedarf durch das Starten von Play hinzu.",
    "controls": [
      [
        "Use as startup profile",
        "Rechtsklick auf einen Profilplatz. Verwendet die gespeicherten Werte; offene Änderungen vorher speichern."
      ],
      [
        "15 Sekunden nach der Anmeldung",
        "Der kurze Startprozess wartet, wendet das Profil an und beendet sich. Es bleibt kein Play-Fenster geöffnet."
      ],
      [
        "Shift: diesen Start überspringen",
        "Halte Shift beim Windows-Anmelden gedrückt. Play überspringt die automatische Anwendung für diese Anmeldung."
      ],
      [
        "Profil nach einem Fehlversuch ändern",
        "Mit gehaltenem Shift anmelden, danach Play manuell öffnen und ein anderes getestetes Startprofil auswählen. Shift setzt eine bereits angewendete Kurve nicht zurück."
      ],
      [
        "Autostart und Startprofil",
        "Autostart startet die vollständige App. Das Startprofil wendet nur die gespeicherten GPU-Einstellungen an. Beide Optionen sind unabhängig."
      ]
    ]
  }
};
