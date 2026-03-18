import { Droplets, Infinity, Layers, Zap } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Droplets,
    title: "Smart Flow Control",
    description: "Advanced real-time flow monitoring and adjustment system ensuring precise material deposition for complex geometries and varying viscosities.",
  },
  {
    id: 2,
    icon: Infinity,
    title: "Unlimited Material Volume",
    description: "Continuous feed system eliminates material constraints, enabling large-scale manufacturing without interruption or size limitations.",
  },
  {
    id: 3,
    icon: Layers,
    title: "Activated Composite Fabrication",
    description: "Process silicone, epoxies, alginates, polyurethane, and advanced composites with unmatched versatility and precision.",
  },
  {
    id: 4,
    icon: Zap,
    title: "Patented Extrusion Tech",
    description: "Revolutionary patented technology specifically designed for recycled plastic waste, contributing to sustainable manufacturing.",
  },
];

export default function FeaturesSection() {
  return (
    <section 
      id="features" 
      className="py-24 lg:py-32 bg-[#0d0d0d] relative"
      data-testid="features-section"
    >
      {/* Section Divider */}
      <div className="section-divider mb-24" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase">
            Key Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Engineering the Future of
            <br />
            <span className="text-green-accent">Additive Manufacturing</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="card-dark app-card-hover p-8 rounded-xl"
              data-testid={`feature-card-${feature.id}`}
            >
              {/* Icon */}
              <div className="feature-icon mb-6">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#888] text-sm lg:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
