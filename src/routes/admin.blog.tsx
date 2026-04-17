import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  published: boolean;
  published_at: string | null;
};

export const Route = createFileRoute("/admin/blog")({
  head: () => ({
    meta: [
      { title: "Blog Admin — Pixel & Petal" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminBlog,
});

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function AdminBlog() {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Partial<Post> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate({ to: "/auth" }); return; }
      const { data: roles } = await supabase
        .from("user_roles").select("role").eq("user_id", session.user.id);
      const admin = (roles || []).some((r) => r.role === "admin");
      setIsAdmin(admin);
      setAuthChecked(true);
      if (admin) loadPosts();
    };
    check();
  }, [navigate]);

  const loadPosts = async () => {
    const { data } = await supabase
      .from("blog_posts").select("*").order("created_at", { ascending: false });
    setPosts(data || []);
  };

  const handleSave = async () => {
    if (!editing?.title || !editing?.content) return;
    setSaving(true);
    const { data: { session } } = await supabase.auth.getSession();
    const payload = {
      title: editing.title,
      slug: editing.slug || slugify(editing.title),
      excerpt: editing.excerpt || null,
      content: editing.content,
      cover_image_url: editing.cover_image_url || null,
      published: !!editing.published,
      published_at: editing.published ? (editing.published_at || new Date().toISOString()) : null,
      author_id: session?.user.id,
    };
    if (editing.id) {
      await supabase.from("blog_posts").update(payload).eq("id", editing.id);
    } else {
      await supabase.from("blog_posts").insert(payload);
    }
    setEditing(null);
    setSaving(false);
    loadPosts();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    loadPosts();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  if (!authChecked) return <div className="min-h-screen flex items-center justify-center">Loading…</div>;

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="font-heading text-3xl mb-3">Not authorized</h1>
          <p className="text-muted-foreground mb-4">
            Your account doesn't have admin access. Ask the site owner to grant the <code>admin</code> role.
          </p>
          <button onClick={handleSignOut} className="text-gold hover:underline">Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div>
            <h1 className="font-heading text-3xl">Blog Admin</h1>
            <Link to="/blog" className="text-sm text-gold hover:underline">View public blog →</Link>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setEditing({ title: "", content: "", published: false })}
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm"
            >+ New Post</button>
            <button onClick={handleSignOut} className="px-5 py-2 rounded-full border border-border text-sm">
              Sign out
            </button>
          </div>
        </div>

        {editing && (
          <div className="bg-card border border-border rounded-2xl p-6 mb-8 space-y-4">
            <h2 className="font-heading text-xl">{editing.id ? "Edit Post" : "New Post"}</h2>
            <input
              placeholder="Title" value={editing.title || ""}
              onChange={(e) => setEditing({ ...editing, title: e.target.value, slug: editing.slug || slugify(e.target.value) })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            />
            <input
              placeholder="Slug (url-friendly)" value={editing.slug || ""}
              onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background font-mono text-sm"
            />
            <input
              placeholder="Cover image URL (optional)" value={editing.cover_image_url || ""}
              onChange={(e) => setEditing({ ...editing, cover_image_url: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            />
            <textarea
              placeholder="Excerpt (short summary)" value={editing.excerpt || ""}
              onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
              rows={2}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background"
            />
            <textarea
              placeholder="Content (full post)" value={editing.content || ""}
              onChange={(e) => setEditing({ ...editing, content: e.target.value })}
              rows={12}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background font-body"
            />
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={!!editing.published}
                onChange={(e) => setEditing({ ...editing, published: e.target.checked })} />
              Published (visible to public)
            </label>
            <div className="flex gap-3">
              <button onClick={handleSave} disabled={saving}
                className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm disabled:opacity-50">
                {saving ? "Saving…" : "Save"}
              </button>
              <button onClick={() => setEditing(null)}
                className="px-5 py-2 rounded-full border border-border text-sm">Cancel</button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {posts.length === 0 && <p className="text-muted-foreground text-center py-8">No posts yet.</p>}
          {posts.map((p) => (
            <div key={p.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-heading text-lg truncate">{p.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${p.published ? "bg-sage/30 text-foreground" : "bg-muted text-muted-foreground"}`}>
                    {p.published ? "Published" : "Draft"}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-mono">/{p.slug}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditing(p)} className="px-3 py-1.5 rounded-full border border-border text-xs">Edit</button>
                <button onClick={() => handleDelete(p.id)} className="px-3 py-1.5 rounded-full border border-destructive/30 text-destructive text-xs">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
