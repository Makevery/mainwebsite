import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Mission", href: "#mission" },
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Journey", href: "#journey" },
  { label: "Applications", href: "#applications" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            data-testid="logo-link"
          >
            <div className="w-14 h-14 bg-[#2CFF95] rounded-xl flex items-center justify-center p-2">
              <img 
                src="/images/makerise-logo.png" 
                alt="Makerise Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-xl tracking-tight leading-none">
                MAKERISE
              </span>
              <span className="text-[11px] text-[#666] tracking-[0.15em]">
                INNOVATIONS
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="text-sm text-[#888] hover:text-[#2CFF95] transition-colors duration-300 relative group"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2CFF95] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 text-[#888] hover:text-[#2CFF95] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-[#1f1f1f]"
              data-testid="mobile-menu"
            >
              <div className="py-6 space-y-4 bg-[#0a0a0a]/95 backdrop-blur-xl">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="block text-base text-[#888] hover:text-[#2CFF95] transition-colors py-2"
                    data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
