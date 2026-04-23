import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { StoreProvider } from "@/lib/store";
import { AuthProvider } from "@/lib/auth";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-semibold text-foreground">٤٠٤</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-smooth hover:bg-primary/90"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "متجر ماجيك — تسوّقي بأناقة" },
      { name: "description", content: "اكتشفي أرقى الإكسسوارات والشنط النسائية. اطلبي بسهولة عبر الواتساب." },
      { property: "og:title", content: "متجر ماجيك — تسوّقي بأناقة" },
      { property: "og:description", content: "اكتشفي أرقى الإكسسوارات والشنط النسائية. اطلبي بسهولة عبر الواتساب." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "متجر ماجيك — تسوّقي بأناقة" },
      { name: "twitter:description", content: "اكتشفي أرقى الإكسسوارات والشنط النسائية. اطلبي بسهولة عبر الواتساب." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/56eafc45-a768-4602-8fd8-348f1af823d3/id-preview-b9e211b2--f3d96899-d941-4cb4-a9b4-a6ccc08d9481.lovable.app-1776927805977.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/56eafc45-a768-4602-8fd8-348f1af823d3/id-preview-b9e211b2--f3d96899-d941-4cb4-a9b4-a6ccc08d9481.lovable.app-1776927805977.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <AuthProvider>
      <StoreProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </StoreProvider>
    </AuthProvider>
  );
}
