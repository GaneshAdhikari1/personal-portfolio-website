const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { services, articles, caseStudies } = require("./src/content");

const PORT = Number(process.env.PORT || 3000);
const SITE_URL = (process.env.SITE_URL || `http://localhost:${PORT}`).replace(/\/$/, "");
const PUBLIC = path.join(__dirname, "public");
const email = "aimarketingwithganesh@gmail.com";
const whatsapp = "https://wa.me/9779769208749";
const ctaText = "Book a Free Consultation Call";

const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const url = (pathname = "/") => `${SITE_URL}${pathname}`;
const icon = (name) => `<svg aria-hidden="true" viewBox="0 0 24 24"><use href="/assets/icons.svg#${name}"></use></svg>`;

function serviceCards(limit) {
  return services.slice(0, limit || services.length).map((s, i) => `
    <article class="service-card reveal" style="--delay:${i % 4}">
      <div class="card-icon">${icon(["compass", "search", "target", "spark", "pen", "mail", "flow", "chart"][i])}</div>
      <p class="eyebrow">0${i + 1}</p>
      <h3>${esc(s.short)}</h3>
      <p>${esc(s.summary)}</p>
      <a class="text-link" href="/services/${s.slug}">Explore service ${icon("arrow")}</a>
    </article>`).join("");
}

function caseCards(limit) {
  return caseStudies.slice(0, limit || caseStudies.length).map((c) => `
    <article class="case-card reveal">
      <div class="case-meta"><span class="tag tag-warn">${esc(c.label)}</span><span>${esc(c.industry)}</span></div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.challenge)}</p>
      <a class="text-link" href="/case-studies/${c.slug}">Read the example ${icon("arrow")}</a>
    </article>`).join("");
}

function consultationBand(title = "Ready to build a smarter growth system?") {
  return `<section class="consultation-band section-pad">
    <div class="wrap band-grid">
      <div><p class="eyebrow light">Your free customized plan</p><h2>${esc(title)}</h2><p>I’ll review your business, identify the biggest marketing opportunities, and give you a clear digital marketing plan you can start using right away.</p></div>
      <a class="button button-light" href="/contact#book">${ctaText} ${icon("arrow")}</a>
    </div>
  </section>`;
}

function faq(items) {
  return `<div class="faq-list">${items.map(([q, a], i) => `<details class="reveal" ${i === 0 ? "open" : ""}><summary>${esc(q)}<span aria-hidden="true">+</span></summary><p>${esc(a)}</p></details>`).join("")}</div>`;
}

function layout({ title, description, pathName, body, schema = {} }) {
  const fullTitle = `${title} | Digital Ganesh`;
  const canonical = url(pathName);
  const combinedSchema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Digital Ganesh", founder: { "@type": "Person", name: "Ganesh Adhikari" }, email, areaServed: "Worldwide", address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" }, url: SITE_URL, ...schema };
  return `<!doctype html>
  <html lang="en"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${esc(fullTitle)}</title><meta name="description" content="${esc(description)}">
    <link rel="canonical" href="${esc(canonical)}"><meta property="og:title" content="${esc(fullTitle)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:url" content="${esc(canonical)}"><meta property="og:image" content="${url("/assets/social-card.svg")}">
    <meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#12372a">
    <link rel="icon" href="/assets/digital-ganesh-logo-2026.png" type="image/png"><link rel="stylesheet" href="/styles.css?v=8">
    <script type="application/ld+json">${JSON.stringify(combinedSchema).replace(/</g, "\\u003c")}</script><script src="/app.js?v=8" defer></script>
  </head><body>
    <a class="skip-link" href="#main">Skip to content</a><div class="scroll-progress" aria-hidden="true"><span></span></div>
    <header class="site-header"><div class="wrap nav-wrap">
      <a class="brand" href="/" aria-label="Digital Ganesh home"><img src="/assets/digital-ganesh-logo-2026.png" width="1254" height="1254" alt="Digital Ganesh"></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span class="sr-only">Toggle menu</span><span></span><span></span><span></span></button>
      <nav id="site-nav" aria-label="Main navigation"><a href="/about">About</a><a href="/services">Services</a><a href="/case-studies">Case Studies</a><a href="/resources">Resources</a><a href="/contact">Contact</a><a class="button button-small" href="/contact#book">${ctaText}</a></nav>
    </div></header>
    <main id="main">${body}</main>
    <footer class="site-footer"><div class="wrap footer-grid">
      <div><a class="brand brand-footer" href="/" aria-label="Digital Ganesh home"><img src="/assets/digital-ganesh-logo-2026.png" width="1254" height="1254" loading="lazy" alt="Digital Ganesh"></a><p>Practical AI and digital marketing for businesses ready to grow with clarity.</p><a class="button button-light" href="/contact#book">${ctaText}</a></div>
      <div><h2>Explore</h2><a href="/about">About Me</a><a href="/services">Services</a><a href="/case-studies">Case Studies</a><a href="/resources">Resources</a></div>
      <div><h2>Connect</h2><a href="mailto:${email}">${email}</a><a href="${whatsapp}" target="_blank" rel="noopener">WhatsApp: +977 9769208749</a><span>Kathmandu, Nepal</span></div>
      <div><h2>Legal</h2><a href="/privacy">Privacy</a><p class="small">© ${new Date().getFullYear()} Digital Ganesh.</p></div>
    </div></footer>
  </body></html>`;
}

function homePage() {
  const body = `
  <section class="hero hero-v2"><span class="hero-spark hero-spark-one" aria-hidden="true">✦</span><span class="hero-spark hero-spark-two" aria-hidden="true">✦</span><div class="wrap hero-grid hero-grid-v2">
    <div class="hero-copy hero-copy-v2 reveal"><p class="eyebrow"><span></span> Smarter growth. Less guesswork.</p><h1><span>Smarter marketing.</span><em>More customers.</em><span>Less guesswork.</span></h1><p class="lede">If your marketing feels busy but growth still feels stuck, I connect AI, strategy, and proven digital channels into one clear system that moves people from interest to action.</p><div class="button-row"><a class="button" href="/contact#book">${ctaText} ${icon("arrow")}</a><a class="button button-ghost" href="/services">Explore My Services</a></div><div class="hero-service-line" aria-label="Core services"><span>AI strategy</span><i></i><span>SEO</span><i></i><span>Paid ads</span><i></i><span>Automation</span></div></div>
    <div class="hero-portrait-stage reveal" data-tilt-card><div class="portrait-halo" aria-hidden="true"></div><div class="hero-photo-frame"><img src="/assets/ganesh-hero-retouched.webp" alt="Ganesh Adhikari, AI marketing freelancer, wearing a sky-blue shirt and black blazer" width="1254" height="1254" fetchpriority="high"></div><div class="hero-float hero-float-one">${icon("target")}<span><small>Attract</small>Better-fit leads</span></div><div class="hero-float hero-float-two">${icon("clock")}<span><small>Automate</small>Win back time</span></div><div class="hero-sticker">AI + human<br>judgment</div></div>
  </div><div class="client-fit-marquee"><p class="sr-only">Built for e-commerce brands, B2B SaaS teams, and local businesses.</p><div class="marquee-track" aria-hidden="true"><strong>E-commerce growth</strong><span>✦</span><strong>B2B SaaS demand</strong><span>✦</span><strong>Local business leads</strong><span>✦</span><strong>Smarter automation</strong><span>✦</span><strong>E-commerce growth</strong><span>✦</span><strong>B2B SaaS demand</strong><span>✦</span><strong>Local business leads</strong><span>✦</span><strong>Smarter automation</strong><span>✦</span></div></div></section>

  <section class="section-pad challenge-section"><div class="wrap split-head"><div><p class="eyebrow">Does this sound familiar?</p><h2>Your business is working hard. Is your marketing?</h2></div><p>When your ads, website, content, and follow-up do not work together, growth becomes expensive and unpredictable. I find what is blocking results and connect the pieces.</p></div><div class="wrap challenge-grid">
    ${[["pulse","Leads are inconsistent","Create a clearer path from first click to qualified inquiry."],["cursor","Visitors do not convert","Make your value and next step easy to understand."],["chart","Marketing feels wasteful","Focus time and budget on actions that support real goals."],["clock","Follow-up is too slow","Use smart automation to respond and nurture leads faster."],["spark","AI feels confusing","Choose only the AI tools that solve a useful business problem."]].map(([ic,h,p])=>`<article class="challenge-item reveal"><div class="card-icon">${icon(ic)}</div><h3>${h}</h3><p>${p}</p></article>`).join("")}
  </div></section>

  <section class="section-pad intro-section"><div class="wrap intro-grid"><div class="portrait-card reveal"><div class="portrait-placeholder portrait-photo"><img src="/assets/ganesh-about-retouched.webp" alt="Professional portrait of Ganesh Adhikari" width="1024" height="1536" loading="lazy"></div><div class="portrait-note">Based in Kathmandu<br>Working with businesses ready to grow</div></div><div class="intro-copy reveal"><p class="eyebrow">Your practical marketing partner</p><h2>AI should make marketing simpler—not colder or more complicated.</h2><p class="large">I’m Ganesh Adhikari, founder of Digital Ganesh. I help e-commerce brands, B2B SaaS startups, and local businesses turn attention into qualified leads and customers.</p><p>I combine human strategy with useful AI, SEO, paid ads, content, and automation. You get a system shaped around your customers and business goals—not a collection of trendy tools.</p><a class="text-link" href="/about">More about my approach ${icon("arrow")}</a></div></div></section>

  <section class="section-pad services-preview"><div class="wrap section-head"><div><p class="eyebrow">Ways I can help</p><h2>Solve the problem holding back your growth</h2></div><p>Start with your biggest challenge. I connect the right services into one focused path from visibility to lead, sale, and follow-up.</p></div><div class="wrap card-grid four">${serviceCards()}</div><div class="wrap center"><a class="button button-ghost" href="/services">Explore My Services</a></div></section>

  <section class="section-pad process-section"><div class="wrap section-head"><div><p class="eyebrow light">A simple working process</p><h2>From marketing problems to clear action</h2></div><p>No confusing reports or unnecessary tools—just a focused plan and steady improvement.</p></div><ol class="wrap process-grid">${[["01","Understand the problem","Review your offer, customers, goals, and current marketing."],["02","Choose the best opportunities","Focus on the changes most likely to improve leads, sales, or efficiency."],["03","Build the system","Connect campaigns, content, pages, and automation around one goal."],["04","Learn and improve","Use real customer and campaign data to guide the next step."]].map(([n,h,p])=>`<li class="reveal"><span>${n}</span><h3>${h}</h3><p>${p}</p></li>`).join("")}</ol></section>

  <section class="section-pad"><div class="wrap section-head"><div><p class="eyebrow">Strategy in context</p><h2>See how the pieces can work together</h2></div><a class="text-link" href="/case-studies">View Case Studies ${icon("arrow")}</a></div><div class="wrap case-grid">${caseCards(3)}</div><p class="wrap disclosure">These are clearly labeled illustrative examples. They demonstrate my approach and do not claim real client results.</p></section>

  <section class="section-pad consult-value"><div class="wrap consult-grid"><div><p class="eyebrow">Your free consultation</p><h2>Get a customized plan—not a generic sales pitch.</h2><p class="large">I’ll review what is holding your marketing back, identify the strongest opportunities, and create a clear digital marketing plan you can start using immediately.</p><a class="button" href="/contact#book">${ctaText} ${icon("arrow")}</a></div><div class="value-list">${[["search","A review of your current marketing"],["target","Your best growth opportunities"],["compass","A strategy built around your goals"],["check","Clear actions to take next"]].map(([ic,t])=>`<div>${icon(ic)}<span>${t}</span></div>`).join("")}</div></div></section>

  <section class="section-pad faq-section"><div class="wrap narrow"><div class="center section-title"><p class="eyebrow">Common questions</p><h2>Before we talk</h2></div>${faq([["Who do you work with?","I work with e-commerce brands, B2B SaaS startups, and local businesses. The best fit is a business ready to make focused improvements and participate in the process."],["Do I need a large marketing budget?","No fixed minimum is presented here. Recommendations depend on your goals, market, starting point, and available resources."],["Will AI replace the human side of my marketing?","No. I use AI to support research, production, analysis, and repeatable workflows while keeping human judgment central."],["Can you guarantee sales, rankings, or return on investment?","No. Ethical marketing cannot guarantee outcomes affected by customers, platforms, competition, implementation, and the wider market."],["What happens after the free consultation?","You receive practical next steps. If ongoing help is a good fit, I can prepare a custom proposal; there is no obligation to continue."]])}</div></section>
  ${consultationBand()}`;
  return layout({ title: "AI-Powered Digital Marketing", description: "Digital Ganesh helps businesses attract customers, generate qualified leads, improve conversions, and build practical AI-powered marketing systems.", pathName: "/", body });
}

function pageHero(kicker, title, copy, actions = true) {
  return `<section class="page-hero"><div class="wrap narrow-left reveal"><p class="eyebrow">${esc(kicker)}</p><h1>${title}</h1><p class="lede">${esc(copy)}</p>${actions ? `<div class="button-row"><a class="button" href="/contact#book">${ctaText} ${icon("arrow")}</a><a class="button button-ghost" href="/services">Explore My Services</a></div>` : ""}</div><div class="page-hero-grid" aria-hidden="true"></div></section>`;
}

function aboutPage() {
  const body = `${pageHero("About Digital Ganesh", "A practical partner for businesses tired of <em>random marketing.</em>", "I help e-commerce brands, B2B SaaS startups, and local businesses replace scattered tactics with a clear system for attracting, converting, and following up with customers.")}
  <section class="section-pad"><div class="wrap story-grid"><div class="portrait-card large reveal"><div class="portrait-placeholder portrait-photo portrait-photo-large"><img src="/assets/ganesh-about-retouched.webp" alt="Ganesh Adhikari, founder of Digital Ganesh" width="1024" height="1536"></div><div class="portrait-note">Ganesh Adhikari<br>Founder, Digital Ganesh</div></div><div class="story-copy biography-copy"><p class="eyebrow">About me</p><h2>Marketing should make growth clearer—not more confusing.</h2><p class="large"><strong>Hi, I’m Ganesh Adhikari.</strong> I’m a Kathmandu-based freelance digital marketer specializing in SEO, social media marketing, and data-backed growth strategies.</p><p>Since <strong>2012</strong>, I have helped businesses navigate the evolving digital landscape. As a marketing generalist, I don’t believe in guesswork or empty metrics. My approach is built around one clear objective: driving a <strong>measurable, positive return on investment</strong> and sustainable business growth.</p><div class="bio-specialties"><h3>What I do best</h3><ul><li><strong>SEO &amp; Visibility</strong><span>Optimize your digital footprint so your ideal customers can easily find you on Google.</span></li><li><strong>Social Media Marketing</strong><span>Build engaged online communities and campaigns that turn attention into revenue.</span></li><li><strong>Holistic Strategy</strong><span>Connect search, social media, and analytics into a seamless marketing funnel.</span></li></ul></div><p>With over a decade of local and remote market experience, I bridge the gap between creative storytelling and hard data. I handle the strategy, optimization, and execution so you can focus on scaling your operations.</p><p class="bio-closing">Ready to turn your digital marketing into a profit center?</p><a class="button" href="/contact#book">Let’s Work Together</a></div></div></section>
  <section class="section-pad values-section"><div class="wrap section-head"><div><p class="eyebrow light">How I can help</p><h2>Bring the right people in—and give them a reason to act.</h2></div><p>I connect paid campaigns and organic search to clear pages, useful content, and better follow-up.</p></div><div class="wrap two-card-grid"><article><span class="big-icon">${icon("target")}</span><h3>Paid customer acquisition</h3><p>Build focused campaigns across Facebook, Instagram, TikTok, YouTube, and other suitable channels to reach people who are more likely to buy or inquire.</p></article><article><span class="big-icon">${icon("search")}</span><h3>Organic search growth</h3><p>Improve your website and content so the right customers can find your business when they are actively searching for help.</p></article></div></section>
  <section class="section-pad"><div class="wrap split-head"><div><p class="eyebrow">How I work</p><h2>AI speeds up the work. Human judgment keeps it useful.</h2></div><p>Technology supports the strategy; it does not replace customer understanding, creativity, or responsible decisions.</p></div><div class="wrap principles-grid">${[["01","Goals before tools","Every recommendation starts with the business problem you need to solve."],["02","Simple explanations","You will know what we are doing, why it matters, and what happens next."],["03","Evidence over guesswork","Customer behavior and campaign data guide improvements."],["04","Human-first automation","Automation saves time while important decisions stay with people."]].map(([n,h,p])=>`<article class="reveal"><span>${n}</span><h3>${h}</h3><p>${p}</p></article>`).join("")}</div></section>
  <section class="section-pad who-section"><div class="wrap"><p class="eyebrow">Who I work with</p><h2>Different business models. One shared need: focused growth.</h2><div class="who-grid"><article><h3>E-commerce brands</h3><p>Connect acquisition, conversion, content, and retention around customer value.</p></article><article><h3>B2B SaaS startups</h3><p>Clarify complex offers and build a measurable path to qualified demand.</p></article><article><h3>Local businesses</h3><p>Improve local visibility, inquiries, and follow-up without adding unnecessary complexity.</p></article></div></div></section>
  ${consultationBand("Let’s turn your marketing into a clearer growth system.")}`;
  return layout({ title: "About Ganesh Adhikari", description: "Meet Ganesh Adhikari, a Kathmandu-based freelance digital marketer specializing in SEO, social media marketing, and data-backed growth strategy since 2012.", pathName: "/about", body, schema: { "@type": "Person", name: "Ganesh Adhikari", jobTitle: "Freelance Digital Marketer", worksFor: { "@type": "Organization", name: "Digital Ganesh" } } });
}

function servicesPage() {
  const body = `${pageHero("Services", "Fix what is stopping your marketing from <em>turning into growth.</em>", "Whether you need more visibility, better leads, stronger conversions, or faster follow-up, I build a focused AI-powered solution around your goals and budget.")}
  <section class="section-pad"><div class="wrap service-list">${services.map((s,i)=>`<article class="service-row reveal"><div class="service-number">0${i+1}</div><div><h2>${esc(s.short)}</h2><p>${esc(s.summary)}</p><p class="challenge"><strong>Addresses:</strong> ${esc(s.challenge)}</p></div><div><h3>Typical deliverables</h3><ul>${s.includes.slice(0,3).map(x=>`<li>${icon("check")}${esc(x)}</li>`).join("")}</ul><a class="text-link" href="/services/${s.slug}">View full service ${icon("arrow")}</a></div></article>`).join("")}</div></section>
  <section class="section-pad proposal-section"><div class="wrap split-head"><div><p class="eyebrow">Built for your business</p><h2>You do not need every service. You need the right next step.</h2></div><div><p>We begin with your biggest problem, current performance, budget, and capacity. After the free consultation, I can recommend a focused scope and custom proposal.</p><a class="button button-ghost" href="/contact#book">Request a Custom Proposal</a></div></div></section>${consultationBand("Get a clear plan for your biggest marketing challenge.")}`;
  return layout({ title: "AI-Powered Digital Marketing Services", description: "Explore AI strategy, SEO, paid advertising, social media, content, email, automation, and conversion optimization services.", pathName: "/services", body });
}

function servicePage(s) {
  const related = s.related.map(slug => services.find(x=>x.slug===slug)).filter(Boolean);
  const body = `${pageHero(s.short, `${esc(s.title).replace(/ (\w+)$/, " <em>$1</em>")}`, s.summary)}
  <section class="section-pad service-detail-intro"><div class="wrap split-head"><div><p class="eyebrow">Is this for you?</p><h2>${esc(s.suitable)}</h2></div><div><p class="large">${esc(s.challenge)}</p><a class="text-link" href="/contact#book">Talk through your situation ${icon("arrow")}</a></div></div></section>
  <section class="section-pad tint-section"><div class="wrap two-card-grid"><article><p class="eyebrow">Problems this helps solve</p><ul class="check-list">${s.problems.map(x=>`<li>${icon("check")} ${esc(x)}</li>`).join("")}</ul></article><article><p class="eyebrow">What is included</p><ul class="check-list">${s.includes.map(x=>`<li>${icon("check")} ${esc(x)}</li>`).join("")}</ul></article></div></section>
  <section class="section-pad"><div class="wrap section-head"><div><p class="eyebrow">What this can improve</p><h2>A clearer system for attracting and converting customers.</h2></div><p>Results depend on your market, offer, budget, and implementation. The work is designed to improve these practical areas without making unrealistic promises.</p></div><div class="wrap benefit-grid">${s.benefits.map((x,i)=>`<article class="reveal"><span>0${i+1}</span><h3>${esc(x)}</h3></article>`).join("")}</div></section>
  <section class="section-pad process-section"><div class="wrap section-head"><div><p class="eyebrow light">How it works</p><h2>Understand the problem. Build the solution. Improve what matters.</h2></div></div><ol class="wrap process-grid">${s.process.map((x,i)=>`<li class="reveal"><span>0${i+1}</span><h3>${esc(x)}</h3></li>`).join("")}</ol></section>
  <section class="section-pad"><div class="wrap narrow"><div class="section-title center"><p class="eyebrow">Service FAQs</p><h2>Useful answers before we begin</h2></div>${faq(s.faqs)}</div></section>
  <section class="section-pad related"><div class="wrap section-head"><div><p class="eyebrow">Related services</p><h2>Connect this service to the full customer journey</h2></div></div><div class="wrap card-grid three">${related.map((r,i)=>`<article class="service-card"><p class="eyebrow">0${i+1}</p><h3>${esc(r.short)}</h3><p>${esc(r.summary)}</p><a class="text-link" href="/services/${r.slug}">Explore service ${icon("arrow")}</a></article>`).join("")}</div></section>${consultationBand(`Find out if ${s.short.toLowerCase()} is the right next step for your business.`)}`;
  return layout({ title: s.short, description: s.summary, pathName: `/services/${s.slug}`, body });
}

function caseListingPage() {
  const body = `${pageHero("Case studies", "See the thinking behind a <em>connected growth strategy.</em>", "Real client data has not been supplied yet. The examples below are clearly labeled illustrations of how I would approach common marketing challenges.", false)}
  <section class="section-pad"><div class="wrap notice"><span>${icon("info")}</span><div><strong>Transparency note</strong><p>These are illustrative examples, not client claims. No invented identities, testimonials, or performance statistics are presented.</p></div></div><div class="wrap case-grid case-listing">${caseCards()}</div></section>${consultationBand("Your business deserves a strategy built from its real context.")}`;
  return layout({ title: "Case Studies", description: "Explore transparent illustrative examples of how Digital Ganesh approaches SEO, paid media, conversion, email, and AI marketing challenges.", pathName: "/case-studies", body });
}

function casePage(c) {
  const body = `${pageHero(c.label, esc(c.title), c.context, false)}
  <article class="section-pad case-detail"><div class="wrap article-layout"><aside><p class="eyebrow">Context</p><dl><dt>Industry</dt><dd>${esc(c.industry)}</dd><dt>Content type</dt><dd>${esc(c.label)}</dd><dt>Claims</dt><dd>No client or performance claims</dd></dl><a class="button button-ghost" href="/contact#book">${ctaText}</a></aside><div class="article-body"><div class="notice"><span>${icon("info")}</span><div><strong>Illustrative, not an actual result</strong><p>This page demonstrates a possible strategic approach. It does not describe a named client or completed engagement.</p></div></div><section><p class="eyebrow">The challenge</p><h2>A disconnected path to growth</h2><p>${esc(c.challenge)}</p></section><section><p class="eyebrow">Goals</p><h2>What the work would aim to improve</h2><ul class="check-list">${c.goals.map(x=>`<li>${icon("check")} ${esc(x)}</li>`).join("")}</ul></section><section><p class="eyebrow">Strategy and services</p><h2>A joined-up plan</h2><div class="tag-row">${c.strategy.map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div><p>${esc(c.implementation)}</p></section><section><p class="eyebrow">Measurement context</p><h2>Results would need evidence</h2><p>${esc(c.results)}</p></section><section><p class="eyebrow">Lesson</p><blockquote>${esc(c.lessons)}</blockquote></section></div></div></article>${consultationBand("Let’s build the real case for your next stage of growth.")}`;
  return layout({ title: c.title, description: c.context, pathName: `/case-studies/${c.slug}`, body });
}

function resourcesPage() {
  const categories = ["All", ...new Set(articles.map(a=>a.category))];
  const body = `${pageHero("Free resources", "Simple ideas to help you make <em>better marketing decisions.</em>", "Use these short guides to spot common problems, avoid wasted effort, and choose practical ways to improve your marketing.", false)}
  <section class="section-pad resources-section"><div class="wrap resource-tools"><label class="search-box">${icon("search")}<span class="sr-only">Search resources</span><input id="resource-search" type="search" placeholder="Search resources…" autocomplete="off"></label><div class="filter-group" role="group" aria-label="Filter by category">${categories.map((x,i)=>`<button type="button" class="filter-button ${i===0?"active":""}" data-category="${esc(x)}">${esc(x)}</button>`).join("")}</div></div><p id="resource-status" class="wrap resource-status" aria-live="polite"></p><div id="resource-grid" class="wrap resource-grid">${articles.map((a,i)=>`<article class="resource-card reveal" data-title="${esc(a.title.toLowerCase())}" data-description="${esc(a.description.toLowerCase())}" data-category="${esc(a.category)}"><span class="tag">${esc(a.category)}</span><h2>${esc(a.title)}</h2><p>${esc(a.description)}</p><div><span>${esc(a.readTime)}</span><a class="text-link" href="/resources/${a.slug}">Read article ${icon("arrow")}</a></div></article>`).join("")}</div><div id="resource-empty" class="wrap empty-state" hidden><h2>No matching resources</h2><p>Try a broader search or choose another category.</p></div></section>${consultationBand("Need a plan built around your business—not generic advice?")}`;
  return layout({ title: "Marketing Resources", description: "Browse practical original guides about AI marketing, SEO, social media, paid advertising, email, and business growth.", pathName: "/resources", body });
}

function articlePage(a) {
  const body = `<article><header class="article-hero"><div class="wrap narrow"><span class="tag">${esc(a.category)}</span><h1>${esc(a.title)}</h1><p class="lede">${esc(a.description)}</p><div class="article-meta"><span>By Ganesh Adhikari</span><span>${esc(a.readTime)}</span></div></div></header><div class="section-pad"><div class="wrap article-layout"><aside class="article-aside"><p class="eyebrow">In this guide</p><ol>${a.sections.map(([h])=>`<li><a href="#${h.toLowerCase().replace(/[^a-z0-9]+/g,"-")}">${esc(h)}</a></li>`).join("")}</ol><a class="button button-ghost" href="/resources">Browse Free Resources</a></aside><div class="article-body"><p class="article-intro">${esc(a.intro)}</p>${a.sections.map(([h,p])=>`<section id="${h.toLowerCase().replace(/[^a-z0-9]+/g,"-")}"><h2>${esc(h)}</h2><p>${esc(p)}</p></section>`).join("")}<div class="article-cta"><h2>Turn this idea into a plan for your business</h2><p>Book a free consultation and I’ll help you identify the best opportunities and the right next steps.</p><a class="button" href="/contact#book">${ctaText}</a></div></div></div></div></article>`;
  return layout({ title: a.title, description: a.description, pathName: `/resources/${a.slug}`, body, schema: { "@type": "Article", headline: a.title, author: { "@type": "Person", name: "Ganesh Adhikari" } } });
}

function contactPage() {
  const options = services.map(s=>`<option value="${esc(s.short)}">${esc(s.short)}</option>`).join("");
  const body = `${pageHero("Contact", "Turn your biggest marketing problem into a <em>clear action plan.</em>", "Tell me where leads, sales, or marketing efficiency feel stuck. I’ll review your situation and help you choose the most useful next steps.", false)}
  <section id="book" class="section-pad booking-section"><div class="wrap booking-grid"><div class="booking-copy"><p class="eyebrow">Book your free consultation</p><h2>Get a customized digital marketing plan—free.</h2><p class="large">I’ll review your business, current marketing, and main challenge. Then I’ll identify practical growth opportunities and give you a focused plan you can start using right away.</p><ol class="booking-steps"><li><span>1</span><div><strong>Tell me what feels stuck</strong><p>Share your goal, website, and biggest marketing challenge.</p></div></li><li><span>2</span><div><strong>I review your situation</strong><p>I look for gaps in visibility, conversion, follow-up, and efficiency.</p></div></li><li><span>3</span><div><strong>You get clear next steps</strong><p>We discuss the strongest opportunities and a practical way forward.</p></div></li></ol><div class="direct-contact"><h3>Prefer a direct conversation?</h3><a href="${whatsapp}" class="button button-whatsapp" target="_blank" rel="noopener">Message on WhatsApp ${icon("arrow")}</a><a href="mailto:${email}">${email}</a><span>Kathmandu, Nepal</span></div></div>
  <div class="form-card"><form id="consultation-form" action="https://formsubmit.co/ajax/${email}" method="post" novalidate><div class="form-heading"><p class="eyebrow">Consultation request</p><h2>Tell me about your goals</h2><p>Required fields are marked with an asterisk.</p></div><div id="form-status" class="form-status" role="status" aria-live="polite" tabindex="-1"></div><input type="hidden" name="_subject" value="New consultation request — Digital Ganesh"><input type="hidden" name="_template" value="table"><div class="field-row"><label>Full name *<input name="name" type="text" autocomplete="name" required minlength="2" maxlength="100"><span class="field-error"></span></label><label>Email address *<input name="email" type="email" autocomplete="email" required maxlength="200"><span class="field-error"></span></label></div><label>Company name *<input name="company" type="text" autocomplete="organization" required minlength="2" maxlength="150"><span class="field-error"></span></label><label>Website URL <span class="optional">Optional</span><input name="website" type="url" inputmode="url" placeholder="https://"><span class="field-error"></span></label><label>Service of interest *<select name="service" required><option value="">Select a service</option>${options}<option>Not sure yet</option></select><span class="field-error"></span></label><label>Main business challenge *<textarea name="challenge" rows="4" required minlength="20" maxlength="2000" placeholder="What is the main marketing or growth challenge you want to solve?"></textarea><span class="field-error"></span></label><label>Marketing budget range <span class="optional">Optional</span><select name="budget"><option value="">Prefer not to say</option><option>Under $500 / month</option><option>$500–$1,500 / month</option><option>$1,500–$5,000 / month</option><option>$5,000+ / month</option><option>Not sure yet</option></select></label><label>Additional message <span class="optional">Optional</span><textarea name="message" rows="3" maxlength="3000"></textarea></label><label class="honeypot" aria-hidden="true">Leave this field empty<input name="_honey" tabindex="-1" autocomplete="off"></label><button class="button form-submit" type="submit"><span>${ctaText}</span><span class="spinner" aria-hidden="true"></span></button><p class="form-privacy">By submitting, you agree that Digital Ganesh may use these details to respond to your request. See the <a href="/privacy">privacy notice</a>.</p></form></div></div></section>`;
  return layout({ title: "Get Your Free Customized Marketing Plan", description: "Book a free consultation with Ganesh Adhikari and get a practical digital marketing plan built around your business goals and challenges.", pathName: "/contact", body });
}

function privacyPage() {
  const body = `${pageHero("Privacy", "A plain-language privacy notice.", "This page describes the information this website currently collects and how it is used. Business-specific legal details should be reviewed before publication.", false)}<article class="section-pad legal"><div class="wrap narrow"><div class="placeholder-note"><strong>Review before launch</strong><p>This operational privacy notice is not legal advice. Confirm the business identity, retention period, hosting provider, and any legally required regional disclosures before publication.</p></div><h2>Information collected</h2><p>The consultation form collects your name, email address, company name, service interest, and main business challenge. You may optionally provide a website URL, marketing budget range, and additional message. Basic technical logs may be created by the hosting provider when you visit the site.</p><h2>How information is used</h2><p>Submitted information is used only to review and respond to consultation requests, prevent spam, and maintain the security of the website. It is not presented as being sold or used for unrelated email marketing.</p><h2>How submissions are handled</h2><p>Consultation requests are processed by FormSubmit and delivered to the Digital Ganesh email inbox. FormSubmit may temporarily retain submissions according to its own service terms and privacy practices.</p><h2>WhatsApp and email</h2><p>If you contact Digital Ganesh through WhatsApp or email, those providers process your information under their own privacy terms. Use those channels only if you are comfortable with their practices.</p><h2>Retention and your choices</h2><p>Keep consultation data only as long as needed to respond and maintain appropriate business records. To request access, correction, or deletion, email <a href="mailto:${email}">${email}</a>. A specific retention period should be confirmed before launch.</p><h2>Cookies and analytics</h2><p>This website does not currently include advertising pixels, analytics, or a newsletter integration. If these are added later, this notice and any required consent controls must be updated.</p><h2>Contact</h2><p>Digital Ganesh<br>Ganesh Adhikari<br>Kathmandu, Nepal<br><a href="mailto:${email}">${email}</a></p><p class="small">Last updated: October 7, 2026</p></div></article>`;
  return layout({ title: "Privacy Notice", description: "Learn what information the Digital Ganesh website collects and how consultation requests are handled.", pathName: "/privacy", body });
}

function notFoundPage() {
  const body = `<section class="not-found"><div class="wrap narrow center"><span class="error-code">404</span><p class="eyebrow">Page not found</p><h1>This path doesn’t lead anywhere yet.</h1><p class="lede">The page may have moved, or the link may be incomplete. Try the homepage or explore the services.</p><div class="button-row center"><a class="button" href="/">Back to home</a><a class="button button-ghost" href="/services">Explore My Services</a></div></div></section>`;
  return layout({ title: "Page Not Found", description: "The page you requested could not be found.", pathName: "/404", body });
}

function serveStatic(reqPath, res) {
  const safePath = path.normalize(reqPath).replace(/^(\.\.[/\\])+/, "");
  const file = path.join(PUBLIC, safePath);
  if (!file.startsWith(PUBLIC) || !fs.existsSync(file) || !fs.statSync(file).isFile()) return false;
  const ext = path.extname(file).toLowerCase();
  const types = { ".css":"text/css; charset=utf-8", ".js":"text/javascript; charset=utf-8", ".svg":"image/svg+xml", ".png":"image/png", ".jpg":"image/jpeg", ".webp":"image/webp", ".woff2":"font/woff2" };
  res.writeHead(200, { "content-type":types[ext] || "application/octet-stream", "cache-control":ext === ".css" || ext === ".js" ? "public, max-age=300" : "public, max-age=86400", "x-content-type-options":"nosniff" });
  fs.createReadStream(file).pipe(res); return true;
}

function route(pathname) {
  if (pathname === "/") return [200, homePage()];
  if (pathname === "/about") return [200, aboutPage()];
  if (pathname === "/services") return [200, servicesPage()];
  if (pathname === "/case-studies") return [200, caseListingPage()];
  if (pathname === "/resources") return [200, resourcesPage()];
  if (pathname === "/contact") return [200, contactPage()];
  if (pathname === "/privacy") return [200, privacyPage()];
  const sm = pathname.match(/^\/services\/([^/]+)$/); if (sm) { const s=services.find(x=>x.slug===sm[1]); if(s) return [200,servicePage(s)]; }
  const cm = pathname.match(/^\/case-studies\/([^/]+)$/); if (cm) { const c=caseStudies.find(x=>x.slug===cm[1]); if(c) return [200,casePage(c)]; }
  const am = pathname.match(/^\/resources\/([^/]+)$/); if (am) { const a=articles.find(x=>x.slug===am[1]); if(a) return [200,articlePage(a)]; }
  return [404, notFoundPage()];
}

async function handler(req,res) {
  const parsed = new URL(req.url, SITE_URL); const pathname = parsed.pathname !== "/" ? parsed.pathname.replace(/\/$/,"") : "/";
  res.setHeader("x-frame-options","SAMEORIGIN"); res.setHeader("referrer-policy","strict-origin-when-cross-origin"); res.setHeader("permissions-policy","camera=(), microphone=(), geolocation=()");
  if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405,{allow:"GET, HEAD"}); return res.end("Method not allowed"); }
  if (pathname === "/robots.txt") { res.writeHead(200,{"content-type":"text/plain; charset=utf-8"}); return res.end(`User-agent: *\nAllow: /\nSitemap: ${url("/sitemap.xml")}\n`); }
  if (pathname === "/sitemap.xml") { const paths=["/","/about","/services","/case-studies","/contact","/resources","/privacy",...services.map(s=>`/services/${s.slug}`),...caseStudies.map(c=>`/case-studies/${c.slug}`),...articles.map(a=>`/resources/${a.slug}`)]; res.writeHead(200,{"content-type":"application/xml; charset=utf-8"}); return res.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${esc(url(p))}</loc></url>`).join("")}</urlset>`); }
  if (pathname.startsWith("/assets/") || pathname === "/styles.css" || pathname === "/app.js") { if (serveStatic(pathname.slice(1),res)) return; }
  const [status,html]=route(pathname); res.writeHead(status,{"content-type":"text/html; charset=utf-8","cache-control":"no-cache","x-content-type-options":"nosniff"}); if(req.method==="HEAD") return res.end(); res.end(html);
}

const server = http.createServer(handler);

if (require.main === module) server.listen(PORT,"127.0.0.1",()=>console.log(`Digital Ganesh running at ${SITE_URL}`));
module.exports = { handler, server, route };
