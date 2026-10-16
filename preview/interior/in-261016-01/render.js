var X={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(t="")=>String(t).replace(/[&<>"']/g,n=>X[n]);function S(t,n,a="vi"){return t==null?"":typeof t!="object"?String(t):t[n]??t[a]??Object.values(t)[0]??""}var Q={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},y=t=>Q[t]??"en-US";function ee(t,n="1"){if(n==="0.99")return Math.max(.99,Math.ceil(t)-.01);let a=Number(n)||1;return Math.max(a,Math.round(t/a)*a)}function P(t,n){if(n.default)return t.basePrice;let a=t.prices?.[n.id]??{mode:"auto"};return a.mode==="hidden"?null:a.mode==="manual"?a.amount:ee(t.basePrice*n.rate,n.rounding)}var te=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function z(t,n){let a={style:"currency",currency:n.currency};return te.has(n.currency)&&(a.maximumFractionDigits=0),new Intl.NumberFormat(y(n.lang),a).format(t)}function T(t="/"){let n=t.endsWith("/")?t:`${t}/`;return(a="")=>n+String(a).replace(/^\//,"")}var ae=(t="")=>t.startsWith("uploads/")?t:/^([a-z]+:|\/)/i.test(t)?null:`assets/${t}`,b=(t,n)=>{let a=ae(n);return a==null?n:t(a)},$=(t="")=>String(t).replace(/\D/g,"");function j(t,n,a=""){switch(t){case"phone":return`tel:${$(n.phone)}`;case"zalo":return`https://zalo.me/${$(n.zalo||n.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(n.messenger)}`;case"whatsapp":return`https://wa.me/${$(n.whatsapp)}${a?`?text=${encodeURIComponent(a)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(n.kakao)}/chat`;case"email":return`mailto:${n.email}${a?`?subject=${encodeURIComponent(a)}`:""}`;default:return"#"}}var C=t=>`<script type="application/ld+json">${JSON.stringify(t).replace(/</g,"\\u003c")}<\/script>`,ne=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function R(t){if(!t||typeof t!="string")return null;let n;try{n=new URL(t.trim())}catch{return{error:"not-google"}}if(n.hostname==="forms.gle")return{error:"short-link"};let a=n.hostname==="docs.google.com"&&n.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!a)return{error:"not-google"};let r={};for(let[s,i]of n.searchParams){if(!/^entry\.\d+$/.test(s))continue;let o=i.trim().replace(/^\{|\}$/g,"").toLowerCase();ne.includes(o)&&(r[o]=s)}return Object.keys(r).length?r.phone?{action:`https://docs.google.com/forms/d/e/${a[1]}/formResponse`,fields:r}:{error:"no-phone"}:{error:"no-fields"}}var k={card:"auto, (max-width: 640px) 50vw, 280px",wide:"auto, (max-width: 640px) 100vw, 580px",thumb:"auto, 120px"};var oe={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5M8 7h8"/>',chat:'<path d="M4 5h16v11h-9l-5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',paw:'<circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/><path d="M12 12c-3 0-6 4-6 6.5S8 21 12 19.5 18 21 18 18.5 15 12 12 12z"/>',scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5 20 18M8.5 16.5 20 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 22c4 0 7-2.7 7-6.7 0-3.6-2.6-6-4.4-8.3-.6 1.9-1.6 3-3.1 3.6C12.6 7.4 11.6 4.3 9 2c0 4-5 6.5-5 13.3C4 19.3 8 22 12 22z"/>',drop2:'<path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},u=(t,n=20,a="")=>`<svg class="i" width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${a}>${oe[t]??""}</svg>`,x=[1,2,3,4,5,6,0],re=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function q(t,n){let a=t.map(s=>x.indexOf(s)).sort((s,i)=>s-i);return a.every((s,i)=>i===0||s===a[i-1]+1)&&a.length>2?`${n[x[a[0]]]} \u2013 ${n[x[a.at(-1)]]}`:a.map(s=>n[x[s]]).join(", ")}var B=t=>t.map(n=>({"@type":"OpeningHoursSpecification",dayOfWeek:n.days.map(a=>re[a]),opens:n.open,closes:n.close}));function F(t){return new Intl.NumberFormat(y(t.lang),{style:"currency",currency:t.currency}).formatToParts(0).find(a=>a.type==="currency")?.value??t.currency}var O=t=>t==="phone"||t==="email"?"":'target="_blank" rel="noopener"',A=t=>`<div class="suggest" id="market-suggest" data-suggest="${e(t.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(t.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(t.market.dismiss)}">\xD7</button>
</div>`,G=(t,n)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(t.hours))}' data-tz="${e(t.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(n.visit.open)}" data-closed="${e(n.visit.closed)}" hidden></p>`,E={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},se=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,ie=t=>{try{let n=new URL(String(t.googleReview??"").trim());return n.protocol==="https:"&&se.test(n.hostname)?n.href:""}catch{return""}},I=(t,n,a,r="btn btn--line")=>{let s=ie(t);if(!s)return"";let i=typeof n.reviews=="object"&&n.reviews?.google||E[a]||E.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${r}" href="${e(s)}" target="_blank" rel="noopener">${u("star",16)} ${e(i)}</a></p>`},w={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},V={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},U=t=>(t.reviews??[]).filter(n=>n&&(n.name||n.text)&&!(typeof n.text=="object"&&n.text&&!Object.values(n.text).some(Boolean)&&!n.name));function H(t,n){let a=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(t?.date??"").trim());if(!a)return"";let r=new Date(Date.UTC(+a[1],+a[2]-1,+(a[3]??1)));if(Number.isNaN(r.getTime()))return"";let s=new Intl.DateTimeFormat(V[n]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(r);return`<time class="rv-date" datetime="${e(t.date)}">${e(s)}</time>`}function le(t,n){let a=t.filter(o=>o.rating>=1&&o.rating<=5);if(a.length<2)return"";let r=a.reduce((o,p)=>o+Number(p.rating),0)/a.length,s=w[n]??w.en,i=new Intl.NumberFormat(V[n]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(r);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${u("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${e(s.count.replace("{n}",String(t.length)))}</span></p>`}function W(t,n,a,r){if(!t.length)return"";let s=w[n]??w.en,i=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${e(o==="prev"?s.prev:s.next)}">${u("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${le(t,n)}<div class="rv" data-rv data-more="${e(s.more)}" data-less="${e(s.less)}">
      <div class="${a} rv-track" tabindex="0">${t.map(r).join("")}</div>
      <div class="rv-nav" hidden>${i("prev")}${i("next")}</div>
    </div>${ce}`}var ce=`<style>
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
upd()}})()<\/script>`;var _=(t,n,a)=>t.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(a==="vi"||a==="ja"?a:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(n.footer.madeWith)}</a>`;function L({site:t,markets:n,url:a,abs:r}){let s=n.find(o=>o.default)??n[0],i=n.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${e(s.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(t.name)}</title>
<link rel="canonical" href="${r(`${s.id}/`)}">
${n.map(o=>`<link rel="alternate" hreflang="${e(o.lang)}-${e(o.country)}" href="${r(`${o.id}/`)}">`).join(`
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
<body><p>${n.map(o=>`<a href="${a(`${o.id}/`)}">${e(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var pe="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,500;0,600;1,500&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",K=9;function de(t,n){return(t.products??[]).map(a=>({...a,variants:(a.variants??[]).map(r=>({...r,price:P(r,n)})).filter(r=>r.price!=null)})).filter(a=>a.variants.length>0)}function Ae({site:t,catalog:n,i18n:a,template:r,basePath:s="/",siteUrl:i=t.domain}){let o=T(s),p=c=>new URL(o(c),i).href,l=n.markets,h=R(t.bookingForm),g=h&&!h.error?h:null,d=l.map(c=>{let m=c.lang,v=a[m]??a.en??a.vi,M=D=>S(D,m,"en"),f=de(n,c),Z=t.bookingChannels?.[c.id]??["phone"],Y={site:t,catalog:n,market:c,markets:l,lang:m,t:v,L:M,url:o,abs:p,services:f,channels:Z,money:D=>z(D,c),template:r,gform:g};return{path:`${c.id}/index.html`,html:he(Y)}});return d.push({path:"index.html",html:L({site:t,markets:l,url:o,abs:p})}),d}var N=(t,n)=>t.heroImage?b(n,t.heroImage):n("assets/photos/hero.webp");function he(t){let{site:n,market:a,markets:r,lang:s,t:i,L:o,url:p,abs:l}=t,h=`${n.name} \xB7 ${o(n.tagline)}`,g=n.theme??{},d=["primary","ink","bg","surface","soft","accent"].filter(f=>g[f]).map(f=>`--${f}:${g[f]}`).join(";"),c=r.find(f=>f.default)??r[0],m=r.map(f=>({id:f.id,lang:f.lang,country:f.country,currency:f.currency,href:p(`${f.id}/`)})),v=n.contact??{},M=new Intl.NumberFormat(y(s),{style:"currency",currency:a.currency,maximumFractionDigits:0}).resolvedOptions();return`<!doctype html>
<html lang="${e(s)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(h)}</title>
<meta name="description" content="${e(o(n.intro))}">
<link rel="canonical" href="${l(`${a.id}/`)}">
${r.map(f=>`<link rel="alternate" hreflang="${e(f.lang)}-${e(f.country)}" href="${l(`${f.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${l(`${c.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${e(h)}">
<meta property="og:description" content="${e(o(n.intro))}">
<meta property="og:url" content="${l(`${a.id}/`)}">
<meta property="og:site_name" content="${e(n.name)}">
<meta property="og:image" content="${e(new URL(N(n,p),l("")).href)}">
<meta name="theme-color" content="${e(g.bg??"#F4EFE7")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${pe}">
<link rel="stylesheet" href="${p("assets/style.css")}">
<style>:root{${d}}</style>
<noscript><style>.proj.more{display:block}.proj-more,.chips,.est{display:none}</style></noscript>
${C(De(t))}
<script src="${p("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(a.id)}" data-markets='${e(JSON.stringify(m))}' data-wa="${e($(v.whatsapp))}" data-email="${e(v.email??"")}" data-copied="${e(i.booking.copied)}" data-money='${e(JSON.stringify({locale:y(s),currency:a.currency,max:M.maximumFractionDigits??0}))}'>
<a class="skip" href="#main">${e(i.skip)}</a>
${A(i)}
${ue(t)}
<main id="main">
${me(t)}
${ge(t)}
${fe(t)}
${be(t)}
${ve(t)}
${ye(t)}
${$e(t)}
${ke(t)}
${xe(t)}
${we(t)}
</main>
${Me(t)}
<nav class="dock" aria-label="${e(i.nav.book)}">
  <a href="${e(j(t.channels[0],v))}" ${O(t.channels[0])}>${u(t.channels[0],20)}<span>${e(i.via[t.channels[0]]??"")}</span></a>
  <a class="primary" href="#booking">${u("ruler",20)}<span>${e(i.nav.book)}</span></a>
</nav>
</body>
</html>
`}function ue({site:t,market:n,markets:a,t:r,url:s}){let i=[["#projects",r.nav.projects],["#pricing",r.nav.pricing],["#materials",r.nav.materials],["#visit",r.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${s(`${n.id}/`)}">
      ${t.logo?`<img src="${e(b(s,t.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${e((t.name??"M").trim()[0]??"M")}</span>`}
      <span>${e(t.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${i.map(([o,p])=>`<a href="${o}">${e(p)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${a.length>1?`<details class="market">
        <summary aria-label="${e(r.market.label)}">${u("globe",18)}<span>${e(n.id.toUpperCase())}<span class="cur"> \xB7 ${e(F(n))}</span></span></summary>
        <ul>${a.map(o=>`<li><a href="${s(`${o.id}/`)}" hreflang="${e(o.lang)}"${o.id===n.id?' aria-current="true"':""}>${e(o.country)} \xB7 ${e(o.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-md" href="#booking">${e(r.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${e(r.nav.openMenu)}">${u("menu",22)}</summary>
        <nav aria-label="Menu">${[...i,["#booking",r.nav.book]].map(([o,p])=>`<a href="${o}">${e(p)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function me({site:t,t:n,L:a,url:r}){let s=(t.stats??[]).filter(i=>a(i?.value));return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${a(t.place)?`<p class="eyebrow">${e(a(t.place))}</p>`:""}
      <h1>${e(a(t.tagline))}</h1>
      ${a(t.intro)?`<p class="lead">${e(a(t.intro))}</p>`:""}
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#booking">${u("ruler",18)} ${e(n.hero.book)}</a>
        <a class="btn btn--line btn--lg" href="#projects">${e(n.hero.projects)}</a>
      </div>
      ${s.length?`<ul class="stats">${s.map(i=>`<li><b>${e(a(i.value))}</b><span>${e(a(i.label))}</span></li>`).join("")}</ul>`:""}
    </div>
    <figure class="hero-ph"><img src="${e(N(t,r))}" alt="${e(a(t.tagline))}" width="1200" height="1400" fetchpriority="high"></figure>
  </div>
</section>`}var J=(t,n,a)=>n((t.projectTypes??[]).find(r=>r.id===a)?.name)??"";function ge({site:t,t:n,L:a,url:r,lang:s}){let i=(t.projects??[]).filter(l=>l?.image);if(!i.length)return"";let o=(t.projectTypes??[]).filter(l=>i.some(h=>h.type===l.id)),p=new Intl.NumberFormat(y(s));return`<section class="section" id="projects" aria-labelledby="proj-title">
  <div class="wrap">
    <div class="head"><p class="kicker">${e(n.projects.kicker)}</p><h2 id="proj-title" class="h2">${e(n.projects.title)}</h2><p class="muted">${e(n.projects.text)}</p></div>
    ${o.length>1?`<div class="chips" role="group" aria-label="${e(n.projects.filter)}"><button type="button" class="chip" data-type="" aria-pressed="true">${e(n.projects.all)}</button>${o.map(l=>`<button type="button" class="chip" data-type="${e(l.id)}" aria-pressed="false">${e(a(l.name))}</button>`).join("")}</div>`:""}
    <div class="projs" data-projs>${i.map((l,h)=>{let g=[l.image,...(l.images??[]).filter(Boolean)].map(c=>b(r,c)),d=[l.area?n.projects.area.replace("{n}",p.format(l.area)).replace("{ft}",p.format(Math.round(l.area*10.764/10)*10)):"",a(l.place),l.weeks?n.projects.weeks.replace("{n}",l.weeks):""].filter(Boolean);return`<article class="proj${h>=K?" more":""}" data-t="${e(l.type??"")}">
      <a class="proj-ph" href="${e(g[0])}" data-open="${h}" aria-label="${e(n.projects.view)}: ${e(a(l.title))}">
        <img sizes="${k.wide}" src="${e(g[0])}" alt="${e(a(l.title))}" width="1200" height="900" loading="lazy">
        ${l.before?`<span class="tag-ba">${e(n.projects.beforeAfter)}</span>`:""}
        ${g.length>1?`<span class="tag-n">${u("camera",14)} ${g.length+(l.before?1:0)}</span>`:""}
      </a>
      <div class="proj-body">
        ${J(t,a,l.type)?`<p class="proj-type">${e(J(t,a,l.type))}</p>`:""}
        <h3>${e(a(l.title))}</h3>
        ${d.length?`<p class="facts">${d.map(c=>`<span>${e(c)}</span>`).join("")}</p>`:""}
        ${a(l.text)?`<p class="muted">${e(a(l.text))}</p>`:""}
      </div>
      <script type="application/json" data-proj>${JSON.stringify({title:a(l.title),text:a(l.text),facts:d,before:l.before?b(r,l.before):"",images:g}).replace(/</g,"\\u003c")}<\/script>
    </article>`}).join("")}</div>
    ${i.length>K?`<p class="center"><button type="button" class="btn btn--line proj-more" data-proj-more>${e(n.projects.more)}</button></p>`:""}
  </div>
  <dialog class="pv" data-pv aria-labelledby="pv-title">
    <div class="pv-box">
      <button type="button" class="pv-x" data-pv-close aria-label="${e(n.projects.close)}">\u2715</button>
      <div class="pv-media">
        <div class="ba" data-ba hidden>
          <img data-ba-after alt="${e(n.projects.after)}">
          <div class="ba-before"><img data-ba-before alt="${e(n.projects.before)}"></div><span class="ba-line"></span>
          <span class="ba-l">${e(n.projects.before)}</span><span class="ba-r">${e(n.projects.after)}</span>
          <input class="ba-range" type="range" min="0" max="100" value="50" aria-label="${e(n.projects.compare)}" data-ba-range>
        </div>
        <img class="pv-img" data-pv-img alt="">
        <div class="pv-thumbs" data-pv-thumbs></div>
      </div>
      <div class="pv-info"><h3 id="pv-title" data-pv-title></h3><p class="facts" data-pv-facts></p><p class="muted" data-pv-text></p>
        <a class="btn btn--primary" href="#booking" data-pv-book>${e(n.projects.similar)}</a></div>
    </div>
  </dialog>
</section>`}function fe({catalog:t,services:n,t:a,L:r,url:s,money:i}){if(!n.length)return"";let o=t.categories??[],p=c=>{let m=o.findIndex(v=>v.id===c.category);return m<0?o.length:m},l=[...n].sort((c,m)=>p(c)-p(m)),h=(c,m)=>r(c.unit)?a.pricing.per.replace("{price}",i(m)).replace("{unit}",r(c.unit)):i(m),d=l.filter(c=>c.perArea&&r(c.unit)).map(c=>({name:r(c.name),unit:r(c.unit),tiers:c.variants.map(m=>({label:r(m.label),price:m.price}))}));return`<section class="section section--soft" id="pricing" aria-labelledby="price-title">
  <div class="wrap">
    <div class="head"><p class="kicker">${e(a.pricing.kicker)}</p><h2 id="price-title" class="h2">${e(a.pricing.title)}</h2><p class="muted">${e(a.pricing.text)}</p></div>
    <div class="prices">${l.map(c=>`<article class="price${c.featured?" price--hot":""}">
      ${c.image?`<img sizes="${k.card}" src="${e(b(s,c.image))}" alt="${e(r(c.name))}" width="800" height="600" loading="lazy">`:""}
      <div class="price-body">
        ${c.featured?`<span class="hot">${e(a.pricing.popular)}</span>`:""}
        <h3>${e(r(c.name))}</h3>
        ${r(c.description)?`<p class="muted">${e(r(c.description))}</p>`:""}
        <table class="ptable"><tbody>${c.variants.map(m=>`<tr><th scope="row">${e(r(m.label))}</th><td>${e(h(c,m.price))}</td></tr>`).join("")}</tbody></table>
        <a class="link" href="#booking" data-pick="${e(r(c.name))}">${e(a.pricing.ask)} ${u("arrow",16)}</a>
      </div>
    </article>`).join("")}</div>
    ${d.length?`<div class="est card" data-est='${e(JSON.stringify(d))}'>
      <div class="est-copy"><h3>${e(a.estimate.title)}</h3><p class="muted">${e(a.estimate.text)}</p></div>
      <div class="est-form">
        <label class="field"><span>${e(a.estimate.service)}</span><select data-est-service>${d.map((c,m)=>`<option value="${m}">${e(c.name)}</option>`).join("")}</select></label>
        <label class="field"><span>${e(a.estimate.tier)}</span><select data-est-tier></select></label>
        <label class="field"><span data-est-area-label data-tpl="${e(a.estimate.area)}">${e(a.estimate.area.replace("{unit}",d[0].unit))}</span><input type="number" inputmode="decimal" min="1" max="100000" value="${e(a.estimate.defaultArea)}" data-est-area></label>
      </div>
      <div class="est-out"><p class="muted">${e(a.estimate.result)}</p><p class="est-sum" data-est-sum aria-live="polite">\u2014</p><p class="small muted">${e(a.estimate.note)}</p>
        <a class="btn btn--primary" href="#booking" data-est-book>${u("ruler",18)} ${e(a.estimate.book)}</a></div>
    </div>`:""}
  </div>
</section>`}function be({site:t,t:n,L:a}){let r=(t.steps??[]).filter(s=>a(s?.title));return r.length?`<section class="section" aria-labelledby="steps-title">
  <div class="wrap">
    <div class="head"><p class="kicker">${e(n.steps.kicker)}</p><h2 id="steps-title" class="h2">${e(n.steps.title)}</h2></div>
    <ol class="steps">${r.map((s,i)=>`<li><span class="step-n">${i+1}</span><div><strong>${e(a(s.title))}</strong>${a(s.time)?`<span class="step-t">${u("clock",14)} ${e(a(s.time))}</span>`:""}${a(s.text)?`<p class="muted">${e(a(s.text))}</p>`:""}</div></li>`).join("")}</ol>
  </div>
</section>`:""}function ve({site:t,t:n,L:a,url:r}){let s=(t.materials??[]).filter(i=>a(i?.name));return s.length?`<section class="section section--wood" id="materials" aria-labelledby="mat-title">
  <div class="wrap">
    <div class="head"><p class="kicker">${e(n.materials.kicker)}</p><h2 id="mat-title" class="h2">${e(n.materials.title)}</h2><p class="muted">${e(n.materials.text)}</p></div>
    <div class="mats">${s.map(i=>`<article class="mat">
      ${i.image?`<img sizes="${k.card}" src="${e(b(r,i.image))}" alt="${e(a(i.name))}" width="600" height="600" loading="lazy">`:""}
      <h3>${e(a(i.name))}</h3>${a(i.text)?`<p>${e(a(i.text))}</p>`:""}
    </article>`).join("")}</div>
  </div>
</section>`:""}function ye({site:t,t:n,L:a,url:r}){let s=t.workshop??{},i=(t.promises??[]).filter(o=>a(o?.title));return!a(s.text)&&!i.length?"":`<section class="section" aria-labelledby="ws-title">
  <div class="wrap ws">
    <div class="ws-ph">
      ${s.image?`<img class="ws-a" sizes="${k.wide}" src="${e(b(r,s.image))}" alt="${e(n.workshop.title)}" width="1000" height="1200" loading="lazy">`:""}
      ${s.image2?`<img class="ws-b" sizes="${k.card}" src="${e(b(r,s.image2))}" alt="" width="700" height="700" loading="lazy">`:""}
    </div>
    <div class="ws-copy">
      <p class="kicker">${e(n.workshop.kicker)}</p>
      <h2 id="ws-title" class="h2">${e(n.workshop.title)}</h2>
      ${a(s.text)?`<p class="lead">${e(a(s.text))}</p>`:""}
      ${i.length?`<ul class="promises">${i.map(o=>`<li><span class="pi">${u(o.icon||"check",20)}</span><div><strong>${e(a(o.title))}</strong>${a(o.text)?`<p class="muted">${e(a(o.text))}</p>`:""}</div></li>`).join("")}</ul>`:""}
    </div>
  </div>
</section>`}function $e({site:t,t:n,L:a,lang:r}){let s=I(t,n,r,"btn btn--line"),i=U(t);return t.showReviews===!1||!i.length&&!s?"":`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(n.reviews)}</h2>
    ${W(i,r,"quotes",o=>`<figure class="quote">
      ${o.rating?`<div class="stars" aria-label="${o.rating}/5">${Array.from({length:5},(p,l)=>`<span class="${l<o.rating?"on":""}">${u("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${e(a(o.text))}</blockquote>
      <figcaption><strong>${e(o.name)}</strong>${o.bought?` \xB7 ${e(a(o.bought))}`:""}${H(o,r)}</figcaption>
    </figure>`)}${s}
  </div>
</section>`}function ke({site:t,services:n,t:a,L:r,channels:s,gform:i}){let o=a.booking,p=t.contact??{},l=i?` data-gform="${e(i.action)}" data-gmap='${e(JSON.stringify(i.fields))}'`:"",h=s.map((d,c)=>`<button type="button" class="btn ${c===0?"btn--primary":"btn--line"}" data-channel="${e(d)}" data-href="${e(j(d,p,""))}">${u(d,18)} ${e(a.via[d]??d)}</button>`).join(""),g=r(n.find(d=>d.perArea&&r(d.unit))?.unit)||"m\xB2";return`<section class="section" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="book-copy">
      <p class="kicker">${e(o.kicker)}</p>
      <h2 id="book-title" class="h2">${e(o.heading)}</h2>
      <p class="lead">${e(o.text)}</p>
      <ul class="book-list">${o.points.map(d=>`<li>${u("check",18)} ${e(d)}</li>`).join("")}</ul>
    </div>
    <form class="card form" data-book novalidate${l} data-order-text="${e(o.message)}">
      <div class="book-fields">
        <h3 class="form-h">${e(o.title)}</h3>
        <label class="field"><span>${e(o.service)}</span><select name="product">
          <option value="${e(o.notSure)}">${e(o.notSure)}</option>
          ${n.map(d=>`<option>${e(r(d.name))}</option>`).join("")}
        </select></label>
        <div class="row2">
          <label class="field"><span>${e(o.home)}</span><select name="home">${o.homes.map(d=>`<option>${e(d)}</option>`).join("")}</select></label>
          <label class="field"><span>${e(o.area.replace("{unit}",g))}</span><input name="area" type="number" inputmode="decimal" min="1" max="100000" data-unit="${e(g)}"></label>
        </div>
        <div class="row2">
          <label class="field"><span>${e(o.budget)}</span><input name="budget" maxlength="60" placeholder="${e(o.budgetHint)}"></label>
          <label class="field"><span>${e(o.date)}</span><input name="day" type="date"></label>
        </div>
        <label class="field"><span>${e(o.address)}</span><input name="address" maxlength="160" autocomplete="street-address" placeholder="${e(o.addressHint)}"></label>
        <div class="row2">
          <label class="field"><span>${e(o.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${e(o.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field"><span>${e(o.note)}</span><textarea name="note" rows="3" maxlength="500" placeholder="${e(o.noteHint)}"></textarea></label>
        <input type="hidden" name="estimate">
        <p class="est-chip" data-est-chip hidden></p>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${e(o.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${e(o.sending)}">${u("ruler",18)} ${e(o.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${u(i?"check":"arrow",22)} ${e(i?o.done:o.stepTitle)}</p>
        <p>${e(i?o.doneText:o.stepText)}</p>
        ${i?"":`<div class="buy">${h}</div><button type="button" class="link" data-edit>${e(o.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function xe({site:t,t:n,L:a}){let r=t.contact??{},s=encodeURIComponent(r.mapQuery??a(r.address)),i=o=>o.length===7?n.everyDay:q(o,n.days);return`<section class="section section--soft" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${e(n.visit.title)}</h2>
      ${G(t,n)}
      ${(t.hours??[]).length?`<table class="hours"><tbody>${t.hours.map(o=>`<tr><th scope="row">${e(i(o.days))}</th><td>${e(o.open)} \u2013 ${e(o.close)}</td></tr>`).join("")}</tbody></table>`:""}
      ${a(r.address)?`<p class="addr">${u("pin",18)} ${e(a(r.address))}</p>`:""}
      ${a(t.areas)?`<p class="addr">${u("globe",18)} ${e(a(t.areas))}</p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${s}" target="_blank" rel="noopener">${e(n.visit.directions)} ${u("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${e(n.visit.title)}" src="https://www.google.com/maps?q=${s}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function we({site:t,t:n,L:a}){let r=(t.faq??[]).filter(s=>a(s?.q));return r.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${e(n.faq.title)}</h2>
    <div class="qa">${r.map((s,i)=>`<details${i===0?" open":""}><summary>${e(a(s.q))}</summary><p>${e(a(s.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Me({site:t,t:n,L:a,market:r}){let s=t.contact??{},i=Object.entries(t.social??{}).filter(([,o])=>o);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(t.name)}</p><p class="muted">${e(a(t.tagline))}</p></div>
    <div><p class="foot-h">${e(n.footer.contact)}</p><ul>
      ${s.phone?`<li><a href="tel:${$(s.phone)}">${e(s.phone)}</a></li>`:""}
      ${s.email?`<li><a href="mailto:${e(s.email)}">${e(s.email)}</a></li>`:""}
      ${a(s.address)?`<li>${e(a(s.address))}</li>`:""}</ul></div>
    ${i.length?`<div><p class="foot-h">${e(n.footer.follow)}</p><ul>${i.map(([o,p])=>`<li><a href="${e(p)}" target="_blank" rel="noopener">${e(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${t.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(t.name)}</span>${_(t,n,r.lang)}</div>
</footer>`}function De({site:t,market:n,L:a,abs:r,url:s,services:i,catalog:o}){let p=t.contact??{};return{"@context":"https://schema.org","@type":"HomeAndConstructionBusiness",name:t.name,url:r(`${n.id}/`),description:a(t.intro),image:new URL(N(t,s),r("")).href,telephone:p.phone,email:p.email,address:{"@type":"PostalAddress",streetAddress:a(p.address)},areaServed:a(t.areas)||void 0,openingHoursSpecification:B(t.hours??[]),currenciesAccepted:n.currency,hasOfferCatalog:{"@type":"OfferCatalog",name:t.name,itemListElement:(o.categories??[]).filter(l=>i.some(h=>h.category===l.id)).map(l=>({"@type":"OfferCatalog",name:a(l.name),itemListElement:i.filter(h=>h.category===l.id).flatMap(h=>h.variants.map(g=>({"@type":"Offer",name:`${a(h.name)}${a(g.label)?` (${a(g.label)})`:""}`,priceSpecification:{"@type":"UnitPriceSpecification",price:g.price,priceCurrency:n.currency,...a(h.unit)?{unitText:a(h.unit)}:{}},itemOffered:{"@type":"Service",name:a(h.name),description:a(h.description)||a(h.name)}})))}))}}}export{Ae as renderSite};
