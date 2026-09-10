import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, SOCIALS } from "@/lib/site";

const services = [
  {
    no: "01",
    title: "AI & Search Visibility",
    body: "Improve how your business is represented and discovered across Google and AI-powered search experiences through stronger content, website structure, topical relevance and digital signals.",
    feature: true,
  },
  {
    no: "02",
    title: "SEO Blogs & Content",
    body: "Search-focused articles and content built around what your customers actually search for — not content created just to fill a blog.",
    feature: true,
  },
  {
    no: "03",
    title: "Website Content",
    body: "Clearer website messaging, service content, landing-page copy and SEO-friendly page structures that help visitors understand what you offer.",
  },
  {
    no: "04",
    title: "Social Media Management",
    body: "Strategic social content designed to build familiarity, authority and consistent brand presence rather than posting simply for the sake of posting.",
  },
  {
    no: "05",
    title: "Ad Creatives & Campaign Content",
    body: "Scroll-stopping ad concepts, copy and creative direction designed around the audience, offer and objective.",
  },
  {
    no: "06",
    title: "Digital Visibility Strategy",
    body: "A connected strategy across search, content, website, social media and online presence so your marketing efforts work together instead of operating separately.",
  },
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
  { project: "Case Study Coming Soon", category: "Website content", did: "Website messaging and service page structure.", focus: "Clearer positioning and easier-to-read service pages." },
  { project: "Case Study Coming Soon", category: "SEO content", did: "Search-focused blog and content planning.", focus: "Content built around real search questions." },
  { project: "Case Study Coming Soon", category: "Social media", did: "Content direction and ongoing social management.", focus: "Consistent presence and brand familiarity." },
  { project: "Case Study Coming Soon", category: "Visibility strategy", did: "Search, content and social planned as one system.", focus: "Channels supporting each other instead of competing." },
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

const strip = ["Google Search", "AI Search", "Website Content", "Social Media", "SEO Content", "Digital Presence"];
const chain = ["Google", "Website", "Social", "Content", "AI Search"];
const journey = ["Invisible", "Discoverable", "Trusted", "Chosen"];

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
      <meta name="twitter:title" content="Digital Marketing & AI Search Visibility Services | TrueReech" />
      <meta
        name="twitter:description"
        content="TrueReech helps businesses improve Google and AI search visibility through SEO content, website content, social media management and digital visibility strategy."
      />
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <SiteHeader />

    <main>
      {/* HERO */}
      <section className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Digital Visibility &amp; Content Studio</p>
            <h1 className="mt-6 text-[2.5rem] leading-[1.05] md:text-6xl lg:text-[4.25rem]">
              Get Found. Get Understood. Get Chosen.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-snug md:text-xl">
              TrueReech helps businesses build a stronger digital presence across Google, AI-powered search, social
              media, websites and content.
            </p>
            <p className="prose-body mt-5 max-w-xl">
              Your customers are discovering businesses in more places than ever — search engines, social platforms,
              websites, communities and AI-powered tools. TrueReech brings these pieces together into one practical
              visibility strategy.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                Get a Free Visibility Check &rarr;
              </Link>
              <a href="#work" className="border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground">
                View Our Work &darr;
              </a>
            </div>
          </div>

          <div className="border border-border p-6 md:p-8">
            <p className="eyebrow">How discovery happens</p>
            <ol className="mt-6 space-y-4">
              {chain.map((node, i) => (
                <li key={node} className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" aria-hidden="true" />
                  <span className="text-sm font-semibold">{node}</span>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                  <span className="text-xs text-muted-foreground">{`0${i + 1}`}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 border-t border-border pt-6">
              <div className="flex items-center gap-3 border border-border px-4 py-3">
                <span className="text-muted-foreground" aria-hidden="true">◌</span>
                <span className="text-sm text-muted-foreground">best &lsquo;your service&rsquo; near me</span>
              </div>
              <p className="prose-body mt-4">
                One question. Many places your business could appear — or be missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="border-y border-border bg-secondary px-6 py-6 md:px-10">
        <ul className="wrap flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {strip.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* PROBLEM */}
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
              You can have a website. You can post on Instagram. You can publish blogs. And still be difficult to find
              when someone is actually looking for what you offer.
            </p>
            <p className="prose-body mt-4">
              Customers may discover your business through Google, social media, websites, online communities or
              AI-powered search. TrueReech focuses on the complete discovery journey — not just one channel.
            </p>
            <ol className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
              {journey.map((stage, i) => (
                <li key={stage} className="bg-background px-4 py-6">
                  <p className="text-xs text-muted-foreground">{`0${i + 1}`}</p>
                  <p className="mt-2 text-sm font-semibold">{stage}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="wrap grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">About TrueReech</p>
            <h2 className="mt-5 text-3xl leading-tight md:text-[2.6rem]">
              A practical visibility partner for businesses that want to be easier to find.
            </h2>
            <p className="prose-body mt-6">
              TrueReech is an independent, hands-on digital visibility studio. Not a large agency, and not a content
              factory. The work is done close to the business, with a clear view of what actually needs attention first.
            </p>
            <p className="prose-body mt-4">
              The work combines strategy, content, search, social, website messaging and AI-search visibility. These are
              usually treated as separate services. In practice they are the same problem: whether people can find your
              business, understand what it does, and believe it is the right choice.
            </p>
            <p className="prose-body mt-4">
              We prefer plain explanations, realistic timelines and work you can point at. If something is not worth
              doing for your business, we will say so.
            </p>
          </div>

          <aside className="border border-border p-6 md:p-8">
            <div
              className="flex h-52 items-center justify-center border border-dashed border-border text-xs uppercase tracking-[0.18em] text-muted-foreground"
              aria-hidden="true"
            >
              Founder photograph
            </div>
            <p className="mt-6 text-base font-semibold leading-snug">
              Built with a simple belief: good businesses should not be invisible online.
            </p>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="wrap">
          <p className="eyebrow">What I Do</p>
          <h2 className="mt-5 max-w-3xl text-3xl leading-tight md:text-[2.6rem]">
            Everything your digital presence needs to become more useful, visible and convincing.
          </h2>

          <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.no}
                className={`group p-7 transition-colors md:p-9 ${
                  s.feature ? "bg-foreground text-background md:col-span-1" : "bg-background hover:bg-secondary"
                }`}
              >
                <p className={`text-xs ${s.feature ? "text-background/60" : "text-muted-foreground"}`}>{s.no}</p>
                <h3 className={`mt-4 ${s.feature ? "text-2xl md:text-[1.75rem]" : "text-xl"}`}>{s.title}</h3>
                <p className={`mt-3 text-[15px] leading-[1.7] ${s.feature ? "text-background/75" : "text-muted-foreground"}`}>
                  {s.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Get a Free Visibility Check &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">How We Work</p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight md:text-[2.6rem]">
            Simple strategy. Consistent execution. Measurable progress.
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

      {/* DIFFERENT */}
      <section className="section bg-foreground text-background">
        <div className="wrap">
          <h2 className="max-w-3xl text-3xl leading-tight md:text-[2.8rem]">
            Not another agency that just keeps your feed busy.
          </h2>
          <div className="mt-14 grid gap-px bg-background/20 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="bg-foreground p-7 md:p-9">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-background/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section">
        <div className="wrap">
          <p className="eyebrow">Selected Work</p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight md:text-[2.6rem]">
            Work that turns strategy into something people can see.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {work.map((item, i) => (
              <article key={i} className="border border-border transition-colors hover:border-foreground">
                <div
                  className="flex h-44 items-center justify-center border-b border-border bg-secondary text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  aria-hidden="true"
                >
                  {item.category}
                </div>
                <div className="p-6">
                  <h3 className="text-lg">{item.project}</h3>
                  <p className="prose-body mt-3">{item.did}</p>
                  <p className="mt-3 text-sm font-medium">{item.focus}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              Get a Free Visibility Check &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-[1fr_1fr]">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">
            Built for businesses that are ready to be more visible.
          </h2>
          <div>
            <ul className="grid gap-px bg-border sm:grid-cols-2">
              {[
                "Growing businesses",
                "Professional services",
                "Local businesses",
                "B2B companies",
                "Consultants & experts",
                "Service-based brands",
                "Businesses investing in long-term visibility",
              ].map((item) => (
                <li key={item} className="bg-background px-4 py-4 text-sm font-medium">
                  {item}
                </li>
              ))}
            </ul>
            <p className="prose-body mt-8">
              Not looking for a one-off &ldquo;just post on Instagram&rdquo; solution? TrueReech is built for businesses
              that want a more complete digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* SEO AUTHORITY CONTENT */}
      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">What does digital visibility actually mean?</h2>
          <p className="prose-body mt-8">
            Digital visibility is how easily people can find your business when they are looking for what you offer —
            and how well they understand it once they do. It is broader than rankings. It covers your website, your
            search presence, your social profiles, the content you publish and the information about your business that
            exists across the internet. If someone searches for a service you provide and your business does not appear,
            or appears without a clear explanation of what it does, that is a visibility problem rather than a
            advertising problem.
          </p>

          <h3 className="mt-12 text-xl">Why Google visibility still matters</h3>
          <p className="prose-body mt-3">
            Search remains the moment of highest intent. Someone typing &ldquo;accountant for small business&rdquo; or
            &ldquo;interior designer near me&rdquo; is already looking to act. Google visibility depends on relevance,
            clarity and credibility: pages that answer specific questions, service pages written in the language
            customers use, consistent business information, and a site structure search engines can read without
            guessing. Most businesses lose ground here not because of competition, but because their pages never clearly
            state what they do, for whom, and where.
          </p>

          <h3 className="mt-10 text-xl">Why AI-powered search is changing discovery</h3>
          <p className="prose-body mt-3">
            A growing share of research now starts with a question rather than a keyword. People ask AI-powered tools to
            compare options, summarise choices and recommend providers. Those systems build their answers from content
            and signals published across the web — websites, articles, discussions, reviews and profiles. AI search
            visibility is therefore not a trick. It is the result of publishing clear, accurate, well-structured content
            that describes your business in a way a machine can interpret and a person can trust. Businesses with thin
            or vague content are simply harder to summarise, so they are mentioned less often.
          </p>

          <h3 className="mt-10 text-xl">Why website content carries most of the weight</h3>
          <p className="prose-body mt-3">
            Your website is the only channel you fully control, and it is the reference point everything else checks
            against. Strong website content explains your services in plain language, answers the questions that come up
            before buying, and removes the doubt that stops enquiries. It also gives search engines and AI systems the
            raw material they need. Vague headlines, missing service detail and pages written for the founder rather than
            the customer are the most common reasons a business feels invisible despite having a site.
          </p>

          <h3 className="mt-10 text-xl">Why SEO blogs and content marketing compound</h3>
          <p className="prose-body mt-3">
            SEO blogs work when they are built around real questions: how a service works, what it costs, how options
            compare, what to look for before choosing. Each useful article widens the range of searches your business can
            answer and gives you something genuinely worth sharing. Content marketing is slow at first and then
            compounds, because published work keeps earning attention long after it goes live. Content created only to
            fill a calendar does not compound — it just accumulates.
          </p>

          <h3 className="mt-10 text-xl">Why social media contributes to trust</h3>
          <p className="prose-body mt-3">
            Social media management rarely closes a sale on its own, but it is often the second thing someone checks.
            An active, coherent profile signals that a business is real, current and confident. It also builds
            familiarity over time, so your name is recognised when it appears in a search result. Treated as part of a
            wider plan, social content reinforces the same messages as your website instead of telling a different story.
          </p>

          <h3 className="mt-10 text-xl">Why one channel is never enough</h3>
          <p className="prose-body mt-3">
            Search visibility, website content and social presence each answer a different part of the same journey:
            being found, being understood and being believed. Relying on a single channel leaves the other two
            unanswered. Digital marketing for businesses works best when these efforts point in one direction — the same
            positioning, the same language, the same proof — so that whichever route a customer takes, they arrive at a
            business that makes sense. That consistency is the real work behind online visibility.
          </p>
        </div>
      </section>

      {/* GOOGLE + AI */}
      <section className="section">
        <div className="wrap grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <h2 className="text-3xl leading-tight md:text-[2.6rem]">The way people discover businesses is changing.</h2>
          <div>
            <p className="prose-body">People increasingly move between several places before they decide:</p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {["Google", "Google Maps", "Social platforms", "Reddit and forums", "Websites", "AI-powered search and recommendation tools"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 py-3 text-sm font-medium">
                    <span className="text-muted-foreground" aria-hidden="true">→</span>
                    {item}
                  </li>
                ),
              )}
            </ul>
            <p className="prose-body mt-6">
              The objective is not to &ldquo;hack ChatGPT.&rdquo; It is to build a strong, trustworthy, useful online
              presence that can be understood across modern discovery channels — whichever one your customer happens to
              use.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                  <span className="mt-0.5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="prose-body mt-4 max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-foreground px-6 py-24 text-background md:px-10 md:py-32">
        <div className="wrap max-w-3xl">
          <h2 className="text-[2.25rem] leading-[1.08] md:text-5xl">Your business deserves to be easier to find.</h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-background/70 md:text-base">
            Let&rsquo;s look at your current digital presence, identify the gaps and figure out what is actually worth
            improving.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-85"
            >
              Get a Free Visibility Check &rarr;
            </Link>
            <Link to="/contact" className="border border-background/40 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-background">
              Contact TrueReech
            </Link>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
);

export default Home;
