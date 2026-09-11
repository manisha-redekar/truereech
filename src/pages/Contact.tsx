import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, SOCIALS } from "@/lib/site";

const FORMSPREE_URL = "https://formspree.io/f/meerkwjd";

const needs = [
  "AI / Google visibility",
  "SEO blogs & content",
  "Website content",
  "Social media",
  "Ad creatives",
  "Content strategy",
  "Not sure yet",
];

const fieldClass =
  "mt-2 w-full border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-foreground";
const labelClass = "block text-[13px] font-medium";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Manisha | TrueReech</title>
        <meta
          name="description"
          content="Tell me about your business and what you'd like help with — search visibility, content, website copy, social media or ad creatives."
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact Manisha | TrueReech" />
        <meta
          property="og:description"
          content="Tell me about your business and what you'd like help with — search visibility, content, website copy, social media or ad creatives."
        />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Manisha | TrueReech" />
        <meta
          name="twitter:description"
          content="Tell me about your business and what you'd like help with — search visibility, content, website copy, social media or ad creatives."
        />
      </Helmet>

      <SiteHeader />

      <main className="px-6 py-16 md:px-10 md:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="text-[2.25rem] leading-[1.08] md:text-5xl">Let&rsquo;s Talk.</h1>
            <p className="prose-body mt-6 max-w-md">
              Tell me a little about your business, what you&rsquo;re trying to improve and what you&rsquo;d like help
              with.
            </p>
            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm font-semibold">Find me elsewhere</p>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn;
                </a>
                <a
                  href={SOCIALS.bluesky}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-muted-foreground transition-colors hover:text-foreground"
                >
                  Bluesky;
                </a>
              </div>
            </div>
          </div>

          <div className="border border-border p-6 md:p-9">
            {status === "sent" ? (
              <div className="py-10">
                <h2 className="text-2xl">Thanks, your message has been sent.</h2>
                <p className="prose-body mt-3">I usually reply within one working day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">Name</label>
                  <input className={fieldClass} id="name" name="name" required autoComplete="name" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="business">Business name</label>
                  <input className={fieldClass} id="business" name="business" autoComplete="organization" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">Email</label>
                  <input className={fieldClass} id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">WhatsApp / Phone</label>
                  <input className={fieldClass} id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="profile">Website / Instagram</label>
                  <input className={fieldClass} id="profile" name="website_or_instagram" placeholder="https://" />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="need">What do you need help with?</label>
                  <select className={fieldClass} id="need" name="need" defaultValue={needs[0]}>
                    {needs.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">Message</label>
                  <textarea className={fieldClass} id="message" name="message" rows={5} required />
                </div>
                {status === "error" && (
                  <p className="text-sm text-destructive sm:col-span-2">
                    Something went wrong. Please try again in a moment.
                  </p>
                )}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85 disabled:opacity-60 sm:w-auto"
                  >
                    {status === "sending" ? "Sending…" : "Send Message →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Contact;
