import Link from "next/link";
import { MessageCircle, ArrowLeft, ArrowUpRight } from "lucide-react";
import { waLinks } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-[20vw] font-semibold uppercase leading-none tracking-tight text-fabric md:text-[16rem]">
        404
      </p>
      <h1 className="-mt-8 font-display text-3xl font-semibold uppercase tracking-tight text-ink md:-mt-16 md:text-5xl">
        This page ran out of fabric
      </h1>
      <p className="mt-4 max-w-md text-base text-slate-soft">
        The page you&apos;re looking for doesn&apos;t exist — but our collection does. Head back to
        the shop, or ask us anything on WhatsApp.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2 border border-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-bone"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back home
        </Link>
        <a
          href={waLinks.general}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-bone transition-colors hover:bg-charcoal"
        >
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
