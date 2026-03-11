import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import heroImg from "@/assets/hero-illustration.png";

const categories = ["All", "AI Visibility", "Reddit Marketing", "SEO & Content"];

const articles = [
  {
    tags: ["AI Visibility"],
    title: "What is AI Visibility? How to Get Your SaaS Noticed by AI Tools",
    excerpt: "How to ensure your SaaS product appears in AI-generated answers to boost visibility and drive traffic.",
    date: "April 2024",
  },
  {
    tags: ["AI Visibility", "Reddit Marketing"],
    title: "5 Ways Reddit Can Drive New Users to Your SaaS in 2024",
    excerpt: "Discover how to leverage the Reddit community to attract real, engaged users to your SaaS product.",
    date: "April 18, 2024",
  },
  {
    tags: ["SEO & Content"],
    title: "Content Marketing Trends for SaaS Startups in 2024",
    excerpt: "Learn about the latest content marketing trends that can help SaaS startups gain visibility, authority, and organic traffic.",
    date: "April 18, 2024",
  },
  {
    tags: ["SEO & Content"],
    title: "How to Run a Reddit AMA to Gain Exposure for Your SaaS",
    excerpt: "Get a free visibility audit to see where your product stands in AI answers and community.",
    date: "April 15, 2024",
  },
];

const Blog = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat = active === "All" || a.tags.includes(active);
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Tips and Strategies to Help Your <span className="text-primary">SaaS Startup</span> Grow
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Insights on AI visibility, Reddit marketing, SEO content, and more to boost your SaaS product.
            </p>
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search blog..."
                className="pl-10 bg-card"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <img src={heroImg} alt="Blog illustration" className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Filter & Articles */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-accent/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>

          <div className="space-y-6">
            {filtered.map((a) => (
              <article key={a.title} className="gradient-card rounded-xl p-6 shadow-card">
                <div className="flex flex-wrap gap-2 mb-2">
                  {a.tags.map((t) => (
                    <span key={t} className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{a.excerpt}</p>
                <span className="text-xs text-muted-foreground flex items-center gap-1"><Sparkles size={12} /> {a.date}</span>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Blog;
