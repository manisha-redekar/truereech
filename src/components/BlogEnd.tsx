import { Link } from "react-router-dom";

/*
  Shown at the end of every blog article.

  To add a new blog later: add one line to the list below, in order
  (oldest first, newest last). "Previous" and "Next" links update by themselves.
  Remember to add the new article to the Blog page list (BlogIndex.tsx) and the sitemap too.
*/
const blogPosts = [
  {
    title: "Reddit Marketing Services for Businesses",
    to: "/blog/reddit-marketing-services/",
  },
  {
    title: "Top 10 AEO and GEO Services for AI Search Visibility",
    to: "/blog/top-aeo-geo-services/",
  },
];

/* Wording of the call-to-action box. Edit the text here if you want to change it. */
const CTA = {
  heading: "Not sure how visible your website is?",
  text: "Share your website and what you want to achieve. I will review how clearly it explains your services and suggest what could be improved.",
  button: "Get in touch for a free audit",
  secondary: "Explore our services",
};

const cardClass =
  "group flex flex-col border border-border bg-card p-5 transition-shadow hover:shadow-[0_8px_26px_rgba(30,30,30,0.09)]";

const BlogEnd = ({ current }: { current: string }) => {
  const index = blogPosts.findIndex((post) => post.to === current);
  const previous = index > 0 ? blogPosts[index - 1] : null;
  const next = index >= 0 && index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  return (
    <div className="mt-20 max-w-3xl space-y-12">
      <aside className="border border-border p-6 md:p-9">
        <p className="eyebrow">Free audit</p>
        <h2 className="mt-4 text-2xl leading-tight md:text-3xl">{CTA.heading}</h2>
        <p className="prose-body mt-4 max-w-xl">{CTA.text}</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            to={`/contact/?source=free-audit-${current.split("/").filter(Boolean).pop()}`}
            className="bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-85"
          >
            {CTA.button} &rarr;
          </Link>
          <Link
            to="/services/"
            className="text-sm font-semibold text-ink underline decoration-1 underline-offset-4"
          >
            {CTA.secondary}
          </Link>
        </div>
      </aside>

      {(previous || next) && (
        <nav aria-label="More articles" className="grid gap-5 md:grid-cols-2">
          {previous ? (
            <Link to={previous.to} className={cardClass}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                &larr; Previous article
              </span>
              <span className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:underline group-hover:underline-offset-4">
                {previous.title}
              </span>
            </Link>
          ) : (
            <span className="hidden md:block" />
          )}
          {next && (
            <Link to={next.to} className={`${cardClass} md:text-right`}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Next article &rarr;
              </span>
              <span className="mt-3 text-lg font-semibold leading-snug text-foreground group-hover:underline group-hover:underline-offset-4">
                {next.title}
              </span>
            </Link>
          )}
        </nav>
      )}

      <p className="text-sm">
        <Link
          to="/blog/"
          className="font-semibold text-ink underline decoration-1 underline-offset-4"
        >
          &larr; All articles
        </Link>
      </p>
    </div>
  );
};

export default BlogEnd;
