import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";

const FORMSPREE_URL = "https://formspree.io/f/meerkwjd";

const needs = [
  "AI / Google visibility",
  "SEO blogs & content",
  "Website content",
  "Social media management",
  "Ad creatives",
  "Complete digital visibility",
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
        <title>Contact TrueReech | Digital Visibility &amp; Marketing Services</title>
        <meta
          name="description"
          content="Talk to TrueReech about AI search visibility, SEO content, website content, social media management and digital marketing."
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact TrueReech | Digital Visibility & Marketing Services" />
        <meta
          property="og:description"
          content="Talk to TrueReech about AI search visibility, SEO content, website content, social media management and digital marketing."
        />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta name="twitter:title" content="Contact TrueReech | Digital Visibility & Marketing Services" />
        <meta
          name="twitter:description"
          content="Talk to TrueReech about AI search visibility, SEO content, website content, social media management and digital marketing."
        />
      </Helmet>

      <SiteHeader />

      <main className="px-6 py-16 md:px-10 md:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h1 className="text-[2.25rem] leading-[1.08] md:text-5xl">Let&rsquo;s Talk About Your Visibility.</h1>
            <p className="prose-body mt-6 max-w-md">
              Tell me a little about your business, what you&rsquo;re currently doing online and where you feel
              you&rsquo;re getting stuck.
            </p>
            {WHATSAPP_NUMBER && (
              <div className="mt-10 border-t border-border pt-6">
                <p className="text-sm font-semibold">Prefer WhatsApp?</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block border border-foreground px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
                >
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            )}
          </div>

          <div className="border border-border p-6 md:p-9">
            {status === "sent" ? (
              <div className="py-10">
                <h2 className="text-2xl">Thanks — your enquiry has been sent.</h2>
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
                    {status === "sending" ? "Sending…" : "Send Enquiry →"}
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
