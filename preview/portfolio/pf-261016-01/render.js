var O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(n="")=>String(n).replace(/[&<>"']/g,t=>O[t]);function w(n,t,a="vi"){return n==null?"":typeof n!="object"?String(n):n[t]??n[a]??Object.values(n)[0]??""}function D(n="/"){let t=n.endsWith("/")?n:`${n}/`;return(a="")=>t+String(a).replace(/^\//,"")}var V=(n="")=>n.startsWith("uploads/")?n:/^([a-z]+:|\/)/i.test(n)?null:`assets/${n}`,y=(n,t)=>{let a=V(t);return a==null?t:n(a)},b=(n="")=>String(n).replace(/\D/g,"");function S(n,t,a=""){switch(n){case"phone":return`tel:${b(t.phone)}`;case"zalo":return`https://zalo.me/${b(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${b(t.whatsapp)}${a?`?text=${encodeURIComponent(a)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${a?`?subject=${encodeURIComponent(a)}`:""}`;default:return"#"}}var N=n=>`<script type="application/ld+json">${JSON.stringify(n).replace(/</g,"\\u003c")}<\/script>`,I=["name","phone","product","size","color","version","price","qty","date","address","note","page","market"];function P(n){if(!n||typeof n!="string")return null;let t;try{t=new URL(n.trim())}catch{return{error:"not-google"}}if(t.hostname==="forms.gle")return{error:"short-link"};let a=t.hostname==="docs.google.com"&&t.pathname.match(/^\/forms\/(?:u\/\d+\/)?d\/e\/([\w-]+)\//);if(!a)return{error:"not-google"};let l={};for(let[s,o]of t.searchParams){if(!/^entry\.\d+$/.test(s))continue;let r=o.trim().replace(/^\{|\}$/g,"").toLowerCase();I.includes(r)&&(l[r]=s)}return Object.keys(l).length?l.phone?{action:`https://docs.google.com/forms/d/e/${a[1]}/formResponse`,fields:l}:{error:"no-phone"}:{error:"no-fields"}}var U={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>',wifi:'<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',bed:'<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',wave:'<path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M8 13V5a2 2 0 0 1 4 0M16 13V5a2 2 0 0 0-4 0"/>',car:'<path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM5 11h14"/><circle cx="7.5" cy="16" r="1"/><circle cx="16.5" cy="16" r="1"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',ruler:'<path d="M3 17 17 3l4 4L7 21zM7 13l2 2M10 10l2 2M13 7l2 2"/>',heart:'<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5M8 7h8"/>',chat:'<path d="M4 5h16v11h-9l-5 4v-4H4z"/><path d="M8 9.5h8M8 12.5h5"/>',cap:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v6"/>',paw:'<circle cx="6" cy="10" r="2"/><circle cx="10" cy="6" r="2"/><circle cx="14" cy="6" r="2"/><circle cx="18" cy="10" r="2"/><path d="M12 12c-3 0-6 4-6 6.5S8 21 12 19.5 18 21 18 18.5 15 12 12 12z"/>',scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5 20 18M8.5 16.5 20 6"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',dumbbell:'<path d="M6.5 6.5v11M17.5 6.5v11M3 9.5v5M21 9.5v5M6.5 12h11"/>',lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',flame:'<path d="M12 22c4 0 7-2.7 7-6.7 0-3.6-2.6-6-4.4-8.3-.6 1.9-1.6 3-3.1 3.6C12.6 7.4 11.6 4.3 9 2c0 4-5 6.5-5 13.3C4 19.3 8 22 12 22z"/>',drop2:'<path d="M12 3s6 6.6 6 11a6 6 0 0 1-12 0c0-4.4 6-11 6-11z"/>',share:'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',facebook:'<path d="M15.5 3H14a4 4 0 0 0-4 4v14M6.5 10.5h8"/>'},h=(n,t=20,a="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${a}>${U[n]??""}</svg>`;var j={vi:"\u0110\xE1nh gi\xE1 ch\xFAng t\xF4i tr\xEAn Google",en:"Review us on Google",ja:"Google\u3067\u30EC\u30D3\u30E5\u30FC\u3092\u66F8\u304F",ko:"Google\uC5D0 \uD6C4\uAE30 \uB0A8\uAE30\uAE30",zh:"\u5728 Google \u4E0A\u8BC4\u4EF7\u6211\u4EEC",th:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E40\u0E23\u0E32\u0E1A\u0E19 Google",id:"Beri ulasan di Google",es:"Opina sobre nosotros en Google",fr:"Donnez votre avis sur Google",de:"Bewerten Sie uns bei Google",pt:"Avalie-nos no Google",ru:"\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0432 Google"},H=/^(?:g\.page|g\.co|goo\.gl|maps\.app\.goo\.gl|(?:[a-z0-9-]+\.)*google\.[a-z.]{2,6})$/i,W=n=>{try{let t=new URL(String(n.googleReview??"").trim());return t.protocol==="https:"&&H.test(t.hostname)?t.href:""}catch{return""}},z=(n,t,a,l="btn btn--line")=>{let s=W(n);if(!s)return"";let o=typeof t.reviews=="object"&&t.reviews?.google||j[a]||j.en;return`<p class="g-review" style="margin:28px 0 0;text-align:center"><a class="${l}" href="${e(s)}" target="_blank" rel="noopener">${h("star",16)} ${e(o)}</a></p>`},$={vi:{count:"{n} \u0111\xE1nh gi\xE1",prev:"\u0110\xE1nh gi\xE1 tr\u01B0\u1EDBc",next:"\u0110\xE1nh gi\xE1 ti\u1EBFp",more:"Xem th\xEAm",less:"Thu g\u1ECDn"},en:{count:"{n} reviews",prev:"Previous reviews",next:"More reviews",more:"Read more",less:"Show less"},ja:{count:"\u30EC\u30D3\u30E5\u30FC{n}\u4EF6",prev:"\u524D\u306E\u30EC\u30D3\u30E5\u30FC",next:"\u6B21\u306E\u30EC\u30D3\u30E5\u30FC",more:"\u7D9A\u304D\u3092\u8AAD\u3080",less:"\u9589\u3058\u308B"},ko:{count:"\uD6C4\uAE30 {n}\uAC1C",prev:"\uC774\uC804 \uD6C4\uAE30",next:"\uB2E4\uC74C \uD6C4\uAE30",more:"\uB354 \uBCF4\uAE30",less:"\uC811\uAE30"},zh:{count:"{n} \u6761\u8BC4\u4EF7",prev:"\u4E0A\u4E00\u7EC4\u8BC4\u4EF7",next:"\u66F4\u591A\u8BC4\u4EF7",more:"\u5C55\u5F00",less:"\u6536\u8D77"},th:{count:"{n} \u0E23\u0E35\u0E27\u0E34\u0E27",prev:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E01\u0E48\u0E2D\u0E19\u0E2B\u0E19\u0E49\u0E32",next:"\u0E23\u0E35\u0E27\u0E34\u0E27\u0E16\u0E31\u0E14\u0E44\u0E1B",more:"\u0E2D\u0E48\u0E32\u0E19\u0E15\u0E48\u0E2D",less:"\u0E22\u0E48\u0E2D"},id:{count:"{n} ulasan",prev:"Ulasan sebelumnya",next:"Ulasan berikutnya",more:"Selengkapnya",less:"Tutup"},es:{count:"{n} opiniones",prev:"Opiniones anteriores",next:"M\xE1s opiniones",more:"Leer m\xE1s",less:"Ver menos"},fr:{count:"{n} avis",prev:"Avis pr\xE9c\xE9dents",next:"Plus d\u2019avis",more:"Lire la suite",less:"R\xE9duire"},de:{count:"{n} Bewertungen",prev:"Vorherige Bewertungen",next:"Weitere Bewertungen",more:"Weiterlesen",less:"Weniger"},pt:{count:"{n} avalia\xE7\xF5es",prev:"Avalia\xE7\xF5es anteriores",next:"Mais avalia\xE7\xF5es",more:"Ler mais",less:"Mostrar menos"},ru:{count:"\u041E\u0442\u0437\u044B\u0432\u043E\u0432: {n}",prev:"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B",next:"\u0415\u0449\u0451 \u043E\u0442\u0437\u044B\u0432\u044B",more:"\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435",less:"\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"}},T={vi:"vi-VN",en:"en-US",ja:"ja-JP",ko:"ko-KR",zh:"zh-CN",th:"th-TH",id:"id-ID",es:"es-ES",fr:"fr-FR",de:"de-DE",pt:"pt-BR",ru:"ru-RU"},C=n=>(n.reviews??[]).filter(t=>t&&(t.name||t.text)&&!(typeof t.text=="object"&&t.text&&!Object.values(t.text).some(Boolean)&&!t.name));function R(n,t){let a=/^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(String(n?.date??"").trim());if(!a)return"";let l=new Date(Date.UTC(+a[1],+a[2]-1,+(a[3]??1)));if(Number.isNaN(l.getTime()))return"";let s=new Intl.DateTimeFormat(T[t]??"en-US",{month:"long",year:"numeric",timeZone:"UTC"}).format(l);return`<time class="rv-date" datetime="${e(n.date)}">${e(s)}</time>`}function _(n,t){let a=n.filter(r=>r.rating>=1&&r.rating<=5);if(a.length<2)return"";let l=a.reduce((r,i)=>r+Number(i.rating),0)/a.length,s=$[t]??$.en,o=new Intl.NumberFormat(T[t]??"en-US",{minimumFractionDigits:1,maximumFractionDigits:1}).format(l);return`<p class="rv-sum"><span class="rv-sum-star" aria-hidden="true">${h("star",18)}</span><strong>${o}</strong><span>\xB7</span><span>${e(s.count.replace("{n}",String(n.length)))}</span></p>`}function E(n,t,a,l){if(!n.length)return"";let s=$[t]??$.en,o=r=>`<button type="button" class="rv-btn" data-rv-${r} aria-label="${e(r==="prev"?s.prev:s.next)}">${h("arrow",18,r==="prev"?'style="transform:scaleX(-1)"':"")}</button>`;return`${_(n,t)}<div class="rv" data-rv data-more="${e(s.more)}" data-less="${e(s.less)}">
      <div class="${a} rv-track" tabindex="0">${n.map(l).join("")}</div>
      <div class="rv-nav" hidden>${o("prev")}${o("next")}</div>
    </div>${K}`}var K=`<style>
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
upd()}})()<\/script>`;var B=(n,t,a)=>n.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(a==="vi"||a==="ja"?a:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(t.footer.madeWith)}</a>`;function q({site:n,markets:t,url:a,abs:l}){let s=t.find(r=>r.default)??t[0],o=t.map(r=>({id:r.id,lang:r.lang,country:r.country}));return`<!doctype html>
<html lang="${e(s.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(n.name)}</title>
<link rel="canonical" href="${l(`${s.id}/`)}">
${t.map(r=>`<link rel="alternate" hreflang="${e(r.lang)}-${e(r.country)}" href="${l(`${r.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(o)}, root = ${JSON.stringify(a(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${t.map(r=>`<a href="${a(`${r.id}/`)}">${e(r.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var J="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Be+Vietnam+Pro:wght@400;500;600&display=swap",Z={linkedin:"LinkedIn",behance:"Behance",dribbble:"Dribbble",github:"GitHub",instagram:"Instagram",website:"Website"};function Me({site:n,catalog:t,i18n:a,template:l,basePath:s="/",siteUrl:o=n.domain}){let r=D(s),i=m=>new URL(r(m),o).href,c=t.markets,d=P(n.contactForm),p=d&&!d.error?d:null,f=c.map(m=>{let u=m.lang,g=a[u]??a.en??a.vi,M=v=>w(v,u,"en"),F=v=>{if(!v)return[];let k=Array.isArray(v)?v:v[u]??v.en??v.vi??[];return(Array.isArray(k)?k:[k]).map(x=>typeof x=="string"?x:M(x)).filter(Boolean)},A=n.contactChannels?.[m.id]??["email"],G={site:n,catalog:t,market:m,markets:c,lang:u,t:g,L:M,list:F,url:r,abs:i,channels:A,template:l,gform:p};return{path:`${m.id}/index.html`,html:Q(G)}});return f.push({path:"index.html",html:q({site:n,markets:c,url:r,abs:i})}),f}var Y=(n="")=>n.trim().split(/\s+/).map(t=>t[0]).slice(-2).join("").toUpperCase(),X=(n,t)=>n.heroImage?y(t,n.heroImage):n.projects?.[0]?.image?y(t,n.projects[0].image):t("assets/photos/hero.webp");function Q(n){let{site:t,market:a,markets:l,lang:s,t:o,L:r,url:i,abs:c}=n,d=`${t.name} \xB7 ${r(t.role)}`,p=t.theme??{},f=["primary","ink","bg","surface","soft","accent"].filter(g=>p[g]).map(g=>`--${g}:${p[g]}`).join(";"),m=l.find(g=>g.default)??l[0],u=t.contact??{};return`<!doctype html>
<html lang="${e(s)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(d)}</title>
<meta name="description" content="${e(r(t.intro))}">
<link rel="canonical" href="${c(`${a.id}/`)}">
${l.map(g=>`<link rel="alternate" hreflang="${e(g.lang)}" href="${c(`${g.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${c(`${m.id}/`)}">
<meta property="og:type" content="profile">
<meta property="og:title" content="${e(d)}">
<meta property="og:description" content="${e(r(t.intro))}">
<meta property="og:url" content="${c(`${a.id}/`)}">
<meta property="og:site_name" content="${e(t.name)}">
<meta property="og:image" content="${e(new URL(X(t,i),c("")).href)}">
<meta name="theme-color" content="${e(p.bg??"#FFFFFF")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${J}">
<link rel="stylesheet" href="${i("assets/style.css")}">
<style>:root{${f}}</style>
<noscript><style>.chips{display:none}</style></noscript>
${N(ce(n))}
<script src="${i("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(a.id)}" data-wa="${e(b(u.whatsapp))}" data-email="${e(u.email??"")}" data-copied="${e(o.contact.copied)}">
<a class="skip" href="#main">${e(o.skip)}</a>
${ee(n)}
<main id="main">
${te(n)}
${ne(n)}
${ae(n)}
${oe(n)}
${re(n)}
${se(n)}
${ie(n)}
</main>
${le(n)}
</body>
</html>
`}function L({site:n,t},a){return n.cvUrl?`<a class="${a}" href="${e(n.cvUrl)}" target="_blank" rel="noopener">${h("arrow",16,'style="transform:rotate(90deg)"')} ${e(t.nav.cv)}</a>`:`<button type="button" class="${a}" data-print>${h("arrow",16,'style="transform:rotate(90deg)"')} ${e(t.nav.cv)}</button>`}function ee(n){let{site:t,market:a,markets:l,t:s,url:o}=n,r=[["#work",s.nav.work],["#experience",s.nav.experience],["#skills",s.nav.skills],["#contact",s.nav.contact]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${o(`${a.id}/`)}">${e(t.name)}</a>
    <nav class="nav" aria-label="Menu">${r.map(([i,c])=>`<a href="${i}">${e(c)}</a>`).join("")}</nav>
    <div class="bar-end">
      ${l.length>1?`<nav class="langs" aria-label="${e(s.lang)}">${l.map(i=>`<a href="${o(`${i.id}/`)}" hreflang="${e(i.lang)}" lang="${e(i.lang)}"${i.id===a.id?' aria-current="true"':""}>${e(i.lang.toUpperCase())}</a>`).join("")}</nav>`:""}
      ${L(n,"btn btn--dark hide-sm")}
      <details class="mnav">
        <summary aria-label="${e(s.nav.openMenu)}">${h("menu",22)}</summary>
        <nav aria-label="Menu">${r.map(([i,c])=>`<a href="${i}">${e(c)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function te(n){let{site:t,t:a,L:l,url:s}=n,o=t.contact??{},r=(t.stats??[]).filter(c=>l(c?.value)),i=t.availability??{};return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${i.show!==!1&&l(i.text)?`<p class="avail"><span class="dot" aria-hidden="true"></span>${e(l(i.text))}</p>`:""}
      <h1><span class="hello">${e(a.hero.hello)}</span> ${e(t.name)}<span class="role">${e(l(t.role))}</span></h1>
      ${l(t.intro)?`<p class="lead">${e(l(t.intro))}</p>`:""}
      <div class="actions">
        <a class="btn btn--accent btn--lg" href="#work">${e(a.hero.work)} ${h("arrow",18)}</a>
        <a class="btn btn--line btn--lg" href="#contact">${e(a.hero.contact)}</a>
        ${L(n,"link print-hide")}
      </div>
      <p class="meta">${l(t.location)?`<span>${h("pin",16)} ${e(l(t.location))}</span>`:""}${o.email?`<a href="mailto:${e(o.email)}">${e(o.email)}</a>`:""}${o.phone?`<span class="print-only">${e(o.phone)}</span>`:""}</p>
    </div>
    <div class="hero-side">
      <div class="avatar">${t.photo?`<img src="${e(y(s,t.photo))}" alt="${e(t.name)}" width="480" height="560">`:`<span aria-hidden="true">${e(Y(t.name))}</span>`}</div>
      ${r.length?`<ul class="stats">${r.map(c=>`<li><b>${e(l(c.value))}</b><span>${e(l(c.label))}</span></li>`).join("")}</ul>`:""}
    </div>
  </div>
</section>`}function ne({site:n,t,L:a,list:l,url:s}){let o=(n.projects??[]).filter(c=>a(c?.title));if(!o.length)return"";let r=(n.projectTags??[]).filter(c=>o.some(d=>(d.tags??[]).includes(c.id))),i=c=>a(r.find(d=>d.id===c)?.name)||c;return`<section class="section" id="work" aria-labelledby="work-title">
  <div class="wrap">
    <div class="head"><h2 id="work-title" class="h2">${e(t.work.title)}</h2><p class="muted">${e(t.work.text)}</p></div>
    ${r.length>1?`<div class="chips" role="group" aria-label="${e(t.work.filter)}"><button type="button" class="chip" data-tag="" aria-pressed="true">${e(t.work.all)}</button>${r.map(c=>`<button type="button" class="chip" data-tag="${e(c.id)}" aria-pressed="false">${e(a(c.name))}</button>`).join("")}</div>`:""}
    <div class="works">${o.map((c,d)=>{let p=[c.image,...c.images??[]].filter(Boolean).map(u=>y(s,u)),f={title:a(c.title),meta:[c.client,c.year,a(c.role)].filter(Boolean).join(" \xB7 "),images:p,sections:[[t.work.problem,a(c.problem)],[t.work.approach,a(c.approach)],[t.work.result,a(c.result)]].filter(u=>u[1]),link:c.link||""},m=d%3===0||d===o.length-1&&d%3===1;return`<article class="work${m?" work--wide":""}" data-tags="${e((c.tags??[]).join(" "))}">
      <a class="work-ph" href="${e(p[0]??"#")}" data-case aria-label="${e(t.work.open)}: ${e(a(c.title))}">
        ${p[0]?`<img sizes="auto, (max-width: 640px) 100vw, ${m?"700px":"560px"}" src="${e(p[0])}" alt="${e(a(c.title))}" width="1200" height="800" loading="lazy">`:""}
      </a>
      <div class="work-body">
        <p class="work-meta">${[c.client,c.year].filter(Boolean).map(u=>`<span>${e(u)}</span>`).join("")}</p>
        <h3><a href="${e(p[0]??"#")}" data-case>${e(a(c.title))}</a></h3>
        ${a(c.summary)?`<p class="muted">${e(a(c.summary))}</p>`:""}
        ${(c.tags??[]).length?`<p class="tags">${c.tags.map(u=>`<span>${e(i(u))}</span>`).join("")}</p>`:""}
      </div>
      <script type="application/json" data-case-data>${JSON.stringify(f).replace(/</g,"\\u003c")}<\/script>
    </article>`}).join("")}</div>
  </div>
  <dialog class="case" data-case-box aria-labelledby="case-title">
    <div class="case-in">
      <button type="button" class="case-x" data-case-close aria-label="${e(t.work.close)}">\u2715</button>
      <p class="work-meta" data-case-meta></p>
      <h3 id="case-title" class="h2" data-case-title></h3>
      <div class="case-body" data-case-body></div>
      <a class="btn btn--line" data-case-link target="_blank" rel="noopener" hidden>${e(t.work.visit)} ${h("arrow",16)}</a>
      <div class="case-imgs" data-case-imgs></div>
    </div>
  </dialog>
</section>`}function ae({site:n,t,L:a,list:l}){let s=(n.experience??[]).filter(i=>i?.company||a(i?.role)),o=(n.education??[]).filter(i=>i?.school);if(!s.length&&!o.length)return"";let r=i=>[i.from,i.to?a(i.to):t.cv.now].filter(Boolean).join(" \u2013 ");return`<section class="section section--soft" id="experience" aria-labelledby="exp-title">
  <div class="wrap cv">
    <div>
      <h2 id="exp-title" class="h2">${e(t.cv.experience)}</h2>
      <ol class="timeline">${s.map(i=>`<li>
        <p class="when">${e(r(i))}</p>
        <div><h3>${e(a(i.role))}</h3><p class="where">${e(i.company??"")}${a(i.place)?` \xB7 ${e(a(i.place))}`:""}</p>
        ${l(i.points).length?`<ul class="points">${l(i.points).map(c=>`<li>${e(c)}</li>`).join("")}</ul>`:""}</div>
      </li>`).join("")}</ol>
    </div>
    ${o.length?`<div class="edu">
      <h2 class="h3">${e(t.cv.education)}</h2>
      <ol class="timeline timeline--sm">${o.map(i=>`<li><p class="when">${e([i.from,i.to].filter(Boolean).join(" \u2013 "))}</p><div><h3>${e(a(i.degree))}</h3><p class="where">${e(i.school)}</p></div></li>`).join("")}</ol>
    </div>`:""}
  </div>
</section>`}function oe({site:n,t,L:a}){let l=(n.skills??[]).filter(o=>a(o?.items)),s=(n.languages??[]).filter(o=>a(o?.name));return!l.length&&!s.length?"":`<section class="section" id="skills" aria-labelledby="skills-title">
  <div class="wrap">
    <h2 id="skills-title" class="h2">${e(t.cv.skills)}</h2>
    <div class="skills">${l.map(o=>`<div class="skill"><h3>${e(a(o.group))}</h3><ul class="pills">${a(o.items).split(/\s*[,，、]\s*/).filter(Boolean).map(r=>`<li>${e(r)}</li>`).join("")}</ul></div>`).join("")}
    ${s.length?`<div class="skill"><h3>${e(t.cv.languages)}</h3><ul class="langlist">${s.map(o=>`<li><span>${e(a(o.name))}</span><span class="muted">${e(a(o.level))}</span></li>`).join("")}</ul></div>`:""}</div>
  </div>
</section>`}function re({site:n,t,L:a}){let l=(n.services??[]).filter(s=>a(s?.title));return l.length?`<section class="section section--ink print-hide" aria-labelledby="svc-title">
  <div class="wrap">
    <h2 id="svc-title" class="h2">${e(t.services.title)}</h2>
    <ol class="svcs">${l.map((s,o)=>`<li><span class="n">${String(o+1).padStart(2,"0")}</span><h3>${e(a(s.title))}</h3>${a(s.text)?`<p>${e(a(s.text))}</p>`:""}</li>`).join("")}</ol>
  </div>
</section>`:""}function se({site:n,t,L:a,lang:l}){let s=z(n,t,l,"btn btn--line"),o=C(n);return n.showReviews===!1||!o.length&&!s?"":`<section class="section print-hide" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(t.reviews)}</h2>
    ${E(o,l,"quotes",r=>`<figure class="quote">
      <blockquote>\u201C${e(a(r.text))}\u201D</blockquote>
      <figcaption><strong>${e(r.name)}</strong>${r.bought?`<span>${e(a(r.bought))}</span>`:""}${R(r,l)}</figcaption>
    </figure>`)}${s}
  </div>
</section>`}function ie({site:n,t,L:a,channels:l,gform:s}){let o=t.contact,r=n.contact??{},i=Object.entries(n.links??{}).filter(([,p])=>p),c=s?` data-gform="${e(s.action)}" data-gmap='${e(JSON.stringify(s.fields))}'`:"",d=l.map((p,f)=>`<button type="button" class="btn ${f===0?"btn--accent":"btn--line"}" data-channel="${e(p)}" data-href="${e(S(p,r,""))}">${h(p,18)} ${e(t.via[p]??p)}</button>`).join("");return`<section class="section section--soft" id="contact" aria-labelledby="contact-title">
  <div class="wrap contact">
    <div class="contact-copy">
      <h2 id="contact-title" class="h2">${e(o.title)}</h2>
      <p class="lead">${e(o.text)}</p>
      <ul class="clist">
        ${r.email?`<li>${h("email",18)} <a href="mailto:${e(r.email)}">${e(r.email)}</a></li>`:""}
        ${r.phone?`<li>${h("phone",18)} <a href="tel:${b(r.phone)}">${e(r.phone)}</a></li>`:""}
        ${a(n.location)?`<li>${h("pin",18)} ${e(a(n.location))}</li>`:""}
      </ul>
      ${i.length?`<p class="links">${i.map(([p,f])=>`<a href="${e(f)}" target="_blank" rel="noopener me">${e(Z[p]??p)} \u2197</a>`).join("")}</p>`:""}
    </div>
    <form class="card form print-hide" data-contact novalidate${c} data-order-text="${e(o.message)}">
      <div class="c-fields">
        <div class="row2">
          <label class="field"><span>${e(o.name)} *</span><input name="name" autocomplete="name" required maxlength="80"></label>
          <label class="field"><span>${e(o.reach)} *</span><input name="phone" autocomplete="email" required maxlength="120" placeholder="${e(o.reachHint)}"></label>
        </div>
        <div class="row2">
          <label class="field"><span>${e(o.topic)}</span><select name="product">${o.topics.map(p=>`<option>${e(p)}</option>`).join("")}</select></label>
          <label class="field"><span>${e(o.budget)}</span><input name="price" maxlength="60" placeholder="${e(o.budgetHint)}"></label>
        </div>
        <label class="field"><span>${e(o.note)} *</span><textarea name="note" rows="4" maxlength="1000" required placeholder="${e(o.noteHint)}"></textarea></label>
        <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
        <p class="form-err" data-err hidden>${e(o.required)}</p>
        <button class="btn btn--accent btn--lg" type="submit" data-submit data-sending="${e(o.sending)}">${e(o.submit)} ${h("arrow",18)}</button>
      </div>
      <div class="done" data-done hidden tabindex="-1">
        <p class="done-title">${h(s?"check":"arrow",22)} ${e(s?o.done:o.stepTitle)}</p>
        <p>${e(s?o.doneText:o.stepText)}</p>
        ${s?"":`<div class="buy">${d}</div><button type="button" class="link" data-edit>${e(o.edit)}</button>`}
        <p class="form-msg" data-msg hidden></p>
      </div>
    </form>
  </div>
</section>`}function le({site:n,t,market:a}){return`<footer class="footer">
  <div class="wrap foot-bottom${n.badge===!1?" is-solo":""}"><span>\xA9 ${new Date().getFullYear()} ${e(n.name)}</span>${B(n,t,a.lang)}</div>
</footer>`}function ce({site:n,market:t,L:a,abs:l,list:s}){let o=n.contact??{},r=(n.experience??[]).find(i=>!i.to);return{"@context":"https://schema.org","@type":"ProfilePage",url:l(`${t.id}/`),mainEntity:{"@type":"Person",name:n.name,jobTitle:a(n.role),description:a(n.intro),email:o.email?`mailto:${o.email}`:void 0,address:a(n.location)?{"@type":"PostalAddress",addressLocality:a(n.location)}:void 0,worksFor:r?.company?{"@type":"Organization",name:r.company}:void 0,knowsAbout:(n.skills??[]).flatMap(i=>a(i.items).split(/\s*[,，、]\s*/)).filter(Boolean).slice(0,20),sameAs:Object.values(n.links??{}).filter(Boolean),alumniOf:(n.education??[]).map(i=>({"@type":"EducationalOrganization",name:i.school}))}}}export{Me as renderSite};
