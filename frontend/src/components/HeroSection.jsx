import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="hero-bg hero-gradient min-h-screen flex items-center relative"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/incept1/image3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-full mb-8 animate-fade-in"
            data-testid="hero-badge"
          >
            <span className="w-2 h-2 bg-[#2CFF95] rounded-full animate-pulse" />
            <span className="text-xs text-[#888] font-medium tracking-wide">
              India's First Liquid-Based Composite 3D Printer
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up"
            data-testid="hero-headline"
          >
            Add Another
            <br />
            <span className="text-green-accent">Dimension</span> to
            <br />
            Your 2D World
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base lg:text-lg text-[#888] leading-relaxed mb-10 max-w-xl animate-fade-in-up delay-200"
            data-testid="hero-subheadline"
          >
            Introducing patented extrusion technology for recycled plastic waste. 
            Revolutionizing manufacturing with precision, sustainability, and 
            next-generation composite fabrication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Button
              onClick={() => scrollToSection("#product")}
              className="btn-green px-8 py-6 text-base rounded-lg inline-flex items-center gap-2"
              data-testid="cta-explore"
            >
              Explore INCEPT-1
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              className="btn-outline-green px-8 py-6 text-base rounded-lg"
              data-testid="cta-contact"
            >
              Contact R&D
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-xs text-[#555] tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-[#555] scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
