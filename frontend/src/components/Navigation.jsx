import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Technology", href: "#technology" },
  { label: "Journey", href: "#journey" },
  { label: "Applications", href: "#applications" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen }) {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 nav-blur"
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-3"
            data-testid="logo-link"
          >
            <div className="w-8 h-8 bg-[#2CFF95] rounded flex items-center justify-center">
              <span className="font-bold text-black text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg tracking-tight leading-none">
                MAKERISE
              </span>
              <span className="text-[10px] text-[#888] tracking-widest">
                INNOVATIONS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-[#888] hover:text-[#2CFF95] transition-colors duration-300"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#888] hover:text-[#2CFF95] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden mobile-menu py-6 border-t border-[#222]"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-base text-[#888] hover:text-[#2CFF95] transition-colors py-2"
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
