import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { business } from "@/data/business";
import { waLinks } from "@/lib/whatsapp";

const shopColumns = [
  { href: "/collections", label: "Oversized" },
  { href: "/collections", label: "Regular Fit" },
  { href: "/collections", label: "Polo" },
  { href: "/collections", label: "Hoodies" },
];

const businessColumns = [
  { href: "/wholesale", label: "Wholesale" },
  { href: "/wholesale", label: "Bulk Orders" },
  { href: "/custom-branding", label: "Custom Branding" },
  { href: "/custom-branding", label: "White Label" },
];

const companyColumns = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Column({ head, items }: { head: string; items: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-soft">
        {head}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <Link
              href={i.href}
              className="text-sm text-ink/80 transition-colors hover:text-ink"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bone">
      <div className="container-site grid grid-cols-2 gap-10 py-16 md:grid-cols-5 md:py-20">
        {/* brand */}
        <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
          <Link href="/" className="font-display text-2xl font-bold tracking-[0.14em] text-ink">
            OG&nbsp;BLANKS
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-slate-soft">
            Premium blank apparel, custom branding and wholesale supply for creators,
            retailers and growing clothing brands.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="OG Blanks on Instagram"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={waLinks.general}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
              aria-label="Chat on WhatsApp"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <Column head="Shop" items={shopColumns} />
        <Column head="Business" items={businessColumns} />
        <Column head="Company" items={companyColumns} />

        {/* social note */}
        <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-soft">
            Social
          </h3>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-ink/80 transition-colors hover:text-ink"
          >
            <InstagramIcon className="h-4 w-4" />
            {business.instagram}
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-soft sm:flex-row">
          <span>© {new Date().getFullYear()} OG Blanks. Concept demo website.</span>
          <span className="font-semibold uppercase tracking-[0.2em]">{business.madeIn}</span>
        </div>
      </div>
    </footer>
  );
}
