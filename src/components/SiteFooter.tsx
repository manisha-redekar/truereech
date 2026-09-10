import { Link } from "react-router-dom";
import { NAV, SOCIALS, CONTACT_EMAIL } from "@/lib/site";

const SiteFooter = () => (
  <footer className="border-t border-border px-6 py-14 md:px-10">
    <div className="wrap grid gap-10 md:grid-cols-3">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.14em]">
          True<span className="font-medium">Reech</span>
        </p>
        <p className="prose-body mt-3 max-w-xs">
          Digital visibility, content and search strategy for businesses that want to be easier to find and understand
          online.
        </p>
      </div>

      <div>
        <p className="eyebrow">Navigate</p>
        <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="w-fit transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
          <Link to="/contact" className="w-fit transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>

      <div>
        <p className="eyebrow">Elsewhere</p>
        <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-foreground"
          >
            LinkedIn &nearr;
          </a>
          <a
            href={SOCIALS.bluesky}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-foreground"
          >
            Bluesky &nearr;
          </a>
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="w-fit transition-colors hover:text-foreground">
              {CONTACT_EMAIL}
            </a>
          )}
        </div>
      </div>
    </div>

    <div className="wrap mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
      © 2026 TrueReech. All rights reserved.
    </div>
  </footer>
);

export default SiteFooter;
