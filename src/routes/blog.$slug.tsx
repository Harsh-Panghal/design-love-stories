import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  published_at: string | null;
};

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — Pixel & Petal Blog` },
      { property: "og:url", content: `https://pixelandpetal.online/blog/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `https://pixelandpetal.online/blog/${params.slug}` }],
  }),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
      });
  }, [slug]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          {loading ? (
            <p className="text-center text-muted-foreground">Loading…</p>
          ) : !post ? (
            <div className="text-center py-20">
              <h1 className="font-heading text-3xl mb-4">Post not found</h1>
              <Link to="/blog" className="text-gold hover:underline">← Back to blog</Link>
            </div>
          ) : (
            <>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-gold transition-colors mb-6 inline-block">
                ← Back to blog
              </Link>
              {post.published_at && (
                <p className="text-xs uppercase tracking-wider text-gold mb-3 font-body">
                  {new Date(post.published_at).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </p>
              )}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              {post.cover_image_url && (
                <img
                  src={post.cover_image_url}
                  alt={post.title}
                  className="w-full rounded-2xl mb-8 aspect-[16/9] object-cover"
                />
              )}
              <div className="prose prose-lg max-w-none font-body text-foreground/90 whitespace-pre-wrap leading-relaxed">
                {post.content}
              </div>
            </>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
