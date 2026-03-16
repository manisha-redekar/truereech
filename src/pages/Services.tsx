import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useContactModal } from "@/hooks/useContactModal";
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
    bullets: ["Your product gets recommended in AI answers.", "Appear in “best tools” and comparison searches.", "Increase traffic coming directly from AI tools."],
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
  {
    name: "Starter",
    price: "$600/month",
    features: [
      "Up to 10 SEO blog articles per month (revisable based on strategy)",
      "Up to 20 Reddit/community posts (customizable for relevant discussions)",
      "Keyword and topic research",
      "Content designed for long-term search visibility"
    ]
  },
  {
    name: "Growth",
    price: "$1000/month",
    features: [
      <b key="ai-bold">AI visibility strategy and optimization</b>,
      "Content structured to appear in AI answers and recommendation queries",
      "Relevant SEO blog content for authority and discovery",
      "Up to 30 community / Reddit posts in targeted discussions",
      "Ongoing visibility tracking and improvements"
    ]
  }
];

const Services = () => {
  const { open: openContact } = useContactModal();
  return (
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
            Combines AI visibility, community-driven discovery, and strategic content creation to help brands appear where modern search happens.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" onClick={openContact}>Connect Now</Button>
            <Button size="lg"  onClick={openContact} variant="outline">Get Started</Button>
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
          Whether you're building a SaaS product or running a growing D2C brand, discovery has changed.

People don’t just search Google anymore. They ask AI tools, read Reddit threads, compare tools, and trust long-form content before making decisions.

TrueReech helps your brand show up in those moments.
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
      <MotionSection className="container mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Pricing Plans</h2>
        <p className="text-muted-foreground">Simple, transparent pricing for brands building long-term visibility.</p>
      </MotionSection>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <MotionSection key={p.name} delay={i * 0.15}>
              <div className="gradient-card rounded-xl p-6 shadow-card text-left h-full flex flex-col">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-lg font-semibold text-primary mb-4">{p.price}</p>
                <ul className="space-y-2 text-sm mb-6 flex-1">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2"><Check size={16} className="text-primary mt-0.5 shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button variant="default" className="w-full" onClick={openContact}>
                  Get Started
                </Button>
              </div>
            </MotionSection>
          ))}
          <MotionSection delay={0.3}>
            <div className="bg-accent/20 rounded-xl p-6 h-full flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-4">Why Our Pricing Works</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">We focus on helping brands build lasting visibility and trust.</p>
               
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
  );
};

export default Services;
