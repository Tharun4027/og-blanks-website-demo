"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { productWaMessage, waLink } from "@/lib/whatsapp";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const wa = waLink(productWaMessage(product.name));

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden">
        <Link
          href={`/products/${product.slug}`}
          className="block overflow-hidden"
          aria-label={`View ${product.name}`}
        >
          <ProductVisual
            tone={product.tone}
            label={`${product.name} — ${product.blurb}`}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </Link>

        {/* hover reveal meta */}
        <div className="absolute left-4 top-4 flex flex-col gap-1.5">
          {product.gsm && (
            <span className="bg-bone/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
              {product.gsm} GSM
            </span>
          )}
        </div>

        {/* hover CTA overlay (desktop) */}
        <div className="absolute inset-x-4 bottom-4 hidden translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:flex sm:gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex flex-1 items-center justify-center gap-2 bg-ink py-3 text-xs font-semibold uppercase tracking-[0.14em] text-bone transition-colors hover:bg-charcoal"
          >
            View Product
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-bone px-4 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-fabric"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* info row (always visible on mobile) */}
      <div className="flex flex-col gap-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-ink">
            {product.name}
          </h3>
        </div>
        <p className="text-sm text-slate-soft">{product.blurb || product.material}</p>
        <p className="text-xs uppercase tracking-[0.14em] text-slate-soft">
          {product.material}
        </p>

        {/* mobile CTAs (tap) */}
        <div className="mt-1 flex gap-2 sm:hidden">
          <Link
            href={`/products/${product.slug}`}
            className="flex flex-1 items-center justify-center gap-2 border border-ink/20 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink"
          >
            View
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 bg-ink py-3 text-xs font-semibold uppercase tracking-[0.12em] text-bone"
          >
            Enquire
            <MessageCircle className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
