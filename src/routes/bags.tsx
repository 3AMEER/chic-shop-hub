import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/bags")({
  head: () => ({
    meta: [
      { title: "Bags — Maison" },
      { name: "description", content: "Heritage leather totes, crossbody bags and evening clutches." },
      { property: "og:title", content: "Bags — Maison" },
      { property: "og:description", content: "Heritage leather totes, crossbody bags and clutches." },
    ],
  }),
  component: () => (
    <CategoryPage
      category="bags"
      title="Bags"
      subtitle="Heritage leather, considered shapes — companions for every chapter."
    />
  ),
});
