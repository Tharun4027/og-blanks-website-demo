import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-none font-semibold uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-bone hover:bg-charcoal",
  outline: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-bone",
  ghost: "text-ink hover:text-clay",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-6 py-3.5 text-xs",
  lg: "px-8 py-4 text-sm",
};

export function Button({
  href,
  variant = "solid",
  size = "md",
  className = "",
  children,
  target,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  target?: string;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href.startsWith("https://") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        target={target ?? (href.startsWith("https://") ? "_blank" : undefined)}
        rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
        className={cls}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
