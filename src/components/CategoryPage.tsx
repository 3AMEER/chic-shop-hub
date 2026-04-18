import { ProductCard } from "./ProductCard";
import { PRODUCTS, type Category } from "@/lib/products";

export function CategoryPage({
  category,
  title,
  subtitle,
}: {
  category: Category | "all";
  title: string;
  subtitle: string;
}) {
  const items = category === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 text-center animate-float-up">
        <p className="text-xs tracking-[0.3em] text-accent">المجموعة</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
