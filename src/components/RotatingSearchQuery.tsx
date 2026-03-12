import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

const queries = [
  { tool: "ChatGPT", query: "Best project management SaaS" },
  { tool: "Perplexity AI", query: "Best AI email marketing tools" },
  { tool: "ChatGPT", query: "Best CRM for startups" },
  { tool: "Perplexity AI", query: "Best marketing automation tools" },
  { tool: "ChatGPT", query: "Best Reddit marketing tools" },
];

const RotatingSearchQuery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % queries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = queries[index];

  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-md bg-card border border-border rounded-xl shadow-lg overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/50">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-2 text-xs text-muted-foreground font-medium">{current.tool}</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-4 h-14">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-sm font-medium text-foreground whitespace-nowrap"
            >
              {current.query}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RotatingSearchQuery;
