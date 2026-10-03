var V={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},a=(e="")=>String(e).replace(/[&<>"']/g,t=>V[t]);function S(e,t,n="vi"){return e==null?"":typeof e!="object"?String(e):e[t]??e[n]??Object.values(e)[0]??""}var T={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},z=e=>T[e]??"en-US";function W(e,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(e)-.01);let n=Number(t)||1;return Math.max(n,Math.round(e/n)*n)}function j(e,t){if(t.default)return e.basePrice;let n=e.prices?.[t.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:W(e.basePrice*t.rate,t.rounding)}var B=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function C(e,t){let n={style:"currency",currency:t.currency};return B.has(t.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(z(t.lang),n).format(e)}function O(e="/"){let t=e.endsWith("/")?e:`${e}/`;return(n="")=>t+String(n).replace(/^\//,"")}var E=(e="")=>e.startsWith("uploads/")?e:/^([a-z]+:|\/)/i.test(e)?null:`assets/${e}`,b=(e,t)=>{let n=E(t);return n==null?t:e(n)},M=(e="")=>String(e).replace(/\D/g,"");function w(e,t,n=""){switch(e){case"phone":return`tel:${M(t.phone)}`;case"zalo":return`https://zalo.me/${M(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${M(t.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var R=e=>`<script type="application/ld+json">${JSON.stringify(e).replace(/</g,"\\u003c")}<\/script>`;var J={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>'},m=(e,t=20,n="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${J[e]??""}</svg>`,x=[1,2,3,4,5,6,0],Y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function I(e,t){let n=e.map(i=>x.indexOf(i)).sort((i,o)=>i-o);return n.every((i,o)=>o===0||i===n[o-1]+1)&&n.length>2?`${t[x[n[0]]]} \u2013 ${t[x[n.at(-1)]]}`:n.map(i=>t[x[i]]).join(", ")}var N=e=>e.map(t=>({"@type":"OpeningHoursSpecification",dayOfWeek:t.days.map(n=>Y[n]),opens:t.open,closes:t.close}));function U(e){return new Intl.NumberFormat(z(e.lang),{style:"currency",currency:e.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??e.currency}var k=e=>e==="phone"||e==="email"?"":'target="_blank" rel="noopener"',A=e=>`<div class="suggest" id="market-suggest" data-suggest="${a(e.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${a(e.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${a(e.market.dismiss)}">\xD7</button>
</div>`,H=(e,t)=>`<p class="status" data-open-status data-hours='${a(JSON.stringify(e.hours))}' data-tz="${a(e.timezone??"Asia/Ho_Chi_Minh")}" data-open="${a(t.visit.open)}" data-closed="${a(t.visit.closed)}" hidden></p>`,D=(e,t,n)=>e.badge===!1?"":`<a class="made" href="https://kingpes.net/${a(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${a(t.footer.madeWith)}</a>`;function _({site:e,markets:t,url:n,abs:r}){let i=t.find(s=>s.default)??t[0],o=t.map(s=>({id:s.id,lang:s.lang,country:s.country}));return`<!doctype html>
<html lang="${a(i.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${a(e.name)}</title>
<link rel="canonical" href="${r(`${i.id}/`)}">
${t.map(s=>`<link rel="alternate" hreflang="${a(s.lang)}-${a(s.country)}" href="${r(`${s.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(o)}, root = ${JSON.stringify(n(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${t.map(s=>`<a href="${n(`${s.id}/`)}">${a(s.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var q="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Pacifico&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap";function K(e,t){return e.products.map(n=>({...n,variants:n.variants.map(r=>({...r,price:j(r,t)})).filter(r=>r.price!=null)})).filter(n=>n.variants.length>0)}function me({site:e,catalog:t,i18n:n,template:r,basePath:i="/",siteUrl:o=e.domain}){let s=O(i),p=d=>new URL(s(d),o).href,l=t.markets,c=l.map(d=>{let h=d.lang,g=n[h]??n.en??n.vi,v=u=>S(u,h,"en"),y=K(t,d),f=new Set(t.categories.filter(u=>u.retail).map(u=>u.id)),$=e.orderChannels?.[d.id]??["phone"],F={site:e,catalog:t,market:d,markets:l,lang:h,t:g,L:v,url:s,abs:p,channels:$,money:u=>C(u,d),template:r,menu:y.filter(u=>!f.has(u.category)),beans:y.filter(u=>f.has(u.category))};return{path:`${d.id}/index.html`,html:L(F)}});return c.push({path:"index.html",html:_({site:e,markets:l,url:s,abs:p})}),c}function L(e){let{site:t,market:n,markets:r,lang:i,t:o,L:s,url:p,abs:l,channels:c}=e,d=`${t.name} \xB7 ${s(t.tagline)}`,h=t.theme??{},g=["primary","ink","bg","surface","soft","accent"].filter($=>h[$]).map($=>`--${$}:${h[$]}`).join(";"),v=r.find($=>$.default)??r[0],y=r.map($=>({id:$.id,lang:$.lang,country:$.country,currency:$.currency,href:p(`${$.id}/`)})),f=c[0];return`<!doctype html>
<html lang="${a(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${a(d)}</title>
<meta name="description" content="${a(s(t.intro))}">
<link rel="canonical" href="${l(`${n.id}/`)}">
${r.map($=>`<link rel="alternate" hreflang="${a($.lang)}-${a($.country)}" href="${l(`${$.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${l(`${v.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${a(d)}">
<meta property="og:description" content="${a(s(t.intro))}">
<meta property="og:url" content="${l(`${n.id}/`)}">
<meta property="og:image" content="${l("assets/photos/hero.webp")}">
<meta property="og:site_name" content="${a(t.name)}">
<meta name="theme-color" content="${a(h.bg??"#1B1612")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${q}">
<link rel="stylesheet" href="${p("assets/style.css")}">
<style>:root{${g}}</style>
${R(ie(e))}
<script src="${p("assets/site.js")}" defer><\/script>
</head>
<body data-market="${a(n.id)}" data-markets='${a(JSON.stringify(y))}'>
<a class="skip" href="#main">${a(o.skip)}</a>
${A(o)}
${Q(e)}
<main id="main">
${G(e)}
${X(e)}
${Z(e)}
${ee(e)}
${te(e)}
${ne(e)}
${se(e)}
</main>
${re(e)}
<nav class="dock" aria-label="${a(o.nav.order)}">
  <a href="#menu">${m("cup",20)}<span>${a(o.nav.menu)}</span></a>
  <a class="primary" href="${a(w(f,t.contact))}" ${k(f)}>${m(f,20)}<span>${a(o.via[f])}</span></a>
</nav>
</body>
</html>
`}function Q({site:e,market:t,markets:n,t:r,url:i,beans:o,channels:s}){let p=[["#menu",r.nav.menu],["#space",r.nav.space],...o.length?[["#beans",r.nav.beans]]:[],["#visit",r.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${i(`${t.id}/`)}">
      ${e.logo?`<img src="${a(b(i,e.logo))}" alt="" width="36" height="36">`:`<span class="brand-mark" aria-hidden="true">${m("cup",22)}</span>`}
      <span>${a(e.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${p.map(([l,c])=>`<a href="${l}">${a(c)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${a(r.market.label)}">${m("globe",18)}<span>${a(t.id.toUpperCase())}<span class="cur"> \xB7 ${a(U(t))}</span></span></summary>
        <ul>${n.map(l=>`<li><a href="${i(`${l.id}/`)}" hreflang="${a(l.lang)}"${l.id===t.id?' aria-current="true"':""}>${a(l.country)} \xB7 ${a(l.currency)}</a></li>`).join("")}</ul>
      </details>
      <a class="btn btn--accent hide-sm" href="${a(w(s[0],e.contact))}" ${k(s[0])}>${a(r.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${a(r.nav.openMenu)}">${m("menu",22)}</summary>
        <nav aria-label="Menu">${p.map(([l,c])=>`<a href="${l}">${a(c)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function G({site:e,t,L:n,url:r}){let i=e.hours.map(p=>p.open).sort()[0],o=e.heroImage?a(b(r,e.heroImage)):r("assets/photos/hero.webp"),s=encodeURIComponent(e.contact.mapQuery??n(e.contact.address));return`<section class="hero">
  <img class="hero-bg" src="${o}" alt="" width="1600" height="1000" fetchpriority="high">
  <div class="wrap hero-copy">
    ${e.script?`<p class="script">${a(e.script)}</p>`:""}
    <h1><span class="h1-name">${a(e.name)}</span><span class="h1-tag">${a(n(e.tagline))}</span></h1>
    <p class="lead">${a(n(e.intro))}</p>
    <div class="actions">
      <a class="btn btn--accent btn--lg" href="#menu">${m("cup",18)} ${a(t.hero.menu)}</a>
      <a class="btn btn--light btn--lg" href="https://www.google.com/maps/dir/?api=1&amp;destination=${s}" target="_blank" rel="noopener">${m("pin",18)} ${a(t.hero.directions)}</a>
    </div>
    <p class="hero-open">${m("clock",18)} ${a(t.hero.openFrom)} ${a(i)} \xB7 ${a(n(e.contact.address))}</p>
  </div>
</section>`}function X({site:e,L:t}){if(!e.highlights?.length)return"";let n=e.highlights.map(r=>`<li>${a(t(r))}</li>`).join("");return`<div class="ticker" aria-label="${a(e.name)}">
  <ul class="ticker-track">${n}</ul>
  <ul class="ticker-track" aria-hidden="true">${n}</ul>
</div>`}var P=(e,t)=>e.variants.map(n=>n.size?`${n.size} ${t(n.price)}`:t(n.price)).join(" \xB7 ");function Z({menu:e,t,L:n,url:r,money:i}){let o=e.filter(s=>s.featured&&s.image).slice(0,4);return o.length?`<section class="section" aria-labelledby="sig-title">
  <div class="wrap">
    <p class="script script--sm" aria-hidden="true">No.1</p>
    <h2 id="sig-title" class="h2">${a(t.signature)}</h2>
    <div class="sig">
      ${o.map((s,p)=>`<article class="sig-card">
        <div class="sig-img"><img src="${a(b(r,s.image))}" alt="${a(n(s.name))}" width="800" height="800" loading="lazy">${s.tag?`<span class="tag">${a(n(s.tag))}</span>`:""}<span class="sig-no">0${p+1}</span></div>
        <h3>${a(n(s.name))}</h3>
        ${s.description?`<p class="muted">${a(n(s.description))}</p>`:""}
        <p class="sig-price">${a(P(s,i))}</p>
      </article>`).join("")}
    </div>
  </div>
</section>`:""}function ee(e){let{menu:t,catalog:n,t:r,L:i,money:o}=e,s=n.categories.filter(l=>!l.retail&&t.some(c=>c.category===l.id)),p=l=>[...new Set(l.flatMap(c=>c.variants.map(d=>d.size).filter(Boolean)))];return`<section class="section" id="menu" aria-labelledby="menu-title">
  <div class="wrap">
    <div class="board">
      <h2 id="menu-title" class="board-title">${a(r.menu.title)}</h2>
      <div class="board-grid">
        ${s.map(l=>{let c=t.filter(h=>h.category===l.id),d=p(c);return`<div class="board-cat">
          <h3><span>${a(i(l.name))}</span>${d.length?`<span class="cols" aria-hidden="true">${d.map(h=>`<span>${a(h)}</span>`).join("")}</span>`:""}</h3>
          <ul>${c.map(h=>`<li class="row">
            <div class="row-name"><span>${a(i(h.name))}</span>${h.tag?`<em class="pill">${a(i(h.tag))}</em>`:""}${h.description&&!h.featured?`<small>${a(i(h.description))}</small>`:""}</div>
            <span class="dots" aria-hidden="true"></span>
            <span class="cols">${d.length&&h.variants.every(g=>g.size)?d.map(g=>{let v=h.variants.find(y=>y.size===g);return`<span>${v?`<span class="sr">${a(r.menu.size)} ${a(g)}: </span>${a(o(v.price))}`:"\u2013"}</span>`}).join(""):`<span class="one">${a(o(h.variants[0].price))}</span>`}</span>
          </li>`).join("")}</ul>
        </div>`}).join("")}
      </div>
      <p class="board-note">${a(r.menu.note)}</p>
    </div>
    ${ae(e)}
  </div>
</section>`}function ae({site:e,market:t,t:n}){let r=Array.isArray(e.delivery)?e.delivery:e.delivery?.[t.id]??[];return r.length?`<div class="delivery">
  <span>${m("bike",20)} ${a(n.delivery)}</span>
  ${r.map(i=>`<a class="btn btn--light" href="${a(i.url)}" target="_blank" rel="noopener">${a(i.name)} ${m("arrow",16)}</a>`).join("")}
</div>`:""}function te({site:e,t,L:n,url:r}){return e.gallery?.length?`<section class="section section--soft" id="space" aria-labelledby="space-title">
  <div class="wrap">
    <p class="script script--sm" aria-hidden="true">${a(e.name)}</p>
    <h2 id="space-title" class="h2">${a(t.space)}</h2>
    <div class="mosaic">
      ${e.gallery.slice(0,4).map((i,o)=>`<figure class="tile tile-${o+1}">
        <img src="${a(b(r,i.image))}" alt="${a(n(i.caption))}" loading="lazy">
        ${i.caption?`<figcaption>${a(n(i.caption))}</figcaption>`:""}
      </figure>`).join("")}
    </div>
  </div>
</section>`:""}function ne({site:e,beans:t,t:n,L:r,url:i,money:o,channels:s}){let p=e.roast;if(!p&&!t.length)return"";let l=s[0];return`<section class="section" id="beans" aria-labelledby="beans-title">
  <div class="wrap roast">
    <div class="roast-img"><img src="${i("assets/photos/roast.webp")}" alt="" width="1100" height="800" loading="lazy"></div>
    <div class="roast-copy">
      <h2 id="beans-title" class="h2">${a(r(p?.title)||n.nav.beans)}</h2>
      ${p?.body?`<p class="lead">${a(r(p.body))}</p>`:""}
      ${p?.facts?.length?`<dl class="facts">${p.facts.map(c=>`<div><dt>${a(r(c.value))}</dt><dd>${a(r(c.label))}</dd></div>`).join("")}</dl>`:""}
    </div>
  </div>
  ${t.length?`<div class="wrap bags">
    ${t.map(c=>`<article class="bag">
      ${c.image?`<img src="${a(b(i,c.image))}" alt="${a(r(c.name))}" width="800" height="800" loading="lazy">`:""}
      <div class="bag-body">
        <h3>${a(r(c.name))}</h3>
        ${c.description?`<p class="muted">${a(r(c.description))}</p>`:""}
        <p class="bag-price">${a(P(c,o))}</p>
        <a class="btn btn--accent" href="${a(w(l,e.contact,n.orderText.replace("{product}",`${r(c.name)} ${c.variants[0].size??""}`.trim())))}" ${k(l)}>${m("bag",18)} ${a(n.beans.buy)}</a>
      </div>
    </article>`).join("")}
    <p class="bags-note muted">${a(n.beans.note)}</p>
  </div>`:""}
</section>`}function se({site:e,t,L:n,channels:r}){let i=encodeURIComponent(e.contact.mapQuery??n(e.contact.address)),o=s=>s.length===7?t.days.join(", "):I(s,t.days);return`<section class="section section--soft" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${a(t.visit.title)}</h2>
      ${H(e,t)}
      <h3 class="h4">${m("clock",18)} ${a(t.visit.hours)}</h3>
      <table class="hours"><tbody>${e.hours.map(s=>`<tr><th scope="row">${a(o(s.days))}</th><td>${a(s.open)} \u2013 ${a(s.close)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${m("pin",18)} ${a(t.visit.address)}</h3>
      <p>${a(n(e.contact.address))}</p>
      <div class="actions">
        <a class="btn btn--light" href="https://www.google.com/maps/dir/?api=1&amp;destination=${i}" target="_blank" rel="noopener">${a(t.visit.directions)} ${m("arrow",16)}</a>
        ${r.map(s=>`<a class="btn btn--ghost" href="${a(w(s,e.contact))}" ${k(s)}>${m(s,18)} ${a(t.via[s])}</a>`).join("")}
      </div>
    </div>
    <div class="map"><iframe title="${a(t.visit.address)}" src="https://www.google.com/maps?q=${i}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function re({site:e,t,L:n,market:r}){let i=e.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${a(e.name)}</p><p class="muted">${a(n(e.tagline))}</p></div>
    <div><p class="foot-h">${a(t.footer.contact)}</p><ul>
      ${i.phone?`<li><a href="tel:${M(i.phone)}">${a(i.phone)}</a></li>`:""}
      ${i.email?`<li><a href="mailto:${a(i.email)}">${a(i.email)}</a></li>`:""}
      <li>${a(n(i.address))}</li></ul></div>
    ${e.social?`<div><p class="foot-h">${a(t.footer.follow)}</p><ul>${Object.entries(e.social).filter(([,o])=>o).map(([o,s])=>`<li><a href="${a(s)}" target="_blank" rel="noopener">${a(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom"><span>\xA9 ${new Date().getFullYear()} ${a(e.name)}</span>${D(e,t,r.lang)}</div>
</footer>`}function ie({site:e,market:t,L:n,abs:r,menu:i,beans:o,catalog:s}){let p=[...i,...o];return{"@context":"https://schema.org","@type":"CafeOrCoffeeShop",name:e.name,url:r(`${t.id}/`),image:r("assets/photos/hero.webp"),description:n(e.intro),telephone:e.contact.phone,email:e.contact.email,servesCuisine:"Coffee",address:{"@type":"PostalAddress",streetAddress:n(e.contact.address)},currenciesAccepted:t.currency,openingHoursSpecification:N(e.hours),hasMenu:{"@type":"Menu",hasMenuSection:s.categories.filter(l=>p.some(c=>c.category===l.id)).map(l=>({"@type":"MenuSection",name:n(l.name),hasMenuItem:p.filter(c=>c.category===l.id).map(c=>({"@type":"MenuItem",name:n(c.name),...c.description?{description:n(c.description)}:{},offers:c.variants.map(d=>({"@type":"Offer",...d.size?{name:d.size}:{},price:d.price,priceCurrency:t.currency}))}))}))}}}export{me as renderSite};
