import { Minus, Plus, X, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useStore, buildWhatsAppLink } from "@/lib/store";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "./WhatsAppIcon";

export function CartDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) {
  const { cart, updateQty, removeFromCart, cartTotal, clearCart } = useStore();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col gap-0 p-0 sm:max-w-md">
        <SheetHeader className="border-b px-6 py-5">
          <SheetTitle className="font-display text-2xl">Your Bag</SheetTitle>
          <p className="text-sm text-muted-foreground">{cart.length} {cart.length === 1 ? "item" : "items"}</p>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                <X className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="font-display text-xl">Your bag is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">Add some treasures to get started.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.product.id} className="flex gap-3 rounded-xl bg-secondary/40 p-3 animate-scale-in">
                  <img src={item.product.image} alt={item.product.name} className="h-20 w-20 rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display text-lg leading-tight">{item.product.name}</h4>
                      <button onClick={() => removeFromCart(item.product.id)} aria-label="Remove">
                        <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive transition-smooth" />
                      </button>
                    </div>
                    <p className="text-sm text-accent font-medium">${item.product.price}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full bg-background px-1 py-1">
                        <button
                          onClick={() => updateQty(item.product.id, item.qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-secondary transition-smooth"
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.product.id, item.qty + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-secondary transition-smooth"
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-display text-lg font-semibold">${item.product.price * item.qty}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t bg-card px-6 py-5 space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-display text-3xl font-semibold text-accent">${cartTotal.toFixed(0)}</span>
            </div>
            <a href={buildWhatsAppLink(cart, cartTotal)} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full gap-2 bg-gradient-primary text-accent-foreground hover:opacity-90 shadow-glow h-12 text-base">
                <WhatsAppIcon className="h-5 w-5" />
                Order via WhatsApp
              </Button>
            </a>
            <button onClick={clearCart} className="w-full text-xs text-muted-foreground hover:text-destructive transition-smooth">
              Clear bag
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
