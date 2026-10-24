import React, { useState } from "react";
import { blogArticles } from "./data";

const Arrow = () => <span aria-hidden="true">↗</span>;

function Category({ children }) {
  return <span className="blog-category inline-flex self-start items-center rounded-full border border-[#c8dcec] bg-[#eaf5ff] px-3 py-1 text-[11px] font-bold uppercase tracking-[.16em] text-[#1767ad]">{children}</span>;
}

function PostMeta({ article }) {
  return <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#65788b]"><time dateTime={article.publishedAt}>{article.publishedLabel}</time><span aria-hidden="true">·</span><span>{article.readTime}</span></div>;
}

export function NewsletterForm({ compact = false }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

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
      setStatus("Thanks—your signup request was sent. Watch your inbox for the next update.");
    } catch {
      setStatus("Sorry, the request did not go through. Please try again or email me directly.");
    } finally {
      setBusy(false);
    }
  }

  return <section className={`newsletter-card rounded-[22px] border border-[#d4e3f0] bg-[#edf6fd] ${compact ? "p-6 sm:p-8" : "p-7"}`} aria-labelledby="newsletter-title">
    <span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#246fae]">The Digital Ganesh newsletter</span>
    <h2 id="newsletter-title" className="blog-serif mt-4 text-[28px] leading-[1.18] text-[#0b2b50]">Useful marketing ideas, minus the noise.</h2>
    <p className="mt-3 text-[15px] leading-7 text-[#526a82]">Occasional practical notes on SEO, ads, AI, and better customer journeys. No spam.</p>
    <form action="https://formsubmit.co/ajax/aimarketingwithganesh@gmail.com" method="post" onSubmit={submit} className="mt-6 space-y-3">
      <input type="hidden" name="_subject" value="New blog newsletter signup request — Digital Ganesh" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" className="absolute -left-[10000px]" />
      <label className="block text-sm font-semibold text-[#102f50]" htmlFor={compact ? "newsletter-email-inline" : "newsletter-email-sidebar"}>Email address</label>
      <input id={compact ? "newsletter-email-inline" : "newsletter-email-sidebar"} type="email" name="email" autoComplete="email" required placeholder="you@company.com" className="w-full rounded-xl border border-[#b8ccde] bg-white px-4 py-3 text-[15px] text-[#102f50] outline-none focus:border-[#278bea] focus:ring-2 focus:ring-[#88bff0]" />
      <label className="flex items-start gap-2 text-xs leading-5 text-[#526a82]"><input type="checkbox" name="consent" value="Yes, I request occasional marketing emails" required className="mt-1 accent-[#1767ad]" /><span>I agree to receive occasional emails from Digital Ganesh. I can opt out by replying to any email. <a href="/privacy" className="underline underline-offset-2">Privacy notice</a>.</span></label>
      <button type="submit" disabled={busy} className="w-full rounded-xl bg-[#082b52] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1267b3] disabled:opacity-60">{busy ? "Sending…" : "Subscribe"}</button>
      {status && <p role="status" className="text-sm leading-6 text-[#1767ad]">{status}</p>}
    </form>
    <p className="mt-4 text-xs leading-5 text-[#718499]">Signup requests go to my inbox. There is no automated mailing list yet.</p>
  </section>;
}

function PostCard({ article }) {
  return <article className="group overflow-hidden rounded-[20px] border border-[#dce6ef] bg-white shadow-[0_12px_36px_rgba(3,28,61,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(3,28,61,.12)]">
    <a href={`/blog/${article.slug}`} className="block overflow-hidden" aria-label={`Read ${article.title}`}><img src={article.cover} alt="" width="1440" height="810" loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.035]" /></a>
    <div className="p-6"><Category>{article.category}</Category><h3 className="blog-serif mt-4 text-[25px] leading-[1.2] text-[#0b2745]"><a href={`/blog/${article.slug}`} className="hover:text-[#1767ad]">{article.title}</a></h3><p className="mt-3 text-[15px] leading-7 text-[#526a82]">{article.excerpt}</p><div className="mt-6 border-t border-[#e1eaf2] pt-4"><PostMeta article={article} /></div></div>
  </article>;
}

export function BlogListing() {
  const [featured, ...recent] = blogArticles;
  return <div className="blog-shell bg-[#f5f8fc] text-[#0b2745]">
    <div className="mx-auto max-w-[1180px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:pt-24"><div className="max-w-[850px]"><p className="blog-kicker text-[12px] font-bold uppercase tracking-[.24em] text-[#246fae]">Ideas for clearer growth</p><h1 className="blog-serif mt-5 text-[clamp(3rem,6vw,5.4rem)] leading-[1.02] tracking-[-.035em]">The Digital Ganesh Blog<span className="text-[#3b9ee9]">.</span></h1><p className="mt-5 max-w-[650px] text-[19px] leading-8 text-[#526a82]">Practical thinking on marketing, AI, and the small decisions that help good businesses grow.</p></div></div>
    <section className="mx-auto max-w-[1180px] px-5 pb-20 sm:px-8" aria-labelledby="featured-heading"><div className="mb-5 flex items-center gap-4"><h2 id="featured-heading" className="text-[12px] font-bold uppercase tracking-[.2em] text-[#526a82]">Featured article</h2><span className="h-px flex-1 bg-[#d8e5f0]" /></div><article className="group grid overflow-hidden rounded-[26px] border border-[#d8e4ef] bg-white shadow-[0_20px_55px_rgba(3,28,61,.08)] lg:grid-cols-[1.07fr_.93fr]"><a href={`/blog/${featured.slug}`} className="block overflow-hidden"><img src={featured.cover} alt="" width="1440" height="810" className="h-full min-h-[290px] w-full object-cover transition duration-500 group-hover:scale-[1.025]" /></a><div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12"><Category>{featured.category}</Category><h3 className="blog-serif mt-5 text-[clamp(2rem,3vw,3.15rem)] leading-[1.12] text-[#0b2745]"><a href={`/blog/${featured.slug}`} className="hover:text-[#1767ad]">{featured.title}</a></h3><p className="mt-5 text-[16px] leading-8 text-[#526a82]">{featured.excerpt}</p><div className="mt-7"><PostMeta article={featured} /></div><a href={`/blog/${featured.slug}`} className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#278bea] pb-1 text-sm font-bold text-[#1767ad]">Read the article <Arrow /></a></div></article></section>
    <div className="border-t border-[#dbe6ef] bg-[#fbfdff]"><div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:py-20"><section aria-labelledby="recent-heading"><div className="mb-8 flex items-end justify-between border-b border-[#dbe6ef] pb-5"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#246fae]">Explore the journal</p><h2 id="recent-heading" className="blog-serif mt-2 text-[36px] text-[#0b2745]">Recent articles</h2></div><span className="text-sm text-[#718499]">{recent.length} reads</span></div><div className="grid gap-6 sm:grid-cols-2">{recent.map((article) => <PostCard article={article} key={article.slug} />)}</div></section><aside className="lg:pt-[79px]"><div className="lg:sticky lg:top-[112px]"><NewsletterForm /><div className="mt-8 border-t border-[#d8e5f0] pt-6 text-sm leading-7 text-[#65788b]"><p className="font-bold text-[#0f4f8a]">A note from Ganesh</p><p className="mt-1">These guides are written to help you make more confident decisions, whether we work together or not.</p></div></div></aside></div></div>
  </div>;
}

export function BlogArticle({ slug }) {
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) return null;
  const related = blogArticles.filter((item) => item.slug !== slug).slice(0, 2);
  const anchor = (heading) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
  return <div className="blog-shell bg-[#f5f8fc] text-[#0b2745]"><div className="mx-auto max-w-[1180px] px-5 pt-10 sm:px-8"><a href="/blog" className="text-sm font-semibold text-[#1767ad] hover:underline">← Back to the Blog</a></div>
    <article><header className="mx-auto max-w-[890px] px-5 pb-12 pt-12 text-center sm:px-8 sm:pt-16"><Category>{article.category}</Category><h1 className="blog-serif mx-auto mt-5 text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.08] tracking-[-.03em]">{article.title}</h1><p className="mx-auto mt-6 max-w-[720px] text-[18px] leading-8 text-[#526a82]">{article.excerpt}</p><div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 text-sm text-[#65788b]"><span className="font-semibold text-[#173b5d]">Ganesh Adhikari</span><span aria-hidden="true">·</span><PostMeta article={article} /></div></header>
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8"><img src={article.cover} alt="" width="1440" height="810" className="aspect-[16/8] w-full rounded-[24px] object-cover" /></div>
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-20 lg:pt-20"><div className="blog-prose max-w-[760px]"><p className="article-lead">{article.intro}</p>{article.sections.map(([heading, body]) => <section id={anchor(heading)} key={heading} className="scroll-mt-28"><h2>{heading}</h2><p>{body}</p></section>)}<div className="mt-14 rounded-[24px] bg-[#e6f2fc] p-8 sm:p-10"><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#2c83cc]">Make it practical</p><h2 className="blog-serif mt-3 text-[30px] leading-tight text-[#102f50]">Want a plan tailored to your business?</h2><p className="mt-3 text-[16px] leading-7 text-[#526a82]">Let’s look at your goals, your current marketing, and the clearest next step.</p><a href="/contact#book" className="mt-5 inline-flex rounded-full bg-[#082b52] px-6 py-3 text-sm font-bold text-white hover:bg-[#1267b3]">Book a Strategy Call <span aria-hidden="true" className="ml-2">↗</span></a></div></div><aside><div className="lg:sticky lg:top-[112px]"><nav aria-label="In this article" className="mb-8 border-l-2 border-[#c9dceb] pl-5"><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#246fae]">In this article</p><ol className="mt-4 space-y-3 text-sm leading-6 text-[#526a82]">{article.sections.map(([heading]) => <li key={heading}><a href={`#${anchor(heading)}`} className="hover:text-[#1767ad] hover:underline">{heading}</a></li>)}</ol></nav><NewsletterForm /></div></aside></div>
    </article><section className="border-t border-[#d8e4ef] bg-[#fbfdff] py-16"><div className="mx-auto max-w-[1180px] px-5 sm:px-8"><div className="mb-7 flex items-end justify-between"><h2 className="blog-serif text-[34px] text-[#0b2745]">Keep reading</h2><a href="/blog" className="text-sm font-bold text-[#1767ad] hover:underline">View all articles <Arrow /></a></div><div className="grid gap-6 md:grid-cols-2">{related.map((item) => <PostCard article={item} key={item.slug} />)}</div></div></section>
  </div>;
}
