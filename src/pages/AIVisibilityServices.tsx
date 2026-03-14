import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import { useContactModal } from "@/hooks/useContactModal";

const queries = [
  "What is the best project management tool?",
  "Top AI marketing platforms 2025",
  "Best CRM software for small business",
];

const AIVisibilityServices = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <section className="gradient-hero py-16 md:py-24 px-4">
      <MotionSection className="container mx-auto max-w-3xl text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          AI Visibility <span className="text-primary">Services</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Get your brand recommended in AI-generated answers from ChatGPT, Gemini, and Perplexity. Our AI visibility services ensure your product appears when users ask AI tools for recommendations.
        </p>
        <Button size="lg" asChild><Link to="/about">Request a Visibility Audit</Link></Button>
      </MotionSection>
    </section>

    <section className="py-16 px-4">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How AI Visibility Helps Your Business</h2>
        <p className="text-muted-foreground mb-6">
          AI search optimization is the next frontier of digital marketing. When potential customers ask AI tools questions, your brand needs to be the answer. We build the content, signals, and authority that AI models trust.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Comprehensive AI visibility audit of your product and competitors.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Optimized content that AI tools prefer to learn from and cite.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Brand mentions on high-trust websites that AI models reference.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Ongoing monitoring of your AI search presence.</li>
        </ul>
      </MotionSection>
    </section>

    <section className="py-16 px-4 bg-accent/30">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Queries Users Are Asking Right Now</h2>
        <p className="text-muted-foreground mb-6">People search AI tools with queries like these — is your brand showing up?</p>
        <div className="space-y-3">
          {queries.map((q) => (
            <div key={q} className="gradient-card rounded-lg p-4 shadow-card text-sm font-medium">"{q}"</div>
          ))}
        </div>
      </MotionSection>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default AIVisibilityServices;
