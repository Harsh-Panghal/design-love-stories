const steps = [
  {
    num: "01",
    title: "Share Your Vision",
    desc: "Fill out our enquiry form with your event details, style preferences, and inspiration.",
    icon: "📝",
  },
  {
    num: "02",
    title: "Concept Creation",
    desc: "We craft initial concepts and mood boards tailored to your unique love story.",
    icon: "🎨",
  },
  {
    num: "03",
    title: "Refine & Perfect",
    desc: "Collaborative revisions until every detail is exactly as you envisioned.",
    icon: "✨",
  },
  {
    num: "04",
    title: "Final Delivery",
    desc: "Receive your polished designs in your preferred formats, ready to share.",
    icon: "💌",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28" id="process">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3 font-body">How It Works</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-blush-light border-2 border-gold-light flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl">
                {step.icon}
              </div>
              <p className="text-gold text-xs tracking-widest uppercase mb-2 font-body">{step.num}</p>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
