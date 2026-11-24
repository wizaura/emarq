import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emarq.ae"),

  title: {
    default: "Emarq | Creative Marketing & Production Agency in Dubai",
    template: "%s | Emarq",
  },

  description:
    "Emarq is a Dubai-based creative marketing and production agency bringing branding, digital marketing, events, activations, printing and corporate gifting together under one roof.",

  authors: [{ name: "Emarq Marketing & Production" }],
  creator: "Emarq Marketing & Production",
  publisher: "Emarq Marketing & Production",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://emarq.ae",
    siteName: "Emarq",
    title: "Emarq | Creative Marketing & Production Agency in Dubai",
    description:
      "From digital marketing and branding to events, activations and production, Emarq brings creative ideas to life for brands across the UAE.",
    images: [
      {
        url: "/images/hero-2/webp",
        width: 1200,
        height: 630,
        alt: "Emarq Marketing & Production – Creative Agency in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Emarq | Creative Marketing & Production Agency in Dubai",
    description:
      "A Dubai-based creative agency bringing marketing, branding, production and experiences together.",
    images: ["/images/hero-2.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}