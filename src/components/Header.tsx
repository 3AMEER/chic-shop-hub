import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { CartDrawer } from "./CartDrawer";
import { FavoritesDrawer } from "./FavoritesDrawer";

export function Header() {
  const { cartCount, favorites } = useStore();
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
              <span className="text-xl font-extrabold text-accent-foreground">م</span>
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-extrabold tracking-tight">متجر ماجيك</span>
              <span className="block text-[10px] font-medium text-muted-foreground">Magic Shop</span>
            </div>
          </Link>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setFavOpen(true)}
              aria-label="المفضلة"
              className="relative flex h-11 w-11 items-center justify-center rounded-full transition-smooth hover:bg-secondary"
            >
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <span className="absolute -start-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                  {favorites.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setCartOpen(true)}
              aria-label="السلة"
              className="relative flex h-11 w-11 items-center justify-center rounded-full transition-smooth hover:bg-secondary"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -start-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <FavoritesDrawer open={favOpen} onOpenChange={setFavOpen} />
    </>
  );
}
