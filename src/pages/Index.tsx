import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import heroImg from "@/assets/hero-illustration.png";
import iconAi from "@/assets/icon-ai-visibility.png";
import iconReddit from "@/assets/icon-reddit.png";
import iconSeo from "@/assets/icon-seo.png";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="gradient-hero py-16 md:py-24 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Help Your <span className="text-primary">SaaS</span> Get Discovered in AI{" "}
            <span className="text-primary">Answers</span>, <span className="text-primary">Reddit Discussions</span>, and Search.
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            We place your SaaS product where users are <em className="font-semibold not-italic text-foreground">actually</em> searching
            for solutions — in AI-generated answers, real community conversations, and high-authority content.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link to="/about">Get Visibility Audit</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">See How It Works</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={heroImg} alt="AI visibility illustration" className="w-full max-w-md" />
        </div>
      </div>
    </section>

    {/* Discovery Section */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Discovery Is Changing. Search Is No Longer Just Google.</h2>
        <p className="text-muted-foreground mb-6">People are now asking AI tools questions like:</p>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">ChatGPT — "Best project management SaaS"</span>
          <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">Perplexity AI — "Best AI email marketing tools"</span>
        </div>
        <p className="font-semibold text-lg">Real users are asking for tools — right now.</p>
      </div>
    </section>

    {/* Services Cards */}
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          How <span className="text-primary">TrueReech</span> Helps Your Product Get Discovered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ServiceCard icon={iconAi} title="AI Visibility" description="Get seen in AI-generated answers by earning AI trust signals and building authority." />
          <ServiceCard icon={iconReddit} title="Reddit Marketing" description="Engage in honest community discussions while driving targeted traffic." />
          <ServiceCard icon={iconSeo} title="SEO Blogs & Content" description="Build authority and organic traffic with high-quality, search-optimized content." />
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default Index;
