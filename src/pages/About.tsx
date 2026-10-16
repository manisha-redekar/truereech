import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, SOCIALS } from "@/lib/site";

const About = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>About Manisha — Independent Freelance Marketer | TrueReech</title>
      <meta name="description" content="Learn about Manisha, the independent freelancer behind TrueReech, focused on SEO, content, AI search visibility, and digital marketing execution." />
      <link rel="canonical" href={`${SITE_URL}/about/`} />
      <meta property="og:title" content="About Manisha — Independent Freelance Marketer | TrueReech" />
      <meta property="og:description" content="Learn about Manisha, the independent freelancer behind TrueReech, focused on SEO, content, AI search visibility, and digital marketing execution." />
      <meta property="og:url" content={`${SITE_URL}/about/`} />
      <meta property="og:type" content="profile" />
    </Helmet>
    <SiteHeader />
    <main>
      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div><p className="eyebrow">About</p><h1 className="mt-5 max-w-2xl text-[2.7rem] leading-[1.03] md:text-6xl">Independent by choice. Strategic by approach.</h1><p className="prose-body mt-7 max-w-xl text-lg">I&rsquo;m the person behind TrueReech, an independent freelance marketing practice focused on search, content, and digital visibility.</p></div>
          <img src="/images/truereech-about-illustration.png" alt="Illustration of practical strategies, useful content, and real opportunities" width={1152} height={576} className="h-auto w-full max-w-[520px]" />
        </div>
      </section>
      <section className="border-t border-border px-6 py-14 md:px-10 md:py-20"><div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><p className="eyebrow">How I work</p><div className="max-w-3xl space-y-5"><p className="prose-body text-lg">I enjoy bringing structure to digital marketing challenges — understanding what people are searching for, identifying content opportunities, and helping businesses communicate their value more clearly online.</p><p className="prose-body text-lg">My approach is practical and collaborative. I work directly with clients, prioritise meaningful improvements, and tailor the work to the business rather than forcing every project into the same template.</p><p className="prose-body text-lg">My focus areas include SEO, content strategy, website content, AI search visibility, and digital marketing execution.</p><div className="flex flex-wrap gap-5 pt-3 text-sm"><Link to="/services/" className="font-semibold text-ink underline decoration-1 underline-offset-4">Explore services &rarr;</Link><Link to="/work/" className="font-semibold text-ink underline decoration-1 underline-offset-4">See selected work &rarr;</Link></div></div></div></section>
      <section className="bg-surface px-6 py-14 md:px-10 md:py-20"><div className="wrap flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="eyebrow">Connect</p><h2 className="mt-3 text-3xl">Work directly with Manisha.</h2></div><div className="flex flex-wrap gap-5 text-sm"><a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-foreground">LinkedIn &nearr;</a><Link to="/contact/" className="font-semibold text-ink hover:text-foreground">Start a conversation &rarr;</Link></div></div></section>
    </main>
    <SiteFooter />
  </div>
);

export default About;
