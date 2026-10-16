import { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, SOCIALS } from "@/lib/site";

const helpWith = [
  { title: "Search Engine Optimisation (SEO)", note: "Clearer technical and on-page foundations for organic visibility." },
  { title: "Content strategy and SEO blog writing", note: "Useful content built around real audience needs and search intent." },
  { title: "AI search visibility and AEO", note: "Structured, useful answers that are easier for people and systems to understand." },
  { title: "Generative Engine Optimisation", note: "Consistent business context and source-led content for changing discovery habits." },
  { title: "Website content and on-page SEO", note: "Clearer messaging that helps visitors understand your business." },
  { title: "Social media content and management", note: "Relevant content aligned with the business, audience, and agreed scope." },
]

type Project = { name: string; category: string; desc: string; url: string };

const projectWordmarks: Record<string, string> = {
  Feedspace: "feedspace",
  Halo: "halo",
  DevTown: "devtown",
  Settel: "settel",
};

const projects: Project[] = [
  {
    name: "Feedspace",
    category: "SEO & Content",
    desc: "Helped take Domain Rating from 24 to 63 over approximately 1.5 years. 50+ blogs and 30+ case studies were part of the wider content work.",
    url: "https://www.feedspace.io/",
  },
  { name: "Halo", category: "SEO Content", desc: "64 blogs and 20+ website pages.", url: "https://halo.co.in/" },
  {
    name: "DevTown",
    category: "YouTube & Content",
    desc: "Created scripts for daily live bootcamps for approximately 2.5 years. 432K+ YouTube followers.",
    url: "https://www.devtown.in/",
  },
  {
    name: "Settel",
    category: "Community & Growth",
    desc: "Helped acquire the first 100 users through Reddit/community-led content.",
    url: "https://www.settel.io/",
  },
  {
    name: "DT7 Agency",
    category: "SEO & Content",
    desc: "Content work for a marketing agency serving businesses in Andhra Pradesh.",
    url: "https://dt7.agency/",
  },
  {
    name: "ECE Project Kart",
    category: "SEO & Content",
    desc: "Created 40+ SEO blogs for a final-year project business.",
    url: "https://eceprojectkart.com/",
  },
  {
    name: "Tufftron",
    category: "SEO & Content",
    desc: "Blog and content work for a glass manufacturing business.",
    url: "https://tufftron.com/",
  },
  {
    name: "Omega Hospitals",
    category: "Social Media",
    desc: "Telugu + English focused social media content.",
    url: "https://www.instagram.com/omega.hospitals",
  },
  {
    name: "Jegabuilds",
    category: "Social Media",
    desc: "Social media and competition-focused content.",
    url: "https://www.instagram.com/jegabuilds",
  },
  {
    name: "Dr Varun, Gastroenterologist",
    category: "Social Media",
    desc: "Regular healthcare awareness content.",
    url: "https://www.instagram.com/dr.varun_gastroenterologist",
  },
  {
    name: "Durga Dairy",
    category: "Social Media",
    desc: "Regular social media content for the brand.",
    url: "https://www.instagram.com/durgadairy_official",
  },
  {
    name: "Falcon Reality",
    category: "Course Content",
    desc: "Created a 5-module HR course script for an AI automation company based in the Netherlands.",
    url: "https://www.falconreality.in/",
  },
  {
    name: "Connectstore",
    category: "Community & Growth",
    desc: "Competition-focused content for a creator/influencer CRM product.",
    url: "https://connectstore.in/",
  },
  {
    name: "Sai Bhaskar Hospital",
    category: "Content",
    desc: "Website and blog content work.",
    url: "https://saibhaskarhospital.com/",
  },
  {
    name: "Anumy Baby",
    category: "Content",
    desc: "Content work for a pregnancy-focused hospital brand.",
    url: "https://anumybaby.com/",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manisha",
  jobTitle: "Independent digital visibility and content freelancer",
  url: SITE_URL,
  brand: { "@type": "Brand", name: "TrueReech" },
  sameAs: [SOCIALS.linkedin, SOCIALS.bluesky],
  address: { "@type": "PostalAddress", addressCountry: "IN" },
};

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.8h3.6v10.7H3.4V9.8Zm5.8 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v5.5H17v-4.9c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5H9.2V9.8Z" />
  </svg>
);

const BlueskyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M12 10.5C10.9 8.2 7.9 4 4.7 4 1.6 4 2 7.8 2.3 9.6c.3 1.7 1.3 2.8 3.2 3.1-1.9.3-2.9 1.4-3.2 3.1C2 17.7 1.6 21.5 4.7 21.5c3.2 0 6.2-4.2 7.3-6.5 1.1 2.3 4.1 6.5 7.3 6.5 3.1 0 2.7-3.8 2.4-5.7-.3-1.7-1.3-2.8-3.2-3.1 1.9-.3 2.9-1.4 3.2-3.1.3-1.8.7-5.6-2.4-5.6-3.2 0-6.2 4.2-7.3 6.5Z" />
  </svg>
);

const SocialLinks = () => (
  <div className="flex items-center gap-4 text-sm">
    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-ink">
      <LinkedInIcon />
      LinkedIn
    </a>
    <span className="text-border">|</span>
    <a href={SOCIALS.bluesky} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-ink">
      <BlueskyIcon />
      Bluesky
    </a>
  </div>
);

const Home = () => {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Manisha — Digital Visibility, Content &amp; Search | TrueReech</title>
        <meta
          name="description"
          content="Manisha helps businesses become easier to find, understand and trust online through search visibility, useful content, websites and social media."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="Manisha — Digital Visibility, Content & Search | TrueReech" />
        <meta
          property="og:description"
          content="Manisha helps businesses become easier to find, understand and trust online through search visibility, useful content, websites and social media."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>

      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="px-6 pb-12 pt-12 md:px-10 md:pb-20 md:pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Digital Visibility • Content • Search</p>
              <h1 className="mt-5 text-[2.6rem] leading-[1.04] md:text-[3.9rem]">
                Get Found.
                <br />
                Get Understood.
                <br />
                Get Chosen.
              </h1>
              <p className="prose-body mt-6 max-w-md text-foreground/80">
                I help businesses become easier to find, understand and trust online, through search visibility,
                useful content, websites and social media.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link to="/contact/" className="bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85">
                  Let&rsquo;s Talk &rarr;
                </Link>
                <Link to="/work/" className="text-sm font-semibold text-ink underline decoration-1 underline-offset-4 hover:text-foreground">
                  Explore my work &rarr;
                </Link>
              </div>
              <div className="mt-7">
                <SocialLinks />
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/truereech-hero-illustration.png"
                alt="Editorial illustration of a woman working at a laptop beside a search interface, books and a plant"
                width={1024}
                height={832}
                className="mx-auto h-auto w-full max-w-[520px]"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section">
          <div className="wrap grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow">About</p>
              <h2 className="mt-4 text-2xl leading-snug md:text-[2rem]">Hi, I&rsquo;m Manisha.</h2>
              <p className="prose-body mt-4 max-w-xl">
                I work independently with businesses that want a stronger online presence. From SEO blogs and website
                content to social media and AI-search visibility, I work directly with you, without unnecessary layers.
              </p>
              <p className="prose-body mt-3 max-w-xl">
                No big teams. No unnecessary layers. Just focused work that helps you grow.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5">
                <SocialLinks />
                <Link to="/about/" className="text-sm font-semibold text-ink underline decoration-1 underline-offset-4 hover:text-foreground">More about me &rarr;</Link>
              </div>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-10">
              <img
                src="/images/truereech-about-illustration.png"
                alt="Editorial illustration of practical strategies, useful content and real opportunities"
                width={1152}
                height={576}
                loading="lazy"
                className="h-auto w-full max-w-[420px]"
              />
            </div>
          </div>
        </section>

        {/* WHAT I CAN HELP WITH */}
        <section className="section bg-surface">
          <div className="wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow">What I can help with</p>
              <h2 className="mt-4 text-[1.75rem] leading-tight md:text-[2.25rem]">
                Content and visibility
                <br />
                that works together.
              </h2>
              <Link to="/services/" className="mt-4 inline-block text-sm font-semibold text-ink underline decoration-1 underline-offset-4 hover:text-foreground">See all services &rarr;</Link>
              <div className="mt-8">
                <img
                  src="/images/truereech-search-opportunities-illustration.png"
                  alt="Editorial illustration of a search results page turning into real opportunities"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-auto w-full max-w-[420px]"
                />
              </div>
            </div>

            <ol className="divide-y divide-border border-y border-border">
              {helpWith.map((item, i) => (
                <li key={item.title} className="flex gap-5 py-5">
                  <span className="pt-0.5 text-xs font-semibold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[17px]">{item.title}</h3>
                    <p className="prose-body mt-1">{item.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section id="work" className="section">
          <div className="wrap">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="eyebrow">Selected Work</p>
                <h2 className="mt-4 text-[1.75rem] leading-tight md:text-[2.25rem]">
                  A few things I&rsquo;ve worked on.
                </h2>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-sm text-muted-foreground">Real projects. Real work. Real opportunities.</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => scrollBy(-1)}
                    aria-label="Previous projects"
                    className="border border-border px-3 py-2 text-sm transition-colors hover:border-foreground"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={() => scrollBy(1)}
                    aria-label="Next projects"
                    className="border border-border px-3 py-2 text-sm transition-colors hover:border-foreground"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>

            <ul
              ref={trackRef}
              className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {projects.map((p) => (
                <li
                  key={p.name}
                  className="flex min-h-[190px] w-[78%] shrink-0 snap-start flex-col rounded-lg border border-border bg-card p-5 shadow-[0_4px_18px_rgba(30,30,30,0.05)] sm:w-[46%] lg:w-[calc((100%-3.75rem)/4)]"
                >
                  <div className="flex min-h-7 items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/30 text-[11px] font-bold text-ink" aria-hidden="true">
                      {p.name.charAt(0)}
                    </span>
                    <h3 className="text-[17px] font-extrabold tracking-[-0.03em] text-ink">
                      {projectWordmarks[p.name] ?? p.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">{p.category}</p>
                  <p className="prose-body mt-2 text-[14px]">{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Visit site &rarr;
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* THOUGHTFUL APPROACH */}
        <section className="section bg-surface">
          <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">How I work</p>
              <h2 className="mt-4 max-w-md text-[1.75rem] leading-tight md:text-[2.25rem]">A more thoughtful approach to digital growth.</h2>
              <p className="prose-body mt-5 max-w-md">Good digital marketing starts with understanding what your audience needs, how they search, and what makes your business worth choosing.</p>
              <Link to="/about/" className="mt-5 inline-block text-sm font-semibold text-ink underline decoration-1 underline-offset-4 hover:text-foreground">More about my approach &rarr;</Link>
            </div>
            <div>
              <p className="prose-body max-w-2xl">My approach connects research, content, technical foundations, and consistent execution instead of treating every channel as a separate task.</p>
              <ol className="mt-7 grid gap-5 border-t border-border pt-5 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  ["01", "Understand", "Learn about the business, audience, goals, and existing presence."],
                  ["02", "Research", "Review search intent, competitors, content gaps, and opportunities."],
                  ["03", "Plan", "Prioritise actions according to impact, effort, and resources."],
                  ["04", "Execute", "Implement agreed SEO, content, and marketing activities."],
                  ["05", "Review", "Measure available data and refine the approach."],
                ].map(([number, title, description]) => (
                  <li key={number}>
                    <p className="text-xs font-semibold text-ink">{number}</p>
                    <h3 className="mt-2 text-sm">{title}</h3>
                    <p className="prose-body mt-2 text-sm">{description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-foreground px-6 py-14 text-background md:px-10 md:py-20">
          <div className="wrap grid items-center gap-8 md:grid-cols-[1fr_1fr_auto]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-background/60">
                Let&rsquo;s work together
              </p>
              <h2 className="mt-4 text-[1.9rem] leading-[1.12] md:text-[2.4rem]">
                Need help making your
                <br />
                business easier to find?
              </h2>
            </div>
            <div className="md:border-l md:border-background/20 md:pl-8">
              <p className="text-[15px] leading-[1.7] text-background/70">
                Tell me what you&rsquo;re working on and where you need help.
                <br />
                I&rsquo;ll take a look and get back to you.
              </p>
              <Link
                to="/contact/"
                className="mt-6 inline-block bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-85"
              >
                Let&rsquo;s Talk &rarr;
              </Link>
            </div>
            <img
              src="/images/truereech-ideas-content-growth-illustration.png"
              alt="Handwritten editorial note reading Ideas, Content, Growth"
              width={384}
              height={320}
              loading="lazy"
              className="h-auto w-full max-w-[150px] justify-self-end md:max-w-[170px]"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Home;
