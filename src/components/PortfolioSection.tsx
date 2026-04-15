import inviteImg from "@/assets/portfolio-invite.jpg";
import monogramImg from "@/assets/portfolio-monogram.jpg";
import caricatureImg from "@/assets/portfolio-caricature.jpg";
import gamesImg from "@/assets/portfolio-games.jpg";
import brandingImg from "@/assets/portfolio-branding.jpg";

const items = [
  { img: inviteImg, label: "Wedding Invite", cat: "Invitations" },
  { img: caricatureImg, label: "Couple Caricature", cat: "Illustrations" },
  { img: monogramImg, label: "Wedding Monogram", cat: "Logos" },
  { img: gamesImg, label: "Bachelorette Games", cat: "Party Stationery" },
  { img: brandingImg, label: "Full Suite", cat: "Branding" },
  { img: inviteImg, label: "Floral E-Invite", cat: "Invitations" },
];

export function PortfolioSection() {
  return (
    <section className="py-20 sm:py-28 bg-section-alt" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3 font-body">Our Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">Portfolio</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer">
              <img
                src={item.img}
                alt={item.label}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <p className="text-ivory font-heading text-lg font-semibold">{item.label}</p>
                  <p className="text-ivory/80 text-xs tracking-wider uppercase mt-1 font-body">{item.cat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
