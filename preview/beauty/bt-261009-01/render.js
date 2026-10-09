var te={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t=(a="")=>String(a).replace(/[&<>"']/g,e=>te[e]);function N(a,e,n="vi"){return a==null?"":typeof a!="object"?String(a):a[e]??a[n]??Object.values(a)[0]??""}var ae={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},P=a=>ae[a]??"en-US";function ne(a,e="1"){if(e==="0.99")return Math.max(.99,Math.ceil(a)-.01);let n=Number(e)||1;return Math.max(n,Math.round(a/n)*n)}function q(a,e){if(e.default)return a.basePrice;let n=a.prices?.[e.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:ne(a.basePrice*e.rate,e.rounding)}var oe=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function L(a,e){let n={style:"currency",currency:e.currency};return oe.has(e.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(P(e.lang),n).format(a)}function B(a="/"){let e=a.endsWith("/")?a:`${a}/`;return(n="")=>e+String(n).replace(/^\//,"")}var re=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,$=(a,e)=>{let n=re(e);return n==null?e:a(n)},k=(a="")=>String(a).replace(/\D/g,"");function z(a,e,n=""){switch(a){case"phone":return`tel:${k(e.phone)}`;case"zalo":return`https://zalo.me/${k(e.zalo||e.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(e.messenger)}`;case"whatsapp":return`https://wa.me/${k(e.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(e.kakao)}/chat`;case"email":return`mailto:${e.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var F=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`,ie=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function O(a){if(!a||typeof a!="string")return null;let e;try{e=new URL(a.trim())}catch{return{error:"not-google"}}if(e.hostname==="forms.gle")return{error:"short-link"};let n=e.hostname==="docs.google.com"&&e.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!n)return{error:"not-google"};let r={};for(let[i,s]of e.searchParams){if(!/^entry\.\d+$/.test(i))continue;let o=s.trim().replace(/^\{|\}$/g,"").toLowerCase();ie.includes(o)&&(r[o]=i)}return Object.keys(r).length?r.phone?{action:`https://docs.google.com/forms/d/e/${n[1]}/formResponse`,fields:r}:{error:"no-phone"}:{error:"no-fields"}}var se={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},u=(a,e=20,n="")=>`<svg class="i" width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${se[a]??""}</svg>`,D=[1,2,3,4,5,6,0],le=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function A(a,e){let n=a.map(i=>D.indexOf(i)).sort((i,s)=>i-s);return n.every((i,s)=>s===0||i===n[s-1]+1)&&n.length>2?`${e[D[n[0]]]} \u2013 ${e[D[n.at(-1)]]}`:n.map(i=>e[D[i]]).join(", ")}var V=a=>a.map(e=>({"@type":"OpeningHoursSpecification",dayOfWeek:e.days.map(n=>le[n]),opens:e.open,closes:e.close}));function I(a){return new Intl.NumberFormat(P(a.lang),{style:"currency",currency:a.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??a.currency}var U=a=>a==="phone"||a==="email"?"":'target="_blank" rel="noopener"',W=a=>`<div class="suggest" id="market-suggest" data-suggest="${t(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${t(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${t(a.market.dismiss)}">\xD7</button>
</div>`,H=(a,e)=>`<p class="status" data-open-status data-hours='${t(JSON.stringify(a.hours))}' data-tz="${t(a.timezone??"Asia/Ho_Chi_Minh")}" data-open="${t(e.visit.open)}" data-closed="${t(e.visit.closed)}" hidden></p>`,G={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},ce=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,pe=a=>{try{let e=new URL(String(a.googleReview??"").trim());return e.protocol==="https:"&&ce.test(e.hostname)?e.href:""}catch{return""}},_=(a,e,n,r="btn btn--line")=>{let i=pe(a);if(!i)return"";let s=typeof e.reviews=="object"&&e.reviews?.google||G[n]||G.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${r}" href="${t(i)}" target="_blank" rel="noopener">${u("star",16)} ${t(s)}</a></p>`},S={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},K={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},J=a=>(a.reviews??[]).filter(e=>e&&(e.name||e.text)&&!(typeof e.text=="object"&&e.text&&!Object.values(e.text).some(Boolean)&&!e.name));function Z(a,e){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(a?.date??"").trim());if(!n)return"";let r=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(r.getTime()))return"";let i=new Intl.DateTimeFormat(K[e]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(r);return`<time class="rv-date" datetime="${t(a.date)}">${t(i)}</time>`}function de(a,e){let n=a.filter(o=>o.rating>=1&&o.rating<=5);if(n.length<2)return"";let r=n.reduce((o,c)=>o+Number(c.rating),0)/n.length,i=S[e]??S.en,s=new Intl.NumberFormat(K[e]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(r);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${u("star",18)}</span><strong>${s}</strong><span>\xB7</span><span>${t(i.count.replace("{n}",String(a.length)))}</span></p>`}function Y(a,e,n,r){if(!a.length)return"";let i=S[e]??S.en,s=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${t(o==="prev"?i.prev:i.next)}">${u("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${de(a,e)}<div class="rv" data-rv data-more="${t(i.more)}" data-less="${t(i.less)}">
      <div class="${n} rv-track" tabindex="0">${a.map(r).join("")}</div>
      <div class="rv-nav" hidden>${s("prev")}${s("next")}</div>
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
upd()}})()<\/script>`;var X=(a,e,n)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${t(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${t(e.footer.madeWith)}</a>`;function Q({site:a,markets:e,url:n,abs:r}){let i=e.find(o=>o.default)??e[0],s=e.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${t(i.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t(a.name)}</title>
<link rel="canonical" href="${r(`${i.id}/`)}">
${e.map(o=>`<link rel="alternate" hreflang="${t(o.lang)}-${t(o.country)}" href="${r(`${o.id}/`)}">`).join(`
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
<body><p>${e.map(o=>`<a href="${n(`${o.id}/`)}">${t(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var he="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,800;1,9..144,600&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",j=16,me=["art","sparkle","solid","spa"],T=a=>`N-${String(a+1).padStart(3,"0")}`;function ge(a,e){return a.products.map(n=>({...n,variants:(n.variants??[]).map(r=>({...r,price:q(r,e)})).filter(r=>r.price!=null)})).filter(n=>n.variants.length>0)}function Ve({site:a,catalog:e,i18n:n,template:r,basePath:i="/",siteUrl:s=a.domain}){let o=B(i),c=g=>new URL(o(g),s).href,l=e.markets,p=O(a.bookingForm),b=p&&!p.error?p:null,f=l.map(g=>{let v=g.lang,x=n[v]??n.en??n.vi,y=m=>N(m,v,"en"),w=ge(e,g),h=a.bookingChannels?.[g.id]??["phone"],d={site:a,catalog:e,market:g,markets:l,lang:v,t:x,L:y,url:o,abs:c,services:w,channels:h,money:m=>L(m,g),vlabel:m=>y(m.label)||(m.minutes?`${m.minutes}\u2032`:""),template:r,gform:b};return{path:`${g.id}/index.html`,html:fe(d)}});return f.push({path:"index.html",html:Q({site:a,markets:l,url:o,abs:c})}),f}var ee=a=>(a.heroImages??[]).filter(e=>e?.image).slice(0,3);function fe(a){let{site:e,market:n,markets:r,lang:i,t:s,L:o,url:c,abs:l,channels:p}=a,b=`${e.name} \xB7 ${o(e.tagline)}`,f=e.theme??{},g=["primary","ink","bg","surface","soft","accent"].filter(h=>f[h]).map(h=>`--${h}:${f[h]}`).join(";"),v=r.find(h=>h.default)??r[0],x=r.map(h=>({id:h.id,lang:h.lang,country:h.country,currency:h.currency,href:c(`${h.id}/`)})),y=e.contact??{},w=ee(e)[0]?.image??"photos/hero-1.webp";return`<!doctype html>
<html lang="${t(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t(b)}</title>
<meta name="description" content="${t(o(e.intro))}">
<link rel="canonical" href="${l(`${n.id}/`)}">
${r.map(h=>`<link rel="alternate" hreflang="${t(h.lang)}-${t(h.country)}" href="${l(`${h.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${l(`${v.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${t(b)}">
<meta property="og:description" content="${t(o(e.intro))}">
<meta property="og:url" content="${l(`${n.id}/`)}">
<meta property="og:site_name" content="${t(e.name)}">
<meta property="og:image" content="${t(new URL($(c,w),l("")).href)}">
<meta name="theme-color" content="${t(f.primary??"#C2457A")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${he}">
<link rel="stylesheet" href="${c("assets/style.css")}">
<style>:root{${g}}</style>
<noscript><style>.gallery .more{display:block}.g-more,.chips{display:none}</style></noscript>
${F(ze(a))}
<script src="${c("assets/site.js")}" defer><\/script>
</head>
<body data-market="${t(n.id)}" data-markets='${t(JSON.stringify(x))}' data-wa="${t(k(y.whatsapp))}" data-email="${t(y.email??"")}" data-copied="${t(s.booking.copied)}">
<a class="skip" href="#main">${t(s.skip)}</a>
${W(s)}
${be(a)}
<main id="main">
${ve(a)}
${ye(a)}
${$e(a)}
${ke(a)}
${xe(a)}
${we(a)}
${De(a)}
${Se(a)}
${Me(a)}
${Ne(a)}
</main>
${Pe(a)}
<nav class="dock" aria-label="${t(s.nav.book)}">
  <a href="#gallery">${u("star",20)}<span>${t(s.nav.gallery)}</span></a>
  <a class="primary" href="#booking">${u("calendar",20)}<span>${t(s.nav.book)}</span></a>
</nav>
</body>
</html>
`}function be({site:a,market:e,markets:n,t:r,url:i}){let s=[["#gallery",r.nav.gallery],["#prices",r.nav.prices],["#visit",r.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${i(`${e.id}/`)}">
      ${a.logo?`<img src="${t($(i,a.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${t((a.name||"N").trim()[0])}</span>`}
      <span>${t(a.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${s.map(([o,c])=>`<a href="${o}">${t(c)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${n.length>1?`<details class="market">
        <summary aria-label="${t(r.market.label)}">${u("globe",18)}<span>${t(e.id.toUpperCase())}<span class="cur"> \xB7 ${t(I(e))}</span></span></summary>
        <ul>${n.map(o=>`<li><a href="${i(`${o.id}/`)}" hreflang="${t(o.lang)}"${o.id===e.id?' aria-current="true"':""}>${t(o.country)} \xB7 ${t(o.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-sm" href="#booking">${t(r.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${t(r.nav.openMenu)}">${u("menu",22)}</summary>
        <nav aria-label="Menu">${[...s,["#booking",r.nav.book]].map(([o,c])=>`<a href="${o}">${t(c)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function ve(a){let{site:e,t:n,L:r,url:i}=a,s=ee(e),o=e.hours?.[0],c=(e.gallery??[]).filter(l=>l?.image).length;return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${r(e.place)?`<p class="eyebrow">${t(r(e.place))}</p>`:""}
      <h1>${t(r(e.tagline))}</h1>
      ${r(e.intro)?`<p class="lead">${t(r(e.intro))}</p>`:""}
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#booking">${u("calendar",18)} ${t(n.hero.book)}</a>
        ${c?`<a class="btn btn--line btn--lg" href="#gallery">${t(n.hero.gallery.replace("{n}",c))}</a>`:""}
      </div>
      <ul class="facts">
        ${o?`<li>${u("clock",18)} ${t(o.open)} \u2013 ${t(o.close)}</li>`:""}
        ${r(e.contact?.address)?`<li>${u("pin",18)} ${t(r(e.contact.address))}</li>`:""}
      </ul>
    </div>
    <div class="stack" aria-hidden="${s.length?"false":"true"}">${s.map((l,p)=>`<figure class="pic pic--${p}"><img src="${t($(i,l.image))}" alt="${t(`${e.name} ${p+1}`)}" width="900" height="900"${p===0?' fetchpriority="high"':' loading="lazy"'}></figure>`).join("")}</div>
  </div>
</section>`}function ye({site:a,L:e}){let n=a.offer;return!n||!e(n.title)?"":`<aside class="offer" aria-label="${t(e(n.title))}">
  <div class="wrap offer-in">${u("star",20)}<strong>${t(e(n.title))}</strong>${e(n.text)?`<span>${t(e(n.text))}</span>`:""}</div>
</aside>`}function $e({site:a,t:e,url:n}){let r=(a.gallery??[]).filter(o=>o?.image);if(!r.length)return"";let i=o=>r.filter(c=>c.style===o).length,s=[["",e.gallery.all,r.length],...me.filter(i).map(o=>[o,e.gallery.styles[o],i(o)])];return`<section class="section" id="gallery" aria-labelledby="gal-title">
  <div class="wrap">
    <div class="head">
      <h2 id="gal-title" class="h2">${t(e.gallery.title)}</h2>
      <p class="muted">${t(e.gallery.text)}</p>
    </div>
    ${s.length>2?`<div class="chips" role="group" aria-label="${t(e.gallery.filter)}">${s.map(([o,c,l],p)=>`<button type="button" class="chip" data-style="${o}" aria-pressed="${p===0}">${t(c)} <span>${l}</span></button>`).join("")}</div>`:""}
    <div class="gallery" data-gallery>${r.map((o,c)=>{let l=t($(n,o.image));return`<a class="tile${c>=j?" more":""}" href="${l}" data-i="${c}" data-code="${T(c)}" data-s="${t(o.style??"")}"><img sizes="auto, (max-width: 640px) 50vw, 280px" src="${l}" alt="${t(`${e.gallery.design} ${T(c)}`)}" width="900" height="900" loading="lazy"><span class="code">${T(c)}</span></a>`}).join("")}</div>
    ${r.length>j?`<p class="center"><button type="button" class="btn btn--line g-more" data-more>${t(e.gallery.more)} <span data-left>(${r.length-j})</span></button></p>`:""}
  </div>
  <dialog class="lb" data-lightbox aria-label="${t(e.gallery.title)}">
    <img alt="" data-lb-img>
    <div class="lb-bar">
      <span class="lb-code" data-lb-code></span>
      <a class="btn btn--primary" href="#booking" data-lb-book>${u("calendar",18)} ${t(e.gallery.book)}</a>
    </div>
    <button type="button" class="lb-btn lb-close" data-lb-close aria-label="${t(e.gallery.close)}">\u2715</button>
    <button type="button" class="lb-btn lb-prev" data-lb-prev aria-label="${t(e.gallery.prev)}">${u("arrow",22,'style="transform:scaleX(-1)"')}</button>
    <button type="button" class="lb-btn lb-next" data-lb-next aria-label="${t(e.gallery.next)}">${u("arrow",22)}</button>
  </dialog>
</section>`}function ke({services:a,t:e,L:n,url:r,money:i}){let s=a.filter(o=>o.featured&&o.image).slice(0,4);return s.length?`<section class="section section--soft" id="services" aria-labelledby="feat-title">
  <div class="wrap">
    <h2 id="feat-title" class="h2">${t(e.featured.title)}</h2>
    <div class="feat">${s.map(o=>`<article class="feat-card">
      <figure><img sizes="auto, (max-width: 640px) 100vw, 280px" src="${t($(r,o.image))}" alt="${t(n(o.name))}" width="900" height="900" loading="lazy">${o.badge?`<span class="badge">${t(n(o.badge))}</span>`:""}</figure>
      <h3>${t(n(o.name))}</h3>
      ${n(o.description)?`<p class="muted">${t(n(o.description))}</p>`:""}
      <p class="from">${e.featured.from.replace("{price}",`<strong>${t(i(Math.min(...o.variants.map(c=>c.price))))}</strong>`)}</p>
    </article>`).join("")}</div>
  </div>
</section>`:""}function xe({services:a,catalog:e,t:n,L:r,money:i,vlabel:s}){let o=(e.categories??[]).filter(c=>a.some(l=>l.category===c.id));return o.length?`<section class="section" id="prices" aria-labelledby="price-title">
  <div class="wrap">
    <div class="head"><h2 id="price-title" class="h2">${t(n.prices.title)}</h2><p class="muted">${t(n.prices.note)}</p></div>
    <div class="menu">${o.map(c=>`<div class="menu-cat">
      <h3>${t(r(c.name))}</h3>
      <ul>${a.filter(l=>l.category===c.id).map(l=>`<li class="item">
        <div class="item-head"><span class="item-name">${t(r(l.name))}</span>${l.badge?`<span class="pill">${t(r(l.badge))}</span>`:""}</div>
        ${r(l.description)?`<p class="item-desc muted">${t(r(l.description))}</p>`:""}
        <dl class="rates">${l.variants.map(p=>`<div><dt>${t(s(p))}</dt><dd>${t(i(p.price))}</dd></div>`).join("")}</dl>
      </li>`).join("")}</ul>
    </div>`).join("")}</div>
  </div>
</section>`:""}function we({site:a,t:e,L:n,url:r}){let i=(a.promises??[]).filter(o=>n(o?.title)),s=(a.salonImages??[]).filter(o=>o?.image).slice(0,3);return!i.length&&!s.length?"":`<section class="section section--ink" aria-labelledby="prom-title">
  <div class="wrap prom">
    <div>
      <h2 id="prom-title" class="h2">${t(e.promises.title)}</h2>
      <ul class="prom-list">${i.map(o=>`<li><span class="prom-i">${u(o.icon??"star",22)}</span><div><h3>${t(n(o.title))}</h3>${n(o.text)?`<p>${t(n(o.text))}</p>`:""}</div></li>`).join("")}</ul>
    </div>
    ${s.length?`<div class="salon">${s.map((o,c)=>`<img sizes="auto, (max-width: 640px) 33vw, 260px" src="${t($(r,o.image))}" alt="${t(`${a.name} ${e.promises.salon} ${c+1}`)}" width="900" height="900" loading="lazy">`).join("")}</div>`:""}
  </div>
</section>`}function De({site:a,t:e,L:n,lang:r}){let i=_(a,e,r,"btn btn--line"),s=J(a);return a.showReviews===!1||!s.length&&!i?"":`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${t(e.reviews)}</h2>
    ${Y(s,r,"quotes",o=>`<figure class="quote">
      ${o.rating?`<div class="stars" aria-label="${o.rating}/5">${Array.from({length:5},(c,l)=>`<span class="${l<o.rating?"on":""}">${u("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${t(n(o.text))}</blockquote>
      <figcaption>${t(o.name)}${Z(o,r)}</figcaption>
    </figure>`)}${i}
  </div>
</section>`}function Se({site:a,t:e,L:n,services:r,channels:i,money:s,vlabel:o,catalog:c,gform:l}){let p=e.booking,b=a.contact??{},f=a.hours?.[0]??{open:"09:00",close:"21:00"},g=[],[v,x]=f.open.split(":").map(Number),[y,w]=f.close.split(":").map(Number);for(let d=v*60+x;d<=y*60+w-60;d+=30)g.push(`${String(Math.floor(d/60)).padStart(2,"0")}:${String(d%60).padStart(2,"0")}`);let h=(c.categories??[]).filter(d=>r.some(m=>m.category===d.id)),C=l?` data-gform="${t(l.action)}" data-gmap='${t(JSON.stringify(l.fields))}'`:"",R=i.map((d,m)=>`<button type="button" class="btn ${m===0?"btn--primary":"btn--line"}" data-channel="${t(d)}" data-href="${t(z(d,b,""))}">${u(d,18)} ${t(e.via[d]??d)}</button>`).join("");return`<section class="section" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="booking-copy">
      <h2 id="book-title" class="h2">${t(p.title)}</h2>
      <p class="lead">${t(p.text)}</p>
      <div class="actions">${i.map(d=>`<a class="btn btn--line" href="${t(z(d,b))}" ${U(d)}>${u(d,18)} ${t(e.via[d]??d)}</a>`).join("")}</div>
    </div>
    <form class="card form" data-book novalidate${C} data-order-text="${t(p.message)}">
      <div class="book-fields">
        <div class="row2">
          <label class="field"><span>${t(p.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${t(p.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field"><span>${t(p.service)}</span><select name="product">
          ${h.map(d=>`<optgroup label="${t(n(d.name))}">${r.filter(m=>m.category===d.id).flatMap(m=>m.variants.map(M=>{let E=`${n(m.name)} \xB7 ${o(M)}`;return`<option value="${t(E)}" data-price="${t(s(M.price))}">${t(E)} \xB7 ${t(s(M.price))}</option>`})).join("")}</optgroup>`).join("")}
        </select></label>
        <label class="field"><span>${t(p.design)}</span><input name="size" data-design placeholder="${t(p.designHint)}" maxlength="40"></label>
        <div class="row2">
          <label class="field"><span>${t(p.date)}</span><input name="day" type="date"></label>
          <label class="field"><span>${t(p.time)}</span><select name="time">${g.map(d=>`<option>${d}</option>`).join("")}</select></label>
        </div>
        <label class="field"><span>${t(p.note)}</span><textarea name="note" rows="2" maxlength="400"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${t(p.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${t(p.sending)}">${u("calendar",18)} ${t(p.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${u(l?"check":"arrow",22)} ${t(l?p.done:p.stepTitle)}</p>
        <p>${t(l?p.doneText:p.stepText)}</p>
        ${l?"":`<div class="buy">${R}</div><button type="button" class="link" data-edit>${t(p.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function Me({site:a,t:e,L:n}){let r=a.contact??{},i=encodeURIComponent(r.mapQuery??n(r.address)),s=o=>o.length===7?e.everyDay:A(o,e.days);return`<section class="section section--soft" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${t(e.visit.title)}</h2>
      ${H(a,e)}
      ${(a.hours??[]).length?`<table class="hours"><tbody>${a.hours.map(o=>`<tr><th scope="row">${t(s(o.days))}</th><td>${t(o.open)} \u2013 ${t(o.close)}</td></tr>`).join("")}</tbody></table>`:""}
      ${n(r.address)?`<p class="addr">${u("pin",18)} ${t(n(r.address))}</p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${i}" target="_blank" rel="noopener">${t(e.visit.directions)} ${u("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${t(e.visit.title)}" src="https://www.google.com/maps?q=${i}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function Ne({site:a,t:e,L:n}){let r=(a.faq??[]).filter(i=>n(i?.q));return r.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${t(e.faq.title)}</h2>
    <div class="qa">${r.map((i,s)=>`<details${s===0?" open":""}><summary>${t(n(i.q))}</summary><p>${t(n(i.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Pe({site:a,t:e,L:n,market:r}){let i=a.contact??{},s=Object.entries(a.social??{}).filter(([,o])=>o);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${t(a.name)}</p><p class="muted">${t(n(a.tagline))}</p></div>
    <div><p class="foot-h">${t(e.footer.contact)}</p><ul>
      ${i.phone?`<li><a href="tel:${k(i.phone)}">${t(i.phone)}</a></li>`:""}
      ${i.email?`<li><a href="mailto:${t(i.email)}">${t(i.email)}</a></li>`:""}
      ${n(i.address)?`<li>${t(n(i.address))}</li>`:""}</ul></div>
    ${s.length?`<div><p class="foot-h">${t(e.footer.follow)}</p><ul>${s.map(([o,c])=>`<li><a href="${t(c)}" target="_blank" rel="noopener">${t(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${a.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${t(a.name)}</span>${X(a,e,r.lang)}</div>
</footer>`}function ze({site:a,market:e,L:n,abs:r,services:i,catalog:s}){let o=a.contact??{};return{"@context":"https://schema.org","@type":"NailSalon",name:a.name,url:r(`${e.id}/`),description:n(a.intro),telephone:o.phone,email:o.email,address:{"@type":"PostalAddress",streetAddress:n(o.address)},currenciesAccepted:e.currency,openingHoursSpecification:V(a.hours??[]),hasOfferCatalog:{"@type":"OfferCatalog",name:a.name,itemListElement:(s.categories??[]).filter(c=>i.some(l=>l.category===c.id)).map(c=>({"@type":"OfferCatalog",name:n(c.name),itemListElement:i.filter(l=>l.category===c.id).flatMap(l=>l.variants.map(p=>({"@type":"Offer",name:`${n(l.name)} (${n(p.label)||p.minutes||""})`,price:p.price,priceCurrency:e.currency,itemOffered:{"@type":"Service",name:n(l.name),description:n(l.description)}})))}))}}}export{Ve as renderSite};
