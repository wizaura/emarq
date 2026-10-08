import About from "@/components/About";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import WhyEmarq from "@/components/WhyEmarq";
import OurWork from "@/components/SelectedWork";
import Process from "@/components/OurProcess";
import AboutFounder from "@/components/AboutFounder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
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