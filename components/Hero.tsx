"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { waLinks } from "@/lib/whatsapp";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20">
      <div className="container-site grid grid-cols-1 items-end gap-8 pb-14 pt-10 md:grid-cols-12 md:pb-20 md:pt-16">
        {/* text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="col-span-1 flex flex-col gap-7 md:col-span-7"
        >
          <motion.span
            variants={item}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-soft"
          >
            <span className="h-px w-8 bg-slate-soft/50" aria-hidden="true" />
            Apparel Manufacturing · Wholesale · Custom Branding
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-[13vw] font-semibold uppercase leading-[0.9] tracking-tight text-ink sm:text-7xl md:text-8xl lg:text-[6.5rem] text-balance"
          >
            Blanks built
            <br />
            for brands.
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-slate-soft md:text-lg text-pretty"
          >
            Premium blank apparel for creators, retailers and growing clothing brands.
            From everyday essentials to bulk and custom manufacturing.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 pt-2 sm:flex-row"
          >
            <Button href="/collections" variant="solid" size="lg">
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href={waLinks.bulk} variant="outline" size="lg">
              Start a Bulk Enquiry
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* visual */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 md:col-span-5"
        >
          <div className="relative">
            <ProductVisual
              tone="dark"
              label="OG Blanks Oversized French Terry T-Shirt"
              className="max-h-[560px]"
            />
            <div className="absolute -bottom-4 left-4 flex items-center gap-2 bg-bone/95 px-4 py-3 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                240 GSM
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-soft" aria-hidden="true" />
              <span className="text-xs text-slate-soft">French Terry</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
