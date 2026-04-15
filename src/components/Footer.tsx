export function Footer() {
  return (
    <footer className="py-10 border-t border-border/50 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-heading text-lg text-gold mb-2">Pixel & Petal</p>
        <p className="text-muted-foreground text-xs font-body tracking-wider">
          © {new Date().getFullYear()} Pixel & Petal Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
