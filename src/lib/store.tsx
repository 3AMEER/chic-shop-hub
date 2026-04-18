import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./products";

type CartItem = { product: Product; qty: number };

type StoreCtx = {
  cart: CartItem[];
  favorites: string[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleFav: (id: string) => void;
  isFav: (id: string) => boolean;
  cartCount: number;
  cartTotal: number;
};

const Ctx = createContext<StoreCtx | null>(null);

const CART_KEY = "boutique:cart";
const FAV_KEY = "boutique:favs";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem(CART_KEY);
      const f = localStorage.getItem(FAV_KEY);
      if (c) setCart(JSON.parse(c));
      if (f) setFavorites(JSON.parse(f));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
  }, [favorites, hydrated]);

  const addToCart = (p: Product) =>
    setCart((c) => {
      const ex = c.find((i) => i.product.id === p.id);
      if (ex) return c.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...c, { product: p, qty: 1 }];
    });

  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.product.id !== id));
  const updateQty = (id: string, qty: number) =>
    setCart((c) => (qty <= 0 ? c.filter((i) => i.product.id !== id) : c.map((i) => (i.product.id === id ? { ...i, qty } : i))));
  const clearCart = () => setCart([]);
  const toggleFav = (id: string) =>
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const isFav = (id: string) => favorites.includes(id);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.qty * i.product.price, 0);

  return (
    <Ctx.Provider
      value={{ cart, favorites, addToCart, removeFromCart, updateQty, clearCart, toggleFav, isFav, cartCount, cartTotal }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be inside StoreProvider");
  return c;
}

// عدّلي رقم الواتساب إلى رقمك (صيغة دولية بدون +)
export const WHATSAPP_NUMBER = "1234567890";
export const CURRENCY = "ر.س";

export function buildWhatsAppLink(cart: CartItem[], total: number) {
  const lines = cart.map(
    (i) => `• ${i.product.name} × ${i.qty} — ${(i.product.price * i.qty).toFixed(0)} ${CURRENCY}`
  );
  const msg = `مرحباً! أرغب في تأكيد طلبي:%0A%0A${lines.join("%0A")}%0A%0A*الإجمالي: ${total.toFixed(0)} ${CURRENCY}*`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
