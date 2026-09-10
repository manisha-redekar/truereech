import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, SOCIALS } from "@/lib/site";

const helpWith = [
  "AI & Google visibility",
  "SEO blogs & content",
  "Website content",
  "Social media management",
  "Ad creatives",
  "Digital content strategy",
];

const work = [
  { category: "Website content", did: "Website messaging and service page structure.", focus: "Clearer positioning and easier-to-read service pages." },
  { category: "SEO content", did: "Search-focused blog and content planning.", focus: "Content built around real search questions." },
  { category: "Social media", did: "Content direction and ongoing social management.", focus: "Consistent presence and brand familiarity." },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manisha",
  url: SITE_URL,
  description:
    "Independent digital visibility and content freelancer helping businesses improve how they are found, understood and presented online.",
  sameAs: [SOCIALS.linkedin, SOCIALS.bluesky],
};

const Home = () => (
  <div id="top" className="min-h-screen">
    <Helmet>
      <title>Manisha — Digital Visibility &amp; Content Freelancer | TrueReech</title>
      <meta
        name="description"
        content="I help businesses improve how they are found, understood and presented online — through search visibility, useful content, websites and social media."
      />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta property="og:title" content="Manisha — Digital Visibility & Content Freelancer | TrueReech" />
      <meta
        property="og:description"
        content="I help businesses improve how they are found, understood and presented online — through search visibility, useful content, websites and social media."
      />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Manisha — Digital Visibility & Content Freelancer | TrueReech" />
      <meta
        name="twitter:description"
        content="I help businesses improve how they are found, understood and presented online — through search visibility, useful content, websites and social media."
      />
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>

    <SiteHeader />

    <main>
      {/* 1 — HERO */}
      <section className="px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div className="wrap max-w-4xl">
          <p className="eyebrow">Digital Visibility &bull; Content &bull; Search</p>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] md:text-6xl lg:text-[4.5rem]">
            Get Found.<br />Get Understood.<br />Get Chosen.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-snug md:text-xl">
            I help businesses improve how they are found, understood and presented online — through search
            visibility, useful content, websites and social media.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Let&rsquo;s Talk &rarr;
            </Link>
            <a
              href="#work"
              className="border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground"
            >
              See my work &darr;
            </a>
          </div>
        </div>
      </section>

      {/* 2 — SHORT INTRODUCTION */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <p className="eyebrow">Hello, I&rsquo;m Manisha.</p>
          <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
            I help businesses build a stronger presence online.
          </h2>
          <p className="prose-body mt-6">
            I work with businesses that know they need to be more visible online, but don&rsquo;t want to deal with a
            large agency. I work directly with you on the content, search visibility and digital presence that
            actually matter to your business.
          </p>
        </div>
      </section>

      {/* 3 — WHAT I CAN HELP WITH */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">What I can help with</h2>
          <ul className="mt-10 border-t border-border">
            {helpWith.map((item, i) => (
              <li key={item} className="flex items-center gap-6 border-b border-border py-5">
                <span className="text-xs text-muted-foreground">{`0${i + 1}`}</span>
                <span className="text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — SELECTED WORK */}
      <section id="work" className="section">
        <div className="wrap max-w-3xl">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">A few things I&rsquo;ve worked on.</h2>
          <div className="mt-10 border-t border-border">
            {work.map((item, i) => (
              <article key={i} className="border-b border-border py-7">
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.category}</p>
                <p className="mt-3 text-sm font-medium">{item.did}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.focus}</p>
              </article>
            ))}
          </div>
          <p className="prose-body mt-8">
            More case studies will be added as projects are completed.
          </p>
        </div>
      </section>

      {/* 5 — FINAL CTA */}
      <section className="bg-foreground px-6 py-24 text-background md:px-10 md:py-32">
        <div className="wrap max-w-3xl">
          <h2 className="text-[2.25rem] leading-[1.08] md:text-5xl">
            Need help making your business easier to find?
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-background/70 md:text-base">
            Tell me what you&rsquo;re working on and where you need help. I&rsquo;ll take a look and get back to you.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-85"
            >
              Let&rsquo;s Talk &rarr;
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 border-t border-background/20 pt-8 text-sm">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 transition-colors hover:text-background"
            >
              LinkedIn &nearr;
            </a>
            <a
              href={SOCIALS.bluesky}
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 transition-colors hover:text-background"
            >
              Bluesky &nearr;
            </a>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Home;
