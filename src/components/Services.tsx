import { motion } from 'motion/react';
import { 
  Megaphone, Lock, Code, Video, Briefcase, Server, 
  ArrowRight, Search, Target, FileText, Palette,
  Shield, Database, Cloud, BarChart, Zap
} from 'lucide-react';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

interface ServicesProps {
  onNavigate: (page: Page, service?: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      id: 'digital-marketing',
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Drive growth with data-driven marketing strategies. We offer SEO, PPC, social media marketing, content strategy, and branding solutions that deliver measurable results.',
      features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Content Strategy', 'Brand Development', 'Email Marketing'],
      gradient: 'from-blue-500 to-cyan-400',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400'
    },
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Design & Development',
      description: 'Create stunning, high-performance websites and web applications. Custom solutions built with modern frameworks, optimized for speed, SEO, and conversions.',
      features: ['Custom Websites', 'Web Applications', 'E-commerce Platforms', 'CMS Development', 'API Integration', 'Performance Optimization'],
      gradient: 'from-purple-500 to-pink-400',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400'
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design exceptional user experiences that convert. From wireframes to high-fidelity prototypes, we create intuitive interfaces that users love.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems', 'Usability Testing'],
      gradient: 'from-pink-500 to-rose-400',
      iconBg: 'bg-pink-500/10',
      iconColor: 'text-pink-400'
    },
    {
      id: 'cybersecurity',
      icon: Lock,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with enterprise-grade security. Comprehensive security audits, threat detection, compliance management, and incident response.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Threat Detection', 'Incident Response', 'Security Training'],
      gradient: 'from-red-500 to-orange-400',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-400'
    },
    {
      id: 'business-consulting',
      icon: Briefcase,
      title: 'Business Strategy & Consulting',
      description: 'Strategic guidance for digital transformation. We help businesses optimize processes, implement technology solutions, and achieve sustainable growth.',
      features: ['Digital Transformation', 'Process Optimization', 'Technology Consulting', 'Market Analysis', 'Growth Strategy', 'Change Management'],
      gradient: 'from-indigo-500 to-blue-400',
      iconBg: 'bg-indigo-500/10',
      iconColor: 'text-indigo-400'
    },
    {
      id: 'graphics-video',
      icon: Video,
      title: 'Graphics & Video Production',
      description: 'Professional design and video services that captivate audiences. From branding to motion graphics, we bring your vision to life with creative excellence.',
      features: ['Brand Identity', 'Graphic Design', 'Motion Graphics', 'Video Editing', 'Animation', 'Social Media Content'],
      gradient: 'from-green-500 to-emerald-400',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-400'
    },
    {
      id: 'cloud-server',
      icon: Server,
      title: 'Cloud & Server Management',
      description: 'Reliable cloud infrastructure and server management. We handle setup, migration, monitoring, and optimization for AWS, Azure, and Google Cloud.',
      features: ['Cloud Migration', 'Server Setup', 'Infrastructure Management', 'Monitoring & Alerts', 'Cost Optimization', 'Backup & Recovery'],
      gradient: 'from-yellow-500 to-orange-400',
      iconBg: 'bg-yellow-500/10',
      iconColor: 'text-yellow-400'
    },
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F17] via-[#002B5B] to-[#0B0F17]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #00E5FF 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-full text-[#00E5FF] text-sm mb-6">
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] bg-clip-text text-transparent">Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end services designed to accelerate your digital transformation and drive sustainable growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onNavigate('service-detail', service.id)}
                className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-2xl hover:border-[#00E5FF]/30 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-xl ${service.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <service.icon size={32} className={service.iconColor} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[#00E5FF] group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#002B5B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Our <span className="text-[#00E5FF]">Process</span>
            </h2>
            <p className="text-xl text-gray-400">
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Discovery', description: 'Understanding your business, goals, and challenges' },
              { icon: Target, title: 'Strategy', description: 'Creating a customized roadmap for success' },
              { icon: Zap, title: 'Execution', description: 'Implementing solutions with precision and speed' },
              { icon: BarChart, title: 'Optimization', description: 'Continuous improvement and scaling' },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#00E5FF] flex items-center justify-center text-[#0B0F17]">
                  {index + 1}
                </div>
                <h3 className="text-xl text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/20 rounded-2xl text-center"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => onNavigate('case-studies')}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all"
              >
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
