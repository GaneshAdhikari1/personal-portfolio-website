const { articles } = require("../content");

const excerpts = {
  "practical-digital-marketing-plan": "A useful marketing plan does not need to be long. Learn how to connect your audience, channels, weekly actions, and measurement into one clear direction.",
  "best-ai-marketing-opportunities": "The best AI opportunity is usually a real bottleneck, not a shiny tool. This guide helps you prioritize useful, low-risk applications and run a measurable pilot.",
  "why-websites-do-not-generate-leads": "More traffic will not fix a confusing website. Diagnose the message, trust, audience fit, and friction that prevent interested visitors from getting in touch.",
  "paid-ad-testing-basics": "Good ad tests answer one useful question at a time. Learn how to structure a small campaign test and judge quality beyond cheap clicks.",
  "email-welcome-sequence": "Your first emails should deliver value and make the next step feel natural. Here is a simple welcome journey that builds relevance and trust.",
  "social-content-pillars": "Content pillars work best when they answer real customer questions. Build a repeatable system that supports decisions and sales, not just a posting schedule.",
};

const orderedSlugs = [
  "practical-digital-marketing-plan",
  "best-ai-marketing-opportunities",
  "why-websites-do-not-generate-leads",
  "paid-ad-testing-basics",
  "email-welcome-sequence",
  "social-content-pillars",
];

const blogArticles = orderedSlugs.map((slug) => {
  const article = articles.find((item) => item.slug === slug);
  return {
    ...article,
    excerpt: excerpts[slug],
    cover: `/assets/blog/${slug}.webp`,
    publishedAt: "2026-10-14",
    publishedLabel: "October 14, 2026",
  };
});

module.exports = { blogArticles };
