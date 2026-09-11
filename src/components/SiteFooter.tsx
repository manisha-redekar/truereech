import { Link } from "react-router-dom";
import { SOCIALS } from "@/lib/site";

const SiteFooter = () => (
  <footer className="border-t border-border px-6 py-12 md:px-10">
    <div className="wrap flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.14em]">
          True<span className="font-medium">Reech</span> — by Manisha
        </p>
        <p className="mt-3 text-sm text-muted-foreground">Digital visibility • Content • Search</p>
      </div>

      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
          LinkedIn
        </a>
        <a href={SOCIALS.bluesky} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
          Bluesky
        </a>
        <Link to="/contact" className="transition-colors hover:text-foreground">
          Contact
        </Link>
      </div>
    </div>

    <div className="wrap mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
      © 2026 TrueReech. All rights reserved.
    </div>
  </footer>
);

export default SiteFooter;
