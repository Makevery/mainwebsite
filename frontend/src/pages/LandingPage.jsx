import { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import InnovationSection from "../components/InnovationSection";
import TechnicalSection from "../components/TechnicalSection";
import ApplicationsSection from "../components/ApplicationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <HeroSection />
        <InnovationSection />
        <TechnicalSection />
        <ApplicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
