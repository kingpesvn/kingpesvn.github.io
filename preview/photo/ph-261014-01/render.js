var Z={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(t="")=>String(t).replace(/[&<>"']/g,n=>Z[n]);function M(t,n,a="vi"){return t==null?"":typeof t!="object"?String(t):t[n]??t[a]??Object.values(t)[0]??""}var Y={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},y=t=>Y[t]??"en-US";function X(t,n="1"){if(n==="0.99")return Math.max(.99,Math.ceil(t)-.01);let a=Number(n)||1;return Math.max(a,Math.round(t/a)*a)}function N(t,n){if(n.default)return t.basePrice;let a=t.prices?.[n.id]??{mode:"auto"};return a.mode==="hidden"?null:a.mode==="manual"?a.amount:X(t.basePrice*n.rate,n.rounding)}var Q=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function P(t,n){let a={style:"currency",currency:n.currency};return Q.has(n.currency)&&(a.maximumFractionDigits=0),new Intl.NumberFormat(y(n.lang),a).format(t)}function z(t="/"){let n=t.endsWith("/")?t:`${t}/`;return(a="")=>n+String(a).replace(/^\//,"")}var ee=(t="")=>t.startsWith("uploads/")?t:/^([a-z]+:|\/)/i.test(t)?null:`assets/${t}`,$=(t,n)=>{let a=ee(n);return a==null?n:t(a)},v=(t="")=>String(t).replace(/\D/g,"");function D(t,n,a=""){switch(t){case"phone":return`tel:${v(n.phone)}`;case"zalo":return`https://zalo.me/${v(n.zalo||n.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(n.messenger)}`;case"whatsapp":return`https://wa.me/${v(n.whatsapp)}${a?`?text=${encodeURIComponent(a)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(n.kakao)}/chat`;case"email":return`mailto:${n.email}${a?`?subject=${encodeURIComponent(a)}`:""}`;default:return"#"}}var j=t=>`<script type="application/ld+json">${JSON.stringify(t).replace(/</g,"\\u003c")}<\/script>`,te=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function C(t){if(!t||typeof t!="string")return null;let n;try{n=new URL(t.trim())}catch{return{error:"not-google"}}if(n.hostname==="forms.gle")return{error:"short-link"};let a=n.hostname==="docs.google.com"&&n.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!a)return{error:"not-google"};let s={};for(let[i,r]of n.searchParams){if(!/^entry\.\d+$/.test(i))continue;let o=r.trim().replace(/^\{|\}$/g,"").toLowerCase();te.includes(o)&&(s[o]=i)}return Object.keys(s).length?s.phone?{action:`https://docs.google.com/forms/d/e/${a[1]}/formResponse`,fields:s}:{error:"no-phone"}:{error:"no-fields"}}var ae={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5M8 7h8"/>',chat:'<path d="M4 5h16v11h-9l-5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',paw:'<circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/><path d="M12 12c-3 0-6 4-6 6.5S8 21 12 19.5 18 21 18 18.5 15 12 12 12z"/>',scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5 20 18M8.5 16.5 20 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 22c4 0 7-2.7 7-6.7 0-3.6-2.6-6-4.4-8.3-.6 1.9-1.6 3-3.1 3.6C12.6 7.4 11.6 4.3 9 2c0 4-5 6.5-5 13.3C4 19.3 8 22 12 22z"/>',drop2:'<path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},m=(t,n=20,a="")=>`<svg class="i" width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${a}>${ae[t]??""}</svg>`,k=[1,2,3,4,5,6,0],ne=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function R(t,n){let a=t.map(i=>k.indexOf(i)).sort((i,r)=>i-r);return a.every((i,r)=>r===0||i===a[r-1]+1)&&a.length>2?`${n[k[a[0]]]} \u2013 ${n[k[a.at(-1)]]}`:a.map(i=>n[k[i]]).join(", ")}var E=t=>t.map(n=>({"@type":"OpeningHoursSpecification",dayOfWeek:n.days.map(a=>ne[a]),opens:n.open,closes:n.close}));function q(t){return new Intl.NumberFormat(y(t.lang),{style:"currency",currency:t.currency}).formatToParts(0).find(a=>a.type==="currency")?.value??t.currency}var B=t=>t==="phone"||t==="email"?"":'target="_blank" rel="noopener"',L=t=>`<div class="suggest" id="market-suggest" data-suggest="${e(t.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(t.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(t.market.dismiss)}">\xD7</button>
</div>`,A=(t,n)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(t.hours))}' data-tz="${e(t.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(n.visit.open)}" data-closed="${e(n.visit.closed)}" hidden></p>`,T={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},oe=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,re=t=>{try{let n=new URL(String(t.googleReview??"").trim());return n.protocol==="https:"&&oe.test(n.hostname)?n.href:""}catch{return""}},O=(t,n,a,s="btn btn--line")=>{let i=re(t);if(!i)return"";let r=typeof n.reviews=="object"&&n.reviews?.google||T[a]||T.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${s}" href="${e(i)}" target="_blank" rel="noopener">${m("star",16)} ${e(r)}</a></p>`},x={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},F={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},G=t=>(t.reviews??[]).filter(n=>n&&(n.name||n.text)&&!(typeof n.text=="object"&&n.text&&!Object.values(n.text).some(Boolean)&&!n.name));function V(t,n){let a=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(t?.date??"").trim());if(!a)return"";let s=new Date(Date.UTC(+a[1],+a[2]-1,+(a[3]??1)));if(Number.isNaN(s.getTime()))return"";let i=new Intl.DateTimeFormat(F[n]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(s);return`<time class="rv-date" datetime="${e(t.date)}">${e(i)}</time>`}function se(t,n){let a=t.filter(o=>o.rating>=1&&o.rating<=5);if(a.length<2)return"";let s=a.reduce((o,c)=>o+Number(c.rating),0)/a.length,i=x[n]??x.en,r=new Intl.NumberFormat(F[n]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(s);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${m("star",18)}</span><strong>${r}</strong><span>\xB7</span><span>${e(i.count.replace("{n}",String(t.length)))}</span></p>`}function I(t,n,a,s){if(!t.length)return"";let i=x[n]??x.en,r=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${e(o==="prev"?i.prev:i.next)}">${m("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${se(t,n)}<div class="rv" data-rv data-more="${e(i.more)}" data-less="${e(i.less)}">
      <div class="${a} rv-track" tabindex="0">${t.map(s).join("")}</div>
      <div class="rv-nav" hidden>${r("prev")}${r("next")}</div>
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
upd()}})()<\/script>`;var U=(t,n,a)=>t.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(a==="vi"||a==="ja"?a:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(n.footer.madeWith)}</a>`;function H({site:t,markets:n,url:a,abs:s}){let i=n.find(o=>o.default)??n[0],r=n.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${e(i.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(t.name)}</title>
<link rel="canonical" href="${s(`${i.id}/`)}">
${n.map(o=>`<link rel="alternate" hreflang="${e(o.lang)}-${e(o.country)}" href="${s(`${o.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(r)}, root = ${JSON.stringify(a(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${n.map(o=>`<a href="${a(`${o.id}/`)}">${e(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var le="https://fonts.googleapis.com/css2?family=Prata&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap",W=14;function ce(t,n){return(t.products??[]).map(a=>({...a,variants:(a.variants??[]).map(s=>({...s,price:N(s,n)})).filter(s=>s.price!=null)})).filter(a=>a.variants.length>0)}function Be({site:t,catalog:n,i18n:a,template:s,basePath:i="/",siteUrl:r=t.domain}){let o=z(i),c=l=>new URL(o(l),r).href,p=n.markets,d=C(t.bookingForm),f=d&&!d.error?d:null,g=p.map(l=>{let h=l.lang,b=a[h]??a.en??a.vi,u=w=>M(w,h,"en"),_=ce(n,l),K=t.bookingChannels?.[l.id]??["phone"],J={site:t,catalog:n,market:l,markets:p,lang:h,t:b,L:u,url:o,abs:c,packages:_,channels:K,money:w=>P(w,l),template:s,gform:f};return{path:`${l.id}/index.html`,html:pe(J)}});return g.push({path:"index.html",html:H({site:t,markets:p,url:o,abs:c})}),g}var S=(t,n)=>t.heroImage?$(n,t.heroImage):n("assets/photos/hero.webp");function pe(t){let{site:n,market:a,markets:s,lang:i,t:r,L:o,url:c,abs:p}=t,d=`${n.name} \xB7 ${o(n.tagline)}`,f=n.theme??{},g=["primary","ink","bg","surface","soft","accent"].filter(u=>f[u]).map(u=>`--${u}:${f[u]}`).join(";"),l=s.find(u=>u.default)??s[0],h=s.map(u=>({id:u.id,lang:u.lang,country:u.country,currency:u.currency,href:c(`${u.id}/`)})),b=n.contact??{};return`<!doctype html>
<html lang="${e(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(d)}</title>
<meta name="description" content="${e(o(n.intro))}">
<link rel="canonical" href="${p(`${a.id}/`)}">
${s.map(u=>`<link rel="alternate" hreflang="${e(u.lang)}-${e(u.country)}" href="${p(`${u.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${p(`${l.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${e(d)}">
<meta property="og:description" content="${e(o(n.intro))}">
<meta property="og:url" content="${p(`${a.id}/`)}">
<meta property="og:site_name" content="${e(n.name)}">
<meta property="og:image" content="${e(new URL(S(n,c),p("")).href)}">
<meta name="theme-color" content="${e(f.bg??"#141312")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${le}">
<link rel="stylesheet" href="${c("assets/style.css")}">
<style>:root{${g}}</style>
<noscript><style>.works .more{display:block}.works-more,.chips,.cal{display:none}.cal-nojs{display:block}</style></noscript>
${j(xe(t))}
<script src="${c("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(a.id)}" data-markets='${e(JSON.stringify(h))}' data-wa="${e(v(b.whatsapp))}" data-email="${e(b.email??"")}" data-copied="${e(r.booking.copied)}" data-tz="${e(n.timezone??"Asia/Ho_Chi_Minh")}" data-locale="${e(y(i))}">
<a class="skip" href="#main">${e(r.skip)}</a>
${L(r)}
${de(t)}
<main id="main">
${he(t)}
${ue(t)}
${me(t)}
${ge(t)}
${fe(t)}
${be(t)}
${ve(t)}
${ye(t)}
${$e(t)}
</main>
${ke(t)}
<nav class="dock" aria-label="${e(r.nav.book)}">
  <a href="${e(D(t.channels[0],b))}" ${B(t.channels[0])}>${m(t.channels[0],20)}<span>${e(r.via[t.channels[0]]??"")}</span></a>
  <a class="primary" href="#booking">${m("calendar",20)}<span>${e(r.nav.book)}</span></a>
</nav>
</body>
</html>
`}function de({site:t,market:n,markets:a,t:s,url:i}){let r=[["#works",s.nav.works],["#packages",s.nav.packages],["#booking",s.nav.calendar],["#visit",s.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${i(`${n.id}/`)}">
      ${t.logo?`<img src="${e($(i,t.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${m("camera",20)}</span>`}
      <span>${e(t.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${r.map(([o,c])=>`<a href="${o}">${e(c)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${a.length>1?`<details class="market">
        <summary aria-label="${e(s.market.label)}">${m("globe",18)}<span>${e(n.id.toUpperCase())}<span class="cur"> \xB7 ${e(q(n))}</span></span></summary>
        <ul>${a.map(o=>`<li><a href="${i(`${o.id}/`)}" hreflang="${e(o.lang)}"${o.id===n.id?' aria-current="true"':""}>${e(o.country)} \xB7 ${e(o.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-md" href="#booking">${e(s.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${e(s.nav.openMenu)}">${m("menu",22)}</summary>
        <nav aria-label="Menu">${[...r,["#booking",s.nav.book]].map(([o,c])=>`<a href="${o}">${e(c)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function he({site:t,t:n,L:a,url:s}){let i=(t.stats??[]).filter(r=>a(r?.value));return`<section class="hero">
  <img class="hero-bg" src="${e(S(t,s))}" alt="" width="1600" height="1000" fetchpriority="high">
  <div class="wrap hero-inner">
    ${a(t.place)?`<p class="eyebrow">${e(a(t.place))}</p>`:""}
    <h1>${e(a(t.tagline))}</h1>
    ${a(t.intro)?`<p class="lead">${e(a(t.intro))}</p>`:""}
    <div class="actions">
      <a class="btn btn--primary btn--lg" href="#booking">${m("calendar",18)} ${e(n.hero.book)}</a>
      <a class="btn btn--ghost btn--lg" href="#works">${e(n.hero.works)}</a>
    </div>
  </div>
  ${i.length?`<ul class="wrap stats">${i.map(r=>`<li><b>${e(a(r.value))}</b><span>${e(a(r.label))}</span></li>`).join("")}</ul>`:""}
</section>`}function ue({site:t,catalog:n,t:a,L:s,url:i}){let r=(t.portfolio??[]).filter(c=>c?.image);if(!r.length)return"";let o=(n.categories??[]).filter(c=>r.some(p=>p.tag===c.id));return`<section class="section" id="works" aria-labelledby="works-title">
  <div class="wrap">
    <div class="head"><p class="kicker">${e(a.works.kicker)}</p><h2 id="works-title" class="h2">${e(a.works.title)}</h2></div>
    ${o.length>1?`<div class="chips" role="group" aria-label="${e(a.works.filter)}"><button type="button" class="chip" data-tag="" aria-pressed="true">${e(a.works.all)}</button>${o.map(c=>`<button type="button" class="chip" data-tag="${e(c.id)}" aria-pressed="false">${e(s(c.name))}</button>`).join("")}</div>`:""}
    <div class="works" data-works>${r.map((c,p)=>{let d=e($(i,c.image));return`<a class="ph${p>=W?" more":""}${p%7===0||p%7===4?" tall":""}" href="${d}" data-t="${e(c.tag??"")}"><img sizes="auto, (max-width: 640px) 50vw, 380px" src="${d}" alt="${e(`${t.name} ${p+1}`)}" width="1000" height="750" loading="lazy"></a>`}).join("")}</div>
    ${r.length>W?`<p class="center"><button type="button" class="btn btn--line works-more" data-works-more>${e(a.works.more)}</button></p>`:""}
  </div>
  <dialog class="lb" data-lightbox aria-label="${e(a.works.title)}">
    <img alt="" data-lb-img>
    <button type="button" class="lb-btn lb-close" data-lb-close aria-label="${e(a.works.close)}">\u2715</button>
    <button type="button" class="lb-btn lb-prev" data-lb-prev aria-label="${e(a.works.prev)}">${m("arrow",22,'style="transform:scaleX(-1)"')}</button>
    <button type="button" class="lb-btn lb-next" data-lb-next aria-label="${e(a.works.next)}">${m("arrow",22)}</button>
    <p class="lb-count" data-lb-count></p>
  </dialog>
</section>`}function me({catalog:t,packages:n,t:a,L:s,lang:i,url:r,money:o}){if(!n.length)return"";let c=t.categories??[],p=l=>{let h=c.findIndex(b=>b.id===l.category);return h<0?c.length:h},d=[...n].sort((l,h)=>p(l)-p(h)),f=l=>{let h=l.includes;return h?(Array.isArray(h)?h:h[i]??h.en??h.vi??[]).map(u=>typeof u=="string"?u:s(u)).filter(Boolean):[]},g=new Map(c.map(l=>[l.id,s(l.name)]));return`<section class="section section--light" id="packages" aria-labelledby="pk-title">
  <div class="wrap">
    <div class="head"><p class="kicker">${e(a.packages.kicker)}</p><h2 id="pk-title" class="h2">${e(a.packages.title)}</h2><p class="muted">${e(a.packages.text)}</p></div>
    <div class="packs">${d.map(l=>`<article class="pack${l.featured?" pack--hot":""}">
      ${l.image?`<figure><img sizes="auto, (max-width: 640px) 100vw, 380px" src="${e($(r,l.image))}" alt="${e(s(l.name))}" width="1000" height="750" loading="lazy">${l.featured?`<span class="hot">${e(a.packages.popular)}</span>`:""}</figure>`:""}
      <div class="pack-body">
        ${g.get(l.category)?`<p class="pack-cat">${e(g.get(l.category))}</p>`:""}
        <h3>${e(s(l.name))}</h3>
        ${s(l.description)?`<p class="muted">${e(s(l.description))}</p>`:""}
        ${f(l).length?`<ul class="inc">${f(l).map(h=>`<li>${m("check",15)} ${e(h)}</li>`).join("")}</ul>`:""}
        <table class="ptable"><tbody>${l.variants.map(h=>`<tr><th scope="row">${e(s(h.label))}</th><td>${e(o(h.price))}</td></tr>`).join("")}</tbody></table>
        <a class="btn ${l.featured?"btn--primary":"btn--line"}" href="#booking" data-pick="${e(s(l.name))}">${e(a.packages.pick)}</a>
      </div>
    </article>`).join("")}</div>
  </div>
</section>`}function ge({site:t,t:n,L:a}){let s=(t.steps??[]).filter(i=>a(i?.title));return s.length?`<section class="section" aria-labelledby="steps-title">
  <div class="wrap">
    <div class="head"><p class="kicker">${e(n.steps.kicker)}</p><h2 id="steps-title" class="h2">${e(n.steps.title)}</h2></div>
    <ol class="steps">${s.map((i,r)=>`<li><span class="step-n">${String(r+1).padStart(2,"0")}</span><strong>${e(a(i.title))}</strong>${a(i.text)?`<p class="muted">${e(a(i.text))}</p>`:""}</li>`).join("")}</ol>
  </div>
</section>`:""}function fe({site:t,t:n,L:a}){let s=(t.team??[]).filter(r=>r?.name);if(!s.length)return"";let i=r=>r.split(/\s+/).map(o=>o[0]).slice(-2).join("").toUpperCase();return`<section class="section section--soft" aria-labelledby="team-title">
  <div class="wrap">
    <h2 id="team-title" class="h2">${e(n.team.title)}</h2>
    <div class="team">${s.map(r=>`<figure class="person">
      <div class="person-ph">${r.photo?`<img src="${e(r.photo)}" alt="${e(r.name)}" loading="lazy">`:`<span aria-hidden="true">${e(i(r.name))}</span>`}</div>
      <figcaption><strong>${e(r.name)}</strong><span>${e(a(r.role))}</span>${a(r.specialty)?`<span class="muted">${e(a(r.specialty))}</span>`:""}${r.years?`<span class="muted">${e(n.team.years.replace("{n}",r.years))}</span>`:""}</figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`}function be({site:t,t:n,L:a,lang:s}){let i=O(t,n,s,"btn btn--line"),r=G(t);return t.showReviews===!1||!r.length&&!i?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(n.reviews)}</h2>
    ${I(r,s,"quotes",o=>`<figure class="quote">
      ${o.rating?`<div class="stars" aria-label="${o.rating}/5">${Array.from({length:5},(c,p)=>`<span class="${p<o.rating?"on":""}">${m("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${e(a(o.text))}</blockquote>
      <figcaption>${e(o.name)}${V(o,s)}</figcaption>
    </figure>`)}${i}
  </div>
</section>`}function ve({site:t,packages:n,t:a,L:s,channels:i,gform:r}){let o=a.booking,c=t.contact??{},p=r?` data-gform="${e(r.action)}" data-gmap='${e(JSON.stringify(r.fields))}'`:"",d=i.map((g,l)=>`<button type="button" class="btn ${l===0?"btn--primary":"btn--line"}" data-channel="${e(g)}" data-href="${e(D(g,c,""))}">${m(g,18)} ${e(a.via[g]??g)}</button>`).join(""),f={booked:(t.booked??[]).filter(g=>/^\d{4}-\d{2}-\d{2}$/.test(g)),closed:(t.closedDays??[]).map(Number),ahead:t.bookAhead??2,months:t.monthsShown??4};return`<section class="section section--light" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="cal-box">
      <p class="kicker">${e(a.calendar.kicker)}</p>
      <h2 id="book-title" class="h2">${e(a.calendar.title)}</h2>
      <p class="muted">${e(a.calendar.text)}</p>
      <div class="cal" data-cal='${e(JSON.stringify(f))}' data-week="${e(JSON.stringify(a.daysShort))}">
        <div class="cal-head"><button type="button" class="cal-nav" data-cal-prev aria-label="${e(a.calendar.prev)}">${m("arrow",18,'style="transform:scaleX(-1)"')}</button><p class="cal-title" data-cal-title></p><button type="button" class="cal-nav" data-cal-next aria-label="${e(a.calendar.next)}">${m("arrow",18)}</button></div>
        <div class="cal-grid" data-cal-grid role="grid"></div>
        <ul class="cal-key"><li><span class="k k-free"></span>${e(a.calendar.free)}</li><li><span class="k k-busy"></span>${e(a.calendar.busy)}</li><li><span class="k k-sel"></span>${e(a.calendar.picked)}</li></ul>
      </div>
      <p class="cal-nojs" hidden>${e(a.calendar.nojs)}</p>
    </div>
    <form class="card form" data-book novalidate${p} data-order-text="${e(o.message)}">
      <div class="book-fields">
        <h3 class="form-h">${e(o.title)}</h3>
        <label class="field"><span>${e(o.package)}</span><select name="product">
          <option value="${e(o.notSure)}">${e(o.notSure)}</option>
          ${n.map(g=>`<option>${e(s(g.name))}</option>`).join("")}
        </select></label>
        <div class="row2">
          <label class="field"><span>${e(o.date)}</span><input name="day" type="date" data-day></label>
          <label class="field"><span>${e(o.time)}</span><select name="slot">${o.slots.map(g=>`<option>${e(g)}</option>`).join("")}</select></label>
        </div>
        <p class="day-note" data-day-note data-busy="${e(a.calendar.busyNote)}" hidden></p>
        <label class="field"><span>${e(o.place)}</span><input name="address" maxlength="160" placeholder="${e(o.placeHint)}"></label>
        <div class="row2">
          <label class="field"><span>${e(o.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${e(o.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field"><span>${e(o.note)}</span><textarea name="note" rows="2" maxlength="400" placeholder="${e(o.noteHint)}"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${e(o.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${e(o.sending)}">${m("calendar",18)} ${e(o.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${m(r?"check":"arrow",22)} ${e(r?o.done:o.stepTitle)}</p>
        <p>${e(r?o.doneText:o.stepText)}</p>
        ${r?"":`<div class="buy">${d}</div><button type="button" class="link" data-edit>${e(o.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function ye({site:t,t:n,L:a}){let s=t.contact??{},i=encodeURIComponent(s.mapQuery??a(s.address)),r=o=>o.length===7?n.everyDay:R(o,n.days);return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${e(n.visit.title)}</h2>
      ${A(t,n)}
      ${(t.hours??[]).length?`<table class="hours"><tbody>${t.hours.map(o=>`<tr><th scope="row">${e(r(o.days))}</th><td>${e(o.open)} \u2013 ${e(o.close)}</td></tr>`).join("")}</tbody></table>`:""}
      ${a(s.address)?`<p class="addr">${m("pin",18)} ${e(a(s.address))}</p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${i}" target="_blank" rel="noopener">${e(n.visit.directions)} ${m("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${e(n.visit.title)}" src="https://www.google.com/maps?q=${i}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function $e({site:t,t:n,L:a}){let s=(t.faq??[]).filter(i=>a(i?.q));return s.length?`<section class="section section--soft" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${e(n.faq.title)}</h2>
    <div class="qa">${s.map((i,r)=>`<details${r===0?" open":""}><summary>${e(a(i.q))}</summary><p>${e(a(i.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function ke({site:t,t:n,L:a,market:s}){let i=t.contact??{},r=Object.entries(t.social??{}).filter(([,o])=>o);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(t.name)}</p><p class="muted">${e(a(t.tagline))}</p></div>
    <div><p class="foot-h">${e(n.footer.contact)}</p><ul>
      ${i.phone?`<li><a href="tel:${v(i.phone)}">${e(i.phone)}</a></li>`:""}
      ${i.email?`<li><a href="mailto:${e(i.email)}">${e(i.email)}</a></li>`:""}
      ${a(i.address)?`<li>${e(a(i.address))}</li>`:""}</ul></div>
    ${r.length?`<div><p class="foot-h">${e(n.footer.follow)}</p><ul>${r.map(([o,c])=>`<li><a href="${e(c)}" target="_blank" rel="noopener">${e(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${t.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(t.name)}</span>${U(t,n,s.lang)}</div>
</footer>`}function xe({site:t,market:n,L:a,abs:s,url:i,packages:r,catalog:o}){let c=t.contact??{};return{"@context":"https://schema.org","@type":"ProfessionalService",additionalType:"https://schema.org/Photograph",name:t.name,url:s(`${n.id}/`),description:a(t.intro),image:new URL(S(t,i),s("")).href,telephone:c.phone,email:c.email,address:{"@type":"PostalAddress",streetAddress:a(c.address)},openingHoursSpecification:E(t.hours??[]),currenciesAccepted:n.currency,hasOfferCatalog:{"@type":"OfferCatalog",name:t.name,itemListElement:(o.categories??[]).filter(p=>r.some(d=>d.category===p.id)).map(p=>({"@type":"OfferCatalog",name:a(p.name),itemListElement:r.filter(d=>d.category===p.id).flatMap(d=>d.variants.map(f=>({"@type":"Offer",name:`${a(d.name)}${a(f.label)?` (${a(f.label)})`:""}`,price:f.price,priceCurrency:n.currency,itemOffered:{"@type":"Service",name:a(d.name),description:a(d.description)||a(d.name)}})))}))}}}export{Be as renderSite};
