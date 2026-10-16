var X={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(t="")=>String(t).replace(/[&<>"']/g,a=>X[a]);function N(t,a,n="vi"){return t==null?"":typeof t!="object"?String(t):t[a]??t[n]??Object.values(t)[0]??""}var Q={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},P=t=>Q[t]??"en-US";function ee(t,a="1"){if(a==="0.99")return Math.max(.99,Math.ceil(t)-.01);let n=Number(a)||1;return Math.max(n,Math.round(t/n)*n)}function R(t,a){if(a.default)return t.basePrice;let n=t.prices?.[a.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:ee(t.basePrice*a.rate,a.rounding)}var te=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function E(t,a){let n={style:"currency",currency:a.currency};return te.has(a.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(P(a.lang),n).format(t)}function q(t="/"){let a=t.endsWith("/")?t:`${t}/`;return(n="")=>a+String(n).replace(/^\//,"")}var ae=(t="")=>t.startsWith("uploads/")?t:/^([a-z]+:|\/)/i.test(t)?null:`assets/${t}`,k=(t,a)=>{let n=ae(a);return n==null?a:t(n)},$=(t="")=>String(t).replace(/\D/g,"");function x(t,a,n=""){switch(t){case"phone":return`tel:${$(a.phone)}`;case"zalo":return`https://zalo.me/${$(a.zalo||a.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(a.messenger)}`;case"whatsapp":return`https://wa.me/${$(a.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(a.kakao)}/chat`;case"email":return`mailto:${a.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var B=t=>`<script type="application/ld+json">${JSON.stringify(t).replace(/</g,"\\u003c")}<\/script>`,ne=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function L(t){if(!t||typeof t!="string")return null;let a;try{a=new URL(t.trim())}catch{return{error:"not-google"}}if(a.hostname==="forms.gle")return{error:"short-link"};let n=a.hostname==="docs.google.com"&&a.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!n)return{error:"not-google"};let s={};for(let[r,i]of a.searchParams){if(!/^entry\.\d+$/.test(r))continue;let o=i.trim().replace(/^\{|\}$/g,"").toLowerCase();ne.includes(o)&&(s[o]=r)}return Object.keys(s).length?s.phone?{action:`https://docs.google.com/forms/d/e/${n[1]}/formResponse`,fields:s}:{error:"no-phone"}:{error:"no-fields"}}var oe={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5M8 7h8"/>',chat:'<path d="M4 5h16v11h-9l-5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',paw:'<circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/><path d="M12 12c-3 0-6 4-6 6.5S8 21 12 19.5 18 21 18 18.5 15 12 12 12z"/>',scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5 20 18M8.5 16.5 20 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 22c4 0 7-2.7 7-6.7 0-3.6-2.6-6-4.4-8.3-.6 1.9-1.6 3-3.1 3.6C12.6 7.4 11.6 4.3 9 2c0 4-5 6.5-5 13.3C4 19.3 8 22 12 22z"/>',drop2:'<path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},u=(t,a=20,n="")=>`<svg class="i" width="${a}" height="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${oe[t]??""}</svg>`,w=[1,2,3,4,5,6,0],re=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function F(t,a){let n=t.map(r=>w.indexOf(r)).sort((r,i)=>r-i);return n.every((r,i)=>i===0||r===n[i-1]+1)&&n.length>2?`${a[w[n[0]]]} \u2013 ${a[w[n.at(-1)]]}`:n.map(r=>a[w[r]]).join(", ")}var O=t=>t.map(a=>({"@type":"OpeningHoursSpecification",dayOfWeek:a.days.map(n=>re[n]),opens:a.open,closes:a.close}));function G(t){return new Intl.NumberFormat(P(t.lang),{style:"currency",currency:t.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??t.currency}var z=t=>t==="phone"||t==="email"?"":'target="_blank" rel="noopener"',V=t=>`<div class="suggest" id="market-suggest" data-suggest="${e(t.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(t.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(t.market.dismiss)}">\xD7</button>
</div>`,j=(t,a)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(t.hours))}' data-tz="${e(t.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(a.visit.open)}" data-closed="${e(a.visit.closed)}" hidden></p>`,A={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},se=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,ie=t=>{try{let a=new URL(String(t.googleReview??"").trim());return a.protocol==="https:"&&se.test(a.hostname)?a.href:""}catch{return""}},I=(t,a,n,s="btn btn--line")=>{let r=ie(t);if(!r)return"";let i=typeof a.reviews=="object"&&a.reviews?.google||A[n]||A.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${s}" href="${e(r)}" target="_blank" rel="noopener">${u("star",16)} ${e(i)}</a></p>`},M={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},U={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},H=t=>(t.reviews??[]).filter(a=>a&&(a.name||a.text)&&!(typeof a.text=="object"&&a.text&&!Object.values(a.text).some(Boolean)&&!a.name));function W(t,a){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(t?.date??"").trim());if(!n)return"";let s=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(s.getTime()))return"";let r=new Intl.DateTimeFormat(U[a]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(s);return`<time class="rv-date" datetime="${e(t.date)}">${e(r)}</time>`}function le(t,a){let n=t.filter(o=>o.rating>=1&&o.rating<=5);if(n.length<2)return"";let s=n.reduce((o,c)=>o+Number(c.rating),0)/n.length,r=M[a]??M.en,i=new Intl.NumberFormat(U[a]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(s);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${u("star",18)}</span><strong>${i}</strong><span>\xB7</span><span>${e(r.count.replace("{n}",String(t.length)))}</span></p>`}function _(t,a,n,s){if(!t.length)return"";let r=M[a]??M.en,i=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${e(o==="prev"?r.prev:r.next)}">${u("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${le(t,a)}<div class="rv" data-rv data-more="${e(r.more)}" data-less="${e(r.less)}">
      <div class="${n} rv-track" tabindex="0">${t.map(s).join("")}</div>
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
upd()}})()<\/script>`;var K=(t,a,n)=>t.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(a.footer.madeWith)}</a>`;function J({site:t,markets:a,url:n,abs:s}){let r=a.find(o=>o.default)??a[0],i=a.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${e(r.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(t.name)}</title>
<link rel="canonical" href="${s(`${r.id}/`)}">
${a.map(o=>`<link rel="alternate" hreflang="${e(o.lang)}-${e(o.country)}" href="${s(`${o.id}/`)}">`).join(`
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
<body><p>${a.map(o=>`<a href="${n(`${o.id}/`)}">${e(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var pe="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;1,800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",C=12,de=["space","equip","class","yoga","life"],Z=[1,2,3,4,5,6,0];function he(t,a){return(t.products??[]).map(n=>({...n,variants:(n.variants??[]).map(s=>({...s,price:R(s,a)})).filter(s=>s.price!=null)})).filter(n=>n.variants.length>0)}function Ge({site:t,catalog:a,i18n:n,template:s,basePath:r="/",siteUrl:i=t.domain}){let o=q(r),c=g=>new URL(o(g),i).href,p=a.markets,l=L(t.bookingForm),d=l&&!l.error?l:null,f=p.map(g=>{let b=g.lang,v=n[b]??n.en??n.vi,m=y=>N(y,b,"en"),D=he(a,g),h=(t.programs??[]).filter(y=>y?.id&&m(y.name)),S=t.bookingChannels?.[g.id]??["phone"],Y={site:t,catalog:a,market:g,markets:p,lang:b,t:v,L:m,url:o,abs:c,plans:D,programs:h,channels:S,money:y=>E(y,g),template:s,gform:d};return{path:`${g.id}/index.html`,html:ue(Y)}});return f.push({path:"index.html",html:J({site:t,markets:p,url:o,abs:c})}),f}var T=(t,a)=>t.heroImage?k(a,t.heroImage):a("assets/photos/hero.webp");function ue(t){let{site:a,market:n,markets:s,lang:r,t:i,L:o,url:c,abs:p}=t,l=`${a.name} \xB7 ${o(a.tagline)}`,d=a.theme??{},f=["primary","ink","bg","surface","soft","accent"].filter(m=>d[m]).map(m=>`--${m}:${d[m]}`).join(";"),g=s.find(m=>m.default)??s[0],b=s.map(m=>({id:m.id,lang:m.lang,country:m.country,currency:m.currency,href:c(`${m.id}/`)})),v=a.contact??{};return`<!doctype html>
<html lang="${e(r)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(l)}</title>
<meta name="description" content="${e(o(a.intro))}">
<link rel="canonical" href="${p(`${n.id}/`)}">
${s.map(m=>`<link rel="alternate" hreflang="${e(m.lang)}-${e(m.country)}" href="${p(`${m.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${p(`${g.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${e(l)}">
<meta property="og:description" content="${e(o(a.intro))}">
<meta property="og:url" content="${p(`${n.id}/`)}">
<meta property="og:site_name" content="${e(a.name)}">
<meta property="og:image" content="${e(new URL(T(a,c),p("")).href)}">
<meta name="theme-color" content="${e(d.ink??"#14161A")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${pe}">
<link rel="stylesheet" href="${c("assets/style.css")}">
<style>:root{${f}}</style>
<noscript><style>.album .more{display:block}.album-more,.chips,.days{display:none}.day-h{display:block;margin-bottom:10px;font-size:26px}</style></noscript>
${B(Ne(t))}
<script src="${c("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(n.id)}" data-markets='${e(JSON.stringify(b))}' data-wa="${e($(v.whatsapp))}" data-email="${e(v.email??"")}" data-copied="${e(i.booking.copied)}" data-tz="${e(a.timezone??"Asia/Ho_Chi_Minh")}">
<a class="skip" href="#main">${e(i.skip)}</a>
${V(i)}
${me(t)}
<main id="main">
${ge(t)}
${fe(t)}
${be(t)}
${ve(t)}
${ye(t)}
${$e(t)}
${ke(t)}
${xe(t)}
${we(t)}
${Me(t)}
${De(t)}
</main>
${Se(t)}
<nav class="dock" aria-label="${e(i.nav.book)}">
  <a href="${e(x(t.channels[0],v))}" ${z(t.channels[0])}>${u(t.channels[0],20)}<span>${e(i.via[t.channels[0]]??"")}</span></a>
  <a class="primary" href="#booking">${u("flame",20)}<span>${e(i.nav.book)}</span></a>
</nav>
</body>
</html>
`}function me({site:t,market:a,markets:n,t:s,url:r}){let i=[["#programs",s.nav.programs],["#schedule",s.nav.schedule],["#plans",s.nav.plans],["#team",s.nav.team],["#visit",s.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${r(`${a.id}/`)}">
      ${t.logo?`<img src="${e(k(r,t.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${u("dumbbell",22)}</span>`}
      <span>${e(t.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${i.map(([o,c])=>`<a href="${o}">${e(c)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${n.length>1?`<details class="market">
        <summary aria-label="${e(s.market.label)}">${u("globe",18)}<span>${e(a.id.toUpperCase())}<span class="cur"> \xB7 ${e(G(a))}</span></span></summary>
        <ul>${n.map(o=>`<li><a href="${r(`${o.id}/`)}" hreflang="${e(o.lang)}"${o.id===a.id?' aria-current="true"':""}>${e(o.country)} \xB7 ${e(o.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-sm" href="#booking">${e(s.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${e(s.nav.openMenu)}">${u("menu",22)}</summary>
        <nav aria-label="Menu">${[...i,["#booking",s.nav.book]].map(([o,c])=>`<a href="${o}">${e(c)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function ge({site:t,t:a,L:n,url:s}){let r=(t.stats??[]).filter(i=>i?.value);return`<section class="hero">
  <img class="hero-bg" src="${e(T(t,s))}" alt="" width="1200" height="900" fetchpriority="high">
  <div class="wrap hero-inner">
    ${n(t.place)?`<p class="eyebrow">${e(n(t.place))}</p>`:""}
    <h1>${e(n(t.tagline))}</h1>
    ${n(t.intro)?`<p class="lead">${e(n(t.intro))}</p>`:""}
    <div class="actions">
      <a class="btn btn--primary btn--lg" href="#booking">${u("flame",18)} ${e(a.hero.book)}</a>
      <a class="btn btn--ghost btn--lg" href="#plans">${e(a.hero.plans)} ${u("arrow",16)}</a>
    </div>
    ${j(t,a)}
  </div>
  ${r.length?`<div class="stats-bar"><ul class="wrap stats">${r.map(i=>`<li><b>${e(i.value)}</b><span>${e(n(i.label))}</span></li>`).join("")}</ul></div>`:""}
</section>`}function fe({programs:t,t:a,L:n,url:s}){return t.length?`<section class="section" id="programs" aria-labelledby="prog-title">
  <div class="wrap">
    <div class="head"><h2 id="prog-title" class="h2">${e(a.programs.title)}</h2><p class="muted">${e(a.programs.text)}</p></div>
    <div class="progs">${t.map(r=>`<article class="prog">
      <figure>${r.image?`<img sizes="auto, (max-width: 640px) 100vw, 380px" src="${e(k(s,r.image))}" alt="${e(n(r.name))}" width="1000" height="750" loading="lazy">`:""}</figure>
      <div class="prog-body">
        <h3>${e(n(r.name))}</h3>
        <p class="meta">${n(r.tag)?`<span>${e(n(r.tag))}</span>`:""}${r.minutes?`<span>${u("clock",14)} ${e(a.programs.min.replace("{n}",r.minutes))}</span>`:""}</p>
        ${n(r.text)?`<p class="muted">${e(n(r.text))}</p>`:""}
      </div>
    </article>`).join("")}</div>
  </div>
</section>`:""}function be({site:t,programs:a,t:n,L:s}){let r=new Map(a.map(l=>[l.id,l])),i=(t.schedule??[]).filter(l=>l?.time&&r.has(l.program));if(!i.length)return"";let o=a.filter(l=>i.some(d=>d.program===l.id)),c=(l,d)=>!(l.days??[]).length||l.days.includes(d),p=l=>i.filter(d=>c(d,l)).sort((d,f)=>d.time.localeCompare(f.time));return`<section class="section section--ink" id="schedule" aria-labelledby="sch-title">
  <div class="wrap">
    <div class="head"><h2 id="sch-title" class="h2">${e(n.schedule.title)}</h2><p>${e(n.schedule.text)}</p></div>
    <div class="days" role="tablist" aria-label="${e(n.schedule.title)}">${Z.map(l=>`<button type="button" role="tab" class="day" data-day="${l}" aria-selected="false"><span>${e(n.days[l])}</span><small data-today hidden>${e(n.schedule.today)}</small></button>`).join("")}</div>
    ${o.length>1?`<div class="chips chips--dark" role="group" aria-label="${e(n.album.filter)}"><button type="button" class="chip" data-prog="" aria-pressed="true">${e(n.schedule.all)}</button>${o.map(l=>`<button type="button" class="chip" data-prog="${e(l.id)}" aria-pressed="false">${e(s(l.name))}</button>`).join("")}</div>`:""}
    ${Z.map(l=>{let d=p(l);return`<div class="day-panel" role="tabpanel" data-panel="${l}">
      <h3 class="day-h">${e(n.days[l])}</h3>
      ${d.length?`<ul class="classes">${d.map(f=>{let g=r.get(f.program);return`<li class="cls" data-p="${e(g.id)}">
          <time>${e(f.time)}</time>
          <div class="cls-name"><strong>${e(s(g.name))}</strong><span>${[g.minutes?n.programs.min.replace("{n}",g.minutes):"",f.coach??""].filter(Boolean).map(e).join(" \xB7 ")}</span></div>
          <button type="button" class="btn btn--sm btn--lime" data-class="${e(s(g.name))}" data-cday="${l}" data-ctime="${e(f.time)}">${e(n.schedule.book)}</button>
        </li>`}).join("")}</ul>`:`<p class="empty">${e(n.schedule.empty)}</p>`}
    </div>`}).join("")}
  </div>
</section>`}function ve({plans:t,catalog:a,t:n,L:s,money:r}){if(!t.length)return"";let i=a.categories??[],o=new Map(i.map(l=>[l.id,s(l.name)])),c=l=>{let d=i.findIndex(f=>f.id===l.category);return d<0?i.length:d},p=[...t].sort((l,d)=>c(l)-c(d));return`<section class="section" id="plans" aria-labelledby="plan-title">
  <div class="wrap">
    <div class="head"><h2 id="plan-title" class="h2">${e(n.plans.title)}</h2><p class="muted">${e(n.plans.note)}</p></div>
    <div class="plans">${p.map(l=>`<article class="plan${l.featured?" plan--hot":""}">
      ${l.featured?`<span class="hot">${u("flame",14)} ${e(n.plans.popular)}</span>`:""}
      ${o.get(l.category)?`<p class="plan-cat">${e(o.get(l.category))}</p>`:""}
      <h3>${e(s(l.name))}</h3>
      ${s(l.description)?`<p class="muted">${e(s(l.description))}</p>`:""}
      <table class="ptable"><tbody>${l.variants.map(d=>`<tr><th scope="row">${e(s(d.label))}</th><td>${e(r(d.price))}</td></tr>`).join("")}</tbody></table>
      <button type="button" class="btn ${l.featured?"btn--primary":"btn--line"}" data-pick="${e(l.id)}">${e(n.plans.pick)}</button>
    </article>`).join("")}</div>
  </div>
</section>`}function ye({site:t,t:a,L:n}){let s=(t.amenities??[]).filter(r=>n(r?.label));return s.length?`<section class="section section--soft" aria-labelledby="am-title">
  <div class="wrap">
    <h2 id="am-title" class="h2">${e(a.amenities.title)}</h2>
    <ul class="amen">${s.map(r=>`<li><span class="amen-i">${u(r.icon??"check",22)}</span>${e(n(r.label))}</li>`).join("")}</ul>
  </div>
</section>`:""}function $e({site:t,t:a,L:n}){let s=(t.team??[]).filter(i=>i?.name);if(!s.length)return"";let r=i=>i.replace(/^(Coach|HLV|PT)\.?\s*/i,"").split(/\s+/).map(o=>o[0]).slice(-2).join("").toUpperCase();return`<section class="section" id="team" aria-labelledby="team-title">
  <div class="wrap">
    <h2 id="team-title" class="h2">${e(a.team.title)}</h2>
    <div class="team">${s.map((i,o)=>`<figure class="coach">
      <div class="coach-ph tone-${o%4}">${i.photo?`<img src="${e(i.photo)}" alt="${e(i.name)}" loading="lazy">`:`<span aria-hidden="true">${e(r(i.name))}</span>`}</div>
      <figcaption><strong>${e(i.name)}</strong><span>${e(n(i.role))}</span>${i.years?`<span class="muted">${e(a.team.years.replace("{n}",i.years))}</span>`:""}</figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`}function ke({site:t,t:a,url:n}){let s=(t.album??[]).filter(o=>o?.image);if(!s.length)return"";let r=o=>s.filter(c=>c.tag===o).length,i=[["",a.album.all,s.length],...de.filter(r).map(o=>[o,a.album.tags[o]??o,r(o)])];return`<section class="section section--soft" id="album" aria-labelledby="album-title">
  <div class="wrap">
    <div class="head"><h2 id="album-title" class="h2">${e(a.album.title)}</h2><p class="muted">${e(a.album.text)}</p></div>
    ${i.length>2?`<div class="chips" role="group" aria-label="${e(a.album.filter)}">${i.map(([o,c,p],l)=>`<button type="button" class="chip" data-tag="${o}" aria-pressed="${l===0}">${e(c)} <span>${p}</span></button>`).join("")}</div>`:""}
    <div class="album" data-album>${s.map((o,c)=>{let p=e(k(n,o.image));return`<a class="ph${c>=C?" more":""}" href="${p}" data-i="${c}" data-t="${e(o.tag??"")}"><img sizes="auto, (max-width: 640px) 50vw, 300px" src="${p}" alt="${e(`${t.name} ${c+1}`)}" width="1000" height="750" loading="lazy"></a>`}).join("")}</div>
    ${s.length>C?`<p class="center"><button type="button" class="btn btn--line album-more" data-album-more>${e(a.album.more)} <span data-left>(${s.length-C})</span></button></p>`:""}
  </div>
  <dialog class="lb" data-lightbox aria-label="${e(a.album.title)}">
    <img alt="" data-lb-img>
    <button type="button" class="lb-btn lb-close" data-lb-close aria-label="${e(a.album.close)}">\u2715</button>
    <button type="button" class="lb-btn lb-prev" data-lb-prev aria-label="${e(a.album.prev)}">${u("arrow",22,'style="transform:scaleX(-1)"')}</button>
    <button type="button" class="lb-btn lb-next" data-lb-next aria-label="${e(a.album.next)}">${u("arrow",22)}</button>
    <p class="lb-count" data-lb-count></p>
  </dialog>
</section>`}function xe({site:t,t:a,L:n,lang:s}){let r=I(t,a,s,"btn btn--line"),i=H(t);return t.showReviews===!1||!i.length&&!r?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(a.reviews)}</h2>
    ${_(i,s,"quotes",o=>`<figure class="quote">
      ${o.rating?`<div class="stars" aria-label="${o.rating}/5">${Array.from({length:5},(c,p)=>`<span class="${p<o.rating?"on":""}">${u("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${e(n(o.text))}</blockquote>
      <figcaption>${e(o.name)}${W(o,s)}</figcaption>
    </figure>`)}${r}
  </div>
</section>`}function we({site:t,plans:a,programs:n,t:s,L:r,channels:i,gform:o}){let c=s.booking,p=t.contact??{},l=t.hours?.[0]??{open:"06:00",close:"21:00"},d=[],[f,g]=l.open.split(":").map(Number),[b,v]=l.close.split(":").map(Number);for(let h=f*60+g;h<=b*60+v-30;h+=30)d.push(`${String(Math.floor(h/60)).padStart(2,"0")}:${String(h%60).padStart(2,"0")}`);let m=o?` data-gform="${e(o.action)}" data-gmap='${e(JSON.stringify(o.fields))}'`:"",D=i.map((h,S)=>`<button type="button" class="btn ${S===0?"btn--primary":"btn--line"}" data-channel="${e(h)}" data-href="${e(x(h,p,""))}">${u(h,18)} ${e(s.via[h]??h)}</button>`).join("");return`<section class="section section--ink" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="booking-copy">
      <h2 id="book-title" class="h2">${e(c.title)}</h2>
      <p class="lead">${e(c.text)}</p>
      <div class="actions">${i.map(h=>`<a class="btn btn--ghost" href="${e(x(h,p))}" ${z(h)}>${u(h,18)} ${e(s.via[h]??h)}</a>`).join("")}</div>
    </div>
    <form class="card form" data-book novalidate${m} data-order-text="${e(c.message)}">
      <div class="book-fields">
        <label class="field"><span>${e(c.service)}</span><select name="product">
          <option value="${e(c.notSure)}">${e(c.notSure)}</option>
          ${n.length?`<optgroup label="${e(c.classes)}">${n.map(h=>`<option value="${e(r(h.name))}" data-id="${e(h.id)}">${e(r(h.name))}</option>`).join("")}</optgroup>`:""}
          ${a.length?`<optgroup label="${e(c.plans)}">${a.map(h=>`<option value="${e(r(h.name))}" data-id="${e(h.id)}">${e(r(h.name))}</option>`).join("")}</optgroup>`:""}
        </select></label>
        <div class="row2">
          <label class="field"><span>${e(c.date)}</span><input name="day" type="date"></label>
          <label class="field"><span>${e(c.time)}</span><select name="time">${d.map(h=>`<option>${h}</option>`).join("")}</select></label>
        </div>
        <div class="row2">
          <label class="field"><span>${e(c.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${e(c.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field"><span>${e(c.note)}</span><textarea name="note" rows="2" maxlength="400" placeholder="${e(c.noteHint)}"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${e(c.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${e(c.sending)}">${u("flame",18)} ${e(c.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${u(o?"check":"arrow",22)} ${e(o?c.done:c.stepTitle)}</p>
        <p>${e(o?c.doneText:c.stepText)}</p>
        ${o?"":`<div class="buy">${D}</div><button type="button" class="link" data-edit>${e(c.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function Me({site:t,t:a,L:n}){let s=t.contact??{},r=encodeURIComponent(s.mapQuery??n(s.address)),i=o=>o.length===7?a.everyDay:F(o,a.days);return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${e(a.visit.title)}</h2>
      ${j(t,a)}
      ${(t.hours??[]).length?`<table class="hours"><tbody>${t.hours.map(o=>`<tr><th scope="row">${e(i(o.days))}</th><td>${e(o.open)} \u2013 ${e(o.close)}</td></tr>`).join("")}</tbody></table>`:""}
      ${n(s.address)?`<p class="addr">${u("pin",18)} ${e(n(s.address))}</p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${r}" target="_blank" rel="noopener">${e(a.visit.directions)} ${u("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${e(a.visit.title)}" src="https://www.google.com/maps?q=${r}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function De({site:t,t:a,L:n}){let s=(t.faq??[]).filter(r=>n(r?.q));return s.length?`<section class="section section--soft" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${e(a.faq.title)}</h2>
    <div class="qa">${s.map((r,i)=>`<details${i===0?" open":""}><summary>${e(n(r.q))}</summary><p>${e(n(r.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Se({site:t,t:a,L:n,market:s}){let r=t.contact??{},i=Object.entries(t.social??{}).filter(([,o])=>o);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(t.name)}</p><p class="muted">${e(n(t.tagline))}</p></div>
    <div><p class="foot-h">${e(a.footer.contact)}</p><ul>
      ${r.phone?`<li><a href="tel:${$(r.phone)}">${e(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${e(r.email)}">${e(r.email)}</a></li>`:""}
      ${n(r.address)?`<li>${e(n(r.address))}</li>`:""}</ul></div>
    ${i.length?`<div><p class="foot-h">${e(a.footer.follow)}</p><ul>${i.map(([o,c])=>`<li><a href="${e(c)}" target="_blank" rel="noopener">${e(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${t.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(t.name)}</span>${K(t,a,s.lang)}</div>
</footer>`}function Ne({site:t,market:a,L:n,abs:s,url:r,plans:i,catalog:o}){let c=t.contact??{};return{"@context":"https://schema.org","@type":"ExerciseGym",name:t.name,url:s(`${a.id}/`),description:n(t.intro),image:new URL(T(t,r),s("")).href,telephone:c.phone,email:c.email,address:{"@type":"PostalAddress",streetAddress:n(c.address)},openingHoursSpecification:O(t.hours??[]),currenciesAccepted:a.currency,amenityFeature:(t.amenities??[]).filter(p=>n(p?.label)).map(p=>({"@type":"LocationFeatureSpecification",name:n(p.label),value:!0})),hasOfferCatalog:{"@type":"OfferCatalog",name:t.name,itemListElement:(o.categories??[]).filter(p=>i.some(l=>l.category===p.id)).map(p=>({"@type":"OfferCatalog",name:n(p.name),itemListElement:i.filter(l=>l.category===p.id).flatMap(l=>l.variants.map(d=>({"@type":"Offer",name:`${n(l.name)}${n(d.label)?` (${n(d.label)})`:""}`,price:d.price,priceCurrency:a.currency,itemOffered:{"@type":"Service",name:n(l.name),description:n(l.description)}})))}))}}}export{Ge as renderSite};
