import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Linkedin, Twitter, Instagram, CheckCircle, AlertCircle, MessageSquare, Calendar } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      // Method 1: Using Web3Forms (Recommended - Easier Setup)
      // Get your access key from https://web3forms.com by entering digital@cyberminars.com
      
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'b991962c-473b-4f63-ac0c-87604c02d668'); // Web3Forms access key for digital@cyberminars.com
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || 'Not provided');
      formDataToSend.append('company', formData.company || 'Not provided');
      formDataToSend.append('service', `Service: ${formData.service}`);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', `New Contact Form Submission from ${formData.name} - Cyberminars Digital`);
      formDataToSend.append('from_name', 'Cyberminars Digital Website');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setSubmitting(false);
        
        // Reset form after 4 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: '',
          });
        }, 4000);
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try emailing us directly at digital@cyberminars.com');
      setSubmitting(false);
      
      // Clear error after 5 seconds
      setTimeout(() => setError(''), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contact Cyberminars Digital
            </div>
            <h1 className="text-5xl md:text-6xl text-white mb-6">
              Get a Free Strategy Call{' '}
              <span className="bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] bg-clip-text text-transparent">
                - Let's Discuss Your Project
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us for web development, digital marketing, cybersecurity, cloud solutions, or IT consulting. Our team is ready to help your business grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Policy Section */}
      <section className="py-12 bg-gradient-to-b from-[#0B0F17] to-[#0d1520]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0d1520] border-2 border-[#00E5FF]/30 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center flex-shrink-0">
                <Calendar size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-2">Our Communication Policy</h3>
                <p className="text-gray-400">
                  To ensure focused delivery for our clients, we operate on a scheduled communication model.
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-16">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="text-white">Initial discussions</span> are handled via email or WhatsApp messages
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="text-white">Calls are scheduled</span> after requirement review
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="text-white">Business hours:</span> Mon–Fri, 10am–6pm IST
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#0A84FF]/10 border border-[#0A84FF]/30 rounded-lg ml-16">
              <p className="text-[#00E5FF] text-sm italic">
                This helps us provide better attention and structured solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl text-white mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Reach out to us through any of these channels. We&apos;re here to help!
                </p>
              </motion.div>

              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mb-4">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-white mb-2">Email Us</h3>
                <a href="mailto:digital@cyberminars.com" className="text-[#00E5FF] hover:underline">
                  digital@cyberminars.com
                </a>
                <p className="text-gray-400 text-sm mt-2">We&apos;ll respond within 24 hours</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mb-4">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-white mb-2">Call Us</h3>
                <a href="tel:+918058866838" className="text-[#00E5FF] hover:underline">
                  +91 80588 66838
                </a>
                <p className="text-gray-400 text-sm mt-2">Scheduled after initial contact</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  Techno Hub<br />
                  Jaipur, Rajasthan<br />
                  India
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0A84FF] to-[#00E5FF] flex items-center justify-center mb-4">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="text-white mb-2">Business Hours</h3>
                <p className="text-gray-300">
                  Monday - Friday: 10:00 AM - 6:00 PM IST<br />
                  Saturday: Closed<br />
                  Sunday: Closed
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] hover:border-[#00E5FF]/30 transition-all">
                    <Instagram size={20} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="p-8 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-2xl">
                <h2 className="text-3xl text-white mb-2">Send Us a Message</h2>
                <p className="text-gray-400 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B0F17] border border-[#00E5FF]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B0F17] border border-[#00E5FF]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B0F17] border border-[#00E5FF]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B0F17] border border-[#00E5FF]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-white mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0B0F17] border border-[#00E5FF]/20 rounded-lg text-white focus:border-[#00E5FF] focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="web-development">Web Design & Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="cybersecurity">Cybersecurity Solutions</option>
                      <option value="business-consulting">Business Strategy & Consulting</option>
                      <option value="graphics-video">Graphics & Video Production</option>
                      <option value="cloud-server">Cloud & Server Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0B0F17] border border-[#00E5FF]/20 rounded-lg text-white placeholder-gray-500 focus:border-[#00E5FF] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>

                  {error && (
                    <div className="flex items-center text-red-500">
                      <AlertCircle size={20} className="mr-2" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] text-white rounded-lg hover:shadow-lg hover:shadow-[#00E5FF]/50 transition-all flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle size={20} />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F17] to-[#002B5B]/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-96 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-[#00E5FF] mx-auto mb-4" />
                <h3 className="text-2xl text-white mb-2">Our Location</h3>
                <p className="text-gray-400">Techno Hub, Jaipur, Rajasthan, India</p>
                <p className="text-gray-500 text-sm mt-4">[Map Integration Placeholder]</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B0F17]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-r from-[#0A84FF] to-[#00E5FF] rounded-2xl text-center"
          >
            <h2 className="text-4xl text-white mb-6">
              Prefer a Quick Call?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book a free 30-minute consultation to discuss your project
            </p>
            <a 
              href="tel:+918058866838"
              className="px-10 py-5 bg-white text-[#0A84FF] font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg inline-flex items-center gap-2"
            >
              <Phone size={24} />
              Schedule a Call
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}