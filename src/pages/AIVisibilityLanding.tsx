import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";

const AIVisibilityLanding = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <Helmet>
      <title>Check Your AI Visibility</title>
      <meta name="description" content="Check how your startup appears in AI search results and get recommendations to improve your AI visibility." />
    </Helmet>
    <Navbar />

    <div className="flex-1 w-full">
      <iframe
        src="https://check-ai-visibility.lovable.app/"
        className="w-full h-screen border-none"
        title="Check AI Visibility"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  </div>
);

export default AIVisibilityLanding;
