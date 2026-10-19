import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ConditionalSiteFooter } from "@/components/conditional-site-footer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreProvider } from "@/components/store-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ash Bags — Carry your own kind of beauty",
    template: "%s | Ash Bags",
  },
  description:
    "Meet Ash Bags: thoughtful handbags for all the places life takes you. Explore the collection and find your everyday favourite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <StoreProvider>
          <SiteHeader />
          <main>{children}</main>
          <ConditionalSiteFooter>
            <SiteFooter />
          </ConditionalSiteFooter>
        </StoreProvider>
      </body>
    </html>
  );
}
