import { ArrowRight } from "lucide-react";

const productImages = [
  {
    id: 1,
    src: "/images/incept1/image88.png",
    label: "INCEPT-1 Complete Assembly",
    description: "Full machine overview with integrated pump system",
  },
  {
    id: 2,
    src: "/images/incept1/image98.png",
    label: "Extrusion Head System",
    description: "Precision nozzle and flow control mechanism",
  },
  {
    id: 3,
    src: "/images/incept1/image48.png",
    label: "Peristaltic Pump Unit",
    description: "Stepper-based high-precision material delivery",
  },
  {
    id: 4,
    src: "/images/incept1/image59.png",
    label: "Control Electronics",
    description: "Smart flow control and parameter management",
  },
];

export default function ProductShowcase() {
  return (
    <section 
      id="product" 
      className="py-24 lg:py-32 bg-[#0a0a0a] relative"
      data-testid="product-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="green-line" />
          <span className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase">
            The Product
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Next Generation
            <span className="text-green-accent"> 3D Printer</span>
          </h2>
          <p className="text-[#888] text-base lg:text-lg max-w-2xl">
            INCEPT-1 combines patented extrusion technology with intelligent controls 
            to deliver unprecedented precision in liquid-based composite 3D printing.
          </p>
        </div>

        {/* Product Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productImages.map((item, index) => (
            <div
              key={item.id}
              className={`product-card group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
              data-testid={`product-image-${item.id}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  className={`w-full object-contain bg-[#111] transition-transform duration-500 group-hover:scale-105 ${
                    index === 0 ? "h-80 md:h-96" : "h-64 md:h-80"
                  }`}
                />
                {/* Label Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="label-badge mb-3 inline-block">{item.label}</span>
                  <p className="text-[#888] text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Product Details */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-dark p-6 rounded-lg">
            <div className="stat-number mb-2">±0.1mm</div>
            <p className="text-[#888] text-sm">Precision Tolerance</p>
          </div>
          <div className="card-dark p-6 rounded-lg">
            <div className="stat-number mb-2">100k cP</div>
            <p className="text-[#888] text-sm">Max Viscosity Handling</p>
          </div>
          <div className="card-dark p-6 rounded-lg">
            <div className="stat-number mb-2">150mm/s</div>
            <p className="text-[#888] text-sm">Max Print Speed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
