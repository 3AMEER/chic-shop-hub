import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/accessories")({
  head: () => ({
    meta: [
      { title: "إكسسوارات — ميزون" },
      { name: "description", content: "مجوهرات وأطقم فاخرة لإطلالة لا تُنسى." },
      { property: "og:title", content: "إكسسوارات — ميزون" },
      { property: "og:description", content: "مجوهرات وأطقم فاخرة لإطلالة لا تُنسى." },
    ],
  }),
  component: () => (
    <CategoryPage
      category="accessories"
      title="الإكسسوارات"
      subtitle="اللمسة الأخيرة — مجوهرات راقية وقطع تكمل إطلالتك بأناقة."
    />
  ),
});
