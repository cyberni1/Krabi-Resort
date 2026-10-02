(function(){
var root=document.getElementById("app");
root.outerHTML="<header class=\"top\">\n  <div class=\"wrap\">\n    <a class=\"brand\" href=\"#top\" aria-label=\"Atomix Boat Thailand\"><img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/logo2.webp\" alt=\"Atomix Boats\" width=\"140\" height=\"36\"></a>\n    <nav aria-label=\"Main\">\n      <a href=\"#fleet\" data-i=\"nav.fleet\">Boats &amp; prices</a>\n      <a href=\"#why\" data-i=\"nav.why\">Why Atomix</a>\n      <a href=\"#videos\" data-i=\"nav.videos\">Videos</a>\n      <a href=\"#order\" data-i=\"nav.order\">How ordering works</a>\n      <a href=\"#faq\" data-i=\"nav.faq\">FAQ</a>\n      <a href=\"#quote\" data-i=\"nav.contact\">Contact</a>\n    </nav>\n    <div class=\"lang\">\n      <button type=\"button\" class=\"lang-btn\" id=\"lang-btn\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"lang-menu\">\n        <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\"><circle cx=\"12\" cy=\"12\" r=\"9.5\"/><path d=\"M2.5 12h19M12 2.5c2.8 3 2.8 16 0 19M12 2.5c-2.8 3-2.8 16 0 19\"/></svg>\n        <span id=\"lang-cur\">EN</span>\n      </button>\n      <ul class=\"lang-menu\" id=\"lang-menu\" role=\"menu\" hidden></ul>\n    </div>\n    <a class=\"btn btn-go hdr-cta\" href=\"#quote\" data-i=\"cta.quote\">Get a quote</a>\n  </div>\n</header>\n\n<main id=\"top\">\n  <section class=\"hero\" aria-labelledby=\"hero-h\">\n    <div class=\"hero-img\"><video id=\"hv\" class=\"autov\" autoplay muted loop playsinline preload=\"auto\" poster=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/poster2.webp\" aria-hidden=\"true\"><source src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/hero2.mp4\" type=\"video/mp4\"></video></div>\n    <div class=\"wrap\">\n      <h1 id=\"hero-h\"><span data-i=\"hero.l1\">Built for</span><span data-i=\"hero.l2\">rough water.</span><span data-i=\"hero.l3\">Ready for adventure.</span></h1>\n      <p class=\"lede\" data-i=\"hero.lede\">Fibreglass fishing and family boats from 5.2 to 7.2 metres. Designed in New Zealand for the open ocean, rigged with Suzuki outboards and delivered anywhere in Thailand.</p>\n      <div class=\"ctas\">\n        <a class=\"btn btn-go\" href=\"#fleet\" data-i=\"hero.find\">Find your boat</a>\n        <a class=\"btn btn-ghost\" href=\"https://www.youtube.com/watch?v=SUjsYGwLe20&amp;t=26s\" target=\"_blank\" rel=\"noopener\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1l11 6-11 6z\" fill=\"currentColor\"/></svg><span data-i=\"hero.watch\">Watch it run</span></a>\n      </div>\n      <p class=\"facts\" data-ih=\"hero.facts\"><span><b>4 models</b> in stock or on order</span><span><b>5.2 \u2013 7.2 m</b> length</span><span><b>100 \u2013 400 hp</b> Suzuki packages</span><span>From <b class=\"num\">645,000 THB</b></span></p>\n    </div>\n  </section>\n\n  <section class=\"promo\" aria-label=\"Promotion\" style=\"padding-top:clamp(28px,4vw,48px)\">\n    <div class=\"wrap\">\n      <a href=\"#fleet\" data-pick=\"600cc\">\n        <span class=\"tag\" data-i=\"promo.tag\">On sale now</span>\n        <p data-i=\"promo.text\">Atomix 600 CC center console with Suzuki engine at a promotional price, while stock lasts.</p>\n        <span class=\"go\" data-i=\"promo.go\">See the 600 CC</span>\n      </a>\n    </div>\n  </section>\n\n  <section class=\"flag\" aria-labelledby=\"flag-h\">\n    <img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/p705.webp\" alt=\"Atomix 705 HT\" loading=\"lazy\">\n    <div class=\"wrap\">\n      <div>\n        <h2 id=\"flag-h\">705 HT</h2>\n        <p data-i=\"flag.text\">The flagship. 7.2 metres, enclosed hardtop, 220 litres of fuel and twin Suzuki power for days that start before sunrise and end far offshore.</p>\n      </div>\n      <div class=\"side\">\n        <span class=\"from\">1,320,000 THB<small data-i=\"flag.from\">Boat only, from</small></span>\n        <a class=\"btn btn-go\" href=\"#fleet\" data-pick=\"705ht\" data-i=\"flag.cta\">Configure the 705 HT</a>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"gallery\" aria-labelledby=\"gal-h\" aria-roledescription=\"carousel\">\n    <div class=\"wrap gal-head\">\n      <h2 id=\"gal-h\" data-i=\"gal.h\">Inside and out</h2>\n      <div class=\"gal-nav\">\n        <button class=\"gal-btn\" type=\"button\" id=\"gal-prev\" data-ia=\"gal.prev\" aria-label=\"Previous photo\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M15 5l-7 7 7 7\"/></svg></button>\n        <button class=\"gal-btn\" type=\"button\" id=\"gal-next\" data-ia=\"gal.next\" aria-label=\"Next photo\"><svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><path d=\"M9 5l7 7-7 7\"/></svg></button>\n      </div>\n    </div>\n    <div class=\"gal-track\" id=\"gal\" tabindex=\"0\">\n      <figure class=\"slide\"><img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/p600cc.webp\" alt=\"\" loading=\"lazy\"><figcaption data-i=\"sl0\">Atomix 600 CC with Suzuki DF140BTX</figcaption></figure>\n      <figure class=\"slide\"><img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/g1.webp\" alt=\"\" loading=\"lazy\"><figcaption data-i=\"sl1\">705 HT on a sea trial</figcaption></figure>\n      <figure class=\"slide\"><img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/g2.webp\" alt=\"\" loading=\"lazy\"><figcaption data-i=\"sl2\">705 HT with twin Suzuki outboards, ready for delivery</figcaption></figure>\n      <figure class=\"slide\"><img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/g3.webp\" alt=\"\" loading=\"lazy\"><figcaption data-i=\"sl3\">Enclosed helm with wraparound glass and cabin access</figcaption></figure>\n      <figure class=\"slide\"><img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/cruise.webp\" alt=\"\" loading=\"lazy\"><figcaption data-i=\"sl4\">Atomix hardtop among the islands</figcaption></figure>\n    </div>\n    <div class=\"gal-dots\" id=\"gal-dots\"></div>\n  </section>\n\n  <section id=\"fleet\" aria-labelledby=\"fleet-h\">\n    <div class=\"wrap\">\n      <div class=\"fleet-head\">\n        <div>\n          <h2 id=\"fleet-h\" data-i=\"fleet.h\">The fleet, drawn to scale</h2>\n          <p class=\"lede\" style=\"margin-top:1rem\" data-i=\"fleet.lede\">Tap a hull to see specs, equipment and every price package.</p>\n        </div>\n      </div>\n\n      <div class=\"scale\" role=\"group\" aria-labelledby=\"fleet-h\">\n        <div class=\"scale-row\" id=\"hulls\"></div>\n      </div>\n\n      <div class=\"config\" id=\"config\" aria-live=\"polite\">\n        <div>\n          <div class=\"c-media\"><img id=\"c-img\" alt=\"\"><div class=\"c-draw\" id=\"c-draw\" hidden></div><span class=\"badge\" id=\"c-badge\" hidden data-i=\"onsale\">On sale</span><span class=\"big num\" id=\"c-big\"></span></div>\n        </div>\n        <div class=\"c-body\">\n          <h3 id=\"c-name\"></h3>\n          <p class=\"role\" id=\"c-role\"></p>\n          <p class=\"desc\" id=\"c-desc\"></p>\n          <ul class=\"c-points\" id=\"c-points\"></ul>\n          <div class=\"specs\" id=\"c-specs\"></div>\n        </div>\n      </div>\n\n      <div class=\"prices\">\n        <h4 id=\"p-h\" data-i=\"prices.h\">Price packages</h4>\n        <div class=\"pkg\" id=\"c-pkg\" role=\"radiogroup\" aria-labelledby=\"p-h\"></div>\n        <p class=\"price-note\" data-i=\"prices.note\">Prices in Thai baht. Engine packages include Suzuki outboard and accessories. Final price depends on options and availability; we confirm it in writing before you order.</p>\n        <div class=\"c-cta\"><a class=\"btn btn-go\" href=\"#quote\" id=\"c-quote\" data-i=\"prices.cta\">Request this package</a></div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"compare\" aria-labelledby=\"cmp-h\">\n    <div class=\"wrap\">\n      <h3 id=\"cmp-h\" data-i=\"cmp.h\">Side by side</h3>\n      <div class=\"tbl-wrap\" tabindex=\"0\" role=\"region\" aria-labelledby=\"cmp-h\">\n        <table>\n          <thead><tr><th scope=\"col\" data-i=\"cmp.spec\">Spec</th><th scope=\"col\">485 SC</th><th scope=\"col\">600 CC</th><th scope=\"col\">600 SC</th><th scope=\"col\">705 HT</th></tr></thead>\n          <tbody id=\"cmp\"></tbody>\n        </table>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"why\" id=\"why\" aria-labelledby=\"why-h\">\n    <div class=\"wrap why-grid\">\n      <div class=\"why-img\"><img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/show.webp\" alt=\"Atomix 705 HT, Phuket boat show\" loading=\"lazy\"></div>\n      <div>\n        <h2 id=\"why-h\" data-i=\"why.h\">Why owners choose Atomix</h2>\n        <p class=\"lede\" style=\"margin-top:1rem\" data-i=\"why.lede\">The same boats that handle New Zealand's Tasman swell make light work of a monsoon chop in the Andaman Sea.</p>\n        <div class=\"pillars\">\n          <div class=\"pillar\">\n            <h3 data-i=\"why.dh\">Designed for the open ocean</h3>\n            <p data-i=\"why.dp\">Hull lines by Bakewell-White, the New Zealand naval architects known for offshore yachts. The deep-vee hull stays dry and stable in a short, steep sea, and smart use of space gives you more storage and a lockable cabin than the length suggests.</p>\n          </div>\n          <div class=\"pillar\">\n            <h3 data-i=\"why.bh\">Built to CE standards</h3>\n            <p data-i=\"why.bp\">Every hull is vacuum resin infused fibreglass: stronger and lighter than hand-laid layup, with no dry spots. A sealed underfloor adds reserve buoyancy. Atomix builds to meet and exceed international CE requirements.</p>\n            <p class=\"proof\" data-i=\"why.proof\">Atomix has been building boats since 2004.</p>\n          </div>\n          <div class=\"pillar\">\n            <h3 data-i=\"why.sh\">Looked after in Phuket</h3>\n            <p data-i=\"why.sp\">Our team in Chalong rigs, tests and services your boat locally. Every boat is sea-trialled and double-checked before handover, and Suzuki parts and service are on the island.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"videos\" aria-labelledby=\"vid-h\">\n    <div class=\"wrap\">\n      <h2 id=\"vid-h\" data-i=\"vid.h\">See them on the water</h2>\n      <div class=\"video-grid\">\n        <button class=\"vfeat\" type=\"button\" id=\"yt\" data-id=\"SUjsYGwLe20\" data-start=\"26\">\n          <img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/cruise.webp\" alt=\"\" loading=\"lazy\">\n          <span class=\"play\"><span><svg width=\"22\" height=\"22\" viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1l11 6-11 6z\"/></svg></span><span data-i=\"vid.main\">Let's see what you can do with Atomix</span></span>\n        </button>\n        <ul class=\"vlist\">\n          <li><a href=\"https://www.youtube.com/watch?v=A92d-UM0T0o\" target=\"_blank\" rel=\"noopener\"><span class=\"ic\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1l11 6-11 6z\"/></svg></span><span><b data-i=\"v1.b\">Video review</b><small data-i=\"v1.s\">Walkthrough on YouTube</small></span></a></li>\n          <li><a href=\"https://www.youtube.com/watch?v=BsUmgM18s-I\" target=\"_blank\" rel=\"noopener\"><span class=\"ic\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1l11 6-11 6z\"/></svg></span><span><b data-i=\"v2.b\">Sea trial</b><small data-i=\"v2.s\">Running footage on YouTube</small></span></a></li>\n          <li><a href=\"https://www.youtube.com/watch?v=lw9FW6pjVmg\" target=\"_blank\" rel=\"noopener\"><span class=\"ic\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1l11 6-11 6z\"/></svg></span><span><b data-i=\"v3.b\">Details up close</b><small data-i=\"v3.s\">Deck and cabin on YouTube</small></span></a></li>\n          <li><a href=\"https://youtu.be/Cq5yBRzKPr8\" target=\"_blank\" rel=\"noopener\"><span class=\"ic\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M2 1l11 6-11 6z\"/></svg></span><span><b>Atomix Boat Thailand</b><small data-i=\"v4.s\">Our channel on YouTube</small></span></a></li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"process\" id=\"order\" aria-labelledby=\"ord-h\">\n    <div class=\"wrap\">\n      <h2 id=\"ord-h\" data-i=\"ord.h\">From first message to first cast</h2>\n      <ol class=\"steps\">\n        <li><h3 data-i=\"s1.h\">Order</h3><p data-i=\"s1.p\">Tell us the model and package. We confirm options, availability and the final price in writing.</p></li>\n        <li><h3 data-i=\"s2.h\">Prepare</h3><p data-i=\"s2.p\">We fit your engine and accessories in Phuket, then sea-trial and double-check everything for best performance.</p></li>\n        <li><h3 data-i=\"s3.h\">Deliver</h3><p data-i=\"s3.p\">Wherever you live in Thailand, we transport the boat to you and hand it over ready to launch.</p></li>\n      </ol>\n    </div>\n  </section>\n\n  <section class=\"faq\" id=\"faq\" aria-labelledby=\"faq-h\">\n    <div class=\"wrap\">\n      <h2 id=\"faq-h\" data-i=\"faq.h\">Why Atomix is the right boat for you</h2>\n      <div class=\"faq-list\" id=\"faq-list\"></div>\n    </div>\n  </section>\n\n  <section class=\"quote\" id=\"quote\" aria-labelledby=\"q-h\">\n    <div class=\"wrap\">\n      <h2 id=\"q-h\" data-i=\"q.h\">Get your quote</h2>\n      <p class=\"lede\" style=\"margin-top:1rem\" data-i=\"q.lede\">Fill this in and send it to us on LINE or Messenger. We usually reply the same day.</p>\n      <div class=\"q-grid\">\n        <form id=\"qform\" novalidate>\n          <div class=\"row2\">\n            <div class=\"field\"><label for=\"q-model\" data-i=\"f.model\">Model</label><select id=\"q-model\"></select></div>\n            <div class=\"field\"><label for=\"q-pkg\" data-i=\"f.pkg\">Package</label><select id=\"q-pkg\"></select></div>\n          </div>\n          <div class=\"row2\">\n            <div class=\"field\"><label for=\"q-name\" data-i=\"f.name\">Your name</label><input id=\"q-name\" type=\"text\" autocomplete=\"name\" data-ip=\"ph.name\" placeholder=\"e.g. Somchai\"></div>\n            <div class=\"field\"><label for=\"q-phone\" data-i=\"f.phone\">Phone or LINE ID</label><input id=\"q-phone\" type=\"text\" autocomplete=\"tel\" data-ip=\"ph.phone\" placeholder=\"e.g. 081 234 5678\"></div>\n          </div>\n          <div class=\"field\"><label for=\"q-msg\" data-i=\"f.msg\">Anything else? (optional)</label><textarea id=\"q-msg\" data-ip=\"ph.msg\" placeholder=\"Delivery province, extra equipment, trade-in, financing\u2026\"></textarea></div>\n          <p class=\"err\" id=\"q-err\" role=\"alert\"></p>\n          <button class=\"btn btn-go\" type=\"submit\" style=\"justify-self:start\" data-i=\"f.submit\">Prepare my message</button>\n          <div class=\"out\" id=\"q-out\" hidden>\n            <pre id=\"q-text\"></pre>\n            <div class=\"acts\">\n              <button class=\"btn btn-go\" type=\"button\" id=\"q-copy\" data-i=\"f.copy\">Copy message</button>\n              <a class=\"btn btn-ghost\" href=\"https://line.me/R/ti/p/@atomix\" target=\"_blank\" rel=\"noopener\" data-i=\"f.line\">Open LINE @atomix</a>\n              <a class=\"btn btn-ghost\" href=\"https://m.me/Atomixboatsthailand\" target=\"_blank\" rel=\"noopener\" data-i=\"f.msgr\">Open Messenger</a>\n            </div>\n          </div>\n        </form>\n\n        <ul class=\"contact-list\">\n          <li><span class=\"k\" data-i=\"c.office\">Office</span><span class=\"v num\">+66 76 390 585</span><span class=\"act\"><button class=\"mini\" data-copy=\"+6676390585\" data-i=\"c.copy\">Copy</button><a class=\"mini\" href=\"tel:+6676390585\" data-i=\"c.call\">Call</a></span></li>\n          <li><span class=\"k\" data-i=\"c.mobile\">Mobile</span><span class=\"v num\">+66 80 306 3691</span><span class=\"act\"><button class=\"mini\" data-copy=\"+66803063691\" data-i=\"c.copy\">Copy</button><a class=\"mini\" href=\"tel:+66803063691\" data-i=\"c.call\">Call</a></span></li>\n          <li><span class=\"k\">LINE Official</span><span class=\"v\">@atomix</span><span class=\"act\"><a class=\"mini\" href=\"https://line.me/R/ti/p/@atomix\" target=\"_blank\" rel=\"noopener\" data-i=\"c.add\">Add</a></span></li>\n          <li><span class=\"k\" data-i=\"c.showroom\">Showroom</span><span class=\"v addr\">43/5 Moo 8, Chalong, Muang Phuket, Phuket 83130, Thailand</span><span class=\"act\"><a class=\"mini\" href=\"https://www.google.com/maps/search/?api=1&amp;query=7.8279595,98.3406235\" target=\"_blank\" rel=\"noopener\" data-i=\"c.map\">Map</a></span></li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"outro\" aria-label=\"Atomix 705 HT video\">\n    <div class=\"wrap\"><video class=\"autov outro-v\" autoplay muted loop playsinline preload=\"metadata\" poster=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/poster.webp\" aria-hidden=\"true\"><source src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/hero.mp4\" type=\"video/mp4\"></video></div>\n  </section>\n</main>\n\n<footer>\n  <div class=\"wrap\">\n    <img src=\"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/logo2.webp\" alt=\"Atomix Boats\" width=\"202\" height=\"52\" loading=\"lazy\">\n    <span>Atomix Boat Thailand (Megazip), Phuket</span>\n    <nav aria-label=\"Social\">\n      <a href=\"https://www.facebook.com/Atomixboatsthailand/\" target=\"_blank\" rel=\"noopener\">Facebook</a>\n      <a href=\"https://youtu.be/Cq5yBRzKPr8\" target=\"_blank\" rel=\"noopener\">YouTube</a>\n      <a href=\"https://m.me/Atomixboatsthailand\" target=\"_blank\" rel=\"noopener\">Messenger</a>\n    </nav>\n  </div>\n</footer>\n\n<div class=\"dock\">\n  <a class=\"btn btn-ghost\" href=\"https://line.me/R/ti/p/@atomix\" target=\"_blank\" rel=\"noopener\">LINE</a>\n  <a class=\"btn btn-ghost\" href=\"tel:+6676390585\" data-i=\"c.call\">Call</a>\n  <a class=\"btn btn-go\" href=\"#quote\" data-i=\"cta.quote\">Get a quote</a>\n</div>\n<div class=\"toast\" id=\"toast\" role=\"status\"></div>";
})();

const IMG={h705:"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/h705.webp",p600cc:"https://cdn.jsdelivr.net/gh/cyberni1/Krabi-Resort@5d9a1d1066443349abc8f0c0f67371d4ad86b36e/p600cc.webp"};
const LANGS=[["en","EN","English"],["de","DE","Deutsch"],["zh","中文","中文"],["ru","RU","Русский"],["th","ไทย","ไทย"]];

/* ---------- UI strings ---------- */
const T={
en:{
"faq.h":"Why Atomix is the right boat for you","nav.faq":"FAQ",
"sl0":"Atomix 600 CC with Suzuki DF140BTX",
"gal.h":"Inside and out","gal.prev":"Previous photo","gal.next":"Next photo","sl1":"705 HT on a sea trial","sl2":"705 HT with twin Suzuki outboards, ready for delivery","sl3":"Enclosed helm with wraparound glass and cabin access","sl4":"Atomix hardtop among the islands",
"nav.fleet":"Boats & prices","nav.why":"Why Atomix","nav.videos":"Videos","nav.order":"How ordering works","nav.contact":"Contact","cta.quote":"Get a quote",
"hero.l1":"Built for","hero.l2":"rough water.","hero.l3":"Ready for adventure.",
"hero.lede":"Fibreglass fishing and family boats from 5.2 to 7.2 metres. Designed in New Zealand for the open ocean, rigged with Suzuki outboards and delivered anywhere in Thailand.",
"hero.find":"Find your boat","hero.watch":"Watch it run",
"hero.facts":"<span><b>4 models</b> in stock or on order</span><span><b>5.2 – 7.2 m</b> length</span><span><b>100 – 400 hp</b> Suzuki packages</span><span>From <b class=\"num\">645,000 THB</b></span>",
"promo.tag":"On sale now","promo.text":"Atomix 600 CC center console with Suzuki engine at a promotional price, while stock lasts.","promo.go":"See the 600 CC",
"flag.text":"The flagship. 7.2 metres, enclosed hardtop, 220 litres of fuel and twin Suzuki power for days that start before sunrise and end far offshore.","flag.from":"Boat only, from","flag.cta":"Configure the 705 HT",
"fleet.h":"The fleet, drawn to scale","fleet.lede":"Tap a hull to see specs, equipment and every price package.","onsale":"On sale",
"prices.h":"Price packages","prices.note":"Prices in Thai baht. Engine packages include Suzuki outboard and accessories. Final price depends on options and availability; we confirm it in writing before you order.","prices.cta":"Request this package",
"cmp.h":"Side by side","cmp.spec":"Spec",
"why.h":"Why owners choose Atomix","why.lede":"The same boats that handle New Zealand's Tasman swell make light work of a monsoon chop in the Andaman Sea.",
"why.dh":"Designed for the open ocean","why.dp":"Hull lines by Bakewell-White, the New Zealand naval architects known for offshore yachts. The deep-vee hull stays dry and stable in a short, steep sea, and smart use of space gives you more storage and a lockable cabin than the length suggests.",
"why.bh":"Built to CE standards","why.bp":"Every hull is vacuum resin infused fibreglass: stronger and lighter than hand-laid layup, with no dry spots. A sealed underfloor adds reserve buoyancy. Atomix builds to meet and exceed international CE requirements.","why.proof":"Atomix has been building boats since 2004.",
"why.sh":"Looked after in Phuket","why.sp":"Our team in Chalong rigs, tests and services your boat locally. Every boat is sea-trialled and double-checked before handover, and Suzuki parts and service are on the island.",
"vid.h":"See them on the water","vid.main":"Let's see what you can do with Atomix",
"v1.b":"Video review","v1.s":"Walkthrough on YouTube","v2.b":"Sea trial","v2.s":"Running footage on YouTube","v3.b":"Details up close","v3.s":"Deck and cabin on YouTube","v4.s":"Our channel on YouTube",
"ord.h":"From first message to first cast",
"s1.h":"Order","s1.p":"Tell us the model and package. We confirm options, availability and the final price in writing.",
"s2.h":"Prepare","s2.p":"We fit your engine and accessories in Phuket, then sea-trial and double-check everything for best performance.",
"s3.h":"Deliver","s3.p":"Wherever you live in Thailand, we transport the boat to you and hand it over ready to launch.",
"q.h":"Get your quote","q.lede":"Fill this in and send it to us on LINE or Messenger. We usually reply the same day.",
"f.model":"Model","f.pkg":"Package","f.name":"Your name","f.phone":"Phone or LINE ID","f.msg":"Anything else? (optional)",
"ph.name":"e.g. Somchai","ph.phone":"e.g. 081 234 5678","ph.msg":"Delivery province, extra equipment, trade-in, financing…",
"f.submit":"Prepare my message","f.copy":"Copy message","f.line":"Open LINE @atomix","f.msgr":"Open Messenger",
"c.office":"Office","c.mobile":"Mobile","c.showroom":"Showroom","c.copy":"Copy","c.call":"Call","c.add":"Add","c.map":"Map",
"sp.L":"Length","sp.B":"Beam","sp.W":"Hull weight","sp.P":"Passengers","sp.F":"Fuel tank","sp.R":"Rod holders","sp.layout":"Layout","sp.from":"Price from","sp.suzuki":"With Suzuki from",
"profile":"Profile to scale","boatOnly":"Boat only","pk.hull0":"Hull without accessories","pk.hullB":"Hull in basic configuration","pk.eng":"{hp} hp, with accessories","pk.engS":"{hp} hp single engine, with accessories","pk.engT":"Twin {hp} hp, with accessories",
"err.name":"Add your name so we know who to reply to.","err.phone":"Add a phone number or LINE ID so we can reply.",
"msg":"Hello Atomix Boat Thailand,\n\nI'd like a quote for:\n{boat}: {pkg} ({desc})\nListed price: {price} THB\n\nName: {name}\nContact: {contact}{notes}\n\nThank you!","msg.notes":"\n\nNotes: {t}",
"copied":"Copied","selected":"Selected. Press copy on your keyboard","lang":"Language"
},
de:{
"faq.h":"Warum Atomix das richtige Boot für Sie ist","nav.faq":"FAQ",
"sl0":"Atomix 600 CC mit Suzuki DF140BTX",
"gal.h":"Innen und außen","gal.prev":"Vorheriges Foto","gal.next":"Nächstes Foto","sl1":"705 HT bei der Probefahrt","sl2":"705 HT mit zwei Suzuki-Außenbordern, bereit zur Auslieferung","sl3":"Geschlossener Steuerstand mit Rundumverglasung und Kabinenzugang","sl4":"Atomix-Hardtop zwischen den Inseln",
"nav.fleet":"Boote & Preise","nav.why":"Warum Atomix","nav.videos":"Videos","nav.order":"So bestellen Sie","nav.contact":"Kontakt","cta.quote":"Angebot anfordern",
"hero.l1":"Gebaut für","hero.l2":"raue See.","hero.l3":"Bereit für Abenteuer.",
"hero.lede":"Angel- und Familienboote aus GFK von 5,2 bis 7,2 Metern. In Neuseeland für den offenen Ozean konstruiert, mit Suzuki-Außenbordern ausgerüstet und in ganz Thailand geliefert.",
"hero.find":"Ihr Boot finden","hero.watch":"Im Einsatz ansehen",
"hero.facts":"<span><b>4 Modelle</b> ab Lager oder auf Bestellung</span><span><b>5,2 – 7,2 m</b> Länge</span><span><b>100 – 400 PS</b> Suzuki-Pakete</span><span>Ab <b class=\"num\">645.000 THB</b></span>",
"promo.tag":"Jetzt im Angebot","promo.text":"Atomix 600 CC mit Mittelkonsole und Suzuki-Motor zum Aktionspreis, solange der Vorrat reicht.","promo.go":"Zum 600 CC",
"flag.text":"Das Flaggschiff. 7,2 Meter, geschlossenes Hardtop, 220 Liter Tank und doppelte Suzuki-Power für Tage, die vor Sonnenaufgang beginnen und weit draußen enden.","flag.from":"Nur Boot, ab","flag.cta":"705 HT konfigurieren",
"fleet.h":"Die Flotte, maßstabsgetreu","fleet.lede":"Tippen Sie auf einen Rumpf für Daten, Ausstattung und alle Preispakete.","onsale":"Angebot",
"prices.h":"Preispakete","prices.note":"Preise in Thai-Baht. Motorpakete enthalten Suzuki-Außenborder und Zubehör. Der Endpreis hängt von Optionen und Verfügbarkeit ab; wir bestätigen ihn vor der Bestellung schriftlich.","prices.cta":"Dieses Paket anfragen",
"cmp.h":"Im Vergleich","cmp.spec":"Daten",
"why.h":"Warum Eigner Atomix wählen","why.lede":"Boote, die den Seegang der Tasmanischen See meistern, nehmen die Monsunwellen der Andamanensee mit Leichtigkeit.",
"why.dh":"Konstruiert für den offenen Ozean","why.dp":"Rumpflinien von Bakewell-White, den neuseeländischen Schiffsarchitekten für Hochseeyachten. Der tiefe V-Rumpf bleibt in kurzer, steiler See trocken und stabil, und die clevere Raumaufteilung bietet mehr Stauraum und eine abschließbare Kabine, als die Länge vermuten lässt.",
"why.bh":"Gebaut nach CE-Norm","why.bp":"Jeder Rumpf wird im Vakuum-Infusionsverfahren aus GFK gefertigt: stärker und leichter als handlaminiert, ohne Trockenstellen. Ein versiegelter Doppelboden sorgt für Reserveauftrieb. Atomix baut nach internationalen CE-Anforderungen und darüber hinaus.","why.proof":"Atomix baut seit 2004 Boote.",
"why.sh":"Betreut in Phuket","why.sp":"Unser Team in Chalong rüstet, testet und wartet Ihr Boot vor Ort. Jedes Boot wird vor der Übergabe probegefahren und doppelt geprüft, Suzuki-Teile und -Service gibt es auf der Insel.",
"vid.h":"Auf dem Wasser erleben","vid.main":"Sehen Sie, was Atomix kann",
"v1.b":"Video-Review","v1.s":"Rundgang auf YouTube","v2.b":"Probefahrt","v2.s":"Fahraufnahmen auf YouTube","v3.b":"Details aus der Nähe","v3.s":"Deck und Kabine auf YouTube","v4.s":"Unser Kanal auf YouTube",
"ord.h":"Von der ersten Nachricht zum ersten Wurf",
"s1.h":"Bestellen","s1.p":"Nennen Sie uns Modell und Paket. Wir bestätigen Optionen, Verfügbarkeit und Endpreis schriftlich.",
"s2.h":"Vorbereiten","s2.p":"Wir montieren Motor und Zubehör in Phuket, machen eine Probefahrt und prüfen alles doppelt für beste Leistung.",
"s3.h":"Liefern","s3.p":"Egal wo Sie in Thailand wohnen: Wir bringen das Boot zu Ihnen und übergeben es startklar.",
"q.h":"Ihr Angebot","q.lede":"Ausfüllen und per LINE oder Messenger an uns senden. Wir antworten meist noch am selben Tag.",
"f.model":"Modell","f.pkg":"Paket","f.name":"Ihr Name","f.phone":"Telefon oder LINE-ID","f.msg":"Sonst noch etwas? (optional)",
"ph.name":"z. B. Thomas","ph.phone":"z. B. 081 234 5678","ph.msg":"Lieferprovinz, Zusatzausstattung, Inzahlungnahme, Finanzierung …",
"f.submit":"Nachricht erstellen","f.copy":"Nachricht kopieren","f.line":"LINE @atomix öffnen","f.msgr":"Messenger öffnen",
"c.office":"Büro","c.mobile":"Mobil","c.showroom":"Showroom","c.copy":"Kopieren","c.call":"Anrufen","c.add":"Hinzufügen","c.map":"Karte",
"sp.L":"Länge","sp.B":"Breite","sp.W":"Rumpfgewicht","sp.P":"Personen","sp.F":"Tank","sp.R":"Rutenhalter","sp.layout":"Bauart","sp.from":"Preis ab","sp.suzuki":"Mit Suzuki ab",
"profile":"Profil maßstabsgetreu","boatOnly":"Nur Boot","pk.hull0":"Rumpf ohne Zubehör","pk.hullB":"Rumpf in Basisausstattung","pk.eng":"{hp} PS, mit Zubehör","pk.engS":"{hp} PS Einzelmotor, mit Zubehör","pk.engT":"2× {hp} PS, mit Zubehör",
"err.name":"Bitte Namen angeben, damit wir wissen, wem wir antworten.","err.phone":"Bitte Telefonnummer oder LINE-ID angeben, damit wir antworten können.",
"msg":"Hallo Atomix Boat Thailand,\n\nich hätte gern ein Angebot für:\n{boat}: {pkg} ({desc})\nListenpreis: {price} THB\n\nName: {name}\nKontakt: {contact}{notes}\n\nVielen Dank!","msg.notes":"\n\nAnmerkungen: {t}",
"copied":"Kopiert","selected":"Markiert. Bitte mit der Tastatur kopieren","lang":"Sprache"
},
zh:{
"faq.h":"为什么 Atomix 是您的理想之选","nav.faq":"FAQ",
"sl0":"Atomix 600 CC 配铃木 DF140BTX",
"gal.h":"内外细节","gal.prev":"上一张","gal.next":"下一张","sl1":"705 HT 海试中","sl2":"705 HT 配双铃木舷外机，整装待交付","sl3":"封闭式驾驶台，环绕式玻璃，可直达船舱","sl4":"Atomix 硬顶艇穿梭岛屿之间",
"nav.fleet":"船型与价格","nav.why":"为何选择 Atomix","nav.videos":"视频","nav.order":"订购流程","nav.contact":"联系我们","cta.quote":"获取报价",
"hero.l1":"为风浪而生，","hero.l2":"为冒险而来。","hero.l3":"",
"hero.lede":"5.2 至 7.2 米玻璃钢钓鱼艇与家庭游艇。新西兰设计，专为远洋打造，配备铃木舷外机，可送达泰国全境。",
"hero.find":"挑选您的船","hero.watch":"观看航行视频",
"hero.facts":"<span><b>4 款船型</b> 现货或预订</span><span>船长 <b>5.2 – 7.2 米</b></span><span><b>100 – 400 马力</b> 铃木动力套餐</span><span><b class=\"num\">645,000 泰铢</b> 起</span>",
"promo.tag":"限时特惠","promo.text":"Atomix 600 CC 中控艇搭配铃木发动机，促销价发售，售完即止。","promo.go":"查看 600 CC",
"flag.text":"旗舰之选。7.2 米船长、封闭式硬顶驾驶舱、220 升油箱、双铃木动力，从日出前出发，到远海尽兴而归。","flag.from":"裸船起价","flag.cta":"配置 705 HT",
"fleet.h":"全系船型，按比例呈现","fleet.lede":"点击船身，查看参数、配置及全部价格套餐。","onsale":"特惠",
"prices.h":"价格套餐","prices.note":"价格单位为泰铢。动力套餐包含铃木舷外机及配件。最终价格取决于选配与库存，下单前我们会书面确认。","prices.cta":"咨询此套餐",
"cmp.h":"参数对比","cmp.spec":"参数",
"why.h":"船主为何选择 Atomix","why.lede":"能征服新西兰塔斯曼海巨浪的船，在安达曼海的季风浪中游刃有余。",
"why.dh":"为远洋而设计","why.dp":"船体线型由新西兰知名远洋游艇设计公司 Bakewell-White 打造。深 V 船体在短陡浪中依然干爽平稳，巧妙的空间布局带来超出同级的储物空间和可上锁船舱。",
"why.bh":"符合 CE 标准","why.bp":"每一艘船体均采用真空树脂灌注玻璃钢工艺：比手糊工艺更坚固、更轻，无干斑缺陷。密封双层底板提供额外浮力。Atomix 的制造标准达到并超越国际 CE 要求。","why.proof":"Atomix 自 2004 年起专注造船。",
"why.sh":"普吉本地服务","why.sp":"我们位于查龙的团队在本地为您安装、测试和保养船只。每艘船交付前都经过海试和双重检查，铃木配件与售后服务就在岛上。",
"vid.h":"水上实拍","vid.main":"看看 Atomix 能带您去哪里",
"v1.b":"视频评测","v1.s":"YouTube 全船讲解","v2.b":"海试","v2.s":"YouTube 航行实拍","v3.b":"细节特写","v3.s":"YouTube 甲板与船舱","v4.s":"我们的 YouTube 频道",
"ord.h":"从第一条消息到第一次抛竿",
"s1.h":"下单","s1.p":"告诉我们船型和套餐，我们会书面确认选配、库存和最终价格。",
"s2.h":"准备","s2.p":"我们在普吉安装发动机和配件，并进行海试和双重检查，确保最佳性能。",
"s3.h":"交付","s3.p":"无论您在泰国何处，我们都会将船运送到您身边，交付即可下水。",
"q.h":"获取报价","q.lede":"填写下表，通过 LINE 或 Messenger 发送给我们。我们通常当天回复。",
"f.model":"船型","f.pkg":"套餐","f.name":"您的姓名","f.phone":"电话或 LINE ID","f.msg":"其他需求（选填）",
"ph.name":"例如：王先生","ph.phone":"例如：081 234 5678","ph.msg":"送达府份、加装设备、以旧换新、分期付款……",
"f.submit":"生成咨询消息","f.copy":"复制消息","f.line":"打开 LINE @atomix","f.msgr":"打开 Messenger",
"c.office":"办公室","c.mobile":"手机","c.showroom":"展厅","c.copy":"复制","c.call":"拨打","c.add":"添加","c.map":"地图",
"sp.L":"船长","sp.B":"船宽","sp.W":"船体重量","sp.P":"载客","sp.F":"油箱","sp.R":"鱼竿架","sp.layout":"类型","sp.from":"起价","sp.suzuki":"含铃木动力起价",
"profile":"按比例侧视图","boatOnly":"裸船","pk.hull0":"船体，不含配件","pk.hullB":"船体，基础配置","pk.eng":"{hp} 马力，含配件","pk.engS":"{hp} 马力单机，含配件","pk.engT":"双 {hp} 马力，含配件",
"err.name":"请填写姓名，方便我们回复。","err.phone":"请填写电话或 LINE ID，方便我们回复。",
"msg":"您好，Atomix Boat Thailand：\n\n我想咨询以下报价：\n{boat}：{pkg}（{desc}）\n标价：{price} 泰铢\n\n姓名：{name}\n联系方式：{contact}{notes}\n\n谢谢！","msg.notes":"\n\n备注：{t}",
"copied":"已复制","selected":"已选中，请用键盘复制","lang":"语言"
},
ru:{
"faq.h":"Почему Atomix — правильная лодка для вас","nav.faq":"FAQ",
"sl0":"Atomix 600 CC с Suzuki DF140BTX",
"gal.h":"Снаружи и внутри","gal.prev":"Предыдущее фото","gal.next":"Следующее фото","sl1":"705 HT на ходовых испытаниях","sl2":"705 HT с двумя моторами Suzuki, готова к доставке","sl3":"Закрытый пост управления с панорамным остеклением и входом в каюту","sl4":"Хардтоп Atomix среди островов",
"nav.fleet":"Лодки и цены","nav.why":"Почему Atomix","nav.videos":"Видео","nav.order":"Как заказать","nav.contact":"Контакты","cta.quote":"Узнать цену",
"hero.l1":"Создана для","hero.l2":"бурной воды.","hero.l3":"Готова к приключениям.",
"hero.lede":"Стеклопластиковые рыболовные и семейные лодки длиной от 5,2 до 7,2 м. Спроектированы в Новой Зеландии для открытого океана, оснащены моторами Suzuki, доставка по всему Таиланду.",
"hero.find":"Подобрать лодку","hero.watch":"Смотреть видео",
"hero.facts":"<span><b>4 модели</b> в наличии и под заказ</span><span>Длина <b>5,2 – 7,2 м</b></span><span><b>100 – 400 л.с.</b> пакеты Suzuki</span><span>От <b class=\"num\">645 000 THB</b></span>",
"promo.tag":"Спецпредложение","promo.text":"Atomix 600 CC с центральной консолью и мотором Suzuki по акционной цене, пока есть в наличии.","promo.go":"Смотреть 600 CC",
"flag.text":"Флагман. 7,2 метра, закрытая рубка, бак на 220 литров и два мотора Suzuki для дней, которые начинаются до рассвета и заканчиваются далеко в море.","flag.from":"Только лодка, от","flag.cta":"Настроить 705 HT",
"fleet.h":"Модельный ряд в масштабе","fleet.lede":"Нажмите на корпус, чтобы увидеть характеристики, оснащение и все пакеты цен.","onsale":"Акция",
"prices.h":"Пакеты и цены","prices.note":"Цены в тайских батах. Пакеты с мотором включают подвесной мотор Suzuki и оборудование. Итоговая цена зависит от опций и наличия; мы подтверждаем её письменно до заказа.","prices.cta":"Запросить этот пакет",
"cmp.h":"Сравнение моделей","cmp.spec":"Параметр",
"why.h":"Почему владельцы выбирают Atomix","why.lede":"Лодки, которые справляются с волной Тасманова моря, легко проходят муссонную волну Андаманского моря.",
"why.dh":"Создана для открытого океана","why.dp":"Обводы корпуса от Bakewell-White, новозеландского бюро, известного своими океанскими яхтами. Глубокое V остаётся сухим и устойчивым на короткой крутой волне, а продуманная компоновка даёт больше места для хранения и запираемую каюту, чем можно ожидать при такой длине.",
"why.bh":"По стандартам CE","why.bp":"Каждый корпус изготавливается методом вакуумной инфузии стеклопластика: прочнее и легче ручной формовки, без непропитанных участков. Герметичное двойное дно даёт запас плавучести. Atomix строит лодки, соответствующие и превосходящие международные требования CE.","why.proof":"Atomix строит лодки с 2004 года.",
"why.sh":"Сервис на Пхукете","why.sp":"Наша команда в Чалонге устанавливает оборудование, тестирует и обслуживает вашу лодку на месте. Перед передачей каждая лодка проходит ходовые испытания и двойную проверку, запчасти и сервис Suzuki есть на острове.",
"vid.h":"Смотрите на воде","vid.main":"Посмотрите, на что способна Atomix",
"v1.b":"Видеообзор","v1.s":"Обзор на YouTube","v2.b":"Ходовые испытания","v2.s":"Съёмка на ходу на YouTube","v3.b":"Детали крупным планом","v3.s":"Палуба и каюта на YouTube","v4.s":"Наш канал на YouTube",
"ord.h":"От первого сообщения до первого заброса",
"s1.h":"Заказ","s1.p":"Сообщите модель и пакет. Мы письменно подтвердим опции, наличие и итоговую цену.",
"s2.h":"Подготовка","s2.p":"Мы устанавливаем мотор и оборудование на Пхукете, проводим ходовые испытания и всё дважды проверяем.",
"s3.h":"Доставка","s3.p":"Где бы вы ни жили в Таиланде, мы доставим лодку и передадим её готовой к спуску на воду.",
"q.h":"Запрос цены","q.lede":"Заполните форму и отправьте нам в LINE или Messenger. Обычно отвечаем в тот же день.",
"f.model":"Модель","f.pkg":"Пакет","f.name":"Ваше имя","f.phone":"Телефон или LINE ID","f.msg":"Что-то ещё? (необязательно)",
"ph.name":"напр. Алексей","ph.phone":"напр. 081 234 5678","ph.msg":"Провинция доставки, доп. оборудование, трейд-ин, рассрочка…",
"f.submit":"Составить сообщение","f.copy":"Копировать сообщение","f.line":"Открыть LINE @atomix","f.msgr":"Открыть Messenger",
"c.office":"Офис","c.mobile":"Мобильный","c.showroom":"Шоурум","c.copy":"Копировать","c.call":"Позвонить","c.add":"Добавить","c.map":"Карта",
"sp.L":"Длина","sp.B":"Ширина","sp.W":"Вес корпуса","sp.P":"Пассажиры","sp.F":"Топливный бак","sp.R":"Держатели удочек","sp.layout":"Тип","sp.from":"Цена от","sp.suzuki":"С Suzuki от",
"profile":"Профиль в масштабе","boatOnly":"Только лодка","pk.hull0":"Корпус без оборудования","pk.hullB":"Корпус в базовой комплектации","pk.eng":"{hp} л.с., с оборудованием","pk.engS":"{hp} л.с., один мотор, с оборудованием","pk.engT":"2× {hp} л.с., с оборудованием",
"err.name":"Укажите имя, чтобы мы знали, кому ответить.","err.phone":"Укажите телефон или LINE ID, чтобы мы могли ответить.",
"msg":"Здравствуйте, Atomix Boat Thailand!\n\nПрошу рассчитать цену:\n{boat}: {pkg} ({desc})\nЦена по прайсу: {price} THB\n\nИмя: {name}\nКонтакт: {contact}{notes}\n\nСпасибо!","msg.notes":"\n\nКомментарий: {t}",
"copied":"Скопировано","selected":"Выделено. Скопируйте с клавиатуры","lang":"Язык"
},
th:{
"faq.h":"ทำไม Atomix คือเรือที่ใช่สำหรับคุณ","nav.faq":"FAQ",
"sl0":"Atomix 600 CC พร้อมซูซูกิ DF140BTX",
"gal.h":"ทั้งภายในและภายนอก","gal.prev":"รูปก่อนหน้า","gal.next":"รูปถัดไป","sl1":"705 HT ระหว่างทดลองแล่น","sl2":"705 HT พร้อมเครื่องซูซูกิคู่ พร้อมส่งมอบ","sl3":"ห้องคนขับแบบปิด กระจกรอบด้าน พร้อมทางเข้าห้องโดยสาร","sl4":"เรือฮาร์ดท็อป Atomix ท่ามกลางหมู่เกาะ",
"nav.fleet":"เรือและราคา","nav.why":"ทำไมต้อง Atomix","nav.videos":"วิดีโอ","nav.order":"ขั้นตอนการสั่งซื้อ","nav.contact":"ติดต่อเรา","cta.quote":"ขอใบเสนอราคา",
"hero.l1":"สร้างมาเพื่อ","hero.l2":"ทะเลคลื่นแรง","hero.l3":"พร้อมทุกการผจญภัย",
"hero.lede":"เรือตกปลาและเรือครอบครัวไฟเบอร์กลาส ยาว 5.2 ถึง 7.2 เมตร ออกแบบในนิวซีแลนด์เพื่อทะเลเปิด ติดตั้งเครื่องยนต์ซูซูกิ และจัดส่งทั่วประเทศไทย",
"hero.find":"เลือกเรือของคุณ","hero.watch":"ดูวิดีโอขณะแล่น",
"hero.facts":"<span><b>4 รุ่น</b> พร้อมส่งหรือสั่งจอง</span><span>ความยาว <b>5.2 – 7.2 ม.</b></span><span>แพ็กเกจซูซูกิ <b>100 – 400 แรงม้า</b></span><span>เริ่มต้น <b class=\"num\">645,000 บาท</b></span>",
"promo.tag":"โปรโมชั่น","promo.text":"Atomix 600 CC คอนโซลกลางพร้อมเครื่องยนต์ซูซูกิ ราคาพิเศษ จำนวนจำกัด","promo.go":"ดู 600 CC",
"flag.text":"เรือธง ยาว 7.2 เมตร ห้องคนขับฮาร์ดท็อปแบบปิด ถังน้ำมัน 220 ลิตร และเครื่องยนต์ซูซูกิคู่ สำหรับวันที่ออกก่อนรุ่งสางและไปไกลถึงทะเลลึก","flag.from":"เฉพาะตัวเรือ เริ่มต้น","flag.cta":"เลือกสเปก 705 HT",
"fleet.h":"เรือทุกรุ่น ตามสัดส่วนจริง","fleet.lede":"แตะที่ตัวเรือเพื่อดูสเปก อุปกรณ์ และแพ็กเกจราคาทั้งหมด","onsale":"ลดราคา",
"prices.h":"แพ็กเกจราคา","prices.note":"ราคาเป็นเงินบาท แพ็กเกจเครื่องยนต์รวมเครื่องยนต์ซูซูกิและอุปกรณ์ ราคาสุดท้ายขึ้นอยู่กับตัวเลือกและสินค้าในสต็อก เรายืนยันเป็นลายลักษณ์อักษรก่อนสั่งซื้อ","prices.cta":"สอบถามแพ็กเกจนี้",
"cmp.h":"เปรียบเทียบรุ่น","cmp.spec":"สเปก",
"why.h":"ทำไมเจ้าของเรือเลือก Atomix","why.lede":"เรือที่รับมือคลื่นทะเลแทสมันของนิวซีแลนด์ได้ ย่อมผ่านคลื่นมรสุมในทะเลอันดามันได้สบาย",
"why.dh":"ออกแบบเพื่อทะเลเปิด","why.dp":"เส้นตัวเรือออกแบบโดย Bakewell-White สถาปนิกเรือชื่อดังจากนิวซีแลนด์ผู้เชี่ยวชาญเรือยอชต์ทะเลลึก ท้องเรือทรงวีลึกแห้งและนิ่งแม้คลื่นสั้นและชัน พร้อมการจัดพื้นที่อย่างชาญฉลาด ให้ที่เก็บของมากและห้องโดยสารล็อกได้เกินขนาดเรือ",
"why.bh":"ผลิตตามมาตรฐาน CE","why.bp":"ตัวเรือทุกลำผลิตด้วยไฟเบอร์กลาสแบบฉีดเรซินระบบสุญญากาศ แข็งแรงและเบากว่างานเคลือบมือ ไม่มีจุดเรซินแห้ง พื้นสองชั้นแบบปิดผนึกเพิ่มแรงลอยตัวสำรอง Atomix ผลิตได้ตามและเหนือกว่ามาตรฐาน CE สากล","why.proof":"Atomix ผลิตเรือมาตั้งแต่ปี 2004",
"why.sh":"ดูแลถึงที่ภูเก็ต","why.sp":"ทีมงานของเราที่ฉลองติดตั้ง ทดสอบ และดูแลเรือของคุณในพื้นที่ ทุกลำผ่านการทดลองแล่นและตรวจสอบซ้ำก่อนส่งมอบ อะไหล่และศูนย์บริการซูซูกิอยู่บนเกาะ",
"vid.h":"ชมเรือบนผืนน้ำ","vid.main":"มาดูว่า Atomix ทำอะไรได้บ้าง",
"v1.b":"รีวิววิดีโอ","v1.s":"พาชมเรือบน YouTube","v2.b":"ทดลองแล่น","v2.s":"ภาพขณะแล่นบน YouTube","v3.b":"รายละเอียดใกล้ชิด","v3.s":"ดาดฟ้าและห้องโดยสารบน YouTube","v4.s":"ช่อง YouTube ของเรา",
"ord.h":"จากข้อความแรก สู่การตกปลาครั้งแรก",
"s1.h":"สั่งซื้อ","s1.p":"แจ้งรุ่นและแพ็กเกจ เรายืนยันตัวเลือก สต็อก และราคาสุดท้ายเป็นลายลักษณ์อักษร",
"s2.h":"เตรียมเรือ","s2.p":"เราติดตั้งเครื่องยนต์และอุปกรณ์ที่ภูเก็ต ทดลองแล่นและตรวจสอบซ้ำเพื่อสมรรถนะสูงสุด",
"s3.h":"ส่งมอบ","s3.p":"ไม่ว่าคุณอยู่ที่ไหนในประเทศไทย เราขนส่งเรือไปถึงคุณ พร้อมลงน้ำทันที",
"q.h":"ขอใบเสนอราคา","q.lede":"กรอกข้อมูลแล้วส่งให้เราทาง LINE หรือ Messenger ปกติเราตอบกลับภายในวันเดียวกัน",
"f.model":"รุ่น","f.pkg":"แพ็กเกจ","f.name":"ชื่อของคุณ","f.phone":"เบอร์โทรหรือ LINE ID","f.msg":"ข้อมูลเพิ่มเติม (ไม่บังคับ)",
"ph.name":"เช่น สมชาย","ph.phone":"เช่น 081 234 5678","ph.msg":"จังหวัดที่จัดส่ง อุปกรณ์เสริม เทิร์นเรือ ผ่อนชำระ…",
"f.submit":"สร้างข้อความ","f.copy":"คัดลอกข้อความ","f.line":"เปิด LINE @atomix","f.msgr":"เปิด Messenger",
"c.office":"สำนักงาน","c.mobile":"มือถือ","c.showroom":"โชว์รูม","c.copy":"คัดลอก","c.call":"โทร","c.add":"เพิ่มเพื่อน","c.map":"แผนที่",
"sp.L":"ความยาว","sp.B":"ความกว้าง","sp.W":"น้ำหนักตัวเรือ","sp.P":"ผู้โดยสาร","sp.F":"ถังน้ำมัน","sp.R":"ที่วางคันเบ็ด","sp.layout":"แบบเรือ","sp.from":"ราคาเริ่มต้น","sp.suzuki":"พร้อมซูซูกิ เริ่มต้น",
"profile":"ภาพด้านข้างตามสัดส่วน","boatOnly":"เฉพาะตัวเรือ","pk.hull0":"ตัวเรือ ไม่รวมอุปกรณ์","pk.hullB":"ตัวเรือ สเปกพื้นฐาน","pk.eng":"{hp} แรงม้า พร้อมอุปกรณ์","pk.engS":"เครื่องเดี่ยว {hp} แรงม้า พร้อมอุปกรณ์","pk.engT":"เครื่องคู่ {hp} แรงม้า พร้อมอุปกรณ์",
"err.name":"กรุณากรอกชื่อ เพื่อให้เราตอบกลับได้ถูกคน","err.phone":"กรุณากรอกเบอร์โทรหรือ LINE ID เพื่อให้เราติดต่อกลับ",
"msg":"สวัสดีครับ/ค่ะ Atomix Boat Thailand\n\nขอใบเสนอราคาสำหรับ:\n{boat}: {pkg} ({desc})\nราคาตามรายการ: {price} บาท\n\nชื่อ: {name}\nติดต่อ: {contact}{notes}\n\nขอบคุณครับ/ค่ะ","msg.notes":"\n\nหมายเหตุ: {t}",
"copied":"คัดลอกแล้ว","selected":"เลือกข้อความแล้ว กรุณาคัดลอกด้วยแป้นพิมพ์","lang":"ภาษา"
}};

const FAQ={
en:[
["What makes Atomix different from other boats this size?","The hulls are designed by Bakewell-White, the New Zealand naval architects known for offshore yachts, and were built for New Zealand's rough waters. That is why they stay dry and stable in the short, steep chop of the Andaman Sea."],
["How strong is the hull?","Every hull is vacuum resin infused fibreglass: stronger and lighter than hand-laid layup, with no dry spots in the laminate. A sealed underfloor adds reserve buoyancy. Atomix builds to international CE standards."],
["Which model is right for me?","<ul><li><b>485 SC</b> for families and first-time owners: 5.2 m, 5 people, step off the bow straight onto the beach.</li><li><b>600 CC</b> for anglers who fish all around the boat: full walk-around deck and a shading T-top.</li><li><b>600 SC</b> for offshore anglers with family: lockable cabin and a 160 L tank.</li><li><b>705 HT</b> the flagship for long days far offshore: enclosed hardtop, 2-berth cabin, 220 L tank.</li></ul>"],
["How much does an Atomix cost?","Boat only from 645,000 THB (485 SC). With a Suzuki engine and accessories from 1,120,000 THB. We confirm the final price in writing before you order."],
["Why Suzuki engines?","Every package comes with Suzuki outboards, and Suzuki parts and service are right here on Phuket. No waiting weeks for parts when your boat needs servicing."],
["What happens before handover?","We fit the engine and accessories in our Chalong workshop, sea-trial every boat and check everything twice. You get it ready to launch."],
["Do you deliver outside Phuket?","Yes, anywhere in Thailand. We bring the boat to you."],
["Who looks after my boat after the sale?","Our team in Chalong handles service and maintenance. Reach us on LINE (@atomix), by phone or at the showroom."],
["How long until I get my boat?","That depends on whether the model is in stock. Send us a request and you will get availability and delivery time, usually the same day."]],
de:[
["Was macht Atomix anders als andere Boote dieser Größe?","Die Rümpfe stammen von Bakewell-White, den neuseeländischen Schiffsarchitekten für Hochseeyachten, und wurden für die raue See vor Neuseeland gebaut. Deshalb bleiben sie auch in der kurzen, steilen Welle der Andamanensee trocken und stabil."],
["Wie robust ist der Rumpf?","Jeder Rumpf wird im Vakuum-Infusionsverfahren aus GFK gefertigt: fester und leichter als handlaminiert, ohne Trockenstellen im Laminat. Ein versiegelter Doppelboden sorgt für Reserveauftrieb. Gebaut wird nach internationaler CE-Norm."],
["Welches Modell passt zu mir?","<ul><li><b>485 SC</b> für Familien und Einsteiger: 5,2 m, 5 Personen, über den Bug direkt an den Strand.</li><li><b>600 CC</b> für Angler, die rund ums Boot fischen: komplett umlaufendes Deck und T-Top als Schatten.</li><li><b>600 SC</b> für Hochsee-Angler mit Familie: abschließbare Kabine und 160 L Tank.</li><li><b>705 HT</b> das Flaggschiff für lange Tage weit draußen: geschlossenes Hardtop, Kabine mit 2 Kojen, 220 L Tank.</li></ul>"],
["Was kostet ein Atomix?","Nur Boot ab 645.000 THB (485 SC). Mit Suzuki-Motor und Zubehör ab 1.120.000 THB. Den Endpreis bestätigen wir Ihnen vor der Bestellung schriftlich."],
["Warum Suzuki-Motoren?","Alle Pakete kommen mit Suzuki-Außenbordern, und Ersatzteile und Service gibt es direkt auf Phuket. Kein wochenlanges Warten auf Teile, wenn Ihr Boot zur Wartung muss."],
["Was passiert vor der Übergabe?","Wir montieren Motor und Zubehör in unserer Werkstatt in Chalong, fahren jedes Boot zur Probe und prüfen alles doppelt. Sie bekommen es startklar übergeben."],
["Liefern Sie auch außerhalb von Phuket?","Ja, in ganz Thailand. Wir bringen das Boot zu Ihnen."],
["Wer kümmert sich nach dem Kauf um mein Boot?","Unser Team in Chalong übernimmt Service und Wartung. Sie erreichen uns per LINE (@atomix), telefonisch oder im Showroom."],
["Wie lange dauert es, bis ich mein Boot habe?","Das hängt davon ab, ob das Modell auf Lager ist. Schicken Sie uns eine Anfrage, dann erhalten Sie Verfügbarkeit und Lieferzeit, meist noch am selben Tag."]],
zh:[
["Atomix 与同尺寸船相比有何不同？","船体由新西兰知名远洋游艇设计公司 Bakewell-White 设计，专为新西兰的恶劣海况打造。因此在安达曼海短而陡的浪中依然干爽平稳。"],
["船体有多坚固？","每一艘船体均采用真空树脂灌注玻璃钢工艺：比手糊工艺更坚固、更轻，层压中无干斑。密封双层底板提供额外浮力。Atomix 按国际 CE 标准制造。"],
["哪款船型适合我？","<ul><li><b>485 SC</b> 适合家庭和新手：5.2 米，载 5 人，可从船头直接登滩。</li><li><b>600 CC</b> 适合环船垂钓：全环绕甲板，T 顶遮阳。</li><li><b>600 SC</b> 适合带家人的远海钓手：可上锁船舱，160 升油箱。</li><li><b>705 HT</b> 远海旗舰：封闭硬顶，双人铺位船舱，220 升油箱。</li></ul>"],
["Atomix 多少钱？","裸船 645,000 泰铢起（485 SC）。含铃木发动机及配件 1,120,000 泰铢起。下单前我们会书面确认最终价格。"],
["为什么选铃木发动机？","所有套餐均配备铃木舷外机，铃木配件和售后服务就在普吉岛。船需要保养时，无需等待数周配件。"],
["交付前会做什么？","我们在查龙的工坊安装发动机和配件，每艘船都经过海试并双重检查。交付即可下水。"],
["普吉以外地区可以送货吗？","可以，泰国全境。我们把船送到您身边。"],
["售后谁来照顾我的船？","我们在查龙的团队负责保养和维修。可通过 LINE（@atomix）、电话或到展厅联系我们。"],
["多久能拿到船？","取决于该船型是否有现货。发送咨询后，我们通常当天回复库存和交付时间。"]],
ru:[
["Чем Atomix отличается от других лодок такого размера?","Корпуса спроектированы Bakewell-White, новозеландским бюро, известным океанскими яхтами, и созданы для суровых вод Новой Зеландии. Поэтому они остаются сухими и устойчивыми на короткой крутой волне Андаманского моря."],
["Насколько прочен корпус?","Каждый корпус изготавливается методом вакуумной инфузии стеклопластика: прочнее и легче ручной формовки, без непропитанных участков. Герметичное двойное дно даёт запас плавучести. Atomix строит по международным стандартам CE."],
["Какая модель мне подходит?","<ul><li><b>485 SC</b> для семей и новичков: 5,2 м, 5 человек, сход с носа прямо на пляж.</li><li><b>600 CC</b> для рыбалки со всех бортов: круговой проход и T-top от солнца.</li><li><b>600 SC</b> для морской рыбалки с семьёй: запираемая каюта и бак 160 л.</li><li><b>705 HT</b> флагман для долгих дней в море: закрытая рубка, каюта на 2 места, бак 220 л.</li></ul>"],
["Сколько стоит Atomix?","Только лодка от 645 000 THB (485 SC). С мотором Suzuki и оборудованием от 1 120 000 THB. Итоговую цену подтверждаем письменно до заказа."],
["Почему моторы Suzuki?","Все пакеты комплектуются подвесными моторами Suzuki, а запчасти и сервис Suzuki есть прямо на Пхукете. Никаких недель ожидания запчастей при обслуживании."],
["Что происходит перед передачей?","Мы устанавливаем мотор и оборудование в мастерской в Чалонге, проводим ходовые испытания каждой лодки и всё дважды проверяем. Вы получаете лодку готовой к спуску."],
["Доставляете ли вы за пределы Пхукета?","Да, по всему Таиланду. Мы привезём лодку к вам."],
["Кто обслуживает лодку после покупки?","Наша команда в Чалонге занимается сервисом и обслуживанием. Связь через LINE (@atomix), по телефону или в шоуруме."],
["Как быстро я получу лодку?","Зависит от наличия модели. Отправьте запрос, и мы сообщим наличие и сроки доставки, обычно в тот же день."]],
th:[
["Atomix ต่างจากเรือขนาดเดียวกันอย่างไร","ตัวเรือออกแบบโดย Bakewell-White สถาปนิกเรือจากนิวซีแลนด์ผู้เชี่ยวชาญเรือยอชต์ทะเลลึก และสร้างมาเพื่อทะเลคลื่นแรงของนิวซีแลนด์ จึงแห้งและนิ่งแม้เจอคลื่นสั้นและชันในทะเลอันดามัน"],
["ตัวเรือแข็งแรงแค่ไหน","ตัวเรือทุกลำผลิตด้วยไฟเบอร์กลาสแบบฉีดเรซินระบบสุญญากาศ แข็งแรงและเบากว่างานเคลือบมือ ไม่มีจุดเรซินแห้ง พื้นสองชั้นแบบปิดผนึกเพิ่มแรงลอยตัวสำรอง Atomix ผลิตตามมาตรฐาน CE สากล"],
["รุ่นไหนเหมาะกับฉัน","<ul><li><b>485 SC</b> สำหรับครอบครัวและมือใหม่: ยาว 5.2 ม. 5 คน ก้าวลงชายหาดจากหัวเรือได้เลย</li><li><b>600 CC</b> สำหรับตกปลารอบลำ: ดาดฟ้าเดินได้รอบลำ หลังคา T-top กันแดด</li><li><b>600 SC</b> สำหรับนักตกปลาทะเลลึกที่มากับครอบครัว: ห้องโดยสารล็อกได้ ถัง 160 ลิตร</li><li><b>705 HT</b> เรือธงสำหรับวันยาวกลางทะเล: ฮาร์ดท็อปปิด ห้องนอน 2 ที่ ถัง 220 ลิตร</li></ul>"],
["Atomix ราคาเท่าไร","เฉพาะตัวเรือเริ่มต้น 645,000 บาท (485 SC) พร้อมเครื่องยนต์ซูซูกิและอุปกรณ์เริ่มต้น 1,120,000 บาท เรายืนยันราคาสุดท้ายเป็นลายลักษณ์อักษรก่อนสั่งซื้อ"],
["ทำไมต้องเครื่องยนต์ซูซูกิ","ทุกแพ็กเกจใช้เครื่องยนต์ซูซูกิ และมีอะไหล่และศูนย์บริการซูซูกิอยู่บนเกาะภูเก็ต ไม่ต้องรออะไหล่หลายสัปดาห์เมื่อถึงเวลาเช็กระยะ"],
["ก่อนส่งมอบมีอะไรบ้าง","เราติดตั้งเครื่องยนต์และอุปกรณ์ที่อู่ของเราในฉลอง ทดลองแล่นทุกลำและตรวจสอบซ้ำ ส่งมอบพร้อมลงน้ำทันที"],
["จัดส่งนอกภูเก็ตได้ไหม","ได้ ทั่วประเทศไทย เรานำเรือไปส่งถึงคุณ"],
["หลังการขายใครดูแลเรือ","ทีมงานของเราที่ฉลองดูแลบริการและการบำรุงรักษา ติดต่อได้ทาง LINE (@atomix) โทรศัพท์ หรือที่โชว์รูม"],
["นานแค่ไหนจึงจะได้เรือ","ขึ้นอยู่กับว่ารุ่นนั้นมีในสต็อกหรือไม่ ส่งคำขอมา เราจะแจ้งสต็อกและระยะเวลาจัดส่ง ปกติภายในวันเดียวกัน"]]
};

/* ---------- Models ---------- */
const M=[
 {id:"485sc",name:"Atomix 485 SC",num:"485",img:null,cab:"sc",L:5.2,B:2.18,W:720,P:5,F:70,R:null,
  pk:[["boat","hull0",0,645000],["485 SC + Suzuki DF100BTL","eng",100,1120000],["485 SC + Suzuki DF115BTGL","eng",115,1210000]],
  tx:{
   en:{short:"Family",role:"The big little boat",desc:"Deck space that rivals many 5.5 m boats, in a hull you can tow and launch yourself. Seating for four, room to fish without tangling lines, and a walk-through windscreen so you step off the bow onto the beach and stay dry.",points:["Walk-through screen for beach landings","Seats four in comfort","Best price-to-space ratio in the range"]},
   de:{short:"Familie",role:"Das große kleine Boot",desc:"Deckfläche wie bei vielen 5,5-m-Booten, in einem Rumpf, den Sie selbst trailern und slippen. Sitzplätze für vier, Platz zum Angeln ohne verhedderte Schnüre und eine durchgehbare Windschutzscheibe: Sie steigen am Bug trocken an den Strand.",points:["Durchgehbare Scheibe für Strandanlandungen","Bequeme Sitze für vier","Bestes Preis-Platz-Verhältnis der Serie"]},
   zh:{short:"家庭",role:"小身材，大空间",desc:"甲板空间媲美许多 5.5 米船，船体轻便，可自行拖运下水。四人座位，钓鱼互不缠线；可通行式挡风玻璃让您从船头直接上岸，不湿鞋。",points:["可通行挡风玻璃，抢滩靠岸更方便","四人舒适座位","全系最高性价比空间"]},
   ru:{short:"Семейная",role:"Большая маленькая лодка",desc:"Палуба как у многих 5,5-метровых лодок в корпусе, который вы сами буксируете и спускаете на воду. Четыре места, простор для рыбалки без спутанных лесок и проходное лобовое стекло: сходите с носа на пляж, не намочив ноги.",points:["Проходное стекло для высадки на пляж","Удобные места для четверых","Лучшее соотношение цены и места в линейке"]},
   th:{short:"ครอบครัว",role:"เรือเล็กพื้นที่ใหญ่",desc:"พื้นที่ดาดฟ้าเทียบเท่าเรือ 5.5 เมตรหลายลำ ในตัวเรือที่ลากและลงน้ำได้เอง ที่นั่งสี่ที่ ตกปลาได้โดยสายไม่พันกัน และกระจกหน้าแบบเดินผ่านได้ ก้าวลงชายหาดจากหัวเรือได้โดยไม่เปียก",points:["กระจกหน้าเดินผ่านได้ ขึ้นชายหาดสะดวก","นั่งสบายสี่ที่","คุ้มค่าพื้นที่ที่สุดในทุกรุ่น"]}}},
 {id:"600cc",name:"Atomix 600 CC",num:"600",img:"p600cc",wide:true,cab:"cc",sale:true,L:6,B:2.3,W:795,P:6,F:130,R:null,
  pk:[["boat","hull0",0,815000],["600 CC + Suzuki DF140BTX","eng",140,1424000],["600 CC + Suzuki DF140BTGX","eng",140,1507000]],
  tx:{
   en:{short:"Center console",role:"Fish from every angle",desc:"A center console built for offshore fishing. The walk-around deck lets four to six anglers fight fish from any side, and the strong aluminium T-top keeps the sun off the helm all day.",points:["Full walk-around deck","Aluminium T-top for shade","Lightest 6 m hull: quick to plane, easy on fuel"]},
   de:{short:"Mittelkonsole",role:"Angeln aus jedem Winkel",desc:"Eine Mittelkonsole für das Angeln auf offener See. Das umlaufende Deck lässt vier bis sechs Angler von jeder Seite drillen, und das stabile Aluminium-T-Top hält den ganzen Tag die Sonne vom Steuerstand fern.",points:["Komplett umlaufendes Deck","Aluminium-T-Top als Sonnenschutz","Leichtester 6-m-Rumpf: gleitet schnell, spart Kraftstoff"]},
   zh:{short:"中控艇",role:"全方位垂钓",desc:"专为远海垂钓打造的中控艇。环绕式甲板可容纳四到六名钓手从任意方向搏鱼，坚固的铝合金 T 顶为驾驶位全天遮阳。",points:["全环绕式甲板","铝合金 T 顶遮阳","最轻 6 米船体：起滑快，更省油"]},
   ru:{short:"Центральная консоль",role:"Рыбалка с любого борта",desc:"Лодка с центральной консолью для морской рыбалки. Палуба с круговым проходом позволяет четырём–шести рыбакам вываживать рыбу с любого борта, а прочный алюминиевый T-top весь день защищает пост управления от солнца.",points:["Круговой проход по палубе","Алюминиевый T-top от солнца","Самый лёгкий 6-м корпус: быстро глиссирует, экономит топливо"]},
   th:{short:"คอนโซลกลาง",role:"ตกปลาได้รอบลำ",desc:"เรือคอนโซลกลางสำหรับตกปลาทะเลลึก ดาดฟ้าเดินได้รอบลำ ให้นักตกปลาสี่ถึงหกคนสู้ปลาได้ทุกด้าน และหลังคา T-top อะลูมิเนียมแข็งแรงกันแดดให้ที่บังคับเรือตลอดวัน",points:["ดาดฟ้าเดินได้รอบลำ","หลังคา T-top อะลูมิเนียมกันแดด","ตัวเรือ 6 เมตรที่เบาที่สุด เข้าโหมดเพลนไว ประหยัดน้ำมัน"]}}},
 {id:"600sc",name:"Atomix 600 SC",num:"600",img:null,cab:"sc",L:6,B:2.3,W:1100,P:6,F:160,R:null,
  pk:[["boat","hull0",0,1060000],["600 SC + Suzuki DF140BTX","eng",140,1424000],["600 SC + Suzuki DF140BTGX","eng",140,1507000]],
  tx:{
   en:{short:"Sport cabin",role:"The offshore fisherman",desc:"Good looks are only the start. An immensely strong hull and a lockable cabin make the 600 SC a serious offshore fishing platform that still cruises comfortably with family on board.",points:["Lockable cabin for gear and overnight stops","Strongest 6 m layup in the range","160 L fuel for long days offshore"]},
   de:{short:"Sportkabine",role:"Der Hochsee-Angler",desc:"Gutes Aussehen ist nur der Anfang. Ein extrem stabiler Rumpf und eine abschließbare Kabine machen das 600 SC zur ernsthaften Hochsee-Angelplattform, die mit der Familie an Bord trotzdem komfortabel cruist.",points:["Abschließbare Kabine für Ausrüstung und Übernachtungen","Stärkster 6-m-Rumpf der Serie","160 L Tank für lange Tage auf See"]},
   zh:{short:"运动舱",role:"远海钓手之选",desc:"出众外观只是开始。超高强度船体加上可上锁船舱，让 600 SC 成为专业远海垂钓平台，载着家人巡航同样舒适。",points:["可上锁船舱，存放装备或过夜","全系最坚固的 6 米船体","160 升油箱，远海尽兴一整天"]},
   ru:{short:"Спортивная каюта",role:"Морской рыбак",desc:"Внешность только начало. Очень прочный корпус и запираемая каюта делают 600 SC серьёзной платформой для морской рыбалки, на которой комфортно и в семейной прогулке.",points:["Запираемая каюта для снаряжения и ночёвок","Самый прочный 6-м корпус в линейке","Бак 160 л для долгих дней в море"]},
   th:{short:"สปอร์ตเคบิน",role:"นักตกปลาทะเลลึก",desc:"ความสวยงามเป็นเพียงจุดเริ่มต้น ตัวเรือแข็งแรงเป็นพิเศษและห้องโดยสารล็อกได้ ทำให้ 600 SC เป็นแพลตฟอร์มตกปลาทะเลลึกตัวจริง ที่ยังล่องเรือกับครอบครัวได้อย่างสบาย",points:["ห้องโดยสารล็อกได้ เก็บอุปกรณ์หรือค้างคืน","ตัวเรือ 6 เมตรที่แข็งแรงที่สุดในซีรีส์","ถังน้ำมัน 160 ลิตร สำหรับวันยาวกลางทะเล"]}}},
 {id:"705ht",name:"Atomix 705 HT",num:"705",img:"h705",cab:"ht",L:7.2,B:2.4,W:1400,P:7,F:220,R:10,
  pk:[["boat","hullB",0,1320000],["705 HT + Suzuki DF200ATX","eng",200,1967000],["705 HT + Suzuki DF200AP","engS",200,2040000],["705 HT + 2× Suzuki DF115BTG","engT",115,2400000]],
  tx:{
   en:{short:"Hardtop",role:"The offshore flagship",desc:"The newest design in the range, on Atomix's award-winning hull for comfort far offshore. Bucket seats and fold-away rear seating leave a big, clear cockpit floor for serious fishing, and the enclosed hardtop keeps everyone dry on the run home.",points:["Enclosed hardtop with lockable 2-berth cabin","10 rod holders (6 + 4)","Single 200 hp or twin Suzuki outboards"]},
   de:{short:"Hardtop",role:"Das Hochsee-Flaggschiff",desc:"Das neueste Modell der Serie auf dem preisgekrönten Atomix-Rumpf für Komfort weit draußen. Schalensitze und klappbare Rücksitze lassen eine große, freie Cockpitfläche zum Angeln, und das geschlossene Hardtop hält alle auf dem Heimweg trocken.",points:["Geschlossenes Hardtop mit abschließbarer 2-Personen-Kabine","10 Rutenhalter (6 + 4)","Ein 200-PS- oder zwei Suzuki-Außenborder"]},
   zh:{short:"硬顶艇",role:"远海旗舰",desc:"全系最新设计，采用 Atomix 获奖船体，远海航行依旧舒适。桶形座椅与可折叠后座留出宽敞开阔的驾驶舱甲板，满足专业垂钓；封闭式硬顶让全员返航时保持干爽。",points:["封闭硬顶，带可上锁双人铺位船舱","10 个鱼竿架（6 + 4）","单台 200 马力或双铃木舷外机"]},
   ru:{short:"Хардтоп",role:"Морской флагман",desc:"Новейшая модель линейки на отмеченном наградами корпусе Atomix для комфорта далеко в море. Ковшеобразные кресла и складной задний диван освобождают большой кокпит для серьёзной рыбалки, а закрытая рубка сохраняет всех сухими на обратном пути.",points:["Закрытая рубка с запираемой 2-местной каютой","10 держателей удочек (6 + 4)","Один мотор 200 л.с. или два Suzuki"]},
   th:{short:"ฮาร์ดท็อป",role:"เรือธงทะเลลึก",desc:"ดีไซน์ใหม่ล่าสุดของซีรีส์ บนตัวเรือรางวัลของ Atomix เพื่อความสบายแม้ออกไกล เบาะบักเก็ตและเบาะหลังพับเก็บได้ ให้พื้นที่ค็อกพิตกว้างโล่งสำหรับตกปลาจริงจัง และห้องคนขับฮาร์ดท็อปแบบปิดกันละอองน้ำตลอดทางกลับ",points:["ฮาร์ดท็อปปิดพร้อมห้องนอน 2 ที่ล็อกได้","ที่วางคันเบ็ด 10 จุด (6 + 4)","เครื่องซูซูกิเดี่ยว 200 แรงม้า หรือเครื่องคู่"]}}}
];
const MAX={L:7.2,B:2.4,W:1400,P:7,F:220};
const $=s=>document.querySelector(s);
let LANG="en";
const t=k=>(T[LANG]&&T[LANG][k]!=null?T[LANG][k]:T.en[k]);
const fill=(s,o)=>s.replace(/\{(\w+)\}/g,(_,k)=>o[k]!=null?o[k]:"");
const fmt=n=>LANG==="de"?n.toLocaleString("de-DE"):LANG==="ru"?n.toLocaleString("ru-RU"):n.toLocaleString("en-US");
const cur$=()=>LANG==="th"?"บาท":LANG==="zh"?"泰铢":"THB";
const dec=v=>(LANG==="de"||LANG==="ru")?String(v).replace(".",","):String(v);
const unit=u=>({m:{zh:"米",th:"ม."},L:{zh:"升",ru:"л",th:"ลิตร"},kg:{zh:"公斤",ru:"кг",th:"กก."}}[u]||{})[LANG]||u;
const mx=m=>m.tx[LANG]||m.tx.en;
const pkName=p=>p[0]==="boat"?t("boatOnly"):p[0];
const pkDesc=p=>fill(t("pk."+p[1]),{hp:p[2]});

function hullSVG(m){
  const s=16,k=100,b=s+m.L*k,W=7.2*k+40;
  const g=`M${s},96 L${b-46},83 Q${b-6},81 ${b},86 Q${b-28},128 ${b-118},150 L${s+4},150 Z`;
  let cab="";const a=s+m.L*k*.30,c=s+m.L*k*.64;
  if(m.cab==="ht") cab=`<path class="cab" d="M${a},90 L${a+4},40 L${c-34},40 Q${c-14},41 ${c},86 Z"/>`;
  if(m.cab==="sc") cab=`<path class="cab" d="M${a+10},90 L${a+22},62 L${c-30},62 Q${c-10},64 ${c+8},86 Z"/>`;
  if(m.cab==="cc"){const x=s+m.L*k*.45;cab=`<path class="cab" d="M${x},88 L${x+4},66 L${x+44},66 L${x+56},88 Z"/><path class="cab" d="M${x-14},42 L${x+64},42 L${x+64},47 L${x-14},47 Z"/><path class="cab" d="M${x-6},47 h4 v40 h-4 Z M${x+52},47 h4 v40 h-4 Z"/>`;}
  const motor=`<path class="cab" d="M${s-12},84 h16 v22 h-6 v50 h-6 v-50 h-4 Z"/>`;
  return `<svg viewBox="0 0 ${W} 170" aria-hidden="true"><line class="wl" x1="0" x2="${W}" y1="140" y2="140"/>${motor}${cab}<path class="hull" d="${g}"/></svg>`;
}

const hulls=$("#hulls");
M.forEach(m=>{
  const bt=document.createElement("button");
  bt.className="hullbtn";bt.type="button";bt.dataset.id=m.id;bt.setAttribute("aria-pressed","false");
  bt.innerHTML=hullSVG(m)+`<span class="hn">${m.num} ${m.cab.toUpperCase()}</span><span class="hl num"></span>`;
  bt.addEventListener("click",()=>select(m.id,true));
  hulls.appendChild(bt);
});
function hullLabels(){hulls.querySelectorAll(".hullbtn").forEach(b=>{const m=M.find(x=>x.id===b.dataset.id);b.querySelector(".hl").textContent=`${dec(m.L)} ${unit("m")} · ${mx(m).short}`;});}

let cur=null,curPkg=0;
function render(m){
  const im=$("#c-img"),dr=$("#c-draw"),x=mx(m);
  if(m.img){im.hidden=false;dr.hidden=true;im.src=IMG[m.img];im.alt=m.name;}
  else{im.hidden=true;im.removeAttribute("src");dr.hidden=false;dr.innerHTML=hullSVG(m)+`<span class="cap num">${t("profile")} · ${dec(m.L)} × ${dec(m.B)} ${unit("m")}</span>`;}
  $("#c-big").textContent=m.wide?"":m.num;
  $(".c-media").classList.toggle("wide",!!m.wide);
  $("#c-badge").hidden=!m.sale;
  $("#c-name").textContent=m.name;
  $("#c-role").textContent=x.role;
  $("#c-desc").textContent=x.desc;
  $("#c-points").innerHTML=x.points.map(p=>`<li>${p}</li>`).join("");
  const sp=[["L","m"],["B","m"],["W","kg"],["P",""],["F","L"]];
  if(m.R) sp.push(["R",""]);
  $("#c-specs").innerHTML=sp.map(([k,u])=>{
    const v=m[k],pct=MAX[k]?v/MAX[k]:1;
    return `<div class="spec"><div class="v num">${k==="W"?fmt(v):dec(v)}<small>${u?unit(u):""}</small></div><div class="k">${t("sp."+k)}</div><div class="bar"><i style="transform:scaleX(${pct})"></i></div></div>`;
  }).join("");
  $("#c-pkg").innerHTML=m.pk.map((p,i)=>`<label><input type="radio" name="pkg" value="${i}" ${i===curPkg?"checked":""}><span><span class="pn">${pkName(p)}</span><br><span class="pd">${pkDesc(p)}</span></span><span class="pp num">${fmt(p[3])}<small>${cur$()}</small></span></label>`).join("");
  $("#c-pkg").querySelectorAll("input").forEach(r=>r.addEventListener("change",()=>{curPkg=+r.value;syncForm();}));
}
function select(id,user){
  const m=M.find(x=>x.id===id);if(!m)return;
  if(cur&&cur.id!==id)curPkg=0;
  cur=m;
  hulls.querySelectorAll(".hullbtn").forEach(b=>b.setAttribute("aria-pressed",b.dataset.id===id));
  const go=()=>render(m);
  if(user&&document.startViewTransition&&!matchMedia("(prefers-reduced-motion: reduce)").matches)document.startViewTransition(go);else go();
  syncForm();
}

function compare(){
  const rows=[["sp.L",m=>m.L,v=>dec(v)+" "+unit("m"),"max"],["sp.B",m=>m.B,v=>dec(v)+" "+unit("m"),"max"],["sp.W",m=>m.W,v=>fmt(v)+" "+unit("kg")],["sp.P",m=>m.P,v=>v,"max"],["sp.F",m=>m.F,v=>v+" "+unit("L"),"max"],["sp.layout",m=>mx(m).short,v=>v],["sp.from",m=>m.pk[0][3],v=>fmt(v)+" "+cur$(),"min"],["sp.suzuki",m=>m.pk[1][3],v=>fmt(v)+" "+cur$()]];
  $("#cmp").innerHTML=rows.map(([l,g,f,b])=>{
    const vals=M.map(g);let best=-1;
    if(b==="max")best=vals.indexOf(Math.max(...vals));
    if(b==="min")best=vals.indexOf(Math.min(...vals));
    return `<tr><th scope="row">${t(l)}</th>${vals.map((v,i)=>`<td class="${i===best?"best":""}">${f(v)}</td>`).join("")}</tr>`;
  }).join("");
}

/* quote form */
const qm=$("#q-model"),qp=$("#q-pkg");
qm.innerHTML=M.map(m=>`<option value="${m.id}">${m.name}</option>`).join("");
function fillPkg(){const m=M.find(x=>x.id===qm.value);const keep=qp.value;qp.innerHTML=m.pk.map((p,i)=>`<option value="${i}">${pkName(p)} · ${fmt(p[3])} ${cur$()}</option>`).join("");if(keep&&+keep<m.pk.length)qp.value=keep;}
function syncForm(){if(!cur)return;qm.value=cur.id;fillPkg();qp.value=String(curPkg);}
qm.addEventListener("change",()=>{qp.value="0";fillPkg();qp.value="0";});
$("#c-quote").addEventListener("click",syncForm);
document.querySelectorAll("[data-pick]").forEach(a=>a.addEventListener("click",()=>select(a.dataset.pick,true)));

function buildMsg(){
  const name=$("#q-name").value.trim(),ph=$("#q-phone").value.trim(),err=$("#q-err");
  if(!name||!ph){err.textContent=!name?t("err.name"):t("err.phone");(!name?$("#q-name"):$("#q-phone")).focus();return false;}
  err.textContent="";
  const m=M.find(x=>x.id===qm.value),p=m.pk[+qp.value]||m.pk[0],note=$("#q-msg").value.trim();
  $("#q-text").textContent=fill(t("msg"),{boat:m.name,pkg:pkName(p),desc:pkDesc(p),price:fmt(p[3]),name,contact:ph,notes:note?fill(t("msg.notes"),{t:note}):""});
  $("#q-out").hidden=false;return true;
}
$("#qform").addEventListener("submit",e=>{e.preventDefault();if(buildMsg())$("#q-copy").focus();});
function toast(s){const el=$("#toast");el.textContent=s;el.classList.add("on");clearTimeout(el._h);el._h=setTimeout(()=>el.classList.remove("on"),2200);}
function sel(el){if(!el)return;const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r);toast(t("selected"));}
function copy(text,el){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(()=>toast(t("copied")),()=>sel(el));}else sel(el);}
$("#q-copy").addEventListener("click",()=>copy($("#q-text").textContent,$("#q-text")));
document.querySelectorAll("[data-copy]").forEach(b=>b.addEventListener("click",()=>copy(b.dataset.copy,b.closest("li").querySelector(".v"))));

/* ---------- language ---------- */
const lb=$("#lang-btn"),lm=$("#lang-menu");
lm.innerHTML=LANGS.map(([c,,n])=>`<li role="none"><button type="button" role="menuitemradio" data-lang="${c}" lang="${c}">${n}</button></li>`).join("");
function openMenu(o){lm.hidden=!o;lb.setAttribute("aria-expanded",String(o));if(o)lm.querySelector(`[data-lang="${LANG}"]`).focus();}
lb.addEventListener("click",()=>openMenu(lm.hidden));
document.addEventListener("click",e=>{if(!lm.hidden&&!e.target.closest(".lang"))openMenu(false);});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!lm.hidden){openMenu(false);lb.focus();}});
lm.addEventListener("click",e=>{const b=e.target.closest("[data-lang]");if(!b)return;setLang(b.dataset.lang,true);openMenu(false);lb.focus();});


function renderFAQ(){
  const list=$("#faq-list"),open=[...list.querySelectorAll("details")].map(d=>d.open);
  const items=FAQ[LANG]||FAQ.en;
  list.innerHTML=items.map(([q,a],i)=>`<details${open[i]?" open":""}><summary><span>${q}</span><i aria-hidden="true"></i></summary><div class="faq-a">${a.startsWith("<")?a:`<p>${a}</p>`}</div></details>`).join("");
  let ld=document.getElementById("faq-ld");
  if(!ld){ld=document.createElement("script");ld.type="application/ld+json";ld.id="faq-ld";document.head.appendChild(ld);}
  ld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","inLanguage":LANG,"mainEntity":items.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()}}))});
}
function setLang(code,manual){
  if(!T[code])code="en";
  LANG=code;
  document.documentElement.lang=code==="zh"?"zh-Hans":code;
  $("#lang-cur").textContent=LANGS.find(l=>l[0]===code)[1];
  lb.setAttribute("aria-label",t("lang"));
  lm.querySelectorAll("[data-lang]").forEach(b=>b.setAttribute("aria-checked",String(b.dataset.lang===code)));
  document.querySelectorAll("[data-i]").forEach(el=>{el.textContent=t(el.dataset.i);el.hidden=el.textContent==="";});
  document.querySelectorAll("[data-ih]").forEach(el=>{el.innerHTML=t(el.dataset.ih);});
  document.querySelectorAll("[data-ip]").forEach(el=>{el.placeholder=t(el.dataset.ip);});
  document.querySelectorAll("[data-ia]").forEach(el=>{el.setAttribute("aria-label",t(el.dataset.ia));});
  document.querySelectorAll(".slide").forEach((s,i,all)=>{s.setAttribute("aria-label",(i+1)+" / "+all.length);});
  $("#yt").setAttribute("aria-label",t("vid.main"));
  hullLabels();compare();renderFAQ();
  if(cur)render(cur);
  fillPkg();
  if(!$("#q-out").hidden&&$("#q-name").value.trim()&&$("#q-phone").value.trim())buildMsg();
  if(manual){try{localStorage.setItem("atomix-lang",code);}catch(e){}}
}
function detectLang(){
  const h=(location.hash||"").slice(1).toLowerCase();
  if(T[h])return h;
  try{const s=localStorage.getItem("atomix-lang");if(s&&T[s])return s;}catch(e){}
  const list=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"]);
  for(const l of list){const p=String(l).toLowerCase().split("-")[0];if(T[p])return p;}
  return "en";
}

select("705ht",false);
setLang(detectLang(),false);


/* gallery slideshow: snap carousel with autoplay */
(function(){
  const tr=$("#gal"),slides=[...tr.querySelectorAll(".slide")],dots=$("#gal-dots");
  slides.forEach((s,i)=>{s.setAttribute("role","group");s.setAttribute("aria-roledescription","slide");const b=document.createElement("button");b.type="button";b.setAttribute("aria-label",String(i+1));b.addEventListener("click",()=>{go(i);hold();});dots.appendChild(b);});
  let idx=0,timer=null,paused=false;
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  function mark(i){idx=i;slides.forEach((s,k)=>s.classList.toggle("on",k===i));[...dots.children].forEach((d,k)=>{d.removeAttribute("aria-current");if(k===i){void d.offsetWidth;d.setAttribute("aria-current","true");}});}
  function go(i){i=(i+slides.length)%slides.length;const s=slides[i];tr.scrollTo({left:s.offsetLeft-(tr.clientWidth-s.clientWidth)/2,behavior:reduce?"auto":"smooth"});mark(i);}
  function start(){stop();if(reduce||paused)return;dots.classList.remove("paused");timer=setInterval(()=>go(idx+1),5000);}
  function stop(){clearInterval(timer);timer=null;}
  function hold(){paused=true;stop();dots.classList.add("paused");clearTimeout(hold._t);hold._t=setTimeout(()=>{paused=false;start();mark(idx);},12000);}
  $("#gal-prev").addEventListener("click",()=>{go(idx-1);hold();});
  $("#gal-next").addEventListener("click",()=>{go(idx+1);hold();});
  tr.addEventListener("pointerdown",hold,{passive:true});
  tr.addEventListener("wheel",hold,{passive:true});
  tr.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){e.preventDefault();go(idx+1);hold();}if(e.key==="ArrowLeft"){e.preventDefault();go(idx-1);hold();}});
  tr.addEventListener("mouseenter",()=>{stop();dots.classList.add("paused");});
  tr.addEventListener("mouseleave",()=>{if(!paused)start();});
  let st;tr.addEventListener("scroll",()=>{clearTimeout(st);st=setTimeout(()=>{const c=tr.scrollLeft+tr.clientWidth/2;let best=0,bd=1e9;slides.forEach((s,k)=>{const d=Math.abs(s.offsetLeft+s.clientWidth/2-c);if(d<bd){bd=d;best=k;}});if(best!==idx)mark(best);},80);},{passive:true});
  document.addEventListener("visibilitychange",()=>{document.hidden?stop():start();});
  const io=new IntersectionObserver(es=>{es.forEach(e=>{e.isIntersecting?start():stop();});},{threshold:.3});
  io.observe(tr);
  mark(0);
})();
/* background videos: always autoplay, muted, looping */
document.querySelectorAll("video.autov").forEach(v=>{
  v.muted=true;v.defaultMuted=true;v.setAttribute("muted","");v.playsInline=true;
  const src=v.querySelector("source").getAttribute("src");
  const kick=()=>{const p=v.play();if(p&&p.catch)p.catch(()=>{});};
  let tried=false;
  const viaBlob=async()=>{if(tried)return;tried=true;try{const r=await fetch(src);if(!r.ok)return;const b=await r.blob();v.src=URL.createObjectURL(new Blob([b],{type:"video/mp4"}));v.load();kick();}catch(e){}};
  v.addEventListener("error",viaBlob,true);
  v.querySelector("source").addEventListener("error",viaBlob);
  v.addEventListener("canplay",kick);
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)kick();});
  ["touchstart","pointerdown","scroll"].forEach(ev=>addEventListener(ev,kick,{once:true,passive:true}));
  kick();
});

/* YouTube: embed on own hosting, open YouTube when framed (artifact preview) */
const yt=$("#yt");
yt.addEventListener("click",()=>{
  const id=yt.dataset.id,st=yt.dataset.start,url=`https://www.youtube.com/watch?v=${id}&t=${st}s`;
  if(window.self!==window.top){const a=document.createElement("a");a.href=url;a.target="_blank";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();return;}
  const f=document.createElement("iframe");
  f.src=`https://www.youtube-nocookie.com/embed/${id}?start=${st}&autoplay=1&rel=0&playsinline=1`;
  f.title="Atomix Boat video";f.allow="autoplay; encrypted-media; picture-in-picture; fullscreen";f.allowFullscreen=true;
  const box=document.createElement("div");box.className="vfeat";box.appendChild(f);yt.replaceWith(box);
});
