import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">A little detour</span>
      <h1>This piece is<br /><em>out of sight.</em></h1>
      <p>That page isn’t in our collection. Let’s find you something lovely.</p>
      <Link className="button button-primary" href="/shop">Explore the collection <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
