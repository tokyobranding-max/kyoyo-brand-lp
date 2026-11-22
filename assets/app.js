(function () {
  'use strict';
  var BASE = 'https://note.com/chikaike/n/';
  var MAG = 'https://note.com/chikaike/m/m676d481d8327';
  var W = [
    ['01', 'ブランドとは、世界の美学を読む共通言語であり、毎日の選び方を変える教養である', 'はじめに『共通言語の美学』', 'n9544b664659c', []],
    ['02', 'ブランドの正体は物ではなく、その奥にある美学。人は物を通してその意味を買っている', '序章『意味の美学』', 'n32b280120c07', ['price']],
    ['03', 'ブランドは焼き印の約束から始まり、何を選び、何を選ばないかという美学によって意味へと育つ', '第1章『約束の美学』', 'n8b087d4e0d58', []],
    ['04', '意味ある高さとは、使う年月で値段を割り、直しながら受け継ぐことで、払ったお金が暮らしに返ってくる高さ', '第2章『意味ある高さの美学』', 'nd5afb4f0c21c', ['price']],
    ['05', '美学は風土と歴史から生まれ、3つの軸で、世界の地図として読み解ける', '第3章『風土と歴史の美学』', 'n1bf907400d2b', ['season']],
    ['06', 'フランスの「高い」は、見せるための値段ではなく、毎日を美しく生きる時間の値段である', '第4章 フランス『暮らしの美学』', 'n7da49b502388', ['price', 'table']],
    ['07', 'ドイツの「シンプル」は、手を抜いた形ではなく、引き算を積み重ねて長く使えるようにした形である', '第5章 ドイツ『合理美』', 'ne684fdc16d4e', ['long']],
    ['08', '日本の美学は、足りないことを恐れず、余白と時間に価値を委ねること', '第6章 日本『余白と引き算の美学』', 'n5721f0747756', ['season']],
    ['09', '富山のブランドは、売る前に信頼を置き、使い続けてもらう時間の中で選ばれてきた', '特別編 富山『先用後利の美学』', 'n6f7c91b2bdf0', ['long', 'season']],
    ['10', 'イタリアの美学は、心が動くかどうかで選び、作り手の情熱ごと受け継ぐこと', '第7章 イタリア『情熱と職人の美学』', 'n653e70e6c4e6', ['table']],
    ['11', 'イギリスの美学は、型を守り続ける誇りと、型を破る勇気を、同じ手に持つこと', '第8章 イギリス『伝統と反骨の美学』', 'n802b932d8252', ['change']],
    ['12', 'アメリカの美学は、物を通して自分の生き方を表し、挑戦する人の背中を押すこと', '第9章 アメリカ『挑戦と自己表現の美学』', 'nde1a85a70d10', ['work']],
    ['13', '北欧の美学は、良いデザインをみんなのものにし、毎日の暮らしの中に幸福を見つけること', '第10章 北欧『幸福と民主的デザインの美学』', 'na5a205c654c9', ['table']],
    ['14', 'スイスの美学は、見えないところまで精度を積み重ね、時間をかけて信頼を育てること', '第11章 スイス『精密と信頼の美学』', 'n46b5f4ececb8', ['long']],
    ['15', '韓国の美学は、相手の気持ちに寄り添いながら、恐れずに変わり続けること', '第12章 韓国『変化と共感の美学』', 'na7488f42c8c4', ['change']],
    ['16', '中国の美学は、完成を待たずに動き出し、使う人と一緒に速く磨き続けること', '第13章 中国『速度と実装の美学』', 'nc011d5731c7c', ['change']],
    ['17', 'インドの美学は、ひとつの正解を押しつけず、違いを受け入れて、相手に合う形へ変わり続けること', '第14章 インド『多様性と適応の美学』', 'n93311ddd00d8', ['change']],
    ['18', 'スペインの美学は、色と食と人とのつながりで、ありふれた毎日を祝祭に変えること', '第15章 スペイン『色彩と生活文化の美学』', 'n54b8c1610591', ['table']],
    ['19', 'ブランドの美学は、空間・言葉・組織の判断にまで宿り、内側から揃っていくことで伝わる', '第16章『空間と組織の美学』', 'n6260b6828567', ['work']],
    ['20', '人もまた美学で選ばれる。肩書きではなく、原体験から生まれた「なぜ」を言葉にすること', '第17章『パーソナルブランドの美学』', 'nd5367a0f3cbb', ['work']],
    ['21', '機能はすぐにコピーされる。AI時代に最後に残るのは、物語・原体験・美学というコピーできない「なぜ」', '第18章『なぜの美学』', 'n365a9d1bb481', ['work']],
    ['22', '自分の美学で選ぶとは、使う年月で物を見直し、自分自身が人生のブランド責任者になること', '終章『選ぶ美学』', 'n440d85620507', ['price', 'long']],
    ['23', '一人ひとりが美学で選ぶことが、長く使われる物とつくり手を守り、持続的な社会をつくる', 'おわりに『持続の美学』', 'n68f338978d0e', []]
  ];
  var S = [['all', 'すべて'], ['price', '値段を考える日に'], ['long', '長く使うものを選ぶ日に'], ['table', '食卓を囲む日に'], ['season', '季節を感じる日に'], ['work', '仕事で迷った日に'], ['change', '変わりたい日に']];
  var CR = [['Fred Cherrygarden', 'CC BY-SA 4.0', '神保町のすずらん通り'], ['lumoplank', 'CC0', '忍野八海'], ['ccfarmer', 'CC BY 3.0', '京都の町家'], ['Nassauer27', 'CC0', 'かつての靴職人の工房'], ['Raita Futo', 'CC BY 2.0', '日本の杉の森'], ['Myrabella', 'CC BY-SA 3.0', 'ヴェルサイユ宮殿の鏡の間'], ['Ladiszlai', 'CC BY-SA 4.0', 'デッサウのバウハウス校舎'], ["Stephane D'Alu", 'CC BY-SA 3.0', '龍安寺の石庭'], ['Isoyan', 'CC BY-SA 3.0', '高岡の金屋町'], ['Petar Milošević', 'CC BY-SA 4.0', 'フィレンツェの大聖堂'], ['Sjenghai', 'CC BY-SA 4.0', 'ロンドンのサヴィル・ロウ'], ['Mike McBey', 'CC BY 2.0', 'ヨセミテのエル・キャピタン'], ['Julian Herzog', 'CC BY 4.0', 'ストックホルムの旧市街'], ['JoachimKohler-HB', 'CC BY-SA 4.0', 'スイスの町シュヴィーツ'], ['Basile Morin', 'CC BY-SA 4.0', 'ソウルの北村'], ['Charlie fong', 'CC BY-SA 4.0', '深センの街'], ['Eskay001', 'CC BY-SA 4.0', 'マヘシュワルの手織り職人'], ['DimiTalen', 'CC0', 'グエル公園のモザイク'], ['C messier', 'CC BY-SA 4.0', 'ミラノのガッレリア'], ['Mizunoumi', 'CC BY-SA 3.0', '葉山の海岸'], ['EverJean', 'CC BY 2.0', '京都の刃物店の包丁'], ['Tom Maisey', 'CC BY 2.0', '雨の京都の通り'], ['Izu navi', 'CC BY 2.0', '石部の棚田']];

  var $ = function (id) { return document.getElementById(id); };
  var load = function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } };
  var save = function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  var state = { scene: 'all', pins: load('kyb_pins', {}), read: load('kyb_read', {}), notes: load('kyb_notes', {}), shift: 0 };
  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  var PIN_OFF = 'min-height: 36px; padding: 0 14px; border-radius: 999px; border: 1px solid #8A7A63; background: transparent; color: inherit; font: inherit; font-size: 13px; cursor: pointer;';
  var PIN_ON = 'min-height: 36px; padding: 0 14px; border-radius: 999px; border: 1px solid #6B4F2A; background: #E2C796; color: #161514; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer;';
  var url = function (w, m) { return BASE + w[3] + '?utm_source=lp&utm_medium=' + m; };
  var el = function (tag, attrs, text) { var n = document.createElement(tag); for (var k in attrs) { if (k === 'style') n.style.cssText = attrs[k]; else n.setAttribute(k, attrs[k]); } if (text != null) n.textContent = text; return n; };

  // ---- colored tabs: one color per purpose
  var TABS = [
    { k: 'beauty', label: '美しい', color: '#9CC94B', ph: 'なぜ美しいと思った？', head: 'なぜ美しいと思ったか' },
    { k: 'curious', label: '気になる', color: '#F2B33D', ph: '何が気になった？', head: '気になったこと' },
    { k: 'more', label: 'もっと読みたい', color: '#EF6F7E', ph: 'どこをもっと読みたい？', head: 'もっと読みたいところ' },
    { k: 'reread', label: 'あとで読み返す', color: '#6FC1E0', ph: 'いつ、なぜ読み返したい？', head: '読み返したい理由' },
    { k: 'nope', label: '興味がない', color: '#A39A8E', ph: 'なぜ響かなかった？（それも自分の基準）', head: '興味がわかなかった理由' }
  ];
  var TAB = {}; TABS.forEach(function (t) { TAB[t.k] = t; });
  function pinOf(no) { var v = state.pins[no]; if (!v) return null; if (typeof v === 'object') return v; return { t: typeof v === 'number' ? v : 0, c: 'beauty' }; }
  function setPin(no, c) { var cur = pinOf(no); if (cur && cur.c === c) delete state.pins[no]; else state.pins[no] = { t: cur ? cur.t : Date.now(), c: c }; save('kyb_pins', state.pins); render(); }
  function togglePin(no) { delete state.pins[no]; save('kyb_pins', state.pins); render(); }
  function pinOrder(no) { var p = pinOf(no); return p ? p.t : 0; }
  function tabRow(no) {
    var cur = pinOf(no), row = el('div', { 'class': 'tabs', role: 'group', 'aria-label': '付箋の色を選ぶ' });
    TABS.forEach(function (t) {
      var on = !!(cur && cur.c === t.k);
      var b = el('button', { type: 'button', 'class': 'tab' + (on ? ' on' : ''), 'aria-pressed': on ? 'true' : 'false', title: on ? '付箋をはがす' : t.label + 'の付箋を貼る', style: '--c:' + t.color });
      b.appendChild(el('span', { 'class': 'tab-flag', 'aria-hidden': 'true' }));
      b.appendChild(document.createTextNode(t.label));
      b.onclick = function () { setPin(no, t.k); };
      row.appendChild(b);
    });
    return row;
  }
  function markRead(no) { state.read[no] = true; save('kyb_read', state.read); setTimeout(render, 0); }

  function renderToday() {
    var now = new Date(), start = new Date(now.getFullYear(), 0, 0);
    var day = Math.floor((now - start) / 86400000);
    var w = W[(day + state.shift) % W.length];
    $('todayDate').textContent = (now.getMonth() + 1) + '月' + now.getDate() + '日';
    $('todayNo').textContent = w[0];
    $('todayWord').textContent = window.KYBQuote ? KYBQuote.data(W.indexOf(w))[0] : w[1];
    var ti = $('todayImg'), idx = W.indexOf(w); ti.alt = window.KYBQuote ? KYBQuote.data(idx)[0] : w[1];
    if (ti.dataset.i !== String(idx)) {
      ti.dataset.i = String(idx);
      (function go(n) {
        if (!window.KYBQuote) { if (n < 50) setTimeout(function () { go(n + 1); }, 100); return; }
        window.KYBQuote.canvas(idx, { cover: false }).then(function (c) {
          if (ti.dataset.i === String(idx)) ti.src = c.toDataURL('image/png');
        });
      })(0);
    }
    var a = $('todayLink'); a.href = url(w, 'today'); a.textContent = w[2] + ' を読む'; a.onclick = function () { markRead(w[0]); };
    $('todayShare').onclick = function () { openShare([W.indexOf(w)]); };
    var tt = $('todayTabs'); tt.textContent = ''; tt.appendChild(tabRow(w[0]));
  }
  function renderScenes() {
    var box = $('scenes'); box.textContent = '';
    S.forEach(function (sc) {
      var on = state.scene === sc[0];
      var b = el('button', { type: 'button', 'class': 'chip', 'aria-pressed': on ? 'true' : 'false', style: 'min-height: 44px; padding: 0 18px; border-radius: 999px; font: inherit; font-size: 14px; cursor: pointer; ' + (on ? 'background: #161514; color: #F4EFE7; border: 1px solid #161514;' : 'background: #FFFFFF; color: #141414; border: 1px solid #C9BFAF;') }, sc[1]);
      b.onclick = function () { state.scene = sc[0]; render(); };
      box.appendChild(b);
    });
  }
  var qCache = {}, qIO = null, qBusy = Promise.resolve();
  function qMake(img) {
    var i = Number(img.getAttribute('data-i'));
    if (qCache[i]) { img.src = qCache[i]; return; }
    qBusy = qBusy.then(function () {
      if (!window.KYBQuote) return;
      return KYBQuote.canvas(i, { cover: false }).then(function (c) {
        return new Promise(function (r) { c.toBlob(function (b) { qCache[i] = URL.createObjectURL(b); r(); }, 'image/jpeg', 0.88); });
      }).then(function () { document.querySelectorAll('img.card-q[data-i="' + i + '"]').forEach(function (m) { m.src = qCache[i]; }); });
    }).catch(function () {});
  }
  function qObs(img) {
    if (!('IntersectionObserver' in window)) { qMake(img); return; }
    if (!qIO) qIO = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { qIO.unobserve(e.target); qMake(e.target); } }); }, { rootMargin: '600px 0px' });
    qIO.observe(img);
  }
  function renderCards() {
    var box = $('cards'); box.textContent = '';
    W.forEach(function (w, i) {
      if (state.scene !== 'all' && w[4].indexOf(state.scene) < 0) return;
      var pin = pinOf(w[0]), pinned = !!pin;
      var card = el('div', { 'class': 'card reveal', style: 'position: relative; background: #FFFFFF; border: 1px solid ' + (pinned ? TAB[pin.c].color : '#D8CFC2') + '; border-radius: 12px; padding: 22px; display: flex; flex-direction: column; gap: 12px; min-height: 200px; box-sizing: border-box; text-align: center;' });
      var fig = el('div', { 'class': 'wimg', style: 'position: relative; margin: -22px -22px 0; aspect-ratio: 16 / 10; overflow: hidden; border-radius: 11px 11px 0 0; background: #E3DACD;' });
      fig.appendChild(el('img', { src: 'assets/words/w' + w[0] + '.jpg', alt: CR[i][2], loading: 'lazy', style: 'display: block; width: 100%; height: 100%; object-fit: cover;' }));
      fig.appendChild(el('span', { style: 'position: absolute; right: 0; bottom: 0; padding: 2px 8px; background: rgba(0,0,0,0.55); color: #FFFFFF; font-size: 10px; line-height: 1.5;' }, 'Photo: ' + CR[i][0] + ' / ' + CR[i][1] + ' / Wikimedia Commons'));
      card.appendChild(fig);
      if (pinned) card.appendChild(el('span', { 'class': 'card-flag', style: 'background:' + TAB[pin.c].color, title: TAB[pin.c].label }));
      var row = el('div', { style: 'display: flex; justify-content: space-between; align-items: center; gap: 12px;' });
      row.appendChild(el('span', { style: 'font-size: 13px; letter-spacing: 0.1em; color: #5A5148;' }, 'No.' + w[0] + (state.read[w[0]] ? '　読んだ' : '')));
      if (pinned) row.appendChild(el('span', { style: 'font-size: 12px; font-weight: 700; color: #3A332B;' }, '付箋：' + TAB[pin.c].label));
      card.appendChild(row);
      var qi = el('img', { 'class': 'card-q', src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==', alt: window.KYBQuote ? KYBQuote.data(i)[0] : w[1], width: '1080', height: '1170', 'data-i': String(i), style: 'display: block; width: 100%; height: auto; aspect-ratio: 1080 / 1170; border-radius: 8px; background: #F4F4F4; border: 1px solid #E3DACD; box-sizing: border-box;' });
      if (qCache[i]) qi.src = qCache[i]; else qObs(qi);
      card.appendChild(qi);
      var a = el('a', { href: url(w, 'words'), target: '_blank', rel: 'noopener', style: 'font-size: 13px; padding: 8px 0;' }, w[2]);
      a.onclick = function () { markRead(w[0]); };
      card.appendChild(a);
      card.appendChild(tabRow(w[0]));
      var sb = el('button', { type: 'button', style: 'align-self: center; ' + PIN_OFF }, '画像でシェア');
      sb.onclick = function () { openShare([i]); };
      card.appendChild(sb);
      box.appendChild(card);
    });
  }
  function renderPins() {
    var pinned = W.filter(function (w) { return state.pins[w[0]]; }).sort(function (a, b) { return pinOrder(a[0]) - pinOrder(b[0]); });
    $('pinCount').textContent = pinned.length;
    $('readCount').textContent = Object.keys(state.read).length;
    $('noPins').hidden = pinned.length > 0; $('sharePinned').hidden = pinned.length === 0; $('sharePinned').style.display = pinned.length ? 'inline-flex' : 'none';
    renderSummary(pinned);
    renderSidePins(pinned);
    $('sharePinned').onclick = function () { openShare(W.map(function (w, i) { return state.pins[w[0]] ? i : -1; }).filter(function (i) { return i >= 0; })); };
  }
  // ---- STEP 05: summary of pinned articles and your own words, shown as quotes
  function askList() {
    return Array.prototype.map.call(document.querySelectorAll('#step3 [data-aesth]'), function (ta) {
      var ask = ta.closest('.ask'); var sm = ask && ask.querySelector('small'), b = ask && ask.querySelector('b');
      return { k: ta.getAttribute('data-aesth'), small: sm ? sm.textContent : '', q: b ? b.textContent : '' };
    });
  }
  function renderSummary(pinned) {
    pinned = pinned || W.filter(function (w) { return state.pins[w[0]]; }).sort(function (a, b) { return pinOrder(a[0]) - pinOrder(b[0]); });
    var a = load('kyb_aesth', {});
    var sw = $('sumWords'); sw.textContent = ''; var any = false;
    askList().forEach(function (q) {
      var v = (a[q.k] || '').trim(); if (!v) return; any = true;
      var f = el('figure', { style: 'margin: 0;' });
      f.appendChild(el('figcaption', { style: 'margin: 0 0 6px; font-size: 12px; color: #C9BFAF;' }, q.small.replace(/\s+/g, ' ') + '　' + q.q));
      f.appendChild(el('blockquote', { 'class': 'sum-q' }, v));
      sw.appendChild(f);
    });
    updateAiLinks();
    if (!any) sw.appendChild(el('p', { style: 'margin: 0; font-size: 14px; color: #C9BFAF;' }, 'STEP 04の問いに答えると、ここに引用として並びます。'));
    $('sumCount').textContent = pinned.length ? pinned.length + '枚' : '';
    var list = $('pinList'); list.textContent = '';
    TABS.forEach(function (tb) {
      var g = pinned.filter(function (w) { return pinOf(w[0]).c === tb.k; }); if (!g.length) return;
      var grp = el('div', { style: 'display: flex; flex-direction: column; gap: 10px;' });
      grp.appendChild(el('p', { style: 'margin: 0; font-size: 12px; font-weight: 700; color: ' + tb.color + ';' }, '■ ' + tb.label + '（' + g.length + '）'));
      g.forEach(function (w) {
        var f = el('figure', { style: 'margin: 0; padding: 12px 14px; background: #FBF8F3; border: 1px solid #E3DACD; border-left: 5px solid ' + tb.color + '; border-radius: 8px;' });
        f.appendChild(el('blockquote', { style: 'margin: 0; font-family: \'Noto Serif JP\', serif; font-size: 15px; line-height: 1.8; color: #141414;' }, '「' + w[1] + '」'));
        var cap = el('figcaption', { style: 'margin: 8px 0 0; font-size: 12px; color: #5A5148; display: flex; flex-wrap: wrap; gap: 2px 10px; align-items: center;' });
        cap.appendChild(document.createTextNode('No.' + w[0]));
        var lk = el('a', { href: url(w, 'summary'), target: '_blank', rel: 'noopener', style: 'color: #6B4F2A;' }, w[2] + ' を読む');
        lk.onclick = function () { markRead(w[0]); };
        cap.appendChild(lk);
        if (state.read[w[0]]) cap.appendChild(el('span', { style: 'font-size: 11px; color: #5E8A1E;' }, '読んだ'));
        f.appendChild(cap);
        var nt = (state.notes[w[0]] || '').trim();
        if (nt) {
          var me = el('div', { style: 'margin: 10px 0 0; padding: 8px 10px; background: #FFFFFF; border-radius: 6px;' });
          me.appendChild(el('p', { style: 'margin: 0 0 2px; font-size: 11px; font-weight: 700; color: #6B4F2A;' }, tb.head));
          me.appendChild(el('p', { style: 'margin: 0; font-size: 14px; line-height: 1.7; color: #141414; white-space: pre-wrap;' }, nt));
          f.appendChild(me);
        }
        grp.appendChild(f);
      });
      list.appendChild(grp);
    });
  }
  function aiPrompt() {
    var a = load('kyb_aesth', {}), out = [];
    out.push('私は『教養としてのブランド』（チカイケ秀夫）を読みながら、気になった言葉に付箋を貼り、自分の日常から言葉を書きました。');
    out.push('これらに共通している「私の美学」を読み取り、「わたしにとってブランドとは、」に続く一文を3案つくってください。');
    out.push('条件：やさしい日本語で、1案60字以内。それぞれに、そう読み取った理由を1〜2文で添えてください。「興味がない」の付箋は、選ばないものとして手がかりにしてください。最後に「これは下書きです。ご自身の言葉で書き直してみてください」と書いてください。');
    out.push('');
    var ws = askList().filter(function (q) { return q.k !== 'ai' && q.k !== 'def' && (a[q.k] || '').trim(); });
    if (ws.length) { out.push('■ 自分の日常の言葉'); ws.forEach(function (q) { out.push('・' + q.q); out.push('　→ ' + a[q.k].trim().replace(/\n/g, ' ')); }); out.push(''); }
    var pinned = W.filter(function (w) { return state.pins[w[0]]; });
    TABS.forEach(function (tb) {
      var g = pinned.filter(function (w) { return pinOf(w[0]).c === tb.k; }); if (!g.length) return;
      out.push('■ 付箋「' + tb.label + '」');
      g.forEach(function (w) { out.push('・「' + w[1] + '」（' + w[2] + '）'); var nt = (state.notes[w[0]] || '').trim(); if (nt) out.push('　' + tb.head + '：' + nt.replace(/\n/g, ' ')); });
      out.push('');
    });
    if (!ws.length && !pinned.length) out.push('（まだ付箋も言葉もありません。本の考え方から、問いかけの形で一緒に考えてください）');
    return out.join('\n');
  }
  function updateAiLinks() {
    var t = aiPrompt();
    $('aiClaude').href = 'https://claude.ai/new?q=' + encodeURIComponent(t);
    $('aiGpt').href = 'https://chatgpt.com/?q=' + encodeURIComponent(t);
  }
  function summaryText() {
    var a = load('kyb_aesth', {}), out = ['『教養としてのブランド』わたしのまとめ', ''];
    var ws = askList().filter(function (q) { return (a[q.k] || '').trim(); });
    if (ws.length) { out.push('■ わたしの日常の言葉'); ws.forEach(function (q) { out.push('・' + q.q); out.push('　> ' + a[q.k].trim().replace(/\n/g, '\n　> ')); }); out.push(''); }
    var pinned = W.filter(function (w) { return state.pins[w[0]]; });
    TABS.forEach(function (tb) {
      var g = pinned.filter(function (w) { return pinOf(w[0]).c === tb.k; }); if (!g.length) return;
      out.push('■ ' + tb.label);
      g.forEach(function (w) { out.push('> 「' + w[1] + '」（' + w[2] + '）'); var nt = (state.notes[w[0]] || '').trim(); if (nt) out.push('　' + tb.head + '：' + nt); });
      out.push('');
    });
    var d = (a.def || '').trim(); if (d) { out.push('■ わたしにとってブランドとは、'); out.push(d); out.push(''); }
    out.push('#教養としてのブランド'); out.push(LP);
    return out.join('\n');
  }
  // ---- quote images: made on the spot, attached when sharing
  var LP = 'https://tokyobranding.org/kyoyo-brand-lp/', shareIdx = [], shareCv = [], shareBlobs = [];
  if (window.KYBQuote) KYBQuote.setCover('assets/front.jpg');
  var touch = !!(window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
  var isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  function qUrl(i) { var k = window.KYBQuote ? KYBQuote.variant(i) : 0; return LP + 'q/' + String(i + 1).padStart(2, '0') + (k ? '-' + (k + 1) : '') + '/'; }
  function shareText(idxs) {
    var note = function (i) { return W[i] ? '\n▼noteで読む\n' + url(W[i], 'share') : ''; };
    if (idxs.length === 1) { var q = KYBQuote.data(idxs[0]); return '「' + q[0] + '」\n『教養としてのブランド』' + q[1] + '　' + q[2] + 'P' + note(idxs[0]) + '\n#教養としてのブランド\n' + qUrl(idxs[0]); }
    return '『教養としてのブランド』から、気になった言葉' + note(idxs[0]) + '\n#教養としてのブランド\n' + qUrl(idxs[0]);
  }
  function files() { return shareBlobs.map(function (b, k) { return new File([b], KYBQuote.filename(shareIdx[k]), { type: 'image/png' }); }); }
  function canFileShare() { try { return touch && !!navigator.share && !!navigator.canShare && navigator.canShare({ files: files() }); } catch (e) { return false; } }
  function openShare(idxs) {
    if (!window.KYBQuote || !idxs.length) return;
    shareIdx = idxs; shareBlobs = []; $('shareImgs').textContent = ''; $('shareMsg').textContent = '画像をつくっています…'; $('shareModal').hidden = false;
    $('shareX').href = 'https://x.com/intent/post?text=' + encodeURIComponent(shareText(idxs));
    $('shareFb').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(qUrl(idxs[0]));
    $('shareHint').textContent = '';
    Promise.all(idxs.map(function (i) { return KYBQuote.canvas(i); })).then(function (cs) {
      shareCv = cs;
      cs.forEach(function (c, k) { $('shareImgs').appendChild(el('img', { src: c.toDataURL('image/png'), alt: KYBQuote.data(idxs[k])[0], style: 'width: 100%; max-width: ' + (idxs.length > 1 ? '300px' : '420px') + '; height: auto; border-radius: 8px; display: block;' })); });
      return Promise.all(cs.map(function (c) { return new Promise(function (r) { c.toBlob(r, 'image/png'); }); }));
    }).then(function (bs) {
      shareBlobs = bs; $('shareMsg').textContent = '';
      $('shareHint').textContent = canFileShare() ? '「Xでシェア」「Facebookでシェア」を押して、表示された一覧からアプリを選ぶと、画像が添付された投稿画面が開きます'
        : '「Xでシェア」を押すと画像がコピーされ、Xの投稿画面が開きます。本文の下で ' + (isMac ? '⌘ + V' : 'Ctrl + V') + ' を押すと画像が添付されます' + (idxs.length > 1 ? '（2枚目以降は「画像を保存」から添付してください）' : '') + '。「Facebookでシェア」を押すと本文がコピーされ、引用カードつきの投稿画面が開きます。本文は投稿欄に貼り付けてください';
    });
  }
  $('shareX').addEventListener('click', function (e) {
    if (!shareBlobs.length) { e.preventDefault(); return; }
    if (canFileShare()) {
      e.preventDefault();
      navigator.share({ files: files(), text: shareText(shareIdx) }).catch(function (er) { if (!er || er.name !== 'AbortError') $('shareMsg').textContent = 'シェアできませんでした。画像を保存してから添付してください'; });
      return;
    }
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        navigator.clipboard.write([new ClipboardItem({ 'image/png': shareBlobs[0] })]).then(function () {
          $('shareMsg').textContent = '画像をコピーしました。Xの投稿画面で ' + (isMac ? '⌘ + V' : 'Ctrl + V') + ' を押してください';
        }, function () { $('shareMsg').textContent = '画像をコピーできませんでした。「画像を保存」から添付してください'; });
      } else { $('shareMsg').textContent = 'このブラウザでは画像をコピーできません。「画像を保存」から添付してください'; }
    } catch (er) { $('shareMsg').textContent = '「画像を保存」から添付してください'; }
  });
  $('shareFb').addEventListener('click', function (e) {
    if (!shareIdx.length) { e.preventDefault(); return; }
    if (canFileShare()) {
      e.preventDefault();
      navigator.share({ files: files(), text: shareText(shareIdx) }).catch(function (er) { if (!er || er.name !== 'AbortError') $('shareMsg').textContent = 'シェアできませんでした。画像を保存してから添付してください'; });
      return;
    }
    var t = shareText(shareIdx);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(function () { $('shareMsg').textContent = '本文をコピーしました。Facebookの投稿欄で ' + (isMac ? '⌘ + V' : 'Ctrl + V') + ' を押して貼り付けてください'; }, function () {});
    } catch (er) {}
  });
  $('shareClose').onclick = function () { $('shareModal').hidden = true; };
  $('shareModal').addEventListener('click', function (e) { if (e.target === $('shareModal')) $('shareModal').hidden = true; });
  $('shareSave').onclick = function () {
    shareBlobs.forEach(function (b, k) { var u = URL.createObjectURL(b), a = document.createElement('a'); a.href = u; a.download = KYBQuote.filename(shareIdx[k]); document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 4000); });
    if (shareBlobs.length) $('shareMsg').textContent = '保存しました';
  };
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !$('shareModal').hidden) $('shareModal').hidden = true; });

  var sideKey = null, sidePinsReady = false;
  function renderSidePins(pinned) {
    $('sidePinCount').textContent = pinned.length;
    $('sidePinEmpty').hidden = pinned.length > 0;
    var ff = $('sideFilter'); ff.textContent = ''; ff.hidden = pinned.length === 0;
    [{ k: 'all', label: 'すべて', color: '#C9BFAF' }].concat(TABS).forEach(function (t) {
      var n = t.k === 'all' ? pinned.length : pinned.filter(function (w) { return pinOf(w[0]).c === t.k; }).length;
      var on = (state.sideFilter || 'all') === t.k;
      var b = el('button', { type: 'button', 'class': 'sf' + (on ? ' on' : ''), 'aria-pressed': on ? 'true' : 'false', style: '--c:' + t.color }, t.label + ' ' + n);
      b.onclick = function () { state.sideFilter = t.k; sideKey = null; renderSidePins(pinned); };
      ff.appendChild(b);
    });
    var shown = (state.sideFilter && state.sideFilter !== 'all') ? pinned.filter(function (w) { return pinOf(w[0]).c === state.sideFilter; }) : pinned;
    var key = (state.sideFilter || 'all') + '|' + pinned.map(function (w) { return w[0] + pinOf(w[0]).c; }).join(',');
    if (key === sideKey) return;
    sideKey = key;
    var box = $('sidePinList'); box.textContent = '';
    shown.forEach(function (w) {
      var tb = TAB[pinOf(w[0]).c];
      var card = el('div', { 'class': 'pin', style: 'border-left: 5px solid ' + tb.color });
      var m = el('div', { 'class': 'pin-m' });
      m.appendChild(el('b', { style: 'color:' + tb.color + ';font-weight:700;font-size:12px' }, tb.label));
      var x = el('button', { type: 'button', 'class': 'pin-x', 'aria-label': 'この付箋をはがす' }, 'はがす');
      x.onclick = function () { togglePin(w[0]); };
      m.appendChild(x); card.appendChild(m);
      card.appendChild(el('p', { style: 'margin:0;font-size:11px;color:#8A7A63' }, 'No.' + w[0] + '　' + w[2].replace(/『.*$/, '').trim()));
      card.appendChild(el('p', { 'class': 'pin-t' }, w[1]));
      var ta = el('textarea', { placeholder: tb.ph, 'aria-label': 'No.' + w[0] + '：' + tb.head });
      ta.value = state.notes[w[0]] || '';
      ta.addEventListener('input', function () { state.notes[w[0]] = ta.value; save('kyb_notes', state.notes); });
      ta.addEventListener('blur', function () { sideKey = key; renderPins(); });
      card.appendChild(ta);
      box.appendChild(card);
    });
    var sc = box.parentNode; if (sc && sidePinsReady) sc.scrollTop = sc.scrollHeight;
    sidePinsReady = true;
  }
  function render() { renderToday(); renderScenes(); renderCards(); renderPins(); }
  $('nextWord').onclick = function () { state.shift++; var b = $('todayBox'); b.className = state.shift % 2 ? 'fadeB' : 'fadeA'; renderToday(); };
  render();

  var sumT = null; function sumLater() { clearTimeout(sumT); sumT = setTimeout(function () { renderSummary(); }, 400); }
  document.addEventListener('input', function (e) { if (e.target && e.target.closest && e.target.closest('.pins')) sumLater(); });
  $('aiCopy').onclick = function () {
    var t = aiPrompt(), b = $('aiCopy');
    var done = function () { b.textContent = 'コピーしました'; $('aiHint').textContent = 'お使いのAI（Claude、ChatGPT、Geminiなど）に貼り付けて送り、返ってきた答えを下に貼ってください。'; setTimeout(function () { b.textContent = '依頼文をコピー'; }, 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, function () { window.prompt('コピーしてください', t); }); else window.prompt('コピーしてください', t);
  };
  $('aiClaude').addEventListener('click', updateAiLinks); $('aiGpt').addEventListener('click', updateAiLinks);
  $('copySum').onclick = function () {
    var t = summaryText(), b = $('copySum'), done = function () { b.textContent = 'コピーしました'; setTimeout(function () { b.textContent = 'まとめをテキストでコピー'; }, 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, function () { window.prompt('コピーしてください', t); }); else window.prompt('コピーしてください', t);
  };
  // ---- STEP 03: put your aesthetic into words (kept in this browser)
  var aesth = load('kyb_aesth', {});
  Array.prototype.forEach.call(document.querySelectorAll('[data-aesth]'), function (ta) {
    var k = ta.getAttribute('data-aesth');
    ta.value = aesth[k] || '';
    ta.addEventListener('input', function () { aesth[k] = ta.value; save('kyb_aesth', aesth); if (k !== 'def' && k !== 'ai') sumLater(); });
  });

  // ---- sidebar: smooth scroll + current section
  var links = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = (a.getAttribute('href') || '').slice(1), t = $(id); if (!t) return;
      e.preventDefault();
      var off = window.innerWidth <= 760 ? 56 : 0;
      window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - off, behavior: reduce ? 'auto' : 'smooth' });
      if (history.replaceState) history.replaceState(null, '', '#' + id);
    });
  });
  var setCur = function (id) { links.forEach(function (a) { if (!a.classList.contains('navlink')) return; var on = a.getAttribute('href') === '#' + id; a.classList.toggle('on', on); if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); }); };
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) setCur(en.target.id); }); }, { rootMargin: '-35% 0px -60% 0px' });
    ['top', 'step1', 'step2', 'words', 'step3', 'share', 'rich', 'read', 'faq', 'author'].forEach(function (id) { var n = $(id); if (n) io.observe(n); });
  }

  // ---- 3D book (sample: opening pages)
  var SAMPLE = 32;
  var cv = $('book'), book = null, sound = load('kyb_sound', false);
  var setSoundLabel = function () { var b = $('soundBtn'); b.textContent = sound ? '音：オン' : '音：オフ'; b.setAttribute('aria-pressed', sound ? 'true' : 'false'); };
  setSoundLabel();
  function onState(st) {
    $('bookClosedCtl').hidden = st.open; $('bookOpenCtl').hidden = !st.open;
    cv.setAttribute('aria-label', st.open ? '開いた本。ページの左側をクリックで次のページ、右側で前のページ' : '『教養としてのブランド』の立体の本。ドラッグで回せます。表紙の左側をクリックすると本が開きます');
    var sp = st.spread || 0;
    $('bookLabel').textContent = sp === 0 ? '試し読み p.1' : (2 * sp + 1 > SAMPLE ? '試し読みはここまで' : '試し読み p.' + (2 * sp) + '–' + Math.min(SAMPLE, 2 * sp + 1));
  }
  function initBook() {
    if (!window.THREE || !window.makeBook3D) return false;
    try {
      book = window.makeBook3D(window.THREE, cv, {
        pages: SAMPLE, totalPages: 215, sheets: ['assets/pages/s00.jpg', 'assets/pages/s01.jpg'], sound: sound,
        front: 'assets/front.jpg', spine: 'assets/spine.jpg', back: 'assets/back.jpg',
        endLines: [
          { text: '試し読みは、ここまでです。', y: 330, size: 30 },
          { text: '続きは note で、全23章を', y: 420, size: 24, color: '#4A433B' },
          { text: '期間限定・無料で公開中です。', y: 462, size: 24, color: '#4A433B' },
          { text: '教養としてのブランド', y: 600, size: 22, color: '#8A7A63' }
        ],
        onState: onState,
        onHint: function (p) {
          var h = $('bookHint'); if (!p) { h.hidden = true; return; }
          h.hidden = false; h.classList.toggle('on', !!p.hover); var d = (p.sx > p.x ? 1 : -1) * 4; h.style.left = (p.x + d) + 'px'; h.style.top = p.y + 'px';
        }
      });
      $('bookFallback').hidden = true;
      return true;
    } catch (e) { console.warn('book3d', e); return false; }
  }
  if (!initBook()) window.addEventListener('load', initBook);
  $('openBook').onclick = function () { if (book) book.open(); };
  $('closeBook').onclick = function () { if (book) book.close(); };
  $('bookNext').onclick = function () { if (book) book.next(); };
  $('bookPrev').onclick = function () { if (book) book.prev(); };
  $('bookToc').onclick = function () { if (book) book.go(1); };
  $('soundBtn').onclick = function () { sound = !sound; save('kyb_sound', sound); setSoundLabel(); if (book) book.setSound(sound); };
  window.addEventListener('keydown', function (e) {
    if (!book || $('bookOpenCtl').hidden) return;
    if (e.key === 'ArrowLeft') book.next(); else if (e.key === 'ArrowRight') book.prev(); else if (e.key === 'Escape') book.close();
  });
})();
