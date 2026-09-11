import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, SOCIALS } from "@/lib/site";

const helpWith = [
  { title: "Search & AI visibility", note: "Making a business easier to find and understand across search and AI answers." },
  { title: "SEO blogs & content", note: "Articles built around what customers actually search for." },
  { title: "Website content", note: "Clearer messaging, service pages and landing page copy." },
  { title: "Social media management", note: "Consistent content that builds familiarity and trust." },
  { title: "Ad creatives", note: "Ad concepts and copy written around the offer and audience." },
  { title: "Course content", note: "Scripts and structured content for courses and live sessions." },
];

type Project = { name: string; desc: string; url: string; fact?: string };

const slides: { label: string; projects: Project[] }[] = [
  {
    label: "Search & Content",
    projects: [
      {
        name: "Feedspace",
        desc: "SEO content and search visibility work.",
        url: "https://www.feedspace.io/",
        fact: "Helped take Domain Rating from 24 to 63 over approximately 1.5 years.",
      },
      { name: "Halo", desc: "Blog and website content.", url: "https://halo.co.in/", fact: "64 blogs and 20+ website pages." },
      { name: "DT7 Agency", desc: "Website and search-focused content.", url: "https://dt7.agency/" },
      { name: "ECE Project Kart", desc: "SEO blog content.", url: "https://eceprojectkart.com/", fact: "40+ SEO blogs." },
      { name: "Tufftron", desc: "Website and blog content.", url: "https://tufftron.com/" },
    ],
  },
  {
    label: "Social Media",
    projects: [
      { name: "Omega Hospitals", desc: "Social content and page management.", url: "https://www.instagram.com/omega.hospitals" },
      { name: "Jegabuilds", desc: "Social content and page management.", url: "https://www.instagram.com/jegabuilds" },
      {
        name: "Dr Varun, Gastroenterologist",
        desc: "Social content and page management.",
        url: "https://www.instagram.com/dr.varun_gastroenterologist",
      },
      { name: "Durga Dairy", desc: "Social content and page management.", url: "https://www.instagram.com/durgadairy_official" },
    ],
  },
  {
    label: "YouTube & Course Content",
    projects: [
      {
        name: "DevTown",
        desc: "Scripts for daily live bootcamps.",
        url: "https://youtube.com/@devtownindia",
        fact: "Created scripts for daily live bootcamps for approximately 2.5 years. Channel has 432K+ YouTube followers.",
      },
      {
        name: "Falcon Reality",
        desc: "Course scripting.",
        url: "https://www.falconreality.in/",
        fact: "Created a 5-module HR course script.",
      },
    ],
  },
  {
    label: "Community & Growth Content",
    projects: [
      {
        name: "Settel",
        desc: "Reddit and community-led content.",
        url: "https://www.settel.io/",
        fact: "Helped acquire the first 100 users through Reddit/community-led content.",
      },
      { name: "Connectstore", desc: "Community and growth content.", url: "https://connectstore.in/" },
      { name: "Feedspace", desc: "Community-led content and distribution.", url: "https://www.feedspace.io/" },
    ],
  },
];

const contentLinks = [
  { name: "Halo blogs", url: "https://halo.co.in/blogs/" },
  { name: "ECE Project Kart blog", url: "https://eceprojectkart.com/blog/" },
  { name: "Dr Varun blogs", url: "https://drvarunlaparoscopy.com/blogs.html" },
  { name: "Sai Bhaskar Hospital blogs", url: "https://saibhaskarhospital.com/blogs.html" },
  { name: "Tufftron blogs", url: "https://tufftron.com/blogs.html" },
  { name: "Feedspace", url: "https://www.feedspace.io/" },
  { name: "Feedspace case study — Mocha Floor", url: "https://www.feedspace.io/case-studies/mocha-floor/" },
  { name: "Feedspace case study — Dodo Payments", url: "https://www.feedspace.io/case-studies/dodo-payments/" },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manisha",
  jobTitle: "Independent digital visibility and content specialist",
  url: SITE_URL,
  brand: { "@type": "Brand", name: "TrueReech" },
  sameAs: [SOCIALS.linkedin, SOCIALS.bluesky],
  address: { "@type": "PostalAddress", addressCountry: "IN" },
};

const Home = () => {
  const [active, setActive] = useState(0);
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Digital Marketing &amp; AI Search Visibility Services | TrueReech</title>
        <meta
          name="description"
          content="TrueReech helps businesses improve Google and AI search visibility through SEO content, website content, social media management and digital visibility strategy."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="Digital Marketing & AI Search Visibility Services | TrueReech" />
        <meta
          property="og:description"
          content="TrueReech helps businesses improve Google and AI search visibility through SEO content, website content, social media management and digital visibility strategy."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="px-6 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
          <div className="wrap max-w-3xl">
            <p className="eyebrow">Digital Visibility &amp; Content</p>
            <h1 className="mt-6 text-[2.75rem] leading-[1.03] md:text-[4.5rem]">
              Get Found.
              <br />
              Get Understood.
              <br />
              Get Chosen.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-snug md:text-xl">
              I help businesses become easier to find, understand and trust online — through search, content, websites
              and social media.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-block bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Let&rsquo;s Talk &rarr;
            </Link>
          </div>
        </section>

        {/* INTRO */}
        <section className="section">
          <div className="wrap grid gap-8 md:grid-cols-[0.35fr_0.65fr]">
            <p className="eyebrow">About</p>
            <div>
              <h2 className="text-2xl leading-snug md:text-[1.9rem]">Hi, I&rsquo;m Manisha.</h2>
              <p className="prose-body mt-4 max-w-xl">
                I work independently with businesses on search visibility, content and digital presence — from SEO blogs
                and websites to social media and AI-search visibility.
              </p>
              <p className="prose-body mt-3 max-w-xl">
                No big agency. No unnecessary layers. You work directly with me.
              </p>
              <div className="mt-6 flex gap-6 text-sm">
                <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-muted-foreground">
                  LinkedIn &nearr;
                </a>
                <a href={SOCIALS.bluesky} target="_blank" rel="noopener noreferrer" className="link-underline text-muted-foreground">
                  Bluesky &nearr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT I CAN HELP WITH */}
        <section className="section">
          <div className="wrap grid gap-8 md:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="eyebrow">What I can help with</p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {helpWith.map((item) => (
                <li key={item.title} className="py-5">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="prose-body mt-1">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="section">
          <div className="wrap">
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.5rem]">A few things I&rsquo;ve worked on.</h2>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {slides.map((slide, i) => (
                <button
                  key={slide.label}
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                  className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    i === active ? "text-foreground underline decoration-1 underline-offset-[6px]" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>

            <div className="mt-8 overflow-hidden border-t border-border">
              <ul className="divide-y divide-border">
                {slides[active].projects.map((p) => (
                  <li key={`${slides[active].label}-${p.name}`} className="py-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-lg">{p.name}</h3>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        &rarr; Visit
                      </a>
                    </div>
                    <p className="prose-body mt-1">{p.desc}</p>
                    {p.fact && <p className="mt-2 text-[13px] font-medium">{p.fact}</p>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <button
                onClick={() => setActive((a) => (a - 1 + slides.length) % slides.length)}
                aria-label="Previous category"
                className="border border-border px-3 py-2 text-sm transition-colors hover:border-foreground"
              >
                &larr;
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % slides.length)}
                aria-label="Next category"
                className="border border-border px-3 py-2 text-sm transition-colors hover:border-foreground"
              >
                &rarr;
              </button>
              <span className="text-xs text-muted-foreground">
                {active + 1} / {slides.length}
              </span>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setShowContent((s) => !s)}
                className="text-sm font-medium link-underline text-muted-foreground"
                aria-expanded={showContent}
              >
                View content work &rarr;
              </button>
              {showContent && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {contentLinks.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.name} &nearr;
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-foreground px-6 py-20 text-background md:px-10 md:py-28">
          <div className="wrap max-w-2xl">
            <h2 className="text-[2rem] leading-[1.1] md:text-[2.75rem]">
              Need help making your business easier to find?
            </h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-background/70 md:text-base">
              Tell me what you&rsquo;re working on and where you need help.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-block bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-85"
            >
              Let&rsquo;s Talk &rarr;
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Home;
