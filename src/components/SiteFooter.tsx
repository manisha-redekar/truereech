import { Link } from "react-router-dom";
import { SOCIALS } from "@/lib/site";

const SiteFooter = () => (
  <footer className="border-t border-border px-6 py-10 md:px-10">
    <div className="wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-[13px] font-extrabold uppercase tracking-[0.22em]">TrueReech</p>
        <p className="mt-1 text-[11px] text-muted-foreground">by Manisha</p>
        <p className="mt-3 text-sm text-muted-foreground">Digital visibility • Content • Search</p>
      </div>

      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
          LinkedIn
        </a>
        <a href={SOCIALS.bluesky} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
          Bluesky
        </a>
        <Link to="/contact" className="transition-colors hover:text-foreground">
          Contact
        </Link>
        <span className="text-xs">© 2026 TrueReech. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
