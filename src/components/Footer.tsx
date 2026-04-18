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
                <span className="font-display text-lg font-bold text-accent-foreground">م</span>
              </div>
              <span className="font-display text-2xl font-bold">ميزون</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">قطع فاخرة منتقاة بعناية للمرأة العصرية.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold">ساعات العمل</h4>
            <p className="mt-2 text-sm text-muted-foreground">السبت – الخميس، ١١ صباحاً – ٩ مساءً</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-bold">تواصلي معنا</h4>
            <div className="mt-2 flex gap-3">
              <a href="#" aria-label="واتساب" className="flex h-10 w-10 items-center justify-center rounded-full bg-background transition-smooth hover:bg-accent hover:text-accent-foreground">
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="انستغرام" className="flex h-10 w-10 items-center justify-center rounded-full bg-background transition-smooth hover:bg-accent hover:text-accent-foreground">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="البريد الإلكتروني" className="flex h-10 w-10 items-center justify-center rounded-full bg-background transition-smooth hover:bg-accent hover:text-accent-foreground">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ميزون بوتيك. صُنع بحب.
        </div>
      </div>
    </footer>
  );
}
