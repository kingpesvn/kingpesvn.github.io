var ee={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(t="")=>String(t).replace(/[&<>"']/g,a=>ee[a]);function U(t,a,s="vi"){return t==null?"":typeof t!="object"?String(t):t[a]??t[s]??Object.values(t)[0]??""}var ae={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},D=t=>ae[t]??"en-US";function te(t,a="1"){if(a==="0.99")return Math.max(.99,Math.ceil(t)-.01);let s=Number(a)||1;return Math.max(s,Math.round(t/s)*s)}function T(t,a){if(a.default)return t.basePrice;let s=t.prices?.[a.id]??{mode:"auto"};return s.mode==="hidden"?null:s.mode==="manual"?s.amount:te(t.basePrice*a.rate,a.rounding)}var se=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function B(t,a){let s={style:"currency",currency:a.currency};return se.has(a.currency)&&(s.maximumFractionDigits=0),new Intl.NumberFormat(D(a.lang),s).format(t)}function F(t="/"){let a=t.endsWith("/")?t:`${t}/`;return(s="")=>a+String(s).replace(/^\//,"")}var R=(t="")=>t.startsWith("uploads/")?t:/^([a-z]+:|\/)/i.test(t)?null:`assets/${t}`,k=(t,a)=>{let s=R(a);return s==null?a:t(s)},S=(t="")=>String(t).replace(/\D/g,"");function N(t,a,s=""){switch(t){case"phone":return`tel:${S(a.phone)}`;case"zalo":return`https://zalo.me/${S(a.zalo||a.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(a.messenger)}`;case"whatsapp":return`https://wa.me/${S(a.whatsapp)}${s?`?text=${encodeURIComponent(s)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(a.kakao)}/chat`;case"email":return`mailto:${a.email}${s?`?subject=${encodeURIComponent(s)}`:""}`;default:return"#"}}var A=t=>`<script type="application/ld+json">${JSON.stringify(t).replace(/</g,"\\u003c")}<\/script>`;var ne={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>'},m=(t,a=20,s="")=>`<svg class="i" width="${a}" height="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${s}>${ne[t]??""}</svg>`,q=[1,2,3,4,5,6,0],oe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function _(t,a){let s=t.map(o=>q.indexOf(o)).sort((o,r)=>o-r);return s.every((o,r)=>r===0||o===s[r-1]+1)&&s.length>2?`${a[q[s[0]]]} \u2013 ${a[q[s.at(-1)]]}`:s.map(o=>a[q[o]]).join(", ")}var V=t=>t.map(a=>({"@type":"OpeningHoursSpecification",dayOfWeek:a.days.map(s=>oe[s]),opens:a.open,closes:a.close}));function E(t){return new Intl.NumberFormat(D(t.lang),{style:"currency",currency:t.currency}).formatToParts(0).find(s=>s.type==="currency")?.value??t.currency}var H=t=>t==="phone"||t==="email"?"":'target="_blank" rel="noopener"',W=t=>`<div class="suggest" id="market-suggest" data-suggest="${e(t.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(t.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(t.market.dismiss)}">\xD7</button>
</div>`,J=(t,a)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(t.hours))}' data-tz="${e(t.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(a.visit.open)}" data-closed="${e(a.visit.closed)}" hidden></p>`,K=(t,a,s)=>t.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(s==="vi"||s==="ja"?s:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(a.footer.madeWith)}</a>`;function Y({site:t,markets:a,url:s,abs:n}){let o=a.find(i=>i.default)??a[0],r=a.map(i=>({id:i.id,lang:i.lang,country:i.country}));return`<!doctype html>
<html lang="${e(o.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(t.name)}</title>
<link rel="canonical" href="${n(`${o.id}/`)}">
${a.map(i=>`<link rel="alternate" hreflang="${e(i.lang)}-${e(i.country)}" href="${n(`${i.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(r)}, root = ${JSON.stringify(s(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${a.map(i=>`<a href="${s(`${i.id}/`)}">${e(i.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var re="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,500..800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",G=24;function X(t,a){return t.products.map(s=>({...s,variants:s.variants.map(n=>({...n,price:T(n,a)})).filter(n=>n.price!=null)})).filter(s=>s.variants.length>0).map(s=>({...s,from:Math.min(...s.variants.map(n=>n.price))}))}function ie(t){let a=t.filter(r=>r.badge),s=t.filter(r=>!a.includes(r)),n=[...new Set(s.map(r=>r.category))].map(r=>s.filter(i=>i.category===r)),o=[...a];for(let r=0;o.length<t.length;r++)for(let i of n)i[r]&&o.push(i[r]);return o}var le=t=>String(t).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase();function ce(t){let a=10**Math.floor(Math.log10(t));return[1,2,2.5,5,10].map(s=>s*a).reduce((s,n)=>Math.abs(n-t)<Math.abs(s-t)?n:s)}function pe(t){let a=t.map(n=>n.from).sort((n,o)=>n-o),s=[...new Set([.2,.4,.6,.8].map(n=>ce(a[Math.floor(n*(a.length-1))])))];return s.map((n,o)=>[o?s[o-1]:0,n]).concat([[s[s.length-1],1/0]])}function qe({site:t,catalog:a,i18n:s,template:n,basePath:o="/",siteUrl:r=t.domain}){let i=F(o),c=h=>new URL(i(h),r).href,d=a.markets,p=(h,v)=>`${v.id}/${U(h.slug,v.lang,"en")}/`,$=[];for(let h of d){let v=h.lang,b=s[v]??s.en??s.vi,f=l=>U(l,v,"en"),y=X(a,h),z=t.orderChannels?.[h.id]??["phone"],x=l=>B(l,h),w=t.installmentMonths??12,j=l=>x(Number.isInteger(l)&&l>=1e5?Math.ceil(l/w/1e3)*1e3:Math.ceil(l/w*100)/100),I=(l,g)=>f(l?.find(L=>L.id===g)?.name??g),M=l=>a.categories.find(g=>g.id===l.category),O={site:t,catalog:a,market:h,markets:d,lang:v,t:b,L:f,url:i,abs:c,channels:z,money:x,monthly:j,months:w,canSplit:l=>w>1&&M(l)?.installment!==!1,items:y,productPath:p,template:n,name:I,cat:M};$.push({path:`${h.id}/index.html`,html:Q(O,{kind:"home"})});for(let l of y)$.push({path:`${p(l,h)}index.html`,html:Q(O,{kind:"product",product:l})})}return $.push({path:"index.html",html:Y({site:t,markets:d,url:i,abs:c})}),$}function Q(t,a){let{site:s,market:n,markets:o,lang:r,t:i,L:c,url:d,abs:p,catalog:$,productPath:h,channels:v,money:b}=t,f=a.kind==="home",y=a.product,z=f?`${n.id}/`:h(y,n),x=f?`${s.name} \xB7 ${c(s.tagline)}`:`${c(y.name)} \xB7 ${s.name}`,w=f?c(s.intro):`${c(y.description)} ${i.from} ${b(y.from)}.`,j=o.map(u=>f?{m:u,href:`${u.id}/`}:X({products:[$.products.find(P=>P.id===y.id)]},u).length?{m:u,href:h(y,u)}:null).filter(Boolean),I=u=>j.find(P=>P.m.id===u.id)?.href??`${u.id}/`,M=o.find(u=>u.default)??o[0],C=s.theme??{},O=["primary","ink","bg","surface","soft","accent"].filter(u=>C[u]).map(u=>`--${u}:${C[u]}`).join(";"),l=o.map(u=>({id:u.id,lang:u.lang,country:u.country,currency:u.currency,href:d(I(u))})),g=v[0],L=p(R(f?s.heroImages?.[0]??t.items[0]?.image:y.image));return`<!doctype html>
<html lang="${e(r)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(x)}</title>
<meta name="description" content="${e(w)}">
<link rel="canonical" href="${p(z)}">
${j.map(({m:u,href:P})=>`<link rel="alternate" hreflang="${e(u.lang)}-${e(u.country)}" href="${p(P)}">`).join(`
`)}
${j.some(u=>u.m.id===M.id)?`<link rel="alternate" hreflang="x-default" href="${p(I(M))}">`:""}
<meta property="og:type" content="${f?"website":"product"}">
<meta property="og:title" content="${e(x)}">
<meta property="og:description" content="${e(w)}">
<meta property="og:url" content="${p(z)}">
<meta property="og:image" content="${e(L)}">
<meta property="og:site_name" content="${e(s.name)}">
<meta name="theme-color" content="${e(C.ink??"#14201A")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${re}">
<link rel="stylesheet" href="${d("assets/style.css")}">
<style>:root{${O}}</style>
${f?A(Se(t))+(s.faq?.length?A(ze(t)):""):A(Ie(t,y))+A(Ce(t,y))}
<script src="${d("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(n.id)}" data-markets='${e(JSON.stringify(l))}' data-copied="${e(i.copied)}" data-wa="${e(S(s.contact.whatsapp??""))}" data-email="${e(s.contact.email??"")}">
<a class="skip" href="#main">${e(i.skip)}</a>
${W(i)}
${s.announcement?`<p class="announce">${e(c(s.announcement))}</p>`:""}
${de(t,f)}
<main id="main">
${f?[he,$e,me,ue,ge,fe,ye,ve,be,ke].map(u=>u(t)).join(`
`):Me(t,y)}
</main>
${je(t)}
<nav class="dock" aria-label="${e(i.nav.order)}">
  ${f?`<a href="#shop">${m("search",20)}<span>${e(i.nav.shop)}</span></a>`:`<a href="${d(`${n.id}/`)}#shop">${m("search",20)}<span>${e(i.nav.shop)}</span></a>`}
  <a class="primary" href="${e(f?N(g,s.contact):"#order")}" ${f?H(g):""}>${m(f?g:"bike",20)}<span>${e(f?i.nav.order:i.nav.buy)}</span></a>
</nav>
</body>
</html>
`}function de({site:t,market:a,markets:s,t:n,url:o},r){let i=r?"":o(`${a.id}/`),c=[[`${i}#types`,n.nav.types],[`${i}#shop`,n.nav.shop],[`${i}#service`,n.nav.service],[`${i}#visit`,n.nav.contact]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${o(`${a.id}/`)}">
      ${t.logo?`<img src="${e(k(o,t.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${m("bike",22)}</span>`}
      <span>${e(t.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${c.map(([d,p])=>`<a href="${d}">${e(p)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${e(n.market.label)}">${m("globe",18)}<span>${e(a.id.toUpperCase())}<span class="cur"> \xB7 ${e(E(a))}</span></span></summary>
        <ul>${s.map(d=>`<li><a href="${o(`${d.id}/`)}" hreflang="${e(d.lang)}"${d.id===a.id?' aria-current="true"':""}>${e(d.country)} \xB7 ${e(d.currency)}</a></li>`).join("")}</ul>
      </details>
      ${t.contact.phone?`<a class="btn btn--primary hide-sm" href="tel:${S(t.contact.phone)}">${m("phone",18)} ${e(t.contact.phone)}</a>`:""}
      <details class="mnav">
        <summary aria-label="${e(n.nav.openMenu)}">${m("menu",22)}</summary>
        <nav aria-label="Menu">${c.map(([d,p])=>`<a href="${d}">${e(p)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function he(t){let{site:a,t:s,L:n,url:o,items:r,catalog:i,money:c,productPath:d,market:p}=t,$=a.heroImages?.[0]??r[0]?.image,h=r.find(b=>b.id===a.featured)??r.find(b=>b.badge)??r[0],v=i.categories.filter(b=>r.some(f=>f.category===b.id)).length;return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${a.heroKicker?`<p class="hero-kicker">${m("bolt",16)} ${e(n(a.heroKicker))}</p>`:""}
      <h1>${e(n(a.tagline))}</h1>
      <p class="lead">${e(n(a.intro))}</p>
      <div class="actions">
        <a class="btn btn--accent btn--lg" href="#shop">${e(s.hero.shop)} ${m("arrow",18)}</a>
        ${a.contact.phone?`<a class="btn btn--glass btn--lg" href="tel:${S(a.contact.phone)}">${m("phone",18)} ${e(s.hero.call)}</a>`:""}
      </div>
      <dl class="stats">
        <div><dt>${e(s.hero.items)}</dt><dd>${r.length}</dd></div>
        <div><dt>${e(s.hero.kinds)}</dt><dd>${v}</dd></div>
        ${t.months>1?`<div><dt>${e(s.hero.split.replace("{n}",t.months))}</dt><dd>0%</dd></div>`:""}
      </dl>
    </div>
    <div class="hero-media">
      ${$?`<img src="${e(k(o,$))}" alt="" width="1200" height="825" fetchpriority="high">`:""}
      ${h?`<a class="hero-feat" href="${o(d(h,p))}">
        <img src="${e(k(o,h.image))}" alt="" width="1024" height="768" loading="lazy">
        <span><small>${e(h.badge?n(h.badge):s.hero.featured)}</small><b>${e(n(h.name))}</b><em>${e(s.from)} ${e(c(h.from))}</em></span>
        ${m("arrow",18)}
      </a>`:""}
    </div>
  </div>
</section>`}function $e({site:t,L:a}){return t.perks?.length?`<section class="perks" aria-label="${e(t.name)}">
  <ul class="wrap perk-list">${t.perks.map(s=>`<li>${m(s.icon??"check",22)}<div><b>${e(a(s.title))}</b>${s.text?`<span>${e(a(s.text))}</span>`:""}</div></li>`).join("")}</ul>
</section>`:""}function me({catalog:t,items:a,t:s,L:n,url:o}){let r=t.categories.map(c=>({...c,n:a.filter(d=>d.category===c.id).length})).filter(c=>c.n),i=(t.uses??[]).map(c=>({...c,n:a.filter(d=>d.uses?.includes(c.id)).length})).filter(c=>c.n);return r.length?`<section class="section" id="types" aria-labelledby="types-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="types-title" class="h2">${e(s.types.title)}</h2><p class="muted">${e(s.types.lead)}</p></div>
    <ul class="types">${r.map(c=>{let d=c.image??a.find(p=>p.category===c.id)?.image;return`<li><a href="?type=${e(c.id)}#shop" data-filter-link="type" data-value="${e(c.id)}">
      ${d?`<img src="${e(k(o,d))}" alt="" width="1024" height="768" loading="lazy">`:""}
      <span class="type-name">${e(n(c.name))}</span><span class="type-n">${e(s.types.count.replace("{n}",c.n))}</span>
    </a></li>`}).join("")}</ul>
    ${i.length?`<div class="uses"><p>${e(s.types.byUse)}</p><ul>${i.map(c=>`<li><a class="pill" href="?use=${e(c.id)}#shop" data-filter-link="use" data-value="${e(c.id)}">${e(n(c.name))} <small>${c.n}</small></a></li>`).join("")}</ul></div>`:""}
  </div>
</section>`:""}function Z(t,a,s=0){let{t:n,L:o,url:r,money:i,monthly:c,canSplit:d,productPath:p,market:$,catalog:h,name:v,cat:b}=t,f=[o(a.name),a.name?.vi,a.name?.en,o(b(a)?.name),b(a)?.name?.vi,...(a.uses??[]).map(y=>v(h.uses,y)),o(a.key)].filter(Boolean).join(" ");return`<li class="card${s>=G?" is-more":""}" data-type="${e(a.category)}" data-use="${e((a.uses??[]).join(" "))}" data-price="${a.from}" data-name="${e(le(f))}">
  <a class="card-link" href="${r(p(a,$))}">
    <div class="card-img"><img src="${e(k(r,a.image))}" alt="${e(o(a.name))}" width="1024" height="768" loading="lazy">${a.badge?`<span class="tag">${e(o(a.badge))}</span>`:""}${a.range?`<span class="range-chip">${m("bolt",14)} ${a.range} km</span>`:""}</div>
    <p class="card-cat">${e(o(b(a)?.name))}</p>
    <h3>${e(o(a.name))}</h3>
    ${a.key?`<p class="card-key">${e(o(a.key))}</p>`:""}
    <p class="card-foot">
      <span class="card-price"><small>${e(a.variants.length>1?n.from:"")}</small> ${e(i(a.from))}</span>
      ${a.colors?.length?`<span class="dots" aria-hidden="true">${a.colors.map(y=>`<i style="background:${e(y.hex)}"></i>`).join("")}</span>`:""}
    </p>
    ${d(a)?`<p class="card-inst">${e(n.installmentShort.replace("{price}",c(a.from)))}</p>`:""}
  </a>
</li>`}function ue(t){let{items:a,catalog:s,t:n,L:o,money:r}=t,i=s.categories.filter($=>a.some(h=>h.category===$.id)),c=(s.uses??[]).filter($=>a.some(h=>h.uses?.includes($.id))),d=a.length>4?pe(a):[],p=([$,h])=>$?h===1/0?n.shop.over.replace("{a}",r($)):`${r($)} \u2013 ${r(h)}`:n.shop.under.replace("{b}",r(h));return`<section class="section section--soft" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="shop-head">
      <h2 id="shop-title" class="h2">${e(n.shop.title)}</h2>
      <p class="muted" data-count="${e(n.shop.count)}">${e(n.shop.count.replace("{n}",a.length))}</p>
    </div>
    <div class="toolbar" data-toolbar>
      <div class="chips" role="group" aria-label="${e(n.shop.all)}">
        <button type="button" class="pill is-on" data-type="">${e(n.shop.all)}</button>
        ${i.map($=>`<button type="button" class="pill" data-type="${e($.id)}">${e(o($.name))}</button>`).join("")}
      </div>
      <div class="filters">
        <label class="search">${m("search",18)}<input type="search" placeholder="${e(n.search)}" aria-label="${e(n.search)}" data-search></label>
        <label class="select"><span class="sr">${e(n.shop.use)}</span><select data-use><option value="">${e(n.shop.anyUse)}</option>${c.map($=>`<option value="${e($.id)}">${e(o($.name))}</option>`).join("")}</select></label>
        <label class="select"><span class="sr">${e(n.shop.price)}</span><select data-band><option value="">${e(n.shop.anyPrice)}</option>${d.map($=>`<option value="${$[0]}-${$[1]===1/0?"":$[1]}">${e(p($))}</option>`).join("")}</select></label>
        <label class="select"><span class="sr">${e(n.shop.sort)}</span><select data-sort>
          <option value="">${e(n.shop.sortPop)}</option><option value="asc">${e(n.shop.sortLow)}</option><option value="desc">${e(n.shop.sortHigh)}</option>
        </select></label>
      </div>
    </div>
    <ul class="grid" data-grid>${ie(a).map(($,h)=>Z(t,$,h)).join("")}</ul>
    <p class="empty muted" data-empty hidden>${e(n.shop.empty)}</p>
    ${a.length>G?`<div class="more"><button type="button" class="btn btn--line btn--lg" data-more hidden>${e(n.shop.more)}</button></div>`:""}
  </div>
</section>`}function ge({items:t,t:a,L:s,url:n,productPath:o,market:r,money:i}){let c=t.filter(p=>p.range).sort((p,$)=>$.range-p.range).slice(0,8);if(c.length<3)return"";let d=c[0].range;return`<section class="section range" aria-labelledby="range-title">
  <div class="wrap range-grid">
    <div>
      <p class="kicker">${m("bolt",16)} ${e(a.range.kicker)}</p>
      <h2 id="range-title" class="h2">${e(a.range.title)}</h2>
      <p class="lead">${e(a.range.lead)}</p>
      <p class="muted small">${e(a.range.note)}</p>
    </div>
    <ol class="bars">${c.map(p=>`<li><a href="${n(o(p,r))}">
      <span class="bar-name">${e(s(p.name))}<small>${e(i(p.from))}</small></span>
      <span class="bar-track"><span class="bar-fill" style="--w:${Math.round(p.range/d*100)}%"></span></span>
      <b class="bar-km">${p.range} km</b>
    </a></li>`).join("")}</ol>
  </div>
</section>`}function fe({site:t,t:a,L:s,market:n,money:o}){return t.services?.length?`<section class="section section--soft" id="service" aria-labelledby="svc-title">
  <div class="wrap">
    <div class="sec-head"><h2 id="svc-title" class="h2">${e(a.service.title)}</h2>${t.serviceIntro?`<p class="muted">${e(s(t.serviceIntro))}</p>`:""}</div>
    <ul class="svc">${t.services.map(r=>{let i=r.basePrice===0?0:r.basePrice!=null?T(r,n):null;return`<li>${m(r.icon??"wrench",24)}<h3>${e(s(r.title))}</h3><p class="muted">${e(s(r.text))}</p>${i!=null?`<p class="svc-price">${i===0?e(a.service.free):`${e(a.from)} <b>${e(o(i))}</b>`}</p>`:""}</li>`}).join("")}</ul>
  </div>
</section>`:""}function ye({site:t,L:a,url:s}){let n=t.story;return n?`<section class="section" aria-labelledby="story-title">
  <div class="wrap story">
    ${n.image?`<figure class="story-img"><img src="${e(k(s,n.image))}" alt="" width="1024" height="658" loading="lazy"></figure>`:""}
    <div><h2 id="story-title" class="h2">${e(a(n.title))}</h2>${n.body?`<p class="lead">${e(a(n.body))}</p>`:""}</div>
  </div>
</section>`:""}function ve({site:t,t:a,L:s}){return t.reviews?.length?`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(a.reviews.title)}</h2>
    <div class="reviews">${t.reviews.map(n=>`<figure class="review">
      <p class="stars" aria-label="${e(n.rating)}/5">${Array.from({length:5},(o,r)=>`<span class="${r<n.rating?"on":""}">${m("star",16)}</span>`).join("")}</p>
      <blockquote>${e(s(n.text))}</blockquote>
      <figcaption>${e(n.name)}${n.bought?`<small>${e(s(n.bought))}</small>`:""}</figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`:""}function be({site:t,t:a,L:s}){return t.faq?.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap faq">
    <h2 id="faq-title" class="h2">${e(a.faq.title)}</h2>
    <div>${t.faq.map((n,o)=>`<details${o===0?" open":""}><summary>${e(s(n.q))}</summary><p>${e(s(n.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function we(t,a){let s=new Map;for(let n of t){let o=[...n.days].sort().join(",");s.has(o)||s.set(o,{days:n.days,slots:[]}),s.get(o).slots.push(`${n.open} \u2013 ${n.close}`)}return[...s.values()].map(n=>({label:n.days.length===7?a.visit.everyDay??a.days.join(", "):_(n.days,a.days),slots:n.slots.join(", ")}))}function ke({site:t,t:a,L:s,channels:n}){let o=encodeURIComponent(t.contact.mapQuery??s(t.contact.address));return`<section class="section section--soft" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div>
      <h2 id="visit-title" class="h2">${e(a.visit.title)}</h2>
      ${J(t,a)}
      <h3 class="h4">${m("clock",18)} ${e(a.visit.hours)}</h3>
      <table class="hours"><tbody>${we(t.hours,a).map(r=>`<tr><th scope="row">${e(r.label)}</th><td>${e(r.slots)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${m("pin",18)} ${e(a.visit.address)}</h3>
      <p>${e(s(t.contact.address))}</p>
      <div class="actions">
        <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${o}" target="_blank" rel="noopener">${e(a.visit.directions)} ${m("arrow",16)}</a>
        ${n.map(r=>`<a class="btn btn--line" href="${e(N(r,t.contact))}" ${H(r)}>${m(r,18)} ${e(a.via[r])}</a>`).join("")}
      </div>
    </div>
    <div class="map"><iframe title="${e(a.visit.address)}" src="https://www.google.com/maps?q=${o}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function Me(t,a){let{site:s,t:n,L:o,url:r,money:i,monthly:c,months:d,canSplit:p,market:$,items:h,channels:v,catalog:b,name:f,cat:y}=t,z=p(a),x=a.variants.map(l=>({size:o(l.size)||"",price:i(l.price),inst:z?n.installment.replace("{price}",c(l.price)).replace("{n}",d):""})),w=a.variants.reduce((l,g)=>g.price<l.price?g:l),j=y(a),I=[...h.filter(l=>l.id!==a.id&&l.category===a.category),...h.filter(l=>l.id!==a.id&&l.category!==a.category&&l.uses?.some(g=>a.uses?.includes(g)))].slice(0,8),M=r(`${$.id}/`),C=n.orderText.replace("{product}",o(a.name)).replace("{version}",o(w.size)||"").replace("{price}",i(w.price)).replace(/\{\w+\}/g,"\u2026"),O=l=>typeof l=="object"?o(l):String(l);return`<div class="wrap crumbs"><a href="${M}">${e(n.nav.home)}</a>${m("chevron",14)}<a href="${M}?type=${e(a.category)}#shop">${e(o(j?.name))}</a>${m("chevron",14)}<span aria-current="page">${e(o(a.name))}</span></div>
<section class="wrap pdp" data-product data-name="${e(o(a.name))}" data-sizes='${e(JSON.stringify(x))}' data-text="${e(n.orderText)}">
  ${xe(t,a)}
  <div class="pdp-info">
    <p class="kicker">${e(o(j?.name))}</p>
    <h1 class="pdp-title">${e(o(a.name))}</h1>
    <p class="pdp-price"><strong data-v="price">${e(i(w.price))}</strong></p>
    ${z?`<p class="pdp-inst">${m("card",18)} <span data-v="inst">${e(x[a.variants.indexOf(w)].inst)}</span></p>`:""}
    <p class="lead">${e(o(a.description))}</p>
    ${a.variants.length>1?`<fieldset class="opts"><legend>${e(n.product.version)}</legend><div class="opt-row">
      ${a.variants.map((l,g)=>`<label class="opt"><input type="radio" name="size" value="${g}"${l===w?" checked":""}><span><b>${e(o(l.size))}</b><small>${e(i(l.price))}</small></span></label>`).join("")}
    </div></fieldset>`:""}
    ${a.colors?.length?`<fieldset class="opts"><legend>${e(n.product.color)}: <span data-v="color">${e(o(a.colors[0].name))}</span></legend><div class="swatches">
      ${a.colors.map((l,g)=>`<label class="sw" title="${e(o(l.name))}"><input type="radio" name="color" value="${e(o(l.name))}"${g?"":" checked"}><span style="background:${e(l.hex)}"></span><b class="sr">${e(o(l.name))}</b></label>`).join("")}
    </div></fieldset>`:""}
    ${a.frames?.length?`<fieldset class="opts"><legend>${e(n.product.frame)}</legend><div class="opt-row">
      ${a.frames.map((l,g)=>`<label class="opt opt--sm"><input type="radio" name="frame" value="${e(o(l))}"${g===Math.floor((a.frames.length-1)/2)?" checked":""}><span><b>${e(o(l))}</b></span></label>`).join("")}
    </div></fieldset>`:""}
    ${a.uses?.length?`<p class="use-tags">${a.uses.map(l=>`<a href="${M}?use=${e(l)}#shop">${e(f(b.uses,l))}</a>`).join("")}</p>`:""}
    ${s.promises?.length?`<ul class="promises">${s.promises.map(l=>`<li>${m(l.icon??"check",18)} ${e(o(l.text))}</li>`).join("")}</ul>`:""}
    <form class="order" id="order" data-compose>
      <h2 class="h4">${m("bike",20)} ${e(n.product.orderTitle)}</h2>
      <div class="intents" role="radiogroup" aria-label="${e(n.product.orderTitle)}">${n.product.intents.map((l,g)=>`<label class="intent"><input type="radio" name="intent" value="${e(l)}"${g?"":" checked"}><span>${e(l)}</span></label>`).join("")}</div>
      <div class="fields">
        <label><span>${e(n.product.name)}</span><input name="name" autocomplete="name"></label>
        <label><span>${e(n.product.phone)}</span><input name="phone" type="tel" autocomplete="tel"></label>
        <label><span>${e(n.product.date)}</span><input type="date" name="date"></label>
        <label><span>${e(n.product.address)}</span><input name="address" autocomplete="street-address"></label>
        <label class="wide"><span>${e(n.product.note)}</span><textarea name="note" rows="2" placeholder="${e(n.product.noteHint)}"></textarea></label>
      </div>
      <div class="buy">${v.map((l,g)=>`<button type="submit" class="btn ${g?"btn--line":"btn--primary"} btn--lg" data-channel="${e(l)}" data-href="${e(N(l,s.contact,C))}">${m(l,18)} ${e(l==="phone"?n.product.call:n.product.send.replace("{channel}",n.via[l]))}</button>`).join("")}</div>
      <noscript><p>${v.map(l=>`<a href="${e(N(l,s.contact,C))}" ${H(l)}>${e(n.via[l])}</a>`).join(" \xB7 ")}</p></noscript>
      <p class="form-msg" role="status" hidden></p>
      <p class="muted small">${m("check",16)} ${e(n.product.reply)}</p>
    </form>
  </div>
</section>
${a.specs?.length?`<section class="section section--tight"><div class="wrap specs">
  <h2 class="h3">${e(n.product.specs)}</h2>
  <table><tbody>${a.specs.map(([l,g])=>`<tr><th scope="row">${e(n.specs[l]??l)}</th><td>${e(O(g))}</td></tr>`).join("")}</tbody></table>
</div></section>`:""}
${I.length?`<section class="section section--soft"><div class="wrap">
  <h2 class="h3">${e(n.product.related)}</h2>
  <ul class="grid grid--related">${I.map(l=>Z(t,l)).join("")}</ul>
</div></section>`:""}`}function xe({t,L:a,url:s},n){let o=[n.image,...n.images??[]],r=t.gallery,i=a(n.name),c=n.badge?`<span class="tag">${e(a(n.badge))}</span>`:"";return o.length===1?`<figure class="pdp-img"><img src="${e(k(s,n.image))}" alt="${e(i)}" width="1024" height="768" fetchpriority="high">${c}</figure>`:`<figure class="pdp-img gallery" data-gallery data-label="${e(r.photo)}">
    <div class="g-stage">
      <ul class="g-track" tabindex="0" aria-label="${e(r.label)}">${o.map((d,p)=>`<li id="g-${p+1}"><a href="${e(k(s,d))}" data-zoom="${p}" aria-label="${e(r.zoom)}: ${e(r.photo.replace("{i}",p+1).replace("{n}",o.length))}"><img src="${e(k(s,d))}" alt="${e(p?`${i} \u2013 ${r.photo.replace("{i}",p+1).replace("{n}",o.length)}`:i)}" width="1024" height="768"${p?' loading="lazy"':' fetchpriority="high"'}></a></li>`).join("")}</ul>
      ${c}
      <button type="button" class="g-nav g-prev" data-step="-1" aria-label="${e(r.prev)}">${m("chevron",22)}</button>
      <button type="button" class="g-nav g-next" data-step="1" aria-label="${e(r.next)}">${m("chevron",22)}</button>
      <span class="g-count" aria-hidden="true"><b data-g-i>1</b> / ${o.length}</span>
    </div>
    <ul class="g-thumbs">${o.map((d,p)=>`<li><a href="#g-${p+1}" data-go="${p}"${p?"":' aria-current="true"'} aria-label="${e(r.photo.replace("{i}",p+1).replace("{n}",o.length))}"><img src="${e(k(s,d))}" alt="" width="1024" height="768" loading="lazy"></a></li>`).join("")}</ul>
  </figure>
  <dialog class="lightbox" data-lightbox aria-label="${e(i)}">
    <img src="" alt="${e(i)}" data-lb-img>
    <button type="button" class="lb-close" data-lb-close aria-label="${e(r.close)}">\u2715</button>
    <button type="button" class="g-nav g-prev" data-lb-step="-1" aria-label="${e(r.prev)}">${m("chevron",26)}</button>
    <button type="button" class="g-nav g-next" data-lb-step="1" aria-label="${e(r.next)}">${m("chevron",26)}</button>
    <span class="g-count"><b data-lb-i>1</b> / ${o.length}</span>
  </dialog>`}function je({site:t,t:a,L:s,market:n}){let o=t.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(t.name)}</p><p class="muted">${e(s(t.tagline))}</p></div>
    <div><p class="foot-h">${e(a.footer.contact)}</p><ul>
      ${o.phone?`<li>${e(a.footer.hotline)}: <a href="tel:${S(o.phone)}">${e(o.phone)}</a></li>`:""}
      ${o.email?`<li><a href="mailto:${e(o.email)}">${e(o.email)}</a></li>`:""}
      <li>${e(s(o.address))}</li></ul></div>
    ${t.social?`<div><p class="foot-h">${e(a.footer.follow)}</p><ul>${Object.entries(t.social).filter(([,r])=>r).map(([r,i])=>`<li><a href="${e(i)}" target="_blank" rel="noopener">${e(r==="tiktok"?"TikTok":r==="youtube"?"YouTube":r[0].toUpperCase()+r.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom"><span>\xA9 ${new Date().getFullYear()} ${e(t.name)}</span>${K(t,a,n.lang)}</div>
</footer>`}function Se({site:t,market:a,L:s,abs:n,items:o}){return{"@context":"https://schema.org","@type":"BikeStore",name:t.name,url:n(`${a.id}/`),image:n(R(t.heroImages?.[0]??o[0]?.image)),description:s(t.intro),telephone:t.contact.phone,email:t.contact.email,address:{"@type":"PostalAddress",streetAddress:s(t.contact.address)},currenciesAccepted:a.currency,openingHoursSpecification:V(t.hours)}}var ze=({site:t,L:a})=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.faq.map(s=>({"@type":"Question",name:a(s.q),acceptedAnswer:{"@type":"Answer",text:a(s.a)}}))});function Ie({site:t,market:a,L:s,abs:n,productPath:o,cat:r},i){return{"@context":"https://schema.org","@type":"Product",name:s(i.name),description:s(i.description),image:[i.image,...i.images??[]].map(c=>n(R(c))),url:n(o(i,a)),category:s(r(i)?.name),...i.colors?.length?{color:i.colors.map(c=>s(c.name)).join(", ")}:{},offers:i.variants.map(c=>({"@type":"Offer",name:[s(i.name),s(c.size)].filter(Boolean).join(" \u2013 "),price:c.price,priceCurrency:a.currency,availability:"https://schema.org/InStock",itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:t.name}}))}}function Ce({market:t,L:a,abs:s,productPath:n,t:o,cat:r},i){return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:o.nav.home,item:s(`${t.id}/`)},{"@type":"ListItem",position:2,name:a(r(i)?.name),item:s(`${t.id}/?type=${i.category}`)},{"@type":"ListItem",position:3,name:a(i.name),item:s(n(i,t))}]}}export{qe as renderSite};
