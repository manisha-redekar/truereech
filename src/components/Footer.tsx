import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => (
  <footer className="gradient-footer border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-2xl font-bold mb-2">
            <span className="text-primary">True</span>Reech
          </p>
          <p className="text-sm text-muted-foreground max-w-xs">
            Helping SaaS and D2C brands grow discovery through AI visibility, community engagement, and strategic content.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/services" className="hover:text-primary">Services</Link>
            <Link to="/blog" className="hover:text-primary">Blogs</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold mb-3">Company</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/about" className="hover:text-primary">Contact</Link>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/company/truereech/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
            <a href="https://bsky.app/profile/truereech.bsky.social" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.601 3.476 6.159 3.226-4.56.718-5.703 3.092-3.2 5.453 4.148 3.79 6.318-1.268 6.392-1.553.025-.097.037-.142.025-.097-.012-.045 0 0 .025.097.074.285 2.244 5.342 6.392 1.553 2.503-2.36 1.36-4.735-3.2-5.453 2.558.25 5.374-.6 6.16-3.226C19.621 9.418 20 4.458 20 3.768c0-.69-.139-1.861-.902-2.203-.659-.3-1.664-.62-4.3 1.24C12.046 4.747 9.087 8.686 8 10.8h4z" transform="translate(2 1)"/></svg>
            </a>
            <a href="mailto:hello@truereech.com" className="text-muted-foreground hover:text-primary"><Mail size={20} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2024 TrueReech. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
