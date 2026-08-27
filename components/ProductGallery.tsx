"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProductVisual } from "@/components/ui/ProductVisual";
import type { Product } from "@/data/products";
import { cn } from "@/lib/cn";

const tones = ["dark", "light", "mid"] as const;

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProductVisual
              tone={tones[active % tones.length]}
              label={`${product.name} — view ${active + 1}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-3" role="tablist" aria-label="Product views">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            aria-label={`View ${i + 1}`}
            onClick={() => setActive(i)}
            className={cn(
              "flex-1 border transition-colors",
              active === i ? "border-ink" : "border-line hover:border-ink/40",
            )}
          >
            <ProductVisual tone={tones[i % tones.length]} label={""} className="aspect-square" />
          </button>
        ))}
      </div>
    </div>
  );
}
