export const business = {
  name: "OG Blanks",
  brand: "OG BLANKS",
  phone: "+91 9994550647",
  phoneHref: "tel:+919994550647",
  whatsapp: "+91 9566780449",
  // International format with country code, no "+", for wa.me links
  whatsappNumber: "919566780449",
  instagram: "@og_blanks_",
  instagramUrl: "https://instagram.com/og_blanks_",
  madeIn: "Made in India",
} as const;

export type Business = typeof business;
