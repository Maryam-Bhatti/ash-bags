"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { useStore } from "@/components/store-provider";
import { products } from "@/data/products";

export function AddToCartButton({
  productId,
  compact = false,
}: {
  productId: string;
  compact?: boolean;
}) {
  const { addToCart } = useStore();
  const [added, setAdded] = useState(false);
  const productName = products.find((product) => product.id === productId)?.name;

  function handleAdd() {
    addToCart(productId);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      aria-label={
        compact
          ? added
            ? `${productName ?? "Item"} added to bag`
            : `Add ${productName ?? "item"} to bag`
          : "Add to bag"
      }
      className={compact ? "quick-add" : "button button-primary button-full"}
      onClick={handleAdd}
      type="button"
    >
      {compact ? (
        <Icon name={added ? "check" : "bag"} />
      ) : (
        <>{added ? "Added to your bag" : "Add to bag"} <Icon name={added ? "check" : "bag"} /></>
      )}
    </button>
  );
}
