import { supabase } from "@/integrations/supabase/client";

export type Category = "accessories" | "bags";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  tagline: string;
};

export const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "accessories", label: "إكسسوارات" },
  { value: "bags", label: "شنط" },
];

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, category, image_url, tagline, sort_order, is_active")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("fetchProducts error:", error);
    return [];
  }
  return (data ?? []).map((p) => ({
    id: p.id,
    name: p.name,
    price: Number(p.price),
    category: p.category as Category,
    image: p.image_url,
    tagline: p.tagline ?? "",
  }));
}

export async function fetchAllProductsAdmin() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("category", { ascending: true })
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data ?? [];
}
