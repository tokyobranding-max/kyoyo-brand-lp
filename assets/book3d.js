function makeBook3D(T, cv, o) {
  const N = o.pages, SHEETS = o.sheets, PW = 600, PH = 856, PER = 16, COLS = 4;
  const W = 2, H = 2 * 438 / 306.96, PT = 0.21, CT = 0.006;
  const renderer = new T.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.outputEncoding = T.sRGBEncoding;
  const aniso = renderer.capabilities.getMaxAnisotropy();
  const scene = new T.Scene();
  const cam = new T.PerspectiveCamera(30, 1.33, 0.1, 100);
  scene.add(new T.AmbientLight(0xffffff, 0.62));
  const key = new T.DirectionalLight(0xfff3e0, 0.9); key.position.set(3, 4, 6); scene.add(key);
  const rim = new T.DirectionalLight(0xe2c796, 0.6); rim.position.set(-5, 2, -4); scene.add(rim);
  const loader = new T.TextureLoader();
  const imgTex = (u) => { const t = loader.load(u); t.encoding = T.sRGBEncoding; t.anisotropy = aniso; return t; };
  const solid = (c) => { const k = document.createElement('canvas'); k.width = k.height = 8; const g = k.getContext('2d'); g.fillStyle = c; g.fillRect(0, 0, 8, 8); const t = new T.CanvasTexture(k); t.encoding = T.sRGBEncoding; return t; };
  const paperT = solid('#F8F5EE'), innerT = solid('#EFE9DD');
  // page textures from sprite sheets
  const sheets = [];
  const loadSheet = (i, cb) => {
    if (sheets[i] && sheets[i].ok) { cb(sheets[i].img); return; }
    if (!sheets[i]) { const img = new Image(); sheets[i] = { img, ok: false, cbs: [] }; img.onload = () => { sheets[i].ok = true; sheets[i].cbs.forEach((f) => f(img)); sheets[i].cbs = []; }; img.src = SHEETS[i]; }
    sheets[i].cbs.push(cb);
  };
  const cache = new Map();
  const tex = (p) => {
    if (p < 1) return innerT;
    if (p === N + 1 && o.endLines && !cache.has(p)) {
      const k = document.createElement('canvas'); k.width = PW; k.height = PH; const g = k.getContext('2d');
      g.fillStyle = '#F8F5EE'; g.fillRect(0, 0, PW, PH);
      const gr = g.createLinearGradient(PW, 0, PW - 70, 0); gr.addColorStop(0, 'rgba(60,45,25,0.22)'); gr.addColorStop(1, 'rgba(60,45,25,0)'); g.fillStyle = gr; g.fillRect(0, 0, PW, PH);
      g.textAlign = 'center'; g.fillStyle = '#141414';
      o.endLines.forEach((ln, i) => { g.font = (ln.size || 26) + 'px "Noto Serif JP", "Hiragino Mincho ProN", serif'; g.fillStyle = ln.color || '#141414'; g.fillText(ln.text, PW / 2, ln.y); });
      const t = new T.CanvasTexture(k); t.encoding = T.sRGBEncoding; t.anisotropy = aniso; cache.set(p, t); return t;
    }
    if (p > N) return p > N + 1 ? innerT : (cache.get(p) || paperT);
    if (cache.has(p)) return cache.get(p);
    const k = document.createElement('canvas'); k.width = PW; k.height = PH;
    const g = k.getContext('2d');
    const gut = () => { const odd = p % 2 === 1; const gr = g.createLinearGradient(odd ? PW : 0, 0, odd ? PW - 70 : 70, 0); gr.addColorStop(0, 'rgba(60,45,25,0.22)'); gr.addColorStop(1, 'rgba(60,45,25,0)'); g.fillStyle = gr; g.fillRect(0, 0, PW, PH); };
    g.fillStyle = '#F8F5EE'; g.fillRect(0, 0, PW, PH); gut();
    const t = new T.CanvasTexture(k); t.encoding = T.sRGBEncoding; t.anisotropy = aniso;
    cache.set(p, t);
    const idx = p - 1, si = Math.floor(idx / PER), c = idx % PER;
    loadSheet(si, (img) => { g.drawImage(img, (c % COLS) * PW, Math.floor(c / COLS) * PH, PW, PH, 0, 0, PW, PH); gut(); t.needsUpdate = true; });
    return t;
  };
  const prune = (center) => { cache.forEach((t, p) => { if (p !== N + 1 && Math.abs(p - center) > 14) { t.dispose(); cache.delete(p); } }); };
  const basic = (t) => new T.MeshBasicMaterial({ map: t });
  // ---- book group: spine at x=0, page tops at z=0
  const turn = new T.Group(); scene.add(turn);
  const book = new T.Group(); turn.add(book);
  const pagePlane = (x0) => { const g = new T.PlaneGeometry(W, H); g.translate(x0 + W / 2, 0, 0); return g; };
  const leftPage = new T.Mesh(pagePlane(-W), basic(paperT));
  const rightPage = new T.Mesh(pagePlane(0), basic(paperT));
  // paper stacks with faint line texture on edges
  const pc = document.createElement('canvas'); pc.width = 8; pc.height = 256;
  const pg = pc.getContext('2d'); pg.fillStyle = '#F1EBDF'; pg.fillRect(0, 0, 8, 256);
  for (let i = 0; i < 256; i += 3) { pg.fillStyle = 'rgba(110,90,60,' + (i % 6 ? 0.10 : 0.05) + ')'; pg.fillRect(0, i, 8, 1); }
  const edgeT = new T.CanvasTexture(pc); edgeT.center.set(0.5, 0.5); edgeT.rotation = Math.PI / 2;
  const edgeM = new T.MeshStandardMaterial({ map: edgeT, roughness: 0.95 });
  const stackL = new T.Mesh(new T.BoxGeometry(W, H, 1), edgeM), stackR = new T.Mesh(new T.BoxGeometry(W, H, 1), edgeM);
  const coverEdge = new T.MeshStandardMaterial({ color: 0x1d1b19, roughness: 0.6 });
  const backBoard = new T.Mesh(new T.BoxGeometry(W, H, CT), [coverEdge, coverEdge, coverEdge, coverEdge, new T.MeshStandardMaterial({ map: innerT, roughness: 0.9 }), new T.MeshStandardMaterial({ map: imgTex(o.back), roughness: 0.5, metalness: 0.04 })]);
  const spineG = new T.PlaneGeometry(1, H); const spine = new T.Mesh(spineG, new T.MeshStandardMaterial({ map: imgTex(o.spine), roughness: 0.5 }));
  spine.rotation.y = Math.PI / 2;
  book.add(leftPage, rightPage, stackL, stackR, backBoard, spine);
  // bendable sheet (two faces) hinged at x=0
  const makeSheet = (matA, matB, seg) => {
    const gA = new T.PlaneGeometry(W, H, seg, 1); gA.translate(-W / 2, 0, 0);
    const gB = new T.PlaneGeometry(W, H, seg, 1); gB.translate(W / 2, 0, 0);
    const a = new T.Mesh(gA, matA), b = new T.Mesh(gB, matB); b.rotation.y = Math.PI;
    const piv = new T.Group(); piv.add(a, b);
    const bA = gA.attributes.position.array.slice(), bB = gB.attributes.position.array.slice();
    piv.userData = { a, b, bend: (ang, amt) => {
      const s = Math.sin(ang), pa = gA.attributes.position, pb = gB.attributes.position;
      for (let i = 0; i < pa.count; i++) {
        const d = -bA[i * 3] / W; pa.array[i * 3 + 2] = -s * amt * d * d + 0.002;
        const e = bB[i * 3] / W; pb.array[i * 3 + 2] = s * amt * e * e + 0.002;
      }
      pa.needsUpdate = pb.needsUpdate = true; gA.computeVertexNormals(); gB.computeVertexNormals();
    } };
    return piv;
  };
  const cover = makeSheet(new T.MeshStandardMaterial({ map: imgTex(o.front), roughness: 0.5, metalness: 0.04 }), new T.MeshStandardMaterial({ map: innerT, roughness: 0.9 }), 24);
  book.add(cover);
  // ---- page leaf: finely divided mesh, every vertex bent each frame (curl, corner twist), shaded per vertex
  const SX = 40, SY = 16;
  const leafGeo = (x0) => { const g = new T.PlaneGeometry(W, H, SX, SY); g.translate(x0 + W / 2, 0, 0); g.setAttribute('color', new T.BufferAttribute(new Float32Array(g.attributes.position.count * 3).fill(1), 3)); return g; };
  const lgA = leafGeo(-W), lgB = leafGeo(0);
  const leafA = new T.Mesh(lgA, new T.MeshBasicMaterial({ map: paperT, vertexColors: true }));
  const leafB = new T.Mesh(lgB, new T.MeshBasicMaterial({ map: paperT, vertexColors: true }));
  leafB.rotation.y = Math.PI;
  const leaf = new T.Group(); leaf.add(leafA, leafB); leaf.visible = false; book.add(leaf);
  const lbA = lgA.attributes.position.array.slice(), lbB = lgB.attributes.position.array.slice();
  const LD = new T.Vector3(-0.35, 0.45, 1).normalize();
  const shadeLeaf = (g, a, back) => {
    const nr = g.attributes.normal.array, col = g.attributes.color.array, c = Math.cos(a), sn = Math.sin(a);
    for (let i = 0; i < col.length; i += 3) {
      let nx = nr[i], nz = nr[i + 2]; if (back) { nx = -nx; nz = -nz; }
      const wx = nx * c + nz * sn, wz = -nx * sn + nz * c;
      const d = Math.max(0, wx * LD.x + nr[i + 1] * LD.y + wz * LD.z);
      col[i] = col[i + 1] = col[i + 2] = Math.min(1, 0.6 + 0.42 * d);
    }
    g.attributes.color.needsUpdate = true;
  };
  const deformLeaf = (a, v, gy, grab) => {
    const sa = Math.sin(a), lag = sa * (0.24 + Math.max(-0.5, Math.min(0.5, v * 7)));
    const pa = lgA.attributes.position.array, pb = lgB.attributes.position.array;
    for (let i = 0; i < pa.length; i += 3) {
      const d = -lbA[i] / W, yn = lbA[i + 1] / (H / 2);
      const tw = grab ? 1 - 0.75 * yn * gy * Math.min(1, sa * 3) : 1;
      pa[i + 2] = -lag * d * d * tw + 0.002;
      const e = lbB[i] / W, ynb = lbB[i + 1] / (H / 2);
      const twb = grab ? 1 - 0.75 * ynb * gy * Math.min(1, sa * 3) : 1;
      pb[i + 2] = lag * e * e * twb + 0.002;
    }
    lgA.attributes.position.needsUpdate = lgB.attributes.position.needsUpdate = true;
    lgA.computeVertexNormals(); lgB.computeVertexNormals();
    shadeLeaf(lgA, a, false); shadeLeaf(lgB, a, true);
  };
  // shadow the lifted page throws on the page beneath
  const shC = document.createElement('canvas'); shC.width = 256; shC.height = 4;
  const shX = shC.getContext('2d'); const sgr = shX.createLinearGradient(0, 0, 256, 0);
  sgr.addColorStop(0, 'rgba(25,16,6,0)'); sgr.addColorStop(0.32, 'rgba(25,16,6,0.55)'); sgr.addColorStop(0.42, 'rgba(25,16,6,0.32)'); sgr.addColorStop(1, 'rgba(25,16,6,0.12)');
  shX.fillStyle = sgr; shX.fillRect(0, 0, 256, 4);
  const shT = new T.CanvasTexture(shC);
  const mkSh = () => { const m = new T.Mesh(new T.PlaneGeometry(1, H), new T.MeshBasicMaterial({ map: shT, transparent: true, depthWrite: false, side: T.DoubleSide })); m.visible = false; book.add(m); return m; };
  const shL = mkSh(), shR = mkSh();
  const castShadow = (a) => {
    const sa = Math.sin(a), xe = -W * Math.cos(a), w = 0.12 + 0.7 * sa;
    shL.visible = shR.visible = false;
    if (sa < 0.01) return;
    if (xe < 0) { const x0 = Math.max(-W, xe - w * 0.45); shL.visible = true; shL.scale.x = -x0; shL.position.set(x0 / 2, 0, 0.0012); shL.material.opacity = Math.min(1, sa * 1.2); }
    else { const x1 = Math.min(W, xe + w * 0.45); shR.visible = true; shR.scale.x = -x1; shR.position.set(x1 / 2, 0, 0.0012); shR.material.opacity = Math.min(1, sa * 1.2); }
  };
  // page sound (generated, no file)
  let soundOn = !!o.sound, actx = null;
  const sfx = (kind) => {
    if (!soundOn) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      const cov = kind === 'cover', dur = cov ? 0.55 : 0.36, n = Math.floor(actx.sampleRate * dur);
      const buf = actx.createBuffer(1, n, actx.sampleRate), ch = buf.getChannelData(0);
      for (let i = 0; i < n; i++) { const q = i / n; ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - q, 2.4) * Math.min(1, q * 22) * (0.55 + 0.45 * Math.abs(Math.sin(q * 37))); }
      const src = actx.createBufferSource(); src.buffer = buf;
      const bp = actx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 0.8;
      const now = actx.currentTime; bp.frequency.setValueAtTime(cov ? 1100 : 3200, now); bp.frequency.exponentialRampToValueAtTime(cov ? 260 : 650, now + dur);
      const g = actx.createGain(); g.gain.value = cov ? 0.55 : 0.35;
      src.connect(bp); bp.connect(g); g.connect(actx.destination); src.start();
    } catch (er) {}
  };
  // soft floor shadow
  const sc = document.createElement('canvas'); sc.width = sc.height = 128;
  const sg = sc.getContext('2d'); const rg = sg.createRadialGradient(64, 64, 4, 64, 64, 64);
  rg.addColorStop(0, 'rgba(0,0,0,0.55)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); sg.fillStyle = rg; sg.fillRect(0, 0, 128, 128);
  const shadow = new T.Mesh(new T.PlaneGeometry(3.2, 1.1), new T.MeshBasicMaterial({ map: new T.CanvasTexture(sc), transparent: true, depthWrite: false }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -H / 2 - 0.45; scene.add(shadow);
  // ---- state
  const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const maxS = Math.ceil(N / 2);
  let mode = 'closed', s = 0, sv = 0, ca = 0, coverAnim = null, lf = null;
  let rx = 0.08, ry = -0.55, vx = 0, vy = 0, tilt = { x: 0, y: 0 }, lastAct = -1e4;
  const emit = () => o.onState && o.onState({ open: mode === 'open' || mode === 'opening', spread: s, mode });
  const TOT = o.totalPages || N;
  const thickL = (v) => Math.max(0.004, PT * Math.max(0, TOT - 2 * v) / TOT);
  const thickR = (v) => PT * Math.min(TOT, 2 * v) / TOT;
  const show = () => {
    leftPage.material.map = tex(2 * s + 1); rightPage.material.map = tex(2 * s);
    leftPage.material.needsUpdate = rightPage.material.needsUpdate = true; prune(2 * s);
    for (let p = 2 * s - 3; p <= 2 * s + 5; p++) if (p >= 1 && p <= N) tex(p);
    emit();
  };
  const layout = () => {
    const tl = thickL(sv), tr = thickR(sv);
    stackL.scale.z = tl; stackL.position.set(-W / 2, 0, -tl / 2 - 0.003);
    backBoard.position.set(-W / 2, 0, -tl - 0.003 - CT / 2);
    stackR.visible = tr > 0.002; stackR.scale.z = Math.max(tr, 0.001); stackR.position.set(W / 2, 0, -tr / 2 - 0.003);
    rightPage.visible = s > 0 || !!(lf && lf.dir < 0);
    const k = ca / Math.PI;
    cover.position.z = 0.006 * (1 - k) + (-tr - 0.006 - CT) * k;
    cover.rotation.y = ca; cover.userData.bend(ca, 0.35);
    const total = PT + 2 * CT + 0.01;
    spine.scale.x = total; spine.position.set(0.001, 0, -total / 2 + 0.008); spine.visible = ca < 1.2;
  };
  const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
  const open = () => {
    if (mode !== 'closed') return;
    mode = 'opening'; hover = false; ry = Math.atan2(Math.sin(ry), Math.cos(ry)); vx = vy = 0; tilt = { x: 0, y: 0 };
    coverAnim = { from: ca, to: Math.PI, t0: performance.now() + 250, dur: reduce ? 300 : 1300 };
    sfx('cover'); emit();
  };
  const close = () => {
    if (mode !== 'open' || lf) return;
    mode = 'closing'; sfx('cover'); s = 0; show();
    coverAnim = { from: Math.PI, to: 0, t0: performance.now() + (sv > 0.2 ? 450 : 0), dur: reduce ? 300 : 1200 };
    emit();
  };
  const startLeaf = (dir) => {
    if (mode !== 'open' || lf) return null;
    if (dir > 0 && s >= maxS) return null; if (dir < 0 && s <= 0) return null;
    if (dir > 0) { leafA.material.map = tex(2 * s + 1); leafB.material.map = tex(2 * s + 2); leftPage.material.map = tex(2 * s + 3); }
    else { leafA.material.map = tex(2 * s - 1); leafB.material.map = tex(2 * s); rightPage.material.map = tex(2 * s - 2); }
    leafA.material.needsUpdate = leafB.material.needsUpdate = leftPage.material.needsUpdate = rightPage.material.needsUpdate = true;
    lf = { dir, a: dir > 0 ? 0 : Math.PI, v: 0, target: dir > 0 ? 0 : Math.PI, drag: false, gy: 0, grab: false, off: 0 };
    leaf.visible = true; return lf;
  };
  const commit = (go) => { // release: finish the turn or let the page fall back
    lf.drag = false; lf.target = (lf.dir > 0) === go ? Math.PI : 0;
    if (go) sfx('flip');
  };
  const flip = (dir) => { const l = startLeaf(dir); if (!l) return; l.v = dir > 0 ? 0.03 : -0.03; commit(true); };
  const go = (ns) => { if (mode !== 'open' || lf) return; s = Math.max(0, Math.min(maxS, ns)); show(); };
  const ray = new T.Raycaster(), ndc = new T.Vector2(), pl = new T.Plane(), vN = new T.Vector3(), vP = new T.Vector3();
  const localPt = (e) => {
    const r = cv.getBoundingClientRect(); ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, cam); book.updateMatrixWorld(true);
    vN.set(0, 0, 1).transformDirection(book.matrixWorld); vP.setFromMatrixPosition(book.matrixWorld); pl.setFromNormalAndCoplanarPoint(vN, vP);
    const hit = ray.ray.intersectPlane(pl, new T.Vector3()); return hit ? book.worldToLocal(hit) : null;
  };
  const zone = (p) => { if (!p || Math.abs(p.y) > H / 2 + 0.15) return 0; if (p.x < -W * 0.58 && p.x > -W - 0.25 && s < maxS) return 1; if (p.x > W * 0.58 && p.x < W + 0.25 && s > 0) return -1; return 0; };
  const angleAt = (p) => Math.acos(Math.max(-1, Math.min(1, -p.x / W)));
  // ---- input
  let drag = null, hover = false, hintKey = '';
  const edgePts = () => {
    const r = cv.getBoundingClientRect(), pj = (x, y) => { const v = cover.localToWorld(new T.Vector3(x, y, 0)).project(cam); return { x: (v.x + 1) / 2 * r.width, y: (1 - v.y) / 2 * r.height }; };
    const e = pj(-W, 0), sp = pj(0, 0), t = pj(-W, H / 2), b = pj(-W, -H / 2);
    return { ex: e.x, ey: e.y, sx: sp.x, top: Math.min(t.y, b.y), bot: Math.max(t.y, b.y), r };
  };
  const inLeft = (e) => {
    const p = edgePts(), x = e.clientX - p.r.left, y = e.clientY - p.r.top, w = p.sx - p.ex;
    if (y < p.top - 10 || y > p.bot + 10) return false;
    return w > 0 ? (x > p.ex - 24 && x < p.ex + w * 0.45) : (x < p.ex + 24 && x > p.ex + w * 0.45);
  };
  const down = (e) => {
    drag = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now(), page: false }; vx = vy = 0; lastAct = performance.now();
    try { cv.setPointerCapture(e.pointerId); } catch (er) {}
    if (mode === 'closed') { cv.style.cursor = 'grabbing'; return; }
    if (mode === 'open' && !lf) {
      const p = localPt(e), z = zone(p);
      if (z) { const l = startLeaf(z); if (l) { l.drag = true; l.gy = Math.sign(p.y) || 1; l.grab = Math.abs(p.y) > H * 0.25; const a0 = angleAt(p); l.off = a0 - l.a; l.target = l.a; drag.page = true; cv.style.cursor = 'grabbing'; } }
    }
  };
  const move = (e) => {
    if (!drag) { if (mode === 'closed') { hover = inLeft(e); cv.style.cursor = hover ? 'pointer' : 'grab'; } else if (mode === 'open' && !lf) cv.style.cursor = zone(localPt(e)) ? 'grab' : 'pointer'; return; }
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; lastAct = performance.now();
    if (mode === 'closed') { vy = dx * 0.012; vx = dy * 0.008; ry += vy; rx += vx; }
    else if (drag.page && lf) { const p = localPt(e); if (p) { const raw = angleAt(p); const k = lf.dir > 0 ? raw / Math.PI : 1 - raw / Math.PI; lf.target = Math.max(0, Math.min(Math.PI, raw - lf.off * (1 - k))); } }
    else if (mode === 'open') { tilt.y = Math.max(-0.6, Math.min(0.6, tilt.y + dx * 0.004)); tilt.x = Math.max(-0.6, Math.min(0.35, tilt.x + dy * 0.004)); }
  };
  const up = (e) => {
    if (!drag) return; const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy, dt = performance.now() - drag.t; const pg = drag.page; drag = null;
    cv.style.cursor = mode === 'closed' ? 'grab' : 'pointer';
    const click = Math.abs(dx) < 6 && Math.abs(dy) < 6 && dt < 500;
    if (pg && lf) {
      if (e.type !== 'pointerup') { commit(false); return; }
      if (click) { lf.v = lf.dir > 0 ? 0.03 : -0.03; commit(true); return; }
      const half = lf.dir > 0 ? lf.a > Math.PI * 0.45 : lf.a < Math.PI * 0.55;
      const fling = lf.dir > 0 ? lf.v > 0.02 : lf.v < -0.02, back = lf.dir > 0 ? lf.v < -0.02 : lf.v > 0.02;
      commit(fling || (half && !back));
      return;
    }
    if (e.type !== 'pointerup') return;
    if (mode === 'closed' && click) open();
    else if (mode === 'open') {
      if (click) { const r = cv.getBoundingClientRect(); flip(e.clientX - r.left < r.width / 2 ? 1 : -1); }
      else if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 600) { flip(dx > 0 ? 1 : -1); tilt.y = 0; }
    }
  };
  cv.addEventListener('pointerleave', () => { hover = false; if (mode === 'closed') cv.style.cursor = 'grab'; });
  cv.addEventListener('pointerdown', down); cv.addEventListener('pointermove', move); cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  const size = () => { const w = cv.clientWidth || 600, h = cv.clientHeight || 450; renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
  size();
  const ro = 'ResizeObserver' in window ? new ResizeObserver(size) : null; if (ro) ro.observe(cv);
  // ---- loop
  const t0 = performance.now(); let raf = 0;
  const loop = (now) => {
    const t = (now - t0) / 1000;
    if (coverAnim) {
      const k = Math.max(0, Math.min(1, (now - coverAnim.t0) / coverAnim.dur));
      ca = coverAnim.from + (coverAnim.to - coverAnim.from) * ease(k);
      if (k >= 1) { coverAnim = null; if (mode === 'opening') { mode = 'open'; cv.style.cursor = 'pointer'; show(); } else if (mode === 'closing') { mode = 'closed'; cv.style.cursor = 'grab'; lastAct = now; emit(); } }
    }
    sv += (s - sv) * 0.14;
    const fr = Math.min(3, (now - (loop.last || now)) / 16.67) || 1; loop.last = now;
    if (lf) {
      if (lf.drag) { const na = lf.a + (lf.target - lf.a) * (1 - Math.pow(0.72, fr)); lf.v = (na - lf.a) / fr; lf.a = na; }
      else {
        const k = reduce ? 0.06 : 0.017, c = reduce ? 0.5 : 0.17;
        lf.v += (k * (lf.target - lf.a) - c * lf.v) * fr; lf.a += lf.v * fr;
        if (lf.a < 0) { lf.a = 0; lf.v = -lf.v * 0.22; } if (lf.a > Math.PI) { lf.a = Math.PI; lf.v = -lf.v * 0.22; }
        if (Math.abs(lf.target - lf.a) < 0.004 && Math.abs(lf.v) < 0.002) {
          const done = lf.target === (lf.dir > 0 ? Math.PI : 0); if (done) s += lf.dir;
          lf = null; leaf.visible = false; shL.visible = shR.visible = false; show();
        }
      }
      if (lf) { leaf.rotation.y = lf.a; leaf.position.z = 0.002; deformLeaf(lf.a, lf.v, lf.gy, lf.grab); castShadow(lf.a); }
    }
    if (mode === 'closed' && !coverAnim) {
      const idle = !drag && !hover && now - lastAct > 1200 && !reduce;
      const tgt = drag ? 0 : hover ? 0.38 : idle ? Math.pow(Math.max(0, Math.sin(t * 1.4)), 8) * 0.16 : 0;
      ca += (tgt - ca) * 0.14;
    }
    layout();
    const op = mode === 'closed' ? 0 : ca / Math.PI; // 0 closed .. 1 open
    if (mode === 'closed') {
      if (!drag) {
        ry += vy; rx += vx; vy *= 0.94; vx *= 0.9;
        if (now - lastAct > 2500 && !reduce) { ry += (Math.sin(t * 0.5) * 0.5 - 0.35 - ry) * 0.012; rx += (0.08 - rx) * 0.02; }
      }
      rx = Math.max(-0.7, Math.min(0.7, rx));
    } else {
      const tx = mode === 'closing' ? 0.08 : -0.22 + tilt.x, ty = mode === 'closing' ? -0.35 : tilt.y;
      rx += (tx - rx) * 0.08; ry += (ty - ry) * 0.08;
    }
    turn.rotation.set(rx, ry, 0);
    const D = PT + 2 * CT;
    book.position.set(W / 2 * (1 - op), 0, D / 2 * (1 - op) + 0.1 * op);
    turn.position.y = (mode === 'closed' && !reduce) ? Math.sin(t * 1.1) * 0.05 : 0;
    shadow.material.opacity = (0.85 - turn.position.y) * (1 - op);
    const f = Math.tan((cam.fov * Math.PI / 180) / 2);
    const dC = Math.max((H * 1.32) / (2 * f), (W * 1.7) / (2 * f * cam.aspect));
    const dO = Math.max((H * 1.16) / (2 * f), (2 * W * 1.08) / (2 * f * cam.aspect));
    cam.position.set(0, 0.05, dC + (dO - dC) * op); cam.lookAt(0, 0, 0);
    renderer.render(scene, cam);
    if (o.onHint) {
      const showH = mode === 'closed' && !drag; let key = 'off', pos = null;
      if (showH) { const p = edgePts(); pos = { x: p.ex, y: p.ey, bot: p.bot, hover: hover }; key = Math.round(p.ex) + ',' + Math.round(p.ey) + (hover ? 'h' : ''); }
      if (key !== hintKey) { hintKey = key; o.onHint(pos); }
    }
    raf = requestAnimationFrame(loop);
  };
  layout(); leftPage.material.map = tex(1); raf = requestAnimationFrame(loop);
  return {
    open, close, next: () => flip(1), prev: () => flip(-1), go, maxS,
    setSound: (on) => { soundOn = !!on; if (soundOn) sfx('flip'); },
    get mode() { return mode; }, get spread() { return s; },
    dispose: () => { cancelAnimationFrame(raf); if (ro) ro.disconnect(); cv.removeEventListener('pointerdown', down); cv.removeEventListener('pointermove', move); cv.removeEventListener('pointerup', up); cv.removeEventListener('pointercancel', up); cache.forEach((x) => x.dispose()); renderer.dispose(); }
  };
}
