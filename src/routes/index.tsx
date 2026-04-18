import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison — Curated Luxury Boutique" },
      { name: "description", content: "Shop elegant accessories, makeup, and bags. Order seamlessly via WhatsApp." },
      { property: "og:title", content: "Maison — Curated Luxury Boutique" },
      { property: "og:description", content: "Shop elegant accessories, makeup, and bags." },
      { property: "og:image", content: hero },
      { property: "twitter:image", content: hero },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = PRODUCTS.slice(0, 8);
  const cats = CATEGORIES.filter((c) => c.value !== "all");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-background/60 px-4 py-1.5 text-xs uppercase tracking-widest text-accent backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              New collection
            </div>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Curated luxury,{" "}
              <span className="italic text-accent">delivered to your DM</span>.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              Hand-picked accessories, makeup, and bags. Shop the collection and check out instantly via WhatsApp — no forms, no fuss.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/accessories"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:scale-105"
              >
                Shop the edit
                <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </Link>
              <Link
                to="/bags"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-smooth hover:bg-background"
              >
                Explore bags
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div>
                <p className="font-display text-2xl font-semibold text-foreground">200+</p>
                <p>Pieces curated</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-semibold text-foreground">24h</p>
                <p>WhatsApp reply</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="font-display text-2xl font-semibold text-foreground">★ 4.9</p>
                <p>Client love</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-primary opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
              <img
                src={hero}
                alt="Curated luxury collection"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Shop by</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Categories</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {cats.map((c, i) => (
            <Link
              key={c.value}
              to={`/${c.value}`}
              className="group relative flex aspect-[4/5] sm:aspect-[3/4] items-end overflow-hidden rounded-2xl bg-secondary p-6 shadow-soft transition-smooth hover:shadow-elegant animate-float-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <img
                src={PRODUCTS.find((p) => p.category === c.value)?.image}
                alt={c.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="relative z-10 text-background">
                <p className="text-xs uppercase tracking-widest opacity-80">Collection</p>
                <h3 className="font-display text-3xl font-semibold sm:text-4xl">{c.label}</h3>
                <span className="mt-2 inline-flex items-center gap-1 text-sm">
                  Discover <ArrowRight className="h-3 w-3 transition-smooth group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Trending</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Featured pieces</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/all"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background px-6 py-3 text-sm font-medium transition-smooth hover:bg-secondary"
          >
            View everything <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
