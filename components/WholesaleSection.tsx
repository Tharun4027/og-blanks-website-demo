"use client";

import { MessageCircle, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";
import { waLinks } from "@/lib/whatsapp";

const points = [
  "Launching a new clothing label",
  "Stocking your store or boutique",
  "Planning your next collection",
  "Printing and custom branding",
];

export function WholesaleSection() {
  return (
    <section id="wholesale" className="bg-bone py-20 md:py-28">
      <div className="container-site grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* left copy */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Wholesale & Bulk"
            title="Bulk orders made simple."
            sub="Whether you're launching a new clothing label, stocking your store or planning your next collection, tell us what you need."
          />
          <ul className="mt-8 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-ink/80">
                <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <Reveal delay={0.15} className="mt-8">
            <a
              href={waLinks.bulk}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire directly on WhatsApp
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        {/* form */}
        <Reveal className="lg:col-span-7">
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
