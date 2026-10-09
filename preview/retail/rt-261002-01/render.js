var le={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t=(a="")=>String(a).replace(/[&<>"']/g,e=>le[e]);function C(a,e,n="vi"){return a==null?"":typeof a!="object"?String(a):a[e]??a[n]??Object.values(a)[0]??""}var pe={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},B=a=>pe[a]??"en-US";function de(a,e="1"){if(e==="0.99")return Math.max(.99,Math.ceil(a)-.01);let n=Number(e)||1;return Math.max(n,Math.round(a/n)*n)}function F(a,e){if(e.default)return a.basePrice;let n=a.prices?.[e.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:de(a.basePrice*e.rate,e.rounding)}var he=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function O(a,e){let n={style:"currency",currency:e.currency};return he.has(e.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(B(e.lang),n).format(a)}function A(a="/"){let e=a.endsWith("/")?a:`${a}/`;return(n="")=>e+String(n).replace(/^\//,"")}var M=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,D=(a,e)=>{let n=M(e);return n==null?e:a(n)},w=(a="")=>String(a).replace(/\D/g,"");function j(a,e,n=""){switch(a){case"phone":return`tel:${w(e.phone)}`;case"zalo":return`https://zalo.me/${w(e.zalo||e.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(e.messenger)}`;case"whatsapp":return`https://wa.me/${w(e.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(e.kakao)}/chat`;case"email":return`mailto:${e.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var T=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`;var ue={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},u=(a,e=20,n="")=>`<svg class="i" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${ue[a]??""}</svg>`,L=[1,2,3,4,5,6,0],me=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function V(a,e){let n=a.map(r=>L.indexOf(r)).sort((r,i)=>r-i);return n.every((r,i)=>i===0||r===n[i-1]+1)&&n.length>2?`${e[L[n[0]]]} \u2013 ${e[L[n.at(-1)]]}`:n.map(r=>e[L[r]]).join(", ")}var U=a=>a.map(e=>({"@type":"OpeningHoursSpecification",dayOfWeek:e.days.map(n=>me[n]),opens:e.open,closes:e.close}));function W(a){return new Intl.NumberFormat(B(a.lang),{style:"currency",currency:a.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??a.currency}var q=a=>a==="phone"||a==="email"?"":'target="_blank" rel="noopener"',H=a=>`<div class="suggest" id="market-suggest" data-suggest="${t(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${t(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${t(a.market.dismiss)}">\xD7</button>
</div>`,_=(a,e)=>`<p class="status" data-open-status data-hours='${t(JSON.stringify(a.hours))}' data-tz="${t(a.timezone??"Asia/Ho_Chi_Minh")}" data-open="${t(e.visit.open)}" data-closed="${t(e.visit.closed)}" hidden></p>`,G={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},ge=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,fe=a=>{try{let e=new URL(String(a.googleReview??"").trim());return e.protocol==="https:"&&ge.test(e.hostname)?e.href:""}catch{return""}},K=(a,e,n,o="btn btn--line")=>{let r=fe(a);if(!r)return"";let i=typeof e.reviews=="object"&&e.reviews?.google||G[n]||G.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${o}" href="${t(r)}" target="_blank" rel="noopener">${u("star",16)} ${t(i)}</a></p>`},R={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},J={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},Z=a=>(a.reviews??[]).filter(e=>e&&(e.name||e.text)&&!(typeof e.text=="object"&&e.text&&!Object.values(e.text).some(Boolean)&&!e.name));function Y(a,e){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(a?.date??"").trim());if(!n)return"";let o=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(o.getTime()))return"";let r=new Intl.DateTimeFormat(J[e]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(o);return`<time class="rv-date" datetime="${t(a.date)}">${t(r)}</time>`}function ve(a,e){let n=a.filter(s=>s.rating>=1&&s.rating<=5);if(n.length<2)return"";let o=n.reduce((s,d)=>s+Number(d.rating),0)/n.length,r=R[e]??R.en,i=new Intl.NumberFormat(J[e]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(o);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${u("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${t(r.count.replace("{n}",String(a.length)))}</span></p>`}function X(a,e,n,o){if(!a.length)return"";let r=R[e]??R.en,i=s=>`<button type="button" class="rv-btn" data-rv-${s} aria-label="${t(s==="prev"?r.prev:r.next)}">${u("arrow",18,s==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${ve(a,e)}<div class="rv" data-rv data-more="${t(r.more)}" data-less="${t(r.less)}">
      <div class="${n} rv-track" tabindex="0">${a.map(o).join("")}</div>
      <div class="rv-nav" hidden>${i("prev")}${i("next")}</div>
    </div>${ye}`}var ye=`<style>
.rv{--rv-gap:20px}
.rv>.rv-track.rv-track{display:grid;grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:calc((100% - 2 * var(--rv-gap)) / 3);gap:var(--rv-gap);overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-x:contain;padding:2px;margin:-2px}
.rv>.rv-track::-webkit-scrollbar{display:none}
.rv>.rv-track>*{scroll-snap-align:start;min-width:0;margin:0}
.rv>.rv-track>*>figcaption{margin-top:auto}
.rv>.rv-track blockquote{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:4;line-clamp:4;overflow:hidden}
.rv.rv-x>.rv-track.rv-track{align-items:start}
.rv>.rv-track .rv-open blockquote{-webkit-line-clamp:unset;line-clamp:unset;overflow:visible}
.rv-more{align-self:flex-start;padding:0;border:0;background:none;color:inherit;font:inherit;font-size:13px;font-weight:600;text-decoration:underline;cursor:pointer;opacity:.75}
.rv-date{display:block;margin-top:2px;font-size:12px;font-weight:400;opacity:.65}
.rv-nav{display:flex;justify-content:center;gap:12px;margin-top:22px}
.rv-nav[hidden]{display:none}
.rv-btn{width:44px;height:44px;display:grid;place-items:center;border-radius:50%;border:1.5px solid currentColor;background:transparent;color:inherit;cursor:pointer}
.rv-btn:disabled{opacity:.3;cursor:default}
.rv-sum{display:flex;align-items:center;justify-content:flex-start;gap:8px;margin:-8px 0 24px;font-size:15px}
.h2.center~.rv-sum{justify-content:center}
.rv-sum-star{display:inline-flex;color:#E3A72F}.rv-sum-star svg{fill:currentColor}
@media (max-width:960px){.rv>.rv-track.rv-track{grid-auto-columns:calc((100% - var(--rv-gap)) / 2)}}
@media (max-width:640px){.rv{--rv-gap:14px}.rv>.rv-track.rv-track{grid-auto-columns:86%}}
</style><script>(()=>{for(const rv of document.querySelectorAll('[data-rv]')){if(rv.dataset.ready)continue;rv.dataset.ready=1;const t=rv.querySelector('.rv-track'),nav=rv.querySelector('.rv-nav'),p=rv.querySelector('[data-rv-prev]'),n=rv.querySelector('[data-rv-next]');
const step=()=>{const c=t.children[0];return c?c.getBoundingClientRect().width+parseFloat(getComputedStyle(t).columnGap||0):t.clientWidth};
const upd=()=>{const max=t.scrollWidth-t.clientWidth-2;nav.hidden=max<=0;p.disabled=t.scrollLeft<=2;n.disabled=t.scrollLeft>=max};
p.onclick=()=>t.scrollBy({left:-step(),behavior:'smooth'});n.onclick=()=>t.scrollBy({left:step(),behavior:'smooth'});
t.addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);
for(const c of t.children){const q=c.querySelector('blockquote');if(!q||q.scrollHeight<=q.clientHeight+2)continue;const b=document.createElement('button');b.type='button';b.className='rv-more';b.textContent=rv.dataset.more;b.setAttribute('aria-expanded','false');b.onclick=()=>{const o=c.classList.toggle('rv-open');rv.classList.toggle('rv-x',!!t.querySelector('.rv-open'));b.textContent=o?rv.dataset.less:rv.dataset.more;b.setAttribute('aria-expanded',String(o))};q.after(b)}
upd()}})()<\/script>`,I={vi:{label:"Chia s\u1EBB",native:"G\u1EEDi qua Zalo, Messenger\u2026",copy:"Sao ch\xE9p link",copied:"\u0110\xE3 sao ch\xE9p"},en:{label:"Share",native:"Send via apps\u2026",copy:"Copy link",copied:"Copied"},ja:{label:"\u30B7\u30A7\u30A2",native:"\u30A2\u30D7\u30EA\u3067\u9001\u308B\u2026",copy:"\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",copied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"},ko:{label:"\uACF5\uC720",native:"\uC571\uC73C\uB85C \uBCF4\uB0B4\uAE30\u2026",copy:"\uB9C1\uD06C \uBCF5\uC0AC",copied:"\uBCF5\uC0AC\uB428"},zh:{label:"\u5206\u4EAB",native:"\u901A\u8FC7\u5E94\u7528\u53D1\u9001\u2026",copy:"\u590D\u5236\u94FE\u63A5",copied:"\u5DF2\u590D\u5236"},th:{label:"\u0E41\u0E0A\u0E23\u0E4C",native:"\u0E2A\u0E48\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E2D\u0E1B\u2026",copy:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C",copied:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27"},id:{label:"Bagikan",native:"Kirim lewat aplikasi\u2026",copy:"Salin tautan",copied:"Tersalin"},es:{label:"Compartir",native:"Enviar por apps\u2026",copy:"Copiar enlace",copied:"Copiado"},fr:{label:"Partager",native:"Envoyer via une app\u2026",copy:"Copier le lien",copied:"Copi\xE9"},de:{label:"Teilen",native:"Per App senden\u2026",copy:"Link kopieren",copied:"Kopiert"},pt:{label:"Compartilhar",native:"Enviar por apps\u2026",copy:"Copiar link",copied:"Copiado"},ru:{label:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",native:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u2026",copy:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",copied:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}};function Q(a){let e=I[a]??I.en,n="display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 12px;border:1px solid currentColor;border-radius:999px;background:none;color:inherit;font:inherit;font-size:13px;text-decoration:none;cursor:pointer;opacity:.85";return`<div class="kp-share" data-share data-copied="${t(e.copied)}" style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:18px;font-size:13px">
      <span style="opacity:.65">${t(e.label)}</span>
      <button type="button" data-share-native hidden style="${n}">${u("share",15)} ${t(e.native)}</button>
      <a data-share-fb href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener" style="${n}">${u("facebook",15)} Facebook</a>
      <button type="button" data-share-copy style="${n}">${u("link",15)} <span>${t(e.copy)}</span></button>
    </div>`}var ee=(a,e,n)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${t(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${t(e.footer.madeWith)}</a>`;function te({site:a,markets:e,url:n,abs:o}){let r=e.find(s=>s.default)??e[0],i=e.map(s=>({id:s.id,lang:s.lang,country:s.country}));return`<!doctype html>
<html lang="${t(r.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t(a.name)}</title>
<link rel="canonical" href="${o(`${r.id}/`)}">
${e.map(s=>`<link rel="alternate" hreflang="${t(s.lang)}-${t(s.country)}" href="${o(`${s.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(i)}, root = ${JSON.stringify(n(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${e.map(s=>`<a href="${n(`${s.id}/`)}">${t(s.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var be="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",ne=24;function oe(a,e){return a.products.map(n=>({...n,variants:n.variants.map(o=>({...o,price:F(o,e)})).filter(o=>o.price!=null)})).filter(n=>n.variants.length>0).map(n=>({...n,from:Math.min(...n.variants.map(o=>o.price))}))}function $e(a){let e=a.filter(i=>i.badge?.en==="Best seller"),n=a.filter(i=>!e.includes(i)),o=[...new Set(n.map(i=>i.category))].map(i=>n.filter(s=>s.category===i)),r=[...e];for(let i=0;r.length<a.length;i++)for(let s of o)s[i]&&r.push(s[i]);return r}var ke=a=>String(a).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase();function Ye({site:a,catalog:e,i18n:n,template:o,basePath:r="/",siteUrl:i=a.domain}){let s=A(r),d=m=>new URL(s(m),i).href,l=e.markets,p=(m,v)=>`${v.id}/${C(m.slug,v.lang,"en")}/`,g=[];for(let m of l){let v=m.lang,k=n[v]??n.en??n.vi,f=$=>C($,v,"en"),y=oe(e,m),x=a.orderChannels?.[m.id]??["phone"],b={site:a,catalog:e,market:m,markets:l,lang:v,t:k,L:f,url:s,abs:d,channels:x,money:$=>O($,m),items:y,productPath:p,template:o,name:($,P)=>f($?.find(N=>N.id===P)?.name??P)};g.push({path:`${m.id}/index.html`,html:ae(b,{kind:"home"})});for(let $ of y)g.push({path:`${p($,m)}index.html`,html:ae(b,{kind:"product",product:$})})}return g.push({path:"index.html",html:te({site:a,markets:l,url:s,abs:d})}),g}function ae(a,e){let{site:n,market:o,markets:r,lang:i,t:s,L:d,url:l,abs:p,catalog:g,productPath:m,channels:v,money:k}=a,f=e.kind==="home",y=e.product,x=f?`${o.id}/`:m(y,o),S=f?`${n.name} \xB7 ${d(n.tagline)}`:`${d(y.name)} \xB7 ${n.name}`,c=f?d(n.intro):`${d(y.description)} ${s.from} ${k(y.from)}.`,b=r.map(h=>f?{m:h,href:`${h.id}/`}:oe({products:[g.products.find(z=>z.id===y.id)]},h).length?{m:h,href:m(y,h)}:null).filter(Boolean),$=h=>b.find(z=>z.m.id===h.id)?.href??`${h.id}/`,P=r.find(h=>h.default)??r[0],N=n.theme??{},se=["primary","ink","bg","surface","soft","accent"].filter(h=>N[h]).map(h=>`--${h}:${N[h]}`).join(";"),ie=r.map(h=>({id:h.id,lang:h.lang,country:h.country,currency:h.currency,href:l($(h))})),E=v[0],ce=p(f?M(n.heroImages?.[0]??"photos/flower-market.webp"):M(y.image));return`<!doctype html>
<html lang="${t(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t(S)}</title>
<meta name="description" content="${t(c)}">
<link rel="canonical" href="${p(x)}">
${b.map(({m:h,href:z})=>`<link rel="alternate" hreflang="${t(h.lang)}-${t(h.country)}" href="${p(z)}">`).join(`
`)}
${b.some(h=>h.m.id===P.id)?`<link rel="alternate" hreflang="x-default" href="${p($(P))}">`:""}
<meta property="og:type" content="${f?"website":"product"}">
<meta property="og:title" content="${t(S)}">
<meta property="og:description" content="${t(c)}">
<meta property="og:url" content="${p(x)}">
<meta property="og:image" content="${t(ce)}">
<meta property="og:site_name" content="${t(n.name)}">
<meta name="theme-color" content="${t(N.primary??"#B83260")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${be}">
<link rel="stylesheet" href="${l("assets/style.css")}">
<style>:root{${se}}</style>
${f?T(qe(a))+(n.faq?.length?T(Ee(a)):""):T(Be(a,y))+T(Fe(a,y))}
<script src="${l("assets/site.js")}" defer><\/script>
</head>
<body data-market="${t(o.id)}" data-markets='${t(JSON.stringify(ie))}' data-copied="${t(s.copied)}" data-wa="${t(w(n.contact.whatsapp??""))}" data-email="${t(n.contact.email??"")}">
<a class="skip" href="#main">${t(s.skip)}</a>
${H(s)}
${n.announcement?`<p class="announce">${t(d(n.announcement))}</p>`:""}
${xe(a,f)}
<main id="main">
${f?[we,De,Se,Me,Pe,Ne,ze,je,Ce].map(h=>h(a)).join(`
`):Le(a,y)}
</main>
${Re(a)}
<nav class="dock" aria-label="${t(s.nav.order)}">
  ${f?`<a href="#shop">${u("search",20)}<span>${t(s.nav.shop)}</span></a>`:`<a href="${l(`${o.id}/`)}#shop">${u("search",20)}<span>${t(s.nav.shop)}</span></a>`}
  <a class="primary" href="${t(f?j(E,n.contact):"#order")}" ${f?q(E):""}>${u(E,20)}<span>${t(s.nav.order)}</span></a>
</nav>
</body>
</html>
`}function xe({site:a,market:e,markets:n,t:o,url:r,channels:i},s){let d=s?"":r(`${e.id}/`),l=[[`${d}#shop`,o.nav.shop],[`${d}#occasions`,o.nav.occasions],[`${d}#how`,o.nav.how],[`${d}#visit`,o.nav.contact]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${r(`${e.id}/`)}">
      ${a.logo?`<img src="${t(D(r,a.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${u("leaf",20)}</span>`}
      <span>${t(a.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${l.map(([p,g])=>`<a href="${p}">${t(g)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${t(o.market.label)}">${u("globe",18)}<span>${t(e.id.toUpperCase())}<span class="cur"> \xB7 ${t(W(e))}</span></span></summary>
        <ul>${n.map(p=>`<li><a href="${r(`${p.id}/`)}" hreflang="${t(p.lang)}"${p.id===e.id?' aria-current="true"':""}>${t(p.country)} \xB7 ${t(p.currency)}</a></li>`).join("")}</ul>
      </details>
      ${a.contact.phone?`<a class="btn btn--primary hide-sm" href="tel:${w(a.contact.phone)}">${u("phone",18)} ${t(a.contact.phone)}</a>`:""}
      <details class="mnav">
        <summary aria-label="${t(o.nav.openMenu)}">${u("menu",22)}</summary>
        <nav aria-label="Menu">${l.map(([p,g])=>`<a href="${p}">${t(g)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function we({site:a,t:e,L:n,url:o,items:r}){let i=(a.heroImages?.length?a.heroImages:r.slice(0,3).map(s=>s.image)).slice(0,3);return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1>${t(n(a.tagline))}</h1>
      <p class="lead">${t(n(a.intro))}</p>
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#shop">${t(e.hero.shop)} ${u("arrow",18)}</a>
        ${a.contact.phone?`<a class="btn btn--line btn--lg" href="tel:${w(a.contact.phone)}">${u("phone",18)} ${t(e.hero.call)}</a>`:""}
      </div>
    </div>
    <div class="collage" aria-hidden="true">
      ${i.map((s,d)=>`<img sizes="auto, (max-width: 640px) 50vw, 280px" class="c${d+1}" src="${t(D(o,s))}" alt="" width="800" height="800"${d?' loading="lazy"':' fetchpriority="high"'}>`).join("")}
    </div>
  </div>
</section>`}function De({site:a,L:e}){return a.perks?.length?`<section class="perks" aria-label="${t(a.name)}">
  <ul class="wrap perk-list">${a.perks.map(n=>`<li>${u(n.icon??"check",22)}<div><b>${t(e(n.title))}</b>${n.text?`<span>${t(e(n.text))}</span>`:""}</div></li>`).join("")}</ul>
</section>`:""}function Se({catalog:a,items:e,t:n,L:o,url:r}){let i=(a.occasions??[]).map(s=>({...s,n:e.filter(d=>d.occasions?.includes(s.id)).length})).filter(s=>s.n);return i.length?`<section class="section" id="occasions" aria-labelledby="occ-title">
  <div class="wrap">
    <h2 id="occ-title" class="h2">${t(n.occasions.title)}</h2>
    <ul class="occ">${i.map(s=>`<li><a href="?occ=${t(s.id)}#shop" data-occ-link="${t(s.id)}">
      ${s.image?`<img sizes="auto, (max-width: 640px) 50vw, 280px" src="${t(D(r,s.image))}" alt="" width="800" height="800" loading="lazy">`:""}
      <span class="occ-name">${t(o(s.name))}</span><span class="occ-n">${t(n.occasions.count.replace("{n}",s.n))}</span>
    </a></li>`).join("")}</ul>
  </div>
</section>`:""}function re(a,e,n=0){let{t:o,L:r,url:i,money:s,productPath:d,market:l,catalog:p,name:g}=a,m=[r(e.name),e.name?.vi,e.name?.en,g(p.categories,e.category),...e.flowers.map(v=>g(p.flowers,v)),...e.occasions.map(v=>g(p.occasions,v))].filter(Boolean).join(" ");return`<li class="card${n>=ne?" is-more":""}" data-type="${t(e.category)}" data-occ="${t(e.occasions.join(" "))}" data-fl="${t(e.flowers.join(" "))}" data-price="${e.from}" data-name="${t(ke(m))}">
  <a class="card-link" href="${i(d(e,l))}">
    <div class="card-img"><img sizes="auto, (max-width: 640px) 50vw, 280px" src="${t(D(i,e.image))}" alt="${t(r(e.name))}" width="800" height="800" loading="lazy">${e.badge?`<span class="tag">${t(r(e.badge))}</span>`:""}</div>
    <h3>${t(r(e.name))}</h3>
    <p class="card-price"><small>${t(o.from)}</small> ${t(s(e.from))}</p>
    ${e.variants.length>1?`<p class="card-sizes">${e.variants.map(v=>`<span>${t(r(v.size))}</span>`).join("")}</p>`:""}
  </a>
</li>`}function Me(a){let{items:e,catalog:n,t:o,L:r}=a,i=n.categories.filter(l=>e.some(p=>p.category===l.id)),s=(n.occasions??[]).filter(l=>e.some(p=>p.occasions?.includes(l.id))),d=(n.flowers??[]).filter(l=>e.some(p=>p.flowers?.includes(l.id)));return`<section class="section section--soft" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="shop-head">
      <h2 id="shop-title" class="h2">${t(o.shop.title)}</h2>
      <p class="muted" data-count="${t(o.shop.count)}">${t(o.shop.count.replace("{n}",e.length))}</p>
    </div>
    <div class="toolbar" data-toolbar>
      <div class="chips" role="group" aria-label="${t(o.shop.all)}">
        <button type="button" class="pill is-on" data-type="">${t(o.shop.all)}</button>
        ${i.map(l=>`<button type="button" class="pill" data-type="${t(l.id)}">${t(r(l.name))}</button>`).join("")}
      </div>
      <div class="filters">
        <label class="search">${u("search",18)}<input type="search" placeholder="${t(o.search)}" aria-label="${t(o.search)}" data-search></label>
        <label class="select"><span class="sr">${t(o.shop.occasion)}</span><select data-occ><option value="">${t(o.shop.anyOccasion)}</option>${s.map(l=>`<option value="${t(l.id)}">${t(r(l.name))}</option>`).join("")}</select></label>
        <label class="select"><span class="sr">${t(o.shop.flower)}</span><select data-fl><option value="">${t(o.shop.anyFlower)}</option>${d.map(l=>`<option value="${t(l.id)}">${t(r(l.name))}</option>`).join("")}</select></label>
        <label class="select"><span class="sr">${t(o.shop.sort)}</span><select data-sort>
          <option value="">${t(o.shop.sortPop)}</option><option value="asc">${t(o.shop.sortLow)}</option><option value="desc">${t(o.shop.sortHigh)}</option>
        </select></label>
      </div>
    </div>
    <ul class="grid" data-grid>${$e(e).map((l,p)=>re(a,l,p)).join("")}</ul>
    <p class="empty muted" data-empty hidden>${t(o.shop.empty)}</p>
    ${e.length>ne?`<div class="more"><button type="button" class="btn btn--line btn--lg" data-more hidden>${t(o.shop.more)}</button></div>`:""}
  </div>
</section>`}function Pe({site:a,t:e,L:n}){return a.steps?.length?`<section class="section" id="how" aria-labelledby="how-title">
  <div class="wrap">
    <h2 id="how-title" class="h2">${t(e.steps.title)}</h2>
    <ol class="steps">${a.steps.map((o,r)=>`<li><span class="step-n">${r+1}</span><h3>${t(n(o.title))}</h3><p class="muted">${t(n(o.text))}</p></li>`).join("")}</ol>
  </div>
</section>`:""}function Ne({site:a,L:e,url:n}){let o=a.story;return o?`<section class="section section--soft" aria-labelledby="story-title">
  <div class="wrap story">
    <figure class="story-img"><img sizes="auto, (max-width: 640px) 100vw, 580px" src="${t(D(n,o.image??"photos/shop-buckets.webp"))}" alt="" width="1400" height="900" loading="lazy"></figure>
    <div><h2 id="story-title" class="h2">${t(e(o.title))}</h2>${o.body?`<p class="lead">${t(e(o.body))}</p>`:""}</div>
  </div>
</section>`:""}function ze({site:a,t:e,L:n,lang:o}){let r=K(a,e,o,"btn btn--line"),i=Z(a);return a.showReviews===!1||!i.length&&!r?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${t(e.reviews.title)}</h2>
    ${X(i,o,"reviews",s=>`<figure class="review">
      <p class="stars" aria-label="${t(s.rating)}/5">${Array.from({length:5},(d,l)=>`<span class="${l<s.rating?"on":""}">${u("star",16)}</span>`).join("")}</p>
      <blockquote>${t(n(s.text))}</blockquote>
      <figcaption>${t(s.name)}${Y(s,o)}</figcaption>
    </figure>`)}${r}
  </div>
</section>`}function je({site:a,t:e,L:n}){return a.faq?.length?`<section class="section section--soft" aria-labelledby="faq-title">
  <div class="wrap faq">
    <h2 id="faq-title" class="h2">${t(e.faq.title)}</h2>
    <div>${a.faq.map((o,r)=>`<details${r===0?" open":""}><summary>${t(n(o.q))}</summary><p>${t(n(o.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Te(a,e){let n=new Map;for(let o of a){let r=[...o.days].sort().join(",");n.has(r)||n.set(r,{days:o.days,slots:[]}),n.get(r).slots.push(`${o.open} \u2013 ${o.close}`)}return[...n.values()].map(o=>({label:o.days.length===7?e.visit.everyDay??e.days.join(", "):V(o.days,e.days),slots:o.slots.join(", ")}))}function Ce({site:a,t:e,L:n,channels:o}){let r=encodeURIComponent(a.contact.mapQuery??n(a.contact.address));return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div>
      <h2 id="visit-title" class="h2">${t(e.visit.title)}</h2>
      ${_(a,e)}
      <h3 class="h4">${u("clock",18)} ${t(e.visit.hours)}</h3>
      <table class="hours"><tbody>${Te(a.hours,e).map(i=>`<tr><th scope="row">${t(i.label)}</th><td>${t(i.slots)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${u("pin",18)} ${t(e.visit.address)}</h3>
      <p>${t(n(a.contact.address))}</p>
      <div class="actions">
        <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${r}" target="_blank" rel="noopener">${t(e.visit.directions)} ${u("arrow",16)}</a>
        ${o.map(i=>`<a class="btn btn--ghost" href="${t(j(i,a.contact))}" ${q(i)}>${u(i,18)} ${t(e.via[i])}</a>`).join("")}
      </div>
    </div>
    <div class="map"><iframe title="${t(e.visit.address)}" src="https://www.google.com/maps?q=${r}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function Le(a,e){let{site:n,t:o,L:r,url:i,money:s,market:d,items:l,channels:p,catalog:g,name:m}=a,v=e.variants.map(c=>({size:r(c.size)||"",price:s(c.price)})),k=e.variants.reduce((c,b)=>b.price<c.price?b:c),f=[...l.filter(c=>c.id!==e.id&&c.category===e.category),...l.filter(c=>c.id!==e.id&&c.category!==e.category&&c.occasions.some(b=>e.occasions.includes(b)))].slice(0,8),y=g.categories.find(c=>c.id===e.category),x=i(`${d.id}/`),S=o.orderText.replace("{product}",r(e.name)).replace("{size}",r(k.size)||"").replace("{price}",s(k.price)).replace(/\{\w+\}/g,"\u2026");return`<div class="wrap crumbs"><a href="${x}">${t(o.nav.home)}</a>${u("chevron",14)}<a href="${x}?type=${t(e.category)}#shop">${t(r(y?.name))}</a>${u("chevron",14)}<span aria-current="page">${t(r(e.name))}</span></div>
<section class="wrap pdp" data-product data-name="${t(r(e.name))}" data-sizes='${t(JSON.stringify(v))}' data-text="${t(o.orderText)}">
  <figure class="pdp-img"><img src="${t(D(i,e.image))}" alt="${t(r(e.name))}" width="800" height="800" fetchpriority="high">${e.badge?`<span class="tag">${t(r(e.badge))}</span>`:""}</figure>
  <div class="pdp-info">
    <p class="kicker">${t(r(y?.name))}</p>
    <h1 class="pdp-title">${t(r(e.name))}</h1>
    <p class="pdp-price"><strong data-v="price">${t(s(k.price))}</strong></p>
    <p class="lead">${t(r(e.description))}</p>
    ${e.variants.length>1?`<fieldset class="opts"><legend>${t(o.product.size)}</legend><div class="opt-row">
      ${e.variants.map((c,b)=>`<label class="opt"><input type="radio" name="size" value="${b}"${c===k?" checked":""}><span><b>${t(r(c.size))}</b><small>${t(s(c.price))}</small></span></label>`).join("")}
    </div></fieldset>`:""}
    <dl class="tags">
      <div><dt>${t(o.product.occasions)}</dt><dd>${e.occasions.map(c=>`<a href="${x}?occ=${t(c)}#shop">${t(m(g.occasions,c))}</a>`).join("")}</dd></div>
      <div><dt>${t(o.product.flowers)}</dt><dd>${e.flowers.map(c=>`<span>${t(m(g.flowers,c))}</span>`).join("")}</dd></div>
    </dl>
    <form class="order" id="order" data-compose>
      <h2 class="h4">${u("truck",18)} ${t(o.product.delivery)}</h2>
      <div class="fields">
        <label><span>${t(o.product.date)}</span><input type="date" name="date" required></label>
        <label><span>${t(o.product.time)}</span><select name="time">${(o.product.times??[]).map(c=>`<option>${t(c)}</option>`).join("")}</select></label>
        <label><span>${t(o.product.recipient)}</span><input name="recipient" autocomplete="off"></label>
        <label><span>${t(o.product.phone)}</span><input name="phone" type="tel" autocomplete="off"></label>
        <label class="wide"><span>${t(o.product.address)}</span><input name="address" autocomplete="off"></label>
        <label class="wide"><span>${t(o.product.card)}</span><textarea name="card" rows="2" placeholder="${t(o.product.cardHint)}"></textarea></label>
      </div>
      <div class="buy">${p.map((c,b)=>`<button type="submit" class="btn ${b?"btn--line":"btn--primary"} btn--lg" data-channel="${t(c)}" data-href="${t(j(c,n.contact,S))}">${u(c,18)} ${t(c==="phone"?o.product.call:o.product.send.replace("{channel}",o.via[c]))}</button>`).join("")}</div>
      <noscript><p>${p.map(c=>`<a href="${t(j(c,n.contact,S))}" ${q(c)}>${t(o.via[c])}</a>`).join(" \xB7 ")}</p></noscript>
      <p class="form-msg" role="status" hidden></p>
      <p class="muted small">${u("check",16)} ${t(o.product.note)}</p>
      <p class="muted small">${t(o.product.photo)}</p>
    </form>
    ${Q(a.market.lang)}
  </div>
</section>
${f.length?`<section class="section section--soft"><div class="wrap">
  <h2 class="h3">${t(o.product.related)}</h2>
  <ul class="grid grid--related">${f.map(c=>re(a,c)).join("")}</ul>
</div></section>`:""}`}function Re({site:a,t:e,L:n,market:o}){let r=a.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${t(a.name)}</p><p class="muted">${t(n(a.tagline))}</p></div>
    <div><p class="foot-h">${t(e.footer.contact)}</p><ul>
      ${r.phone?`<li>${t(e.footer.hotline)}: <a href="tel:${w(r.phone)}">${t(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${t(r.email)}">${t(r.email)}</a></li>`:""}
      <li>${t(n(r.address))}</li></ul></div>
    ${a.social?`<div><p class="foot-h">${t(e.footer.follow)}</p><ul>${Object.entries(a.social).filter(([,i])=>i).map(([i,s])=>`<li><a href="${t(s)}" target="_blank" rel="noopener">${t(i==="tiktok"?"TikTok":i[0].toUpperCase()+i.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${a.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${t(a.name)}</span>${ee(a,e,o.lang)}</div>
</footer>`}function qe({site:a,market:e,L:n,abs:o}){return{"@context":"https://schema.org","@type":"Florist",name:a.name,url:o(`${e.id}/`),image:o(M(a.heroImages?.[0]??"photos/flower-market.webp")),description:n(a.intro),telephone:a.contact.phone,email:a.contact.email,address:{"@type":"PostalAddress",streetAddress:n(a.contact.address)},currenciesAccepted:e.currency,openingHoursSpecification:U(a.hours)}}var Ee=({site:a,L:e})=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:a.faq.map(n=>({"@type":"Question",name:e(n.q),acceptedAnswer:{"@type":"Answer",text:e(n.a)}}))});function Be({site:a,market:e,L:n,abs:o,productPath:r},i){return{"@context":"https://schema.org","@type":"Product",name:n(i.name),description:n(i.description),image:o(M(i.image)),url:o(r(i,e)),offers:i.variants.map(s=>({"@type":"Offer",name:[n(i.name),n(s.size)].filter(Boolean).join(" \u2013 "),price:s.price,priceCurrency:e.currency,availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:a.name}}))}}function Fe({catalog:a,market:e,L:n,abs:o,productPath:r,t:i},s){let d=a.categories.find(l=>l.id===s.category);return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:i.nav.home,item:o(`${e.id}/`)},{"@type":"ListItem",position:2,name:n(d?.name),item:o(`${e.id}/?type=${s.category}`)},{"@type":"ListItem",position:3,name:n(s.name),item:o(r(s,e))}]}}export{Ye as renderSite};
