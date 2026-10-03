var Y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(a="")=>String(a).replace(/[&<>"']/g,t=>Y[t]);function C(a,t,r="vi"){return a==null?"":typeof a!="object"?String(a):a[t]??a[r]??Object.values(a)[0]??""}var K={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},L=a=>K[a]??"en-US";function Q(a,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(a)-.01);let r=Number(t)||1;return Math.max(r,Math.round(a/r)*r)}function G(a,t){if(t.default)return a.basePrice;let r=a.prices?.[t.id]??{mode:"auto"};return r.mode==="hidden"?null:r.mode==="manual"?r.amount:Q(a.basePrice*t.rate,t.rounding)}var X=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function V(a,t){let r={style:"currency",currency:t.currency};return X.has(t.currency)&&(r.maximumFractionDigits=0),new Intl.NumberFormat(L(t.lang),r).format(a)}function R(a,t){return a.products.map(r=>({...r,price:G(r,t)})).filter(r=>r.price!=null)}function A(a="/"){let t=a.endsWith("/")?a:`${a}/`;return(r="")=>t+String(r).replace(/^\//,"")}var I=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,j=(a,t)=>{let r=I(t);return r==null?t:a(r)},S=(a="")=>String(a).replace(/\D/g,"");function w(a,t,r=""){switch(a){case"phone":return`tel:${S(t.phone)}`;case"zalo":return`https://zalo.me/${S(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${S(t.whatsapp)}${r?`?text=${encodeURIComponent(r)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${r?`?subject=${encodeURIComponent(r)}`:""}`;default:return"#"}}var P=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`;var Z={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>'},f=(a,t=20,r="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${r}>${Z[a]??""}</svg>`,z=[1,2,3,4,5,6,0],tt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function F(a,t){let r=a.map(o=>z.indexOf(o)).sort((o,c)=>o-c);return r.every((o,c)=>c===0||o===r[c-1]+1)&&r.length>2?`${t[z[r[0]]]} \u2013 ${t[z[r.at(-1)]]}`:r.map(o=>t[z[o]]).join(", ")}var H=a=>a.map(t=>({"@type":"OpeningHoursSpecification",dayOfWeek:t.days.map(r=>tt[r]),opens:t.open,closes:t.close}));function N(a){return new Intl.NumberFormat(L(a.lang),{style:"currency",currency:a.currency}).formatToParts(0).find(r=>r.type==="currency")?.value??a.currency}var M=a=>a==="phone"||a==="email"?"":'target="_blank" rel="noopener"',D=a=>`<div class="suggest" id="market-suggest" data-suggest="${e(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(a.market.dismiss)}">\xD7</button>
</div>`,B=(a,t)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(a.hours))}' data-tz="${e(a.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(t.visit.open)}" data-closed="${e(t.visit.closed)}" hidden></p>`,T=(a,t,r)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(r==="vi"||r==="ja"?r:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(t.footer.madeWith)}</a>`;function _({site:a,markets:t,url:r,abs:i}){let o=t.find(s=>s.default)??t[0],c=t.map(s=>({id:s.id,lang:s.lang,country:s.country}));return`<!doctype html>
<html lang="${e(o.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(a.name)}</title>
<link rel="canonical" href="${i(`${o.id}/`)}">
${t.map(s=>`<link rel="alternate" hreflang="${e(s.lang)}-${e(s.country)}" href="${i(`${s.id}/`)}">`).join(`
`)}
<script>
(function () {
  var markets = ${JSON.stringify(c)}, root = ${JSON.stringify(r(""))};
  var prefs = (navigator.languages || [navigator.language || '']).map(function (l) { return l.toLowerCase(); });
  var pick = null;
  prefs.some(function (p) { var parts = p.split('-'); return markets.some(function (m) {
    if ((parts[1] && m.country.toLowerCase() === parts[1]) || m.lang === parts[0]) { pick = m; return true; } return false; }); });
  location.replace(root + (pick || markets[0]).id + '/');
})();
<\/script>
</head>
<body><p>${t.map(s=>`<a href="${r(`${s.id}/`)}">${e(s.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var et="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap";function gt({site:a,catalog:t,i18n:r,template:i,basePath:o="/",siteUrl:c=a.domain}){let s=A(o),l=n=>new URL(s(n),c).href,h=t.markets,$=[],g=(n,d)=>`${d.id}/${C(n.slug,d.lang)}/`;for(let n of h){let d=n.lang,v=r[d]??r.vi,u=m=>C(m,d),b=R(t,n),k=a.orderChannels?.[n.id]??["phone"],x={site:a,catalog:t,market:n,markets:h,lang:d,t:v,L:u,url:s,abs:l,channels:k,products:b,productPath:g,price:m=>V(m.price,n),template:i};$.push({path:`${n.id}/index.html`,html:q(x,{kind:"home"})});for(let m of b)$.push({path:`${g(m,n)}index.html`,html:q(x,{kind:"product",product:m})})}return $.push({path:"index.html",html:_({site:a,markets:h,url:s,abs:l})}),$}function q(a,t){let{site:r,market:i,markets:o,lang:c,L:s,url:l,abs:h,catalog:$,productPath:g}=a,n=t.kind==="home",d=t.product,v=n?`${i.id}/`:g(d,i),u=n?`${r.name} \xB7 ${s(r.tagline)}`:`${s(d.name)} \xB7 ${r.name}`,b=s(n?r.intro:d.description),k=o.map(p=>{if(n)return{m:p,href:`${p.id}/`};let y=$.products.find(J=>J.id===d.id);return R({products:[y]},p).length>0?{m:p,href:g(y,p)}:null}).filter(Boolean),O=o.map(p=>({m:p,href:k.find(y=>y.m.id===p.id)?.href??`${p.id}/`})),x=o.find(p=>p.default)??o[0],m=r.theme??{},W=Object.entries({primary:m.primary,ink:m.ink,bg:m.bg,surface:m.surface,soft:m.soft,accent:m.accent}).filter(([,p])=>p).map(([p,y])=>`--${p}:${y}`).join(";"),E=O.map(({m:p,href:y})=>({id:p.id,lang:p.lang,country:p.country,currency:p.currency,href:l(y)}));return`<!doctype html>
<html lang="${e(c)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(u)}</title>
<meta name="description" content="${e(b)}">
<link rel="canonical" href="${h(v)}">
${k.map(({m:p,href:y})=>`<link rel="alternate" hreflang="${e(p.lang)}-${e(p.country)}" href="${h(y)}">`).join(`
`)}
<link rel="alternate" hreflang="x-default" href="${h(n?`${x.id}/`:k.find(p=>p.m.id===x.id)?.href??v)}">
<meta property="og:type" content="${n?"website":"product"}">
<meta property="og:title" content="${e(u)}">
<meta property="og:description" content="${e(b)}">
<meta property="og:url" content="${h(v)}">
<meta property="og:site_name" content="${e(r.name)}">
<meta name="theme-color" content="${e(m.bg??"#FFF7F2")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${et}">
<link rel="stylesheet" href="${l("assets/style.css")}">
<style>:root{${W}}</style>
${n?P(ct(a)):P(lt(a,d))}
<script src="${l("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(i.id)}" data-markets='${e(JSON.stringify(E))}'>
<a class="skip" href="#main">${c==="vi"?"B\u1ECF qua, t\u1EDBi n\u1ED9i dung":"Skip to content"}</a>
${D(a.t)}
${n&&s(r.announcement)?`<p class="announce">${e(s(r.announcement))}</p>`:""}
${at(a,O)}
<main id="main">
${n?rt(a):nt(a,d)}
</main>
${it(a)}
${ot(a,n?"":s(d.name))}
</body>
</html>
`}function at(a,t){let{site:r,market:i,t:o,url:c,channels:s}=a,l=c(`${i.id}/`);return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${l}">
      ${r.logo?`<img src="${e(j(c,r.logo))}" alt="" width="40" height="40">`:`<span class="brand-mark" aria-hidden="true">${e(r.name.trim()[0]??"")}</span>`}
      <span>${e(r.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">
      <a href="${l}#menu">${e(o.nav.menu)}</a>
      <a href="${l}#story">${e(o.nav.story)}</a>
      <a href="${l}#visit">${e(o.nav.visit)}</a>
    </nav>
    <div class="bar-end">
      ${t.length>1?`<details class="market">
        <summary aria-label="${e(o.market.label)}">${f("globe",18)}<span>${e(i.id.toUpperCase())}<span class="cur"> \xB7 ${e(N(i))}</span></span></summary>
        <ul>${t.map(({m:h,href:$})=>`<li><a href="${c($)}" hreflang="${e(h.lang)}"${h.id===i.id?' aria-current="true"':""}>${e(h.country)} \xB7 ${e(h.currency)}</a></li>`).join("")}</ul>
      </details>`:""}
      <a class="btn btn--primary hide-sm" href="${e(w(s[0],r.contact))}" ${M(s[0])}>${e(o.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${e(o.nav.openMenu)}">${f("menu",22)}</summary>
        <nav aria-label="Menu">
          <a href="${l}#menu">${e(o.nav.menu)}</a>
          <a href="${l}#story">${e(o.nav.story)}</a>
          <a href="${l}#visit">${e(o.nav.visit)}</a>
        </nav>
      </details>
    </div>
  </div>
</header>`}function rt(a){let{site:t,catalog:r,t:i,L:o,url:c,products:s,channels:l}=a,h=s.filter(n=>n.featured).slice(0,4),$=t.heroImage?e(j(c,t.heroImage)):c("assets/photos/hero.webp"),g=r.categories.filter(n=>s.some(d=>d.category===n.id));return`
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <h1>${e(o(t.tagline))}</h1>
      <p class="lead">${e(o(t.intro))}</p>
      <div class="actions">
        <a class="btn btn--primary btn--lg" href="#menu">${e(i.hero.cta)} ${f("arrow",18)}</a>
        ${l.map(n=>`<a class="btn btn--ghost btn--lg" href="${e(w(n,t.contact))}" ${M(n)}>${f(n,18)} ${e(i.orderVia[n])}</a>`).join("")}
      </div>
      <ul class="badges">${i.hero.badges.map(n=>`<li>${e(n)}</li>`).join("")}</ul>
    </div>
    <div class="hero-art">
      <div class="blob" aria-hidden="true"></div>
      <img src="${$}" alt="${e(t.name)}" width="1000" height="1000" fetchpriority="high">
    </div>
  </div>
  <div class="scallop" aria-hidden="true"></div>
</section>

${h.length?`<section class="section section--soft" aria-labelledby="best">
  <div class="wrap">
    <h2 id="best" class="h2">${e(i.bestsellers)}</h2>
    <div class="grid grid--4">${h.map(n=>U(a,n)).join("")}</div>
  </div>
</section>`:""}

<section class="section" id="menu" aria-labelledby="menu-title">
  <div class="wrap">
    <div class="head">
      <h2 id="menu-title" class="h2">${e(i.menu.title)}</h2>
      <p class="muted">${e(i.menu.text)}</p>
    </div>
    <nav class="cats" aria-label="${e(i.menu.title)}">${g.map(n=>`<a href="#cat-${e(n.id)}">${e(o(n.name))}</a>`).join("")}</nav>
    ${g.map(n=>`<div class="cat" id="cat-${e(n.id)}">
      <h3 class="h3">${e(o(n.name))}</h3>
      <div class="grid grid--4">${s.filter(d=>d.category===n.id).map(d=>U(a,d)).join("")}</div>
    </div>`).join("")}
  </div>
</section>

${t.story?`<section class="section section--soft" id="story" aria-labelledby="story-title">
  <div class="wrap story">
    <div class="story-art" aria-hidden="true"><img src="${c("assets/photos/story.webp")}" alt="" width="900" height="900" loading="lazy"></div>
    <div class="story-copy">
      <h2 id="story-title" class="h2">${e(o(t.story.title))}</h2>
      <p>${e(o(t.story.body))}</p>
      ${o(t.story.quote)?`<blockquote><p>\u201C${e(o(t.story.quote))}\u201D</p>${t.story.signature?`<cite>${e(t.story.signature)}</cite>`:""}</blockquote>`:""}
    </div>
  </div>
</section>`:""}

<section class="section" aria-labelledby="how-title">
  <div class="wrap">
    <h2 id="how-title" class="h2 center">${e(i.how.title)}</h2>
    <ol class="steps">${i.how.steps.map((n,d)=>`<li><span class="n">${d+1}</span><h3>${e(n.t)}</h3><p class="muted">${e(n.d)}</p></li>`).join("")}</ol>
  </div>
</section>

${t.reviews?.length?`<section class="section section--soft" aria-labelledby="rev-title">
  <div class="wrap">
    <h2 id="rev-title" class="h2">${e(i.reviews)}</h2>
    <div class="grid grid--3">${t.reviews.map(n=>`<figure class="review">
      <div class="stars" aria-label="${n.rating}/5">${Array.from({length:5},(d,v)=>f("star",18,`class="${v<n.rating?"on":""}"`)).join("")}</div>
      <blockquote>${e(o(n.text))}</blockquote>
      <figcaption>${e(n.name)}</figcaption>
    </figure>`).join("")}</div>
  </div>
</section>`:""}

${st(a)}`}function U(a,t){let{t:r,L:i,url:o,market:c,productPath:s,price:l,site:h,channels:$}=a,g=o(s(t,c)),n=r.orderText.replace("{product}",i(t.name));return`<article class="card${t.inStock?"":" is-out"}">
  <a class="card-img" href="${g}" tabindex="-1" aria-hidden="true">
    <img src="${e(j(o,t.image))}" alt="" width="800" height="800" loading="lazy">
    ${t.badge&&t.inStock?`<span class="tag">${e(i(t.badge))}</span>`:""}
    ${t.inStock?"":`<span class="tag tag--out">${e(r.soldOut)}</span>`}
  </a>
  <div class="card-body">
    <h4 class="card-title"><a href="${g}">${e(i(t.name))}</a></h4>
    <p class="card-desc muted">${e(i(t.description))}</p>
    <div class="card-foot">
      <span class="price">${e(l(t))}</span>
      ${t.inStock?`<a class="btn btn--small btn--primary" href="${e(w($[0],h.contact,n))}" ${M($[0])} aria-label="${e(r.order)} ${e(i(t.name))}">${e(r.order)}</a>`:`<span class="btn btn--small btn--disabled" aria-disabled="true">${e(r.soldOut)}</span>`}
    </div>
  </div>
</article>`}function st(a){let{site:t,t:r,L:i}=a,o=`https://www.google.com/maps?q=${encodeURIComponent(t.contact.mapQuery??i(t.contact.address))}&output=embed`,c=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(t.contact.mapQuery??i(t.contact.address))}`;return`<section class="section" id="visit" aria-labelledby="visit-title">
  <div class="wrap visit">
    <div class="visit-info">
      <h2 id="visit-title" class="h2">${e(r.visit.title)}</h2>
      ${B(t,r)}
      <h3 class="h4">${f("clock",18)} ${e(r.visit.hours)}</h3>
      <table class="hours"><tbody>${t.hours.map(s=>`<tr><th scope="row">${e(F(s.days,r.days))}</th><td>${e(s.open)} \u2013 ${e(s.close)}</td></tr>`).join("")}</tbody></table>
      <h3 class="h4">${f("pin",18)} ${e(r.visit.address)}</h3>
      <p>${e(i(t.contact.address))}</p>
      <a class="btn btn--ghost" href="${e(c)}" target="_blank" rel="noopener">${e(r.visit.directions)} ${f("arrow",16)}</a>
    </div>
    <div class="map"><iframe title="${e(r.visit.address)}" src="${e(o)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function nt(a,t){let{t:r,L:i,url:o,market:c,catalog:s,products:l,site:h,channels:$,price:g}=a,n=s.categories.find(u=>u.id===t.category),d=l.filter(u=>u.id!==t.id&&u.category===t.category).concat(l.filter(u=>u.id!==t.id&&u.category!==t.category)).slice(0,4),v=r.orderText.replace("{product}",i(t.name));return`
<section class="section product">
  <div class="wrap">
    <a class="back" href="${o(`${c.id}/`)}#menu">\u2190 ${e(r.product.back)}</a>
    <div class="product-grid">
      <div class="product-img"><img src="${e(j(o,t.image))}" alt="${e(i(t.name))}" width="800" height="800" fetchpriority="high"></div>
      <div class="product-info">
        ${n?`<p class="eyebrow">${e(i(n.name))}</p>`:""}
        <h1>${e(i(t.name))}</h1>
        <p class="price price--lg">${e(g(t))}</p>
        <p class="lead">${e(i(t.description))}</p>
        ${t.inStock?`<div class="actions">${$.map((u,b)=>`<a class="btn ${b===0?"btn--primary":"btn--ghost"} btn--lg" href="${e(w(u,h.contact,v))}" ${M(u)}>${f(u,18)} ${e(r.orderVia[u])}</a>`).join("")}</div>`:`<p class="tag tag--out tag--inline">${e(r.soldOut)}</p>`}
      </div>
    </div>
  </div>
</section>
${d.length?`<section class="section section--soft" aria-labelledby="rel-title">
  <div class="wrap">
    <h2 id="rel-title" class="h2">${e(r.product.related)}</h2>
    <div class="grid grid--4">${d.map(u=>U(a,u)).join("")}</div>
  </div>
</section>`:""}`}function it(a){let{site:t,t:r,L:i,market:o}=a,c=t.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div>
      <p class="foot-name">${e(t.name)}</p>
      <p class="muted">${e(i(t.tagline))}</p>
    </div>
    <div>
      <p class="foot-h">${e(r.footer.contact)}</p>
      <ul>
        ${c.phone?`<li><a href="tel:${S(c.phone)}">${e(c.phone)}</a></li>`:""}
        ${c.email?`<li><a href="mailto:${e(c.email)}">${e(c.email)}</a></li>`:""}
        <li>${e(i(c.address))}</li>
      </ul>
    </div>
    ${t.social?`<div>
      <p class="foot-h">${e(r.footer.follow)}</p>
      <ul>${Object.entries(t.social).filter(([,s])=>s).map(([s,l])=>`<li><a href="${e(l)}" target="_blank" rel="noopener">${e(s[0].toUpperCase()+s.slice(1))}</a></li>`).join("")}</ul>
    </div>`:""}
  </div>
  <div class="wrap foot-bottom">
    <span>\xA9 ${new Date().getFullYear()} ${e(t.name)}</span>
    ${T(t,r,o.lang)}
  </div>
</footer>`}function ot(a,t){let{site:r,t:i,channels:o}=a,c=t?i.orderText.replace("{product}",t):"";return`<nav class="orderbar" aria-label="${e(i.nav.order)}">
  ${o.slice(0,3).map((s,l)=>`<a class="${l===0?"primary":""}" href="${e(w(s,r.contact,c))}" ${M(s)}>${f(s,20)}<span>${e(i.orderVia[s])}</span></a>`).join("")}
</nav>`}function ct({site:a,market:t,L:r,abs:i,products:o,price:c,productPath:s}){return{"@context":"https://schema.org","@type":"Bakery",name:a.name,url:i(`${t.id}/`),description:r(a.intro),telephone:a.contact.phone,email:a.contact.email,address:{"@type":"PostalAddress",streetAddress:r(a.contact.address)},currenciesAccepted:t.currency,openingHoursSpecification:H(a.hours),hasMenu:{"@type":"Menu",hasMenuItem:o.map(l=>({"@type":"MenuItem",name:r(l.name),url:i(s(l,t)),offers:{"@type":"Offer",price:l.price,priceCurrency:t.currency,description:c(l)}}))},...a.reviews?.length?{aggregateRating:{"@type":"AggregateRating",ratingValue:(a.reviews.reduce((l,h)=>l+h.rating,0)/a.reviews.length).toFixed(1),reviewCount:a.reviews.length}}:{}}}function lt({site:a,market:t,L:r,abs:i,url:o,productPath:c},s){return{"@context":"https://schema.org","@type":"Product",name:r(s.name),description:r(s.description),image:i(I(s.image)??s.image),brand:{"@type":"Brand",name:a.name},offers:{"@type":"Offer",url:i(c(s,t)),price:s.price,priceCurrency:t.currency,availability:s.inStock?"https://schema.org/InStock":"https://schema.org/OutOfStock"}}}export{gt as renderSite};
