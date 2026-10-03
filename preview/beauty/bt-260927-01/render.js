var V={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},a=(e="")=>String(e).replace(/[&<>"']/g,t=>V[t]);function C(e,t,n="vi"){return e==null?"":typeof e!="object"?String(e):e[t]??e[n]??Object.values(e)[0]??""}var _={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},S=e=>_[e]??"en-US";function E(e,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(e)-.01);let n=Number(t)||1;return Math.max(n,Math.round(e/n)*n)}function z(e,t){if(t.default)return e.basePrice;let n=e.prices?.[t.id]??{mode:"auto"};return n.mode==="hidden"?null:n.mode==="manual"?n.amount:E(e.basePrice*t.rate,t.rounding)}var P=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function O(e,t){let n={style:"currency",currency:t.currency};return P.has(t.currency)&&(n.maximumFractionDigits=0),new Intl.NumberFormat(S(t.lang),n).format(e)}function R(e="/"){let t=e.endsWith("/")?e:`${e}/`;return(n="")=>t+String(n).replace(/^\//,"")}var L=(e="")=>e.startsWith("uploads/")?e:/^([a-z]+:|\/)/i.test(e)?null:`assets/${e}`,M=(e,t)=>{let n=L(t);return n==null?t:e(n)},v=(e="")=>String(e).replace(/\D/g,"");function k(e,t,n=""){switch(e){case"phone":return`tel:${v(t.phone)}`;case"zalo":return`https://zalo.me/${v(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${v(t.whatsapp)}${n?`?text=${encodeURIComponent(n)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${n?`?subject=${encodeURIComponent(n)}`:""}`;default:return"#"}}var N=e=>`<script type="application/ld+json">${JSON.stringify(e).replace(/</g,"\\u003c")}<\/script>`;var T={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>'},h=(e,t=20,n="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${n}>${T[e]??""}</svg>`,x=[1,2,3,4,5,6,0],W=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function D(e,t){let n=e.map(s=>x.indexOf(s)).sort((s,o)=>s-o);return n.every((s,o)=>o===0||s===n[o-1]+1)&&n.length>2?`${t[x[n[0]]]} \u2013 ${t[x[n.at(-1)]]}`:n.map(s=>t[x[s]]).join(", ")}var I=e=>e.map(t=>({"@type":"OpeningHoursSpecification",dayOfWeek:t.days.map(n=>W[n]),opens:t.open,closes:t.close}));function U(e){return new Intl.NumberFormat(S(e.lang),{style:"currency",currency:e.currency}).formatToParts(0).find(n=>n.type==="currency")?.value??e.currency}var j=e=>e==="phone"||e==="email"?"":'target="_blank" rel="noopener"',A=e=>`<div class="suggest" id="market-suggest" data-suggest="${a(e.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${a(e.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${a(e.market.dismiss)}">\xD7</button>
</div>`,F=(e,t)=>`<p class="status" data-open-status data-hours='${a(JSON.stringify(e.hours))}' data-tz="${a(e.timezone??"Asia/Ho_Chi_Minh")}" data-open="${a(t.visit.open)}" data-closed="${a(t.visit.closed)}" hidden></p>`,H=(e,t,n)=>e.badge===!1?"":`<a class="made" href="https://kingpes.net/${a(n==="vi"||n==="ja"?n:"en")}/?ref=badge" rel="nofollow" target="_blank">${a(t.footer.madeWith)}</a>`;function q({site:e,markets:t,url:n,abs:i}){let s=t.find(r=>r.default)??t[0],o=t.map(r=>({id:r.id,lang:r.lang,country:r.country}));return`<!doctype html>
<html lang="${a(s.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${a(e.name)}</title>
<link rel="canonical" href="${i(`${s.id}/`)}">
${t.map(r=>`<link rel="alternate" hreflang="${a(r.lang)}-${a(r.country)}" href="${i(`${r.id}/`)}">`).join(`
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
<body><p>${t.map(r=>`<a href="${n(`${r.id}/`)}">${a(r.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var J="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap";function B(e,t){return e.products.map(n=>({...n,variants:n.variants.map(i=>({...i,price:z(i,t)})).filter(i=>i.price!=null)})).filter(n=>n.variants.length>0)}function he({site:e,catalog:t,i18n:n,template:i,basePath:s="/",siteUrl:o=e.domain}){let r=R(s),c=m=>new URL(r(m),o).href,l=t.markets,u=l.map(m=>{let $=m.lang,b=n[$]??n.en??n.vi,y=f=>C(f,$,"en"),p=B(t,m),d=e.bookingChannels?.[m.id]??["phone"],w={site:e,catalog:t,market:m,markets:l,lang:$,t:b,L:y,url:r,abs:c,services:p,channels:d,money:f=>O(f,m),template:i};return{path:`${m.id}/index.html`,html:Y(w)}});return u.push({path:"index.html",html:q({site:e,markets:l,url:r,abs:c})}),u}function Y(e){let{site:t,market:n,markets:i,lang:s,t:o,L:r,url:c,abs:l}=e,u=`${t.name} \xB7 ${r(t.tagline)}`,m=t.theme??{},$=["primary","ink","bg","surface","soft","accent"].filter(p=>m[p]).map(p=>`--${p}:${m[p]}`).join(";"),b=i.find(p=>p.default)??i[0],y=i.map(p=>({id:p.id,lang:p.lang,country:p.country,currency:p.currency,href:c(`${p.id}/`)}));return`<!doctype html>
<html lang="${a(s)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${a(u)}</title>
<meta name="description" content="${a(r(t.intro))}">
<link rel="canonical" href="${l(`${n.id}/`)}">
${i.map(p=>`<link rel="alternate" hreflang="${a(p.lang)}-${a(p.country)}" href="${l(`${p.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${l(`${b.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${a(u)}">
<meta property="og:description" content="${a(r(t.intro))}">
<meta property="og:url" content="${l(`${n.id}/`)}">
<meta property="og:site_name" content="${a(t.name)}">
<meta name="theme-color" content="${a(m.bg??"#F2F4EF")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${J}">
<link rel="stylesheet" href="${c("assets/style.css")}">
<style>:root{${$}}</style>
${N(ie(e))}
<script src="${c("assets/site.js")}" defer><\/script>
</head>
<body data-market="${a(n.id)}" data-markets='${a(JSON.stringify(y))}'>
<a class="skip" href="#main">${a(o.skip)}</a>
${A(o)}
${K(e)}
<main id="main">
${G(e)}
${Q(e)}
${X(e)}
${Z(e)}
${ee(e)}
${ae(e)}
${te(e)}
${ne(e)}
</main>
${re(e)}
<nav class="bookbar" aria-label="${a(o.nav.book)}">
  <a class="primary" href="#booking">${h("calendar",20)}<span>${a(o.nav.book)}</span></a>
  <a href="${a(k(e.channels[0],t.contact))}" ${j(e.channels[0])}>${h(e.channels[0],20)}<span>${a(o.via[e.channels[0]])}</span></a>
</nav>
</body>
</html>
`}function K({site:e,market:t,markets:n,t:i,url:s}){let o=[["#services",i.nav.services],["#prices",i.nav.prices],["#team",i.nav.team]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${s(`${t.id}/`)}">
      ${e.logo?`<img src="${a(M(s,e.logo))}" alt="" width="36" height="36">`:`<span class="brand-mark" aria-hidden="true">${h("leaf",22)}</span>`}
      <span>${a(e.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${o.map(([r,c])=>`<a href="${r}">${a(c)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${a(i.market.label)}">${h("globe",18)}<span>${a(t.id.toUpperCase())}<span class="cur"> \xB7 ${a(U(t))}</span></span></summary>
        <ul>${n.map(r=>`<li><a href="${s(`${r.id}/`)}" hreflang="${a(r.lang)}"${r.id===t.id?' aria-current="true"':""}>${a(r.country)} \xB7 ${a(r.currency)}</a></li>`).join("")}</ul>
      </details>
      <a class="btn btn--primary hide-sm" href="#booking">${a(i.nav.book)}</a>
      <details class="mnav">
        <summary aria-label="${a(i.nav.openMenu)}">${h("menu",22)}</summary>
        <nav aria-label="Menu">${o.map(([r,c])=>`<a href="${r}">${a(c)}</a>`).join("")}<a href="#booking">${a(i.nav.book)}</a></nav>
      </details>
    </div>
  </div>
</header>`}function G({site:e,t,L:n,url:i}){let s=e.hours[0],o=e.heroImage?a(M(i,e.heroImage)):i("assets/photos/hero.webp");return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">${a(n(e.place))}</p>
      <h1>${a(n(e.tagline))}</h1>
      <p class="lead">${a(n(e.intro))}</p>
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#booking">${h("calendar",18)} ${a(t.hero.book)}</a>
        <a class="btn btn--ghost btn--lg" href="#prices">${a(t.hero.prices)}</a>
      </div>
      <ul class="facts">
        <li>${h("clock",18)} ${a(t.hero.openDaily)} ${a(s.open)} \u2013 ${a(s.close)}</li>
        <li>${h("pin",18)} ${a(n(e.contact.address))}</li>
      </ul>
    </div>
    <div class="hero-art">
      <div class="arch arch--hero"><img src="${o}" alt="${a(e.name)}" width="880" height="1120" fetchpriority="high"></div>
      <span class="seal" aria-hidden="true">${h("leaf",26)}</span>
    </div>
  </div>
</section>`}function Q({services:e,t,L:n,url:i,money:s}){let o=e.filter(r=>r.featured).slice(0,4);return o.length?`<section class="section" id="services" aria-labelledby="sig-title">
  <div class="wrap">
    <div class="head center">
      <span class="rule" aria-hidden="true"></span>
      <h2 id="sig-title" class="h2">${a(t.signature.title)}</h2>
    </div>
    <div class="sig">
      ${o.map(r=>{let c=Math.min(...r.variants.map(l=>l.price));return`<article class="sig-card">
        <div class="arch arch--card">${r.image?`<img src="${a(M(i,r.image))}" alt="" width="780" height="900" loading="lazy">`:""}${r.badge?`<span class="ribbon">${a(n(r.badge))}</span>`:""}</div>
        <h3>${a(n(r.name))}</h3>
        <p class="muted">${a(n(r.description))}</p>
        <p class="sig-foot"><span class="durations">${r.variants.map(l=>`${l.minutes}\u2032`).join(" \xB7 ")}</span><span class="from">${a(t.signature.from).replace("{price}",`<strong>${a(s(c))}</strong>`)}</span></p>
      </article>`}).join("")}
    </div>
  </div>
</section>`:""}function X({services:e,catalog:t,t:n,L:i,money:s}){let o=t.categories.filter(r=>e.some(c=>c.category===r.id));return`<section class="section section--soft" id="prices" aria-labelledby="price-title">
  <div class="wrap">
    <div class="head center">
      <span class="rule" aria-hidden="true"></span>
      <h2 id="price-title" class="h2">${a(n.prices.title)}</h2>
      <p class="muted">${a(n.prices.note)}</p>
    </div>
    <div class="menu">
      ${o.map(r=>`<div class="menu-cat">
        <h3>${a(i(r.name))}</h3>
        <ul>${e.filter(c=>c.category===r.id).map(c=>`<li class="item">
          <div class="item-head"><span class="item-name">${a(i(c.name))}</span>${c.badge?`<span class="pill">${a(i(c.badge))}</span>`:""}</div>
          <p class="item-desc muted">${a(i(c.description))}</p>
          <dl class="rates">${c.variants.map(l=>`<div><dt>${l.minutes} ${a(n.prices.min)}</dt><dd>${a(s(l.price))}</dd></div>`).join("")}</dl>
        </li>`).join("")}</ul>
      </div>`).join("")}
    </div>
  </div>
</section>`}function Z({site:e,t,L:n}){return e.benefits?.length?`<section class="section" aria-labelledby="ben-title">
  <div class="wrap">
    <h2 id="ben-title" class="h2 center">${a(t.benefits)}</h2>
    <div class="benefits">${e.benefits.map(i=>`<div class="benefit">
      <span class="benefit-i">${h(i.icon??"leaf",26)}</span>
      <h3>${a(n(i.title))}</h3>
      <p class="muted">${a(n(i.text))}</p>
    </div>`).join("")}</div>
  </div>
</section>`:""}function ee({site:e,t,L:n}){if(!e.team?.length)return"";let i=s=>s.split(/\s+/).map(o=>o[0]).slice(-2).join("").toUpperCase();return`<section class="section section--soft" id="team" aria-labelledby="team-title">
  <div class="wrap">
    <h2 id="team-title" class="h2 center">${a(t.team.title)}</h2>
    <div class="team">${e.team.map((s,o)=>`<figure class="member">
      <div class="arch arch--portrait tone-${o%3}">${s.photo?`<img src="${a(s.photo)}" alt="${a(s.name)}" loading="lazy">`:`<span class="initials" aria-hidden="true">${a(i(s.name))}</span>`}</div>
      <figcaption><strong>${a(s.name)}</strong><span>${a(n(s.role))}</span><span class="muted">${a(t.team.years.replace("{n}",s.years))}</span></figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`}function ae({site:e,t,L:n}){return e.reviews?.length?`<section class="section" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2 center">${a(t.reviews)}</h2>
    <div class="quotes">${e.reviews.map(i=>`<figure class="quote">
      <div class="stars" aria-label="${i.rating}/5">${Array.from({length:5},(s,o)=>h("star",16,`class="${o<i.rating?"on":""}"`)).join("")}</div>
      <blockquote>\u201C${a(n(i.text))}\u201D</blockquote>
      <figcaption>\u2014 ${a(i.name)}</figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`:""}function te({site:e,t,L:n,services:i,channels:s,money:o,market:r,catalog:c}){let l=t.booking,u=[],[m,$]=e.hours[0].open.split(":").map(Number),[b]=e.hours[0].close.split(":").map(Number);for(let d=m*60+$;d<=(b-1)*60;d+=30)u.push(`${String(Math.floor(d/60)).padStart(2,"0")}:${String(d%60).padStart(2,"0")}`);let y=c.categories.filter(d=>i.some(g=>g.category===d.id)),p=s[0];return`<section class="section section--deep" id="booking" aria-labelledby="book-title">
  <div class="wrap booking">
    <div class="booking-copy">
      <h2 id="book-title" class="h2">${a(l.title)}</h2>
      <p>${a(l.text)}</p>
      <p class="or">${a(l.or)}</p>
      <div class="actions">${s.map(d=>`<a class="btn btn--light" href="${a(k(d,e.contact))}" ${j(d)}>${h(d,18)} ${a(t.via[d])}</a>`).join("")}</div>
    </div>
    <form class="form" id="booking-form" data-channel="${a(p)}" data-href="${a(k(p,e.contact))}" data-message="${a(l.message)}" data-copied="${a(l.copied)}" data-email="${a(e.contact.email??"")}" data-wa="${a(v(e.contact.whatsapp??""))}">
      <div class="row">
        <label>${a(l.name)}<input name="name" autocomplete="name" required></label>
        <label>${a(l.phone)}<input name="phone" type="tel" autocomplete="tel" required></label>
      </div>
      <label>${a(l.service)}<select name="service" required>
        ${y.map(d=>`<optgroup label="${a(n(d.name))}">${i.filter(g=>g.category===d.id).flatMap(g=>g.variants.map(w=>{let f=`${n(g.name)} \xB7 ${w.minutes} ${t.prices.min} \xB7 ${o(w.price)}`;return`<option value="${a(f)}">${a(f)}</option>`})).join("")}</optgroup>`).join("")}
      </select></label>
      <div class="row">
        <label>${a(l.date)}<input name="date" type="date" required></label>
        <label>${a(l.time)}<select name="time" required>${u.map(d=>`<option>${d}</option>`).join("")}</select></label>
      </div>
      <label>${a(l.note)}<textarea name="note" rows="2"></textarea></label>
      <button class="btn btn--accent btn--lg" type="submit">${h(p,18)} ${a(l.submit)}</button>
      <p class="form-msg" role="status" hidden></p>
    </form>
  </div>
</section>`}function ne({site:e,t,L:n}){let i=encodeURIComponent(e.contact.mapQuery??n(e.contact.address)),s=o=>o.length===7?t.everyDay:D(o,t.days);return`<section class="section" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${a(t.visit.title)}</h2>
      ${F(e,t)}
      <h3 class="h4">${h("clock",18)} ${a(t.visit.hours)}</h3>
      <table class="hours"><tbody>${e.hours.map(o=>`<tr><th scope="row">${a(s(o.days))}</th><td>${a(o.open)} \u2013 ${a(o.close)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${h("pin",18)} ${a(t.visit.address)}</h3>
      <p>${a(n(e.contact.address))}</p>
      <a class="btn btn--ghost" href="https://www.google.com/maps/dir/?api=1&amp;destination=${i}" target="_blank" rel="noopener">${a(t.visit.directions)} ${h("arrow",16)}</a>
    </div>
    <div class="map arch arch--map"><iframe title="${a(t.visit.address)}" src="https://www.google.com/maps?q=${i}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function re({site:e,t,L:n,market:i}){let s=e.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${a(e.name)}</p><p class="muted">${a(n(e.tagline))}</p></div>
    <div><p class="foot-h">${a(t.footer.contact)}</p><ul>
      ${s.phone?`<li><a href="tel:${v(s.phone)}">${a(s.phone)}</a></li>`:""}
      ${s.email?`<li><a href="mailto:${a(s.email)}">${a(s.email)}</a></li>`:""}
      <li>${a(n(s.address))}</li></ul></div>
    ${e.social?`<div><p class="foot-h">${a(t.footer.follow)}</p><ul>${Object.entries(e.social).filter(([,o])=>o).map(([o,r])=>`<li><a href="${a(r)}" target="_blank" rel="noopener">${a(o[0].toUpperCase()+o.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom"><span>\xA9 ${new Date().getFullYear()} ${a(e.name)}</span>${H(e,t,i.lang)}</div>
</footer>`}function ie({site:e,market:t,L:n,abs:i,services:s,catalog:o}){return{"@context":"https://schema.org","@type":"DaySpa",name:e.name,url:i(`${t.id}/`),description:n(e.intro),telephone:e.contact.phone,email:e.contact.email,address:{"@type":"PostalAddress",streetAddress:n(e.contact.address)},currenciesAccepted:t.currency,openingHoursSpecification:I(e.hours),hasOfferCatalog:{"@type":"OfferCatalog",name:e.name,itemListElement:o.categories.filter(r=>s.some(c=>c.category===r.id)).map(r=>({"@type":"OfferCatalog",name:n(r.name),itemListElement:s.filter(c=>c.category===r.id).flatMap(c=>c.variants.map(l=>({"@type":"Offer",name:`${n(c.name)} (${l.minutes}\u2032)`,price:l.price,priceCurrency:t.currency,itemOffered:{"@type":"Service",name:n(c.name),description:n(c.description)}})))}))},...e.reviews?.length?{aggregateRating:{"@type":"AggregateRating",ratingValue:(e.reviews.reduce((r,c)=>r+c.rating,0)/e.reviews.length).toFixed(1),reviewCount:e.reviews.length}}:{}}}export{he as renderSite};
