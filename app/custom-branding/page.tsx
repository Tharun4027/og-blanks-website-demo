import { MessageCircle, ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { waLinks } from "@/lib/whatsapp";

export const metadata = {
  title: "Custom Branding & White Label",
  description:
    "Custom branding and white-label manufacturing for apparel brands — printing, woven labels and more, built on premium OG Blanks.",
};

const options = [
  "Screen printing",
  "Sublimation / transfer printing",
  "Woven labels",
  "Neck labels",
  "Heat-sealed logos",
  "Custom packaging",
];

const steps = [
  { n: "01", title: "Choose your product", desc: "Oversized, regular, polo or hoodie — built on a premium blank." },
  { n: "02", title: "Choose colours and sizes", desc: "Set the palette and size run that fits your brand." },
  { n: "03", title: "Share your branding", desc: "Artwork, labels and placement for your prints or weaves." },
  { n: "04", title: "Production & finishing", desc: "Manufactured and finished to your spec." },
  { n: "05", title: "Ready for your brand", desc: "Your product, your name — ready for sale." },
];

export default function CustomBrandingPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* hero */}
      <section className="container-site py-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Custom Branding"
              title="Your brand. Your blank. Your identity."
              sub="Turn quality blanks into your own collection with custom branding and printing. From a simple neck label to full white-label production, we build the product so your name is all your customer sees."
            />
            <Reveal delay={0.12} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={waLinks.custom} variant="solid" size="lg">
                  <MessageCircle className="h-4 w-4" />
                  Talk About Your Brand
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button href="/wholesale" variant="outline" size="lg">
                  Bulk Enquiry
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05} className="lg:col-span-5">
            <div className="h-full border border-line bg-fabric p-8">
              <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-ink">
                Branding options
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {options.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-ink/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section className="bg-fabric py-20">
        <div className="container-site">
          <SectionHeading eyebrow="The process" title="From blank to your brand" />
          <ol className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 0.06} className="bg-fabric">
                <li className="flex h-full flex-col gap-3 p-6">
                  <span className="font-display text-4xl font-semibold text-sand">{s.n}</span>
                  <h4 className="font-display text-lg font-semibold uppercase tracking-tight text-ink">
                    {s.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-soft">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* white label CTA */}
      <section className="container-site py-20 text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold uppercase leading-[0.98] tracking-tight text-ink sm:text-4xl text-balance">
            Build your label with OG Blanks
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-soft">
            White-label means your product carries only your name. We handle the
            manufacturing on quality blanks, end to end.
          </p>
          <div className="mt-8">
            <Button href={waLinks.custom} variant="solid" size="lg">
              Start a Custom Project
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
