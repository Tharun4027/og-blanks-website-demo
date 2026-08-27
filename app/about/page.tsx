import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { ManufacturingTimeline } from "@/components/ManufacturingTimeline";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { waLinks } from "@/lib/whatsapp";

export const metadata = {
  title: "About",
  description:
    "OG Blanks is an Indian apparel manufacturer and wholesale supplier of quality blank and custom-branded T-shirts.",
};

const pillars = [
  {
    title: "Apparel manufacturing",
    desc: "Cut, stitched and finished in-house with consistent, repeatable output.",
  },
  {
    title: "Quality blanks",
    desc: "Premium combs and clean fits so your design is the only thing that stands out.",
  },
  {
    title: "Wholesale supply",
    desc: "Best-fit pricing for retailers, boutiques and growing labels.",
  },
  {
    title: "Custom branding",
    desc: "Printing, labels and white-label production under your own name.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* hero */}
      <section className="container-site grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <Reveal>
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-soft">
            <span className="h-px w-6 bg-slate-soft/50" aria-hidden="true" />
            About OG Blanks
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
            The blank that carries your brand
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-soft md:text-lg text-pretty">
            OG Blanks is an Indian apparel manufacturer and wholesale supplier of blank and
            custom-branded T-shirts. From everyday essentials to bulk and custom
            manufacturing, our job is simple — build quality bases that make your brand look
            its best.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/collections" variant="solid" size="lg">
              Explore Products
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href={waLinks.general} variant="outline" size="lg">
              Talk to OG Blanks
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ProductVisual tone="dark" label="OG Blanks premium apparel" />
        </Reveal>
      </section>

      {/* pillars */}
      <section className="bg-fabric py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we do"
            title="Built around the brand"
            sub="We focus on the foundations — fabric, fit and finish — so your product stands above the rest."
          />
          <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.06} className="bg-fabric">
                <div className="flex flex-col gap-2 p-8">
                  <span className="font-display text-3xl font-semibold text-fabric">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-soft">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ManufacturingTimeline />

      {/* CTA band */}
      <section className="container-site py-20 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold uppercase leading-[0.98] tracking-tight text-ink sm:text-4xl text-balance">
            Ready to build on a premium blank?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-soft">
            Tell us what you need — from a single style to a full white-label collection.
          </p>
          <div className="mt-8">
            <Button href={waLinks.bulk} variant="solid" size="lg">
              Start a Bulk Enquiry
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
