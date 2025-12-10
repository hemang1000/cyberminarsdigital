import { motion } from 'motion/react';
import { TrendingUp, Shield, Cloud, ShoppingCart, Building2, Smartphone } from 'lucide-react';

export function CaseStudies() {
  const caseStudies = [
    {
      title: 'E-commerce Platform Transformation',
      industry: 'Fashion Retail',
      icon: ShoppingCart,
      challenge: 'A growing fashion retailer was struggling with an outdated e-commerce platform that couldn\'t handle peak traffic, had poor mobile experience, and lacked modern payment integrations. Sales were stagnating despite strong brand recognition.',
      solution: 'We rebuilt their entire e-commerce platform using modern web technologies, implemented a mobile-first design, integrated multiple payment gateways, and optimized for performance. We also launched comprehensive SEO and PPC campaigns.',
      results: [
        '300% increase in online sales within 6 months',
        '85% improvement in mobile conversion rates',
        '60% reduction in cart abandonment',
        'Page load time reduced from 8s to 1.2s',
        '5x increase in organic search traffic'
      ],
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTIxMTQwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Enterprise Security Overhaul',
      industry: 'FinTech Startup',
      icon: Shield,
      challenge: 'A rapidly growing FinTech startup needed to achieve compliance with financial industry security standards before their Series A funding. They had multiple security vulnerabilities and no formal security framework in place.',
      solution: 'We conducted a comprehensive security audit, implemented enterprise-grade security protocols, set up 24/7 monitoring, achieved compliance certifications (ISO 27001, PCI DSS), and trained their team on security best practices.',
      results: [
        'Zero security incidents in 24 months',
        'Achieved ISO 27001 and PCI DSS compliance',
        'Successfully closed $10M Series A funding',
        '99.99% uptime maintained',
        'Passed all regulatory audits'
      ],
      image: 'https://images.unsplash.com/photo-1760199789455-49098afd02f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUyMDYyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-red-500 to-orange-400'
    },
    {
      title: 'Cloud Infrastructure Migration',
      industry: 'Manufacturing Company',
      icon: Cloud,
      challenge: 'A traditional manufacturing company was spending heavily on on-premise infrastructure with frequent downtime, high maintenance costs, and inability to scale during peak seasons. They needed a modern, cost-effective solution.',
      solution: 'We designed and executed a phased migration to AWS cloud infrastructure, implemented auto-scaling, set up disaster recovery systems, and optimized their entire IT operations. Zero-downtime migration was achieved.',
      results: [
        '60% reduction in IT infrastructure costs',
        '99.9% uptime improvement',
        'Seamless auto-scaling during peak periods',
        '70% faster deployment of new applications',
        'Complete disaster recovery capability'
      ],
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MTk4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Digital Marketing Campaign Success',
      industry: 'EdTech Platform',
      icon: TrendingUp,
      challenge: 'An online education platform was burning through marketing budget with poor ROI. Their customer acquisition cost was too high and they were struggling to reach their target audience effectively.',
      solution: 'We developed a comprehensive digital marketing strategy combining SEO content creation, targeted PPC campaigns, social media marketing, and influencer partnerships. Implemented advanced analytics to track and optimize performance.',
      results: [
        '400% increase in qualified leads',
        '65% reduction in cost per acquisition',
        '5x return on ad spend',
        'Organic traffic increased by 250%',
        'Social media engagement up 600%'
      ],
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NTIxMTQwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      title: 'Real Estate Portal Development',
      industry: 'Real Estate',
      icon: Building2,
      challenge: 'A real estate agency needed a modern property listing platform with advanced search, virtual tours, CRM integration, and lead management. Their existing website was generating minimal leads.',
      solution: 'Built a custom real estate portal with advanced property search, 3D virtual tours, integrated CRM, automated lead distribution, and mobile app. Implemented SEO optimization and local search strategies.',
      results: [
        '500% increase in online inquiries',
        '80% of leads now come through digital channels',
        '90% reduction in lead response time',
        'Average 15 minutes time-on-site',
        'Top 3 Google ranking for local searches'
      ],
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1Mjg5OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-indigo-500 to-blue-400'
    },
    {
      title: 'Mobile App Development & Launch',
      industry: 'Food Delivery',
      icon: Smartphone,
      challenge: 'A restaurant chain wanted to launch their own food delivery app to reduce dependency on third-party platforms and improve profit margins. They needed a solution quickly to compete in the market.',
      solution: 'Developed native iOS and Android apps with real-time order tracking, payment integration, loyalty program, and restaurant management dashboard. Launched comprehensive marketing campaign for app adoption.',
      results: [
        '50,000+ downloads in first 3 months',
        '35% of orders now through own app',
        'Increased profit margins by 25%',
        '4.8-star average rating',
        '40% repeat customer rate'
      ],
      image: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzY1MTk4OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-yellow-500 to-orange-400'
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
              Case Studies
            </div>
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Success <span className="bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results for real businesses. Discover how we&apos;ve helped companies across industries achieve their digital transformation goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-2xl overflow-hidden hover:border-[#00E5FF]/30 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/80 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center mb-3`}>
                        <study.icon size={32} className="text-white" />
                      </div>
                      <div className="px-4 py-2 bg-[#00E5FF]/20 backdrop-blur-sm border border-[#00E5FF]/30 rounded-lg">
                        <p className="text-[#00E5FF] text-sm">{study.industry}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-3xl text-white mb-6">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-lg text-[#00E5FF] mb-2">The Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg text-[#00E5FF] mb-2">Our Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg text-[#00E5FF] mb-3">Results</h4>
                      <div className="space-y-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 flex-shrink-0" />
                            <p className="text-gray-300">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s discuss how we can help you achieve similar results
            </p>
            <button className="px-10 py-5 bg-white text-[#0A84FF] rounded-lg hover:shadow-2xl transition-all text-lg">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
