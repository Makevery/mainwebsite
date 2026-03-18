import { Check, CircuitBoard, Cog } from "lucide-react";

const specifications = [
  {
    title: "Luer-Lock Nozzle System",
    description: "Medical-grade quick-swap nozzle mechanism for sterile and precise material transitions",
    icon: CircuitBoard,
  },
  {
    title: "Stepper-based Peristaltic Pump",
    description: "High-torque precision pump designed for high-viscosity materials up to 100,000 cP",
    icon: Cog,
  },
];

const techSpecs = [
  "Build Volume: 300 x 300 x 400mm",
  "Layer Resolution: 0.1mm - 2.0mm",
  "Material Viscosity: 1 - 100,000 cP",
  "Nozzle Diameter: 0.4mm - 4.0mm",
  "Print Speed: 10 - 150 mm/s",
  "Dual Extrusion Capable",
];

export default function TechnicalSection() {
  return (
    <section 
      id="technology" 
      className="py-20 md:py-32 bg-slate-900 relative noise-overlay"
      data-testid="technical-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-medium mb-4 block">
            Technical Excellence
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
            Precision-Engineered for
            <span className="text-teal-400"> Performance</span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Tech Features */}
          <div className="space-y-8">
            {specifications.map((spec, index) => (
              <div 
                key={index}
                className="card-industrial p-6 rounded-sm"
                data-testid={`tech-spec-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-500/10 border border-teal-500/30 rounded-sm flex items-center justify-center flex-shrink-0">
                    <spec.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-slate-50 mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-body">
                      {spec.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Specs List */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {techSpecs.map((spec, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2"
                  data-testid={`tech-feature-${index}`}
                >
                  <Check className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-sm text-slate-300 font-body">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden border border-slate-700">
              <img
                src="https://images.unsplash.com/photo-1638478872316-32fb5d4c2b21?w=800&q=80"
                alt="INCEPT-1 Technical Mechanism"
                className="w-full h-full object-cover"
                data-testid="tech-image"
              />
              {/* Overlay with stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-teal-400 font-medium">
                      Patented Technology
                    </span>
                    <h4 className="font-heading text-lg font-bold text-slate-50 mt-1">
                      Static Mixer Integration
                    </h4>
                  </div>
                  <div className="w-16 h-16 bg-teal-500/20 border border-teal-500/40 rounded-sm flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-teal-400">IP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-teal-500 px-4 py-2 rounded-sm shadow-lg shadow-teal-900/30">
              <span className="text-xs uppercase tracking-widest text-white font-bold">
                Made in India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
