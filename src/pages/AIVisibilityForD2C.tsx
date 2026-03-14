import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import { useContactModal } from "@/hooks/useContactModal";

const queries = [
  "Best sustainable skincare brands",
  "Top D2C fitness equipment brands",
  "Best direct-to-consumer coffee brands",
  "Affordable eco-friendly clothing brands",
];

const AIVisibilityForD2C = () => {
  const { open: openContact } = useContactModal();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="gradient-hero py-16 md:py-24 px-4">
        <MotionSection className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            AI Visibility for <span className="text-primary">D2C Brands</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            As a D2C marketing agency, we help consumer brands get recommended in AI answers, Reddit discussions, and buyer research queries. When shoppers ask AI tools for the best products — your brand should be the recommendation.
          </p>
          <Button size="lg" onClick={openContact}>Connect Now</Button>
        </MotionSection>
      </section>

    <section className="py-16 px-4">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why D2C Brands Need AI Visibility</h2>
        <p className="text-muted-foreground mb-6">
          Consumers are increasingly turning to AI tools and community discussions to discover new products. Reddit threads, AI-generated buying guides, and comparison queries are the new product discovery channels for D2C brands.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Appear in AI-generated product recommendation lists.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Get mentioned in Reddit buying guide discussions.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Build brand authority in community conversations.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Capture buyer-intent search queries across AI and search.</li>
        </ul>
      </MotionSection>
    </section>

    <section className="py-16 px-4 bg-accent/30">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Queries D2C Shoppers Ask AI Tools</h2>
        <p className="text-muted-foreground mb-6">Your potential customers are asking questions like these:</p>
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
};

export default AIVisibilityForD2C;
