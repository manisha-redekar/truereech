import { Link } from "react-router-dom";
import { Monitor, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import RotatingSearchQuery from "@/components/RotatingSearchQuery";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import MotionSection from "@/components/MotionSection";
import heroImg from "@/assets/hero-illustration.png";
import iconAi from "@/assets/icon-ai-visibility.png";
import iconReddit from "@/assets/icon-reddit.png";
import iconSeo from "@/assets/icon-seo.png";

const services = [
{ icon: iconAi, title: "AI Visibility", description: "Get seen in AI-generated answers by earning AI trust signals and building authority." },
{ icon: iconReddit, title: "Reddit Marketing", description: "Engage in honest community discussions while driving targeted traffic." },
{ icon: iconSeo, title: "SEO Blogs & Content", description: "Build authority and organic traffic with high-quality, search-optimized content." }];


const Index = () =>
<div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="gradient-hero py-16 md:py-24 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <MotionSection>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Help Your <span className="text-primary">Brand</span> Get Discovered in AI{" "}
            <span className="text-primary">Answers</span>, <span className="text-primary">Reddit Discussions</span>, and Search.
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            TrueReech helps SaaS companies and D2C brands get discovered in AI answers, Reddit discussions, and search.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link to="/about">Connect Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">See How It Works</Link>
            </Button>
          </div>
        </MotionSection>
        <MotionSection delay={0.2} direction="right">
          <div className="flex justify-center">
            <img src={heroImg} alt="AI visibility illustration" className="w-full max-w-md" />
          </div>
        </MotionSection>
      </div>
    </section>

    {/* Discovery Section */}
    <section className="py-16 px-4">
      <MotionSection className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Discovery Is Changing. Search Is No Longer Just Google.</h2>
        <p className="text-muted-foreground mb-6">People are now asking AI tools questions like:</p>
        <RotatingSearchQuery />
        <p className="font-semibold text-lg mt-6">Real users are asking for tools — right now.</p>
      </MotionSection>
    </section>

    {/* Services Cards */}
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto">
        <MotionSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            How <span className="text-primary">TrueReech</span> Helps Your Product Get Discovered
          </h2>
        </MotionSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((s, i) =>
        <MotionSection key={s.title} delay={i * 0.15}>
              <ServiceCard icon={s.icon} title={s.title} description={s.description} />
            </MotionSection>
        )}
        </div>
      </div>
    </section>

    {/* Who We Work With */}
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <MotionSection>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Who We <span className="text-primary">Work With</span>
          </h2>
        </MotionSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <MotionSection delay={0}>
            <div className="gradient-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow text-center h-full">
              <Monitor className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">SaaS & Tech Products</h3>
              <p className="text-sm text-muted-foreground">
                Helping SaaS companies and tech products appear in AI answers, developer communities, comparison searches, and product discovery queries.
              </p>
            </div>
          </MotionSection>
          <MotionSection delay={0.15}>
            <div className="gradient-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow text-center h-full">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold mb-2">D2C & Ecommerce Brands</h3>
              <p className="text-sm text-muted-foreground">
                Helping consumer brands appear in Reddit discussions, AI recommendations, buyer research searches, and community conversations where customers discover products.
              </p>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>;


export default Index;