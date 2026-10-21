import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/content";
import contentImage from "@/assets/content-mono.jpg";

const Services = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>SEO, AEO, GEO and Marketing Services | TrueReech</title>
      <meta name="description" content="Explore SEO blog writing, website content, content strategy, social media content, and AI search visibility services tailored to your business." />
      <link rel="canonical" href={`${SITE_URL}/services/`} />
      <meta property="og:site_name" content="TrueReech" />
      <meta property="og:title" content="SEO, AEO, GEO and Marketing Services | TrueReech" />
      <meta property="og:description" content="Explore SEO blog writing, website content, content strategy, social media content, and AI search visibility services tailored to your business." />
      <meta property="og:url" content={`${SITE_URL}/services/`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE_URL}${contentImage}`} />
      <meta property="og:image:alt" content="Writing content in a notebook beside a laptop" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SEO, AEO, GEO and Marketing Services | TrueReech" />
      <meta name="twitter:description" content="Explore SEO blog writing, website content, content strategy, social media content, and AI search visibility services tailored to your business." />
      <meta name="twitter:image" content={`${SITE_URL}${contentImage}`} />
    </Helmet>
    <SiteHeader />
    <main>
      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <div className="wrap max-w-4xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-5 max-w-3xl text-[2.7rem] leading-[1.03] md:text-6xl">Freelance SEO and digital marketing services.</h1>
          <p className="prose-body mt-7 max-w-2xl text-lg">I work with businesses that want clearer messaging, stronger search visibility, useful content, and a more consistent digital presence. Services can be scoped individually or combined into a practical plan.</p>
        </div>
      </section>
      <section className="border-t border-border px-6 py-12 md:px-10 md:py-20">
        <div className="wrap">
          <div className="divide-y divide-border border-y border-border">
            {services.map((service, index) => (
              <article id={service.slug} key={service.slug} className="scroll-mt-24 py-10 md:py-14">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-xs font-semibold text-ink">{String(index + 1).padStart(2, "0")}</p>
                    <h2 className="mt-3 max-w-md text-2xl leading-tight md:text-3xl">{service.title}</h2>
                    <p className="prose-body mt-4 max-w-md">{service.summary}</p>
                    <Link to="/contact/" className="mt-6 inline-block text-sm font-semibold text-ink underline decoration-1 underline-offset-4 hover:text-foreground">Discuss this kind of work &rarr;</Link>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-3">
                    <div>
                      <h3 className="text-sm font-semibold">What it covers</h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">{service.covers.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Who it&rsquo;s for</h3>
                      <p className="prose-body mt-3 text-sm">{service.forWho}</p>
                      <h3 className="mt-6 text-sm font-semibold">Common problems</h3>
                      <p className="prose-body mt-3 text-sm">{service.problems}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">Potential deliverables</h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-surface px-6 py-14 md:px-10 md:py-20">
        <div className="wrap flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">Blogs</p>
            <h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">Practical ideas for better digital visibility.</h2>
            <p className="prose-body mt-4 max-w-2xl">Read useful guides about content, search, communities, and growing a clearer online presence.</p>
          </div>
          <Link to="/blog/reddit-marketing-services/" className="shrink-0 bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-85">Read the latest blog &rarr;</Link>
        </div>
      </section>
      <section className="bg-foreground px-6 py-14 text-background md:px-10 md:py-20">
        <div className="wrap flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-background/60">Start with a conversation</p><h2 className="mt-3 text-3xl md:text-4xl">Tell me what you&rsquo;re working on.</h2></div>
          <Link to="/contact/" className="bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:opacity-85">Let&rsquo;s Talk &rarr;</Link>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
);

export default Services;
