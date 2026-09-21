import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  visible: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ visible }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'couple', label: 'THE COUPLE' },
    { id: 'save-the-date', label: 'DATE' },
    { id: 'event', label: 'EVENT' },
    { id: 'dress-code', label: 'DRESS CODE' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'thank-you', label: 'THANK YOU' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!visible) return null;

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FFF9F0]/92 backdrop-blur-md border-b border-[#C9A45C]/30 shadow-sm py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Brand */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif-luxury text-xl tracking-[0.2em] text-[#6F1020] font-semibold transition-colors duration-300 group-hover:text-[#8E1B2D]">
            Y & H
          </span>
          <span className="hidden sm:inline-block ml-3 text-[10px] tracking-[0.25em] text-[#C9A45C] uppercase font-light">
            02 • 05 • 2027
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs tracking-[0.22em] uppercase font-medium transition-all duration-300 relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#6F1020] font-semibold'
                    : 'text-[#241417]/80 hover:text-[#6F1020]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-[1.5px] bg-[#C9A45C]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#6F1020] hover:text-[#8E1B2D] transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? "Đóng thanh điều hướng" : "Mở thanh điều hướng"}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F0] border-b border-[#C9A45C]/40 shadow-xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-xs tracking-[0.25em] uppercase font-medium py-2 text-[#241417] hover:text-[#6F1020] border-b border-[#C9A45C]/15 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
