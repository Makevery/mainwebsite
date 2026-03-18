import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock } from "lucide-react";

const materials = [
  {
    id: 1,
    name: "Silicone",
    description: "Flexible, heat-resistant parts for gaskets, seals, and medical devices",
    image: "https://images.unsplash.com/photo-1702745879182-2656d9e33d4b?w=600&q=80",
    available: true,
  },
  {
    id: 2,
    name: "Epoxy Resin",
    description: "High-strength structural components and protective coatings",
    image: "https://images.unsplash.com/photo-1685866670005-4d1255c747f0?w=600&q=80",
    available: true,
  },
  {
    id: 3,
    name: "Foam",
    description: "Lightweight cushioning, insulation, and packaging solutions",
    image: "https://images.unsplash.com/photo-1598998267982-d2a80038fd0b?w=600&q=80",
    available: true,
  },
  {
    id: 4,
    name: "Conductive Ink",
    description: "PCB manufacturing and electronic circuit prototyping",
    image: "https://images.unsplash.com/photo-1760842543713-108c3cadbba1?w=600&q=80",
    available: false,
    comingSoon: true,
  },
  {
    id: 5,
    name: "Carbon / Glass Fibers",
    description: "Continuous fiber reinforcement for high-strength composites",
    image: "https://images.unsplash.com/photo-1763088545795-01206e04c40d?w=600&q=80",
    available: false,
    comingSoon: true,
  },
];

const specs = [
  { label: "Precision", value: "±0.1mm" },
  { label: "Max Viscosity", value: "100k cP" },
  { label: "Print Speed", value: "150mm/s" },
  { label: "Build Volume", value: "300³mm" },
];

export default function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="product" 
      ref={ref}
      className="py-24 lg:py-32 bg-[#0a0a0a] relative"
      data-testid="product-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[3px] bg-[#2CFF95] mb-6"
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase"
          >
            Material Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            INCEPT-1 <span className="text-green-accent">Material Capabilities</span>
          </motion.h2>
        </div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-dark p-8 rounded-xl mb-12"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
          <p className="text-[#888] leading-relaxed text-base lg:text-lg">
            INCEPT-1 is a <span className="text-[#2CFF95] font-medium">modular 3D printing platform</span> where 
            you can seamlessly switch between different materials by simply changing the mounting head. This 
            revolutionary approach enables processing of silicone, epoxy resins, foams, and advanced composites 
            on a single machine. From flexible gaskets to rigid structural parts, from insulation foams to 
            conductive circuits – unlock limitless manufacturing possibilities with one platform.
          </p>
        </motion.div>

        {/* Materials Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`product-card group cursor-pointer relative ${
                material.comingSoon ? "opacity-80" : ""
              }`}
              data-testid={`material-card-${material.id}`}
            >
              {/* Coming Soon Badge */}
              {material.comingSoon && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-[#2CFF95]/20 border border-[#2CFF95]/40 rounded-full">
                  <Clock className="w-3 h-3 text-[#2CFF95]" />
                  <span className="text-xs text-[#2CFF95] font-semibold">Coming Soon</span>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <motion.img
                  src={material.image}
                  alt={material.name}
                  className={`w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105 ${
                    material.comingSoon ? "grayscale-[30%]" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Label Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h4 className="text-lg font-semibold text-white mb-1">{material.name}</h4>
                  <p className="text-[#888] text-sm">{material.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {specs.map((spec, index) => (
            <div 
              key={index}
              className="card-dark p-6 rounded-xl text-center"
            >
              <div className="stat-number mb-2">{spec.value}</div>
              <p className="text-[#888] text-sm">{spec.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
