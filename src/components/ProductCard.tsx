import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, toggleFav, isFav } = useStore();
  const fav = isFav(product.id);

  return (
    <div
      className="group animate-float-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft transition-smooth hover:shadow-elegant">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="h-full w-full object-cover transition-smooth group-hover:scale-110"
          />
          <button
            onClick={() => toggleFav(product.id)}
            aria-label="Toggle favorite"
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm shadow-soft transition-smooth hover:scale-110"
          >
            <Heart
              className={cn(
                "h-5 w-5 transition-smooth",
                fav ? "fill-accent text-accent" : "text-foreground/60"
              )}
            />
          </button>
          <button
            onClick={() => addToCart(product)}
            className="absolute inset-x-3 bottom-3 flex translate-y-16 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground opacity-0 shadow-elegant transition-smooth group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary/90"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to bag
          </button>
        </div>
        <div className="p-4 sm:p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.tagline}</p>
          <div className="mt-1 flex items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{product.name}</h3>
            <span className="font-display text-lg font-semibold text-accent sm:text-xl">${product.price}</span>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-secondary py-2.5 text-sm font-medium text-secondary-foreground transition-smooth hover:bg-accent hover:text-accent-foreground sm:hidden"
          >
            <ShoppingBag className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}
