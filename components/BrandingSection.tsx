"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { waLinks } from "@/lib/whatsapp";

const steps = [
  {
    n: "01",
    title: "Choose your product",
    desc: "Start with a blank — oversized, regular, polo or hoodie.",
  },
  {
    n: "02",
    title: "Choose colours and sizes",
    desc: "Set the palette and size run that fits your brand.",
  },
  {
    n: "03",
    title: "Share your branding",
    desc: "Screens, prints, woven labels and neck labels.",
  },
  {
    n: "04",
    title: "Production & finishing",
    desc: "Manufactured and finished to spec.",
  },
  {
    n: "05",
    title: "Ready for your brand",
    desc: "Your product, made on quality OG Blanks blanks.",
  },
];

export function BrandingSection() {
  const reduce = useReducedMotion();
  const wa = waLinks.custom;
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Custom Branding"
            title="Your brand. Your blank. Your identity."
            sub="Turn quality blanks into your own collection with custom branding and printing."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href={wa} variant="outline" size="md">
              Talk About Your Brand
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.n} className="bg-bone">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex h-full flex-col gap-3 p-6"
              >
                <span className="font-display text-4xl font-semibold text-fabric">
                  {step.n}
                </span>
                <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-soft">{step.desc}</p>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
