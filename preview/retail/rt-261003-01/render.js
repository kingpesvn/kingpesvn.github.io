var ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(a="")=>String(a).replace(/[&<>"']/g,t=>ce[t]);function q(a,t,n="vi"){return a==null?"":typeof a!="object"?String(a):a[t]??a[n]??Object.values(a)[0]??""}var pe={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},F=a=>pe[a]??"en-US";function de(a,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(a)-.01);let n=Number(t)||1;return Math.max(n,Math.round(a/n)*n)}function G(a,t){if(t.default)return a.basePrice;let n=a.prices?.[t.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:de(a.basePrice*t.rate,t.rounding)}var he=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function I(a,t){let n={style:"currency",currency:t.currency};return he.has(t.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(F(t.lang),n).format(a)}function U(a="/"){let t=a.endsWith("/")?a:`${a}/`;return(n="")=>t+String(n).replace(/^\//,"")}var C=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,x=(a,t)=>{let n=C(t);return n==null?t:a(n)},P=(a="")=>String(a).replace(/\D/g,"");function L(a,t,n=""){switch(a){case"phone":return`tel:${P(t.phone)}`;case"zalo":return`https://zalo.me/${P(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${P(t.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var R=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`;var ue={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},h=(a,t=20,n="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${ue[a]??""}</svg>`,E=[1,2,3,4,5,6,0],me=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function H(a,t){let n=a.map(r=>E.indexOf(r)).sort((r,i)=>r-i);return n.every((r,i)=>i===0||r===n[i-1]+1)&&n.length>2?`${t[E[n[0]]]} \u2013 ${t[E[n.at(-1)]]}`:n.map(r=>t[E[r]]).join(", ")}var _=a=>a.map(t=>({"@type":"OpeningHoursSpecification",dayOfWeek:t.days.map(n=>me[n]),opens:t.open,closes:t.close}));function K(a){return new Intl.NumberFormat(F(a.lang),{style:"currency",currency:a.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??a.currency}var A=a=>a==="phone"||a==="email"?"":'target="_blank" rel="noopener"',J=a=>`<div class="suggest" id="market-suggest" data-suggest="${e(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(a.market.dismiss)}">\xD7</button>
</div>`,Z=(a,t)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(a.hours))}' data-tz="${e(a.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(t.visit.open)}" data-closed="${e(t.visit.closed)}" hidden></p>`,V={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},ge=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,fe=a=>{try{let t=new URL(String(a.googleReview??"").trim());return t.protocol==="https:"&&ge.test(t.hostname)?t.href:""}catch{return""}},Y=(a,t,n,o="btn btn--line")=>{let r=fe(a);if(!r)return"";let i=typeof t.reviews=="object"&&t.reviews?.google||V[n]||V.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${o}" href="${e(r)}" target="_blank" rel="noopener">${h("star",16)} ${e(i)}</a></p>`},B={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},X={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},Q=a=>(a.reviews??[]).filter(t=>t&&(t.name||t.text)&&!(typeof t.text=="object"&&t.text&&!Object.values(t.text).some(Boolean)&&!t.name));function ee(a,t){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(a?.date??"").trim());if(!n)return"";let o=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(o.getTime()))return"";let r=new Intl.DateTimeFormat(X[t]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(o);return`<time class="rv-date" datetime="${e(a.date)}">${e(r)}</time>`}function be(a,t){let n=a.filter(s=>s.rating>=1&&s.rating<=5);if(n.length<2)return"";let o=n.reduce((s,c)=>s+Number(c.rating),0)/n.length,r=B[t]??B.en,i=new Intl.NumberFormat(X[t]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(o);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${h("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${e(r.count.replace("{n}",String(a.length)))}</span></p>`}function te(a,t,n,o){if(!a.length)return"";let r=B[t]??B.en,i=s=>`<button type="button" class="rv-btn" data-rv-${s} aria-label="${e(s==="prev"?r.prev:r.next)}">${h("arrow",18,s==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${be(a,t)}<div class="rv" data-rv data-more="${e(r.more)}" data-less="${e(r.less)}">
      <div class="${n} rv-track" tabindex="0">${a.map(o).join("")}</div>
      <div class="rv-nav" hidden>${i("prev")}${i("next")}</div>
    </div>${ve}`}var ve=`<style>
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
upd()}})()<\/script>`,W={vi:{label:"Chia s\u1EBB",native:"G\u1EEDi qua Zalo, Messenger\u2026",copy:"Sao ch\xE9p link",copied:"\u0110\xE3 sao ch\xE9p"},en:{label:"Share",native:"Send via apps\u2026",copy:"Copy link",copied:"Copied"},ja:{label:"\u30B7\u30A7\u30A2",native:"\u30A2\u30D7\u30EA\u3067\u9001\u308B\u2026",copy:"\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",copied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"},ko:{label:"\uACF5\uC720",native:"\uC571\uC73C\uB85C \uBCF4\uB0B4\uAE30\u2026",copy:"\uB9C1\uD06C \uBCF5\uC0AC",copied:"\uBCF5\uC0AC\uB428"},zh:{label:"\u5206\u4EAB",native:"\u901A\u8FC7\u5E94\u7528\u53D1\u9001\u2026",copy:"\u590D\u5236\u94FE\u63A5",copied:"\u5DF2\u590D\u5236"},th:{label:"\u0E41\u0E0A\u0E23\u0E4C",native:"\u0E2A\u0E48\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E2D\u0E1B\u2026",copy:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C",copied:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27"},id:{label:"Bagikan",native:"Kirim lewat aplikasi\u2026",copy:"Salin tautan",copied:"Tersalin"},es:{label:"Compartir",native:"Enviar por apps\u2026",copy:"Copiar enlace",copied:"Copiado"},fr:{label:"Partager",native:"Envoyer via une app\u2026",copy:"Copier le lien",copied:"Copi\xE9"},de:{label:"Teilen",native:"Per App senden\u2026",copy:"Link kopieren",copied:"Kopiert"},pt:{label:"Compartilhar",native:"Enviar por apps\u2026",copy:"Copiar link",copied:"Copiado"},ru:{label:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",native:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u2026",copy:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",copied:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}};function ae(a){let t=W[a]??W.en,n="display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 12px;border:1px solid currentColor;border-radius:999px;background:none;color:inherit;font:inherit;font-size:13px;text-decoration:none;cursor:pointer;opacity:.85";return`<div class="kp-share" data-share data-copied="${e(t.copied)}" style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:18px;font-size:13px">
      <span style="opacity:.65">${e(t.label)}</span>
      <button type="button" data-share-native hidden style="${n}">${h("share",15)} ${e(t.native)}</button>
      <a data-share-fb href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener" style="${n}">${h("facebook",15)} Facebook</a>
      <button type="button" data-share-copy style="${n}">${h("link",15)} <span>${e(t.copy)}</span></button>
    </div>`}var ne=(a,t,n)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(t.footer.madeWith)}</a>`;function oe({site:a,markets:t,url:n,abs:o}){let r=t.find(s=>s.default)??t[0],i=t.map(s=>({id:s.id,lang:s.lang,country:s.country}));return`<!doctype html>
<html lang="${e(r.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(a.name)}</title>
<link rel="canonical" href="${o(`${r.id}/`)}">
${t.map(s=>`<link rel="alternate" hreflang="${e(s.lang)}-${e(s.country)}" href="${o(`${s.id}/`)}">`).join(`
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
<body><p>${t.map(s=>`<a href="${n(`${s.id}/`)}">${e(s.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var ye="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500..800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",se=24;function ie(a,t){return a.products.map(n=>({...n,variants:n.variants.map(o=>({...o,price:G(o,t)})).filter(o=>o.price!=null)})).filter(n=>n.variants.length>0).map(n=>({...n,from:Math.min(...n.variants.map(o=>o.price))}))}function $e(a){let t=a.filter(i=>i.badge),n=a.filter(i=>!t.includes(i)),o=[...new Set(n.map(i=>i.category))].map(i=>n.filter(s=>s.category===i)),r=[...t];for(let i=0;r.length<a.length;i++)for(let s of o)s[i]&&r.push(s[i]);return r}var ke=a=>String(a).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase();function xe(a){let t=10**Math.floor(Math.log10(a));return[1,2,2.5,5,10].map(n=>n*t).reduce((n,o)=>Math.abs(o-a)<Math.abs(n-a)?o:n)}function we(a){let t=a.map(o=>o.from).sort((o,r)=>o-r),n=[...new Set([.2,.4,.6,.8].map(o=>xe(t[Math.floor(o*(t.length-1))])))];return n.map((o,r)=>[r?n[r-1]:0,o]).concat([[n[n.length-1],1/0]])}function tt({site:a,catalog:t,i18n:n,template:o,basePath:r="/",siteUrl:i=a.domain}){let s=U(r),c=u=>new URL(s(u),i).href,d=t.markets,p=(u,y)=>`${y.id}/${q(u.slug,y.lang,"en")}/`,m=[];for(let u of d){let y=u.lang,$=n[y]??n.en??n.vi,b=l=>q(l,y,"en"),v=ie(t,u),j=a.orderChannels?.[u.id]??["phone"],D=l=>I(l,u),k=a.installmentMonths??12,S=l=>D(Number.isInteger(l)&&l>=1e5?Math.ceil(l/k/1e3)*1e3:Math.ceil(l/k*100)/100),N=(l,f)=>b(l?.find(O=>O.id===f)?.name??f),w=l=>t.categories.find(f=>f.id===l.category),z={site:a,catalog:t,market:u,markets:d,lang:y,t:$,L:b,url:s,abs:c,channels:j,money:D,monthly:S,months:k,canSplit:l=>k>1&&w(l)?.installment!==!1,items:v,productPath:p,template:o,name:N,cat:w};m.push({path:`${u.id}/index.html`,html:re(z,{kind:"home"})});for(let l of v)m.push({path:`${p(l,u)}index.html`,html:re(z,{kind:"product",product:l})})}return m.push({path:"index.html",html:oe({site:a,markets:d,url:s,abs:c})}),m}function re(a,t){let{site:n,market:o,markets:r,lang:i,t:s,L:c,url:d,abs:p,catalog:m,productPath:u,channels:y,money:$}=a,b=t.kind==="home",v=t.product,j=b?`${o.id}/`:u(v,o),D=b?`${n.name} \xB7 ${c(n.tagline)}`:`${c(v.name)} \xB7 ${n.name}`,k=b?c(n.intro):`${c(v.description)} ${s.from} ${$(v.from)}.`,S=r.map(g=>b?{m:g,href:`${g.id}/`}:ie({products:[m.products.find(T=>T.id===v.id)]},g).length?{m:g,href:u(v,g)}:null).filter(Boolean),N=g=>S.find(T=>T.m.id===g.id)?.href??`${g.id}/`,w=r.find(g=>g.default)??r[0],M=n.theme??{},z=["primary","ink","bg","surface","soft","accent"].filter(g=>M[g]).map(g=>`--${g}:${M[g]}`).join(";"),l=r.map(g=>({id:g.id,lang:g.lang,country:g.country,currency:g.currency,href:d(N(g))})),f=y[0],O=p(C(b?n.heroImages?.[0]??a.items[0]?.image:v.image));return`<!doctype html>
<html lang="${e(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(D)}</title>
<meta name="description" content="${e(k)}">
<link rel="canonical" href="${p(j)}">
${S.map(({m:g,href:T})=>`<link rel="alternate" hreflang="${e(g.lang)}-${e(g.country)}" href="${p(T)}">`).join(`
`)}
${S.some(g=>g.m.id===w.id)?`<link rel="alternate" hreflang="x-default" href="${p(N(w))}">`:""}
<meta property="og:type" content="${b?"website":"product"}">
<meta property="og:title" content="${e(D)}">
<meta property="og:description" content="${e(k)}">
<meta property="og:url" content="${p(j)}">
<meta property="og:image" content="${e(O)}">
<meta property="og:site_name" content="${e(n.name)}">
<meta name="theme-color" content="${e(M.ink??"#14201A")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${ye}">
<link rel="stylesheet" href="${d("assets/style.css")}">
<style>:root{${z}}</style>
${b?R(Oe(a))+(n.faq?.length?R(Fe(a)):""):R(Ge(a,v))+R(Ie(a,v))}
<script src="${d("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(o.id)}" data-markets='${e(JSON.stringify(l))}' data-copied="${e(s.copied)}" data-wa="${e(P(n.contact.whatsapp??""))}" data-email="${e(n.contact.email??"")}">
<a class="skip" href="#main">${e(s.skip)}</a>
${J(s)}
${n.announcement?`<p class="announce">${e(c(n.announcement))}</p>`:""}
${De(a,b)}
<main id="main">
${b?[Se,Pe,je,Ne,Me,ze,Te,Ce,Le,qe].map(g=>g(a)).join(`
`):Ee(a,v)}
</main>
${Ae(a)}
<nav class="dock" aria-label="${e(s.nav.order)}">
  ${b?`<a href="#shop">${h("search",20)}<span>${e(s.nav.shop)}</span></a>`:`<a href="${d(`${o.id}/`)}#shop">${h("search",20)}<span>${e(s.nav.shop)}</span></a>`}
  <a class="primary" href="${e(b?L(f,n.contact):"#order")}" ${b?A(f):""}>${h(b?f:"bike",20)}<span>${e(b?s.nav.order:s.nav.buy)}</span></a>
</nav>
</body>
</html>
`}function De({site:a,market:t,markets:n,t:o,url:r},i){let s=i?"":r(`${t.id}/`),c=[[`${s}#types`,o.nav.types],[`${s}#shop`,o.nav.shop],[`${s}#service`,o.nav.service],[`${s}#visit`,o.nav.contact]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${r(`${t.id}/`)}">
      ${a.logo?`<img src="${e(x(r,a.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${h("bike",22)}</span>`}
      <span>${e(a.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${c.map(([d,p])=>`<a href="${d}">${e(p)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${e(o.market.label)}">${h("globe",18)}<span>${e(t.id.toUpperCase())}<span class="cur"> \xB7 ${e(K(t))}</span></span></summary>
        <ul>${n.map(d=>`<li><a href="${r(`${d.id}/`)}" hreflang="${e(d.lang)}"${d.id===t.id?' aria-current="true"':""}>${e(d.country)} \xB7 ${e(d.currency)}</a></li>`).join("")}</ul>
      </details>
      ${a.contact.phone?`<a class="btn btn--primary hide-sm" href="tel:${P(a.contact.phone)}">${h("phone",18)} ${e(a.contact.phone)}</a>`:""}
      <details class="mnav">
        <summary aria-label="${e(o.nav.openMenu)}">${h("menu",22)}</summary>
        <nav aria-label="Menu">${c.map(([d,p])=>`<a href="${d}">${e(p)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function Se(a){let{site:t,t:n,L:o,url:r,items:i,catalog:s,money:c,productPath:d,market:p}=a,m=t.heroImages?.[0]??i[0]?.image,u=i.find($=>$.id===t.featured)??i.find($=>$.badge)??i[0],y=s.categories.filter($=>i.some(b=>b.category===$.id)).length;return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${t.heroKicker?`<p class="hero-kicker">${h("bolt",16)} ${e(o(t.heroKicker))}</p>`:""}
      <h1>${e(o(t.tagline))}</h1>
      <p class="lead">${e(o(t.intro))}</p>
      <div class="actions">
        <a class="btn btn--accent btn--lg" href="#shop">${e(n.hero.shop)} ${h("arrow",18)}</a>
        ${t.contact.phone?`<a class="btn btn--glass btn--lg" href="tel:${P(t.contact.phone)}">${h("phone",18)} ${e(n.hero.call)}</a>`:""}
      </div>
      <dl class="stats">
        <div><dt>${e(n.hero.items)}</dt><dd>${i.length}</dd></div>
        <div><dt>${e(n.hero.kinds)}</dt><dd>${y}</dd></div>
        ${a.months>1?`<div><dt>${e(n.hero.split.replace("{n}",a.months))}</dt><dd>0%</dd></div>`:""}
      </dl>
    </div>
    <div class="hero-media">
      ${m?`<img src="${e(x(r,m))}" alt="" width="1200" height="825" fetchpriority="high">`:""}
      ${u?`<a class="hero-feat" href="${r(d(u,p))}">
        <img sizes="auto, 120px" src="${e(x(r,u.image))}" alt="" width="1024" height="768" loading="lazy">
        <span><small>${e(u.badge?o(u.badge):n.hero.featured)}</small><b>${e(o(u.name))}</b><em>${e(n.from)} ${e(c(u.from))}</em></span>
        ${h("arrow",18)}
      </a>`:""}
    </div>
  </div>
</section>`}function Pe({site:a,L:t}){return a.perks?.length?`<section class="perks" aria-label="${e(a.name)}">
  <ul class="wrap perk-list">${a.perks.map(n=>`<li>${h(n.icon??"check",22)}<div><b>${e(t(n.title))}</b>${n.text?`<span>${e(t(n.text))}</span>`:""}</div></li>`).join("")}</ul>
</section>`:""}function je({catalog:a,items:t,t:n,L:o,url:r}){let i=a.categories.map(c=>({...c,n:t.filter(d=>d.category===c.id).length})).filter(c=>c.n),s=(a.uses??[]).map(c=>({...c,n:t.filter(d=>d.uses?.includes(c.id)).length})).filter(c=>c.n);return i.length?`<section class="section" id="types" aria-labelledby="types-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="types-title" class="h2">${e(n.types.title)}</h2><p class="muted">${e(n.types.lead)}</p></div>
    <ul class="types">${i.map(c=>{let d=c.image??t.find(p=>p.category===c.id)?.image;return`<li><a href="?type=${e(c.id)}#shop" data-filter-link="type" data-value="${e(c.id)}">
      ${d?`<img sizes="auto, (max-width: 640px) 50vw, 280px" src="${e(x(r,d))}" alt="" width="1024" height="768" loading="lazy">`:""}
      <span class="type-name">${e(o(c.name))}</span><span class="type-n">${e(n.types.count.replace("{n}",c.n))}</span>
    </a></li>`}).join("")}</ul>
    ${s.length?`<div class="uses"><p>${e(n.types.byUse)}</p><ul>${s.map(c=>`<li><a class="pill" href="?use=${e(c.id)}#shop" data-filter-link="use" data-value="${e(c.id)}">${e(o(c.name))} <small>${c.n}</small></a></li>`).join("")}</ul></div>`:""}
  </div>
</section>`:""}function le(a,t,n=0){let{t:o,L:r,url:i,money:s,monthly:c,canSplit:d,productPath:p,market:m,catalog:u,name:y,cat:$}=a,b=[r(t.name),t.name?.vi,t.name?.en,r($(t)?.name),$(t)?.name?.vi,...(t.uses??[]).map(v=>y(u.uses,v)),r(t.key)].filter(Boolean).join(" ");return`<li class="card${n>=se?" is-more":""}" data-type="${e(t.category)}" data-use="${e((t.uses??[]).join(" "))}" data-price="${t.from}" data-name="${e(ke(b))}">
  <a class="card-link" href="${i(p(t,m))}">
    <div class="card-img"><img sizes="auto, (max-width: 640px) 50vw, 280px" src="${e(x(i,t.image))}" alt="${e(r(t.name))}" width="1024" height="768" loading="lazy">${t.badge?`<span class="tag">${e(r(t.badge))}</span>`:""}${t.range?`<span class="range-chip">${h("bolt",14)} ${t.range} km</span>`:""}</div>
    <p class="card-cat">${e(r($(t)?.name))}</p>
    <h3>${e(r(t.name))}</h3>
    ${t.key?`<p class="card-key">${e(r(t.key))}</p>`:""}
    <p class="card-foot">
      <span class="card-price"><small>${e(t.variants.length>1?o.from:"")}</small> ${e(s(t.from))}</span>
      ${t.colors?.length?`<span class="dots" aria-hidden="true">${t.colors.map(v=>`<i style="background:${e(v.hex)}"></i>`).join("")}</span>`:""}
    </p>
    ${d(t)?`<p class="card-inst">${e(o.installmentShort.replace("{price}",c(t.from)))}</p>`:""}
  </a>
</li>`}function Ne(a){let{items:t,catalog:n,t:o,L:r,money:i}=a,s=n.categories.filter(m=>t.some(u=>u.category===m.id)),c=(n.uses??[]).filter(m=>t.some(u=>u.uses?.includes(m.id))),d=t.length>4?we(t):[],p=([m,u])=>m?u===1/0?o.shop.over.replace("{a}",i(m)):`${i(m)} \u2013 ${i(u)}`:o.shop.under.replace("{b}",i(u));return`<section class="section section--soft" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="shop-head">
      <h2 id="shop-title" class="h2">${e(o.shop.title)}</h2>
      <p class="muted" data-count="${e(o.shop.count)}">${e(o.shop.count.replace("{n}",t.length))}</p>
    </div>
    <div class="toolbar" data-toolbar>
      <div class="chips" role="group" aria-label="${e(o.shop.all)}">
        <button type="button" class="pill is-on" data-type="">${e(o.shop.all)}</button>
        ${s.map(m=>`<button type="button" class="pill" data-type="${e(m.id)}">${e(r(m.name))}</button>`).join("")}
      </div>
      <div class="filters">
        <label class="search">${h("search",18)}<input type="search" placeholder="${e(o.search)}" aria-label="${e(o.search)}" data-search></label>
        <label class="select"><span class="sr">${e(o.shop.use)}</span><select data-use><option value="">${e(o.shop.anyUse)}</option>${c.map(m=>`<option value="${e(m.id)}">${e(r(m.name))}</option>`).join("")}</select></label>
        <label class="select"><span class="sr">${e(o.shop.price)}</span><select data-band><option value="">${e(o.shop.anyPrice)}</option>${d.map(m=>`<option value="${m[0]}-${m[1]===1/0?"":m[1]}">${e(p(m))}</option>`).join("")}</select></label>
        <label class="select"><span class="sr">${e(o.shop.sort)}</span><select data-sort>
          <option value="">${e(o.shop.sortPop)}</option><option value="asc">${e(o.shop.sortLow)}</option><option value="desc">${e(o.shop.sortHigh)}</option>
        </select></label>
      </div>
    </div>
    <ul class="grid" data-grid>${$e(t).map((m,u)=>le(a,m,u)).join("")}</ul>
    <p class="empty muted" data-empty hidden>${e(o.shop.empty)}</p>
    ${t.length>se?`<div class="more"><button type="button" class="btn btn--line btn--lg" data-more hidden>${e(o.shop.more)}</button></div>`:""}
  </div>
</section>`}function Me({items:a,t,L:n,url:o,productPath:r,market:i,money:s}){let c=a.filter(p=>p.range).sort((p,m)=>m.range-p.range).slice(0,8);if(c.length<3)return"";let d=c[0].range;return`<section class="section range" aria-labelledby="range-title">
  <div class="wrap range-grid">
    <div>
      <p class="kicker">${h("bolt",16)} ${e(t.range.kicker)}</p>
      <h2 id="range-title" class="h2">${e(t.range.title)}</h2>
      <p class="lead">${e(t.range.lead)}</p>
      <p class="muted small">${e(t.range.note)}</p>
    </div>
    <ol class="bars">${c.map(p=>`<li><a href="${o(r(p,i))}">
      <span class="bar-name">${e(n(p.name))}<small>${e(s(p.from))}</small></span>
      <span class="bar-track"><span class="bar-fill" style="--w:${Math.round(p.range/d*100)}%"></span></span>
      <b class="bar-km">${p.range} km</b>
    </a></li>`).join("")}</ol>
  </div>
</section>`}function ze({site:a,t,L:n,market:o,money:r}){return a.services?.length?`<section class="section section--soft" id="service" aria-labelledby="svc-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="svc-title" class="h2">${e(t.service.title)}</h2>${a.serviceIntro?`<p class="muted">${e(n(a.serviceIntro))}</p>`:""}</div>
    <ul class="svc">${a.services.map(i=>{let s=i.basePrice===0?0:i.basePrice!=null?G(i,o):null;return`<li>${h(i.icon??"wrench",24)}<h3>${e(n(i.title))}</h3><p class="muted">${e(n(i.text))}</p>${s!=null?`<p class="svc-price">${s===0?e(t.service.free):`${e(t.from)} <b>${e(r(s))}</b>`}</p>`:""}</li>`}).join("")}</ul>
  </div>
</section>`:""}function Te({site:a,L:t,url:n}){let o=a.story;return o?`<section class="section" aria-labelledby="story-title">
  <div class="wrap story">
    ${o.image?`<figure class="story-img"><img sizes="auto, (max-width: 640px) 100vw, 580px" src="${e(x(n,o.image))}" alt="" width="1024" height="658" loading="lazy"></figure>`:""}
    <div><h2 id="story-title" class="h2">${e(t(o.title))}</h2>${o.body?`<p class="lead">${e(t(o.body))}</p>`:""}</div>
  </div>
</section>`:""}function Ce({site:a,t,L:n,lang:o}){let r=Y(a,t,o,"btn btn--line"),i=Q(a);return a.showReviews===!1||!i.length&&!r?"":`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(t.reviews.title)}</h2>
    ${te(i,o,"reviews",s=>`<figure class="review">
      <p class="stars" aria-label="${e(s.rating)}/5">${Array.from({length:5},(c,d)=>`<span class="${d<s.rating?"on":""}">${h("star",16)}</span>`).join("")}</p>
      <blockquote>${e(n(s.text))}</blockquote>
      <figcaption>${e(s.name)}${s.bought?`<small>${e(n(s.bought))}</small>`:""}${ee(s,o)}</figcaption>
    </figure>`)}${r}
  </div>
</section>`}function Le({site:a,t,L:n}){return a.faq?.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap faq">
    <h2 id="faq-title" class="h2">${e(t.faq.title)}</h2>
    <div>${a.faq.map((o,r)=>`<details${r===0?" open":""}><summary>${e(n(o.q))}</summary><p>${e(n(o.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Re(a,t){let n=new Map;for(let o of a){let r=[...o.days].sort().join(",");n.has(r)||n.set(r,{days:o.days,slots:[]}),n.get(r).slots.push(`${o.open} \u2013 ${o.close}`)}return[...n.values()].map(o=>({label:o.days.length===7?t.visit.everyDay??t.days.join(", "):H(o.days,t.days),slots:o.slots.join(", ")}))}function qe({site:a,t,L:n,channels:o}){let r=encodeURIComponent(a.contact.mapQuery??n(a.contact.address));return`<section class="section section--soft" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div>
      <h2 id="visit-title" class="h2">${e(t.visit.title)}</h2>
      ${Z(a,t)}
      <h3 class="h4">${h("clock",18)} ${e(t.visit.hours)}</h3>
      <table class="hours"><tbody>${Re(a.hours,t).map(i=>`<tr><th scope="row">${e(i.label)}</th><td>${e(i.slots)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${h("pin",18)} ${e(t.visit.address)}</h3>
      <p>${e(n(a.contact.address))}</p>
      <div class="actions">
        <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${r}" target="_blank" rel="noopener">${e(t.visit.directions)} ${h("arrow",16)}</a>
        ${o.map(i=>`<a class="btn btn--line" href="${e(L(i,a.contact))}" ${A(i)}>${h(i,18)} ${e(t.via[i])}</a>`).join("")}
      </div>
    </div>
    <div class="map"><iframe title="${e(t.visit.address)}" src="https://www.google.com/maps?q=${r}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function Ee(a,t){let{site:n,t:o,L:r,url:i,money:s,monthly:c,months:d,canSplit:p,market:m,items:u,channels:y,catalog:$,name:b,cat:v}=a,j=p(t),D=t.variants.map(l=>({size:r(l.size)||"",price:s(l.price),inst:j?o.installment.replace("{price}",c(l.price)).replace("{n}",d):""})),k=t.variants.reduce((l,f)=>f.price<l.price?f:l),S=v(t),N=[...u.filter(l=>l.id!==t.id&&l.category===t.category),...u.filter(l=>l.id!==t.id&&l.category!==t.category&&l.uses?.some(f=>t.uses?.includes(f)))].slice(0,8),w=i(`${m.id}/`),M=o.orderText.replace("{product}",r(t.name)).replace("{version}",r(k.size)||"").replace("{price}",s(k.price)).replace(/\{\w+\}/g,"\u2026"),z=l=>typeof l=="object"?r(l):String(l);return`<div class="wrap crumbs"><a href="${w}">${e(o.nav.home)}</a>${h("chevron",14)}<a href="${w}?type=${e(t.category)}#shop">${e(r(S?.name))}</a>${h("chevron",14)}<span aria-current="page">${e(r(t.name))}</span></div>
<section class="wrap pdp" data-product data-name="${e(r(t.name))}" data-sizes='${e(JSON.stringify(D))}' data-text="${e(o.orderText)}">
  ${Be(a,t)}
  <div class="pdp-info">
    <p class="kicker">${e(r(S?.name))}</p>
    <h1 class="pdp-title">${e(r(t.name))}</h1>
    <p class="pdp-price"><strong data-v="price">${e(s(k.price))}</strong></p>
    ${j?`<p class="pdp-inst">${h("card",18)} <span data-v="inst">${e(D[t.variants.indexOf(k)].inst)}</span></p>`:""}
    <p class="lead">${e(r(t.description))}</p>
    ${t.variants.length>1?`<fieldset class="opts"><legend>${e(o.product.version)}</legend><div class="opt-row">
      ${t.variants.map((l,f)=>`<label class="opt"><input type="radio" name="size" value="${f}"${l===k?" checked":""}><span><b>${e(r(l.size))}</b><small>${e(s(l.price))}</small></span></label>`).join("")}
    </div></fieldset>`:""}
    ${t.colors?.length?`<fieldset class="opts"><legend>${e(o.product.color)}: <span data-v="color">${e(r(t.colors[0].name))}</span></legend><div class="swatches">
      ${t.colors.map((l,f)=>`<label class="sw" title="${e(r(l.name))}"><input type="radio" name="color" value="${e(r(l.name))}"${f?"":" checked"}><span style="background:${e(l.hex)}"></span><b class="sr">${e(r(l.name))}</b></label>`).join("")}
    </div></fieldset>`:""}
    ${t.frames?.length?`<fieldset class="opts"><legend>${e(o.product.frame)}</legend><div class="opt-row">
      ${t.frames.map((l,f)=>`<label class="opt opt--sm"><input type="radio" name="frame" value="${e(r(l))}"${f===Math.floor((t.frames.length-1)/2)?" checked":""}><span><b>${e(r(l))}</b></span></label>`).join("")}
    </div></fieldset>`:""}
    ${t.uses?.length?`<p class="use-tags">${t.uses.map(l=>`<a href="${w}?use=${e(l)}#shop">${e(b($.uses,l))}</a>`).join("")}</p>`:""}
    ${n.promises?.length?`<ul class="promises">${n.promises.map(l=>`<li>${h(l.icon??"check",18)} ${e(r(l.text))}</li>`).join("")}</ul>`:""}
    <form class="order" id="order" data-compose>
      <h2 class="h4">${h("bike",20)} ${e(o.product.orderTitle)}</h2>
      <div class="intents" role="radiogroup" aria-label="${e(o.product.orderTitle)}">${o.product.intents.map((l,f)=>`<label class="intent"><input type="radio" name="intent" value="${e(l)}"${f?"":" checked"}><span>${e(l)}</span></label>`).join("")}</div>
      <div class="fields">
        <label><span>${e(o.product.name)}</span><input name="name" autocomplete="name"></label>
        <label><span>${e(o.product.phone)}</span><input name="phone" type="tel" autocomplete="tel"></label>
        <label><span>${e(o.product.date)}</span><input type="date" name="date"></label>
        <label><span>${e(o.product.address)}</span><input name="address" autocomplete="street-address"></label>
        <label class="wide"><span>${e(o.product.note)}</span><textarea name="note" rows="2" placeholder="${e(o.product.noteHint)}"></textarea></label>
      </div>
      <div class="buy">${y.map((l,f)=>`<button type="submit" class="btn ${f?"btn--line":"btn--primary"} btn--lg" data-channel="${e(l)}" data-href="${e(L(l,n.contact,M))}">${h(l,18)} ${e(l==="phone"?o.product.call:o.product.send.replace("{channel}",o.via[l]))}</button>`).join("")}</div>
      <noscript><p>${y.map(l=>`<a href="${e(L(l,n.contact,M))}" ${A(l)}>${e(o.via[l])}</a>`).join(" \xB7 ")}</p></noscript>
      <p class="form-msg" role="status" hidden></p>
      <p class="muted small">${h("check",16)} ${e(o.product.reply)}</p>
    </form>
    ${ae(a.market.lang)}
  </div>
</section>
${t.specs?.length?`<section class="section section--tight"><div class="wrap specs">
  <h2 class="h3">${e(o.product.specs)}</h2>
  <table><tbody>${t.specs.map(([l,f])=>`<tr><th scope="row">${e(o.specs[l]??l)}</th><td>${e(z(f))}</td></tr>`).join("")}</tbody></table>
</div></section>`:""}
${N.length?`<section class="section section--soft"><div class="wrap">
  <h2 class="h3">${e(o.product.related)}</h2>
  <ul class="grid grid--related">${N.map(l=>le(a,l)).join("")}</ul>
</div></section>`:""}`}function Be({t:a,L:t,url:n},o){let r=[o.image,...o.images??[]],i=a.gallery,s=t(o.name),c=o.badge?`<span class="tag">${e(t(o.badge))}</span>`:"";return r.length===1?`<figure class="pdp-img"><img src="${e(x(n,o.image))}" alt="${e(s)}" width="1024" height="768" fetchpriority="high">${c}</figure>`:`<figure class="pdp-img gallery" data-gallery data-label="${e(i.photo)}">
    <div class="g-stage">
      <ul class="g-track" tabindex="0" aria-label="${e(i.label)}">${r.map((d,p)=>`<li id="g-${p+1}"><a href="${e(x(n,d))}" data-zoom="${p}" aria-label="${e(i.zoom)}: ${e(i.photo.replace("{i}",p+1).replace("{n}",r.length))}"><img sizes="auto, (max-width: 640px) 100vw, 580px" src="${e(x(n,d))}" alt="${e(p?`${s} \u2013 ${i.photo.replace("{i}",p+1).replace("{n}",r.length)}`:s)}" width="1024" height="768"${p?' loading="lazy"':' fetchpriority="high"'}></a></li>`).join("")}</ul>
      ${c}
      <button type="button" class="g-nav g-prev" data-step="-1" aria-label="${e(i.prev)}">${h("chevron",22)}</button>
      <button type="button" class="g-nav g-next" data-step="1" aria-label="${e(i.next)}">${h("chevron",22)}</button>
      <span class="g-count" aria-hidden="true"><b data-g-i>1</b> / ${r.length}</span>
    </div>
    <ul class="g-thumbs">${r.map((d,p)=>`<li><a href="#g-${p+1}" data-go="${p}"${p?"":' aria-current="true"'} aria-label="${e(i.photo.replace("{i}",p+1).replace("{n}",r.length))}"><img sizes="auto, 120px" src="${e(x(n,d))}" alt="" width="1024" height="768" loading="lazy"></a></li>`).join("")}</ul>
  </figure>
  <dialog class="lightbox" data-lightbox aria-label="${e(s)}">
    <img src="" alt="${e(s)}" data-lb-img>
    <button type="button" class="lb-close" data-lb-close aria-label="${e(i.close)}">\u2715</button>
    <button type="button" class="g-nav g-prev" data-lb-step="-1" aria-label="${e(i.prev)}">${h("chevron",26)}</button>
    <button type="button" class="g-nav g-next" data-lb-step="1" aria-label="${e(i.next)}">${h("chevron",26)}</button>
    <span class="g-count"><b data-lb-i>1</b> / ${r.length}</span>
  </dialog>`}function Ae({site:a,t,L:n,market:o}){let r=a.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(a.name)}</p><p class="muted">${e(n(a.tagline))}</p></div>
    <div><p class="foot-h">${e(t.footer.contact)}</p><ul>
      ${r.phone?`<li>${e(t.footer.hotline)}: <a href="tel:${P(r.phone)}">${e(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${e(r.email)}">${e(r.email)}</a></li>`:""}
      <li>${e(n(r.address))}</li></ul></div>
    ${a.social?`<div><p class="foot-h">${e(t.footer.follow)}</p><ul>${Object.entries(a.social).filter(([,i])=>i).map(([i,s])=>`<li><a href="${e(s)}" target="_blank" rel="noopener">${e(i==="tiktok"?"TikTok":i==="youtube"?"YouTube":i[0].toUpperCase()+i.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${a.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(a.name)}</span>${ne(a,t,o.lang)}</div>
</footer>`}function Oe({site:a,market:t,L:n,abs:o,items:r}){return{"@context":"https://schema.org","@type":"BikeStore",name:a.name,url:o(`${t.id}/`),image:o(C(a.heroImages?.[0]??r[0]?.image)),description:n(a.intro),telephone:a.contact.phone,email:a.contact.email,address:{"@type":"PostalAddress",streetAddress:n(a.contact.address)},currenciesAccepted:t.currency,openingHoursSpecification:_(a.hours)}}var Fe=({site:a,L:t})=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:a.faq.map(n=>({"@type":"Question",name:t(n.q),acceptedAnswer:{"@type":"Answer",text:t(n.a)}}))});function Ge({site:a,market:t,L:n,abs:o,productPath:r,cat:i},s){return{"@context":"https://schema.org","@type":"Product",name:n(s.name),description:n(s.description),image:[s.image,...s.images??[]].map(c=>o(C(c))),url:o(r(s,t)),category:n(i(s)?.name),...s.colors?.length?{color:s.colors.map(c=>n(c.name)).join(", ")}:{},offers:s.variants.map(c=>({"@type":"Offer",name:[n(s.name),n(c.size)].filter(Boolean).join(" \u2013 "),price:c.price,priceCurrency:t.currency,availability:"https://schema.org/InStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:a.name}}))}}function Ie({market:a,L:t,abs:n,productPath:o,t:r,cat:i},s){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:r.nav.home,item:n(`${a.id}/`)},{"@type":"ListItem",position:2,name:t(i(s)?.name),item:n(`${a.id}/?type=${s.category}`)},{"@type":"ListItem",position:3,name:t(s.name),item:n(o(s,a))}]}}export{tt as renderSite};
