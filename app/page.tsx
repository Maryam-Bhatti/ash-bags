import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";
import { ProductImage } from "@/components/product-image";
import { categories, type CategorySlug } from "@/types/product";
import { products } from "@/data/products";

const categoryImages: Partial<Record<CategorySlug, string>> = {
  "shoulder-bags": "/images/products/shoulder-blush-braid.webp",
  "mini-bags": "/images/products/mini-pink-arc.webp",
  clutches: "/images/products/clutch-gold-pattern.jpg",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Carry your style, your way</span>
          <h1>Bag <em>Collection</em></h1>
          <p>Thoughtful shapes, considered details, and a favourite for every kind of day.</p>
          <Link className="button button-light" href="/shop">Shop the collection <span aria-hidden="true">↗</span></Link>
          <span className="hero-index">MADE FOR YOUR EVERYDAY</span>
        </div>
        <div className="hero-photo hero-bag-photo">
          <ProductImage
            alt="A silver shoulder bag with blush-pink straps against a pale background"
            priority
            sizes="(max-width: 760px) 50vw, 30vw"
            src="/images/hero-left.webp"
          />
          <span className="hero-photo-caption">THE EVERYDAY EDIT</span>
        </div>
        <div className="hero-photo hero-model-photo">
          <ProductImage
            alt="Model in a pink dress carrying a brown everyday shoulder bag"
            priority
            sizes="(max-width: 760px) 50vw, 40vw"
            src="/images/products/shoulder-model.jpg"
          />
          <span className="hero-photo-caption">MADE FOR YOUR MOMENTS</span>
        </div>
      </section>

      <section className="section categories-section" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Find your kind of carry</span>
            <h2>Shop by <em>Category.</em></h2>
          </div>
          <Link className="text-link" href="/shop">Explore all styles</Link>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              className={`category-card category-card-${index + 1}`}
              href={`/shop?category=${category.slug}`}
              key={category.slug}
            >
              <ProductImage
                alt={`${category.name} collection`}
                src={
                  categoryImages[category.slug] ??
                  products.find((product) => product.category === category.slug)?.image ??
                  "bag:sunday-tote"
                }
              />
              <span className="category-card-shade" />
              <span className="category-card-caption">
                <span className="category-number">0{index + 1}</span>
                <span className="category-name">{category.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="seasonal-banner">
        <div className="seasonal-photo">
          <ProductImage
            alt="A cream canvas tote with warm brown leather trim"
            src="/images/products/tote-canvas.jpg"
          />
        </div>
        <div className="seasonal-copy">
          <span className="eyebrow">Made for every day</span>
          <h2>A little room<br />for <em>lovely things.</em></h2>
          <p>Meet the tote edit: easy shapes and thoughtful details, ready to come along wherever the day takes you.</p>
          <Link className="button button-primary" href="/shop?category=tote-bags">Discover the tote edit <span aria-hidden="true">↗</span></Link>
          <span aria-hidden="true" className="seasonal-mark">✳</span>
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-heading">
          <span className="eyebrow eyebrow-light">Kind words, for the moodboard</span>
          <h2>A little love<br /><em>from our community.</em></h2>
          <p>Sample testimonials for this demo storefront.</p>
        </div>
        <div className="review-grid">
          {[
            { quote: "The kind of bag that makes even a grocery run feel a bit more put together.", name: "Ayesha K.", note: "Sample testimonial" },
            { quote: "A lovely, useful everyday shape. It has quietly become the one I reach for first.", name: "Sana R.", note: "Sample testimonial" },
            { quote: "Beautiful little details, and somehow it goes with absolutely everything I own.", name: "Mariam T.", note: "Sample testimonial" },
          ].map((review) => (
            <figure className="review-card" key={review.name}>
              <span aria-label="5 out of 5 stars" className="review-stars">★★★★★</span>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>{review.name}<span>{review.note}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="newsletter-section" id="newsletter">
        <span aria-hidden="true" className="newsletter-flower">✳</span>
        <span className="eyebrow">A note now and then</span>
        <h2>Good things, <em>in your inbox.</em></h2>
        <p>New arrivals, considered edits and the occasional note from us. No noise, promise.</p>
        <NewsletterForm />
        <span className="newsletter-disclaimer">By signing up, you agree to our demo newsletter experience.</span>
      </section>
    </>
  );
}
