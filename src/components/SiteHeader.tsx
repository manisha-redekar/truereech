import { Link } from "react-router-dom";

const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
    <div className="wrap flex items-center justify-between px-6 py-4 md:px-10">
      <Link to="/" className="leading-none">
        <span className="block text-[13px] font-extrabold uppercase tracking-[0.22em]">TrueReech</span>
        <span className="mt-1 block text-[11px] text-muted-foreground">by Manisha</span>
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
          className="bg-foreground px-4 py-2.5 text-[13px] font-semibold text-background transition-opacity hover:opacity-85"
        >
          Let&rsquo;s Talk &rarr;
        </Link>
      </nav>
    </div>
  </header>
);

export default SiteHeader;
