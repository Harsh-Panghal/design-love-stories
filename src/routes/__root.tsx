import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pixel & Petal — Custom Digital Wedding & Event Design Studio" },
      { name: "description", content: "Pixel & Petal is a custom digital wedding design studio specializing in e-invites, monograms, caricatures, and branding packages. Designing love stories, one pixel at a time." },
      { name: "author", content: "Pixel & Petal" },
      { property: "og:site_name", content: "Pixel & Petal" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixelandpetal.online" },
      { property: "og:title", content: "Pixel & Petal — Custom Digital Wedding Design Studio" },
      { property: "og:description", content: "Pixel & Petal creates bespoke digital wedding & event designs — e-invites, monograms, caricatures, and full branding packages crafted with love." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HqACFkQqQCdkhZHXVIbyajne1Ed2/social-images/social-1776235227555-pixel_petal_no_bg.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Pixel & Petal — Custom Digital Wedding Design Studio" },
      { name: "twitter:description", content: "Pixel & Petal creates bespoke digital wedding & event designs — e-invites, monograms, caricatures, and full branding packages." },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/HqACFkQqQCdkhZHXVIbyajne1Ed2/social-images/social-1776235227555-pixel_petal_no_bg.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://pixelandpetal.online" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
