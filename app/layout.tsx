import type { Metadata } from "next";
import { Archivo, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MotionProvider } from "@/components/ui/MotionProvider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ogblanks.example.com"),
  title: {
    default: "OG Blanks | Premium Blank T-Shirts & Wholesale Apparel",
    template: "%s | OG Blanks",
  },
  description:
    "OG Blanks provides premium blank T-shirts, oversized apparel, wholesale supply, bulk orders, custom branding and white-label manufacturing in India.",
  keywords: [
    "OG Blanks",
    "blank t-shirts India",
    "wholesale apparel",
    "oversized t-shirts",
    "custom branding",
    "white label manufacturing",
  ],
  openGraph: {
    title: "OG Blanks | Premium Blank T-Shirts & Wholesale Apparel",
    description:
      "Premium blank apparel for creators, retailers and growing clothing brands. From everyday essentials to bulk and custom manufacturing.",
    type: "website",
    locale: "en_IN",
    siteName: "OG Blanks",
  },
  twitter: {
    card: "summary_large_image",
    title: "OG Blanks | Premium Blank T-Shirts & Wholesale Apparel",
    description:
      "Premium blank apparel for creators, retailers and growing clothing brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:left-4 focus:top-4 focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
