import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Pixel & Petal — elegant wedding stationery and digital design" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/70 via-ivory/50 to-ivory/90" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
        <img src={logo} alt="Pixel & Petal — custom digital wedding design studio logo" className="h-28 sm:h-36 md:h-44 w-auto mx-auto mb-6" />
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
          <span className="sr-only">Pixel & Petal — </span>Designing love stories,<br />
          <span className="text-gold-gradient italic">one pixel at a time.</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 font-body leading-relaxed">
          Bespoke digital wedding & event designs crafted with artistry,
          emotion, and an eye for timeless beauty.
        </p>
        <Link
          to="/enquire"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-blush/30"
        >
          Start Your Design
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="animate-float">
            <path d="M4 8h8M8 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
