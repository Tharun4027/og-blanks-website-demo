import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function ProductsSection() {
  return (
    <section className="bg-offwhite py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The Collection"
            title="Built from the blank"
            sub="Choose your base. Build your brand."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/collections" variant="ghost" size="md">
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
