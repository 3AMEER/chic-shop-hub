import { Link, useLocation } from "@tanstack/react-router";
import { Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { CartDrawer } from "./CartDrawer";
import { FavoritesDrawer } from "./FavoritesDrawer";
import { CATEGORIES } from "@/lib/products";

export function Header() {
  const { cartCount, favorites } = useStore();
  const [cartOpen, setCartOpen] = useState(false);
  const [favOpen, setFavOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const loc = useLocation();

  const navItems = CATEGORIES.map((c) => ({
    to: c.value === "all" ? "/" : `/${c.value}`,
    label: c.label,
  }));

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
              <span className="font-display text-lg font-bold text-accent-foreground">م</span>
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">ميزون</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = loc.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-smooth ${
                    active ? "text-accent" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {active && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent" />}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setFavOpen(true)}
              aria-label="المفضلة"
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition-smooth hover:bg-secondary"
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
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition-smooth hover:bg-secondary"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -start-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="القائمة"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-smooth hover:bg-secondary md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <nav className="flex flex-col px-4 py-2">
              {navItems.map((item) => {
                const active = loc.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-smooth ${
                      active ? "bg-secondary text-accent" : "text-foreground/80 hover:bg-secondary/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      <FavoritesDrawer open={favOpen} onOpenChange={setFavOpen} />
    </>
  );
}
