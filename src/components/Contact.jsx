import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, href: profile.socials.github },
  { name: 'LinkedIn', icon: FiLinkedin, href: profile.socials.linkedin },
  { name: 'Instagram', icon: FiInstagram, href: profile.socials.instagram },
  { name: 'Email', icon: FiMail, href: `mailto:${profile.socials.email}` },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 15 }
  }
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 70, damping: 15 }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${profile.socials.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="script-heading text-5xl md:text-6xl text-gold-400 mb-3">Contact</h2>
          <p className="text-text-muted max-w-md mx-auto text-sm">
            Tertarik untuk berkolaborasi? Jangan ragu untuk menghubungi saya.
          </p>
          <div className="w-16 h-0.5 bg-gold-400/40 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <form onSubmit={handleSubmit} className="card-white p-6 md:p-8">
              <div className="flex flex-col gap-4">
                <motion.div variants={leftItemVariants}>
                  <label htmlFor="contact-name" className="text-sm font-medium text-text-dark mb-2 block">Name</label>
                  <input
                    id="contact-name" type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-teal-900/5 border border-teal-800/15 text-text-dark placeholder-text-dark-muted text-sm focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div variants={leftItemVariants}>
                  <label htmlFor="contact-email" className="text-sm font-medium text-text-dark mb-2 block">Email</label>
                  <input
                    id="contact-email" type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-teal-900/5 border border-teal-800/15 text-text-dark placeholder-text-dark-muted text-sm focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>
                <motion.div variants={leftItemVariants}>
                  <label htmlFor="contact-message" className="text-sm font-medium text-text-dark mb-2 block">Message</label>
                  <textarea
                    id="contact-message" required rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-teal-900/5 border border-teal-800/15 text-text-dark placeholder-text-dark-muted text-sm focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all resize-none"
                    placeholder="Write your message..."
                  />
                </motion.div>
                <motion.div variants={leftItemVariants}>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn-gold w-full flex items-center justify-center gap-2 py-3 mt-2"
                  >
                    Send Message
                    <FiSend size={16} />
                  </motion.button>
                </motion.div>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col gap-5"
          >
            <motion.div variants={rightItemVariants} className="card-white p-6 transition-shadow hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center text-gold-500">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-dark">Email</h4>
                  <a href={`mailto:${profile.socials.email}`}
                    className="text-sm text-text-dark-muted hover:text-gold-500 transition-colors">
                    {profile.socials.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-800/10 flex items-center justify-center text-teal-800">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-dark">Location</h4>
                  <p className="text-sm text-text-dark-muted">Lampung, Indonesia</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={rightItemVariants} className="card-white p-6 transition-shadow hover:shadow-lg">
              <h4 className="text-sm font-semibold text-text-dark mb-4">Find me on</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target={name !== 'Email' ? '_blank' : undefined}
                    rel={name !== 'Email' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-3 rounded-xl text-text-dark-muted hover:text-gold-500 hover:bg-gold-400/5 transition-all duration-300 border border-transparent hover:border-gold-400/20"
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={rightItemVariants} className="bg-teal-800/30 rounded-2xl p-5 text-center border border-white/5">
              <p className="text-text-muted text-sm">
                Prefer direct message? DM me on any social platform 👋
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
