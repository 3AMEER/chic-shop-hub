import necklace from "@/assets/p-necklace.jpg";
import earrings from "@/assets/p-earrings.jpg";
import scarf from "@/assets/p-scarf.jpg";
import watch from "@/assets/p-watch.jpg";
import lipstick from "@/assets/p-lipstick.jpg";
import palette from "@/assets/p-palette.jpg";
import perfume from "@/assets/p-foundation.jpg";
import brushes from "@/assets/p-brushes.jpg";
import tote from "@/assets/p-tote.jpg";
import crossbody from "@/assets/p-crossbody.jpg";
import clutch from "@/assets/p-clutch.jpg";

export type Category = "accessories" | "makeup" | "bags";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  tagline: string;
};

export const PRODUCTS: Product[] = [
  { id: "a1", name: "Étoile Pendant", price: 89, category: "accessories", image: necklace, tagline: "Crystal & gold" },
  { id: "a2", name: "Halo Hoops", price: 64, category: "accessories", image: earrings, tagline: "18k gold-plated" },
  { id: "a3", name: "Soie Silk Scarf", price: 120, category: "accessories", image: scarf, tagline: "Hand-rolled silk" },
  { id: "a4", name: "Lumière Watch", price: 245, category: "accessories", image: watch, tagline: "Rose gold finish" },
  { id: "m1", name: "Velours Lipstick", price: 38, category: "makeup", image: lipstick, tagline: "Matte rouge" },
  { id: "m2", name: "Sunset Palette", price: 72, category: "makeup", image: palette, tagline: "Six warm tones" },
  { id: "m3", name: "Rose d'Or Perfume", price: 95, category: "makeup", image: perfume, tagline: "Floral signature" },
  { id: "m4", name: "Atelier Brush Set", price: 110, category: "makeup", image: brushes, tagline: "12-piece collection" },
  { id: "b1", name: "Sable Tote", price: 280, category: "bags", image: tote, tagline: "Italian leather" },
  { id: "b2", name: "Noir Crossbody", price: 320, category: "bags", image: crossbody, tagline: "Quilted with gold chain" },
  { id: "b3", name: "Blush Envelope", price: 175, category: "bags", image: clutch, tagline: "Evening clutch" },
];

export const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "accessories", label: "Accessories" },
  { value: "makeup", label: "Makeup" },
  { value: "bags", label: "Bags" },
];
