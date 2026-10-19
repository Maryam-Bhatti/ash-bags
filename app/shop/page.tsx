import { ShopCatalog } from "@/components/shop-catalog";
import { categories } from "@/types/product";

type ShopPageProps = {
  searchParams: Promise<{ category?: string; sort?: string }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const requestedCategory =
    params.category === "clutches-evening-bags" ? "clutches" : params.category;
  const category = categories.find((item) => item.slug === requestedCategory)?.slug ?? "all";
  const sort =
    params.sort === "price-asc" || params.sort === "price-desc"
      ? params.sort
      : "featured";

  return (
    <ShopCatalog
      initialCategory={category}
      initialSort={sort}
    />
  );
}
