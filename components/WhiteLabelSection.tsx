"use client";

import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { waLinks } from "@/lib/whatsapp";

const services = [
  { title: "Blank apparel", desc: "Quality, ready-to-brand essentials." },
  { title: "Custom branding", desc: "Woven labels, neck labels and motifs." },
  { title: "Printing", desc: "Print your artwork onto the blank." },
  { title: "Bulk supply", desc: "Scale for events and collections." },
  { title: "Retail supply", desc: "Consistent stock for your store." },
  { title: "Wholesale supply", desc: "Best-fit pricing for volume." },
];

export function WhiteLabelSection() {
  return (
    <section className="bg-fabric py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="White-Label Manufacturing"
            title="Build your label with OG Blanks"
            sub="White-label means you sell the product under your own name — we handle the manufacturing on quality blanks, so all that's visible to your customer is your brand."
          />
          <Reveal delay={0.1} className="shrink-0">
            <a
              href={waLinks.custom}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-bone transition-colors hover:bg-charcoal"
            >
              Talk About Your Brand
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06} className="bg-fabric">
              <div className="flex h-full flex-col gap-1.5 p-7">
                <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-soft">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
