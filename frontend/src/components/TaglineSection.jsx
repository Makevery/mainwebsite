import { motion } from "framer-motion";

export default function TaglineSection() {
  return (
    <section
      className="py-16 lg:py-24 bg-[#0a0a0a] relative overflow-hidden"
      data-testid="tagline-section">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#2CFF95]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center">

          {/* Main Tagline */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
            data-testid="tagline-text">

            <span className="text-white">w</span>
            <span className="!text-[#FFFFFF]">e</span>
            <span className="text-white">MAK</span>
            <span className="text-[#2CFF95]">E</span>
            <span className="text-white">V</span>
            <span className="!text-[#FFFFFF]">E</span>
            <span className="text-white">RYthing</span>
          </h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-[#666] text-sm sm:text-base tracking-widest uppercase">#wemakevery


          </motion.p>
        </motion.div>
      </div>
    </section>);

}