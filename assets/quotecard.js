(function () {
  var Q = [["ブランドとは、世界の美学を読む共通言語であり、毎日の選び方を変える教養である。", "はじめに", 15], ["ブランドの正体は物ではなく、その奥にある美学であり、人は物を通してその意味を買っている。", "序章", 23], ["ブランドは焼き印の約束から始まり、何を選び何を選ばないかという美学によって、意味へと育つ。", "第1章", 32], ["意味ある高さとは、使う年月で値段を割り、直しながら受け継ぐことで、払ったお金が暮らしに返ってくる高さである。", "第2章", 41], ["美学は風土と歴史から生まれ、足す・引く、伝統・変化、個人・みんなという3つの軸で、世界の地図として読み解ける。", "第3章", 50], ["フランスの「高い」は、見せるための値段ではなく、毎日を美しく生きる時間の値段である。", "第4章 フランス", 63], ["ドイツの「シンプル」は、手を抜いた形ではなく、引き算を積み重ねて長く使えるようにした形である。", "第5章 ドイツ", 73], ["日本の美学は、足りないことを恐れず、余白と時間に価値を委ねることである。", "第6章 日本", 81], ["富山のブランドは、売る前に信頼を置き、使い続けてもらう時間の中で選ばれてきた。", "特別編 富山", 90], ["イタリアの美学は、心が動くかどうかで選び、作り手の情熱ごと受け継ぐことである。", "第7章 イタリア", 99], ["イギリスの美学は、型を守り続ける誇りと、型を破る勇気を、同じ手に持つことである。", "第8章 イギリス", 108], ["アメリカの美学は、物を通して自分の生き方を表し、挑戦する人の背中を押すことである。", "第9章 アメリカ", 117], ["北欧の美学は、良いデザインをみんなのものにし、毎日の暮らしの中に幸福を見つけることである。", "第10章 北欧", 126], ["スイスの美学は、見えないところまで精度を積み重ね、時間をかけて信頼を育てることである。", "第11章 スイス", 134], ["韓国の美学は、相手の気持ちに寄り添いながら、恐れずに変わり続けることである。", "第12章 韓国", 143], ["中国の美学は、完成を待たずに動き出し、使う人と一緒に速く磨き続けることである。", "第13章 中国", 152], ["インドの美学は、ひとつの正解を押しつけず、違いを受け入れて、相手に合う形へ変わり続けることである。", "第14章 インド", 161], ["スペインの美学は、色と食と人とのつながりで、ありふれた毎日を祝祭に変えることである。", "第15章 スペイン", 170], ["ブランドの美学は、商品やロゴだけでなく、空間・言葉・組織の判断にまで宿り、内側から揃っていくことで伝わる。", "第16章", 180], ["人もまた美学で選ばれる。肩書きではなく、原体験から生まれた「なぜ」を言葉にすることが、その人らしさになる。", "第17章", 189], ["機能はすぐにコピーされる。AI時代に最後に残るのは、物語・原体験・美学という、コピーできない「なぜ」である。", "第18章", 198], ["自分の美学で選ぶとは、使う年月で物を見直し、自分自身が人生のブランド責任者になることである。", "終章", 206], ["一人ひとりが美学で選ぶことが、長く使われる物とつくり手を守り、美学で選ぶ持続的な社会をつくる。", "おわりに", 214]];
  var W = 1080, H = 1170, PAD = 72;
  var NOSTART = '、。，．」』）】〉》ー・？！ァィゥェォッャュョヮぁぃぅぇぉっゃゅょゎ々…';
  var NOEND = '「『（【〈《';
  function segs(text) {
    try { return Array.from(new Intl.Segmenter('ja', { granularity: 'word' }).segment(text), function (x) { return x.segment; }); }
    catch (e) { return text.split(''); }
  }
  function wrap(g, text, max) {
    var raw = segs(text), parts = [];
    raw.forEach(function (sg) {
      if (parts.length && NOSTART.indexOf(sg[0]) >= 0) parts[parts.length - 1] += sg;
      else if (parts.length && NOEND.indexOf(parts[parts.length - 1].slice(-1)) >= 0) parts[parts.length - 1] += sg;
      else parts.push(sg);
    });
    var lines = [], cur = '';
    var fits = function (t) { return g.measureText(t).width <= max * 1.05; };
    parts.forEach(function (sg) {
      if (fits(cur + sg)) { cur += sg; return; }
      if (NOSTART.indexOf(sg[0]) >= 0 && g.measureText(cur + sg).width <= max * 1.04) { cur += sg; return; }
      var k = Math.max(cur.lastIndexOf('、'), cur.lastIndexOf('。'));
      if (k >= cur.length * 0.5 && k < cur.length - 1 && fits(cur.slice(k + 1) + sg)) { lines.push(cur.slice(0, k + 1)); cur = cur.slice(k + 1) + sg; return; }
      if (cur) lines.push(cur);
      cur = sg;
      while (!fits(cur)) { var n = cur.length - 1; while (n > 1 && !fits(cur.slice(0, n))) n--; lines.push(cur.slice(0, n)); cur = cur.slice(n); }
    });
    if (cur) lines.push(cur);
    return lines;
  }
  function quoteMark(g, x, y, s) {
    g.fillStyle = '#111';
    for (var k = 0; k < 2; k++) {
      var cx = x + s * 0.42 + k * s * 0.98, cy = y + s * 0.62, r = s * 0.36;
      g.beginPath(); g.arc(cx, cy, r, 0, Math.PI * 2); g.fill();
      g.beginPath();
      g.moveTo(cx - r * 0.98, cy - r * 0.05);
      g.bezierCurveTo(cx - r * 1.05, cy - r * 1.45, cx - r * 0.1, cy - r * 2.05, cx + r * 0.95, cy - r * 2.1);
      g.lineTo(cx + r * 0.95, cy - r * 1.72);
      g.bezierCurveTo(cx + r * 0.1, cy - r * 1.6, cx - r * 0.35, cy - r * 1.05, cx - r * 0.2, cy - r * 0.45);
      g.closePath(); g.fill();
    }
  }
  var coverImg = null, coverUrl = null;
  function loadCover() {
    if (!coverUrl) return Promise.resolve(null);
    if (coverImg) return Promise.resolve(coverImg);
    return new Promise(function (res) { var im = new Image(); im.onload = function () { coverImg = im; res(im); }; im.onerror = function () { res(null); }; im.src = coverUrl; });
  }
  function drawCover(g, x, y, w, h) {
    if (!coverImg) return;
    g.save(); g.shadowColor = 'rgba(0,0,0,0.28)'; g.shadowBlur = 24; g.shadowOffsetY = 8;
    g.fillStyle = '#1c1b19'; g.fillRect(x, y, w, h); g.restore();
    g.drawImage(coverImg, x, y, w, h);
  }
  function draw(i, opts) {
    opts = opts || {}; var withCover = opts.cover !== false;
    var q = Q[i], c = document.createElement('canvas'); c.width = W; c.height = H;
    var g = c.getContext('2d');
    g.fillStyle = '#F4F4F4'; g.fillRect(0, 0, W, H);
    quoteMark(g, PAD, 96, 74);
    var top = 250, bottom = withCover ? 760 : 860, size = 84, lines;
    for (; size >= 44; size -= 2) {
      g.font = '700 ' + size + 'px "Noto Sans JP", "Hiragino Sans", sans-serif';
      lines = wrap(g, q[0], W - PAD * 2);
      if (lines.length * size * 1.42 <= bottom - top) break;
    }
    g.fillStyle = '#111'; g.textBaseline = 'top';
    lines.forEach(function (ln, k) { g.fillText(ln, PAD, top + k * size * 1.42); });
    g.font = '400 42px "Noto Sans JP", "Hiragino Sans", sans-serif';
    g.fillText(q[1] + '　' + q[2] + 'P', PAD, 940);
    g.fillText('教養としてのブランド', PAD, 1004);
    if (withCover) drawCover(g, 760, 790, 252, 357);
    return c;
  }
  window.KYBQuote = {
    setCover: function (u) { coverUrl = u; coverImg = null; },
    count: Q.length,
    data: function (i) { return Q[i]; },
    canvas: function (i, opts) {
      var f = document.fonts && document.fonts.load ? Promise.all([document.fonts.load('700 60px "Noto Sans JP"'), document.fonts.load('400 40px "Noto Sans JP"')]).catch(function () {}) : Promise.resolve();
      return f.then(loadCover).then(function () { return draw(i, opts); });
    },
    blob: function (i) { return this.canvas(i).then(function (c) { return new Promise(function (r) { c.toBlob(r, 'image/png'); }); }); },
    filename: function (i) { return '教養としてのブランド_' + String(i + 1).padStart(2, '0') + '.png'; }
  };
})();
