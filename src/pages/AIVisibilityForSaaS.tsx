import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import { useContactModal } from "@/hooks/useContactModal";

const queries = [
  "Best project management SaaS for startups",
  "Top AI email marketing tools 2025",
  "Best CRM for scaling SaaS companies",
  "Alternative to [competitor] for teams",
];

const AIVisibilityForSaaS = () => {
  const { open: openContact } = useContactModal();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="gradient-hero py-16 md:py-24 px-4">
        <MotionSection className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            AI Visibility for <span className="text-primary">SaaS</span> Companies
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            As a SaaS marketing agency, we specialize in getting your software product recommended by AI tools. When developers, founders, and teams ask ChatGPT or Perplexity for the best tools — your product needs to be the answer.
          </p>
          <Button size="lg" onClick={openContact}>Connect Now</Button>
        </MotionSection>
      </section>

    <section className="py-16 px-4">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why SaaS Companies Need AI Visibility</h2>
        <p className="text-muted-foreground mb-6">
          Product discovery for SaaS is shifting from Google to AI. Decision-makers now ask AI assistants for software recommendations. If your product isn't in those answers, you're invisible to a growing segment of buyers.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Get your SaaS mentioned in AI-generated comparison lists.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Build authority signals that AI models trust and cite.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Appear in developer community recommendations.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Rank in product discovery and comparison queries.</li>
        </ul>
      </MotionSection>
    </section>

    <section className="py-16 px-4 bg-accent/30">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Queries SaaS Buyers Ask AI Tools</h2>
        <p className="text-muted-foreground mb-6">Your potential customers are asking AI these questions right now:</p>
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

export default AIVisibilityForSaaS;
