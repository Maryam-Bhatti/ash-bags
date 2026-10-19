import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Ash Bags",
  description:
    "Contact Ash Bags with questions about the collection or this demo storefront.",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-intro">
        <span className="eyebrow">Here to help</span>
        <h1>
          We would love
          <br />
          <em>to hear from you.</em>
        </h1>
        <p>
          Have a question about a style or need help finding your next
          everyday bag? Use the sample contact details below.
        </p>
      </section>

      <section className="contact-content section">
        <div className="contact-grid">
          <article className="contact-card">
            <span className="contact-card-number">01</span>
            <h2>Email</h2>
            <p>For collection and product questions.</p>
            <a href="mailto:hello@ashbags.example">hello@ashbags.example</a>
          </article>
          <article className="contact-card">
            <span className="contact-card-number">02</span>
            <h2>Call</h2>
            <p>Sample phone contact for this storefront demo.</p>
            <a href="tel:+920001234567">+92 000 123 4567</a>
          </article>
          <article className="contact-card">
            <span className="contact-card-number">03</span>
            <h2>Hours</h2>
            <p>Sample customer-care hours.</p>
            <span>Monday–Saturday<br />10:00 am–6:00 pm PKT</span>
          </article>
        </div>
        <p className="contact-demo-note">
          Demo notice: the email, phone number, and hours above are placeholders.
          Replace them with your real business contact details before launch.
        </p>
        <div className="contact-shop-link">
          <p>Looking for your next favourite?</p>
          <Link className="text-link" href="/shop">
            Browse the collection <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
