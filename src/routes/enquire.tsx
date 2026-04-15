import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/enquire")({
  component: EnquirePage,
  head: () => ({
    meta: [
      { title: "Enquire — Pixel & Petal" },
      { name: "description", content: "Fill out our design enquiry form and let us bring your wedding vision to life." },
    ],
  }),
});

function EnquirePage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center px-4">
          <div className="max-w-md mx-auto">
            <div className="text-5xl mb-6">💌</div>
            <h1 className="font-heading text-3xl font-semibold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground font-body mb-8">
              We've received your enquiry and will get back to you within 24-48 hours. Can't wait to create something beautiful together!
            </p>
            <Link to="/" className="text-gold hover:text-primary transition-colors font-medium text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3 font-body">Get In Touch</p>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Design Enquiry
            </h1>
            <p className="text-muted-foreground font-body text-sm max-w-md mx-auto">
              Tell us about your dream design and we'll bring it to life with love and creativity.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6 bg-card rounded-2xl p-6 sm:p-10 border border-border/50"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Service Required *</label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
              >
                <option value="">Select a service</option>
                <option>E-Invite Suite</option>
                <option>Custom Wedding Logo / Monogram</option>
                <option>Digital Caricature / Illustration</option>
                <option>Digital Games / Party Stationery</option>
                <option>Full Branding Package</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Budget Range *</label>
              <select
                required
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
              >
                <option value="">Select your budget</option>
                <option>₹2,000 – ₹4,000</option>
                <option>₹4,000 – ₹6,000</option>
                <option>₹6,000+</option>
              </select>
            </div>

            {/* Number of people in caricature */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Number of People in Caricature</label>
              <input
                type="number"
                min="1"
                max="10"
                placeholder="e.g. 2"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
              />
            </div>

            {/* Intended Use */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Intended Use</label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
              >
                <option value="">Select intended use</option>
                <option>E-Invite</option>
                <option>Welcome Sign</option>
                <option>Gift</option>
                <option>Other</option>
              </select>
            </div>

            {/* Event Theme */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Event Theme & Style</label>
              <input
                type="text"
                placeholder="e.g. Rustic Garden, Royal Indian, Minimalist…"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
              />
            </div>

            {/* Color Palette */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Color Palette Preference</label>
              <input
                type="text"
                placeholder="e.g. Blush pink, sage green, gold"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
              />
            </div>

            {/* File Format */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Preferred File Format</label>
              <div className="flex flex-wrap gap-3 mt-1">
                {["JPG/PDF", "MP4", "GIF"].map((f) => (
                  <label key={f} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-gold w-4 h-4" />
                    <span className="text-sm text-foreground font-body">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* How did you hear */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">How Did You Hear About Us?</label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all"
              >
                <option value="">Select an option</option>
                <option>Instagram</option>
                <option>WhatsApp</option>
                <option>Friend / Family</option>
                <option>Google Search</option>
                <option>Other</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-body">Additional Notes</label>
              <textarea
                rows={4}
                placeholder="Tell us anything else about your vision…"
                className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-blush/30"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
