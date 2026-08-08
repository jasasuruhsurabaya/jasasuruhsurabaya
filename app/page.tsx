import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Services from "../components/sections/Services";
import HowItWorks from "../components/sections/HowItWorks";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import Highlights from "@/components/sections/Highlights";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/sections/Footer";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08111f] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Highlights />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}