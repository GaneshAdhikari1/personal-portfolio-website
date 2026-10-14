const assert = require("node:assert/strict");
const { server, route } = require("../server");
const { services } = require("../src/content");
const { blogArticles } = require("../src/blog/data");

const expected = [
  "/", "/about", "/services", "/blog", "/contact", "/privacy",
  ...services.map((item) => `/services/${item.slug}`),
  ...blogArticles.map((item) => `/blog/${item.slug}`),
];

for (const pathname of expected) {
  const [status, html] = route(pathname);
  assert.equal(status, 200, `${pathname} should render`);
  assert.match(html, /<title>.+\| Digital Ganesh<\/title>/, `${pathname} needs a title`);
  assert.match(html, /<meta name="description" content="[^"]+">/, `${pathname} needs a description`);
  assert.match(html, /href="\/contact#book"/, `${pathname} needs a consultation CTA`);
  assert.doesNotMatch(html, /href="(?:#|undefined|)"/, `${pathname} has an empty link`);
  assert.match(html, /href="\/"(?: aria-current="page")?>Home<\/a>/, `${pathname} needs Home navigation`);
  assert.match(html, /href="\/blog"(?: aria-current="page")?>Blog<\/a>/, `${pathname} needs Blog navigation`);
  assert.match(html, /class="live-clock"/, `${pathname} needs the shared clock`);
  assert.match(html, /data-live-time/, `${pathname} needs the live time display`);
  assert.match(html, /data-live-date/, `${pathname} needs the live date display`);
}

assert.equal(route("/missing-page")[0], 404);
assert.equal(route("/case-studies")[0], 404, "old Case Studies should no longer render");
const [, homeHtml] = route("/");
assert.match(homeHtml, /<section id="home" class="hero hero-v2"/);
assert.match(homeHtml, /href="\/" aria-current="page">Home<\/a>/);
assert.match(homeHtml, /Get more customers\./);
assert.match(homeHtml, /Book a Strategy Call/);
const [, blogHtml] = route("/blog");
assert.match(blogHtml, /Featured article/);
assert.match(blogHtml, /Recent articles/);
assert.match(blogHtml, /newsletter-email-sidebar/);
assert.match(blogHtml, /name="consent"/);
assert.match(blogHtml, /\/assets\/blog\/practical-digital-marketing-plan.webp/);
assert.match(blogHtml, /\/blog\/social-content-pillars/);
const [, articleHtml] = route("/blog/practical-digital-marketing-plan");
assert.match(articleHtml, /datePublished/);
assert.match(articleHtml, /In this article/);
assert.match(articleHtml, /<meta property="og:type" content="article">/);

const [, contactHtml] = route("/contact");
assert.match(contactHtml, /action="https:\/\/formsubmit\.co\/aimarketingwithganesh@gmail\.com"/);
assert.match(contactHtml, /data-ajax-action="https:\/\/formsubmit\.co\/ajax\/aimarketingwithganesh@gmail\.com"/);
assert.match(contactHtml, /name="_url" value="https:\/\/ganeshadhikari1\.com\.np\/contact"/);
assert.match(contactHtml, /name="_next" value="https:\/\/ganeshadhikari1\.com\.np\/"/);
assert.match(contactHtml, /name="_honey"/);
const [, privacyHtml] = route("/privacy");
assert.match(privacyHtml, /newsletter signup requests/);

server.listen(0, "127.0.0.1", async () => {
  try {
    const port = server.address().port;
    const base = `http://127.0.0.1:${port}`;
    for (const pathname of ["/", "/about", "/services/seo", "/blog", "/blog/practical-digital-marketing-plan", "/contact", "/sitemap.xml", "/robots.txt", "/styles.css", "/app.js", "/blog.css", "/blog.js", "/assets/blog/practical-digital-marketing-plan.webp"]) {
      const response = await fetch(`${base}${pathname}`);
      assert.ok(response.ok, `${pathname} returned ${response.status}`);
    }
    for (const [oldPath, destination] of [["/case-studies", "/blog"], ["/resources", "/blog"], ["/resources/practical-digital-marketing-plan", "/blog/practical-digital-marketing-plan"]]) {
      const response = await fetch(`${base}${oldPath}`, { redirect: "manual" });
      assert.equal(response.status, 301, `${oldPath} should redirect`);
      assert.equal(response.headers.get("location"), destination);
    }
    const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
    assert.match(sitemap, /\/blog\/practical-digital-marketing-plan/);
    assert.doesNotMatch(sitemap, /\/case-studies|\/resources/);
    console.log(`Checks passed: ${expected.length} pages, Blog metadata and assets, newsletter, redirects, sitemap, and forms.`);
  } finally { server.close(); }
});
