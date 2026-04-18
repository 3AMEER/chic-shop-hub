import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/all")({
  head: () => ({
    meta: [
      { title: "كل المنتجات — ميزون" },
      { name: "description", content: "تصفحي كامل مجموعة ميزون من شنط وإكسسوارات." },
      { property: "og:title", content: "كل المنتجات — ميزون" },
      { property: "og:description", content: "تصفحي كامل مجموعة ميزون." },
    ],
  }),
  component: () => (
    <CategoryPage
      category="all"
      title="كل المجموعة"
      subtitle="جميع قطع ميزون في مكان واحد — شنط وإكسسوارات بأرقى التصاميم."
    />
  ),
});
