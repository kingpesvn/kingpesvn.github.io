var Z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(t="")=>String(t).replace(/[&<>"']/g,a=>Z[a]);function M(t,a,n="vi"){return t==null?"":typeof t!="object"?String(t):t[a]??t[n]??Object.values(t)[0]??""}var Y={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},j=t=>Y[t]??"en-US";function X(t,a="1"){if(a==="0.99")return Math.max(.99,Math.ceil(t)-.01);let n=Number(a)||1;return Math.max(n,Math.round(t/n)*n)}function z(t,a){if(a.default)return t.basePrice;let n=t.prices?.[a.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:X(t.basePrice*a.rate,a.rounding)}var Q=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function T(t,a){let n={style:"currency",currency:a.currency};return Q.has(a.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(j(a.lang),n).format(t)}function C(t="/"){let a=t.endsWith("/")?t:`${t}/`;return(n="")=>a+String(n).replace(/^\//,"")}var ee=(t="")=>t.startsWith("uploads/")?t:/^([a-z]+:|\/)/i.test(t)?null:`assets/${t}`,b=(t,a)=>{let n=ee(a);return n==null?a:t(n)},$=(t="")=>String(t).replace(/\D/g,"");function S(t,a,n=""){switch(t){case"phone":return`tel:${$(a.phone)}`;case"zalo":return`https://zalo.me/${$(a.zalo||a.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(a.messenger)}`;case"whatsapp":return`https://wa.me/${$(a.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(a.kakao)}/chat`;case"email":return`mailto:${a.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var R=t=>`<script type="application/ld+json">${JSON.stringify(t).replace(/</g,"\\u003c")}<\/script>`,te=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function q(t){if(!t||typeof t!="string")return null;let a;try{a=new URL(t.trim())}catch{return{error:"not-google"}}if(a.hostname==="forms.gle")return{error:"short-link"};let n=a.hostname==="docs.google.com"&&a.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!n)return{error:"not-google"};let o={};for(let[r,i]of a.searchParams){if(!/^entry\.\d+$/.test(r))continue;let s=i.trim().replace(/^\{|\}$/g,"").toLowerCase();te.includes(s)&&(o[s]=r)}return Object.keys(o).length?o.phone?{action:`https://docs.google.com/forms/d/e/${n[1]}/formResponse`,fields:o}:{error:"no-phone"}:{error:"no-fields"}}var ae={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},u=(t,a=20,n="")=>`<svg class="i" width="${a}" height="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${ae[t]??""}</svg>`,k=[1,2,3,4,5,6,0],ne=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function N(t,a){let n=t.map(r=>k.indexOf(r)).sort((r,i)=>r-i);return n.every((r,i)=>i===0||r===n[i-1]+1)&&n.length>2?`${a[k[n[0]]]} \u2013 ${a[k[n.at(-1)]]}`:n.map(r=>a[k[r]]).join(", ")}var L=t=>t.map(a=>({"@type":"OpeningHoursSpecification",dayOfWeek:a.days.map(n=>ne[n]),opens:a.open,closes:a.close}));var B=t=>t==="phone"||t==="email"?"":'target="_blank" rel="noopener"',F=t=>`<div class="suggest" id="market-suggest" data-suggest="${e(t.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(t.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(t.market.dismiss)}">\xD7</button>
</div>`,G=(t,a)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(t.hours))}' data-tz="${e(t.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(a.visit.open)}" data-closed="${e(a.visit.closed)}" hidden></p>`,E={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},oe=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,re=t=>{try{let a=new URL(String(t.googleReview??"").trim());return a.protocol==="https:"&&oe.test(a.hostname)?a.href:""}catch{return""}},O=(t,a,n,o="btn btn--line")=>{let r=re(t);if(!r)return"";let i=typeof a.reviews=="object"&&a.reviews?.google||E[n]||E.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${o}" href="${e(r)}" target="_blank" rel="noopener">${u("star",16)} ${e(i)}</a></p>`},w={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},A={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},I=t=>(t.reviews??[]).filter(a=>a&&(a.name||a.text)&&!(typeof a.text=="object"&&a.text&&!Object.values(a.text).some(Boolean)&&!a.name));function V(t,a){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(t?.date??"").trim());if(!n)return"";let o=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(o.getTime()))return"";let r=new Intl.DateTimeFormat(A[a]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(o);return`<time class="rv-date" datetime="${e(t.date)}">${e(r)}</time>`}function se(t,a){let n=t.filter(s=>s.rating>=1&&s.rating<=5);if(n.length<2)return"";let o=n.reduce((s,p)=>s+Number(p.rating),0)/n.length,r=w[a]??w.en,i=new Intl.NumberFormat(A[a]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(o);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${u("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${e(r.count.replace("{n}",String(t.length)))}</span></p>`}function U(t,a,n,o){if(!t.length)return"";let r=w[a]??w.en,i=s=>`<button type="button" class="rv-btn" data-rv-${s} aria-label="${e(s==="prev"?r.prev:r.next)}">${u("arrow",18,s==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${se(t,a)}<div class="rv" data-rv data-more="${e(r.more)}" data-less="${e(r.less)}">
      <div class="${n} rv-track" tabindex="0">${t.map(o).join("")}</div>
      <div class="rv-nav" hidden>${i("prev")}${i("next")}</div>
    </div>${ie}`}var ie=`<style>
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
upd()}})()<\/script>`;var W=(t,a,n)=>t.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(a.footer.madeWith)}</a>`;function H({site:t,markets:a,url:n,abs:o}){let r=a.find(s=>s.default)??a[0],i=a.map(s=>({id:s.id,lang:s.lang,country:s.country}));return`<!doctype html>
<html lang="${e(r.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(t.name)}</title>
<link rel="canonical" href="${o(`${r.id}/`)}">
${a.map(s=>`<link rel="alternate" hreflang="${e(s.lang)}-${e(s.country)}" href="${o(`${s.id}/`)}">`).join(`
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
<body><p>${a.map(s=>`<a href="${n(`${s.id}/`)}">${e(s.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var le="https://fonts.googleapis.com/css2?family=Bitter:wght@500;700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&family=Patrick+Hand&display=swap",P=12,ce=[1,2,3,4,5,6,0];function pe(t,a){return(t.products??[]).map(n=>({...n,variants:(n.variants??[]).map(o=>({...o,price:z(o,a)})).filter(o=>o.price!=null)})).filter(n=>n.variants.length>0)}function Fe({site:t,catalog:a,i18n:n,template:o,basePath:r="/",siteUrl:i=t.domain}){let s=C(r),p=m=>new URL(s(m),i).href,l=a.markets,c=q(t.orderForm),g=c&&!c.error?c:null,v=l.map(m=>{let f=m.lang,y=n[f]??n.en??n.vi,d=D=>M(D,f,"en"),h=pe(a,m),K=t.orderChannels?.[m.id]??["phone"],J={site:t,catalog:a,market:m,markets:l,lang:f,t:y,L:d,url:s,abs:p,items:h,channels:K,money:D=>T(D,m),template:o,gform:g};return{path:`${m.id}/index.html`,html:de(J)}});return v.push({path:"index.html",html:H({site:t,markets:l,url:s,abs:p})}),v}var _=(t,a)=>t.filter(n=>n.category===(a.categories?.[0]?.id??"main")),x=t=>Math.min(...t.variants.map(a=>a.price));function de(t){let{site:a,market:n,markets:o,lang:r,t:i,L:s,url:p,abs:l}=t,c=`${a.name} \xB7 ${s(a.tagline)}`,g=a.theme??{},v=["primary","ink","bg","surface","soft","accent"].filter(h=>g[h]).map(h=>`--${h}:${g[h]}`).join(";"),m=o.find(h=>h.default)??o[0],f=o.map(h=>({id:h.id,lang:h.lang,country:h.country,currency:h.currency,href:p(`${h.id}/`)})),y=a.contact??{},d=new URL(b(p,a.heroImage||"photos/hero.webp"),l("")).href;return`<!doctype html>
<html lang="${e(r)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(c)}</title>
<meta name="description" content="${e(s(a.intro))}">
<link rel="canonical" href="${l(`${n.id}/`)}">
${o.map(h=>`<link rel="alternate" hreflang="${e(h.lang)}-${e(h.country)}" href="${l(`${h.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${l(`${m.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${e(c)}">
<meta property="og:description" content="${e(s(a.intro))}">
<meta property="og:url" content="${l(`${n.id}/`)}">
<meta property="og:site_name" content="${e(a.name)}">
<meta property="og:image" content="${e(d)}">
<meta name="theme-color" content="${e(g.primary??"#C8401E")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${le}">
<link rel="stylesheet" href="${p("assets/style.css")}">
<style>:root{${v}}</style>
<noscript><style>.album .more{display:block}.album-more,.days{display:none}</style></noscript>
${R(De(t))}
<script src="${p("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(n.id)}" data-markets='${e(JSON.stringify(f))}' data-wa="${e($(y.whatsapp))}" data-email="${e(y.email??"")}" data-copied="${e(i.order.copied)}">
<a class="skip" href="#main">${e(i.skip)}</a>
${F(i)}
${ue(t)}
<main id="main">
${he(t)}
${me(t)}
${ge(t)}
${fe(t)}
${be(t)}
${ve(t)}
${ye(t)}
${$e(t)}
${xe(t)}
${ke(t)}
</main>
${we(t)}
<nav class="dock" aria-label="${e(i.nav.order)}">
  <a href="#today">${u("bowl",20)}<span>${e(i.nav.today)}</span></a>
  <a class="primary" href="#order">${u("truck",20)}<span>${e(i.nav.order)}</span></a>
</nav>
</body>
</html>
`}function ue({site:t,market:a,markets:n,t:o,url:r}){let i=[["#today",o.nav.today],["#menu",o.nav.menu],["#visit",o.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${r(`${a.id}/`)}">
      ${t.logo?`<img src="${e(b(r,t.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${u("bowl",22)}</span>`}
      <span>${e(t.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${i.map(([s,p])=>`<a href="${s}">${e(p)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${n.length>1?`<details class="market">
        <summary aria-label="${e(o.market.label)}">${u("globe",18)}<span>${e(a.lang.toUpperCase())}</span></summary>
        <ul>${n.map(s=>`<li><a href="${r(`${s.id}/`)}" hreflang="${e(s.lang)}"${s.id===a.id?' aria-current="true"':""}>${e(s.lang.toUpperCase())} \xB7 ${e(s.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-sm" href="#order">${e(o.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${e(o.nav.openMenu)}">${u("menu",22)}</summary>
        <nav aria-label="Menu">${[...i,["#order",o.nav.order]].map(([s,p])=>`<a href="${s}">${e(p)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function he({site:t,t:a,L:n,url:o}){let r=t.heroImage?e(b(o,t.heroImage)):o("assets/photos/hero.webp"),i=(t.hours??[]).map(s=>`${s.open}\u2013${s.close}`).join(" \xB7 ");return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${n(t.place)?`<p class="eyebrow">${e(n(t.place))}</p>`:""}
      <h1>${e(n(t.tagline))}</h1>
      ${n(t.intro)?`<p class="lead">${e(n(t.intro))}</p>`:""}
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#today">${u("bowl",18)} ${e(a.hero.today)}</a>
        <a class="btn btn--line btn--lg" href="#order">${e(a.hero.order)}</a>
      </div>
      <ul class="facts">
        ${i?`<li>${u("clock",18)} ${e(i)}</li>`:""}
        ${n(t.contact?.address)?`<li>${u("pin",18)} ${e(n(t.contact.address))}</li>`:""}
      </ul>
    </div>
    <figure class="hero-img">
      <img src="${r}" alt="${e(t.name)}" width="1600" height="1000" fetchpriority="high">
      <span class="stamp" data-stamp data-days='${e(JSON.stringify(a.days))}'><small>${e(a.hero.stamp)}</small><b>${e(a.hero.everyDay)}</b></span>
    </figure>
  </div>
</section>`}function me({items:t,catalog:a,t:n,L:o,url:r,money:i}){let s=_(t,a);if(!s.length)return"";let p=n.daysShort;return`<section class="section" id="today" aria-labelledby="today-title">
  <div class="wrap">
    <div class="head">
      <h2 id="today-title" class="h2">${e(n.today.title)}</h2>
      <p class="muted">${e(n.today.text)}</p>
    </div>
    <div class="days" role="group" aria-label="${e(n.today.pick)}">${ce.map(l=>`<button type="button" class="day" data-day="${l}" aria-pressed="false">${e(p[l])}</button>`).join("")}</div>
    <div class="dishes" data-dishes>${s.map(l=>`<article class="dish" data-days="${e((l.days??[]).join(" "))}">
      <figure>${l.image?`<img sizes="auto, (max-width: 640px) 100vw, 360px" src="${e(b(r,l.image))}" alt="${e(o(l.name))}" width="1000" height="750" loading="lazy">`:""}${l.tag?`<span class="tag">${e(o(l.tag))}</span>`:""}</figure>
      <div class="dish-body">
        <h3>${e(o(l.name))}</h3>
        ${o(l.description)?`<p class="muted">${e(o(l.description))}</p>`:""}
        <div class="dish-foot"><strong>${e(i(x(l)))}</strong><button type="button" class="btn btn--line btn--sm" data-pick="${e(l.id)}">${u("check",16)} ${e(n.today.pickDish)}</button></div>
        ${l.days?.length&&l.days.length<7?`<p class="when">${e(n.today.only)} ${e(N(l.days,n.days))}</p>`:""}
      </div>
    </article>`).join("")}</div>
    <p class="empty muted" data-empty hidden>${e(n.today.closed)}</p>
  </div>
</section>`}function ge({site:t,items:a,catalog:n,t:o,L:r,money:i}){let s=(n.categories??[]).filter(p=>a.some(l=>l.category===p.id));return s.length?`<section class="section board-wrap" id="menu" aria-labelledby="menu-title">
  <div class="wrap">
    <div class="board">
      <div class="board-head">
        <h2 id="menu-title" class="h2">${e(o.menu.title)}</h2>
        ${r(t.plateNote)?`<p>${e(r(t.plateNote))}</p>`:""}
      </div>
      <div class="board-cols">${s.map(p=>`<div class="board-cat">
        <h3>${e(r(p.name))}</h3>
        <ul>${a.filter(l=>l.category===p.id).map(l=>`<li><span class="nm">${e(r(l.name))}</span><span class="dots" aria-hidden="true"></span><span class="pr">${e(i(x(l)))}</span></li>`).join("")}</ul>
      </div>`).join("")}</div>
    </div>
  </div>
</section>`:""}function fe({site:t,t:a,L:n}){let o=t.delivery;return!o||!n(o.text)&&!o.slots?.length?"":`<aside class="deliv" aria-label="${e(a.delivery.title)}">
  <div class="wrap deliv-in">
    <span class="deliv-i">${u("truck",28)}</span>
    <div><strong>${e(a.delivery.title)}</strong>${n(o.text)?`<p>${e(n(o.text))}</p>`:""}</div>
    ${o.slots?.length?`<ul class="slots" aria-label="${e(a.delivery.slots)}">${o.slots.map(r=>`<li>${e(r)}</li>`).join("")}</ul>`:""}
  </div>
</aside>`}function be({site:t,t:a,L:n}){let o=(t.promises??[]).filter(r=>n(r?.title));return o.length?`<section class="section" aria-labelledby="prom-title">
  <div class="wrap">
    <h2 id="prom-title" class="h2">${e(a.promises.title)}</h2>
    <ul class="prom">${o.map(r=>`<li><span class="prom-i">${u(r.icon??"star",24)}</span><h3>${e(n(r.title))}</h3>${n(r.text)?`<p class="muted">${e(n(r.text))}</p>`:""}</li>`).join("")}</ul>
  </div>
</section>`:""}function ve({site:t,t:a,url:n}){let o=(t.album??[]).filter(r=>r?.image);return o.length?`<section class="section section--soft" id="album" aria-labelledby="album-title">
  <div class="wrap">
    <div class="head"><h2 id="album-title" class="h2">${e(a.album.title)}</h2><p class="muted">${e(a.album.text.replace("{n}",o.length))}</p></div>
    <div class="album" data-album>${o.map((r,i)=>{let s=e(b(n,r.image));return`<a class="ph${i>=P?" more":""}" href="${s}" data-i="${i}"><img sizes="auto, (max-width: 640px) 50vw, 280px" src="${s}" alt="${e(`${t.name} ${i+1}`)}" width="1000" height="750" loading="lazy"></a>`}).join("")}</div>
    ${o.length>P?`<p class="center"><button type="button" class="btn btn--line album-more" data-album-more>${e(a.album.more)} <span data-left>(${o.length-P})</span></button></p>`:""}
  </div>
  <dialog class="lb" data-lightbox aria-label="${e(a.album.title)}">
    <img alt="" data-lb-img>
    <button type="button" class="lb-btn lb-close" data-lb-close aria-label="${e(a.album.close)}">\u2715</button>
    <button type="button" class="lb-btn lb-prev" data-lb-prev aria-label="${e(a.album.prev)}">${u("arrow",22,'style="transform:scaleX(-1)"')}</button>
    <button type="button" class="lb-btn lb-next" data-lb-next aria-label="${e(a.album.next)}">${u("arrow",22)}</button>
    <p class="lb-count" data-lb-count></p>
  </dialog>
</section>`:""}function ye({site:t,t:a,L:n,lang:o}){let r=O(t,a,o,"btn btn--line"),i=I(t);return t.showReviews===!1||!i.length&&!r?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(a.reviews)}</h2>
    ${U(i,o,"quotes",s=>`<figure class="quote">
      ${s.rating?`<div class="stars" aria-label="${s.rating}/5">${Array.from({length:5},(p,l)=>`<span class="${l<s.rating?"on":""}">${u("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${e(n(s.text))}</blockquote>
      <figcaption>${e(s.name)}${V(s,o)}</figcaption>
    </figure>`)}${r}
  </div>
</section>`}function $e({site:t,items:a,catalog:n,t:o,L:r,channels:i,money:s,gform:p,market:l}){let c=o.order,g=t.contact??{},v=_(a,n),m=t.delivery?.slots??[],f=p?` data-gform="${e(p.action)}" data-gmap='${e(JSON.stringify(p.fields))}'`:"",y=i.map((d,h)=>`<button type="button" class="btn ${h===0?"btn--primary":"btn--line"}" data-channel="${e(d)}" data-href="${e(S(d,g,""))}">${u(d,18)} ${e(o.via[d]??d)}</button>`).join("");return`<section class="section section--soft" id="order" aria-labelledby="order-title">
  <div class="wrap order">
    <div class="order-copy">
      <h2 id="order-title" class="h2">${e(c.title)}</h2>
      <p class="lead">${e(c.text)}</p>
      <div class="actions">${i.map(d=>`<a class="btn btn--line" href="${e(S(d,g))}" ${B(d)}>${u(d,18)} ${e(o.via[d]??d)}</a>`).join("")}</div>
    </div>
    <form class="card form" data-order novalidate${f} data-order-text="${e(c.message)}">
      <div class="order-fields">
        <div class="row2 row2--wide">
          <label class="field"><span>${e(c.dish)}</span><select name="product">${v.map(d=>`<option value="${e(r(d.name))}" data-id="${e(d.id)}" data-price="${x(d)}" data-days="${e((d.days??[]).join(" "))}">${e(r(d.name))} \xB7 ${e(s(x(d)))}</option>`).join("")}</select></label>
          <label class="field"><span>${e(c.qty)}</span><input name="qty" type="number" inputmode="numeric" min="1" max="200" value="1"></label>
        </div>
        <fieldset class="field choice"><legend>${e(c.mode)}</legend>
          <label><input type="radio" name="mode" value="delivery" checked> <span data-label>${e(c.delivery)}</span></label>
          <label><input type="radio" name="mode" value="pickup"> <span data-label>${e(c.pickup)}</span></label>
        </fieldset>
        <div class="row2">
          <label class="field"><span>${e(c.time)}</span><select name="slot">${m.map(d=>`<option>${e(d)}</option>`).join("")}<option value="">${e(c.asap)}</option></select></label>
          <label class="field"><span>${e(c.total)}</span><output name="total" data-total data-cur="${e(l.currency)}" data-lang="${e(l.lang)}" data-dec="${["VND","JPY","KRW","IDR"].includes(l.currency)?0:2}">\u2013</output></label>
        </div>
        <label class="field" data-addr><span>${e(c.address)}</span><input name="address" autocomplete="street-address" maxlength="160" placeholder="${e(c.addressHint)}"></label>
        <div class="row2">
          <label class="field"><span>${e(c.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${e(c.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field"><span>${e(c.note)}</span><textarea name="note" rows="2" maxlength="400" placeholder="${e(c.noteHint)}"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${e(c.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${e(c.sending)}">${u("truck",18)} ${e(c.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${u(p?"check":"arrow",22)} ${e(p?c.done:c.stepTitle)}</p>
        <p>${e(p?c.doneText:c.stepText)}</p>
        ${p?"":`<div class="buy">${y}</div><button type="button" class="link" data-edit>${e(c.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function xe({site:t,t:a,L:n}){let o=t.contact??{},r=encodeURIComponent(o.mapQuery??n(o.address)),i=s=>s.length===7?a.everyDay:N(s,a.days);return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${e(a.visit.title)}</h2>
      ${G(t,a)}
      ${(t.hours??[]).length?`<table class="hours"><tbody>${t.hours.map(s=>`<tr><th scope="row">${e(i(s.days))}</th><td>${e(s.open)} \u2013 ${e(s.close)}</td></tr>`).join("")}</tbody></table>`:""}
      ${n(o.address)?`<p class="addr">${u("pin",18)} ${e(n(o.address))}</p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${r}" target="_blank" rel="noopener">${e(a.visit.directions)} ${u("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${e(a.visit.title)}" src="https://www.google.com/maps?q=${r}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function ke({site:t,t:a,L:n}){let o=(t.faq??[]).filter(r=>n(r?.q));return o.length?`<section class="section section--soft" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${e(a.faq.title)}</h2>
    <div class="qa">${o.map((r,i)=>`<details${i===0?" open":""}><summary>${e(n(r.q))}</summary><p>${e(n(r.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function we({site:t,t:a,L:n,market:o}){let r=t.contact??{},i=Object.entries(t.social??{}).filter(([,s])=>s);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(t.name)}</p><p class="muted">${e(n(t.tagline))}</p></div>
    <div><p class="foot-h">${e(a.footer.contact)}</p><ul>
      ${r.phone?`<li><a href="tel:${$(r.phone)}">${e(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${e(r.email)}">${e(r.email)}</a></li>`:""}
      ${n(r.address)?`<li>${e(n(r.address))}</li>`:""}</ul></div>
    ${i.length?`<div><p class="foot-h">${e(a.footer.follow)}</p><ul>${i.map(([s,p])=>`<li><a href="${e(p)}" target="_blank" rel="noopener">${e(s[0].toUpperCase()+s.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${t.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(t.name)}</span>${W(t,a,o.lang)}</div>
</footer>`}function De({site:t,market:a,L:n,abs:o,items:r,catalog:i,url:s}){let p=t.contact??{};return{"@context":"https://schema.org","@type":"Restaurant",name:t.name,url:o(`${a.id}/`),description:n(t.intro),image:new URL(b(s,t.heroImage||"photos/hero.webp"),o("")).href,servesCuisine:"Vietnamese",telephone:p.phone,address:{"@type":"PostalAddress",streetAddress:n(p.address)},openingHoursSpecification:L(t.hours??[]),hasMenu:{"@type":"Menu",hasMenuSection:(i.categories??[]).filter(l=>r.some(c=>c.category===l.id)).map(l=>({"@type":"MenuSection",name:n(l.name),hasMenuItem:r.filter(c=>c.category===l.id).map(c=>({"@type":"MenuItem",name:n(c.name),description:n(c.description),offers:{"@type":"Offer",price:x(c),priceCurrency:a.currency}}))}))}}}export{Fe as renderSite};
