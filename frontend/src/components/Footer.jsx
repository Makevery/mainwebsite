import { Phone, Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="py-16 bg-slate-950 border-t border-slate-800"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-500 rounded-sm flex items-center justify-center">
                <span className="font-heading font-bold text-white text-xl">M</span>
              </div>
              <div>
                <span className="font-heading font-bold text-slate-50 text-2xl tracking-tight block">
                  MAKERISE
                </span>
                <span className="text-xs uppercase tracking-widest text-slate-500">
                  Innovations
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-body mb-6">
              Pioneering the future of additive manufacturing with India's first 
              liquid-based composite 3D printer. Built with precision, powered by innovation.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="inline-block w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              Led by R&D experts from IIT Indore
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-slate-50 mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a 
                href="tel:+919340151871" 
                className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
                data-testid="footer-phone"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-body">+91-9340151871</span>
              </a>
              <a 
                href="mailto:wemakeverything@gmail.com" 
                className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors"
                data-testid="footer-email"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-body">wemakeverything@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm font-body">IIT Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-slate-50 mb-6">
              Quick Links
            </h4>
            <div className="space-y-3">
              <a 
                href="#innovation" 
                className="block text-sm text-slate-400 hover:text-teal-400 transition-colors font-body"
              >
                Innovation
              </a>
              <a 
                href="#technology" 
                className="block text-sm text-slate-400 hover:text-teal-400 transition-colors font-body"
              >
                Technology
              </a>
              <a 
                href="#applications" 
                className="block text-sm text-slate-400 hover:text-teal-400 transition-colors font-body"
              >
                Applications
              </a>
              <a 
                href="#contact" 
                className="block text-sm text-slate-400 hover:text-teal-400 transition-colors font-body"
              >
                Contact R&D
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-body">
            © {new Date().getFullYear()} Makerise Innovations. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-sm flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
              aria-label="LinkedIn"
              data-testid="social-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-sm flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
              aria-label="Twitter"
              data-testid="social-twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-sm flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/50 transition-colors"
              aria-label="GitHub"
              data-testid="social-github"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
