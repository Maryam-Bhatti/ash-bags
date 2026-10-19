import Link from "next/link";
import { Icon } from "@/components/icon";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark footer-wordmark" href="/">
            <span className="wordmark-main">ASH BAGS</span>
            <span className="wordmark-sub">CARRY YOUR OWN KIND OF BEAUTY</span>
          </Link>
          <p>Thoughtful bags for all the places life takes you.</p>
          <div className="social-links">
            <a aria-label="Instagram (demo link)" href="https://www.instagram.com/" rel="noreferrer" target="_blank"><Icon name="instagram" /></a>
            <a aria-label="Facebook (demo link)" href="https://www.facebook.com/" rel="noreferrer" target="_blank"><Icon name="facebook" /></a>
            <a aria-label="Pinterest (demo link)" href="https://www.pinterest.com/" rel="noreferrer" target="_blank"><Icon name="pinterest" /></a>
          </div>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/shop">Shop all</Link>
          <Link href="/#categories">Our collections</Link>
          <Link href="/about">Our story</Link>
        </div>
        <div className="footer-column">
          <h2>Here to help</h2>
          <Link href="/contact">Contact us</Link>
          <a href="mailto:hello@ashbags.example">hello@ashbags.example</a>
          <a href="tel:+920001234567">+92 000 123 4567</a>
          <p>Monday – Saturday<br />10:00 am – 6:00 pm PKT</p>
        </div>
        <div className="footer-note">
          <span className="eyebrow eyebrow-light">A note from us</span>
          <p>Made to be reached for. Designed to be kept.</p>
          <span aria-hidden="true" className="footer-flower">✳</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ash Bags. Made with intention.</span>
        <span>Sample storefront · All prices in PKR</span>
      </div>
    </footer>
  );
}
