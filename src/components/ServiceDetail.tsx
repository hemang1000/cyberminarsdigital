import { motion } from 'motion/react';
import { 
  ArrowLeft, CheckCircle2, Megaphone, Lock, Code, Video, 
  Briefcase, Server, Palette, Chrome, Figma, Globe,
  Database, Cloud as CloudIcon, Shield, BarChart
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

interface ServiceDetailProps {
  service: string;
  onNavigate: (page: Page) => void;
}

export function ServiceDetail({ service, onNavigate }: ServiceDetailProps) {
  const serviceData: Record<string, any> = {
    'digital-marketing': {
      icon: Megaphone,
      title: 'Digital Marketing',
      subtitle: 'Drive Growth with Data-Driven Marketing Strategies',
      description: 'Transform your online presence with comprehensive digital marketing solutions. We combine SEO, PPC, social media marketing, content strategy, and branding to deliver measurable results that accelerate your business growth.',
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTIxMTQwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      problems: [
        'Low website traffic and poor search rankings',
        'High customer acquisition costs',
        'Weak brand presence on social media',
        'Low engagement and conversion rates',
        'Inconsistent content strategy',
      ],
      process: [
        { title: 'Market Research & Audit', description: 'Analyze your current position, competitors, and market opportunities' },
        { title: 'Strategy Development', description: 'Create a comprehensive marketing plan aligned with your business goals' },
        { title: 'Campaign Setup', description: 'Design and launch targeted campaigns across multiple channels' },
        { title: 'Content Creation', description: 'Develop engaging content that resonates with your target audience' },
        { title: 'Optimization & Reporting', description: 'Continuous improvement based on data-driven insights' },
      ],
      tools: [
        { name: 'Google Ads', icon: Chrome },
        { name: 'Meta Ads', icon: Chrome },
        { name: 'Analytics', icon: BarChart },
        { name: 'SEO Tools', icon: Chrome },
      ],
      outcomes: [
        '200-400% increase in organic traffic',
        '50-80% reduction in cost per acquisition',
        '3-5x improvement in ROI on ad spend',
        'Top 3 rankings for target keywords',
      ],
    },
    'web-development': {
      icon: Code,
      title: 'Web Design & Development',
      subtitle: 'Build High-Performance Websites & Web Applications',
      description: 'Create stunning, fast, and scalable web solutions that drive conversions. From corporate websites to complex web applications, we deliver custom solutions built with modern technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MTk4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      problems: [
        'Outdated website design and poor user experience',
        'Slow loading times affecting conversions',
        'Not mobile-friendly or responsive',
        'Difficult to update content and manage',
        'Poor SEO performance and visibility',
      ],
      process: [
        { title: 'Requirements Gathering', description: 'Understand your business needs, target audience, and project goals' },
        { title: 'Design & Prototyping', description: 'Create wireframes and visual designs for approval' },
        { title: 'Development', description: 'Build your website using modern frameworks and technologies' },
        { title: 'Testing & QA', description: 'Comprehensive testing across devices and browsers' },
        { title: 'Launch & Support', description: 'Deploy and provide ongoing maintenance and updates' },
      ],
      tools: [
        { name: 'React', icon: Code },
        { name: 'WordPress', icon: Globe },
        { name: 'Figma', icon: Figma },
        { name: 'AWS', icon: CloudIcon },
      ],
      outcomes: [
        '50-70% improvement in page load speed',
        '40-60% increase in mobile conversions',
        '100% responsive across all devices',
        'SEO-optimized and search-friendly',
      ],
    },
    'ui-ux-design': {
      icon: Palette,
      title: 'UI/UX Design',
      subtitle: 'Design Exceptional User Experiences',
      description: 'Create intuitive, beautiful interfaces that users love. Our design process combines user research, data analysis, and creative excellence to deliver experiences that convert visitors into customers.',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1Mjg5OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      problems: [
        'Confusing navigation and poor user flow',
        'High bounce rates and low engagement',
        'Inconsistent design across platforms',
        'Low conversion rates',
        'Lack of user research and testing',
      ],
      process: [
        { title: 'User Research', description: 'Study your target users, their needs, and behaviors' },
        { title: 'Information Architecture', description: 'Structure content and navigation for optimal usability' },
        { title: 'Wireframing', description: 'Create low-fidelity layouts to validate concepts' },
        { title: 'Visual Design', description: 'Design high-fidelity mockups with your brand identity' },
        { title: 'Prototyping & Testing', description: 'Build interactive prototypes and conduct usability tests' },
      ],
      tools: [
        { name: 'Figma', icon: Figma },
        { name: 'Adobe XD', icon: Palette },
        { name: 'User Testing', icon: Chrome },
        { name: 'Analytics', icon: BarChart },
      ],
      outcomes: [
        '30-50% increase in user engagement',
        '25-40% improvement in conversion rates',
        'Consistent brand experience',
        'Reduced user support requests',
      ],
    },
    'cybersecurity': {
      icon: Lock,
      title: 'Cybersecurity Solutions',
      subtitle: 'Protect Your Business with Enterprise-Grade Security',
      description: 'Safeguard your digital assets with comprehensive cybersecurity solutions. From security audits to threat detection, we help you build a robust security posture that protects your business and maintains customer trust.',
      image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUyMDYyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      problems: [
        'Vulnerable systems and outdated security',
        'Risk of data breaches and cyber attacks',
        'Non-compliance with security regulations',
        'Lack of security monitoring and response',
        'Employee security awareness gaps',
      ],
      process: [
        { title: 'Security Assessment', description: 'Comprehensive audit of your current security posture' },
        { title: 'Risk Analysis', description: 'Identify vulnerabilities and potential threats' },
        { title: 'Solution Design', description: 'Create a tailored security implementation plan' },
        { title: 'Implementation', description: 'Deploy security measures and protocols' },
        { title: 'Monitoring & Support', description: 'Continuous monitoring and incident response' },
      ],
      tools: [
        { name: 'Security Tools', icon: Shield },
        { name: 'Cloud Security', icon: CloudIcon },
        { name: 'Monitoring', icon: BarChart },
        { name: 'Compliance', icon: CheckCircle2 },
      ],
      outcomes: [
        '99.9% uptime and security',
        'Full compliance with industry standards',
        'Zero critical security incidents',
        'Protected customer data and trust',
      ],
    },
    'business-consulting': {
      icon: Briefcase,
      title: 'Business Strategy & Consulting',
      subtitle: 'Strategic Guidance for Digital Transformation',
      description: 'Navigate the complexities of digital transformation with expert guidance. We help businesses optimize processes, implement technology solutions, and achieve sustainable growth through strategic planning and execution.',
      image: 'https://images.unsplash.com/photo-1581093805071-a04e696db334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzY1MTg2Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      problems: [
        'Inefficient business processes',
        'Lack of digital transformation strategy',
        'Poor technology adoption and integration',
        'Resistance to organizational change',
        'Unclear growth roadmap',
      ],
      process: [
        { title: 'Business Analysis', description: 'Deep dive into your operations, challenges, and goals' },
        { title: 'Strategy Development', description: 'Create a comprehensive transformation roadmap' },
        { title: 'Planning & Design', description: 'Detail implementation plans and resource allocation' },
        { title: 'Change Management', description: 'Guide your team through the transformation process' },
        { title: 'Performance Tracking', description: 'Monitor progress and adjust strategy as needed' },
      ],
      tools: [
        { name: 'Analytics', icon: BarChart },
        { name: 'Project Tools', icon: Briefcase },
        { name: 'Cloud Platforms', icon: CloudIcon },
        { name: 'Data Tools', icon: Database },
      ],
      outcomes: [
        '30-50% improvement in efficiency',
        'Clear digital transformation roadmap',
        'Successful technology adoption',
        'Measurable business growth',
      ],
    },
    'graphics-video': {
      icon: Video,
      title: 'Graphics & Video Production',
      subtitle: 'Professional Design Services That Captivate',
      description: 'Bring your brand to life with stunning visuals and engaging video content. From brand identity to motion graphics, we create content that captures attention and drives engagement across all platforms.',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1Mjg5OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      problems: [
        'Weak or inconsistent brand identity',
        'Low-quality visual content',
        'Poor engagement on social media',
        'Lack of professional marketing materials',
        'Time-consuming content creation',
      ],
      process: [
        { title: 'Creative Brief', description: 'Understand your brand, goals, and target audience' },
        { title: 'Concept Development', description: 'Create initial concepts and design directions' },
        { title: 'Design & Production', description: 'Execute the approved designs with precision' },
        { title: 'Revisions', description: 'Refine based on your feedback' },
        { title: 'Delivery', description: 'Provide final files in all required formats' },
      ],
      tools: [
        { name: 'Adobe Suite', icon: Palette },
        { name: 'Figma', icon: Figma },
        { name: 'Video Tools', icon: Video },
        { name: 'Animation', icon: Video },
      ],
      outcomes: [
        'Professional brand identity',
        '3-5x increase in content engagement',
        'Consistent visual language',
        'High-quality marketing assets',
      ],
    },
    'cloud-server': {
      icon: Server,
      title: 'Cloud & Server Management',
      subtitle: 'Reliable Infrastructure & Cloud Solutions',
      description: 'Build and manage scalable, secure cloud infrastructure. We handle everything from setup and migration to monitoring and optimization across AWS, Azure, and Google Cloud platforms.',
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MTk4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      problems: [
        'High infrastructure costs',
        'Scalability limitations',
        'Server downtime and reliability issues',
        'Complex cloud migration',
        'Lack of monitoring and optimization',
      ],
      process: [
        { title: 'Infrastructure Audit', description: 'Assess current infrastructure and requirements' },
        { title: 'Cloud Strategy', description: 'Design optimal cloud architecture for your needs' },
        { title: 'Migration Planning', description: 'Create detailed migration plan with minimal downtime' },
        { title: 'Implementation', description: 'Execute migration and setup cloud infrastructure' },
        { title: 'Management & Optimization', description: 'Ongoing monitoring, maintenance, and cost optimization' },
      ],
      tools: [
        { name: 'AWS', icon: CloudIcon },
        { name: 'Azure', icon: CloudIcon },
        { name: 'Google Cloud', icon: CloudIcon },
        { name: 'Linux', icon: Server },
      ],
      outcomes: [
        '40-60% reduction in infrastructure costs',
        '99.9% uptime guarantee',
        'Seamless scalability',
        'Automated backup and recovery',
      ],
    },
  };

  const currentService = serviceData[service] || serviceData['digital-marketing'];
  const ServiceIcon = currentService.icon;

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

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => onNavigate('services')}
            className="flex items-center gap-2 text-gray-300 hover:text-[#00E5FF] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center">
                  <ServiceIcon size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl text-white">{currentService.title}</h1>
                </div>
              </div>
              <p className="text-2xl text-[#00E5FF] mb-6">{currentService.subtitle}</p>
              <p className="text-lg text-gray-300">{currentService.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src={currentService.image}
                alt={currentService.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl text-white mb-4">
              Problems We <span className="text-[#00E5FF]">Solve</span>
            </h2>
            <p className="text-xl text-gray-400">
              Common challenges we help businesses overcome
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentService.problems.map((problem: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1a1f2e]/50 to-[#0B0F17]/50 border border-red-500/20 rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                </div>
                <p className="text-gray-300">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#002B5B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-white mb-4">
              Our Step-by-Step <span className="text-[#00E5FF]">Process</span>
            </h2>
            <p className="text-xl text-gray-400">
              How we deliver exceptional results
            </p>
          </motion.div>

          <div className="space-y-6">
            {currentService.process.map((step: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl hover:border-[#00E5FF]/30 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center">
                    <span className="text-white text-lg">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-white mb-4">
              Tools & <span className="text-[#00E5FF]">Technologies</span>
            </h2>
            <p className="text-xl text-gray-400">
              Industry-leading platforms and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {currentService.tools.map((tool: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl text-center hover:border-[#00E5FF]/30 transition-all group"
              >
                <tool.icon size={48} className="text-[#00E5FF] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#002B5B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl text-white mb-4">
              Expected <span className="text-[#00E5FF]">Outcomes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Measurable impact on your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentService.outcomes.map((outcome: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/20 rounded-xl"
              >
                <CheckCircle2 size={24} className="text-[#00E5FF] flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] rounded-2xl text-center"
          >
            <h2 className="text-4xl text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss how we can help transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-[#0A84FF] rounded-lg hover:shadow-2xl transition-all"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => onNavigate('case-studies')}
                className="px-8 py-4 bg-white/10 border border-white/30 text-white rounded-lg hover:bg-white/20 transition-all"
              >
                View Success Stories
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}