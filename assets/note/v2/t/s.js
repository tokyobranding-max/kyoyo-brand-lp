const W=t=>new Promise(s=>setTimeout(s,t));const out=[];
for(let i=0;i<20&&!document.querySelector('input[placeholder*="ハッシュタグ"]');i++)await W(500);
const T=document.title;const inp=document.querySelector('input[placeholder*="ハッシュタグ"]');const set=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set;
const have=()=>(inp.parentElement.innerText.match(/#[^\s#]+/g)||[]).map(s=>s.slice(1));
for(const t of TAGS){if(have().includes(t))continue;inp.focus();set.call(inp,t);inp.dispatchEvent(new Event('input',{bubbles:true}));await W(300);inp.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',code:'Enter',keyCode:13,bubbles:true}));await W(400)}
out.push('tags'+have().length);
const rows=[...document.querySelectorAll('*')].filter(e=>e.children.length===0&&e.textContent.trim()==='教養としてのブランド ヨーロッパ編');let btn=null;for(const r of rows){let p=r;for(let i=0;i<6&&p;i++){p=p.parentElement;const b=p&&[...p.querySelectorAll('button')].find(b=>/追加/.test(b.innerText));if(b){btn=b;break}}if(btn)break}
if(btn){if(btn.innerText.trim()==='追加'){btn.click();await W(800)}out.push('mag:'+btn.innerText.trim())}else out.push('nomag');
let sb=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='日時の設定');if(sb){sb.click();await W(800)}
let cur=[...document.querySelectorAll('button')].find(b=>/^2026年.*\d\d:\d\d$/.test(b.innerText.trim()));
if(cur&&!cur.innerText.startsWith(LAB+' 07:00')){cur.click();await W(700);for(let k=0;k<3;k++){const day=[...document.querySelectorAll('button[aria-label]')].find(b=>b.getAttribute('aria-label').startsWith(LAB));if(day){day.click();break}const hdr=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&/^2026年\d+月$/.test(e.textContent.trim()));const nx=hdr&&[...hdr.parentElement.querySelectorAll('button')].pop();if(nx){nx.click();await W(500)}else break}await W(500);const li=[...document.querySelectorAll('li')].find(l=>l.innerText.trim()==='07:00');if(li){li.scrollIntoView({block:'center'});li.click();await W(600)}}
cur=[...document.querySelectorAll('button')].find(b=>/^2026年.*\d\d:\d\d$/.test(b.innerText.trim()));const sv=cur?cur.innerText.trim():'none';out.push(sv);
if(sv===LAB+' 07:00'&&have().length>=8&&btn){const go=[...document.querySelectorAll('button')].find(b=>b.innerText.trim()==='予約投稿');go.click();await W(3500);const dl=[...document.querySelectorAll('*')].find(e=>e.children.length===0&&/投稿時間/.test(e.textContent));out.push(dl?dl.textContent.trim():'NOCONFIRM')}else out.push('SKIPPED');
return T.slice(0,6)+' '+out.join(' | ')
