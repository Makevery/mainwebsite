import { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import ProductShowcase from "../components/ProductShowcase";
import FeaturesSection from "../components/FeaturesSection";
import TechnologySection from "../components/TechnologySection";
import TimelineSection from "../components/TimelineSection";
import ApplicationsSection from "../components/ApplicationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] noise-bg">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <HeroSection />
        <ProductShowcase />
        <FeaturesSection />
        <TechnologySection />
        <TimelineSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
