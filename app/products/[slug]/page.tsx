import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/product-actions";
import { ProductImage } from "@/components/product-image";
import { formatPrice, getProductBySlug, products } from "@/data/products";
import { categories } from "@/types/product";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return product
    ? { title: product.name, description: product.description }
    : { title: "Piece not found" };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoryName = categories.find((item) => item.slug === product.category)?.name;

  return (
    <section className="product-detail-section">
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><span>{product.name}</span>
      </nav>
      <div className="product-detail">
        <div className="product-detail-photo">
          <ProductImage
            alt={`${product.name}, ${categoryName}`}
            sizes="(max-width: 800px) 100vw, 55vw"
            src={product.image}
          />
          <span className="photo-note">A CLOSER LOOK · ASH BAGS</span>
        </div>
        <div className="product-detail-copy">
          <span className="eyebrow">{categoryName}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">{formatPrice(product.price)}</p>
          <span className={product.availability === "In stock" ? "availability" : "availability availability-limited"}>
            <span /> {product.availability} · Demo inventory
          </span>
          <p className="detail-description">{product.description}</p>
          <ul className="detail-features">
            {product.details.map((detail) => <li key={detail}><span aria-hidden="true">✳</span>{detail}</li>)}
          </ul>
          <AddToCartButton productId={product.id} />
          <p className="detail-note">Demo storefront only. No real payment or delivery will be processed.</p>
          <div className="detail-care"><span>Thoughtful details</span><span>Made for everyday</span><span>Easy to love</span></div>
        </div>
      </div>
      <div className="product-detail-back"><Link className="text-link" href="/shop">← Back to the collection</Link></div>
    </section>
  );
}
