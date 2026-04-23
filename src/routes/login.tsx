import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "تسجيل الدخول — متجر ماجيك" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setBusy(true);
    try {
      if (mode === "login") {
        const { error } = await signIn(email, password);
        if (error) {
          setError(error);
          return;
        }
        navigate({ to: "/admin" });
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          setError(error);
          return;
        }
        setInfo("تم إنشاء الحساب. تحقّقي من بريدك لتأكيد الحساب ثم سجّلي الدخول.");
        setMode("login");
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4">
      <div className="w-full rounded-3xl border border-border/60 bg-card p-8 shadow-soft">
        <h1 className="text-2xl font-extrabold">{mode === "login" ? "تسجيل الدخول" : "إنشاء حساب إدارة"}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          الدخول إلى لوحة الإدارة لإدارة المنتجات.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-xs font-semibold">البريد الإلكتروني</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold">كلمة السر</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent"
              placeholder="••••••"
            />
          </div>
          {error && <p className="rounded-lg bg-destructive/10 p-3 text-xs text-destructive">{error}</p>}
          {info && <p className="rounded-lg bg-secondary p-3 text-xs">{info}</p>}
          <button
            type="submit"
            disabled={busy}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-soft transition-smooth hover:opacity-90 disabled:opacity-60"
          >
            {busy && <Loader2 className="h-4 w-4 animate-spin" />}
            {mode === "login" ? "دخول" : "إنشاء حساب"}
          </button>
        </form>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          {mode === "login" ? (
            <>
              لا يوجد حساب؟{" "}
              <button onClick={() => setMode("signup")} className="font-bold text-accent hover:underline">
                أنشئي حساباً
              </button>
            </>
          ) : (
            <>
              لديك حساب؟{" "}
              <button onClick={() => setMode("login")} className="font-bold text-accent hover:underline">
                تسجيل الدخول
              </button>
            </>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-xs text-muted-foreground hover:underline">
            العودة للمتجر
          </Link>
        </div>
      </div>
    </div>
  );
}
