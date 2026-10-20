"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { useStore } from "@/components/store-provider";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const { itemCount } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <div className="announcement-bar">Discover Your Everyday Elegance <span aria-hidden="true">✦</span></div>
      <header className="site-header">
        <div className="header-inner">
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="primary-navigation"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
          <Link aria-label="Ash Bags home" className="wordmark" href="/">
            <span className="wordmark-main">ASH BAGS</span>
            <span className="wordmark-sub">CARRY YOUR OWN KIND OF BEAUTY</span>
          </Link>
          <nav
            aria-label="Main navigation"
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
          >
            {links.map((link) => (
              <Link href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link aria-label={`Shopping bag with ${itemCount} items`} className="header-bag" href="/cart">
              <Icon name="bag" />
              <span className="bag-label">Bag</span>
              <span aria-live="polite" className="bag-count">{itemCount}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
