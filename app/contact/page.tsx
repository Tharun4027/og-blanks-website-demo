import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { business } from "@/data/business";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/EnquiryForm";
import { waLinks } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact",
  description:
    "Contact OG Blanks for wholesale, bulk orders, custom branding and general enquiries via phone, WhatsApp or Instagram.",
};

const channels = [
  {
    label: "Phone",
    value: business.phone,
    href: business.phoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: business.whatsapp,
    href: waLinks.general,
    icon: MessageCircle,
  },
  {
    label: "Instagram",
    value: business.instagram,
    href: business.instagramUrl,
    icon: InstagramIcon,
  },
];

const topics = [
  "General enquiry",
  "Wholesale",
  "Bulk orders",
  "Custom branding",
];

export default function ContactPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="container-site grid grid-cols-1 gap-12 py-14 lg:grid-cols-12 lg:py-20">
        {/* left */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk"
            sub="Whether it's a general question, a wholesale order or a custom branding project, we're quick to respond on WhatsApp."
          />

          {/* channels */}
          <div className="mt-8 flex flex-col gap-3">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 border border-line bg-offwhite p-4 transition-colors hover:border-ink"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors group-hover:bg-ink group-hover:text-bone">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.16em] text-slate-soft">
                        {c.label}
                      </span>
                      <span className="text-sm font-semibold text-ink">{c.value}</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-slate-soft transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* topics */}
          <div className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-soft">
              How can we help?
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {topics.map((t) => (
                <li
                  key={t}
                  className="border border-line bg-fabric px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ink"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.15} className="mt-10">
            <Button href={waLinks.general} variant="solid" size="lg">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        {/* form */}
        <Reveal className="lg:col-span-7">
          <EnquiryForm />
        </Reveal>
      </section>
    </div>
  );
}
