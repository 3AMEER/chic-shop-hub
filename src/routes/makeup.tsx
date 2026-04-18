import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/makeup")({
  head: () => ({
    meta: [
      { title: "Makeup — Maison" },
      { name: "description", content: "Luxurious makeup essentials and signature scents." },
      { property: "og:title", content: "Makeup — Maison" },
      { property: "og:description", content: "Luxurious makeup essentials and signature scents." },
    ],
  }),
  component: () => (
    <CategoryPage
      category="makeup"
      title="Makeup"
      subtitle="Velvet textures, golden hues, and signature scents — for the moment you arrive."
    />
  ),
});
