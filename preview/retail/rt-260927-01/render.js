var pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t=(a="")=>String(a).replace(/[&<>"']/g,e=>pe[e]);function T(a,e,n="vi"){return a==null?"":typeof a!="object"?String(a):a[e]??a[n]??Object.values(a)[0]??""}var de={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},E=a=>de[a]??"en-US";function B(a,e="1"){if(e==="0.99")return Math.max(.99,Math.ceil(a)-.01);let n=Number(e)||1;return Math.max(n,Math.round(a/n)*n)}function G(a,e){if(e.default)return a.basePrice;let n=a.prices?.[e.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:B(a.basePrice*e.rate,e.rounding)}var he=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function I(a,e){let n={style:"currency",currency:e.currency};return he.has(e.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(E(e.lang),n).format(a)}function V(a="/"){let e=a.endsWith("/")?a:`${a}/`;return(n="")=>e+String(n).replace(/^\//,"")}var O=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,M=(a,e)=>{let n=O(e);return n==null?e:a(n)},D=(a="")=>String(a).replace(/\D/g,"");function j(a,e,n=""){switch(a){case"phone":return`tel:${D(e.phone)}`;case"zalo":return`https://zalo.me/${D(e.zalo||e.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(e.messenger)}`;case"whatsapp":return`https://wa.me/${D(e.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(e.kakao)}/chat`;case"email":return`mailto:${e.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var C=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`;var ue={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},m=(a,e=20,n="")=>`<svg class="i" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${ue[a]??""}</svg>`,L=[1,2,3,4,5,6,0],me=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function H(a,e){let n=a.map(r=>L.indexOf(r)).sort((r,i)=>r-i);return n.every((r,i)=>i===0||r===n[i-1]+1)&&n.length>2?`${e[L[n[0]]]} \u2013 ${e[L[n.at(-1)]]}`:n.map(r=>e[L[r]]).join(", ")}var _=a=>a.map(e=>({"@type":"OpeningHoursSpecification",dayOfWeek:e.days.map(n=>me[n]),opens:e.open,closes:e.close}));function K(a){return new Intl.NumberFormat(E(a.lang),{style:"currency",currency:a.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??a.currency}var q=a=>a==="phone"||a==="email"?"":'target="_blank" rel="noopener"',J=a=>`<div class="suggest" id="market-suggest" data-suggest="${t(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${t(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${t(a.market.dismiss)}">\xD7</button>
</div>`,Z=(a,e)=>`<p class="status" data-open-status data-hours='${t(JSON.stringify(a.hours))}' data-tz="${t(a.timezone??"Asia/Ho_Chi_Minh")}" data-open="${t(e.visit.open)}" data-closed="${t(e.visit.closed)}" hidden></p>`,U={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},ge=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,fe=a=>{try{let e=new URL(String(a.googleReview??"").trim());return e.protocol==="https:"&&ge.test(e.hostname)?e.href:""}catch{return""}},Y=(a,e,n,o="btn btn--line")=>{let r=fe(a);if(!r)return"";let i=typeof e.reviews=="object"&&e.reviews?.google||U[n]||U.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${o}" href="${t(r)}" target="_blank" rel="noopener">${m("star",16)} ${t(i)}</a></p>`},R={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},X={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},Q=a=>(a.reviews??[]).filter(e=>e&&(e.name||e.text)&&!(typeof e.text=="object"&&e.text&&!Object.values(e.text).some(Boolean)&&!e.name));function ee(a,e){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(a?.date??"").trim());if(!n)return"";let o=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(o.getTime()))return"";let r=new Intl.DateTimeFormat(X[e]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(o);return`<time class="rv-date" datetime="${t(a.date)}">${t(r)}</time>`}function ye(a,e){let n=a.filter(s=>s.rating>=1&&s.rating<=5);if(n.length<2)return"";let o=n.reduce((s,c)=>s+Number(c.rating),0)/n.length,r=R[e]??R.en,i=new Intl.NumberFormat(X[e]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(o);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${m("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${t(r.count.replace("{n}",String(a.length)))}</span></p>`}function te(a,e,n,o){if(!a.length)return"";let r=R[e]??R.en,i=s=>`<button type="button" class="rv-btn" data-rv-${s} aria-label="${t(s==="prev"?r.prev:r.next)}">${m("arrow",18,s==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${ye(a,e)}<div class="rv" data-rv data-more="${t(r.more)}" data-less="${t(r.less)}">
      <div class="${n} rv-track" tabindex="0">${a.map(o).join("")}</div>
      <div class="rv-nav" hidden>${i("prev")}${i("next")}</div>
    </div>${$e}`}var $e=`<style>
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
upd()}})()<\/script>`,W={vi:{label:"Chia s\u1EBB",native:"G\u1EEDi qua Zalo, Messenger\u2026",copy:"Sao ch\xE9p link",copied:"\u0110\xE3 sao ch\xE9p"},en:{label:"Share",native:"Send via apps\u2026",copy:"Copy link",copied:"Copied"},ja:{label:"\u30B7\u30A7\u30A2",native:"\u30A2\u30D7\u30EA\u3067\u9001\u308B\u2026",copy:"\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",copied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"},ko:{label:"\uACF5\uC720",native:"\uC571\uC73C\uB85C \uBCF4\uB0B4\uAE30\u2026",copy:"\uB9C1\uD06C \uBCF5\uC0AC",copied:"\uBCF5\uC0AC\uB428"},zh:{label:"\u5206\u4EAB",native:"\u901A\u8FC7\u5E94\u7528\u53D1\u9001\u2026",copy:"\u590D\u5236\u94FE\u63A5",copied:"\u5DF2\u590D\u5236"},th:{label:"\u0E41\u0E0A\u0E23\u0E4C",native:"\u0E2A\u0E48\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E2D\u0E1B\u2026",copy:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C",copied:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27"},id:{label:"Bagikan",native:"Kirim lewat aplikasi\u2026",copy:"Salin tautan",copied:"Tersalin"},es:{label:"Compartir",native:"Enviar por apps\u2026",copy:"Copiar enlace",copied:"Copiado"},fr:{label:"Partager",native:"Envoyer via une app\u2026",copy:"Copier le lien",copied:"Copi\xE9"},de:{label:"Teilen",native:"Per App senden\u2026",copy:"Link kopieren",copied:"Kopiert"},pt:{label:"Compartilhar",native:"Enviar por apps\u2026",copy:"Copiar link",copied:"Copiado"},ru:{label:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",native:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u2026",copy:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",copied:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}};function ae(a){let e=W[a]??W.en,n="display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 12px;border:1px solid currentColor;border-radius:999px;background:none;color:inherit;font:inherit;font-size:13px;text-decoration:none;cursor:pointer;opacity:.85";return`<div class="kp-share" data-share data-copied="${t(e.copied)}" style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:18px;font-size:13px">
      <span style="opacity:.65">${t(e.label)}</span>
      <button type="button" data-share-native hidden style="${n}">${m("share",15)} ${t(e.native)}</button>
      <a data-share-fb href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener" style="${n}">${m("facebook",15)} Facebook</a>
      <button type="button" data-share-copy style="${n}">${m("link",15)} <span>${t(e.copy)}</span></button>
    </div>`}var ne=(a,e,n)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${t(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${t(e.footer.madeWith)}</a>`;function oe({site:a,markets:e,url:n,abs:o}){let r=e.find(s=>s.default)??e[0],i=e.map(s=>({id:s.id,lang:s.lang,country:s.country}));return`<!doctype html>
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
`}var ve="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap";function se(a,e){return a.products.map(n=>({...n,variants:n.variants.map(o=>({...o,price:G(o,e),list:be(o,e)})).filter(o=>o.price!=null)})).filter(n=>n.variants.length>0).map(n=>({...n,from:n.variants.reduce((o,r)=>r.price<o.price?r:o)}))}function be(a,e){if(!a.listPrice)return null;if(e.default)return a.listPrice>a.basePrice?a.listPrice:null;if((a.prices?.[e.id]?.mode??"auto")!=="auto")return null;let n=B(a.listPrice*e.rate,e.rounding);return n>G(a,e)?n:null}function Ye({site:a,catalog:e,i18n:n,template:o,basePath:r="/",siteUrl:i=a.domain}){let s=V(r),c=d=>new URL(s(d),i).href,g=e.markets,p=(d,h)=>`${h.id}/${T(d.slug,h.lang)}/`,y=[];for(let d of g){let h=d.lang,f=n[h]??n.en??n.vi,$=v=>T(v,h,"en"),k=se(e,d),S=a.orderChannels?.[d.id]??["phone"],w=v=>I(v,d),l=a.installmentMonths??12,P={site:a,catalog:e,market:d,markets:g,lang:h,t:f,L:$,url:s,abs:c,channels:S,money:w,monthly:v=>w(Number.isInteger(v)&&v>=1e4?Math.ceil(v/l/1e3)*1e3:Math.ceil(v/l*100)/100),months:l,devices:k,productPath:p,template:o};y.push({path:`${d.id}/index.html`,html:re(P,{kind:"home"})});for(let v of k)y.push({path:`${p(v,d)}index.html`,html:re(P,{kind:"product",product:v})})}return y.push({path:"index.html",html:oe({site:a,markets:g,url:s,abs:c})}),y}function re(a,e){let{site:n,market:o,markets:r,lang:i,t:s,L:c,url:g,abs:p,catalog:y,productPath:d,channels:h}=a,f=e.kind==="home",$=e.product,k=f?`${o.id}/`:d($,o),S=f?`${n.name} \xB7 ${c(n.tagline)}`:`${$.name} ${$.variants.map(u=>u.size).join(", ")} \xB7 ${n.name}`,w=f?c(n.intro):`${c($.summary)} ${s.installment.replace("{price}",a.monthly($.from.price)).replace("{n}",a.months)}.`,l=r.map(u=>f?{m:u,href:`${u.id}/`}:se({products:[y.products.find(z=>z.id===$.id)]},u).length?{m:u,href:d($,u)}:null).filter(Boolean),x=u=>l.find(z=>z.m.id===u.id)?.href??`${u.id}/`,P=r.find(u=>u.default)??r[0],v=n.theme??{},ce=["primary","ink","bg","surface","soft","accent"].filter(u=>v[u]).map(u=>`--${u}:${v[u]}`).join(";"),le=r.map(u=>({id:u.id,lang:u.lang,country:u.country,currency:u.currency,href:g(x(u))})),N=h[0];return`<!doctype html>
<html lang="${t(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t(S)}</title>
<meta name="description" content="${t(w)}">
<link rel="canonical" href="${p(k)}">
${l.map(({m:u,href:z})=>`<link rel="alternate" hreflang="${t(u.lang)}-${t(u.country)}" href="${p(z)}">`).join(`
`)}
${l.some(u=>u.m.id===P.id)?`<link rel="alternate" hreflang="x-default" href="${p(x(P))}">`:""}
<meta property="og:type" content="${f?"website":"product"}">
<meta property="og:title" content="${t(S)}">
<meta property="og:description" content="${t(w)}">
<meta property="og:url" content="${p(k)}">
<meta property="og:site_name" content="${t(n.name)}">
<meta property="og:image" content="${t(p(O(!f&&$.image||n.heroImage||`photos/${$?.category==="tablet"?"tablets":"phones"}.webp`)??n.heroImage))}">
<meta name="theme-color" content="${t(v.ink??"#0B1220")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${ve}">
<link rel="stylesheet" href="${g("assets/style.css")}">
<style>:root{${ce}}</style>
${f?C(qe(a))+(n.faq?.length?C(Ee(a)):""):C(Be(a,$))+C(Ge(a,$))}
<script src="${g("assets/site.js")}" defer><\/script>
</head>
<body data-market="${t(o.id)}" data-markets='${t(JSON.stringify(le))}' data-copied="${t(s.copied)}" data-wa="${t(D(n.contact.whatsapp??""))}" data-email="${t(n.contact.email??"")}">
<a class="skip" href="#main">${t(s.skip)}</a>
${J(s)}
${n.announcement?`<p class="announce">${t(c(n.announcement))}</p>`:""}
${xe(a,x)}
<main id="main">
${f?[Se,Pe,Ne,ze,Me,Le,je,Ce].map(u=>u(a)).join(`
`):Te(a,$)}
</main>
${Re(a)}
<nav class="dock" aria-label="${t(s.nav.order)}">
  <a href="${t(j(N,n.contact))}" ${q(N)} ${f?"":"data-order"}>${m(N,20)}<span>${t(f?s.via[N]:s.product.orderVia.replace("{channel}",s.via[N]))}</span></a>
</nav>
</body>
</html>
`}function xe({site:a,market:e,markets:n,t:o,url:r,channels:i},s){let c=r(`${e.id}/`),g=[[`${c}?type=phone#shop`,o.nav.phones],[`${c}?type=tablet#shop`,o.nav.tablets],[`${c}#tradein`,o.nav.tradein],[`${c}#stores`,o.nav.stores]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${c}">
      ${a.logo?`<img src="${t(M(r,a.logo))}" alt="" width="34" height="34">`:'<span class="brand-mark" aria-hidden="true"><i></i></span>'}
      <span>${t(a.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${g.map(([p,y])=>`<a href="${p}">${t(y)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${t(o.market.label)}">${m("globe",18)}<span>${t(e.id.toUpperCase())}<span class="cur"> \xB7 ${t(K(e))}</span></span></summary>
        <ul>${n.map(p=>`<li><a href="${r(s(p))}" hreflang="${t(p.lang)}"${p.id===e.id?' aria-current="true"':""}>${t(p.country)} \xB7 ${t(p.currency)}</a></li>`).join("")}</ul>
      </details>
      <a class="btn btn--primary hide-sm" href="${t(j(i[0],a.contact))}" ${q(i[0])}>${m(i[0],18)} ${t(o.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${t(o.nav.openMenu)}">${m("menu",22)}</summary>
        <nav aria-label="Menu">${g.map(([p,y])=>`<a href="${p}">${t(y)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}var ke=0;function b(a,e,n){return`<circle cx="${a}" cy="${e}" r="${n+3}" fill="#000" opacity=".18"/><circle cx="${a}" cy="${e}" r="${n}" fill="#101114"/><circle cx="${a}" cy="${e}" r="${n*.55}" fill="#1c2638"/><circle cx="${a-n*.3}" cy="${e-n*.3}" r="${n*.18}" fill="#fff" opacity=".55"/>`}function we(a,e){if(e)return a==="square"?`<rect x="18" y="18" width="58" height="58" rx="16" fill="#000" opacity=".12"/>${b(36,36,9)}${b(58,58,9)}`:b(30,30,10);switch(a){case"pro":return`<rect x="14" y="14" width="104" height="104" rx="30" fill="#000" opacity=".13"/>${b(42,42,17)}${b(42,90,17)}${b(90,66,17)}<circle cx="92" cy="32" r="6" fill="#f3e7c4" opacity=".9"/>`;case"dual":return`<rect x="16" y="16" width="56" height="106" rx="28" fill="#000" opacity=".13"/>${b(44,44,18)}${b(44,94,18)}<circle cx="86" cy="30" r="5" fill="#f3e7c4" opacity=".9"/>`;case"column":return`${b(40,40,15)}${b(40,82,15)}${b(40,124,15)}<circle cx="74" cy="40" r="5" fill="#f3e7c4" opacity=".9"/>`;case"square":return`<rect x="14" y="14" width="96" height="96" rx="22" fill="#000" opacity=".13"/>${b(40,40,15)}${b(84,40,15)}${b(40,84,15)}<circle cx="84" cy="84" r="6" fill="#f3e7c4" opacity=".9"/>`;default:return b(40,40,16)}}function De(a,e,{size:n="lg"}={}){let o=`d${++ke}`,r=a.device?.shape==="tablet",[i,s,c]=r?[250,350,22]:[180,370,34],g=i+(r?130:110),p=s+34,y=`<linearGradient id="${o}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>`,d=`<linearGradient id="${o}w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--dev)"/><stop offset=".55" stop-color="#1b2140"/><stop offset="1" stop-color="#0a0d18"/></linearGradient>`,h=r?12:9,f=`<g transform="translate(0 34)">
    <rect width="${i}" height="${s}" rx="${c}" fill="#0c0d10"/>
    <rect x="${h}" y="${h}" width="${i-h*2}" height="${s-h*2}" rx="${c-h+2}" fill="url(#${o}w)"/>
    ${r?`<circle cx="${i/2}" cy="${h/2+1}" r="2.2" fill="#2a2d33"/>`:`<rect x="${i/2-28}" y="${h+10}" width="56" height="16" rx="8" fill="#050506"/>`}
    <text x="${h+16}" y="${r?84:86}" fill="#fff" font-family="system-ui, sans-serif" font-weight="300" font-size="${r?40:36}">9:41</text>
    <rect width="${i}" height="${s}" rx="${c}" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="2"/>
  </g>`,$=`<g transform="translate(${g-i} 0)">
    <rect width="${i}" height="${s}" rx="${c}" style="fill:var(--dev)"/>
    <rect width="${i}" height="${s}" rx="${c}" fill="url(#${o}g)"/>
    ${we(a.device?.camera,r)}
    <rect x="1" y="1" width="${i-2}" height="${s-2}" rx="${c-1}" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
  </g>`;return`<svg class="dev dev--${n}${r?" dev--tab":""}" viewBox="0 0 ${g} ${p}" style="--dev:${t(e)}" role="img" aria-label="${t(a.name)}"><defs>${y}${d}</defs>${f}${$}</svg>`}var A=(a,e,n,o)=>a.image?`<img sizes="auto, (max-width: 640px) 50vw, 280px" class="dev-img" src="${t(M(e,a.image))}" alt="${t(a.name)}" loading="lazy">`:De(a,a.colors?.[0]?.hex??"#C9CCD3",o),F=a=>a.list?Math.round((1-a.price/a.list)*100):0;function Se(a){let{site:e,devices:n,t:o,L:r,url:i,money:s,monthly:c,months:g,productPath:p,market:y}=a,d=n.find(f=>f.id===e.hero?.product)??n.find(f=>f.featured)??n[0];if(!d)return"";let h=i(p(d,y));return`<section class="hero" style="--glow:${t(d.colors?.[0]?.hex??"#2F5BFF")}">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${d.badge?`<span class="chip chip--glow">${t(r(d.badge))}</span>`:""}
      <h1>${t(r(e.hero?.title)||d.name)}</h1>
      <p class="lead">${t(r(e.hero?.text)||r(d.summary))}</p>
      <p class="hero-price"><span>${t(o.hero.from)}</span> <strong>${t(s(d.from.price))}</strong>${d.from.list?` <s>${t(s(d.from.list))}</s>`:""}</p>
      <p class="hero-inst">${m("card",18)} ${t(o.installment.replace("{price}",c(d.from.price)).replace("{n}",g))}</p>
      <div class="actions">
        <a class="btn btn--light btn--lg" href="${h}">${t(o.hero.buy)} ${m("arrow",18)}</a>
        <a class="btn btn--outline-light btn--lg" href="#shop">${t(o.hero.all)}</a>
      </div>
    </div>
    <a class="hero-art" href="${h}" tabindex="-1" aria-hidden="true">${A(d,i,r,{size:"xl"})}</a>
  </div>
  ${d.colors?.length>1?`<ul class="hero-colors wrap" aria-hidden="true">${d.colors.map(f=>`<li style="--c:${t(f.hex)}">${t(r(f.name))}</li>`).join("")}</ul>`:""}
</section>`}function Pe({site:a,L:e}){return a.perks?.length?`<section class="perks-sec"><ul class="wrap perks">${a.perks.map(n=>`<li>
    <span class="perk-i">${m(n.icon??"check",24)}</span>
    <span><strong>${t(e(n.title))}</strong><small>${t(e(n.text))}</small></span>
  </li>`).join("")}</ul></section>`:""}function Ne({site:a,L:e,url:n}){return a.banners?.length?`<section class="section section--tight"><div class="wrap banners">${a.banners.map(o=>`<a class="banner" href="?type=${t(o.filter??"")}#shop">
    <img sizes="auto, (max-width: 640px) 100vw, 580px" src="${t(M(n,o.image))}" alt="" width="1000" height="760" loading="lazy">
    <span class="banner-copy"><strong>${t(e(o.title))}</strong><small>${t(e(o.text))}</small><span class="banner-go">${m("arrow",18)}</span></span>
  </a>`).join("")}</div></section>`:""}function ie(a,e){let{t:n,L:o,url:r,money:i,monthly:s,productPath:c,market:g}=a,p=e.from,y=F(p);return`<li class="card" data-type="${t(e.category)}" data-brand="${t(e.brand)}" data-price="${p.price}" data-name="${t(`${e.brand} ${e.name}`.toLowerCase())}">
  <a class="card-link" href="${r(c(e,g))}">
    <div class="card-art">${A(e,r,o,{size:"sm"})}
      <div class="card-tags">${y?`<span class="chip chip--sale">-${y}%</span>`:""}${e.badge?`<span class="chip">${t(o(e.badge))}</span>`:""}</div>
    </div>
    <p class="card-brand">${t(e.brand)}</p>
    <h3>${t(e.name)}</h3>
    ${e.variants.length>1||p.size?`<p class="card-sizes">${e.variants.map(d=>`<span>${t(d.size)}</span>`).join("")}</p>`:""}
    <p class="card-price"><strong>${t(i(p.price))}</strong>${p.list?`<s>${t(i(p.list))}</s>`:""}</p>
    <p class="card-foot"><span class="inst">${t(n.installmentShort.replace("{price}",s(p.price)))}</span>${e.colors?.length?`<span class="dots" aria-hidden="true">${e.colors.map(d=>`<i style="background:${t(d.hex)}"></i>`).join("")}</span>`:""}</p>
    ${e.stock==="soon"?`<p class="soon">${t(n.stock.soon)}</p>`:""}
  </a>
</li>`}function ze(a){let{devices:e,catalog:n,t:o,L:r}=a,i=n.categories.filter(c=>e.some(g=>g.category===c.id)),s=[...new Set(e.map(c=>c.brand))];return`<section class="section" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="shop-head">
      <h2 id="shop-title" class="h2">${t(o.shop.title)}</h2>
      <p class="muted" data-count="${t(o.shop.count)}">${t(o.shop.count.replace("{n}",e.length))}</p>
    </div>
    <div class="toolbar" data-toolbar>
      <div class="chips" role="group" aria-label="${t(o.shop.all)}">
        <button type="button" class="pill is-on" data-type="">${t(o.shop.all)}</button>
        ${i.map(c=>`<button type="button" class="pill" data-type="${t(c.id)}">${t(r(c.name))}</button>`).join("")}
      </div>
      <div class="chips" role="group" aria-label="${t(o.shop.brand)}">
        ${s.map(c=>`<button type="button" class="pill pill--ghost" data-brand="${t(c)}" aria-pressed="false">${t(c)}</button>`).join("")}
      </div>
      <label class="search">${m("search",18)}<input type="search" placeholder="${t(o.search)}" aria-label="${t(o.search)}" data-search></label>
      <label class="sort"><span class="sr">${t(o.shop.sort)}</span><select data-sort>
        <option value="">${t(o.shop.sortPop)}</option><option value="asc">${t(o.shop.sortLow)}</option><option value="desc">${t(o.shop.sortHigh)}</option>
      </select></label>
    </div>
    <ul class="grid" data-grid>${e.map(c=>ie(a,c)).join("")}</ul>
    <p class="empty muted" data-empty hidden>${t(o.shop.empty)}</p>
  </div>
</section>`}function Me({site:a,t:e,L:n,url:o,devices:r,channels:i}){let s=a.tradein;if(!s)return"";let c=e.tradein,g=i[0];return`<section class="section section--dark" id="tradein" aria-labelledby="ti-title">
  <div class="wrap tradein">
    <div class="ti-copy">
      <h2 id="ti-title" class="h2">${t(n(s.title))}</h2>
      <p class="lead">${t(n(s.text))}</p>
      ${s.image?`<img sizes="auto, (max-width: 640px) 100vw, 580px" class="ti-img" src="${t(M(o,s.image))}" alt="" width="1000" height="760" loading="lazy">`:""}
    </div>
    <form class="form" data-compose data-channel="${t(g)}" data-href="${t(j(g,a.contact))}" data-message="${t(c.message)}">
      <label>${t(c.model)}<input name="model" placeholder="${t(c.modelHint)}" required></label>
      <fieldset><legend>${t(c.condition)}</legend>
        ${c.conditions.map((p,y)=>`<label class="radio"><input type="radio" name="condition" value="${t(p)}"${y===0?" checked":""}><span>${t(p)}</span></label>`).join("")}
      </fieldset>
      <label>${t(c.want)}<select name="want"><option>${t(c.any)}</option>${r.map(p=>`<option>${t(p.name)}</option>`).join("")}</select></label>
      <div class="row">
        <label>${t(c.name)}<input name="name" autocomplete="name" required></label>
        <label>${t(c.phone)}<input name="phone" type="tel" autocomplete="tel" required></label>
      </div>
      <button class="btn btn--primary btn--lg" type="submit">${m(g,18)} ${t(c.submit)}</button>
      <p class="form-msg" role="status" hidden></p>
    </form>
  </div>
</section>`}function je({site:a,t:e,L:n}){return a.faq?.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap faq">
    <h2 id="faq-title" class="h2">${t(e.faq)}</h2>
    <div class="qa">${a.faq.map((o,r)=>`<details${r===0?" open":""}><summary>${t(n(o.q))}${m("chevron",18)}</summary><p>${t(n(o.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Ce({site:a,t:e,L:n}){let o=a.branches?.length?a.branches:[{name:a.name,address:a.contact.address,phone:a.contact.phone}],r=encodeURIComponent(a.contact.mapQuery??n(o[0].address)),i=s=>s.length===7?e.visit.everyDay:H(s,e.days);return`<section class="section section--soft" id="stores" aria-labelledby="stores-title">
  <div class="wrap stores">
    <div>
      <h2 id="stores-title" class="h2">${t(e.visit.title)}</h2>
      ${Z(a,e)}
      <ul class="branches">${o.map(s=>{let c=encodeURIComponent(n(s.address));return`<li>
        <strong>${t(n(s.name))}</strong>
        <span>${m("pin",16)} ${t(n(s.address))}</span>
        ${s.phone?`<a href="tel:${D(s.phone)}">${m("phone",16)} ${t(s.phone)}</a>`:""}
        <a class="link" href="https://www.google.com/maps/dir/?api=1&amp;destination=${c}" target="_blank" rel="noopener">${t(e.visit.directions)} ${m("arrow",14)}</a>
      </li>`}).join("")}</ul>
      <p class="hours-line">${m("clock",18)} <span>${t(e.visit.hours)}:</span> ${a.hours.map(s=>`${t(i(s.days))} ${t(s.open)} \u2013 ${t(s.close)}`).join(" \xB7 ")}</p>
    </div>
    <div class="map"><iframe title="${t(n(o[0].name))}" src="https://www.google.com/maps?q=${r}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function Te(a,e){let{site:n,t:o,L:r,url:i,money:s,monthly:c,months:g,market:p,devices:y,channels:d}=a,h=e.from,f=e.colors?.[0],$=e.variants.map(l=>({size:l.size,price:s(l.price),list:l.list?s(l.list):"",off:F(l)?`-${F(l)}%`:"",save:l.list?o.product.save.replace("{price}",s(l.list-l.price)):"",inst:o.installment.replace("{price}",c(l.price)).replace("{n}",g)})),k=y.filter(l=>l.id!==e.id&&l.category===e.category).slice(0,4),S=a.catalog.categories.find(l=>l.id===e.category),w=i(`${p.id}/`);return`<div class="wrap crumbs"><a href="${w}">${t(o.nav.home)}</a>${m("chevron",14)}<a href="${w}?type=${t(e.category)}#shop">${t(r(S?.name))}</a>${m("chevron",14)}<span aria-current="page">${t(e.name)}</span></div>
<section class="wrap pdp" data-product data-name="${t(e.name)}" data-variants='${t(JSON.stringify($))}' data-text="${t(o.orderText)}">
  <div class="pdp-art">
    <div class="pdp-stage">${A(e,i,r,{size:"xl"})}</div>
    ${e.stock==="soon"?`<span class="chip chip--warn">${t(o.stock.soon)}</span>`:""}
  </div>
  <div class="pdp-info">
    <p class="card-brand">${t(e.brand)}${e.badge?` <span class="chip">${t(r(e.badge))}</span>`:""}</p>
    <h1 class="pdp-title">${t(e.name)}</h1>
    <p class="muted">${t(r(e.summary))}</p>
    <div class="pdp-price">
      <strong data-v="price">${t(s(h.price))}</strong>
      <s data-v="list"${h.list?"":" hidden"}>${h.list?t(s(h.list)):""}</s>
      <span class="chip chip--sale" data-v="off"${h.list?"":" hidden"}>${t($[e.variants.indexOf(h)].off)}</span>
    </div>
    <p class="save" data-v="save"${h.list?"":" hidden"}>${t($[e.variants.indexOf(h)].save)}</p>
    <p class="pdp-inst">${m("card",18)} <span data-v="inst">${t($[e.variants.indexOf(h)].inst)}</span></p>
    ${e.variants.length?`<fieldset class="opts"><legend>${t(o.product.storage)}</legend><div class="opt-row">
      ${e.variants.map((l,x)=>`<label class="opt"><input type="radio" name="size" value="${x}"${l===h?" checked":""}><span><b>${t(l.size)}</b><small>${t(s(l.price))}</small></span></label>`).join("")}
    </div></fieldset>`:""}
    ${e.colors?.length?`<fieldset class="opts"><legend>${t(o.product.color)}: <span data-v="color">${t(r(f.name))}</span></legend><div class="opt-row">
      ${e.colors.map((l,x)=>`<label class="swatch" title="${t(r(l.name))}"><input type="radio" name="color" value="${t(r(l.name))}" data-hex="${t(l.hex)}"${x===0?" checked":""}><span style="background:${t(l.hex)}"></span><span class="sr">${t(r(l.name))}</span></label>`).join("")}
    </div></fieldset>`:""}
    <p class="stock stock--${t(e.stock??"in")}">${m(e.stock==="soon"?"clock":"check",18)} ${t(o.stock[e.stock??"in"])}</p>
    <div class="buy">
      ${d.map((l,x)=>`<a class="btn ${x?"btn--ghost":"btn--primary"} btn--lg" href="${t(j(l,n.contact))}" ${q(l)} data-order data-channel="${t(l)}">${m(l,18)} ${t(x?o.via[l]:o.product.orderVia.replace("{channel}",o.via[l]))}</a>`).join("")}
    </div>
    <p class="form-msg" role="status" hidden></p>
    ${n.perks?.length?`<ul class="mini-perks">${n.perks.map(l=>`<li>${m(l.icon??"check",18)} ${t(r(l.title))}</li>`).join("")}</ul>`:""}
    <p class="note muted">${t(o.product.note)}</p>
    ${ae(a.market.lang)}
  </div>
</section>
${e.specs?.length?`<section class="section section--tight"><div class="wrap specs">
  <h2 class="h3">${t(o.product.specs)}</h2>
  <table><tbody>${e.specs.map(([l,x])=>`<tr><th scope="row">${t(o.specs[l]??l)}</th><td>${t(r(x))}</td></tr>`).join("")}</tbody></table>
</div></section>`:""}
${k.length?`<section class="section section--soft"><div class="wrap">
  <h2 class="h3">${t(o.product.related)}</h2>
  <ul class="grid grid--related">${k.map(l=>ie(a,l)).join("")}</ul>
</div></section>`:""}`}function Le({site:a,t:e,L:n,lang:o}){let r=Y(a,e,o,"btn"),i=Q(a);return a.showReviews===!1||!i.length&&!r?"":`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${t(e.reviews.title)}</h2>
    ${te(i,o,"reviews",s=>`<figure class="review">
      <p class="stars" aria-label="${t(s.rating)}/5">${Array.from({length:5},(c,g)=>`<span class="${g<s.rating?"on":""}">${m("star",16)}</span>`).join("")}</p>
      <blockquote>${t(n(s.text))}</blockquote>
      <figcaption>${t(s.name)}${s.bought?`<small>${t(n(s.bought))}</small>`:""}${ee(s,o)}</figcaption>
    </figure>`)}${r}
  </div>
</section>`}function Re({site:a,t:e,L:n,market:o}){let r=a.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${t(a.name)}</p><p class="muted">${t(n(a.tagline))}</p></div>
    <div><p class="foot-h">${t(e.footer.contact)}</p><ul>
      ${r.phone?`<li>${t(e.footer.hotline)}: <a href="tel:${D(r.phone)}">${t(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${t(r.email)}">${t(r.email)}</a></li>`:""}
      <li>${t(n(r.address))}</li></ul></div>
    ${a.social?`<div><p class="foot-h">${t(e.footer.follow)}</p><ul>${Object.entries(a.social).filter(([,i])=>i).map(([i,s])=>`<li><a href="${t(s)}" target="_blank" rel="noopener">${t(i==="tiktok"?"TikTok":i==="youtube"?"YouTube":i[0].toUpperCase()+i.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${a.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${t(a.name)} \xB7 ${t(e.footer.trademark)}</span>${ne(a,e,o.lang)}</div>
</footer>`}function qe({site:a,market:e,L:n,abs:o}){let r=a.branches??[];return{"@context":"https://schema.org","@type":"ElectronicsStore",name:a.name,url:o(`${e.id}/`),description:n(a.intro),telephone:a.contact.phone,email:a.contact.email,address:{"@type":"PostalAddress",streetAddress:n(a.contact.address)},currenciesAccepted:e.currency,openingHoursSpecification:_(a.hours),...r.length>1?{department:r.map(i=>({"@type":"ElectronicsStore",name:n(i.name),telephone:i.phone,address:{"@type":"PostalAddress",streetAddress:n(i.address)}}))}:{}}}var Ee=({site:a,L:e})=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:a.faq.map(n=>({"@type":"Question",name:e(n.q),acceptedAnswer:{"@type":"Answer",text:e(n.a)}}))});function Be({site:a,market:e,L:n,abs:o,productPath:r},i){let s=i.stock==="soon"?"https://schema.org/PreOrder":"https://schema.org/InStock";return{"@context":"https://schema.org","@type":"Product",name:i.name,description:n(i.summary),brand:{"@type":"Brand",name:i.brand},...i.colors?.length?{color:i.colors.map(c=>n(c.name)).join(", ")}:{},url:o(r(i,e)),offers:i.variants.map(c=>({"@type":"Offer",name:`${i.name} ${c.size}`,price:c.price,priceCurrency:e.currency,availability:s,itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:a.name}}))}}function Ge({catalog:a,market:e,L:n,abs:o,productPath:r},i){let s=a.categories.find(c=>c.id===i.category);return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:o(`${e.id}/`)},{"@type":"ListItem",position:2,name:n(s?.name),item:o(`${e.id}/?type=${i.category}`)},{"@type":"ListItem",position:3,name:i.name,item:o(r(i,e))}]}}export{Ye as renderSite};
