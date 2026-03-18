import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket } from "lucide-react";

const timelineEvents = [
{
  year: "2023",
  title: "Conceptualization",
  description: "INCEPT-1 was conceptualized to tackle cost and waste in FDM 3D printing, enabling variety of materials beyond traditional filaments.",
  image: "/images/incept1/concept_diagram.png",
  isGraphic: false,
  isDiagram: true
},
{
  year: "2024",
  title: "Development",
  description: "Static experimental setup created for assessing stepper, valve, and nozzle performance with multiple material validation.",
  image: "/images/incept1/image48.png",
  isGraphic: false
},
{
  year: "2024",
  title: "Material Testing",
  description: "Successful testing with polyurethane, silicone, alginate, fumed silica, and calcium carbonate composites.",
  image: "/images/incept1/material_testing_diagram.png",
  isGraphic: false,
  isDiagram: true
},
{
  year: "2025",
  title: "Today",
  description: "Development review at TRIPRAMAN, NCAM Hyderabad. Ready for collaborative partnerships and commercial deployment.",
  image: null,
  isGraphic: true,
  icon: Rocket
}];


export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="journey"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0d0d0d] relative overflow-hidden"
      data-testid="timeline-section">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase">

            Our Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">

            Real experts, <span className="text-green-accent">real innovation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#888] text-base lg:text-lg max-w-2xl mx-auto">

            Led by R&D experts from IIT Indore with deep experience in mechanical 
            engineering and additive manufacturing.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block timeline-line" />

          {/* Timeline Events */}
          <div className="space-y-16 lg:space-y-24">
            {timelineEvents.map((event, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              data-testid={`timeline-event-${index}`}>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-2 lg:pl-16" : "lg:pr-16 lg:text-right"}`}>
                  <motion.span
                  className="text-[#2CFF95] font-bold text-4xl lg:text-5xl mb-4 block"
                  whileHover={{ scale: 1.05 }}>

                    {event.year}
                  </motion.span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                    {event.title}
                  </h3>
                  <p className="text-[#888] leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Dot - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                  className="timeline-dot"
                  whileHover={{ scale: 1.3 }} />

                </div>

                {/* Image or Graphic */}
                <motion.div
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}>

                  {event.isGraphic ?
                <div className="rounded-xl overflow-hidden glow-green-sm border border-[#1f1f1f] bg-[#0d0d0d] h-64 lg:h-80 flex items-center justify-center">
                      <div className="text-center">
                        <motion.div
                      className="w-24 h-24 mx-auto mb-6 bg-[#2CFF95]/10 border border-[#2CFF95]/30 rounded-2xl flex items-center justify-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>

                          <event.icon className="w-12 h-12 text-[#2CFF95]" strokeWidth={1.5} />
                        </motion.div>
                        <p className="text-[#2CFF95] font-semibold text-lg">Ready for Launch</p>
                        <p className="text-[#666] text-sm mt-2">Commercial Partnerships</p>
                      </div>
                    </div> : event.isDiagram ?
                    
                <div className="rounded-xl overflow-hidden glow-green-sm border border-[#2CFF95]/30 bg-[#0a0a0a] p-6 h-64 lg:h-80 flex items-center justify-center relative">
                      {/* Dark theme diagram styling */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2CFF95]/5 to-transparent pointer-events-none" />
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-contain invert brightness-90 hue-rotate-[120deg]"
                        style={{ filter: 'invert(1) brightness(0.85) sepia(1) hue-rotate(90deg) saturate(5)' }}
                      />
                    </div> :

                <div className="rounded-xl overflow-hidden glow-green-sm border border-[#1f1f1f]">
                      <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 lg:h-80 object-contain bg-[#0a0a0a]" />

                    </div>
                }
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Team Credit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center">

          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#111] border border-[#1f1f1f] rounded-full">
            <span className="w-3 h-3 bg-[#2CFF95] rounded-full pulse-green" />
            <span className="text-[#888] text-sm">
              Led by <span className="text-white font-medium">R&D experts from IIT </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}