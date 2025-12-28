import { Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import image_f353f671dd6fa70fa74a1c5dc54f51bf3b87173d from 'figma:asset/f353f671dd6fa70fa74a1c5dc54f51bf3b87173d.png';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Services', page: 'services' as Page },
    { label: 'About', page: 'about' as Page },
    { label: 'Case Studies', page: 'case-studies' as Page },
    { label: 'Contact', page: 'contact' as Page },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/918306446838?text=Hi!%20I%20want%20to%20discuss%20a%20project', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/95 backdrop-blur-md border-b border-[#00E5FF]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Pure White Minimal Version */}
          <button 
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center group"
          >
            <img 
              src={image_f353f671dd6fa70fa74a1c5dc54f51bf3b87173d} 
              alt="Cyberminars Digital" 
              className="h-16 md:h-20 lg:h-24 w-auto group-hover:scale-105 transition-transform"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.3))' }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors font-medium ${ 
                  currentPage === item.page
                    ? 'text-[#00E5FF]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* WhatsApp CTA */}
            <button 
              onClick={handleWhatsApp}
              className="px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-all flex items-center gap-2"
            >
              <MessageCircle size={18} />
              <span className="hidden lg:inline">WhatsApp</span>
            </button>

            {/* Main CTA */}
            <button 
              onClick={() => onNavigate('contact')}
              className="px-6 py-2 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all font-semibold"
            >
              Get Free Strategy Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors font-medium ${
                  currentPage === item.page
                    ? 'text-[#00E5FF]'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button 
              onClick={handleWhatsApp}
              className="w-full px-4 py-2 bg-[#25D366] text-white rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>

            <button 
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg font-semibold"
            >
              Get Free Strategy Call
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}