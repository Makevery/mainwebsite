import { Plane, Heart, Factory, Microscope } from "lucide-react";

const applications = [
  {
    id: 1,
    title: "Aerospace",
    description: "Lightweight structural components and thermal management systems for aviation industry",
    icon: Plane,
    image: "/images/incept1/image67.jpeg",
  },
  {
    id: 2,
    title: "Biofabrication",
    description: "Tissue scaffolds and biocompatible structures for advanced research applications",
    icon: Microscope,
    image: "/images/incept1/image69.png",
  },
  {
    id: 3,
    title: "Healthcare",
    description: "Custom prosthetics, implants, and medical device prototypes with precision",
    icon: Heart,
    image: "/images/incept1/image66.png",
  },
  {
    id: 4,
    title: "Manufacturing",
    description: "Industrial tooling, molds, gaskets, seals, and functional prototypes",
    icon: Factory,
    image: "/images/incept1/image60.png",
  },
];

export default function ApplicationsSection() {
  return (
    <section 
      id="applications" 
      className="py-24 lg:py-32 bg-[#0a0a0a]"
      data-testid="applications-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase">
            Applications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Powering Future
            <span className="text-green-accent"> Industries</span>
          </h2>
          <p className="text-[#888] text-base lg:text-lg max-w-2xl mx-auto">
            From aerospace to healthcare, INCEPT-1 enables breakthrough applications 
            across diverse sectors with its versatile material processing capabilities.
          </p>
        </div>

        {/* Application Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="product-card group"
              data-testid={`application-card-${app.id}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-[#2CFF95]/10 backdrop-blur-sm border border-[#2CFF95]/30 rounded-lg flex items-center justify-center">
                  <app.icon className="w-5 h-5 text-[#2CFF95]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {app.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Materials Banner */}
        <div className="mt-16 card-dark p-8 lg:p-12 rounded-xl text-center">
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
            Compatible Materials
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Silicone", "Polyurethane", "Epoxies", "Alginates", "Fumed Silica", "Calcium Carbonate"].map((material) => (
              <span 
                key={material}
                className="px-4 py-2 bg-[#1a1a1a] border border-[#222] rounded-full text-sm text-[#ccc]"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
