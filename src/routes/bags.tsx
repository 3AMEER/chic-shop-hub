import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/bags")({
  head: () => ({
    meta: [
      { title: "شنط — ميزون" },
      { name: "description", content: "شنط جلدية فاخرة بتصاميم عصرية وكلاسيكية." },
      { property: "og:title", content: "شنط — ميزون" },
      { property: "og:description", content: "شنط جلدية فاخرة بتصاميم عصرية وكلاسيكية." },
    ],
  }),
  component: () => (
    <CategoryPage
      category="bags"
      title="الشنط"
      subtitle="جلد فاخر، تصاميم عصرية — شريكتك المثالية لكل مناسبة."
    />
  ),
});
