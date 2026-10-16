var ee={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},t=(e="")=>String(e).replace(/[&<>"']/g,a=>ee[a]);function x(e,a,n="vi"){return e==null?"":typeof e!="object"?String(e):e[a]??e[n]??Object.values(e)[0]??""}var te={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},v=e=>te[e]??"en-US";function ae(e,a="1"){if(a==="0.99")return Math.max(.99,Math.ceil(e)-.01);let n=Number(a)||1;return Math.max(n,Math.round(e/n)*n)}function w(e,a){if(a.default)return e.basePrice;let n=e.prices?.[a.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:ae(e.basePrice*a.rate,a.rounding)}var ne=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function C(e,a){let n={style:"currency",currency:a.currency};return ne.has(a.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(v(a.lang),n).format(e)}function j(e="/"){let a=e.endsWith("/")?e:`${e}/`;return(n="")=>a+String(n).replace(/^\//,"")}var oe=(e="")=>e.startsWith("uploads/")?e:/^([a-z]+:|\/)/i.test(e)?null:`assets/${e}`,k=(e,a)=>{let n=oe(a);return n==null?a:e(n)},b=(e="")=>String(e).replace(/\D/g,"");function T(e,a,n=""){switch(e){case"phone":return`tel:${b(a.phone)}`;case"zalo":return`https://zalo.me/${b(a.zalo||a.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(a.messenger)}`;case"whatsapp":return`https://wa.me/${b(a.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(a.kakao)}/chat`;case"email":return`mailto:${a.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var R=e=>`<script type="application/ld+json">${JSON.stringify(e).replace(/</g,"\\u003c")}<\/script>`,re=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function q(e){if(!e||typeof e!="string")return null;let a;try{a=new URL(e.trim())}catch{return{error:"not-google"}}if(a.hostname==="forms.gle")return{error:"short-link"};let n=a.hostname==="docs.google.com"&&a.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!n)return{error:"not-google"};let i={};for(let[r,l]of a.searchParams){if(!/^entry\.\d+$/.test(r))continue;let o=l.trim().replace(/^\{|\}$/g,"").toLowerCase();re.includes(o)&&(i[o]=r)}return Object.keys(i).length?i.phone?{action:`https://docs.google.com/forms/d/e/${n[1]}/formResponse`,fields:i}:{error:"no-phone"}:{error:"no-fields"}}var P={card:"auto, (max-width: 640px) 50vw, 280px",wide:"auto, (max-width: 640px) 100vw, 580px",thumb:"auto, 120px"};var ie={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5M8 7h8"/>',chat:'<path d="M4 5h16v11h-9l-5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',paw:'<circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/><path d="M12 12c-3 0-6 4-6 6.5S8 21 12 19.5 18 21 18 18.5 15 12 12 12z"/>',scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5 20 18M8.5 16.5 20 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 22c4 0 7-2.7 7-6.7 0-3.6-2.6-6-4.4-8.3-.6 1.9-1.6 3-3.1 3.6C12.6 7.4 11.6 4.3 9 2c0 4-5 6.5-5 13.3C4 19.3 8 22 12 22z"/>',drop2:'<path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},u=(e,a=20,n="")=>`<svg class="i" width="${a}" height="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${ie[e]??""}</svg>`;function E(e){return new Intl.NumberFormat(v(e.lang),{style:"currency",currency:e.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??e.currency}var L=e=>e==="phone"||e==="email"?"":'target="_blank" rel="noopener"',O=e=>`<div class="suggest" id="market-suggest" data-suggest="${t(e.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${t(e.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${t(e.market.dismiss)}">\xD7</button>
</div>`;var H={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},se=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,le=e=>{try{let a=new URL(String(e.googleReview??"").trim());return a.protocol==="https:"&&se.test(a.hostname)?a.href:""}catch{return""}},A=(e,a,n,i="btn btn--line")=>{let r=le(e);if(!r)return"";let l=typeof a.reviews=="object"&&a.reviews?.google||H[n]||H.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${i}" href="${t(r)}" target="_blank" rel="noopener">${u("star",16)} ${t(l)}</a></p>`},S={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},F={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},B=e=>(e.reviews??[]).filter(a=>a&&(a.name||a.text)&&!(typeof a.text=="object"&&a.text&&!Object.values(a.text).some(Boolean)&&!a.name));function I(e,a){let n=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(e?.date??"").trim());if(!n)return"";let i=new Date(Date.UTC(+n[1],+n[2]-1,+(n[3]??1)));if(Number.isNaN(i.getTime()))return"";let r=new Intl.DateTimeFormat(F[a]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(i);return`<time class="rv-date" datetime="${t(e.date)}">${t(r)}</time>`}function ce(e,a){let n=e.filter(o=>o.rating>=1&&o.rating<=5);if(n.length<2)return"";let i=n.reduce((o,s)=>o+Number(s.rating),0)/n.length,r=S[a]??S.en,l=new Intl.NumberFormat(F[a]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(i);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${u("star",18)}</span><strong>${l}</strong><span>\xB7</span><span>${t(r.count.replace("{n}",String(e.length)))}</span></p>`}function U(e,a,n,i){if(!e.length)return"";let r=S[a]??S.en,l=o=>`<button type="button" class="rv-btn" data-rv-${o} aria-label="${t(o==="prev"?r.prev:r.next)}">${u("arrow",18,o==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${ce(e,a)}<div class="rv" data-rv data-more="${t(r.more)}" data-less="${t(r.less)}">
      <div class="${n} rv-track" tabindex="0">${e.map(i).join("")}</div>
      <div class="rv-nav" hidden>${l("prev")}${l("next")}</div>
    </div>${pe}`}var pe=`<style>
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
upd()}})()<\/script>`;var G=(e,a,n)=>e.badge===!1?"":`<a class="made" href="https://kingpes.net/${t(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${t(a.footer.madeWith)}</a>`;function V({site:e,markets:a,url:n,abs:i}){let r=a.find(o=>o.default)??a[0],l=a.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${t(r.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t(e.name)}</title>
<link rel="canonical" href="${i(`${r.id}/`)}">
${a.map(o=>`<link rel="alternate" hreflang="${t(o.lang)}-${t(o.country)}" href="${i(`${o.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(l)}, root = ${JSON.stringify(n(""))};
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
`}var W={vi:{room:"Lo\u1EA1i ph\xF2ng",mode:"H\xECnh th\u1EE9c",night:"Qua \u0111\xEAm",hour:"Theo gi\u1EDD",checkIn:"Ng\xE0y nh\u1EADn ph\xF2ng",checkOut:"Ng\xE0y tr\u1EA3 ph\xF2ng",date:"Ng\xE0y",start:"Gi\u1EDD \u0111\u1EBFn",hours:"S\u1ED1 gi\u1EDD",hourN:"{n} gi\u1EDD",guests:"S\u1ED1 kh\xE1ch",rooms:"S\u1ED1 ph\xF2ng",total:"T\u1EA1m t\xEDnh",nights:"{n} \u0111\xEAm",perNight:"{price}/\u0111\xEAm",firstHours:"{n} gi\u1EDD \u0111\u1EA7u {price}",extraHour:"th\xEAm {price}/gi\u1EDD",peak:"Ph\u1EE5 thu",note:"Kh\xE1ch s\u1EA1n x\xE1c nh\u1EADn c\xF2n ph\xF2ng trong 15 ph\xFAt qua tin nh\u1EAFn.",invalid:"Ng\xE0y tr\u1EA3 ph\xF2ng ph\u1EA3i sau ng\xE0y nh\u1EADn ph\xF2ng.",all:"M\u1ECDi \u0111\xEAm",from:"T\u1EEB {price}",unitDay:"{n} ng\xE0y",perDay:"{price}/ng\xE0y",pickup:"Ng\xE0y nh\u1EADn",dropoff:"Ng\xE0y tr\u1EA3"},en:{room:"Room type",mode:"Stay type",night:"Overnight",hour:"By the hour",checkIn:"Check-in",checkOut:"Check-out",date:"Date",start:"Arrival time",hours:"Hours",hourN:"{n} h",guests:"Guests",rooms:"Rooms",total:"Estimated total",nights:"{n} nights",perNight:"{price}/night",firstHours:"first {n} h {price}",extraHour:"+{price}/extra hour",peak:"Surcharge",note:"We confirm availability within 15 minutes by message.",invalid:"Check-out must be after check-in.",all:"Every night",from:"From {price}",unitDay:"{n} days",perDay:"{price}/day",pickup:"Pick-up",dropoff:"Return"},ja:{room:"\u5BA2\u5BA4\u30BF\u30A4\u30D7",mode:"\u3054\u5229\u7528\u65B9\u6CD5",night:"\u5BBF\u6CCA",hour:"\u4F11\u61A9\uFF08\u6642\u9593\u5229\u7528\uFF09",checkIn:"\u30C1\u30A7\u30C3\u30AF\u30A4\u30F3",checkOut:"\u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8",date:"\u65E5\u4ED8",start:"\u5230\u7740\u6642\u9593",hours:"\u5229\u7528\u6642\u9593",hourN:"{n}\u6642\u9593",guests:"\u4EBA\u6570",rooms:"\u90E8\u5C4B\u6570",total:"\u6982\u7B97",nights:"{n}\u6CCA",perNight:"{price}/\u6CCA",firstHours:"\u6700\u521D\u306E{n}\u6642\u9593 {price}",extraHour:"\u5EF6\u9577 {price}/\u6642\u9593",peak:"\u7E41\u5FD9\u671F\u6599\u91D1",note:"\u7A7A\u5BA4\u72B6\u6CC1\u306F15\u5206\u4EE5\u5185\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u3067\u3054\u9023\u7D61\u3057\u307E\u3059\u3002",invalid:"\u30C1\u30A7\u30C3\u30AF\u30A2\u30A6\u30C8\u306F\u30C1\u30A7\u30C3\u30AF\u30A4\u30F3\u3088\u308A\u5F8C\u306E\u65E5\u4ED8\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",all:"\u6BCE\u65E5",from:"{price}\u301C",unitDay:"{n}\u65E5",perDay:"{price}/\u65E5",pickup:"\u8CB8\u51FA\u65E5",dropoff:"\u8FD4\u5374\u65E5"},ko:{room:"\uAC1D\uC2E4 \uC720\uD615",mode:"\uC774\uC6A9 \uBC29\uBC95",night:"\uC219\uBC15",hour:"\uB300\uC2E4(\uC2DC\uAC04)",checkIn:"\uCCB4\uD06C\uC778",checkOut:"\uCCB4\uD06C\uC544\uC6C3",date:"\uB0A0\uC9DC",start:"\uB3C4\uCC29 \uC2DC\uAC04",hours:"\uC774\uC6A9 \uC2DC\uAC04",hourN:"{n}\uC2DC\uAC04",guests:"\uC778\uC6D0",rooms:"\uAC1D\uC2E4 \uC218",total:"\uC608\uC0C1 \uAE08\uC561",nights:"{n}\uBC15",perNight:"{price}/\uBC15",firstHours:"\uCC98\uC74C {n}\uC2DC\uAC04 {price}",extraHour:"\uCD94\uAC00 {price}/\uC2DC\uAC04",peak:"\uC131\uC218\uAE30 \uCD94\uAC00",note:"15\uBD84 \uC548\uC5D0 \uBA54\uC2DC\uC9C0\uB85C \uAC1D\uC2E4 \uC5EC\uBD80\uB97C \uC54C\uB824 \uB4DC\uB9BD\uB2C8\uB2E4.",invalid:"\uCCB4\uD06C\uC544\uC6C3\uC740 \uCCB4\uD06C\uC778 \uC774\uD6C4\uC5EC\uC57C \uD569\uB2C8\uB2E4.",all:"\uB9E4\uC77C",from:"{price}\uBD80\uD130",unitDay:"{n}\uC77C",perDay:"{price}/\uC77C",pickup:"\uB300\uC5EC\uC77C",dropoff:"\uBC18\uB0A9\uC77C"},zh:{room:"\u623F\u578B",mode:"\u5165\u4F4F\u65B9\u5F0F",night:"\u8FC7\u591C",hour:"\u949F\u70B9\u623F",checkIn:"\u5165\u4F4F\u65E5\u671F",checkOut:"\u9000\u623F\u65E5\u671F",date:"\u65E5\u671F",start:"\u5230\u5E97\u65F6\u95F4",hours:"\u65F6\u957F",hourN:"{n} \u5C0F\u65F6",guests:"\u4EBA\u6570",rooms:"\u623F\u95F4\u6570",total:"\u9884\u4F30\u8D39\u7528",nights:"{n} \u665A",perNight:"{price}/\u665A",firstHours:"\u524D {n} \u5C0F\u65F6 {price}",extraHour:"\u7EED\u65F6 {price}/\u5C0F\u65F6",peak:"\u65FA\u5B63\u52A0\u4EF7",note:"\u6211\u4EEC\u4F1A\u5728 15 \u5206\u949F\u5185\u901A\u8FC7\u6D88\u606F\u786E\u8BA4\u662F\u5426\u6709\u623F\u3002",invalid:"\u9000\u623F\u65E5\u671F\u5FC5\u987B\u665A\u4E8E\u5165\u4F4F\u65E5\u671F\u3002",all:"\u6BCF\u665A",from:"{price} \u8D77",unitDay:"{n} \u5929",perDay:"{price}/\u5929",pickup:"\u53D6\u8F66\u65E5\u671F",dropoff:"\u8FD8\u8F66\u65E5\u671F"},th:{room:"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E2B\u0E49\u0E2D\u0E07",mode:"\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E01",night:"\u0E04\u0E49\u0E32\u0E07\u0E04\u0E37\u0E19",hour:"\u0E23\u0E32\u0E22\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",checkIn:"\u0E27\u0E31\u0E19\u0E40\u0E0A\u0E47\u0E01\u0E2D\u0E34\u0E19",checkOut:"\u0E27\u0E31\u0E19\u0E40\u0E0A\u0E47\u0E01\u0E40\u0E2D\u0E32\u0E15\u0E4C",date:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",start:"\u0E40\u0E27\u0E25\u0E32\u0E40\u0E02\u0E49\u0E32\u0E1E\u0E31\u0E01",hours:"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E0A\u0E31\u0E48\u0E27\u0E42\u0E21\u0E07",hourN:"{n} \u0E0A\u0E21.",guests:"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E02\u0E49\u0E32\u0E1E\u0E31\u0E01",rooms:"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2B\u0E49\u0E2D\u0E07",total:"\u0E23\u0E32\u0E04\u0E32\u0E42\u0E14\u0E22\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13",nights:"{n} \u0E04\u0E37\u0E19",perNight:"{price}/\u0E04\u0E37\u0E19",firstHours:"{n} \u0E0A\u0E21.\u0E41\u0E23\u0E01 {price}",extraHour:"\u0E0A\u0E21.\u0E15\u0E48\u0E2D\u0E44\u0E1B {price}",peak:"\u0E04\u0E48\u0E32\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E17\u0E28\u0E01\u0E32\u0E25",note:"\u0E40\u0E23\u0E32\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2B\u0E49\u0E2D\u0E07\u0E27\u0E48\u0E32\u0E07\u0E20\u0E32\u0E22\u0E43\u0E19 15 \u0E19\u0E32\u0E17\u0E35\u0E17\u0E32\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",invalid:"\u0E27\u0E31\u0E19\u0E40\u0E0A\u0E47\u0E01\u0E40\u0E2D\u0E32\u0E15\u0E4C\u0E15\u0E49\u0E2D\u0E07\u0E2B\u0E25\u0E31\u0E07\u0E27\u0E31\u0E19\u0E40\u0E0A\u0E47\u0E01\u0E2D\u0E34\u0E19",all:"\u0E17\u0E38\u0E01\u0E04\u0E37\u0E19",from:"\u0E40\u0E23\u0E34\u0E48\u0E21 {price}",unitDay:"{n} \u0E27\u0E31\u0E19",perDay:"{price}/\u0E27\u0E31\u0E19",pickup:"\u0E27\u0E31\u0E19\u0E23\u0E31\u0E1A",dropoff:"\u0E27\u0E31\u0E19\u0E04\u0E37\u0E19"},id:{room:"Tipe kamar",mode:"Jenis menginap",night:"Menginap",hour:"Per jam (transit)",checkIn:"Check-in",checkOut:"Check-out",date:"Tanggal",start:"Jam datang",hours:"Jumlah jam",hourN:"{n} jam",guests:"Jumlah tamu",rooms:"Jumlah kamar",total:"Perkiraan total",nights:"{n} malam",perNight:"{price}/malam",firstHours:"{n} jam pertama {price}",extraHour:"+{price}/jam tambahan",peak:"Biaya musim ramai",note:"Ketersediaan kamar dikonfirmasi lewat pesan dalam 15 menit.",invalid:"Check-out harus setelah check-in.",all:"Setiap malam",from:"Mulai {price}",unitDay:"{n} hari",perDay:"{price}/hari",pickup:"Tanggal ambil",dropoff:"Tanggal kembali"},es:{room:"Tipo de habitaci\xF3n",mode:"Tipo de estancia",night:"Por noches",hour:"Por horas",checkIn:"Entrada",checkOut:"Salida",date:"Fecha",start:"Hora de llegada",hours:"Horas",hourN:"{n} h",guests:"Hu\xE9spedes",rooms:"Habitaciones",total:"Total estimado",nights:"{n} noches",perNight:"{price}/noche",firstHours:"primeras {n} h {price}",extraHour:"+{price}/hora extra",peak:"Suplemento",note:"Confirmamos la disponibilidad en 15 minutos por mensaje.",invalid:"La salida debe ser posterior a la entrada.",all:"Todas las noches",from:"Desde {price}",unitDay:"{n} d\xEDas",perDay:"{price}/d\xEDa",pickup:"Recogida",dropoff:"Devoluci\xF3n"},fr:{room:"Type de chambre",mode:"Type de s\xE9jour",night:"Nuit\xE9e",hour:"En journ\xE9e (\xE0 l\u2019heure)",checkIn:"Arriv\xE9e",checkOut:"D\xE9part",date:"Date",start:"Heure d\u2019arriv\xE9e",hours:"Heures",hourN:"{n} h",guests:"Personnes",rooms:"Chambres",total:"Total estim\xE9",nights:"{n} nuits",perNight:"{price}/nuit",firstHours:"{n} premi\xE8res h {price}",extraHour:"+{price}/heure en plus",peak:"Suppl\xE9ment",note:"Nous confirmons la disponibilit\xE9 sous 15 minutes par message.",invalid:"Le d\xE9part doit \xEAtre apr\xE8s l\u2019arriv\xE9e.",all:"Toutes les nuits",from:"D\xE8s {price}",unitDay:"{n} jours",perDay:"{price}/jour",pickup:"Retrait",dropoff:"Retour"},de:{room:"Zimmertyp",mode:"Aufenthalt",night:"\xDCbernachtung",hour:"Tageszimmer (stundenweise)",checkIn:"Anreise",checkOut:"Abreise",date:"Datum",start:"Ankunftszeit",hours:"Stunden",hourN:"{n} Std.",guests:"G\xE4ste",rooms:"Zimmer",total:"Gesch\xE4tzter Preis",nights:"{n} N\xE4chte",perNight:"{price}/Nacht",firstHours:"erste {n} Std. {price}",extraHour:"+{price}/weitere Std.",peak:"Saisonaufschlag",note:"Wir best\xE4tigen die Verf\xFCgbarkeit innerhalb von 15 Minuten per Nachricht.",invalid:"Die Abreise muss nach der Anreise liegen.",all:"Jede Nacht",from:"Ab {price}",unitDay:"{n} Tage",perDay:"{price}/Tag",pickup:"Abholung",dropoff:"R\xFCckgabe"},pt:{room:"Tipo de quarto",mode:"Tipo de estadia",night:"Pernoite",hour:"Por hora",checkIn:"Check-in",checkOut:"Check-out",date:"Data",start:"Hor\xE1rio de chegada",hours:"Horas",hourN:"{n} h",guests:"H\xF3spedes",rooms:"Quartos",total:"Total estimado",nights:"{n} noites",perNight:"{price}/noite",firstHours:"primeiras {n} h {price}",extraHour:"+{price}/hora extra",peak:"Adicional de temporada",note:"Confirmamos a disponibilidade em 15 minutos por mensagem.",invalid:"O check-out deve ser depois do check-in.",all:"Todas as noites",from:"A partir de {price}",unitDay:"{n} dias",perDay:"{price}/dia",pickup:"Retirada",dropoff:"Devolu\xE7\xE3o"},ru:{room:"\u0422\u0438\u043F \u043D\u043E\u043C\u0435\u0440\u0430",mode:"\u0424\u043E\u0440\u043C\u0430\u0442",night:"\u0421 \u043D\u043E\u0447\u0451\u0432\u043A\u043E\u0439",hour:"\u041F\u043E\u0447\u0430\u0441\u043E\u0432\u043E",checkIn:"\u0417\u0430\u0435\u0437\u0434",checkOut:"\u0412\u044B\u0435\u0437\u0434",date:"\u0414\u0430\u0442\u0430",start:"\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u0438\u0435\u0437\u0434\u0430",hours:"\u0427\u0430\u0441\u043E\u0432",hourN:"{n} \u0447",guests:"\u0413\u043E\u0441\u0442\u0435\u0439",rooms:"\u041D\u043E\u043C\u0435\u0440\u043E\u0432",total:"\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E",nights:"{n} \u043D\u043E\u0447.",perNight:"{price}/\u043D\u043E\u0447\u044C",firstHours:"\u043F\u0435\u0440\u0432\u044B\u0435 {n} \u0447 {price}",extraHour:"+{price}/\u0434\u043E\u043F. \u0447\u0430\u0441",peak:"\u041D\u0430\u0434\u0431\u0430\u0432\u043A\u0430",note:"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043C \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u043E\u043C\u0435\u0440\u0430 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 15 \u043C\u0438\u043D\u0443\u0442 \u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0438.",invalid:"\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043F\u043E\u0437\u0436\u0435 \u0434\u0430\u0442\u044B \u0437\u0430\u0435\u0437\u0434\u0430.",all:"\u041A\u0430\u0436\u0434\u0443\u044E \u043D\u043E\u0447\u044C",from:"\u041E\u0442 {price}",unitDay:"{n} \u0434\u043D.",perDay:"{price}/\u0441\u0443\u0442\u043A\u0438",pickup:"\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435",dropoff:"\u0412\u043E\u0437\u0432\u0440\u0430\u0442"}},D=(e,a={})=>({...W[e]??W.en,...a.stays??{}});function $(e,a){return(e.products??[]).map(n=>{let i=(n.variants??[]).map(l=>({...l,price:w(l,a)})).filter(l=>l.price!=null),r=n.hourly&&w(n.hourly,a)!=null?{hours:n.hourly.firstHours??n.hourly.hours??2,price:w(n.hourly,a),extra:n.hourly.extra?w(n.hourly.extra,a)??0:0}:null;return{...n,rates:i,hourlyRate:r}}).filter(n=>n.rates.length)}var M=e=>{let a=/^(\d{1,2}):(\d{2})$/.exec(String(e??""));return a?+a[1]*60+ +a[2]:0};function _({site:e,catalog:a,market:n,lang:i,t:r,L:l}){let o=e.stays??{},s=new Intl.NumberFormat(v(i),{style:"currency",currency:n.currency});return{rooms:$(a,n).map(c=>({id:c.id,name:l(c.name),guests:c.facts?.guests??2,rates:c.rates.map(d=>({label:l(d.label),days:(d.days??[]).map(Number),price:d.price})),hourly:c.hourlyRate})),peaks:(o.peaks??[]).filter(c=>c?.start&&c?.end).map(c=>({label:l(c.label),start:c.start,end:c.end,percent:+c.percent||0})),unit:o.unit??"night",hourly:!!o.hourly,from:M(o.hourlyFrom??"08:00"),to:M(o.hourlyTo??"22:00")||1440,maxHours:o.maxHours??6,maxNights:o.maxNights??30,tz:e.timezone??"Asia/Ho_Chi_Minh",money:{locale:v(i),currency:n.currency,max:s.resolvedOptions().maximumFractionDigits??0},text:D(i,r)}}var de=e=>`${String(Math.floor(e/60)%24).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`;function J(e,{site:a,lang:n,t:i,L:r,money:l}){let o=D(n,i),s=d=>(a?.stays?.unit==="day"?o.perDay:o.perNight).replace("{price}",l(d)),c=e.rates.map(d=>({label:r(d.label),value:s(d.price)}));return e.hourlyRate&&c.push({label:o.hour,value:`${o.firstHours.replace("{n}",e.hourlyRate.hours).replace("{price}",l(e.hourlyRate.price))}${e.hourlyRate.extra?`, ${o.extraHour.replace("{price}",l(e.hourlyRate.extra))}`:""}`}),c}function K({site:e,catalog:a,market:n,lang:i,t:r,L:l}){let o=D(i,r),s=e.stays??{},c=$(a,n),d=s.hourly&&c.some(p=>p.hourlyRate),m=M(s.hourlyFrom??"08:00"),h=M(s.hourlyTo??"22:00")||1440,g=[];for(let p=m;p<h;p+=30)g.push(de(p));let f=[];for(let p=1;p<=(s.maxHours??6);p++)f.push(p);let y=s.unit==="day";return`<div class="stay-fields">
  <label class="field"><span>${t(o.room)}</span><select name="room" data-stay-room>${c.map(p=>`<option value="${t(p.id)}">${t(l(p.name))}</option>`).join("")}</select></label>
  ${d?`<div class="stay-mode" role="radiogroup" aria-label="${t(o.mode)}"><label class="seg"><input type="radio" name="mode" value="night" checked data-stay-mode> <span>${t(o.night)}</span></label><label class="seg"><input type="radio" name="mode" value="hour" data-stay-mode> <span>${t(o.hour)}</span></label></div>`:""}
  <div class="row2" data-stay-nights>
    <label class="field"><span>${t(y?o.pickup:o.checkIn)}</span><input type="date" name="in" data-stay-in></label>
    <label class="field"><span>${t(y?o.dropoff:o.checkOut)}</span><input type="date" name="out" data-stay-out></label>
  </div>
  ${d?`<div class="row3" data-stay-hours hidden>
    <label class="field"><span>${t(o.date)}</span><input type="date" name="hday" data-stay-hday></label>
    <label class="field"><span>${t(o.start)}</span><select name="hstart" data-stay-hstart>${g.map(p=>`<option${p==="14:00"?" selected":""}>${p}</option>`).join("")}</select></label>
    <label class="field"><span>${t(o.hours)}</span><select name="hcount" data-stay-hcount>${f.map(p=>`<option value="${p}"${p===2?" selected":""}>${t(o.hourN.replace("{n}",p))}</option>`).join("")}</select></label>
  </div>`:""}
  <div class="row2">
    <label class="field"><span>${t(o.guests)}</span><select name="guests" data-stay-guests>${[1,2,3,4,5,6].map(p=>`<option${p===2?" selected":""}>${p}</option>`).join("")}</select></label>
    <label class="field"><span>${t(o.rooms)}</span><select name="roomcount" data-stay-count>${[1,2,3,4,5].map(p=>`<option>${p}</option>`).join("")}</select></label>
  </div>
  <div class="stay-total" aria-live="polite"><p class="stay-sum"><span>${t(o.total)}</span> <b data-stay-sum>\u2014</b></p><p class="stay-break" data-stay-break></p><p class="stay-warn" data-stay-warn hidden>${t(o.invalid)}</p><p class="stay-note">${t(x(s.note,i,"en")||o.note)}</p></div>
  <input type="hidden" name="product"><input type="hidden" name="date"><input type="hidden" name="price"><input type="hidden" name="size">
</div>`}var X=`(function(){
Array.prototype.forEach.call(document.querySelectorAll('form[data-stays]'),function(f){
var D=JSON.parse(f.getAttribute('data-stays')),X=D.text,q=function(s){return f.querySelector(s)};
var money=function(n){try{return new Intl.NumberFormat(D.money.locale,{style:'currency',currency:D.money.currency,maximumFractionDigits:D.money.max||0}).format(n)}catch(e){return String(n)}};
var o={};new Intl.DateTimeFormat('en-US',{timeZone:D.tz,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).forEach(function(p){o[p.type]=p.value});
var today=o.year+'-'+o.month+'-'+o.day;
var U=function(s){var p=s.split('-');return Date.UTC(+p[0],+p[1]-1,+p[2])};
var iso=function(t){var d=new Date(t);return d.getUTCFullYear()+'-'+String(d.getUTCMonth()+1).padStart(2,'0')+'-'+String(d.getUTCDate()).padStart(2,'0')};
var fin=q('[data-stay-in]'),fout=q('[data-stay-out]'),hday=q('[data-stay-hday]');
fin.min=today;fin.value=fin.value||today;fout.min=iso(U(today)+864e5);fout.value=fout.value||iso(U(fin.value)+864e5);if(hday){hday.min=today;hday.value=hday.value||today}
var df=new Intl.DateTimeFormat(D.money.locale,{weekday:'short',day:'numeric',month:'numeric',timeZone:'UTC'});
var nf=new Intl.NumberFormat(D.money.locale);
function calc(){
var r=D.rooms.filter(function(x){return x.id===q('[data-stay-room]').value})[0]||D.rooms[0];if(!r)return;
var m=f.querySelector('[data-stay-mode]:checked'),hourly=m&&m.value==='hour'&&r.hourly;
var modeBox=q('.stay-mode');if(modeBox){var hr=modeBox.querySelector('[value=hour]');hr.disabled=!r.hourly;if(!r.hourly&&m&&m.value==='hour'){modeBox.querySelector('[value=night]').checked=true;hourly=false}}
q('[data-stay-nights]').hidden=!!hourly;var hb=q('[data-stay-hours]');if(hb)hb.hidden=!hourly;
var rooms=+q('[data-stay-count]').value,g=q('[data-stay-guests]').value,sum=0,brk=[],date='',size='',bad=false;
if(hourly){var h=+q('[data-stay-hcount]').value,st=q('[data-stay-hstart]').value;
sum=r.hourly.price+Math.max(0,h-r.hourly.hours)*r.hourly.extra;
brk.push(X.firstHours.replace('{n}',r.hourly.hours).replace('{price}',money(r.hourly.price))+(h>r.hourly.hours?' + '+(h-r.hourly.hours)+' \xD7 '+money(r.hourly.extra):''));
date=df.format(U(hday.value))+' \xB7 '+st+' \xB7 '+X.hourN.replace('{n}',h);size=X.hour+' \xB7 '+X.hourN.replace('{n}',h);
}else{
if(U(fout.value)<=U(fin.value)){fout.value=iso(U(fin.value)+864e5)}
var a=U(fin.value),b=U(fout.value),n=Math.round((b-a)/864e5);bad=n<1;n=Math.min(Math.max(n,1),D.maxNights);
var by={},order=[],pk=0;
for(var i=0;i<n;i++){var t=a+i*864e5,wd=new Date(t).getUTCDay(),ds=iso(t);
var rt=r.rates.filter(function(x){return x.days.length&&x.days.indexOf(wd)>=0})[0]||r.rates.filter(function(x){return !x.days.length})[0]||r.rates[0];
var p=rt.price;D.peaks.forEach(function(z){if(ds>=z.start&&ds<=z.end){var add=Math.round(rt.price*z.percent/100);p+=add;pk+=add}});
sum+=p;if(!by[rt.label]){by[rt.label]={n:0,p:rt.price};order.push(rt.label)}by[rt.label].n++}
brk=order.map(function(k){return k+': '+X.nights.replace('{n}',by[k].n)+' \xD7 '+money(by[k].p)});if(pk)brk.push(X.peak+' +'+money(pk));
var unit=D.unit==='day'?X.unitDay:X.nights;
date=df.format(a)+' \u2192 '+df.format(b)+' \xB7 '+unit.replace('{n}',n);size=unit.replace('{n}',n);
}
sum*=rooms;if(rooms>1)brk.push('\xD7 '+rooms);
q('[data-stay-sum]').textContent=money(sum);q('[data-stay-break]').textContent=brk.join(' \xB7 ');q('[data-stay-warn]').hidden=!bad;
f.querySelector('[name=product]').value=r.name;f.querySelector('[name=date]').value=date;f.querySelector('[name=price]').value=money(sum);
f.querySelector('[name=size]').value=[size,X.guests+': '+g,rooms>1?X.rooms+': '+rooms:''].filter(Boolean).join(' \xB7 ');
}
f.addEventListener('change',function(e){if(e.target===fin){fout.min=iso(U(fin.value)+864e5)}calc()});f.addEventListener('input',calc);calc();
f.kpStayCalc=calc;
});
})();`;var ue="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@500;600&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",Z=10;function Ve({site:e,catalog:a,i18n:n,template:i,basePath:r="/",siteUrl:l=e.domain}){let o=j(r),s=g=>new URL(o(g),l).href,c=a.markets,d=q(e.bookingForm),m=d&&!d.error?d:null,h=c.map(g=>{let f=g.lang,y=n[f]??n.en??n.vi,p=N=>x(N,f,"en"),Y=e.bookingChannels?.[g.id]??["phone"],Q={site:e,catalog:a,market:g,markets:c,lang:f,t:y,L:p,url:o,abs:s,channels:Y,money:N=>C(N,g),template:i,gform:m};return{path:`${g.id}/index.html`,html:he(Q)}});return h.push({path:"index.html",html:V({site:e,markets:c,url:o,abs:s})}),h}var z=(e,a)=>e.heroImage?k(a,e.heroImage):a("assets/photos/hero.webp");function he(e){let{site:a,market:n,markets:i,lang:r,t:l,L:o,url:s,abs:c}=e,d=`${a.name} \xB7 ${o(a.tagline)}`,m=a.theme??{},h=["primary","ink","bg","surface","soft","accent"].filter(p=>m[p]).map(p=>`--${p}:${m[p]}`).join(";"),g=i.find(p=>p.default)??i[0],f=i.map(p=>({id:p.id,lang:p.lang,country:p.country,currency:p.currency,href:s(`${p.id}/`)})),y=a.contact??{};return`<!doctype html>
<html lang="${t(r)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${t(d)}</title>
<meta name="description" content="${t(o(a.intro))}">
<link rel="canonical" href="${c(`${n.id}/`)}">
${i.map(p=>`<link rel="alternate" hreflang="${t(p.lang)}-${t(p.country)}" href="${c(`${p.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${c(`${g.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${t(d)}">
<meta property="og:description" content="${t(o(a.intro))}">
<meta property="og:url" content="${c(`${n.id}/`)}">
<meta property="og:site_name" content="${t(a.name)}">
<meta property="og:image" content="${t(new URL(z(a,s),c("")).href)}">
<meta name="theme-color" content="${t(m.bg??"#F7F5F0")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${ue}">
<link rel="stylesheet" href="${s("assets/style.css")}">
<style>:root{${h}}</style>
<noscript><style>.album .more{display:block}.album-more{display:none}</style></noscript>
${R(Me(e))}
<script src="${s("assets/site.js")}" defer><\/script>
</head>
<body data-market="${t(n.id)}" data-markets='${t(JSON.stringify(f))}' data-wa="${t(b(y.whatsapp))}" data-email="${t(y.email??"")}" data-copied="${t(l.booking.copied)}">
<a class="skip" href="#main">${t(l.skip)}</a>
${O(l)}
${me(e)}
<main id="main">
${ge(e)}
${fe(e)}
${ye(e)}
${be(e)}
${ve(e)}
${ke(e)}
${$e(e)}
${xe(e)}
${we(e)}
${De(e)}
</main>
${Se(e)}
<nav class="dock" aria-label="${t(l.nav.book)}">
  <a href="${t(T(e.channels[0],y))}" ${L(e.channels[0])}>${u(e.channels[0],20)}<span>${t(l.via[e.channels[0]]??"")}</span></a>
  <a class="primary" href="#booking">${u("bed",20)}<span>${t(l.nav.book)}</span></a>
</nav>
<script>${X}<\/script>
</body>
</html>
`}function me({site:e,market:a,markets:n,t:i,url:r}){let l=[["#rooms",i.nav.rooms],["#amenities",i.nav.amenities],["#rules",i.nav.rules],["#visit",i.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${r(`${a.id}/`)}">
      ${e.logo?`<img src="${t(k(r,e.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${t((e.name??"H").replace(/^(khách sạn|hotel)\s+/i,"").trim()[0]??"H")}</span>`}
      <span>${t(e.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${l.map(([o,s])=>`<a href="${o}">${t(s)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${n.length>1?`<details class="market">
        <summary aria-label="${t(i.market.label)}">${u("globe",18)}<span>${t(a.id.toUpperCase())}<span class="cur"> \xB7 ${t(E(a))}</span></span></summary>
        <ul>${n.map(o=>`<li><a href="${r(`${o.id}/`)}" hreflang="${t(o.lang)}"${o.id===a.id?' aria-current="true"':""}>${t(o.country)} \xB7 ${t(o.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-md" href="#booking">${t(i.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${t(i.nav.openMenu)}">${u("menu",22)}</summary>
        <nav aria-label="Menu">${[...l,["#booking",i.nav.book]].map(([o,s])=>`<a href="${o}">${t(s)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function ge(e){let{site:a,t:n,L:i,url:r,catalog:l,market:o,money:s,lang:c}=e,d=$(l,o),m=Math.min(...d.flatMap(g=>g.rates.map(f=>f.price))),h=D(c,n);return`<section class="hero">
  <img class="hero-bg" src="${t(z(a,r))}" alt="" width="1600" height="1000" fetchpriority="high">
  <div class="wrap hero-inner">
    ${i(a.place)?`<p class="eyebrow">${t(i(a.place))}</p>`:""}
    <h1>${t(i(a.tagline))}</h1>
    ${i(a.intro)?`<p class="lead">${t(i(a.intro))}</p>`:""}
    <div class="actions">
      <a class="btn btn--primary btn--lg" href="#booking">${u("calendar",18)} ${t(n.hero.book)}</a>
      ${Number.isFinite(m)?`<span class="price-chip">${t(h.from.replace("{price}",h.perNight.replace("{price}",s(m))))}</span>`:""}
    </div>
  </div>
</section>`}function fe({site:e,t:a,L:n}){let i=(e.perks??[]).filter(r=>n(r?.title));return i.length?`<section class="perks-wrap" aria-label="${t(a.perks)}">
  <ul class="wrap perks">${i.map(r=>`<li><span class="pi">${u(r.icon||"check",20)}</span><div><strong>${t(n(r.title))}</strong>${n(r.text)?`<span>${t(n(r.text))}</span>`:""}</div></li>`).join("")}</ul>
</section>`:""}function ye(e){let{t:a,L:n,url:i,catalog:r,market:l}=e,o=$(r,l);return o.length?`<section class="section" id="rooms" aria-labelledby="rooms-title">
  <div class="wrap">
    <div class="head"><p class="kicker">${t(a.rooms.kicker)}</p><h2 id="rooms-title" class="h2">${t(a.rooms.title)}</h2></div>
    <div class="rooms">${o.map(s=>{let c=s.facts??{},d=[c.guests?[u("users",16),a.rooms.guests.replace("{n}",c.guests)]:null,n(c.bed)?[u("bed",16),n(c.bed)]:null,c.size?[u("ruler",16),`${c.size} m\xB2`]:null,n(c.view)?[u("sun",16),n(c.view)]:null].filter(Boolean);return`<article class="room">
      ${s.image?`<img sizes="${P.wide}" src="${t(k(i,s.image))}" alt="${t(n(s.name))}" width="1000" height="700" loading="lazy">`:""}
      <div class="room-body">
        <h3>${t(n(s.name))}</h3>
        ${d.length?`<ul class="facts">${d.map(([m,h])=>`<li>${m} ${t(h)}</li>`).join("")}</ul>`:""}
        ${n(s.description)?`<p class="muted">${t(n(s.description))}</p>`:""}
        <dl class="rates">${J(s,e).map(m=>`<div><dt>${t(m.label)}</dt><dd>${t(m.value)}</dd></div>`).join("")}</dl>
        <a class="btn btn--line" href="#booking" data-room="${t(s.id)}">${t(a.rooms.book)}</a>
      </div>
    </article>`}).join("")}</div>
  </div>
</section>`:""}function be(e){let{site:a,t:n,L:i,channels:r,gform:l,lang:o}=e,s=n.booking,c=a.contact??{},d=l?` data-gform="${t(l.action)}" data-gmap='${t(JSON.stringify(l.fields))}'`:"",m=r.map((h,g)=>`<button type="button" class="btn ${g===0?"btn--primary":"btn--line"}" data-channel="${t(h)}" data-href="${t(T(h,c,""))}">${u(h,18)} ${t(n.via[h]??h)}</button>`).join("");return`<section class="section section--deep" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="book-copy">
      <p class="kicker">${t(s.kicker)}</p>
      <h2 id="book-title" class="h2">${t(s.heading)}</h2>
      <p class="lead">${t(s.text)}</p>
      <ul class="book-list">${s.points.map(h=>`<li>${u("check",18)} ${t(h)}</li>`).join("")}</ul>
    </div>
    <form class="card form" data-book data-stays='${t(JSON.stringify(_(e)))}' novalidate${d} data-order-text="${t(s.message)}">
      <div class="book-fields">
        <h3 class="form-h">${t(s.title)}</h3>
        ${K(e)}
        <div class="row2">
          <label class="field"><span>${t(s.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${t(s.phone)} *</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" required maxlength="20"></label>
        </div>
        <label class="field"><span>${t(s.note)}</span><input name="note" maxlength="200" placeholder="${t(s.noteHint)}"></label>
        ${a.invoice!==!1?`<label class="check"><input type="checkbox" name="invoice" data-invoice> <span>${t(s.invoice)}</span></label>
        <div class="row2" data-invoice-box hidden>
          <label class="field"><span>${t(s.company)}</span><input name="company" maxlength="120"></label>
          <label class="field"><span>${t(s.taxId)}</span><input name="taxid" maxlength="30"></label>
        </div>`:""}
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${t(s.required)}</p>
        <button class="btn btn--primary btn--lg" type="submit" data-submit data-sending="${t(s.sending)}">${u("bed",18)} ${t(s.submit)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${u(l?"check":"arrow",22)} ${t(l?s.done:s.stepTitle)}</p>
        <p>${t(l?s.doneText:s.stepText)}</p>
        ${l?"":`<div class="buy">${m}</div><button type="button" class="link" data-edit>${t(s.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function ve({site:e,t:a,L:n}){let i=(e.amenities??[]).filter(r=>n(r?.label));return i.length?`<section class="section section--soft" id="amenities" aria-labelledby="am-title">
  <div class="wrap">
    <h2 id="am-title" class="h2">${t(a.amenities)}</h2>
    <ul class="amen">${i.map(r=>`<li><span class="ai">${u(r.icon||"check",22)}</span>${t(n(r.label))}</li>`).join("")}</ul>
  </div>
</section>`:""}function ke({site:e,t:a,L:n,lang:i}){let r=e.rules??{},l=(Array.isArray(r.list)?r.list:r.list?.[i]??r.list?.en??r.list?.vi??[]).map(s=>typeof s=="string"?s:n(s)).filter(Boolean),o=(e.around??[]).filter(s=>n(s?.name));return!r.checkIn&&!l.length&&!o.length?"":`<section class="section" id="rules" aria-labelledby="rules-title">
  <div class="wrap rules">
    <div>
      <h2 id="rules-title" class="h2">${t(a.rules.title)}</h2>
      ${r.checkIn||r.checkOut?`<div class="times"><p><span>${t(a.rules.checkIn)}</span><b>${t(r.checkIn??"")}</b></p><p><span>${t(a.rules.checkOut)}</span><b>${t(r.checkOut??"")}</b></p></div>`:""}
      ${l.length?`<ul class="rule-list">${l.map(s=>`<li>${u("check",16)} ${t(s)}</li>`).join("")}</ul>`:""}
    </div>
    ${o.length?`<div class="around"><h3>${t(a.rules.around)}</h3><ul>${o.map(s=>`<li><span>${t(n(s.name))}</span><b>${t(n(s.distance))}</b></li>`).join("")}</ul></div>`:""}
  </div>
</section>`}function $e({site:e,t:a,url:n}){let i=(e.album??[]).filter(r=>r?.image);return i.length?`<section class="section section--soft" aria-labelledby="al-title">
  <div class="wrap">
    <h2 id="al-title" class="h2">${t(a.album.title)}</h2>
    <div class="album">${i.map((r,l)=>`<a class="ph${l>=Z?" more":""}${l%5===0?" big":""}" href="${t(k(n,r.image))}" target="_blank" rel="noopener"><img sizes="${P.card}" src="${t(k(n,r.image))}" alt="${t(`${e.name} ${l+1}`)}" width="800" height="600" loading="lazy"></a>`).join("")}</div>
    ${i.length>Z?`<p class="center"><button type="button" class="btn btn--line album-more" data-album-more>${t(a.album.more)}</button></p>`:""}
  </div>
</section>`:""}function xe({site:e,t:a,L:n,lang:i}){let r=A(e,a,i,"btn btn--line"),l=B(e);return e.showReviews===!1||!l.length&&!r?"":`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${t(a.reviews)}</h2>
    ${U(l,i,"quotes",o=>`<figure class="quote">
      ${o.rating?`<div class="stars" aria-label="${o.rating}/5">${Array.from({length:5},(s,c)=>`<span class="${c<o.rating?"on":""}">${u("star",16)}</span>`).join("")}</div>`:""}
      <blockquote>${t(n(o.text))}</blockquote>
      <figcaption><strong>${t(o.name)}</strong>${o.bought?` \xB7 ${t(n(o.bought))}`:""}${I(o,i)}</figcaption>
    </figure>`)}${r}
  </div>
</section>`}function we({site:e,t:a,L:n}){let i=e.contact??{},r=encodeURIComponent(i.mapQuery??n(i.address));return`<section class="section section--soft" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${t(a.visit.title)}</h2>
      <p class="status is-open">${t(a.visit.desk)}</p>
      ${n(i.address)?`<p class="addr">${u("pin",18)} ${t(n(i.address))}</p>`:""}
      ${n(e.directions)?`<p class="addr">${u("car",18)} ${t(n(e.directions))}</p>`:""}
      ${i.phone?`<p class="addr">${u("phone",18)} <a href="tel:${b(i.phone)}">${t(i.phone)}</a></p>`:""}
      <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${r}" target="_blank" rel="noopener">${t(a.visit.directions)} ${u("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${t(a.visit.title)}" src="https://www.google.com/maps?q=${r}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function De({site:e,t:a,L:n}){let i=(e.faq??[]).filter(r=>n(r?.q));return i.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap narrow">
    <h2 id="faq-title" class="h2">${t(a.faq.title)}</h2>
    <div class="qa">${i.map((r,l)=>`<details${l===0?" open":""}><summary>${t(n(r.q))}</summary><p>${t(n(r.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function Se({site:e,t:a,L:n,market:i}){let r=e.contact??{},l=Object.entries(e.social??{}).filter(([,o])=>o);return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${t(e.name)}</p><p class="muted">${t(n(e.tagline))}</p></div>
    <div><p class="foot-h">${t(a.footer.contact)}</p><ul>
      ${r.phone?`<li><a href="tel:${b(r.phone)}">${t(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${t(r.email)}">${t(r.email)}</a></li>`:""}
      ${n(r.address)?`<li>${t(n(r.address))}</li>`:""}</ul></div>
    ${l.length?`<div><p class="foot-h">${t(a.footer.follow)}</p><ul>${l.map(([o,s])=>`<li><a href="${t(s)}" target="_blank" rel="noopener">${t(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom${e.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${t(e.name)}</span>${G(e,a,i.lang)}</div>
</footer>`}function Me({site:e,market:a,L:n,abs:i,url:r,catalog:l}){let o=e.contact??{},s=e.rules??{};return{"@context":"https://schema.org","@type":"Hotel",name:e.name,url:i(`${a.id}/`),description:n(e.intro),image:new URL(z(e,r),i("")).href,telephone:o.phone,email:o.email,address:{"@type":"PostalAddress",streetAddress:n(o.address)},checkinTime:s.checkIn,checkoutTime:s.checkOut,currenciesAccepted:a.currency,amenityFeature:(e.amenities??[]).filter(c=>n(c?.label)).map(c=>({"@type":"LocationFeatureSpecification",name:n(c.label),value:!0})),makesOffer:$(l,a).map(c=>({"@type":"Offer",name:n(c.name),priceSpecification:{"@type":"UnitPriceSpecification",price:Math.min(...c.rates.map(d=>d.price)),priceCurrency:a.currency,unitCode:"DAY"},itemOffered:{"@type":"HotelRoom",name:n(c.name),description:n(c.description)||n(c.name),occupancy:c.facts?.guests?{"@type":"QuantitativeValue",maxValue:c.facts.guests}:void 0}}))}}export{Ve as renderSite};
