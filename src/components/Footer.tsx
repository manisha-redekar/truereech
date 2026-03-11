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
            Helping SaaS products get discovered through AI visibility, community engagement, and authority content.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-3">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/services" className="hover:text-primary">Services</Link>
            <Link to="/blog" className="hover:text-primary">Blog</Link>
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
            <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Mail size={20} /></a>
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
