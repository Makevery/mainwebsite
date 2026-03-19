import { motion } from "framer-motion";
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
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section">

      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Animated Glow Orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#2CFF95]/5 rounded-full blur-[120px] pointer-events-none" />

      
      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full !pt-[128px] !pb-[12px] !pl-[24px] !pr-[24px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#1f1f1f] rounded-full mb-8"
              data-testid="hero-badge">

              <span className="w-2 h-2 bg-[#2CFF95] rounded-full pulse-green" />
              <span className="text-xs text-[#888] font-medium tracking-wide">
                India's First Liquid-Based Composite 3D Printer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
              data-testid="hero-headline">

              A new generation of{" "}
              <span className="text-green-accent">3D printing</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base lg:text-lg text-[#888] leading-relaxed mb-10 max-w-xl"
              data-testid="hero-subheadline">

              Pioneers of patented liquid extrusion technology for recycled plastic waste; 
              accelerating the transition towards sustainable manufacturing.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4">

              <Button
                onClick={() => scrollToSection("#product")}
                className="btn-green px-8 py-6 text-base rounded-lg inline-flex items-center gap-2"
                data-testid="cta-explore">

                View INCEPT-1
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                className="btn-outline-green px-8 py-6 text-base rounded-lg"
                data-testid="cta-contact">

                Contact R&D
              </Button>
            </motion.div>
          </div>

          {/* Right - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block">

            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[#2CFF95]/10 blur-[60px] rounded-full" />
              
              {/* Main Product Image */}
              <motion.img
                src="/images/incept1/image26.png"
                alt="INCEPT-1 3D Printer"
                className="relative z-10 w-full max-w-lg mx-auto animate-float"
                data-testid="hero-product-image" />

            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">

          <span className="text-xs text-[#555] tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-[#555] scroll-indicator" />
        </motion.div>
      </div>
    </section>);

}