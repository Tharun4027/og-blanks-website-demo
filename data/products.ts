export type Category =
  | "Oversized T-Shirts"
  | "Regular Fit T-Shirts"
  | "Polo T-Shirts"
  | "Hoodies"
  | "Custom Apparel";

export type Fit = "Oversized" | "Regular" | "Polo" | "Hoodie" | "Custom";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  fit: Fit;
  gsm?: number;
  material?: string;
  blurb: string;
  description: string;
  finishes?: string[];
  sizes: string[];
  colours: string[];
  /** Dialect token used to differentiate image placeholders */
  tone: "light" | "dark" | "mid";
  features: string[];
  // WhatsApp enquiry message built on the product; the number is injected elsewhere
}

export const products: Product[] = [
  {
    slug: "oversized-french-terry",
    name: "Oversized French Terry T-Shirt",
    category: "Oversized T-Shirts",
    fit: "Oversized",
    gsm: 240,
    material: "100% Combed Cotton",
    blurb: "240 GSM French Terry",
    description:
      "The signature OG Blanks oversized silhouette. A heavyweight French Terry construction that drapes clean and holds its shape, made for streetwear-led brands.",
    finishes: ["Bio-Washed", "Soft-hand finish"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colours: ["Black", "Off-White", "Bone", "Sand", "Olive", "Heather Grey"],
    tone: "dark",
    features: [
      "240 GSM French Terry",
      "100% Combed Cotton",
      "Bio-washed for a soft hand-feel",
      "Oversized boxy fit",
      "Made in India",
    ],
  },
  {
    slug: "regular-fit-t-shirt",
    name: "Regular Fit T-Shirt",
    category: "Regular Fit T-Shirts",
    fit: "Regular",
    gsm: 180,
    material: "100% Combed Cotton",
    blurb: "180 GSM combed cotton",
    description:
      "A dependable everyday essential. Clean regular fit in 180 GSM combed cotton, ideal for retail supply, events and custom printing at scale.",
    finishes: ["Bio-Washed"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colours: ["Black", "White", "Bone", "Navy", "Grey Melange"],
    tone: "light",
    features: [
      "180 GSM combed cotton",
      "100% Combed Cotton",
      "Classic regular fit",
      "Consistent colour and print-ready surface",
      "Made in India",
    ],
  },
  {
    slug: "polo-t-shirt",
    name: "Polo T-Shirt",
    category: "Polo T-Shirts",
    fit: "Polo",
    blurb: "Collared knit",
    description:
      "A structured collar polo built for brands that want a smarter everyday piece without losing premium hand-feel.",
    finishes: ["Ribbed knit collar"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colours: ["Black", "White", "Olive", "Navy", "Bone", "Maroon"],
    tone: "mid",
    features: [
      "Structured ribbed collar",
      "Premium knit fabric",
      "Tailored through the body",
      "Made in India",
    ],
  },
  {
    slug: "premium-hoodie",
    name: "Premium Hoodie",
    category: "Hoodies",
    fit: "Hoodie",
    material: "Combed Cotton Fleece",
    blurb: "Heavyweight fleece",
    description:
      "A heavyweight fleece hoodie with a clean, boxy cut — built for custom branding and cold-season drops.",
    finishes: ["Brushed-back fleece"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL"],
    colours: ["Black", "Heather Grey", "Off-White", "Olive", "Sand"],
    tone: "dark",
    features: [
      "Heavyweight fleece",
      "Combed cotton blend",
      "Double-lined hood",
      "Kangaroo pocket",
      "Made in India",
    ],
  },
  {
    slug: "custom-branding",
    name: "Custom Branding",
    category: "Custom Apparel",
    fit: "Custom",
    blurb: "Your label, our blank",
    description:
      "From printing to woven labels and full white-label production, we build your product on a quality blank. Share your requirements and we'll take it from there.",
    finishes: ["Printing", "Woven labels", "Neck labels", "Packaging"],
    sizes: ["XS - 3XL"],
    colours: ["Brand-defined"],
    tone: "mid",
    features: [
      "Custom printing",
      "Woven & neck labels",
      "White-label manufacturing",
      "Bulk production",
      "Works with any of our blanks",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const categories: { name: Category; note: string }[] = [
  { name: "Oversized T-Shirts", note: "240 GSM French Terry" },
  { name: "Regular Fit T-Shirts", note: "180 GSM combed cotton" },
  { name: "Polo T-Shirts", note: "Collared knit" },
  { name: "Hoodies", note: "Heavyweight fleece" },
  { name: "Custom Apparel", note: "Printed & white-label" },
];
