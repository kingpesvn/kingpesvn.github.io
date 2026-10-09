var H={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},n=(e="")=>String(e).replace(/[&<>"']/g,t=>H[t]);function S(e,t,a="vi"){return e==null?"":typeof e!="object"?String(e):e[t]??e[a]??Object.values(e)[0]??""}var K={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},P=e=>K[e]??"en-US";function J(e,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(e)-.01);let a=Number(t)||1;return Math.max(a,Math.round(e/a)*a)}function N(e,t){if(t.default)return e.basePrice;let a=e.prices?.[t.id]??{mode:"auto"};return a.mode==="hidden"?null:a.mode==="manual"?a.amount:J(e.basePrice*t.rate,t.rounding)}var Z=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function z(e,t){let a={style:"currency",currency:t.currency};return Z.has(t.currency)&&(a.maximumFractionDigits=0),new Intl.NumberFormat(P(t.lang),a).format(e)}function j(e="/"){let t=e.endsWith("/")?e:`${e}/`;return(a="")=>t+String(a).replace(/^\//,"")}var Y=(e="")=>e.startsWith("uploads/")?e:/^([a-z]+:|\/)/i.test(e)?null:`assets/${e}`,$=(e,t)=>{let a=Y(t);return a==null?t:e(a)},k=(e="")=>String(e).replace(/\D/g,"");function x(e,t,a=""){switch(e){case"phone":return`tel:${k(t.phone)}`;case"zalo":return`https://zalo.me/${k(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${k(t.whatsapp)}${a?`?text=${encodeURIComponent(a)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${a?`?subject=${encodeURIComponent(a)}`:""}`;default:return"#"}}var C=e=>`<script type="application/ld+json">${JSON.stringify(e).replace(/</g,"\\u003c")}<\/script>`;var X={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},u=(e,t=20,a="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${a}>${X[e]??""}</svg>`,D=[1,2,3,4,5,6,0],Q=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function R(e,t){let a=e.map(s=>D.indexOf(s)).sort((s,i)=>s-i);return a.every((s,i)=>i===0||s===a[i-1]+1)&&a.length>2?`${t[D[a[0]]]} \u2013 ${t[D[a.at(-1)]]}`:a.map(s=>t[D[s]]).join(", ")}var E=e=>e.map(t=>({"@type":"OpeningHoursSpecification",dayOfWeek:t.days.map(a=>Q[a]),opens:t.open,closes:t.close}));function L(e){return new Intl.NumberFormat(P(e.lang),{style:"currency",currency:e.currency}).formatToParts(0).find(a=>a.type==="currency")?.value??e.currency}var w=e=>e==="phone"||e==="email"?"":'target="_blank" rel="noopener"',B=e=>`<div class="suggest" id="market-suggest" data-suggest="${n(e.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${n(e.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${n(e.market.dismiss)}">\xD7</button>
</div>`,q=(e,t)=>`<p class="status" data-open-status data-hours='${n(JSON.stringify(e.hours))}' data-tz="${n(e.timezone??"Asia/Ho_Chi_Minh")}" data-open="${n(t.visit.open)}" data-closed="${n(t.visit.closed)}" hidden></p>`,T={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},ee=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,te=e=>{try{let t=new URL(String(e.googleReview??"").trim());return t.protocol==="https:"&&ee.test(t.hostname)?t.href:""}catch{return""}},F=(e,t,a,r="btn btn--line")=>{let s=te(e);if(!s)return"";let i=typeof t.reviews=="object"&&t.reviews?.google||T[a]||T.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${r}" href="${n(s)}" target="_blank" rel="noopener">${u("star",16)} ${n(i)}</a></p>`},M={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},G={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},O=e=>(e.reviews??[]).filter(t=>t&&(t.name||t.text)&&!(typeof t.text=="object"&&t.text&&!Object.values(t.text).some(Boolean)&&!t.name));function A(e,t){let a=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(e?.date??"").trim());if(!a)return"";let r=new Date(Date.UTC(+a[1],+a[2]-1,+(a[3]??1)));if(Number.isNaN(r.getTime()))return"";let s=new Intl.DateTimeFormat(G[t]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(r);return`<time class="rv-date" datetime="${n(e.date)}">${n(s)}</time>`}function ne(e,t){let a=e.filter(o=>o.rating>=1&&o.rating<=5);if(a.length<2)return"";let r=a.reduce((o,p)=>o+Number(p.rating),0)/a.length,s=M[t]??M.en,i=new Intl.NumberFormat(G[t]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(r);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${u("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${n(s.count.replace("{n}",String(e.length)))}</span></p>`}function I(e,t,a,r){if(!e.length)return"";let s=M[t]??M.en,i=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${n(o==="prev"?s.prev:s.next)}">${u("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${ne(e,t)}<div class="rv" data-rv data-more="${n(s.more)}" data-less="${n(s.less)}">
      <div class="${a} rv-track" tabindex="0">${e.map(r).join("")}</div>
      <div class="rv-nav" hidden>${i("prev")}${i("next")}</div>
    </div>${ae}`}var ae=`<style>
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
upd()}})()<\/script>`;var V=(e,t,a)=>e.badge===!1?"":`<a class="made" href="https://kingpes.net/${n(a==="vi"||a==="ja"?a:"en")}/?ref=badge" rel="nofollow" target="_blank">${n(t.footer.madeWith)}</a>`;function U({site:e,markets:t,url:a,abs:r}){let s=t.find(o=>o.default)??t[0],i=t.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${n(s.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${n(e.name)}</title>
<link rel="canonical" href="${r(`${s.id}/`)}">
${t.map(o=>`<link rel="alternate" hreflang="${n(o.lang)}-${n(o.country)}" href="${r(`${o.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(i)}, root = ${JSON.stringify(a(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${t.map(o=>`<a href="${a(`${o.id}/`)}">${n(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var oe="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Pacifico&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap";function re(e,t){return e.products.map(a=>({...a,variants:a.variants.map(r=>({...r,price:N(r,t)})).filter(r=>r.price!=null)})).filter(a=>a.variants.length>0)}function Re({site:e,catalog:t,i18n:a,template:r,basePath:s="/",siteUrl:i=e.domain}){let o=j(s),p=d=>new URL(o(d),i).href,c=t.markets,l=c.map(d=>{let h=d.lang,f=a[h]??a.en??a.vi,b=g=>S(g,h,"en"),y=re(t,d),v=new Set(t.categories.filter(g=>g.retail).map(g=>g.id)),m=e.orderChannels?.[d.id]??["phone"],_={site:e,catalog:t,market:d,markets:c,lang:h,t:f,L:b,url:o,abs:p,channels:m,money:g=>z(g,d),template:r,menu:y.filter(g=>!v.has(g.category)),beans:y.filter(g=>v.has(g.category))};return{path:`${d.id}/index.html`,html:se(_)}});return l.push({path:"index.html",html:U({site:e,markets:c,url:o,abs:p})}),l}function se(e){let{site:t,market:a,markets:r,lang:s,t:i,L:o,url:p,abs:c,channels:l}=e,d=`${t.name} \xB7 ${o(t.tagline)}`,h=t.theme??{},f=["primary","ink","bg","surface","soft","accent"].filter(m=>h[m]).map(m=>`--${m}:${h[m]}`).join(";"),b=r.find(m=>m.default)??r[0],y=r.map(m=>({id:m.id,lang:m.lang,country:m.country,currency:m.currency,href:p(`${m.id}/`)})),v=l[0];return`<!doctype html>
<html lang="${n(s)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${n(d)}</title>
<meta name="description" content="${n(o(t.intro))}">
<link rel="canonical" href="${c(`${a.id}/`)}">
${r.map(m=>`<link rel="alternate" hreflang="${n(m.lang)}-${n(m.country)}" href="${c(`${m.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${c(`${b.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${n(d)}">
<meta property="og:description" content="${n(o(t.intro))}">
<meta property="og:url" content="${c(`${a.id}/`)}">
<meta property="og:image" content="${c("assets/photos/hero.webp")}">
<meta property="og:site_name" content="${n(t.name)}">
<meta name="theme-color" content="${n(h.bg??"#1B1612")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${oe}">
<link rel="stylesheet" href="${p("assets/style.css")}">
<style>:root{${f}}</style>
${C(be(e))}
<script src="${p("assets/site.js")}" defer><\/script>
</head>
<body data-market="${n(a.id)}" data-markets='${n(JSON.stringify(y))}'>
<a class="skip" href="#main">${n(i.skip)}</a>
${B(i)}
${ie(e)}
<main id="main">
${ce(e)}
${le(e)}
${pe(e)}
${de(e)}
${ue(e)}
${me(e)}
${fe(e)}
${ge(e)}
</main>
${ve(e)}
<nav class="dock" aria-label="${n(i.nav.order)}">
  <a href="#menu">${u("cup",20)}<span>${n(i.nav.menu)}</span></a>
  <a class="primary" href="${n(x(v,t.contact))}" ${w(v)}>${u(v,20)}<span>${n(i.via[v])}</span></a>
</nav>
</body>
</html>
`}function ie({site:e,market:t,markets:a,t:r,url:s,beans:i,channels:o}){let p=[["#menu",r.nav.menu],["#space",r.nav.space],...i.length?[["#beans",r.nav.beans]]:[],["#visit",r.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${s(`${t.id}/`)}">
      ${e.logo?`<img src="${n($(s,e.logo))}" alt="" width="36" height="36">`:`<span class="brand-mark" aria-hidden="true">${u("cup",22)}</span>`}
      <span>${n(e.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${p.map(([c,l])=>`<a href="${c}">${n(l)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${n(r.market.label)}">${u("globe",18)}<span>${n(t.id.toUpperCase())}<span class="cur"> \xB7 ${n(L(t))}</span></span></summary>
        <ul>${a.map(c=>`<li><a href="${s(`${c.id}/`)}" hreflang="${n(c.lang)}"${c.id===t.id?' aria-current="true"':""}>${n(c.country)} \xB7 ${n(c.currency)}</a></li>`).join("")}</ul>
      </details>
      <a class="btn btn--accent hide-sm" href="${n(x(o[0],e.contact))}" ${w(o[0])}>${n(r.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${n(r.nav.openMenu)}">${u("menu",22)}</summary>
        <nav aria-label="Menu">${p.map(([c,l])=>`<a href="${c}">${n(l)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function ce({site:e,t,L:a,url:r}){let s=e.hours.map(p=>p.open).sort()[0],i=e.heroImage?n($(r,e.heroImage)):r("assets/photos/hero.webp"),o=encodeURIComponent(e.contact.mapQuery??a(e.contact.address));return`<section class="hero">
  <img class="hero-bg" src="${i}" alt="" width="1600" height="1000" fetchpriority="high">
  <div class="wrap hero-copy">
    ${e.script?`<p class="script">${n(e.script)}</p>`:""}
    <h1><span class="h1-name">${n(e.name)}</span><span class="h1-tag">${n(a(e.tagline))}</span></h1>
    <p class="lead">${n(a(e.intro))}</p>
    <div class="actions">
      <a class="btn btn--accent btn--lg" href="#menu">${u("cup",18)} ${n(t.hero.menu)}</a>
      <a class="btn btn--light btn--lg" href="https://www.google.com/maps/dir/?api=1&amp;destination=${o}" target="_blank" rel="noopener">${u("pin",18)} ${n(t.hero.directions)}</a>
    </div>
    <p class="hero-open">${u("clock",18)} ${n(t.hero.openFrom)} ${n(s)} \xB7 ${n(a(e.contact.address))}</p>
  </div>
</section>`}function le({site:e,L:t}){if(!e.highlights?.length)return"";let a=e.highlights.map(r=>`<li>${n(t(r))}</li>`).join("");return`<div class="ticker" aria-label="${n(e.name)}">
  <ul class="ticker-track">${a}</ul>
  <ul class="ticker-track" aria-hidden="true">${a}</ul>
</div>`}var W=(e,t)=>e.variants.map(a=>a.size?`${a.size} ${t(a.price)}`:t(a.price)).join(" \xB7 ");function pe({menu:e,t,L:a,url:r,money:s}){let i=e.filter(o=>o.featured&&o.image).slice(0,4);return i.length?`<section class="section" aria-labelledby="sig-title">
  <div class="wrap">
    <p class="script script--sm" aria-hidden="true">No.1</p>
    <h2 id="sig-title" class="h2">${n(t.signature)}</h2>
    <div class="sig">
      ${i.map((o,p)=>`<article class="sig-card">
        <div class="sig-img"><img sizes="auto, (max-width: 640px) 50vw, 280px" src="${n($(r,o.image))}" alt="${n(a(o.name))}" width="800" height="800" loading="lazy">${o.tag?`<span class="tag">${n(a(o.tag))}</span>`:""}<span class="sig-no">0${p+1}</span></div>
        <h3>${n(a(o.name))}</h3>
        ${o.description?`<p class="muted">${n(a(o.description))}</p>`:""}
        <p class="sig-price">${n(W(o,s))}</p>
      </article>`).join("")}
    </div>
  </div>
</section>`:""}function de(e){let{menu:t,catalog:a,t:r,L:s,money:i}=e,o=a.categories.filter(c=>!c.retail&&t.some(l=>l.category===c.id)),p=c=>[...new Set(c.flatMap(l=>l.variants.map(d=>d.size).filter(Boolean)))];return`<section class="section" id="menu" aria-labelledby="menu-title">
  <div class="wrap">
    <div class="board">
      <h2 id="menu-title" class="board-title">${n(r.menu.title)}</h2>
      <div class="board-grid">
        ${o.map(c=>{let l=t.filter(h=>h.category===c.id),d=p(l);return`<div class="board-cat">
          <h3><span>${n(s(c.name))}</span>${d.length?`<span class="cols" aria-hidden="true">${d.map(h=>`<span>${n(h)}</span>`).join("")}</span>`:""}</h3>
          <ul>${l.map(h=>`<li class="row">
            <div class="row-name"><span>${n(s(h.name))}</span>${h.tag?`<em class="pill">${n(s(h.tag))}</em>`:""}${h.description&&!h.featured?`<small>${n(s(h.description))}</small>`:""}</div>
            <span class="dots" aria-hidden="true"></span>
            <span class="cols">${d.length&&h.variants.every(f=>f.size)?d.map(f=>{let b=h.variants.find(y=>y.size===f);return`<span>${b?`<span class="sr">${n(r.menu.size)} ${n(f)}: </span>${n(i(b.price))}`:"\u2013"}</span>`}).join(""):`<span class="one">${n(i(h.variants[0].price))}</span>`}</span>
          </li>`).join("")}</ul>
        </div>`}).join("")}
      </div>
      <p class="board-note">${n(r.menu.note)}</p>
    </div>
    ${he(e)}
  </div>
</section>`}function he({site:e,market:t,t:a}){let r=Array.isArray(e.delivery)?e.delivery:e.delivery?.[t.id]??[];return r.length?`<div class="delivery">
  <span>${u("bike",20)} ${n(a.delivery)}</span>
  ${r.map(s=>`<a class="btn btn--light" href="${n(s.url)}" target="_blank" rel="noopener">${n(s.name)} ${u("arrow",16)}</a>`).join("")}
</div>`:""}function ue({site:e,t,L:a,url:r}){return e.gallery?.length?`<section class="section section--soft" id="space" aria-labelledby="space-title">
  <div class="wrap">
    <p class="script script--sm" aria-hidden="true">${n(e.name)}</p>
    <h2 id="space-title" class="h2">${n(t.space)}</h2>
    <div class="mosaic">
      ${e.gallery.slice(0,4).map((s,i)=>`<figure class="tile tile-${i+1}">
        <img sizes="auto, (max-width: 640px) 100vw, 580px" src="${n($(r,s.image))}" alt="${n(a(s.caption))}" loading="lazy">
        ${s.caption?`<figcaption>${n(a(s.caption))}</figcaption>`:""}
      </figure>`).join("")}
    </div>
  </div>
</section>`:""}function me({site:e,beans:t,t:a,L:r,url:s,money:i,channels:o}){let p=e.roast;if(!p&&!t.length)return"";let c=o[0];return`<section class="section" id="beans" aria-labelledby="beans-title">
  <div class="wrap roast">
    <div class="roast-img"><img sizes="auto, (max-width: 640px) 100vw, 580px" src="${s("assets/photos/roast.webp")}" alt="" width="1100" height="800" loading="lazy"></div>
    <div class="roast-copy">
      <h2 id="beans-title" class="h2">${n(r(p?.title)||a.nav.beans)}</h2>
      ${p?.body?`<p class="lead">${n(r(p.body))}</p>`:""}
      ${p?.facts?.length?`<dl class="facts">${p.facts.map(l=>`<div><dt>${n(r(l.value))}</dt><dd>${n(r(l.label))}</dd></div>`).join("")}</dl>`:""}
    </div>
  </div>
  ${t.length?`<div class="wrap bags">
    ${t.map(l=>`<article class="bag">
      ${l.image?`<img sizes="auto, (max-width: 640px) 50vw, 280px" src="${n($(s,l.image))}" alt="${n(r(l.name))}" width="800" height="800" loading="lazy">`:""}
      <div class="bag-body">
        <h3>${n(r(l.name))}</h3>
        ${l.description?`<p class="muted">${n(r(l.description))}</p>`:""}
        <p class="bag-price">${n(W(l,i))}</p>
        <a class="btn btn--accent" href="${n(x(c,e.contact,a.orderText.replace("{product}",`${r(l.name)} ${l.variants[0].size??""}`.trim())))}" ${w(c)}>${u("bag",18)} ${n(a.beans.buy)}</a>
      </div>
    </article>`).join("")}
    <p class="bags-note muted">${n(a.beans.note)}</p>
  </div>`:""}
</section>`}function ge({site:e,t,L:a,channels:r}){let s=encodeURIComponent(e.contact.mapQuery??a(e.contact.address)),i=o=>o.length===7?t.days.join(", "):R(o,t.days);return`<section class="section section--soft" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${n(t.visit.title)}</h2>
      ${q(e,t)}
      <h3 class="h4">${u("clock",18)} ${n(t.visit.hours)}</h3>
      <table class="hours"><tbody>${e.hours.map(o=>`<tr><th scope="row">${n(i(o.days))}</th><td>${n(o.open)} \u2013 ${n(o.close)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${u("pin",18)} ${n(t.visit.address)}</h3>
      <p>${n(a(e.contact.address))}</p>
      <div class="actions">
        <a class="btn btn--light" href="https://www.google.com/maps/dir/?api=1&amp;destination=${s}" target="_blank" rel="noopener">${n(t.visit.directions)} ${u("arrow",16)}</a>
        ${r.map(o=>`<a class="btn btn--ghost" href="${n(x(o,e.contact))}" ${w(o)}>${u(o,18)} ${n(t.via[o])}</a>`).join("")}
      </div>
    </div>
    <div class="map"><iframe title="${n(t.visit.address)}" src="https://www.google.com/maps?q=${s}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function fe({site:e,t,L:a,lang:r}){let s=F(e,t,r,"btn btn--light"),i=O(e);return e.showReviews===!1||!i.length&&!s?"":`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${n(t.reviews.title)}</h2>
    ${I(i,r,"reviews",o=>`<figure class="review">
      <p class="stars" aria-label="${n(o.rating)}/5">${Array.from({length:5},(p,c)=>`<span class="${c<o.rating?"on":""}">${u("star",16)}</span>`).join("")}</p>
      <blockquote>${n(a(o.text))}</blockquote>
      <figcaption>${n(o.name)}${o.bought?`<small>${n(a(o.bought))}</small>`:""}${A(o,r)}</figcaption>
    </figure>`)}${s}
  </div>
</section>`}function ve({site:e,t,L:a,market:r}){let s=e.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${n(e.name)}</p><p class="muted">${n(a(e.tagline))}</p></div>
    <div><p class="foot-h">${n(t.footer.contact)}</p><ul>
      ${s.phone?`<li><a href="tel:${k(s.phone)}">${n(s.phone)}</a></li>`:""}
      ${s.email?`<li><a href="mailto:${n(s.email)}">${n(s.email)}</a></li>`:""}
      <li>${n(a(s.address))}</li></ul></div>
    ${e.social?`<div><p class="foot-h">${n(t.footer.follow)}</p><ul>${Object.entries(e.social).filter(([,i])=>i).map(([i,o])=>`<li><a href="${n(o)}" target="_blank" rel="noopener">${n(i[0].toUpperCase()+i.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${e.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${n(e.name)}</span>${V(e,t,r.lang)}</div>
</footer>`}function be({site:e,market:t,L:a,abs:r,menu:s,beans:i,catalog:o}){let p=[...s,...i];return{"@context":"https://schema.org","@type":"CafeOrCoffeeShop",name:e.name,url:r(`${t.id}/`),image:r("assets/photos/hero.webp"),description:a(e.intro),telephone:e.contact.phone,email:e.contact.email,servesCuisine:"Coffee",address:{"@type":"PostalAddress",streetAddress:a(e.contact.address)},currenciesAccepted:t.currency,openingHoursSpecification:E(e.hours),hasMenu:{"@type":"Menu",hasMenuSection:o.categories.filter(c=>p.some(l=>l.category===c.id)).map(c=>({"@type":"MenuSection",name:a(c.name),hasMenuItem:p.filter(l=>l.category===c.id).map(l=>({"@type":"MenuItem",name:a(l.name),...l.description?{description:a(l.description)}:{},offers:l.variants.map(d=>({"@type":"Offer",...d.size?{name:d.size}:{},price:d.price,priceCurrency:t.currency}))}))}))}}}export{Re as renderSite};
