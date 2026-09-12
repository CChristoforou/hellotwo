import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import FloatingShapes from "@/components/FloatingShapes";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import ServiceGrid from "@/components/ServiceGrid";
import Jurisdictions from "@/components/Jurisdictions";
import HowWeWork from "@/components/HowWeWork";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <FloatingShapes />
      <Header />
      <main className="relative">
        <Hero />
        <Pillars />
        <ServiceGrid />
        <Jurisdictions />
        <HowWeWork />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
