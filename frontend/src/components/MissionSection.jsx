import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="mission" 
      ref={ref}
      className="py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
      data-testid="mission-section"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2CFF95]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase"
            >
              Mission
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              Opening the door to{" "}
              <span className="text-green-accent">mass adoption</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#888] text-base lg:text-lg leading-relaxed mb-8"
            >
              Traditional FDM printers are limited by material constraints and waste. 
              Our patented liquid extrusion technology enables unlimited material volume, 
              processes recycled plastics, and delivers precision previously impossible 
              with conventional methods.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#product"
              className="inline-flex items-center gap-2 text-[#2CFF95] font-medium hover:gap-4 transition-all duration-300"
            >
              View Product
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Right - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-green-sm">
              <img
                src="/images/incept1/image98.png"
                alt="INCEPT-1 Extrusion System"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
