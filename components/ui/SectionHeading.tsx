import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      {eyebrow && (
        <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-soft">
          <span className="h-px w-6 bg-slate-soft/50" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold uppercase leading-[0.98] tracking-tight sm:text-4xl md:text-5xl text-balance">
        {title}
      </h2>
      {sub && (
        <p className="max-w-xl text-base leading-relaxed text-slate-soft md:text-lg text-pretty">
          {sub}
        </p>
      )}
    </Reveal>
  );
}
