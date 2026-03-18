import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Heart, Factory, Microscope } from "lucide-react";

const applications = [
  {
    id: 1,
    title: "Aerospace",
    description: "Lightweight structural components and thermal management systems for aviation",
    icon: Plane,
  },
  {
    id: 2,
    title: "Biofabrication",
    description: "Tissue scaffolds and biocompatible structures for advanced research",
    icon: Microscope,
  },
  {
    id: 3,
    title: "Healthcare",
    description: "Custom prosthetics, implants, and medical device prototypes",
    icon: Heart,
  },
  {
    id: 4,
    title: "Manufacturing",
    description: "Industrial tooling, molds, gaskets, seals, and prototypes",
    icon: Factory,
  },
];

const materials = ["Silicone", "Polyurethane", "Epoxies", "Alginates", "Fumed Silica", "Calcium Carbonate"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ApplicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="applications" 
      ref={ref}
      className="py-24 lg:py-32 bg-[#0a0a0a]"
      data-testid="applications-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase"
          >
            Applications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Powering future <span className="text-green-accent">industries</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#888] text-base lg:text-lg max-w-2xl mx-auto"
          >
            From aerospace to healthcare, INCEPT-1 enables breakthrough applications 
            across diverse sectors with its versatile material processing capabilities.
          </motion.p>
        </div>

        {/* Application Grid - Vector Icons Only */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {applications.map((app) => (
            <motion.div
              key={app.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-dark p-8 rounded-xl text-center group cursor-pointer"
              data-testid={`application-card-${app.id}`}
            >
              {/* Vector Icon */}
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 bg-[#2CFF95]/10 border border-[#2CFF95]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#2CFF95]/20 group-hover:border-[#2CFF95]/40 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <app.icon className="w-10 h-10 text-[#2CFF95]" strokeWidth={1.5} />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#2CFF95] transition-colors">
                {app.title}
              </h3>

              {/* Description */}
              <p className="text-[#888] text-sm leading-relaxed">
                {app.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Materials Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="card-dark p-8 lg:p-12 rounded-xl text-center"
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-6">
            Compatible Materials
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {materials.map((material, index) => (
              <motion.span 
                key={material}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(44, 255, 149, 0.15)" }}
                className="px-5 py-2.5 bg-[#161616] border border-[#1f1f1f] rounded-full text-sm text-[#ccc] cursor-default transition-all"
              >
                {material}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
