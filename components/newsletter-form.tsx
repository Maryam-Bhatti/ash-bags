"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icon";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  }

  return subscribed ? (
    <p aria-live="polite" className="newsletter-success"><Icon name="check" /> You’re on the list. See you in your inbox.</p>
  ) : (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        autoComplete="email"
        id="newsletter-email"
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        required
        type="email"
        value={email}
      />
      <button aria-label="Subscribe to the Ash Bags newsletter" type="submit"><Icon name="arrow" /></button>
    </form>
  );
}
