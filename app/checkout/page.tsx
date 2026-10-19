"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ProductImage } from "@/components/product-image";
import { useStore } from "@/components/store-provider";
import { formatPrice, products } from "@/data/products";

type DeliveryDetails = {
  name: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
};

const initialDetails: DeliveryDetails = {
  name: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
};

export default function CheckoutPage() {
  const { cart, clearCart } = useStore();
  const [details, setDetails] = useState(initialDetails);
  const [error, setError] = useState("");
  const [order, setOrder] = useState<{ id: string; name: string; total: number } | null>(null);
  const lines = cart.flatMap((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return product ? [{ ...item, product }] : [];
  });
  const total = lines.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!lines.length) {
      setError("Your bag is empty. Add a piece before continuing.");
      return;
    }
    if (!/^[+()\-\s\d]{7,20}$/.test(details.phone.trim())) {
      setError("Enter a valid phone number so we can include it with your demo order.");
      return;
    }
    if (details.postalCode.trim().length < 3) {
      setError("Enter a valid postal code (at least 3 characters).");
      return;
    }
    const orderId = `ASH-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setOrder({ id: orderId, name: details.name.trim(), total });
    clearCart();
  }

  if (order) {
    return (
      <section className="confirmation-section">
        <div className="confirmation-card">
          <span className="confirmation-icon">✳</span>
          <span className="eyebrow">A demo order, made</span>
          <h1>Thank you,<br /><em>{order.name}.</em></h1>
          <p>Your sample order <strong>{order.id}</strong> has been created for this demo. No payment was taken and no delivery has been arranged.</p>
          <div className="confirmation-total"><span>Demo order total</span><strong>{formatPrice(order.total)}</strong></div>
          <Link className="button button-primary" href="/shop">Back to the collection <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-section section">
      <div className="page-heading checkout-heading">
        <span className="eyebrow">The last little detail</span>
        <h1>Demo <em>checkout.</em></h1>
        <p>This is a sample checkout experience. No real order, payment or delivery will be processed.</p>
      </div>
      {lines.length ? (
        <div className="checkout-layout">
          <form
            className="checkout-form"
            onSubmit={handleSubmit}
            onInvalid={() => setError("Please complete all required fields before placing your demo order.")}
          >
            <div className="form-section-heading"><span>01</span><h2>Where should we send your sample order?</h2></div>
            <label className="form-field">
              <span>Full name <span aria-hidden="true">*</span></span>
              <input
                autoComplete="name"
                onChange={(event) => setDetails({ ...details, name: event.target.value })}
                required
                value={details.name}
              />
            </label>
            <label className="form-field">
              <span>Phone number <span aria-hidden="true">*</span></span>
              <input
                autoComplete="tel"
                onChange={(event) => setDetails({ ...details, phone: event.target.value })}
                placeholder="+92 300 1234567"
                required
                type="tel"
                value={details.phone}
              />
            </label>
            <label className="form-field">
              <span>Street address <span aria-hidden="true">*</span></span>
              <input
                autoComplete="street-address"
                onChange={(event) => setDetails({ ...details, address: event.target.value })}
                placeholder="House, street, area"
                required
                value={details.address}
              />
            </label>
            <div className="form-two-columns">
              <label className="form-field">
                <span>City <span aria-hidden="true">*</span></span>
                <input
                  autoComplete="address-level2"
                  onChange={(event) => setDetails({ ...details, city: event.target.value })}
                  required
                  value={details.city}
                />
              </label>
              <label className="form-field">
                <span>Postal code <span aria-hidden="true">*</span></span>
                <input
                  autoComplete="postal-code"
                  onChange={(event) => setDetails({ ...details, postalCode: event.target.value })}
                  required
                  value={details.postalCode}
                />
              </label>
            </div>
            <div className="form-section-heading payment-heading"><span>02</span><h2>Payment</h2></div>
            <label className="payment-option">
              <input defaultChecked name="payment" type="radio" value="cod" />
              <span><strong>Cash on Delivery</strong><small>Demo option only — no payment will be collected.</small></span>
              <span aria-hidden="true" className="radio-mark" />
            </label>
            {error && <p aria-live="assertive" className="form-error">{error}</p>}
            <button className="button button-primary button-full" type="submit">Place demo order <span aria-hidden="true">↗</span></button>
            <p className="checkout-privacy-note">Your details are used only to demonstrate the form and aren’t sent to a server.</p>
          </form>
          <aside className="checkout-summary">
            <span className="eyebrow">A quick look</span>
            <h2>Your sample order</h2>
            <div className="checkout-summary-items">
              {lines.map(({ product, quantity }) => (
                <div className="checkout-summary-item" key={product.id}>
                  <div className="checkout-summary-image"><ProductImage alt="" src={product.image} /></div>
                  <div><strong>{product.name}</strong><span>Qty {quantity}</span></div>
                  <span>{formatPrice(product.price * quantity)}</span>
                </div>
              ))}
            </div>
            <div className="summary-total"><span>Total</span><span>{formatPrice(total)}</span></div>
            <p className="summary-demo-note">For portfolio demonstration only. This does not create a real purchase.</p>
            <Link className="text-link continue-shopping" href="/cart">← Back to your bag</Link>
          </aside>
        </div>
      ) : (
        <div className="empty-state cart-empty">
          <span aria-hidden="true">✳</span>
          <h2>Your bag is empty.</h2>
          <p>Explore the collection and find something you love.</p>
          <Link className="button button-primary" href="/shop">Shop Ash Bags <span aria-hidden="true">↗</span></Link>
        </div>
      )}
    </section>
  );
}
