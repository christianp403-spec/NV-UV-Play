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
    hz:['Smart Hz','↻','Auf dem Desktop eine niedrigere Bildwiederholrate, beim Spielen wieder die native Rate.'],
    curve:['UV Curve','⌁','Spannung und Takt gezielt abstimmen. Den eigenen Weg zwischen Leistung und Verbrauch finden.'],
    scanner:['Voltage Step Scanner','⌕','Spannungspunkte und Takt unter Testlast prüfen. Ergebnisse für die eigene Optimierung nutzen.'],
    autouv:['NVIDIA Auto-UV','↘','Einen Ausgangspunkt aus der Werkskurve deiner GPU ermitteln und als Profil übernehmen.'],
    fan:['Fan curve','✣','Kühlung und Lautstärke abstimmen. Wird weiter verbessert; Zero Fan funktioniert aktuell noch nicht.'],
    advanced:['Advanced options','⚒','Das Verhalten einfacher Presets verstehen: Gradient Lock, Voltage Lock und weitere Optionen.'],
    expert:['Expert voltage settings','±','Zusätzliche experimentelle Takt- und Spannungsparameter für erfahrene Nutzer.'],
    overlay:['Telemetry & Overlay','▥','Bildrate, Verbrauch und Temperaturen im Blick behalten. Veränderungen beim Spielen sehen.'],
    settings:['Settings & GPU','⚙','Die gewünschte GPU wählen und allgemeine Einstellungen zentral finden.'],
    updates:['Updates','↓','Neue Play-Versionen prüfen, herunterladen und nach Bestätigung installieren.'],
    diagnostics:['Diagnostics & Hilfe','≡','Ein Problem nachvollziehbar beschreiben und passende Diagnosedaten zusammenstellen.']
  };
  const categories = {
    entry:{name:'Einstieg',description:'Mit Profilen anfangen, Erfahrungen aus der Community nutzen und Spiele zuordnen.',items:['profiles','community','pilot','library']},
    automatic:{name:'Automatik & Effizienz',description:'Weniger manuell nachregeln: Takt, Stabilität und Bildwiederholrate passend zum Einsatz.',items:['dcc','stabilizer','hz']},
    tuning:{name:'Feintuning',description:'Eigene Kurven und Tests oder ein Ausgangspunkt mit Auto-UV. Dazu Lüfter und Expertenoptionen.',items:['curve','autouv','scanner','fan','expert','advanced']},
    overview:{name:'Übersicht & Hilfe',description:'Messwerte sehen, Play einrichten, aktuell halten und bei Problemen weiterkommen.',items:['overlay','settings','updates','diagnostics']}
  };
  // Hotspots use percentages of the unchanged product capture, never reconstructed UI.
  const s = (feature, control, rect, label) => ({feature,control,rect,label});
  const screens = {
    main:{file:'play-main-v2.0.9-balanced.png',width:523,height:982,shape:'main',alt:'Originales NV-UV Play v2.0.9 Hauptfenster mit Profilplätzen, Fan curve und Funktionsschaltern',caption:'Originalaufnahme · Play v2.0.9 mit erkannter RTX 5090. Die gezeigten Einstellungen sind keine Empfehlung für deine GPU.',spots:[
      s('profiles',1,[4.2,21.3,14,5.2],'Eco'),s('profiles',2,[19.9,21.3,14,5.2],'Balanced'),s('profiles',3,[35.5,21.3,14,5.2],'Performance'),s('profiles',4,[51.1,21.3,14,5.2],'Max'),s('profiles',5,[66.5,21.3,14,5.2],'MFG'),s('profiles',6,[82.2,21.3,14,5.2],'Custom'),
      s('profiles',7,[75.7,28,20.5,4.1],'Default'),s('fan',null,[4.2,33.3,44.8,4.3],'Fan curve'),s('curve',null,[51.3,33.3,44.8,4.3],'UV Curve'),s('pilot',null,[4.2,41.6,92,4.2],'UV Pilot'),s('library',null,[65.5,46.3,30.5,4.2],'Game Library'),
      s('dcc',null,[4.2,54.2,92,4.2],'DCC'),s('stabilizer',null,[4.2,59.6,92,4.2],'Stabilizer'),s('hz',null,[4.2,65,92,4.2],'Smart Hz'),s('overlay',null,[4.2,70.2,92,4.2],'Overlay'),
      s('settings',null,[4.2,77.4,43,4.2],'Settings'),s('updates',null,[54.9,77.4,17.4,4.2],'Updates'),s('diagnostics',null,[74,77.4,22,4.2],'Diagnostics'),s('settings',1,[4.2,82.7,92,4.2],'Autostart'),s('settings',2,[4.2,95.5,35.5,3.3],'UI scaling')
    ]},
    curve:{file:'play-curve-v2.0.9.jpg',width:1100,height:812,shape:'wide',alt:'Originaler Play v2.0.9 Kurveneditor mit erkannter RTX 5090 und Expert-Zugang',caption:'Originalaufnahme · Play v2.0.9. Die gezeigte UV-Kurve gehört zu dieser RTX 5090 und ist keine Empfehlung für andere Karten.',spots:[
      s('curve',0,[8,6.5,50,6],'Profilplätze'),s('profiles',7,[59,6.5,7.5,6],'Default'),s('community',null,[69.5,7,8,4.5],'UV Try'),s('autouv',null,[78,7,8,4.5],'Auto-UV'),s('scanner',null,[86.5,7,7.5,4.5],'Voltage Step Scanner'),
      s('profiles',9,[12.1,13.4,6.8,4.4],'Rename'),s('curve',11,[19.5,13.4,10.5,4.4],'Restore Balanced'),s('profiles',8,[1.5,18.3,10.6,4.1],'Manage profiles'),s('curve',12,[12.7,18.3,10.8,4.1],'Assign to games'),s('pilot',0,[24,18.3,9.5,4.1],'Enable UV Pilot'),s('expert',null,[34,18.3,14,4.1],'Expert voltage settings'),
      s('curve',1,[2,30.5,72.5,52],'Spannungs-Frequenz-Kurve'),s('curve',14,[77,36.5,20,8],'Voltage'),s('curve',15,[77,45.7,20,9.5],'Frequency (MHz)'),s('curve',2,[77,57.5,20,4.5],'Apply curve'),
      s('curve',16,[77,68.5,20,6.8],'Power limit (%)'),s('curve',17,[77,76.4,20,6.5],'VRAM (MHz)'),s('curve',6,[1.5,87.5,7,4.3],'Read GPU'),s('curve',7,[9,87.5,7.5,4.3],'Stock curve'),s('curve',8,[17,87.5,4.8,4.3],'Undo'),s('curve',8,[22.5,87.5,4.5,4.3],'Redo')
    ]},
    dcc:{file:'play-dcc-original.png',width:1350,height:1650,shape:'dcc',alt:'Originale DCC Einstellungen mit Automatic, NVIDIA Power Efficiency Mode, Framelimit und Lernständen',caption:'Originalaufnahme · DCC-Einstellungen aus dem lokalen Play-v2.0.9-Teststand.',spots:[
      s('dcc',0,[3,10,93,6],'DCC algorithm (automatic)'),s('dcc',1,[3,16,93,8],'NVIDIA Power Efficiency Mode'),s('dcc',2,[6,25,88,9],'Set efficiency target manually'),
      s('dcc',8,[5,39,91,8],'NVIDIA Max Frame Rate'),s('dcc',9,[5,48,91,7],'Global NVIDIA VSync'),s('dcc',10,[5,60,91,7],'Enable performance logging'),s('dcc',11,[4,67,92,18],'Learned games'),
      s('dcc',5,[75,85,21,5],'Reset selected learned profile'),s('dcc',6,[78,94,9.5,5],'Cancel'),s('dcc',6,[88,94,10,5],'Apply')
    ]},
    stabilizer:{file:'play-stabilizer-original.png',width:630,height:960,shape:'portrait',alt:'Originale Stabilizer Einstellungen mit Strategie, Takt- und Spannungsschritten sowie Grenzen',caption:'Originalaufnahme · Stabilizer aus dem lokalen Play-v2.0.9-Teststand. Die angezeigten Werte sind keine Empfehlung für deine GPU.',spots:[
      s('stabilizer',0,[4,17,92,13],'Correction strategy'),s('stabilizer',1,[4,31,92,8],'Frequency step per crash'),s('stabilizer',2,[4,41,92,8],'Voltage step per crash'),s('stabilizer',6,[4,50,92,8],'Frequency floor'),s('stabilizer',7,[4,59,92,7],'Voltage ceiling'),s('stabilizer',4,[4,67,92,11],'Per-game adjustments / Clear all'),s('stabilizer',5,[52,78,22,6],'Cancel'),s('stabilizer',5,[75,78,21,6],'Save')
    ]},
    overlay:{file:'play-overlay-original.png',width:1620,height:1275,shape:'wide',alt:'Originales Play Overlay-Fenster mit Anzeigeoptionen und Live-Vorschau',caption:'Originalaufnahme · Overlay aus dem lokalen Play-v2.0.9-Teststand. Die Aufnahme enthält simulierte Sensorwerte des UI-Tests.',spots:[
      s('overlay',0,[1,4,24,4],'Overlay aktivieren'),s('overlay',1,[78,4,20,4],'Display on'),s('overlay',11,[1.5,10,6,5],'Display'),s('overlay',12,[8,10,6.5,5],'Readings'),s('overlay',13,[15,10,5.5,5],'Layout'),s('overlay',14,[21,10,5.5,5],'Colors'),s('overlay',15,[27,10,6,5],'Profiles'),
      s('overlay',3,[3,24,27,7],'Position'),s('overlay',3,[3,31,27,8],'Horizontal / Vertical'),s('overlay',16,[3,44,27,5],'Font size'),s('overlay',17,[3,49,27,4],'Opacity'),s('overlay',18,[3,53,27,4],'Frame-time trend'),
      s('overlay',9,[2,59,28,7],'Show / hide shortcut'),s('overlay',10,[2,68,29,9],'Sensor support'),s('overlay',4,[33,17,64,13],'Live preview'),
      s('overlay',5,[50,46,15.5,3.5],'FPS'),s('overlay',6,[65.5,46,15.5,3.5],'Power'),s('overlay',6,[50,49.5,15.5,3],'Voltage'),s('overlay',6,[65.5,49.5,15.5,3],'GPU clock'),s('overlay',19,[50,52.5,15.5,3],'GPU usage'),s('overlay',8,[65.5,52.5,15.5,3],'VRAM'),s('overlay',7,[50,55.5,15.5,3],'Temp'),s('overlay',7,[65.5,55.5,15.5,3],'Hotspot'),s('fan',null,[50,58.5,15.5,3],'Fan'),s('overlay',20,[79,94,11,5],'Reset defaults')
    ]},
    fan:{file:'play-fan-v2.0.9.jpg',width:1100,height:700,shape:'wide',alt:'Originale Lüftersteuerung aus Play v2.0.9 mit drei Lüfterkanälen, Fixed, Curve und GPU-Automatik',caption:'Originalaufnahme · Play v2.0.9. Die drei Kanäle zeigen verschiedene Bearbeitungsmodi. Running zeigt die tatsächlich aktive Regelung.',spots:[
      s('fan',6,[1.5,16.4,17.5,4.8],'Fan profile'),s('fan',7,[19.5,16.4,5,4.8],'Save'),s('fan',8,[25,16.4,9.5,4.8],'Save as new…'),s('fan',9,[35.3,16.4,6,4.8],'More…'),s('fan',10,[42,16.4,13,4.8],'Activate at Play start'),s('fan',11,[1.5,22.2,12,4.4],'Hysteresis'),s('fan',12,[14.8,22.2,14,4.4],'Minimum hold'),
      s('fan',16,[2.5,29,29.5,10],'Fan 1 · RPM / Running'),s('fan',16,[35.2,29,29.5,10],'Fan 2 · RPM / Running'),s('fan',16,[67.5,29,29.5,10],'Fan 3 · RPM / Running'),
      s('fan',0,[2.7,40.4,9.5,4.8],'Fan 1 · Auto'),s('fan',1,[12.5,40.4,9.5,4.8],'Fan 1 · Fixed'),s('fan',2,[22.3,40.4,9.9,4.8],'Fan 1 · Curve'),s('fan',0,[35.2,40.4,9.5,4.8],'Fan 2 · Auto'),s('fan',1,[45,40.4,9.5,4.8],'Fan 2 · Fixed'),s('fan',2,[54.8,40.4,9.9,4.8],'Fan 2 · Curve'),s('fan',0,[67.6,40.4,9.5,4.8],'Fan 3 · Auto'),s('fan',1,[77.4,40.4,9.5,4.8],'Fan 3 · Fixed'),s('fan',2,[87.2,40.4,10,4.8],'Fan 3 · Curve'),
      s('fan',1,[2.7,68,29.5,8.4],'Fixed speed'),s('fan',13,[35.2,46,29.5,19.8],'Fan curve · Graph'),s('fan',13,[35.2,68,18,8.4],'Point · °C / % / + / −'),s('fan',5,[1.5,93,9.5,5],'Apply & save'),s('fan',14,[11.5,93,12.5,5],'GPU automatic · all'),s('fan',15,[24.5,93,9.5,5],'Discard edits')
    ]},
    expert:{file:'play-expert-v2.0.9.jpg',width:900,height:610,shape:'wide',alt:'Originale Expert voltage settings aus Play v2.0.9 mit Live-Werten und profilgebundenen Einstellungen',caption:'Originalaufnahme · Play v2.0.9. Live-Werte und Expert-Entwurf dieser RTX 5090; keine Einstellungsempfehlung.',spots:[
      s('expert',15,[2,14,96,9],'Live readings'),s('expert',6,[2,23.5,42,3.8],'Profile: Balanced'),
      s('expert',8,[2,31.5,31,8],'XBAR Clock offset'),s('expert',9,[2,40,31,8],'XBAR Voltage demand'),s('expert',8,[34,31.5,32,8],'SYS Clock offset'),s('expert',9,[34,40,32,8],'SYS Voltage demand'),s('expert',8,[67,31.5,31,8],'Video Clock offset'),
      s('expert',10,[2,53.4,31,8],'Core Minimum offset'),s('expert',11,[2,61.5,31,8],'Core Reliability offset'),s('expert',12,[2,69.5,31,8],'Core Operating offset'),s('expert',10,[34,53.4,32,8],'Fabric Minimum offset'),s('expert',11,[34,61.5,32,8],'Fabric Reliability offset'),s('expert',12,[34,69.5,32,8],'Fabric Operating offset'),s('expert',13,[67,53.4,31,8],'Voltage Boost'),
      s('expert',6,[2,82.5,48,5],'How these settings work'),s('expert',2,[2,93.3,14.5,4.8],'Apply & save profile'),s('expert',5,[17,93.3,9.5,4.8],'Save profile'),s('expert',14,[27,93.3,14.5,4.8],'Remove from profile'),s('expert',7,[42,93.3,7.5,4.8],'More…')
    ]},
    advanced:{file:'play-advanced-v2.0.9-top.jpg',width:500,height:697,shape:'portrait',alt:'Originale Advanced options aus Play v2.0.9 mit Preset-Verfahren und V-Step Compensation',caption:'Originalaufnahme · Play v2.0.9 · Advanced options, oberer Bereich.',spots:[
      s('advanced',0,[4,9,87,11],'Autostart without minimizing'),s('advanced',1,[4,31,87,13],'Gradient Lock'),s('advanced',2,[4,44.5,87,10],'Voltage Lock'),s('advanced',3,[4,55.5,87,13],'Hard Lock (experimental)'),s('advanced',4,[4,70.5,87,15],'V-Step Compensation'),s('advanced',6,[60,92.5,17,5.5],'Cancel'),s('advanced',6,[79,92.5,17,5.5],'Save')
    ]},
    settings:{file:'play-settings-original.png',width:705,height:1140,shape:'portrait',alt:'Originale Play Settings mit GPU-Auswahl und den verfügbaren Einstellungsbereichen',caption:'Originalaufnahme · Settings aus dem lokalen Play-v2.0.9-Teststand ohne aktive GPU.',spots:[
      s('settings',0,[3,7,92,22],'NVIDIA GPU for Play'),s('overlay',null,[3,31,92,6],'Overlay'),s('dcc',null,[3,37,92,6],'DCC'),s('stabilizer',null,[3,43,92,6],'Stabilizer'),s('hz',null,[3,49,92,6],'Smart Hz'),s('advanced',null,[3,55,92,6],'Advanced options'),s('expert',null,[3,61,92,5],'Experimental features'),s('settings',5,[3,66,92,6],'Notifications'),s('updates',null,[3,74,92,6],'Updates'),s('settings',6,[3,80,92,6],'Patch notes'),s('diagnostics',null,[3,86,92,6],'Report a problem'),s('settings',6,[3,92,92,5],'About')
    ]}
  };
  Object.values(features).forEach(feature=>{feature[0]=t(feature[0]);feature[2]=t(feature[2]);});
  Object.values(categories).forEach(category=>{category.name=t(category.name);category.description=t(category.description);});
  Object.values(screens).forEach(screen=>{screen.alt=t(screen.alt);screen.caption=t(screen.caption);screen.spots.forEach(spot=>spot.label=t(spot.label));});
  const languageLink = document.querySelector('[data-language-switch]');
  const languagePage = languageLink?.getAttribute('href').split('#')[0];
  function syncLanguageLink() {
    if (languageLink) languageLink.href = languagePage + location.hash;
  }
  syncLanguageLink();
  window.addEventListener('hashchange',syncLanguageLink);
  const featureScreens = {profiles:'main',community:'curve',pilot:'main',library:'main',dcc:'dcc',stabilizer:'stabilizer',hz:'main',curve:'curve',autouv:'curve',scanner:'curve',fan:'fan',overlay:'overlay',settings:'settings',updates:'settings',diagnostics:'settings',expert:'expert',advanced:'advanced'};
  const related = {profiles:['community','curve','pilot'],community:['profiles','curve','scanner'],pilot:['library','profiles'],library:['pilot','stabilizer'],dcc:['stabilizer','overlay'],stabilizer:['dcc','library'],hz:['settings'],curve:['profiles','community','autouv','scanner','expert','advanced'],autouv:['profiles','curve','scanner'],advanced:['curve','expert','settings'],scanner:['autouv','community','curve'],fan:['settings'],expert:['curve','stabilizer'],overlay:['settings'],settings:['updates','diagnostics'],updates:['diagnostics'],diagnostics:['settings']};
  const dialog = $('#feature-dialog');
  const tooltip = $('#control-tooltip');
  let currentFeature = null;
  let trail = [];
  let originalFocus = null;
  let tooltipAnchor = null;
  let tooltipFeature = null;
  let showAreas = false;

  function hotspotMarkup(spot, index, screenKey, highlighted) {
    const [x,y,w,h] = spot.rect;
    const label = spot.label || features[spot.feature][0];
    return `<button type="button" class="image-hotspot${highlighted === spot.feature ? ' feature-highlight' : ''}" data-screen="${screenKey}" data-feature="${spot.feature}" data-spot="${index}" style="left:${x}%;top:${y}%;width:${w}%;height:${h}%" aria-label="${esc(explainLabel(label))}" aria-haspopup="dialog" aria-expanded="false" aria-controls="control-tooltip"></button>`;
  }
  function screenMarkup(key, highlighted) {
    const screen = screens[key];
    return `<img src="assets/${screen.file}${key === 'main' ? '?v=2.0.9-balanced' : ''}" alt="${esc(screen.alt)}" width="${screen.width}" height="${screen.height}">${screen.spots.map((spot,index)=>hotspotMarkup(spot,index,key,highlighted)).join('')}`;
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
    const key = featureScreens[id];
    const screen = key ? screens[key] : null;
    const ownWindow = key === id || id === 'overlay';
    const contextLabel = ownWindow ? t('Im Originalfenster') : key === 'main' ? t('Im Hauptfenster') : key === 'curve' ? t('Im Kurveneditor') : t('In den Einstellungen');
    const visual = screen ? `<div><div class="image-instruction"><span>${contextLabel}: ${t("Optionen anklicken")}</span><button class="quiet" data-areas aria-pressed="${showAreas}">${t(showAreas?'Klickbereiche ausblenden':'Klickbereiche zeigen')}</button></div><figure class="original-screen ${screen.shape}">${['wide','dcc'].includes(screen.shape)?`<p class="scroll-hint">${t("Fenster seitlich wischen oder mit den Pfeiltasten bewegen →")}</p>`:''}<div class="image-scroll"${['wide','dcc'].includes(screen.shape)?` tabindex="0" role="region" aria-label="${t("Originalfenster, auf kleinen Bildschirmen horizontal scrollbar")}"`:''}><div class="hotspot-image ${screen.shape}">${screenMarkup(key,ownWindow?null:id)}</div></div><figcaption>${esc(screen.caption)}</figcaption></figure>${!ownWindow && (key !== 'main' || id === 'fan') ? `<p class="screen-note">${t("Die Aufnahme zeigt den Zugang zu")} ${esc(features[id][0])}. ${t("Die Optionen der Funktion findest du unten erklärt.")}</p>`:''}</div>` : `<div class="screen-note"><strong>${t("Fan curve in Play öffnen")}</strong>${t("In neueren Play-Versionen findest du die Lüftersteuerung direkt im Hauptfenster. Für diesen Dialog liegt in der Vorschau noch keine passende Originalaufnahme vor. Die verfügbaren Optionen sind unten erklärt.")}</div>`;
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
    const button = event.target.closest('button');
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
