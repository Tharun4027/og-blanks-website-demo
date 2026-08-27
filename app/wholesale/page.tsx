import { MessageCircle, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Button } from "@/components/ui/Button";
import { waLinks } from "@/lib/whatsapp";

export const metadata = {
  title: "Wholesale & Bulk Orders",
  description:
    "Wholesale supply and bulk orders for clothing labels, retailers and boutiques — premium blanks, custom branding and white-label manufacturing by OG Blanks.",
};

const steps = [
  {
    n: "01",
    title: "Tell us what you need",
    desc: "Product, quantity, sizes, colours and branding requirements.",
  },
  {
    n: "02",
    title: "Get a quote",
    desc: "We share pricing based on your order size and specs.",
  },
  {
    n: "03",
    title: "Confirm & produce",
    desc: "Approve samples, lock your order and we begin production.",
  },
  {
    n: "04",
    title: "Dispatch",
    desc: "QC-checked product packed and shipped for your store or label.",
  },
];

const serviceList = [
  "Bulk orders",
  "Wholesale supply",
  "Retail supply",
  "Custom branding",
  "White-label manufacturing",
  "Printing",
];

export default function WholesalePage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="container-site py-14 md:py-20">
        <SectionHeading
          eyebrow="Wholesale & Bulk"
          title="Bulk orders made simple."
          sub="Whether you're launching a new clothing label, stocking your store or planning your next collection, tell us what you need and we'll take it from there."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* services + steps */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">
              What we supply
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceList.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-ink/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-clay" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>

            <ol className="mt-12 flex flex-col">
              {steps.map((s) => (
                <Reveal key={s.n}>
                  <li className="flex gap-5 border-b border-line py-6 last:border-b-0">
                    <span className="font-display text-3xl font-semibold text-fabric">
                      {s.n}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-display text-lg font-semibold uppercase tracking-tight text-ink">
                        {s.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-soft">{s.desc}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.1} className="mt-8">
              <Button href={waLinks.wholesale} variant="outline" size="lg">
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          {/* form */}
          <Reveal className="lg:col-span-7">
            <div className="border border-line bg-fabric/40 p-2 sm:p-4">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
