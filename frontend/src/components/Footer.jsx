import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="py-16 bg-[#0a0a0a] border-t border-[#1a1a1a]"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2CFF95] rounded flex items-center justify-center">
                <span className="font-bold text-black text-xl">M</span>
              </div>
              <div>
                <span className="font-bold text-white text-xl tracking-tight block leading-none">
                  MAKERISE
                </span>
                <span className="text-[10px] text-[#555] tracking-widest">
                  INNOVATIONS PVT. LTD
                </span>
              </div>
            </div>
            <p className="text-[#888] text-sm leading-relaxed max-w-md mb-6">
              Pioneering the future of additive manufacturing with India's first 
              liquid-based composite 3D printer. Built with precision, powered by innovation.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#555]">
              <span className="inline-block w-2 h-2 bg-[#2CFF95] rounded-full animate-pulse" />
              Led by R&D experts from IIT Indore
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a 
                href="tel:+919340151871" 
                className="flex items-center gap-3 text-[#888] hover:text-[#2CFF95] transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91-9340151871</span>
              </a>
              <a 
                href="mailto:wemakeverything@gmail.com" 
                className="flex items-center gap-3 text-[#888] hover:text-[#2CFF95] transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">wemakeverything@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-[#888]">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">IIT Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { label: "Product", href: "#product" },
                { label: "Technology", href: "#technology" },
                { label: "Journey", href: "#journey" },
                { label: "Applications", href: "#applications" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className="block text-sm text-[#888] hover:text-[#2CFF95] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#555]">
            © {new Date().getFullYear()} Makerise Innovations Pvt. Ltd. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-8 h-8 bg-[#111] border border-[#222] rounded-lg flex items-center justify-center text-[#888] hover:text-[#2CFF95] hover:border-[#2CFF95]/50 transition-all"
              aria-label="LinkedIn"
              data-testid="social-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
