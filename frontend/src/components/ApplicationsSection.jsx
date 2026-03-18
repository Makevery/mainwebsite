import { Plane, Heart, Factory, Microscope } from "lucide-react";

const applications = [
  {
    id: 1,
    title: "Aerospace",
    description: "Lightweight structural components and thermal management systems",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
  {
    id: 2,
    title: "Biofabrication",
    description: "Tissue scaffolds and biocompatible structures for research",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
  },
  {
    id: 3,
    title: "Healthcare",
    description: "Custom prosthetics, implants, and medical device prototypes",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  },
  {
    id: 4,
    title: "Manufacturing",
    description: "Industrial tooling, molds, and functional prototypes",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
  },
];

export default function ApplicationsSection() {
  return (
    <section 
      id="applications" 
      className="py-20 md:py-32 bg-slate-950"
      data-testid="applications-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-teal-400 font-medium mb-4 block">
            Applications
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
            Transforming Industries with
            <span className="text-teal-400"> Advanced Materials</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-body">
            From aerospace to healthcare, INCEPT-1 enables breakthrough applications 
            across diverse sectors with its versatile material processing capabilities.
          </p>
        </div>

        {/* Application Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <div
              key={app.id}
              className="app-card group cursor-pointer h-80"
              data-testid={`application-card-${app.id}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={app.image}
                alt={app.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                {/* Icon */}
                <div className="w-10 h-10 bg-teal-500/20 backdrop-blur-sm border border-teal-500/30 rounded-sm flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <app.icon className="w-5 h-5 text-teal-400" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-slate-50 mb-2">
                  {app.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
