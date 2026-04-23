import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, Search, ArrowDownUp } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
import hero from "@/assets/hero.jpg";

// خلط ثابت (deterministic) لمنتجات "الكل" حتى لا يتغيّر الترتيب عند كل إعادة عرض
function interleaveByCategory<T extends { category: string }>(items: T[]): T[] {
  const groups = new Map<string, T[]>();
  items.forEach((it) => {
    if (!groups.has(it.category)) groups.set(it.category, []);
    groups.get(it.category)!.push(it);
  });
  // خلط ثابت داخل كل مجموعة باستخدام بذرة بسيطة
  const seeded = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  };
  let seedCounter = 1;
  groups.forEach((arr) => {
    const rand = seeded(seedCounter++);
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  });
  // التداخل (interleave) بحيث يتناوب كل صنف مع الآخر
  const result: T[] = [];
  const lists = Array.from(groups.values());
  let added = true;
  while (added) {
    added = false;
    for (const list of lists) {
      const next = list.shift();
      if (next) {
        result.push(next);
        added = true;
      }
    }
  }
  return result;
}

const SHUFFLED_ALL = interleaveByCategory(PRODUCTS);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "متجر ماجيك — تسوّقي بأناقة" },
      { name: "description", content: "تسوّقي أرقى الإكسسوارات والشنط النسائية. اطلبي بسهولة عبر الواتساب." },
      { property: "og:title", content: "متجر ماجيك — تسوّقي بأناقة" },
      { property: "og:description", content: "تسوّقي أرقى الإكسسوارات والشنط النسائية." },
      { property: "og:image", content: hero },
      { property: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

type Filter = Category | "all";

function HomePage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"default" | "asc" | "desc">("default");

  const items = useMemo(() => {
    let list = filter === "all" ? SHUFFLED_ALL : PRODUCTS.filter((p) => p.category === filter);
    if (query.trim()) {
      const q = query.trim();
      list = list.filter((p) => p.name.includes(q) || p.tagline.includes(q));
    }
    if (sort === "asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [filter, query, sort]);

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/60 px-4 py-1.5 text-xs font-medium text-accent backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              مجموعة جديدة
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.25] text-foreground sm:text-5xl lg:text-6xl">
              لمسة سحرية،{" "}
              <span className="text-accent">تصلك عبر واتساب</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              إكسسوارات وشنط مختارة بعناية. تصفّحي المجموعة وأكملي طلبك مباشرة عبر الواتساب — بدون تعقيد.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant transition-smooth hover:scale-105"
              >
                تسوّقي الآن
                <ArrowLeft className="h-4 w-4 transition-smooth group-hover:-translate-x-1" />
              </button>
              <button
                onClick={() => {
                  setFilter("bags");
                  scrollToProducts();
                }}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-smooth hover:bg-background"
              >
                عرض الشنط
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div>
                <p className="text-2xl font-extrabold text-foreground">+{PRODUCTS.length}</p>
                <p className="mt-1">قطعة فاخرة</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-extrabold text-foreground">٢٤س</p>
                <p className="mt-1">رد سريع</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-extrabold text-foreground">★ ٤.٩</p>
                <p className="mt-1">تقييم العميلات</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
              <img
                src={hero}
                alt="مجموعة فخامة منتقاة"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products with filters */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-widest text-accent">المجموعة</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">اكتشفي القطع</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            استخدمي الفلاتر للوصول السريع إلى ما يناسبك.
          </p>
        </div>

        {/* Elegant filter bar */}
        <div className="sticky top-[68px] z-30 -mx-4 mb-8 bg-background/80 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 sm:py-4">
          <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-3 rounded-2xl border border-border/60 bg-card/70 p-2 shadow-soft backdrop-blur-md sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:p-1.5 sm:ps-2">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute end-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحثي عن قطعة..."
                className="h-11 w-full rounded-full bg-transparent px-4 pe-10 text-sm outline-none placeholder:text-muted-foreground/70"
              />
            </div>

            {/* Categories segmented */}
            <div className="flex items-center gap-1 rounded-full bg-secondary/70 p-1">
              {CATEGORIES.map((c) => {
                const active = filter === c.value;
                return (
                  <button
                    key={c.value}
                    onClick={() => setFilter(c.value as Filter)}
                    className={`flex-1 whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-smooth sm:px-4 sm:text-sm ${
                      active
                        ? "bg-background text-foreground shadow-soft"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Sort */}
            <div className="relative">
              <ArrowDownUp className="pointer-events-none absolute end-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                aria-label="ترتيب"
                className="h-11 w-full appearance-none rounded-full bg-secondary/70 px-4 pe-9 text-xs font-semibold text-foreground outline-none transition-smooth hover:bg-secondary sm:w-auto sm:text-sm"
              >
                <option value="default">المميزة</option>
                <option value="asc">الأقل سعراً</option>
                <option value="desc">الأعلى سعراً</option>
              </select>
            </div>
          </div>
          <div className="mx-auto mt-2 max-w-5xl px-2 text-center text-xs text-muted-foreground sm:text-start">
            {items.length} {items.length === 1 ? "منتج" : "منتجات"}
          </div>
        </div>

        {/* Grid */}
        {items.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {items.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl bg-secondary/40 py-20 text-center">
            <Search className="mb-3 h-10 w-10 text-muted-foreground" />
            <p className="text-lg font-bold">لا توجد نتائج</p>
            <p className="mt-1 text-sm text-muted-foreground">جرّبي كلمة مختلفة أو غيّري الفلاتر.</p>
          </div>
        )}
      </section>
    </>
  );
}
