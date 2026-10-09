var Y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t=(e="")=>String(e).replace(/[&<>"']/g,a=>Y[a]);function P(e,a,n="vi"){return e==null?"":typeof e!="object"?String(e):e[a]??e[n]??Object.values(e)[0]??""}var X={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},j=e=>X[e]??"en-US";function Q(e,a="1"){if(a==="0.99")return Math.max(.99,Math.ceil(e)-.01);let n=Number(a)||1;return Math.max(n,Math.round(e/n)*n)}function E(e,a){if(a.default)return e.basePrice;let n=e.prices?.[a.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:Q(e.basePrice*a.rate,a.rounding)}var ee=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function L(e,a){let n={style:"currency",currency:a.currency};return ee.has(a.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(j(a.lang),n).format(e)}function B(e="/"){let a=e.endsWith("/")?e:`${e}/`;return(n="")=>a+String(n).replace(/^\//,"")}var te=(e="")=>e.startsWith("uploads/")?e:/^([a-z]+:|\/)/i.test(e)?null:`assets/${e}`,k=(e,a)=>{let n=te(a);return n==null?a:e(n)},$=(e="")=>String(e).replace(/\D/g,"");function x(e,a,n=""){switch(e){case"phone":return`tel:${$(a.phone)}`;case"zalo":return`https://zalo.me/${$(a.zalo||a.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(a.messenger)}`;case"whatsapp":return`https://wa.me/${$(a.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(a.kakao)}/chat`;case"email":return`mailto:${a.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var F=e=>`<script type="application/ld+json">${JSON.stringify(e).replace(/</g,"\\u003c")}<\/script>`,ae=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function O(e){if(!e||typeof e!="string")return null;let a;try{a=new URL(e.trim())}catch{return{error:"not-google"}}if(a.hostname==="forms.gle")return{error:"short-link"};let n=a.hostname==="docs.google.com"&&a.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!n)return{error:"not-google"};let r={};for(let[i,s]of a.searchParams){if(!/^entry\.\d+$/.test(i))continue;let o=s.trim().replace(/^\{|\}$/g,"").toLowerCase();ae.includes(o)&&(r[o]=i)}return Object.keys(r).length?r.phone?{action:`https://docs.google.com/forms/d/e/${n[1]}/formResponse`,fields:r}:{error:"no-phone"}:{error:"no-fields"}}var ne={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},u=(e,a=20,n="")=>`<svg class="i" width="${a}" height="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${ne[e]??""}</svg>`,w=[1,2,3,4,5,6,0],oe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function A(e,a){let n=e.map(i=>w.indexOf(i)).sort((i,s)=>i-s);return n.every((i,s)=>s===0||i===n[s-1]+1)&&n.length>2?`${a[w[n[0]]]} \u2013 ${a[w[n.at(-1)]]}`:n.map(i=>a[w[i]]).join(", ")}var V=e=>e.map(a=>({"@type":"OpeningHoursSpecification",dayOfWeek:a.days.map(n=>oe[n]),opens:a.open,closes:a.close}));function U(e){return new Intl.NumberFormat(j(e.lang),{style:"currency",currency:e.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??e.currency}var z=e=>e==="phone"||e==="email"?"":'target="_blank" rel="noopener"',I=e=>`<div class="suggest" id="market-suggest" data-suggest="${t(e.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${t(e.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${t(e.market.dismiss)}">\xD7</button>
</div>`,C=(e,a)=>`<p class="status" data-open-status data-hours='${t(JSON.stringify(e.hours))}' data-tz="${t(e.timezone??"Asia/Ho_Chi_Minh")}" data-open="${t(a.visit.open)}" data-closed="${t(a.visit.closed)}" hidden></p>`,G={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},re=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,ie=e=>{try{let a=new URL(String(e.googleReview??"").trim());return a.protocol==="https:"&&re.test(a.hostname)?a.href:""}catch{return""}},W=(e,a,n,r="btn btn--line")=>{let i=ie(e);if(!i)return"";let s=typeof a.reviews=="object"&&a.reviews?.google||G[n]||G.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${r}" href="${t(i)}" target="_blank" rel="noopener">${u("star",16)} ${t(s)}</a></p>`},D={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},H={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},T=e=>(e.reviews??[]).filter(a=>a&&(a.name||a.text)&&!(typeof a.text=="object"&&a.text&&!Object.values(a.text).some(Boolean)&&!a.name));function _(e,a){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(e?.date??"").trim());if(!n)return"";let r=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(r.getTime()))return"";let i=new Intl.DateTimeFormat(H[a]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(r);return`<time class="rv-date" datetime="${t(e.date)}">${t(i)}</time>`}function se(e,a){let n=e.filter(o=>o.rating>=1&&o.rating<=5);if(n.length<2)return"";let r=n.reduce((o,l)=>o+Number(l.rating),0)/n.length,i=D[a]??D.en,s=new Intl.NumberFormat(H[a]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(r);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${u("star",18)}</span><strong>${s}</strong><span>\xB7</span><span>${t(i.count.replace("{n}",String(e.length)))}</span></p>`}function K(e,a,n,r){if(!e.length)return"";let i=D[a]??D.en,s=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${t(o==="prev"?i.prev:i.next)}">${u("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${se(e,a)}<div class="rv" data-rv data-more="${t(i.more)}" data-less="${t(i.less)}">
      <div class="${n} rv-track" tabindex="0">${e.map(r).join("")}</div>
      <div class="rv-nav" hidden>${s("prev")}${s("next")}</div>
    </div>${le}`}var le=`<style>
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
upd()}})()<\/script>`;var J=(e,a,n)=>e.badge===!1?"":`<a class="made" href="https://kingpes.net/${t(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${t(a.footer.madeWith)}</a>`;function Z({site:e,markets:a,url:n,abs:r}){let i=a.find(o=>o.default)??a[0],s=a.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${t(i.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t(e.name)}</title>
<link rel="canonical" href="${r(`${i.id}/`)}">
${a.map(o=>`<link rel="alternate" hreflang="${t(o.lang)}-${t(o.country)}" href="${r(`${o.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(s)}, root = ${JSON.stringify(n(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${a.map(o=>`<a href="${n(`${o.id}/`)}">${t(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var ce="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",R=12,pe=["clinic","equip","care"];function de(e,a){return(e.products??[]).map(n=>({...n,variants:(n.variants??[]).map(r=>({...r,price:E(r,a)})).filter(r=>r.price!=null)})).filter(n=>n.variants.length>0)}function Oe({site:e,catalog:a,i18n:n,template:r,basePath:i="/",siteUrl:s=e.domain}){let o=B(i),l=g=>new URL(o(g),s).href,c=a.markets,d=O(e.bookingForm),m=d&&!d.error?d:null,b=c.map(g=>{let v=g.lang,y=n[v]??n.en??n.vi,h=N=>P(N,v,"en"),S=de(a,g),M=e.bookingChannels?.[g.id]??["phone"],f={site:e,catalog:a,market:g,markets:c,lang:v,t:y,L:h,url:o,abs:l,services:S,channels:M,money:N=>L(N,g),template:r,gform:m};return{path:`${g.id}/index.html`,html:he(f)}});return b.push({path:"index.html",html:Z({site:e,markets:c,url:o,abs:l})}),b}var q=(e,a)=>e.heroImage?k(a,e.heroImage):a("assets/photos/hero.webp"),ue=e=>Math.min(...e.variants.map(a=>a.price));function he(e){let{site:a,market:n,markets:r,lang:i,t:s,L:o,url:l,abs:c}=e,d=`${a.name} \xB7 ${o(a.tagline)}`,m=a.theme??{},b=["primary","ink","bg","surface","soft","accent"].filter(h=>m[h]).map(h=>`--${h}:${m[h]}`).join(";"),g=r.find(h=>h.default)??r[0],v=r.map(h=>({id:h.id,lang:h.lang,country:h.country,currency:h.currency,href:l(`${h.id}/`)})),y=a.contact??{};return`<!doctype html>
<html lang="${t(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t(d)}</title>
<meta name="description" content="${t(o(a.intro))}">
<link rel="canonical" href="${c(`${n.id}/`)}">
${r.map(h=>`<link rel="alternate" hreflang="${t(h.lang)}-${t(h.country)}" href="${c(`${h.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${c(`${g.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${t(d)}">
<meta property="og:description" content="${t(o(a.intro))}">
<meta property="og:url" content="${c(`${n.id}/`)}">
<meta property="og:site_name" content="${t(a.name)}">
<meta property="og:image" content="${t(new URL(q(a,l),c("")).href)}">
<meta name="theme-color" content="${t(m.primary??"#1C6FB8")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${ce}">
<link rel="stylesheet" href="${l("assets/style.css")}">
<style>:root{${b}}</style>
<noscript><style>.album .more{display:block}.album-more,.chips{display:none}</style></noscript>
${F(Me(e))}
<script src="${l("assets/site.js")}" defer><\/script>
</head>
<body data-market="${t(n.id)}" data-markets='${t(JSON.stringify(v))}' data-wa="${t($(y.whatsapp))}" data-email="${t(y.email??"")}" data-copied="${t(s.booking.copied)}">
<a class="skip" href="#main">${t(s.skip)}</a>
${I(s)}
${me(e)}
<main id="main">
${ge(e)}
${fe(e)}
${be(e)}
${ve(e)}
${ye(e)}
${$e(e)}
${ke(e)}
${xe(e)}
${we(e)}
${De(e)}
</main>
${Se(e)}
<nav class="dock" aria-label="${t(s.nav.book)}">
  <a href="${t(x(e.channels[0],y))}" ${z(e.channels[0])}>${u(e.channels[0],20)}<span>${t(s.via[e.channels[0]]??"")}</span></a>
  <a class="primary" href="#booking">${u("calendar",20)}<span>${t(s.nav.book)}</span></a>
</nav>
</body>
</html>
`}function me({site:e,market:a,markets:n,t:r,url:i}){let s=[["#services",r.nav.services],["#prices",r.nav.prices],["#team",r.nav.team],["#visit",r.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${i(`${a.id}/`)}">
      ${e.logo?`<img src="${t(k(i,e.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${u("shield",22)}</span>`}
      <span>${t(e.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${s.map(([o,l])=>`<a href="${o}">${t(l)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${n.length>1?`<details class="market">
        <summary aria-label="${t(r.market.label)}">${u("globe",18)}<span>${t(a.id.toUpperCase())}<span class="cur"> \xB7 ${t(U(a))}</span></span></summary>
        <ul>${n.map(o=>`<li><a href="${i(`${o.id}/`)}" hreflang="${t(o.lang)}"${o.id===a.id?' aria-current="true"':""}>${t(o.country)} \xB7 ${t(o.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-sm" href="#booking">${t(r.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${t(r.nav.openMenu)}">${u("menu",22)}</summary>
        <nav aria-label="Menu">${[...s,["#booking",r.nav.book]].map(([o,l])=>`<a href="${o}">${t(l)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function ge({site:e,t:a,L:n,url:r}){let i=(e.stats??[]).filter(o=>o?.value),s=e.contact??{};return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${n(e.place)?`<p class="eyebrow">${t(n(e.place))}</p>`:""}
      <h1>${t(n(e.tagline))}</h1>
      ${n(e.intro)?`<p class="lead">${t(n(e.intro))}</p>`:""}
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#booking">${u("calendar",18)} ${t(a.hero.book)}</a>
        ${s.phone?`<a class="btn btn--line btn--lg" href="tel:${$(s.phone)}">${u("phone",18)} ${t(s.phone)}</a>`:""}
      </div>
      ${C(e,a)}
    </div>
    <figure class="hero-img">
      <img src="${t(q(e,r))}" alt="${t(e.name)}" width="1200" height="900" fetchpriority="high">
      ${i.length?`<ul class="stats">${i.map(o=>`<li><b>${t(o.value)}</b><span>${t(n(o.label))}</span></li>`).join("")}</ul>`:""}
    </figure>
  </div>
</section>`}function fe({site:e,t:a,L:n}){let r=(e.promises??[]).filter(i=>n(i?.title));return r.length?`<section class="section section--soft" aria-labelledby="prom-title">
  <div class="wrap">
    <h2 id="prom-title" class="h2">${t(a.promises.title)}</h2>
    <ul class="prom">${r.map(i=>`<li><span class="prom-i">${u(i.icon??"check",24)}</span><h3>${t(n(i.title))}</h3>${n(i.text)?`<p class="muted">${t(n(i.text))}</p>`:""}</li>`).join("")}</ul>
  </div>
</section>`:""}function be({services:e,t:a,L:n,url:r,money:i}){let s=e.filter(o=>o.featured&&o.image).slice(0,4);return s.length?`<section class="section" id="services" aria-labelledby="feat-title">
  <div class="wrap">
    <div class="head"><h2 id="feat-title" class="h2">${t(a.services.title)}</h2><p class="muted">${t(a.services.text)}</p></div>
    <div class="feat">${s.map(o=>`<article class="feat-card">
      <figure><img sizes="auto, (max-width: 640px) 100vw, 280px" src="${t(k(r,o.image))}" alt="${t(n(o.name))}" width="1000" height="750" loading="lazy">${o.tag?`<span class="tag">${t(n(o.tag))}</span>`:""}</figure>
      <div class="feat-body">
        <h3>${t(n(o.name))}</h3>
        ${n(o.description)?`<p class="muted">${t(n(o.description))}</p>`:""}
        <p class="from">${a.services.from.replace("{price}",`<strong>${t(i(ue(o)))}</strong>`)}</p>
        <button type="button" class="link" data-pick="${t(o.id)}">${t(a.services.book)} ${u("arrow",14)}</button>
      </div>
    </article>`).join("")}</div>
  </div>
</section>`:""}function ve({services:e,catalog:a,t:n,L:r,money:i}){let s=(a.categories??[]).filter(o=>e.some(l=>l.category===o.id));return s.length?`<section class="section section--soft" id="prices" aria-labelledby="price-title">
  <div class="wrap">
    <div class="head"><h2 id="price-title" class="h2">${t(n.prices.title)}</h2><p class="muted">${t(n.prices.note)}</p></div>
    <div class="menu">${s.map(o=>`<div class="menu-cat">
      <h3>${t(r(o.name))}</h3>
      <table class="ptable"><tbody>${e.filter(l=>l.category===o.id).flatMap(l=>l.variants.map((c,d)=>`<tr>
        <th scope="row">${d===0?`<span class="nm">${t(r(l.name))}</span>`:""}${l.variants.length>1||r(c.label)?`<small>${t(r(c.label))}</small>`:""}</th>
        <td>${t(i(c.price))}</td></tr>`)).join("")}</tbody></table>
    </div>`).join("")}</div>
  </div>
</section>`:""}function ye({site:e,t:a,L:n}){let r=(e.team??[]).filter(s=>s?.name);if(!r.length)return"";let i=s=>s.replace(/^(BS|Dr)\.?\s*/i,"").split(/\s+/).map(o=>o[0]).slice(-2).join("").toUpperCase();return`<section class="section" id="team" aria-labelledby="team-title">
  <div class="wrap">
    <h2 id="team-title" class="h2">${t(a.team.title)}</h2>
    <div class="team">${r.map((s,o)=>`<figure class="doc">
      <div class="doc-ph tone-${o%3}">${s.photo?`<img src="${t(s.photo)}" alt="${t(s.name)}" loading="lazy">`:`<span aria-hidden="true">${t(i(s.name))}</span>`}</div>
      <figcaption><strong>${t(s.name)}</strong><span>${t(n(s.role))}</span>${s.years?`<span class="muted">${t(a.team.years.replace("{n}",s.years))}</span>`:""}</figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`}function $e({site:e,t:a,url:n}){let r=(e.album??[]).filter(o=>o?.image);if(!r.length)return"";let i=o=>r.filter(l=>l.tag===o).length,s=[["",a.album.all,r.length],...pe.filter(i).map(o=>[o,a.album.tags[o],i(o)])];return`<section class="section section--soft" id="album" aria-labelledby="album-title">
  <div class="wrap">
    <div class="head"><h2 id="album-title" class="h2">${t(a.album.title)}</h2><p class="muted">${t(a.album.text)}</p></div>
    ${s.length>2?`<div class="chips" role="group" aria-label="${t(a.album.filter)}">${s.map(([o,l,c],d)=>`<button type="button" class="chip" data-tag="${o}" aria-pressed="${d===0}">${t(l)} <span>${c}</span></button>`).join("")}</div>`:""}
    <div class="album" data-album>${r.map((o,l)=>{let c=t(k(n,o.image));return`<a class="ph${l>=R?" more":""}" href="${c}" data-i="${l}" data-t="${t(o.tag??"")}"><img sizes="auto, (max-width: 640px) 50vw, 300px" src="${c}" alt="${t(`${e.name} ${l+1}`)}" width="1000" height="750" loading="lazy"></a>`}).join("")}</div>
    ${r.length>R?`<p class="center"><button type="button" class="btn btn--line album-more" data-album-more>${t(a.album.more)} <span data-left>(${r.length-R})</span></button></p>`:""}
  </div>
  <dialog class="lb" data-lightbox aria-label="${t(a.album.title)}">
    <img alt="" data-lb-img>
    <button type="button" class="lb-btn lb-close" data-lb-close aria-label="${t(a.album.close)}">\u2715</button>
    <button type="button" class="lb-btn lb-prev" data-lb-prev aria-label="${t(a.album.prev)}">${u("arrow",22,'style="transform:scaleX(-1)"')}</button>
    <button type="button" class="lb-btn lb-next" data-lb-next aria-label="${t(a.album.next)}">${u("arrow",22)}</button>
    <p class="lb-count" data-lb-count></p>
  </dialog>
</section>`}function ke({site:e,t:a,L:n,lang:r}){let i=W(e,a,r,"btn btn--line"),s=T(e);return e.showReviews===!1||!s.length&&!i?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${t(a.reviews)}</h2>
    ${K(s,r,"quotes",o=>`<figure class="quote">
      ${o.rating?`<div class="stars" aria-label="${o.rating}/5">${Array.from({length:5},(l,c)=>`<span class="${c<o.rating?"on":""}">${u("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${t(n(o.text))}</blockquote>
      <figcaption>${t(o.name)}${_(o,r)}</figcaption>
    </figure>`)}${i}
  </div>
</section>`}function xe({site:e,services:a,catalog:n,t:r,L:i,channels:s,gform:o}){let l=r.booking,c=e.contact??{},d=e.hours?.[0]??{open:"08:00",close:"20:00"},m=[],[b,g]=d.open.split(":").map(Number),[v,y]=d.close.split(":").map(Number);for(let p=b*60+g;p<=v*60+y-30;p+=30)m.push(`${String(Math.floor(p/60)).padStart(2,"0")}:${String(p%60).padStart(2,"0")}`);let h=(n.categories??[]).filter(p=>a.some(f=>f.category===p.id)),S=o?` data-gform="${t(o.action)}" data-gmap='${t(JSON.stringify(o.fields))}'`:"",M=s.map((p,f)=>`<button type="button" class="btn ${f===0?"btn--primary":"btn--line"}" data-channel="${t(p)}" data-href="${t(x(p,c,""))}">${u(p,18)} ${t(r.via[p]??p)}</button>`).join("");return`<section class="section section--deep" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="booking-copy">
      <h2 id="book-title" class="h2">${t(l.title)}</h2>
      <p class="lead">${t(l.text)}</p>
      <div class="actions">${s.map(p=>`<a class="btn btn--light" href="${t(x(p,c))}" ${z(p)}>${u(p,18)} ${t(r.via[p]??p)}</a>`).join("")}</div>
    </div>
    <form class="card form" data-book novalidate${S} data-order-text="${t(l.message)}">
      <div class="book-fields">
        <label class="field"><span>${t(l.service)}</span><select name="product">
          <option value="${t(l.notSure)}">${t(l.notSure)}</option>
          ${h.map(p=>`<optgroup label="${t(i(p.name))}">${a.filter(f=>f.category===p.id).map(f=>`<option value="${t(i(f.name))}" data-id="${t(f.id)}">${t(i(f.name))}</option>`).join("")}</optgroup>`).join("")}
        </select></label>
        <div class="row2">
          <label class="field"><span>${t(l.date)}</span><input name="day" type="date"></label>
          <label class="field"><span>${t(l.time)}</span><select name="time">${m.map(p=>`<option>${p}</option>`).join("")}</select></label>
        </div>
        <div class="row2">
          <label class="field"><span>${t(l.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${t(l.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field"><span>${t(l.note)}</span><textarea name="note" rows="2" maxlength="400" placeholder="${t(l.noteHint)}"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${t(l.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${t(l.sending)}">${u("calendar",18)} ${t(l.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${u(o?"check":"arrow",22)} ${t(o?l.done:l.stepTitle)}</p>
        <p>${t(o?l.doneText:l.stepText)}</p>
        ${o?"":`<div class="buy">${M}</div><button type="button" class="link" data-edit>${t(l.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function we({site:e,t:a,L:n}){let r=e.contact??{},i=encodeURIComponent(r.mapQuery??n(r.address)),s=o=>o.length===7?a.everyDay:A(o,a.days);return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${t(a.visit.title)}</h2>
      ${C(e,a)}
      ${(e.hours??[]).length?`<table class="hours"><tbody>${e.hours.map(o=>`<tr><th scope="row">${t(s(o.days))}</th><td>${t(o.open)} \u2013 ${t(o.close)}</td></tr>`).join("")}</tbody></table>`:""}
      ${n(r.address)?`<p class="addr">${u("pin",18)} ${t(n(r.address))}</p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${i}" target="_blank" rel="noopener">${t(a.visit.directions)} ${u("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${t(a.visit.title)}" src="https://www.google.com/maps?q=${i}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function De({site:e,t:a,L:n}){let r=(e.faq??[]).filter(i=>n(i?.q));return r.length?`<section class="section section--soft" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${t(a.faq.title)}</h2>
    <div class="qa">${r.map((i,s)=>`<details${s===0?" open":""}><summary>${t(n(i.q))}</summary><p>${t(n(i.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Se({site:e,t:a,L:n,market:r}){let i=e.contact??{},s=Object.entries(e.social??{}).filter(([,o])=>o);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${t(e.name)}</p><p class="muted">${t(n(e.tagline))}</p></div>
    <div><p class="foot-h">${t(a.footer.contact)}</p><ul>
      ${i.phone?`<li><a href="tel:${$(i.phone)}">${t(i.phone)}</a></li>`:""}
      ${i.email?`<li><a href="mailto:${t(i.email)}">${t(i.email)}</a></li>`:""}
      ${n(i.address)?`<li>${t(n(i.address))}</li>`:""}</ul></div>
    ${s.length?`<div><p class="foot-h">${t(a.footer.follow)}</p><ul>${s.map(([o,l])=>`<li><a href="${t(l)}" target="_blank" rel="noopener">${t(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${e.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${t(e.name)}</span>${J(e,a,r.lang)}</div>
</footer>`}function Me({site:e,market:a,L:n,abs:r,url:i,services:s,catalog:o}){let l=e.contact??{},c=T(e).filter(d=>d.rating);return{"@context":"https://schema.org","@type":"Dentist",name:e.name,url:r(`${a.id}/`),description:n(e.intro),image:new URL(q(e,i),r("")).href,telephone:l.phone,email:l.email,address:{"@type":"PostalAddress",streetAddress:n(l.address)},openingHoursSpecification:V(e.hours??[]),currenciesAccepted:a.currency,hasOfferCatalog:{"@type":"OfferCatalog",name:e.name,itemListElement:(o.categories??[]).filter(d=>s.some(m=>m.category===d.id)).map(d=>({"@type":"OfferCatalog",name:n(d.name),itemListElement:s.filter(m=>m.category===d.id).flatMap(m=>m.variants.map(b=>({"@type":"Offer",name:`${n(m.name)}${n(b.label)?` (${n(b.label)})`:""}`,price:b.price,priceCurrency:a.currency,itemOffered:{"@type":"MedicalProcedure",name:n(m.name),description:n(m.description)}})))}))},...c.length?{aggregateRating:{"@type":"AggregateRating",ratingValue:(c.reduce((d,m)=>d+m.rating,0)/c.length).toFixed(1),reviewCount:c.length}}:{}}}export{Oe as renderSite};
