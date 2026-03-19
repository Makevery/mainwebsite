import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const quickLinks = [
{ label: "Mission", href: "#mission" },
{ label: "Features", href: "#features" },
{ label: "Product", href: "#product" },
{ label: "Journey", href: "#journey" },
{ label: "Applications", href: "#applications" },
{ label: "Contact", href: "#contact" }];


export default function Footer() {
  return (
    <footer
      className="py-16 bg-[#0a0a0a] border-t border-[#1a1a1a]"
      data-testid="footer">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6">

              <div className="w-12 h-12 bg-[#2CFF95] rounded-lg flex items-center justify-center p-2">
                <img 
                  src="/images/makerise-logo.png" 
                  alt="Makerise Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-white text-xl tracking-tight block leading-none">
                  MAKERISE
                </span>
                <span className="text-[10px] text-[#555] tracking-[0.2em]">
                  INNOVATIONS PVT. LTD
                </span>
              </div>
            </motion.div>
            <p className="text-[#888] text-sm leading-relaxed max-w-md mb-6">
              Pioneering the future of additive manufacturing with India's first 
              liquid-based composite 3D printer. Built with precision, powered by innovation.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#555]">
              <span className="w-2 h-2 bg-[#2CFF95] rounded-full pulse-green" />
              Led by R&D experts from IIT Indore
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <motion.a
                href="tel:+919340151871"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-[#888] hover:text-[#2CFF95] transition-colors"
                data-testid="footer-phone">

                <Phone className="w-4 h-4" />
                <span className="text-sm">+91-9340151871</span>
              </motion.a>
              <motion.a
                href="mailto:wemakeverything@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-[#888] hover:text-[#2CFF95] transition-colors"
                data-testid="footer-email">

                <Mail className="w-4 h-4" />
                <span className="text-sm">wemakeverything@gmail.com</span>
              </motion.a>
              <div className="flex items-start gap-3 text-[#888]">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">2nd Floor, Spectrum Metro mall, Sector, 75, Noida, Uttar Pradesh, 201316
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="block text-sm text-[#888] hover:text-[#2CFF95] transition-colors">

                  {link.label}
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#555]">
            © {new Date().getFullYear()} Makerise Innovations Pvt. Ltd. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 bg-[#111] border border-[#1f1f1f] rounded-lg flex items-center justify-center text-[#888] hover:text-[#2CFF95] hover:border-[#2CFF95]/50 transition-all"
              aria-label="LinkedIn"
              data-testid="social-linkedin">

              <Linkedin className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>);

}