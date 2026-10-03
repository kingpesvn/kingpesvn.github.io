var P={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},a=(e="")=>String(e).replace(/[&<>"']/g,t=>P[t]);function S(e,t,s="vi"){return e==null?"":typeof e!="object"?String(e):e[t]??e[s]??Object.values(e)[0]??""}var V={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},j=e=>V[e]??"en-US";function F(e,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(e)-.01);let s=Number(t)||1;return Math.max(s,Math.round(e/s)*s)}function C(e,t){if(t.default)return e.basePrice;let s=e.prices?.[t.id]??{mode:"auto"};return s.mode==="hidden"?null:s.mode==="manual"?s.amount:F(e.basePrice*t.rate,t.rounding)}var W=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function R(e,t){let s={style:"currency",currency:t.currency};return W.has(t.currency)&&(s.maximumFractionDigits=0),new Intl.NumberFormat(j(t.lang),s).format(e)}function I(e="/"){let t=e.endsWith("/")?e:`${e}/`;return(s="")=>t+String(s).replace(/^\//,"")}var z=(e="")=>e.startsWith("uploads/")?e:/^([a-z]+:|\/)/i.test(e)?null:`assets/${e}`,b=(e,t)=>{let s=z(t);return s==null?t:e(s)},y=(e="")=>String(e).replace(/\D/g,"");function M(e,t,s=""){switch(e){case"phone":return`tel:${y(t.phone)}`;case"zalo":return`https://zalo.me/${y(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${y(t.whatsapp)}${s?`?text=${encodeURIComponent(s)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${s?`?subject=${encodeURIComponent(s)}`:""}`;default:return"#"}}var O=e=>`<script type="application/ld+json">${JSON.stringify(e).replace(/</g,"\\u003c")}<\/script>`;var B={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>'},d=(e,t=20,s="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${s}>${B[e]??""}</svg>`,x=[1,2,3,4,5,6,0],E=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function A(e,t){let s=e.map(n=>x.indexOf(n)).sort((n,i)=>n-i);return s.every((n,i)=>i===0||n===s[i-1]+1)&&s.length>2?`${t[x[s[0]]]} \u2013 ${t[x[s.at(-1)]]}`:s.map(n=>t[x[n]]).join(", ")}var N=e=>e.map(t=>({"@type":"OpeningHoursSpecification",dayOfWeek:t.days.map(s=>E[s]),opens:t.open,closes:t.close}));function U(e){return new Intl.NumberFormat(j(e.lang),{style:"currency",currency:e.currency}).formatToParts(0).find(s=>s.type==="currency")?.value??e.currency}var k=e=>e==="phone"||e==="email"?"":'target="_blank" rel="noopener"',D=e=>`<div class="suggest" id="market-suggest" data-suggest="${a(e.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${a(e.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${a(e.market.dismiss)}">\xD7</button>
</div>`,H=(e,t)=>`<p class="status" data-open-status data-hours='${a(JSON.stringify(e.hours))}' data-tz="${a(e.timezone??"Asia/Ho_Chi_Minh")}" data-open="${a(t.visit.open)}" data-closed="${a(t.visit.closed)}" hidden></p>`,T=(e,t,s)=>e.badge===!1?"":`<a class="made" href="https://kingpes.net/${a(s==="vi"||s==="ja"?s:"en")}/?ref=badge" rel="nofollow" target="_blank">${a(t.footer.madeWith)}</a>`;function _({site:e,markets:t,url:s,abs:r}){let n=t.find(o=>o.default)??t[0],i=t.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${a(n.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${a(e.name)}</title>
<link rel="canonical" href="${r(`${n.id}/`)}">
${t.map(o=>`<link rel="alternate" hreflang="${a(o.lang)}-${a(o.country)}" href="${r(`${o.id}/`)}">`).join(`
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
<body><p>${t.map(o=>`<a href="${s(`${o.id}/`)}">${a(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var J="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap";function q(e,t){return e.products.map(s=>({...s,variants:s.variants.map(r=>({...r,price:C(r,t)})).filter(r=>r.price!=null)})).filter(s=>s.variants.length>0)}function ue({site:e,catalog:t,i18n:s,template:r,basePath:n="/",siteUrl:i=e.domain}){let o=I(n),c=$=>new URL(o($),i).href,l=t.markets,u=l.map($=>{let m=$.lang,v=s[m]??s.en??s.vi,p=h=>S(h,m,"en"),g=e.orderChannels?.[$.id]??["phone"],w={site:e,catalog:t,market:$,markets:l,lang:m,t:v,L:p,url:o,abs:c,channels:g,money:h=>R(h,$),template:r,items:q(t,$)};return{path:`${$.id}/index.html`,html:Y(w)}});return u.push({path:"index.html",html:_({site:e,markets:l,url:o,abs:c})}),u}function Y(e){let{site:t,market:s,markets:r,lang:n,t:i,L:o,url:c,abs:l,channels:u}=e,$=`${t.name} \xB7 ${o(t.tagline)}`,m=t.theme??{},v=["primary","ink","bg","surface","soft","accent"].filter(h=>m[h]).map(h=>`--${h}:${m[h]}`).join(";"),p=r.find(h=>h.default)??r[0],g=r.map(h=>({id:h.id,lang:h.lang,country:h.country,currency:h.currency,href:c(`${h.id}/`)})),f=u[0],w=t.heroImage?l(z(t.heroImage)):l("assets/photos/hero.webp");return`<!doctype html>
<html lang="${a(n)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${a($)}</title>
<meta name="description" content="${a(o(t.intro))}">
<link rel="canonical" href="${l(`${s.id}/`)}">
${r.map(h=>`<link rel="alternate" hreflang="${a(h.lang)}-${a(h.country)}" href="${l(`${h.id}/`)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${l(`${p.id}/`)}">
<meta property="og:type" content="website">
<meta property="og:title" content="${a($)}">
<meta property="og:description" content="${a(o(t.intro))}">
<meta property="og:url" content="${l(`${s.id}/`)}">
<meta property="og:image" content="${a(w)}">
<meta property="og:site_name" content="${a(t.name)}">
<meta name="theme-color" content="${a(m.primary??"#B42318")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${J}">
<link rel="stylesheet" href="${c("assets/style.css")}">
<style>:root{${v}}</style>
${O(ce(e))}
<script src="${c("assets/site.js")}" defer><\/script>
</head>
<body data-market="${a(s.id)}" data-markets='${a(JSON.stringify(g))}'>
<a class="skip" href="#main">${a(i.skip)}</a>
${D(i)}
${K(e)}
<main id="main">
${Q(e)}
${G(e)}
${Z(e)}
${L(e)}
${ae(e)}
${te(e)}
${se(e)}
${ne(e)}
${ie(e)}
</main>
${oe(e)}
<nav class="dock" aria-label="${a(i.nav.order)}">
  <a href="#menu">${d("bowl",20)}<span>${a(i.nav.menu)}</span></a>
  <a class="primary" href="${a(M(f,t.contact,i.orderText))}" ${k(f)}>${d(f,20)}<span>${a(i.nav.order)}</span></a>
</nav>
</body>
</html>
`}function K({site:e,market:t,markets:s,t:r,url:n,channels:i}){let o=[["#menu",r.nav.menu],["#story",r.nav.story],["#reserve",r.nav.reserve],["#visit",r.nav.visit]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${n(`${t.id}/`)}">
      ${e.logo?`<img src="${a(b(n,e.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${d("bowl",22)}</span>`}
      <span>${a(e.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${o.map(([c,l])=>`<a href="${c}">${a(l)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${a(r.market.label)}">${d("globe",18)}<span>${a(t.id.toUpperCase())}<span class="cur"> \xB7 ${a(U(t))}</span></span></summary>
        <ul>${s.map(c=>`<li><a href="${n(`${c.id}/`)}" hreflang="${a(c.lang)}"${c.id===t.id?' aria-current="true"':""}>${a(c.country)} \xB7 ${a(c.currency)}</a></li>`).join("")}</ul>
      </details>
      <a class="btn btn--primary hide-sm" href="${a(M(i[0],e.contact,r.orderText))}" ${k(i[0])}>${d(i[0],18)} ${a(r.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${a(r.nav.openMenu)}">${d("menu",22)}</summary>
        <nav aria-label="Menu">${o.map(([c,l])=>`<a href="${c}">${a(l)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}function Q({site:e,t,L:s,url:r,channels:n}){let i=e.hours.map(u=>u.open).sort()[0],o=e.heroImage?a(b(r,e.heroImage)):r("assets/photos/hero.webp"),c=encodeURIComponent(e.contact.mapQuery??s(e.contact.address)),l=s(e.since);return`<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${l?`<p class="since">${a(l)}</p>`:""}
      <h1><span class="h1-name">${a(e.name)}</span><span class="h1-tag">${a(s(e.tagline))}</span></h1>
      <p class="lead">${a(s(e.intro))}</p>
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#menu">${d("bowl",18)} ${a(t.hero.menu)}</a>
        <a class="btn btn--line btn--lg" href="#reserve">${d("calendar",18)} ${a(t.hero.reserve)}</a>
      </div>
      <p class="hero-meta">${d("clock",18)} ${a(t.hero.openFrom)} ${a(i)} \xB7 <a href="https://www.google.com/maps/dir/?api=1&amp;destination=${c}" target="_blank" rel="noopener">${d("pin",16)} ${a(s(e.contact.address))}</a></p>
    </div>
    <figure class="hero-img">
      <img src="${o}" alt="${a(s(e.tagline))}" width="1600" height="1000" fetchpriority="high">
      ${l?`<span class="stamp" aria-hidden="true"><span>${a(l)}</span></span>`:""}
    </figure>
  </div>
</section>`}function G({site:e,L:t}){return e.highlights?.length?`<section class="promise" aria-label="${a(e.name)}">
  <ul class="wrap promise-list">${e.highlights.map(s=>`<li>${d("check",18)} ${a(t(s))}</li>`).join("")}</ul>
</section>`:""}var X=(e,t,s)=>e.variants.map(r=>r.size?`${s(r.size)} ${t(r.price)}`:t(r.price)).join(" \xB7 ");function Z({items:e,t,L:s,url:r,money:n}){let i=e.filter(o=>o.featured&&o.image).slice(0,4);return i.length?`<section class="section" aria-labelledby="sig-title">
  <div class="wrap">
    <h2 id="sig-title" class="h2">${a(t.signature)}</h2>
    <div class="sig">
      ${i.map(o=>`<article class="sig-card">
        <div class="sig-img"><img src="${a(b(r,o.image))}" alt="${a(s(o.name))}" width="800" height="800" loading="lazy">${o.tag?`<span class="tag">${a(s(o.tag))}</span>`:""}</div>
        <div class="sig-body">
          <h3>${a(s(o.name))}</h3>
          ${o.description?`<p class="muted">${a(s(o.description))}</p>`:""}
          <p class="sig-price">${a(X(o,n,s))}</p>
        </div>
      </article>`).join("")}
    </div>
  </div>
</section>`:""}function L(e){let{items:t,catalog:s,t:r,L:n,url:i,money:o}=e,c=s.categories.filter(u=>t.some($=>$.category===u.id)),l=u=>[...new Set(u.flatMap($=>$.variants.map(m=>n(m.size)).filter(Boolean)))];return`<section class="section section--soft" id="menu" aria-labelledby="menu-title">
  <div class="wrap">
    <div class="paper">
      <h2 id="menu-title" class="paper-title"><span>${a(r.menu.title)}</span></h2>
      <div class="paper-grid">
        ${c.map(u=>{let $=t.filter(p=>p.category===u.id),m=l($),v=m.length>0&&$.every(p=>p.variants.every(g=>g.size));return`<div class="paper-cat">
          <h3><span>${a(n(u.name))}</span>${v?`<span class="cols" aria-hidden="true">${m.map(p=>`<span>${a(p)}</span>`).join("")}</span>`:""}</h3>
          <ul>${$.map(p=>`<li class="row">
            ${p.image&&!p.featured?`<img class="row-img" src="${a(b(i,p.image))}" alt="" width="64" height="64" loading="lazy">`:""}
            <div class="row-name"><span>${a(n(p.name))}</span>${p.tag?`<em class="pill">${a(n(p.tag))}</em>`:""}${p.description&&!p.featured?`<small>${a(n(p.description))}</small>`:""}</div>
            <span class="dots" aria-hidden="true"></span>
            <span class="cols">${v?m.map(g=>{let f=p.variants.find(w=>n(w.size)===g);return`<span>${f?`<span class="sr">${a(r.menu.size)} ${a(g)}: </span>${a(o(f.price))}`:"\u2013"}</span>`}).join(""):`<span class="one">${a(o(p.variants[0].price))}</span>`}</span>
          </li>`).join("")}</ul>
        </div>`}).join("")}
      </div>
      <p class="paper-note">${a(r.menu.note)}</p>
    </div>
    ${ee(e)}
  </div>
</section>`}function ee({site:e,market:t,t:s}){let r=Array.isArray(e.delivery)?e.delivery:e.delivery?.[t.id]??[];return r.length?`<div class="delivery">
  <span>${d("bike",20)} ${a(s.delivery)}</span>
  ${r.map(n=>`<a class="btn btn--line" href="${a(n.url)}" target="_blank" rel="noopener">${a(n.name)} ${d("arrow",16)}</a>`).join("")}
</div>`:""}function ae({site:e,t,L:s,url:r}){let n=e.story;if(!n)return"";let i=(e.gallery??[]).slice(0,3);return`<section class="section" id="story" aria-labelledby="story-title">
  <div class="wrap story">
    <figure class="story-img"><img src="${r("assets/photos/story.webp")}" alt="" width="900" height="1100" loading="lazy"></figure>
    <div class="story-copy">
      <p class="kicker">${a(t.story.title)}</p>
      <h2 id="story-title" class="h2">${a(s(n.title))}</h2>
      ${n.body?`<p class="lead">${a(s(n.body))}</p>`:""}
      ${n.timeline?.length?`<ol class="timeline">${n.timeline.map(o=>`<li><span class="year">${a(s(o.year))}</span><span>${a(s(o.text))}</span></li>`).join("")}</ol>`:""}
      ${n.signature?`<p class="sign">\u2014 ${a(s(n.signature))}</p>`:""}
    </div>
  </div>
  ${i.length?`<div class="wrap pics">${i.map(o=>`<figure><img src="${a(b(r,o.image))}" alt="${a(s(o.caption))}" width="1000" height="750" loading="lazy">${o.caption?`<figcaption>${a(s(o.caption))}</figcaption>`:""}</figure>`).join("")}</div>`:""}
</section>`}function te({site:e,t,L:s,url:r}){let n=e.broth;return n?`<section class="section broth" aria-labelledby="broth-title">
  <div class="wrap broth-grid">
    <div class="broth-copy">
      <p class="kicker">${a(t.broth.title)}</p>
      <h2 id="broth-title" class="h2">${a(s(n.title))}</h2>
      ${n.body?`<p class="lead">${a(s(n.body))}</p>`:""}
      ${n.facts?.length?`<dl class="facts">${n.facts.map(i=>`<div><dt>${a(s(i.value))}</dt><dd>${a(s(i.label))}</dd></div>`).join("")}</dl>`:""}
    </div>
    <figure class="broth-img"><img src="${r("assets/photos/herbs.webp")}" alt="" width="1100" height="800" loading="lazy"></figure>
  </div>
</section>`:""}function se({site:e,t,L:s,channels:r}){let n=e.reserve;return n?`<section class="section" id="reserve" aria-labelledby="reserve-title">
  <div class="wrap">
    <div class="ticket">
      <div>
        <h2 id="reserve-title" class="h2">${a(s(n.title))}</h2>
        ${n.body?`<p class="lead">${a(s(n.body))}</p>`:""}
        <p class="muted">${a(t.reserve.note)}</p>
      </div>
      <div class="ticket-actions">
        ${e.contact.phone?`<a class="btn btn--primary btn--lg" href="tel:${y(e.contact.phone)}">${d("phone",20)} ${a(t.reserve.call)} \xB7 ${a(e.contact.phone)}</a>`:""}
        ${r.filter(i=>i!=="phone").map(i=>`<a class="btn btn--line btn--lg" href="${a(M(i,e.contact,t.orderText))}" ${k(i)}>${d(i,20)} ${a(t.via[i])}</a>`).join("")}
      </div>
    </div>
  </div>
</section>`:""}function ne({site:e,t,L:s}){return e.reviews?.length?`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${a(t.reviews.title)}</h2>
    <div class="reviews">${e.reviews.map(r=>`<figure class="review">
      <p class="stars" aria-label="${a(r.rating)}/5">${Array.from({length:5},(n,i)=>`<span class="${i<r.rating?"on":""}">${d("star",16)}</span>`).join("")}</p>
      <blockquote>${a(s(r.text))}</blockquote>
      <figcaption>${a(r.name)}</figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`:""}function re(e,t){let s=new Map;for(let r of e){let n=[...r.days].sort().join(",");s.has(n)||s.set(n,{days:r.days,slots:[]}),s.get(n).slots.push(`${r.open} \u2013 ${r.close}`)}return[...s.values()].map(r=>({label:r.days.length===7?t.visit.everyDay??t.days.join(", "):A(r.days,t.days),slots:r.slots.join(", ")}))}function ie({site:e,t,L:s,channels:r}){let n=encodeURIComponent(e.contact.mapQuery??s(e.contact.address));return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${a(t.visit.title)}</h2>
      ${H(e,t)}
      <h3 class="h4">${d("clock",18)} ${a(t.visit.hours)}</h3>
      <table class="hours"><tbody>${re(e.hours,t).map(i=>`<tr><th scope="row">${a(i.label)}</th><td>${a(i.slots)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${d("pin",18)} ${a(t.visit.address)}</h3>
      <p>${a(s(e.contact.address))}</p>
      <div class="actions">
        <a class="btn btn--line" href="https://www.google.com/maps/dir/?api=1&amp;destination=${n}" target="_blank" rel="noopener">${a(t.visit.directions)} ${d("arrow",16)}</a>
        ${r.map(i=>`<a class="btn btn--ghost" href="${a(M(i,e.contact,t.orderText))}" ${k(i)}>${d(i,18)} ${a(t.via[i])}</a>`).join("")}
      </div>
    </div>
    <div class="map"><iframe title="${a(t.visit.address)}" src="https://www.google.com/maps?q=${n}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function oe({site:e,t,L:s,market:r}){let n=e.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${a(e.name)}</p><p class="muted">${a(s(e.tagline))}</p></div>
    <div><p class="foot-h">${a(t.footer.contact)}</p><ul>
      ${n.phone?`<li><a href="tel:${y(n.phone)}">${a(n.phone)}</a></li>`:""}
      ${n.email?`<li><a href="mailto:${a(n.email)}">${a(n.email)}</a></li>`:""}
      <li>${a(s(n.address))}</li></ul></div>
    ${e.social?`<div><p class="foot-h">${a(t.footer.follow)}</p><ul>${Object.entries(e.social).filter(([,i])=>i).map(([i,o])=>`<li><a href="${a(o)}" target="_blank" rel="noopener">${a(i[0].toUpperCase()+i.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom"><span>\xA9 ${new Date().getFullYear()} ${a(e.name)}</span>${T(e,t,r.lang)}</div>
</footer>`}function ce({site:e,market:t,L:s,abs:r,items:n,catalog:i}){return{"@context":"https://schema.org","@type":"Restaurant",name:e.name,url:r(`${t.id}/`),image:r("assets/photos/hero.webp"),description:s(e.intro),telephone:e.contact.phone,email:e.contact.email,servesCuisine:"Vietnamese",acceptsReservations:!0,address:{"@type":"PostalAddress",streetAddress:s(e.contact.address)},currenciesAccepted:t.currency,openingHoursSpecification:N(e.hours),hasMenu:{"@type":"Menu",hasMenuSection:i.categories.filter(o=>n.some(c=>c.category===o.id)).map(o=>({"@type":"MenuSection",name:s(o.name),hasMenuItem:n.filter(c=>c.category===o.id).map(c=>({"@type":"MenuItem",name:s(c.name),...c.description?{description:s(c.description)}:{},offers:c.variants.map(l=>({"@type":"Offer",...l.size?{name:s(l.size)}:{},price:l.price,priceCurrency:t.currency}))}))}))}}}export{ue as renderSite};
