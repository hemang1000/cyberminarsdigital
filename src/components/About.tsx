import { motion } from 'motion/react';
import { Target, Eye, Award, Users, TrendingUp, Shield, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import founderImage from 'figma:asset/128b7953a5462371606c128e5ba5f774e0fc453a.png';

type Page = 'home' | 'services' | 'about' | 'case-studies' | 'contact' | 'service-detail';

interface AboutProps {
  onNavigate?: (page: Page) => void;
}

export function About({ onNavigate }: AboutProps) {
  const values = [
    { icon: Award, title: 'Excellence', description: 'We deliver nothing short of exceptional quality in every project' },
    { icon: Shield, title: 'Integrity', description: 'Transparency and honesty guide all our business relationships' },
    { icon: Users, title: 'Collaboration', description: 'We work as an extension of your team to achieve shared goals' },
    { icon: TrendingUp, title: 'Innovation', description: 'Constantly evolving with the latest technologies and trends' },
  ];

  const team = [
    {
      name: 'Hemang Khurana',
      role: 'Founder & CEO',
      image: founderImage,
      bio: '15+ years in digital transformation and cybersecurity. Led technology initiatives for Fortune 500 companies.',
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1Mjg5OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Expert in operational excellence and client success. Managed 200+ projects with 98% client satisfaction rate.',
    },
  ];

  const stats = [
    { number: '200+', label: 'Completed Projects' },
    { number: '15+', label: 'Team Members' },
    { number: '14+', label: 'Industries Served' },
    { number: '5+', label: 'Years Experience' },
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
              About Cyberminars Digital
            </div>
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Leading Digital Agency Since 2020{' '}
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] bg-clip-text text-transparent">
                - Delivering IT & Marketing Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a full-service digital agency providing web development, digital marketing, cybersecurity, cloud solutions, and business consulting to companies across 4 countries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl"
              >
                <div className="text-4xl md:text-5xl bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#002B5B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-white mb-6">
                Our <span className="text-[#00E5FF]">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2020, Cyberminars Digital emerged from a simple vision: to help businesses harness the power of technology without the complexity. What started as a small team of passionate developers has grown into a full-service digital agency serving clients across industries.
                </p>
                <p>
                  Based in the vibrant tech ecosystem of Jaipur, we&apos;ve built our reputation on delivering exceptional results through a combination of technical expertise, strategic thinking, and genuine partnership with our clients.
                </p>
                <p>
                  Today, we&apos;re proud to be a trusted partner for startups, SMEs, and enterprises looking to transform their digital presence, strengthen their security posture, and accelerate their growth through technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1Mjg5OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Office"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg">
                To empower businesses of all sizes with cutting-edge digital solutions that drive growth, enhance security, and create lasting competitive advantages in an increasingly digital world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-2xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-3xl text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To be recognized as India&apos;s most trusted digital transformation partner, known for innovation, reliability, and measurable impact on our clients&apos; success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#002B5B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Our Core <span className="text-[#00E5FF]">Values</span>
            </h2>
            <p className="text-xl text-gray-400">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl hover:border-[#00E5FF]/30 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              Meet Our <span className="text-[#00E5FF]">Leadership</span>
            </h2>
            <p className="text-xl text-gray-400">
              Experienced professionals leading the way
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-2xl overflow-hidden hover:border-[#00E5FF]/30 transition-all group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl text-white mb-1">{member.name}</h3>
                  <p className="text-[#00E5FF] mb-4">{member.role}</p>
                  <p className="text-gray-400 mb-6">{member.bio}</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF]/20 transition-all">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] hover:bg-[#00E5FF]/20 transition-all">
                      <Mail size={20} />
                    </a>
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
              Join Us on Your Digital Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let&apos;s work together to transform your business and achieve extraordinary results
            </p>
            <button 
              onClick={() => onNavigate?.('contact')}
              className="px-10 py-5 bg-white text-[#0A84FF] rounded-lg hover:shadow-2xl transition-all text-lg font-semibold hover:scale-105 duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}