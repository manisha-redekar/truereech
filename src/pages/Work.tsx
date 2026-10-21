import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import { projects } from "@/lib/content";
import heroImage from "@/assets/hero-mono.jpg";

const Work = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>SEO Portfolio &amp; Content Projects | TrueReech</title>
      <meta name="description" content="Explore selected SEO, content marketing, blog writing, and community growth projects, with client identities kept confidential where required." />
      <link rel="canonical" href={`${SITE_URL}/work/`} />
      <meta property="og:site_name" content="TrueReech" />
      <meta property="og:title" content="SEO Portfolio & Content Projects | TrueReech" />
      <meta property="og:description" content="Explore selected SEO, content marketing, blog writing, and community growth projects, with client identities kept confidential where required." />
      <meta property="og:url" content={`${SITE_URL}/work/`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE_URL}${heroImage}`} />
      <meta property="og:image:alt" content="Workspace with a laptop and notebook for research and content planning" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SEO Portfolio & Content Projects | TrueReech" />
      <meta name="twitter:description" content="Explore selected SEO, content marketing, blog writing, and community growth projects, with client identities kept confidential where required." />
      <meta name="twitter:image" content={`${SITE_URL}${heroImage}`} />
    </Helmet>
    <SiteHeader />
    <main>
      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <div className="wrap max-w-4xl">
          <p className="eyebrow">Work and portfolio</p>
          <h1 className="mt-5 max-w-3xl text-[2.7rem] leading-[1.03] md:text-6xl">Selected work and marketing projects.</h1>
          <p className="prose-body mt-7 max-w-2xl text-lg">A closer look at the projects, content, and digital marketing work behind TrueReech. These are concise records of work delivered, not invented case studies.</p>
        </div>
      </section>
      <section className="border-t border-border bg-surface px-6 py-12 md:px-10 md:py-20">
        <div className="wrap grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="flex min-h-[240px] flex-col rounded-lg border border-border bg-card p-6 shadow-[0_4px_18px_rgba(30,30,30,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">{project.category}</p>
              <h2 className="client-name mt-3 text-xl">{project.name}</h2>
              <p className="prose-body mt-3 text-sm">{project.desc}</p>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-6 text-sm font-semibold text-ink hover:text-foreground">Visit project &rarr;</a>}
            </article>
          ))}
        </div>
      </section>
      <section className="px-6 py-14 md:px-10 md:py-20"><div className="wrap flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center"><p className="max-w-xl text-xl leading-snug">Have a similar content, search, or visibility challenge?</p><Link to="/contact/" className="bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-85">Start a conversation &rarr;</Link></div></section>
    </main>
    <SiteFooter />
  </div>
);

export default Work;
