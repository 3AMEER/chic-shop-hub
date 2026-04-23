import { Heart, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useStore, CURRENCY } from "@/lib/store";
import { fetchProducts, type Product } from "@/lib/products";

export function FavoritesDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { favorites, toggleFav, addToCart } = useStore();
  const [all, setAll] = useState<Product[]>([]);
  useEffect(() => { fetchProducts().then(setAll); }, []);
  const items = all.filter((p) => favorites.includes(p.id));

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b px-6 py-5 text-right">
          <SheetTitle className="font-display text-2xl">المفضلة</SheetTitle>
          <p className="text-sm text-muted-foreground">{items.length} محفوظة</p>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="font-display text-xl">لا توجد مفضلات بعد</p>
              <p className="mt-1 text-sm text-muted-foreground">اضغطي على القلب لحفظ القطع المفضلة.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((p) => (
                <li key={p.id} className="flex gap-3 rounded-xl bg-secondary/40 p-3 animate-scale-in">
                  <img src={p.image} alt={p.name} className="h-20 w-20 rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display text-lg leading-tight">{p.name}</h4>
                        <button onClick={() => toggleFav(p.id)} aria-label="إزالة من المفضلة">
                          <X className="h-4 w-4 text-muted-foreground hover:text-destructive transition-smooth" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-accent">{p.price} {CURRENCY}</p>
                    </div>
                    <button
                      onClick={() => addToCart(p)}
                      className="mt-2 flex items-center gap-2 self-start rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground transition-smooth hover:bg-primary/90"
                    >
                      <ShoppingBag className="h-3 w-3" /> أضيفي للسلة
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
