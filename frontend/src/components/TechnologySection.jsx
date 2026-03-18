import { Check } from "lucide-react";

const techComponents = [
  {
    id: 1,
    image: "/images/incept1/image26.png",
    title: "Luer-Lock Nozzle System",
    description: "Medical-grade quick-swap nozzle mechanism for sterile and precise material transitions. Allows quick interchange of nozzles based on material viscosity and application requirements.",
  },
  {
    id: 2,
    image: "/images/incept1/image33.png",
    title: "Stepper-Based Peristaltic Pump",
    description: "High-torque precision pump designed for high-viscosity materials up to 100,000 cP. Provides precise and repeatable control of material flow rate.",
  },
  {
    id: 3,
    image: "/images/incept1/image85.png",
    title: "Flow Control Servo Valve",
    description: "Set of valves and servo control to allow partial or full closing of tubes for precise material dispensing and purging operations.",
  },
];

const specs = [
  "Build Volume: 300 x 300 x 400mm",
  "Layer Resolution: 0.1mm - 2.0mm",
  "Material Viscosity: 1 - 100,000 cP",
  "Nozzle Diameter: 0.4mm - 4.0mm",
  "Print Speed: 10 - 150 mm/s",
  "Dual Extrusion Capable",
  "Arduino-Based Control System",
  "Marlin/Klipper Compatible",
];

export default function TechnologySection() {
  return (
    <section 
      id="technology" 
      className="py-24 lg:py-32 bg-[#0a0a0a]"
      data-testid="technology-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="green-line" />
          <span className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase">
            Technical Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Precision-Engineered for
            <span className="text-green-accent"> Performance</span>
          </h2>
        </div>

        {/* Tech Components */}
        <div className="space-y-8 mb-16">
          {techComponents.map((comp, index) => (
            <div 
              key={comp.id}
              className={`card-dark rounded-xl overflow-hidden ${
                index % 2 === 0 ? "" : ""
              }`}
              data-testid={`tech-component-${comp.id}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                {/* Image */}
                <div className={`component-image ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className="w-full h-64 lg:h-80 object-contain p-8"
                  />
                </div>
                
                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="label-badge mb-4 inline-block w-fit">Component {comp.id}</span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                    {comp.title}
                  </h3>
                  <p className="text-[#888] leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications Grid */}
        <div className="card-dark p-8 lg:p-12 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-8">Technical Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((spec, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3"
                data-testid={`spec-item-${index}`}
              >
                <div className="w-5 h-5 rounded-full bg-[#2CFF95]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#2CFF95]" />
                </div>
                <span className="text-sm text-[#ccc]">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
