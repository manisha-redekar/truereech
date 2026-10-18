import { Link } from "react-router-dom";
import { SOCIALS } from "@/lib/site";

const SiteFooter = () => (
  <footer className="border-t border-border px-6 py-10 md:px-10">
    <div className="wrap flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xl font-extrabold uppercase tracking-normal md:text-2xl">TrueReech</p>
        <p className="mt-3 text-sm text-muted-foreground">Digital visibility &bull; Content &bull; Search</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
        <Link to="/services/" className="transition-colors hover:text-foreground">Services</Link>
        <Link to="/work/" className="transition-colors hover:text-foreground">Work</Link>
        <Link to="/about/" className="transition-colors hover:text-foreground">About</Link>
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">LinkedIn</a>
        <a href={SOCIALS.bluesky} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Bluesky</a>
        <Link to="/contact/" className="transition-colors hover:text-foreground">Contact</Link>
      </div>
    </div>

    <div className="wrap mt-8 border-t border-border pt-5 text-xs text-muted-foreground">
      &copy; 2026 TrueReech. All rights reserved.
    </div>
  </footer>
);

export default SiteFooter;
