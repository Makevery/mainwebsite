import { useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import TaglineSection from "../components/TaglineSection";
import MissionSection from "../components/MissionSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductSection from "../components/ProductSection";
import TimelineSection from "../components/TimelineSection";
import ApplicationsSection from "../components/ApplicationsSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main>
        <HeroSection />
        <TaglineSection />
        <MissionSection />
        <FeaturesSection />
        <ProductSection />
        <TimelineSection />
        <ApplicationsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
