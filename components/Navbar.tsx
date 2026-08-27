"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { waLinks } from "@/lib/whatsapp";

const links = [
  { href: "/collections", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/custom-branding", label: "Custom Branding" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/about", label: "About" },
];

function Wordmark() {
  return (
    <Link href="/" className="group flex flex-col leading-none" aria-label="OG Blanks home">
      <span className="font-display text-lg font-bold tracking-[0.14em] text-ink sm:text-xl">
        OG&nbsp;BLANKS
      </span>
      <span className="mt-1 h-px w-full origin-left bg-ink/30 transition-transform duration-500 group-hover:scale-x-100 max-w-full" />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-bone/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="container-site flex h-16 items-center justify-between gap-4 md:h-20"
        aria-label="Primary"
      >
        <Wordmark />

        {/* desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                  active ? "text-ink" : "text-slate-soft hover:text-ink",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center text-ink transition-colors hover:text-clay sm:flex"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </button>

          <a
            href={waLinks.general}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 border border-ink bg-ink px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-bone transition-colors hover:bg-charcoal sm:inline-flex"
          >
            Enquire
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-bone lg:hidden"
          >
            <div className="container-site flex flex-col gap-1 py-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold uppercase tracking-tight text-ink"
                  >
                    {l.label}
                    <ArrowUpRight className="h-5 w-5 text-slate-soft" />
                  </Link>
                </motion.div>
              ))}
              <a
                href={waLinks.general}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 bg-ink px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-bone"
              >
                Enquire on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
