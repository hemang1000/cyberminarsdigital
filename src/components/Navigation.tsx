import { Menu, X } from 'lucide-react';
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F17]/95 backdrop-blur-md border-b border-[#00E5FF]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center group"
          >
            <div className="relative px-4 py-2 rounded-lg bg-gradient-to-br from-[#0A1929] via-[#0B1420] to-[#0A0F1C]">
              <img 
                src={image_f353f671dd6fa70fa74a1c5dc54f51bf3b87173d} 
                alt="Cyberminars Digital" 
                className="h-16 w-auto relative z-10"
                style={{
                  filter: 'brightness(1.2) contrast(1.3) drop-shadow(0 0 8px rgba(0, 229, 255, 0.4)) drop-shadow(0 0 12px rgba(10, 132, 255, 0.3))'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A84FF]/5 to-[#00E5FF]/5 rounded-lg blur-sm"></div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page
                    ? 'text-[#00E5FF]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('contact')}
              className="px-6 py-2 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all"
            >
              Get Strategy Call
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
                className={`block w-full text-left py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-[#00E5FF]'
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg"
            >
              Get Strategy Call
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}