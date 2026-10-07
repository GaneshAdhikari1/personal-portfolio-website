const assert = require("node:assert/strict");
const { server, route } = require("../server");
const { services, articles, caseStudies } = require("../src/content");

const expected = [
  "/", "/about", "/services", "/case-studies", "/contact", "/resources", "/privacy",
  ...services.map((x) => `/services/${x.slug}`),
  ...articles.map((x) => `/resources/${x.slug}`),
  ...caseStudies.map((x) => `/case-studies/${x.slug}`),
];

for (const pathname of expected) {
  const [status, html] = route(pathname);
  assert.equal(status, 200, `${pathname} should render`);
  assert.match(html, /<title>.+\| Digital Ganesh<\/title>/, `${pathname} needs a title`);
  assert.match(html, /<meta name="description" content="[^"]+">/, `${pathname} needs a description`);
  assert.match(html, /href="\/contact#book"/, `${pathname} needs a consultation CTA`);
  assert.doesNotMatch(html, /href="(?:#|undefined|)"/, `${pathname} has an empty link`);
}

assert.equal(route("/missing-page")[0], 404);
const [, contactHtml] = route("/contact");
assert.match(contactHtml, /action="https:\/\/formsubmit\.co\/ajax\/aimarketingwithganesh@gmail\.com"/);
assert.match(contactHtml, /name="_subject"/);
assert.match(contactHtml, /name="_template" value="table"/);
assert.match(contactHtml, /name="_honey"/);

server.listen(0, "127.0.0.1", async () => {
  try {
    const port = server.address().port;
    for (const pathname of ["/", "/about", "/services/seo", "/resources", "/contact", "/sitemap.xml", "/robots.txt", "/styles.css", "/app.js"]) {
      const response = await fetch(`http://127.0.0.1:${port}${pathname}`);
      assert.ok(response.ok, `${pathname} returned ${response.status}`);
    }
    console.log(`Checks passed: ${expected.length} pages, core assets, metadata, links, sitemap, robots, and FormSubmit configuration.`);
  } finally { server.close(); }
});
