import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { Loader2, Plus, Pencil, Trash2, LogOut, Eye, EyeOff, Upload } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "لوحة الإدارة — متجر ماجيك" }],
  }),
  component: AdminPage,
});

type Row = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: string;
  image_url: string;
  is_active: boolean;
  sort_order: number;
};

function AdminPage() {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [rows, setRows] = useState<Row[]>([]);
  const [busy, setBusy] = useState(true);
  const [editing, setEditing] = useState<Row | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  const load = async () => {
    setBusy(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("category", { ascending: true })
      .order("sort_order", { ascending: true });
    if (!error) setRows((data as Row[]) ?? []);
    setBusy(false);
  };

  useEffect(() => {
    if (isAdmin) load();
  }, [isAdmin]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-accent" />
      </div>
    );
  }

  if (!user) return null;

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-2xl font-extrabold">لا توجد صلاحية</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          هذا الحساب ({user.email}) ليس لديه صلاحية الإدارة.
        </p>
        <p className="mt-4 rounded-xl bg-secondary p-4 text-xs text-muted-foreground">
          لتفعيل الصلاحية، افتحي قاعدة البيانات وأضيفي صفاً في جدول <code>user_roles</code> بـ
          <br />
          <span dir="ltr" className="font-mono">user_id = {user.id}</span>
          <br />ودور <span dir="ltr">role = 'admin'</span>
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => signOut()}
            className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold"
          >
            تسجيل الخروج
          </button>
          <Link
            to="/"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            العودة للمتجر
          </Link>
        </div>
      </div>
    );
  }

  const remove = async (id: string) => {
    if (!confirm("حذف هذا المنتج نهائياً؟")) return;
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      alert("فشل الحذف: " + error.message);
      return;
    }
    load();
  };

  const toggleActive = async (row: Row) => {
    await supabase.from("products").update({ is_active: !row.is_active }).eq("id", row.id);
    load();
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold sm:text-3xl">لوحة الإدارة</h1>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold"
          >
            عرض المتجر
          </Link>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-1 rounded-full bg-secondary px-4 py-2 text-xs font-semibold"
          >
            <LogOut className="h-3.5 w-3.5" /> خروج
          </button>
        </div>
      </header>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-bold">المنتجات ({rows.length})</h2>
        <button
          onClick={() => {
            setEditing(null);
            setShowForm(true);
          }}
          className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-soft transition-smooth hover:opacity-90"
        >
          <Plus className="h-4 w-4" /> إضافة منتج
        </button>
      </div>

      {busy ? (
        <div className="flex justify-center py-16">
          <Loader2 className="h-6 w-6 animate-spin text-accent" />
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-1 divide-y divide-border">
            {rows.map((r) => (
              <div key={r.id} className="flex items-center gap-3 p-3 sm:p-4">
                <img
                  src={r.image_url}
                  alt={r.name}
                  className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-sm font-bold">{r.name}</h3>
                    {!r.is_active && (
                      <span className="rounded-full bg-muted px-2 py-0.5 text-[10px]">مخفي</span>
                    )}
                  </div>
                  <p className="truncate text-xs text-muted-foreground">{r.tagline}</p>
                  <p className="mt-0.5 text-xs">
                    <span className="font-bold text-accent">{r.price} جنيه</span>
                    <span className="text-muted-foreground"> • {r.category === "bags" ? "شنط" : "إكسسوارات"}</span>
                  </p>
                </div>
                <div className="flex flex-shrink-0 items-center gap-1">
                  <button
                    onClick={() => toggleActive(r)}
                    title={r.is_active ? "إخفاء" : "إظهار"}
                    className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
                  >
                    {r.is_active ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => {
                      setEditing(r);
                      setShowForm(true);
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => remove(r.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showForm && (
        <ProductForm
          initial={editing}
          onClose={() => setShowForm(false)}
          onSaved={() => {
            setShowForm(false);
            load();
          }}
        />
      )}
    </div>
  );
}

function ProductForm({
  initial,
  onClose,
  onSaved,
}: {
  initial: Row | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [tagline, setTagline] = useState(initial?.tagline ?? "");
  const [price, setPrice] = useState<string>(String(initial?.price ?? ""));
  const [category, setCategory] = useState<string>(initial?.category ?? "bags");
  const [imageUrl, setImageUrl] = useState(initial?.image_url ?? "");
  const [uploading, setUploading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setErr(null);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("product-images")
        .upload(path, file, { cacheControl: "3600", upsert: false });
      if (upErr) throw upErr;
      const { data } = supabase.storage.from("product-images").getPublicUrl(path);
      setImageUrl(data.publicUrl);
    } catch (e: any) {
      setErr("فشل رفع الصورة: " + (e.message ?? e));
    } finally {
      setUploading(false);
    }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (!imageUrl) {
      setErr("يجب اختيار صورة للمنتج");
      return;
    }
    const priceN = Number(price);
    if (isNaN(priceN) || priceN < 0) {
      setErr("سعر غير صالح");
      return;
    }
    setBusy(true);
    const payload = {
      name: name.trim(),
      tagline: tagline.trim(),
      price: priceN,
      category,
      image_url: imageUrl,
    };
    const { error } = initial
      ? await supabase.from("products").update(payload).eq("id", initial.id)
      : await supabase.from("products").insert(payload);
    setBusy(false);
    if (error) {
      setErr("فشل الحفظ: " + error.message);
      return;
    }
    onSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-center">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-background shadow-elegant">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h3 className="text-lg font-bold">{initial ? "تعديل المنتج" : "منتج جديد"}</h3>
          <button onClick={onClose} className="rounded-full px-3 py-1 text-sm hover:bg-secondary">
            ✕
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4 p-5">
          <div>
            <label className="mb-1 block text-xs font-semibold">الصورة</label>
            <div className="flex items-start gap-3">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt=""
                  className="h-24 w-24 flex-shrink-0 rounded-xl object-cover"
                />
              ) : (
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-xs text-muted-foreground">
                  لا توجد صورة
                </div>
              )}
              <label className="flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-border p-4 text-center text-xs text-muted-foreground transition hover:border-accent hover:bg-secondary/40">
                {uploading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Upload className="h-5 w-5" />
                )}
                <span>{uploading ? "جاري الرفع..." : "اختاري صورة من جهازك"}</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  disabled={uploading}
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) upload(f);
                  }}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold">اسم المنتج</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-semibold">وصف قصير</label>
            <input
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="مثال: جلد طبيعي"
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-semibold">السعر (جنيه)</label>
              <input
                type="number"
                required
                min={0}
                step="1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold">الفئة</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="bags">شنط</option>
                <option value="accessories">إكسسوارات</option>
              </select>
            </div>
          </div>

          {err && <p className="rounded-lg bg-destructive/10 p-3 text-xs text-destructive">{err}</p>}

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full bg-secondary py-2.5 text-sm font-semibold"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={busy || uploading}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-60"
            >
              {busy && <Loader2 className="h-4 w-4 animate-spin" />}
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
