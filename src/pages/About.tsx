import { Link } from "react-router-dom";
import { Check, Target, Search, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            About <span className="text-primary">TrueReech</span>
          </h1>
          <p className="text-lg font-medium mb-4">Smart brand visibility for modern SaaS companies.</p>
          <p className="text-muted-foreground mb-8">
            TrueReech was founded with a simple goal: to revolutionize how SaaS startups get discovered by placing them where users are actually searching for solutions today.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={heroImg} alt="About illustration" className="w-full max-w-md" />
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Mission</h2>
        <h3 className="text-xl font-bold mb-4">Helping SaaS Products Get Discovered in a Shifting Landscape</h3>
        <p className="text-muted-foreground mb-10">
          TrueReech was founded with a simple goal: to revolutionize how SaaS startups get discovered by placing them where users are actually searching for solutions today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="gradient-card rounded-xl p-6 shadow-card text-center">
            <img src={iconAi} alt="AI Search" className="w-16 h-16 mx-auto mb-3 object-contain" />
            <h4 className="font-bold mb-2">AI Search</h4>
            <p className="text-sm text-muted-foreground">Discovery now begins with questions asked in AI tools like ChatGPT, Gemini, and Perplexity.</p>
          </div>
          <div className="gradient-card rounded-xl p-6 shadow-card text-center">
            <img src={iconReddit} alt="Community" className="w-16 h-16 mx-auto mb-3 object-contain" />
            <h4 className="font-bold mb-2">Community</h4>
            <p className="text-sm text-muted-foreground">Communities like Reddit have become key sources of product research and recommendations.</p>
          </div>
          <div className="gradient-card rounded-xl p-6 shadow-card text-center">
            <img src={iconSeo} alt="High-Authority Content" className="w-16 h-16 mx-auto mb-3 object-contain" />
            <h4 className="font-bold mb-2">High-Authority Content</h4>
            <p className="text-sm text-muted-foreground">Content that earns trust is the backbone of organic search visibility.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Why Trust Us */}
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Founders Trust Us</h2>
          <p className="text-muted-foreground mb-6">A Trusted Partner to SaaS Innovators</p>
          <div className="space-y-6">
            <div className="flex gap-3"><Target className="text-primary shrink-0 mt-1" size={20} /><div><p className="font-semibold">SaaS Focused</p><p className="text-sm text-muted-foreground">We specialize in helping SaaS startups rise above the noise in a competitive digital landscape.</p></div></div>
            <div className="flex gap-3"><Search className="text-primary shrink-0 mt-1" size={20} /><div><p className="font-semibold">Visibility Experts</p><p className="text-sm text-muted-foreground">Our team has years of experience in AI search optimization, community engagement & content marketing.</p></div></div>
            <div className="flex gap-3"><BarChart3 className="text-primary shrink-0 mt-1" size={20} /><div><p className="font-semibold">Transparent Results</p><p className="text-sm text-muted-foreground">We provide clear reporting on visibility improvements, traffic growth, and ROI.</p></div></div>
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Want to Learn More About How <span className="text-primary">TrueReech</span> Can Help Your SaaS Startup?
        </h2>
        <p className="text-muted-foreground mb-8">
          Get a free visibility audit to see where your product stands in AI answers and community discussions.
        </p>
        <Button size="lg" asChild><Link to="/about">Get in Touch</Link></Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
