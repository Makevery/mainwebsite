import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const productImages = [
  {
    id: 1,
    src: "/images/incept1/image88.png",
    label: "Complete Assembly",
    description: "Full machine overview with integrated systems",
    large: true,
  },
  {
    id: 2,
    src: "/images/incept1/image26.png",
    label: "Luer-Lock Nozzle",
    description: "Medical-grade quick-swap mechanism",
  },
  {
    id: 3,
    src: "/images/incept1/image48.png",
    label: "Peristaltic Pump",
    description: "High-precision material delivery",
  },
  {
    id: 4,
    src: "/images/incept1/image85.png",
    label: "Servo Valve System",
    description: "Flow control for precision dispensing",
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
            Product
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            INCEPT-1 <span className="text-green-accent">Engine Families</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#888] text-base lg:text-lg max-w-2xl"
          >
            Whether you're prototyping medical devices, aerospace components, or industrial parts, 
            we have you covered. Take a look at our system components below.
          </motion.p>
        </div>

        {/* Product Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {productImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`product-card group cursor-pointer ${
                item.large ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
              data-testid={`product-image-${item.id}`}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.src}
                  alt={item.label}
                  className={`w-full object-contain bg-[#0d0d0d] transition-transform duration-700 group-hover:scale-105 ${
                    item.large ? "h-full min-h-[400px]" : "h-64"
                  }`}
                  whileHover={{ scale: 1.02 }}
                />
                {/* Label Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="label-badge mb-3">{item.label}</span>
                  <p className="text-[#888] text-sm">{item.description}</p>
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
