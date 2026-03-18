import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Infinity, Layers, Zap } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Droplets,
    title: "Smart Flow Control",
    description: "Advanced real-time flow monitoring ensuring precise material deposition for complex geometries.",
  },
  {
    id: 2,
    icon: Infinity,
    title: "Unlimited Volume",
    description: "Continuous feed system eliminates material constraints for large-scale manufacturing.",
  },
  {
    id: 3,
    icon: Layers,
    title: "Composite Fabrication",
    description: "Process silicone, epoxies, alginates, and advanced composites with unmatched versatility.",
  },
  {
    id: 4,
    icon: Zap,
    title: "Patented Technology",
    description: "Revolutionary extrusion technology for recycled plastic waste and sustainable manufacturing.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="features" 
      ref={ref}
      className="py-24 lg:py-32 bg-[#0d0d0d] relative"
      data-testid="features-section"
    >
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase"
          >
            Key Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Engineering the Future
          </motion.h2>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="card-dark p-8 rounded-xl group"
              data-testid={`feature-card-${feature.id}`}
            >
              {/* Icon */}
              <div className="feature-icon-container mb-6">
                <feature.icon className="w-7 h-7 text-[#2CFF95]" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#2CFF95] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#888] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
