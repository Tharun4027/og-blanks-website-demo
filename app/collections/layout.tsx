import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse OG Blanks products — oversized, regular fit, polo, hoodies and custom apparel. Filter by category, fit and GSM.",
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
