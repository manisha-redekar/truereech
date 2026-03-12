import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import heroImg from "@/assets/hero-illustration.png";
import iconAi from "@/assets/icon-ai-visibility.png";
import iconReddit from "@/assets/icon-reddit.png";
import iconSeo from "@/assets/icon-seo.png";

const services = [
  {
    icon: iconAi, title: "AI Visibility",
    description: "Get seen in AI-generated answers by creating content and signals trusted by AI models like ChatGPT, Gemini, and Perplexity.",
    bullets: ["Your product gets recommended in AI answers.", "AAppear in “best tools” and comparison searches.", "Increase traffic coming directly from AI tools."],
  },
  {
    icon: iconReddit, title: "Reddit Marketing",
    description: "Find the right subreddits where your audience already hangs out and participate in conversations in a natural, helpful way.",
    bullets: ["Encourage genuine mentions and recommendations of your product.", "Bring targeted traffic from real community discussions."],
  },
  {
    icon: iconSeo, title: "SEO Blogs & Content",
    description: "Create strategic content that builds authority and helps your brand show up in organic search.",
    bullets: ["Rank on Google for key industry searches.", "Generate organic traffic that grows consistently over time."],
  },
];

const plans = [
  { name: "Starter", price: "$1,500/month", features: ["Up to 10 SEO blog articles per month (revisable based on strategy)", "Up to 20 Reddit/community posts (customizable for relevant discussions)", "Keyword and topic research
", "Content designed for long-term search visibility"] },
  { name: "Growth", price: "$3,000/month", features: ["Advanced AI Visibility Strategy", "Reddit Community Engagement", "8 SEO Blog Articles/mo"] },
  { name: "Custom", price: "For scaling SaaS", features: ["Contact us for a personalised plan for SaaS companies."], custom: true },
];

const Services = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="gradient-hero py-16 md:py-24 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <MotionSection>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-4">
            We focus on getting your product discovered where users actually search for solutions:
          </p>
          <p className="text-muted-foreground mb-8">
            AI answers, community discussions, and high-authority content.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" asChild><Link to="/about">Connect Now</Link></Button>
            <Button size="lg" variant="outline">Get Started</Button>
          </div>
        </MotionSection>
        <MotionSection delay={0.2} direction="right">
          <div className="flex justify-center">
            <img src={heroImg} alt="Services illustration" className="w-full max-w-md" />
          </div>
        </MotionSection>
      </div>
    </section>

    {/* SaaS + D2C Intro */}
    <section className="py-16 px-4 bg-accent/30">
      <MotionSection className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Built for <span className="text-primary">SaaS</span> & <span className="text-primary">D2C</span> Brands</h2>
        <p className="text-muted-foreground">
          Whether you're a SaaS company looking to appear in AI-generated answers and developer communities, or a D2C brand aiming to get recommended in Reddit discussions and buyer research. TrueReech helps you improve discovery through AI visibility, Reddit marketing, and SEO content.
        </p>
      </MotionSection>
    </section>

    {/* AI Visibility Detail */}
    <section className="py-16 px-4">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">AI Visibility</h2>
        <p className="text-muted-foreground mb-6">
          Get seen in AI-generated answers by creating content and signals trusted by AI models like ChatGPT, Gemini, and Perplexity.
        </p>
        <h3 className="text-xl font-bold mb-4">What We Do:</h3>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> AI visibility audit of your brand, product, and competitors.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Optimize content so AI tools like ChatGPT and Perplexity can reference and learn from it.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Strategic Reddit engagement to position your product in real community discussions.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> SEO-driven blog and website content designed for long-term discovery.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Earn mentions of your brand on trusted websites and communities.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Track visibility improvements across AI answers, search, and community discussions.</li>
        </ul>
      </MotionSection>
    </section>

    {/* Service Cards */}
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {services.map((s, i) => (
          <MotionSection key={s.title} delay={i * 0.15}>
            <div className="gradient-card rounded-xl p-6 shadow-card text-center h-full flex flex-col">
              <img src={s.icon} alt={s.title} className="w-20 h-20 mx-auto mb-4 object-contain" />
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
              <ul className="text-sm text-left space-y-2 mb-6 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2"><Check size={16} className="text-primary mt-0.5 shrink-0" />{b}</li>
                ))}
              </ul>
              <Button className="w-full">Get Started</Button>
            </div>
          </MotionSection>
        ))}
      </div>
    </section>

    {/* Pricing */}
    <section className="py-16 px-4">
      <MotionSection className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Pricing Plans</h2>
        <p className="text-muted-foreground mb-12">Simple, transparent pricing based on your SaaS growth stage.</p>
      </MotionSection>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {plans.map((p, i) => (
          <MotionSection key={p.name} delay={i * 0.15}>
            <div className="gradient-card rounded-xl p-6 shadow-card text-left h-full flex flex-col">
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-lg font-semibold text-primary mb-4">{p.price}</p>
              <ul className="space-y-2 text-sm mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check size={16} className="text-primary mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
              <Button variant={p.custom ? "outline" : "default"} className="w-full">
                {p.custom ? "Contact Us" : "Get Started"}
              </Button>
            </div>
          </MotionSection>
        ))}
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default Services;
