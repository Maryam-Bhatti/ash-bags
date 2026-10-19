"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Icon } from "@/components/icon";
import { products } from "@/data/products";
import { categories, type CategorySlug } from "@/types/product";

type SortOrder = "featured" | "price-asc" | "price-desc";

type ShopCatalogProps = {
  initialCategory: CategorySlug | "all";
  initialSort: SortOrder;
};

export function ShopCatalog({ initialCategory, initialSort }: ShopCatalogProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategorySlug | "all">(initialCategory);
  const [sort, setSort] = useState<SortOrder>(initialSort);

  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesSearch = product.name.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    if (sort === "price-asc") return filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return filtered.sort((a, b) => b.price - a.price);
    return filtered;
  }, [category, search, sort]);

  return (
    <>
      <section className="shop-intro">
        <span className="eyebrow eyebrow-light">A good place to start</span>
        <h1>Find the one<br /><em>you’ll reach for.</em></h1>
        <p>Considered shapes for the plans you make and the ones you don’t.</p>
      </section>
      <section className="catalog-section section">
        <div className="catalog-toolbar">
          <div className="catalog-result-count">
            <span className="eyebrow">The Ash Bags collection</span>
            <p>{visibleProducts.length} {visibleProducts.length === 1 ? "piece" : "pieces"} to explore</p>
          </div>
          <label className="search-field">
            <Icon name="search" />
            <span className="sr-only">Search by product name</span>
            <input
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search the collection"
              type="search"
              value={search}
            />
          </label>
          <label className="sort-field">
            <span>Sort</span>
            <select
              onChange={(event) => {
                const value = event.target.value;
                if (value === "featured" || value === "price-asc" || value === "price-desc") {
                  setSort(value);
                }
              }}
              value={sort}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </label>
        </div>
        <div aria-label="Filter by category" className="category-filters">
          <button
            aria-pressed={category === "all"}
            className={category === "all" ? "filter-chip is-selected" : "filter-chip"}
            onClick={() => setCategory("all")}
            type="button"
          >All pieces</button>
          {categories.map((item) => (
            <button
              aria-pressed={category === item.slug}
              className={category === item.slug ? "filter-chip is-selected" : "filter-chip"}
              key={item.slug}
              onClick={() => setCategory(item.slug)}
              type="button"
            >{item.name}</button>
          ))}
        </div>
        {visibleProducts.length ? (
          <div className="product-grid catalog-grid">
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="empty-state">
            <span aria-hidden="true">✳</span>
            <h2>No bags found just yet.</h2>
            <p>Try a different name or clear the category filter to explore all the pieces.</p>
            <button
              className="button button-primary"
              onClick={() => { setSearch(""); setCategory("all"); }}
              type="button"
            >Clear filters</button>
          </div>
        )}
      </section>
    </>
  );
}
