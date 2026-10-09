var _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(n="")=>String(n).replace(/[&<>"']/g,t=>_[t]);function w(n,t,a="vi"){return n==null?"":typeof n!="object"?String(n):n[t]??n[a]??Object.values(n)[0]??""}var H={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},D=n=>H[n]??"en-US";function K(n,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(n)-.01);let a=Number(t)||1;return Math.max(a,Math.round(n/a)*a)}function P(n,t){if(t.default)return n.basePrice;let a=n.prices?.[t.id]??{mode:"auto"};return a.mode==="hidden"?null:a.mode==="manual"?a.amount:K(n.basePrice*t.rate,t.rounding)}var J=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function z(n,t){let a={style:"currency",currency:t.currency};return J.has(t.currency)&&(a.maximumFractionDigits=0),new Intl.NumberFormat(D(t.lang),a).format(n)}function T(n="/"){let t=n.endsWith("/")?n:`${n}/`;return(a="")=>t+String(a).replace(/^\//,"")}var Z=(n="")=>n.startsWith("uploads/")?n:/^([a-z]+:|\/)/i.test(n)?null:`assets/${n}`,y=(n,t)=>{let a=Z(t);return a==null?t:n(a)},v=(n="")=>String(n).replace(/\D/g,"");function M(n,t,a=""){switch(n){case"phone":return`tel:${v(t.phone)}`;case"zalo":return`https://zalo.me/${v(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${v(t.whatsapp)}${a?`?text=${encodeURIComponent(a)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${a?`?subject=${encodeURIComponent(a)}`:""}`;default:return"#"}}var j=n=>`<script type="application/ld+json">${JSON.stringify(n).replace(/</g,"\\u003c")}<\/script>`,Y=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function C(n){if(!n||typeof n!="string")return null;let t;try{t=new URL(n.trim())}catch{return{error:"not-google"}}if(t.hostname==="forms.gle")return{error:"short-link"};let a=t.hostname==="docs.google.com"&&t.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!a)return{error:"not-google"};let r={};for(let[s,i]of t.searchParams){if(!/^entry\.\d+$/.test(s))continue;let o=i.trim().replace(/^\{|\}$/g,"").toLowerCase();Y.includes(o)&&(r[o]=s)}return Object.keys(r).length?r.phone?{action:`https://docs.google.com/forms/d/e/${a[1]}/formResponse`,fields:r}:{error:"no-phone"}:{error:"no-fields"}}var X={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},p=(n,t=20,a="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${a}>${X[n]??""}</svg>`;function q(n){return new Intl.NumberFormat(D(n.lang),{style:"currency",currency:n.currency}).formatToParts(0).find(a=>a.type==="currency")?.value??n.currency}var E=n=>n==="phone"||n==="email"?"":'target="_blank" rel="noopener"',L=n=>`<div class="suggest" id="market-suggest" data-suggest="${e(n.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(n.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(n.market.dismiss)}">\xD7</button>
</div>`;var R={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},Q=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,ee=n=>{try{let t=new URL(String(n.googleReview??"").trim());return t.protocol==="https:"&&Q.test(t.hostname)?t.href:""}catch{return""}},B=(n,t,a,r="btn btn--line")=>{let s=ee(n);if(!s)return"";let i=typeof t.reviews=="object"&&t.reviews?.google||R[a]||R.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${r}" href="${e(s)}" target="_blank" rel="noopener">${p("star",16)} ${e(i)}</a></p>`},$={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},F={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},k=n=>(n.reviews??[]).filter(t=>t&&(t.name||t.text)&&!(typeof t.text=="object"&&t.text&&!Object.values(t.text).some(Boolean)&&!t.name));function O(n,t){let a=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(n?.date??"").trim());if(!a)return"";let r=new Date(Date.UTC(+a[1],+a[2]-1,+(a[3]??1)));if(Number.isNaN(r.getTime()))return"";let s=new Intl.DateTimeFormat(F[t]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(r);return`<time class="rv-date" datetime="${e(n.date)}">${e(s)}</time>`}function te(n,t){let a=n.filter(o=>o.rating>=1&&o.rating<=5);if(a.length<2)return"";let r=a.reduce((o,c)=>o+Number(c.rating),0)/a.length,s=$[t]??$.en,i=new Intl.NumberFormat(F[t]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(r);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${p("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${e(s.count.replace("{n}",String(n.length)))}</span></p>`}function G(n,t,a,r){if(!n.length)return"";let s=$[t]??$.en,i=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${e(o==="prev"?s.prev:s.next)}">${p("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${te(n,t)}<div class="rv" data-rv data-more="${e(s.more)}" data-less="${e(s.less)}">
      <div class="${a} rv-track" tabindex="0">${n.map(r).join("")}</div>
      <div class="rv-nav" hidden>${i("prev")}${i("next")}</div>
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
upd()}})()<\/script>`;var A=(n,t,a)=>n.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(a==="vi"||a==="ja"?a:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(t.footer.madeWith)}</a>`;function I({site:n,markets:t,url:a,abs:r}){let s=t.find(o=>o.default)??t[0],i=t.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${e(s.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(n.name)}</title>
<link rel="canonical" href="${r(`${s.id}/`)}">
${t.map(o=>`<link rel="alternate" hreflang="${e(o.lang)}-${e(o.country)}" href="${r(`${o.id}/`)}">`).join(`
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
<body><p>${t.map(o=>`<a href="${a(`${o.id}/`)}">${e(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var ae="https://fonts.googleapis.com/css2?family=Young+Serif&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",S=12,oe=["room","space","food","around"];function re(n,t){return(n.products??[]).map(a=>({...a,variants:(a.variants??[]).map(r=>({...r,price:P(r,t)})).filter(r=>r.price!=null)})).filter(a=>a.variants.length>0)}function Re({site:n,catalog:t,i18n:a,template:r,basePath:s="/",siteUrl:i=n.domain}){let o=T(s),c=g=>new URL(o(g),i).href,l=t.markets,h=C(n.bookingForm),m=h&&!h.error?h:null,f=l.map(g=>{let d=g.lang,b=a[d]??a.en??a.vi,u=x=>w(x,d,"en"),V=re(t,g),U=n.bookingChannels?.[g.id]??["phone"],W={site:n,catalog:t,market:g,markets:l,lang:d,t:b,L:u,url:o,abs:c,rooms:V,channels:U,money:x=>z(x,g),template:r,gform:m};return{path:`${g.id}/index.html`,html:ie(W)}});return f.push({path:"index.html",html:I({site:n,markets:l,url:o,abs:c})}),f}var N=(n,t)=>n.heroImage?y(t,n.heroImage):t("assets/photos/hero.webp");function ie(n){let{site:t,market:a,markets:r,lang:s,t:i,L:o,url:c,abs:l}=n,h=`${t.name} \xB7 ${o(t.tagline)}`,m=t.theme??{},f=["primary","ink","bg","surface","soft","accent"].filter(u=>m[u]).map(u=>`--${u}:${m[u]}`).join(";"),g=r.find(u=>u.default)??r[0],d=r.map(u=>({id:u.id,lang:u.lang,country:u.country,currency:u.currency,href:c(`${u.id}/`)})),b=t.contact??{};return`<!doctype html>
<html lang="${e(s)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(h)}</title>
<meta name="description" content="${e(o(t.intro))}">
<link rel="canonical" href="${l(`${a.id}/`)}">
${r.map(u=>`<link rel="alternate" hreflang="${e(u.lang)}-${e(u.country)}" href="${l(`${u.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${l(`${g.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${e(h)}">
<meta property="og:description" content="${e(o(t.intro))}">
<meta property="og:url" content="${l(`${a.id}/`)}">
<meta property="og:site_name" content="${e(t.name)}">
<meta property="og:image" content="${e(new URL(N(t,c),l("")).href)}">
<meta name="theme-color" content="${e(m.primary??"#1F6F6B")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${ae}">
<link rel="stylesheet" href="${c("assets/style.css")}">
<style>:root{${f}}</style>
<noscript><style>.album .more{display:block}.album-more,.chips{display:none}</style></noscript>
${j(ye(n))}
<script src="${c("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(a.id)}" data-markets='${e(JSON.stringify(d))}' data-wa="${e(v(b.whatsapp))}" data-email="${e(b.email??"")}" data-copied="${e(i.booking.copied)}">
<a class="skip" href="#main">${e(i.skip)}</a>
${L(i)}
${se(n)}
<main id="main">
${le(n)}
${ce(n)}
${pe(n)}
${de(n)}
${ue(n)}
${he(n)}
${me(n)}
${ge(n)}
${fe(n)}
${be(n)}
</main>
${ve(n)}
<nav class="dock" aria-label="${e(i.nav.book)}">
  <a href="#rooms">${p("bed",20)}<span>${e(i.nav.rooms)}</span></a>
  <a class="primary" href="#booking">${p("calendar",20)}<span>${e(i.nav.book)}</span></a>
</nav>
</body>
</html>
`}function se({site:n,market:t,markets:a,t:r,url:s}){let i=[["#rooms",r.nav.rooms],["#album",r.nav.album],["#around",r.nav.around],["#visit",r.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${s(`${t.id}/`)}">
      ${n.logo?`<img src="${e(y(s,n.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${p("sun",22)}</span>`}
      <span>${e(n.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${i.map(([o,c])=>`<a href="${o}">${e(c)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${a.length>1?`<details class="market">
        <summary aria-label="${e(r.market.label)}">${p("globe",18)}<span>${e(t.id.toUpperCase())}<span class="cur"> \xB7 ${e(q(t))}</span></span></summary>
        <ul>${a.map(o=>`<li><a href="${s(`${o.id}/`)}" hreflang="${e(o.lang)}"${o.id===t.id?' aria-current="true"':""}>${e(o.country)} \xB7 ${e(o.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-sm" href="#booking">${e(r.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${e(r.nav.openMenu)}">${p("menu",22)}</summary>
        <nav aria-label="Menu">${[...i,["#booking",r.nav.book]].map(([o,c])=>`<a href="${o}">${e(c)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function le(n){let{site:t,t:a,L:r,url:s,rooms:i,money:o}=n,c=i.length?Math.min(...i.map(m=>m.variants[0].price)):null,l=k(t).filter(m=>m.rating),h=l.length?(l.reduce((m,f)=>m+f.rating,0)/l.length).toFixed(1):null;return`<section class="hero">
  <img class="hero-bg" src="${e(N(t,s))}" alt="" width="1600" height="1000" fetchpriority="high">
  <div class="hero-veil" aria-hidden="true"></div>
  <div class="wrap hero-copy">
    ${r(t.place)?`<p class="eyebrow">${p("pin",16)} ${e(r(t.place))}</p>`:""}
    <h1>${e(r(t.tagline))}</h1>
    ${r(t.intro)?`<p class="lead">${e(r(t.intro))}</p>`:""}
    <div class="actions">
      <a class="btn btn--primary btn--lg" href="#booking">${p("calendar",18)} ${e(a.hero.book)}</a>
      <a class="btn btn--light btn--lg" href="#rooms">${e(a.hero.rooms)}</a>
    </div>
    <ul class="chips-hero">
      ${c!=null?`<li>${a.hero.from.replace("{price}",`<strong>${e(o(c))}</strong>`)}</li>`:""}
      ${h?`<li>${p("star",16)} <strong>${h}</strong> \xB7 ${e(a.hero.reviews.replace("{n}",l.length))}</li>`:""}
      ${t.rules?.checkIn?`<li>${p("clock",16)} ${e(a.rules.checkIn)} ${e(t.rules.checkIn)}</li>`:""}
    </ul>
  </div>
</section>`}function ce({rooms:n,t,L:a,url:r,money:s}){return n.length?`<section class="section" id="rooms" aria-labelledby="rooms-title">
  <div class="wrap">
    <div class="head"><h2 id="rooms-title" class="h2">${e(t.rooms.title)}</h2><p class="muted">${e(t.rooms.text)}</p></div>
    <div class="rooms">${n.map(i=>{let o=i.facts??{},[c,l]=i.variants;return`<article class="room">
      <figure>${i.image?`<img sizes="auto, (max-width: 640px) 100vw, 560px" src="${e(y(r,i.image))}" alt="${e(a(i.name))}" width="1200" height="800" loading="lazy">`:""}${i.tag?`<span class="tag">${e(a(i.tag))}</span>`:""}</figure>
      <div class="room-body">
        <h3>${e(a(i.name))}</h3>
        <ul class="facts">
          ${o.guests?`<li>${p("users",16)} ${e(t.rooms.guests.replace("{n}",o.guests))}</li>`:""}
          ${a(o.bed)?`<li>${p("bed",16)} ${e(a(o.bed))}</li>`:""}
          ${o.size?`<li>${p("ruler",16)} ${e(o.size)} m\xB2</li>`:""}
        </ul>
        ${a(i.description)?`<p class="muted">${e(a(i.description))}</p>`:""}
        <div class="room-foot">
          <p class="rate"><strong>${e(s(c.price))}</strong> <span>/ ${e(t.rooms.night)}</span>${l&&l.price!==c.price?`<small>${e(a(l.label)||t.rooms.weekend)}: ${e(s(l.price))}</small>`:""}</p>
          <button type="button" class="btn btn--line" data-pick="${e(i.id)}">${e(t.rooms.pick)}</button>
        </div>
      </div>
    </article>`}).join("")}</div>
  </div>
</section>`:""}function pe({site:n,t,L:a}){let r=(n.amenities??[]).filter(s=>a(s?.label));return r.length?`<section class="section section--soft" aria-labelledby="am-title">
  <div class="wrap">
    <h2 id="am-title" class="h2">${e(t.amenities)}</h2>
    <ul class="amen">${r.map(s=>`<li><span class="amen-i">${p(s.icon??"check",22)}</span>${e(a(s.label))}</li>`).join("")}</ul>
  </div>
</section>`:""}function de({site:n,t,url:a}){let r=(n.album??[]).filter(o=>o?.image);if(!r.length)return"";let s=o=>r.filter(c=>c.tag===o).length,i=[["",t.album.all,r.length],...oe.filter(s).map(o=>[o,t.album.tags[o],s(o)])];return`<section class="section" id="album" aria-labelledby="album-title">
  <div class="wrap">
    <div class="head"><h2 id="album-title" class="h2">${e(t.album.title)}</h2><p class="muted">${e(t.album.text)}</p></div>
    ${i.length>2?`<div class="chips" role="group" aria-label="${e(t.album.filter)}">${i.map(([o,c,l],h)=>`<button type="button" class="chip" data-tag="${o}" aria-pressed="${h===0}">${e(c)} <span>${l}</span></button>`).join("")}</div>`:""}
    <div class="album" data-album>${r.map((o,c)=>{let l=e(y(a,o.image));return`<a class="ph${c>=S?" more":""}" href="${l}" data-i="${c}" data-t="${e(o.tag??"")}"><img sizes="auto, (max-width: 640px) 50vw, 300px" src="${l}" alt="${e(`${n.name} ${c+1}`)}" width="1000" height="750" loading="lazy"></a>`}).join("")}</div>
    ${r.length>S?`<p class="center"><button type="button" class="btn btn--line album-more" data-album-more>${e(t.album.more)} <span data-left>(${r.length-S})</span></button></p>`:""}
  </div>
  <dialog class="lb" data-lightbox aria-label="${e(t.album.title)}">
    <img alt="" data-lb-img>
    <button type="button" class="lb-btn lb-close" data-lb-close aria-label="${e(t.album.close)}">\u2715</button>
    <button type="button" class="lb-btn lb-prev" data-lb-prev aria-label="${e(t.album.prev)}">${p("arrow",22,'style="transform:scaleX(-1)"')}</button>
    <button type="button" class="lb-btn lb-next" data-lb-next aria-label="${e(t.album.next)}">${p("arrow",22)}</button>
    <p class="lb-count" data-lb-count></p>
  </dialog>
</section>`}function ue({site:n,t,L:a,url:r}){let s=(n.around??[]).filter(i=>a(i?.name));return s.length?`<section class="section section--soft" id="around" aria-labelledby="around-title">
  <div class="wrap">
    <div class="head"><h2 id="around-title" class="h2">${e(t.around.title)}</h2><p class="muted">${e(t.around.text)}</p></div>
    <div class="around">${s.map(i=>`<article class="spot">
      ${i.image?`<img sizes="auto, (max-width: 640px) 100vw, 380px" src="${e(y(r,i.image))}" alt="${e(a(i.name))}" width="1000" height="750" loading="lazy">`:""}
      <div class="spot-body"><h3>${e(a(i.name))}</h3>${a(i.distance)?`<p class="dist">${p("pin",14)} ${e(a(i.distance))}</p>`:""}${a(i.text)?`<p class="muted">${e(a(i.text))}</p>`:""}</div>
    </article>`).join("")}</div>
  </div>
</section>`:""}function he({site:n,t,L:a,lang:r}){let s=B(n,t,r,"btn btn--line"),i=k(n);return n.showReviews===!1||!i.length&&!s?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(t.reviews)}</h2>
    ${G(i,r,"quotes",o=>`<figure class="quote">
      ${o.rating?`<div class="stars" aria-label="${o.rating}/5">${Array.from({length:5},(c,l)=>`<span class="${l<o.rating?"on":""}">${p("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${e(a(o.text))}</blockquote>
      <figcaption>${e(o.name)}${O(o,r)}</figcaption>
    </figure>`)}${s}
  </div>
</section>`}function me({site:n,rooms:t,t:a,L:r,channels:s,money:i,market:o,gform:c}){let l=a.booking,h=n.contact??{},m=c?` data-gform="${e(c.action)}" data-gmap='${e(JSON.stringify(c.fields))}'`:"",f=s.map((d,b)=>`<button type="button" class="btn ${b===0?"btn--primary":"btn--line"}" data-channel="${e(d)}" data-href="${e(M(d,h,""))}">${p(d,18)} ${e(a.via[d]??d)}</button>`).join(""),g=["VND","JPY","KRW","IDR"].includes(o.currency)?0:2;return`<section class="section section--deep" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="booking-copy">
      <h2 id="book-title" class="h2">${e(l.title)}</h2>
      <p class="lead">${e(l.text)}</p>
      <div class="actions">${s.map(d=>`<a class="btn btn--light" href="${e(M(d,h))}" ${E(d)}>${p(d,18)} ${e(a.via[d]??d)}</a>`).join("")}</div>
    </div>
    <form class="card form" data-book novalidate${m} data-order-text="${e(l.message)}">
      <div class="book-fields">
        <label class="field"><span>${e(l.room)}</span><select name="product">${t.map(d=>`<option value="${e(r(d.name))}" data-id="${e(d.id)}" data-wd="${d.variants[0].price}" data-we="${(d.variants[1]??d.variants[0]).price}">${e(r(d.name))} \xB7 ${e(i(d.variants[0].price))}</option>`).join("")}</select></label>
        <div class="row2">
          <label class="field"><span>${e(l.checkIn)}</span><input name="in" type="date" required></label>
          <label class="field"><span>${e(l.checkOut)}</span><input name="out" type="date" required></label>
        </div>
        <div class="row2">
          <label class="field"><span>${e(l.guests)}</span><input name="qty" type="number" inputmode="numeric" min="1" max="30" value="2"></label>
          <label class="field"><span>${e(l.total)}</span><output data-total data-cur="${e(o.currency)}" data-lang="${e(o.lang)}" data-dec="${g}" data-nights="${e(l.nights)}" data-night1="${e(l.night1??l.nights)}">\u2013</output></label>
        </div>
        <div class="row2">
          <label class="field"><span>${e(l.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${e(l.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field"><span>${e(l.note)}</span><textarea name="note" rows="2" maxlength="400" placeholder="${e(l.noteHint)}"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${e(l.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${e(l.sending)}">${p("calendar",18)} ${e(l.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${p(c?"check":"arrow",22)} ${e(c?l.done:l.stepTitle)}</p>
        <p>${e(c?l.doneText:l.stepText)}</p>
        ${c?"":`<div class="buy">${f}</div><button type="button" class="link" data-edit>${e(l.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function ge({site:n,t,L:a}){let r=n.rules;if(!r)return"";let s=[r.checkIn&&[p("clock",20),t.rules.checkIn,r.checkIn],r.checkOut&&[p("clock",20),t.rules.checkOut,r.checkOut],...(r.list??[]).filter(i=>a(i)).map(i=>[p("check",20),"",a(i)])].filter(Boolean);return s.length?`<section class="section" aria-labelledby="rules-title">
  <div class="wrap narrow">
    <h2 id="rules-title" class="h2">${e(t.rules.title)}</h2>
    <ul class="rules">${s.map(([i,o,c])=>`<li>${i}<span>${o?`<strong>${e(o)}</strong> `:""}${e(c)}</span></li>`).join("")}</ul>
  </div>
</section>`:""}function fe({site:n,t,L:a}){let r=n.contact??{},s=encodeURIComponent(r.mapQuery??a(r.address));return`<section class="section section--soft" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${e(t.visit.title)}</h2>
      ${a(r.address)?`<p class="addr">${p("pin",18)} ${e(a(r.address))}</p>`:""}
      ${a(n.directions)?`<p class="muted">${e(a(n.directions))}</p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${s}" target="_blank" rel="noopener">${e(t.visit.directions)} ${p("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${e(t.visit.title)}" src="https://www.google.com/maps?q=${s}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function be({site:n,t,L:a}){let r=(n.faq??[]).filter(s=>a(s?.q));return r.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${e(t.faq.title)}</h2>
    <div class="qa">${r.map((s,i)=>`<details${i===0?" open":""}><summary>${e(a(s.q))}</summary><p>${e(a(s.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function ve({site:n,t,L:a,market:r}){let s=n.contact??{},i=Object.entries(n.social??{}).filter(([,o])=>o);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(n.name)}</p><p class="muted">${e(a(n.tagline))}</p></div>
    <div><p class="foot-h">${e(t.footer.contact)}</p><ul>
      ${s.phone?`<li><a href="tel:${v(s.phone)}">${e(s.phone)}</a></li>`:""}
      ${s.email?`<li><a href="mailto:${e(s.email)}">${e(s.email)}</a></li>`:""}
      ${a(s.address)?`<li>${e(a(s.address))}</li>`:""}</ul></div>
    ${i.length?`<div><p class="foot-h">${e(t.footer.follow)}</p><ul>${i.map(([o,c])=>`<li><a href="${e(c)}" target="_blank" rel="noopener">${e(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${n.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(n.name)}</span>${A(n,t,r.lang)}</div>
</footer>`}function ye({site:n,market:t,L:a,abs:r,url:s,rooms:i}){let o=n.contact??{},c=k(n).filter(l=>l.rating);return{"@context":"https://schema.org","@type":"LodgingBusiness",name:n.name,url:r(`${t.id}/`),description:a(n.intro),image:new URL(N(n,s),r("")).href,telephone:o.phone,email:o.email,address:{"@type":"PostalAddress",streetAddress:a(o.address)},checkinTime:n.rules?.checkIn,checkoutTime:n.rules?.checkOut,amenityFeature:(n.amenities??[]).filter(l=>a(l?.label)).map(l=>({"@type":"LocationFeatureSpecification",name:a(l.label),value:!0})),priceRange:i.length?`${Math.min(...i.map(l=>l.variants[0].price))}\u2013${Math.max(...i.map(l=>l.variants.at(-1).price))} ${t.currency}`:void 0,...c.length?{aggregateRating:{"@type":"AggregateRating",ratingValue:(c.reduce((l,h)=>l+h.rating,0)/c.length).toFixed(1),reviewCount:c.length}}:{}}}export{Re as renderSite};
