var ae={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t=(n="")=>String(n).replace(/[&<>"']/g,e=>ae[e]);function N(n,e,a="vi"){return n==null?"":typeof n!="object"?String(n):n[e]??n[a]??Object.values(n)[0]??""}var oe={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},C=n=>oe[n]??"en-US";function re(n,e="1"){if(e==="0.99")return Math.max(.99,Math.ceil(n)-.01);let a=Number(e)||1;return Math.max(a,Math.round(n/a)*a)}function se(n,e){if(e.default)return n.basePrice;let a=n.prices?.[e.id]??{mode:"auto"};return a.mode==="hidden"?null:a.mode==="manual"?a.amount:re(n.basePrice*e.rate,e.rounding)}var ie=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function O(n,e){let a={style:"currency",currency:e.currency};return ie.has(e.currency)&&(a.maximumFractionDigits=0),new Intl.NumberFormat(C(e.lang),a).format(n)}function L(n,e){return n.products.map(a=>({...a,price:se(a,e)})).filter(a=>a.price!=null)}function F(n="/"){let e=n.endsWith("/")?n:`${n}/`;return(a="")=>e+String(a).replace(/^\//,"")}var M=(n="")=>n.startsWith("uploads/")?n:/^([a-z]+:|\/)/i.test(n)?null:`assets/${n}`,P=(n,e)=>{let a=M(e);return a==null?e:n(a)},S=(n="")=>String(n).replace(/\D/g,"");function k(n,e,a=""){switch(n){case"phone":return`tel:${S(e.phone)}`;case"zalo":return`https://zalo.me/${S(e.zalo||e.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(e.messenger)}`;case"whatsapp":return`https://wa.me/${S(e.whatsapp)}${a?`?text=${encodeURIComponent(a)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(e.kakao)}/chat`;case"email":return`mailto:${e.email}${a?`?subject=${encodeURIComponent(a)}`:""}`;default:return"#"}}var R=n=>`<script type="application/ld+json">${JSON.stringify(n).replace(/</g,"\\u003c")}<\/script>`;var ce={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},m=(n,e=20,a="")=>`<svg class="i" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${a}>${ce[n]??""}</svg>`,j=[1,2,3,4,5,6,0],le=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function I(n,e){let a=n.map(s=>j.indexOf(s)).sort((s,c)=>s-c);return a.every((s,c)=>c===0||s===a[c-1]+1)&&a.length>2?`${e[j[a[0]]]} \u2013 ${e[j[a.at(-1)]]}`:a.map(s=>e[j[s]]).join(", ")}var V=n=>n.map(e=>({"@type":"OpeningHoursSpecification",dayOfWeek:e.days.map(a=>le[a]),opens:e.open,closes:e.close}));function U(n){return new Intl.NumberFormat(C(n.lang),{style:"currency",currency:n.currency}).formatToParts(0).find(a=>a.type==="currency")?.value??n.currency}var x=n=>n==="phone"||n==="email"?"":'target="_blank" rel="noopener"',W=n=>`<div class="suggest" id="market-suggest" data-suggest="${t(n.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${t(n.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${t(n.market.dismiss)}">\xD7</button>
</div>`,H=(n,e)=>`<p class="status" data-open-status data-hours='${t(JSON.stringify(n.hours))}' data-tz="${t(n.timezone??"Asia/Ho_Chi_Minh")}" data-open="${t(e.visit.open)}" data-closed="${t(e.visit.closed)}" hidden></p>`,G={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},pe=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,de=n=>{try{let e=new URL(String(n.googleReview??"").trim());return e.protocol==="https:"&&pe.test(e.hostname)?e.href:""}catch{return""}},E=(n,e,a,r="btn btn--line")=>{let s=de(n);if(!s)return"";let c=typeof e.reviews=="object"&&e.reviews?.google||G[a]||G.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${r}" href="${t(s)}" target="_blank" rel="noopener">${m("star",16)} ${t(c)}</a></p>`},z={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},_={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},B=n=>(n.reviews??[]).filter(e=>e&&(e.name||e.text)&&!(typeof e.text=="object"&&e.text&&!Object.values(e.text).some(Boolean)&&!e.name));function K(n,e){let a=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(n?.date??"").trim());if(!a)return"";let r=new Date(Date.UTC(+a[1],+a[2]-1,+(a[3]??1)));if(Number.isNaN(r.getTime()))return"";let s=new Intl.DateTimeFormat(_[e]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(r);return`<time class="rv-date" datetime="${t(n.date)}">${t(s)}</time>`}function he(n,e){let a=n.filter(o=>o.rating>=1&&o.rating<=5);if(a.length<2)return"";let r=a.reduce((o,l)=>o+Number(l.rating),0)/a.length,s=z[e]??z.en,c=new Intl.NumberFormat(_[e]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(r);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${m("star",18)}</span><strong>${c}</strong><span>\xB7</span><span>${t(s.count.replace("{n}",String(n.length)))}</span></p>`}function J(n,e,a,r){if(!n.length)return"";let s=z[e]??z.en,c=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${t(o==="prev"?s.prev:s.next)}">${m("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${he(n,e)}<div class="rv" data-rv data-more="${t(s.more)}" data-less="${t(s.less)}">
      <div class="${a} rv-track" tabindex="0">${n.map(r).join("")}</div>
      <div class="rv-nav" hidden>${c("prev")}${c("next")}</div>
    </div>${ue}`}var ue=`<style>
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
upd()}})()<\/script>`,A={vi:{label:"Chia s\u1EBB",native:"G\u1EEDi qua Zalo, Messenger\u2026",copy:"Sao ch\xE9p link",copied:"\u0110\xE3 sao ch\xE9p"},en:{label:"Share",native:"Send via apps\u2026",copy:"Copy link",copied:"Copied"},ja:{label:"\u30B7\u30A7\u30A2",native:"\u30A2\u30D7\u30EA\u3067\u9001\u308B\u2026",copy:"\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",copied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"},ko:{label:"\uACF5\uC720",native:"\uC571\uC73C\uB85C \uBCF4\uB0B4\uAE30\u2026",copy:"\uB9C1\uD06C \uBCF5\uC0AC",copied:"\uBCF5\uC0AC\uB428"},zh:{label:"\u5206\u4EAB",native:"\u901A\u8FC7\u5E94\u7528\u53D1\u9001\u2026",copy:"\u590D\u5236\u94FE\u63A5",copied:"\u5DF2\u590D\u5236"},th:{label:"\u0E41\u0E0A\u0E23\u0E4C",native:"\u0E2A\u0E48\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E2D\u0E1B\u2026",copy:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C",copied:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27"},id:{label:"Bagikan",native:"Kirim lewat aplikasi\u2026",copy:"Salin tautan",copied:"Tersalin"},es:{label:"Compartir",native:"Enviar por apps\u2026",copy:"Copiar enlace",copied:"Copiado"},fr:{label:"Partager",native:"Envoyer via une app\u2026",copy:"Copier le lien",copied:"Copi\xE9"},de:{label:"Teilen",native:"Per App senden\u2026",copy:"Link kopieren",copied:"Kopiert"},pt:{label:"Compartilhar",native:"Enviar por apps\u2026",copy:"Copiar link",copied:"Copiado"},ru:{label:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",native:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u2026",copy:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",copied:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}};function Z(n){let e=A[n]??A.en,a="display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 12px;border:1px solid currentColor;border-radius:999px;background:none;color:inherit;font:inherit;font-size:13px;text-decoration:none;cursor:pointer;opacity:.85";return`<div class="kp-share" data-share data-copied="${t(e.copied)}" style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:18px;font-size:13px">
      <span style="opacity:.65">${t(e.label)}</span>
      <button type="button" data-share-native hidden style="${a}">${m("share",15)} ${t(e.native)}</button>
      <a data-share-fb href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener" style="${a}">${m("facebook",15)} Facebook</a>
      <button type="button" data-share-copy style="${a}">${m("link",15)} <span>${t(e.copy)}</span></button>
    </div>`}var Y=(n,e,a)=>n.badge===!1?"":`<a class="made" href="https://kingpes.net/${t(a==="vi"||a==="ja"?a:"en")}/?ref=badge" rel="nofollow" target="_blank">${t(e.footer.madeWith)}</a>`;function X({site:n,markets:e,url:a,abs:r}){let s=e.find(o=>o.default)??e[0],c=e.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${t(s.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t(n.name)}</title>
<link rel="canonical" href="${r(`${s.id}/`)}">
${e.map(o=>`<link rel="alternate" hreflang="${t(o.lang)}-${t(o.country)}" href="${r(`${o.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(c)}, root = ${JSON.stringify(a(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${e.map(o=>`<a href="${a(`${o.id}/`)}">${t(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var me="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap";function Be({site:n,catalog:e,i18n:a,template:r,basePath:s="/",siteUrl:c=n.domain}){let o=F(s),l=p=>new URL(o(p),c).href,u=e.markets,g=[],y=(p,i)=>`${i.id}/${N(p.slug,i.lang)}/`;for(let p of u){let i=p.lang,f=a[i]??a.vi,h=v=>N(v,i),$=L(e,p),w=n.orderChannels?.[p.id]??["phone"],D={site:n,catalog:e,market:p,markets:u,lang:i,t:f,L:h,url:o,abs:l,channels:w,products:$,productPath:y,price:v=>O(v.price,p),template:r};g.push({path:`${p.id}/index.html`,html:Q(D,{kind:"home"})});for(let v of $)g.push({path:`${y(v,p)}index.html`,html:Q(D,{kind:"product",product:v})})}return g.push({path:"index.html",html:X({site:n,markets:u,url:o,abs:l})}),g}function Q(n,e){let{site:a,market:r,markets:s,lang:c,L:o,url:l,abs:u,catalog:g,productPath:y}=n,p=e.kind==="home",i=e.product,f=p?`${r.id}/`:y(i,r),h=p?`${a.name} \xB7 ${o(a.tagline)}`:`${o(i.name)} \xB7 ${a.name}`,$=o(p?a.intro:i.description),w=s.map(d=>{if(p)return{m:d,href:`${d.id}/`};let b=g.products.find(ne=>ne.id===i.id);return L({products:[b]},d).length>0?{m:d,href:y(b,d)}:null}).filter(Boolean),T=s.map(d=>({m:d,href:w.find(b=>b.m.id===d.id)?.href??`${d.id}/`})),D=s.find(d=>d.default)??s[0],v=a.theme??{},ee=Object.entries({primary:v.primary,ink:v.ink,bg:v.bg,surface:v.surface,soft:v.soft,accent:v.accent}).filter(([,d])=>d).map(([d,b])=>`--${d}:${b}`).join(";"),te=T.map(({m:d,href:b})=>({id:d.id,lang:d.lang,country:d.country,currency:d.currency,href:l(b)}));return`<!doctype html>
<html lang="${t(c)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t(h)}</title>
<meta name="description" content="${t($)}">
<link rel="canonical" href="${u(f)}">
${w.map(({m:d,href:b})=>`<link rel="alternate" hreflang="${t(d.lang)}-${t(d.country)}" href="${u(b)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${u(p?`${D.id}/`:w.find(d=>d.m.id===D.id)?.href??f)}">
<meta property="og:type" content="${p?"website":"product"}">
<meta property="og:title" content="${t(h)}">
<meta property="og:description" content="${t($)}">
<meta property="og:url" content="${u(f)}">
<meta property="og:site_name" content="${t(a.name)}">
<meta property="og:image" content="${t(u(M(p?a.heroImage??"photos/hero.webp":i.image)??(p?a.heroImage:i.image)))}">
<meta name="theme-color" content="${t(v.bg??"#FFF7F2")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${me}">
<link rel="stylesheet" href="${l("assets/style.css")}">
<style>:root{${ee}}</style>
${p?R(ke(n)):R(xe(n,i))}
<script src="${l("assets/site.js")}" defer><\/script>
</head>
<body data-market="${t(r.id)}" data-markets='${t(JSON.stringify(te))}'>
<a class="skip" href="#main">${c==="vi"?"B\u1ECF qua, t\u1EDBi n\u1ED9i dung":"Skip to content"}</a>
${W(n.t)}
${p&&o(a.announcement)?`<p class="announce">${t(o(a.announcement))}</p>`:""}
${ge(n,T)}
<main id="main">
${p?fe(n):ye(n,i)}
</main>
${be(n)}
${$e(n,p?"":o(i.name))}
</body>
</html>
`}function ge(n,e){let{site:a,market:r,t:s,url:c,channels:o}=n,l=c(`${r.id}/`);return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${l}">
      ${a.logo?`<img src="${t(P(c,a.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${t(a.name.trim()[0]??"")}</span>`}
      <span>${t(a.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">
      <a href="${l}#menu">${t(s.nav.menu)}</a>
      <a href="${l}#story">${t(s.nav.story)}</a>
      <a href="${l}#visit">${t(s.nav.visit)}</a>
    </nav>
    <div class="bar-end">
      ${e.length>1?`<details class="market">
        <summary aria-label="${t(s.market.label)}">${m("globe",18)}<span>${t(r.id.toUpperCase())}<span class="cur"> \xB7 ${t(U(r))}</span></span></summary>
        <ul>${e.map(({m:u,href:g})=>`<li><a href="${c(g)}" hreflang="${t(u.lang)}"${u.id===r.id?' aria-current="true"':""}>${t(u.country)} \xB7 ${t(u.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-sm" href="${t(k(o[0],a.contact))}" ${x(o[0])}>${t(s.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${t(s.nav.openMenu)}">${m("menu",22)}</summary>
        <nav aria-label="Menu">
          <a href="${l}#menu">${t(s.nav.menu)}</a>
          <a href="${l}#story">${t(s.nav.story)}</a>
          <a href="${l}#visit">${t(s.nav.visit)}</a>
        </nav>
      </details>
    </div>
  </div>
</header>`}function fe(n){let{site:e,catalog:a,t:r,L:s,lang:c,url:o,products:l,channels:u}=n,g=l.filter(i=>i.featured).slice(0,4),y=e.heroImage?t(P(o,e.heroImage)):o("assets/photos/hero.webp"),p=a.categories.filter(i=>l.some(f=>f.category===i.id));return`
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1>${t(s(e.tagline))}</h1>
      <p class="lead">${t(s(e.intro))}</p>
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#menu">${t(r.hero.cta)} ${m("arrow",18)}</a>
        ${u.map(i=>`<a class="btn btn--ghost btn--lg" href="${t(k(i,e.contact))}" ${x(i)}>${m(i,18)} ${t(r.orderVia[i])}</a>`).join("")}
      </div>
      <ul class="badges">${r.hero.badges.map(i=>`<li>${t(i)}</li>`).join("")}</ul>
    </div>
    <div class="hero-art">
      <div class="blob" aria-hidden="true"></div>
      <img src="${y}" alt="${t(e.name)}" width="1000" height="1000" fetchpriority="high">
    </div>
  </div>
  <div class="scallop" aria-hidden="true"></div>
</section>

${g.length?`<section class="section section--soft" aria-labelledby="best">
  <div class="wrap">
    <h2 id="best" class="h2">${t(r.bestsellers)}</h2>
    <div class="grid grid--4">${g.map(i=>q(n,i)).join("")}</div>
  </div>
</section>`:""}

<section class="section" id="menu" aria-labelledby="menu-title">
  <div class="wrap">
    <div class="head">
      <h2 id="menu-title" class="h2">${t(r.menu.title)}</h2>
      <p class="muted">${t(r.menu.text)}</p>
    </div>
    <nav class="cats" aria-label="${t(r.menu.title)}">${p.map(i=>`<a href="#cat-${t(i.id)}">${t(s(i.name))}</a>`).join("")}</nav>
    ${p.map(i=>`<div class="cat" id="cat-${t(i.id)}">
      <h3 class="h3">${t(s(i.name))}</h3>
      <div class="grid grid--4">${l.filter(f=>f.category===i.id).map(f=>q(n,f)).join("")}</div>
    </div>`).join("")}
  </div>
</section>

${e.story?`<section class="section section--soft" id="story" aria-labelledby="story-title">
  <div class="wrap story">
    <div class="story-art" aria-hidden="true"><img sizes="auto, (max-width: 640px) 100vw, 580px" src="${o("assets/photos/story.webp")}" alt="" width="900" height="900" loading="lazy"></div>
    <div class="story-copy">
      <h2 id="story-title" class="h2">${t(s(e.story.title))}</h2>
      <p>${t(s(e.story.body))}</p>
      ${s(e.story.quote)?`<blockquote><p>\u201C${t(s(e.story.quote))}\u201D</p>${e.story.signature?`<cite>${t(e.story.signature)}</cite>`:""}</blockquote>`:""}
    </div>
  </div>
</section>`:""}

<section class="section" aria-labelledby="how-title">
  <div class="wrap">
    <h2 id="how-title" class="h2 center">${t(r.how.title)}</h2>
    <ol class="steps">${r.how.steps.map((i,f)=>`<li><span class="n">${f+1}</span><h3>${t(i.t)}</h3><p class="muted">${t(i.d)}</p></li>`).join("")}</ol>
  </div>
</section>

${e.showReviews!==!1&&(B(e).length||E(e,r,c))?`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${t(r.reviews)}</h2>
    ${J(B(e),c,"grid grid--3",i=>`<figure class="review">
      <div class="stars" aria-label="${i.rating}/5">${Array.from({length:5},(f,h)=>`<span class="${h<i.rating?"on":""}">${m("star",18)}</span>`).join("")}</div>
      <blockquote>${t(s(i.text))}</blockquote>
      <figcaption>${t(i.name)}${K(i,c)}</figcaption>
    </figure>`)}${E(e,r,c,"btn btn--ghost")}
  </div>
</section>`:""}

${ve(n)}`}function q(n,e){let{t:a,L:r,url:s,market:c,productPath:o,price:l,site:u,channels:g}=n,y=s(o(e,c)),p=a.orderText.replace("{product}",r(e.name));return`<article class="card${e.inStock?"":" is-out"}">
  <a class="card-img" href="${y}" tabindex="-1" aria-hidden="true">
    <img sizes="auto, (max-width: 640px) 50vw, 280px" src="${t(P(s,e.image))}" alt="" width="800" height="800" loading="lazy">
    ${e.badge&&e.inStock?`<span class="tag">${t(r(e.badge))}</span>`:""}
    ${e.inStock?"":`<span class="tag tag--out">${t(a.soldOut)}</span>`}
  </a>
  <div class="card-body">
    <h4 class="card-title"><a href="${y}">${t(r(e.name))}</a></h4>
    <p class="card-desc muted">${t(r(e.description))}</p>
    <div class="card-foot">
      <span class="price">${t(l(e))}</span>
      ${e.inStock?`<a class="btn btn--small btn--primary" href="${t(k(g[0],u.contact,p))}" ${x(g[0])} aria-label="${t(a.order)} ${t(r(e.name))}">${t(a.order)}</a>`:`<span class="btn btn--small btn--disabled" aria-disabled="true">${t(a.soldOut)}</span>`}
    </div>
  </div>
</article>`}function ve(n){let{site:e,t:a,L:r}=n,s=`https://www.google.com/maps?q=${encodeURIComponent(e.contact.mapQuery??r(e.contact.address))}&output=embed`,c=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(e.contact.mapQuery??r(e.contact.address))}`;return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${t(a.visit.title)}</h2>
      ${H(e,a)}
      <h3 class="h4">${m("clock",18)} ${t(a.visit.hours)}</h3>
      <table class="hours"><tbody>${e.hours.map(o=>`<tr><th scope="row">${t(I(o.days,a.days))}</th><td>${t(o.open)} \u2013 ${t(o.close)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${m("pin",18)} ${t(a.visit.address)}</h3>
      <p>${t(r(e.contact.address))}</p>
      <a class="btn btn--ghost" href="${t(c)}" target="_blank" rel="noopener">${t(a.visit.directions)} ${m("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${t(a.visit.address)}" src="${t(s)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function ye(n,e){let{t:a,L:r,url:s,market:c,catalog:o,products:l,site:u,channels:g,price:y}=n,p=o.categories.find(h=>h.id===e.category),i=l.filter(h=>h.id!==e.id&&h.category===e.category).concat(l.filter(h=>h.id!==e.id&&h.category!==e.category)).slice(0,4),f=a.orderText.replace("{product}",r(e.name));return`
<section class="section product">
  <div class="wrap">
    <a class="back" href="${s(`${c.id}/`)}#menu">\u2190 ${t(a.product.back)}</a>
    <div class="product-grid">
      <div class="product-img"><img src="${t(P(s,e.image))}" alt="${t(r(e.name))}" width="800" height="800" fetchpriority="high"></div>
      <div class="product-info">
        ${p?`<p class="eyebrow">${t(r(p.name))}</p>`:""}
        <h1>${t(r(e.name))}</h1>
        <p class="price price--lg">${t(y(e))}</p>
        <p class="lead">${t(r(e.description))}</p>
        ${e.inStock?`<div class="actions">${g.map((h,$)=>`<a class="btn ${$===0?"btn--primary":"btn--ghost"} btn--lg" href="${t(k(h,u.contact,f))}" ${x(h)}>${m(h,18)} ${t(a.orderVia[h])}</a>`).join("")}</div>`:`<p class="tag tag--out tag--inline">${t(a.soldOut)}</p>`}
        ${Z(n.market.lang)}
      </div>
    </div>
  </div>
</section>
${i.length?`<section class="section section--soft" aria-labelledby="rel-title">
  <div class="wrap">
    <h2 id="rel-title" class="h2">${t(a.product.related)}</h2>
    <div class="grid grid--4">${i.map(h=>q(n,h)).join("")}</div>
  </div>
</section>`:""}`}function be(n){let{site:e,t:a,L:r,market:s}=n,c=e.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div>
      <p class="foot-name">${t(e.name)}</p>
      <p class="muted">${t(r(e.tagline))}</p>
    </div>
    <div>
      <p class="foot-h">${t(a.footer.contact)}</p>
      <ul>
        ${c.phone?`<li><a href="tel:${S(c.phone)}">${t(c.phone)}</a></li>`:""}
        ${c.email?`<li><a href="mailto:${t(c.email)}">${t(c.email)}</a></li>`:""}
        <li>${t(r(c.address))}</li>
      </ul>
    </div>
    ${e.social?`<div>
      <p class="foot-h">${t(a.footer.follow)}</p>
      <ul>${Object.entries(e.social).filter(([,o])=>o).map(([o,l])=>`<li><a href="${t(l)}" target="_blank" rel="noopener">${t(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul>
    </div>`:""}
  </div>
  <div class="wrap foot-bottom${e.badge===!1?" is-solo":""}">
    <span>\xA9 ${new Date().getFullYear()} ${t(e.name)}</span>
    ${Y(e,a,s.lang)}
  </div>
</footer>`}function $e(n,e){let{site:a,t:r,channels:s}=n,c=e?r.orderText.replace("{product}",e):"";return`<nav class="orderbar" aria-label="${t(r.nav.order)}">
  ${s.slice(0,3).map((o,l)=>`<a class="${l===0?"primary":""}" href="${t(k(o,a.contact,c))}" ${x(o)}>${m(o,20)}<span>${t(r.orderVia[o])}</span></a>`).join("")}
</nav>`}function ke({site:n,market:e,L:a,abs:r,products:s,price:c,productPath:o}){return{"@context":"https://schema.org","@type":"Bakery",name:n.name,url:r(`${e.id}/`),description:a(n.intro),telephone:n.contact.phone,email:n.contact.email,address:{"@type":"PostalAddress",streetAddress:a(n.contact.address)},currenciesAccepted:e.currency,openingHoursSpecification:V(n.hours),hasMenu:{"@type":"Menu",hasMenuItem:s.map(l=>({"@type":"MenuItem",name:a(l.name),url:r(o(l,e)),offers:{"@type":"Offer",price:l.price,priceCurrency:e.currency,description:c(l)}}))}}}function xe({site:n,market:e,L:a,abs:r,url:s,productPath:c},o){return{"@context":"https://schema.org","@type":"Product",name:a(o.name),description:a(o.description),image:r(M(o.image)??o.image),brand:{"@type":"Brand",name:n.name},offers:{"@type":"Offer",url:r(c(o,e)),price:o.price,priceCurrency:e.currency,availability:o.inStock?"https://schema.org/InStock":"https://schema.org/OutOfStock"}}}export{Be as renderSite};
