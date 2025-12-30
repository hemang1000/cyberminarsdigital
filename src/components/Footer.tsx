import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, MessageCircle, Lock } from 'lucide-react';


type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail' | 'admin';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#050812] border-t border-[#00E5FF]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* Pure White Logo */}
              <img
                src="https://blbkgtyujiwhbrtccsll.supabase.co/storage/v1/object/public/image/ChatGPT%20Image%20Dec%2010,%202025,%2002_25_38%20PM.png"
                alt="Cyberminars Digital"
                className="h-16 md:h-20 lg:h-24 w-auto group-hover:scale-105 transition-transform"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0, 229, 255, 0.3))' }}
              />

            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">
              A full-service digital agency specializing in IT infrastructure, cloud solutions, cybersecurity, digital marketing, and creative services for businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://linkedin.com/company/cyberminars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com/cyberminars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com/cyberminars" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 flex items-center justify-center text-gray-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all hover:scale-110"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm cursor-pointer">Web Development</p>
              <p className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm cursor-pointer">Digital Marketing</p>
              <p className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm cursor-pointer">IT & Cloud Services</p>
              <p className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm cursor-pointer">Cybersecurity</p>
              <p className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm cursor-pointer">Graphics & Video</p>
              <p className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm cursor-pointer">Business Automation</p>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <div className="space-y-2">
              <button onClick={() => onNavigate('home')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm text-left">
                Home
              </button>
              <button onClick={() => onNavigate('about')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm text-left">
                About Us
              </button>
              <button onClick={() => onNavigate('case-studies')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm text-left">
                Case Studies
              </button>
              <button onClick={() => onNavigate('services')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm text-left">
                All Services
              </button>
              <button onClick={() => onNavigate('contact')} className="block text-gray-400 hover:text-[#00E5FF] transition-colors text-sm text-left">
                Contact Us
              </button>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#00E5FF] mt-1 flex-shrink-0" />
                <a href="mailto:digital@cyberminars.com" className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                  digital@cyberminars.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#00E5FF] mt-1 flex-shrink-0" />
                <a href="tel:+918058866838" className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm">
                  +91 80588 66838
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={16} className="text-[#00E5FF] mt-1 flex-shrink-0" />
                <a 
                  href="https://wa.me/918306446838" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#00E5FF] transition-colors text-sm"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00E5FF]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2020–2025 <span className="text-white font-semibold">Cyberminars Digital</span>. All rights reserved.
            </p>
            <div className="flex gap-6 items-center">
              <a href="#" className="text-gray-500 hover:text-[#00E5FF] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#00E5FF] transition-colors text-sm">
                Terms of Service
              </a>
              <button 
                onClick={() => onNavigate('admin')} 
                className="flex items-center gap-1 text-gray-600 hover:text-[#00E5FF] transition-colors text-xs group"
                title="Admin Panel"
              >
                <Lock size={12} className="group-hover:rotate-12 transition-transform" />
                <span>Admin</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}