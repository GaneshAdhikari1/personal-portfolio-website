var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/content.js
var require_content = __commonJS({
  "src/content.js"(exports2, module2) {
    var services = [
      {
        slug: "ai-marketing-strategy",
        short: "AI Marketing Strategy",
        title: "Stop Guessing. Build a Clear AI Marketing Plan",
        summary: "Not sure where AI fits? I identify the best opportunities and turn them into a simple plan built around your goals, team, and budget.",
        challenge: "Too many tools, scattered tactics, and no clear plan for turning AI into business growth.",
        suitable: "Business owners and marketing teams who want practical AI guidance without wasting time on tools they do not need.",
        problems: ["Unclear priorities", "Disconnected campaigns", "Manual marketing work", "Difficulty choosing where AI adds value"],
        includes: ["Business and marketing audit", "Customer journey review", "Priority opportunity map", "90-day action plan", "Measurement framework"],
        benefits: ["A clearer marketing direction", "Better use of time and budget", "Practical automation opportunities", "Decisions tied to business goals"],
        process: ["Clarify goals and constraints", "Audit the current journey and data", "Prioritize high-value opportunities", "Build an implementation roadmap"],
        faqs: [
          ["Do I need to be using AI already?", "No. We start with your business needs, then select only the tools and workflows that genuinely help."],
          ["Will the strategy work with my current team?", "Yes. Recommendations are shaped around your capacity, skills, budget, and existing systems."],
          ["Is implementation included?", "Implementation can be scoped as a separate engagement after the strategy is agreed."]
        ],
        related: ["ai-automation", "content-marketing", "conversion-optimization"]
      },
      {
        slug: "seo",
        short: "Search Engine Optimization",
        title: "Get Found When Your Customers Are Ready to Buy",
        summary: "If the right customers cannot find you on Google, I improve your website, keywords, and content so your business can earn more relevant search traffic.",
        challenge: "Your website may look good but remain invisible for the searches that could bring valuable customers.",
        suitable: "E-commerce brands, B2B SaaS teams, and local businesses that want steady visibility without relying only on paid ads.",
        problems: ["Low search visibility", "Traffic that does not convert", "Technical SEO issues", "Content without a keyword strategy"],
        includes: ["Technical and on-page audit", "Keyword and intent research", "Site structure recommendations", "Content opportunity plan", "Local SEO guidance when relevant"],
        benefits: ["More relevant organic discovery", "A stronger website foundation", "Content aligned with customer questions", "Clearer measurement of search performance"],
        process: ["Benchmark current performance", "Fix critical technical barriers", "Map search intent to pages", "Publish, measure, and refine"],
        faqs: [
          ["How long does SEO take?", "SEO is a long-term channel. Timing varies with competition, site condition, content, and implementation speed, so no ranking timeline is guaranteed."],
          ["Do you guarantee rankings?", "No. Search platforms change continuously. The work focuses on sound practices, useful content, and measurable improvement."],
          ["Can you help with local SEO?", "Yes. Local intent, service pages, business information, and review workflows can be included when relevant."]
        ],
        related: ["content-marketing", "conversion-optimization", "ai-marketing-strategy"]
      },
      {
        slug: "paid-advertising",
        short: "Paid Advertising & Lead Generation",
        title: "Turn Ad Spend into Better Leads and Sales Opportunities",
        summary: "If your ads attract clicks but few customers, I connect targeting, creative, landing pages, and follow-up into one focused campaign system.",
        challenge: "Ad spend gets wasted when the message, audience, landing page, and follow-up do not work together.",
        suitable: "Businesses ready to test or improve paid customer acquisition with a clear offer and a realistic advertising budget.",
        problems: ["Rising acquisition costs", "Low-quality leads", "Weak campaign structure", "Poor tracking and unclear attribution"],
        includes: ["Channel and offer strategy", "Audience and campaign setup", "Creative direction", "Landing-page recommendations", "Tracking and optimization plan"],
        benefits: ["More disciplined media spending", "Better alignment between ads and offers", "Stronger lead quality signals", "Faster learning from campaign data"],
        process: ["Validate the offer and economics", "Build campaigns and tracking", "Launch controlled tests", "Optimize from reliable signals"],
        faqs: [
          ["Which ad platforms do you work with?", "Depending on your audience, the plan may include Facebook, Instagram, TikTok, YouTube, or search-based channels."],
          ["Is ad spend included?", "No. Platform media spend is paid directly by you and is separate from service fees."],
          ["Can you promise a specific return?", "No. Results depend on the market, offer, budget, website, sales process, and many external factors."]
        ],
        related: ["conversion-optimization", "social-media-marketing", "email-marketing"]
      },
      {
        slug: "social-media-marketing",
        short: "Social Media Marketing",
        title: "Stop Posting Without a Purpose",
        summary: "I build a focused social media plan that reaches the right audience, explains your value, and guides interested people toward your business.",
        challenge: "Constant posting takes time, but without a clear message and next step it rarely supports leads or sales.",
        suitable: "Brands that need a practical content system for Facebook, Instagram, TikTok, YouTube, or selected professional platforms.",
        problems: ["Inconsistent publishing", "Low engagement from the right audience", "Unclear brand message", "Content disconnected from sales goals"],
        includes: ["Channel and audience strategy", "Content pillars", "Editorial calendar", "Creative briefs", "Performance review and iteration"],
        benefits: ["A more coherent brand presence", "Content built around customer needs", "More efficient production", "Stronger support for campaigns and sales"],
        process: ["Choose the right channels", "Define messages and content pillars", "Create a repeatable calendar", "Review signals and improve"],
        faqs: [
          ["Do I need to be on every platform?", "No. Focus is usually more effective. We prioritize platforms where your audience and business model fit."],
          ["Do you create all content?", "Content planning and production support can be scoped to your needs, internal capabilities, and brand assets."],
          ["How is success measured?", "Metrics are selected by objective\u2014such as qualified visits, leads, saves, watch time, or assisted conversions\u2014not vanity numbers alone."]
        ],
        related: ["content-marketing", "paid-advertising", "ai-marketing-strategy"]
      },
      {
        slug: "content-marketing",
        short: "Content Marketing & AI-Assisted Content",
        title: "Create Content That Builds Trust and Supports Sales",
        summary: "I use AI to speed up research and first drafts, then apply human judgment so every article, page, or post remains useful, accurate, and on-brand.",
        challenge: "Content takes too long to create, sounds generic, or attracts attention without helping customers make a decision.",
        suitable: "Teams that need useful articles, campaigns, landing pages, or social content without lowering quality.",
        problems: ["Slow content production", "Generic AI copy", "Weak topic selection", "Content that attracts attention but not buyers"],
        includes: ["Audience and topic research", "Content strategy and briefs", "AI-assisted workflow design", "Editing and quality review", "Distribution recommendations"],
        benefits: ["More consistent publishing", "Clearer, more useful communication", "Better reuse across channels", "A workflow your team can sustain"],
        process: ["Map audience questions", "Prioritize topics by business value", "Draft with the right mix of AI and expertise", "Edit, distribute, and learn"],
        faqs: [
          ["Will the content sound AI-generated?", "It should not. AI is used as an assistant; final content is shaped by your expertise, audience, voice, and human review."],
          ["Can you work with subject-matter experts?", "Yes. Interviews and expert input are often the strongest source of differentiated content."],
          ["Do you publish the content?", "Publishing can be included when access and scope are agreed."]
        ],
        related: ["seo", "social-media-marketing", "email-marketing"]
      },
      {
        slug: "email-marketing",
        short: "Email Marketing & Automation",
        title: "Follow Up Automatically\u2014Without Sounding Robotic",
        summary: "I create useful email journeys that respond at the right time, educate potential customers, and keep your business remembered.",
        challenge: "Good leads go cold when follow-up is late, inconsistent, generic, or dependent on busy team members.",
        suitable: "Businesses with leads, subscribers, or customers who need more timely and consistent communication.",
        problems: ["Leads going cold", "One-off broadcasts", "Low engagement", "Manual follow-up that drains team time"],
        includes: ["Audience and lifecycle mapping", "Sequence strategy", "Campaign copy and structure", "Automation logic", "Testing and reporting plan"],
        benefits: ["More consistent follow-up", "Messages matched to customer stage", "Less repetitive manual work", "Better visibility into audience response"],
        process: ["Map the customer lifecycle", "Define segments and triggers", "Build messages and automations", "Test delivery and improve"],
        faqs: [
          ["Can you work with my current email platform?", "Usually, yes. The best setup depends on your platform, list quality, data, and required automations."],
          ["Do you help with list building?", "Yes. Ethical opt-in paths and lead magnets can be included, without buying or scraping contact lists."],
          ["How many emails are needed?", "That depends on the customer journey. The goal is useful, timely communication\u2014not volume for its own sake."]
        ],
        related: ["ai-automation", "content-marketing", "conversion-optimization"]
      },
      {
        slug: "ai-automation",
        short: "AI Chatbots & Marketing Automation",
        title: "Save Time, Respond Faster, and Keep Leads Moving",
        summary: "I build practical chatbots and automations that handle repetitive steps, organize inquiries, and bring in a person when human help is needed.",
        challenge: "Slow replies and repetitive manual tasks cost your team time and allow valuable leads to slip away.",
        suitable: "Businesses with repeat customer questions, slow lead handling, or marketing tasks that take too much manual work.",
        problems: ["Slow inquiry response", "Repetitive admin", "Leads falling between systems", "Automation that feels impersonal or unreliable"],
        includes: ["Workflow discovery", "Conversation and escalation design", "Tool selection", "Automation build plan", "Testing and monitoring guidance"],
        benefits: ["Faster response for routine needs", "More consistent lead handling", "Time returned to the team", "Clear human handoff points"],
        process: ["Choose a safe, valuable workflow", "Map decisions and exceptions", "Build and test with real scenarios", "Launch gradually and monitor"],
        faqs: [
          ["Will a chatbot replace my team?", "The goal is to handle repetitive steps and route conversations, while keeping humans available for nuance and important decisions."],
          ["What can be automated?", "Common opportunities include inquiry qualification, follow-up reminders, content workflows, reporting, and data handoffs."],
          ["How do you prevent mistakes?", "Workflows use limited scopes, validation, testing, fallback paths, and human review where the risk requires it."]
        ],
        related: ["email-marketing", "ai-marketing-strategy", "conversion-optimization"]
      },
      {
        slug: "conversion-optimization",
        short: "Website & Conversion Optimization",
        title: "Turn More Website Visitors into Leads and Customers",
        summary: "If people visit but do not act, I improve your message, pages, forms, and customer journey so the next step feels clear and easy.",
        challenge: "More traffic will not help if your website confuses visitors, hides your value, or makes it difficult to contact or buy from you.",
        suitable: "Businesses getting website traffic but too few inquiries, purchases, bookings, or other valuable actions.",
        problems: ["Low inquiry or checkout rates", "Unclear positioning", "Friction on mobile", "Missing or unreliable conversion tracking"],
        includes: ["Conversion and usability review", "Message hierarchy recommendations", "Journey and form improvements", "Test hypotheses", "Measurement plan"],
        benefits: ["Clearer customer journeys", "Less friction around key actions", "More useful data", "A stronger return from existing traffic"],
        process: ["Define valuable actions", "Find friction using evidence", "Prioritize changes", "Test, measure, and iterate"],
        faqs: [
          ["Do I need a full website redesign?", "Often, no. Focused improvements to messaging, structure, forms, or key pages may be the better first step."],
          ["What is a good conversion rate?", "There is no universal benchmark. Context, traffic quality, price, audience, and the action requested all matter."],
          ["Can you implement the changes?", "Implementation can be included or coordinated with your existing designer or developer."]
        ],
        related: ["paid-advertising", "seo", "ai-automation"]
      }
    ];
    var articles = [
      {
        slug: "best-ai-marketing-opportunities",
        category: "AI Marketing",
        title: "How to Identify the Best AI Marketing Opportunities for Your Business",
        description: "A grounded way to find high-value AI use cases before choosing tools.",
        readTime: "7 min read",
        intro: "The best AI opportunity is rarely the flashiest one. It is usually a repeated, measurable task where faster work or better decisions genuinely improve the customer experience.",
        sections: [
          ["Start with friction, not software", "List the recurring marketing tasks that consume time, delay customer response, or create inconsistent work. Examples include turning interviews into content briefs, routing inquiries, summarizing campaign data, or drafting first-pass variations. Keep the list tied to a real bottleneck."],
          ["Score each opportunity", "Rate each idea by potential business value, frequency, data readiness, implementation effort, and the cost of an error. A high-frequency, low-risk task with clear inputs is often a stronger starting point than a customer-facing system with no review process."],
          ["Keep human judgment in the workflow", "Decide where a person must review, approve, or handle exceptions. Brand claims, sensitive customer conversations, strategic choices, and factual content should not be delegated blindly."],
          ["Run one measurable pilot", "Choose a narrow workflow, document the current baseline, and test for a fixed period. Measure time saved, output quality, response speed, or another relevant signal. Expand only after the process is reliable."]
        ]
      },
      {
        slug: "practical-digital-marketing-plan",
        category: "Business Growth",
        title: "How to Build a Practical Digital Marketing Plan",
        description: "Connect customer needs, channel choices, weekly actions, and measurement in one usable plan.",
        readTime: "8 min read",
        intro: "A useful marketing plan is not a long document. It is a set of clear choices about who you want to reach, what you will offer, how you will reach them, and what evidence will guide the next decision.",
        sections: [
          ["Define one primary business outcome", "Choose the commercial outcome marketing needs to support over the next quarter: qualified consultations, purchases, trials, repeat orders, or another meaningful action. This prevents every channel from pursuing a different goal."],
          ["Clarify the audience and buying situation", "Describe the people you can help best, the trigger that makes them look for a solution, their questions, their risks, and what a confident decision requires. Use customer conversations and sales notes rather than assumptions alone."],
          ["Build the path from attention to action", "Map the few steps a prospect should take\u2014from discovering a useful idea to reviewing your offer and starting a conversation. Give each channel a role instead of expecting every post or ad to close the sale immediately."],
          ["Create a 90-day operating rhythm", "Assign weekly actions, owners, budget, and a short scorecard. Review leading signals regularly and business outcomes monthly. Stop weak activity, strengthen what is working, and record what you learn."]
        ]
      },
      {
        slug: "why-websites-do-not-generate-leads",
        category: "SEO",
        title: "Common Reasons a Business Website Does Not Generate Leads",
        description: "Diagnose the message, traffic, trust, and friction problems that keep good visitors from acting.",
        readTime: "6 min read",
        intro: "A lead problem is not always a traffic problem. Before investing in more promotion, check whether the website helps the right visitor understand the offer, trust the business, and take a sensible next step.",
        sections: [
          ["The value is difficult to understand", "Visitors should quickly see who the service is for, what problem it solves, and why the approach is credible. Internal jargon and broad claims make this harder. Use the language customers use when describing the problem."],
          ["The traffic has weak intent", "High visit counts can hide poor audience fit. Review which queries, ads, referrals, and pages bring visitors\u2014and whether those visitors resemble the customers you want."],
          ["The next step asks for too much", "Long forms, unclear buttons, and high-commitment offers can stop interested people. Match the action to the visitor\u2019s stage and request only the information needed to respond."],
          ["Trust and measurement are missing", "Useful proof, clear process details, transparent contact information, privacy context, and a functional mobile experience reduce uncertainty. Reliable analytics then show where people hesitate so improvements are based on evidence."]
        ]
      },
      {
        slug: "paid-ad-testing-basics",
        category: "Paid Advertising",
        title: "A Simple Framework for Testing Paid Advertising",
        description: "Learn how to structure small, informative campaign tests instead of changing everything at once.",
        readTime: "5 min read",
        intro: "An advertising test should answer a useful question. When the audience, message, offer, creative, and landing page all change at once, even a good result teaches very little.",
        sections: [
          ["Begin with a testable question", "Ask whether a specific audience responds to a specific promise, or whether one offer creates more qualified inquiries than another. Keep the question connected to a business decision."],
          ["Protect the learning", "Use consistent tracking, a suitable time window, and a budget that can generate enough response to observe. Avoid constant edits that reset delivery and blur the comparison."],
          ["Judge quality after the click", "Cheap clicks are not the goal. Review landing-page behavior, lead relevance, sales conversations, and eventual customer value to understand whether the campaign is useful."]
        ]
      },
      {
        slug: "email-welcome-sequence",
        category: "Email Marketing",
        title: "What a Useful Welcome Email Sequence Should Do",
        description: "Design a concise welcome journey that helps new subscribers understand, trust, and act.",
        readTime: "5 min read",
        intro: "A welcome sequence is your first structured conversation with a new subscriber. It should deliver what was promised, establish relevance, and help the reader choose a sensible next step.",
        sections: [
          ["Deliver value immediately", "Send the requested resource or information promptly and set expectations about future messages. Make the email easy to scan and the promised item easy to find."],
          ["Teach before you pitch", "Use the next messages to clarify the problem, share a practical insight, and address a common misconception. Show how you think without manufacturing urgency."],
          ["Offer a relevant next step", "Invite the reader to reply, view a service, book a call, or read a related guide. The action should fit what they know and the level of commitment they have shown."]
        ]
      },
      {
        slug: "social-content-pillars",
        category: "Social Media",
        title: "Build Social Content Pillars That Support Sales",
        description: "Create a repeatable content structure grounded in customer questions and decisions.",
        readTime: "6 min read",
        intro: "Good content pillars are not a list of trendy formats. They are a small number of useful themes that connect audience problems to your expertise and offer.",
        sections: [
          ["Collect real customer questions", "Use sales calls, support conversations, search queries, and comments. Group repeated questions by the stage of the buying journey where they appear."],
          ["Give each pillar a job", "One pillar might explain the problem, another may reduce risk, and another can demonstrate your working process. This creates variety without losing strategic focus."],
          ["Reuse ideas thoughtfully", "One strong insight can become a short video, a carousel, an email, and a detailed article. Adapt the framing and depth to the platform rather than copying the same post everywhere."]
        ]
      }
    ];
    var caseStudies = [
      {
        slug: "local-service-lead-system",
        label: "Illustrative Example",
        industry: "Local services",
        title: "From Scattered Promotion to a Clear Lead Journey",
        context: "A hypothetical local service business relies on referrals and occasional social posts but has no consistent path for new inquiries.",
        challenge: "Prospects see mixed messages, land on a generic homepage, and must work hard to understand services or request help.",
        goals: ["Clarify the offer", "Improve inquiry quality", "Create a trackable follow-up process"],
        strategy: ["Conversion optimization", "Local SEO", "Email automation"],
        implementation: "The example plan restructures priority service pages, simplifies the inquiry form, adds local-intent content, and defines an immediate confirmation plus human follow-up workflow.",
        results: "No performance figures are shown because this is a planning example, not a real client engagement. A real project would compare qualified inquiries, response time, source, and booking rate over an agreed timeframe.",
        lessons: "Improving the journey from search to response can be more valuable than simply increasing traffic."
      },
      {
        slug: "saas-demand-foundation",
        label: "Illustrative Example",
        industry: "B2B SaaS",
        title: "A Focused Demand Foundation for a Complex Offer",
        context: "A hypothetical early-stage software company has a capable product but struggles to explain its value to a specific buying team.",
        challenge: "Broad positioning attracts mixed traffic, while content and paid campaigns use different messages and success measures.",
        goals: ["Sharpen the target use case", "Create a consistent acquisition message", "Measure qualified demand"],
        strategy: ["AI marketing strategy", "Content marketing", "Paid advertising"],
        implementation: "The example begins with customer-language research, builds a focused landing page and content cluster, and uses a controlled campaign to test message-market resonance before expanding spend.",
        results: "This illustrative structure intentionally contains no claimed metrics. In a real engagement, leading indicators and pipeline quality would be reviewed together over a defined test period.",
        lessons: "Clear positioning and shared measurement should come before channel expansion."
      },
      {
        slug: "ecommerce-retention-workflow",
        label: "Illustrative Example",
        industry: "E-commerce",
        title: "Connecting Acquisition with a Better Retention Journey",
        context: "A hypothetical online retailer invests in acquisition but sends the same message to every subscriber and customer.",
        challenge: "The customer journey has gaps after signup and purchase, creating manual work and missed opportunities to provide relevant support.",
        goals: ["Improve lifecycle communication", "Reduce repetitive work", "Create clearer retention measurement"],
        strategy: ["Email marketing", "AI-assisted content", "Marketing automation"],
        implementation: "The example maps key lifecycle moments, creates segmented welcome and post-purchase sequences, and introduces guarded AI assistance for first-draft campaign variations.",
        results: "This is not a claim of achieved results. A real implementation would measure deliverability, engagement, repeat purchase behavior, and support impact in context.",
        lessons: "Automation works best when it improves relevance and consistency rather than simply increasing message volume."
      }
    ];
    module2.exports = { services, articles, caseStudies };
  }
});

// src/blog/data.js
var require_data = __commonJS({
  "src/blog/data.js"(exports2, module2) {
    var { articles } = require_content();
    var excerpts = {
      "practical-digital-marketing-plan": "A useful marketing plan does not need to be long. Learn how to connect your audience, channels, weekly actions, and measurement into one clear direction.",
      "best-ai-marketing-opportunities": "The best AI opportunity is usually a real bottleneck, not a shiny tool. This guide helps you prioritize useful, low-risk applications and run a measurable pilot.",
      "why-websites-do-not-generate-leads": "More traffic will not fix a confusing website. Diagnose the message, trust, audience fit, and friction that prevent interested visitors from getting in touch.",
      "paid-ad-testing-basics": "Good ad tests answer one useful question at a time. Learn how to structure a small campaign test and judge quality beyond cheap clicks.",
      "email-welcome-sequence": "Your first emails should deliver value and make the next step feel natural. Here is a simple welcome journey that builds relevance and trust.",
      "social-content-pillars": "Content pillars work best when they answer real customer questions. Build a repeatable system that supports decisions and sales, not just a posting schedule."
    };
    var orderedSlugs = [
      "practical-digital-marketing-plan",
      "best-ai-marketing-opportunities",
      "why-websites-do-not-generate-leads",
      "paid-ad-testing-basics",
      "email-welcome-sequence",
      "social-content-pillars"
    ];
    var blogArticles2 = orderedSlugs.map((slug) => {
      const article = articles.find((item) => item.slug === slug);
      return {
        ...article,
        excerpt: excerpts[slug],
        cover: `/assets/blog/${slug}.webp`,
        publishedAt: "2026-10-14",
        publishedLabel: "October 14, 2026"
      };
    });
    module2.exports = { blogArticles: blogArticles2 };
  }
});

// src/blog/server.jsx
var server_exports = {};
__export(server_exports, {
  renderBlogArticle: () => renderBlogArticle,
  renderBlogListing: () => renderBlogListing
});
module.exports = __toCommonJS(server_exports);
var import_react2 = __toESM(require("react"));
var import_server = require("react-dom/server");

// src/blog/components.jsx
var import_react = __toESM(require("react"));
var import_data = __toESM(require_data());
var Arrow = () => /* @__PURE__ */ import_react.default.createElement("span", { "aria-hidden": "true" }, "\u2197");
function Category({ children }) {
  return /* @__PURE__ */ import_react.default.createElement("span", { className: "blog-category inline-flex self-start items-center rounded-full border border-[#c8dcec] bg-[#eaf5ff] px-3 py-1 text-[11px] font-bold uppercase tracking-[.16em] text-[#1767ad]" }, children);
}
function PostMeta({ article }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#65788b]" }, /* @__PURE__ */ import_react.default.createElement("time", { dateTime: article.publishedAt }, article.publishedLabel), /* @__PURE__ */ import_react.default.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ import_react.default.createElement("span", null, article.readTime));
}
function NewsletterForm({ compact = false }) {
  const [status, setStatus] = (0, import_react.useState)("");
  const [busy, setBusy] = (0, import_react.useState)(false);
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setBusy(true);
    setStatus("");
    try {
      const response = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      const payload = await response.json();
      if (!response.ok || payload.success === false || payload.success === "false") throw new Error("Delivery failed");
      form.reset();
      setStatus("Thanks\u2014your signup request was sent. Watch your inbox for the next update.");
    } catch {
      setStatus("Sorry, the request did not go through. Please try again or email me directly.");
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ import_react.default.createElement("section", { className: `newsletter-card rounded-[22px] border border-[#d4e3f0] bg-[#edf6fd] ${compact ? "p-6 sm:p-8" : "p-7"}`, "aria-labelledby": "newsletter-title" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "text-[11px] font-bold uppercase tracking-[.2em] text-[#246fae]" }, "The Digital Ganesh newsletter"), /* @__PURE__ */ import_react.default.createElement("h2", { id: "newsletter-title", className: "blog-serif mt-4 text-[28px] leading-[1.18] text-[#0b2b50]" }, "Useful marketing ideas, minus the noise."), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-3 text-[15px] leading-7 text-[#526a82]" }, "Occasional practical notes on SEO, ads, AI, and better customer journeys. No spam."), /* @__PURE__ */ import_react.default.createElement("form", { action: "https://formsubmit.co/ajax/aimarketingwithganesh@gmail.com", method: "post", onSubmit: submit, className: "mt-6 space-y-3" }, /* @__PURE__ */ import_react.default.createElement("input", { type: "hidden", name: "_subject", value: "New blog newsletter signup request \u2014 Digital Ganesh" }), /* @__PURE__ */ import_react.default.createElement("input", { type: "hidden", name: "_template", value: "table" }), /* @__PURE__ */ import_react.default.createElement("input", { type: "text", name: "_honey", tabIndex: "-1", autoComplete: "off", "aria-hidden": "true", className: "absolute -left-[10000px]" }), /* @__PURE__ */ import_react.default.createElement("label", { className: "block text-sm font-semibold text-[#102f50]", htmlFor: compact ? "newsletter-email-inline" : "newsletter-email-sidebar" }, "Email address"), /* @__PURE__ */ import_react.default.createElement("input", { id: compact ? "newsletter-email-inline" : "newsletter-email-sidebar", type: "email", name: "email", autoComplete: "email", required: true, placeholder: "you@company.com", className: "w-full rounded-xl border border-[#b8ccde] bg-white px-4 py-3 text-[15px] text-[#102f50] outline-none focus:border-[#278bea] focus:ring-2 focus:ring-[#88bff0]" }), /* @__PURE__ */ import_react.default.createElement("label", { className: "flex items-start gap-2 text-xs leading-5 text-[#526a82]" }, /* @__PURE__ */ import_react.default.createElement("input", { type: "checkbox", name: "consent", value: "Yes, I request occasional marketing emails", required: true, className: "mt-1 accent-[#1767ad]" }), /* @__PURE__ */ import_react.default.createElement("span", null, "I agree to receive occasional emails from Digital Ganesh. I can opt out by replying to any email. ", /* @__PURE__ */ import_react.default.createElement("a", { href: "/privacy", className: "underline underline-offset-2" }, "Privacy notice"), ".")), /* @__PURE__ */ import_react.default.createElement("button", { type: "submit", disabled: busy, className: "w-full rounded-xl bg-[#082b52] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1267b3] disabled:opacity-60" }, busy ? "Sending\u2026" : "Subscribe"), status && /* @__PURE__ */ import_react.default.createElement("p", { role: "status", className: "text-sm leading-6 text-[#1767ad]" }, status)), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-4 text-xs leading-5 text-[#718499]" }, "Signup requests go to my inbox. There is no automated mailing list yet."));
}
function PostCard({ article }) {
  return /* @__PURE__ */ import_react.default.createElement("article", { className: "group overflow-hidden rounded-[20px] border border-[#dce6ef] bg-white shadow-[0_12px_36px_rgba(3,28,61,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(3,28,61,.12)]" }, /* @__PURE__ */ import_react.default.createElement("a", { href: `/blog/${article.slug}`, className: "block overflow-hidden", "aria-label": `Read ${article.title}` }, /* @__PURE__ */ import_react.default.createElement("img", { src: article.cover, alt: "", width: "1440", height: "810", loading: "lazy", className: "aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.035]" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "p-6" }, /* @__PURE__ */ import_react.default.createElement(Category, null, article.category), /* @__PURE__ */ import_react.default.createElement("h3", { className: "blog-serif mt-4 text-[25px] leading-[1.2] text-[#0b2745]" }, /* @__PURE__ */ import_react.default.createElement("a", { href: `/blog/${article.slug}`, className: "hover:text-[#1767ad]" }, article.title)), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-3 text-[15px] leading-7 text-[#526a82]" }, article.excerpt), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-6 border-t border-[#e1eaf2] pt-4" }, /* @__PURE__ */ import_react.default.createElement(PostMeta, { article }))));
}
function BlogListing() {
  const [featured, ...recent] = import_data.blogArticles;
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "blog-shell bg-[#f5f8fc] text-[#0b2745]" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "mx-auto max-w-[1180px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:pt-24" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "max-w-[850px]" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "blog-kicker text-[12px] font-bold uppercase tracking-[.24em] text-[#246fae]" }, "Ideas for clearer growth"), /* @__PURE__ */ import_react.default.createElement("h1", { className: "blog-serif mt-5 text-[clamp(3rem,6vw,5.4rem)] leading-[1.02] tracking-[-.035em]" }, "The Digital Ganesh Blog", /* @__PURE__ */ import_react.default.createElement("span", { className: "text-[#3b9ee9]" }, ".")), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-5 max-w-[650px] text-[19px] leading-8 text-[#526a82]" }, "Practical thinking on marketing, AI, and the small decisions that help good businesses grow."))), /* @__PURE__ */ import_react.default.createElement("section", { className: "mx-auto max-w-[1180px] px-5 pb-20 sm:px-8", "aria-labelledby": "featured-heading" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "mb-5 flex items-center gap-4" }, /* @__PURE__ */ import_react.default.createElement("h2", { id: "featured-heading", className: "text-[12px] font-bold uppercase tracking-[.2em] text-[#526a82]" }, "Featured article"), /* @__PURE__ */ import_react.default.createElement("span", { className: "h-px flex-1 bg-[#d8e5f0]" })), /* @__PURE__ */ import_react.default.createElement("article", { className: "group grid overflow-hidden rounded-[26px] border border-[#d8e4ef] bg-white shadow-[0_20px_55px_rgba(3,28,61,.08)] lg:grid-cols-[1.07fr_.93fr]" }, /* @__PURE__ */ import_react.default.createElement("a", { href: `/blog/${featured.slug}`, className: "block overflow-hidden" }, /* @__PURE__ */ import_react.default.createElement("img", { src: featured.cover, alt: "", width: "1440", height: "810", className: "h-full min-h-[290px] w-full object-cover transition duration-500 group-hover:scale-[1.025]" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "flex flex-col justify-center p-7 sm:p-10 lg:p-12" }, /* @__PURE__ */ import_react.default.createElement(Category, null, featured.category), /* @__PURE__ */ import_react.default.createElement("h3", { className: "blog-serif mt-5 text-[clamp(2rem,3vw,3.15rem)] leading-[1.12] text-[#0b2745]" }, /* @__PURE__ */ import_react.default.createElement("a", { href: `/blog/${featured.slug}`, className: "hover:text-[#1767ad]" }, featured.title)), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-5 text-[16px] leading-8 text-[#526a82]" }, featured.excerpt), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-7" }, /* @__PURE__ */ import_react.default.createElement(PostMeta, { article: featured })), /* @__PURE__ */ import_react.default.createElement("a", { href: `/blog/${featured.slug}`, className: "mt-8 inline-flex w-fit items-center gap-2 border-b border-[#278bea] pb-1 text-sm font-bold text-[#1767ad]" }, "Read the article ", /* @__PURE__ */ import_react.default.createElement(Arrow, null))))), /* @__PURE__ */ import_react.default.createElement("div", { className: "border-t border-[#dbe6ef] bg-[#fbfdff]" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:py-20" }, /* @__PURE__ */ import_react.default.createElement("section", { "aria-labelledby": "recent-heading" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "mb-8 flex items-end justify-between border-b border-[#dbe6ef] pb-5" }, /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-[11px] font-bold uppercase tracking-[.2em] text-[#246fae]" }, "Explore the journal"), /* @__PURE__ */ import_react.default.createElement("h2", { id: "recent-heading", className: "blog-serif mt-2 text-[36px] text-[#0b2745]" }, "Recent articles")), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-sm text-[#718499]" }, recent.length, " reads")), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid gap-6 sm:grid-cols-2" }, recent.map((article) => /* @__PURE__ */ import_react.default.createElement(PostCard, { article, key: article.slug })))), /* @__PURE__ */ import_react.default.createElement("aside", { className: "lg:pt-[79px]" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "lg:sticky lg:top-[112px]" }, /* @__PURE__ */ import_react.default.createElement(NewsletterForm, null), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-8 border-t border-[#d8e5f0] pt-6 text-sm leading-7 text-[#65788b]" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "font-bold text-[#0f4f8a]" }, "A note from Ganesh"), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-1" }, "These guides are written to help you make more confident decisions, whether we work together or not.")))))));
}
function BlogArticle({ slug }) {
  const article = import_data.blogArticles.find((item) => item.slug === slug);
  if (!article) return null;
  const related = import_data.blogArticles.filter((item) => item.slug !== slug).slice(0, 2);
  const anchor = (heading) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "blog-shell bg-[#f5f8fc] text-[#0b2745]" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "mx-auto max-w-[1180px] px-5 pt-10 sm:px-8" }, /* @__PURE__ */ import_react.default.createElement("a", { href: "/blog", className: "text-sm font-semibold text-[#1767ad] hover:underline" }, "\u2190 Back to the Blog")), /* @__PURE__ */ import_react.default.createElement("article", null, /* @__PURE__ */ import_react.default.createElement("header", { className: "mx-auto max-w-[890px] px-5 pb-12 pt-12 text-center sm:px-8 sm:pt-16" }, /* @__PURE__ */ import_react.default.createElement(Category, null, article.category), /* @__PURE__ */ import_react.default.createElement("h1", { className: "blog-serif mx-auto mt-5 text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.08] tracking-[-.03em]" }, article.title), /* @__PURE__ */ import_react.default.createElement("p", { className: "mx-auto mt-6 max-w-[720px] text-[18px] leading-8 text-[#526a82]" }, article.excerpt), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-7 flex flex-wrap items-center justify-center gap-x-3 text-sm text-[#65788b]" }, /* @__PURE__ */ import_react.default.createElement("span", { className: "font-semibold text-[#173b5d]" }, "Ganesh Adhikari"), /* @__PURE__ */ import_react.default.createElement("span", { "aria-hidden": "true" }, "\xB7"), /* @__PURE__ */ import_react.default.createElement(PostMeta, { article }))), /* @__PURE__ */ import_react.default.createElement("div", { className: "mx-auto max-w-[1180px] px-5 sm:px-8" }, /* @__PURE__ */ import_react.default.createElement("img", { src: article.cover, alt: "", width: "1440", height: "810", className: "aspect-[16/8] w-full rounded-[24px] object-cover" })), /* @__PURE__ */ import_react.default.createElement("div", { className: "mx-auto grid max-w-[1180px] gap-10 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-20 lg:pt-20" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "blog-prose max-w-[760px]" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "article-lead" }, article.intro), article.sections.map(([heading, body]) => /* @__PURE__ */ import_react.default.createElement("section", { id: anchor(heading), key: heading, className: "scroll-mt-28" }, /* @__PURE__ */ import_react.default.createElement("h2", null, heading), /* @__PURE__ */ import_react.default.createElement("p", null, body))), /* @__PURE__ */ import_react.default.createElement("div", { className: "mt-14 rounded-[24px] bg-[#e6f2fc] p-8 sm:p-10" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-[11px] font-bold uppercase tracking-[.2em] text-[#2c83cc]" }, "Make it practical"), /* @__PURE__ */ import_react.default.createElement("h2", { className: "blog-serif mt-3 text-[30px] leading-tight text-[#102f50]" }, "Want a plan tailored to your business?"), /* @__PURE__ */ import_react.default.createElement("p", { className: "mt-3 text-[16px] leading-7 text-[#526a82]" }, "Let\u2019s look at your goals, your current marketing, and the clearest next step."), /* @__PURE__ */ import_react.default.createElement("a", { href: "/contact#book", className: "mt-5 inline-flex rounded-full bg-[#082b52] px-6 py-3 text-sm font-bold text-white hover:bg-[#1267b3]" }, "Book a Strategy Call ", /* @__PURE__ */ import_react.default.createElement("span", { "aria-hidden": "true", className: "ml-2" }, "\u2197")))), /* @__PURE__ */ import_react.default.createElement("aside", null, /* @__PURE__ */ import_react.default.createElement("div", { className: "lg:sticky lg:top-[112px]" }, /* @__PURE__ */ import_react.default.createElement("nav", { "aria-label": "In this article", className: "mb-8 border-l-2 border-[#c9dceb] pl-5" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-[11px] font-bold uppercase tracking-[.18em] text-[#246fae]" }, "In this article"), /* @__PURE__ */ import_react.default.createElement("ol", { className: "mt-4 space-y-3 text-sm leading-6 text-[#526a82]" }, article.sections.map(([heading]) => /* @__PURE__ */ import_react.default.createElement("li", { key: heading }, /* @__PURE__ */ import_react.default.createElement("a", { href: `#${anchor(heading)}`, className: "hover:text-[#1767ad] hover:underline" }, heading))))), /* @__PURE__ */ import_react.default.createElement(NewsletterForm, null))))), /* @__PURE__ */ import_react.default.createElement("section", { className: "border-t border-[#d8e4ef] bg-[#fbfdff] py-16" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "mx-auto max-w-[1180px] px-5 sm:px-8" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "mb-7 flex items-end justify-between" }, /* @__PURE__ */ import_react.default.createElement("h2", { className: "blog-serif text-[34px] text-[#0b2745]" }, "Keep reading"), /* @__PURE__ */ import_react.default.createElement("a", { href: "/blog", className: "text-sm font-bold text-[#1767ad] hover:underline" }, "View all articles ", /* @__PURE__ */ import_react.default.createElement(Arrow, null))), /* @__PURE__ */ import_react.default.createElement("div", { className: "grid gap-6 md:grid-cols-2" }, related.map((item) => /* @__PURE__ */ import_react.default.createElement(PostCard, { article: item, key: item.slug }))))));
}

// src/blog/server.jsx
var renderBlogListing = () => (0, import_server.renderToString)(/* @__PURE__ */ import_react2.default.createElement(BlogListing, null));
var renderBlogArticle = (slug) => (0, import_server.renderToString)(/* @__PURE__ */ import_react2.default.createElement(BlogArticle, { slug }));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  renderBlogArticle,
  renderBlogListing
});
