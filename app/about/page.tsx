import type { Metadata } from "next";
import Link from "next/link";
import { ProductImage } from "@/components/product-image";

export const metadata: Metadata = {
  title: "About Ash Bags",
  description:
    "Discover the Ash Bags point of view: thoughtful shapes, useful details, and handbags made for everyday life.",
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero section">
        <div className="about-copy">
          <span className="eyebrow">A note from Ash</span>
          <h1>
            Carry your own
            <br />
            <em>kind of beauty.</em>
          </h1>
          <p>
            Ash Bags is a considered collection of handbags for all the places
            life takes you: early starts, last-minute plans, and the little
            moments in between.
          </p>
          <p>
            We believe a favourite bag should feel easy to make your own, with
            thoughtful shapes, useful details, and room for the things that
            matter in your day.
          </p>
          <Link className="button button-primary" href="/shop">
            Explore the collection <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="about-image">
          <ProductImage
            alt="Cream canvas tote with warm brown leather trim"
            sizes="(max-width: 760px) 100vw, 50vw"
            src="/images/products/tote-canvas.jpg"
          />
        </div>
      </section>

      <section className="about-values-section">
        <div className="section about-values">
          <div className="about-values-heading">
            <span className="eyebrow">The Ash Bags point of view</span>
            <h2>
              Made for real life,
              <br />
              <em>and all its lovely details.</em>
            </h2>
          </div>
          <div className="about-values-grid">
            <article className="about-value-card">
              <span>01</span>
              <h3>Thoughtful shapes</h3>
              <p>
                From roomy totes to little evening bags, each silhouette has a
                place in the everyday edit.
              </p>
            </article>
            <article className="about-value-card">
              <span>02</span>
              <h3>Details that matter</h3>
              <p>
                Useful pockets, comfortable straps, and considered finishes
                make getting out the door feel a little easier.
              </p>
            </article>
            <article className="about-value-card">
              <span>03</span>
              <h3>Your style, your way</h3>
              <p>
                Easy-to-style pieces are here to complement your plans, your
                wardrobe, and the way you like to carry.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-signoff">
        <span className="eyebrow">Find your everyday favourite</span>
        <h2>
          A little more you,
          <br />
          <em>wherever you go.</em>
        </h2>
        <Link className="button button-primary" href="/shop">
          Shop Ash Bags <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
