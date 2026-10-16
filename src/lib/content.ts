export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  covers: string[];
  forWho: string;
  problems: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "Search Engine Optimisation",
    shortTitle: "Search Engine Optimisation (SEO)",
    summary: "Practical work that improves technical accessibility, site structure, on-page relevance, content quality, and search performance.",
    covers: ["Technical SEO audits", "On-page SEO", "Keyword and search-intent research", "Website structure and internal linking", "Metadata and heading optimisation", "Sitemap and robots.txt checks", "Indexing and Search Console monitoring", "SEO migration planning and URL mapping"],
    forWho: "Businesses with a website that needs clearer search foundations or a more useful plan for organic visibility.",
    problems: "Pages that are difficult to understand, inconsistent site structure, weak internal links, or content that does not match how people search.",
    deliverables: ["Technical review", "Search-intent research", "On-page recommendations", "Prioritised action plan"],
  },
  {
    slug: "content-strategy",
    title: "SEO Blog Writing and Content Strategy",
    shortTitle: "Content Strategy and SEO Blog Writing",
    summary: "Helpful, search-focused content based on audience needs and genuine search intent.",
    covers: ["Topic research and content briefs", "Competitor content analysis", "Blog outlines and drafts", "Title tags and meta descriptions", "Internal-link recommendations", "Content refreshes and editorial planning"],
    forWho: "Businesses that want useful content with a clear purpose instead of posts created only to fill a calendar.",
    problems: "Unclear topics, inconsistent publishing, thin articles, or content that gets attention without helping a reader take the next step.",
    deliverables: ["Content plans", "SEO blog drafts", "Content briefs", "Editorial calendars"],
  },
  {
    slug: "ai-search",
    title: "AI Search Visibility, AEO and GEO",
    shortTitle: "AI Search Visibility and Answer Engine Optimisation",
    summary: "Clear, structured content that helps search systems and AI-powered discovery experiences understand a business and its expertise.",
    covers: ["Answers to real user questions", "Relevant FAQs and descriptive headings", "Entity and topic consistency", "Useful supporting content and source references", "Appropriate structured data", "Content clarity for AI-assisted discovery", "Monitoring available search and referral signals"],
    forWho: "Businesses that want their expertise represented clearly as people move between traditional search and AI-assisted research.",
    problems: "Vague pages, inconsistent descriptions, missing context, or useful expertise that is difficult for people and systems to interpret.",
    deliverables: ["Question-led content", "Content structure recommendations", "Entity and topic review", "Structured-data guidance"],
  },
  {
    slug: "website-content",
    title: "Website Content and On-Page SEO",
    shortTitle: "Website Content and On-Page SEO",
    summary: "Clearer website messaging, page structure, calls to action, metadata, internal links, and content organisation.",
    covers: ["Page messaging", "Information architecture", "Calls to action", "Metadata and headings", "Internal links", "Content organisation"],
    forWho: "Businesses whose website does not yet explain their offer clearly or make the next step obvious.",
    problems: "Unclear homepages, difficult-to-scan service pages, inconsistent language, or visitors who cannot quickly tell whether the business can help.",
    deliverables: ["Website copy", "Page outlines", "On-page recommendations", "Conversion-focused edits"],
  },
  {
    slug: "social-media",
    title: "Social Media Content and Management",
    shortTitle: "Social Media Content and Management",
    summary: "Relevant social content aligned with the business, audience, and agreed scope of work.",
    covers: ["Content direction", "Post concepts and copy", "Platform-aware planning", "Ongoing content management", "Content repurposing", "Review and refinement"],
    forWho: "Businesses that want a consistent, credible presence without losing sight of the wider business and content goals.",
    problems: "Inconsistent posting, disconnected messages, content created without a clear audience, or social activity that does not support the wider presence.",
    deliverables: ["Content calendars", "Social copy", "Post concepts", "Agreed publishing support"],
  },
  {
    slug: "generative-engine-optimisation",
    title: "Generative Engine Optimisation",
    shortTitle: "Generative Engine Optimisation",
    summary: "A practical extension of search and content work focused on clarity, useful sources, and consistent business context.",
    covers: ["Topic and entity clarity", "Source-led content", "Descriptive site structure", "Question-focused pages", "Available referral-signal review"],
    forWho: "Businesses building a durable information base for changing discovery habits.",
    problems: "Content that is hard to summarise, unsupported claims, or important business information scattered across disconnected pages.",
    deliverables: ["Content recommendations", "Source and context review", "Page structure guidance", "Prioritised next steps"],
  },
];

export type Project = { name: string; category: string; desc: string; url: string };

export const projects: Project[] = [
  { name: "Feedspace", category: "SEO & Content", desc: "Helped take Domain Rating from 24 to 63 over approximately 1.5 years. 50+ blogs and 30+ case studies were part of the wider content work.", url: "https://www.feedspace.io/" },
  { name: "Halo", category: "SEO Content", desc: "64 blogs and 20+ website pages.", url: "https://halo.co.in/" },
  { name: "DevTown", category: "YouTube & Content", desc: "Created scripts for daily live bootcamps for approximately 2.5 years. 432K+ YouTube followers.", url: "https://www.devtown.in/" },
  { name: "Settel", category: "Community & Growth", desc: "Helped acquire the first 100 users through Reddit/community-led content.", url: "https://www.settel.io/" },
  { name: "DT7 Agency", category: "SEO & Content", desc: "Content work for a marketing agency serving businesses in Andhra Pradesh.", url: "https://dt7.agency/" },
  { name: "ECE Project Kart", category: "SEO & Content", desc: "Created 40+ SEO blogs for a final-year project business.", url: "https://eceprojectkart.com/" },
  { name: "Tufftron", category: "SEO & Content", desc: "Blog and content work for a glass manufacturing business.", url: "https://tufftron.com/" },
  { name: "Omega Hospitals", category: "Social Media", desc: "Telugu + English focused social media content.", url: "https://www.instagram.com/omega.hospitals" },
  { name: "Jegabuilds", category: "Social Media", desc: "Social media and competition-focused content.", url: "https://www.instagram.com/jegabuilds" },
  { name: "Dr Varun, Gastroenterologist", category: "Social Media", desc: "Regular healthcare awareness content.", url: "https://www.instagram.com/dr.varun_gastroenterologist" },
  { name: "Durga Dairy", category: "Social Media", desc: "Regular social media content for the brand.", url: "https://www.instagram.com/durgadairy_official" },
  { name: "Falcon Reality", category: "Course Content", desc: "Created a 5-module HR course script for an AI automation company based in the Netherlands.", url: "https://www.falconreality.in/" },
  { name: "Connectstore", category: "Community & Growth", desc: "Competition-focused content for a creator/influencer CRM product.", url: "https://connectstore.in/" },
  { name: "Sai Bhaskar Hospital", category: "Content", desc: "Website and blog content work.", url: "https://saibhaskarhospital.com/" },
  { name: "Anumy Baby", category: "Content", desc: "Content work for a pregnancy-focused hospital brand.", url: "https://anumybaby.com/" },
];
