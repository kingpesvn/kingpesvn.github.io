var pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t=(a="")=>String(a).replace(/[&<>"']/g,e=>pe[e]);function E(a,e,n="vi"){return a==null?"":typeof a!="object"?String(a):a[e]??a[n]??Object.values(a)[0]??""}var de={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},G=a=>de[a]??"en-US";function he(a,e="1"){if(e==="0.99")return Math.max(.99,Math.ceil(a)-.01);let n=Number(e)||1;return Math.max(n,Math.round(a/n)*n)}function A(a,e){if(e.default)return a.basePrice;let n=a.prices?.[e.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:he(a.basePrice*e.rate,e.rounding)}var ue=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function U(a,e){let n={style:"currency",currency:e.currency};return ue.has(e.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(G(e.lang),n).format(a)}function V(a="/"){let e=a.endsWith("/")?a:`${a}/`;return(n="")=>e+String(n).replace(/^\//,"")}var L=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,x=(a,e)=>{let n=L(e);return n==null?e:a(n)},M=(a="")=>String(a).replace(/\D/g,"");function R(a,e,n=""){switch(a){case"phone":return`tel:${M(e.phone)}`;case"zalo":return`https://zalo.me/${M(e.zalo||e.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(e.messenger)}`;case"whatsapp":return`https://wa.me/${M(e.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(e.kakao)}/chat`;case"email":return`mailto:${e.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var q=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`,me=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function W(a){if(!a||typeof a!="string")return null;let e;try{e=new URL(a.trim())}catch{return{error:"not-google"}}if(e.hostname==="forms.gle")return{error:"short-link"};let n=e.hostname==="docs.google.com"&&e.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!n)return{error:"not-google"};let o={};for(let[r,i]of e.searchParams){if(!/^entry\.\d+$/.test(r))continue;let s=i.trim().replace(/^\{|\}$/g,"").toLowerCase();me.includes(s)&&(o[s]=r)}return Object.keys(o).length?o.phone?{action:`https://docs.google.com/forms/d/e/${n[1]}/formResponse`,fields:o}:{error:"no-phone"}:{error:"no-fields"}}var ge={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},m=(a,e=20,n="")=>`<svg class="i" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${ge[a]??""}</svg>`,B=[1,2,3,4,5,6,0],fe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function K(a,e){let n=a.map(r=>B.indexOf(r)).sort((r,i)=>r-i);return n.every((r,i)=>i===0||r===n[i-1]+1)&&n.length>2?`${e[B[n[0]]]} \u2013 ${e[B[n.at(-1)]]}`:n.map(r=>e[B[r]]).join(", ")}var J=a=>a.map(e=>({"@type":"OpeningHoursSpecification",dayOfWeek:e.days.map(n=>fe[n]),opens:e.open,closes:e.close}));function Z(a){return new Intl.NumberFormat(G(a.lang),{style:"currency",currency:a.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??a.currency}var F=a=>a==="phone"||a==="email"?"":'target="_blank" rel="noopener"',Y=a=>`<div class="suggest" id="market-suggest" data-suggest="${t(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${t(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${t(a.market.dismiss)}">\xD7</button>
</div>`,X=(a,e)=>`<p class="status" data-open-status data-hours='${t(JSON.stringify(a.hours))}' data-tz="${t(a.timezone??"Asia/Ho_Chi_Minh")}" data-open="${t(e.visit.open)}" data-closed="${t(e.visit.closed)}" hidden></p>`,H={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},be=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,ve=a=>{try{let e=new URL(String(a.googleReview??"").trim());return e.protocol==="https:"&&be.test(e.hostname)?e.href:""}catch{return""}},Q=(a,e,n,o="btn btn--line")=>{let r=ve(a);if(!r)return"";let i=typeof e.reviews=="object"&&e.reviews?.google||H[n]||H.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${o}" href="${t(r)}" target="_blank" rel="noopener">${m("star",16)} ${t(i)}</a></p>`},O={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},ee={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},te=a=>(a.reviews??[]).filter(e=>e&&(e.name||e.text)&&!(typeof e.text=="object"&&e.text&&!Object.values(e.text).some(Boolean)&&!e.name));function ae(a,e){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(a?.date??"").trim());if(!n)return"";let o=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(o.getTime()))return"";let r=new Intl.DateTimeFormat(ee[e]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(o);return`<time class="rv-date" datetime="${t(a.date)}">${t(r)}</time>`}function ye(a,e){let n=a.filter(s=>s.rating>=1&&s.rating<=5);if(n.length<2)return"";let o=n.reduce((s,p)=>s+Number(p.rating),0)/n.length,r=O[e]??O.en,i=new Intl.NumberFormat(ee[e]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(o);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${m("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${t(r.count.replace("{n}",String(a.length)))}</span></p>`}function ne(a,e,n,o){if(!a.length)return"";let r=O[e]??O.en,i=s=>`<button type="button" class="rv-btn" data-rv-${s} aria-label="${t(s==="prev"?r.prev:r.next)}">${m("arrow",18,s==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${ye(a,e)}<div class="rv" data-rv data-more="${t(r.more)}" data-less="${t(r.less)}">
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
upd()}})()<\/script>`,_={vi:{label:"Chia s\u1EBB",native:"G\u1EEDi qua Zalo, Messenger\u2026",copy:"Sao ch\xE9p link",copied:"\u0110\xE3 sao ch\xE9p"},en:{label:"Share",native:"Send via apps\u2026",copy:"Copy link",copied:"Copied"},ja:{label:"\u30B7\u30A7\u30A2",native:"\u30A2\u30D7\u30EA\u3067\u9001\u308B\u2026",copy:"\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC",copied:"\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F"},ko:{label:"\uACF5\uC720",native:"\uC571\uC73C\uB85C \uBCF4\uB0B4\uAE30\u2026",copy:"\uB9C1\uD06C \uBCF5\uC0AC",copied:"\uBCF5\uC0AC\uB428"},zh:{label:"\u5206\u4EAB",native:"\u901A\u8FC7\u5E94\u7528\u53D1\u9001\u2026",copy:"\u590D\u5236\u94FE\u63A5",copied:"\u5DF2\u590D\u5236"},th:{label:"\u0E41\u0E0A\u0E23\u0E4C",native:"\u0E2A\u0E48\u0E07\u0E1C\u0E48\u0E32\u0E19\u0E41\u0E2D\u0E1B\u2026",copy:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C",copied:"\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E41\u0E25\u0E49\u0E27"},id:{label:"Bagikan",native:"Kirim lewat aplikasi\u2026",copy:"Salin tautan",copied:"Tersalin"},es:{label:"Compartir",native:"Enviar por apps\u2026",copy:"Copiar enlace",copied:"Copiado"},fr:{label:"Partager",native:"Envoyer via une app\u2026",copy:"Copier le lien",copied:"Copi\xE9"},de:{label:"Teilen",native:"Per App senden\u2026",copy:"Link kopieren",copied:"Kopiert"},pt:{label:"Compartilhar",native:"Enviar por apps\u2026",copy:"Copiar link",copied:"Copiado"},ru:{label:"\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",native:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u2026",copy:"\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",copied:"\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}};function oe(a){let e=_[a]??_.en,n="display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 12px;border:1px solid currentColor;border-radius:999px;background:none;color:inherit;font:inherit;font-size:13px;text-decoration:none;cursor:pointer;opacity:.85";return`<div class="kp-share" data-share data-copied="${t(e.copied)}" style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:18px;font-size:13px">
      <span style="opacity:.65">${t(e.label)}</span>
      <button type="button" data-share-native hidden style="${n}">${m("share",15)} ${t(e.native)}</button>
      <a data-share-fb href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener" style="${n}">${m("facebook",15)} Facebook</a>
      <button type="button" data-share-copy style="${n}">${m("link",15)} <span>${t(e.copy)}</span></button>
    </div>`}var re=(a,e,n)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${t(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${t(e.footer.madeWith)}</a>`;function se({site:a,markets:e,url:n,abs:o}){let r=e.find(s=>s.default)??e[0],i=e.map(s=>({id:s.id,lang:s.lang,country:s.country}));return`<!doctype html>
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
`}var ke="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",le=24;function ce(a,e){return a.products.map(n=>({...n,variants:n.variants.map(o=>({...o,price:A(o,e)})).filter(o=>o.price!=null)})).filter(n=>n.variants.length>0).map(n=>{let o=Math.min(...n.variants.map(i=>i.price)),r=n.was?A({basePrice:n.was,prices:n.wasPrices},e):null;return{...n,from:o,was:r&&r>o?r:null}})}function xe(a){let e=a.filter(i=>i.badge),n=a.filter(i=>!e.includes(i)),o=[...new Set(n.map(i=>i.category))].map(i=>n.filter(s=>s.category===i)),r=[...e];for(let i=0;r.length<a.length;i++)for(let s of o)s[i]&&r.push(s[i]);return r}var we=a=>String(a).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase();function De(a){let e=10**Math.floor(Math.log10(a));return[1,2,2.5,5,10].map(n=>n*e).reduce((n,o)=>Math.abs(o-a)<Math.abs(n-a)?o:n)}function Se(a){let e=a.map(o=>o.from).sort((o,r)=>o-r),n=[...new Set([.2,.4,.6,.8].map(o=>De(e[Math.floor(o*(e.length-1))])))];return n.map((o,r)=>[r?n[r-1]:0,o]).concat([[n[n.length-1],1/0]])}function at({site:a,catalog:e,i18n:n,template:o,basePath:r="/",siteUrl:i=a.domain}){let s=V(r),p=g=>new URL(s(g),i).href,h=e.markets,u=(g,l)=>`${l.id}/${E(g.slug,l.lang,"en")}/`,y=W(a.orderForm),w=y&&!y.error?y:null,$=[];for(let g of h){let l=g.lang,d=n[l]??n.en??n.vi,D=v=>E(v,l,"en"),S=ce(e,g),N=a.orderChannels?.[g.id]??["phone"],k={site:a,catalog:e,market:g,markets:h,lang:l,t:d,L:D,url:s,abs:p,channels:N,money:v=>U(v,g),items:S,productPath:u,template:o,name:(v,P)=>D(v?.find(c=>c.id===P)?.name??P),cat:v=>e.categories.find(P=>P.id===v.category),gform:w};$.push({path:`${g.id}/index.html`,html:ie(k,{kind:"home"})});for(let v of S)$.push({path:`${u(v,g)}index.html`,html:ie(k,{kind:"product",product:v})})}return $.push({path:"index.html",html:se({site:a,markets:h,url:s,abs:p})}),$}function ie(a,e){let{site:n,market:o,markets:r,lang:i,t:s,L:p,url:h,abs:u,catalog:y,productPath:w,channels:$,money:g}=a,l=e.kind==="home",d=e.product,D=l?`${o.id}/`:w(d,o),S=l?`${n.name} \xB7 ${p(n.tagline)}`:`${p(d.name)} \xB7 ${n.name}`,N=l?p(n.intro):`${p(d.description)} ${g(d.from)}.`,z=r.map(f=>l?{m:f,href:`${f.id}/`}:ce({products:[y.products.find(C=>C.id===d.id)]},f).length?{m:f,href:w(d,f)}:null).filter(Boolean),T=f=>z.find(C=>C.m.id===f.id)?.href??`${f.id}/`,j=r.find(f=>f.default)??r[0],k=n.theme??{},v=["primary","ink","bg","surface","soft","accent"].filter(f=>k[f]).map(f=>`--${f}:${k[f]}`).join(";"),P=r.map(f=>({id:f.id,lang:f.lang,country:f.country,currency:f.currency,href:h(T(f))})),c=$[0],b=u(L(l?n.heroImages?.[0]??a.items[0]?.image:d.image));return`<!doctype html>
<html lang="${t(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t(S)}</title>
<meta name="description" content="${t(N)}">
<link rel="canonical" href="${u(D)}">
${z.map(({m:f,href:C})=>`<link rel="alternate" hreflang="${t(f.lang)}-${t(f.country)}" href="${u(C)}">`).join(`
`)}
${z.some(f=>f.m.id===j.id)?`<link rel="alternate" hreflang="x-default" href="${u(T(j))}">`:""}
<meta property="og:type" content="${l?"website":"product"}">
<meta property="og:title" content="${t(S)}">
<meta property="og:description" content="${t(N)}">
<meta property="og:url" content="${u(D)}">
<meta property="og:image" content="${t(b)}">
<meta property="og:site_name" content="${t(n.name)}">
<meta name="theme-color" content="${t(k.bg??"#F6F2EC")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${ke}">
<link rel="stylesheet" href="${h("assets/style.css")}">
<style>:root{${v}}</style>
${l?q(Ge(a))+(n.faq?.length?q(Ae(a)):""):q(Ie(a,d))+q(Ue(a,d))}
<script src="${h("assets/site.js")}" defer><\/script>
</head>
<body data-market="${t(o.id)}" data-markets='${t(JSON.stringify(P))}' data-copied="${t(s.copied)}" data-wa="${t(M(n.contact.whatsapp??""))}" data-email="${t(n.contact.email??"")}">
<a class="skip" href="#main">${t(s.skip)}</a>
${Y(s)}
${n.announcement?`<p class="announce">${t(p(n.announcement))}</p>`:""}
${ze(a,l)}
<main id="main">
${l?[je,Pe,Ne,Me,Te,Ce,Le,Re,Ee].map(f=>f(a)).join(`
`):Be(a,d)}
</main>
${Fe(a)}
<nav class="dock" aria-label="${t(s.nav.order)}">
  ${l?`<a href="#shop">${m("search",20)}<span>${t(s.nav.shop)}</span></a>`:`<a href="${h(`${o.id}/`)}#shop">${m("search",20)}<span>${t(s.nav.shop)}</span></a>`}
  <a class="primary" href="${t(l?R(c,n.contact):"#order")}" ${l?F(c):""}>${m(l?c:"bag",20)}<span>${t(l?s.nav.order:s.nav.buy)}</span></a>
</nav>
</body>
</html>
`}function ze({site:a,market:e,markets:n,t:o,url:r},i){let s=i?"":r(`${e.id}/`),p=[[`${s}#cats`,o.nav.cats],[`${s}#shop`,o.nav.shop],[`${s}#story`,o.nav.story],[`${s}#visit`,o.nav.contact]];return`<header class="header">
  <div class="wrap bar">
    <nav class="nav" aria-label="Menu">${p.map(([h,u])=>`<a href="${h}">${t(u)}</a>`).join("")}</nav>
    <a class="brand" href="${r(`${e.id}/`)}">
      ${a.logo?`<img src="${t(x(r,a.logo))}" alt="" width="40" height="40">`:""}
      <span>${t(a.name)}</span>
    </a>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${t(o.market.label)}">${m("globe",18)}<span>${t(e.id.toUpperCase())}<span class="cur"> \xB7 ${t(Z(e))}</span></span></summary>
        <ul>${n.map(h=>`<li><a href="${r(`${h.id}/`)}" hreflang="${t(h.lang)}"${h.id===e.id?' aria-current="true"':""}>${t(h.country)} \xB7 ${t(h.currency)}</a></li>`).join("")}</ul>
      </details>
      ${a.contact.phone?`<a class="btn btn--primary hide-sm" href="tel:${M(a.contact.phone)}">${m("phone",18)} ${t(a.contact.phone)}</a>`:""}
      <details class="mnav">
        <summary aria-label="${t(o.nav.openMenu)}">${m("menu",22)}</summary>
        <nav aria-label="Menu">${p.map(([h,u])=>`<a href="${h}">${t(u)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function je({site:a,t:e,L:n,url:o,items:r}){let i=a.heroImages?.[0]??r[0]?.image;return`<section class="hero">
  ${i?`<img class="hero-bg" src="${t(x(o,i))}" alt="" width="1280" height="720" fetchpriority="high">`:""}
  <div class="wrap hero-copy">
    ${a.heroKicker?`<p class="hero-kicker">${t(n(a.heroKicker))}</p>`:""}
    <h1>${t(n(a.tagline))}</h1>
    <p class="lead">${t(n(a.intro))}</p>
    <div class="actions">
      <a class="btn btn--light btn--lg" href="#shop">${t(e.hero.shop)} ${m("arrow",18)}</a>
      <a class="btn btn--glass btn--lg" href="#cats">${t(e.hero.cats)}</a>
    </div>
  </div>
</section>`}function Pe({site:a,L:e}){return a.perks?.length?`<section class="perks" aria-label="${t(a.name)}">
  <ul class="wrap perk-list">${a.perks.map(n=>`<li>${m(n.icon??"check",22)}<div><b>${t(e(n.title))}</b>${n.text?`<span>${t(e(n.text))}</span>`:""}</div></li>`).join("")}</ul>
</section>`:""}function Ne({catalog:a,items:e,t:n,L:o,url:r}){let i=a.categories.map(p=>({...p,n:e.filter(h=>h.category===p.id).length})).filter(p=>p.n),s=(a.uses??[]).map(p=>({...p,n:e.filter(h=>h.uses?.includes(p.id)).length})).filter(p=>p.n);return i.length?`<section class="section" id="cats" aria-labelledby="cats-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="cats-title" class="h2">${t(n.cats.title)}</h2>
      ${s.length?`<ul class="for">${s.map(p=>`<li><a class="pill" href="?use=${t(p.id)}#shop" data-filter-link="use" data-value="${t(p.id)}">${t(o(p.name))}</a></li>`).join("")}</ul>`:""}
    </div>
    <ul class="cats">${i.map(p=>{let h=p.image??e.find(u=>u.category===p.id)?.image;return`<li><a href="?type=${t(p.id)}#shop" data-filter-link="type" data-value="${t(p.id)}">
      <span class="cat-img">${h?`<img sizes="auto, (max-width: 640px) 50vw, 280px" src="${t(x(r,h))}" alt="" width="1000" height="1000" loading="lazy">`:""}</span>
      <span class="cat-name">${t(o(p.name))}</span><span class="cat-n">${t(n.cats.count.replace("{n}",p.n))}</span>
    </a></li>`}).join("")}</ul>
  </div>
</section>`:""}function Me(a){let{items:e,t:n}=a,o=e.filter(r=>r.badge?.en==="New").slice(0,10);return o.length<3?"":`<section class="section section--soft" aria-labelledby="new-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="new-title" class="h2">${t(n.newIn.title)}</h2><a class="link" href="#shop">${t(n.newIn.all)} ${m("arrow",16)}</a></div>
    <ul class="rail">${o.map(r=>I(a,r)).join("")}</ul>
  </div>
</section>`}function I(a,e,n=0){let{t:o,L:r,url:i,money:s,productPath:p,market:h,catalog:u,name:y,cat:w}=a,$=[r(e.name),e.name?.vi,e.name?.en,r(w(e)?.name),w(e)?.name?.vi,...(e.uses??[]).map(d=>y(u.uses,d)),...(e.styles??[]).map(d=>y(u.styles,d)),...(e.colors??[]).map(d=>r(d.name))].filter(Boolean).join(" "),g=e.images?.[0],l=(e.sizes??[]).filter(d=>!e.soldOut?.includes(d));return`<li class="card${n>=le?" is-more":""}" data-type="${t(e.category)}" data-use="${t((e.uses??[]).join(" "))}" data-sty="${t((e.styles??[]).join(" "))}" data-sz="${t(l.join(" "))}" data-price="${e.from}" data-name="${t(we($))}">
  <a class="card-link" href="${i(p(e,h))}">
    <div class="card-img${g?" has-alt":""}">
      <img sizes="auto, (max-width: 640px) 50vw, 280px" src="${t(x(i,e.image))}" alt="${t(r(e.name))}" width="1000" height="1000" loading="lazy">
      ${g?`<img sizes="auto, (max-width: 640px) 50vw, 280px" class="alt" src="${t(x(i,g))}" alt="" width="1000" height="1000" loading="lazy">`:""}
      ${e.was?`<span class="tag tag--sale">-${Math.round((1-e.from/e.was)*100)}%</span>`:e.badge?`<span class="tag">${t(r(e.badge))}</span>`:""}
    </div>
    <h3>${t(r(e.name))}</h3>
    <p class="card-price">${e.variants.length>1?`<small>${t(o.from)}</small> `:""}<b>${t(s(e.from))}</b>${e.was?` <s>${t(s(e.was))}</s>`:""}</p>
    ${e.colors?.length>1?`<p class="dots" aria-hidden="true">${e.colors.map(d=>`<i style="background:${t(d.hex)}"></i>`).join("")}</p>`:""}
  </a>
</li>`}function Te(a){let{items:e,catalog:n,t:o,L:r,money:i}=a,s=n.categories.filter(l=>e.some(d=>d.category===l.id)),p=(n.uses??[]).filter(l=>e.some(d=>d.uses?.includes(l.id))),h=(n.styles??[]).filter(l=>e.some(d=>d.styles?.includes(l.id))),u=n.sizeOrder??[],y=[...new Set(e.flatMap(l=>l.sizes??[]))].sort((l,d)=>(u.indexOf(l)+1||999)-(u.indexOf(d)+1||999)||String(l).localeCompare(String(d),void 0,{numeric:!0})),w=e.length>4?Se(e):[],$=([l,d])=>l?d===1/0?o.shop.over.replace("{a}",i(l)):`${i(l)} \u2013 ${i(d)}`:o.shop.under.replace("{b}",i(d)),g=(l,d,D,S)=>`<label class="select"><span class="sr">${t(d)}</span><select ${l}><option value="">${t(D)}</option>${S}</select></label>`;return`<section class="section" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="shop-head">
      <h2 id="shop-title" class="h2">${t(o.shop.title)}</h2>
      <p class="muted" data-count="${t(o.shop.count)}">${t(o.shop.count.replace("{n}",e.length))}</p>
    </div>
    <div class="toolbar" data-toolbar>
      <div class="chips" role="group" aria-label="${t(o.shop.all)}">
        <button type="button" class="pill is-on" data-type="">${t(o.shop.all)}</button>
        ${s.map(l=>`<button type="button" class="pill" data-type="${t(l.id)}">${t(r(l.name))}</button>`).join("")}
      </div>
      <div class="filters">
        <label class="search">${m("search",18)}<input type="search" placeholder="${t(o.search)}" aria-label="${t(o.search)}" data-search></label>
        ${g("data-use",o.shop.use,o.shop.anyUse,p.map(l=>`<option value="${t(l.id)}">${t(r(l.name))}</option>`).join(""))}
        ${h.length?g("data-sty",o.shop.style,o.shop.anyStyle,h.map(l=>`<option value="${t(l.id)}">${t(r(l.name))}</option>`).join("")):""}
        ${y.length?g("data-szf",o.shop.size,o.shop.anySize,y.map(l=>`<option value="${t(l)}">${t(l)}</option>`).join("")):""}
        ${g("data-band",o.shop.price,o.shop.anyPrice,w.map(l=>`<option value="${l[0]}-${l[1]===1/0?"":l[1]}">${t($(l))}</option>`).join(""))}
        <label class="select"><span class="sr">${t(o.shop.sort)}</span><select data-sort>
          <option value="">${t(o.shop.sortPop)}</option><option value="asc">${t(o.shop.sortLow)}</option><option value="desc">${t(o.shop.sortHigh)}</option>
        </select></label>
      </div>
    </div>
    <ul class="grid" data-grid>${xe(e).map((l,d)=>I(a,l,d)).join("")}</ul>
    <p class="empty muted" data-empty hidden>${t(o.shop.empty)}</p>
    ${e.length>le?`<div class="more"><button type="button" class="btn btn--line btn--lg" data-more hidden>${t(o.shop.more)}</button></div>`:""}
  </div>
</section>`}function Ce({site:a,L:e,url:n}){let o=a.story;return o?`<section class="section section--soft" id="story" aria-labelledby="story-title">
  <div class="wrap story">
    <div class="story-pics">${(o.images??[]).slice(0,2).map((i,s)=>`<img sizes="auto, (max-width: 640px) 50vw, 280px" class="p${s+1}" src="${t(x(n,i))}" alt="" width="600" height="800" loading="lazy">`).join("")}</div>
    <div class="story-copy">${o.kicker?`<p class="kicker">${t(e(o.kicker))}</p>`:""}<h2 id="story-title" class="h2">${t(e(o.title))}</h2>${o.body?`<p class="lead">${t(e(o.body))}</p>`:""}</div>
  </div>
</section>`:""}function Le({site:a,t:e,L:n,lang:o}){let r=Q(a,e,o,"btn btn--line"),i=te(a);return a.showReviews===!1||!i.length&&!r?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2 center">${t(e.reviews.title)}</h2>
    ${ne(i,o,"reviews",s=>`<figure class="review">
      <p class="stars" aria-label="${t(s.rating)}/5">${Array.from({length:5},(p,h)=>`<span class="${h<s.rating?"on":""}">${m("star",15)}</span>`).join("")}</p>
      <blockquote>${t(n(s.text))}</blockquote>
      <figcaption>${t(s.name)}${s.bought?`<small>${t(n(s.bought))}</small>`:""}${ae(s,o)}</figcaption>
    </figure>`)}${r}
  </div>
</section>`}function Re({site:a,t:e,L:n}){return a.faq?.length?`<section class="section section--soft" aria-labelledby="faq-title">
  <div class="wrap faq">
    <h2 id="faq-title" class="h2">${t(e.faq.title)}</h2>
    <div>${a.faq.map((o,r)=>`<details${r===0?" open":""}><summary>${t(n(o.q))}</summary><p>${t(n(o.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function qe(a,e){let n=new Map;for(let o of a){let r=[...o.days].sort().join(",");n.has(r)||n.set(r,{days:o.days,slots:[]}),n.get(r).slots.push(`${o.open} \u2013 ${o.close}`)}return[...n.values()].map(o=>({label:o.days.length===7?e.visit.everyDay??e.days.join(", "):K(o.days,e.days),slots:o.slots.join(", ")}))}function Ee({site:a,t:e,L:n,channels:o}){let r=encodeURIComponent(a.contact.mapQuery??n(a.contact.address));return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div>
      <h2 id="visit-title" class="h2">${t(e.visit.title)}</h2>
      ${X(a,e)}
      <h3 class="h4">${m("clock",18)} ${t(e.visit.hours)}</h3>
      <table class="hours"><tbody>${qe(a.hours,e).map(i=>`<tr><th scope="row">${t(i.label)}</th><td>${t(i.slots)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${m("pin",18)} ${t(e.visit.address)}</h3>
      <p>${t(n(a.contact.address))}</p>
      <div class="actions">
        <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${r}" target="_blank" rel="noopener">${t(e.visit.directions)} ${m("arrow",16)}</a>
        ${o.map(i=>`<a class="btn btn--line" href="${t(R(i,a.contact))}" ${F(i)}>${m(i,18)} ${t(e.via[i])}</a>`).join("")}
      </div>
    </div>
    <div class="map"><iframe title="${t(e.visit.address)}" src="https://www.google.com/maps?q=${r}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function Be(a,e){let{site:n,t:o,L:r,url:i,money:s,market:p,items:h,channels:u,catalog:y,name:w,cat:$,gform:g}=a,l=e.variants.map(c=>({size:r(c.size)||"",price:s(c.price)})),d=e.variants.reduce((c,b)=>b.price<c.price?b:c),D=$(e),S=[...h.filter(c=>c.id!==e.id&&c.category===e.category),...h.filter(c=>c.id!==e.id&&c.category!==e.category&&c.styles?.some(b=>e.styles?.includes(b)))].slice(0,8),N=i(`${p.id}/`),z=e.fit&&y.sizeGuides?.[e.fit],T=o.orderText.replace("{product}",r(e.name)).replace(/\{\w+\}/g,"\u2026"),j=c=>typeof c=="object"?r(c):String(c),k=e.sizes??[],v=g?` data-gform="${t(g.action)}" data-gmap='${t(JSON.stringify(g.fields))}'`:"",P=c=>u.map((b,f)=>`<button type="submit" class="btn ${c??(f?"btn--line":"btn--primary")} btn--lg" data-channel="${t(b)}" data-href="${t(R(b,n.contact,T))}">${m(b,18)} ${t(b==="phone"?o.product.call:o.product.send.replace("{channel}",o.via[b]))}</button>`).join("");return`<div class="wrap crumbs"><a href="${N}">${t(o.nav.home)}</a>${m("chevron",14)}<a href="${N}?type=${t(e.category)}#shop">${t(r(D?.name))}</a>${m("chevron",14)}<span aria-current="page">${t(r(e.name))}</span></div>
<section class="wrap pdp" data-product data-id="${t(e.id)}" data-name="${t(r(e.name))}" data-sizes='${t(JSON.stringify(l))}' data-text="${t(o.orderText)}" data-market="${t(`${p.id.toUpperCase()} \xB7 ${p.currency}`)}">
  ${Oe(a,e)}
  <div class="pdp-info">
    <p class="kicker">${t(r(D?.name))}</p>
    <h1 class="pdp-title">${t(r(e.name))}</h1>
    <p class="pdp-price"><strong data-v="price">${t(s(d.price))}</strong>${e.was?` <s>${t(s(e.was))}</s> <span class="tag tag--sale tag--inline">-${Math.round((1-e.from/e.was)*100)}%</span>`:""}</p>
    <p class="lead">${t(r(e.description))}</p>
    ${e.variants.length>1?`<fieldset class="opts"><legend>${t(o.product.version)}</legend><div class="opt-row">
      ${e.variants.map((c,b)=>`<label class="opt"><input type="radio" name="version" value="${b}"${c===d?" checked":""}><span><b>${t(r(c.size))}</b><small>${t(s(c.price))}</small></span></label>`).join("")}
    </div></fieldset>`:""}
    ${e.colors?.length?`<fieldset class="opts"><legend>${t(o.product.color)}: <span data-v="color">${t(r(e.colors[0].name))}</span></legend><div class="swatches">
      ${e.colors.map((c,b)=>`<label class="sw" title="${t(r(c.name))}"><input type="radio" name="color" value="${t(r(c.name))}"${b?"":" checked"}><span style="background:${t(c.hex)}"></span><b class="sr">${t(r(c.name))}</b></label>`).join("")}
    </div></fieldset>`:""}
    ${k.length?`<fieldset class="opts" data-size-field><legend>${t(o.product.size)}: <span data-v="size">${k.length===1?t(k[0]):"\u2014"}</span></legend><div class="sizes">
      ${k.map(c=>{let b=e.soldOut?.includes(c);return`<label class="sz${b?" is-out":""}"><input type="radio" name="size" value="${t(c)}"${b?" disabled":""}${k.length===1?" checked":""}><span>${t(c)}</span>${b?`<b class="sr">${t(o.soldOut)}</b>`:""}</label>`}).join("")}
    </div>
    <p class="size-msg" data-size-msg hidden>${t(o.product.pickSize)}</p>
    ${z?`<details class="sizeguide"><summary>${m("chevron",14)} ${t(o.product.sizeGuide)}</summary><div class="sg-wrap"><table><thead><tr>${z.head.map(c=>`<th scope="col">${t(j(c))}</th>`).join("")}</tr></thead><tbody>${z.rows.map(c=>`<tr>${c.map((b,f)=>f?`<td>${t(j(b))}</td>`:`<th scope="row">${t(j(b))}</th>`).join("")}</tr>`).join("")}</tbody></table>${z.note?`<p class="muted small">${t(j(z.note))}</p>`:""}</div></details>`:""}
    </fieldset>`:""}
    ${n.promises?.length?`<ul class="promises">${n.promises.map(c=>`<li>${m(c.icon??"check",18)} ${t(r(c.text))}</li>`).join("")}</ul>`:""}
    <form class="order" id="order" data-compose${v} novalidate>
      <h2 class="h4">${m("bag",20)} ${t(o.product.orderTitle)}</h2>
      <div class="order-fields">
        <div class="intents" role="radiogroup" aria-label="${t(o.product.orderTitle)}">${o.product.intents.map((c,b)=>`<label class="intent"><input type="radio" name="intent" value="${t(c)}"${b?"":" checked"}><span>${t(c)}</span></label>`).join("")}</div>
        <div class="fields">
          <label><span>${t(o.product.name)} *</span><input name="name" autocomplete="name" required></label>
          <label><span>${t(o.product.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required></label>
          <label><span>${t(o.product.qty)}</span><input name="qty" type="number" min="1" max="20" value="1" inputmode="numeric"></label>
          <label><span>${t(o.product.address)}</span><input name="address" autocomplete="street-address"></label>
          <label class="wide"><span>${t(o.product.note)}</span><textarea name="note" rows="2" placeholder="${t(o.product.noteHint)}"></textarea></label>
          <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        </div>
        <p class="form-err" data-err hidden>${t(o.product.required)}</p>
        <div class="buy"><button type="submit" class="btn btn--primary btn--lg btn--full" data-order-submit>${m("bag",18)} <span>${t(o.product.order)}</span></button></div>
        <p class="muted small">${m("check",16)} ${t(o.product.gformNote)}</p>
        <noscript><p>${u.map(c=>`<a href="${t(R(c,n.contact,T))}" ${F(c)}>${t(o.via[c])}</a>`).join(" \xB7 ")}</p></noscript>
      </div>
      
      <div class="done${g?"":" done--step"}" data-done hidden tabindex="-1">
        <p class="done-title">${m(g?"check":"arrow",22)} ${t(g?o.product.done:o.product.stepTitle)}</p>
        <p>${t(g?o.product.doneText:o.product.stepText)}</p>
        <div class="buy">${P(g?"btn--line":void 0)}</div>
        ${g?"":`<button type="button" class="link back" data-edit>${t(o.product.edit)}</button>`}
      </div>
      <p class="form-msg" role="status" hidden></p>
      <p class="muted small">${t(o.product.reply)}</p>
    </form>
    ${oe(a.market.lang)}
  </div>
</section>
${e.specs?.length?`<section class="section section--tight"><div class="wrap specs">
  <h2 class="h3">${t(o.product.specs)}</h2>
  <table><tbody>${e.specs.map(([c,b])=>`<tr><th scope="row">${t(o.specs[c]??c)}</th><td>${t(j(b))}</td></tr>`).join("")}</tbody></table>
</div></section>`:""}
${S.length?`<section class="section section--soft"><div class="wrap">
  <h2 class="h3">${t(o.product.related)}</h2>
  <ul class="grid grid--related">${S.map(c=>I(a,c)).join("")}</ul>
</div></section>`:""}`}function Oe({t:a,L:e,url:n},o){let r=[o.image,...o.images??[]],i=a.gallery,s=e(o.name),p=o.badge?`<span class="tag">${t(e(o.badge))}</span>`:"";return r.length===1?`<figure class="pdp-img"><img src="${t(x(n,o.image))}" alt="${t(s)}" width="1000" height="1000" fetchpriority="high">${p}</figure>`:`<figure class="pdp-img gallery" data-gallery>
    <div class="g-stage">
      <ul class="g-track" tabindex="0" aria-label="${t(i.label)}">${r.map((h,u)=>`<li id="g-${u+1}"><a href="${t(x(n,h))}" data-zoom="${u}" aria-label="${t(i.zoom)}: ${t(i.photo.replace("{i}",u+1).replace("{n}",r.length))}"><img sizes="auto, (max-width: 640px) 100vw, 580px" src="${t(x(n,h))}" alt="${t(u?`${s} \u2013 ${i.photo.replace("{i}",u+1).replace("{n}",r.length)}`:s)}" width="1000" height="1000"${u?' loading="lazy"':' fetchpriority="high"'}></a></li>`).join("")}</ul>
      ${p}
      <button type="button" class="g-nav g-prev" data-step="-1" aria-label="${t(i.prev)}">${m("chevron",22)}</button>
      <button type="button" class="g-nav g-next" data-step="1" aria-label="${t(i.next)}">${m("chevron",22)}</button>
      <span class="g-count" aria-hidden="true"><b data-g-i>1</b> / ${r.length}</span>
    </div>
    <ul class="g-thumbs">${r.map((h,u)=>`<li><a href="#g-${u+1}" data-go="${u}"${u?"":' aria-current="true"'} aria-label="${t(i.photo.replace("{i}",u+1).replace("{n}",r.length))}"><img sizes="auto, 120px" src="${t(x(n,h))}" alt="" width="1000" height="1000" loading="lazy"></a></li>`).join("")}</ul>
  </figure>
  <dialog class="lightbox" data-lightbox aria-label="${t(s)}">
    <img src="" alt="${t(s)}" data-lb-img>
    <button type="button" class="lb-close" data-lb-close aria-label="${t(i.close)}">\u2715</button>
    <button type="button" class="g-nav g-prev" data-lb-step="-1" aria-label="${t(i.prev)}">${m("chevron",26)}</button>
    <button type="button" class="g-nav g-next" data-lb-step="1" aria-label="${t(i.next)}">${m("chevron",26)}</button>
    <span class="g-count"><b data-lb-i>1</b> / ${r.length}</span>
  </dialog>`}function Fe({site:a,t:e,L:n,market:o}){let r=a.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${t(a.name)}</p><p class="muted">${t(n(a.tagline))}</p></div>
    <div><p class="foot-h">${t(e.footer.contact)}</p><ul>
      ${r.phone?`<li>${t(e.footer.hotline)}: <a href="tel:${M(r.phone)}">${t(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${t(r.email)}">${t(r.email)}</a></li>`:""}
      <li>${t(n(r.address))}</li></ul></div>
    ${a.social?`<div><p class="foot-h">${t(e.footer.follow)}</p><ul>${Object.entries(a.social).filter(([,i])=>i).map(([i,s])=>`<li><a href="${t(s)}" target="_blank" rel="noopener">${t(i==="tiktok"?"TikTok":i==="youtube"?"YouTube":i[0].toUpperCase()+i.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${a.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${t(a.name)}</span>${re(a,e,o.lang)}</div>
</footer>`}function Ge({site:a,market:e,L:n,abs:o,items:r}){return{"@context":"https://schema.org","@type":"ClothingStore",name:a.name,url:o(`${e.id}/`),image:o(L(a.heroImages?.[0]??r[0]?.image)),description:n(a.intro),telephone:a.contact.phone,email:a.contact.email,address:{"@type":"PostalAddress",streetAddress:n(a.contact.address)},currenciesAccepted:e.currency,openingHoursSpecification:J(a.hours)}}var Ae=({site:a,L:e})=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:a.faq.map(n=>({"@type":"Question",name:e(n.q),acceptedAnswer:{"@type":"Answer",text:e(n.a)}}))});function Ie({site:a,market:e,L:n,abs:o,productPath:r,cat:i},s){return{"@context":"https://schema.org","@type":"Product",name:n(s.name),description:n(s.description),image:[s.image,...s.images??[]].map(p=>o(L(p))),url:o(r(s,e)),category:n(i(s)?.name),...s.colors?.length?{color:s.colors.map(p=>n(p.name)).join(", ")}:{},...s.sizes?.length?{size:s.sizes.join(", ")}:{},offers:s.variants.map(p=>({"@type":"Offer",name:[n(s.name),n(p.size)].filter(Boolean).join(" \u2013 "),price:p.price,priceCurrency:e.currency,availability:"https://schema.org/InStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:a.name}}))}}function Ue({market:a,L:e,abs:n,productPath:o,t:r,cat:i},s){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:r.nav.home,item:n(`${a.id}/`)},{"@type":"ListItem",position:2,name:e(i(s)?.name),item:n(`${a.id}/?type=${s.category}`)},{"@type":"ListItem",position:3,name:e(s.name),item:n(o(s,a))}]}}export{at as renderSite};
