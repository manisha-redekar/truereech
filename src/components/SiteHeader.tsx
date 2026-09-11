import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="wrap flex items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="leading-none" onClick={() => setOpen(false)}>
          <span className="block text-[13px] font-extrabold uppercase tracking-[0.22em]">TrueReech</span>
          <span className="mt-1 block text-[11px] text-muted-foreground">by Manisha</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
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

        <button
          type="button"
          className="p-1 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-6 pb-5 pt-2 md:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="block border-b border-border py-3 text-sm font-medium">
            Home
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block border-b border-border py-3 text-sm font-medium"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
          >
            Let&rsquo;s Talk &rarr;
          </Link>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
