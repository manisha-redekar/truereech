import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="wrap flex items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="text-sm font-extrabold uppercase tracking-[0.14em]">
          True<span className="font-medium">Reech</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
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

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-6 pb-6 pt-2 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="block border-b border-border py-3 text-sm font-medium">
            Contact
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 block border border-foreground px-4 py-3 text-center text-sm font-semibold"
          >
            Let&rsquo;s Talk &rarr;
          </Link>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
