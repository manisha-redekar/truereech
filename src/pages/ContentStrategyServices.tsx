import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import { useContactModal } from "@/hooks/useContactModal";

const ContentStrategyServices = () => {
  const { open: openContact } = useContactModal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="gradient-hero py-16 md:py-24 px-4">
        <MotionSection className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Content Strategy & Creation for <span className="text-primary">SaaS</span> and <span className="text-primary">D2C</span> Brands
          </h1>
          <p className="text-muted-foreground text-lg mb-4">
            Content today is not just about publishing blogs.
          </p>
          <p className="text-muted-foreground text-lg mb-4">
            It's about becoming the source people reference when they search, ask AI tools questions, or research products in communities.
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            TrueReech creates strategic content designed to support discovery across AI search, Reddit discussions, and organic search.
          </p>
          <Button size="lg" onClick={openContact}>Request Visibility Audit</Button>
        </MotionSection>
      </section>

      <section className="py-16 px-4">
        <MotionSection className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground mb-6">
            We don't create content randomly. Every piece is designed with a discovery goal — whether it's ranking on Google, getting cited in AI answers, or sparking genuine community discussions.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Founder-led insights and thought leadership content.</li>
            <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Educational blog posts optimized for search and AI discovery.</li>
            <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Community-style discussions that build trust and authority.</li>
            <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Comparison and alternatives content targeting buyer intent.</li>
            <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Strategic content calendars aligned with your growth goals.</li>
            <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Content structured so AI models can reference and recommend your brand.</li>
          </ul>
        </MotionSection>
      </section>

      <section className="py-16 px-4 bg-accent/30">
        <MotionSection className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Who This Service Is For</h2>
          <p className="text-muted-foreground mb-6">
            Content strategy works best for brands that are ready to invest in long-term discovery and authority.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gradient-card rounded-xl p-6 shadow-card">
              <h3 className="text-lg font-bold mb-2">SaaS & Tech Products</h3>
              <p className="text-sm text-muted-foreground">
                Build thought leadership, rank for high-intent keywords, and get recommended in AI-generated answers and product comparisons.
              </p>
            </div>
            <div className="gradient-card rounded-xl p-6 shadow-card">
              <h3 className="text-lg font-bold mb-2">D2C & Ecommerce Brands</h3>
              <p className="text-sm text-muted-foreground">
                Create content that drives organic traffic, earns community trust, and positions your brand where buyers research before purchasing.
              </p>
            </div>
          </div>
        </MotionSection>
      </section>

      <section className="py-16 px-4">
        <MotionSection className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Related Articles</h2>
          <div className="space-y-4">
            <Link to="/blogs/marketing-strategy-bootstrapped-saas" className="block gradient-card rounded-lg p-4 shadow-card hover:shadow-elevated transition-shadow">
              <h3 className="font-semibold text-primary">Marketing Strategy for Bootstrapped SaaS</h3>
              <p className="text-sm text-muted-foreground">How to build a marketing engine without a big budget.</p>
            </Link>
            <Link to="/blogs/how-to-appear-in-ai-search-results" className="block gradient-card rounded-lg p-4 shadow-card hover:shadow-elevated transition-shadow">
              <h3 className="font-semibold text-primary">How to Appear in AI Search Results</h3>
              <p className="text-sm text-muted-foreground">Get your brand recommended by ChatGPT, Gemini, and Perplexity.</p>
            </Link>
          </div>
        </MotionSection>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ContentStrategyServices;
