import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MessageCircle, ArrowUpRight, Check } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { ProductGallery } from "@/components/ProductGallery";
import { productWaMessage, waLink } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name} — ${product.blurb}. ${product.material}, premium blank apparel by OG Blanks.`,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const wa = waLink(productWaMessage(product.name));

  const infoRows = [
    product.gsm ? ["Weight", `${product.gsm} GSM`] : null,
    product.material ? ["Material", product.material] : null,
    ...(product.finishes ?? []).map((f) => ["Finish", f]),
    ["Origin", "Made in India"],
  ].filter(Boolean) as [string, string][];

  return (
    <div className="pt-16 md:pt-20">
      <div className="container-site grid grid-cols-1 gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-16">
        {/* gallery */}
        <div>
          <ProductGallery product={product} />
        </div>

        {/* info */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-soft">
            {product.category}
          </span>
          <h1 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl text-balance">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-soft md:text-lg">
            {product.description}
          </p>

          {/* info rows */}
          <dl className="mt-8 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {infoRows.map(([k, v]) => (
              <div key={k} className="bg-bone p-4">
                <dt className="text-xs uppercase tracking-[0.16em] text-slate-soft">{k}</dt>
                <dd className="mt-1 font-display text-base font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          {/* features */}
          <div className="mt-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">
              Highlights
            </h2>
            <ul className="mt-3 flex flex-col gap-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-clay" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* sizes + colours */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">
                Available Sizes
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span
                    key={s}
                    className="border border-line px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">
                Available Colours
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colours.map((c) => (
                  <span
                    key={c}
                    className="border border-line bg-offwhite px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={wa} variant="solid" size="lg" className="flex-1">
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/wholesale" variant="outline" size="lg" className="flex-1">
              Bulk Order
            </Button>
          </div>
          <p className="mt-3 text-xs text-slate-soft">
            Prices are shared on enquiry — they vary by quantity, colour and branding.
          </p>
        </div>
      </div>

      {/* related / sections */}
      <div className="container-site pb-20">
        <SectionHeading eyebrow="About" title="Product overview" sub="A closer look at what makes this piece our base." />
        <Reveal delay={0.1} className="mt-6 max-w-3xl">
          <p className="text-base leading-relaxed text-slate-soft text-pretty">
            Every OG Blanks product is cut, stitched and finished with a focus on consistent
            quality and a premium hand-feel — so your brand always starts on a blank you can
            trust. For bulk pricing, minimum order quantities, custom branding and sample
            requests, message us directly.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
