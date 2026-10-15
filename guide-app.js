'use strict';
(() => {
  const english = document.documentElement.lang === 'en';
  const copy = english ? window.PLAY_GUIDE_EN : window.PLAY_GUIDE_DE;
  const t = value => english ? (window.PLAY_UI_EN[value] || value) : value;
  const explainLabel = label => english ? 'Explain ' + label : label + ' erklären';
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const features = {
    profiles:['Profile & Slots','▤','Mit einem vorausgewählten Profil anfangen. Eigene Einstellungen für später speichern.'],
    community:['Community-Profile · UV Try','☆','Dein GPU-Modell ist vorausgewählt. Profile aussuchen, testen und bewerten, ohne eine eigene Kurve zu bauen.'],
    pilot:['UV Pilot','▷','Das passende Profil automatisch verwenden, sobald Play dein Spiel erkennt.'],
    library:['Game Library','⊞','Spiele und Profile zuordnen. Für jedes Spiel die passende Einstellung finden.'],
    dcc:['DCC','◇','Den GPU-Takt an die tatsächliche Last im Spiel anpassen und unnötigen Verbrauch reduzieren.'],
    stabilizer:['Stabilizer','♢','Nach erkannten Treiberabstürzen automatisch nachjustieren. Für Spielprofile und globale Profile.'],
    startup:['Startprofil','↥','Gespeicherte GPU-Einstellungen bei der Windows-Anmeldung anwenden. Danach beendet sich der Startprozess.'],
    hz:['Smart Hz','↻','Auf dem Desktop eine niedrigere Bildwiederholrate, beim Spielen wieder die native Rate.'],
    curve:['Curve editor','⌁','Spannung und Takt gezielt abstimmen. Den eigenen Weg zwischen Leistung und Verbrauch finden.'],
    scanner:['Voltage Step Scanner','⌕','Spannungspunkte und Takt unter Testlast prüfen. Ergebnisse für die eigene Optimierung nutzen.'],
    autouv:['NVIDIA Auto-UV','↘','Einen Ausgangspunkt aus der Werkskurve deiner GPU ermitteln und als Profil übernehmen.'],
    fan:['Fan curve','✣','Lüfterkurven abstimmen. Bei 0% die automatische Kühlung der GPU nutzen.'],
    advanced:['Advanced options','⚒','Das Verhalten einfacher Presets verstehen: Gradient Lock, Voltage Lock und weitere Optionen.'],
    expert:['Advanced GPU Tuning','±','Zusätzliche experimentelle Takt- und Spannungsparameter für erfahrene Nutzer.'],
    overlay:['Telemetry & Overlay','▥','Bildrate, Verbrauch und Temperaturen im Blick behalten. Veränderungen beim Spielen sehen.'],
    settings:['Settings & GPU','⚙','Die gewünschte GPU wählen und allgemeine Einstellungen zentral finden.'],
    updates:['Updates','↓','Neue Play-Versionen prüfen, herunterladen und nach Bestätigung installieren.'],
    diagnostics:['Diagnostics & Hilfe','≡','Ein Problem nachvollziehbar beschreiben und passende Diagnosedaten zusammenstellen.']
  };
  const categories = {
    entry:{name:'Einstieg',description:'Mit Profilen anfangen, Erfahrungen aus der Community nutzen und Spiele zuordnen.',items:['profiles','community','pilot','library']},
    automatic:{name:'Automatik & Effizienz',description:'Weniger manuell nachregeln: Takt, Stabilität und Bildwiederholrate passend zum Einsatz.',items:['startup','dcc','stabilizer','hz']},
    tuning:{name:'Feintuning',description:'Eigene Kurven und Tests oder ein Ausgangspunkt mit Auto-UV. Dazu Lüfter und Advanced GPU Tuning.',items:['curve','autouv','scanner','fan','expert','advanced']},
    overview:{name:'Übersicht & Hilfe',description:'Messwerte sehen, Play einrichten, aktuell halten und bei Problemen weiterkommen.',items:['overlay','settings','updates','diagnostics']}
  };
  // Hotspots use percentages of the unchanged product capture, never reconstructed UI.
  const s = (feature, control, rect, label) => ({feature,control,rect,label});
  const screens = {
    main:{"file": "play-main-v2.1.2.png", "width": 533, "height": 980, "shape": "main", "alt": "NV-UV Play 2.1.2 Hauptfenster mit Profilplätzen und UV Pilot", "caption": "Play 2.1.2 · MFG-Beispielprofil mit simuliertem GPU-Zustand.",
      spots:[
      s('profiles',1,[5.253,22.143,13.696,5.204],'Eco'),
      s('profiles',5,[20.45,22.143,13.696,5.204],'MFG'),
      s('profiles',2,[35.647,22.143,13.696,5.204],'Balanced'),
      s('profiles',3,[50.844,22.143,13.696,5.204],'Performance'),
      s('profiles',4,[66.041,22.143,13.696,5.204],'Max'),
      s('profiles',6,[81.238,22.143,13.696,5.204],'Custom'),
      s('profiles',7,[75.047,28.878,19.887,4.184],'Default'),
      s('fan',null,[5.253,34.286,43.715,4.184],'Fan curve'),
      s('curve',null,[51.22,34.286,43.715,4.184],'Curve editor'),
      s('pilot',null,[5.253,42.041,89.681,5.204],'UV Pilot'),
      s('library',null,[65.103,47.245,29.831,4.184],'Game Library'),
      s('dcc',null,[5.253,54.388,89.681,5.816],'DCC'),
      s('stabilizer',null,[5.253,60.204,89.681,5.204],'Stabilizer'),
      s('hz',null,[5.253,65.408,89.681,5.204],'Smart Hz'),
      s('overlay',null,[5.253,70.612,89.681,5.204],'Overlay'),
      s('settings',null,[30.019, 83.776, 22.889, 4.184],'Settings'),
      s('updates',null,[54.597, 83.776, 17.073, 4.184],'Updates'),
      s('diagnostics',null,[73.358, 83.776, 21.576, 4.184],'Diagnostics'),
      s('settings',1,[5.253, 78.061, 89.681, 5.204],'Autostart'),
      s('settings',2,[19.137,95.408,21.013,3.367],'UI scaling')]},
    curve:{"file": "play-curve-v2.1.1.png", "width": 1650, "height": 1218, "shape": "wide", "alt": "Kurveneditor in Play 2.1.1 mit Punktbearbeitung und getrennten Aktionen", "caption": "Play 2.1.1 · Kurveneditor mit einer simulierten Beispielkurve und ungespeicherten Punktänderungen.",
      spots:[s("curve",1,[2.061, 30.624, 72.424, 51.97],"Voltage / frequency curve"),
      s("curve",14,[77.333, 41.708, 19.515, 2.463],"Voltage"),
      s("curve",15,[77.333, 50.246, 19.515, 3.695],"Frequency (MHz)"),
      s("curve",2,[87.394, 60.509, 9.515, 4.269],"Apply curve"),
      s("curve",18,[77.333, 60.509, 6.909, 4.269],"Flatline"),
      s("curve",16,[77.333, 73.727, 19.515, 2.463],"Power limit (%)"),
      s("curve",17,[77.333, 81.199, 19.515, 2.463],"VRAM (MHz)"),
      s("curve",6,[1.576, 87.685, 6.848, 3.777],"Read GPU"),
      s("curve",7,[8.97, 87.685, 7.576, 3.777],"Stock curve"),
      s("curve",8,[17.091, 87.685, 4.727, 3.777],"Undo"),
      s("curve",8,[22.364, 87.685, 4.545, 3.777],"Redo"),
      s("profiles",9,[15.273, 13.465, 6.727, 3.777],"Rename"),
      s("profiles",8,[1.576, 18.473, 10.667, 3.777],"Manage profiles"),
      s("community",null,[67.636, 7.307, 7.818, 3.941],"UV Try"),
      s("autouv",null,[76.182, 7.307, 7.697, 3.941],"Auto-UV"),
      s("scanner",null,[84.606, 7.307, 7.333, 3.941],"Scanner"),
      s("curve",0,[8.4, 6.6, 48, 5.4],"Profile slots"),
      s("curve",11,[22.5, 13.5, 6.5, 3.7],"Clear slot"),
      s("curve",12,[12.8, 18.5, 10.8, 3.7],"Assign to games"),
      s("curve",13,[24.1, 18.5, 9.4, 3.7],"Enable UV Pilot"),
      s("curve",20,[84.5, 60.5, 1.8, 4.3],"Flatline options"),
      s("curve",26,[27.5, 87.7, 8.2, 3.8],"Discard draft"),
      s("profiles",7,[56.8, 6.6, 7.6, 5.4],"Default")]},
    dcc:{"file": "play-dcc-v2.1.2.png", "width": 1350, "height": 1368, "shape": "dcc", "alt": "DCC-Einstellungen mit ausgegrautem Recover DCC", "caption": "Play 2.1.2 · Recover DCC bleibt sichtbar und ist ohne ausstehende Wiederherstellung ausgegraut.",
      spots:[s("dcc",0,[4, 12.6, 90, 5],"DCC algorithm (automatic)"),
      s("dcc",1,[4, 20.3, 90, 9],"NVIDIA Power Efficiency Mode"),
      s("dcc",2,[6.5, 30, 87.5, 11],"Set efficiency target manually"),
      s("dcc",8,[4, 47.5, 90, 9],"NVIDIA Max Frame Rate"),
      s("dcc",9,[4, 57.5, 90, 9],"Global NVIDIA VSync"),
      s("dcc",10,[4, 72.5, 90, 8],"Enable performance logging"),
      s("dcc",11,[4, 86.1, 14, 3.6],"Learned profiles"),
      s("dcc",13,[18.8, 86.1, 14, 3.6],"Blocked profiles"),
      s("dcc",16,[66, 94.4, 11.2, 3.5],"Recover DCC"),
      s("dcc",6,[88.3, 94.4, 9.3, 3.5],"Apply")]},
    stabilizer:{file:'play-stabilizer-original.png',width:630,height:960,shape:'portrait',alt:'Originale Stabilizer Einstellungen mit Strategie, Takt- und Spannungsschritten sowie Grenzen',caption:'Originalaufnahme · Stabilizer aus dem lokalen Play-v2.0.9-Teststand. Die angezeigten Werte sind keine Empfehlung für deine GPU.',
      spots:[
      s('stabilizer',0,[4,17,92,13],'Correction strategy'),
      s('stabilizer',1,[4,31,92,8],'Frequency step per crash'),
      s('stabilizer',2,[4,41,92,8],'Voltage step per crash'),
      s('stabilizer',6,[4,50,92,8],'Frequency floor'),
      s('stabilizer',7,[4,59,92,7],'Voltage ceiling'),
      s('stabilizer',4,[4,67,92,11],'Per-game adjustments / Clear all'),
      s('stabilizer',5,[52,78,22,6],'Cancel'),
      s('stabilizer',5,[75,78,21,6],'Save')
    ]},
    overlay:{"file": "play-overlay-v2.1.2.png", "width": 1620, "height": 1275, "shape": "wide", "alt": "Overlay-Einstellungen mit Monitor-Auswahl und Vorschau", "caption": "Play 2.1.2 · Monitorwahl und Overlay-Vorschau mit simulierten Messwerten.",
      spots:[s("overlay",0,[1.8, 3.8, 23, 4],"Enable overlay"),
      s("overlay",1,[78, 3.8, 20, 4],"Display on"),
      s("overlay",11,[1.8, 10.7, 5.6, 3.6],"Display"),
      s("overlay",12,[8, 10.7, 6.5, 3.6],"Readings"),
      s("overlay",13,[15, 10.7, 5.5, 3.6],"Layout"),
      s("overlay",14,[21, 10.7, 5.2, 3.6],"Colors"),
      s("overlay",15,[26.8, 10.7, 5.6, 3.6],"Profiles"),
      s("overlay",21,[3.4, 24, 26.3, 6],"Monitor"),
      s("overlay",3,[3.4, 31.4, 26.3, 13],"Position"),
      s("overlay",16,[3.4, 52.5, 26.3, 3.3],"Font size"),
      s("overlay",17,[3.4, 56.3, 26.3, 3],"Opacity"),
      s("overlay",18,[3.4, 60, 26.3, 3],"Frame-time trend"),
      s("overlay",9,[3.4, 68.8, 26.3, 3.7],"Show / hide shortcut"),
      s("overlay",10,[3.4, 74.5, 26.3, 13],"Sensor support"),
      s("overlay",4,[34.3, 25.2, 62.3, 49.4],"Live preview"),
      s("overlay",20,[80, 94.8, 9.8, 3.6],"Reset defaults")]},
    fan:{"file": "play-fan-v2.1.1.png", "width": 1650, "height": 1050, "shape": "wide", "alt": "Lüftersteuerung mit drei Kanälen und Zero Fan", "caption": "Play 2.1.1 · Originaloberfläche mit Beispieldaten. Die Werte sind keine Einstellungsempfehlung.",
      spots:[s("fan",6,[1.5, 16.7, 17.3, 4.3],"Fan profile"),
      s("fan",7,[19.5, 16.7, 4.8, 4.3],"Save"),
      s("fan",8,[25, 16.7, 9.5, 4.3],"Save as new…"),
      s("fan",9,[35.3, 16.7, 6, 4.3],"More…"),
      s("fan",10,[42, 16.7, 13, 4.3],"Activate at Play start"),
      s("fan",11,[1.5, 22.2, 12, 4.3],"Hysteresis"),
      s("fan",12,[14.8, 22.2, 14, 4.3],"Minimum hold"),
      s("fan",13,[2.7, 46.6, 29.5, 28.8],"Fan curve"),
      s("fan",1,[35.2, 69, 29.5, 7],"Fixed speed"),
      s("fan",3,[2.7, 76.3, 29.5, 3.8],"Zero Fan"),
      s("fan",5,[1.5, 93, 9.4, 4.5],"Apply & save"),
      s("fan",14,[11.6, 93, 12.3, 4.5],"GPU automatic · all"),
      s("fan",15,[24.6, 93, 9.4, 4.5],"Discard edits"),
      s("fan",16,[2.7, 29.5, 29.5, 9.4],"Fan 1"),
      s("fan",0,[2.7, 40.7, 9.4, 4.2],"Fan 1 · Auto"),
      s("fan",1,[12.5, 40.7, 9.4, 4.2],"Fan 1 · Fixed"),
      s("fan",2,[22.3, 40.7, 9.4, 4.2],"Fan 1 · Curve"),
      s("fan",16,[35.2, 29.5, 29.5, 9.4],"Fan 2"),
      s("fan",0,[35.2, 40.7, 9.4, 4.2],"Fan 2 · Auto"),
      s("fan",1,[45.0, 40.7, 9.4, 4.2],"Fan 2 · Fixed"),
      s("fan",2,[54.800000000000004, 40.7, 9.4, 4.2],"Fan 2 · Curve"),
      s("fan",16,[67.7, 29.5, 29.5, 9.4],"Fan 3"),
      s("fan",0,[67.7, 40.7, 9.4, 4.2],"Fan 3 · Auto"),
      s("fan",1,[77.5, 40.7, 9.4, 4.2],"Fan 3 · Fixed"),
      s("fan",2,[87.30000000000001, 40.7, 9.4, 4.2],"Fan 3 · Curve")]},
    expert:{"file": "play-expert-v2.1.1.png", "width": 1350, "height": 915, "shape": "wide", "alt": "Advanced GPU Tuning mit Einstellungen für das ausgewählte Profil", "caption": "Play 2.1.1 · Originaloberfläche mit Beispieldaten. Die Werte sind keine Einstellungsempfehlung.",
      spots:[s("expert",15,[2, 14, 96, 9],"Live readings"),
      s("expert",6,[2, 24, 45, 3],"Profile"),
      s("expert",8,[2, 32, 31, 8],"XBAR Clock offset"),
      s("expert",9,[2, 40, 31, 8],"XBAR Voltage demand"),
      s("expert",8,[34.3, 32, 31.5, 8],"SYS Clock offset"),
      s("expert",9,[34.3, 40, 31.5, 8],"SYS Voltage demand"),
      s("expert",8,[66.5, 32, 31.5, 8],"Video Clock offset"),
      s("expert",10,[2, 54, 31, 8],"Core Minimum offset"),
      s("expert",11,[2, 62, 31, 8],"Core Reliability offset"),
      s("expert",12,[2, 70, 31, 8],"Core Operating offset"),
      s("expert",10,[34.3, 54, 31.5, 8],"Fabric Minimum offset"),
      s("expert",11,[34.3, 62, 31.5, 8],"Fabric Reliability offset"),
      s("expert",12,[34.3, 70, 31.5, 8],"Fabric Operating offset"),
      s("expert",13,[66.5, 54, 31.5, 8],"Voltage Boost"),
      s("expert",6,[2, 82.5, 48, 5],"How these settings work"),
      s("expert",2,[2, 93.5, 14.5, 4.5],"Apply & save profile"),
      s("expert",5,[17.2, 93.5, 9.2, 4.5],"Save profile"),
      s("expert",14,[27.1, 93.5, 14.5, 4.5],"Remove from profile"),
      s("expert",7,[42.4, 93.5, 7.1, 4.5],"More…")]},
    advanced:{"file": "play-advanced-v2.1.1.png", "width": 900, "height": 1020, "shape": "portrait", "alt": "Advanced options mit Hotkeys und Include all saved profiles", "caption": "Play 2.1.1 · Advanced options mit den Standard-Hotkeys. Weitere Optionen erreichst du in Play durch Scrollen.",
      spots:[s("advanced",0,[3.5, 10, 89.6, 7.5],"Autostart without minimizing"),
      s("advanced",7,[3.5, 28.8, 74.5, 11.2],"Previous / next profile"),
      s("advanced",8,[79, 28.8, 14, 11.2],"None"),
      s("advanced",7,[3.5, 42, 89.6, 5],"Include all saved profiles"),
      s("advanced",8,[3.5, 48.8, 21, 4.4],"Default shortcuts"),
      s("advanced",1,[3.5, 64.8, 89.6, 11.5],"Gradient Lock"),
      s("advanced",2,[3.5, 77.5, 89.6, 7],"Voltage Lock"),
      s("advanced",3,[3.5, 85.7, 89.6, 5],"Hard Lock (experimental)"),
      s("advanced",6,[67, 93, 29.5, 4.5],"Cancel / Save")]},
    settings:{"file": "play-settings-v2.1.1.png", "width": 1410, "height": 1368, "shape": "portrait", "alt": "Aktuelle Settings mit Advanced options, Patch notes und About", "caption": "Play 2.1.1 · Unterer Bereich von Settings mit Advanced options, Patch notes und About.",
      spots:[s("advanced",null,[3, 8.0, 92, 7],"Advanced options"),
      s("expert",null,[3, 17.6, 92, 7],"Experimental features"),
      s("settings",5,[3, 27.2, 92, 7],"Notifications"),
      s("updates",null,[3, 40.5, 92, 7],"Updates"),
      s("settings",6,[3, 50, 92, 7],"Patch notes"),
      s("diagnostics",null,[3, 59.5, 92, 7],"Help"),
      s("diagnostics",null,[3, 69, 92, 7],"Report a problem"),
      s("settings",9,[3, 79, 92, 7],"About"),
      s("diagnostics",null,[3, 88.5, 92, 7],"Export diagnostics")]}
  };
  Object.values(features).forEach(feature=>{feature[0]=t(feature[0]);feature[2]=t(feature[2]);});
  Object.values(categories).forEach(category=>{category.name=t(category.name);category.description=t(category.description);});
  screens.profiles = {"file": "play-profiles-v2.1.1.png", "width": 840, "height": 1170, "shape": "portrait", "alt": "Profileditor mit V-droop und Advanced-GPU-Tuning-Schiebereglern", "caption": "Play 2.1.1 · Originaloberfläche mit Beispieldaten. Die Werte sind keine Einstellungsempfehlung.",
      spots:[s("profiles",9,[23.5, 7.7, 72.5, 4.3],"Profile name"),
      s("profiles",13,[3.8, 12.5, 92.3, 7.5],"Voltage / Target frequency"),
      s("profiles",15,[3.8, 20.5, 92.3, 2.8],"V-droop comp."),
      s("profiles",13,[3.8, 24, 92.3, 7],"Power limit / VRAM"),
      s("profiles",10,[81, 93.5, 15, 4.5],"Save"),
      s("expert",17,[3.8, 32.5, 92.3, 2.8],"Advanced GPU Tuning"),
      s("expert",8,[3.8, 36.5, 92.3, 3.6],"XBAR clock"),
      s("expert",9,[3.8, 40.35, 92.3, 3.6],"XBAR voltage demand"),
      s("expert",8,[3.8, 44.2, 92.3, 3.6],"SYS clock"),
      s("expert",9,[3.8, 48.05, 92.3, 3.6],"SYS voltage demand"),
      s("expert",8,[3.8, 51.9, 92.3, 3.6],"Video clock"),
      s("expert",10,[3.8, 55.75, 92.3, 3.6],"NVVDD minimum"),
      s("expert",11,[3.8, 59.6, 92.3, 3.6],"NVVDD reliability limit"),
      s("expert",12,[3.8, 63.45, 92.3, 3.6],"NVVDD operating limit"),
      s("expert",10,[3.8, 67.3, 92.3, 3.6],"MSVDD minimum"),
      s("expert",11,[3.8, 71.15, 92.3, 3.6],"MSVDD reliability limit"),
      s("expert",12,[3.8, 75.0, 92.3, 3.6],"MSVDD operating limit"),
      s("expert",13,[3.8, 78.85, 92.3, 3.6],"Voltage Boost")]};
  screens.pilot = {"file": "play-pilot-v2.1.1.png", "width": 810, "height": 990, "shape": "portrait", "alt": "Spiel-Override und Desktop-Profil im Fenster Game override & presets", "caption": "Play 2.1.1 · Game override & presets: Desktop-Profil und Spiel-Override werden getrennt gewählt.",
      spots:[s("pilot",2,[3.3, 24, 93.3, 14],"Desktop profile"),
      s("library",null,[3.3, 5.8, 93.3, 16.4],"Game override"),
      s("profiles",8,[78.8, 16, 15.5, 4.7],"Profiles"),
      s("profiles",1,[3.3, 40.0, 93.3, 8],"Eco"),
      s("profiles",5,[3.3, 49.5, 93.3, 8],"MFG"),
      s("profiles",2,[3.3, 59.0, 93.3, 8],"Balanced"),
      s("profiles",3,[3.3, 68.5, 93.3, 8],"Performance"),
      s("profiles",4,[3.3, 78.0, 93.3, 8],"Max")]};
  screens.dccrecover = {"file": "play-dccrecover-v2.1.2.png", "width": 1350, "height": 1368, "shape": "dcc", "alt": "DCC-Einstellungen mit aktivem Recover DCC und Wiederherstellungshinweis", "caption": "Play 2.1.2 · Simulierter Wiederherstellungsfall. Recover DCC leuchtet links neben Cancel. Gespeicherte Profile bleiben erhalten.",
      spots:[s("dcc",16,[2.4, 8.7, 93.3, 10.5],"DCC restoration"),
      s("dcc",0,[4, 24.8, 90, 7],"DCC algorithm (automatic)"),
      s("dcc",1,[4, 31.8, 90, 10],"NVIDIA Power Efficiency Mode"),
      s("dcc",2,[6.5, 42, 87.5, 10],"Set efficiency target manually"),
      s("dcc",8,[4, 59, 90, 9],"NVIDIA Max Frame Rate"),
      s("dcc",9,[4, 70, 90, 8],"Global NVIDIA VSync"),
      s("dcc",10,[4, 84.8, 90, 6],"Enable performance logging"),
      s("dcc",16,[66, 94.4, 11.2, 3.5],"Recover DCC"),
      s("dcc",6,[88.3, 94.4, 9.3, 3.5],"Apply")]};
  screens.curveflat = {"file": "play-curveflat-v2.1.1.png", "width": 1650, "height": 1218, "shape": "wide", "alt": "Flatline-Beispiel im aktuellen Kurveneditor", "caption": "Play 2.1.1 · Flatline-Beispiel mit simulierten Kurvendaten. Keine Tuning-Empfehlung.",
      spots:[s("curve",1,[2.061, 30.624, 72.424, 51.97],"Voltage / frequency curve"),
      s("curve",14,[77.333, 41.708, 19.515, 2.463],"Voltage"),
      s("curve",15,[77.333, 50.246, 19.515, 3.695],"Frequency (MHz)"),
      s("curve",2,[87.394, 60.509, 9.515, 4.269],"Apply curve"),
      s("curve",18,[77.333, 60.509, 6.909, 4.269],"Flatline"),
      s("curve",16,[77.333, 73.727, 19.515, 2.463],"Power limit (%)"),
      s("curve",17,[77.333, 81.199, 19.515, 2.463],"VRAM (MHz)"),
      s("curve",6,[1.576, 87.685, 6.848, 3.777],"Read GPU"),
      s("curve",7,[8.97, 87.685, 7.576, 3.777],"Stock curve"),
      s("curve",8,[17.091, 87.685, 4.727, 3.777],"Undo"),
      s("curve",8,[22.364, 87.685, 4.545, 3.777],"Redo"),
      s("profiles",9,[15.273, 13.465, 6.727, 3.777],"Rename"),
      s("profiles",8,[1.576, 18.473, 10.667, 3.777],"Manage profiles"),
      s("community",null,[67.636, 7.307, 7.818, 3.941],"UV Try"),
      s("autouv",null,[76.182, 7.307, 7.697, 3.941],"Auto-UV"),
      s("scanner",null,[84.606, 7.307, 7.333, 3.941],"Scanner"),
      s("curve",0,[8.4, 6.6, 48, 5.4],"Profile slots"),
      s("curve",11,[22.5, 13.5, 6.5, 3.7],"Clear slot"),
      s("curve",12,[12.8, 18.5, 10.8, 3.7],"Assign to games"),
      s("curve",13,[24.1, 18.5, 9.4, 3.7],"Enable UV Pilot"),
      s("curve",20,[84.5, 60.5, 1.8, 4.3],"Flatline options"),
      s("curve",26,[27.5, 87.7, 8.2, 3.8],"Discard draft"),
      s("profiles",7,[56.8, 6.6, 7.6, 5.4],"Default")]};
  Object.values(screens).forEach(screen=>{screen.alt=t(screen.alt);screen.caption=t(screen.caption);screen.spots.forEach(spot=>spot.label=t(spot.label));});
  const languageLink = document.querySelector('[data-language-switch]');
  const languagePage = languageLink?.getAttribute('href').split('#')[0];
  function syncLanguageLink() {
    if (languageLink) languageLink.href = languagePage + location.hash;
  }
  syncLanguageLink();
  window.addEventListener('hashchange',syncLanguageLink);
  const featureScreens = {startup:'main',profiles:'profiles',community:'curve',pilot:'pilot',library:'main',dcc:'dcc',stabilizer:'stabilizer',hz:'main',curve:'curve',autouv:'curve',scanner:'curve',fan:'fan',overlay:'overlay',settings:'settings',updates:'settings',diagnostics:'settings',expert:'expert',advanced:'advanced'};
  const related = {startup:['profiles','settings','dcc'],profiles:['community','curve','pilot','startup'],community:['profiles','curve','scanner'],pilot:['library','profiles'],library:['pilot','stabilizer'],dcc:['stabilizer','overlay'],stabilizer:['dcc','library'],hz:['settings'],curve:['profiles','community','autouv','scanner','expert','advanced'],autouv:['profiles','curve','scanner'],advanced:['curve','expert','settings'],scanner:['autouv','community','curve'],fan:['settings'],expert:['curve','stabilizer'],overlay:['settings'],settings:['startup','updates','diagnostics'],updates:['diagnostics'],diagnostics:['settings']};
  const dialog = $('#feature-dialog');
  const tooltip = $('#control-tooltip');
  let currentFeature = null;
  let trail = [];
  let originalFocus = null;
  let tooltipAnchor = null;
  let tooltipFeature = null;
  let showAreas = false;
  let curveView = 'edit';
  let dccView = 'dcc';
  function dccExamplesMarkup() {
    return '<div class="curve-examples" role="group" aria-label="'+t('DCC-Beispiele')+'">'+[['dcc','Keine Wiederherstellung nötig'],['dccrecover','Wiederherstellung erforderlich']].map(([view,label])=>'<button class="quiet" type="button" data-dcc-view="'+view+'" aria-pressed="'+(dccView===view)+'">'+esc(t(label))+'</button>').join('')+'</div>';
  }
  function curveExamplesMarkup() {
    return '<div class="curve-examples" role="group" aria-label="'+esc(t('Zwei Wege im Curve editor'))+'">'+
      [['edit','Individuelle Kurve'],['flatline','Flatline curve']].map(([view,label])=>
        '<button class="quiet" type="button" data-curve-view="'+view+'" aria-pressed="'+(curveView===view)+'">'+esc(t(label))+'</button>').join('')+'</div>';
  }

  function hotspotMarkup(spot, index, screenKey, highlighted) {
    const [x,y,w,h] = spot.rect;
    const label = spot.label || features[spot.feature][0];
    return `<button type="button" class="image-hotspot${highlighted === spot.feature ? ' feature-highlight' : ''}" data-screen="${screenKey}" data-feature="${spot.feature}" data-spot="${index}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%" aria-label="${esc(explainLabel(label))}" aria-haspopup="dialog" aria-expanded="false" aria-controls="control-tooltip"></button>`;
  }
  function screenMarkup(key, highlighted) {
    const screen = screens[key];
    return `<img src="assets/${screen.file}?v=20261015-v2.1.2" alt="${esc(screen.alt)}" width="${screen.width}" height="${screen.height}">${screen.spots.map((spot,index)=>hotspotMarkup(spot,index,key,highlighted)).join('')}`;
  }
  function setCategory(key, focus=false) {
    if (!Object.hasOwn(categories,key)) return false;
    const category = categories[key];
    document.querySelectorAll('[data-category]').forEach(button=>{
      const selected = button.dataset.category === key;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
      if (selected && focus) button.focus();
    });
    $('#feature-panel').setAttribute('aria-labelledby','category-'+key);
    $('#category-description').textContent = category.description;
    const grid = $('#feature-grid');
    grid.classList.toggle('four',category.items.length === 4);
    grid.innerHTML = category.items.map(id=>`<button class="feature-card" data-open="${id}"><span class="card-icon" aria-hidden="true">${features[id][1]}</span><h3>${esc(features[id][0])}<span aria-hidden="true">↗</span></h3><p>${esc(features[id][2])}</p></button>`).join('');
    return true;
  }
  function closeTooltip(restoreFocus=false) {
    if (tooltip.matches(':popover-open')) tooltip.hidePopover();
    if (tooltipAnchor) {
      tooltipAnchor.setAttribute('aria-expanded','false');
      if (restoreFocus && tooltipAnchor.isConnected) tooltipAnchor.focus({preventScroll:true});
    }
    tooltipAnchor = null;
    tooltipFeature = null;
  }
  function positionTooltip() {
    if (!tooltipAnchor || !tooltip.matches(':popover-open')) return;
    const anchor = tooltipAnchor.getBoundingClientRect();
    const box = tooltip.getBoundingClientRect();
    const gap = 12;
    const maxLeft = Math.max(gap, window.innerWidth - box.width - gap);
    let left = anchor.right + gap;
    if (left > maxLeft) left = anchor.left - box.width - gap;
    let top = anchor.top + anchor.height/2 - box.height/2;
    if (left < gap) {
      left = Math.min(Math.max(anchor.left,gap),maxLeft);
      top = anchor.bottom + gap;
      if (top + box.height > window.innerHeight - gap) top = anchor.top - box.height - gap;
    }
    tooltip.style.left = Math.min(Math.max(gap,left),maxLeft)+'px';
    tooltip.style.top = Math.max(gap, Math.min(top,window.innerHeight-box.height-gap))+'px';
  }
  function showTooltip(anchor, toggle=true) {
    if (toggle && tooltipAnchor === anchor && tooltip.matches(':popover-open')) {closeTooltip();return;}
    const screen = screens[anchor.dataset.screen];
    const spot = screen?.spots[Number(anchor.dataset.spot)];
    if (!spot || !Object.hasOwn(copy,spot.feature)) return;
    closeTooltip();
    const topic = copy[spot.feature];
    const container = dialog.open ? dialog : document.body;
    if (tooltip.parentElement !== container) container.append(tooltip);
    const control = Number.isInteger(spot.control) ? topic.controls[spot.control] : null;
    $('#tooltip-title').textContent = spot.label || (control ? control[0] : features[spot.feature][0]);
    $('#tooltip-copy').textContent = control ? control[1] : `${topic.purpose} ${topic.benefit}`;
    tooltipAnchor = anchor;
    tooltipFeature = spot.feature;
    anchor.setAttribute('aria-expanded','true');
    const more = $('#tooltip-more');
    more.hidden = currentFeature === spot.feature;
    more.textContent = featureScreens[spot.feature] && featureScreens[spot.feature] !== 'main' ? t('Fenster & alle Erklärungen öffnen ↗') : t('Mehr zu dieser Funktion ↗');
    tooltip.showPopover();
    positionTooltip();
    // Focus makes the click-open explanation reachable with keyboard and screen readers.
    $('#close-tooltip').focus({preventScroll:true});
  }
  function renderFeature(id) {
    const topic = copy[id];
    const key = id === 'dcc' ? dccView : id === 'curve' && curveView === 'flatline' ? 'curveflat' : featureScreens[id];
    const screen = key ? screens[key] : null;
    const ownWindow = key === id || id === 'overlay' || id === 'curve' || id === 'dcc';
    const contextLabel = ownWindow ? t('Im Originalfenster') : key === 'main' ? t('Im Hauptfenster') : key === 'curve' ? t('Im Kurveneditor') : t('In den Einstellungen');
    const visual = screen ? `<div>${id === 'curve' ? curveExamplesMarkup() : id === 'dcc' ? dccExamplesMarkup() : ''}<div class="image-instruction"><span>${contextLabel}: ${t("Optionen anklicken")}</span><button class="quiet" data-areas aria-pressed="${showAreas}">${t(showAreas?'Klickbereiche ausblenden':'Klickbereiche zeigen')}</button></div><figure class="original-screen ${screen.shape}">${['wide','dcc'].includes(screen.shape)?`<p class="scroll-hint">${t("Fenster seitlich wischen oder mit den Pfeiltasten bewegen →")}</p>`:''}<div class="image-scroll"${['wide','dcc'].includes(screen.shape)?` tabindex="0" role="region" aria-label="${t("Originalfenster, auf kleinen Bildschirmen horizontal scrollbar")}"`:''}><div class="hotspot-image ${screen.shape}">${screenMarkup(key,ownWindow?null:id)}</div></div><figcaption>${esc(screen.caption)}</figcaption></figure>${!ownWindow && (key !== 'main' || id === 'fan') ? `<p class="screen-note">${t("Die Aufnahme zeigt den Zugang zu")} ${esc(features[id][0])}. ${t("Die Optionen der Funktion findest du unten erklärt.")}</p>`:''}</div>` : `<div class="screen-note"><strong>${t("Fan curve in Play öffnen")}</strong>${t("In neueren Play-Versionen findest du die Lüftersteuerung direkt im Hauptfenster. Für diesen Dialog liegt in der Vorschau noch keine passende Originalaufnahme vor. Die verfügbaren Optionen sind unten erklärt.")}</div>`;
    $('#dialog-title').textContent = features[id][0];
    dialog.dataset.feature = id;
    $('#back-dialog').hidden = trail.length === 0;
    $('#dialog-body').innerHTML = `<header class="feature-intro"><p class="eyebrow">${Object.values(categories).find(category=>category.items.includes(id)).name.toUpperCase()}</p><p>${esc(topic.purpose)}</p></header>${topic.scenario ? `<aside class="scenario-inline"><h3>${esc(topic.scenarioTitle)}</h3><p>${esc(topic.scenario)}</p></aside>`:''}<div class="feature-layout">${visual}<aside class="feature-summary"><h3>${t("Was bringt dir das?")}</h3><p>${esc(topic.benefit)}</p><h3>${t("So nutzt du es in Play")}</h3><p>${esc(topic.how)}</p><p class="notice">${esc(topic.limit)}</p><div class="related-features" aria-label="${t("Passende Funktionen")}">${related[id].map(next=>`<button data-open="${next}">${esc(features[next][0])} ↗</button>`).join('')}</div></aside></div><section class="function-reference"><h3>${t("Die Optionen, einzeln erklärt.")}</h3><div class="control-explanations">${topic.controls.map(([title,text])=>`<details><summary>${esc(title)}</summary><p>${esc(text)}</p></details>`).join('')}</div></section>`;
    dialog.scrollTop = 0;
  }
  function openFeature(id, navigatingBack=false) {
    if (!Object.hasOwn(features,id)) return false;
    closeTooltip();
    if (!dialog.open) {
      originalFocus = document.activeElement;
      trail = [];
    } else if (!navigatingBack && currentFeature && currentFeature !== id) {
      trail.push(currentFeature);
    }
    currentFeature = id;
    renderFeature(id);
    if (!dialog.open) {dialog.showModal();document.body.classList.add('modal-open');}
    $('#close-dialog').focus({preventScroll:true});
    return true;
  }
  function setAreas() {
    showAreas = !showAreas;
    document.body.classList.toggle('show-hotspots',showAreas);
    document.querySelectorAll('#show-hotspots,[data-areas]').forEach(button=>{
      button.setAttribute('aria-pressed',String(showAreas));
      button.textContent = t(showAreas ? 'Klickbereiche ausblenden' : 'Klickbereiche zeigen');
    });
  }
  if ($('#main-screen')) $('#main-screen').innerHTML = screenMarkup('main');
  if ($('#category-tabs')) {
    $('#category-tabs').innerHTML = Object.entries(categories).map(([key,category])=>`<button id="category-${key}" role="tab" data-category="${key}" aria-controls="feature-panel" aria-selected="false" tabindex="-1">${category.name}</button>`).join('');
    setCategory('entry');
  }

  document.addEventListener('click',event=>{
    const dccChoice = event.target.closest('[data-dcc-view]');
    if (dccChoice && ['dcc','dccrecover'].includes(dccChoice.dataset.dccView)) {
      closeTooltip(); dccView=dccChoice.dataset.dccView; renderFeature('dcc');
      document.querySelector('[data-dcc-view="'+dccView+'"]').focus({preventScroll:true}); return;
    }
    const button = event.target.closest('button');
    if (button?.dataset.curveView && ['edit','flatline'].includes(button.dataset.curveView)) {
      closeTooltip(); curveView=button.dataset.curveView; renderFeature('curve');
      document.querySelector('[data-curve-view="'+curveView+'"]').focus({preventScroll:true}); return;
    }
    if (button?.hasAttribute('data-spot')) {showTooltip(button);return;}
    if (button?.dataset.open) {openFeature(button.dataset.open);return;}
    if (button?.dataset.category) {closeTooltip();setCategory(button.dataset.category);return;}
    if (button?.id === 'close-tooltip') {closeTooltip(true);return;}
    if (button?.id === 'tooltip-more') {const id=tooltipFeature;closeTooltip(true);openFeature(id);return;}
    if (button?.id === 'show-hotspots' || button?.hasAttribute('data-areas')) {closeTooltip();setAreas();return;}
    if (button?.id === 'close-dialog') {dialog.close();return;}
    if (button?.id === 'back-dialog' && trail.length) {openFeature(trail.pop(),true);return;}
    if (tooltipAnchor && !tooltip.contains(event.target)) closeTooltip();
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
  $('#category-tabs')?.addEventListener('keydown',event=>{
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    const keys = Object.keys(categories);
    const index = keys.indexOf(event.target.dataset.category);
    if (index < 0) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? keys.length-1 : (index+(event.key==='ArrowRight'?1:-1)+keys.length)%keys.length;
    setCategory(keys[next],true);
  });
  document.addEventListener('keydown',event=>{
    if (event.key === 'Escape' && tooltip.matches(':popover-open')) {
      event.preventDefault();event.stopPropagation();closeTooltip(true);
    }
  },true);
  document.addEventListener('focusin',event=>{
    if (tooltipAnchor && !tooltip.contains(event.target) && event.target !== tooltipAnchor) closeTooltip();
  });
  dialog.addEventListener('close',()=>{
    closeTooltip();currentFeature=null;trail=[];document.body.classList.remove('modal-open');
    if (originalFocus?.isConnected) originalFocus.focus({preventScroll:true});
  });
  window.addEventListener('resize',positionTooltip);
  document.addEventListener('scroll',event=>{if (event.target !== tooltip) positionTooltip();},true);

  // Optional page-scoped tools call the same guide actions as the visible buttons.
  // They cannot apply profiles, access hardware or perform network requests.
  if (document.modelContext?.registerTool) {
    const lifecycle = new AbortController();
    const register = tool => {try {Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});} catch {}};
    register({name:'open_play_guide',title:t('Play-Funktion erklären'),description:t('Öffnet eine Funktion mit Originalaufnahme und Erklärungen in dieser Webseite. Keine Hardwarewirkung.'),inputSchema:{type:'object',properties:{feature:{type:'string',enum:Object.keys(features)}},required:['feature'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){
      if (!input || Object.keys(input).length !== 1 || !Object.hasOwn(features,input.feature)) throw new Error(t('Unbekannte Play-Funktion.'));
      openFeature(input.feature);return {feature:input.feature,title:features[input.feature][0],hardwareAccess:false};
    }});
    register({name:'explain_play_control',title:t('Option im Play-Originalfenster erklären'),description:t('Öffnet die anklickbare Erklärung einer sichtbaren Option im Originalfenster. Zuerst eine Funktion mit open_play_guide öffnen. Keine Hardwarewirkung.'),inputSchema:{type:'object',properties:{label:{type:'string',description:t('Exakte sichtbare Beschriftung der Option, z. B. Correction strategy oder NVIDIA Max Frame Rate.')}},required:['label'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){
      if (!input || Object.keys(input).length !== 1 || typeof input.label !== 'string' || input.label.length > 120) throw new Error(t('Eine gültige Beschriftung ist erforderlich.'));
      const scope = dialog.open ? dialog : $('#main-screen');
      const button = Array.from(scope?.querySelectorAll('[data-spot]') || []).find(element=>element.getAttribute('aria-label') === explainLabel(input.label));
      if (!button) throw new Error(t('Diese Option ist im aktuellen Fenster nicht vorhanden.'));
      showTooltip(button,false);return {title:$('#tooltip-title').textContent,explanation:$('#tooltip-copy').textContent,hardwareAccess:false};
    }});
    window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
  }
})();
