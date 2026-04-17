import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Pixel & Petal | Wedding Design Inspiration" },
      { name: "description", content: "Explore the Pixel & Petal blog for wedding design inspiration, trends, behind-the-scenes stories, and tips on bespoke digital invitations and event branding." },
      { property: "og:title", content: "Blog — Pixel & Petal" },
      { property: "og:description", content: "Wedding design inspiration, trends, and stories from the Pixel & Petal studio." },
      { property: "og:url", content: "https://pixelandpetal.online/blog" },
    ],
    links: [{ rel: "canonical", href: "https://pixelandpetal.online/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("id, title, slug, excerpt, cover_image_url, published_at")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .then(({ data }) => {
        setPosts(data || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-4">
              The <span className="text-gold-gradient italic">Journal</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto font-body">
              Wedding design inspiration, behind-the-scenes stories, and tips from the Pixel & Petal studio.
            </p>
          </header>

          {loading ? (
            <p className="text-center text-muted-foreground">Loading posts…</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-muted-foreground">No posts yet — check back soon ✨</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {post.cover_image_url && (
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {post.published_at && (
                      <p className="text-xs uppercase tracking-wider text-gold mb-2 font-body">
                        {new Date(post.published_at).toLocaleDateString("en-US", {
                          year: "numeric", month: "long", day: "numeric",
                        })}
                      </p>
                    )}
                    <h2 className="font-heading text-xl text-foreground mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground font-body line-clamp-3">{post.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
