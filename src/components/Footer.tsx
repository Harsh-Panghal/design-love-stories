import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border/50 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <img src={logo} alt="Pixel & Petal" className="h-16 w-auto mx-auto mb-2" />
        <p className="text-muted-foreground text-xs font-body tracking-wider">
          © {new Date().getFullYear()} Pixel & Petal Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
