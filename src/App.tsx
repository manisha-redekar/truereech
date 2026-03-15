import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContactModalProvider } from "@/hooks/useContactModal";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import Blog from "./pages/Blog.tsx";
import About from "./pages/About.tsx";
import AIVisibilityServices from "./pages/AIVisibilityServices.tsx";
import RedditMarketingServices from "./pages/RedditMarketingServices.tsx";
import SEOContentMarketing from "./pages/SEOContentMarketing.tsx";
import AIVisibilityForSaaS from "./pages/AIVisibilityForSaaS.tsx";
import AIVisibilityForD2C from "./pages/AIVisibilityForD2C.tsx";
import BlogMarketingStrategyBootstrappedSaaS from "./pages/BlogMarketingStrategyBootstrappedSaaS.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <TooltipProvider>
      <ContactModalProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-visibility-services" element={<AIVisibilityServices />} />
          <Route path="/reddit-marketing-services" element={<RedditMarketingServices />} />
          <Route path="/seo-content-marketing" element={<SEOContentMarketing />} />
          <Route path="/ai-visibility-for-saas" element={<AIVisibilityForSaaS />} />
          <Route path="/ai-visibility-for-d2c-brands" element={<AIVisibilityForD2C />} />
          <Route path="/blogs/marketing-strategy-bootstrapped-saas" element={<BlogMarketingStrategyBootstrappedSaaS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </ContactModalProvider>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
