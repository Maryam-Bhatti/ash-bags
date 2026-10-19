import Link from "next/link";
import { formatPrice } from "@/data/products";
import type { Product } from "@/types/product";
import { AddToCartButton } from "@/components/product-actions";
import { ProductImage } from "@/components/product-image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link
        aria-label={`View ${product.name}`}
        className="product-card-image"
        href={`/products/${product.slug}`}
      >
        {product.badge && product.badge.toLowerCase() !== "new" && (
          <span className="product-badge">{product.badge}</span>
        )}
        <ProductImage alt={`${product.name} handbag`} src={product.image} />
        <span className="product-quick-view">Discover the details <span aria-hidden="true">↗</span></span>
      </Link>
      <div className="product-card-info">
        <div>
          <Link className="product-card-name" href={`/products/${product.slug}`}>
            {product.name}
          </Link>
          <p className="product-card-price">{formatPrice(product.price)}</p>
        </div>
        <AddToCartButton compact productId={product.id} />
      </div>
    </article>
  );
}
