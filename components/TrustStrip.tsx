"use client";

import { Reveal } from "@/components/ui/Reveal";

const items = [
  {
    value: "240 GSM",
    label: "French Terry",
  },
  {
    value: "180 GSM",
    label: "Regular Fit",
  },
  {
    value: "100%",
    label: "Combed Cotton",
  },
  {
    value: "Made in India",
    label: "Apparel Manufacturing",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Our credentials" className="border-y border-line bg-bone">
      <div className="container-site grid grid-cols-2 gap-y-8 py-10 sm:grid-cols-2 md:grid-cols-4 md:py-12">
        {items.map((item, i) => (
          <Reveal
            key={item.value}
            delay={i * 0.08}
            className="flex flex-col gap-1.5 border-l border-line pl-5 first:border-l-0 sm:first:border-l sm:first:pl-5 sm:[&:nth-child(3)]:border-l-0"
          >
            <span className="font-display text-2xl font-semibold uppercase tracking-tight text-ink md:text-3xl">
              {item.value}
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-slate-soft">
              {item.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
