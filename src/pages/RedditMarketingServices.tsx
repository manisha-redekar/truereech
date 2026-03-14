import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import { useContactModal } from "@/hooks/useContactModal";

const queries = [
  "Best Reddit marketing tools for brands",
  "How to promote my product on Reddit",
  "Reddit marketing strategy for ecommerce",
];

const RedditMarketingServices = () => {
  const { open: openContact } = useContactModal();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="gradient-hero py-16 md:py-24 px-4">
        <MotionSection className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Reddit <span className="text-primary">Marketing</span> Services
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Reddit marketing for brands done right. We help you engage authentically in communities where your customers are already discussing solutions — driving targeted traffic and genuine recommendations.
          </p>
          <Button size="lg" onClick={openContact}>Connect Now</Button>
        </MotionSection>
      </section>

    <section className="py-16 px-4">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Community Marketing That Converts</h2>
        <p className="text-muted-foreground mb-6">
          Community marketing for ecommerce and SaaS starts with genuine engagement. We identify the right subreddits, craft authentic responses, and build your brand's reputation where it matters most.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Identify high-value subreddits where your audience hangs out.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Authentic engagement that drives natural product recommendations.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Monitor discussions and respond with valuable insights.</li>
          <li className="flex items-start gap-2"><Check className="text-primary mt-0.5 shrink-0" size={18} /> Drive targeted community traffic to your product.</li>
        </ul>
      </MotionSection>
    </section>

    <section className="py-16 px-4 bg-accent/30">
      <MotionSection className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What Users Search on Reddit</h2>
        <p className="text-muted-foreground mb-6">Your customers are asking these kinds of questions in Reddit threads:</p>
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

export default RedditMarketingServices;
