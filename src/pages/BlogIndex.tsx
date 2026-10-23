import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";

const blogs = [
  {
    title: "Reddit Marketing Services for Businesses",
    description: "A practical guide to Reddit marketing strategy, community engagement, audience research, and sustainable business growth.",
    to: "/blog/reddit-marketing-services/",
  },
  {
    title: "Top 10 AEO and GEO Services for AI Search Visibility",
    description: "Discover what AEO and GEO services include, how to measure AI search visibility, and how to choose the right services for your business.",
    to: "/blog/top-aeo-geo-services/",
  },
];

const BlogIndex = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Blog | TrueReech</title>
      <meta name="description" content="Practical guides about SEO, content marketing, Reddit marketing, AEO, GEO, and AI search visibility from TrueReech." />
      <link rel="canonical" href={`${SITE_URL}/blog/`} />
      <meta property="og:site_name" content="TrueReech" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Blog | TrueReech" />
      <meta property="og:description" content="Practical guides about SEO, content marketing, Reddit marketing, AEO, GEO, and AI search visibility from TrueReech." />
      <meta property="og:url" content={`${SITE_URL}/blog/`} />
    </Helmet>

    <SiteHeader />

    <main>
      <section className="px-6 pb-12 pt-16 md:px-10 md:pb-16 md:pt-24">
        <div className="wrap max-w-4xl">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-5 max-w-3xl text-[2.7rem] leading-[1.03] md:text-6xl">Useful ideas for clearer digital visibility.</h1>
          <p className="prose-body mt-7 max-w-2xl text-lg">Practical guides about content, search, communities, and helping businesses become easier to find and understand online.</p>
        </div>
      </section>

      <section className="border-t border-border bg-surface px-6 py-12 md:px-10 md:py-20">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {blogs.map((blog) => (
            <article key={blog.to} className="flex min-h-[280px] flex-col border border-border bg-card p-6 shadow-[0_4px_18px_rgba(30,30,30,0.05)] transition-shadow hover:shadow-[0_8px_26px_rgba(30,30,30,0.08)] md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">TrueReech Blog</p>
              <h2 className="mt-4 max-w-md text-2xl leading-tight md:text-3xl">{blog.title}</h2>
              <p className="prose-body mt-4 max-w-md">{blog.description}</p>
              <Link to={blog.to} className="mt-auto w-fit pt-8 text-sm font-semibold text-ink underline decoration-1 underline-offset-4 transition-colors hover:text-foreground">Read Article &rarr;</Link>
            </article>
          ))}
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default BlogIndex;
