import { motion } from 'motion/react';
import { 
  Code, Megaphone, Server, Shield, Video, Briefcase,
  ArrowRight, CheckCircle, Globe, Award, Target, TrendingUp,
  GraduationCap, Building2, Heart, Home as HomeIcon, Utensils, Factory, Rocket, Users,
  ChevronLeft, ChevronRight, MapPin, Mail, Phone, ExternalLink, Zap, Clock, DollarSign, ShoppingBag
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase, Service, Testimonial, Portfolio } from '../lib/supabase';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

interface HomeProps {
  onNavigate: (page: Page, service?: string) => void;
}

// Icon mapping helper
const iconMap: Record<string, any> = {
  Code, Megaphone, Server, Shield, Video, Briefcase
};

// Gradient mapping
const gradientMap: Record<string, string> = {
  'web-development': 'from-[#0A84FF] to-[#00E5FF]',
  'digital-marketing': 'from-purple-500 to-pink-500',
  'cloud-server': 'from-blue-500 to-cyan-500',
  'cybersecurity': 'from-red-500 to-orange-500',
  'graphics-video': 'from-green-500 to-emerald-500',
  'business-consulting': 'from-yellow-500 to-orange-500',
};

export function Home({ onNavigate }: HomeProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [portfolioItems, setPortfolioItems] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch services
      const { data: servicesData } = await supabase
        .from('services')
        .select('*')
        .order('order_index', { ascending: true })
        .limit(6);
      
      if (servicesData && servicesData.length > 0) {
        setServices(servicesData);
      } else {
        // Fallback services
        setServices(fallbackServices);
      }

      // Fetch testimonials
      const { data: testimonialsData } = await supabase
        .from('testimonials')
        .select('*')
        .order('order_index', { ascending: true });
      
      if (testimonialsData && testimonialsData.length > 0) {
        setTestimonials(testimonialsData);
      } else {
        // Fallback testimonials
        setTestimonials(fallbackTestimonials);
      }

      // Fetch portfolio items (case studies preview)
      const { data: portfolioData } = await supabase
        .from('portfolio')
        .select('*')
        .order('order_index', { ascending: true })
        .limit(3);
      
      if (portfolioData && portfolioData.length > 0) {
        setPortfolioItems(portfolioData);
      } else {
        // Fallback case studies
        setPortfolioItems(fallbackCaseStudies);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Use fallback data
      setServices(fallbackServices);
      setTestimonials(fallbackTestimonials);
      setPortfolioItems(fallbackCaseStudies);
    } finally {
      setLoading(false);
    }
  };

  // Trust Metrics
  const metrics = [
    { icon: Award, value: '200+', label: 'Completed Projects' },
    { icon: Users, value: '15+', label: 'Team Members' },
    { icon: Target, value: '14+', label: 'Industries Served' },
    { icon: Globe, value: '4', label: 'Countries Reached' }
  ];

  // Tech Stack & Platform Logos
  const platforms = [
    'AWS', 'Google Cloud', 'Azure', 'Meta Ads', 'Google Ads', 
    'WordPress', 'Shopify', 'Next.js', 'React', 'Tailwind',
    'HubSpot', 'Mailchimp', 'Figma'
  ];

  // Industries We Serve
  const industries = [
    { icon: GraduationCap, name: 'EdTech', color: 'from-blue-500 to-cyan-500' },
    { icon: Building2, name: 'FinTech', color: 'from-green-500 to-emerald-500' },
    { icon: Heart, name: 'Healthcare', color: 'from-red-500 to-pink-500' },
    { icon: HomeIcon, name: 'Real Estate', color: 'from-purple-500 to-indigo-500' },
    { icon: Utensils, name: 'Hospitality', color: 'from-yellow-500 to-orange-500' },
    { icon: Factory, name: 'Manufacturing', color: 'from-gray-500 to-slate-500' },
    { icon: Rocket, name: 'Startups', color: 'from-pink-500 to-rose-500' },
    { icon: Users, name: 'Professional Services', color: 'from-indigo-500 to-blue-500' },
    { icon: ShoppingBag, name: 'E-commerce', color: 'from-teal-500 to-cyan-500' },
    { icon: Briefcase, name: 'Consulting', color: 'from-violet-500 to-purple-500' },
    { icon: TrendingUp, name: 'SaaS', color: 'from-orange-500 to-red-500' },
    { icon: Shield, name: 'Legal & Compliance', color: 'from-blue-600 to-indigo-600' },
    { icon: Video, name: 'Media & Entertainment', color: 'from-fuchsia-500 to-pink-500' },
    { icon: Globe, name: 'Travel & Tourism', color: 'from-sky-500 to-blue-500' }
  ];

  // Office Locations
  const offices = [
    { city: 'Mumbai', area: 'Andheri East', icon: MapPin },
    { city: 'Bengaluru', area: 'HSR Layout / Koramangala', icon: MapPin },
    { city: 'Delhi NCR', area: 'Connaught Place / Noida', icon: MapPin },
    { city: 'Jaipur', area: 'Techno Hub (HQ)', icon: MapPin }
  ];

  const nextTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (testimonials.length > 0) {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F17] via-[#0d1520] to-[#0B0F17]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A84FF] rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E5FF] rounded-full blur-[120px] animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-[#0A84FF]/20 to-[#00E5FF]/20 border border-[#00E5FF]/30 rounded-full"
              >
                <span className="text-[#00E5FF] text-sm font-medium">
                  🚀 Trusted by businesses across 4 countries
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Digital Marketing, Web Development & Cybersecurity Services{' '}
                <span className="bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] bg-clip-text text-transparent">
                  for Growing Businesses
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Expert IT solutions, cloud infrastructure, digital marketing, and custom web development. 
                We help businesses scale with modern technology, automation, and data-driven strategies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-2xl hover:shadow-[#00E5FF]/50 transition-all text-lg flex items-center justify-center gap-2 group"
                >
                  Get Free Strategy Call
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate('services')}
                  className="px-8 py-4 bg-white/5 border-2 border-[#00E5FF]/30 text-white rounded-lg hover:bg-white/10 hover:border-[#00E5FF]/50 transition-all text-lg"
                >
                  View Services
                </motion.button>
              </div>

              {/* Trust Line */}
              <div className="flex items-center gap-2 text-gray-400">
                <Globe size={18} className="text-[#00E5FF]" />
                <span className="text-sm">Serving clients across India, UAE, UK & USA</span>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="relative">
                {/* Tech Illustration Placeholder */}
                <div className="relative w-full h-[500px] rounded-2xl bg-gradient-to-br from-[#0A84FF]/10 to-[#00E5FF]/10 border border-[#00E5FF]/20 p-8 backdrop-blur-xl overflow-hidden">
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] rounded-xl flex items-center justify-center shadow-lg shadow-[#0A84FF]/50"
                  >
                    <Code size={32} className="text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="absolute top-32 right-10 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50"
                  >
                    <Megaphone size={32} className="text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-32 left-16 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50"
                  >
                    <Shield size={32} className="text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 25, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="absolute bottom-10 right-20 w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/50"
                  >
                    <Server size={32} className="text-white" />
                  </motion.div>

                  {/* Center Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] rounded-full blur-[100px] opacity-30"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST METRICS BAR */}
      <section className="py-16 bg-gradient-to-r from-[#0B0F17] via-[#0d1520] to-[#0B0F17] border-y border-[#00E5FF]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0A84FF]/20 to-[#00E5FF]/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon size={28} className="text-[#00E5FF]" />
                </div>
                <div className="text-4xl bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK LOGOS */}
      <section className="py-16 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">
              Powered by industry-leading tools & platforms
            </p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-3 bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/10 rounded-lg hover:border-[#00E5FF]/30 transition-all"
                >
                  <span className="text-gray-300 text-sm">{platform}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM SERVICES SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#0d1520]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end digital solutions designed to accelerate growth, enhance security, and drive measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code;
              const gradient = gradientMap[service.id] || 'from-[#0A84FF] to-[#00E5FF]';
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-2xl p-8 hover:border-[#00E5FF]/50 transition-all hover:shadow-2xl hover:shadow-[#00E5FF]/10"
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <IconComponent size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-white mb-4 group-hover:text-[#00E5FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <button
                    onClick={() => onNavigate('service-detail', service.id)}
                    className="flex items-center gap-2 text-[#00E5FF] group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </button>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-2xl hover:shadow-[#00E5FF]/50 transition-all text-lg"
            >
              View All Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized solutions crafted for different sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-xl p-6 hover:border-[#00E5FF]/50 transition-all text-center"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${industry.color} rounded-lg mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <industry.icon size={24} className="text-white" />
                </div>
                <h3 className="text-white">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="py-20 bg-gradient-to-b from-[#0d1520] to-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real results for real businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-2xl p-8 hover:border-[#00E5FF]/50 transition-all hover:shadow-xl hover:shadow-[#00E5FF]/10 group"
              >
                {/* Metric Badge */}
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0A84FF]/20 to-[#00E5FF]/20 border border-[#00E5FF]/30 rounded-full mb-6">
                  <span className="text-[#00E5FF] text-lg">{study.metric}</span>
                  <span className="text-gray-400 text-sm ml-2">{study.metricLabel}</span>
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                  {study.industry}
                </h3>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Our Solution</p>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Results</p>
                    <p className="text-[#00E5FF]">{study.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => onNavigate('case-studies')}
              className="px-8 py-4 bg-white/5 border-2 border-[#00E5FF]/30 text-white rounded-lg hover:bg-white/10 hover:border-[#00E5FF]/50 transition-all text-lg inline-flex items-center gap-2"
            >
              View All Case Studies
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-[#0B0F17]">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400">
                Trusted by businesses worldwide
              </p>
            </motion.div>

            <div className="relative">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-2xl p-12 text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#00E5FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-2xl text-gray-300 italic mb-8 leading-relaxed">
                  &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
                </p>

                <div className="border-t border-[#00E5FF]/20 pt-6">
                  <p className="text-white text-lg mb-1">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-[#00E5FF] text-sm mt-1">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              {testimonials.length > 1 && (
                <>
                  <div className="flex justify-center gap-4 mt-8">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-full flex items-center justify-center hover:border-[#00E5FF]/50 transition-all hover:scale-110"
                    >
                      <ChevronLeft size={20} className="text-[#00E5FF]" />
                    </button>

                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-full flex items-center justify-center hover:border-[#00E5FF]/50 transition-all hover:scale-110"
                    >
                      <ChevronRight size={20} className="text-[#00E5FF]" />
                    </button>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial
                            ? 'bg-[#00E5FF] w-8'
                            : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ABOUT US SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#0d1520] to-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl text-white mb-6">
                Why Choose Cyberminars Digital?
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xl text-[#00E5FF] mb-2">Who We Are</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A full-service digital agency specializing in IT infrastructure, cloud solutions, cybersecurity, digital marketing, and creative services. We partner with businesses that need enterprise-level technology without the overhead of an in-house team.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#00E5FF] mb-2">Our Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                    To empower businesses with cutting-edge technology, strategic marketing, and robust security—enabling them to compete globally while staying lean and agile.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl text-[#00E5FF] mb-2">Our Approach</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Data-driven strategies, transparent communication, and measurable outcomes. We don&apos;t just deliver projects—we deliver growth.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-xl p-4 flex items-center gap-3">
                  <Zap size={24} className="text-[#00E5FF]" />
                  <div>
                    <p className="text-white">Fast Delivery</p>
                    <p className="text-gray-500 text-sm">Agile approach</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-xl p-4 flex items-center gap-3">
                  <Clock size={24} className="text-[#00E5FF]" />
                  <div>
                    <p className="text-white">24/7 Support</p>
                    <p className="text-gray-500 text-sm">Always available</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle size={24} className="text-[#00E5FF]" />
                  <div>
                    <p className="text-white">Proven Results</p>
                    <p className="text-gray-500 text-sm">Track record</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-xl p-4 flex items-center gap-3">
                  <DollarSign size={24} className="text-[#00E5FF]" />
                  <div>
                    <p className="text-white">Cost Effective</p>
                    <p className="text-gray-500 text-sm">Better ROI</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-2xl hover:shadow-[#00E5FF]/50 transition-all text-lg inline-flex items-center gap-2"
              >
                Book a Consultation
                <ArrowRight size={20} />
              </button>
            </motion.div>

            {/* Right - Founder/Team Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 p-8 overflow-hidden">
                {/* Placeholder for founder image */}
                <div className="aspect-square bg-gradient-to-br from-[#0A84FF]/20 to-[#00E5FF]/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users size={48} className="text-white" />
                    </div>
                    <h3 className="text-2xl text-white mb-2">Hemang Khurana</h3>
                    <p className="text-[#00E5FF] mb-4">Founder & CEO</p>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto">
                      Leading a team of certified experts delivering world-class digital solutions
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A84FF] rounded-full blur-[80px] opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00E5FF] rounded-full blur-[80px] opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-gray-400">
              Delivering solutions for clients across borders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {['India', 'UAE', 'USA', 'UK'].map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-xl p-8 text-center hover:border-[#00E5FF]/50 transition-all hover:scale-105"
              >
                <Globe size={48} className="text-[#00E5FF] mx-auto mb-4" />
                <h3 className="text-2xl text-white">{country}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-CITY OFFICES */}
      <section className="py-20 bg-gradient-to-b from-[#0d1520] to-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Our India Offices
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our distributed presence helps us support clients nationwide with speed and professionalism
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border border-[#00E5FF]/20 rounded-xl p-6 hover:border-[#00E5FF]/50 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <office.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg mb-1">{office.city}</h3>
                    <p className="text-gray-400 text-sm">{office.area}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-[#0B0F17] border-t border-[#00E5FF]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let&apos;s discuss how our expertise can accelerate your growth
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-2xl hover:shadow-[#00E5FF]/50 transition-all text-lg inline-flex items-center justify-center gap-2"
              >
                Get Free Strategy Call
                <ArrowRight size={20} />
              </button>

              <a
                href={`https://wa.me/918306446838?text=${encodeURIComponent('Hi! I want to discuss a project with Cyberminars Digital.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/5 border-2 border-[#00E5FF]/30 text-white rounded-lg hover:bg-white/10 hover:border-[#00E5FF]/50 transition-all text-lg inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-12 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#00E5FF]" />
                <span>digital@cyberminars.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-[#00E5FF]" />
                <span>+91 8058866838</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Fallback services
const fallbackServices: Service[] = [
  {
    id: 'web-development',
    icon: 'Code',
    title: 'Website Design & Development',
    description: 'Custom websites, web apps, and e-commerce solutions built with modern frameworks for performance and scalability.',
    image_url: '',
    features: ['Custom Websites', 'Web Applications', 'E-commerce Platforms', 'CMS Development', 'API Integration', 'Performance Optimization'],
    order_index: 0,
    created_at: '',
    updated_at: ''
  },
  {
    id: 'digital-marketing',
    icon: 'Megaphone',
    title: 'Digital Marketing',
    description: 'SEO, PPC, social media marketing, content strategy & analytics to amplify your brand and drive measurable growth.',
    image_url: '',
    features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Content Strategy', 'Brand Development', 'Email Marketing'],
    order_index: 1,
    created_at: '',
    updated_at: ''
  },
  {
    id: 'cloud-server',
    icon: 'Server',
    title: 'IT & Cloud Services',
    description: 'Cloud migration, server management, DevOps automation, and infrastructure optimization on AWS, Azure & GCP.',
    image_url: '',
    features: ['Cloud Migration', 'Server Setup', 'Infrastructure Management', 'Monitoring & Alerts', 'Cost Optimization', 'Backup & Recovery'],
    order_index: 2,
    created_at: '',
    updated_at: ''
  },
  {
    id: 'cybersecurity',
    icon: 'Shield',
    title: 'Cybersecurity & Data Protection',
    description: 'Advanced security audits, threat detection, compliance management, and enterprise-grade protection strategies.',
    image_url: '',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Threat Detection', 'Incident Response', 'Security Training'],
    order_index: 3,
    created_at: '',
    updated_at: ''
  },
  {
    id: 'graphics-video',
    icon: 'Video',
    title: 'Graphics & Video Production',
    description: 'Professional branding, motion graphics, video editing, and visual content creation for impactful storytelling.',
    image_url: '',
    features: ['Brand Identity', 'Graphic Design', 'Motion Graphics', 'Video Editing', 'Animation', 'Social Media Content'],
    order_index: 4,
    created_at: '',
    updated_at: ''
  },
  {
    id: 'business-consulting',
    icon: 'Briefcase',
    title: 'Business Solutions & Automation',
    description: 'Strategic consulting, digital transformation, process automation, and workflow optimization to streamline operations.',
    image_url: '',
    features: ['Digital Transformation', 'Process Optimization', 'Technology Consulting', 'Market Analysis', 'Growth Strategy', 'Change Management'],
    order_index: 5,
    created_at: '',
    updated_at: ''
  }
];

// Fallback testimonials
const fallbackTestimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Cyberminars Digital transformed our online presence. Their strategic approach to SEO and PPC delivered a 250% increase in qualified leads within 4 months.',
    author: 'Rajesh Sharma',
    position: 'CEO, TechVentures India',
    company: 'EdTech Startup',
    order_index: 0,
    created_at: '',
    updated_at: ''
  },
  {
    id: '2',
    quote: "The team's expertise in cybersecurity gave us peace of mind. They identified critical vulnerabilities and implemented enterprise-grade solutions seamlessly.",
    author: 'Sarah Mitchell',
    position: 'CTO, FinSecure Global',
    company: 'FinTech Company',
    order_index: 1,
    created_at: '',
    updated_at: ''
  },
  {
    id: '3',
    quote: 'Outstanding web development and cloud migration services. Our new platform is faster, more secure, and has reduced our operational costs significantly.',
    author: 'Amit Patel',
    position: 'Founder, HealthFirst',
    company: 'Healthcare SaaS',
    order_index: 2,
    created_at: '',
    updated_at: ''
  },
  {
    id: '4',
    quote: "Professional, responsive, and results-driven. Cyberminars helped us scale our digital infrastructure to support 10x growth in just one year.",
    author: 'James Anderson',
    position: 'VP Marketing, PropTech Solutions',
    company: 'Real Estate Platform',
    order_index: 3,
    created_at: '',
    updated_at: ''
  }
];

// Fallback case studies
const fallbackCaseStudies: Portfolio[] = [
  {
    id: '1',
    title: 'Fashion E-commerce Transformation',
    industry: 'Fashion E-commerce',
    challenge: 'Low online visibility & conversion rates',
    solution: 'Complete SEO overhaul, Google Ads campaigns, custom Shopify store',
    results: '+300% organic traffic, 60% higher conversions',
    metric: '300%',
    metricLabel: 'Traffic Growth',
    order_index: 0,
    created_at: '',
    updated_at: ''
  },
  {
    id: '2',
    title: 'FinTech Security Audit',
    industry: 'FinTech SaaS',
    challenge: 'Security vulnerabilities & compliance gaps',
    solution: 'Enterprise security audit, GDPR compliance setup, cloud hardening',
    results: 'Zero incidents in 24 months, SOC 2 certified',
    metric: '0',
    metricLabel: 'Security Incidents',
    order_index: 1,
    created_at: '',
    updated_at: ''
  },
  {
    id: '3',
    title: 'Healthcare Cloud Migration',
    industry: 'Healthcare Portal',
    challenge: 'Outdated infrastructure causing downtime',
    solution: 'AWS cloud migration, auto-scaling setup, 24/7 monitoring',
    results: '99.9% uptime, 60% cost reduction',
    metric: '60%',
    metricLabel: 'Cost Reduction',
    order_index: 2,
    created_at: '',
    updated_at: ''
  }
];