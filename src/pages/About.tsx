import { Link } from "react-router-dom";
import { Target, Search, ChartBar as BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSection from "@/components/MotionSection";
import heroImg from "@/assets/hero-illustration.png";
import iconAi from "@/assets/icon-ai-visibility.png";
import iconReddit from "@/assets/icon-reddit.png";
import iconSeo from "@/assets/icon-seo.png";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="gradient-hero py-16 md:py-24 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <MotionSection>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            About <span className="text-primary">TrueReech</span>
          </h1>
          <p className="text-lg font-medium mb-4">Smart brand visibility for modern SaaS companies and D2C brands.</p>
          <p className="text-muted-foreground mb-8">
            TrueReech was founded with a simple goal: to change how brands get discovered online by positioning them where real conversations and searches happen today AI answers, Reddit discussions, and organic search.
          </p>
        </MotionSection>
        <MotionSection delay={0.2} direction="right">
          <div className="flex justify-center">
            <img src={heroImg} alt="About illustration" className="w-full max-w-md" />
          </div>
        </MotionSection>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <MotionSection>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Mission</h2>
          <h3 className="text-xl font-bold mb-4">Helping SaaS Products Get Discovered in a Shifting Landscape</h3>
          <p className="text-muted-foreground mb-10">
            TrueReech was founded with a simple goal: to change how brands get discovered online by positioning them where real conversations and searches happen today AI answers, Reddit discussions, and organic search.
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: iconAi, title: "AI Search", desc: "Discovery now begins with questions asked in AI tools like ChatGPT, Gemini, and Perplexity." },
            { icon: iconReddit, title: "Community", desc: "Communities like Reddit have become key sources of product research and recommendations." },
            { icon: iconSeo, title: "High-Authority Content", desc: "Content that earns trust is the backbone of organic search visibility." },
          ].map((item, i) => (
            <MotionSection key={item.title} delay={i * 0.15}>
              <div className="gradient-card rounded-xl p-6 shadow-card text-center">
                <img src={item.icon} alt={item.title} className="w-16 h-16 mx-auto mb-3 object-contain" />
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Trust Us */}
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <MotionSection direction="left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Founders Trust Us</h2>
          <p className="text-muted-foreground mb-6">A Trusted Partner to SaaS Innovators</p>
          <div className="space-y-6">
            <div className="flex gap-3"><Target className="text-primary shrink-0 mt-1" size={20} /><div><p className="font-semibold">SaaS Focused</p><p className="text-sm text-muted-foreground">We specialize in helping SaaS startups rise above the noise in a competitive digital landscape.</p></div></div>
            <div className="flex gap-3"><Search className="text-primary shrink-0 mt-1" size={20} /><div><p className="font-semibold">Visibility Experts</p><p className="text-sm text-muted-foreground">Our team has years of experience in AI search optimization, community engagement & content marketing.</p></div></div>
            <div className="flex gap-3"><BarChart3 className="text-primary shrink-0 mt-1" size={20} /><div><p className="font-semibold">Transparent Results</p><p className="text-sm text-muted-foreground">We provide clear reporting on visibility improvements, traffic growth, and ROI.</p></div></div>
          </div>
        </MotionSection>
        <MotionSection delay={0.2} direction="right">
          <img src={teamPhoto} alt="Team" className="rounded-xl shadow-elevated w-full mb-6" />
          <div className="grid grid-cols-2 gap-4">
            <div className="gradient-card rounded-lg p-4 shadow-card text-center">
              <p className="font-bold">Jake Thompson</p>
              <p className="text-xs text-muted-foreground">Co-Founder & CEO</p>
            </div>
            <div className="gradient-card rounded-lg p-4 shadow-card text-center">
              <p className="font-bold">Emily Park</p>
              <p className="text-xs text-muted-foreground">Co-Founder & COO</p>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4 text-center">
      <MotionSection className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Want to Learn More About How <span className="text-primary">TrueReech</span> Can Help Your SaaS Startup?
        </h2>
        <p className="text-muted-foreground mb-8">
          Get a free visibility audit to see where your product stands in AI answers and community discussions.
        </p>
        <Button size="lg" asChild><Link to="/about">Get in Touch</Link></Button>
      </MotionSection>
    </section>

    <Footer />
  </div>
);

export default About;
