import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pixel & Petal",
  "alternateName": ["Pixel and Petal", "pixelandpetal", "Pixel&Petal", "Pixel & Petal Studio", "Pixel and Petal Studio"],
  "url": "https://pixelandpetal.online",
  "logo": {
    "@type": "ImageObject",
    "url": "https://storage.googleapis.com/gpt-engineer-file-uploads/HqACFkQqQCdkhZHXVIbyajne1Ed2/social-images/social-1776235227555-pixel_petal_no_bg.webp",
    "width": 512,
    "height": 512
  },
  "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/HqACFkQqQCdkhZHXVIbyajne1Ed2/social-images/social-1776235227555-pixel_petal_no_bg.webp",
  "description": "Pixel & Petal is a custom digital wedding design studio specializing in e-invites, wedding monograms, digital caricatures, party stationery, and full branding packages. Also known as Pixel and Petal.",
  "foundingDate": "2024",
  "knowsAbout": ["wedding design", "e-invites", "wedding monograms", "digital caricatures", "wedding stationery", "branding packages"],
  "sameAs": [
    "https://instagram.com/pixelandpetal"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"],
    "url": "https://pixelandpetal.online/enquire"
  },
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Invite Suite", "description": "Custom digital wedding invitations with matching itinerary and details cards" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Monograms", "description": "Bespoke wedding monogram and logo design" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Caricatures", "description": "Custom digital couple caricature illustrations" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Party Stationery", "description": "Custom party games and stationery design" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Branding Package", "description": "Complete wedding branding and identity package" } }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pixel & Petal",
  "alternateName": ["Pixel and Petal", "pixelandpetal", "Pixel&Petal", "Pixel and Petal Studio"],
  "url": "https://pixelandpetal.online",
  "publisher": {
    "@type": "Organization",
    "name": "Pixel & Petal",
    "alternateName": ["Pixel and Petal", "pixelandpetal"]
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pixelandpetal.online/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pixelandpetal.online" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://pixelandpetal.online/#services" },
    { "@type": "ListItem", "position": 3, "name": "Portfolio", "item": "https://pixelandpetal.online/#portfolio" },
    { "@type": "ListItem", "position": 4, "name": "Process", "item": "https://pixelandpetal.online/#process" },
    { "@type": "ListItem", "position": 5, "name": "Testimonials", "item": "https://pixelandpetal.online/#testimonials" },
    { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://pixelandpetal.online/#contact" },
    { "@type": "ListItem", "position": 7, "name": "Enquire", "item": "https://pixelandpetal.online/enquire" }
  ]
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pixel & Petal — Custom Digital Wedding & Event Design Studio" },
      { name: "description", content: "Pixel & Petal is a custom digital wedding design studio. We create bespoke e-invites, wedding monograms, digital caricatures, party stationery, and full branding packages. Designing love stories, one pixel at a time." },
      { property: "og:title", content: "Pixel & Petal — Custom Digital Wedding & Event Design Studio" },
      { property: "og:description", content: "Pixel & Petal creates bespoke digital wedding designs — e-invites, monograms, caricatures, and branding packages crafted with love." },
      { property: "og:url", content: "https://pixelandpetal.online" },
    ],
    links: [
      { rel: "canonical", href: "https://pixelandpetal.online" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
});
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
