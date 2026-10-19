"use client";

import Image from "next/image";
import { useState } from "react";
import { HandbagIllustration } from "@/components/handbag-illustration";

type ProductImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
};

export function ProductImage({
  src,
  alt,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  priority = false,
}: ProductImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (src.startsWith("bag:")) {
    return <HandbagIllustration alt={alt} name={src.slice(4)} />;
  }

  if (failedSrc === src) {
    return (
      <HandbagIllustration
        alt="Illustrated handbag shown because the product photo is unavailable."
        name="sunday-tote"
      />
    );
  }

  return (
    <Image
      alt={alt}
      className="product-image"
      fill
      onError={() => setFailedSrc(src)}
      priority={priority}
      sizes={sizes}
      src={src}
      unoptimized
    />
  );
}
