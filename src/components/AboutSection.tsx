export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-section-alt" id="about">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-sm tracking-[0.25em] uppercase text-gold mb-3 font-body">Our Story</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-8">
          Where Art Meets Emotion
        </h2>
        <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6 max-w-2xl mx-auto font-body">
          At <span className="text-gold font-medium">Pixel & Petal</span>, we believe every love story deserves
          to be told beautifully. Founded with a passion for blending digital artistry with
          heartfelt storytelling, we create custom wedding designs that capture the essence
          of your unique celebration.
        </p>
        <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-2xl mx-auto font-body">
          From elegantly illustrated e-invites to playful caricatures and bespoke monograms,
          every piece is handcrafted with meticulous attention to detail — because your
          special moments deserve nothing less than extraordinary.
        </p>
      </div>
    </section>
  );
}
