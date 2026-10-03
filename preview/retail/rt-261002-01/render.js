var ee={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(t="")=>String(t).replace(/[&<>"']/g,a=>ee[a]);function A(t,a,s="vi"){return t==null?"":typeof t!="object"?String(t):t[a]??t[s]??Object.values(t)[0]??""}var ae={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},H=t=>ae[t]??"en-US";function te(t,a="1"){if(a==="0.99")return Math.max(.99,Math.ceil(t)-.01);let s=Number(a)||1;return Math.max(s,Math.round(t/s)*s)}function P(t,a){if(a.default)return t.basePrice;let s=t.prices?.[a.id]??{mode:"auto"};return s.mode==="hidden"?null:s.mode==="manual"?s.amount:te(t.basePrice*a.rate,a.rounding)}var se=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function D(t,a){let s={style:"currency",currency:a.currency};return se.has(a.currency)&&(s.maximumFractionDigits=0),new Intl.NumberFormat(H(a.lang),s).format(t)}function F(t="/"){let a=t.endsWith("/")?t:`${t}/`;return(s="")=>a+String(s).replace(/^\//,"")}var z=(t="")=>t.startsWith("uploads/")?t:/^([a-z]+:|\/)/i.test(t)?null:`assets/${t}`,x=(t,a)=>{let s=z(a);return s==null?a:t(s)},k=(t="")=>String(t).replace(/\D/g,"");function O(t,a,s=""){switch(t){case"phone":return`tel:${k(a.phone)}`;case"zalo":return`https://zalo.me/${k(a.zalo||a.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(a.messenger)}`;case"whatsapp":return`https://wa.me/${k(a.whatsapp)}${s?`?text=${encodeURIComponent(s)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(a.kakao)}/chat`;case"email":return`mailto:${a.email}${s?`?subject=${encodeURIComponent(s)}`:""}`;default:return"#"}}var R=t=>`<script type="application/ld+json">${JSON.stringify(t).replace(/</g,"\\u003c")}<\/script>`;var ne={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>'},m=(t,a=20,s="")=>`<svg class="i" width="${a}" height="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${s}>${ne[t]??""}</svg>`,L=[1,2,3,4,5,6,0],oe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function U(t,a){let s=t.map(o=>L.indexOf(o)).sort((o,i)=>o-i);return s.every((o,i)=>i===0||o===s[i-1]+1)&&s.length>2?`${a[L[s[0]]]} \u2013 ${a[L[s.at(-1)]]}`:s.map(o=>a[L[o]]).join(", ")}var T=t=>t.map(a=>({"@type":"OpeningHoursSpecification",dayOfWeek:a.days.map(s=>oe[s]),opens:a.open,closes:a.close}));function B(t){return new Intl.NumberFormat(H(t.lang),{style:"currency",currency:t.currency}).formatToParts(0).find(s=>s.type==="currency")?.value??t.currency}var q=t=>t==="phone"||t==="email"?"":'target="_blank" rel="noopener"',_=t=>`<div class="suggest" id="market-suggest" data-suggest="${e(t.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(t.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(t.market.dismiss)}">\xD7</button>
</div>`,V=(t,a)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(t.hours))}' data-tz="${e(t.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(a.visit.open)}" data-closed="${e(a.visit.closed)}" hidden></p>`,E=(t,a,s)=>t.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(s==="vi"||s==="ja"?s:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(a.footer.madeWith)}</a>`;function W({site:t,markets:a,url:s,abs:n}){let o=a.find(r=>r.default)??a[0],i=a.map(r=>({id:r.id,lang:r.lang,country:r.country}));return`<!doctype html>
<html lang="${e(o.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(t.name)}</title>
<link rel="canonical" href="${n(`${o.id}/`)}">
${a.map(r=>`<link rel="alternate" hreflang="${e(r.lang)}-${e(r.country)}" href="${n(`${r.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(i)}, root = ${JSON.stringify(s(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${a.map(r=>`<a href="${s(`${r.id}/`)}">${e(r.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var re="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap",Y=24;function K(t,a){return t.products.map(s=>({...s,variants:s.variants.map(n=>({...n,price:P(n,a)})).filter(n=>n.price!=null)})).filter(s=>s.variants.length>0).map(s=>({...s,from:Math.min(...s.variants.map(n=>n.price))}))}function ie(t){let a=t.filter(i=>i.badge?.en==="Best seller"),s=t.filter(i=>!a.includes(i)),n=[...new Set(s.map(i=>i.category))].map(i=>s.filter(r=>r.category===i)),o=[...a];for(let i=0;o.length<t.length;i++)for(let r of n)r[i]&&o.push(r[i]);return o}var ce=t=>String(t).normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/Đ/g,"D").toLowerCase();function Re({site:t,catalog:a,i18n:s,template:n,basePath:o="/",siteUrl:i=t.domain}){let r=F(o),h=$=>new URL(r($),i).href,l=a.markets,p=($,g)=>`${g.id}/${A($.slug,g.lang,"en")}/`,u=[];for(let $ of l){let g=$.lang,w=s[g]??s.en??s.vi,f=b=>A(b,g,"en"),y=K(a,$),M=t.orderChannels?.[$.id]??["phone"],v={site:t,catalog:a,market:$,markets:l,lang:g,t:w,L:f,url:r,abs:h,channels:M,money:b=>D(b,$),items:y,productPath:p,template:n,name:(b,S)=>f(b?.find(I=>I.id===S)?.name??S)};u.push({path:`${$.id}/index.html`,html:J(v,{kind:"home"})});for(let b of y)u.push({path:`${p(b,$)}index.html`,html:J(v,{kind:"product",product:b})})}return u.push({path:"index.html",html:W({site:t,markets:l,url:r,abs:h})}),u}function J(t,a){let{site:s,market:n,markets:o,lang:i,t:r,L:h,url:l,abs:p,catalog:u,productPath:$,channels:g,money:w}=t,f=a.kind==="home",y=a.product,M=f?`${n.id}/`:$(y,n),j=f?`${s.name} \xB7 ${h(s.tagline)}`:`${h(y.name)} \xB7 ${s.name}`,c=f?h(s.intro):`${h(y.description)} ${r.from} ${w(y.from)}.`,v=o.map(d=>f?{m:d,href:`${d.id}/`}:K({products:[u.products.find(C=>C.id===y.id)]},d).length?{m:d,href:$(y,d)}:null).filter(Boolean),b=d=>v.find(C=>C.m.id===d.id)?.href??`${d.id}/`,S=o.find(d=>d.default)??o[0],I=s.theme??{},G=["primary","ink","bg","surface","soft","accent"].filter(d=>I[d]).map(d=>`--${d}:${I[d]}`).join(";"),X=o.map(d=>({id:d.id,lang:d.lang,country:d.country,currency:d.currency,href:l(b(d))})),N=g[0],Z=p(f?z(s.heroImages?.[0]??"photos/flower-market.webp"):z(y.image));return`<!doctype html>
<html lang="${e(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(j)}</title>
<meta name="description" content="${e(c)}">
<link rel="canonical" href="${p(M)}">
${v.map(({m:d,href:C})=>`<link rel="alternate" hreflang="${e(d.lang)}-${e(d.country)}" href="${p(C)}">`).join(`
`)}
${v.some(d=>d.m.id===S.id)?`<link rel="alternate" hreflang="x-default" href="${p(b(S))}">`:""}
<meta property="og:type" content="${f?"website":"product"}">
<meta property="og:title" content="${e(j)}">
<meta property="og:description" content="${e(c)}">
<meta property="og:url" content="${p(M)}">
<meta property="og:image" content="${e(Z)}">
<meta property="og:site_name" content="${e(s.name)}">
<meta name="theme-color" content="${e(I.primary??"#B83260")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${re}">
<link rel="stylesheet" href="${l("assets/style.css")}">
<style>:root{${G}}</style>
${f?R(Me(t))+(s.faq?.length?R(ke(t)):""):R(xe(t,y))+R(je(t,y))}
<script src="${l("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(n.id)}" data-markets='${e(JSON.stringify(X))}' data-copied="${e(r.copied)}" data-wa="${e(k(s.contact.whatsapp??""))}" data-email="${e(s.contact.email??"")}">
<a class="skip" href="#main">${e(r.skip)}</a>
${_(r)}
${s.announcement?`<p class="announce">${e(h(s.announcement))}</p>`:""}
${le(t,f)}
<main id="main">
${f?[pe,de,he,me,$e,ue,fe,ge,ve].map(d=>d(t)).join(`
`):be(t,y)}
</main>
${we(t)}
<nav class="dock" aria-label="${e(r.nav.order)}">
  ${f?`<a href="#shop">${m("search",20)}<span>${e(r.nav.shop)}</span></a>`:`<a href="${l(`${n.id}/`)}#shop">${m("search",20)}<span>${e(r.nav.shop)}</span></a>`}
  <a class="primary" href="${e(f?O(N,s.contact):"#order")}" ${f?q(N):""}>${m(N,20)}<span>${e(r.nav.order)}</span></a>
</nav>
</body>
</html>
`}function le({site:t,market:a,markets:s,t:n,url:o,channels:i},r){let h=r?"":o(`${a.id}/`),l=[[`${h}#shop`,n.nav.shop],[`${h}#occasions`,n.nav.occasions],[`${h}#how`,n.nav.how],[`${h}#visit`,n.nav.contact]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${o(`${a.id}/`)}">
      ${t.logo?`<img src="${e(x(o,t.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${m("leaf",20)}</span>`}
      <span>${e(t.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${l.map(([p,u])=>`<a href="${p}">${e(u)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${e(n.market.label)}">${m("globe",18)}<span>${e(a.id.toUpperCase())}<span class="cur"> \xB7 ${e(B(a))}</span></span></summary>
        <ul>${s.map(p=>`<li><a href="${o(`${p.id}/`)}" hreflang="${e(p.lang)}"${p.id===a.id?' aria-current="true"':""}>${e(p.country)} \xB7 ${e(p.currency)}</a></li>`).join("")}</ul>
      </details>
      ${t.contact.phone?`<a class="btn btn--primary hide-sm" href="tel:${k(t.contact.phone)}">${m("phone",18)} ${e(t.contact.phone)}</a>`:""}
      <details class="mnav">
        <summary aria-label="${e(n.nav.openMenu)}">${m("menu",22)}</summary>
        <nav aria-label="Menu">${l.map(([p,u])=>`<a href="${p}">${e(u)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function pe({site:t,t:a,L:s,url:n,items:o}){let i=(t.heroImages?.length?t.heroImages:o.slice(0,3).map(r=>r.image)).slice(0,3);return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1>${e(s(t.tagline))}</h1>
      <p class="lead">${e(s(t.intro))}</p>
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#shop">${e(a.hero.shop)} ${m("arrow",18)}</a>
        ${t.contact.phone?`<a class="btn btn--line btn--lg" href="tel:${k(t.contact.phone)}">${m("phone",18)} ${e(a.hero.call)}</a>`:""}
      </div>
    </div>
    <div class="collage" aria-hidden="true">
      ${i.map((r,h)=>`<img class="c${h+1}" src="${e(x(n,r))}" alt="" width="800" height="800"${h?' loading="lazy"':' fetchpriority="high"'}>`).join("")}
    </div>
  </div>
</section>`}function de({site:t,L:a}){return t.perks?.length?`<section class="perks" aria-label="${e(t.name)}">
  <ul class="wrap perk-list">${t.perks.map(s=>`<li>${m(s.icon??"check",22)}<div><b>${e(a(s.title))}</b>${s.text?`<span>${e(a(s.text))}</span>`:""}</div></li>`).join("")}</ul>
</section>`:""}function he({catalog:t,items:a,t:s,L:n,url:o}){let i=(t.occasions??[]).map(r=>({...r,n:a.filter(h=>h.occasions?.includes(r.id)).length})).filter(r=>r.n);return i.length?`<section class="section" id="occasions" aria-labelledby="occ-title">
  <div class="wrap">
    <h2 id="occ-title" class="h2">${e(s.occasions.title)}</h2>
    <ul class="occ">${i.map(r=>`<li><a href="?occ=${e(r.id)}#shop" data-occ-link="${e(r.id)}">
      ${r.image?`<img src="${e(x(o,r.image))}" alt="" width="800" height="800" loading="lazy">`:""}
      <span class="occ-name">${e(n(r.name))}</span><span class="occ-n">${e(s.occasions.count.replace("{n}",r.n))}</span>
    </a></li>`).join("")}</ul>
  </div>
</section>`:""}function Q(t,a,s=0){let{t:n,L:o,url:i,money:r,productPath:h,market:l,catalog:p,name:u}=t,$=[o(a.name),a.name?.vi,a.name?.en,u(p.categories,a.category),...a.flowers.map(g=>u(p.flowers,g)),...a.occasions.map(g=>u(p.occasions,g))].filter(Boolean).join(" ");return`<li class="card${s>=Y?" is-more":""}" data-type="${e(a.category)}" data-occ="${e(a.occasions.join(" "))}" data-fl="${e(a.flowers.join(" "))}" data-price="${a.from}" data-name="${e(ce($))}">
  <a class="card-link" href="${i(h(a,l))}">
    <div class="card-img"><img src="${e(x(i,a.image))}" alt="${e(o(a.name))}" width="800" height="800" loading="lazy">${a.badge?`<span class="tag">${e(o(a.badge))}</span>`:""}</div>
    <h3>${e(o(a.name))}</h3>
    <p class="card-price"><small>${e(n.from)}</small> ${e(r(a.from))}</p>
    ${a.variants.length>1?`<p class="card-sizes">${a.variants.map(g=>`<span>${e(o(g.size))}</span>`).join("")}</p>`:""}
  </a>
</li>`}function me(t){let{items:a,catalog:s,t:n,L:o}=t,i=s.categories.filter(l=>a.some(p=>p.category===l.id)),r=(s.occasions??[]).filter(l=>a.some(p=>p.occasions?.includes(l.id))),h=(s.flowers??[]).filter(l=>a.some(p=>p.flowers?.includes(l.id)));return`<section class="section section--soft" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="shop-head">
      <h2 id="shop-title" class="h2">${e(n.shop.title)}</h2>
      <p class="muted" data-count="${e(n.shop.count)}">${e(n.shop.count.replace("{n}",a.length))}</p>
    </div>
    <div class="toolbar" data-toolbar>
      <div class="chips" role="group" aria-label="${e(n.shop.all)}">
        <button type="button" class="pill is-on" data-type="">${e(n.shop.all)}</button>
        ${i.map(l=>`<button type="button" class="pill" data-type="${e(l.id)}">${e(o(l.name))}</button>`).join("")}
      </div>
      <div class="filters">
        <label class="search">${m("search",18)}<input type="search" placeholder="${e(n.search)}" aria-label="${e(n.search)}" data-search></label>
        <label class="select"><span class="sr">${e(n.shop.occasion)}</span><select data-occ><option value="">${e(n.shop.anyOccasion)}</option>${r.map(l=>`<option value="${e(l.id)}">${e(o(l.name))}</option>`).join("")}</select></label>
        <label class="select"><span class="sr">${e(n.shop.flower)}</span><select data-fl><option value="">${e(n.shop.anyFlower)}</option>${h.map(l=>`<option value="${e(l.id)}">${e(o(l.name))}</option>`).join("")}</select></label>
        <label class="select"><span class="sr">${e(n.shop.sort)}</span><select data-sort>
          <option value="">${e(n.shop.sortPop)}</option><option value="asc">${e(n.shop.sortLow)}</option><option value="desc">${e(n.shop.sortHigh)}</option>
        </select></label>
      </div>
    </div>
    <ul class="grid" data-grid>${ie(a).map((l,p)=>Q(t,l,p)).join("")}</ul>
    <p class="empty muted" data-empty hidden>${e(n.shop.empty)}</p>
    ${a.length>Y?`<div class="more"><button type="button" class="btn btn--line btn--lg" data-more hidden>${e(n.shop.more)}</button></div>`:""}
  </div>
</section>`}function $e({site:t,t:a,L:s}){return t.steps?.length?`<section class="section" id="how" aria-labelledby="how-title">
  <div class="wrap">
    <h2 id="how-title" class="h2">${e(a.steps.title)}</h2>
    <ol class="steps">${t.steps.map((n,o)=>`<li><span class="step-n">${o+1}</span><h3>${e(s(n.title))}</h3><p class="muted">${e(s(n.text))}</p></li>`).join("")}</ol>
  </div>
</section>`:""}function ue({site:t,L:a,url:s}){let n=t.story;return n?`<section class="section section--soft" aria-labelledby="story-title">
  <div class="wrap story">
    <figure class="story-img"><img src="${e(x(s,n.image??"photos/shop-buckets.webp"))}" alt="" width="1400" height="900" loading="lazy"></figure>
    <div><h2 id="story-title" class="h2">${e(a(n.title))}</h2>${n.body?`<p class="lead">${e(a(n.body))}</p>`:""}</div>
  </div>
</section>`:""}function fe({site:t,t:a,L:s}){return t.reviews?.length?`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(a.reviews.title)}</h2>
    <div class="reviews">${t.reviews.map(n=>`<figure class="review">
      <p class="stars" aria-label="${e(n.rating)}/5">${Array.from({length:5},(o,i)=>`<span class="${i<n.rating?"on":""}">${m("star",16)}</span>`).join("")}</p>
      <blockquote>${e(s(n.text))}</blockquote>
      <figcaption>${e(n.name)}</figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`:""}function ge({site:t,t:a,L:s}){return t.faq?.length?`<section class="section section--soft" aria-labelledby="faq-title">
  <div class="wrap faq">
    <h2 id="faq-title" class="h2">${e(a.faq.title)}</h2>
    <div>${t.faq.map((n,o)=>`<details${o===0?" open":""}><summary>${e(s(n.q))}</summary><p>${e(s(n.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function ye(t,a){let s=new Map;for(let n of t){let o=[...n.days].sort().join(",");s.has(o)||s.set(o,{days:n.days,slots:[]}),s.get(o).slots.push(`${n.open} \u2013 ${n.close}`)}return[...s.values()].map(n=>({label:n.days.length===7?a.visit.everyDay??a.days.join(", "):U(n.days,a.days),slots:n.slots.join(", ")}))}function ve({site:t,t:a,L:s,channels:n}){let o=encodeURIComponent(t.contact.mapQuery??s(t.contact.address));return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div>
      <h2 id="visit-title" class="h2">${e(a.visit.title)}</h2>
      ${V(t,a)}
      <h3 class="h4">${m("clock",18)} ${e(a.visit.hours)}</h3>
      <table class="hours"><tbody>${ye(t.hours,a).map(i=>`<tr><th scope="row">${e(i.label)}</th><td>${e(i.slots)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${m("pin",18)} ${e(a.visit.address)}</h3>
      <p>${e(s(t.contact.address))}</p>
      <div class="actions">
        <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${o}" target="_blank" rel="noopener">${e(a.visit.directions)} ${m("arrow",16)}</a>
        ${n.map(i=>`<a class="btn btn--ghost" href="${e(O(i,t.contact))}" ${q(i)}>${m(i,18)} ${e(a.via[i])}</a>`).join("")}
      </div>
    </div>
    <div class="map"><iframe title="${e(a.visit.address)}" src="https://www.google.com/maps?q=${o}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function be(t,a){let{site:s,t:n,L:o,url:i,money:r,market:h,items:l,channels:p,catalog:u,name:$}=t,g=a.variants.map(c=>({size:o(c.size)||"",price:r(c.price)})),w=a.variants.reduce((c,v)=>v.price<c.price?v:c),f=[...l.filter(c=>c.id!==a.id&&c.category===a.category),...l.filter(c=>c.id!==a.id&&c.category!==a.category&&c.occasions.some(v=>a.occasions.includes(v)))].slice(0,8),y=u.categories.find(c=>c.id===a.category),M=i(`${h.id}/`),j=n.orderText.replace("{product}",o(a.name)).replace("{size}",o(w.size)||"").replace("{price}",r(w.price)).replace(/\{\w+\}/g,"\u2026");return`<div class="wrap crumbs"><a href="${M}">${e(n.nav.home)}</a>${m("chevron",14)}<a href="${M}?type=${e(a.category)}#shop">${e(o(y?.name))}</a>${m("chevron",14)}<span aria-current="page">${e(o(a.name))}</span></div>
<section class="wrap pdp" data-product data-name="${e(o(a.name))}" data-sizes='${e(JSON.stringify(g))}' data-text="${e(n.orderText)}">
  <figure class="pdp-img"><img src="${e(x(i,a.image))}" alt="${e(o(a.name))}" width="800" height="800" fetchpriority="high">${a.badge?`<span class="tag">${e(o(a.badge))}</span>`:""}</figure>
  <div class="pdp-info">
    <p class="kicker">${e(o(y?.name))}</p>
    <h1 class="pdp-title">${e(o(a.name))}</h1>
    <p class="pdp-price"><strong data-v="price">${e(r(w.price))}</strong></p>
    <p class="lead">${e(o(a.description))}</p>
    ${a.variants.length>1?`<fieldset class="opts"><legend>${e(n.product.size)}</legend><div class="opt-row">
      ${a.variants.map((c,v)=>`<label class="opt"><input type="radio" name="size" value="${v}"${c===w?" checked":""}><span><b>${e(o(c.size))}</b><small>${e(r(c.price))}</small></span></label>`).join("")}
    </div></fieldset>`:""}
    <dl class="tags">
      <div><dt>${e(n.product.occasions)}</dt><dd>${a.occasions.map(c=>`<a href="${M}?occ=${e(c)}#shop">${e($(u.occasions,c))}</a>`).join("")}</dd></div>
      <div><dt>${e(n.product.flowers)}</dt><dd>${a.flowers.map(c=>`<span>${e($(u.flowers,c))}</span>`).join("")}</dd></div>
    </dl>
    <form class="order" id="order" data-compose>
      <h2 class="h4">${m("truck",18)} ${e(n.product.delivery)}</h2>
      <div class="fields">
        <label><span>${e(n.product.date)}</span><input type="date" name="date" required></label>
        <label><span>${e(n.product.time)}</span><select name="time">${(n.product.times??[]).map(c=>`<option>${e(c)}</option>`).join("")}</select></label>
        <label><span>${e(n.product.recipient)}</span><input name="recipient" autocomplete="off"></label>
        <label><span>${e(n.product.phone)}</span><input name="phone" type="tel" autocomplete="off"></label>
        <label class="wide"><span>${e(n.product.address)}</span><input name="address" autocomplete="off"></label>
        <label class="wide"><span>${e(n.product.card)}</span><textarea name="card" rows="2" placeholder="${e(n.product.cardHint)}"></textarea></label>
      </div>
      <div class="buy">${p.map((c,v)=>`<button type="submit" class="btn ${v?"btn--line":"btn--primary"} btn--lg" data-channel="${e(c)}" data-href="${e(O(c,s.contact,j))}">${m(c,18)} ${e(c==="phone"?n.product.call:n.product.send.replace("{channel}",n.via[c]))}</button>`).join("")}</div>
      <noscript><p>${p.map(c=>`<a href="${e(O(c,s.contact,j))}" ${q(c)}>${e(n.via[c])}</a>`).join(" \xB7 ")}</p></noscript>
      <p class="form-msg" role="status" hidden></p>
      <p class="muted small">${m("check",16)} ${e(n.product.note)}</p>
      <p class="muted small">${e(n.product.photo)}</p>
    </form>
  </div>
</section>
${f.length?`<section class="section section--soft"><div class="wrap">
  <h2 class="h3">${e(n.product.related)}</h2>
  <ul class="grid grid--related">${f.map(c=>Q(t,c)).join("")}</ul>
</div></section>`:""}`}function we({site:t,t:a,L:s,market:n}){let o=t.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(t.name)}</p><p class="muted">${e(s(t.tagline))}</p></div>
    <div><p class="foot-h">${e(a.footer.contact)}</p><ul>
      ${o.phone?`<li>${e(a.footer.hotline)}: <a href="tel:${k(o.phone)}">${e(o.phone)}</a></li>`:""}
      ${o.email?`<li><a href="mailto:${e(o.email)}">${e(o.email)}</a></li>`:""}
      <li>${e(s(o.address))}</li></ul></div>
    ${t.social?`<div><p class="foot-h">${e(a.footer.follow)}</p><ul>${Object.entries(t.social).filter(([,i])=>i).map(([i,r])=>`<li><a href="${e(r)}" target="_blank" rel="noopener">${e(i==="tiktok"?"TikTok":i[0].toUpperCase()+i.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom"><span>\xA9 ${new Date().getFullYear()} ${e(t.name)}</span>${E(t,a,n.lang)}</div>
</footer>`}function Me({site:t,market:a,L:s,abs:n}){return{"@context":"https://schema.org","@type":"Florist",name:t.name,url:n(`${a.id}/`),image:n(z(t.heroImages?.[0]??"photos/flower-market.webp")),description:s(t.intro),telephone:t.contact.phone,email:t.contact.email,address:{"@type":"PostalAddress",streetAddress:s(t.contact.address)},currenciesAccepted:a.currency,openingHoursSpecification:T(t.hours)}}var ke=({site:t,L:a})=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.faq.map(s=>({"@type":"Question",name:a(s.q),acceptedAnswer:{"@type":"Answer",text:a(s.a)}}))});function xe({site:t,market:a,L:s,abs:n,productPath:o},i){return{"@context":"https://schema.org","@type":"Product",name:s(i.name),description:s(i.description),image:n(z(i.image)),url:n(o(i,a)),offers:i.variants.map(r=>({"@type":"Offer",name:[s(i.name),s(r.size)].filter(Boolean).join(" \u2013 "),price:r.price,priceCurrency:a.currency,availability:"https://schema.org/InStock",seller:{"@type":"Organization",name:t.name}}))}}function je({catalog:t,market:a,L:s,abs:n,productPath:o,t:i},r){let h=t.categories.find(l=>l.id===r.category);return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:i.nav.home,item:n(`${a.id}/`)},{"@type":"ListItem",position:2,name:s(h?.name),item:n(`${a.id}/?type=${r.category}`)},{"@type":"ListItem",position:3,name:s(r.name),item:n(o(r,a))}]}}export{Re as renderSite};
