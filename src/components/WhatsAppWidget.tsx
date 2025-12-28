import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '918306446838'; // WhatsApp number without + or spaces
  
  const predefinedMessages = [
    { text: 'Hi! I want to discuss a project', emoji: '💼' },
    { text: 'I need help with Digital Marketing', emoji: '📈' },
    { text: 'I want to know about your services', emoji: '🛠️' },
    { text: 'I have a question', emoji: '❓' },
  ];

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleCustomMessage = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-gradient-to-br from-[#1a1f2e] to-[#0B0F17] border border-[#00E5FF]/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Cyberminars Digital</h3>
                  <p className="text-white/80 text-sm">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              <div className="bg-[#0B0F17] rounded-lg p-3 border border-[#00E5FF]/10">
                <p className="text-gray-300 text-sm">
                  👋 Hello! Welcome to Cyberminars Digital.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  How can we help you today? Choose a quick message or type your own:
                </p>
              </div>

              {/* Predefined Messages */}
              <div className="space-y-2">
                {predefinedMessages.map((msg, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleWhatsAppClick(msg.text)}
                    className="w-full text-left p-3 bg-gradient-to-r from-[#0A84FF]/10 to-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-lg hover:border-[#00E5FF]/40 transition-all text-white text-sm flex items-center gap-2"
                  >
                    <span className="text-lg">{msg.emoji}</span>
                    <span>{msg.text}</span>
                  </motion.button>
                ))}
              </div>

              {/* Custom Message Button */}
              <button
                onClick={handleCustomMessage}
                className="w-full p-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg hover:shadow-lg hover:shadow-[#25D366]/30 transition-all font-semibold flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Start Custom Chat
              </button>
            </div>

            {/* Footer */}
            <div className="bg-[#0B0F17] p-3 border-t border-[#00E5FF]/10">
              <p className="text-gray-500 text-xs text-center">
                We&apos;ll reply as soon as possible
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/50 transition-all group"
        aria-label="WhatsApp Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={28} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        )}

        {/* Pulse Animation */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-[#25D366] rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 right-24 z-40 bg-[#0B0F17] border border-[#00E5FF]/20 rounded-lg px-4 py-2 shadow-xl hidden md:block"
        >
          <p className="text-white text-sm whitespace-nowrap">
            💬 Need help? Chat with us!
          </p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#0B0F17] border-r border-b border-[#00E5FF]/20 rotate-[-45deg]" />
        </motion.div>
      )}
    </>
  );
}
