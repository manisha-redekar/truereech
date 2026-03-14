import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import { useContactModal } from "@/hooks/useContactModal";

const queries = [
  "Best SEO content strategy for SaaS",
  "SEO content for ecommerce brands",
  "How to rank SaaS blog posts on Google",
];

const SEOContentMarketing = () => {
  const { open: openContact } = useContactModal();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="gradient-hero py-16 md:py-24 px-4">
        <MotionSection className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            SEO Content <span className="text-primary">Marketing</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Build authority and organic traffic with strategic SEO content for SaaS and ecommerce. Our search-optimized content ranks on Google and earns the trust of AI models.
          </p>
          <Button size="lg" onClick={openContact}>Connect Now</Button>
        </MotionSection>
      </section>

    <section className="py-16 px-4">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Content That Ranks and Converts</h2>
        <p className="text-muted-foreground mb-6">
          SEO content for SaaS and ecommerce isn't just about keywords — it's about creating genuinely useful content that earns authority, ranks on Google, and gets cited by AI tools.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Keyword research targeting high-intent search queries.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Long-form blog articles optimized for search and AI.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Comparison and alternatives content that captures buyer intent.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Organic traffic that compounds over time.</li>
        </ul>
      </MotionSection>
    </section>

    <section className="py-16 px-4 bg-accent/30">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Search Queries We Help You Rank For</h2>
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

export default SEOContentMarketing;
