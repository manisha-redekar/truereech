import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, SOCIALS } from "@/lib/site";

const services = [
  { no: "01", title: "AI & Search Visibility", body: "Improve how your business is represented and discovered across Google and AI-powered search through stronger content, website structure, topical relevance and digital signals." },
  { no: "02", title: "SEO Blogs & Content", body: "Search-focused articles built around what your customers actually search for — not content created just to fill a blog." },
  { no: "03", title: "Website Content", body: "Clearer website messaging, service pages, landing-page copy and SEO-friendly page structures that help visitors understand what you offer." },
  { no: "04", title: "Social Media Management", body: "Strategic social content designed to build familiarity, authority and consistent brand presence rather than posting for the sake of posting." },
  { no: "05", title: "Ad Creatives", body: "Scroll-stopping ad concepts, copy and creative direction designed around the audience, offer and objective." },
  { no: "06", title: "Digital Visibility Strategy", body: "A connected strategy across search, content, website, social media and online presence so your marketing efforts work together." },
];

const steps = [
  { no: "01", title: "Understand", body: "Understand your business, audience, competitors and current digital presence." },
  { no: "02", title: "Find the gaps", body: "Identify where customers are searching and where your business is missing opportunities." },
  { no: "03", title: "Build", body: "Create the content, website improvements, social assets and visibility work required." },
  { no: "04", title: "Improve", body: "Review what is working, refine the strategy and continue building visibility." },
];

const principles = [
  { title: "Visibility over vanity", body: "Followers and likes are useful only when they support a real business goal." },
  { title: "Strategy before content", body: "Content should have a reason to exist." },
  { title: "Search + social + website", body: "Your channels should reinforce one another." },
  { title: "Human-first communication", body: "Clear language beats marketing jargon." },
];

const work = [
  { category: "Website content", did: "Website messaging and service page structure.", focus: "Clearer positioning and easier-to-read service pages." },
  { category: "SEO content", did: "Search-focused blog and content planning.", focus: "Content built around real search questions." },
  { category: "Social media", did: "Content direction and ongoing social management.", focus: "Consistent presence and brand familiarity." },
  { category: "Visibility strategy", did: "Search, content and social planned as one system.", focus: "Channels supporting each other instead of competing." },
];

const faqs = [
  {
    q: "What does TrueReech actually do?",
    a: "TrueReech is a digital visibility and content studio. The work covers search visibility, AI search visibility, SEO blogs, website content, social media management, ad creatives and overall digital visibility strategy. In practice that means looking at how people currently find your business, where they are searching, what your website and social profiles communicate, and then building the content and structure needed to make your business easier to find, easier to understand and easier to trust across the places customers look.",
  },
  {
    q: "What is AI search visibility?",
    a: "AI-powered search tools answer questions by drawing on content and signals published across the web. AI search visibility is the work of making your business clearly described, well structured and genuinely useful so those systems can understand what you do, who you serve and where you operate. It involves clear website content, consistent business information, topic depth and credible references. Nobody can guarantee how any AI tool answers a question, but a strong and consistent online presence gives your business a far better chance of being represented accurately.",
  },
  {
    q: "Can you help my business appear more prominently on Google?",
    a: "We can work on the things that genuinely influence Google visibility: page structure, content quality, relevance to the searches your customers actually use, internal linking, clarity of service pages and consistency of your business information. That improves your chances of being found for meaningful searches over time. What we will not do is promise a number one ranking. Search results change constantly and depend on competition, intent and authority, so we focus on steady, compounding progress rather than guarantees.",
  },
  {
    q: "Do you provide SEO blogs and website content?",
    a: "Yes. SEO content and website content are core parts of the work. Blogs are planned around questions your customers already ask, comparisons they make and problems they are trying to solve, so each article has a reason to exist. Website content covers home page messaging, service pages, landing pages and page structure, written so a visitor understands your offer within seconds. Both are written for people first, then structured so search engines and AI tools can interpret them properly.",
  },
  {
    q: "Do you manage social media too?",
    a: "Yes. Social media management is handled as part of your wider visibility, not as an isolated activity. That means a content direction tied to your services and audience, a consistent posting rhythm, and creative that builds familiarity and authority rather than filling a calendar. Social content also supports search and AI discovery, because it is often part of how people research a business after they first hear about it. The focus stays on presence that supports real business goals.",
  },
  {
    q: "How do you decide what content my business needs?",
    a: "It starts with your business, your customers and your competitors. We look at what people search for in your category, what questions come up during sales conversations, what your current website and social profiles already communicate, and where the obvious gaps are. From there we prioritise the content that will do the most useful work first — usually clearer service pages, a small set of high-intent articles and a workable social direction. The plan is then reviewed and refined based on what performs.",
  },
  {
    q: "How do I get started with TrueReech?",
    a: "Start with a free visibility check. Share your website, social profiles and a short note about what you are currently doing online and where you feel stuck. We will review your current digital presence, look at how discoverable your business is across search and social, and come back with the gaps that are worth fixing first. If it makes sense to work together, we agree on a scope and priorities. If it does not, you still leave with a clearer picture of your visibility.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TrueReech",
  url: SITE_URL,
  description:
    "TrueReech is a digital visibility and content studio helping businesses improve Google and AI search visibility through SEO content, website content, social media management and digital visibility strategy.",
  areaServed: "IN",
  sameAs: [SOCIALS.linkedin, SOCIALS.bluesky],
};

const Home = () => (
  <div id="top" className="min-h-screen">
    <Helmet>
      <title>Digital Visibility &amp; AI Search Visibility Services | TrueReech</title>
      <meta
        name="description"
        content="TrueReech helps businesses improve Google and AI search visibility through SEO content, website content, social media management and digital visibility strategy."
      />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta property="og:title" content="Digital Visibility & AI Search Visibility Services | TrueReech" />
      <meta
        property="og:description"
        content="TrueReech helps businesses improve Google and AI search visibility through SEO content, website content, social media management and digital visibility strategy."
      />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Digital Visibility & AI Search Visibility Services | TrueReech" />
      <meta
        name="twitter:description"
        content="TrueReech helps businesses improve Google and AI search visibility through SEO content, website content, social media management and digital visibility strategy."
      />
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <SiteHeader />

    <main>
      {/* SECTION 1 — HERO */}
      <section className="px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
        <div className="wrap max-w-4xl">
          <p className="eyebrow">Digital Visibility &amp; Content Studio</p>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] md:text-6xl lg:text-[4.5rem]">
            Get Found.<br />Get Understood.<br />Get Chosen.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-snug md:text-xl">
            TrueReech helps businesses build a stronger digital presence across Google, AI-powered search, social
            media, websites and content.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Get a Free Visibility Check &rarr;
            </Link>
            <a
              href="#work"
              className="border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground"
            >
              See Our Work &darr;
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">The Problem</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              Being online is not the same as being discoverable.
            </h2>
          </div>
          <div>
            <p className="prose-body">
              A website alone isn&rsquo;t enough. An Instagram account alone isn&rsquo;t enough. Publishing random
              content isn&rsquo;t enough.
            </p>
            <p className="prose-body mt-4">
              People discover businesses through search, social platforms, websites, online communities and
              increasingly AI-powered tools. TrueReech helps connect those pieces — so your business shows up
              wherever your customers are looking.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT */}
      <section id="about" className="section">
        <div className="wrap grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">About TrueReech</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              Good businesses shouldn&rsquo;t be invisible online.
            </h2>
            <p className="prose-body mt-6">
              TrueReech is an independent, hands-on digital visibility and content studio. Not a large agency, and not
              a content factory. The work is done close to the business, with a clear view of what actually needs
              attention first.
            </p>
            <p className="prose-body mt-4">
              The work combines strategy, content, search, social, website messaging and AI-search visibility. These
              are usually treated as separate services. In practice they are the same problem: whether people can find
              your business, understand what it does, and believe it is the right choice.
            </p>
            <p className="prose-body mt-4">
              Plain explanations, realistic timelines and work you can point at. If something is not worth doing for
              your business, we will say so.
            </p>
          </div>

          <aside className="border border-border p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">The Principle</p>
            <p className="mt-6 text-xl font-semibold leading-snug">
              Built with a simple belief: good businesses should not be invisible online.
            </p>
            <div className="mt-8 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <p>Independent studio</p>
              <p>Hands-on, not handed off</p>
              <p>Strategy, content and visibility under one roof</p>
            </div>
          </aside>
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section id="services" className="section">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">What I do</h2>

          <ol className="mt-14 border-t border-border">
            {services.map((s) => (
              <li key={s.no} className="group border-b border-border">
                <Link to="/contact" className="flex items-start gap-6 py-7 transition-colors hover:bg-secondary md:gap-10 md:py-8">
                  <span className="text-xs text-muted-foreground pt-1">{s.no}</span>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl">{s.title}</h3>
                    <p className="prose-body mt-2 max-w-2xl">{s.body}</p>
                  </div>
                  <span className="pt-1 text-muted-foreground transition-colors group-hover:text-foreground" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight md:text-[2.6rem]">
            Simple strategy. Consistent execution.
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.no} className="border-t border-foreground pt-5">
                <p className="text-xs text-muted-foreground">{step.no} —</p>
                <h3 className="mt-2 text-lg">{step.title}</h3>
                <p className="prose-body mt-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 6 — WHY TRUEREECH */}
      <section className="section bg-foreground text-background">
        <div className="wrap">
          <p className="eyebrow text-background/50">Why TrueReech</p>
          <h2 className="mt-5 max-w-3xl text-3xl leading-tight md:text-[2.8rem]">
            Not another agency that just keeps your feed busy.
          </h2>
          <div className="mt-14 grid gap-px sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="py-8 md:py-10">
                <p className="text-xs text-background/40">{`0${i + 1}`}</p>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-background/60">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — WORK */}
      <section id="work" className="section">
        <div className="wrap">
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">Selected work</h2>
          <div className="mt-14 border-t border-border">
            {work.map((item, i) => (
              <article key={i} className="border-b border-border py-7 md:py-8">
                <div className="grid gap-2 md:grid-cols-[0.3fr_0.35fr_0.35fr] md:gap-8">
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.category}</p>
                  <p className="text-sm font-medium">{item.did}</p>
                  <p className="text-sm text-muted-foreground">{item.focus}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="prose-body mt-8 max-w-xl">
            Case studies with full details will be added as projects are completed. No invented clients, no invented
            results.
          </p>
        </div>
      </section>

      {/* SECTION 8 — SEO AUTHORITY CONTENT */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">
            What does digital visibility actually mean?
          </h2>
          <p className="prose-body mt-8">
            Digital visibility is how easily people can find your business when they are looking for what you offer —
            and how well they understand it once they do. It is broader than rankings. It covers your website, your
            search presence, your social profiles, the content you publish and the information about your business
            that exists across the internet. If someone searches for a service you provide and your business does not
            appear, or appears without a clear explanation of what it does, that is a visibility problem rather than an
            advertising problem.
          </p>

          <h3 className="mt-12 text-xl">Why Google visibility still matters</h3>
          <p className="prose-body mt-3">
            Search remains the moment of highest intent. Someone typing &ldquo;accountant for small business&rdquo; or
            &ldquo;interior designer near me&rdquo; is already looking to act. Google visibility depends on relevance,
            clarity and credibility: pages that answer specific questions, service pages written in the language
            customers use, consistent business information, and a site structure search engines can read without
            guessing. Most businesses lose ground here not because of competition, but because their pages never
            clearly state what they do, for whom, and where.
          </p>

          <h3 className="mt-10 text-xl">Why AI-powered search is changing discovery</h3>
          <p className="prose-body mt-3">
            A growing share of research now starts with a question rather than a keyword. People ask AI-powered tools
            to compare options, summarise choices and recommend providers. Those systems build their answers from
            content and signals published across the web — websites, articles, discussions, reviews and profiles. AI
            search visibility is therefore not a trick. It is the result of publishing clear, accurate, well-structured
            content that describes your business in a way a machine can interpret and a person can trust. Businesses
            with thin or vague content are simply harder to summarise, so they are mentioned less often.
          </p>

          <h3 className="mt-10 text-xl">Why website content carries most of the weight</h3>
          <p className="prose-body mt-3">
            Your website is the only channel you fully control, and it is the reference point everything else checks
            against. Strong website content explains your services in plain language, answers the questions that come
            up before buying, and removes the doubt that stops enquiries. It also gives search engines and AI systems
            the raw material they need. Vague headlines, missing service detail and pages written for the founder
            rather than the customer are the most common reasons a business feels invisible despite having a site.
          </p>

          <h3 className="mt-10 text-xl">Why SEO blogs and content marketing compound</h3>
          <p className="prose-body mt-3">
            SEO blogs work when they are built around real questions: how a service works, what it costs, how options
            compare, what to look for before choosing. Each useful article widens the range of searches your business
            can answer and gives you something genuinely worth sharing. Content marketing is slow at first and then
            compounds, because published work keeps earning attention long after it goes live. Content created only to
            fill a calendar does not compound — it just accumulates.
          </p>

          <h3 className="mt-10 text-xl">Why social media contributes to trust</h3>
          <p className="prose-body mt-3">
            Social media management rarely closes a sale on its own, but it is often the second thing someone checks.
            An active, coherent profile signals that a business is real, current and confident. It also builds
            familiarity over time, so your name is recognised when it appears in a search result. Treated as part of a
            wider plan, social content reinforces the same messages as your website instead of telling a different
            story.
          </p>

          <h3 className="mt-10 text-xl">Why one channel is never enough</h3>
          <p className="prose-body mt-3">
            Search visibility, website content and social presence each answer a different part of the same journey:
            being found, being understood and being believed. Relying on a single channel leaves the other two
            unanswered. Digital marketing for businesses works best when these efforts point in one direction — the
            same positioning, the same language, the same proof — so that whichever route a customer takes, they
            arrive at a business that makes sense. That consistency is the real work behind online visibility.
          </p>
        </div>
      </section>

      {/* SECTION 9 — GOOGLE + AI SEARCH */}
      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">
            The way people discover businesses is changing.
          </h2>
          <div>
            <p className="prose-body">People increasingly move between several places before they decide:</p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {["Google", "Social platforms", "Websites", "Online communities", "AI-powered search"].map((item) => (
                <li key={item} className="flex items-center gap-3 py-3 text-sm font-medium">
                  <span className="text-muted-foreground" aria-hidden="true">&rarr;</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="prose-body mt-6">
              The objective is not to &ldquo;hack ChatGPT.&rdquo; It is to build a strong, trustworthy, useful online
              presence that can be understood across modern discovery channels — whichever one your customer happens
              to use.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section id="faq" className="section">
        <div className="wrap grid gap-12 md:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.4rem]">Questions, answered plainly.</h2>
          </div>
          <div className="border-t border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-border py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold">
                  <h3 className="text-base font-semibold">{f.q}</h3>
                  <span
                    className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="prose-body mt-4 max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <section className="bg-foreground px-6 py-24 text-background md:px-10 md:py-32">
        <div className="wrap max-w-3xl">
          <h2 className="text-[2.25rem] leading-[1.08] md:text-5xl">
            Your business deserves to be easier to find.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-background/70 md:text-base">
            Let&rsquo;s look at your current digital presence, identify the gaps and figure out what is actually worth
            improving.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-85"
            >
              Get a Free Visibility Check &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Home;
