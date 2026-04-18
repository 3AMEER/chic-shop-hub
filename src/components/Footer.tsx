import { Instagram, Mail } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary">
                <span className="font-display text-lg font-bold text-accent-foreground">M</span>
              </div>
              <span className="font-display text-2xl font-semibold">Maison</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">Curated luxury for the modern aesthete.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold">Visit</h4>
            <p className="mt-2 text-sm text-muted-foreground">Open Tue–Sat, 11am – 7pm</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <div className="mt-2 flex gap-3">
              <a href="#" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-background transition-smooth hover:bg-accent hover:text-accent-foreground">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-background transition-smooth hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full bg-background transition-smooth hover:bg-accent hover:text-accent-foreground">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maison Boutique. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
