var ee={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},e=(a="")=>String(a).replace(/[&<>"']/g,t=>ee[t]);function R(a,t,s="vi"){return a==null?"":typeof a!="object"?String(a):a[t]??a[s]??Object.values(a)[0]??""}var te={vi:"vi-VN",en:"en-US",ja:"ja-JP",th:"th-TH",ko:"ko-KR",fr:"fr-FR",zh:"zh-CN",id:"id-ID",es:"es-ES",de:"de-DE",pt:"pt-BR",ru:"ru-RU",it:"it-IT",ms:"ms-MY",nl:"nl-NL"},N=a=>te[a]??"en-US";function A(a,t="1"){if(t==="0.99")return Math.max(.99,Math.ceil(a)-.01);let s=Number(t)||1;return Math.max(s,Math.round(a/s)*s)}function H(a,t){if(t.default)return a.basePrice;let s=a.prices?.[t.id]??{mode:"auto"};return s.mode==="hidden"?null:s.mode==="manual"?s.amount:A(a.basePrice*t.rate,t.rounding)}var ae=new Set(["VND","JPY","KRW","IDR","KHR","LAK"]);function F(a,t){let s={style:"currency",currency:t.currency};return ae.has(t.currency)&&(s.maximumFractionDigits=0),new Intl.NumberFormat(N(t.lang),s).format(a)}function T(a="/"){let t=a.endsWith("/")?a:`${a}/`;return(s="")=>t+String(s).replace(/^\//,"")}var se=(a="")=>a.startsWith("uploads/")?a:/^([a-z]+:|\/)/i.test(a)?null:`assets/${a}`,P=(a,t)=>{let s=se(t);return s==null?t:a(s)},M=(a="")=>String(a).replace(/\D/g,"");function O(a,t,s=""){switch(a){case"phone":return`tel:${M(t.phone)}`;case"zalo":return`https://zalo.me/${M(t.zalo||t.phone)}`;case"messenger":return`https://m.me/${encodeURIComponent(t.messenger)}`;case"whatsapp":return`https://wa.me/${M(t.whatsapp)}${s?`?text=${encodeURIComponent(s)}`:""}`;case"kakao":return`https://pf.kakao.com/${encodeURIComponent(t.kakao)}/chat`;case"email":return`mailto:${t.email}${s?`?subject=${encodeURIComponent(s)}`:""}`;default:return"#"}}var q=a=>`<script type="application/ld+json">${JSON.stringify(a).replace(/</g,"\\u003c")}<\/script>`;var ne={zalo:'<path d="M4 5h16v11H9l-5 4z"/>',phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',whatsapp:'<path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1-1.2 1.8.8"/>',messenger:'<path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path d="M7.5 13.5l3-3 2.5 2 3.5-3"/>',kakao:'<path d="M12 4C6.5 4 3 7.3 3 11c0 2.4 1.6 4.5 4 5.7L6.5 20l3.6-2.4c.6.1 1.2.1 1.9.1 5.5 0 9-3.3 9-7s-3.5-6.7-9-6.7z"/>',email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',pin:'<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',leaf:'<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',hand:'<path d="M8 13V6a1.5 1.5 0 0 1 3 0v5M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7s-5-2-6.5-4.5L3 12.5a1.5 1.5 0 0 1 2.5-1.6L8 14"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',bowl:'<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M9 20h6M14 3l-3 7M18 4l-4.5 6"/>',cup:'<path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17M8 2.5c-.6 1 .6 2 0 3M12 2.5c-.6 1 .6 2 0 3"/>',bag:'<path d="M6 7h12l1 14H5z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/>',shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',refresh:'<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>',card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',truck:'<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',chevron:'<path d="M9 6l6 6-6 6"/>',bike:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9 8 5H5M15 9l1-3h3"/>',bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',gauge:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="M12 13l4-5"/><circle cx="12" cy="14" r="1.5"/>'},f=(a,t=20,s="")=>`<svg class="i" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${s}>${ne[a]??""}</svg>`,I=[1,2,3,4,5,6,0],re=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function V(a,t){let s=a.map(r=>I.indexOf(r)).sort((r,i)=>r-i);return s.every((r,i)=>i===0||r===s[i-1]+1)&&s.length>2?`${t[I[s[0]]]} \u2013 ${t[I[s.at(-1)]]}`:s.map(r=>t[I[r]]).join(", ")}var B=a=>a.map(t=>({"@type":"OpeningHoursSpecification",dayOfWeek:t.days.map(s=>re[s]),opens:t.open,closes:t.close}));function E(a){return new Intl.NumberFormat(N(a.lang),{style:"currency",currency:a.currency}).formatToParts(0).find(s=>s.type==="currency")?.value??a.currency}var L=a=>a==="phone"||a==="email"?"":'target="_blank" rel="noopener"',_=a=>`<div class="suggest" id="market-suggest" data-suggest="${e(a.market.suggest)}" hidden>
  <span data-text></span>
  <a class="btn btn--small" data-go href="#">${e(a.market.switch)}</a>
  <button type="button" class="suggest-x" data-close aria-label="${e(a.market.dismiss)}">\xD7</button>
</div>`,J=(a,t)=>`<p class="status" data-open-status data-hours='${e(JSON.stringify(a.hours))}' data-tz="${e(a.timezone??"Asia/Ho_Chi_Minh")}" data-open="${e(t.visit.open)}" data-closed="${e(t.visit.closed)}" hidden></p>`,W=(a,t,s)=>a.badge===!1?"":`<a class="made" href="https://kingpes.net/${e(s==="vi"||s==="ja"?s:"en")}/?ref=badge" rel="nofollow" target="_blank">${e(t.footer.madeWith)}</a>`;function Y({site:a,markets:t,url:s,abs:n}){let r=t.find(o=>o.default)??t[0],i=t.map(o=>({id:o.id,lang:o.lang,country:o.country}));return`<!doctype html>
<html lang="${e(r.lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(a.name)}</title>
<link rel="canonical" href="${n(`${r.id}/`)}">
${t.map(o=>`<link rel="alternate" hreflang="${e(o.lang)}-${e(o.country)}" href="${n(`${o.id}/`)}">`).join(`
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
<body><p>${t.map(o=>`<a href="${s(`${o.id}/`)}">${e(o.country)}</a>`).join(" \xB7 ")}</p></body>
</html>
`}var oe="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap";function K(a,t){return a.products.map(s=>({...s,variants:s.variants.map(n=>({...n,price:H(n,t),list:ie(n,t)})).filter(n=>n.price!=null)})).filter(s=>s.variants.length>0).map(s=>({...s,from:s.variants.reduce((n,r)=>r.price<n.price?r:n)}))}function ie(a,t){if(!a.listPrice)return null;if(t.default)return a.listPrice>a.basePrice?a.listPrice:null;if((a.prices?.[t.id]?.mode??"auto")!=="auto")return null;let s=A(a.listPrice*t.rate,t.rounding);return s>H(a,t)?s:null}function qe({site:a,catalog:t,i18n:s,template:n,basePath:r="/",siteUrl:i=a.domain}){let o=T(r),c=p=>new URL(o(p),i).href,m=t.markets,d=(p,h)=>`${h.id}/${R(p.slug,h.lang)}/`,g=[];for(let p of m){let h=p.lang,u=s[h]??s.en??s.vi,y=v=>R(v,h,"en"),x=K(t,p),j=a.orderChannels?.[p.id]??["phone"],k=v=>F(v,p),l=a.installmentMonths??12,z={site:a,catalog:t,market:p,markets:m,lang:h,t:u,L:y,url:o,abs:c,channels:j,money:k,monthly:v=>k(Number.isInteger(v)&&v>=1e4?Math.ceil(v/l/1e3)*1e3:Math.ceil(v/l*100)/100),months:l,devices:x,productPath:d,template:n};g.push({path:`${p.id}/index.html`,html:G(z,{kind:"home"})});for(let v of x)g.push({path:`${d(v,p)}index.html`,html:G(z,{kind:"product",product:v})})}return g.push({path:"index.html",html:Y({site:a,markets:m,url:o,abs:c})}),g}function G(a,t){let{site:s,market:n,markets:r,lang:i,t:o,L:c,url:m,abs:d,catalog:g,productPath:p,channels:h}=a,u=t.kind==="home",y=t.product,x=u?`${n.id}/`:p(y,n),j=u?`${s.name} \xB7 ${c(s.tagline)}`:`${y.name} ${y.variants.map($=>$.size).join(", ")} \xB7 ${s.name}`,k=u?c(s.intro):`${c(y.summary)} ${o.installment.replace("{price}",a.monthly(y.from.price)).replace("{n}",a.months)}.`,l=r.map($=>u?{m:$,href:`${$.id}/`}:K({products:[g.products.find(C=>C.id===y.id)]},$).length?{m:$,href:p(y,$)}:null).filter(Boolean),w=$=>l.find(C=>C.m.id===$.id)?.href??`${$.id}/`,z=r.find($=>$.default)??r[0],v=s.theme??{},X=["primary","ink","bg","surface","soft","accent"].filter($=>v[$]).map($=>`--${$}:${v[$]}`).join(";"),Z=r.map($=>({id:$.id,lang:$.lang,country:$.country,currency:$.currency,href:m(w($))})),S=h[0];return`<!doctype html>
<html lang="${e(i)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${e(j)}</title>
<meta name="description" content="${e(k)}">
<link rel="canonical" href="${d(x)}">
${l.map(({m:$,href:C})=>`<link rel="alternate" hreflang="${e($.lang)}-${e($.country)}" href="${d(C)}">`).join(`
`)}
${l.some($=>$.m.id===z.id)?`<link rel="alternate" hreflang="x-default" href="${d(w(z))}">`:""}
<meta property="og:type" content="${u?"website":"product"}">
<meta property="og:title" content="${e(j)}">
<meta property="og:description" content="${e(k)}">
<meta property="og:url" content="${d(x)}">
<meta property="og:site_name" content="${e(s.name)}">
<meta name="theme-color" content="${e(v.ink??"#0B1220")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${oe}">
<link rel="stylesheet" href="${m("assets/style.css")}">
<style>:root{${X}}</style>
${u?q(we(a))+(s.faq?.length?q(xe(a)):""):q(ke(a,y))+q(Me(a,y))}
<script src="${m("assets/site.js")}" defer><\/script>
</head>
<body data-market="${e(n.id)}" data-markets='${e(JSON.stringify(Z))}' data-copied="${e(o.copied)}" data-wa="${e(M(s.contact.whatsapp??""))}" data-email="${e(s.contact.email??"")}">
<a class="skip" href="#main">${e(o.skip)}</a>
${_(o)}
${s.announcement?`<p class="announce">${e(c(s.announcement))}</p>`:""}
${ce(a,w)}
<main id="main">
${u?[he,$e,me,ue,fe,ge,ye].map($=>$(a)).join(`
`):ve(a,y)}
</main>
${be(a)}
<nav class="dock" aria-label="${e(o.nav.order)}">
  <a href="${e(O(S,s.contact))}" ${L(S)} ${u?"":"data-order"}>${f(S,20)}<span>${e(u?o.via[S]:o.product.orderVia.replace("{channel}",o.via[S]))}</span></a>
</nav>
</body>
</html>
`}function ce({site:a,market:t,markets:s,t:n,url:r,channels:i},o){let c=r(`${t.id}/`),m=[[`${c}?type=phone#shop`,n.nav.phones],[`${c}?type=tablet#shop`,n.nav.tablets],[`${c}#tradein`,n.nav.tradein],[`${c}#stores`,n.nav.stores]];return`<header class="header">
  <div class="wrap bar">
    <a class="brand" href="${c}">
      ${a.logo?`<img src="${e(P(r,a.logo))}" alt="" width="34" height="34">`:'<span class="brand-mark" aria-hidden="true"><i></i></span>'}
      <span>${e(a.name)}</span>
    </a>
    <nav class="nav" aria-label="Menu">${m.map(([d,g])=>`<a href="${d}">${e(g)}</a>`).join("")}</nav>
    <div class="bar-end">
      <details class="market">
        <summary aria-label="${e(n.market.label)}">${f("globe",18)}<span>${e(t.id.toUpperCase())}<span class="cur"> \xB7 ${e(E(t))}</span></span></summary>
        <ul>${s.map(d=>`<li><a href="${r(o(d))}" hreflang="${e(d.lang)}"${d.id===t.id?' aria-current="true"':""}>${e(d.country)} \xB7 ${e(d.currency)}</a></li>`).join("")}</ul>
      </details>
      <a class="btn btn--primary hide-sm" href="${e(O(i[0],a.contact))}" ${L(i[0])}>${f(i[0],18)} ${e(n.nav.order)}</a>
      <details class="mnav">
        <summary aria-label="${e(n.nav.openMenu)}">${f("menu",22)}</summary>
        <nav aria-label="Menu">${m.map(([d,g])=>`<a href="${d}">${e(g)}</a>`).join("")}</nav>
      </details>
    </div>
  </div>
</header>`}var le=0;function b(a,t,s){return`<circle cx="${a}" cy="${t}" r="${s+3}" fill="#000" opacity=".18"/><circle cx="${a}" cy="${t}" r="${s}" fill="#101114"/><circle cx="${a}" cy="${t}" r="${s*.55}" fill="#1c2638"/><circle cx="${a-s*.3}" cy="${t-s*.3}" r="${s*.18}" fill="#fff" opacity=".55"/>`}function pe(a,t){if(t)return a==="square"?`<rect x="18" y="18" width="58" height="58" rx="16" fill="#000" opacity=".12"/>${b(36,36,9)}${b(58,58,9)}`:b(30,30,10);switch(a){case"pro":return`<rect x="14" y="14" width="104" height="104" rx="30" fill="#000" opacity=".13"/>${b(42,42,17)}${b(42,90,17)}${b(90,66,17)}<circle cx="92" cy="32" r="6" fill="#f3e7c4" opacity=".9"/>`;case"dual":return`<rect x="16" y="16" width="56" height="106" rx="28" fill="#000" opacity=".13"/>${b(44,44,18)}${b(44,94,18)}<circle cx="86" cy="30" r="5" fill="#f3e7c4" opacity=".9"/>`;case"column":return`${b(40,40,15)}${b(40,82,15)}${b(40,124,15)}<circle cx="74" cy="40" r="5" fill="#f3e7c4" opacity=".9"/>`;case"square":return`<rect x="14" y="14" width="96" height="96" rx="22" fill="#000" opacity=".13"/>${b(40,40,15)}${b(84,40,15)}${b(40,84,15)}<circle cx="84" cy="84" r="6" fill="#f3e7c4" opacity=".9"/>`;default:return b(40,40,16)}}function de(a,t,{size:s="lg"}={}){let n=`d${++le}`,r=a.device?.shape==="tablet",[i,o,c]=r?[250,350,22]:[180,370,34],m=i+(r?130:110),d=o+34,g=`<linearGradient id="${n}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".18"/></linearGradient>`,p=`<linearGradient id="${n}w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--dev)"/><stop offset=".55" stop-color="#1b2140"/><stop offset="1" stop-color="#0a0d18"/></linearGradient>`,h=r?12:9,u=`<g transform="translate(0 34)">
    <rect width="${i}" height="${o}" rx="${c}" fill="#0c0d10"/>
    <rect x="${h}" y="${h}" width="${i-h*2}" height="${o-h*2}" rx="${c-h+2}" fill="url(#${n}w)"/>
    ${r?`<circle cx="${i/2}" cy="${h/2+1}" r="2.2" fill="#2a2d33"/>`:`<rect x="${i/2-28}" y="${h+10}" width="56" height="16" rx="8" fill="#050506"/>`}
    <text x="${h+16}" y="${r?84:86}" fill="#fff" font-family="system-ui, sans-serif" font-weight="300" font-size="${r?40:36}">9:41</text>
    <rect width="${i}" height="${o}" rx="${c}" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="2"/>
  </g>`,y=`<g transform="translate(${m-i} 0)">
    <rect width="${i}" height="${o}" rx="${c}" style="fill:var(--dev)"/>
    <rect width="${i}" height="${o}" rx="${c}" fill="url(#${n}g)"/>
    ${pe(a.device?.camera,r)}
    <rect x="1" y="1" width="${i-2}" height="${o-2}" rx="${c-1}" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
  </g>`;return`<svg class="dev dev--${s}${r?" dev--tab":""}" viewBox="0 0 ${m} ${d}" style="--dev:${e(t)}" role="img" aria-label="${e(a.name)}"><defs>${g}${p}</defs>${u}${y}</svg>`}var D=(a,t,s,n)=>a.image?`<img class="dev-img" src="${e(P(t,a.image))}" alt="${e(a.name)}" loading="lazy">`:de(a,a.colors?.[0]?.hex??"#C9CCD3",n),U=a=>a.list?Math.round((1-a.price/a.list)*100):0;function he(a){let{site:t,devices:s,t:n,L:r,url:i,money:o,monthly:c,months:m,productPath:d,market:g}=a,p=s.find(u=>u.id===t.hero?.product)??s.find(u=>u.featured)??s[0];if(!p)return"";let h=i(d(p,g));return`<section class="hero" style="--glow:${e(p.colors?.[0]?.hex??"#2F5BFF")}">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      ${p.badge?`<span class="chip chip--glow">${e(r(p.badge))}</span>`:""}
      <h1>${e(r(t.hero?.title)||p.name)}</h1>
      <p class="lead">${e(r(t.hero?.text)||r(p.summary))}</p>
      <p class="hero-price"><span>${e(n.hero.from)}</span> <strong>${e(o(p.from.price))}</strong>${p.from.list?` <s>${e(o(p.from.list))}</s>`:""}</p>
      <p class="hero-inst">${f("card",18)} ${e(n.installment.replace("{price}",c(p.from.price)).replace("{n}",m))}</p>
      <div class="actions">
        <a class="btn btn--light btn--lg" href="${h}">${e(n.hero.buy)} ${f("arrow",18)}</a>
        <a class="btn btn--outline-light btn--lg" href="#shop">${e(n.hero.all)}</a>
      </div>
    </div>
    <a class="hero-art" href="${h}" tabindex="-1" aria-hidden="true">${D(p,i,r,{size:"xl"})}</a>
  </div>
  ${p.colors?.length>1?`<ul class="hero-colors wrap" aria-hidden="true">${p.colors.map(u=>`<li style="--c:${e(u.hex)}">${e(r(u.name))}</li>`).join("")}</ul>`:""}
</section>`}function $e({site:a,L:t}){return a.perks?.length?`<section class="perks-sec"><ul class="wrap perks">${a.perks.map(s=>`<li>
    <span class="perk-i">${f(s.icon??"check",24)}</span>
    <span><strong>${e(t(s.title))}</strong><small>${e(t(s.text))}</small></span>
  </li>`).join("")}</ul></section>`:""}function me({site:a,L:t,url:s}){return a.banners?.length?`<section class="section section--tight"><div class="wrap banners">${a.banners.map(n=>`<a class="banner" href="?type=${e(n.filter??"")}#shop">
    <img src="${e(P(s,n.image))}" alt="" width="1000" height="760" loading="lazy">
    <span class="banner-copy"><strong>${e(t(n.title))}</strong><small>${e(t(n.text))}</small><span class="banner-go">${f("arrow",18)}</span></span>
  </a>`).join("")}</div></section>`:""}function Q(a,t){let{t:s,L:n,url:r,money:i,monthly:o,productPath:c,market:m}=a,d=t.from,g=U(d);return`<li class="card" data-type="${e(t.category)}" data-brand="${e(t.brand)}" data-price="${d.price}" data-name="${e(`${t.brand} ${t.name}`.toLowerCase())}">
  <a class="card-link" href="${r(c(t,m))}">
    <div class="card-art">${D(t,r,n,{size:"sm"})}
      <div class="card-tags">${g?`<span class="chip chip--sale">-${g}%</span>`:""}${t.badge?`<span class="chip">${e(n(t.badge))}</span>`:""}</div>
    </div>
    <p class="card-brand">${e(t.brand)}</p>
    <h3>${e(t.name)}</h3>
    ${t.variants.length>1||d.size?`<p class="card-sizes">${t.variants.map(p=>`<span>${e(p.size)}</span>`).join("")}</p>`:""}
    <p class="card-price"><strong>${e(i(d.price))}</strong>${d.list?`<s>${e(i(d.list))}</s>`:""}</p>
    <p class="card-foot"><span class="inst">${e(s.installmentShort.replace("{price}",o(d.price)))}</span>${t.colors?.length?`<span class="dots" aria-hidden="true">${t.colors.map(p=>`<i style="background:${e(p.hex)}"></i>`).join("")}</span>`:""}</p>
    ${t.stock==="soon"?`<p class="soon">${e(s.stock.soon)}</p>`:""}
  </a>
</li>`}function ue(a){let{devices:t,catalog:s,t:n,L:r}=a,i=s.categories.filter(c=>t.some(m=>m.category===c.id)),o=[...new Set(t.map(c=>c.brand))];return`<section class="section" id="shop" aria-labelledby="shop-title">
  <div class="wrap">
    <div class="shop-head">
      <h2 id="shop-title" class="h2">${e(n.shop.title)}</h2>
      <p class="muted" data-count="${e(n.shop.count)}">${e(n.shop.count.replace("{n}",t.length))}</p>
    </div>
    <div class="toolbar" data-toolbar>
      <div class="chips" role="group" aria-label="${e(n.shop.all)}">
        <button type="button" class="pill is-on" data-type="">${e(n.shop.all)}</button>
        ${i.map(c=>`<button type="button" class="pill" data-type="${e(c.id)}">${e(r(c.name))}</button>`).join("")}
      </div>
      <div class="chips" role="group" aria-label="${e(n.shop.brand)}">
        ${o.map(c=>`<button type="button" class="pill pill--ghost" data-brand="${e(c)}" aria-pressed="false">${e(c)}</button>`).join("")}
      </div>
      <label class="search">${f("search",18)}<input type="search" placeholder="${e(n.search)}" aria-label="${e(n.search)}" data-search></label>
      <label class="sort"><span class="sr">${e(n.shop.sort)}</span><select data-sort>
        <option value="">${e(n.shop.sortPop)}</option><option value="asc">${e(n.shop.sortLow)}</option><option value="desc">${e(n.shop.sortHigh)}</option>
      </select></label>
    </div>
    <ul class="grid" data-grid>${t.map(c=>Q(a,c)).join("")}</ul>
    <p class="empty muted" data-empty hidden>${e(n.shop.empty)}</p>
  </div>
</section>`}function fe({site:a,t,L:s,url:n,devices:r,channels:i}){let o=a.tradein;if(!o)return"";let c=t.tradein,m=i[0];return`<section class="section section--dark" id="tradein" aria-labelledby="ti-title">
  <div class="wrap tradein">
    <div class="ti-copy">
      <h2 id="ti-title" class="h2">${e(s(o.title))}</h2>
      <p class="lead">${e(s(o.text))}</p>
      ${o.image?`<img class="ti-img" src="${e(P(n,o.image))}" alt="" width="1000" height="760" loading="lazy">`:""}
    </div>
    <form class="form" data-compose data-channel="${e(m)}" data-href="${e(O(m,a.contact))}" data-message="${e(c.message)}">
      <label>${e(c.model)}<input name="model" placeholder="${e(c.modelHint)}" required></label>
      <fieldset><legend>${e(c.condition)}</legend>
        ${c.conditions.map((d,g)=>`<label class="radio"><input type="radio" name="condition" value="${e(d)}"${g===0?" checked":""}><span>${e(d)}</span></label>`).join("")}
      </fieldset>
      <label>${e(c.want)}<select name="want"><option>${e(c.any)}</option>${r.map(d=>`<option>${e(d.name)}</option>`).join("")}</select></label>
      <div class="row">
        <label>${e(c.name)}<input name="name" autocomplete="name" required></label>
        <label>${e(c.phone)}<input name="phone" type="tel" autocomplete="tel" required></label>
      </div>
      <button class="btn btn--primary btn--lg" type="submit">${f(m,18)} ${e(c.submit)}</button>
      <p class="form-msg" role="status" hidden></p>
    </form>
  </div>
</section>`}function ge({site:a,t,L:s}){return a.faq?.length?`<section class="section" aria-labelledby="faq-title">
  <div class="wrap faq">
    <h2 id="faq-title" class="h2">${e(t.faq)}</h2>
    <div class="qa">${a.faq.map((n,r)=>`<details${r===0?" open":""}><summary>${e(s(n.q))}${f("chevron",18)}</summary><p>${e(s(n.a))}</p></details>`).join("")}</div>
  </div>
</section>`:""}function ye({site:a,t,L:s}){let n=a.branches?.length?a.branches:[{name:a.name,address:a.contact.address,phone:a.contact.phone}],r=encodeURIComponent(a.contact.mapQuery??s(n[0].address)),i=o=>o.length===7?t.visit.everyDay:V(o,t.days);return`<section class="section section--soft" id="stores" aria-labelledby="stores-title">
  <div class="wrap stores">
    <div>
      <h2 id="stores-title" class="h2">${e(t.visit.title)}</h2>
      ${J(a,t)}
      <ul class="branches">${n.map(o=>{let c=encodeURIComponent(s(o.address));return`<li>
        <strong>${e(s(o.name))}</strong>
        <span>${f("pin",16)} ${e(s(o.address))}</span>
        ${o.phone?`<a href="tel:${M(o.phone)}">${f("phone",16)} ${e(o.phone)}</a>`:""}
        <a class="link" href="https://www.google.com/maps/dir/?api=1&amp;destination=${c}" target="_blank" rel="noopener">${e(t.visit.directions)} ${f("arrow",14)}</a>
      </li>`}).join("")}</ul>
      <p class="hours-line">${f("clock",18)} <span>${e(t.visit.hours)}:</span> ${a.hours.map(o=>`${e(i(o.days))} ${e(o.open)} \u2013 ${e(o.close)}`).join(" \xB7 ")}</p>
    </div>
    <div class="map"><iframe title="${e(s(n[0].name))}" src="https://www.google.com/maps?q=${r}&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
  </div>
</section>`}function ve(a,t){let{site:s,t:n,L:r,url:i,money:o,monthly:c,months:m,market:d,devices:g,channels:p}=a,h=t.from,u=t.colors?.[0],y=t.variants.map(l=>({size:l.size,price:o(l.price),list:l.list?o(l.list):"",off:U(l)?`-${U(l)}%`:"",save:l.list?n.product.save.replace("{price}",o(l.list-l.price)):"",inst:n.installment.replace("{price}",c(l.price)).replace("{n}",m)})),x=g.filter(l=>l.id!==t.id&&l.category===t.category).slice(0,4),j=a.catalog.categories.find(l=>l.id===t.category),k=i(`${d.id}/`);return`<div class="wrap crumbs"><a href="${k}">${e(n.nav.home)}</a>${f("chevron",14)}<a href="${k}?type=${e(t.category)}#shop">${e(r(j?.name))}</a>${f("chevron",14)}<span aria-current="page">${e(t.name)}</span></div>
<section class="wrap pdp" data-product data-name="${e(t.name)}" data-variants='${e(JSON.stringify(y))}' data-text="${e(n.orderText)}">
  <div class="pdp-art">
    <div class="pdp-stage">${D(t,i,r,{size:"xl"})}</div>
    ${t.stock==="soon"?`<span class="chip chip--warn">${e(n.stock.soon)}</span>`:""}
  </div>
  <div class="pdp-info">
    <p class="card-brand">${e(t.brand)}${t.badge?` <span class="chip">${e(r(t.badge))}</span>`:""}</p>
    <h1 class="pdp-title">${e(t.name)}</h1>
    <p class="muted">${e(r(t.summary))}</p>
    <div class="pdp-price">
      <strong data-v="price">${e(o(h.price))}</strong>
      <s data-v="list"${h.list?"":" hidden"}>${h.list?e(o(h.list)):""}</s>
      <span class="chip chip--sale" data-v="off"${h.list?"":" hidden"}>${e(y[t.variants.indexOf(h)].off)}</span>
    </div>
    <p class="save" data-v="save"${h.list?"":" hidden"}>${e(y[t.variants.indexOf(h)].save)}</p>
    <p class="pdp-inst">${f("card",18)} <span data-v="inst">${e(y[t.variants.indexOf(h)].inst)}</span></p>
    ${t.variants.length?`<fieldset class="opts"><legend>${e(n.product.storage)}</legend><div class="opt-row">
      ${t.variants.map((l,w)=>`<label class="opt"><input type="radio" name="size" value="${w}"${l===h?" checked":""}><span><b>${e(l.size)}</b><small>${e(o(l.price))}</small></span></label>`).join("")}
    </div></fieldset>`:""}
    ${t.colors?.length?`<fieldset class="opts"><legend>${e(n.product.color)}: <span data-v="color">${e(r(u.name))}</span></legend><div class="opt-row">
      ${t.colors.map((l,w)=>`<label class="swatch" title="${e(r(l.name))}"><input type="radio" name="color" value="${e(r(l.name))}" data-hex="${e(l.hex)}"${w===0?" checked":""}><span style="background:${e(l.hex)}"></span><span class="sr">${e(r(l.name))}</span></label>`).join("")}
    </div></fieldset>`:""}
    <p class="stock stock--${e(t.stock??"in")}">${f(t.stock==="soon"?"clock":"check",18)} ${e(n.stock[t.stock??"in"])}</p>
    <div class="buy">
      ${p.map((l,w)=>`<a class="btn ${w?"btn--ghost":"btn--primary"} btn--lg" href="${e(O(l,s.contact))}" ${L(l)} data-order data-channel="${e(l)}">${f(l,18)} ${e(w?n.via[l]:n.product.orderVia.replace("{channel}",n.via[l]))}</a>`).join("")}
    </div>
    <p class="form-msg" role="status" hidden></p>
    ${s.perks?.length?`<ul class="mini-perks">${s.perks.map(l=>`<li>${f(l.icon??"check",18)} ${e(r(l.title))}</li>`).join("")}</ul>`:""}
    <p class="note muted">${e(n.product.note)}</p>
  </div>
</section>
${t.specs?.length?`<section class="section section--tight"><div class="wrap specs">
  <h2 class="h3">${e(n.product.specs)}</h2>
  <table><tbody>${t.specs.map(([l,w])=>`<tr><th scope="row">${e(n.specs[l]??l)}</th><td>${e(r(w))}</td></tr>`).join("")}</tbody></table>
</div></section>`:""}
${x.length?`<section class="section section--soft"><div class="wrap">
  <h2 class="h3">${e(n.product.related)}</h2>
  <ul class="grid grid--related">${x.map(l=>Q(a,l)).join("")}</ul>
</div></section>`:""}`}function be({site:a,t,L:s,market:n}){let r=a.contact;return`<footer class="footer">
  <div class="wrap foot">
    <div><p class="foot-name">${e(a.name)}</p><p class="muted">${e(s(a.tagline))}</p></div>
    <div><p class="foot-h">${e(t.footer.contact)}</p><ul>
      ${r.phone?`<li>${e(t.footer.hotline)}: <a href="tel:${M(r.phone)}">${e(r.phone)}</a></li>`:""}
      ${r.email?`<li><a href="mailto:${e(r.email)}">${e(r.email)}</a></li>`:""}
      <li>${e(s(r.address))}</li></ul></div>
    ${a.social?`<div><p class="foot-h">${e(t.footer.follow)}</p><ul>${Object.entries(a.social).filter(([,i])=>i).map(([i,o])=>`<li><a href="${e(o)}" target="_blank" rel="noopener">${e(i==="tiktok"?"TikTok":i==="youtube"?"YouTube":i[0].toUpperCase()+i.slice(1))}</a></li>`).join("")}</ul></div>`:""}
  </div>
  <div class="wrap foot-bottom"><span>\xA9 ${new Date().getFullYear()} ${e(a.name)} \xB7 ${e(t.footer.trademark)}</span>${W(a,t,n.lang)}</div>
</footer>`}function we({site:a,market:t,L:s,abs:n}){let r=a.branches??[];return{"@context":"https://schema.org","@type":"ElectronicsStore",name:a.name,url:n(`${t.id}/`),description:s(a.intro),telephone:a.contact.phone,email:a.contact.email,address:{"@type":"PostalAddress",streetAddress:s(a.contact.address)},currenciesAccepted:t.currency,openingHoursSpecification:B(a.hours),...r.length>1?{department:r.map(i=>({"@type":"ElectronicsStore",name:s(i.name),telephone:i.phone,address:{"@type":"PostalAddress",streetAddress:s(i.address)}}))}:{}}}var xe=({site:a,L:t})=>({"@context":"https://schema.org","@type":"FAQPage",mainEntity:a.faq.map(s=>({"@type":"Question",name:t(s.q),acceptedAnswer:{"@type":"Answer",text:t(s.a)}}))});function ke({site:a,market:t,L:s,abs:n,productPath:r},i){let o=i.stock==="soon"?"https://schema.org/PreOrder":"https://schema.org/InStock";return{"@context":"https://schema.org","@type":"Product",name:i.name,description:s(i.summary),brand:{"@type":"Brand",name:i.brand},...i.colors?.length?{color:i.colors.map(c=>s(c.name)).join(", ")}:{},url:n(r(i,t)),offers:i.variants.map(c=>({"@type":"Offer",name:`${i.name} ${c.size}`,price:c.price,priceCurrency:t.currency,availability:o,itemCondition:"https://schema.org/NewCondition",seller:{"@type":"Organization",name:a.name}}))}}function Me({catalog:a,market:t,L:s,abs:n,productPath:r},i){let o=a.categories.find(c=>c.id===i.category);return{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:n(`${t.id}/`)},{"@type":"ListItem",position:2,name:s(o?.name),item:n(`${t.id}/?type=${i.category}`)},{"@type":"ListItem",position:3,name:i.name,item:n(r(i,t))}]}}export{qe as renderSite};
