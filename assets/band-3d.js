
(function () {
  const $ = (id) => document.getElementById(id);
  if (!window.THREE) {
    $('infoName').textContent = 'The 3D view could not load';
    $('infoText').textContent = 'Check your connection and reload the page.';
    return;
  }
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isNarrow = () => window.innerWidth < 860;

  // ---------- renderer & scene ----------
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isNarrow() ? 1.5 : 2));
  $('stage').appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 200);
  let camDist = 14;

  scene.add(new THREE.HemisphereLight(0xffffff, 0x8894a8, 0.85));
  const key = new THREE.DirectionalLight(0xffffff, 0.9); key.position.set(5, 9, 7); scene.add(key);
  const rim = new THREE.DirectionalLight(0xbcd6ff, 0.45); rim.position.set(-6, 3, -6); scene.add(rim);
  const under = new THREE.DirectionalLight(0xffffff, 0.35); under.position.set(0, -8, 3); scene.add(under);

  const root = new THREE.Group(); scene.add(root);
  const model = new THREE.Group(); model.position.y = -1.2; root.add(model);

  const sc = document.createElement('canvas'); sc.width = sc.height = 256;
  const sctx = sc.getContext('2d');
  const grd = sctx.createRadialGradient(128, 128, 10, 128, 128, 128);
  grd.addColorStop(0, 'rgba(20,35,60,0.35)'); grd.addColorStop(1, 'rgba(20,35,60,0)');
  sctx.fillStyle = grd; sctx.fillRect(0, 0, 256, 256);
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(9, 9), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -4.3; scene.add(shadow);

  // ---------- helpers ----------
  const mat = (color, opts) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness: 0.6, metalness: 0.05 }, opts || {}));
  const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  function textTex(text, bg, fg, w, h, size) {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d'); x.fillStyle = bg; x.fillRect(0, 0, w, h);
    x.fillStyle = fg; x.font = '700 ' + size + 'px "IBM Plex Sans", Arial, sans-serif';
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, w / 2, h / 2);
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
  }
  function roundedRectShape(w, d, r) {
    const s = new THREE.Shape(), x = -w / 2, y = -d / 2;
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + d - r); s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
    s.lineTo(x + r, y + d); s.quadraticCurveTo(x, y + d, x, y + d - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s;
  }
  function shell(w, d, h, m) {
    const g = new THREE.ExtrudeGeometry(roundedRectShape(w, d, 0.6), { depth: h, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 3, curveSegments: 12 });
    g.rotateX(-Math.PI / 2); return new THREE.Mesh(g, m);
  }

  const parts = {};
  function addPart(id, group, baseY, explodeY, info) {
    group.position.y = baseY;
    group.traverse((o) => { if (o.isMesh) o.userData.partId = id; });
    model.add(group);
    parts[id] = { group, baseY, explodeY, info };
  }

  // ---------- strap ----------
  const strapMat = mat(0x2B3A55, { roughness: 0.85, transparent: true });
  const strap = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.12, 20, isNarrow() ? 110 : 160), strapMat);
  strap.scale.set(1, 0.82, 9);
  const strapG = new THREE.Group(); strapG.add(strap);
  const clasp = box(0.9, 0.34, 2.3, mat(0xB8C2CE, { metalness: 0.8, roughness: 0.3 })); clasp.position.y = -2.13; strapG.add(clasp);
  addPart('strap', strapG, 0, 0, { name: 'Soft strap', price: '', text: 'Holds the sensor pod firmly on the wrist so the heart-rate light and skin temperature read cleanly.' });

  // ---------- pod ----------
  const shellMat = mat(0x3C4A60, { roughness: 0.45, transparent: true });
  const shellMat2 = mat(0x2F3B4F, { roughness: 0.5, transparent: true });

  const bottomG = new THREE.Group(); bottomG.add(shell(4.0, 3.2, 1.08, shellMat2));
  addPart('bottom', bottomG, 1.95, -0.6, { name: 'Skin-side cover', price: '', text: 'Sealed base with a clear optical window for the heart-rate sensor and a metal contact for skin temperature.' });

  const ppgLeds = [];
  const ppgG = new THREE.Group();
  ppgG.add(box(1.25, 0.08, 1.05, mat(0x5B2C83)));
  const win = box(0.7, 0.06, 0.5, mat(0x0E1116, { roughness: 0.2 })); win.position.y = -0.07; ppgG.add(win);
  [[0x22dd66, -0.2], [0xff3030, 0], [0x7a1010, 0.2]].forEach((c) => {
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.07, 14, 10), mat(c[0], { emissive: c[0], emissiveIntensity: 0.9 }));
    led.position.set(c[1], -0.11, -0.08); ppgG.add(led); ppgLeds.push(led);
  });
  const pd = box(0.22, 0.03, 0.16, mat(0x8a8f99)); pd.position.set(0, -0.1, 0.13); ppgG.add(pd);
  ppgG.position.x = -0.8;
  addPart('max30101', ppgG, 1.93, -1.4, { name: 'MAX30101 heart-rate & SpO₂ sensor', price: '₹1,339', text: 'Shines green, red and infrared light into the skin and reads the reflection to get heart rate, SpO₂ and breathing rate.' });

  const tG = new THREE.Group();
  tG.add(box(0.9, 0.07, 0.8, mat(0x6A2F8F)));
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.07, 28), mat(0xC9CED6, { metalness: 0.9, roughness: 0.25 }));
  disc.position.y = -0.07; tG.add(disc); tG.position.x = 1.0;
  addPart('max30205', tG, 1.93, -1.4, { name: 'MAX30205 skin temperature', price: '~₹500', text: 'A metal pad that touches the wrist. Its reading plus heart rate is used to estimate core body temperature.' });

  const lipoG = new THREE.Group();
  lipoG.add(box(2.6, 0.32, 2.2, mat(0xC4CBD4, { metalness: 0.6, roughness: 0.35 })));
  const lab = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 1.1), new THREE.MeshStandardMaterial({ map: textTex('LiPo 3.7 V', '#1f5fae', '#ffffff', 512, 300, 90) }));
  lab.rotation.x = -Math.PI / 2; lab.position.y = 0.162; lipoG.add(lab); lipoG.position.x = -0.45;
  addPart('lipo', lipoG, 2.3, 0.15, { name: 'LiPo battery', price: '~₹300', text: '3.7 V rechargeable cell. Target: 24+ hours normally, 3 days in power-cut mode.' });

  const buzG = new THREE.Group();
  const buz = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.34, 32), mat(0x15181d, { roughness: 0.4 })); buzG.add(buz);
  const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.02, 16), mat(0x000000)); hole.position.y = 0.175; buzG.add(hole);
  buzG.position.x = 1.45;
  addPart('buzzer', buzG, 2.3, 0.15, { name: 'Buzzer', price: '~₹30', text: 'Loud alarm and vibration. If the phone is out of reach, the band alerts people nearby and stores the SOS to send later.' });

  const mcuG = new THREE.Group();
  mcuG.add(box(1.9, 0.1, 1.6, mat(0x1E2A36)));
  const can = box(1.15, 0.2, 1.0, mat(0xD6DAE0, { metalness: 0.85, roughness: 0.25 })); can.position.y = 0.15; mcuG.add(can);
  const canLab = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.5), new THREE.MeshStandardMaterial({ map: textTex('ESP32-C3', '#d6dae0', '#333333', 512, 256, 80), metalness: 0.5, roughness: 0.4 }));
  canLab.rotation.x = -Math.PI / 2; canLab.position.y = 0.252; mcuG.add(canLab);
  const usb = box(0.45, 0.16, 0.34, mat(0xB0B6BE, { metalness: 0.9, roughness: 0.2 })); usb.position.set(0, 0.1, -0.84); mcuG.add(usb);
  const padMat = mat(0xD4A64A, { metalness: 0.8, roughness: 0.3 });
  for (let i = 0; i < 7; i++) [-0.95, 0.95].forEach((x) => { const pad = box(0.08, 0.11, 0.12, padMat); pad.position.set(x, 0, -0.6 + i * 0.2); mcuG.add(pad); });
  mcuG.position.x = 0.55;
  addPart('xiao', mcuG, 2.7, 0.75, { name: 'XIAO ESP32-C3 (the brain)', price: '₹745', text: 'Reads every sensor over one I²C bus, runs the fall-detection model on the band, and talks to the phone over Bluetooth.' });

  const imuG = new THREE.Group();
  imuG.add(box(0.95, 0.07, 0.75, mat(0x1F5FAE)));
  const imuChip = box(0.3, 0.07, 0.3, mat(0x111111)); imuChip.position.y = 0.07; imuG.add(imuChip);
  imuG.position.set(-1.35, 0, 0.55);
  addPart('mpu6050', imuG, 2.7, 0.75, { name: 'MPU6050 motion sensor', price: '₹199', text: 'Detects falls, activity and sleep. It also tells the heart-rate sensor when the arm is still, so readings stay clean.' });

  const shtG = new THREE.Group();
  shtG.add(box(0.62, 0.06, 0.55, mat(0x161616)));
  const shtChip = box(0.18, 0.06, 0.18, mat(0xD9D2C0)); shtChip.position.y = 0.05; shtG.add(shtChip);
  shtG.position.set(-1.3, 0, -0.6);
  addPart('sht40', shtG, 2.92, 1.3, { name: 'SHT40 air temperature & humidity', price: '~₹200', text: 'Sits under a vent on top, away from the skin, so the band can work out the local heat index with no internet.' });

  const topG = new THREE.Group();
  topG.add(shell(4.0, 3.2, 0.3, shellMat));
  const face = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 0.6), new THREE.MeshStandardMaterial({ map: textTex('RAKSHA', '#3c4a60', '#e8eef6', 512, 160, 96), transparent: true, roughness: 0.5 }));
  face.rotation.x = -Math.PI / 2; face.position.set(0.45, 0.39, 0.2); topG.add(face);
  const slotMat = mat(0x111820);
  for (let i = 0; i < 4; i++) { const slot = box(0.08, 0.04, 0.6, slotMat); slot.position.set(-1.55 + i * 0.17, 0.38, -0.6); topG.add(slot); }
  const statusMat = mat(0x22dd66, { emissive: 0x22dd66, emissiveIntensity: 1 });
  const status = new THREE.Mesh(new THREE.SphereGeometry(0.08, 14, 10), statusMat);
  status.position.set(1.45, 0.38, -0.9); topG.add(status);
  addPart('top', topG, 3.13, 2.05, { name: 'Top cover', price: '', text: 'Vent slots over the air sensor and a status light that turns orange or red as risk rises.' });

  // ---------- part list & tags ----------
  const order = ['top', 'sht40', 'xiao', 'mpu6050', 'lipo', 'buzzer', 'bottom', 'max30101', 'max30205', 'strap'];
  const shortNames = { top: 'Top cover', sht40: 'SHT40 air sensor', xiao: 'XIAO ESP32-C3', mpu6050: 'MPU6050 motion', lipo: 'LiPo battery', buzzer: 'Buzzer', bottom: 'Skin-side cover', max30101: 'MAX30101 heart rate', max30205: 'MAX30205 skin temp', strap: 'Strap' };
  const listEl = $('partList');
  order.forEach((id) => {
    const b = document.createElement('button');
    b.setAttribute('aria-pressed', 'false'); b.dataset.id = id;
    b.innerHTML = shortNames[id] + '<span>' + (parts[id].info.price || '') + '</span>';
    b.addEventListener('click', () => { stopTour(); select(selected === id ? null : id); });
    listEl.appendChild(b);
  });
  const tags = {};
  order.forEach((id) => {
    if (id === 'strap' || id === 'bottom' || id === 'top') return;
    const t = document.createElement('div'); t.className = 'tag'; t.textContent = shortNames[id];
    document.body.appendChild(t); tags[id] = t;
  });

  // ---------- info card ----------
  const info = $('info');
  function setInfo(name, price, text, actions, alert) {
    $('infoName').textContent = name; $('infoPrice').textContent = price || ''; $('infoText').textContent = text;
    const a = $('infoActions'); a.innerHTML = '';
    (actions || []).forEach((act) => {
      const b = document.createElement('button'); b.textContent = act.label; if (act.primary) b.className = 'primary';
      b.addEventListener('click', act.fn); a.appendChild(b);
    });
    info.classList.toggle('alert', !!alert);
  }
  const defaultInfo = () => setInfo('How it fits together', '', 'Sensors sit on the skin side, the battery and brain in the middle, and the air sensor under a vent on top.');

  // ---------- selection ----------
  let selected = null;
  function select(id) {
    selected = id;
    listEl.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.id === id)));
    Object.keys(parts).forEach((pid) => {
      parts[pid].group.traverse((o) => {
        if (!o.isMesh || !o.material.emissive || o === status || ppgLeds.includes(o)) return;
        if (o.userData.origEmissive === undefined) { o.material = o.material.clone(); o.userData.origEmissive = o.material.emissive.getHex(); o.userData.origEI = o.material.emissiveIntensity; }
        if (pid === id) { o.material.emissive.setHex(0xD9731A); o.material.emissiveIntensity = 0.45; }
        else { o.material.emissive.setHex(o.userData.origEmissive); o.material.emissiveIntensity = o.userData.origEI; }
      });
    });
    if (tourStep < 0) {
      if (id) { const i = parts[id].info; setInfo(i.name, i.price ? i.price + ' (retail, single unit)' : '', i.text); }
      else if (scenario === 'normal') defaultInfo();
    }
    requestRender();
  }

  // ---------- view modes ----------
  let explode = 0, explodeTarget = 0, inside = false, flip = 0, flipTarget = 0;
  const modeBtns = document.querySelectorAll('.modes button[data-mode]');
  function setMode(m) {
    explodeTarget = m === 'exploded' ? 1 : 0; inside = m === 'inside';
    modeBtns.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.mode === m)));
    [shellMat, shellMat2].forEach((mm) => { mm.opacity = inside ? 0.18 : 1; mm.depthWrite = !inside; });
    strapMat.opacity = explodeTarget ? 0.35 : 1;
    userMoved = true; requestRender();
  }
  modeBtns.forEach((b) => b.addEventListener('click', () => { stopTour(); setMode(b.dataset.mode); }));
  const flipBtn = $('flipBtn');
  flipBtn.addEventListener('click', () => { flipTarget = flipTarget ? 0 : 1; flipBtn.setAttribute('aria-pressed', String(!!flipTarget)); userMoved = true; requestRender(); });

  // ---------- guided tour ----------
  const tour = [
    { part: 'max30101', mode: 'exploded', title: '1 of 6: Read the body', text: 'On the skin side, green and red light measure heart rate, SpO₂ and breathing rate.' },
    { part: 'max30205', mode: 'exploded', title: '2 of 6: Feel the heat inside', text: 'Skin temperature plus heart rate lets Raksha estimate core body temperature, the real sign of heat stroke.' },
    { part: 'sht40', mode: 'exploded', title: '3 of 6: Read the air around you', text: 'Under the top vent, this sensor measures air temperature and humidity, so the band computes the local heat index itself.' },
    { part: 'mpu6050', mode: 'exploded', title: '4 of 6: Catch a fall', text: 'The motion sensor spots falls and tells the heart-rate sensor when the arm is still enough to read.' },
    { part: 'xiao', mode: 'exploded', title: '5 of 6: Decide on the band', text: 'The ESP32-C3 runs the fall model and sends data to the phone over Bluetooth. No internet is needed.' },
    { part: 'buzzer', mode: 'assembled', title: '6 of 6: Raise the alarm', text: 'Voice alert on the phone, buzzer on the band, and an SMS with GPS to family. Try the Heat wave and Fall scenarios next.' }
  ];
  let tourStep = -1;
  const tourBtn = $('tourBtn');
  function showStep(i) {
    tourStep = i; const s = tour[i];
    setMode(s.mode); tourStep = i; select(s.part);
    setInfo(s.title, '', s.text, [
      { label: 'Back', fn: () => { if (tourStep > 0) showStep(tourStep - 1); } },
      i < tour.length - 1 ? { label: 'Next', primary: true, fn: () => showStep(tourStep + 1) } : { label: 'Finish', primary: true, fn: () => stopTour(true) }
    ]);
  }
  function stopTour(finished) {
    if (tourStep < 0) return;
    tourStep = -1; tourBtn.setAttribute('aria-pressed', 'false');
    if (finished) { setMode('assembled'); select(null); defaultInfo(); }
  }
  tourBtn.addEventListener('click', () => {
    if (tourStep >= 0) { stopTour(true); return; }
    runScenario('normal'); tourBtn.setAttribute('aria-pressed', 'true'); showStep(0);
  });

  // ---------- live simulation ----------
  const normal = { hr: 78, skin: 33.8, core: 37.0, hi: 31, risk: 18 };
  const heat = { hr: 124, skin: 36.9, core: 38.7, hi: 47, risk: 84 };
  let vals = Object.assign({}, normal), target = Object.assign({}, normal);
  let scenario = 'normal', fallT = -1, sosTimer = null, sosLeft = 0, alarm = 0;
  const scenBtns = document.querySelectorAll('.scen button');
  function runScenario(s) {
    clearInterval(sosTimer); sosTimer = null; fallT = -1;
    scenario = s; scenBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.scen === s)));
    if (s === 'normal') { target = Object.assign({}, normal); alarm = 0; if (tourStep < 0) { select(null); defaultInfo(); } }
    if (s === 'heat') {
      stopTour(); target = Object.assign({}, heat); alarm = 0;
      setInfo('Heat wave: risk rising', '', 'Heart rate and estimated core temperature climb while the local heat index passes 45 °C. Watch the risk score and status light.');
    }
    if (s === 'fall') {
      stopTour(); target = Object.assign({}, normal, { hr: 112, risk: 70 }); fallT = 0; alarm = 1;
      sosLeft = 10; fallPrompt();
      sosTimer = setInterval(() => {
        sosLeft--; if (sosLeft > 0) { fallPrompt(); return; }
        clearInterval(sosTimer); sosTimer = null;
        setInfo('SOS sent', '', 'SMS with GPS location sent to family over basic cellular. No mobile data needed. If the phone were missing, the band would store it and send later.', [{ label: 'Back to normal', primary: true, fn: () => runScenario('normal') }], true);
      }, 1000);
    }
    userMoved = true; requestRender();
  }
  function fallPrompt() {
    setInfo('Fall detected', '', 'Sending SOS with GPS in ' + sosLeft + ' s. The person can cancel if they are fine.', [
      { label: "I'm OK, cancel", primary: true, fn: () => { runScenario('normal'); setInfo('SOS cancelled', '', 'The wearer tapped "I\'m OK", so no alert was sent. This keeps false alarms low.'); } }
    ], true);
  }
  scenBtns.forEach((b) => b.addEventListener('click', () => runScenario(b.dataset.scen)));
  // mobile tabs
  document.querySelectorAll('.tabs button').forEach((b) => b.addEventListener('click', () => {
    $('side').dataset.tab = b.dataset.tab;
    document.querySelectorAll('.tabs button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
  }));

  const ro = { hr: $('rHR'), skin: $('rSkin'), core: $('rCore'), hi: $('rHI'), risk: $('rRisk') };
  let lastShown = '';
  function updateReadouts(dt) {
    const k = reduceMotion ? 1 : Math.min(1, dt * 1.4);
    Object.keys(vals).forEach((key) => { vals[key] += (target[key] - vals[key]) * k; });
    const r = Math.round(vals.risk);
    const show = [Math.round(vals.hr), vals.skin.toFixed(1), vals.core.toFixed(1), Math.round(vals.hi), r].join('|');
    if (show !== lastShown) {
      lastShown = show;
      ro.hr.textContent = Math.round(vals.hr); ro.skin.textContent = vals.skin.toFixed(1);
      ro.core.textContent = vals.core.toFixed(1); ro.hi.textContent = Math.round(vals.hi); ro.risk.textContent = r;
      const lvl = r >= 75 ? ['High', 'var(--bad)'] : r >= 50 ? ['Moderate', 'var(--warm)'] : ['Low', 'var(--ok)'];
      $('rLevel').textContent = lvl[0]; $('rBar').style.width = Math.max(4, r) + '%'; $('rBar').style.background = lvl[1];
    }
    const col = r >= 75 ? 0xff3b30 : r >= 50 ? 0xff9500 : 0x22dd66;
    statusMat.color.setHex(col); statusMat.emissive.setHex(col);
    if (scenario === 'heat' && r >= 75 && !alarm) {
      alarm = 1;
      setInfo('Voice alert (Hindi): rest and drink water', '', 'Risk crossed 75. The phone speaks the warning offline and the band buzzes. If it keeps rising, family is alerted by SMS.', [{ label: 'Back to normal', primary: true, fn: () => runScenario('normal') }], true);
    }
    return Math.abs(target.risk - vals.risk) > 0.2;
  }

  // ---------- interaction ----------
  let yaw = -0.6, pitch = 0.42, userMoved = false, dragging = false, lastX = 0, lastY = 0, downX = 0, downY = 0;
  const pointers = new Map(); let pinchStart = 0, distStart = camDist;
  const canvas = renderer.domElement;
  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId); pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragging = true; lastX = downX = e.clientX; lastY = downY = e.clientY; userMoved = true;
    if (pointers.size === 2) { const p = [...pointers.values()]; pinchStart = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y); distStart = camDist; }
    requestRender();
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 2) {
      const p = [...pointers.values()]; const d = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      if (pinchStart) camDist = THREE.MathUtils.clamp(distStart * pinchStart / d, 7, 26); requestRender(); return;
    }
    if (!dragging) return;
    yaw += (e.clientX - lastX) * 0.008; pitch = THREE.MathUtils.clamp(pitch + (e.clientY - lastY) * 0.006, -1.2, 1.3);
    lastX = e.clientX; lastY = e.clientY; requestRender();
  });
  function up(e) {
    if (pointers.size === 1 && Math.hypot(e.clientX - downX, e.clientY - downY) < 5) pick(e.clientX, e.clientY);
    pointers.delete(e.pointerId); if (pointers.size < 2) pinchStart = 0; if (!pointers.size) dragging = false;
  }
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); camDist = THREE.MathUtils.clamp(camDist * (1 + e.deltaY * 0.001), 7, 26); userMoved = true; requestRender(); }, { passive: false });
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'BUTTON' && (e.key === 'Enter' || e.key === ' ')) return;
    const step = 0.12;
    if (e.key === 'ArrowLeft') yaw -= step; else if (e.key === 'ArrowRight') yaw += step;
    else if (e.key === 'ArrowUp') pitch = Math.max(-1.2, pitch - step); else if (e.key === 'ArrowDown') pitch = Math.min(1.3, pitch + step);
    else if (e.key === '+' || e.key === '=') camDist = Math.max(7, camDist * 0.9); else if (e.key === '-') camDist = Math.min(26, camDist * 1.1);
    else if (e.key === 'Escape') { stopTour(true); } else return;
    userMoved = true; requestRender();
  });
  $('resetBtn').addEventListener('click', () => {
    stopTour(); yaw = -0.6; pitch = 0.42; camDist = 14; flipTarget = 0; flipBtn.setAttribute('aria-pressed', 'false');
    setMode('assembled'); runScenario('normal'); select(null); defaultInfo(); userMoved = false; requestRender();
  });

  const ray = new THREE.Raycaster(), mv = new THREE.Vector2();
  function pick(x, y) {
    const r = canvas.getBoundingClientRect();
    mv.set(((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(mv, camera);
    const hits = ray.intersectObjects(model.children, true).filter((h) => !(inside && (h.object.userData.partId === 'top' || h.object.userData.partId === 'bottom')));
    stopTour(); select(hits.length ? hits[0].object.userData.partId : null);
  }

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = isNarrow() ? 50 : 35; camera.updateProjectionMatrix(); requestRender();
  }
  window.addEventListener('resize', resize);

  // ---------- render loop (sleeps when idle) ----------
  const tmp = new THREE.Vector3(); let t0 = performance.now(), running = false, idleFrames = 0;
  function requestRender() { idleFrames = 0; if (!running && !document.hidden) { running = true; t0 = performance.now(); requestAnimationFrame(frame); } }
  document.addEventListener('visibilitychange', () => { if (!document.hidden) requestRender(); });

  function frame(now) {
    const dt = Math.min((now - t0) / 1000, 0.05); t0 = now;
    let busy = false;
    if (!userMoved && !reduceMotion) { yaw += dt * 0.25; busy = true; }
    const k = reduceMotion ? 1 : Math.min(1, dt * 6);
    explode += (explodeTarget - explode) * k; flip += (flipTarget - flip) * k;
    if (Math.abs(explodeTarget - explode) > 0.001 || Math.abs(flipTarget - flip) > 0.001) busy = true;
    if (updateReadouts(dt)) busy = true;

    let shakeX = 0, shakeZ = 0, dropY = 0;
    if (fallT >= 0 && fallT < 1.2) {
      fallT += dt; busy = true;
      const p = Math.min(fallT / 1.2, 1);
      if (!reduceMotion) { shakeZ = Math.sin(p * 30) * 0.25 * (1 - p); shakeX = Math.sin(p * 22) * 0.12 * (1 - p); dropY = -Math.sin(p * Math.PI) * 0.6; }
    }
    root.rotation.set(pitch + flip * Math.PI + shakeX, yaw, shakeZ, 'YXZ');
    Object.keys(parts).forEach((id) => { const p = parts[id]; p.group.position.y = p.baseY + p.explodeY * explode * 1.2; });
    model.position.y = -1.2 - explode * 1.3 + dropY;

    if (alarm && !reduceMotion) {
      const pulse = 1 + Math.max(0, Math.sin(now / 90)) * 0.12; buzG.scale.set(pulse, 1, pulse);
      statusMat.emissiveIntensity = 0.6 + Math.max(0, Math.sin(now / 150)) * 0.8; busy = true;
    } else { buzG.scale.set(1, 1, 1); statusMat.emissiveIntensity = 1; }
    if (!reduceMotion) { const f = 0.7 + Math.sin(now / 120) * 0.3; ppgLeds.forEach((l) => l.material.emissiveIntensity = f); if (flip > 0.5 || explode > 0.5) busy = true; }

    const narrow = isNarrow();
    camera.position.set(0, 0, camDist * (narrow ? 1.3 : 1) * (1 + explode * 0.3));
    camera.lookAt(0, narrow ? -0.2 : 0, 0);

    Object.keys(tags).forEach((id) => {
      const g = parts[id].group; g.getWorldPosition(tmp); tmp.project(camera);
      const x = (tmp.x * 0.5 + 0.5) * window.innerWidth, y = (-tmp.y * 0.5 + 0.5) * window.innerHeight;
      const side = g.position.x >= 0 ? 1 : -1;
      tags[id].style.left = (x + side * (narrow ? 48 : 80)) + 'px'; tags[id].style.top = y + 'px';
      tags[id].classList.toggle('show', explode > 0.6 && tmp.z < 1);
    });
    renderer.render(scene, camera);

    if (busy || dragging) idleFrames = 0; else idleFrames++;
    if (idleFrames > 30 || document.hidden) { running = false; return; }
    requestAnimationFrame(frame);
  }
  resize(); requestRender();
})();
