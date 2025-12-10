import { motion } from 'motion/react';
import { 
  Lightbulb, Shield, Target, Users, TrendingUp, Award,
  Search, Megaphone, FileText, Palette, Code, Lock,
  Pencil, Video, Briefcase, Server, ArrowRight, Star,
  GraduationCap, Building2, ShoppingBag, Store, Factory,
  Heart, Truck, ChevronLeft, ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

interface HomeProps {
  onNavigate: (page: Page, service?: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const whyChooseUs = [
    { icon: Lightbulb, title: 'Innovation', description: 'Cutting-edge solutions for modern challenges' },
    { icon: Shield, title: 'Security', description: 'Enterprise-grade security in everything we do' },
    { icon: Target, title: 'Strategy', description: 'Data-driven approach to growth' },
    { icon: Users, title: 'Tech Experts', description: 'Certified professionals at your service' },
    { icon: TrendingUp, title: 'Reliability', description: '99.9% uptime and consistent delivery' },
    { icon: Award, title: 'Results', description: 'Measurable impact on your bottom line' },
  ];

  const services = [
    {
      id: 'digital-marketing',
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'SEO, PPC, Social Media Marketing, Content Strategy & Branding to grow your online presence',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'cybersecurity',
      icon: Lock,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with advanced security audits, threat detection, and compliance',
      gradient: 'from-red-500 to-orange-400'
    },
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Design & Development',
      description: 'Custom websites and web applications built with modern frameworks and best practices',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      id: 'graphics-video',
      icon: Video,
      title: 'Graphics & Video Production',
      description: 'Professional design services including branding, motion graphics, and video editing',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      id: 'business-consulting',
      icon: Briefcase,
      title: 'Business Strategy & Consulting',
      description: 'Strategic planning, digital transformation, and process optimization for growth',
      gradient: 'from-indigo-500 to-blue-400'
    },
    {
      id: 'cloud-server',
      icon: Server,
      title: 'Cloud & Server Management',
      description: 'AWS, Azure, Google Cloud setup, migration, monitoring, and optimization',
      gradient: 'from-yellow-500 to-orange-400'
    },
  ];

  const industries = [
    { icon: GraduationCap, name: 'EdTech' },
    { icon: Building2, name: 'FinTech' },
    { icon: Target, name: 'Startups' },
    { icon: ShoppingBag, name: 'Fashion' },
    { icon: Building2, name: 'Real Estate' },
    { icon: Store, name: 'Restaurants' },
    { icon: Factory, name: 'Manufacturing' },
    { icon: Heart, name: 'Healthcare' },
    { icon: Truck, name: 'Logistics' },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Growth',
      industry: 'Fashion Retail',
      result: '300% increase in online sales',
      description: 'Complete digital transformation with SEO, PPC campaigns, and custom e-commerce platform',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTIxMTQwMXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Security Overhaul',
      industry: 'FinTech Startup',
      result: 'Zero security incidents in 2 years',
      description: 'Comprehensive cybersecurity audit and implementation of enterprise security protocols',
      image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUyMDYyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Cloud Migration',
      industry: 'Manufacturing',
      result: '60% reduction in IT costs',
      description: 'Seamless migration from on-premise infrastructure to AWS cloud with 24/7 monitoring',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MTk4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      text: 'Cyberminars Digital transformed our online presence. Their strategic approach to SEO and content marketing doubled our organic traffic in just 6 months.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'SecureBank Finance',
      text: 'The cybersecurity audit revealed critical vulnerabilities we weren\'t aware of. Their team helped us implement robust security measures that gave us peace of mind.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Logistics Inc',
      text: 'Outstanding cloud migration service. They handled everything from planning to execution, with zero downtime. Our operational costs dropped significantly.',
      rating: 5
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F17] via-[#002B5B] to-[#0B0F17]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #00E5FF 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-full text-[#00E5FF] text-sm mb-6">
              Premium Digital Agency
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              We Shape Your Ideas Into{' '}
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Cyberminars Digital — Smart Digital & Cyber Solutions for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all flex items-center justify-center gap-2"
              >
                Get Strategy Call
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all"
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1750365919971-7dd273e7b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNzY1MjYxMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Futuristic Technology"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent" />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#00E5FF] to-[#0A84FF] rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Why Businesses Choose <span className="text-[#00E5FF]">Cyberminars</span>
            </h2>
            <p className="text-xl text-gray-400">
              Trusted by startups, enterprises, and everything in between
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-[#1a1f2e]/50 to-[#0B0F17]/50 border border-[#00E5FF]/10 rounded-xl hover:border-[#00E5FF]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#002B5B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Our <span className="text-[#00E5FF]">Services</span>
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive solutions for your digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onNavigate('service-detail', service.id)}
                className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl hover:border-[#00E5FF]/30 transition-all group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <button className="text-[#00E5FF] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Industries We <span className="text-[#00E5FF]">Serve</span>
            </h2>
            <p className="text-xl text-gray-400">
              Specialized solutions across multiple sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-gradient-to-br from-[#1a1f2e]/50 to-[#0B0F17]/50 border border-[#00E5FF]/10 rounded-xl hover:border-[#00E5FF]/30 transition-all text-center group"
              >
                <industry.icon size={32} className="text-[#00E5FF] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-white">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#002B5B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Featured <span className="text-[#00E5FF]">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real results for real businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl overflow-hidden hover:border-[#00E5FF]/30 transition-all group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-[#00E5FF] text-sm mb-2">{study.industry}</div>
                  <h3 className="text-2xl text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  <div className="px-4 py-2 bg-gradient-to-r from-[#0A84FF]/20 to-[#00E5FF]/20 border border-[#00E5FF]/30 rounded-lg inline-block">
                    <p className="text-[#00E5FF]">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('case-studies')}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all"
            >
              View All Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              What Our <span className="text-[#00E5FF]">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400">
              Success stories from satisfied partners
            </p>
          </motion.div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-2xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-[#00E5FF] fill-[#00E5FF]" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white text-center mb-8">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="text-center">
                <p className="text-white">{testimonials[currentTestimonial].name}</p>
                <p className="text-[#00E5FF]">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? 'bg-[#00E5FF] w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Let&apos;s Build the Future of Your Business
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free consultation and discover how we can transform your digital presence
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-10 py-5 bg-white text-[#0A84FF] rounded-lg hover:shadow-2xl transition-all text-lg"
            >
              Start Your Project Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
