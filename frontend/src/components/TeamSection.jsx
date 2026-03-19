import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Harsh Vardhan",
    role: "Lead R&D",
    description: "M.S. Research IIT Indore\nEx Subros, Asst. Manager R&D (2 Years)",
    image: "/images/team/harsh_vardhan.png",
  },
  {
    id: 2,
    name: "Karan Singh",
    role: "Legal & Marketing",
    description: "B.com. LLB. DAVV",
    image: "/images/team/karan_singh.png",
  },
  {
    id: 3,
    name: "Dr. Girish Chandra Verma",
    role: "Professional Assistance",
    description: "Asst. Prof. IIT Indore\nMechanical Dept.",
    image: "/images/team/girish_verma.png",
  },
  {
    id: 4,
    name: "Lakshya Janghel",
    role: "Software & Firmware",
    description: "Software and firmware development\nB.Tech CSE.",
    image: "/images/team/lakshya.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="team" 
      ref={ref}
      className="py-24 lg:py-32 bg-[#0a0a0a]"
      data-testid="team-section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : {}}
            transition={{ duration: 0.8 }}
            className="h-[3px] bg-[#2CFF95] mb-6 mx-auto"
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs text-[#2CFF95] font-medium tracking-widest mb-4 block uppercase"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Meet the <span className="text-green-accent">Innovators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#888] text-base lg:text-lg max-w-2xl mx-auto"
          >
            A passionate team of engineers, researchers, and industry experts 
            driving the future of additive manufacturing.
          </motion.p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
              data-testid={`team-member-${member.id}`}
            >
              <div className="card-dark rounded-xl overflow-hidden">
                {/* Photo */}
                <div className="relative h-72 overflow-hidden bg-[#111]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#2CFF95] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-[#2CFF95] text-sm font-medium mb-3 block">
                    {member.role}
                  </span>
                  <p className="text-[#888] text-sm leading-relaxed whitespace-pre-line">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
