"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/cn";

const fits = ["All", "Oversized", "Regular", "Polo", "Hoodie", "Custom"];

type FitFilter = "All" | "Oversized" | "Regular" | "Polo" | "Hoodie" | "Custom";
type GsmFilter = "All" | "240 GSM" | "180 GSM" | "Other";

function matchesFit(product: { fit: string; category: string }, f: FitFilter) {
  if (f === "All") return true;
  if (f === "Oversized") return product.fit === "Oversized";
  if (f === "Regular") return product.fit === "Regular";
  if (f === "Polo") return product.fit === "Polo";
  if (f === "Hoodie") return product.fit === "Hoodie";
  if (f === "Custom") return product.category === "Custom Apparel";
  return true;
}

function matchesGsm(product: { gsm?: number }, g: GsmFilter) {
  if (g === "All") return true;
  if (g === "240 GSM") return product.gsm === 240;
  if (g === "180 GSM") return product.gsm === 180;
  if (g === "Other") return product.gsm !== 240 && product.gsm !== 180;
  return true;
}

export default function CollectionsPage() {
  const [cat, setCat] = useState("All");
  const [fit, setFit] = useState<FitFilter>("All");
  const [gsm, setGsm] = useState<GsmFilter>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const okCat = cat === "All" || p.category === cat;
      const okFit = matchesFit(p, fit);
      const okGsm = matchesGsm(p, gsm);
      return okCat && okFit && okGsm;
    });
  }, [cat, fit, gsm]);

  const filterCount = [cat !== "All", fit !== "All", gsm !== "All"].filter(Boolean).length;

  return (
    <div className="pt-16 md:pt-20">
      <header className="container-site pb-8 pt-12 md:pb-10 md:pt-16">
        <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-soft">
          <span className="h-px w-6 bg-slate-soft/50" aria-hidden="true" />
          Collections
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
          The collection
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-soft md:text-lg">
          Every piece starts as a blank. Filter by category, fit and weight to find the
          base for your brand.
        </p>
      </header>

      {/* filters */}
      <div className="container-site pb-6">
        <div className="flex flex-col gap-6 border-y border-line py-6">
          <FilterGroup label="Category">
            <FilterChip active={cat === "All"} onClick={() => setCat("All")}>
              All
            </FilterChip>
            {categories.map((c) => (
              <FilterChip
                key={c.name}
                active={cat === c.name}
                onClick={() => setCat(c.name)}
              >
                {c.name}
              </FilterChip>
            ))}
          </FilterGroup>
          <FilterGroup label="Fit">
            {fits.map((f) => {
              const active = fit === f;
              return (
                <FilterChip key={f} active={active} onClick={() => setFit(f as FitFilter)}>
                  {f}
                </FilterChip>
              );
            })}
          </FilterGroup>
          <FilterGroup label="GSM">
            {[null, "240 GSM", "180 GSM", "Other"].map((g) => {
              const active = gsm === g;
              return (
                <FilterChip
                  key={g ?? "All"}
                  active={active}
                  onClick={() => setGsm((g ?? "All") as GsmFilter)}
                >
                  {g ?? "All"}
                </FilterChip>
              );
            })}
          </FilterGroup>
        </div>

        <div className="flex items-center justify-between pt-4 text-xs uppercase tracking-[0.16em] text-slate-soft">
          <span>
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
          </span>
          {filterCount > 0 && (
            <button
              type="button"
              onClick={() => {
                setCat("All");
                setFit("All");
                setGsm("All");
              }}
              className="text-ink underline underline-offset-4 hover:text-clay"
            >
              Clear filters ({filterCount})
            </button>
          )}
        </div>
      </div>

      {/* grid */}
      <div className="container-site pb-20 md:pb-28">
        <motion.div layout className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-display text-2xl font-semibold uppercase tracking-tight text-ink">
              No products match
            </p>
            <p className="mt-2 text-sm text-slate-soft">
              Try clearing some filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
        active
          ? "bg-ink text-bone"
          : "border border-line text-slate-soft hover:border-ink hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
