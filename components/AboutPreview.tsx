"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { k: "Combed cotton", v: "100%" },
  { k: "Oversized weight", v: "240 GSM" },
  { k: "Regular weight", v: "180 GSM" },
  { k: "Origin", v: "Made in India" },
];

export function AboutPreview() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="container-site grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <ProductVisual tone="light" label="OG Blanks fabric and garment detail" />
            <div className="absolute -bottom-4 -right-4 hidden bg-ink px-6 py-4 text-bone sm:block">
              <span className="font-display text-3xl font-semibold tracking-tight">
                Est. as a concept
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeadingInline />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-soft text-pretty">
              OG Blanks is an Indian apparel manufacturer and wholesale supplier focused on
              quality blank and custom-branded T-shirts. Built around premium combs, clean
              fits and dependable bulk supply, we exist to help creators, retailers and
              growing clothing brands build on a solid base.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line">
            {stats.map((s) => (
              <div key={s.k} className="bg-bone p-6">
                <div className="font-display text-2xl font-semibold text-ink md:text-3xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-soft">
                  {s.k}
                </div>
              </div>
            ))}
          </div>

          <Reveal delay={0.15}>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink"
            >
              More about OG Blanks
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionHeadingInline() {
  return (
    <Reveal>
      <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-soft">
        <span className="h-px w-6 bg-slate-soft/50" aria-hidden="true" />
        About
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-[0.98] tracking-tight text-ink sm:text-4xl md:text-5xl text-balance">
        The blank that carries your brand
      </h2>
    </Reveal>
  );
}
