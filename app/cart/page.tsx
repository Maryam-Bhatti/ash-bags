"use client";

import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { Icon } from "@/components/icon";
import { useStore } from "@/components/store-provider";
import { formatPrice, products } from "@/data/products";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useStore();
  const lines = cart.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return product ? [{ ...item, product }] : [];
  });
  const subtotal = lines.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <section className="cart-section section">
      <div className="page-heading">
        <span className="eyebrow">A few good choices</span>
        <h1>Your <em>bag.</em></h1>
        <p>A little line-up of the things you love.</p>
      </div>
      {lines.length ? (
        <div className="cart-layout">
          <div className="cart-items">
            {lines.map(({ product, quantity }) => (
              <article className="cart-item" key={product.id}>
                <Link className="cart-item-image" href={`/products/${product.slug}`}>
                  <ProductImage alt={`${product.name} handbag`} src={product.image} />
                </Link>
                <div className="cart-item-info">
                  <span className="eyebrow">Ash Bags</span>
                  <Link className="cart-item-name" href={`/products/${product.slug}`}>{product.name}</Link>
                  <span className="cart-item-price">{formatPrice(product.price)}</span>
                  <div className="quantity-control" aria-label={`Quantity for ${product.name}`}>
                    <button
                      aria-label={`Decrease ${product.name} quantity`}
                      disabled={quantity <= 1}
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      type="button"
                    ><Icon name="minus" /></button>
                    <span aria-live="polite">{quantity}</span>
                    <button
                      aria-label={`Increase ${product.name} quantity`}
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      type="button"
                    ><Icon name="plus" /></button>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(product.id)}
                    type="button"
                  ><Icon name="trash" /> Remove</button>
                </div>
                <span className="cart-line-total">{formatPrice(product.price * quantity)}</span>
              </article>
            ))}
          </div>
          <aside className="order-summary">
            <span className="eyebrow">The details</span>
            <h2>Order summary</h2>
            <div><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div><span>Delivery</span><span className="complimentary">Complimentary</span></div>
            <div className="summary-total"><span>Total</span><span>{formatPrice(subtotal)}</span></div>
            <Link className="button button-primary button-full" href="/checkout">Continue to checkout <span aria-hidden="true">↗</span></Link>
            <p className="summary-demo-note">Demo checkout only. No payment or delivery will be processed.</p>
            <Link className="text-link continue-shopping" href="/shop">Continue exploring <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      ) : (
        <div className="empty-state cart-empty">
          <span aria-hidden="true">✳</span>
          <h2>Your bag is taking a little breather.</h2>
          <p>When something catches your eye, it’ll be waiting here.</p>
          <Link className="button button-primary" href="/shop">Find your favourite <span aria-hidden="true">↗</span></Link>
        </div>
      )}
    </section>
  );
}
