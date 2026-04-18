import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/all")({
  head: () => ({
    meta: [
      { title: "All Products — Maison" },
      { name: "description", content: "Browse the entire Maison collection." },
      { property: "og:title", content: "All Products — Maison" },
      { property: "og:description", content: "Browse the entire Maison collection." },
    ],
  }),
  component: () => (
    <CategoryPage
      category="all"
      title="The Edit"
      subtitle="Every piece in the Maison collection — accessories, makeup and bags, together."
    />
  ),
});
