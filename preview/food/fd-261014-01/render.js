var pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(a="")=>String(a).replace(/[&<>"']/g,t=>pe[t]);function q(a,t,n="vi"){var o,i,r;return a==null?"":typeof a!="object"?String(a):(r=(i=(o=a[t])!=null?o:a[n])!=null?i:Object.values(a)[0])!=null?r:""}var de={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},N=a=>{var t;return(t=de[a])!=null?t:"en-US"};function ue(a,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(a)-.01);let n=Number(t)||1;return Math.max(n,Math.round(a/n)*n)}function E(a,t){var o,i;if(t.default)return a.basePrice;let n=(i=(o=a.prices)==null?void 0:o[t.id])!=null?i:{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:ue(a.basePrice*t.rate,t.rounding)}var he=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function W(a,t){let n={style:"currency",currency:t.currency};return he.has(t.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(N(t.lang),n).format(a)}function _(a="/"){let t=a.endsWith("/")?a:`${a}/`;return(n="")=>t+String(n).replace(/^\//,"")}var me=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,y=(a,t)=>{let n=me(t);return n==null?t:a(n)},$=(a="")=>String(a).replace(/\D/g,"");function L(a,t,n=""){switch(a){case"phone":return`tel:${$(t.phone)}`;case"zalo":return`https://zalo.me/${$(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${$(t.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var K=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`,ge=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function J(a){if(!a||typeof a!="string")return null;let t;try{t=new URL(a.trim())}catch{return{error:"not-google"}}if(t.hostname==="forms.gle")return{error:"short-link"};let n=t.hostname==="docs.google.com"&&t.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!n)return{error:"not-google"};let o={};for(let[i,r]of t.searchParams){if(!/^entry\.\d+$/.test(i))continue;let s=r.trim().replace(/^\{|\}$/g,"").toLowerCase();ge.includes(s)&&(o[s]=i)}return Object.keys(o).length?o.phone?{action:`https://docs.google.com/forms/d/e/${n[1]}/formResponse`,fields:o}:{error:"no-phone"}:{error:"no-fields"}}var fe={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5M8 7h8"/>',chat:'<path d="M4 5h16v11h-9l-5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',paw:'<circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/><path d="M12 12c-3 0-6 4-6 6.5S8 21 12 19.5 18 21 18 18.5 15 12 12 12z"/>',scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5 20 18M8.5 16.5 20 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11"/>',key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/>',route:'<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H16"/>',fuel:'<path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M4 10h11M15 8l3 2v8a1.5 1.5 0 0 0 3 0V9l-3-3"/>',gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>',moto:'<circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/><path d="M8.5 17h6l3-6h-4l-2-4H9M14.5 11l-3 6M5.5 17l3-6h3"/>',doc:'<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 22c4 0 7-2.7 7-6.7 0-3.6-2.6-6-4.4-8.3-.6 1.9-1.6 3-3.1 3.6C12.6 7.4 11.6 4.3 9 2c0 4-5 6.5-5 13.3C4 19.3 8 22 12 22z"/>',drop2:'<path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',syringe:'<path d="M18 2l4 4M20 4l-4 4M15 5l4 4M17 7 8.5 15.5l-3 .5.5-3L14.5 4.5M6 18l-4 4M10 10l2 2M8 12l2 2"/>',steth:'<path d="M5 3H4v6a5 5 0 0 0 10 0V3h-1M9 14v1a5 5 0 0 0 10 0v-3"/><circle cx="19" cy="10" r="2"/>',cross:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',chef:'<path d="M7 17h10v4H7zM7 17v-4a4 4 0 0 1-.5-7.8A5 5 0 0 1 12 3a5 5 0 0 1 5.5 2.2A4 4 0 0 1 17 13v4"/>',pot:'<path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM2 10h20M9 7c0-1.2 1-1.3 1-2.5M14 7c0-1.2 1-1.3 1-2.5"/>',scale:'<path d="M12 3v18M7 21h10M5 7h14M12 5l-7 2M12 5l7 2"/><path d="M2 15l3-8 3 8a3 3 0 0 1-6 0zM16 15l3-8 3 8a3 3 0 0 1-6 0z"/>',briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',house:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10M10 20v-6h4v6"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},m=(a,t=20,n="")=>{var o;return`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${(o=fe[a])!=null?o:""}</svg>`},z=[1,2,3,4,5,6,0],be=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function Y(a,t){let n=a.map(i=>z.indexOf(i)).sort((i,r)=>i-r);return n.every((i,r)=>r===0||i===n[r-1]+1)&&n.length>2?`${t[z[n[0]]]} \u2013 ${t[z[n.at(-1)]]}`:n.map(i=>t[z[i]]).join(", ")}var X=a=>a.map(t=>({"@type":"OpeningHoursSpecification",dayOfWeek:t.days.map(n=>be[n]),opens:t.open,closes:t.close}));function Q(a){var n,o;return(o=(n=new Intl.NumberFormat(N(a.lang),{style:"currency",currency:a.currency}).formatToParts(0).find(i=>i.type==="currency"))==null?void 0:n.value)!=null?o:a.currency}var ee=a=>a==="phone"||a==="email"?"":'target="_blank" rel="noopener"',te=a=>`<div class="suggest" id="market-suggest" data-suggest="${e(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(a.market.dismiss)}">\xD7</button>
</div>`,B=(a,t)=>{var n;return`<p class="status" data-open-status data-hours='${e(JSON.stringify(a.hours))}' data-tz="${e((n=a.timezone)!=null?n:"Asia/Ho_Chi_Minh")}" data-open="${e(t.visit.open)}" data-closed="${e(t.visit.closed)}" hidden></p>`},Z={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},ve=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,ye=a=>{var t;try{let n=new URL(String((t=a.googleReview)!=null?t:"").trim());return n.protocol==="https:"&&ve.test(n.hostname)?n.href:""}catch{return""}},ae=(a,t,n,o="btn btn--line")=>{var s;let i=ye(a);if(!i)return"";let r=typeof t.reviews=="object"&&((s=t.reviews)==null?void 0:s.google)||Z[n]||Z.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${o}" href="${e(i)}" target="_blank" rel="noopener">${m("star",16)} ${e(r)}</a></p>`},C={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},ne={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},oe=a=>{var t;return((t=a.reviews)!=null?t:[]).filter(n=>n&&(n.name||n.text)&&!(typeof n.text=="object"&&n.text&&!Object.values(n.text).some(Boolean)&&!n.name))};function re(a,t){var r,s,l;let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String((r=a==null?void 0:a.date)!=null?r:"").trim());if(!n)return"";let o=new Date(Date.UTC(+n[1],+n[2]-1,+((s=n[3])!=null?s:1)));if(Number.isNaN(o.getTime()))return"";let i=new Intl.DateTimeFormat((l=ne[t])!=null?l:"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(o);return`<time class="rv-date" datetime="${e(a.date)}">${e(i)}</time>`}function $e(a,t){var s,l;let n=a.filter(p=>p.rating>=1&&p.rating<=5);if(n.length<2)return"";let o=n.reduce((p,d)=>p+Number(d.rating),0)/n.length,i=(s=C[t])!=null?s:C.en,r=new Intl.NumberFormat((l=ne[t])!=null?l:"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(o);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${m("star",18)}</span><strong>${r}</strong><span>\xB7</span><span>${e(i.count.replace("{n}",String(a.length)))}</span></p>`}function ie(a,t,n,o){var s;if(!a.length)return"";let i=(s=C[t])!=null?s:C.en,r=l=>`<button type="button" class="rv-btn" data-rv-${l} aria-label="${e(l==="prev"?i.prev:i.next)}">${m("arrow",18,l==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${$e(a,t)}<div class="rv" data-rv data-more="${e(i.more)}" data-less="${e(i.less)}">
      <div class="${n} rv-track" tabindex="0">${a.map(o).join("")}</div>
      <div class="rv-nav" hidden>${r("prev")}${r("next")}</div>
    </div>${xe}`}var xe=`<style>
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
upd()}})()<\/script>`;var se=(a,t,n)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(t.footer.madeWith)}</a>`;function le({site:a,markets:t,url:n,abs:o}){var s;let i=(s=t.find(l=>l.default))!=null?s:t[0],r=t.map(l=>({id:l.id,lang:l.lang,country:l.country}));return`<!doctype html>
<html lang="${e(i.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(a.name)}</title>
<link rel="canonical" href="${o(`${i.id}/`)}">
${t.map(l=>`<link rel="alternate" hreflang="${e(l.lang)}-${e(l.country)}" href="${o(`${l.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(r)}, root = ${JSON.stringify(n(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${t.map(l=>`<a href="${n(`${l.id}/`)}">${e(l.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var ke="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",A=8,we=new Set(["VND","JPY","KRW","IDR","CLP","TWD","HUF","ISK","UGX","PYG"]);function Me(a,t){var n;return((n=a.products)!=null?n:[]).map(o=>{var i;return{...o,variants:((i=o.variants)!=null?i:[]).map(r=>({...r,price:E(r,t)})).filter(r=>r.price!=null)}}).filter(o=>o.variants.length>0)}function Xe({site:a,catalog:t,i18n:n,template:o,basePath:i="/",siteUrl:r=a.domain}){let s=_(i),l=u=>new URL(s(u),r).href,p=t.markets,d=J(a.orderForm),c=d&&!d.error?d:null,g=p.map(u=>{var k,w,M,D,S;let b=u.lang,v=(w=(k=n[b])!=null?k:n.en)!=null?w:n.vi,P=f=>q(f,b,"en"),j=Me(t,u),x=((M=a.toppings)!=null?M:[]).filter(f=>(f==null?void 0:f.id)&&P(f.name)).map(f=>({...f,price:E(f,u)})).filter(f=>f.price!=null),T=(S=(D=a.orderChannels)==null?void 0:D[u.id])!=null?S:["phone"],R={site:a,catalog:t,market:u,markets:p,lang:b,t:v,L:P,url:s,abs:l,menu:j,toppings:x,channels:T,money:f=>W(f,u),template:o,gform:c};return{path:`${u.id}/index.html`,html:De(R)}});return g.push({path:"index.html",html:le({site:a,markets:p,url:s,abs:l})}),g}var F=(a,t)=>a.heroImage?y(t,a.heroImage):t("assets/photos/hero.webp"),ce=a=>{var t;return new Set(((t=a.categories)!=null?t:[]).filter(n=>n.custom).map(n=>n.id))};function De(a){var k,w,M,D,S,f,G,V,H,I;let{site:t,catalog:n,market:o,markets:i,lang:r,t:s,L:l,url:p,abs:d,menu:c,toppings:g}=a,u=`${t.name} \xB7 ${l(t.tagline)}`,b=(k=t.theme)!=null?k:{},v=["primary","ink","bg","surface","soft","accent"].filter(h=>b[h]).map(h=>`--${h}:${b[h]}`).join(";"),P=(w=i.find(h=>h.default))!=null?w:i[0],j=i.map(h=>({id:h.id,lang:h.lang,country:h.country,currency:h.currency,href:p(`${h.id}/`)})),x=(M=t.contact)!=null?M:{},T=ce(n),O={items:c.map(h=>({id:h.id,name:l(h.name),image:h.image?y(p,h.image):"",custom:T.has(h.category),v:h.variants.map(U=>({l:l(U.label),p:U.price}))})),toppings:g.map(h=>({id:h.id,name:l(h.name),p:h.price})),sugar:((D=t.sugar)!=null?D:[100,70,50,30,0]).map(Number),ice:((S=t.ice)!=null?S:[]).map(h=>l(h)).filter(Boolean)},R={locale:N(o.lang),currency:o.currency,max:we.has(o.currency)?0:2,key:`kp-tea-${t.name}-${o.id}`,maxTop:(f=t.maxToppings)!=null?f:3};return`<!doctype html>
<html lang="${e(r)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(u)}</title>
<meta name="description" content="${e(l(t.intro))}">
<link rel="canonical" href="${d(`${o.id}/`)}">
${i.map(h=>`<link rel="alternate" hreflang="${e(h.lang)}-${e(h.country)}" href="${d(`${h.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${d(`${P.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${e(u)}">
<meta property="og:description" content="${e(l(t.intro))}">
<meta property="og:url" content="${d(`${o.id}/`)}">
<meta property="og:site_name" content="${e(t.name)}">
<meta property="og:image" content="${e(new URL(F(t,p),d("")).href)}">
<meta name="theme-color" content="${e((G=b.primary)!=null?G:"#7A4FB8")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${ke}">
<link rel="stylesheet" href="${p("assets/style.css")}">
<style>:root{${v}}</style>
<noscript><style>.album .more{display:block}.album-more,.add,.cart-btn,.chips,.dock button{display:none}</style></noscript>
${K(Fe(a))}
<script src="${p("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(o.id)}" data-markets='${e(JSON.stringify(j))}' data-cfg='${e(JSON.stringify(R))}' data-wa="${e($(x.whatsapp))}" data-email="${e((V=x.email)!=null?V:"")}" data-copied="${e(s.order.copied)}" data-tz="${e((H=t.timezone)!=null?H:"Asia/Ho_Chi_Minh")}">
<a class="skip" href="#main">${e(s.skip)}</a>
${te(s)}
${Se(a)}
${Ne(a)}
<main id="main">
${Pe(a)}
${ze(a)}
${Ce(a)}
${je(a)}
${Te(a)}
${Re(a)}
${qe(a)}
${Ee(a)}
</main>
${Le(a)}
${Be(a)}
${Ae(a)}
<script type="application/json" id="kp-menu">${JSON.stringify(O).replace(/</g,"\\u003c")}<\/script>
<nav class="dock" aria-label="${e(s.cart.title)}">
  <a href="${e(L(a.channels[0],x))}" ${ee(a.channels[0])}>${m(a.channels[0],20)}<span>${e((I=s.via[a.channels[0]])!=null?I:"")}</span></a>
  <button type="button" class="primary" data-cart-open>${m("bag",20)}<span>${e(s.cart.title)}</span> <b class="badge" data-count hidden>0</b></button>
</nav>
</body>
</html>
`}function Se({site:a,L:t}){var o;let n=(o=a.promo)!=null?o:{};return n.show===!1||!t(n.text)?"":`<p class="promo">${m("star",14)} ${e(t(n.text))}</p>`}function Ne({site:a,market:t,markets:n,t:o,url:i}){let r=[["#menu",o.nav.menu],["#toppings",o.nav.toppings],["#album",o.nav.album],["#visit",o.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${i(`${t.id}/`)}">
      ${a.logo?`<img src="${e(y(i,a.logo))}" alt="" width="42" height="42">`:`<span class="brand-mark" aria-hidden="true">${m("cup",22)}</span>`}
      <span>${e(a.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${r.map(([s,l])=>`<a href="${s}">${e(l)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${n.length>1?`<details class="market">
        <summary aria-label="${e(o.market.label)}">${m("globe",18)}<span>${e(t.id.toUpperCase())}<span class="cur"> \xB7 ${e(Q(t))}</span></span></summary>
        <ul>${n.map(s=>`<li><a href="${i(`${s.id}/`)}" hreflang="${e(s.lang)}"${s.id===t.id?' aria-current="true"':""}>${e(s.country)} \xB7 ${e(s.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <button type="button" class="cart-btn" data-cart-open aria-label="${e(o.cart.title)}">${m("bag",20)}<span class="hide-sm">${e(o.cart.title)}</span><b class="badge" data-count hidden>0</b></button>
      <details class="mnav">
        <summary aria-label="${e(o.nav.openMenu)}">${m("menu",22)}</summary>
        <nav aria-label="Menu">${r.map(([s,l])=>`<a href="${s}">${e(l)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function Pe({site:a,t,L:n,url:o,menu:i}){let r=i.filter(s=>s.featured).slice(0,3);return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${n(a.place)?`<p class="eyebrow">${e(n(a.place))}</p>`:""}
      <h1>${e(n(a.tagline))}</h1>
      ${n(a.intro)?`<p class="lead">${e(n(a.intro))}</p>`:""}
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#menu">${m("cup",18)} ${e(t.hero.order)}</a>
        <a class="btn btn--line btn--lg" href="#visit">${e(t.hero.visit)}</a>
      </div>
      ${B(a,t)}
    </div>
    <div class="hero-ph">
      <span class="bubble b1" aria-hidden="true"></span><span class="bubble b2" aria-hidden="true"></span><span class="bubble b3" aria-hidden="true"></span>
      <img src="${e(F(a,o))}" alt="" width="900" height="1100" fetchpriority="high">
      ${r.length?`<ul class="hot-list">${r.map(s=>`<li><button type="button" data-open="${e(s.id)}">${s.image?`<img src="${e(y(o,s.image))}" alt="" width="80" height="80">`:""}<span>${e(n(s.name))}</span></button></li>`).join("")}</ul>`:""}
    </div>
  </div>
</section>`}function ze({catalog:a,menu:t,t:n,L:o,url:i,money:r}){var d;if(!t.length)return"";let s=((d=a.categories)!=null?d:[]).filter(c=>t.some(g=>g.category===c.id)),l=ce(a),p=c=>{var b;let g=Math.min(...c.variants.map(v=>v.price)),u=l.has(c.category);return`<article class="item" data-c="${e((b=c.category)!=null?b:"")}">
      <button type="button" class="item-ph" ${u?`data-open="${e(c.id)}"`:`data-add="${e(c.id)}"`} aria-label="${e(o(c.name))}">
        ${c.image?`<img sizes="auto, (max-width: 640px) 50vw, 260px" src="${e(y(i,c.image))}" alt="${e(o(c.name))}" width="600" height="600" loading="lazy">`:""}
        ${c.isNew?`<span class="tag tag--new">${e(n.menu.new)}</span>`:c.featured?`<span class="tag">${e(n.menu.best)}</span>`:""}
      </button>
      <div class="item-body">
        <h3>${e(o(c.name))}</h3>
        ${o(c.description)?`<p class="desc">${e(o(c.description))}</p>`:""}
        <p class="sizes">${c.variants.map(v=>`<span>${e(o(v.label))} <b>${e(r(v.price))}</b></span>`).join("")}</p>
        <div class="buy-row">
          <p class="from">${c.variants.length>1?`<small>${e(n.menu.from)}</small> `:""}<b>${e(r(g))}</b></p>
          <button type="button" class="add" ${u?`data-open="${e(c.id)}"`:`data-add="${e(c.id)}"`} aria-label="${e(n.menu.add)}: ${e(o(c.name))}">${m("plus",20)}</button>
        </div>
      </div>
    </article>`};return`<section class="section" id="menu" aria-labelledby="menu-title">
  <div class="wrap">
    <div class="head"><h2 id="menu-title" class="h2">${e(n.menu.title)}</h2><p class="muted">${e(n.menu.text)}</p></div>
    ${s.length>1?`<div class="chips" role="group" aria-label="${e(n.menu.title)}"><button type="button" class="chip" data-cat="" aria-pressed="true">${e(n.menu.all)}</button>${s.map(c=>`<button type="button" class="chip" data-cat="${e(c.id)}" aria-pressed="false">${e(o(c.name))}</button>`).join("")}</div>`:""}
    ${s.map(c=>`<div class="menu-group" data-group="${e(c.id)}">
      <h3 class="group-h">${e(o(c.name))}</h3>
      <div class="items">${t.filter(g=>g.category===c.id).map(p).join("")}</div>
    </div>`).join("")}
  </div>
</section>`}function Ce({site:a,toppings:t,t:n,L:o,url:i,money:r}){var p,d;if(!t.length)return"";let s=(p=a.sugar)!=null?p:[100,70,50,30,0],l=((d=a.ice)!=null?d:[]).map(o).filter(Boolean);return`<section class="section section--soft" id="toppings" aria-labelledby="top-title">
  <div class="wrap tops-wrap">
    <div class="head"><h2 id="top-title" class="h2">${e(n.toppings.title)}</h2><p class="muted">${e(n.toppings.text)}</p>
      <ul class="levels">
        <li><b>${e(n.builder.sugar)}</b> ${s.map(c=>`<span>${e(c)}%</span>`).join("")}</li>
        ${l.length?`<li><b>${e(n.builder.ice)}</b> ${l.map(c=>`<span>${e(c)}</span>`).join("")}</li>`:""}
      </ul>
    </div>
    <ul class="tops">${t.map(c=>`<li>${c.image?`<img sizes="auto, 64px" src="${e(y(i,c.image))}" alt="" width="200" height="200" loading="lazy">`:'<span class="dot" aria-hidden="true"></span>'}<span>${e(o(c.name))}</span><b>+${e(r(c.price))}</b></li>`).join("")}</ul>
  </div>
</section>`}function je({site:a,market:t,t:n}){var i;let o=((i=a.apps)!=null?i:[]).filter(r=>{var s;return(r==null?void 0:r.name)&&r.url&&(!((s=r.markets)!=null?s:[]).length||r.markets.includes(t.id))});return o.length?`<section class="section section--tight" aria-labelledby="apps-title">
  <div class="wrap apps">
    <h2 id="apps-title" class="apps-h">${m("truck",22)} ${e(n.apps.title)}</h2>
    <div class="apps-list">${o.map(r=>`<a class="btn btn--line" href="${e(r.url)}" target="_blank" rel="noopener">${e(r.name)} ${m("arrow",16)}</a>`).join("")}</div>
  </div>
</section>`:""}function Te({site:a,t,url:n}){var i;let o=((i=a.album)!=null?i:[]).filter(r=>r==null?void 0:r.image);return o.length?`<section class="section" id="album" aria-labelledby="album-title">
  <div class="wrap">
    <div class="head"><h2 id="album-title" class="h2">${e(t.album.title)}</h2><p class="muted">${e(t.album.text)}</p></div>
    <div class="album" data-album>${o.map((r,s)=>{let l=e(y(n,r.image));return`<a class="ph${s>=A?" more":""}" href="${l}"><img sizes="auto, (max-width: 640px) 50vw, 300px" src="${l}" alt="${e(`${a.name} ${s+1}`)}" width="1000" height="1000" loading="lazy"></a>`}).join("")}</div>
    ${o.length>A?`<p class="center"><button type="button" class="btn btn--line album-more" data-album-more>${e(t.album.more)} <span>(${o.length-A})</span></button></p>`:""}
  </div>
  <dialog class="lb" data-lightbox aria-label="${e(t.album.title)}">
    <img alt="" data-lb-img>
    <button type="button" class="lb-btn lb-close" data-lb-close aria-label="${e(t.album.close)}">\u2715</button>
    <button type="button" class="lb-btn lb-prev" data-lb-prev aria-label="${e(t.album.prev)}">${m("arrow",22,'style="transform:scaleX(-1)"')}</button>
    <button type="button" class="lb-btn lb-next" data-lb-next aria-label="${e(t.album.next)}">${m("arrow",22)}</button>
  </dialog>
</section>`:""}function Re({site:a,t,L:n,lang:o}){let i=ae(a,t,o,"btn btn--line"),r=oe(a);return a.showReviews===!1||!r.length&&!i?"":`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(t.reviews)}</h2>
    ${ie(r,o,"quotes",s=>`<figure class="quote">
      ${s.rating?`<div class="stars" aria-label="${s.rating}/5">${Array.from({length:5},(l,p)=>`<span class="${p<s.rating?"on":""}">${m("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${e(n(s.text))}</blockquote>
      <figcaption>${e(s.name)}${re(s,o)}</figcaption>
    </figure>`)}${i}
  </div>
</section>`}function qe({site:a,t,L:n}){var s,l,p;let o=(s=a.contact)!=null?s:{},i=encodeURIComponent((l=o.mapQuery)!=null?l:n(o.address)),r=d=>d.length===7?t.everyDay:Y(d,t.days);return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${e(t.visit.title)}</h2>
      ${B(a,t)}
      ${((p=a.hours)!=null?p:[]).length?`<table class="hours"><tbody>${a.hours.map(d=>`<tr><th scope="row">${e(r(d.days))}</th><td>${e(d.open)} \u2013 ${e(d.close)}</td></tr>`).join("")}</tbody></table>`:""}
      ${n(o.address)?`<p class="addr">${m("pin",18)} ${e(n(o.address))}</p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${i}" target="_blank" rel="noopener">${e(t.visit.directions)} ${m("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${e(t.visit.title)}" src="https://www.google.com/maps?q=${i}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function Ee({site:a,t,L:n}){var i;let o=((i=a.faq)!=null?i:[]).filter(r=>n(r==null?void 0:r.q));return o.length?`<section class="section section--soft" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${e(t.faq.title)}</h2>
    <div class="qa">${o.map((r,s)=>`<details${s===0?" open":""}><summary>${e(n(r.q))}</summary><p>${e(n(r.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Le({site:a,t,L:n,market:o}){var s,l;let i=(s=a.contact)!=null?s:{},r=Object.entries((l=a.social)!=null?l:{}).filter(([,p])=>p);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(a.name)}</p><p class="muted">${e(n(a.tagline))}</p></div>
    <div><p class="foot-h">${e(t.footer.contact)}</p><ul>
      ${i.phone?`<li><a href="tel:${$(i.phone)}">${e(i.phone)}</a></li>`:""}
      ${i.email?`<li><a href="mailto:${e(i.email)}">${e(i.email)}</a></li>`:""}
      ${n(i.address)?`<li>${e(n(i.address))}</li>`:""}</ul></div>
    ${r.length?`<div><p class="foot-h">${e(t.footer.follow)}</p><ul>${r.map(([p,d])=>`<li><a href="${e(d)}" target="_blank" rel="noopener">${e(p[0].toUpperCase()+p.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${a.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(a.name)}</span>${se(a,t,o.lang)}</div>
</footer>`}function Be({t:a}){let t=a.builder;return`<dialog class="sheet" data-builder aria-labelledby="bd-title">
  <form method="dialog" class="sheet-in" data-bform>
    <button type="button" class="x" data-bclose aria-label="${e(a.album.close)}">\u2715</button>
    <div class="bd-head"><img alt="" data-bimg width="96" height="96"><div><h2 id="bd-title" data-bname></h2><p class="muted" data-bbase></p></div></div>
    <fieldset class="opt-group" data-bsizes><legend>${e(t.size)}</legend><div class="pills"></div></fieldset>
    <fieldset class="opt-group" data-bsugar><legend>${e(t.sugar)}</legend><div class="pills"></div></fieldset>
    <fieldset class="opt-group" data-bice><legend>${e(t.ice)}</legend><div class="pills"></div></fieldset>
    <fieldset class="opt-group" data-btops><legend>${e(t.toppings)} <small data-bmax data-tpl="${e(t.max)}"></small></legend><div class="tops-pick"></div></fieldset>
    <label class="field"><span>${e(t.note)}</span><input name="bnote" maxlength="80" placeholder="${e(t.noteHint)}"></label>
    <div class="bd-foot">
      <div class="qty"><button type="button" data-bdec aria-label="\u2212">\u2212</button><span data-bqty>1</span><button type="button" data-binc aria-label="+">+</button></div>
      <button type="button" class="btn btn--primary btn--lg" data-badd>${e(t.add)} \xB7 <b data-btotal></b></button>
    </div>
  </form>
</dialog>`}function Ae({site:a,t,channels:n,gform:o}){var d,c,g;let i=(d=a.contact)!=null?d:{},r=t.order,s=o?` data-gform="${e(o.action)}" data-gmap='${e(JSON.stringify(o.fields))}'`:"",l=n.map((u,b)=>{var v;return`<button type="button" class="btn ${b===0?"btn--primary":"btn--line"}" data-channel="${e(u)}" data-href="${e(L(u,i,""))}">${m(u,18)} ${e((v=t.via[u])!=null?v:u)}</button>`}).join(""),p=(g=(c=a.hours)==null?void 0:c[0])!=null?g:{open:"09:00",close:"22:00"};return`<dialog class="drawer" data-cart aria-labelledby="cart-title">
  <div class="drawer-in">
    <div class="drawer-head"><h2 id="cart-title">${m("bag",22)} ${e(t.cart.title)}</h2><button type="button" class="x" data-cart-close aria-label="${e(t.album.close)}">\u2715</button></div>
    <ul class="lines" data-lines></ul>
    <p class="cart-empty" data-cart-empty>${e(t.cart.empty)}</p>
    <p class="sum" data-sum hidden><span>${e(t.cart.total)}</span> <b data-total></b></p>
    <form class="form" data-order novalidate${s} data-order-text="${e(r.message)}" data-open="${e(p.open)}" data-close="${e(p.close)}" hidden>
      <div class="order-fields">
        <div class="seg" role="radiogroup" aria-label="${e(r.how)}">
          <label><input type="radio" name="how" value="delivery" checked><span>${m("truck",16)} ${e(r.delivery)}</span></label>
          <label><input type="radio" name="how" value="pickup"><span>${m("cup",16)} ${e(r.pickup)}</span></label>
        </div>
        <div class="row2">
          <label class="field"><span>${e(r.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${e(r.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field" data-addr><span>${e(r.address)} *</span><input name="address" autocomplete="street-address" maxlength="200"></label>
        <label class="field"><span>${e(r.time)}</span><select name="time" data-times data-asap="${e(r.asap)}"><option>${e(r.asap)}</option></select></label>
        <label class="field"><span>${e(r.note)}</span><textarea name="note" rows="2" maxlength="300" placeholder="${e(r.noteHint)}"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${e(r.required)}</p>
        <button class="btn btn--primary btn--lg btn--block" type="submit" data-submit data-sending="${e(r.sending)}">${e(r.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${m(o?"check":"arrow",22)} ${e(o?r.done:r.stepTitle)}</p>
        <p>${e(o?r.doneText:r.stepText)}</p>
        ${o?"":`<div class="buy">${l}</div><button type="button" class="link" data-edit>${e(r.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</dialog>
<div class="toast" data-toast role="status" aria-live="polite" hidden></div>
<template data-tpl-added>${e(t.cart.added)}</template>
<template data-tpl-labels data-sugar="${e(t.builder.sugar)}" data-ice="${e(t.builder.ice)}" data-qty="${e(t.order.qty)}" data-total="${e(t.cart.total)}" data-how="${e(t.order.how)}" data-delivery="${e(t.order.delivery)}" data-pickup="${e(t.order.pickup)}"></template>`}function Fe({site:a,market:t,L:n,abs:o,url:i,menu:r,catalog:s}){var p,d,c;let l=(p=a.contact)!=null?p:{};return{"@context":"https://schema.org","@type":"CafeOrCoffeeShop",name:a.name,url:o(`${t.id}/`),description:n(a.intro),image:new URL(F(a,i),o("")).href,telephone:l.phone,email:l.email,servesCuisine:n(a.cuisine)||"Bubble tea",address:{"@type":"PostalAddress",streetAddress:n(l.address)},openingHoursSpecification:X((d=a.hours)!=null?d:[]),currenciesAccepted:t.currency,hasMenu:{"@type":"Menu",hasMenuSection:((c=s.categories)!=null?c:[]).filter(g=>r.some(u=>u.category===g.id)).map(g=>({"@type":"MenuSection",name:n(g.name),hasMenuItem:r.filter(u=>u.category===g.id).map(u=>({"@type":"MenuItem",name:n(u.name),description:n(u.description)||void 0,offers:u.variants.map(b=>({"@type":"Offer",name:n(b.label)||void 0,price:b.price,priceCurrency:t.currency}))}))}))}}}export{Xe as renderSite};
