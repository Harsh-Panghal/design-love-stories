import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In — Pixel & Petal Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin/blog" });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { emailRedirectTo: `${window.location.origin}/admin/blog` },
      });
      if (error) setMsg(error.message);
      else setMsg("Account created! Ask the site owner to grant admin access.");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg(error.message);
      else navigate({ to: "/admin/blog" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory px-4">
      <div className="w-full max-w-md bg-card border border-border/50 rounded-2xl p-8 shadow-xl">
        <Link to="/" className="block text-center text-sm text-muted-foreground hover:text-gold mb-6">
          ← Back to site
        </Link>
        <h1 className="font-heading text-3xl text-center mb-2">
          {mode === "signin" ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-center text-sm text-muted-foreground mb-6">
          Pixel & Petal admin access
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email" required placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background"
          />
          <input
            type="password" required minLength={6} placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background"
          />
          <button
            type="submit" disabled={loading}
            className="w-full py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </form>
        {msg && <p className="mt-4 text-sm text-center text-muted-foreground">{msg}</p>}
        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-6 w-full text-sm text-gold hover:underline"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
