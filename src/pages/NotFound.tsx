import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border px-6 py-4 md:px-10">
        <Link to="/" className="text-sm font-extrabold uppercase tracking-[0.14em]">
          True<span className="font-medium">Reech</span>
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-6">
        <div className="text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-3xl leading-tight md:text-5xl">This page doesn&rsquo;t exist.</h1>
          <p className="prose-body mt-4 max-w-md">
            The page you&rsquo;re looking for may have moved or was never published.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Back to Home &rarr;
          </Link>
        </div>
      </main>

      <footer className="border-t border-border px-6 py-6 md:px-10">
        <p className="text-xs text-muted-foreground">© 2026 TrueReech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotFound;
