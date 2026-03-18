import { Droplets, Infinity, Layers } from "lucide-react";

const innovations = [
  {
    id: 1,
    icon: Droplets,
    title: "Smart Flow Control",
    description: "Advanced real-time flow monitoring and adjustment system ensuring precise material deposition for complex geometries and varying viscosities.",
    highlight: "Precision at every layer",
    large: true,
  },
  {
    id: 2,
    icon: Infinity,
    title: "Unlimited Material Volume",
    description: "Continuous feed system eliminates material constraints, enabling large-scale manufacturing without interruption.",
    highlight: "No limits on scale",
    large: false,
  },
  {
    id: 3,
    icon: Layers,
    title: "Activated Composite Fabrication",
    description: "Process silicone, epoxies, alginates, and advanced composites with unmatched versatility.",
    highlight: "Multi-material capability",
    large: false,
  },
];

export default function InnovationSection() {
  return (
    <section 
      id="innovation" 
      className="py-20 md:py-32 bg-slate-950 relative"
      data-testid="innovation-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-medium mb-4 block">
            The Innovation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
            Engineering the Future of
            <span className="text-teal-400"> Additive Manufacturing</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl font-body">
            INCEPT-1 combines cutting-edge extrusion technology with intelligent controls 
            to deliver unprecedented precision in composite 3D printing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovations.map((item, index) => (
            <div
              key={item.id}
              className={`card-industrial p-8 rounded-sm ${
                item.large ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
              data-testid={`innovation-card-${item.id}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-sm flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-teal-400" />
              </div>

              {/* Highlight Tag */}
              <span className="inline-block text-xs uppercase tracking-widest text-teal-400 font-medium mb-3">
                {item.highlight}
              </span>

              {/* Title */}
              <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-50 mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm md:text-base leading-relaxed font-body">
                {item.description}
              </p>

              {item.large && (
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-2xl font-heading font-bold text-teal-400">±0.1mm</span>
                      <p className="text-xs text-slate-500 mt-1">Precision Tolerance</p>
                    </div>
                    <div>
                      <span className="text-2xl font-heading font-bold text-teal-400">99.5%</span>
                      <p className="text-xs text-slate-500 mt-1">Flow Accuracy</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
