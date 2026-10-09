var A={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(a="")=>String(a).replace(/[&<>"']/g,t=>A[t]);function w(a,t,n="vi"){return a==null?"":typeof a!="object"?String(a):a[t]??a[n]??Object.values(a)[0]??""}var I={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},D=a=>I[a]??"en-US";function P(a="/"){let t=a.endsWith("/")?a:`${a}/`;return(n="")=>t+String(n).replace(/^\//,"")}var S=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,f=(a,t)=>{let n=S(t);return n==null?t:a(n)},b=(a="")=>String(a).replace(/\D/g,"");function T(a,t,n=""){switch(a){case"phone":return`tel:${b(t.phone)}`;case"zalo":return`https://zalo.me/${b(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${b(t.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var z=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`,U=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function C(a){if(!a||typeof a!="string")return null;let t;try{t=new URL(a.trim())}catch{return{error:"not-google"}}if(t.hostname==="forms.gle")return{error:"short-link"};let n=t.hostname==="docs.google.com"&&t.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!n)return{error:"not-google"};let s={};for(let[r,i]of t.searchParams){if(!/^entry\.\d+$/.test(r))continue;let o=i.trim().replace(/^\{|\}$/g,"").toLowerCase();U.includes(o)&&(s[o]=r)}return Object.keys(s).length?s.phone?{action:`https://docs.google.com/forms/d/e/${n[1]}/formResponse`,fields:s}:{error:"no-phone"}:{error:"no-fields"}}var V={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},c=(a,t=20,n="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${V[a]??""}</svg>`;var j=a=>`<div class="suggest" id="market-suggest" data-suggest="${e(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(a.market.dismiss)}">\xD7</button>
</div>`;var $={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},R={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},q=a=>(a.reviews??[]).filter(t=>t&&(t.name||t.text)&&!(typeof t.text=="object"&&t.text&&!Object.values(t.text).some(Boolean)&&!t.name));function E(a,t){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(a?.date??"").trim());if(!n)return"";let s=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(s.getTime()))return"";let r=new Intl.DateTimeFormat(R[t]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(s);return`<time class="rv-date" datetime="${e(a.date)}">${e(r)}</time>`}function W(a,t){let n=a.filter(o=>o.rating>=1&&o.rating<=5);if(n.length<2)return"";let s=n.reduce((o,l)=>o+Number(l.rating),0)/n.length,r=$[t]??$.en,i=new Intl.NumberFormat(R[t]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(s);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${c("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${e(r.count.replace("{n}",String(a.length)))}</span></p>`}function L(a,t,n,s){if(!a.length)return"";let r=$[t]??$.en,i=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${e(o==="prev"?r.prev:r.next)}">${c("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${W(a,t)}<div class="rv" data-rv data-more="${e(r.more)}" data-less="${e(r.less)}">
      <div class="${n} rv-track" tabindex="0">${a.map(s).join("")}</div>
      <div class="rv-nav" hidden>${i("prev")}${i("next")}</div>
    </div>${_}`}var _=`<style>
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
upd()}})()<\/script>`;var B=(a,t,n)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(t.footer.madeWith)}</a>`;function F({site:a,markets:t,url:n,abs:s}){let r=t.find(o=>o.default)??t[0],i=t.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${e(r.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(a.name)}</title>
<link rel="canonical" href="${s(`${r.id}/`)}">
${t.map(o=>`<link rel="alternate" hreflang="${e(o.lang)}-${e(o.country)}" href="${s(`${o.id}/`)}">`).join(`
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
<body><p>${t.map(o=>`<a href="${n(`${o.id}/`)}">${e(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var H="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",M=12;function we({site:a,catalog:t,i18n:n,template:s,basePath:r="/",siteUrl:i=a.domain}){let o=P(r),l=u=>new URL(o(u),i).href,p=t.markets,d=C(a.rsvpForm),g=d&&!d.error?d:null,h=p.map(u=>{let v=u.lang,k=n[v]??n.en??n.vi,x=O=>w(O,v,"en"),y=a.orderChannels?.[u.id]??["phone"],m={site:a,catalog:t,market:u,markets:p,lang:v,t:k,L:x,url:o,abs:l,channels:y,template:s,gform:g};return{path:`${u.id}/index.html`,html:Z(m)}});return h.push({path:"index.html",html:F({site:a,markets:p,url:o,abs:l})}),h}var G=(a,t)=>new Date(`${t.date}T${t.time||"00:00"}:00${a.utcOffset||"+07:00"}`),K=a=>(a.events??[]).find(t=>t.main)??(a.events??[])[0];function N(a,t){let n=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(a??""));if(!n)return"";let s=new Date(Date.UTC(+n[1],+n[2]-1,+n[3],12));return new Intl.DateTimeFormat(D(t),{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}).format(s)}function J(a,t,n){let s=G(a,t);if(Number.isNaN(s.getTime()))return"";let r=l=>l.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),i=new Date(s.getTime()+2*36e5);return`https://calendar.google.com/calendar/render?${new URLSearchParams({action:"TEMPLATE",text:`${n(t.name)} \xB7 ${a.name}`,dates:`${r(s)}/${r(i)}`,location:`${n(t.place)}, ${n(t.address)}`})}`}function Z(a){let{site:t,market:n,markets:s,lang:r,t:i,L:o,url:l,abs:p,channels:d}=a,g=`${t.name} \xB7 ${o(t.tagline)}`,h=t.theme??{},u=["primary","ink","bg","surface","soft","accent"].filter(m=>h[m]).map(m=>`--${m}:${h[m]}`).join(";"),v=s.find(m=>m.default)??s[0],k=s.map(m=>({id:m.id,lang:m.lang,country:m.country,currency:m.currency,href:l(`${m.id}/`)})),x=t.heroImage?p(S(t.heroImage)??t.heroImage):p("assets/photos/hero.webp"),y=t.contact??{};return`<!doctype html>
<html lang="${e(r)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(g)}</title>
<meta name="description" content="${e(o(t.intro))}">
<link rel="canonical" href="${p(`${n.id}/`)}">
${s.map(m=>`<link rel="alternate" hreflang="${e(m.lang)}-${e(m.country)}" href="${p(`${m.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${p(`${v.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${e(g)}">
<meta property="og:description" content="${e(o(t.intro))}">
<meta property="og:url" content="${p(`${n.id}/`)}">
<meta property="og:image" content="${e(x)}">
<meta property="og:site_name" content="${e(t.name)}">
<meta name="theme-color" content="${e(h.primary??"#A8676F")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${H}">
<link rel="stylesheet" href="${l("assets/style.css")}">
<style>:root{${u}}</style>
<noscript><style>.album .more{display:block}.album-more{display:none}</style></noscript>
${z(ce(a))}
<script src="${l("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(n.id)}" data-markets='${e(JSON.stringify(k))}' data-wa="${e(b(y.whatsapp))}" data-email="${e(y.email??"")}" data-copied="${e(i.gift.copied)}">
<a class="skip" href="#main">${e(i.skip)}</a>
${j(i)}
${Y(a)}
<main id="main">
${X(a)}
${Q(a)}
${ee(a)}
${te(a)}
${ae(a)}
${ne(a)}
${oe(a)}
${re(a)}
${se(a)}
${ie(a)}
</main>
${le(a)}
<nav class="dock" aria-label="${e(i.nav.rsvp)}">
  <a href="#events">${c("calendar",20)}<span>${e(i.nav.events)}</span></a>
  <a class="primary" href="#rsvp">${c("check",20)}<span>${e(i.nav.order)}</span></a>
</nav>
</body>
</html>
`}function Y({site:a,market:t,markets:n,t:s,url:r}){let i=[["#story",s.nav.story],["#events",s.nav.events],["#album",s.nav.album],["#gift",s.nav.gift]],o=a.couple?.bride?.name,l=a.couple?.groom?.name,p=o&&l?`${o.trim().split(/\s+/).pop()[0]}&${l.trim().split(/\s+/).pop()[0]}`:a.name;return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${r(`${t.id}/`)}">
      ${a.logo?`<img src="${e(f(r,a.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${e(p)}</span>`}
      <span>${e(a.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${i.map(([d,g])=>`<a href="${d}">${e(g)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${n.length>1?`<details class="market">
        <summary aria-label="${e(s.market.label)}">${c("globe",18)}<span>${e(t.lang.toUpperCase())}</span></summary>
        <ul>${n.map(d=>`<li><a href="${r(`${d.id}/`)}" hreflang="${e(d.lang)}"${d.id===t.id?' aria-current="true"':""}>${e(d.lang.toUpperCase())} \xB7 ${e(d.country)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-sm" href="#rsvp">${e(s.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${e(s.nav.openMenu)}">${c("menu",22)}</summary>
        <nav aria-label="Menu">${[...i,["#rsvp",s.nav.rsvp]].map(([d,g])=>`<a href="${d}">${e(g)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function X(a){let{site:t,t:n,L:s,url:r,lang:i}=a,o=t.heroImage?e(f(r,t.heroImage)):r("assets/photos/hero.webp"),l=K(t),p=l?G(t,l):null,d=t.couple?.bride?.name??"",g=t.couple?.groom?.name??"",h=u=>`<span class="cd-box"><b data-cd="${u}">\u2013</b><small>${e(n.hero[u])}</small></span>`;return`<section class="hero">
  <img class="hero-bg" src="${o}" alt="" width="1600" height="1000" fetchpriority="high">
  <div class="hero-veil" aria-hidden="true"></div>
  <div class="wrap hero-copy">
    <p class="kicker">${e(s(t.tagline))}</p>
    <h1 class="names">${d&&g?`<span>${e(d)}</span><span class="amp" aria-hidden="true">&amp;</span><span class="sr"> &amp; </span><span>${e(g)}</span>`:e(t.name)}</h1>
    ${t.date?`<p class="date">${e(N(t.date,i))}</p>`:""}
    ${l?`<p class="place">${c("pin",18)} ${e(s(l.place))}</p>`:""}
    ${p&&!Number.isNaN(p.getTime())?`<div class="countdown" data-countdown="${e(p.toISOString())}" data-today="${e(n.hero.today)}" data-after="${e(n.hero.after)}" aria-live="off">
      ${h("days")}${h("hours")}${h("minutes")}${h("seconds")}
    </div>`:""}
    <div class="actions">
      <a class="btn btn--primary btn--lg" href="#rsvp">${c("check",18)} ${e(n.hero.rsvp)}</a>
      <a class="btn btn--light btn--lg" href="#events">${c("calendar",18)} ${e(n.hero.events)}</a>
    </div>
  </div>
</section>`}function Q({site:a,t,L:n}){let s=(r,i,o)=>r?`<div class="person">
      <p class="side">${e(i)}</p>
      ${r.parents?`<p class="parents">${e(n(r.parents))}</p>`:""}
      <p class="role">${e(o)}</p>
      <p class="full">${e(n(r.fullName)||r.name)}</p>
    </div>`:"";return`<section class="section invite" aria-labelledby="invite-title">
  <div class="wrap narrow center">
    <p class="script" id="invite-title">${e(t.invite.title)}</p>
    ${a.invite?`<p class="lead">${e(n(a.invite))}</p>`:""}
    <div class="couple">
      ${s(a.couple?.groom,t.invite.groomSide,t.invite.groom)}
      <span class="heart" aria-hidden="true">${c("heart",28)}</span>
      ${s(a.couple?.bride,t.invite.brideSide,t.invite.bride)}
    </div>
  </div>
</section>`}function ee({site:a,t,L:n,url:s}){let r=a.story;return r?`<section class="section section--soft" id="story" aria-labelledby="story-title">
  <div class="wrap">
    <div class="head center">
      <p class="script">${e(t.story.title)}</p>
      <h2 id="story-title" class="h2">${e(n(r.title))}</h2>
      ${r.body?`<p class="lead narrow">${e(n(r.body))}</p>`:""}
    </div>
    ${r.timeline?.length?`<ol class="timeline">${r.timeline.map((i,o)=>`<li class="tl${o%2?" tl--r":""}">
      ${i.image?`<figure class="tl-img"><img sizes="auto, (max-width: 640px) 100vw, 580px" src="${e(f(s,i.image))}" alt="${e(n(i.title))}" width="1000" height="750" loading="lazy"></figure>`:""}
      <div class="tl-copy"><span class="year">${e(n(i.year))}</span><h3>${e(n(i.title))}</h3>${i.text?`<p>${e(n(i.text))}</p>`:""}</div>
    </li>`).join("")}</ol>`:""}
  </div>
</section>`:""}function te({site:a,t,L:n,url:s,lang:r}){let i=a.events??[];return i.length?`<section class="section" id="events" aria-labelledby="events-title">
  <div class="wrap">
    <div class="head center"><p class="script">${e(t.nav.events)}</p><h2 id="events-title" class="h2">${e(t.events.title)}</h2></div>
    <div class="events">${i.map(o=>{let l=encodeURIComponent(o.mapQuery??n(o.address)),p=J(a,o,n);return`<article class="event${o.main?" event--main":""}">
        ${o.image?`<figure class="event-img"><img sizes="auto, (max-width: 640px) 100vw, 580px" src="${e(f(s,o.image))}" alt="${e(n(o.name))}" width="1000" height="750" loading="lazy"></figure>`:""}
        <div class="event-body">
          <h3>${e(n(o.name))}</h3>
          <p class="event-time">${c("clock",18)} <span><strong>${e(o.time??"")}</strong> \xB7 ${e(N(o.date,r))}</span></p>
          <p class="event-place">${c("pin",18)} <span><strong>${e(n(o.place))}</strong><br>${e(n(o.address))}</span></p>
          <div class="actions">
            <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${l}" target="_blank" rel="noopener">${e(t.events.directions)} ${c("arrow",16)}</a>
            ${p?`<a class="btn btn--ghost" href="${e(p)}" target="_blank" rel="noopener">${c("calendar",16)} ${e(t.events.calendar)}</a>`:""}
          </div>
        </div>
      </article>`}).join("")}</div>
  </div>
</section>`:""}function ae({site:a,t,L:n,url:s}){let r=(a.album??[]).filter(i=>i?.image);return r.length?`<section class="section section--soft" id="album" aria-labelledby="album-title">
  <div class="wrap">
    <div class="head center"><p class="script">${e(t.nav.album)}</p><h2 id="album-title" class="h2">${e(t.album.title)}</h2></div>
    <div class="album" data-album>${r.map((i,o)=>{let l=e(f(s,i.image));return`<a class="ph${o>=M?" more":""}" href="${l}" data-lb data-i="${o}"><img sizes="auto, (max-width: 640px) 50vw, 280px" src="${l}" alt="${e(i.caption?n(i.caption):`${a.name} ${o+1}`)}" width="1000" height="750" loading="lazy"></a>`}).join("")}</div>
    ${r.length>M?`<p class="center"><button type="button" class="btn btn--line album-more" data-album-more>${e(t.album.more)} <span data-left>(${r.length-M})</span></button></p>`:""}
  </div>
  <dialog class="lb" data-lightbox aria-label="${e(t.album.title)}">
    <img alt="" data-lb-img>
    <button type="button" class="lb-btn lb-close" data-lb-close aria-label="${e(t.album.close)}">\u2715</button>
    <button type="button" class="lb-btn lb-prev" data-lb-prev aria-label="${e(t.album.prev)}">${c("arrow",22,'style="transform:scaleX(-1)"')}</button>
    <button type="button" class="lb-btn lb-next" data-lb-next aria-label="${e(t.album.next)}">${c("arrow",22)}</button>
    <p class="lb-count" data-lb-count></p>
  </dialog>
</section>`:""}function ne({site:a,t,L:n}){let s=a.dressCode;return!s||!n(s.text)&&!s.colors?.length?"":`<section class="section" aria-labelledby="dress-title">
  <div class="wrap narrow center">
    <h2 id="dress-title" class="h2">${e(t.dress.title)}</h2>
    ${n(s.text)?`<p class="lead">${e(n(s.text))}</p>`:""}
    ${s.colors?.length?`<ul class="swatches" aria-hidden="true">${s.colors.map(r=>`<li style="--sw:${e(r)}"></li>`).join("")}</ul>`:""}
  </div>
</section>`}function oe({site:a,t,L:n,lang:s,channels:r,gform:i}){let o=a.rsvp??{},l=a.contact??{},p=a.events??[],d=i?` data-gform="${e(i.action)}" data-gmap='${e(JSON.stringify(i.fields))}'`:"",g=h=>r.map(u=>`<button type="button" class="btn ${h??(u===r[0]?"btn--primary":"btn--line")}" data-channel="${e(u)}" data-href="${e(T(u,l,""))}">${c(u,18)} ${e(t.via[u]??u)}</button>`).join("");return`<section class="section section--soft" id="rsvp" aria-labelledby="rsvp-title">
  <div class="wrap rsvp">
    <div class="rsvp-copy">
      <p class="script">${e(t.nav.rsvp)}</p>
      <h2 id="rsvp-title" class="h2">${e(t.rsvp.title)}</h2>
      ${o.body?`<p class="lead">${e(n(o.body))}</p>`:""}
      ${o.deadline?`<p class="deadline">${c("calendar",18)} ${e(t.rsvp.deadline)}: <strong>${e(N(o.deadline,s))}</strong></p>`:""}
    </div>
    <form class="card form" data-rsvp novalidate${d} data-order-text="${e(t.orderText)}">
      <div class="rsvp-fields">
        <label class="field"><span>${e(t.rsvp.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
        <label class="field"><span>${e(t.rsvp.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        <fieldset class="field choice"><legend>${e(t.rsvp.attend)}</legend>
          <label><input type="radio" name="attend" value="yes" checked> <span data-label>${e(t.rsvp.yes)}</span></label>
          <label><input type="radio" name="attend" value="no"> <span data-label>${e(t.rsvp.no)}</span></label>
        </fieldset>
        <div class="row2">
          <label class="field"><span>${e(t.rsvp.guests)}</span><select name="qty">${[1,2,3,4,5,6].map(h=>`<option>${h}</option>`).join("")}</select></label>
          <label class="field"><span>${e(t.rsvp.side)}</span><select name="size"><option>${e(t.rsvp.sideBride)}</option><option>${e(t.rsvp.sideGroom)}</option><option>${e(t.rsvp.sideFriend)}</option></select></label>
        </div>
        ${p.length>1?`<label class="field"><span>${e(t.rsvp.event)}</span><select name="date"><option>${e(t.rsvp.all)}</option>${p.map(h=>`<option>${e(n(h.name))}</option>`).join("")}</select></label>`:""}
        <label class="field"><span>${e(t.rsvp.message)}</span><textarea name="note" rows="3" maxlength="500"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${e(t.rsvp.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${e(t.rsvp.sending)}">${c("check",18)} ${e(t.rsvp.submit)}</button>
      </div>
      <div class="done${i?"":" done--step"}" data-done hidden tabindex="-1">
        <p class="done-title">${c(i?"check":"arrow",22)} ${e(i?t.rsvp.done:t.rsvp.stepTitle)}</p>
        <p>${e(i?t.rsvp.doneText:t.rsvp.stepText)}</p>
        ${i?"":`<div class="buy">${g()}</div><button type="button" class="link" data-edit>${e(t.rsvp.edit)}</button>`}
        ${(a.gift?.accounts??[]).some(h=>h?.number)?`<a class="btn btn--line" href="#gift" data-gift-link hidden>${c("heart",18)} ${e(t.gift.fromAfar)}</a>`:""}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function re({site:a,t,L:n,url:s}){let r=a.gift,i=(r?.accounts??[]).filter(o=>o?.number);return!r||!i.length?"":`<section class="section" id="gift" aria-labelledby="gift-title">
  <div class="wrap">
    <div class="head center"><p class="script">${e(t.nav.gift)}</p><h2 id="gift-title" class="h2">${e(t.gift.title)}</h2>${r.body?`<p class="lead narrow">${e(n(r.body))}</p>`:""}</div>
    <div class="gifts">${i.map(o=>`<article class="gift">
      ${o.qr?`<img class="qr" src="${e(f(s,o.qr))}" alt="QR ${e(o.bank??"")}" width="220" height="220" loading="lazy">
      <a class="link" href="${e(f(s,o.qr))}" download="qr-${e(String(o.bank??"bank").toLowerCase().replace(/[^a-z0-9]+/g,"-"))}.webp">${c("arrow",14,'style="transform:rotate(90deg)"')} ${e(t.gift.saveQr)}</a>
      <small class="muted">${e(t.gift.qrHint)}</small>`:`<span class="gift-ico" aria-hidden="true">${c("heart",30)}</span>`}
      <h3>${e(n(o.side))}</h3>
      <dl>
        <div><dt>${e(t.gift.bank)}</dt><dd>${e(o.bank??"")}</dd></div>
        <div><dt>${e(t.gift.number)}</dt><dd class="mono">${e(o.number)}</dd></div>
        <div><dt>${e(t.gift.holder)}</dt><dd>${e(o.holder??"")}</dd></div>
      </dl>
      <button type="button" class="btn btn--line" data-copy="${e(String(o.number).replace(/\s+/g,""))}" data-copied="${e(t.gift.copied)}">${e(t.gift.copy)}</button>
    </article>`).join("")}</div>
  </div>
</section>`}function se({site:a,t,L:n,lang:s}){let r=q(a);return a.showReviews===!1||!r.length?"":`<section class="section section--soft" aria-labelledby="wish-title">
  <div class="wrap">
    <div class="head center"><h2 id="wish-title" class="h2">${e(t.reviews.title)}</h2></div>
    ${L(r,s,"wishes",i=>`<figure class="wish">
      <span class="wish-ico" aria-hidden="true">${c("heart",18)}</span>
      <blockquote>${e(n(i.text))}</blockquote>
      <figcaption>${e(i.name)}${E(i,s)}</figcaption>
    </figure>`)}
  </div>
</section>`}function ie({site:a,t,L:n}){let s=(a.faq??[]).filter(r=>n(r?.q));return s.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2 center">${e(t.faq.title)}</h2>
    <div class="qa">${s.map((r,i)=>`<details${i===0?" open":""}><summary>${e(n(r.q))}</summary><p>${e(n(r.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function le({site:a,t,L:n,market:s}){let r=a.contact??{},i=Object.entries(a.social??{}).filter(([,o])=>o);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(a.name)}</p><p class="muted">${e(t.footer.thanks)}</p></div>
    <div><p class="foot-h">${e(t.footer.contact)}</p><ul>
      ${r.phone?`<li><a href="tel:${b(r.phone)}">${e(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${e(r.email)}">${e(r.email)}</a></li>`:""}
      ${n(r.address)?`<li>${e(n(r.address))}</li>`:""}</ul></div>
    ${i.length?`<div><p class="foot-h">${e(t.footer.follow)}</p><ul>${i.map(([o,l])=>`<li><a href="${e(l)}" target="_blank" rel="noopener">${e(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${a.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(a.name)}</span>${B(a,t,s.lang)}</div>
</footer>`}function ce({site:a,L:t,abs:n,market:s}){let r=a.utcOffset||"+07:00";return(a.events??[]).map(i=>({"@context":"https://schema.org","@type":"Event",name:`${t(i.name)} \xB7 ${a.name}`,startDate:`${i.date}T${i.time||"00:00"}:00${r}`,eventStatus:"https://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/OfflineEventAttendanceMode",location:{"@type":"Place",name:t(i.place),address:t(i.address)},image:n("assets/photos/hero.webp"),description:t(a.intro),url:n(`${s.id}/`),organizer:{"@type":"Person",name:a.name}}))}export{we as renderSite};
