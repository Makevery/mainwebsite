const timelineEvents = [
  {
    year: "2023",
    title: "Conceptualization",
    description: "INCEPT-1 was conceptualized to tackle cost and waste material in FDM 3D printing, as well as enable usage of variety of materials beyond traditional filaments.",
    image: "/images/incept1/image98.png",
    side: "left",
  },
  {
    year: "2024",
    title: "Development & Testing",
    description: "Static experimental setup created for assessing stepper, valve, and nozzle performance. Successful testing with polyurethane, silicone, and alginate materials.",
    image: "/images/incept1/image39.jpeg",
    side: "right",
  },
  {
    year: "2024",
    title: "Material Validation",
    description: "Validated printing with multiple materials including fumed silica and calcium carbonate composites. Implemented purge mechanism for both single and multi-material systems.",
    image: "/images/incept1/image40.jpeg",
    side: "left",
  },
  {
    year: "2025",
    title: "Today - NCAM Review",
    description: "Development review at TRIPRAMAN, NCAM Hyderabad. Ready for collaborative partnerships and commercial deployment.",
    image: "/images/incept1/image95.jpeg",
    side: "right",
  },
];

export default function TimelineSection() {
  return (
    <section 
      id="journey" 
      className="py-24 lg:py-32 bg-[#0d0d0d] relative overflow-hidden"
      data-testid="timeline-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Real Experts,
            <span className="text-green-accent"> Real Innovation</span>
          </h2>
          <p className="text-[#888] text-base lg:text-lg max-w-2xl mx-auto">
            Led by R&D experts from IIT Indore with deep experience in mechanical engineering 
            and additive manufacturing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block timeline-line" />

          {/* Timeline Events */}
          <div className="space-y-12 lg:space-y-24">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  event.side === "right" ? "lg:flex-row-reverse" : ""
                }`}
                data-testid={`timeline-event-${index}`}
              >
                {/* Content */}
                <div className={`${event.side === "right" ? "lg:order-2 lg:text-left lg:pl-16" : "lg:text-right lg:pr-16"}`}>
                  <span className="text-[#2CFF95] font-bold text-3xl lg:text-4xl mb-4 block">
                    {event.year}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">
                    {event.title}
                  </h3>
                  <p className="text-[#888] leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Dot - Desktop */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="timeline-dot" />
                </div>

                {/* Image */}
                <div className={`${event.side === "right" ? "lg:order-1" : ""}`}>
                  <div className="gallery-image glow-green overflow-hidden rounded-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Credit */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-[#111] border border-[#222] rounded-full">
            <div className="w-3 h-3 bg-[#2CFF95] rounded-full animate-pulse" />
            <span className="text-[#888] text-sm">
              Led by <span className="text-white font-medium">R&D experts from IIT Indore</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
