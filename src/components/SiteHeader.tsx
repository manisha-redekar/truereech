import { Link } from "react-router-dom";

const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
    <div className="wrap flex items-center justify-between px-6 py-4 md:px-10">
      <Link to="/" className="text-sm font-extrabold uppercase tracking-[0.14em]">
        True<span className="font-medium">Reech</span>
      </Link>

      <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
        <Link to="/" className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground">
          Home
        </Link>
        <Link
          to="/contact"
          className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </Link>
        <Link
          to="/contact"
          className="border border-foreground px-4 py-2 text-[13px] font-semibold transition-colors hover:bg-foreground hover:text-background"
        >
          Let&rsquo;s Talk &rarr;
        </Link>
      </nav>
    </div>
  </header>
);

export default SiteHeader;
