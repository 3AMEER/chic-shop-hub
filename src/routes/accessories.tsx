import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/accessories")({
  head: () => ({
    meta: [
      { title: "Accessories — Maison" },
      { name: "description", content: "Refined jewelry, scarves and watches to elevate every look." },
      { property: "og:title", content: "Accessories — Maison" },
      { property: "og:description", content: "Refined jewelry, scarves and watches." },
    ],
  }),
  component: () => (
    <CategoryPage
      category="accessories"
      title="Accessories"
      subtitle="The finishing touch — refined jewelry, silk scarves and timeless watches."
    />
  ),
});
