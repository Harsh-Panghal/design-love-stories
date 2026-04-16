import { Link } from "@tanstack/react-router";
import inviteImg from "@/assets/portfolio-invite.jpg";
import monogramImg from "@/assets/portfolio-monogram.jpg";
import caricatureImg from "@/assets/portfolio-caricature.jpg";
import gamesImg from "@/assets/portfolio-games.jpg";
import brandingImg from "@/assets/portfolio-branding.jpg";

const services = [
  {
    title: "E-Invite Suite",
    desc: "A stunning digital invitation paired with a matching itinerary & details card — everything your guests need in one beautiful package.",
    img: inviteImg,
    icon: "✉️",
  },
  {
    title: "Custom Wedding Logo",
    desc: "An elegant monogram or logo that encapsulates your love story, perfect for invites, signage, and keepsakes.",
    img: monogramImg,
    icon: "💍",
  },
  {
    title: "Digital Caricature",
    desc: "Whimsical, custom-drawn couple illustrations that add a playful, personal touch to your wedding stationery.",
    img: caricatureImg,
    icon: "🎨",
  },
  {
    title: "Games & Party Stationery",
    desc: "Fun bachelorette games, shower activities, and party printables designed to match your event's theme and vibe.",
    img: gamesImg,
    icon: "🎉",
  },
  {
    title: "Full Branding Package",
    desc: "The complete experience — invitation suite, custom logo, and caricature, all woven together in a cohesive design language.",
    img: brandingImg,
    icon: "✨",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3 font-body">What We Create</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                 <img
                  src={s.img}
                  alt={`${s.title} — Pixel & Petal custom wedding design`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-ivory/90 flex items-center justify-center text-lg">
                  {s.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-body">{s.desc}</p>
                <Link
                  to="/enquire"
                  className="text-sm font-medium text-gold hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Enquire Now
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7h8M7 3l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
