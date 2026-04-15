const testimonials = [
  {
    name: "Ananya & Rohan",
    text: "Pixel & Petal turned our wedding vision into pure magic. The e-invites were so beautiful that guests thought they were high-end printed cards!",
    event: "December Wedding, Jaipur",
  },
  {
    name: "Priya & Arjun",
    text: "The caricature they created of us was the highlight of our welcome sign. Everyone was amazed by the detail and warmth in the illustration.",
    event: "Destination Wedding, Goa",
  },
  {
    name: "Meera & Siddharth",
    text: "From the monogram to the invitation suite — every element felt so personal and cohesive. They truly understood our aesthetic.",
    event: "Intimate Wedding, Mumbai",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-section-alt" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3 font-body">Love Notes</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">What Our Couples Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-8 border border-border/50 hover-lift">
              <div className="text-gold text-3xl mb-4 font-heading">"</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body italic">{t.text}</p>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-gold tracking-wider uppercase mt-1 font-body">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
