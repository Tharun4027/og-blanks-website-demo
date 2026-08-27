"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = ["Fabric", "Cutting", "Stitching", "Finishing", "Quality Check", "Dispatch"];

export function ManufacturingTimeline() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-ink py-20 text-bone md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Process"
          title="From fabric to finished product"
          sub="Every piece moves through a disciplined process — from raw fabric to a QC-checked, dispatch-ready product."
        />

        <ol className="mt-14 flex flex-col gap-0 lg:grid lg:grid-cols-6 lg:gap-2">
          {steps.map((step, i) => (
            <li key={step} className="flex flex-1 flex-col lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: reduce ? 0 : i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex h-full items-center gap-4 py-4 lg:flex-col lg:items-start lg:gap-3 lg:py-0"
              >
                <span className="font-display text-sm text-sand/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-semibold uppercase tracking-tight text-bone lg:text-2xl">
                  {step}
                </span>
                {/* connector */}
                {i < steps.length - 1 && (
                  <span
                    className="ml-auto hidden h-px w-6 bg-sand/40 lg:block lg:h-1 lg:w-6"
                    aria-hidden="true"
                  />
                )}
              </motion.div>
              {/* mobile connector */}
              {i < steps.length - 1 && (
                <span
                  className="ml-[7px] block h-5 w-px bg-sand/30 lg:hidden"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-bone/70">
            From the first metre of fabric to final quality check and dispatch, every stage is
            handled in-house with consistent, repeatable output — so your brand stays
            on-spec, order after order.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
