var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t=(e="")=>String(e).replace(/[&<>"']/g,n=>_[n]);function N(e,n,a="vi"){return e==null?"":typeof e!="object"?String(e):e[n]??e[a]??Object.values(e)[0]??""}var K={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},P=e=>K[e]??"en-US";function J(e,n="1"){if(n==="0.99")return Math.max(.99,Math.ceil(e)-.01);let a=Number(n)||1;return Math.max(a,Math.round(e/a)*a)}function z(e,n){if(n.default)return e.basePrice;let a=e.prices?.[n.id]??{mode:"auto"};return a.mode==="hidden"?null:a.mode==="manual"?a.amount:J(e.basePrice*n.rate,n.rounding)}var Z=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function C(e,n){let a={style:"currency",currency:n.currency};return Z.has(n.currency)&&(a.maximumFractionDigits=0),new Intl.NumberFormat(P(n.lang),a).format(e)}function T(e="/"){let n=e.endsWith("/")?e:`${e}/`;return(a="")=>n+String(a).replace(/^\//,"")}var M=(e="")=>e.startsWith("uploads/")?e:/^([a-z]+:|\/)/i.test(e)?null:`assets/${e}`,x=(e,n)=>{let a=M(n);return a==null?n:e(a)},b=(e="")=>String(e).replace(/\D/g,"");function w(e,n,a=""){switch(e){case"phone":return`tel:${b(n.phone)}`;case"zalo":return`https://zalo.me/${b(n.zalo||n.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(n.messenger)}`;case"whatsapp":return`https://wa.me/${b(n.whatsapp)}${a?`?text=${encodeURIComponent(a)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(n.kakao)}/chat`;case"email":return`mailto:${n.email}${a?`?subject=${encodeURIComponent(a)}`:""}`;default:return"#"}}var R=e=>`<script type="application/ld+json">${JSON.stringify(e).replace(/</g,"\\u003c")}<\/script>`;var Y={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},d=(e,n=20,a="")=>`<svg class="i" width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${a}>${Y[e]??""}</svg>`,D=[1,2,3,4,5,6,0],X=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function E(e,n){let a=e.map(r=>D.indexOf(r)).sort((r,s)=>r-s);return a.every((r,s)=>s===0||r===a[s-1]+1)&&a.length>2?`${n[D[a[0]]]} \u2013 ${n[D[a.at(-1)]]}`:a.map(r=>n[D[r]]).join(", ")}var q=e=>e.map(n=>({"@type":"OpeningHoursSpecification",dayOfWeek:n.days.map(a=>X[a]),opens:n.open,closes:n.close}));function B(e){return new Intl.NumberFormat(P(e.lang),{style:"currency",currency:e.currency}).formatToParts(0).find(a=>a.type==="currency")?.value??e.currency}var j=e=>e==="phone"||e==="email"?"":'target="_blank" rel="noopener"',F=e=>`<div class="suggest" id="market-suggest" data-suggest="${t(e.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${t(e.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${t(e.market.dismiss)}">\xD7</button>
</div>`,O=(e,n)=>`<p class="status" data-open-status data-hours='${t(JSON.stringify(e.hours))}' data-tz="${t(e.timezone??"Asia/Ho_Chi_Minh")}" data-open="${t(n.visit.open)}" data-closed="${t(n.visit.closed)}" hidden></p>`,L={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},Q=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,ee=e=>{try{let n=new URL(String(e.googleReview??"").trim());return n.protocol==="https:"&&Q.test(n.hostname)?n.href:""}catch{return""}},G=(e,n,a,i="btn btn--line")=>{let r=ee(e);if(!r)return"";let s=typeof n.reviews=="object"&&n.reviews?.google||L[a]||L.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${i}" href="${t(r)}" target="_blank" rel="noopener">${d("star",16)} ${t(s)}</a></p>`},S={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},A={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},I=e=>(e.reviews??[]).filter(n=>n&&(n.name||n.text)&&!(typeof n.text=="object"&&n.text&&!Object.values(n.text).some(Boolean)&&!n.name));function U(e,n){let a=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(e?.date??"").trim());if(!a)return"";let i=new Date(Date.UTC(+a[1],+a[2]-1,+(a[3]??1)));if(Number.isNaN(i.getTime()))return"";let r=new Intl.DateTimeFormat(A[n]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(i);return`<time class="rv-date" datetime="${t(e.date)}">${t(r)}</time>`}function te(e,n){let a=e.filter(o=>o.rating>=1&&o.rating<=5);if(a.length<2)return"";let i=a.reduce((o,c)=>o+Number(c.rating),0)/a.length,r=S[n]??S.en,s=new Intl.NumberFormat(A[n]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(i);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${d("star",18)}</span><strong>${s}</strong><span>\xB7</span><span>${t(r.count.replace("{n}",String(e.length)))}</span></p>`}function V(e,n,a,i){if(!e.length)return"";let r=S[n]??S.en,s=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${t(o==="prev"?r.prev:r.next)}">${d("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${te(e,n)}<div class="rv" data-rv data-more="${t(r.more)}" data-less="${t(r.less)}">
      <div class="${a} rv-track" tabindex="0">${e.map(i).join("")}</div>
      <div class="rv-nav" hidden>${s("prev")}${s("next")}</div>
    </div>${ne}`}var ne=`<style>
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
upd()}})()<\/script>`;var W=(e,n,a)=>e.badge===!1?"":`<a class="made" href="https://kingpes.net/${t(a==="vi"||a==="ja"?a:"en")}/?ref=badge" rel="nofollow" target="_blank">${t(n.footer.madeWith)}</a>`;function H({site:e,markets:n,url:a,abs:i}){let r=n.find(o=>o.default)??n[0],s=n.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${t(r.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t(e.name)}</title>
<link rel="canonical" href="${i(`${r.id}/`)}">
${n.map(o=>`<link rel="alternate" hreflang="${t(o.lang)}-${t(o.country)}" href="${i(`${o.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(s)}, root = ${JSON.stringify(a(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${n.map(o=>`<a href="${a(`${o.id}/`)}">${t(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var ae="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap";function oe(e,n){return e.products.map(a=>({...a,variants:a.variants.map(i=>({...i,price:z(i,n)})).filter(i=>i.price!=null)})).filter(a=>a.variants.length>0)}function je({site:e,catalog:n,i18n:a,template:i,basePath:r="/",siteUrl:s=e.domain}){let o=T(r),c=u=>new URL(o(u),s).href,l=n.markets,m=l.map(u=>{let g=u.lang,y=a[g]??a.en??a.vi,$=v=>N(v,g,"en"),p=oe(n,u),h=e.bookingChannels?.[u.id]??["phone"],k={site:e,catalog:n,market:u,markets:l,lang:g,t:y,L:$,url:o,abs:c,services:p,channels:h,money:v=>C(v,u),template:i};return{path:`${u.id}/index.html`,html:re(k)}});return m.push({path:"index.html",html:H({site:e,markets:l,url:o,abs:c})}),m}function re(e){let{site:n,market:a,markets:i,lang:r,t:s,L:o,url:c,abs:l}=e,m=`${n.name} \xB7 ${o(n.tagline)}`,u=n.theme??{},g=["primary","ink","bg","surface","soft","accent"].filter(p=>u[p]).map(p=>`--${p}:${u[p]}`).join(";"),y=i.find(p=>p.default)??i[0],$=i.map(p=>({id:p.id,lang:p.lang,country:p.country,currency:p.currency,href:c(`${p.id}/`)}));return`<!doctype html>
<html lang="${t(r)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t(m)}</title>
<meta name="description" content="${t(o(n.intro))}">
<link rel="canonical" href="${l(`${a.id}/`)}">
${i.map(p=>`<link rel="alternate" hreflang="${t(p.lang)}-${t(p.country)}" href="${l(`${p.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${l(`${y.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${t(m)}">
<meta property="og:description" content="${t(o(n.intro))}">
<meta property="og:url" content="${l(`${a.id}/`)}">
<meta property="og:site_name" content="${t(n.name)}">
<meta property="og:image" content="${t(l(M(n.heroImage??"photos/hero.webp")??n.heroImage))}">
<meta name="theme-color" content="${t(u.bg??"#F2F4EF")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${ae}">
<link rel="stylesheet" href="${c("assets/style.css")}">
<style>:root{${g}}</style>
${R(fe(e))}
<script src="${c("assets/site.js")}" defer><\/script>
</head>
<body data-market="${t(a.id)}" data-markets='${t(JSON.stringify($))}'>
<a class="skip" href="#main">${t(s.skip)}</a>
${F(s)}
${ie(e)}
<main id="main">
${se(e)}
${ce(e)}
${le(e)}
${pe(e)}
${de(e)}
${he(e)}
${ue(e)}
${me(e)}
</main>
${ge(e)}
<nav class="bookbar" aria-label="${t(s.nav.book)}">
  <a class="primary" href="#booking">${d("calendar",20)}<span>${t(s.nav.book)}</span></a>
  <a href="${t(w(e.channels[0],n.contact))}" ${j(e.channels[0])}>${d(e.channels[0],20)}<span>${t(s.via[e.channels[0]])}</span></a>
</nav>
</body>
</html>
`}function ie({site:e,market:n,markets:a,t:i,url:r}){let s=[["#services",i.nav.services],["#prices",i.nav.prices],["#team",i.nav.team]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${r(`${n.id}/`)}">
      ${e.logo?`<img src="${t(x(r,e.logo))}" alt="" width="36" height="36">`:`<span class="brand-mark" aria-hidden="true">${d("leaf",22)}</span>`}
      <span>${t(e.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${s.map(([o,c])=>`<a href="${o}">${t(c)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${t(i.market.label)}">${d("globe",18)}<span>${t(n.id.toUpperCase())}<span class="cur"> \xB7 ${t(B(n))}</span></span></summary>
        <ul>${a.map(o=>`<li><a href="${r(`${o.id}/`)}" hreflang="${t(o.lang)}"${o.id===n.id?' aria-current="true"':""}>${t(o.country)} \xB7 ${t(o.currency)}</a></li>`).join("")}</ul>
      </details>
      <a class="btn btn--primary hide-sm" href="#booking">${t(i.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${t(i.nav.openMenu)}">${d("menu",22)}</summary>
        <nav aria-label="Menu">${s.map(([o,c])=>`<a href="${o}">${t(c)}</a>`).join("")}<a href="#booking">${t(i.nav.book)}</a></nav>
      </details>
    </div>
  </div>
</header>`}function se({site:e,t:n,L:a,url:i}){let r=e.hours[0],s=e.heroImage?t(x(i,e.heroImage)):i("assets/photos/hero.webp");return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">${t(a(e.place))}</p>
      <h1>${t(a(e.tagline))}</h1>
      <p class="lead">${t(a(e.intro))}</p>
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#booking">${d("calendar",18)} ${t(n.hero.book)}</a>
        <a class="btn btn--ghost btn--lg" href="#prices">${t(n.hero.prices)}</a>
      </div>
      <ul class="facts">
        <li>${d("clock",18)} ${t(n.hero.openDaily)} ${t(r.open)} \u2013 ${t(r.close)}</li>
        <li>${d("pin",18)} ${t(a(e.contact.address))}</li>
      </ul>
    </div>
    <div class="hero-art">
      <div class="arch arch--hero"><img src="${s}" alt="${t(e.name)}" width="880" height="1120" fetchpriority="high"></div>
      <span class="seal" aria-hidden="true">${d("leaf",26)}</span>
    </div>
  </div>
</section>`}function ce({services:e,t:n,L:a,url:i,money:r}){let s=e.filter(o=>o.featured).slice(0,4);return s.length?`<section class="section" id="services" aria-labelledby="sig-title">
  <div class="wrap">
    <div class="head center">
      <span class="rule" aria-hidden="true"></span>
      <h2 id="sig-title" class="h2">${t(n.signature.title)}</h2>
    </div>
    <div class="sig">
      ${s.map(o=>{let c=Math.min(...o.variants.map(l=>l.price));return`<article class="sig-card">
        <div class="arch arch--card">${o.image?`<img sizes="auto, (max-width: 640px) 50vw, 280px" src="${t(x(i,o.image))}" alt="" width="780" height="900" loading="lazy">`:""}${o.badge?`<span class="ribbon">${t(a(o.badge))}</span>`:""}</div>
        <h3>${t(a(o.name))}</h3>
        <p class="muted">${t(a(o.description))}</p>
        <p class="sig-foot"><span class="durations">${o.variants.map(l=>`${l.minutes}\u2032`).join(" \xB7 ")}</span><span class="from">${t(n.signature.from).replace("{price}",`<strong>${t(r(c))}</strong>`)}</span></p>
      </article>`}).join("")}
    </div>
  </div>
</section>`:""}function le({services:e,catalog:n,t:a,L:i,money:r}){let s=n.categories.filter(o=>e.some(c=>c.category===o.id));return`<section class="section section--soft" id="prices" aria-labelledby="price-title">
  <div class="wrap">
    <div class="head center">
      <span class="rule" aria-hidden="true"></span>
      <h2 id="price-title" class="h2">${t(a.prices.title)}</h2>
      <p class="muted">${t(a.prices.note)}</p>
    </div>
    <div class="menu">
      ${s.map(o=>`<div class="menu-cat">
        <h3>${t(i(o.name))}</h3>
        <ul>${e.filter(c=>c.category===o.id).map(c=>`<li class="item">
          <div class="item-head"><span class="item-name">${t(i(c.name))}</span>${c.badge?`<span class="pill">${t(i(c.badge))}</span>`:""}</div>
          <p class="item-desc muted">${t(i(c.description))}</p>
          <dl class="rates">${c.variants.map(l=>`<div><dt>${l.minutes} ${t(a.prices.min)}</dt><dd>${t(r(l.price))}</dd></div>`).join("")}</dl>
        </li>`).join("")}</ul>
      </div>`).join("")}
    </div>
  </div>
</section>`}function pe({site:e,t:n,L:a}){return e.benefits?.length?`<section class="section" aria-labelledby="ben-title">
  <div class="wrap">
    <h2 id="ben-title" class="h2 center">${t(n.benefits)}</h2>
    <div class="benefits">${e.benefits.map(i=>`<div class="benefit">
      <span class="benefit-i">${d(i.icon??"leaf",26)}</span>
      <h3>${t(a(i.title))}</h3>
      <p class="muted">${t(a(i.text))}</p>
    </div>`).join("")}</div>
  </div>
</section>`:""}function de({site:e,t:n,L:a}){if(!e.team?.length)return"";let i=r=>r.split(/\s+/).map(s=>s[0]).slice(-2).join("").toUpperCase();return`<section class="section section--soft" id="team" aria-labelledby="team-title">
  <div class="wrap">
    <h2 id="team-title" class="h2 center">${t(n.team.title)}</h2>
    <div class="team">${e.team.map((r,s)=>`<figure class="member">
      <div class="arch arch--portrait tone-${s%3}">${r.photo?`<img sizes="auto, (max-width: 640px) 50vw, 280px" src="${t(r.photo)}" alt="${t(r.name)}" loading="lazy">`:`<span class="initials" aria-hidden="true">${t(i(r.name))}</span>`}</div>
      <figcaption><strong>${t(r.name)}</strong><span>${t(a(r.role))}</span><span class="muted">${t(n.team.years.replace("{n}",r.years))}</span></figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`}function he({site:e,t:n,L:a,lang:i}){let r=G(e,n,i,"btn btn--ghost"),s=I(e);return e.showReviews===!1||!s.length&&!r?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2 center">${t(n.reviews)}</h2>
    ${V(s,i,"quotes",o=>`<figure class="quote">
      <div class="stars" aria-label="${o.rating}/5">${Array.from({length:5},(c,l)=>`<span class="${l<o.rating?"on":""}">${d("star",16)}</span>`).join("")}</div>
      <blockquote>\u201C${t(a(o.text))}\u201D</blockquote>
      <figcaption>\u2014 ${t(o.name)}${U(o,i)}</figcaption>
    </figure>`)}${r}
  </div>
</section>`}function ue({site:e,t:n,L:a,services:i,channels:r,money:s,market:o,catalog:c}){let l=n.booking,m=[],[u,g]=e.hours[0].open.split(":").map(Number),[y]=e.hours[0].close.split(":").map(Number);for(let h=u*60+g;h<=(y-1)*60;h+=30)m.push(`${String(Math.floor(h/60)).padStart(2,"0")}:${String(h%60).padStart(2,"0")}`);let $=c.categories.filter(h=>i.some(f=>f.category===h.id)),p=r[0];return`<section class="section section--deep" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="booking-copy">
      <h2 id="book-title" class="h2">${t(l.title)}</h2>
      <p>${t(l.text)}</p>
      <p class="or">${t(l.or)}</p>
      <div class="actions">${r.map(h=>`<a class="btn btn--light" href="${t(w(h,e.contact))}" ${j(h)}>${d(h,18)} ${t(n.via[h])}</a>`).join("")}</div>
    </div>
    <form class="form" id="booking-form" data-channel="${t(p)}" data-href="${t(w(p,e.contact))}" data-message="${t(l.message)}" data-copied="${t(l.copied)}" data-email="${t(e.contact.email??"")}" data-wa="${t(b(e.contact.whatsapp??""))}">
      <div class="row">
        <label>${t(l.name)}<input name="name" autocomplete="name" required></label>
        <label>${t(l.phone)}<input name="phone" type="tel" autocomplete="tel" required></label>
      </div>
      <label>${t(l.service)}<select name="service" required>
        ${$.map(h=>`<optgroup label="${t(a(h.name))}">${i.filter(f=>f.category===h.id).flatMap(f=>f.variants.map(k=>{let v=`${a(f.name)} \xB7 ${k.minutes} ${n.prices.min} \xB7 ${s(k.price)}`;return`<option value="${t(v)}">${t(v)}</option>`})).join("")}</optgroup>`).join("")}
      </select></label>
      <div class="row">
        <label>${t(l.date)}<input name="date" type="date" required></label>
        <label>${t(l.time)}<select name="time" required>${m.map(h=>`<option>${h}</option>`).join("")}</select></label>
      </div>
      <label>${t(l.note)}<textarea name="note" rows="2"></textarea></label>
      <button class="btn btn--accent btn--lg" type="submit">${d(p,18)} ${t(l.submit)}</button>
      <p class="form-msg" role="status" hidden></p>
    </form>
  </div>
</section>`}function me({site:e,t:n,L:a}){let i=encodeURIComponent(e.contact.mapQuery??a(e.contact.address)),r=s=>s.length===7?n.everyDay:E(s,n.days);return`<section class="section" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${t(n.visit.title)}</h2>
      ${O(e,n)}
      <h3 class="h4">${d("clock",18)} ${t(n.visit.hours)}</h3>
      <table class="hours"><tbody>${e.hours.map(s=>`<tr><th scope="row">${t(r(s.days))}</th><td>${t(s.open)} \u2013 ${t(s.close)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${d("pin",18)} ${t(n.visit.address)}</h3>
      <p>${t(a(e.contact.address))}</p>
      <a class="btn btn--ghost" href="https://www.google.com/maps/dir/?api=1&amp;destination=${i}" target="_blank" rel="noopener">${t(n.visit.directions)} ${d("arrow",16)}</a>
    </div>
    <div class="map arch arch--map"><iframe title="${t(n.visit.address)}" src="https://www.google.com/maps?q=${i}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function ge({site:e,t:n,L:a,market:i}){let r=e.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${t(e.name)}</p><p class="muted">${t(a(e.tagline))}</p></div>
    <div><p class="foot-h">${t(n.footer.contact)}</p><ul>
      ${r.phone?`<li><a href="tel:${b(r.phone)}">${t(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${t(r.email)}">${t(r.email)}</a></li>`:""}
      <li>${t(a(r.address))}</li></ul></div>
    ${e.social?`<div><p class="foot-h">${t(n.footer.follow)}</p><ul>${Object.entries(e.social).filter(([,s])=>s).map(([s,o])=>`<li><a href="${t(o)}" target="_blank" rel="noopener">${t(s[0].toUpperCase()+s.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${e.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${t(e.name)}</span>${W(e,n,i.lang)}</div>
</footer>`}function fe({site:e,market:n,L:a,abs:i,services:r,catalog:s}){return{"@context":"https://schema.org","@type":"DaySpa",name:e.name,url:i(`${n.id}/`),description:a(e.intro),telephone:e.contact.phone,email:e.contact.email,address:{"@type":"PostalAddress",streetAddress:a(e.contact.address)},currenciesAccepted:n.currency,openingHoursSpecification:q(e.hours),hasOfferCatalog:{"@type":"OfferCatalog",name:e.name,itemListElement:s.categories.filter(o=>r.some(c=>c.category===o.id)).map(o=>({"@type":"OfferCatalog",name:a(o.name),itemListElement:r.filter(c=>c.category===o.id).flatMap(c=>c.variants.map(l=>({"@type":"Offer",name:`${a(c.name)} (${l.minutes}\u2032)`,price:l.price,priceCurrency:n.currency,itemOffered:{"@type":"Service",name:a(c.name),description:a(c.description)}})))}))}}}export{je as renderSite};
