import { ChevronRight, FlaskConical } from "lucide-react";
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
      className="hero-section relative min-h-screen flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1539261840634-2966927034c1?w=1920&q=80')"
      }}
      data-testid="hero-section"
    >
      {/* Dark Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-sm mb-8">
            <FlaskConical className="w-4 h-4 text-teal-400" />
            <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
              India's First Liquid-Based Composite 3D Printer
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-50 leading-tight mb-6"
            data-testid="hero-headline"
          >
            Add Another Dimension
            <span className="block text-teal-400">to Your 2D World</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl font-body"
            data-testid="hero-subheadline"
          >
            Introducing India's first liquid-based composite 3D printer using patented 
            extrusion technology for recycled plastic waste. Revolutionizing manufacturing 
            with precision and sustainability.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("#innovation")}
              className="btn-primary px-8 py-6 text-base rounded-sm inline-flex items-center gap-2"
              data-testid="cta-explore"
            >
              Explore INCEPT-1
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="outline"
              className="btn-secondary px-8 py-6 text-base rounded-sm"
              data-testid="cta-contact"
            >
              Contact R&D
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
