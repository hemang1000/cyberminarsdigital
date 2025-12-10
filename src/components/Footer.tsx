import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import logo from 'figma:asset/f353f671dd6fa70fa74a1c5dc54f51bf3b87173d.png';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#050812] border-t border-[#00E5FF]/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="relative inline-block px-4 py-3 rounded-lg bg-gradient-to-br from-[#0A1929] via-[#0B1420] to-[#0A0F1C]">
                <img 
                  src={logo} 
                  alt="Cyberminars Digital" 
                  className="h-16 w-auto object-contain relative z-10"
                  style={{
                    filter: 'brightness(1.2) contrast(1.3) drop-shadow(0 0 8px rgba(0, 229, 255, 0.4)) drop-shadow(0 0 12px rgba(10, 132, 255, 0.3))'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A84FF]/5 to-[#00E5FF]/5 rounded-lg blur-sm"></div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Smart Digital & Cyber Solutions for Modern Businesses
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-[#1a1f2e] flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:bg-[#1a1f2e]/80 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#1a1f2e] flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:bg-[#1a1f2e]/80 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[#1a1f2e] flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:bg-[#1a1f2e]/80 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => onNavigate('home')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                Home
              </button>
              <button onClick={() => onNavigate('services')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                Services
              </button>
              <button onClick={() => onNavigate('about')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                About Us
              </button>
              <button onClick={() => onNavigate('case-studies')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                Case Studies
              </button>
              <button onClick={() => onNavigate('contact')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Digital Marketing</p>
              <p className="text-gray-400 text-sm">Cybersecurity</p>
              <p className="text-gray-400 text-sm">Web Development</p>
              <p className="text-gray-400 text-sm">Graphics & Video</p>
              <p className="text-gray-400 text-sm">Business Consulting</p>
              <p className="text-gray-400 text-sm">Cloud Solutions</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#00E5FF] mt-1 flex-shrink-0" />
                <a href="mailto:digital@cyberminars.com" className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                  digital@cyberminars.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#00E5FF] mt-1 flex-shrink-0" />
                <a href="tel:+918058866838" className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                  +91 80588 66838
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00E5FF] mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Techno Hub, Jaipur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00E5FF]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Cyberminars Digital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-[#00E5FF] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00E5FF] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}