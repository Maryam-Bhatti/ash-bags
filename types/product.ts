export const categories = [
  { slug: "tote-bags", name: "Tote Bags" },
  { slug: "shoulder-bags", name: "Shoulder Bags" },
  { slug: "crossbody-bags", name: "Crossbody Bags" },
  { slug: "mini-bags", name: "Mini Bags" },
  { slug: "clutches", name: "Clutches & Evening Bags" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"] | "satchel-bags";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: CategorySlug;
  image: string;
  description: string;
  details: string[];
  availability: "In stock" | "Limited stock";
  badge?: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
};

export type CartItem = {
  productId: string;
  quantity: number;
};
