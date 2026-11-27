import type { Metadata } from "next";

import About from "@/components/About";
import Hero from "@/components/hero/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/services/Services";
import WhyEmarq from "@/components/WhyEmarq";
import OurWork from "@/components/SelectedWork";
import Process from "@/components/OurProcess";
import AboutFounder from "@/components/AboutFounder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

export const metadata: Metadata = {
  title: "Creative Marketing & Production Agency in Dubai, UAE",
  description:
    "Discover Emarq, a Dubai-based creative marketing and production agency. From branding and digital marketing to events, activations, printing and corporate gifting, we bring your brand ideas to life.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Emarq | Creative Marketing & Production Agency in Dubai",
    description:
      "One creative partner for branding, digital marketing, events, activations and production in Dubai and across the UAE.",
    url: "https://emarq.ae",
    siteName: "Emarq",
    type: "website",
    locale: "en_AE",
    images: [
      {
        url: "/images/hero-2.webp",
        width: 1200,
        height: 630,
        alt: "Emarq Creative Marketing & Production Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Emarq | Creative Marketing & Production Agency in Dubai",
    description:
      "Creative marketing, branding, events and production for brands across the UAE.",
    images: ["/images/hero-2.webp"],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Clients />
      <WhyEmarq />
      <OurWork />
      <Industries />
      <Process />
      <AboutFounder />
      <Contact />
      <Footer />
    </main>
  );
}