import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md border-b border-border/50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center" aria-label="Pixel & Petal — Home">
            <img src={logo} alt="Pixel & Petal logo" className="h-12 sm:h-16 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Portfolio", "Process", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-sm font-body tracking-wide text-muted-foreground hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <Link
              to="/blog"
              className="text-sm font-body tracking-wide text-muted-foreground hover:text-gold transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/enquire"
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivory/95 backdrop-blur-md border-b border-border px-4 pb-4 animate-fade-in">
          {["Services", "Portfolio", "Process", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm text-muted-foreground hover:text-gold transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/enquire"
            onClick={() => setOpen(false)}
            className="mt-2 block text-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}
